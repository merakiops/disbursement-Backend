from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.communication_history_dto import TxnCommunicationHistoryBaseRequestDTO
from app.models.txn_disbursement import TxnDisbursement
from app.dto.pda_dto import DisbursementPAFormRequestDTO, TxnPdaEditDto
from app.dto.fda_dto import FDACreationRequestDto


class TxnCommunicationHistoryService(ABC):

    @abstractmethod
    def fetch_communication_history_detail(self,dto:TxnCommunicationHistoryBaseRequestDTO, db: Session):
        pass
    
    @abstractmethod
    def create_disbursement_history(self, disbursement_seq: int, disbursement_id: str, 
                                  user: str, dto: any, db: Session) -> None:
        pass
    
    @abstractmethod
    def create_return_to_pda_history(self, disbursementDtls: TxnDisbursement,returnMsg:str, emailTo:str, submitter:str, portagent:str, db: Session) -> None:
        pass

    @abstractmethod
    def create_pda_save_communication_history(self,pda_dto:TxnPdaEditDto, disbursement:TxnDisbursement, user:str, db:Session) -> None:
        pass

    @abstractmethod
    def create_pda_re_request_communication_history(self,pda_dto:TxnPdaEditDto, disbursement:TxnDisbursement, user:str, db:Session) -> None:
        pass

    @abstractmethod
    def create_pda_rerturn_re_request_communication_history(self,pda_dto:TxnPdaEditDto, disbursement:TxnDisbursement, user:str, db:Session) -> None:
        pass

    @abstractmethod
    def create_pda_submit_communication_history(self,pda_dto:TxnPdaEditDto, disbursement:TxnDisbursement, user:str, db:Session) -> None:
        pass

    @abstractmethod
    def create_pda_submission_pa_history(self, disbursement:TxnDisbursement, request_body:DisbursementPAFormRequestDTO, db:Session) -> None:
        pass

    @abstractmethod
    def create_pa_re_submit_communication_history(self,new_disbursement:TxnDisbursement, old_disbursement:TxnDisbursement, request_body:DisbursementPAFormRequestDTO, db:Session) -> None:
        pass

    @abstractmethod
    def create_fda_communication_history(self, disbursement: TxnDisbursement, user: str, dto: FDACreationRequestDto, db: Session, fda_type: str) -> None:
        pass

    @abstractmethod
    def create_fda_save_and_submit_communication_history(self, dto, old_disbursement, user, db):
        pass

    @abstractmethod
    def create_fda_save_and_submit_communication_history(self, dto, old_disbursement, user, db):
        pass
    
    @abstractmethod
    def create_pda_client_form_submit_communication_history(old_disbursement, new_disbursement, user, db):
        pass

    @abstractmethod
    def create_fda_client_form_submit_communication_history(old_disbursement, new_disbursement, user, db):
        pass