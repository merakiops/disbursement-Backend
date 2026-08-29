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
        details: Optional[Dict[str, Any]] = None,
        created_on = None
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
            details=details,
            created_on=created_on
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
    def get_all_requests_timeline_summary(db: Session, client_id: Optional[int] = None) -> DisbursementSummaryListResponseDTO:
        requests = TimelineRepository.get_all_client_requests(db, client_id=client_id)
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
        client_name = "Client"
        request_id = None
        disb_id = identifier

        if req:
            vessel_name, port_name = TimelineService._resolve_names(db, req)
            request_id = req.request_id
            disb_id = req.disbursement_id or f"PDA-{req.request_id}"
            
            if req.client_id:
                from app.models.company import MaCompany
                company = db.query(MaCompany).filter(MaCompany.company_id == req.client_id).first()
                if company and company.company_name:
                    client_name = company.company_name
            
        from app.models.txn_disbursement import TxnDisbursement
        from app.models.txn_pda import PDAModel
        from app.models.txn_fda import TxnFDA

        has_pda = False
        pda_is_approved = False
        has_fda = False
        fda_is_approved = False
        disb = None
        if disb_id:
            disb = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_id == disb_id).first()
            
        if not disb and identifier.isdigit():
            # Fallback: if they just passed '888', check for 'MDA888' or disbursement_seq=888
            disb = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_id == f"MDA{identifier}").first()
            if not disb:
                disb = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == int(identifier)).first()
            if disb:
                disb_id = disb.disbursement_id
                
        if disb:
            pda = db.query(PDAModel).filter(PDAModel.disbursement_seq == disb.disbursement_seq).first()
            if pda:
                # PDA is considered uploaded if status is Submitted(3), Re-Submitted(4), Completed(7), etc.
                if pda.status in [3, 4, 7, 8, 9] or (pda.status_name and ("submit" in pda.status_name.lower() or "complet" in pda.status_name.lower())):
                    has_pda = True
                else:
                    has_pda = False
                    
                # PDA is approved if status is Completed(7) or explicitly says approved/completed
                if pda.status in [7] or (pda.status_name and ("approv" in pda.status_name.lower() or "complet" in pda.status_name.lower())):
                    pda_is_approved = True
            
            fda = db.query(TxnFDA).filter(TxnFDA.disbursement_seq == disb.disbursement_seq).first()
            if fda:
                if fda.status in [3, 4, 7, 8, 9] or (fda.status_name and ("submit" in fda.status_name.lower() or "complet" in fda.status_name.lower())):
                    has_fda = True
                else:
                    has_fda = False
                    
                if fda.status in [7] or (fda.status_name and ("approv" in fda.status_name.lower() or "complet" in fda.status_name.lower())):
                    fda_is_approved = True

        portagent_name = "Port Agent"
        if disb and disb.portagent_id:
            from app.models.company import MaCompany
            pa_company = db.query(MaCompany).filter(MaCompany.company_id == disb.portagent_id).first()
            if pa_company and pa_company.company_name:
                portagent_name = pa_company.company_name

        if client_name == "Client" and disb:
            c_id = disb.client_id or disb.comp_id
            if c_id:
                from app.models.company import MaCompany
                c_company = db.query(MaCompany).filter(MaCompany.company_id == c_id).first()
                if c_company and c_company.company_name:
                    client_name = c_company.company_name

        entries = TimelineRepository.get_raw_timeline_entries(db, identifier)
        if not entries and disb_id and disb_id != identifier:
             entries = TimelineRepository.get_raw_timeline_entries(db, disb_id)
        
                # --- File fetching patch ---
        from app.models.txn_disbursement_files import TxnDisbursementFiles
        timeline_files = db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.disbursement_seq == disb.disbursement_seq,
            TxnDisbursementFiles.source_type == "TIMELINE_STEP",
            TxnDisbursementFiles.is_deleted == "N"
        ).all() if disb else []
        file_map = {f.file_description.upper(): f for f in timeline_files}
        # ---------------------------

        timeline_list = []
        is_rejected = False
        current_step = 1

        if entries:
            # Deduplicate consecutive identical status entries
            deduped_entries = []
            last_status = None
            for entry in entries:
                if entry.status != last_status:
                    deduped_entries.append(entry)
                    last_status = entry.status

            current_step = len(deduped_entries)
            for s, evt in enumerate(deduped_entries, start=1):
                st = (evt.status or "").upper()
                if "REJECT" in st:
                    is_rejected = True
                
                details_data = evt.details if isinstance(evt.details, dict) else {}
                doc_url = details_data.get("document_url") or details_data.get("file_url") or details_data.get("url") or getattr(evt, "document_url", None)
                doc_name = details_data.get("document_name") or details_data.get("file_name") or details_data.get("filename") or getattr(evt, "document_name", None)

                title = (evt.status or "Action").replace("_", " ").title()
                st_code = "REJECTED" if "REJECT" in st else "COMPLETED"
                desc = evt.message or title
                
                if title.upper() in ["CLIENT REQUEST SENT", "PORT AGENT ASSIGNED"]:
                    upd_by = client_name
                elif title.upper() in ["PORT AGENT SUBMITTED PDA", "PDA SUBMITTED"]:
                    upd_by = portagent_name
                else:
                    upd_by = "Meraki"
                    
                dt = evt.created_on

                timeline_list.append(
                    DetailedTimelineStepDTO(
                        step=s,
                        title=title,
                        status=st_code,
                        date_time=dt,
                        description=desc,
                        updated_by=upd_by,
                        document_url=f"/api/v1/file_download/{file_map.get(title.upper()).file_id}" if file_map.get(title.upper()) else doc_url,
                        document_name=file_map.get(title.upper()).file_name if file_map.get(title.upper()) else doc_name
                    )
                )
        
        

        existing_titles = [t.title.upper() for t in timeline_list]

        def add_missing(title_str, is_done=True):
            # Check if an equivalent step already exists
            if not any(title_str.upper() in t or t in title_str.upper() for t in existing_titles):
                file_obj = file_map.get(title_str.upper())
                doc_url = f"/api/v1/file_download/{file_obj.file_id}" if file_obj else None
                doc_name = file_obj.file_name if file_obj else None
                
                updated_by_name = None
                if is_done:
                    if title_str.upper() in ["CLIENT REQUEST SENT", "PORT AGENT ASSIGNED"]:
                        updated_by_name = client_name
                    elif title_str.upper() in ["PORT AGENT SUBMITTED PDA", "PDA SUBMITTED"]:
                        updated_by_name = portagent_name
                    else:
                        updated_by_name = "Meraki"
                
                timeline_list.append(
                    DetailedTimelineStepDTO(
                        step=0,
                        title=title_str,
                        status="COMPLETED" if is_done else None,
                        date_time=None,
                        description=f"{title_str} (Recovered)" if is_done else None,
                        updated_by=updated_by_name,
                        document_url=doc_url,
                        document_name=doc_name
                    )
                )

        # Always show all 6 standard steps
        # Completed steps get "COMPLETED", future/bypassed steps get None (null)
        add_missing("Client Request Sent", is_done=True)
        add_missing("Port Agent Assigned", is_done=True)
        add_missing("Pda Uploaded", is_done=has_pda)
        add_missing("Pda Approved", is_done=pda_is_approved)
        add_missing("Fda Uploaded", is_done=has_fda)
        add_missing("Fda Approved", is_done=fda_is_approved)

        # Sort timeline: items with dates first, then null dates (legacy injected)
        # But we want legacy injected to be in logical order. The easiest way is to just 
        # define a fixed chronological order for known steps.
        order_map = {
            "CLIENT REQUEST SENT": 1,
            "CLIENT REQUEST": 1,
            "PORT AGENT ASSIGNED": 2,
            "REQUEST SENT TO PORT AGENT": 2,
            "ASSIGNED TO PORT AGENT": 2,
            "UNDER REVIEW": 2,
            "PORT AGENT SUBMITTED PDA": 3,
            "PDA SUBMITTED": 3,
            "SUBMITTED": 3,
            "PDA UPLOADED": 4,
            "PDA APPROVED": 5,
            "APPROVED": 5,  # Fallback for other approvals
            "FDA UPLOADED": 6,
            "FDA APPROVED": 7,
            "COMPLETED": 8
        }

        def get_order(t):
            upper_title = t.title.upper()
            for key, val in order_map.items():
                if key in upper_title:
                    return val
            return 99

        timeline_list.sort(key=lambda x: (get_order(x), x.date_time.timestamp() if x.date_time else 0))

        # Re-assign sequential steps
        completed_steps = 0
        for idx, t in enumerate(timeline_list, start=1):
            t.step = idx
            if t.status:  # count as completed if status is not None
                completed_steps += 1
                
        current_step = completed_steps

        status_name = "Submitted"
        if timeline_list:
            # Get the last completed step for status
            last_completed = [t for t in timeline_list if t.status]
            if last_completed:
                last_entry_title = last_completed[-1].title.upper()
            else:
                last_entry_title = ""

            if is_rejected:
                status_name = "Rejected"
            elif "COMPLET" in last_entry_title:
                status_name = "Completed"
            elif "APPROV" in last_entry_title or pda_is_approved:
                status_name = "Approved"
            elif "REVIEW" in last_entry_title or "PORT" in last_entry_title or "INITIATE" in last_entry_title or len(last_completed) > 1 or has_pda:
                status_name = "Under Review"
                
        if has_fda:
            status_name = "FDA Uploaded"

        # Calculate progress
        total_steps = len(timeline_list) if timeline_list else 4
        progress_pct = int(min(100, (current_step / total_steps) * 100)) if total_steps > 0 else 0
        
        if status_name == "Completed" or has_fda:
            progress_pct = 100

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

    @staticmethod
    def save_timeline_document(identifier: str, payload, username: str, db: Session):
        from app.models.txn_disbursement_files import TxnDisbursementFiles
        from app.models.txn_disbursement import TxnDisbursement
        from fastapi import HTTPException
        
        disb = None
        if identifier.startswith("MDA"):
            disb = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_id == identifier).first()
        else:
            disb = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == identifier).first()
            
        if not disb:
            raise HTTPException(status_code=404, detail="Disbursement not found")
            
        new_file = TxnDisbursementFiles(
            disbursement_seq=disb.disbursement_seq,
            file_name=payload.file_name,
            file_description=payload.step_title.upper(),
            complete_file_path=payload.file_path,
            source_type="TIMELINE_STEP",
            is_deleted="N",
            created_by=username,
            updated_by=username,
            sync="N"
        )
        db.add(new_file)
        db.commit()
        return {"status": "success", "message": "Document saved successfully", "file_id": new_file.file_id}
