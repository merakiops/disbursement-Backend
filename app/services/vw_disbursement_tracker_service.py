from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO
from app.dto.vw_disbursement_tracker_dtls_dto import DisbursementTrackerDetailsDTO


class DisbursementListService(ABC):
    
    @abstractmethod
    def get_disbursement_list(self,cargo_dto:DisbursementTrackerRequestDTO,db:Session):
        pass
    
    @abstractmethod
    def get_disbursement_details(self,disbursement_seq:int,db:Session):
        pass

    @abstractmethod
    def disbursement_details_edit(self, user: str, dto: DisbursementTrackerDetailsDTO,db: Session):
        pass
    
    @abstractmethod
    def get_disbursement_client_list(self,username:str,dto:DisbursementTrackerRequestDTO,db:Session):
        pass

    @abstractmethod
    def export_disbursement_detail(self,dto:DisbursementTrackerRequestDTO,db:Session):
        pass
    
    @abstractmethod
    def get_unique_voyage_number(self,db:Session):
        pass