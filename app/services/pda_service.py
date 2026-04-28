"""
Author: Punith
Description: This module defines the abstract class `PDAService`, which provides an interface for managing PDA operations
such as adding, validating, and updating PDA statuses in a database.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.pda_dto import TxnDisbursementInitiateDTo,DisbursementPAFormRequestDTO,TxnDisbursementInitiateManualDTo,TxnPdaEditDto, TxnReRequestInitiateDTo,DisbursementClientFormRequestDTO,RecalculateDisbursementRequestDTO,TxnClientApprovalRequestInitiateDTo,PtmInstrMailRequestDTO
from app.models.txn_pa_form_link import PAFormLink
from app.models.txn_client_link import ClientFormLink

class PDAService(ABC):
    """
    Abstract class defining PDA-related operations.
    """

    @abstractmethod
    def initiate_disbursement(self,user: str, dto: TxnDisbursementInitiateDTo,db: Session):
        pass
    @abstractmethod
    def add_pda_link(self,pda_token_link : PAFormLink, db: Session):
        pass

    @abstractmethod
    def validate_pda_link(self,db: Session, registration_token: str, email: str):
        pass
    @abstractmethod
    def add_or_update_paform_otp(self,disbursement_seq: int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
        pass

    @abstractmethod
    def validate_pa_form_otp(self, uuid :str,otp:int,db: Session):
        pass
    
    @abstractmethod
    def get_disbursement_by_disbursment_seq(self,disbursmenet_seq:int, db: Session):
        pass

    @abstractmethod
    def get_json_template_by_name(self,json_name:str,db:Session):
        pass
    @abstractmethod
    def update_pda_disbursement_paform_submit(self,request_body:DisbursementPAFormRequestDTO, db:Session):
        pass
    
    @abstractmethod
    def initiate_disbursement_manual(self,user: str, dto: TxnDisbursementInitiateManualDTo,db: Session):
        pass
    
    @abstractmethod
    def get_disbursement_detail_by_seq(self,disbursement_seq:int,db: Session):
        pass
    @abstractmethod
    def update_pda_details(self,pda_dto: TxnPdaEditDto,user:str,db:Session):
        pass

    @abstractmethod
    def update_pda_re_request_flag(self,request_dto:TxnReRequestInitiateDTo,db:Session):
        pass

    @abstractmethod
    def add_pda_client_link(self,pda_token_link : ClientFormLink, db: Session):
        pass

    @abstractmethod
    def validate_client_link(self,db: Session, pda_token: str, email: str):
        pass

    @abstractmethod
    def add_or_update_client_otp(self,disbursement_seq: int,pda_id:int, fda_id:int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
        pass

    @abstractmethod
    def validate_client_form_otp(self, uuid :str,otp:int,db: Session):
        pass
    @abstractmethod
    def update_pda_disbursement_paClientform_submit(self,request_body: DisbursementClientFormRequestDTO, user:str, db: Session):
        pass

    @abstractmethod
    def recalculate_disbursement(self,request_data: RecalculateDisbursementRequestDTO, db: Session):
        pass

    @abstractmethod
    def add_pda_client_link_noauth(self,client_token_link: ClientFormLink, db: Session):
        pass
    
    @abstractmethod
    def validate_client_link_noauth(self,db: Session, token: str):
        pass

    @abstractmethod
    def update_pda_disbursement_paClientform_submit_noauth(request_body: DisbursementClientFormRequestDTO, db: Session):
        pass

    @abstractmethod
    def get_vessel_details_by_pda_vslid(self,pda_vsl_id:int,db: Session):
        pass
    
    @abstractmethod
    def get_email_sign_by_user(self,username:str,db:Session):
        pass
    
    @abstractmethod
    def client_request(self,user,request_dto:TxnClientApprovalRequestInitiateDTo,db:Session):
        pass

    @abstractmethod
    def resend_pda_link(self,dibursement_seq,db:Session):
        pass

    @abstractmethod
    def active_inactive_delete_state(self,dto,db:Session):
        pass

    @abstractmethod
    def check_inactive_or_deleted(self,disbursement):
        pass

    @abstractmethod
    def payment_instruction_mail(self,dto:PtmInstrMailRequestDTO,username,db):   
        pass