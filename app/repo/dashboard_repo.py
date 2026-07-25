from sqlalchemy.orm import Session
from sqlalchemy import func, desc, text
from app.models.vw_fda_processing_details import VwFdaProcessingDetails
from app.models.company import MaCompany
from app.models.txn_disbursement import TxnDisbursement
from app.models.excel_disbursements import (
    ExcelVessel,
    ExcelCountry,
    ExcelPort,
    ExcelDisbursementsIndividualItemsCost,
    ExcelDisbursementsPaidAmountsAnalysis,
    ExcelDisbursementsTotalPortCost
)
from typing import List, Optional
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")


class DashboardRepository:
    
    @staticmethod
    def get_dashboard_summary(client_ids: List[int], from_date, to_date, data_source: Optional[str] = "all", db: Session = None):
        """
        Get dashboard summary based on client_ids and data_source.
        Client ID 75 represents EIGER Shipping SA (mapped to excel_data_dev schema).
        """
        is_eiger = False
        if client_ids:
            try:
                is_eiger = 75 in [int(x) for x in client_ids if str(x).isdigit()]
            except (ValueError, TypeError):
                is_eiger = False

        ds = (data_source or "all").lower()

        if is_eiger or ds == "excel":
            try:
                with db.begin_nested():
                    v_cnt = db.query(func.count(func.distinct(ExcelVessel.vessel_name))).scalar() or 0
                    c_cnt = db.query(func.count(func.distinct(ExcelCountry.country_name))).scalar() or 0
                    p_cnt = db.query(func.count(func.distinct(ExcelPort.port_name))).scalar() or 0
                    tot_fda = db.query(func.count(ExcelDisbursementsTotalPortCost.id)).scalar() or 0
                    tot_amt = db.query(func.sum(ExcelDisbursementsTotalPortCost.final_amt)).scalar() or 0.0
                    return {
                        "countries": c_cnt,
                        "ports": p_cnt,
                        "vessels": v_cnt,
                        "total_pda": 0,
                        "completed_pda": 0,
                        "under_process_pda": 0,
                        "total_fda": tot_fda,
                        "completed_fda": tot_fda,
                        "under_process_fda": 0,
                        "yet_to_process": 0,
                        "pdasavings": 0.0,
                        "fdasavings": 0.0,
                        "overallsavingsamount": 0.0,
                        "fda_total_amount": float(tot_amt),
                        "percentage_savings": 0.0,
                        "percentage_savings_fda": 0.0,
                        "percentage_savings_pda": 0.0,
                        "pda_total_amount": 0.0,
                        "pda_completed_no_fda": 0
                    }
            except Exception:
                db.rollback()
                return {}

        query = text(f"""
            SELECT *
            FROM {SCHEMA_NAME}.fn_dashboard_summary(:client_ids, :from_date, :to_date)
        """)
        
        result = db.execute(
            query,
            {
                "client_ids": client_ids,
                "from_date": from_date,
                "to_date": to_date
            }
        ).mappings().first()
        
        summary_dict = dict(result) if result else {}

        if ds == "standard" or (client_ids and not is_eiger):
            return summary_dict

        # If data_source is 'all' and no client specified, aggregate metrics from excel_data_dev tables safely
        try:
            with db.begin_nested():
                excel_vessels_count = db.query(func.count(func.distinct(ExcelVessel.vessel_name))).scalar() or 0
                excel_countries_count = db.query(func.count(func.distinct(ExcelCountry.country_name))).scalar() or 0
                excel_ports_count = db.query(func.count(func.distinct(ExcelPort.port_name))).scalar() or 0
                excel_records_count = db.query(func.count(ExcelDisbursementsTotalPortCost.id)).scalar() or 0
                excel_total_cost = db.query(func.sum(ExcelDisbursementsTotalPortCost.final_amt)).scalar() or 0.0

                if excel_vessels_count and "vessels" in summary_dict:
                    summary_dict["vessels"] = (summary_dict.get("vessels") or 0) + excel_vessels_count
                if excel_countries_count and "countries" in summary_dict:
                    summary_dict["countries"] = (summary_dict.get("countries") or 0) + excel_countries_count
                if excel_ports_count and "ports" in summary_dict:
                    summary_dict["ports"] = (summary_dict.get("ports") or 0) + excel_ports_count
                if excel_records_count and "total_fda" in summary_dict:
                    summary_dict["total_fda"] = (summary_dict.get("total_fda") or 0) + excel_records_count
                    summary_dict["completed_fda"] = (summary_dict.get("completed_fda") or 0) + excel_records_count
                if excel_total_cost and "fda_total_amount" in summary_dict:
                    summary_dict["fda_total_amount"] = float(summary_dict.get("fda_total_amount") or 0.0) + float(excel_total_cost)
        except Exception:
            db.rollback()

        return summary_dict
    
    @staticmethod
    def get_client_ids_by_names(client_names: List[str], db: Session):
        """
        Fetch client IDs by names.
        """
        return db.query(MaCompany.company_id).filter(
            MaCompany.company_name.in_(client_names),
            MaCompany.company_type_id == 2,
            MaCompany.status == 'Y'
        ).all()
    
    @staticmethod
    def get_fda_stats(clientId: List[int] = None, db: Session = None):
        """
        Get FDA statistics (min, avg, max amounts).
        """
        query = db.query(
            func.min((VwFdaProcessingDetails.fda_amount)).label('min_amount'),
            func.avg((VwFdaProcessingDetails.fda_amount)).label('avg_amount'),
            func.max((VwFdaProcessingDetails.fda_amount)).label('max_amount'),
            func.count(VwFdaProcessingDetails.client_id).label('total_count')
        )
        
        if clientId:
            query = query.filter(VwFdaProcessingDetails.client_id.in_(clientId))
        
        return query.first()
    

    @staticmethod
    def get_fda_processing_details(data_request, db: Session):
        """
        Get FDA processing details with pagination directly querying tables + excel_data_dev.
        """
        is_all_records = data_request.pageSize <= 0 or data_request.pageSize == -1
        if not is_all_records and (data_request.page < 1 or data_request.pageSize < 1):
            raise ValueError("Page number and page size must be greater than 0")

        has_eiger = False
        has_other = False
        if data_request.clientId:
            for cid in data_request.clientId:
                if str(cid) == "75":
                    has_eiger = True
                else:
                    has_other = True

        if has_eiger and not has_other:
            ds = "excel"
        elif has_other and not has_eiger:
            ds = "standard"
        else:
            ds = (getattr(data_request, 'dataSource', None) or getattr(data_request, 'data_source', None) or "all").lower()

        offset = 0 if is_all_records else (data_request.page - 1) * data_request.pageSize
        params = {}

        where_clauses = ["(pda.disbursement_seq IS NOT NULL OR fda.disbursement_seq IS NOT NULL)"]

        if data_request.clientId:
            try:
                client_ids = [int(x) for x in data_request.clientId]
            except (ValueError, TypeError):
                client_ids = list(data_request.clientId)
            where_clauses.append("td.client_id = ANY(:client_ids)")
            params["client_ids"] = client_ids

        if getattr(data_request, 'monthRange', None):
            if data_request.monthRange.from_date:
                where_clauses.append("COALESCE(fda.fda_etd, pda.pda_etd)::date >= :from_date::date")
                params["from_date"] = data_request.monthRange.from_date
            if data_request.monthRange.to_date:
                where_clauses.append("COALESCE(fda.fda_etd, pda.pda_etd)::date <= :to_date::date")
                params["to_date"] = data_request.monthRange.to_date

        if getattr(data_request, 'yearRange', None):
            if data_request.yearRange.from_year:
                where_clauses.append("EXTRACT(YEAR FROM COALESCE(fda.fda_etd, pda.pda_etd)) >= :from_year")
                params["from_year"] = int(data_request.yearRange.from_year)
            if data_request.yearRange.to_year:
                where_clauses.append("EXTRACT(YEAR FROM COALESCE(fda.fda_etd, pda.pda_etd)) <= :to_year")
                params["to_year"] = int(data_request.yearRange.to_year)

        if data_request.tableFilter:
            tf = data_request.tableFilter
            if tf.vessel:
                where_clauses.append("COALESCE(vsl.fda_vsl_dtls ->> 'name', vsl.vsl_dtls ->> 'name') = ANY(:vessel_names)")
                params["vessel_names"] = list(tf.vessel)
            if tf.country:
                where_clauses.append("country.name = ANY(:country_names)")
                params["country_names"] = list(tf.country)
            if tf.port:
                where_clauses.append("port.name = ANY(:port_names)")
                params["port_names"] = list(tf.port)
            if tf.loa:
                if tf.loa.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric) >= :loa_min")
                    params["loa_min"] = tf.loa.min_value
                if tf.loa.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric) <= :loa_max")
                    params["loa_max"] = tf.loa.max_value
            if tf.nrt:
                if tf.nrt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric) >= :nrt_min")
                    params["nrt_min"] = tf.nrt.min_value
                if tf.nrt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric) <= :nrt_max")
                    params["nrt_max"] = tf.nrt.max_value
            if tf.grt:
                if tf.grt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric) >= :grt_min")
                    params["grt_min"] = tf.grt.min_value
                if tf.grt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric) <= :grt_max")
                    params["grt_max"] = tf.grt.max_value
            if tf.rgrt:
                if tf.rgrt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric) >= :rgrt_min")
                    params["rgrt_min"] = tf.rgrt.min_value
                if tf.rgrt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric) <= :rgrt_max")
                    params["rgrt_max"] = tf.rgrt.max_value

        where_str = " AND ".join(where_clauses)

        base_sql = f"""
            FROM {SCHEMA_NAME}.txn_disbursement td
            LEFT JOIN {SCHEMA_NAME}.txn_pda pda 
                ON td.disbursement_seq = pda.disbursement_seq 
               AND (pda.state IS NULL OR pda.state <> 'D')
            LEFT JOIN {SCHEMA_NAME}.txn_fda fda 
                ON td.disbursement_seq = fda.disbursement_seq 
               AND (fda.state IS NULL OR fda.state <> 'D')
            LEFT JOIN {SCHEMA_NAME}.txn_pda_vessel_details vsl 
                ON td.pda_vsl_id = vsl.pda_vsl_id
            LEFT JOIN {SCHEMA_NAME}.ma_country country 
                ON td.country_id = country.country_id
            LEFT JOIN {SCHEMA_NAME}.ma_port port 
                ON td.port_id = port.port_id
            WHERE {where_str}
        """

        count_query = text(f"SELECT COUNT(DISTINCT td.disbursement_seq) {base_sql}")
        standard_count = db.execute(count_query, params).scalar() or 0

        data_query = text(f"""
            SELECT 
                td.disbursement_seq,
                td.client_id,
                COALESCE(fda.fda_etd, pda.pda_etd) AS etd,
                COALESCE(
                    vsl.fda_vsl_dtls ->> 'name',
                    vsl.vsl_dtls ->> 'name'
                ) AS vessel_name,
                td.country_id,
                country.name AS country_name,
                td.port_id,
                port.name AS port_name,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric
                ) AS loa,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric
                ) AS grt,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric
                ) AS rgrt,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric
                ) AS nrt,
                td.loss_prevention_pda,
                td.loss_prevention_fda,
                CASE 
                    WHEN td.loss_prevention_pda IS NULL AND td.loss_prevention_fda IS NULL THEN td.total_loss_prevented
                    ELSE (COALESCE(td.loss_prevention_pda, 0) + COALESCE(td.loss_prevention_fda, 0))
                END AS total_loss_prevented,
                td.loss_prevented_reason,
                CASE
                    WHEN fda.disbursement_seq IS NULL THEN NULL::double precision
                    WHEN (fda.state = 'D') THEN NULL::double precision
                    WHEN (upper(fda.fda_currency_from) = 'USD') THEN (((fda.portagent_fda_data -> 'services') ->> 'grand_total'))::double precision
                    WHEN (upper(fda.fda_currency_to) = 'USD') THEN (round(((((fda.portagent_fda_data -> 'services') ->> 'grand_total'))::numeric * fda.fda_roe::numeric), 2))::double precision
                    WHEN (upper(fda.pmt_curr_to) = 'USD') THEN fda.portagent_fda_amount
                    ELSE NULL::double precision
                END AS fda_amount,
                CASE
                    WHEN pda.disbursement_seq IS NULL THEN NULL::double precision
                    WHEN (upper(pda.pda_currency_from) = 'USD') THEN (((pda.portagent_pda_data -> 'services') ->> 'grand_total'))::double precision
                    WHEN (upper(pda.pda_currency_to) = 'USD') THEN (round(((((pda.portagent_pda_data -> 'services') ->> 'grand_total'))::numeric * pda.pda_roe::numeric), 2))::double precision
                    WHEN (upper(pda.pmt_curr_to) = 'USD') THEN pda.portagent_pda_amount
                    ELSE NULL::double precision
                END AS pda_amount,
                CASE
                    WHEN fda.disbursement_seq IS NULL THEN NULL::text
                    WHEN (fda.state = 'D') THEN ''
                    ELSE fda.manual_fda_amount
                END AS manual_fda_amount,
                pda.manual_pda_amount::text AS manual_pda_amount,
                td.advance_amount_remitted,
                td.outstanding_balance,
                td.remark
            {base_sql}
            ORDER BY etd DESC NULLS LAST
            {"OFFSET :offset LIMIT :limit" if not is_all_records else ""}
        """)

        if not is_all_records:
            params["offset"] = offset
            params["limit"] = data_request.pageSize

        raw_std = list(db.execute(data_query, params).mappings().all())
        standard_records = [dict(r, data_source="standard") for r in raw_std]

        # Also query excel_data_dev records safely
        excel_records = []
        excel_count = 0
        try:
            with db.begin_nested():
                q = db.query(
                    ExcelDisbursementsTotalPortCost.id.label("disbursement_seq"),
                    ExcelVessel.vessel_name,
                    ExcelCountry.country_name,
                    ExcelPort.port_name,
                    ExcelDisbursementsTotalPortCost.arrival_local.label("etd"),
                    ExcelDisbursementsTotalPortCost.advance_amt.label("pda_amount"),
                    ExcelDisbursementsTotalPortCost.final_amt.label("fda_amount"),
                    ExcelDisbursementsTotalPortCost.grt,
                    ExcelDisbursementsTotalPortCost.dwt,
                    ExcelDisbursementsTotalPortCost.vendor_short_name.label("agent"),
                    ExcelDisbursementsTotalPortCost.cargo_grades.label("cargo_grade"),
                    ExcelDisbursementsTotalPortCost.counterparty_short_name,
                    ExcelDisbursementsTotalPortCost.voyage_no,
                    ExcelDisbursementsTotalPortCost.vessel_type,
                    ExcelDisbursementsTotalPortCost.port_func,
                    ExcelDisbursementsTotalPortCost.departure_local,
                    ExcelDisbursementsTotalPortCost.port_days,
                    ExcelDisbursementsTotalPortCost.imo_no,
                    ExcelDisbursementsTotalPortCost.advance_amount_remitted,
                    ExcelDisbursementsTotalPortCost.outstanding_balance,
                    ExcelDisbursementsTotalPortCost.remark
                ).outerjoin(ExcelVessel, ExcelDisbursementsTotalPortCost.vessel_id == ExcelVessel.id)\
                 .outerjoin(ExcelCountry, ExcelDisbursementsTotalPortCost.country_id == ExcelCountry.id)\
                 .outerjoin(ExcelPort, ExcelDisbursementsTotalPortCost.port_id == ExcelPort.id)

                if data_request.tableFilter:
                    tf = data_request.tableFilter
                    if tf.vessel:
                        q = q.filter(ExcelVessel.vessel_name.in_(tf.vessel))
                    if tf.country:
                        q = q.filter(ExcelCountry.country_name.in_(tf.country))
                    if tf.port:
                        q = q.filter(ExcelPort.port_name.in_(tf.port))
                    if tf.vessel_type:
                        q = q.filter(ExcelDisbursementsTotalPortCost.vessel_type.in_(tf.vessel_type))
                    if tf.agent:
                        q = q.filter(ExcelDisbursementsTotalPortCost.vendor_short_name.in_(tf.agent))
                    if tf.cargo_grade:
                        q = q.filter(ExcelDisbursementsTotalPortCost.cargo_grades.in_(tf.cargo_grade))
                    if tf.counterparty_short_name:
                        q = q.filter(ExcelDisbursementsTotalPortCost.counterparty_short_name.in_(tf.counterparty_short_name))

                excel_count = q.count()
                
                def map_excel_row(r):
                    return {
                        "disbursement_seq": r.disbursement_seq,
                        "client_id": None,
                        "etd": r.etd,
                        "vessel_name": r.vessel_name or r.imo_no or f"Vessel-{r.disbursement_seq}",
                        "country_id": None,
                        "country_name": r.country_name or "N/A",
                        "port_id": None,
                        "port_name": r.port_name or "N/A",
                        "loa": None,
                        "grt": float(r.grt) if r.grt is not None else None,
                        "rgrt": None,
                        "nrt": None,
                        "loss_prevention_pda": None,
                        "loss_prevention_fda": None,
                        "total_loss_prevented": None,
                        "loss_prevented_reason": None,
                        "fda_amount": abs(float(r.fda_amount)) if r.fda_amount is not None else 0.0,
                        "pda_amount": abs(float(r.pda_amount)) if r.pda_amount is not None else 0.0,
                        "manual_fda_amount": None,
                        "manual_pda_amount": None,
                        "voyage_no": str(r.voyage_no) if r.voyage_no else None,
                        "vessel_type": r.vessel_type,
                        "port_func": r.port_func,
                        "arrival_local": r.etd.isoformat() if r.etd else None,
                        "departure_local": r.departure_local.isoformat() if r.departure_local else None,
                        "port_days": float(r.port_days) if r.port_days is not None else None,
                        "agent": r.agent,
                        "cargo_grade": r.cargo_grade,
                        "counterparty_short_name": r.counterparty_short_name,
                        "imo_no": r.imo_no,
                        "advance_amt": abs(float(r.pda_amount)) if r.pda_amount is not None else None,
                        "final_amt": abs(float(r.fda_amount)) if r.fda_amount is not None else None,
                        "advance_amount_remitted": float(r.advance_amount_remitted) if r.advance_amount_remitted is not None else None,
                        "outstanding_balance": float(r.outstanding_balance) if r.outstanding_balance is not None else None,
                        "remark": r.remark,
                        "data_source": "excel"
                    }

                if ds == "excel":
                    excel_query_obj = q.order_by(desc(ExcelDisbursementsTotalPortCost.arrival_local))
                    if not is_all_records:
                        excel_query_obj = excel_query_obj.offset(offset).limit(data_request.pageSize)
                    excel_fetched = excel_query_obj.all()

                    for r in excel_fetched:
                        excel_records.append(map_excel_row(r))
                    return excel_records, excel_count

                if ds == "standard":
                    return standard_records, standard_count

                # Otherwise (for 'all'), fetch page records
                if is_all_records:
                    excel_fetched = q.order_by(desc(ExcelDisbursementsTotalPortCost.arrival_local)).all()
                else:
                    needed = data_request.pageSize - len(standard_records)
                    excel_fetched = q.order_by(desc(ExcelDisbursementsTotalPortCost.arrival_local)).offset(offset).limit(needed).all() if needed > 0 else []

                for r in excel_fetched:
                    excel_records.append(map_excel_row(r))
        except Exception:
            db.rollback()

        total_combined_count = standard_count + excel_count
        all_records = standard_records + excel_records

        return all_records, total_combined_count

    @staticmethod
    def update_dashboard_row(payload, db: Session):
        """
        Update advance_amount_remitted, outstanding_balance, and remark for a row in standard or excel schema.
        Supports setting values to numbers/strings or setting them to null/None.
        """
        ds = (payload.data_source or "standard").lower()
        update_fields = payload.model_dump(exclude_unset=True) if hasattr(payload, 'model_dump') else payload.dict(exclude_unset=True)

        if ds == "excel":
            row = db.query(ExcelDisbursementsTotalPortCost).filter(ExcelDisbursementsTotalPortCost.id == payload.disbursement_seq).first()
            if not row:
                raise ValueError(f"Excel disbursement record with ID {payload.disbursement_seq} not found")
            if "advance_amount_remitted" in update_fields:
                row.advance_amount_remitted = payload.advance_amount_remitted
            if "outstanding_balance" in update_fields:
                row.outstanding_balance = payload.outstanding_balance
            if "remark" in update_fields:
                row.remark = payload.remark
            db.commit()
            db.refresh(row)
            return row
        else:
            row = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == payload.disbursement_seq).first()
            if not row:
                raise ValueError(f"Standard disbursement record with seq {payload.disbursement_seq} not found")
            if "advance_amount_remitted" in update_fields:
                row.advance_amount_remitted = payload.advance_amount_remitted
            if "outstanding_balance" in update_fields:
                row.outstanding_balance = payload.outstanding_balance
            if "remark" in update_fields:
                row.remark = payload.remark
            db.commit()
            db.refresh(row)
            return row

    
    @staticmethod
    def get_dashboard_filter_data(client_id: Optional[int], data_source: Optional[str] = "all", db: Session = None):
        """
        Get unique filter data for dashboard filters.
        Combines standard values with excel_data_dev schema tables.
        """
        # Query for distinct client IDs from disbursement table
        client_ids_result = db.query(TxnDisbursement.client_id).distinct().order_by(
            TxnDisbursement.client_id
        ).all()
        client_ids = [c[0] for c in client_ids_result if c[0]]
        
        # Distinct vessel names from standard view + excel lookup
        vsl_1 = [v[0] for v in db.query(VwFdaProcessingDetails.vessel_name).distinct().all() if v[0]]
        vsl_2 = [v[0] for v in db.query(ExcelVessel.vessel_name).distinct().all() if v[0]]
        vessel_names = sorted(list(set(vsl_1 + vsl_2)))
        
        # Distinct country names from standard view + excel lookup
        c_1 = [c[0] for c in db.query(VwFdaProcessingDetails.country_name).distinct().all() if c[0]]
        c_2 = [c[0] for c in db.query(ExcelCountry.country_name).distinct().all() if c[0]]
        country_names = sorted(list(set(c_1 + c_2)))
        
        # Distinct port names from standard view + excel lookup
        p_1 = [p[0] for p in db.query(VwFdaProcessingDetails.port_name).distinct().all() if p[0]]
        p_2 = [p[0] for p in db.query(ExcelPort.port_name).distinct().all() if p[0]]
        port_names = sorted(list(set(p_1 + p_2)))

        # Query distinct filter values from excel_data_dev schema tables safely using savepoints
        distinct_vessel_types = []
        distinct_agents = []
        distinct_cargo_grades = []
        distinct_counterparties = []

        try:
            with db.begin_nested():
                v_types_1 = [r[0] for r in db.query(ExcelDisbursementsIndividualItemsCost.vessel_type).distinct().all() if r[0]]
                v_types_2 = [r[0] for r in db.query(ExcelDisbursementsPaidAmountsAnalysis.vessel_type).distinct().all() if r[0]]
                v_types_3 = [r[0] for r in db.query(ExcelDisbursementsTotalPortCost.vessel_type).distinct().all() if r[0]]
                distinct_vessel_types = sorted(list(set(v_types_1 + v_types_2 + v_types_3)))

                agents_1 = [r[0] for r in db.query(ExcelDisbursementsIndividualItemsCost.agent).distinct().all() if r[0]]
                agents_2 = [r[0] for r in db.query(ExcelDisbursementsPaidAmountsAnalysis.agent).distinct().all() if r[0]]
                agents_3 = [r[0] for r in db.query(ExcelDisbursementsTotalPortCost.vendor_short_name).distinct().all() if r[0]]
                distinct_agents = sorted(list(set(agents_1 + agents_2 + agents_3)))

                distinct_cargo_grades = sorted([r[0] for r in db.query(ExcelDisbursementsTotalPortCost.cargo_grades).distinct().all() if r[0]])
                distinct_counterparties = sorted([r[0] for r in db.query(ExcelDisbursementsTotalPortCost.counterparty_short_name).distinct().all() if r[0]])
        except Exception:
            db.rollback()
        
        # Query for LOA min/max values
        loa_stats = db.query(
            func.min(VwFdaProcessingDetails.loa).label('min_loa'),
            func.max(VwFdaProcessingDetails.loa).label('max_loa')
        ).filter(VwFdaProcessingDetails.loa.isnot(None)).first()
        
        # Query for NRT min/max values
        nrt_stats = db.query(
            func.min(VwFdaProcessingDetails.nrt).label('min_nrt'),
            func.max(VwFdaProcessingDetails.nrt).label('max_nrt')
        ).filter(VwFdaProcessingDetails.nrt.isnot(None)).first()
        
        # Query for GRT min/max values
        grt_stats = db.query(
            func.min(VwFdaProcessingDetails.grt).label('min_grt'),
            func.max(VwFdaProcessingDetails.grt).label('max_grt')
        ).filter(VwFdaProcessingDetails.grt.isnot(None)).first()
        
        # Query for RGRT min/max values
        rgrt_stats = db.query(
            func.min(VwFdaProcessingDetails.rgrt).label('min_rgrt'),
            func.max(VwFdaProcessingDetails.rgrt).label('max_rgrt')
        ).filter(VwFdaProcessingDetails.rgrt.isnot(None)).first()
        
        # Get client details (id and name) from the MaCompany table (company_type_id = 2 is Client)
        clients_result = db.query(MaCompany.company_id, MaCompany.company_name).filter(
            MaCompany.company_type_id == 2,
            MaCompany.status == 'Y'
        ).order_by(MaCompany.company_name).all()
        
        clients_list = [{"id": c[0], "name": c[1]} for c in clients_result] if clients_result else []

        if client_id == 75 or (data_source and data_source.lower() == "excel"):
            try:
                with db.begin_nested():
                    vessel_names = sorted([v[0] for v in db.query(ExcelVessel.vessel_name).distinct().all() if v[0]])
                    country_names = sorted([c[0] for c in db.query(ExcelCountry.country_name).distinct().all() if c[0]])
                    port_names = sorted([p[0] for p in db.query(ExcelPort.port_name).distinct().all() if p[0]])
                    
                    grt_stats = db.query(
                        func.min(ExcelDisbursementsTotalPortCost.grt).label('min_grt'),
                        func.max(ExcelDisbursementsTotalPortCost.grt).label('max_grt')
                    ).filter(ExcelDisbursementsTotalPortCost.grt.isnot(None)).first()

                    return {
                        "clients": clients_list,
                        "vessel_name": vessel_names,
                        "country_name": country_names,
                        "port_name": port_names,
                        "loa": None,
                        "nrt": None,
                        "grt": {"min_value": float(grt_stats.min_grt), "max_value": float(grt_stats.max_grt)} if grt_stats and grt_stats.min_grt is not None else None,
                        "rgrt": None,
                        "vessel_type": distinct_vessel_types,
                        "agent": distinct_agents,
                        "cargo_grade": distinct_cargo_grades,
                        "counterparty_short_name": distinct_counterparties
                    }
            except Exception:
                db.rollback()
        
        filter_data = {
            "clients": clients_list,
            "vessel_name": vessel_names,
            "country_name": country_names,
            "port_name": port_names,
            "loa": {"min_value": float(loa_stats.min_loa), "max_value": float(loa_stats.max_loa)} if loa_stats and loa_stats.min_loa is not None else None,
            "nrt": {"min_value": float(nrt_stats.min_nrt), "max_value": float(nrt_stats.max_nrt)} if nrt_stats and nrt_stats.min_nrt is not None else None,
            "grt": {"min_value": float(grt_stats.min_grt), "max_value": float(grt_stats.max_grt)} if grt_stats and grt_stats.min_grt is not None else None,
            "rgrt": {"min_value": float(rgrt_stats.min_rgrt), "max_value": float(rgrt_stats.max_rgrt)} if rgrt_stats and rgrt_stats.min_rgrt is not None else None,
            "vessel_type": distinct_vessel_types,
            "agent": distinct_agents,
            "cargo_grade": distinct_cargo_grades,
            "counterparty_short_name": distinct_counterparties
        }
        
        return filter_data
