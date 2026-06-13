import logging
from sqlalchemy.orm import Session
from fastapi import HTTPException
from demurrage.models import Voyage, PortOperation, OperationDeduction, DemurrageSummary
from demurrage.schemas.request import DemurrageCaseCreateSchema
from demurrage.exceptions import DemurrageValidationError, DemurrageNotFoundException
from demurrage.services.calculator import (
    calculate_time_used_hours,
    calculate_total_deductions_hours,
    calculate_demurrage_time,
    calculate_gross_demurrage_cost,
    calculate_add_commission,
    calculate_net_demurrage
)

logger = logging.getLogger("app_logger")

class DemurrageService:
    @staticmethod
    def save_demurrage_case(db: Session, payload: DemurrageCaseCreateSchema) -> Voyage:
        """
        Saves the entire Demurrage case in a single transaction.
        Performs calculations and saves Voyage, Port Operations, Deductions, and Summary.
        """
        try:
            # 1. Create Voyage Entity
            voyage_data = payload.voyage
            db_voyage = Voyage(
                vessel=voyage_data.vessel,
                charterparty_terms=voyage_data.charterparty_terms,
                allowed_laytime_hours=voyage_data.allowed_laytime_hours,
                demurrage_rate_usd_per_day=voyage_data.demurrage_rate_usd_per_day,
                address_commission_percent=voyage_data.address_commission_percent,
                undisputed_demurrage_paid=voyage_data.undisputed_demurrage_paid,
                freight=str(voyage_data.freight) if voyage_data.freight is not None else None,
                laycan=voyage_data.laycan,
                laycan_narrowed_date=voyage_data.laycan_narrowed_date,
                laycan_narrowed_start_time=voyage_data.laycan_narrowed_start_time,
                laycan_narrowed_end_time=voyage_data.laycan_narrowed_end_time,
                actual_rotation=voyage_data.actual_rotation,
                cp_speed=str(voyage_data.cp_speed) if voyage_data.cp_speed is not None else None,
                timebar_clause=voyage_data.timebar_clause,
                additional_laytime=voyage_data.additional_laytime,
                client_name=voyage_data.client_name
            )
            db.add(db_voyage)
            db.flush()  # Gets db_voyage.id for foreign keys

            # 2. Process Load Port Operation
            load_data = payload.load_port
            load_time_used = calculate_time_used_hours(load_data.start_time, load_data.end_time)
            db_load_port = PortOperation(
                voyage_id=db_voyage.id,
                operation_type="LOAD",
                port=load_data.port,
                terminal=load_data.terminal,
                start_time=load_data.start_time,
                start_event=load_data.start_event,
                end_time=load_data.end_time,
                end_event=load_data.end_event,
                time_used=load_time_used,
                gross_used_laytime=load_time_used,  # gross_used_laytime = time_used
                comments_clause=load_data.comments_clause
            )
            db.add(db_load_port)
            db.flush()

            # 3. Process Load Deductions
            load_deduction_times = []
            for ded in payload.load_deductions:
                ded_time = calculate_time_used_hours(ded.start_time, ded.end_time)
                load_deduction_times.append(ded_time)
                db_ded = OperationDeduction(
                    operation_id=db_load_port.id,
                    event_name=ded.event_name,
                    start_time=ded.start_time,
                    end_time=ded.end_time,
                    time_used=ded_time,
                    comments_clause=ded.comments_clause
                )
                db.add(db_ded)

            # 4. Process Discharge Port Operation
            discharge_data = payload.discharge_port
            discharge_time_used = calculate_time_used_hours(discharge_data.start_time, discharge_data.end_time)
            db_discharge_port = PortOperation(
                voyage_id=db_voyage.id,
                operation_type="DISCHARGE",
                port=discharge_data.port,
                terminal=discharge_data.terminal,
                start_time=discharge_data.start_time,
                start_event=discharge_data.start_event,
                end_time=discharge_data.end_time,
                end_event=discharge_data.end_event,
                time_used=discharge_time_used,
                gross_used_laytime=discharge_time_used,  # gross_used_laytime = time_used
                comments_clause=discharge_data.comments_clause
            )
            db.add(db_discharge_port)
            db.flush()

            # 5. Process Discharge Deductions
            discharge_deduction_times = []
            for ded in payload.discharge_deductions:
                ded_time = calculate_time_used_hours(ded.start_time, ded.end_time)
                discharge_deduction_times.append(ded_time)
                db_ded = OperationDeduction(
                    operation_id=db_discharge_port.id,
                    event_name=ded.event_name,
                    start_time=ded.start_time,
                    end_time=ded.end_time,
                    time_used=ded_time,
                    comments_clause=ded.comments_clause
                )
                db.add(db_ded)

            # 6. Calculate Demurrage Summary
            loading_total_ded = calculate_total_deductions_hours(load_deduction_times)
            discharging_total_ded = calculate_total_deductions_hours(discharge_deduction_times)
            
            # Formulas:
            # total_used_laytime = loading gross used laytime + discharging gross used laytime
            total_used_laytime = db_load_port.gross_used_laytime + db_discharge_port.gross_used_laytime
            
            # total_deductions = loading total deductions + discharging total deductions
            total_deductions = loading_total_ded + discharging_total_ded
            
            allowed_laytime = db_voyage.allowed_laytime_hours
            
            # demurrage_time = max(0.0, total_used_laytime - total_deductions - allowed_laytime)
            demurrage_time = calculate_demurrage_time(total_used_laytime, total_deductions, allowed_laytime)
            
            # gross_demurrage_cost = (demurrage_time * rate) / 24
            gross_demurrage_cost = calculate_gross_demurrage_cost(demurrage_time, db_voyage.demurrage_rate_usd_per_day)
            
            # add_commission = (-gross_demurrage_cost) * (address_commission_percent / 100)
            add_commission = calculate_add_commission(gross_demurrage_cost, db_voyage.address_commission_percent)
            
            # net_demurrage = gross_demurrage_cost - undisputed_demurrage_paid + add_commission
            net_demurrage = calculate_net_demurrage(
                gross_demurrage_cost, 
                db_voyage.undisputed_demurrage_paid, 
                add_commission
            )

            db_summary = DemurrageSummary(
                voyage_id=db_voyage.id,
                total_used_laytime=round(total_used_laytime, 4),
                total_deductions=round(total_deductions, 4),
                allowed_laytime=round(allowed_laytime, 4),
                demurrage_time=round(demurrage_time, 4),
                gross_demurrage_cost=gross_demurrage_cost,
                undisputed_demurrage_paid=db_voyage.undisputed_demurrage_paid,
                add_commission=add_commission,
                net_demurrage=net_demurrage
            )
            db.add(db_summary)
            db.commit()

            # Refresh to load full relationships and attributes
            db.refresh(db_voyage)
            return db_voyage

        except Exception as e:
            db.rollback()
            logger.error(f"Failed to save Demurrage Case: {e}")
            if isinstance(e, DemurrageValidationError):
                raise e
            raise HTTPException(status_code=500, detail=f"Database transaction failed: {str(e)}")

    @staticmethod
    def get_demurrage_case(db: Session, voyage_id: int) -> dict:
        """
        Retrieves a complete demurrage case by Voyage ID.
        """
        voyage = db.query(Voyage).filter(Voyage.id == voyage_id).first()
        if not voyage:
            raise DemurrageNotFoundException(f"Demurrage case with Voyage ID {voyage_id} not found.")

        # Extract ports and deductions
        load_port = next((op for op in voyage.port_operations if op.operation_type == "LOAD"), None)
        discharge_port = next((op for op in voyage.port_operations if op.operation_type == "DISCHARGE"), None)

        if not load_port or not discharge_port:
            raise DemurrageValidationError("Voyage has corrupted operations details. Load or discharge port missing.")

        return {
            "voyage": voyage,
            "load_port": load_port,
            "load_deductions": load_port.deductions,
            "discharge_port": discharge_port,
            "discharge_deductions": discharge_port.deductions,
            "summary": voyage.summary
        }
