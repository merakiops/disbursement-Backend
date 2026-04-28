from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.fda_dto import FDACreationRequestDto,FDACreationWithPDARequestDto,TxnFdaEditDto,RecalculationRequestDTO,TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO

class FDAService(ABC):
    """
    Abstract class defining FDA-related operations.
    """

    @abstractmethod
    def fda_creation_without_pda(self,user: str, dto: FDACreationRequestDto,db: Session):
        pass

    @abstractmethod
    def get_disbursement_objects_for_completed_pda(self,db: Session):
        pass
    @abstractmethod
    def get_port_agent_data_by_disbursement_seq(self,disbursement_seq:int,db: Session):
        pass

    @abstractmethod
    def fda_creation_with_pda(user: str, dto: FDACreationWithPDARequestDto, db: Session):
        pass

    @abstractmethod
    def update_fda_details(self,dto: TxnFdaEditDto, user: str,  db: Session):
        pass

    @abstractmethod
    def Re_calculation(self, dto: RecalculationRequestDTO,db: Session):
        pass

    @abstractmethod
    def port_change_in_fda(self, dto: RecalculationRequestDTO,db: Session):
        pass
    
    @abstractmethod
    def client_request(self,user,request_dto:TxnClientApprovalRequestInitiateDTo,db):
        pass
    @abstractmethod
    def get_disbursement_by_disbursment_seq(self,disbursmenet_seq:int, db: Session):
        pass
    
    @abstractmethod
    def update_fda_disbursement_paClientform_submit(self,request_body: DisbursementClientFormRequestDTO, db: Session):
            pass