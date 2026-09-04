from sqlalchemy.orm import Session, joinedload 
from sqlalchemy import or_, and_,select,desc
from sqlalchemy.sql import func
from datetime import datetime, time, date
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO, UpdateDisbursementTrackerCellDTO, DisbursementTrackerDTO
from app.models.vw_disbursement_tracker import DisbursementTracker
from app.dto.vw_disbursement_tracker_dtls_dto import DisbursementTrackerDetailsDTO
import json
from app.models.vw_disbursement_tracker_dtls import DisbursementTrackerDetails
from app.models.txn_disbursement import TxnDisbursement
from app.models.txn_pda import PDAModel
from app.models.vw_pda_report import PdaReport
from app.models import MaCountry,MaPort,MaVessel
from app.models.purpose import MaPurpose
from app.models.cargo import MaCargo
from app.repo.status_repo import StatusRepository
import logging
from app.models import User
from app.models import MaCompany
from sqlalchemy import text

PROD_TO_ANKKUMAM_MAPPING = {
    83: "ESDMCC",
    14: "NWL"
}

def _get_status_color(status):
    if not status or str(status).strip().upper() == "NA":
        return "#70757d", "#ffffff"
    s = str(status).strip().lower()
    if "completed" in s:
        return "#109716", "#ffffff"
    if "pending" in s:
        return "#f59e0b", "#ffffff"
    if "under-process" in s or "under process" in s:
        return "#3b72b9", "#ffffff"
    if "requested" in s:
        return "#ca8a04", "#ffffff"
    if "rejected" in s:
        return "#ef4444", "#ffffff"
    return "#70757d", "#ffffff"

logger = logging.getLogger("app_logger")

class DisbursementRepository:

    @staticmethod
    def _get_ankkumam_tracker_records(request_dto: DisbursementTrackerRequestDTO, ankkumam_clients, db: Session):
        ankkumam_records = []
        try:
            if not ankkumam_clients:
                return [], 0
                
            clients_str = ",".join(f"'{c}'" for c in ankkumam_clients)
            where_clauses = [f"d.client IN ({clients_str})"]
            params = {}

            if request_dto.query:
                search = f"%{request_dto.query.strip()}%"
                where_clauses.append("(d.client ILIKE :search OR d.vessel ILIKE :search OR d.port ILIKE :search OR d.port_agent ILIKE :search)")
                params["search"] = search

            f = request_dto.filter
            if f:
                if f.vessel:
                    where_clauses.append("d.vessel IN :vessels")
                    params["vessels"] = tuple(f.vessel)
                if f.port:
                    where_clauses.append("d.port IN :ports")
                    params["ports"] = tuple(f.port)
                if f.country:
                    where_clauses.append("d.country IN :countries")
                    params["countries"] = tuple(f.country)
                if f.voyage:
                    where_clauses.append("d.voyage IN :voyages")
                    params["voyages"] = tuple(f.voyage)
                # status filtering
                if f.status:
                    status_list = [s.lower() for s in f.status]
                    status_filters = []
                    if "final status" in status_list:
                        status_filters.append("d.final_status = 'Completed'")
                    
                    normal_statuses = [s for s in f.status if s.lower() != "final status"]
                    if normal_statuses:
                        pda_statuses = tuple([s.split(" ", 1)[1] for s in normal_statuses if s.lower().startswith("pda")])
                        fda_statuses = tuple([s.split(" ", 1)[1] for s in normal_statuses if s.lower().startswith("fda")])
                        
                        or_status = []
                        if pda_statuses:
                            or_status.append("d.pda_status IN :pda_statuses")
                            params["pda_statuses"] = pda_statuses
                        if fda_statuses:
                            or_status.append("d.fda_status IN :fda_statuses")
                            params["fda_statuses"] = fda_statuses
                            
                        if or_status:
                            status_filters.append("(" + " OR ".join(or_status) + ")")
                            
                    if status_filters:
                        where_clauses.append("(" + " OR ".join(status_filters) + ")")
                
                # ETA/ETD
                if f.eta_etd:
                    if f.eta_etd.from_date:
                        where_clauses.append("d.eta >= :eta_from")
                        params["eta_from"] = f.eta_etd.from_date
                    if f.eta_etd.to_date:
                        where_clauses.append("d.etd <= :etd_to")
                        params["etd_to"] = f.eta_etd.to_date

            where_sql = " AND ".join(where_clauses)
            
            count_sql = f'''
                SELECT COUNT(*) FROM ankkumam_data_excel.data d 
                WHERE {where_sql}
            '''
            ankkumam_count = db.execute(text(count_sql), params).scalar() or 0

            data_sql = f'''
                SELECT 
                    d.mda_id AS disbursement_seq,
                    d.column_1 AS pic,
                    d.client AS client_name,
                    d.vessel AS vessel_name,
                    d.port_agent AS port_agent,
                    d.port AS port,
                    d.country AS country,
                    d.voyage AS voyage,
                    d.eta, d.etd,
                    d.final_status AS final_status,
                    d.pda_status,
                    d.fda_status,
                    d.pda_amount, 
                    d.fda_amount_usd,
                    d.savings_at_pda_usd,
                    d.savings_at_fda_usd,
                    d.purpose,
                    d.reason,
                    d.loaded_at
                FROM ankkumam_data_excel.data d
                WHERE {where_sql}
                ORDER BY d.excel_row ASC
            '''
            rows = db.execute(text(data_sql), params).mappings().all()

            for r in rows:
                try:
                    pda_amt = abs(float(str(r["pda_amount"]).replace(",", ""))) if r["pda_amount"] is not None else 0.0
                except:
                    pda_amt = 0.0
                    
                fda_amt = abs(float(r["fda_amount_usd"])) if r["fda_amount_usd"] is not None else 0.0

                try:
                    pda_savings = abs(float(str(r["savings_at_pda_usd"]).replace(",", ""))) if r["savings_at_pda_usd"] is not None else None
                except:
                    pda_savings = None

                try:
                    fda_savings = abs(float(str(r["savings_at_fda_usd"]).replace(",", ""))) if r["savings_at_fda_usd"] is not None else None
                except:
                    fda_savings = None

                status_bg, status_text = _get_status_color(r["final_status"])
                final_bg, final_text = _get_status_color(r["final_status"])
                pda_bg, pda_text = _get_status_color(r["pda_status"])
                fda_bg, fda_text = _get_status_color(r["fda_status"])
                
                ankkumam_records.append(DisbursementTrackerDTO(
                    disbursement_seq=r['disbursement_seq'],
                    disbursement_id=r['disbursement_seq'],
                    source="Ankkumam",
                    pic=None,
                    client_name=r["client_name"],
                    vessel_name=r["vessel_name"],
                    port_agent=r["port_agent"],
                    port=r["port"],
                    country=r["country"],
                    voyage=str(r["voyage"]) if r["voyage"] is not None else None,
                    eta=r["eta"],
                    etd=r["etd"],
                    status=r["final_status"],
                    status_background_color=status_bg,
                    status_text_color=status_text,
                    due_date=None, due_days=None, due_comment="NA", due_flag="NA", due_color="",
                    pda_state="Y",
                    fda_state=None,
                    fda_id=None, pda_id=None,
                    fda_amount=fda_amt, pda_amount=pda_amt,
                    pda_savings=pda_savings, fda_savings=fda_savings,
                    final_status=r["final_status"],
                    purpose=r["purpose"],
                    pda_status=r["pda_status"], fda_status=r["fda_status"],
                    fda_status_background_color=fda_bg, fda_status_text_color=fda_text,
                    pda_status_background_color=pda_bg, pda_status_text_color=pda_text,
                    final_status_background_color=final_bg, final_status_text_color=final_text,
                    manual_fda_amount=None, manual_pda_amount=None,
                    loss_prevented_reason=None, advance_amount_remitted=None, outstanding_balance=None, remark="-"
                ))

            return ankkumam_records, ankkumam_count
        except Exception as e:
            print("Error in Ankkumam tracker records:", e)
            return [], 0
    
    @staticmethod
    def get_disbursement_list(user: str, request_dto: DisbursementTrackerRequestDTO, db: Session):
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

        # Execute standard prod query WITHOUT pagination to memory if merging
        should_merge_ankkumam = False
        ankkumam_clients = []
        
        if request_dto.filter and request_dto.filter.client:
            requested_clients = request_dto.filter.client
            for req_client in requested_clients:
                if req_client == "Eiger Shipping DMCC":
                    ankkumam_clients.append("ESDMCC")
                    should_merge_ankkumam = True
                elif req_client == "N W L":
                    ankkumam_clients.append("NWL")
                    should_merge_ankkumam = True
        elif user and user.lower() in ["meraki", "admin"]:
            ankkumam_clients = list(PROD_TO_ANKKUMAM_MAPPING.values())
            should_merge_ankkumam = True
        
        if should_merge_ankkumam:
            standard_records = base_query.all()
            ankkumam_records, ankkumam_count = DisbursementRepository._get_ankkumam_tracker_records(request_dto, ankkumam_clients, db)
            
            # Map standard records to DTO
            standard_dtos = [DisbursementTrackerDTO.model_validate(r) for r in standard_records]
            
            # Combine all records
            all_records = standard_dtos + ankkumam_records
            
            # Sort combined by internal ID desc
            def sort_key(dto):
                is_primary = 0 if dto.source == "Ankkumam" else 1
                seq = dto.disbursement_seq
                if isinstance(seq, str) and seq.startswith("MDA"):
                    try:
                        seq_num = int(seq.split("_")[1])
                    except:
                        seq_num = 0
                else:
                    seq_num = seq or 0
                return (is_primary, seq_num)
                
            all_records.sort(key=sort_key, reverse=True)
            
            total_count = len(standard_records) + ankkumam_count
            
            # Apply pagination
            paginated_data = all_records[offset:offset + request_dto.page_size]
            
            return {
                "total_count": total_count,
                "data": paginated_data
            }
        else:
            data = (
                base_query
                .offset(offset)
                .limit(request_dto.page_size)
                .all()
            )
            data_dtos = [DisbursementTrackerDTO.model_validate(r) for r in data]
            return {
                "total_count": total_count,
                "data": data_dtos
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
    def _get_ankkumam_disbursement_details(disbursement_seq: str, db: Session):
        data_sql = f'''
            SELECT 
                d.mda_id AS disbursement_seq,
                d.column_1 AS pic,
                d.client AS client_name,
                d.vessel AS vessel_name,
                d.port_agent AS port_agent,
                d.port AS port,
                d.country AS country,
                d.voyage AS voyage,
                d.eta, d.etd,
                d.final_status AS final_status,
                d.pda_status,
                d.fda_status,
                d.pda_amount, 
                d.fda_amount_usd,
                d.savings_at_pda_usd,
                d.savings_at_fda_usd,
                d.total_savings_usd,
                d.purpose,
                d.reason,
                d.loaded_at
            FROM ankkumam_data_excel.data d
            WHERE d.mda_id = :seq
        '''
        r = db.execute(text(data_sql), {"seq": disbursement_seq}).mappings().first()
        if not r:
            return None

        try:
            pda_amt = abs(float(str(r["pda_amount"]).replace(",", ""))) if r["pda_amount"] is not None else 0.0
        except:
            pda_amt = 0.0
            
        fda_amt = abs(float(r["fda_amount_usd"])) if r["fda_amount_usd"] is not None else 0.0

        try:
            pda_savings = abs(float(str(r["savings_at_pda_usd"]).replace(",", ""))) if r["savings_at_pda_usd"] is not None else None
        except:
            pda_savings = None

        try:
            fda_savings = abs(float(str(r["savings_at_fda_usd"]).replace(",", ""))) if r["savings_at_fda_usd"] is not None else None
        except:
            fda_savings = None
            
        try:
            total_savings = abs(float(str(r["total_savings_usd"]).replace(",", ""))) if r["total_savings_usd"] is not None else None
        except:
            total_savings = None

        return DisbursementTrackerDetailsDTO(
            disbursement_seq=r['disbursement_seq'],
            disbursement_id=r['disbursement_seq'],
            pda_expenses=[],
            fda_expenses=[],
            pic=None,
            client_name=r["client_name"],
            port_agent_name=r["port_agent"],
            ops_pic=None,
            agency_nomination_date=None,
            invoice_number="-",
            pda_id=None,
            pda_received_ops_agent=None,
            pda_processing_date=None,
            pda_status=r["pda_status"],
            pda_state="Y",
            portagent_pda_amount=pda_amt,
            pda_remittance=None,
            pda_remark=None,
            fda_id=None,
            fda_received_ops_agent=None,
            fda_processing_date=None,
            portagent_fda_amount=fda_amt,
            fda_status=r["fda_status"],
            fda_state=None,
            fda_remark=None,
            days_outstanding=None,
            vessel_name=r["vessel_name"],
            voyage=str(r["voyage"]) if r["voyage"] is not None else None,
            port=r["port"],
            country=r["country"],
            purpose=r["purpose"],
            cargo=None,
            eta=r["eta"],
            etd=r["etd"],
            sm_estimated_amount=0.0,
            sm_detailed_entry="NA",
            sm_ws_chart_ac="NA",
            owners_item_rejected="NA",
            towage_agency_agrement="NA",
            roe_agent=None,
            roe_actual_oanda=None,
            roe_loss=None,
            loss_prevention_pda=pda_savings,
            loss_prevention_fda=fda_savings,
            total_loss_prevented=total_savings,
            loss_prevented_reason=r["reason"],
            fda_receive_date=None,
            pda_receive_date=None,
            final_status=r["final_status"],
            advance_percentage=None,
            pda_ptm_curr_to="USD",
            fda_ptm_curr_to=None,
            actual_pda_amount=pda_amt,
            actual_fda_amount=fda_amt,
            manual_pda_amount=None,
            manual_fda_amount=None,
            advance_amount_remitted=None,
            outstanding_balance=None,
            remark="-",
            vessel_imo=None,
            bank_details=None,
            presigned_url=None,
            pdf_name=None
        )

    @staticmethod
    def get_disbursement_details(disbursement_seq: str, db: Session):
        if str(disbursement_seq).startswith("MDA"):
            return DisbursementRepository._get_ankkumam_disbursement_details(disbursement_seq, db)
            
        try:
            disbursement_seq = int(disbursement_seq)
        except ValueError:
            return None

        base_query = db.query(DisbursementTrackerDetails).filter(disbursement_seq == DisbursementTrackerDetails.disbursement_seq).first()
        if base_query:
            pda_expenses = []

            pda = db.query(PDAModel).filter(PDAModel.disbursement_seq == disbursement_seq).first()
            disbursement = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == disbursement_seq).first()
            pda_report = db.query(PdaReport).filter(PdaReport.disbursement_seq == disbursement_seq).first()

            roe_candidates = [
                pda.pda_roe if pda else None,
                pda_report.pda_roe if pda_report else None,
                base_query.roe_agent if base_query.roe_agent and base_query.roe_agent != 1.0 else None,
                pda.conversion_rate if pda else None,
                base_query.roe_actual_oanda
            ]
            roe = next((r for r in roe_candidates if r is not None), None)
            try:
                roe = float(roe) if roe is not None else None
            except (ValueError, TypeError):
                roe = None

            sys_items = []
            agent_items = []

            if pda_report:
                sys_charge = pda_report.system_service_charge
                agent_charge = pda_report.service_charge

                if isinstance(sys_charge, str):
                    try: sys_charge = json.loads(sys_charge)
                    except Exception: sys_charge = {}
                if isinstance(agent_charge, str):
                    try: agent_charge = json.loads(agent_charge)
                    except Exception: agent_charge = {}

                sys_items = sys_charge.get("items", []) if isinstance(sys_charge, dict) else []
                agent_items = agent_charge.get("items", []) if isinstance(agent_charge, dict) else []

            if not sys_items and pda and isinstance(pda.meraki_pda_data, dict):
                sys_items = pda.meraki_pda_data.get("services", {}).get("items", [])
                if not sys_items and "port_tariff_rule" in pda.meraki_pda_data:
                    sys_items = pda.meraki_pda_data.get("port_tariff_rule", {}).get("items", [])

            if not agent_items and pda and isinstance(pda.portagent_pda_data, dict):
                agent_items = pda.portagent_pda_data.get("services", {}).get("items", [])
                if not agent_items and "port_tariff_rule" in pda.portagent_pda_data:
                    agent_items = pda.portagent_pda_data.get("port_tariff_rule", {}).get("items", [])

            if not sys_items and disbursement and isinstance(disbursement.port_tariff_rule, dict):
                sys_items = disbursement.port_tariff_rule.get("items", [])

            if not agent_items and disbursement and isinstance(disbursement.port_tariff_rule, dict):
                agent_items = disbursement.port_tariff_rule.get("items", [])

            primary_items = agent_items if agent_items else sys_items

            sys_item_map = {}
            for s_item in sys_items:
                if isinstance(s_item, dict):
                    key = (s_item.get("service") or s_item.get("name") or "").strip().lower()
                    if key:
                        sys_item_map[key] = s_item

            def parse_amount(val):
                if val is None or val == "":
                    return 0.0
                try: return float(val)
                except (ValueError, TypeError): return 0.0

            raw_agent_sum = sum(parse_amount(item.get("total") or item.get("sub_total")) for item in primary_items if isinstance(item, dict))
            target_amount = base_query.portagent_pda_amount or base_query.actual_pda_amount

            # Check if values are in local currency and need ROE conversion to USD
            # or if USD amount field is directly present in the json item
            should_apply_roe = False
            if roe and roe > 0 and target_amount and raw_agent_sum > 0:
                unconverted_diff = abs(raw_agent_sum - target_amount)
                converted_diff = abs((raw_agent_sum * roe) - target_amount)
                if converted_diff < unconverted_diff:
                    should_apply_roe = True

            for idx, item in enumerate(primary_items, start=1):
                if not isinstance(item, dict):
                    continue
                s_no = item.get("SNO", idx)
                desc = item.get("service") or item.get("name") or f"Service {s_no}"
                key = desc.strip().lower()

                # Prefer direct USD amount if provided in item dict, else parse total/sub_total
                a_usd = item.get("total_usd") or item.get("amount_usd") or item.get("total_in_usd")
                if a_usd is not None and a_usd != "":
                    a_amount = parse_amount(a_usd)
                else:
                    a_amount = parse_amount(item.get("total") or item.get("sub_total"))
                    if should_apply_roe and roe:
                        a_amount = a_amount * roe

                s_item = sys_item_map.get(key)
                if not s_item and idx - 1 < len(sys_items):
                    s_item = sys_items[idx - 1]

                m_amount = 0.0
                if isinstance(s_item, dict):
                    m_usd = s_item.get("total_usd") or s_item.get("amount_usd") or s_item.get("total_in_usd")
                    if m_usd is not None and m_usd != "":
                        m_amount = parse_amount(m_usd)
                    else:
                        m_amount = parse_amount(s_item.get("total") or s_item.get("sub_total"))
                        if should_apply_roe and roe:
                            m_amount = m_amount * roe

                agent_amt = round(a_amount, 2)
                if agent_amt == 0.0:
                    continue

                pda_expenses.append({
                    "S. No": len(pda_expenses) + 1,
                    "Description": desc,
                    "Meraki Amount": round(m_amount, 2),
                    "Agent Amount": agent_amt
                })

            setattr(base_query, "pda_expenses", pda_expenses)

            # --- FDA Expenses Calculation ---
            fda_expenses = []
            from app.models.txn_fda import TxnFDA
            from app.models.vw_fda_report import FdaReport
            fda = db.query(TxnFDA).filter(TxnFDA.disbursement_seq == disbursement_seq, TxnFDA.state != 'D').first()
            fda_report = db.query(FdaReport).filter(FdaReport.disbursement_seq == disbursement_seq).first()

            fda_sys_items = []
            fda_agent_items = []

            if fda_report:
                fda_sys_charge = fda_report.system_service_charge
                fda_agent_charge = fda_report.service_charge

                if isinstance(fda_sys_charge, str):
                    try: fda_sys_charge = json.loads(fda_sys_charge)
                    except Exception: fda_sys_charge = {}
                if isinstance(fda_agent_charge, str):
                    try: fda_agent_charge = json.loads(fda_agent_charge)
                    except Exception: fda_agent_charge = {}

                fda_sys_items = fda_sys_charge.get("items", []) if isinstance(fda_sys_charge, dict) else []
                fda_agent_items = fda_agent_charge.get("items", []) if isinstance(fda_agent_charge, dict) else []

            if not fda_sys_items and fda and isinstance(fda.meraki_pda_data, dict):
                fda_sys_items = fda.meraki_pda_data.get("services", {}).get("items", [])
                if not fda_sys_items and "port_tariff_rule" in fda.meraki_pda_data:
                    fda_sys_items = fda.meraki_pda_data.get("port_tariff_rule", {}).get("items", [])

            if not fda_agent_items and fda and isinstance(fda.portagent_fda_data, dict):
                fda_agent_items = fda.portagent_fda_data.get("services", {}).get("items", [])
                if not fda_agent_items and "port_tariff_rule" in fda.portagent_fda_data:
                    fda_agent_items = fda.portagent_fda_data.get("port_tariff_rule", {}).get("items", [])

            fda_primary_items = fda_agent_items if fda_agent_items else fda_sys_items

            if fda_primary_items:
                fda_roe_candidates = [
                    fda.fda_roe if fda else None,
                    fda.conversion_rate if fda and fda.conversion_rate != 1.0 else None,
                    fda_report.fda_roe if fda_report else None,
                    base_query.roe_agent if base_query.roe_agent and base_query.roe_agent != 1.0 else None,
                    base_query.roe_actual_oanda
                ]
                fda_roe_val = next((r for r in fda_roe_candidates if r is not None), None)
                try:
                    fda_roe_val = float(fda_roe_val) if fda_roe_val is not None else None
                except (ValueError, TypeError):
                    fda_roe_val = None

                fda_sys_item_map = {}
                for s_item in fda_sys_items:
                    if isinstance(s_item, dict):
                        key = (s_item.get("service") or s_item.get("name") or "").strip().lower()
                        if key:
                            fda_sys_item_map[key] = s_item

                raw_fda_agent_sum = sum(parse_amount(item.get("total") or item.get("sub_total")) for item in fda_primary_items if isinstance(item, dict))
                target_fda_amount = base_query.portagent_fda_amount or base_query.actual_fda_amount

                should_apply_fda_roe = False
                if fda_roe_val and fda_roe_val > 0 and target_fda_amount and raw_fda_agent_sum > 0:
                    unconverted_diff = abs(raw_fda_agent_sum - target_fda_amount)
                    converted_diff = abs((raw_fda_agent_sum * fda_roe_val) - target_fda_amount)
                    if converted_diff < unconverted_diff:
                        should_apply_fda_roe = True

                for idx, item in enumerate(fda_primary_items, start=1):
                    if not isinstance(item, dict):
                        continue
                    s_no = item.get("SNO", idx)
                    desc = item.get("service") or item.get("name") or f"Service {s_no}"
                    key = desc.strip().lower()

                    a_usd = item.get("total_usd") or item.get("amount_usd") or item.get("total_in_usd")
                    if a_usd is not None and a_usd != "":
                        a_amount = parse_amount(a_usd)
                    else:
                        a_amount = parse_amount(item.get("total") or item.get("sub_total"))
                        if should_apply_fda_roe and fda_roe_val:
                            a_amount = a_amount * fda_roe_val

                    s_item = fda_sys_item_map.get(key)
                    if not s_item and idx - 1 < len(fda_sys_items):
                        s_item = fda_sys_items[idx - 1]

                    m_amount = 0.0
                    if isinstance(s_item, dict):
                        m_usd = s_item.get("total_usd") or s_item.get("amount_usd") or s_item.get("total_in_usd")
                        if m_usd is not None and m_usd != "":
                            m_amount = parse_amount(m_usd)
                        else:
                            m_amount = parse_amount(s_item.get("total") or s_item.get("sub_total"))
                            if should_apply_fda_roe and fda_roe_val:
                                m_amount = m_amount * fda_roe_val

                    agent_amt = round(a_amount, 2)
                    if agent_amt == 0.0:
                        continue

                    fda_expenses.append({
                        "S. No": len(fda_expenses) + 1,
                        "Description": desc,
                        "Meraki Amount": round(m_amount, 2),
                        "Agent Amount": agent_amt
                    })

            setattr(base_query, "fda_expenses", fda_expenses)

            if not getattr(base_query, "client_name", None):
                c_id = disbursement.client_id if disbursement else None
                if not c_id and pda and isinstance(pda.meraki_pda_data, dict):
                    c_id = pda.meraki_pda_data.get("client_id")
                
                if c_id:
                    comp = db.query(MaCompany).filter(MaCompany.company_id == c_id).first()
                    if comp and comp.company_name:
                        setattr(base_query, "client_name", comp.company_name)
                
                if not getattr(base_query, "client_name", None) and disbursement and disbursement.created_by:
                    db_user = db.query(User).filter(or_(User.username == disbursement.created_by, User.email == disbursement.created_by)).first()
                    if db_user and db_user.companyid:
                        comp = db.query(MaCompany).filter(MaCompany.company_id == db_user.companyid).first()
                        if comp and comp.company_name:
                            setattr(base_query, "client_name", comp.company_name)

            # Resolve vessel_imo
            vessel_imo = None
            if getattr(base_query, "vessel_name", None):
                vsl = db.query(MaVessel).filter(func.upper(MaVessel.name) == base_query.vessel_name.upper()).first()
                if vsl and vsl.imo_number:
                    vessel_imo = str(vsl.imo_number)
            if not vessel_imo and pda and isinstance(pda.meraki_pda_data, dict):
                vsl_info = pda.meraki_pda_data.get("vessel") or pda.meraki_pda_data.get("vessel_details") or {}
                if isinstance(vsl_info, dict):
                    vessel_imo = vsl_info.get("imo_number") or vsl_info.get("vessel_imo")
            if not vessel_imo and pda and isinstance(pda.portagent_pda_data, dict):
                vsl_info = pda.portagent_pda_data.get("vessel") or pda.portagent_pda_data.get("vessel_details") or {}
                if isinstance(vsl_info, dict):
                    vessel_imo = vsl_info.get("imo_number") or vsl_info.get("vessel_imo")
            setattr(base_query, "vessel_imo", vessel_imo)

            # Resolve bank_details (Account Holder Name, Account No / IBAN / Current Acc, Swift Code / BIC)
            bank_dict = {
                "account_holder_name": None,
                "account_no": None,
                "swift_code": None
            }

            # 1. Try fetching from port agent company bank_details_id / company_id in DB
            pa_comp = None
            if getattr(base_query, "port_agent_name", None):
                pa_comp = db.query(MaCompany).filter(func.upper(MaCompany.company_name) == base_query.port_agent_name.strip().upper()).first()
            if not pa_comp and disbursement and disbursement.port_agent_id:
                pa_comp = db.query(MaCompany).filter(MaCompany.company_id == disbursement.port_agent_id).first()

            if pa_comp:
                from app.models.bank_details import BankDetails
                b_obj = None
                if pa_comp.bank_details_id:
                    b_obj = db.query(BankDetails).filter(BankDetails.bank_details_id == pa_comp.bank_details_id).first()
                if not b_obj:
                    b_obj = db.query(BankDetails).filter(BankDetails.company_id == pa_comp.company_id).first()

                if b_obj:
                    bank_dict["account_holder_name"] = b_obj.beneficiary_acc_holder_name
                    bank_dict["account_no"] = b_obj.iban_number or b_obj.current_account_number
                    bank_dict["swift_code"] = b_obj.swift_code or b_obj.bic_code

            # 2. Fallback to PDA portagent_pda_data / meraki_pda_data bank details JSON if not found
            if (not bank_dict["account_holder_name"] or not bank_dict["account_no"]) and pda:
                b_info = None
                for data_dict in [pda.portagent_pda_data, pda.meraki_pda_data]:
                    if isinstance(data_dict, dict):
                        b_info = data_dict.get("bank_details") or data_dict.get("bankDetails")
                        if not b_info and isinstance(data_dict.get("port_agent"), dict):
                            pa = data_dict.get("port_agent")
                            b_info = pa.get("bank_details") or pa.get("bankDetails")
                        if b_info and isinstance(b_info, dict) and any(b_info.values()):
                            break
                
                if isinstance(b_info, dict):
                    holder = b_info.get("beneficiary_acc_holder_name") or b_info.get("account_holder_name") or b_info.get("beneficiary_name")
                    acc_no = b_info.get("iban_number") or b_info.get("current_account_number") or b_info.get("account_number") or b_info.get("account_no")
                    swift = b_info.get("swift_code") or b_info.get("bic_code") or b_info.get("swift")

                    if holder and not bank_dict["account_holder_name"]: bank_dict["account_holder_name"] = holder
                    if acc_no and not bank_dict["account_no"]: bank_dict["account_no"] = acc_no
                    if swift and not bank_dict["swift_code"]: bank_dict["swift_code"] = swift

            # 3. Always assign bank_dict (convert empty strings to None/null)
            clean_bank_dict = {
                "account_holder_name": bank_dict["account_holder_name"] if bank_dict["account_holder_name"] else None,
                "account_no": bank_dict["account_no"] if bank_dict["account_no"] else None,
                "swift_code": bank_dict["swift_code"] if bank_dict["swift_code"] else None
            }
            setattr(base_query, "bank_details", clean_bank_dict)

            # Resolve presigned_url and pdf_name for disbursement uploaded document
            presigned_url = None
            pdf_name = None
            from app.models.txn_disbursement_files import TxnDisbursementFiles
            from app.repo.file_upload import FileUploadRepository
            
            disb_file = db.query(TxnDisbursementFiles).filter(
                TxnDisbursementFiles.disbursement_seq == disbursement_seq,
                TxnDisbursementFiles.is_deleted == 'N'
            ).order_by(TxnDisbursementFiles.file_id.desc()).first()

            if disb_file:
                pdf_name = disb_file.file_name
                if disb_file.complete_file_path:
                    try:
                        presigned_url = FileUploadRepository.generate_presigned_url("get_object", disb_file.complete_file_path)
                    except Exception as e:
                        logger.warning(f"Failed to generate presigned_url for file_id {disb_file.file_id}: {e}")

            setattr(base_query, "presigned_url", presigned_url)
            setattr(base_query, "pdf_name", pdf_name)

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
            'loss_prevented_reason', 'advance_amount_remitted', 'outstanding_balance', 'remark'
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
    def update_disbursement_tracker_cell(payload: UpdateDisbursementTrackerCellDTO, db: Session):
        """
        Update advance_amount_remitted, outstanding_balance, and remark for a specific disbursement tracker row (standard or excel schema).
        Supports setting values or setting them to null.
        """
        ds = (getattr(payload, 'data_source', None) or "standard").lower()
        
        d_seq = payload.disbursement_seq
        if isinstance(d_seq, str) and d_seq.startswith("Kamba"):
            d_seq = int(d_seq.replace("Kamba", ""))
        else:
            d_seq = int(d_seq)
            
        if ds == "excel":
            from app.models.excel_disbursements import ExcelDisbursementsTotalPortCost
            row = db.query(ExcelDisbursementsTotalPortCost).filter(ExcelDisbursementsTotalPortCost.id == d_seq).first()
            if not row:
                raise ValueError(f"Excel disbursement record with ID {d_seq} not found")
        else:
            row = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == d_seq).first()
            if not row:
                raise ValueError(f"Disbursement record with seq {d_seq} not found")

        update_fields = payload.model_dump(exclude_unset=True) if hasattr(payload, 'model_dump') else payload.dict(exclude_unset=True)

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