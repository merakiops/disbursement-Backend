import logging
from dotenv import load_dotenv
import os
from sqlalchemy.orm import Session
from app.repo.fda_repo import FDARepository
import pytz
from app.services.fda_service import FDAService
from app.dto.fda_dto import FDACreationRequestDto,FDACreationWithPDARequestDto,TxnFdaEditDto,RecalculationRequestDTO,TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO
from app.models.txn_disbursement import TxnDisbursement
from app.services.communication_history_service_impl import TxnCommunicationHistoryServiceImpl
from fastapi import HTTPException
import copy

load_dotenv()

# Configure Logging
logger = logging.getLogger("app_logger")
class FDAServiceImpl(FDAService):
    """
    Implementation of PDAService interface to handle PDA-related operations.
    """
    def __init__(self):
        self.fda_repo = FDARepository()
        self.comm_history_service = TxnCommunicationHistoryServiceImpl()
        self.host = os.getenv("HOST")
        self.meraki_email = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

    def fda_creation_without_pda(self,user: str, dto: FDACreationRequestDto,db: Session):
        try:
            disbursement = self._create_fda_without_pda(user, dto, db)
            if dto.fda_submit=='Y':
                disbursement_seq=disbursement['disbursement_seq']
                disbursement_data = self.get_disbursement_by_disbursment_seq(disbursement_seq,db)
                self.comm_history_service.create_fda_communication_history(
                    disbursement=disbursement_data,
                    user=user,
                    dto=dto,
                    db=db,
                    fda_type="fda_without_pda"
                )
            
                logger.info(f"Disbursement {disbursement['disbursement_seq']} created successfully")
            return disbursement
            
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Failed to initiate disbursement")
            raise HTTPException(
                status_code=500,
                detail=f"Failed to create disbursement "
            )

    def _create_fda_without_pda(self,user: str, dto: FDACreationRequestDto,db: Session):
        return self.fda_repo.fda_creation_without_pda( user, dto,db)
    
    def get_disbursement_objects_for_completed_pda(self,db: Session):
        return FDARepository.get_disbursement_objects_for_completed_pda(db)
    
    def get_port_agent_data_by_disbursement_seq(self,disbursement_seq:int,db: Session):
        return FDARepository.get_port_agent_data_by_disbursement_seq(disbursement_seq,db)

    def fda_creation_with_pda(self,user: str, dto: FDACreationRequestDto,db: Session):
        try:
            disbursement = self._create_fda_with_pda(user, dto, db)
            disbursement_seq=disbursement['disbursement_seq']
            disbursement_data = self.get_disbursement_by_disbursment_seq(disbursement_seq,db)
            self.comm_history_service.create_fda_communication_history(
                    disbursement=disbursement_data,
                    user=user,
                    dto=dto,
                    db=db,
                    fda_type="fda_with_pda"
                )

            logger.info(f"Disbursement {disbursement['disbursement_seq']} created successfully")
            return disbursement
            
        except Exception as e:
            logger.error(f"Failed to initiate disbursement")
            raise HTTPException(
                status_code=500,
                detail=f"Failed to create disbursement"
            )
    
    def _create_fda_with_pda(self,user: str, dto: FDACreationRequestDto,db: Session):
        try:
            return self.fda_repo.fda_creation_with_pda( user, dto,db)
        except Exception as e:
            logger.error(f"Database error creating disbursement")
            raise HTTPException(
                status_code=500,
                detail=f"Failed to create disbursement"
            )
    
    def update_fda_details(self,dto: TxnFdaEditDto, user: str,  db: Session):
        disbursement = FDARepository.get_disbursement_by_disbursment_seq(dto.disbursement_seq, db)
        
        old_disbursement = copy.deepcopy(disbursement) if disbursement else {}
        # Update PDA details
        result = FDARepository.update_fda_details(dto,user,db)

        # Create communication history based on action
        if dto.fda_submit == 'Y' or dto.fda_save=='Y':
            self.comm_history_service.create_fda_save_and_submit_communication_history(dto, old_disbursement, user, db)
    
        return result
        
    def port_change_in_fda(self,dto: RecalculationRequestDTO,db: Session):
        return FDARepository.port_change_in_fda(dto,db)
    
    def Re_calculation(self,dto: RecalculationRequestDTO,db: Session):
        return FDARepository.Re_calculation(dto,db)
    
    def client_request(self,user,request_dto:TxnClientApprovalRequestInitiateDTo,db):
        FDARepository.client_request(user,request_dto,db)
        disbursement_dtl = FDARepository.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq, db)

        # Create communication history for client approval request
        self.comm_history_service.create_client_approval_request_communication_history(
            disbursement_dtl, request_dto, user, db
        )
    
    
    def get_disbursement_by_disbursment_seq(self,disbursmenet_seq:int, db: Session):
        return FDARepository.get_disbursement_by_disbursment_seq(disbursmenet_seq, db)
        
    def update_fda_disbursement_paClientform_submit(self,request_body: DisbursementClientFormRequestDTO,user:str, db: Session):
        # Get old data before update
        disbursement = FDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        old_disbursement = copy.deepcopy(disbursement) if disbursement else {}
        
        # Update the disbursement
        result = FDARepository.update_fda_disbursement_paClientform_submit(request_body, db)
        
        # Get new data after update
        new_disbursement = FDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        
        # Create communication history for client form submission
        self.comm_history_service.create_fda_client_form_submit_communication_history(
            old_disbursement, new_disbursement, user, db
        )
        
        return result