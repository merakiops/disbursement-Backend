from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import Optional, Dict, Any, List
from app.models.txn_disbursement_timeline import TxnDisbursementTimeline
import logging

logger = logging.getLogger("app_logger")

class TimelineRepository:

    @staticmethod
    def add_timeline_entry(
        db: Session,
        status: str,
        action_by_role: Optional[str] = None,
        action_by_user: Optional[str] = None,
        message: Optional[str] = None,
        disbursement_id: Optional[str] = None,
        disbursement_seq: Optional[int] = None,
        request_id: Optional[int] = None,
        details: Optional[Dict[str, Any]] = None
    ) -> TxnDisbursementTimeline:
        try:
            entry = TxnDisbursementTimeline(
                disbursement_id=str(disbursement_id) if disbursement_id is not None else None,
                disbursement_seq=disbursement_seq,
                request_id=request_id,
                status=status,
                action_by_role=action_by_role,
                action_by_user=action_by_user,
                message=message,
                details=details
            )
            db.add(entry)
            db.commit()
            db.refresh(entry)
            logger.info(f"Timeline entry created: ID {entry.timeline_id}, status: {status}, disbursement_id: {disbursement_id}")
            return entry
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to create timeline entry: {e}")
            raise e

    @staticmethod
    def get_timeline(db: Session, identifier: str) -> List[TxnDisbursementTimeline]:
        query = db.query(TxnDisbursementTimeline)
        
        # Check if identifier is integer (disbursement_seq or request_id)
        if identifier.isdigit():
            val = int(identifier)
            query = query.filter(
                or_(
                    TxnDisbursementTimeline.disbursement_id == identifier,
                    TxnDisbursementTimeline.disbursement_seq == val,
                    TxnDisbursementTimeline.request_id == val
                )
            )
        else:
            query = query.filter(TxnDisbursementTimeline.disbursement_id == identifier)
            
        return query.order_by(TxnDisbursementTimeline.created_on.asc()).all()
