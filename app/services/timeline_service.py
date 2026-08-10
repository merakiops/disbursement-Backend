from sqlalchemy.orm import Session
from typing import Optional, Dict, Any, List
from app.repo.timeline_repo import TimelineRepository
from app.dto.timeline_dto import DisbursementTimelineListResponseDTO, TimelineEntryResponseDTO

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
    def get_timeline(db: Session, identifier: str) -> DisbursementTimelineListResponseDTO:
        entries = TimelineRepository.get_timeline(db, identifier)
        timeline_dtos = [TimelineEntryResponseDTO.model_validate(entry) for entry in entries]
        return DisbursementTimelineListResponseDTO(
            disbursement_id=identifier,
            total_entries=len(timeline_dtos),
            timeline=timeline_dtos
        )
