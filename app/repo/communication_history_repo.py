from app.models.company import MaCompany, MaCompanyType
from app.models.user import User
from app.models.txn_communication_history import TxnCommunicationHistory
from app.models.txn_communication_history_files import TxnCommunicationHistoryFiles
from sqlalchemy.orm import Session
from sqlalchemy import func
from fastapi import HTTPException, status
from app.dto.communication_history_dto import TxnCommunicationHistoryBaseRequestDTO
from app.dto.pda_dto import TxnDisbursementInitiateDTo,ReturnToPdaRequestDTO,TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO,TxnPdaEditDto
from sqlalchemy.exc import SQLAlchemyError
import logging
from typing import List
from app.core.generic_update_function import generic_update

logger = logging.getLogger("app_logger")

class CommunicationHistroyRepository:
    
    @staticmethod
    def fetch_communication_history_detail(dto:TxnCommunicationHistoryBaseRequestDTO, db: Session):
        result=db.query(TxnCommunicationHistory).filter(TxnCommunicationHistory.disbursement_seq==dto.disbursement_seq).all()
        return result
    
    @staticmethod
    def create_communication_history(db: Session, history_data: TxnCommunicationHistory) -> TxnCommunicationHistory:
        """Create communication history record"""
        logger.debug(f"Repository: Creating communication history for disbursement_seq: {history_data.disbursement_seq}")
        try:
            db.add(history_data)
            db.commit()
            db.refresh(history_data)
            logger.debug(f"Repository: Communication history created successfully with ID: {history_data.comm_history_id}")
            return history_data
        except SQLAlchemyError as e:
            db.rollback()
            logger.error(f"Repository: Error creating communication history: {e}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create communication history"
            )
    
    @staticmethod
    def create_communication_history_files(db: Session, file_records: List[TxnCommunicationHistoryFiles]) -> None:
        """Create communication history files records"""
        logger.debug(f"Repository: Creating {len(file_records)} communication history files")
        try:
            db.add_all(file_records)
            db.commit()
            logger.debug(f"Repository: Communication history files created successfully")
        except SQLAlchemyError as e:
            db.rollback()
            logger.error(f"Repository: Error creating communication history files: {e}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create communication history files"
            )
    
    @staticmethod
    def create_pda_submit_communication_history(disbursement, db):
        """Create communication history for PDA submit action"""
        from app.core.constants import SourceType
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message="PDA Submitted By Port Agent",
            pda_id=disbursement.pda.pda_id,
            port_agent_resp_data=disbursement.pda.portagent_pda_data,
            meraki_resp_data=disbursement.pda.meraki_pda_data,
            created_by="Port Agent",
            created_on=func.now(),
            source_type=SourceType.PORTAGENT,
            flag="PDA Submit"
        )
        
        CommunicationHistroyRepository.create_communication_history(db, comm_history)
    
    @staticmethod
    def create_pda_re_submit_communication_history(disbursement, db):
        """Create communication history for PDA re-submit action"""
        from app.core.constants import SourceType
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message="PDA Re-Submitted By Port Agent",
            pda_id=disbursement.pda.pda_id,
            port_agent_resp_data=disbursement.pda.portagent_pda_data,
            meraki_resp_data=disbursement.pda.meraki_pda_data,
            created_by="Port Agent",
            created_on=func.now(),
            source_type=SourceType.PORTAGENT,
            flag="PDA Re-Submit"
        )
        
        CommunicationHistroyRepository.create_communication_history(db, comm_history)
