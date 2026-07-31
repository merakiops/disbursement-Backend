import logging
from sqlalchemy.orm import Session
from fastapi import HTTPException
from demurrage.models import Voyage, PortOperation, OperationDeduction, DemurrageSummary
from demurrage.schemas.request import DemurrageCaseCreateSchema, StepSaveRequestSchema
from demurrage.exceptions import DemurrageValidationError, DemurrageNotFoundException
from demurrage.services.calculator import (
    calculate_time_used_hours,
    calculate_total_deductions_hours,
    calculate_demurrage_time,
    calculate_gross_demurrage_cost,
    calculate_add_commission,
    calculate_net_demurrage
)
from demurrage.services.pdf_generator import generate_demurrage_pdf
from app.repo.file_upload import FileUploadRepository, BUCKET_NAME

logger = logging.getLogger("app_logger")

class DemurrageService:
    @staticmethod
    def upload_report_to_s3(db_voyage: Voyage) -> str:
        """Generates PDF report and uploads to AWS S3, returning the S3 URL."""
        if not db_voyage.summary:
            return None
        try:
            pdf_buffer = generate_demurrage_pdf(db_voyage)
            pdf_bytes = pdf_buffer.getvalue()
            
            vessel_name_slug = db_voyage.vessel.replace(" ", "_")
            file_key = f"demurrage_reports/Demurrage_Statement_{vessel_name_slug}_{db_voyage.id}.pdf"
            
            s3_client = FileUploadRepository.get_s3_client()
            s3_client.put_object(
                Bucket=BUCKET_NAME,
                Key=file_key,
                Body=pdf_bytes,
                ContentType="application/pdf"
            )
            
            s3_url = FileUploadRepository.generate_presigned_url("get_object", file_key, expires_in=604800)
            return s3_url
        except Exception as e:
            logger.warning(f"Failed to upload demurrage report to S3: {e}")
            return f"local://demurrage_reports/Demurrage_Statement_{db_voyage.vessel.replace(' ', '_')}_{db_voyage.id}.pdf"

    @staticmethod
    def save_demurrage_case(db: Session, payload: DemurrageCaseCreateSchema) -> Voyage:
        """
        Saves the entire Demurrage case in a single transaction.
        Performs calculations, stores dynamic deductions as JSON, generates PDF, uploads to S3, and saves all details.
        """
        try:
            # 1. Create Voyage Entity
            voyage_data = payload.voyage
            db_voyage = Voyage(
                vessel=voyage_data.vessel,
                vessel_imo=voyage_data.vessel_imo,
                voyage_no=voyage_data.voyage_no,
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
                bl_date=voyage_data.bl_date,
                cp_date=voyage_data.cp_date,
                client_name=voyage_data.client_name
            )
            db.add(db_voyage)
            db.flush()  # Gets db_voyage.id for foreign keys

            # 2. Process Load Port Operation & Dynamic Deductions JSON
            load_data = payload.load_port
            load_time_used = calculate_time_used_hours(load_data.start_time, load_data.end_time)
            
            load_deductions_list = [ded.model_dump(mode='json') for ded in payload.load_deductions]
            
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
                gross_used_laytime=load_time_used,
                comments_clause=load_data.comments_clause,
                deductions_json=load_deductions_list
            )
            db.add(db_load_port)
            db.flush()

            # 3. Process Load Deductions Table
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

            # 4. Process Discharge Port Operation & Dynamic Deductions JSON
            discharge_data = payload.discharge_port
            discharge_time_used = calculate_time_used_hours(discharge_data.start_time, discharge_data.end_time)
            
            discharge_deductions_list = [ded.model_dump(mode='json') for ded in payload.discharge_deductions]
            
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
                gross_used_laytime=discharge_time_used,
                comments_clause=discharge_data.comments_clause,
                deductions_json=discharge_deductions_list
            )
            db.add(db_discharge_port)
            db.flush()

            # 5. Process Discharge Deductions Table
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

            # 6. Calculate Demurrage Summary Values
            loading_total_ded = calculate_total_deductions_hours(load_deduction_times)
            discharging_total_ded = calculate_total_deductions_hours(discharge_deduction_times)
            
            total_used_laytime = db_load_port.gross_used_laytime + db_discharge_port.gross_used_laytime
            total_deductions = loading_total_ded + discharging_total_ded
            allowed_laytime = db_voyage.allowed_laytime_hours
            
            demurrage_time = calculate_demurrage_time(total_used_laytime, total_deductions, allowed_laytime)
            gross_demurrage_cost = calculate_gross_demurrage_cost(demurrage_time, db_voyage.demurrage_rate_usd_per_day)
            add_commission = calculate_add_commission(gross_demurrage_cost, db_voyage.address_commission_percent)
            
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
            db.flush()

            # 7. Generate PDF Report, Upload to S3, and Save S3 Link in DB
            s3_url = DemurrageService.upload_report_to_s3(db_voyage)
            db_voyage.report_s3_url = s3_url
            
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

        load_port = next((op for op in voyage.port_operations if op.operation_type == "LOAD"), None)
        discharge_port = next((op for op in voyage.port_operations if op.operation_type == "DISCHARGE"), None)

        return {
            "voyage": voyage,
            "load_port": load_port,
            "load_deductions": load_port.deductions if load_port else [],
            "discharge_port": discharge_port,
            "discharge_deductions": discharge_port.deductions if discharge_port else [],
            "summary": voyage.summary,
            "report_s3_url": voyage.report_s3_url
        }

    @staticmethod
    def get_all_demurrage_cases(db: Session, page: int = 1, page_size: int = 10, query: str = None) -> dict:
        """
        Retrieves a paginated list of all demurrage cases.
        """
        from sqlalchemy import or_
        db_query = db.query(Voyage)
        if query:
            search_pattern = f"%{query}%"
            db_query = db_query.filter(
                or_(
                    Voyage.vessel.ilike(search_pattern),
                    Voyage.client_name.ilike(search_pattern),
                    Voyage.voyage_no.ilike(search_pattern)
                )
            )

        total_count = db_query.count()
        voyages = db_query.order_by(Voyage.id.desc()).offset((page - 1) * page_size).limit(page_size).all()

        cases_data = []
        for voyage in voyages:
            load_port = next((op for op in voyage.port_operations if op.operation_type == "LOAD"), None)
            discharge_port = next((op for op in voyage.port_operations if op.operation_type == "DISCHARGE"), None)

            cases_data.append({
                "voyage": voyage,
                "load_port": load_port,
                "load_deductions": load_port.deductions if load_port else [],
                "discharge_port": discharge_port,
                "discharge_deductions": discharge_port.deductions if discharge_port else [],
                "summary": voyage.summary,
                "report_s3_url": voyage.report_s3_url
            })

        return {
            "total_count": total_count,
            "page": page,
            "page_size": page_size,
            "data": cases_data
        }

    @staticmethod
    def save_step_demurrage_case(db: Session, payload: StepSaveRequestSchema) -> dict:
        """
        Saves or updates a Demurrage case step by step (VOYAGE, LOAD_PORT, DISCHARGE_PORT, CALCULATE).
        """
        step = payload.step.upper()
        voyage_id = payload.voyage_id

        try:
            # Step 1: VOYAGE Creation / Update
            if step == "VOYAGE" or not voyage_id:
                if not payload.voyage:
                    raise DemurrageValidationError("Voyage data is required for VOYAGE step.")
                
                v_data = payload.voyage
                if voyage_id:
                    db_voyage = db.query(Voyage).filter(Voyage.id == voyage_id).first()
                    if not db_voyage:
                        raise DemurrageNotFoundException(f"Voyage with ID {voyage_id} not found.")
                    
                    db_voyage.vessel = v_data.vessel
                    db_voyage.vessel_imo = v_data.vessel_imo
                    db_voyage.voyage_no = v_data.voyage_no
                    db_voyage.charterparty_terms = v_data.charterparty_terms
                    db_voyage.allowed_laytime_hours = v_data.allowed_laytime_hours
                    db_voyage.demurrage_rate_usd_per_day = v_data.demurrage_rate_usd_per_day
                    db_voyage.address_commission_percent = v_data.address_commission_percent
                    db_voyage.undisputed_demurrage_paid = v_data.undisputed_demurrage_paid
                    db_voyage.freight = str(v_data.freight) if v_data.freight is not None else None
                    db_voyage.laycan = v_data.laycan
                    db_voyage.client_name = v_data.client_name
                    db_voyage.bl_date = v_data.bl_date
                    db_voyage.cp_date = v_data.cp_date
                else:
                    db_voyage = Voyage(
                        vessel=v_data.vessel,
                        vessel_imo=v_data.vessel_imo,
                        voyage_no=v_data.voyage_no,
                        charterparty_terms=v_data.charterparty_terms,
                        allowed_laytime_hours=v_data.allowed_laytime_hours,
                        demurrage_rate_usd_per_day=v_data.demurrage_rate_usd_per_day,
                        address_commission_percent=v_data.address_commission_percent,
                        undisputed_demurrage_paid=v_data.undisputed_demurrage_paid,
                        freight=str(v_data.freight) if v_data.freight is not None else None,
                        laycan=v_data.laycan,
                        client_name=v_data.client_name,
                        bl_date=v_data.bl_date,
                        cp_date=v_data.cp_date
                    )
                    db.add(db_voyage)
                db.flush()
                voyage_id = db_voyage.id

            db_voyage = db.query(Voyage).filter(Voyage.id == voyage_id).first()
            if not db_voyage:
                raise DemurrageNotFoundException(f"Voyage with ID {voyage_id} not found.")

            # Step 2: LOAD_PORT
            if step == "LOAD_PORT" and payload.load_port:
                load_data = payload.load_port
                load_time_used = calculate_time_used_hours(load_data.start_time, load_data.end_time)
                load_deductions_list = [ded.model_dump(mode='json') for ded in (payload.load_deductions or [])]

                existing_load = db.query(PortOperation).filter(
                    PortOperation.voyage_id == db_voyage.id,
                    PortOperation.operation_type == "LOAD"
                ).first()

                if existing_load:
                    existing_load.port = load_data.port
                    existing_load.terminal = load_data.terminal
                    existing_load.start_time = load_data.start_time
                    existing_load.start_event = load_data.start_event
                    existing_load.end_time = load_data.end_time
                    existing_load.end_event = load_data.end_event
                    existing_load.time_used = load_time_used
                    existing_load.gross_used_laytime = load_time_used
                    existing_load.comments_clause = load_data.comments_clause
                    existing_load.deductions_json = load_deductions_list
                    db_load_port = existing_load
                    db.query(OperationDeduction).filter(OperationDeduction.operation_id == db_load_port.id).delete()
                else:
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
                        gross_used_laytime=load_time_used,
                        comments_clause=load_data.comments_clause,
                        deductions_json=load_deductions_list
                    )
                    db.add(db_load_port)
                db.flush()

                for ded in (payload.load_deductions or []):
                    ded_time = calculate_time_used_hours(ded.start_time, ded.end_time)
                    db.add(OperationDeduction(
                        operation_id=db_load_port.id,
                        event_name=ded.event_name,
                        start_time=ded.start_time,
                        end_time=ded.end_time,
                        time_used=ded_time,
                        comments_clause=ded.comments_clause
                    ))

            # Step 3: DISCHARGE_PORT
            if step == "DISCHARGE_PORT" and payload.discharge_port:
                discharge_data = payload.discharge_port
                discharge_time_used = calculate_time_used_hours(discharge_data.start_time, discharge_data.end_time)
                discharge_deductions_list = [ded.model_dump(mode='json') for ded in (payload.discharge_deductions or [])]

                existing_discharge = db.query(PortOperation).filter(
                    PortOperation.voyage_id == db_voyage.id,
                    PortOperation.operation_type == "DISCHARGE"
                ).first()

                if existing_discharge:
                    existing_discharge.port = discharge_data.port
                    existing_discharge.terminal = discharge_data.terminal
                    existing_discharge.start_time = discharge_data.start_time
                    existing_discharge.start_event = discharge_data.start_event
                    existing_discharge.end_time = discharge_data.end_time
                    existing_discharge.end_event = discharge_data.end_event
                    existing_discharge.time_used = discharge_time_used
                    existing_discharge.gross_used_laytime = discharge_time_used
                    existing_discharge.comments_clause = discharge_data.comments_clause
                    existing_discharge.deductions_json = discharge_deductions_list
                    db_discharge_port = existing_discharge
                    db.query(OperationDeduction).filter(OperationDeduction.operation_id == db_discharge_port.id).delete()
                else:
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
                        gross_used_laytime=discharge_time_used,
                        comments_clause=discharge_data.comments_clause,
                        deductions_json=discharge_deductions_list
                    )
                    db.add(db_discharge_port)
                db.flush()

                for ded in (payload.discharge_deductions or []):
                    ded_time = calculate_time_used_hours(ded.start_time, ded.end_time)
                    db.add(OperationDeduction(
                        operation_id=db_discharge_port.id,
                        event_name=ded.event_name,
                        start_time=ded.start_time,
                        end_time=ded.end_time,
                        time_used=ded_time,
                        comments_clause=ded.comments_clause
                    ))

            # Recalculate if both ports exist
            load_op = db.query(PortOperation).filter(PortOperation.voyage_id == db_voyage.id, PortOperation.operation_type == "LOAD").first()
            discharge_op = db.query(PortOperation).filter(PortOperation.voyage_id == db_voyage.id, PortOperation.operation_type == "DISCHARGE").first()

            if load_op and discharge_op:
                load_ded_times = [d.time_used for d in load_op.deductions]
                discharge_ded_times = [d.time_used for d in discharge_op.deductions]

                loading_total_ded = calculate_total_deductions_hours(load_ded_times)
                discharging_total_ded = calculate_total_deductions_hours(discharge_ded_times)

                total_used_laytime = load_op.gross_used_laytime + discharge_op.gross_used_laytime
                total_deductions = loading_total_ded + discharging_total_ded
                allowed_laytime = db_voyage.allowed_laytime_hours

                demurrage_time = calculate_demurrage_time(total_used_laytime, total_deductions, allowed_laytime)
                gross_demurrage_cost = calculate_gross_demurrage_cost(demurrage_time, db_voyage.demurrage_rate_usd_per_day)
                add_commission = calculate_add_commission(gross_demurrage_cost, db_voyage.address_commission_percent)
                net_demurrage = calculate_net_demurrage(gross_demurrage_cost, db_voyage.undisputed_demurrage_paid, add_commission)

                db.query(DemurrageSummary).filter(DemurrageSummary.voyage_id == db_voyage.id).delete()
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
                db.flush()

                s3_url = DemurrageService.upload_report_to_s3(db_voyage)
                db_voyage.report_s3_url = s3_url

            db.commit()
            db.refresh(db_voyage)

            return DemurrageService.get_demurrage_case(db, db_voyage.id)

        except Exception as e:
            db.rollback()
            logger.error(f"Failed in step_save: {e}")
            if isinstance(e, DemurrageValidationError) or isinstance(e, DemurrageNotFoundException):
                raise e
            raise HTTPException(status_code=500, detail=f"Step save failed: {str(e)}")
