from sqlalchemy.orm import Session
from typing import Optional, Dict, Any, List
from app.repo.timeline_repo import TimelineRepository
from app.models.ports import MaPort
from app.models.vessels import MaVessel
from app.models.txn_client_disbursement_request import TxnClientDisbursementRequest

from app.dto.timeline_dto import (
    DisbursementSummaryItemDTO,
    DisbursementSummaryListResponseDTO,
    TimelineStepSummaryDTO,
    DetailedDisbursementTimelineResponseDTO,
    DetailedTimelineStepDTO
)

class TimelineService:

    @staticmethod
    def log_event(
        db: Session,
        status: str,
        action_by_role: Optional[str] = None,
        action_by_user: Optional[str] = None,
        message: Optional[str] = None,
        disbursement_id: Optional[str] = None,
        disbursement_seq: Optional[int] = None,
        request_id: Optional[int] = None,
        details: Optional[Dict[str, Any]] = None
    ):
        return TimelineRepository.add_timeline_entry(
            db=db,
            status=status,
            action_by_role=action_by_role,
            action_by_user=action_by_user,
            message=message,
            disbursement_id=disbursement_id,
            disbursement_seq=disbursement_seq,
            request_id=request_id,
            details=details
        )

    @staticmethod
    def _resolve_names(db: Session, req):
        vessel_name = req.vessel
        if not vessel_name and req.vessel_id:
            vsl = db.query(MaVessel).filter(MaVessel.vessel_id == req.vessel_id).first()
            if vsl:
                vessel_name = vsl.name

        port_name = None
        if req.port_id:
            port = db.query(MaPort).filter(MaPort.port_id == req.port_id).first()
            if port:
                port_name = port.name

        return vessel_name or "N/A", port_name or "N/A"

    @staticmethod
    def get_all_requests_timeline_summary(db: Session) -> DisbursementSummaryListResponseDTO:
        requests = TimelineRepository.get_all_client_requests(db)
        items = []

        for req in requests:
            vessel_name, port_name = TimelineService._resolve_names(db, req)
            disb_id = req.disbursement_id or f"PDA-{req.request_id}"
            
            # Fetch raw timeline entries for this request
            entries = TimelineRepository.get_raw_timeline_entries(db, str(req.request_id))
            if not entries and req.disbursement_id:
                entries = TimelineRepository.get_raw_timeline_entries(db, req.disbursement_id)

            # Determine stage details
            current_status = "Submitted"
            current_step = 1
            progress_pct = 25
            last_updated = req.created_on

            has_step2 = False
            has_step3 = False
            has_step4 = False
            is_rejected = False

            for entry in entries:
                last_updated = entry.created_on
                st = (entry.status or "").upper()
                if "REJECT" in st:
                    is_rejected = True
                elif "PORT_AGENT" in st or "REVIEW" in st or "INITIATED" in st:
                    has_step2 = True
                elif "APPROV" in st:
                    has_step2 = True
                    has_step3 = True
                elif "COMPLET" in st:
                    has_step2 = True
                    has_step3 = True
                    has_step4 = True

            if is_rejected:
                current_status = "Rejected"
                current_step = 3
                progress_pct = 75
            elif has_step4:
                current_status = "Completed"
                current_step = 4
                progress_pct = 100
            elif has_step3:
                current_status = "Approved"
                current_step = 3
                progress_pct = 75
            elif has_step2:
                current_status = "Under Review"
                current_step = 2
                progress_pct = 50
            else:
                current_status = "Submitted"
                current_step = 1
                progress_pct = 25

            # Build 4-step progress list
            steps_summary = [
                TimelineStepSummaryDTO(step=1, name="Submitted", status="COMPLETED" if current_step >= 1 else "PENDING"),
                TimelineStepSummaryDTO(step=2, name="Under Review", status="COMPLETED" if current_step >= 2 else ("CURRENT" if current_step == 1 else "PENDING")),
                TimelineStepSummaryDTO(step=3, name="Approved" if not is_rejected else "Rejected", status="REJECTED" if is_rejected else ("COMPLETED" if current_step >= 3 else "PENDING")),
                TimelineStepSummaryDTO(step=4, name="Completed", status="COMPLETED" if current_step >= 4 else "PENDING")
            ]

            items.append(
                DisbursementSummaryItemDTO(
                    request_id=req.request_id,
                    disbursement_id=disb_id,
                    vessel=vessel_name,
                    port=port_name,
                    submitted_on=req.created_on,
                    current_status=current_status,
                    current_step=current_step,
                    total_steps=4,
                    progress_percentage=progress_pct,
                    last_updated=last_updated,
                    timeline_steps=steps_summary
                )
            )

        return DisbursementSummaryListResponseDTO(total_count=len(items), data=items)

    @staticmethod
    def get_single_request_detailed_timeline(db: Session, identifier: str) -> DetailedDisbursementTimelineResponseDTO:
        # Find request by request_id or disbursement_id
        req = None
        if identifier.isdigit():
            req = db.query(TxnClientDisbursementRequest).filter(TxnClientDisbursementRequest.request_id == int(identifier)).first()
        if not req:
            req = db.query(TxnClientDisbursementRequest).filter(TxnClientDisbursementRequest.disbursement_id == identifier).first()

        vessel_name = "N/A"
        port_name = "N/A"
        request_id = None
        disb_id = identifier

        if req:
            vessel_name, port_name = TimelineService._resolve_names(db, req)
            request_id = req.request_id
            disb_id = req.disbursement_id or f"PDA-{req.request_id}"

        entries = TimelineRepository.get_raw_timeline_entries(db, identifier)
        
        # Build step details mapping
        step_events = {1: None, 2: None, 3: None, 4: None}
        is_rejected = False

        for entry in entries:
            st = (entry.status or "").upper()
            if "CLIENT_REQUEST" in st or "SUBMIT" in st:
                step_events[1] = entry
            if "PORT_AGENT" in st or "REVIEW" in st or "INITIATE" in st:
                step_events[2] = entry
            if "APPROV" in st:
                step_events[3] = entry
            if "COMPLET" in st:
                step_events[4] = entry
            if "REJECT" in st:
                is_rejected = True
                step_events[3] = entry

        current_step = 1
        if step_events[4]:
            current_step = 4
        elif step_events[3]:
            current_step = 3
        elif step_events[2]:
            current_step = 2

        status_name = "Submitted"
        if is_rejected:
            status_name = "Rejected"
        elif current_step == 4:
            status_name = "Completed"
        elif current_step == 3:
            status_name = "Approved"
        elif current_step == 2:
            status_name = "Under Review"

        progress_pct = current_step * 25

        timeline_list = []
        titles = {1: "Submitted", 2: "Under Review", 3: "Rejected" if is_rejected else "Approved", 4: "Completed"}

        for s in range(1, 5):
            evt = step_events.get(s)
            if evt:
                st_code = "REJECTED" if (s == 3 and is_rejected) else ("COMPLETED" if s <= current_step else "PENDING")
                desc = evt.message or f"PDA request {titles[s].lower()}."
                upd_by = evt.action_by_role or evt.action_by_user or "System"
                dt = evt.created_on
            else:
                st_code = "PENDING"
                desc = None
                upd_by = None
                dt = None

            timeline_list.append(
                DetailedTimelineStepDTO(
                    step=s,
                    title=titles[s],
                    status=st_code,
                    date_time=dt,
                    description=desc,
                    updated_by=upd_by
                )
            )

        return DetailedDisbursementTimelineResponseDTO(
            request_id=request_id,
            disbursement_id=disb_id,
            vessel=vessel_name,
            port=port_name,
            current_status=status_name,
            current_step=current_step,
            progress_percentage=progress_pct,
            timeline=timeline_list
        )
