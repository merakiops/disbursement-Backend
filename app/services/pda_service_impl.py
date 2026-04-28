"""
Author: Punith
Description: This module implements the OtpSerivce interface, providing various methods to handle otp,
Validation create new Otp and update the status .
"""
import copy
import json
import logging
from dotenv import load_dotenv
import os
from fastapi import BackgroundTasks, HTTPException, status
from sqlalchemy.orm import Session, joinedload
from datetime import datetime
from app.services.pda_service import PDAService
from app.dto.pda_dto import ReturnToPdaRequestDTO,TxnDisbursementInitiateDTo,DisbursementPAFormRequestDTO,TxnDisbursementInitiateManualDTo,TxnPdaEditDto, TxnReRequestInitiateDTo,DisbursementClientFormRequestDTO,RecalculateDisbursementRequestDTO,TxnClientApprovalRequestInitiateDTo, TxnDisbursementDto,RecordState,PtmInstrMailRequestDTO
from app.repo.pda_repo import PDARepository
from app.models.txn_pa_form_link import PAFormLink
from app.models.txn_client_link import ClientFormLink
from typing import Dict, Any, Optional
from app.core.SendMail import SendMail
from app.core.security import encrypt_token
import uuid
from app.models.txn_pa_form_link import PAFormLink
from app.services.company_service_impl import CompanyServiceImpl
from app.services.port_service_impl import PortServiceImpl
from app.services.communication_history_service_impl import TxnCommunicationHistoryServiceImpl
from app.models.txn_pa_form_otp import TxnPAFormOTP
from app.models.txn_disbursement import TxnDisbursement
from app.models.company import MaCompany
from app.models.txn_communication_history import TxnCommunicationHistory
from app.repo.communication_history_repo import CommunicationHistroyRepository
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")
load_dotenv()

# Configure Logging
logger = logging.getLogger("app_logger")
class PDAServiceImpl(PDAService):
    """
    Implementation of PDAService interface to handle PDA-related operations.
    """
    def __init__(self):
        self.pda_repo = PDARepository()
        self.comm_history_service = TxnCommunicationHistoryServiceImpl()
        self.host = os.getenv("HOST")
        self.meraki_email = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

    async def initiate_disbursement(self,user: str, request_data: TxnDisbursementInitiateDTo, background_tasks: BackgroundTasks,db: Session) -> TxnDisbursementDto:
        """
        Args:
            username: User initiating the request
            request_data: Disbursement data
            background_tasks: Background task manager
            db: Database session
            
        Returns:
            TxnDisbursementDto: Created disbursement
            
        Raises:
            HTTPException: If creation fails
        """
        try:
            # 1. Create disbursement
            disbursement = await self._create_disbursement(user, request_data, db)
            
            # 2. Create communication history
            self.comm_history_service.create_disbursement_history(
                disbursement=disbursement,
                user=user,
                dto=request_data,
                db=db
            )
            
            # 3. Generate secure link
            link_data = await self._generate_secure_link(disbursement, request_data, db)
            
            # 3. Prepare email context
            email_context = await self._prepare_email_context(
                disbursement, request_data, link_data, db
            )
            
            # 4. Schedule email notification
            self._schedule_email_notification(
                email_context, request_data, background_tasks
            )
            
            logger.info(f"Disbursement {disbursement.disbursement_seq} created successfully")
            return disbursement
            
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Failed to initiate disbursement")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create disbursement"
            )
    
    def add_pda_link(self,pda_token_link : PAFormLink, db: Session):
        return PDARepository.add_pda_link(pda_token_link,db)
    
    def validate_pda_link(self,db: Session, pda_token: str, email: str):
        return PDARepository.validate_pda_link(db,pda_token,email)
    def add_or_update_paform_otp(self,disbursement_seq: int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
        return PDARepository.add_or_update_paform_otp(disbursement_seq,email,otp,uuid,status,db)
    def validate_pa_form_otp(self, uuid :str,otp:int,db: Session):
        otp = PDARepository.validate_pa_form_otp(uuid,otp,db)
        if not otp:
            logger.warning(f"OTP record not found for uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP record not found.")
        if otp.status != 'Y':
            logger.warning(f"OTP record is inactive for  uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP record is not Active.")
        if otp.expires_at < datetime.now():
            logger.warning(f"OTP record is Expired for  uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=f"OTP record is Expired for  uuid: {uuid}")
        return otp
    
    def get_disbursement_by_disbursment_seq(self,disbursmenet_seq:int, db: Session):
        return PDARepository.get_disbursement_by_disbursment_seq(disbursmenet_seq,db)
    
    def get_json_template_by_name(self,json_name:str,db:Session):
        return PDARepository.get_json_template_by_name(json_name,db)

    def update_pda_disbursement_paform_submit(self,request_body:DisbursementPAFormRequestDTO, db:Session):
        disbursement = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        
        old_disbursement = copy.deepcopy(disbursement) if disbursement else {}
        # Update PDA details
        result = PDARepository.update_pda_disbursement_paform_submit(request_body,db)

        new_disbursement = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)

        # Create communication history based on action  disbursement_dtl.pda.is_re_request=='Y'
        if old_disbursement.pda.is_re_request=='Y' and old_disbursement.pda.is_manual_entry == 'N':
            self.comm_history_service.create_pa_re_submit_communication_history(new_disbursement, old_disbursement, request_body, db)
        else:
            self.comm_history_service.create_pda_submission_pa_history(new_disbursement, request_body, db)

        return result

    def initiate_disbursement_manual(self,user: str, dto: TxnDisbursementInitiateManualDTo,db: Session):
        return PDARepository.initiate_disbursement_manual(user,dto,db)
    
    def get_disbursement_detail_by_seq(self,disbursement_seq:int,db: Session):
        return PDARepository.get_disbursement_detail_by_seq(disbursement_seq,db)
    
    def return_to_pda(self,request_body:ReturnToPdaRequestDTO,email_cc_list:list, email_to_list:list,db:Session):
        
        disbursement = db.query(TxnDisbursement).options(joinedload(TxnDisbursement.pa_form_links)) .filter(TxnDisbursement.disbursement_seq == request_body.disbursement_seq).first()
        if not disbursement:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Disbursement with seq {request_body.disbursement_seq} not found."
            )
        
        result = db.query(
            TxnPAFormOTP.email,
            MaCompany.company_name.label('agent_name')
        ).outerjoin(MaCompany, (disbursement.portagent_id == MaCompany.company_id) & (MaCompany.company_type_id == 3))\
         .filter(TxnPAFormOTP.disbursement_seq == disbursement.disbursement_seq).first()
        
        submitter_email, agent_name = result if result else (None, None)

        clean_to_list = [
            email.strip()
            for email in email_to_list
            if submitter_email is None or email.lower().strip() != submitter_email.lower().strip()
        ]

        final_to_list = clean_to_list + [email.strip() for email in email_cc_list]

        final_emails = ",".join(final_to_list)

        result = PDARepository.return_to_pda(request_body,db)
       
        self.comm_history_service.create_return_to_pda_history(
            disbursementDtls = result,
            returnMsg = request_body.return_message,
            emailTo = final_emails,
            submitter = submitter_email,
            portagent=agent_name,
            db=db
        )
        
        return result
    
    def update_pda_details(self,pda_dto: TxnPdaEditDto,user:str,db:Session):
        # Get old data for comparison
        disbursement = PDARepository.get_disbursement_by_disbursment_seq(pda_dto.disbursement_seq, db)
        
        old_disbursement = copy.deepcopy(disbursement) if disbursement else {}
        # Update PDA details
        PDARepository.update_pda_details(pda_dto,user,db)

        # Create communication history based on action
        if pda_dto.pda_save == 'Y' and old_disbursement.pda.is_manual_entry == 'N':
            self.comm_history_service.create_pda_save_communication_history(pda_dto, old_disbursement, user, db)
        
        if pda_dto.is_re_request == 'Y':
            self.comm_history_service.create_pda_re_request_communication_history(pda_dto, old_disbursement, user, db)

        if old_disbursement.portagent_id!=pda_dto.portagent_id and old_disbursement.return_status=='Y':
            self.comm_history_service.create_pda_rerturn_re_request_communication_history(pda_dto, old_disbursement, user, db)

        if pda_dto.pda_submit == 'Y' and old_disbursement.pda.is_manual_entry == 'N':
            self.comm_history_service.create_pda_submit_communication_history(pda_dto, old_disbursement, user, db)
            
        return PDARepository.get_disbursement_detail_by_seq(pda_dto.disbursement_seq, db)
    
    def update_pda_re_request_flag(self,request_dto:TxnReRequestInitiateDTo,db:Session):
        return PDARepository.update_pda_re_request_flag(request_dto,db)
    
    def add_pda_client_link(self,pda_token_link : ClientFormLink, db: Session):
        return  PDARepository.add_pda_client_link(pda_token_link,db)
    
    def validate_client_link(self,db: Session, token: str, email: str):
        return PDARepository.validate_client_link(db,token,email)

    def add_or_update_client_otp(self,disbursement_seq: int,pda_id:int, fda_id:int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
        return PDARepository.add_or_update_client_otp(disbursement_seq,pda_id,fda_id,email,otp,uuid,status,db)
    
    def validate_client_form_otp(self, uuid :str,otp:int,db: Session):
        otp = PDARepository.validate_client_form_otp(uuid,otp,db)
        if not otp:
            logger.warning(f"OTP record not found for uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP record not found.")
        if otp.status != 'Y':
            logger.warning(f"OTP record is inactive for  uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP record is not Active.")
        if otp.expires_at < datetime.now():
            logger.warning(f"OTP record is Expired for  uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=f"OTP record is Expired for  uuid: {uuid}")
        return otp
    def update_pda_disbursement_paClientform_submit(self, request_body: DisbursementClientFormRequestDTO, user: str, db: Session):
        """Update PDA client form submission with communication history"""
        
        # Get old data before update
        disbursement = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        old_disbursement = copy.deepcopy(disbursement) if disbursement else {}
        
        # Update the disbursement
        result = PDARepository.update_pda_disbursement_paClientform_submit(request_body, db)
        
        # Get new data after update
        new_disbursement = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        
        # Create communication history for client form submission
        self.comm_history_service.create_pda_client_form_submit_communication_history(
            old_disbursement, new_disbursement, user, db
        )
        
        return result
    
    def recalculate_disbursement(self,request_data: RecalculateDisbursementRequestDTO, db: Session):
        return PDARepository.recalculate_disbursement(request_data,db)

    def add_pda_client_link_noauth(self,client_token_link: ClientFormLink, db: Session):
        return PDARepository.add_pda_client_link_noauth(client_token_link,db)
    
    def validate_client_link_noauth(self,db: Session, token: str):
        return PDARepository.validate_client_link_noauth(db,token)
    
    def update_pda_disbursement_paClientform_submit_noauth(request_body: DisbursementClientFormRequestDTO, db: Session):
        return PDARepository.update_pda_disbursement_paClientform_submit_noauth(request_body,db)
    
    def get_vessel_details_by_pda_vslid(self,pda_vsl_id:int,db: Session):
        return PDARepository.get_vessel_details_by_pda_vslid(pda_vsl_id,db)
    
    def get_email_sign_by_user(self,username:str,db:Session):
        return PDARepository.get_email_sign_by_user(username,db)
    
    def client_request(self,user,request_dto:TxnClientApprovalRequestInitiateDTo,db):
        
        # Update PDA and status
        PDARepository.client_request(user,request_dto,db)
        # Get disbursement data before changes for communication history
        disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq, db)

        # Create communication history for client approval request
        self.comm_history_service.create_client_approval_request_communication_history(
            disbursement_dtl, request_dto, user, db
        )
        
        return disbursement_dtl

    async def _create_disbursement(
        self, 
        username: str, 
        request_data: TxnDisbursementInitiateDTo, 
        db: Session
    ) -> TxnDisbursementDto:
        try:
            return self.pda_repo.initiate_disbursement(db, username, request_data)
        except Exception as e:
            logger.error(f"Database error creating disbursement")
            raise
    
    async def _generate_secure_link(
        self, 
        disbursement: TxnDisbursementDto, 
        request_data: TxnDisbursementInitiateDTo, 
        db: Session
    ) -> Dict[str, Any]:
        """Generate secure link for PDA access."""
        try:
            # Generate secure token
            raw_token = uuid.uuid4().hex + uuid.uuid4().hex
            encrypted_token = encrypt_token(raw_token)
            pda_link = f"{self.host}pda-disburesement/{encrypted_token}"
            
            # Create link entry
            link_entry = PAFormLink(
                disbursement_seq=disbursement.disbursement_seq,
                registration_link=pda_link,
                pda_token=encrypted_token,
                email_to=",".join(request_data.get_email_to_list()),
                status='Y'
            )
            
            # Save link
            saved_link = PDARepository.add_pda_link(link_entry, db)
            
            return {
                "link": pda_link,
                "token": encrypted_token,
                "link_entry": saved_link
            }
            
        except Exception as e:
            logger.error(f"Failed to generate secure link")
            raise
    
    async def _prepare_email_context(
        self, 
        disbursement: TxnDisbursementDto, 
        request_data: TxnDisbursementInitiateDTo,
        link_data: Dict[str, Any],
        db: Session
    ) -> Dict[str, Any]:
        """Prepare email context for notification."""
        try:            
            company_service = CompanyServiceImpl()
            port_service = PortServiceImpl()
            
            # Get disbursement details
            # disbursement_dtl = self.pda_repo.get_disbursement_by_disbursment_seq(
            #     disbursement.disbursement_seq, db
            # )
            
            # Get vessel name safely
            vessel_name = ""
            if disbursement.pda_vsl_id:
                vessel_details = self.pda_repo.get_vessel_details_by_pda_vslid(
                    disbursement.pda_vsl_id, db
                )
                if vessel_details and vessel_details.vsl_dtls:
                    vessel_name = vessel_details.vsl_dtls.get('name', '')
            
            # Get port name safely
            port_name = ""
            if disbursement.port_id:
                port_dtl = port_service.get_port_info_by_id(disbursement.port_id, db)
                if port_dtl:
                    port_name = port_dtl.name
            
            # Get company names
            client_name = company_service.get_company_name_by_id(db, disbursement.client_id)
            
            # Build subject
            subject_parts = [
                vessel_name.upper() if vessel_name else "",
                f"VOY-{disbursement.voyage}" if disbursement.voyage else "",
                port_name.upper() if port_name else ""
            ]
            filtered_parts = [part for part in subject_parts if part]
            subject = f"PDA - {' - '.join(filtered_parts)} - {disbursement.disbursement_id}" if filtered_parts else f"PDA Request for Disbursement - {disbursement.disbursement_id}"

            # Prepare signature
            signature = request_data.email_signature
            if signature:
                signature = signature.replace("\n", "<br>")
            
            return {
                "subject": subject,
                "context": {
                    "client_name": client_name,
                    "pda_disbursement_link": link_data["link"],
                    "email_id": self.meraki_email,
                    "signature": signature
                }
            }
            
        except Exception as e:
            logger.error(f"Failed to prepare email context")
            raise
    
    def _schedule_email_notification(
        self,
        email_context: Dict[str, Any],
        request_data: TxnDisbursementInitiateDTo,
        background_tasks: BackgroundTasks
    ) -> None:
        """Schedule email notification."""
        try:
            background_tasks.add_task(
                SendMail.send_template_email,
                to_email=request_data.get_email_to_list(),
                subject=email_context["subject"],
                template_name="pda_disbursement.html",
                context=email_context["context"],
                template_type="html",
                cc_email=request_data.get_email_cc_list()
            )
            
        except Exception as e:
            logger.error(f"Failed to schedule email")
            # Don't raise here - email failure shouldn't break disbursement creation
        
    
    @staticmethod
    def _split_emails(value: str | None) -> list[str]:
        if not value:
            return []
        return [e.strip() for e in value.split(",") if e.strip()]

    @staticmethod
    def _build_subject(vessel_name: str, voyage: str, port_name: str,disbursement_id) -> str:
        parts = [
            vessel_name.upper() if vessel_name else None,
            f"VOY-{voyage}" if voyage else None,
            port_name.upper() if port_name else None,
            disbursement_id if disbursement_id else None
        ]
        parts = list(filter(None, parts))
        return f"PDA REQUEST - {' - '.join(parts)}" if parts else f"PDA Request for Disbursement - {disbursement_id}"

    def resend_pda_link(self,disbursement_seq: int,username: str,background_tasks: BackgroundTasks,db: Session) -> None:
        link = PDARepository.resend_pda_link(disbursement_seq, db)
        signature = PDARepository.get_email_sign_by_user(username, db)
        if signature:
            signature = signature.replace("\n", "<br>")

        disbursement = PDARepository.get_disbursement_by_disbursment_seq(disbursement_seq, db)
        if not disbursement or not disbursement.pda:
            raise HTTPException(status_code=404, detail="Disbursement or PDA not found")

        company_service = CompanyServiceImpl()
        port_service = PortServiceImpl()

        vessel_name = ""
        if disbursement.pda_vsl_id:
            vessel_details = self.pda_repo.get_vessel_details_by_pda_vslid(disbursement.pda_vsl_id, db)
            if vessel_details and vessel_details.vsl_dtls:
                vessel_name = vessel_details.vsl_dtls.get('name', '')

        port_name = ""
        if disbursement.port_id:
            port_dtl = port_service.get_port_info_by_id(disbursement.port_id, db)
            if port_dtl:
                port_name = port_dtl.name

        client_name = company_service.get_company_name_by_id(db, disbursement.client_id)
        port_agent_name = company_service.get_company_name_by_id(db, disbursement.portagent_id)

        email_to = PDAServiceImpl._split_emails(disbursement.pda.email_to)
        email_cc = PDAServiceImpl._split_emails(disbursement.pda.email_cc)

        subject = PDAServiceImpl._build_subject(
            vessel_name=vessel_name,
            voyage=disbursement.voyage,
            port_name=port_name,
            disbursement_id=disbursement.disbursement_id
        )
        
        context = {
            "client_name": client_name,
            "port_agent_name": port_agent_name,
            "invoice_number": disbursement.pda.invoice_ref_no,
            "vessel_name": vessel_name,
            "port_name": port_name,
            "eta": disbursement.pda.pda_eta,
            "etd": disbursement.pda.pda_etd,
            "pda_disbursement_link": link,
            "signature": signature,
            "email_id": self.meraki_email
        }

        background_tasks.add_task(
            SendMail.send_template_email,
            to_email=email_to,
            cc_email=email_cc,
            subject=subject,
            template_name="pda_disbursement.html",
            template_type="html",
            context=context
        )

    def active_inactive_delete_state(self,dto: RecordState, db: Session):
        return PDARepository.active_inactive_delete_state(dto,db)
    
    def check_inactive_or_deleted(self,disbursement):
        return PDARepository.check_inactive_or_deleted(disbursement)
    
    def payment_instruction_mail(self,dto:PtmInstrMailRequestDTO,username, background_tasks, db):
        if not dto.email_to:
            raise HTTPException(status_code=400, detail="No recipient email addresses provided.")
        
        # Update signature if requested
        if dto.update_signature == 'Y' and dto.signature:
            PDARepository.payment_instruction_mail(dto,username,db)

        # Build table HTML from body.table
        table_html = ""
        if dto.body and dto.body.get("table"):
            table_data = dto.body["table"]

            table_html = """
            <table cellpadding="0" cellspacing="0" border="1" width="100%" style="background-color:#ffffff; border-collapse:collapse; border:1px solid black;">
            """

            for key, value in table_data.items():
                table_html += f"""
                <tr>
                    <td style="font-size:14px; font-weight:bold; color:#444; padding:6px 10px; vertical-align:top; border:1px solid black;">
                        {key}
                    </td>
                    <td style="font-size:14px; font-weight:bold; color:#444; padding:6px 10px; vertical-align:top; border:1px solid black;">
                        {value}
                    </td>
                </tr>
                """

            table_html += "</table>"
        
        # Build email body
        body_text = dto.body.get("text", "").replace("\n", "<br>") if dto.body else ""
        upper_text = dto.body.get("upper_text", "").replace("\n", "<br>") if dto.body else ""
        lower_text = dto.body.get("lower_text", "").replace("\n", "<br>") if dto.body else ""
        
        # Handle signature
        signature = dto.signature
        if signature:
            signature = signature.replace("\n", "<br>")
        
        context = {
            "body_text": body_text,
            "upper_text": upper_text,
            "lower_text": lower_text,
            "table_html": table_html,
            "signature": signature,
            "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
        
        subject = dto.subject or "Payment Instruction"
        
        background_tasks.add_task(
            SendMail.send_template_email,
            to_email=dto.email_to,
            subject=subject,
            template_name="payment_instruction.html",
            context=context,
            template_type="html",
            cc_email=dto.email_cc or []
        )