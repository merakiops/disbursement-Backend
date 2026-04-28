from sqlalchemy.orm import Session, joinedload 
from sqlalchemy import or_, and_,select,desc
from sqlalchemy.sql import func
from datetime import datetime, time, date
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO
from app.models.vw_disbursement_tracker import DisbursementTracker
from app.dto.vw_disbursement_tracker_dtls_dto import DisbursementTrackerDetailsDTO
from app.models.vw_disbursement_tracker_dtls import DisbursementTrackerDetails
from app.models.txn_disbursement import TxnDisbursement
from app.models import MaCountry,MaPort,MaVessel
from app.models.purpose import MaPurpose
from app.models.cargo import MaCargo
from app.repo.status_repo import StatusRepository
import logging
from app.models import User
from app.models import MaCompany

logger = logging.getLogger("app_logger")

class DisbursementRepository:
    
    @staticmethod
    def get_disbursement_list(request_dto: DisbursementTrackerRequestDTO, db: Session):
        """
        Fetch paginated list of disbursement.
        Supports filtering with query string across useful fields.
        Returns a dict: { 'total_count': int, 'data': list }
        """
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size

        base_query = db.query(DisbursementTracker).filter(
            or_(DisbursementTracker.pda_state != "D", DisbursementTracker.pda_state.is_(None)),
            or_(
                DisbursementTracker.pda_id.isnot(None),
                or_(DisbursementTracker.fda_state != "D", DisbursementTracker.fda_state.is_(None))
            )
        )

        filters = []
        join_details = False

        if request_dto.query:
            search = f"%{request_dto.query.strip()}%"
            filters.append(or_(
                DisbursementTracker.client_name.ilike(search),
                DisbursementTracker.pic.ilike(search),
                DisbursementTracker.vessel_name.ilike(search),
                DisbursementTracker.port_agent.ilike(search),
                DisbursementTracker.status.ilike(search),
                DisbursementTracker.port.ilike(search),
                DisbursementTracker.disbursement_id.ilike(search),
            ))

        if request_dto.filter:

            f = request_dto.filter
            if f.status:
                status_list = [s.lower() for s in f.status]

                status_filters = []

                if "final status" in status_list:
                    status_filters.append(
                        DisbursementTracker.status.in_([
                            "FDA Completed"
                        ])
                    )

                normal_statuses = [
                    s for s in f.status if s.lower() != "final status"
                ]

                if normal_statuses:
                    pda_statuses = [s.split(" ", 1)[1] for s in normal_statuses if s.lower().startswith("pda")]
                    fda_statuses = [s.split(" ", 1)[1] for s in normal_statuses if s.lower().startswith("fda")]
                    status_filters.append(
                        or_(
                            DisbursementTracker.pda_status.in_(pda_statuses),
                            DisbursementTracker.fda_status.in_(fda_statuses)
                        )
                    )
                if status_filters:
                    filters.append(or_(*status_filters))
            if f.pic:
                filters.append(DisbursementTracker.pic.in_(f.pic))

            if f.vessel:
                filters.append(DisbursementTracker.vessel_name.in_(f.vessel))

            if f.port:
                filters.append(DisbursementTracker.port.in_(f.port))

            if f.country:
                filters.append(DisbursementTracker.country.in_(f.country))

            if f.port_agent:
                filters.append(DisbursementTracker.port_agent.in_(f.port_agent))

            if f.client:
                filters.append(DisbursementTracker.client_name.in_(f.client))

            if f.voyage:
                filters.append(DisbursementTracker.voyage.in_(f.voyage))


            def apply_date_filter(column, date_filter):
                nonlocal filters

                d_from = date_filter.from_date
                d_to = date_filter.to_date

                if not d_from and not d_to:
                    return

                if d_from and d_to:
                    start = d_from if isinstance(d_from, date) else d_from.date()
                    end = d_to if isinstance(d_to, date) else d_to.date()
                    filters.append(and_(
                        func.date(column) >= start,
                        func.date(column) <= end
                    ))
                elif d_from:
                    start = d_from if isinstance(d_from, date) else d_from.date()
                    filters.append(func.date(column) == start)
                elif d_to:
                    end = d_to if isinstance(d_to, date) else d_to.date()
                    filters.append(func.date(column) == end)

            # ETA
            if f.eta_etd:
                d_from = f.eta_etd.from_date
                d_to = f.eta_etd.to_date

                if d_from or d_to:
                    if d_from and d_to:
                        start = d_from if isinstance(d_from, date) else d_from.date()
                        end = d_to if isinstance(d_to, date) else d_to.date()
                        filters.append(and_(
                            func.date(DisbursementTracker.eta) >= start,
                            func.date(DisbursementTracker.eta) <= end,
                            func.date(DisbursementTracker.etd) >= start,
                            func.date(DisbursementTracker.etd) <= end
                        ))
                    elif d_from:
                        start = d_from if isinstance(d_from, date) else d_from.date()
                        filters.append(func.date(DisbursementTracker.eta) == start)
                    elif d_to:
                        end = d_to if isinstance(d_to, date) else d_to.date()
                        filters.append(func.date(DisbursementTracker.etd) == end)

            # PDA Processing
            if f.pda_processing_date:
                if f.pda_processing_date.from_date or f.pda_processing_date.to_date:
                    join_details = True
                    apply_date_filter(
                        DisbursementTrackerDetails.pda_processing_date,
                        f.pda_processing_date
                    )

            # FDA Processing
            if f.fda_processing_date:
                if f.fda_processing_date.from_date or f.fda_processing_date.to_date:
                    join_details = True
                    apply_date_filter(
                        DisbursementTrackerDetails.fda_processing_date,
                        f.fda_processing_date
                    )

            def apply_numeric_filter(column, numeric_filter):
                nonlocal filters, join_details

                if not numeric_filter or not numeric_filter.has_data:
                    return

                # Skip completely
                if (
                    numeric_filter.has_data == "N" and
                    numeric_filter.min_value is None and
                    numeric_filter.max_value is None
                ):
                    return

                join_details = True

                if numeric_filter.has_data == "Y":
                    min_val = numeric_filter.min_value or 0
                    max_val = numeric_filter.max_value

                    if max_val is not None:
                        filters.append(column.between(min_val, max_val))
                    else:
                        filters.append(column >= min_val)

                elif numeric_filter.has_data == "N":
                    filters.append(or_(column == 0, column.is_(None)))

            # Apply numeric filters
            apply_numeric_filter(DisbursementTrackerDetails.roe_loss, f.roe_loss)
            apply_numeric_filter(DisbursementTrackerDetails.loss_prevention_pda, f.loss_prevention_pda)
            apply_numeric_filter(DisbursementTrackerDetails.loss_prevention_fda, f.loss_prevention_fda)
            apply_numeric_filter(DisbursementTrackerDetails.total_loss_prevented, f.total_loss_prevention)
            
            # PDA and FDA overdue use DisbursementTracker.due_days
            if f.pda_over_due:
                min_val = f.pda_over_due.min_value
                max_val = f.pda_over_due.max_value
                if min_val is not None and max_val is not None:
                    filters.append(DisbursementTracker.due_days.between(min_val, max_val))
                elif min_val is not None:
                    filters.append(DisbursementTracker.due_days >= min_val)
                elif max_val is not None:
                    filters.append(DisbursementTracker.due_days.between(0, max_val))
                    
            if f.fda_over_due:
                min_val = f.fda_over_due.min_value
                max_val = f.fda_over_due.max_value
                if min_val is not None or max_val is not None:
                    due_days_filter = []
                    if min_val is not None and max_val is not None:
                        due_days_filter.append(DisbursementTracker.due_days.between(min_val, max_val))
                    elif min_val is not None:
                        due_days_filter.append(DisbursementTracker.due_days >= min_val)
                    elif max_val is not None:
                        due_days_filter.append(DisbursementTracker.due_days.between(0, max_val))
                    
                    filters.append(and_(
                        DisbursementTracker.fda_id.isnot(None),
                        or_(DisbursementTracker.fda_state != 'D', DisbursementTracker.fda_state.is_(None)),
                        *due_days_filter
                    ))

        if join_details:
            base_query = base_query.join(
                DisbursementTrackerDetails,
                DisbursementTracker.disbursement_seq == DisbursementTrackerDetails.disbursement_seq
            )

        # Apply filters
        if filters:
            base_query = base_query.filter(*filters)

        base_query = base_query.order_by(DisbursementTracker.disbursement_seq.desc())

        total_count = base_query.count()

        data = (
            base_query
            .offset(offset)
            .limit(request_dto.page_size)
            .all()
        )

        return {
            "total_count": total_count,
            "data": data
        }
    
    @staticmethod
    def get_disbursement_approval_request_client_list(username:str, request_dto: DisbursementTrackerRequestDTO, db: Session):
        """
        Fetch paginated list of disbursements for the logged-in user.
        Supports filtering and pagination.
        """

        # Validate pagination
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size

        # Base query filtered by company name
        company_id_subq = db.query(User.companyid).filter(User.username == username).first()
        
        company_name = db.query(MaCompany.company_name).filter(MaCompany.company_id == company_id_subq[0]).first()
        
        base_query = db.query(DisbursementTracker).filter(DisbursementTracker.client_name == company_name[0],or_(
        DisbursementTracker.status == "PDA Approval Request",
        DisbursementTracker.status == "FDA Approval Request"
    )
)
        # Optional text-based search
        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(
                DisbursementTracker.client_name.ilike(search_pattern) |
                DisbursementTracker.vessel_name.ilike(search_pattern) |
                DisbursementTracker.port_agent.ilike(search_pattern) |
                DisbursementTracker.port.ilike(search_pattern) |
                DisbursementTracker.status.ilike(search_pattern)
            )

        # Ordering, counting, pagination
        total_count = base_query.count()
        disbursement = (
            base_query
            .order_by(DisbursementTracker.disbursement_seq.desc())
            .offset(offset)
            .limit(request_dto.page_size)
            .all()
        )

        return {
            "total_count": total_count,
            "data": disbursement
        }
    


    def get_disbursement_client_list(username:str, request_dto: DisbursementTrackerRequestDTO, db: Session):
        """
        Fetch paginated list of disbursements for the logged-in user.
        Supports filtering and pagination.
        """

        # Validate pagination
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size

        # Base query filtered by company name
        company_id_subq = db.query(User.companyid).filter(User.username == username).first()
        
        company_name = db.query(MaCompany.company_name).filter(MaCompany.company_id == company_id_subq[0]).first()
       
        
        base_query = db.query(DisbursementTracker).filter(DisbursementTracker.client_name == company_name[0]
)
        # Optional text-based search
        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(
                DisbursementTracker.client_name.ilike(search_pattern) |
                DisbursementTracker.vessel_name.ilike(search_pattern) |
                DisbursementTracker.port_agent.ilike(search_pattern) |
                DisbursementTracker.port.ilike(search_pattern) |
                DisbursementTracker.status.ilike(search_pattern) |
                DisbursementTracker.disbursement_id.ilike(search_pattern)

            )

        # Ordering, counting, pagination
        total_count = base_query.count()
        disbursement = (
            base_query
            .order_by(DisbursementTracker.disbursement_seq.desc())
            .offset(offset)
            .limit(request_dto.page_size)
            .all()
        )

        return {
            "total_count": total_count,
            "data": disbursement
        }

            
            
    
    @staticmethod
    def get_disbursement_details(disbursement_seq:int, db: Session):
        
        base_query = db.query(DisbursementTrackerDetails).filter(disbursement_seq==DisbursementTrackerDetails.disbursement_seq).first()

        return base_query
    
    def UpdateDisbursementDetails(username: str, disbursement_data: DisbursementTrackerDetailsDTO, db: Session):

        disbursement = (db.query(TxnDisbursement)
        .options(
            joinedload(TxnDisbursement.fda),
            joinedload(TxnDisbursement.pda)
        )
        .filter(TxnDisbursement.disbursement_seq == disbursement_data.disbursement_seq).
        first()
    )
        
        # Set foreign keys from fetched objects for the Update purpose. Commented for the future Purpose
        
        # status_obj = StatusRepository.get_status_details_by_name(disbursement_data.fda_status, db)
        
        # country = db.query(MaCountry).filter(func.upper(MaCountry.name) == disbursement_data.country.upper()).first()
        # port = db.query(MaPort).filter(func.upper(MaPort.name) == disbursement_data.port.upper()).first()
        # purpose = db.query(MaPurpose).filter(func.upper(MaPurpose.name) == disbursement_data.port.upper()).first()
        # cargo = db.query(MaCargo).filter(func.upper(MaCargo.type) == disbursement_data.cargo.upper()).first()
        # vessel = db.query(MaVessel).filter(func.upper(MaVessel.name) == disbursement_data.vessel_name.upper()).first()

        # --- Update PDA ---
        if disbursement.pda:
            pda = disbursement.pda
            pda_fields = ['pda_remittance',
                'pda_received_ops_agent','pda_remittance','pda_remark', 'pda_receive_date','manual_pda_amount'
            ]  #removed updating the pda_amount
            for field in pda_fields:
                value = getattr(disbursement_data, field, None)
                if value is not None:
                    setattr(pda, field, value)
            # pda.status = int(status_obj.status_id)
            pda.updated_by = username

        # --- Update FDA ---
        if disbursement.fda:
            fda = disbursement.fda
            fda_fields = [
                'fda_status', 'fda_received_ops_agent','fda_remark', 'fda_receive_date','manual_fda_amount'
            ]    #removed updating the fda_amount
            for field in fda_fields:
                value = getattr(disbursement_data, field, None)
                if value is not None:
                    setattr(fda, field, value)
            # fda.status = int(status_obj.status_id)
            fda.updated_by = username

        # --- Update Disbursement ---
        disbursement_fields = [
            'disbursement_id', 'ops_pic', 'agency_nomination_date',
            'invoice_number', 'roe_agent', 'roe_actual_oanda', 'roe_loss',
            'sm_estimated_amount', 'sm_detailed_entry',
            'sm_ws_chart_ac', 'towage_agency_agrement', 'owners_item_rejected',
            'loss_prevention_pda', 'loss_prevention_fda', 'total_loss_prevented',
            'loss_prevented_reason'
        ]
        for field in disbursement_fields:
            value = getattr(disbursement_data, field, None)
            if value is not None:
                setattr(disbursement, field, value)

        # Set foreign keys from fetched objects for the Update purpose. Commented for the future Purpose
        # if country: disbursement.country_id = country.country_id
        # if port: disbursement.port_id = port.port_id
        # if purpose: disbursement.purpose_id = purpose.purpose_id
        # if cargo: disbursement.cargo_id = cargo.cargo_id
        # if vessel: disbursement.pda_vsl_id = vessel.vessel_id

        # disbursement.status = int(status_obj.status_id)
        disbursement.updated_by = username
        disbursement.created_by = disbursement_data.pic or disbursement.created_by

        db.commit()
        db.refresh(disbursement)

        return disbursement


    @staticmethod
    def export_disbursement_list(request_dto:DisbursementTrackerRequestDTO, db: Session):
        """
        Export all disbursement records combining data from both DisbursementTracker and DisbursementTrackerDetails.
        """
        logger.info(f"Exporting disbursement for query='{request_dto.query}'")
        try:
            # Remove pagination for export
            export_dto = DisbursementTrackerRequestDTO(
                page=1,
                page_size=999999, 
                query=request_dto.query,
                filter=request_dto.filter
            )
            
            # Get all records using existing method
            result = DisbursementRepository.get_disbursement_list(export_dto, db)
            trackers = result["data"]
            
            if not trackers:
                return []

            # Fetch all details in one query
            disbursement_seqs = [t.disbursement_seq for t in trackers]
            details_list = db.query(DisbursementTrackerDetails).filter(
                DisbursementTrackerDetails.disbursement_seq.in_(disbursement_seqs)
            ).all()

            # Map details by disbursement_seq
            details_map = {d.disbursement_seq: d for d in details_list}

            # Merge tracker and details data
            view_data = []
            for tracker in trackers:
                details = details_map.get(tracker.disbursement_seq)
                if details:
                    combined_data = {
                        **{k: v for k, v in details.__dict__.items() if not k.startswith('_')},
                        'status_background_color': tracker.status_background_color,
                        'status_text_color': tracker.status_text_color,
                        'due_date': tracker.due_date,
                        'due_days': tracker.due_days,
                        'due_comment': tracker.due_comment,
                        'due_flag': tracker.due_flag,
                        'due_color': tracker.due_color
                    }
                    view_data.append(combined_data)

            return view_data
        except Exception:
            return []

    def get_unique_voyage_number(db):
        result = (
        select(DisbursementTracker.voyage)
        .distinct(DisbursementTracker.voyage)  
        .where(DisbursementTracker.voyage.is_not(None))
        .order_by(
            DisbursementTracker.voyage,  
            desc(DisbursementTracker.disbursement_seq)  
        )
        .limit(50)
    )

        result = db.execute(result)
        voyages = result.scalars().all()
        return voyages