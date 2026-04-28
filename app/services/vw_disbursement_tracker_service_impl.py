from sqlalchemy.orm import Session
from app.services.vw_disbursement_tracker_service import DisbursementListService
from app.repo.vw_disbursement_tracker_repo import DisbursementRepository
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO
from app.repo.vw_disbursement_tracker_repo import DisbursementRepository
from app.dto.vw_disbursement_tracker_dtls_dto import DisbursementTrackerDetailsDTO


class DisbursementListServiceImpl(DisbursementListService):
    
    def get_disbursement_list(self,disbursement_data:DisbursementTrackerRequestDTO,db:Session):
        return DisbursementRepository.get_disbursement_list(disbursement_data,db)
    
    def get_disbursement_details(self,disbursement_seq:int,db:Session):
        return DisbursementRepository.get_disbursement_details(disbursement_seq,db)
    
    def disbursement_details_edit(self,user: str, dto: DisbursementTrackerDetailsDTO,db: Session):
        return DisbursementRepository.UpdateDisbursementDetails(user,dto,db)
    
    def get_disbursement_approval_request_client_list(self,username,disbursement_data:DisbursementTrackerRequestDTO,db:Session):
        return DisbursementRepository.get_disbursement_approval_request_client_list(username,disbursement_data, db)
    
    def get_disbursement_client_list(self,username,disbursement_data:DisbursementTrackerRequestDTO,db:Session):
        return DisbursementRepository.get_disbursement_client_list(username,disbursement_data, db)

    def export_disbursement_detail(self, disbursement_data:DisbursementTrackerRequestDTO, db:Session):
        return DisbursementRepository.export_disbursement_list(disbursement_data,db)
    
    def get_unique_voyage_number(self,db:Session):
        return DisbursementRepository.get_unique_voyage_number(db)