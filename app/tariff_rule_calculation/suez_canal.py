from sqlalchemy.orm import Session
from sqlalchemy import text
from typing import Any
from sqlalchemy.exc import SQLAlchemyError
from app.config import Config
from app.models.cargo import MaCargo
from app.models.txn_disbursement import TxnDisbursement
from app.models.txn_pda_vessel_details import PdaVesselDetails
import re

SCHEMA_NAME=Config.SCHEMA_NAME

def bracket_calculation_for_suez_canal(db: Session,cargo_qty: str,service_name: str,vessel: Any,rate_type: str,dto,services,disbursement_seq,disbursement_type='PDA',sub=None):
    from app.tariff_rule_calculation.all_calculation import get_vessel_attr

    try:
        vessel_attr = cargo_qty.strip()
        add_scnt=False
        formula_result=[p.strip() for p in re.split(r'[+\-*/]', sub["formula_result"])]
        if len(formula_result)>3:
            additional_attr=formula_result[-1]
            additional_value=get_vessel_attr(vessel, additional_attr)
            add_scnt=True
        try:
            qty_value = float(get_vessel_attr(vessel, vessel_attr) or 0)
        except (TypeError, ValueError):
            qty_value = 0

        if qty_value <= 0:
            return []

        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        rate_col = "laden" if rate_type.lower() == "laden" else "ballast"

        query = f"""
            SELECT bracket, min_range, max_range, {rate_col},vessel_type
            FROM {SCHEMA_NAME}.{table_name}
            WHERE port = :port_id
             AND (
                vessel_type LIKE '%' || :vessel_type || '%'
                OR (
                    vessel_type = 'Crude Oil Tanker'
                    AND NOT EXISTS (
                        SELECT 1
                        FROM {SCHEMA_NAME}.{table_name} t2
                        WHERE port = port
                        AND vessel_type LIKE '%' || :vessel_type || '%'
                    )
                )
            )
            ORDER BY COALESCE(min_range, 0)
        """
        try:
            vessel_type=dto.cargo.type
        except Exception as e:
            cargo_obj=db.query(MaCargo).filter(MaCargo.cargo_id == dto.cargo_id).first()
            vessel_type=cargo_obj.type
        rows = db.execute(text(query), {"port_id": dto.port_id,"vessel_type": vessel_type }).fetchall()

        if not rows:
            query = f"""
                SELECT bracket, min_range, max_range, {rate_col},vessel_type
                FROM {SCHEMA_NAME}.{table_name}
                WHERE country = :country_id
                 AND (
                vessel_type LIKE '%' || :vessel_type || '%'
                OR (
                    vessel_type = 'Crude Oil Tanker'
                    AND NOT EXISTS (
                        SELECT 1
                        FROM {SCHEMA_NAME}.{table_name} t2
                        WHERE country = country
                        AND vessel_type LIKE '%' || :vessel_type || '%'
                    )
                )
            )
                ORDER BY COALESCE(min_range, 0)
            """
            rows = db.execute(text(query), {"country_id": dto.country_id,"vessel_type":vessel_type}).fetchall()

        breakdown = []
        cursor = 1.0

        for idx, row in enumerate(rows, start=1):
            bracket_name, min_q, max_q, rate, vessel_type = row

            min_q = 1 if not min_q or int(min_q) <= 0 else int(min_q)
            max_q = None if not max_q else int(max_q)
            rate = float(rate or 0)
            bracket_name=bracket_name
            if cursor > qty_value:
                break

            start = max(cursor, min_q)
            end = min(max_q or float(qty_value), float(qty_value))
            take = max(0.0, end - start + 1)
            take=round(take,2)
            

            if take > 0:
                # Default name from DB
                display_name = bracket_name
                consumed_upto = cursor + take - 1

                # Rename last partial bracket
                if max_q and consumed_upto < max_q and consumed_upto == int(qty_value):
                    display_name = "The Rest"
                if add_scnt:
                    additional_value = float(additional_value)
                    sub_total=round(take * rate * additional_value, 2)
                    formula_inputs=f"{take} * {rate} *{additional_value}"
                else:
                    sub_total=round(take * rate, 2)
                    formula_inputs=f"{take} * {rate}"
                breakdown.append({
                    "name": display_name,
                    "unique_key": f"{service_name}|{rate_type.upper()}",
                    "basic_value": f"Bracket:{vessel_attr}| {rate_type.upper()}",
                    "movement": "NA:1:NA:NA",
                    "calculated_basic_value": take,
                    "tariff_percent": f"{rate:.2f}",
                    "formula_result": "Basic Value * Movement * Tariff %",
                    "formula_inputs": formula_inputs,
                    "optional": "Y" if sub["optional"]== "Y" else "N",
                    "operational_flag": "+",
                    "hide": "Y",
                    "sub_total": sub_total,
                    "is_bracket_item": "true"
                })

            cursor = end + 0.01

        vessel_type=vessel_type if vessel_type else "Crude Oil Tanker"
        #fetch the old scnt value
        old_scnt=get_vessel_attr(vessel, "scnt")
        try:
            if disbursement_seq:
                disbursement_seq=disbursement_seq if isinstance(disbursement_seq,int) else disbursement_seq[3::]
                dis_obj = db.query(TxnDisbursement).filter(
                    TxnDisbursement.vsl_id == vessel.vessel_id,
                    TxnDisbursement.disbursement_seq < disbursement_seq  
                ).order_by(TxnDisbursement.disbursement_seq.desc()).first()
                if dis_obj:
                    col_type = 'vsl_dtls' if disbursement_type.lower() == 'pda' else 'fda_vsl_dtls'
                    vessel_obj = db.query(getattr(PdaVesselDetails, col_type))\
                                .filter(PdaVesselDetails.pda_vsl_id == dis_obj.pda_vsl_id)\
                                .first()
                    if vessel_obj:
                        vessel_data = vessel_obj[0]
                        old_scnt = vessel_data['additional_properties']['SCNT']

            else:
                old_scnt = get_vessel_attr(vessel, "scnt")
        except Exception as e:
            old_scnt = get_vessel_attr(vessel, "scnt")
        for service in services:
            if service_name.lower() in service['service'].lower():
                changed_text = "(Value Changed)" if float(old_scnt) != float(qty_value) else ""
                # Build the new SCNT message
                new_msg = f"The considered cargo for the calculation is {vessel_type} '\n' the previous SCNT value was {old_scnt} and the current SCNT is {qty_value} {changed_text}"

                if service.get('info_msg'):
                    info_msg = service['info_msg']
                    # Split by lines or ', ' to isolate messages, remove old SCNT message
                    parts = [part.strip() for part in info_msg.split('\n')]
                    # Keep only parts that do NOT contain 'The considered cargo for the calculation is'
                    parts = [part for part in parts if 'The considered cargo for the calculation is' not in part and ' the previous SCNT value was' not in part]
                    # Rebuild info_msg and append the new SCNT message
                    service['info_msg'] = "\n".join(parts).rstrip() + ("\n" if parts else "") + new_msg
                else:
                    service['info_msg'] = new_msg
        return breakdown

    except SQLAlchemyError as e:
        db.rollback()
        print(f"Database error in bracket calculation: {e}")
        return []
    except Exception as e:
        print(f"Unexpected error in bracket calculation: {e}")
        return []
    

def reference_calculation_egypt(services, vessel, service_name, sub_name, db,dto,current_sub=None):
    from app.tariff_rule_calculation.all_calculation import calculate_subservice
    try:
        # Locate the parent service
        ref_service = next(
            (s for s in services if s.get("service", "").lower() == service_name.lower()),
            None
        )

        if ref_service:
            # Locate the sub-service
            ref_sub = next(
                (ss for ss in ref_service.get("subService", [])
                 if isinstance(ss, dict) and ss.get("name", "").lower() == sub_name.lower()),
                None
            )
            
            if not ref_sub:
                # Try matching by unique_key if name match fails
                matching_subs = [
                    ss for ss in ref_service.get("subService", [])
                    if isinstance(ss, dict) and sub_name.lower() in ss.get("unique_key", "").lower()
                ]
                if matching_subs:
                    # Find base_sub (without is_bracket_item flag)
                    ref_sub = next(
                        (ss for ss in reversed(matching_subs) if ss.get("is_bracket_item") != "true"),
                        matching_subs[-1]
                    )
           
            if ref_sub and ref_sub.get("sub_total", 0) > 0 and ((ref_sub.get("optional", '')=='N')or (ref_sub.get("optional", '')=='Y' and ref_sub.get("hide", '')=='Y')):
                # If referenced sub is hidden, hide current sub too
                if current_sub and ref_sub.get("hide") == "Y":
                    current_sub.update({"hide": "Y"})
                # Reference found with a calculated value
                return {
                    "value": ref_sub.get("sub_total", 0),
                    "formula": f"{service_name}->{sub_name}"
                }

            elif ref_sub and ((ref_sub.get("optional", '')=='N')or (ref_sub.get("optional", '')=='Y' and ref_sub.get("hide", '')=='Y')):
                # Reference found but not yet calculated — trigger calculation
                calculated = calculate_subservice(ref_sub, vessel, db, services, current_service=ref_service,dto=dto)
                if calculated and isinstance(calculated, list) and len(calculated) > 0:
                    base_result = next(
                        (c for c in reversed(calculated) if c.get("is_bracket_item") != "true"),
                        calculated[0]
                    )
                    # If referenced sub is hidden, hide current sub too
                    if current_sub and base_result.get("hide") == "Y":
                        current_sub.update({"hide": "Y"})
                    return {
                        "value": base_result.get("sub_total", 0),
                        "formula": f"{service_name}->{sub_name}"
                    }
            else:
                # Reference not found or not applicable
                return {"value": 0.0, "formula": f"{service_name}->{sub_name}"}

    except Exception as e:
        print(f"DEBUG Exception in reference lookup (tariff): {e}")

    return {"value": 0.0, "formula": f"{service_name}->{sub_name}"}

# def bracket_calculation_for_suez_canal(db: Session,cargo_qty: str,service_name: str,vessel: Any,rate_type: str,dto,services):
#     from app.tariff_rule_calculation.all_calculation import get_vessel_attr
#     try:
#         vessel_attr = cargo_qty.strip()      
#         qty_value = float(get_vessel_attr(vessel, vessel_attr) or 0)

#         if qty_value <= 0:
#             return []

#         table_name = f"txn_{service_name.lower().replace(' ', '_')}"
#         rate_col = "laden" if rate_type.lower() == "laden" else "ballast"

#         query = f"""
#             SELECT bracket, min_range, max_range, {rate_col},vessel_type
#             FROM {SCHEMA_NAME}.{table_name}
#             WHERE port = :port_id
#              AND (
#                 vessel_type LIKE '%' || :vessel_type || '%'
#                 OR (
#                     vessel_type = 'Crude Oil Tanker'
#                     AND NOT EXISTS (
#                         SELECT 1
#                         FROM {SCHEMA_NAME}.{table_name} t2
#                         WHERE port = port
#                         AND vessel_type LIKE '%' || :vessel_type || '%'
#                     )
#                 )
#             )
#             ORDER BY COALESCE(min_range, 0)
#         """
#         try:
#             vessel_type=dto.cargo.type
#         except Exception as e:
#             cargo_obj=db.query(MaCargo).filter(MaCargo.cargo_id == dto.cargo_id).first()
#             vessel_type=cargo_obj.type
#         rows = db.execute(text(query), {"port_id": dto.port_id,"vessel_type": vessel_type }).fetchall()

#         if not rows:
#             query = f"""
#                 SELECT bracket, min_range, max_range, {rate_col},vessel_type
#                 FROM {SCHEMA_NAME}.{table_name}
#                 WHERE country = :country_id
#                  AND (
#                 vessel_type LIKE '%' || :vessel_type || '%'
#                 OR (
#                     vessel_type = 'Crude Oil Tanker'
#                     AND NOT EXISTS (
#                         SELECT 1
#                         FROM {SCHEMA_NAME}.{table_name} t2
#                         WHERE country = country
#                         AND vessel_type LIKE '%' || :vessel_type || '%'
#                     )
#                 )
#             )
#                 ORDER BY COALESCE(min_range, 0)
#             """
#             rows = db.execute(text(query), {"country_id": dto.country_id,"vessel_type":vessel_type}).fetchall()

#         remaining = qty_value
#         breakdown: list[dict] = []

#         for idx, (slab_name, min_q, max_q, rate,vessel_type) in enumerate(rows):
#             rate = float(rate or 0)

#             if remaining <= 0:
#                 break

#             if max_q is None:
#                 take = remaining

#             else:
#                 capacity = (
#                     int(max_q) - int(min_q)
#                     if min_q == 0
#                     else int(max_q) - int(min_q) + 1
#                 )

#                 if remaining < capacity:
#                     continue

#                 take = capacity

#             if take <= 0:
#                 continue

#             breakdown.append({
#                 "name": slab_name,
#                 "unique_key": f"{service_name}|{rate_type.upper()}",
#                 "basic_value": f"Bracket:{vessel_attr}| {rate_type.upper()}",
#                 "movement": "NA:1:NA:NA",
#                 "calculated_basic_value": take,
#                 "tariff_percent": f"{rate:.2f}",
#                 "formula_result": "Basic Value * Movement * Tariff %",
#                 "formula_inputs": f"{take} * {rate}",
#                 "optional": "N",
#                 "operational_flag": "+",
#                 "hide": "Y",
#                 "sub_total": round(take * rate, 2),
#                 "is_bracket_item": "true"
#             })
#             vessel_type=vessel_type if vessel_type else "Crude Oil Tanker"
#             remaining -= take
#             if remaining <= 0:
#                 break
#         for service in services:
#             if service_name.lower() in service['service'].lower():
#                 msg = f"The considered cargo for the calculation is {vessel_type}"
#                 if not service.get('info_msg'):
#                     service['info_msg'] = msg
#                 else:
#                     if msg not in service['info_msg']:
#                         service['info_msg'] += f"\n , {msg}"
#         return breakdown

#     except SQLAlchemyError as e:
#         db.rollback()
#         print(f"Database error in bracket calculation: {e}")
#         return []
#     except Exception as e:
#         print(f"Unexpected error in bracket calculation: {e}")
#         return []
    