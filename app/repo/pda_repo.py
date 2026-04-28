from sqlalchemy.orm import Session, joinedload
from app.dto.pda_dto import TxnDisbursementInitiateDTo,TxnDisbursementDto,TxnDisbursementInitiateManualDTo,TxnPdaEditDto,DisbursementClientFormRequestDTO,RecalculateDisbursementRequestDTO,TxnClientApprovalRequestInitiateDTo,OTPValidationResponseDTO,PtmInstrMailRequestDTO
from app.dto.vw_vessel_details_comparision_dto import VesselDetailsComparisonDto
from app.models.txn_disbursement import TxnDisbursement
from app.models.user import User
from sqlalchemy.sql import func
from sqlalchemy import text,and_
from app.models.txn_pda import PDAModel
from app.models.txn_pa_form_link import PAFormLink
from datetime import datetime, timedelta
import traceback
from fastapi import HTTPException, status
from app.models.txn_pa_form_otp import TxnPAFormOTP
import os
import logging
from zoneinfo import ZoneInfo
from app.models.json_template import JsonTemplate
from app.models.vw_vessel_details_comparision import VesselDetailsComparison
from app.models.vw_fda_vessel_details_comparison import FdaVesselDetailsComparison
from app.repo.status_repo import StatusRepository
from app.dto.pda_dto import DisbursementPAFormRequestDTO,ReturnToPdaRequestDTO,RecordState
from app.models.txn_pda_vessel_details import PdaVesselDetails
from sqlalchemy.orm.attributes import flag_modified
from app.repo.tariff_repo import TariffRepo
import re
import copy
from app.repo.vessel_repo import VesselRepository
from app.core.build_json import build_disbursement_json,build_pa_disbursement_json,enrich_vessel_info
from app.tariff_rule_calculation.all_calculation import  calculate_grand_total,process_services_calculation
from app.models.bank_details import BankDetails
from app.models.company import MaCompany
import copy
from app.models.pda_portagent_history import PDAPortagentHistory
from app.models.txn_pda import PDAModel
import json
from app.models.txn_client_link import ClientFormLink
from app.models.txn_client_otp import TxnClientFormOTP 
from sqlalchemy.exc import SQLAlchemyError
from app.repo.port_repo import PortRepository
from app.repo.file_upload import FileUploadRepository
from typing import Dict, Any, Optional
from app.models.txn_fda import TxnFDA
from app.models.txn_disbursement_files import TxnDisbursementFiles


HOST = os.getenv("HOST")
logger = logging.getLogger(__name__)
SCHEMA_NAME = os.getenv("DB_SCHEMA")

class PDARepository:
    @staticmethod
    def _get_next_disbursement_id(db: Session) -> str:
        """Generate next disbursement ID"""
        try:
            result = db.execute(text(f"SELECT last_value FROM {SCHEMA_NAME}.txn_disbursement_disbursement_seq_seq"))
            curr_val = result.scalar()
            if curr_val is None or curr_val == 0 or curr_val == 1:
                # If the value is None or 0, treat it as the first disbursement (start at 1)
                next_val = 1
            else:
                # Otherwise, increment the current value
                next_val = curr_val + 1

            return f"MDA{next_val}"
        except SQLAlchemyError as e:
            logger.error(f"Database error generating disbursement ID: {e}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to generate disbursement ID"
            )
    
    @staticmethod
    def initiate_disbursement(db: Session, user: str, dto: TxnDisbursementInitiateDTo) -> TxnDisbursementDto:
        PDARepository._check_duplicate_disbursement(dto, db, "PDA")
        
        try:
                # Generate disbursement ID and fetch status
                disbursement_id = PDARepository._get_next_disbursement_id(db)
                status_obj = StatusRepository.get_status_details_by_name('REQUESTED', db)
                if not status_obj:
                    raise HTTPException(
                        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                        detail="Status 'REQUESTED' not found"
                    )
                
                # Get tariff rule
                tariff_rule = PDARepository._get_tariff_rule(dto.port_id, dto.country_id, db)
                
                # Build JSON data for PDA and port agent
                meraki_pda_data=build_disbursement_json(disbursement_id,dto.vessel_id,dto.client_id,dto.portagent_id,dto.port_id,dto.country_id,dto.purpose.purpose_id,dto.cargo.cargo_id,tariff_rule,dto.vessel_stay,dto.eta,dto.etd,dto.voyage,dto.pda_custom_calculation,dto.pda_currency_from,dto.pda_currency_to,dto.roe,db)
                portagent_pda_data = build_pa_disbursement_json(disbursement_id,dto,tariff_rule,db)
                
                # Create vessel details
                new_vsl = PDARepository._create_vessel_details(dto, db)
                
                # Create PDA and Disbursement records
                pda = PDARepository.create_pda(dto, user, status_obj.status_id, meraki_pda_data, portagent_pda_data)
                new_disbursement = PDARepository.create_disbursement(dto, user, disbursement_id, pda, new_vsl, tariff_rule)
                
                db.add(new_disbursement)
                db.flush()
                
                # Update user signature if requested
                if dto.update_signature == 'Y' and dto.email_signature:
                    PDARepository._update_user_signature(user, dto.email_signature, db)
                
                # Create communication history
                # PDARepository._create_communication_history(new_disbursement, user, dto, db)
                
                # Refresh and return
                db.refresh(new_disbursement)
                return TxnDisbursementDto.model_validate(new_disbursement)
        
        except HTTPException:
            db.rollback()
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Unexpected error in initiate_disbursement: {e}")
            logger.error(traceback.format_exc())
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to initiate disbursement"
            )
    
    @staticmethod
    def _create_vessel_details(dto: TxnDisbursementInitiateDTo, db: Session) -> Optional[PdaVesselDetails]:
        """Create vessel details record if a valid vessel ID is provided."""

        # Early exit if no vessel or no vessel ID
        if not dto.vessel or not dto.vessel.vsl_id:
            return None

        # Prepare vessel data
        vessel_data = dto.vessel.model_dump()
        vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}

        # Validate vessel ID
        try:
            ma_vsl_id_value = int(dto.vessel.vsl_id)
        except (ValueError, TypeError) as e:
            logger.error(f"Invalid vessel ID: {dto.vessel.vsl_id}, error: {e}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid vessel ID: {dto.vessel.vsl_id}"
            )

        # Insert vessel details into DB
        try:
            new_vsl = PdaVesselDetails(
                ma_vsl_id=ma_vsl_id_value,
                vsl_dtls=vessel_data
            )
            db.add(new_vsl)
            db.flush()
            return new_vsl

        except SQLAlchemyError as e:
            db.rollback()
            logger.error(f"Database error creating vessel details: {e}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create vessel details"
            )

    
    @staticmethod
    def get_email_signature_by_user(user: str, db: Session) -> Optional[str]:
        """Get user email signature with error handling"""
        try:
            result = db.query(User.email_signature).filter(User.username == user).first()
            return result[0] if result else None
        except SQLAlchemyError as e:
            logger.error(f"Database error fetching email signature: {e}")
            return None
        
    @staticmethod
    def create_pda(dto: TxnDisbursementInitiateDTo, user: str, status_id: int, meraki_pda_data: dict, portagent_pda_data: dict) -> PDAModel:
        return PDAModel(
            email_to=",".join(dto.get_email_to_list()),
            email_cc=",".join(dto.get_email_cc_list()),
            created_by=user,
            is_manual_entry='N',
            status=status_id,
            created_on=func.now(),
            pda_roe=dto.roe,
            pda_currency_to=dto.pda_currency_to,
            pda_currency_from=dto.pda_currency_from,
            pda_custom_calculation=dto.pda_custom_calculation,
            meraki_pda_data=meraki_pda_data,
            portagent_pda_data=portagent_pda_data,
            pda_eta=dto.eta,
            pda_etd=dto.etd,
            pda_vessel_stay=dto.vessel_stay,
            invoice_ref_no=dto.invoice_ref_no
        )

    @staticmethod
    def create_disbursement(dto: TxnDisbursementInitiateDTo, user: str, disbursement_id: int, pda: PDAModel, new_vsl: PdaVesselDetails, tariff_rule: dict) -> TxnDisbursement:
        return TxnDisbursement(
            disbursement_id=disbursement_id,
            comp_id=dto.comp_id,
            client_id=dto.client_id,
            portagent_id=dto.portagent_id,
            created_by=user,
            createdon=func.now(),
            pda=pda,
            country_id=dto.country_id,
            vsl_id=dto.vessel_id,
            pda_vsl_id=new_vsl.pda_vsl_id if new_vsl else None,
            voyage=dto.voyage,
            port_id=dto.port_id,
            purpose_id=dto.purpose.purpose_id,
            cargo_id=dto.cargo.cargo_id,
            eta=dto.eta,
            etd=dto.etd,
            vessel_stay=dto.vessel_stay,
            port_tariff_rule=tariff_rule if tariff_rule else None,
            invoice_number =dto.invoice_ref_no,
            roe_agent=dto.roe
        )

    @staticmethod
    def _get_tariff_rule(port_id: Optional[int], country_id: Optional[int], db: Session) -> Dict[str, Any]:
        """Get tariff rule for port and country"""
        if not port_id or not country_id:
            return []
        
        try:
            tariff_rule = TariffRepo.get_tariff_rule_by_port_and_country(port_id, country_id, db)
            if not tariff_rule or not tariff_rule.rules:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"No tariff rule found for port_id={port_id} and country_id={country_id}"
                )
            return tariff_rule.rules
        except SQLAlchemyError as e:
            logger.error(f"Database error fetching tariff rule: {e}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to fetch tariff rule"
            )

    @staticmethod
    def _update_user_signature(user: str, signature: str, db: Session) -> None:
        """Update user email signature"""
        try:
            result = db.query(User).filter(User.username == user).update(
                {User.email_signature: signature},
                synchronize_session=False
            )
            if result == 0:
                logger.warning(f"User not found for signature update: {user}")
        except SQLAlchemyError as e:
            logger.error(f"Error updating user signature: {e}")
            # Don't fail the entire transaction for signature update

    @staticmethod
    def get_vessel_details_by_pda_vslid(pda_vsl_id: int, db: Session) -> Optional[PdaVesselDetails]:
        """Get vessel details by PDA vessel ID"""
        try:
            return db.query(PdaVesselDetails).filter(
                PdaVesselDetails.pda_vsl_id == pda_vsl_id
            ).first()
        except SQLAlchemyError as e:
            logger.error(f"Database error fetching vessel details: {e}")
            return None

    @staticmethod
    def get_disbursement(disbursement_seq: int, db: Session) -> Optional[TxnDisbursement]:
        """Get disbursement by sequence with proper error handling"""
        try:
            return db.query(TxnDisbursement).options(
                joinedload(TxnDisbursement.pda),
                joinedload(TxnDisbursement.fda)
            ).filter(
                TxnDisbursement.disbursement_seq == disbursement_seq
            ).first()
        except SQLAlchemyError as e:
            logger.error(f"Database error fetching disbursement: {e}")
            return None
    
    expiry_value = os.getenv("REGISTRATION_LINK_EXPIRY", "1")
    expiry_type = os.getenv("REGISTRATION_LINK_PERIOD_TYPE", "days")

    try:
        expiry_value = int(expiry_value)
    except ValueError:
        expiry_value = 1  # Fallback

    if expiry_type.lower() == "minutes":
        expiry_delta = timedelta(minutes=expiry_value)
    elif expiry_type.lower() == "hours":
        expiry_delta = timedelta(hours=expiry_value)
    elif expiry_type.lower() == "days":
        expiry_delta = timedelta(days=expiry_value)
    else:
        expiry_delta = timedelta(days=1)  # Fallback

    def get_expiry_time():
        return datetime.now() + PDARepository.expiry_delta
    def add_pda_link(pda_token_link: PAFormLink, db: Session):
        
        """
        Add or update a PDA link in the database.
        Updates timestamps and email correctly.
        """
        try:
            disbursement_seq = pda_token_link.disbursement_seq

            # Retrieve existing record
            existing_record = db.query(PAFormLink).filter(PAFormLink.disbursement_seq == disbursement_seq).first()

            # Prepare email_to as a string
            if isinstance(pda_token_link.email_to, (list, tuple)):
                email_str = ",".join([e.strip() for e in pda_token_link.email_to if e.strip()])
            else:
                email_str = pda_token_link.email_to.strip() if pda_token_link.email_to else None

            if existing_record:
                # Update fields
                existing_record.status = pda_token_link.status
                existing_record.email_to = email_str
                existing_record.link_generation = datetime.now()
                #Commented based on the Jira PDA-386
                # existing_record.link_expiry = PDARepository.get_expiry_time()

                db.commit()
                db.refresh(existing_record)
                return existing_record

            else:
                # Set timestamps for new record if not already set
                if not pda_token_link.link_generation:
                    pda_token_link.link_generation = datetime.now()

                #Commented based on the Jira PDA-386
                # if not pda_token_link.link_expiry:
                #     pda_token_link.link_expiry = PDARepository.get_expiry_time()
                pda_token_link.email_to = email_str

                db.add(pda_token_link)
                db.commit()
                db.refresh(pda_token_link)
                return pda_token_link

        except Exception as e:
            db.rollback()
            print("Error while storing token:", e)
            traceback.print_exc()
            raise HTTPException(status_code=500, detail="Failed to store or update PDA link.")
        
    def validate_pda_link(db: Session, pda_token: str, email: str):
        now = datetime.now()

        pda_link = (
            db.query(PAFormLink)
            .filter(
                PAFormLink.pda_token == pda_token
            )
            .first()
        )

        if not pda_link:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Invalid link"
                )
        if pda_link.status == 'N':
            raise HTTPException(
                status_code=status.HTTP_410_GONE,
               detail="Link is InActive / not Active "
        )
        # if pda_link.link_expiry <= now:
        #     raise HTTPException(
        #         status_code=status.HTTP_410_GONE,
        #         detail="Link has expired"
        #     )

        email_list = [e.strip().lower() for e in pda_link.email_to.split(',')]
        if email.lower() not in email_list:
            return None
        disbursement=PDARepository.get_disbursement_by_disbursment_seq(pda_link.disbursement_seq, db)
        PDARepository.check_inactive_or_deleted(disbursement)
        existing_otp_entry = (
            db.query(TxnPAFormOTP)
            .filter(TxnPAFormOTP.disbursement_seq == pda_link.disbursement_seq)
            .first()
            )
        if existing_otp_entry:
            if existing_otp_entry.email.lower() == email.lower():
                return pda_link
            else:
                raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Invalid  Disbursement already started by {existing_otp_entry.email}"
            )


        return pda_link
    
    def update_pa_form_link_status(disbursement_seq:int,status:str, db:Session):
         pda_link = (
            db.query(PAFormLink)
            .filter(
                PAFormLink.disbursement_seq == disbursement_seq
            )
            .first()
        )
         pda_link.status=status
         db.commit()
         db.refresh(pda_link)


    def add_or_update_paform_otp(disbursement_seq: int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
    
        # Get OTP expiry time in minutes from environment variable
        expiry_minutes = int(os.getenv("OTP_EXPIRY", 5))  # default to 5 minutes
        time_zone = os.getenv("TIME_ZONE", "Asia/Kolkata")
        # Create timezone-aware datetime
        tz = ZoneInfo(time_zone)
        now = datetime.now()
        expires_at = now + timedelta(minutes=expiry_minutes)
       

        existing_otp = db.query(TxnPAFormOTP).filter(TxnPAFormOTP.disbursement_seq == disbursement_seq).first()
        # Update the existing OTP entry
        if existing_otp:
            existing_otp.otp = otp
            existing_otp.uuid = uuid
            existing_otp.generated_at = now
            existing_otp.expires_at = expires_at
            existing_otp.status = status
            db.commit()
            db.refresh(existing_otp)
            return existing_otp
        else:
            # Create a new OTP entry
            new_otp =TxnPAFormOTP(disbursement_seq=disbursement_seq,email=email,otp=otp,uuid=uuid, expires_at=expires_at, status =status)
            db.add(new_otp)
            db.commit()
            db.refresh(new_otp)
            return new_otp

    def validate_pa_form_otp(uuid :str,otp:int,db: Session):
            """Validate the evidence whether  genuine  or not """
            otp = db.query(TxnPAFormOTP).filter(TxnPAFormOTP.uuid == uuid, TxnPAFormOTP.otp ==otp).first()        
            return otp  
    
    def get_disbursement_by_disbursment_seq(disbursement_seq:int, db: Session):
        disbursement = db.query(TxnDisbursement).options(
            joinedload(TxnDisbursement.pda),
            joinedload(TxnDisbursement.fda)
        ).filter(TxnDisbursement.disbursement_seq == disbursement_seq).first()
        
        if not disbursement:
            return None
        
        # Filter out deleted FDA
        if disbursement.fda and disbursement.fda.state == 'D':
            disbursement.fda = None
        
        if disbursement.pda_vsl_id:
            vessel_cmp = db.query(VesselDetailsComparison)\
                        .filter_by(pda_vsl_id=disbursement.pda_vsl_id)\
                        .first()

            if vessel_cmp and disbursement.pda:
                # Convert vessel comparison data to DTO and set it in the PDA object
                vessel_details_dto = VesselDetailsComparisonDto.model_validate(vessel_cmp)
                disbursement.pda.pda_vessel_details = vessel_details_dto
        else:
            # No vessel comparison found — use port data if available
            if disbursement.port_id:
                port_dtls = PortRepository.get_port_info_by_id(disbursement.port_id,db)
                disbursement.pda.pda_vessel_details = PDARepository.build_pda_vessel_details_with_additional(port_dtls)
            else:
                disbursement.pda.pda_vessel_details = None

        return disbursement
    
    def build_pda_vessel_details_with_additional(port_dtls):
        vessel_fields = port_dtls.vessel_fields or []
        additional_properties = [
            {
                "field_name": field.get("field_name"),
                "value": None,
                "data_type": field.get("data_type"),
                "is_mandatory": field.get("is_mandatory"),
            }
            for field in vessel_fields
        ]

        return VesselDetailsComparisonDto(additional_property=additional_properties)

    def get_json_template_by_name(json_name:str,db:Session):
        json_template = db.query(JsonTemplate.json_value).filter(JsonTemplate.json_name==json_name).first()
        return json_template
    
    def update_pda_disbursement_paform_submit(request_body: DisbursementPAFormRequestDTO, db: Session):
        disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
        PDARepository.check_inactive_or_deleted(disbursement_dtl)
        port_agent_dtl  = db.query(MaCompany).filter(MaCompany.company_id == disbursement_dtl.portagent_id).first()
        if disbursement_dtl.pda.is_re_request=='Y':
            status = StatusRepository.get_status_details_by_name('RE-SUBMITTED',db)
            port_agent_data = request_body.model_dump(mode="json")
            port_agent_data = {k: (v if v != "" else None) for k, v in port_agent_data.items()}
            disbursement_dtl.pda.portagent_pda_data = port_agent_data
            flag_modified(disbursement_dtl.pda, "portagent_pda_data")
            disbursement_dtl.pda.status = status.status_id
            disbursement_dtl.pda.pda_receive_date = datetime.now()
            if disbursement_dtl.pda_vsl_id:
                    pda_vsl = db.query(PdaVesselDetails).filter(
                        PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id
                    ).first()
            vessel_data = request_body.vessel.model_dump()
            vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}
            pda_vsl.vsl_dtls = vessel_data
            db.commit()
            # CommunicationHistroyRepository.create_pda_re_submit_communication_history(disbursement_dtl, db)
        else:
            status = StatusRepository.get_status_details_by_name('SUBMITTED',db)
            # CommunicationHistroyRepository.create_pda_submit_communication_history(disbursement_dtl, db)
            disbursement_dtl.pda.status = status.status_id
            disbursement_dtl.pda.pda_receive_date = datetime.now()
            if port_agent_dtl:
                port_agent_dtl.address = request_body.port_agent.address
                db.commit()
                db.refresh(port_agent_dtl)

            if port_agent_dtl.bank_details_id:
                existing_bank = db.query(BankDetails).filter_by(bank_details_id=port_agent_dtl.bank_details_id).first()
                if existing_bank:
                    existing_bank.country_name = request_body.port_agent.bank_details.country_name
                    existing_bank.beneficiary_acc_holder_name = request_body.port_agent.bank_details.beneficiary_acc_holder_name
                    existing_bank.bank_name = request_body.port_agent.bank_details.bank_name
                    existing_bank.correspondent_account_number = request_body.port_agent.bank_details.correspondent_account_number
                    existing_bank.current_account_number = request_body.port_agent.bank_details.current_account_number
                    existing_bank.ifsc_code = request_body.port_agent.bank_details.ifsc_code
                    existing_bank.bik_code =  request_body.port_agent.bank_details.bik_code
                    existing_bank.swift_code = request_body.port_agent.bank_details.swift_code
                    existing_bank.currency = request_body.port_agent.bank_details.currency
                    existing_bank.inn_code = request_body.port_agent.bank_details.inn_code
                    existing_bank.bic_code = request_body.port_agent.bank_details.bic_code
                    existing_bank.iban_number = request_body.port_agent.bank_details.iban_number
                    existing_bank.branch_address = request_body.port_agent.bank_details.branch_address
                    db.commit()
                    db.refresh(existing_bank)
            else:
                new_bank = BankDetails(
                    country_name=request_body.port_agent.bank_details.country_name,
                    beneficiary_acc_holder_name=request_body.port_agent.bank_details.beneficiary_acc_holder_name,
                    bank_name=request_body.port_agent.bank_details.bank_name,
                    correspondent_account_number=request_body.port_agent.bank_details.correspondent_account_number,
                    current_account_number=request_body.port_agent.bank_details.current_account_number,
                    ifsc_code=request_body.port_agent.bank_details.ifsc_code,
                    bik_code=request_body.port_agent.bank_details.bik_code,
                    swift_code=request_body.port_agent.bank_details.swift_code,
                    currency=request_body.port_agent.bank_details.currency,
                    inn_code=request_body.port_agent.bank_details.inn_code,
                    bic_code=request_body.port_agent.bank_details.bic_code,
                    iban_number=request_body.port_agent.bank_details.iban_number,
                    branch_address=request_body.port_agent.bank_details.branch_address,
                    created_by="DBA"
                )
                db.add(new_bank)
                db.commit()
                db.refresh(new_bank)
                port_agent_dtl.bank_details_id = new_bank.bank_details_id
                db.commit()

            tariff_rule = request_body.port_tariff_rule
            if tariff_rule is None:
                tariff_rule=TariffRepo.get_tariff_rule_by_port_and_country(request_body.port_id,request_body.country_id,db)
                if tariff_rule is None:
                    raise HTTPException(status_code=400,detail=f"No tariff rule found for port_id={request_body.port_id} and country_id={request_body.country_id}")
                else:
                    tariff_rule=tariff_rule.rules
            if not disbursement_dtl:
                raise HTTPException(
                    status_code=404,
                    detail=f"Disbursement with seq {request_body.disbursement_seq} not found."
                )

            # Prepare vessel data
            vessel_data = request_body.vessel.model_dump()
            vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}

            try:
                ma_vsl_id_value = int(request_body.vessel.vsl_id)
            except (ValueError, TypeError):
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Invalid vessel ID: {request_body.vessel.vsl_id}"
                )

            try:
                # --- Update or insert vessel details ---
                if disbursement_dtl.pda_vsl_id:
                    pda_vsl = db.query(PdaVesselDetails).filter(
                        PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id
                    ).first()

                    if not pda_vsl:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail=f"Vessel with pda_vsl_id {disbursement_dtl.pda_vsl_id} not found."
                        )

                    pda_vsl.vsl_dtls = vessel_data
                    pda_vsl.ma_vsl_id = ma_vsl_id_value
                else:
                    new_vsl = PdaVesselDetails(
                        ma_vsl_id=ma_vsl_id_value,
                        vsl_dtls=vessel_data
                    )
                    db.add(new_vsl)
                    db.flush()  # to get pda_vsl_id
                    disbursement_dtl.pda_vsl_id = new_vsl.pda_vsl_id

                # --- Update PDA ---
                port_agent_data = request_body.model_dump(mode="json")
                port_agent_data = {k: (v if v != "" else None) for k, v in port_agent_data.items()}
                disbursement_dtl.pda.pda_roe = request_body.roe
                disbursement_dtl.pda.pda_currency_to = request_body.pda_currency_to
                disbursement_dtl.pda.pda_currency_from = request_body.pda_currency_from
                disbursement_dtl.pda.pda_custom_calculation = request_body.pda_custom_calculation
                disbursement_dtl.pda.pda_vessel_stay = int(request_body.vessel_stay)
                disbursement_dtl.pda.pda_eta = request_body.eta
                disbursement_dtl.pda.pda_etd = request_body.etd
                disbursement_dtl.pda.invoice_ref_no = request_body.invoice_ref_no
                if disbursement_dtl.pda:
                    disbursement_dtl.pda.portagent_pda_data = port_agent_data
                    flag_modified(disbursement_dtl.pda, "portagent_pda_data")
                else:
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="No PDA record linked to this disbursement."
                    )

                # --- Update Disbursement ---
                disbursement_dtl.vessel_stay = int(request_body.vessel_stay)
                disbursement_dtl.eta = request_body.eta
                disbursement_dtl.etd = request_body.etd
                disbursement_dtl.voyage = request_body.voyage
                disbursement_dtl.vsl_id = int(request_body.vessel.vsl_id)
                disbursement_dtl.country_id = int(request_body.country.country_id)
                disbursement_dtl.port_id = int(request_body.port.port_id)
                disbursement_dtl.purpose_id =int(request_body.purpose.purpose_id)
                disbursement_dtl.roe_agent=request_body.roe

                # Check cargo_id and set to None if it's 0 or None
                disbursement_dtl.cargo_id = None if not request_body.cargo or request_body.cargo.cargo_id == 0 else int(request_body.cargo.cargo_id)

                # disbursement_dtl.cargo_id =int(request_body.cargo.cargo_id)
                disbursement_dtl.port_tariff_rule = tariff_rule
                db.commit()
                db.refresh(disbursement_dtl) 

            except Exception:
                db.rollback()
                raise
            PDARepository.update_pa_form_link_status(request_body.disbursement_seq,'N',db)
            #pda_vsl_dtl=PDARepository.get_vessel_details_by_pda_vslid(disbursement_dtl.pda_vsl_id,db)
            #pda_vessel = pda_vsl_dtl.vsl_dtls
            # print(f"disbursement_dtl.port_tariff_rule {disbursement_dtl.port_tariff_rule}")
            meraki_pda_data=build_disbursement_json(disbursement_dtl.disbursement_seq,disbursement_dtl.vsl_id,disbursement_dtl.client_id,disbursement_dtl.portagent_id,disbursement_dtl.port_id,disbursement_dtl.country_id,disbursement_dtl.purpose_id,disbursement_dtl.cargo_id,disbursement_dtl.port_tariff_rule,disbursement_dtl.vessel_stay,disbursement_dtl.pda.pda_eta,disbursement_dtl.pda.pda_etd,disbursement_dtl.voyage,disbursement_dtl.pda.pda_custom_calculation,disbursement_dtl.pda.pda_currency_from,disbursement_dtl.pda.pda_currency_to,disbursement_dtl.pda.pda_roe,db)
            # print(f"meraki_pda_data {meraki_pda_data}")
            disbursement_dtl.pda.meraki_pda_data = meraki_pda_data
            db.commit()
            db.refresh(disbursement_dtl)
            #vessel_info = VesselRepository.get_vessel_info_by_id(disbursement_dtl.vsl_id,db)
            vessel_dto = VesselRepository.get_vessel_info_by_id(disbursement_dtl.vsl_id,db)
            port_agent_pda_json=disbursement_dtl.pda.portagent_pda_data
            vessel_info =enrich_vessel_info(vessel_dto,port_agent_pda_json)
            # print(f"vessel_info {vessel_info.__dict__}")
            meraki_pda_data_json = disbursement_dtl.pda.meraki_pda_data
            print(f"meraki_pda_data_json before update {meraki_pda_data_json}")
            services = None
            if disbursement_dtl.port_tariff_rule:
                services = disbursement_dtl.port_tariff_rule.get("items", [])
                print(f"disbursement_dtl.port_tariff_rule inside if block {services}")
            else:
                services = meraki_pda_data_json.get("services", {}).get("items", [])
                print(f"disbursement_dtl.port_tariff_rule inside else block {services}")

            try:
                meraki_pda_data_json["services"] = process_services_calculation(meraki_pda_data_json["services"],vessel_info,db,disbursement_dtl.disbursement_seq,"PDA",request_body)

                totals = calculate_grand_total(meraki_pda_data_json["services"]["items"])
                # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
                meraki_pda_data_json["services"]["grand_total"] = totals["grand_total"]

                disbursement_dtl.pda.meraki_pda_data = meraki_pda_data_json
                flag_modified(disbursement_dtl.pda, "meraki_pda_data")
                db.commit()
                db.refresh(disbursement_dtl)

            except SQLAlchemyError as e:
                db.rollback()
                print(" Database error:", e)
                raise
            except Exception as e:
                db.rollback()
                print("Unexpected error:", e)
                raise
        
        # print("After refresh:", disbursement_dtl.pda.portagent_pda_data)
        port_agent_data = disbursement_dtl.pda.portagent_pda_data.get("port_agent", {}) if request_body.port_agent else {}
        pda_obj= db.query(PDAModel).filter(PDAModel.disbursement_seq==disbursement_dtl.disbursement_seq).first()
        bank_details = json.dumps(port_agent_data.get("bank_details")) if port_agent_data.get("bank_details") else None
        address = port_agent_data.get("address")

        portagent_history = PDAPortagentHistory(
        disbursement_seq=disbursement_dtl.disbursement_seq,
        pda_id=pda_obj.pda_id if pda_obj.pda_id else None,
        portagent_id=disbursement_dtl.portagent_id,
        bank_details=bank_details,
        address=address,
        data=disbursement_dtl.pda.portagent_pda_data,
        created_on=datetime.now(),
        created_by=pda_obj.updated_by if pda_obj.updated_by else "DBA"
    )
       
        # email=db.query(PDAModel).filter(PDAModel.disbursement_seq==disbursement_dtl.disbursement_seq).first()
        db.add(portagent_history)
        db.commit()
        db.refresh(portagent_history)
        FileUploadRepository.syn_file(request_body.file_list,db,request_body.port_agent.name)



    @staticmethod
    def initiate_disbursement_manual(user: str, dto: TxnDisbursementInitiateManualDTo,db: Session):
        PDARepository._check_duplicate_disbursement(dto, db, "PDA")
        
        try:
            disbursement_id = PDARepository._get_next_disbursement_id(db)
            tariff_rule = dto.port_tariff_rule 
            if tariff_rule is None:
                tariff_rule=TariffRepo.get_tariff_rule_by_port_and_country(dto.port_id,dto.country_id,db)
                if tariff_rule is None:
                    raise HTTPException(status_code=400,detail=f"No tariff rule found for port_id={dto.port_id} and country_id={dto.country_id}")
                else:
                    tariff_rule=tariff_rule.rules
            status = StatusRepository.get_status_details_by_name('UNDER-PROCESS',db)
            meraki_pda_data=build_disbursement_json(disbursement_id,dto.vessel_id,dto.client_id,dto.portagent_id,dto.port_id,dto.country_id,dto.purpose.purpose_id,dto.cargo.cargo_id,tariff_rule,dto.vessel_stay,dto.eta,dto.etd,dto.voyage,dto.pda_custom_calculation,dto.pda_currency_from,dto.pda_currency_to,dto.roe,db)
            portagent_pda_data = build_pa_disbursement_json(disbursement_id,dto,tariff_rule,db)
            pda = PDAModel(
                created_by=user, 
                is_manual_entry = 'Y',
                pda_roe = dto.roe,
                pda_currency_to=dto.pda_currency_to,
                pda_currency_from=dto.pda_currency_from,
                pda_custom_calculation=dto.pda_custom_calculation,
                status = status.status_id,
                created_on=func.now(),
                meraki_pda_data = meraki_pda_data,
                portagent_pda_data = portagent_pda_data,
                pda_eta = dto.eta,
                pda_etd = dto.etd,
                pda_vessel_stay = dto.vessel_stay,
                invoice_ref_no = dto.invoice_ref_no
            )

            # Prepare vessel data
            vessel_data = dto.vessel.model_dump()
            vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}

            try:
                ma_vsl_id_value = int(dto.vessel.vsl_id)
            except (ValueError, TypeError):
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid vessel ID: {dto.vessel.vsl_id}"
                )

            try:
                    new_vsl = PdaVesselDetails(
                        ma_vsl_id=ma_vsl_id_value,
                        vsl_dtls=vessel_data
                    )
                    db.add(new_vsl)
                    db.flush()  

            except Exception:
                db.rollback()
                raise   

            
            new_disbursement = TxnDisbursement(
                disbursement_id=disbursement_id,
                comp_id = dto.comp_id,
                client_id = dto.client_id,
                portagent_id = dto.portagent_id,
                country_id= dto.country_id,
                vsl_id = dto.vessel_id,
                pda_vsl_id = new_vsl.pda_vsl_id,
                voyage  = dto.voyage,
                port_id =dto.port_id,
                purpose_id = dto.purpose.purpose_id,
                cargo_id = dto.cargo.cargo_id,
                eta = dto.eta,
                etd = dto.etd,
                vessel_stay = dto.vessel_stay,
                created_by=user,
                createdon=func.now(),
                pda=pda,
                port_tariff_rule = tariff_rule,   
                invoice_number =dto.invoice_ref_no,
                roe_agent=dto.roe

            )

            db.add(new_disbursement)
            db.commit()
            db.refresh(new_disbursement)

            


            disbursement = db.query(TxnDisbursement)\
                .options(joinedload(TxnDisbursement.pda), joinedload(TxnDisbursement.fda))\
                .filter_by(disbursement_id=disbursement_id)\
                .first()
            disbursement_dtl = db.query(TxnDisbursement).options(joinedload(TxnDisbursement.pda),joinedload(TxnDisbursement.fda)) .filter(TxnDisbursement.disbursement_seq == disbursement.disbursement_seq).first()
            vessel_dto = VesselRepository.get_vessel_info_by_id(disbursement_dtl.vsl_id,db)
            port_agent_pda_json=disbursement_dtl.pda.portagent_pda_data
            vessel_info =enrich_vessel_info(vessel_dto,port_agent_pda_json)
            meraki_pda_data_json = meraki_pda_data
            services = None
            if disbursement_dtl.port_tariff_rule:
                services = disbursement_dtl.port_tariff_rule.get("items", [])
                print(f"disbursement_dtl.port_tariff_rule inside if block {services}")
            else:
                services = meraki_pda_data_json.get("services", {}).get("items", [])
                print(f"disbursement_dtl.port_tariff_rule inside else block {services}")

            try:
                meraki_pda_data_json["services"] = process_services_calculation(meraki_pda_data_json["services"],vessel_info,db,disbursement_dtl.disbursement_seq,"PDA",dto)

                totals = calculate_grand_total(meraki_pda_data_json["services"]["items"])
                # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
                meraki_pda_data_json["services"]["grand_total"] = totals["grand_total"]

                disbursement_dtl.pda.meraki_pda_data = meraki_pda_data_json
                flag_modified(disbursement_dtl.pda, "meraki_pda_data")
                db.commit()
                db.refresh(disbursement_dtl)

            except SQLAlchemyError as e:
                db.rollback()
                print(" Database error:", e)
                raise
            except Exception as e:
                db.rollback()
                print("Unexpected error:", e)
                raise
        except Exception as e:
            db.rollback()  # rollback entire transaction
            print(f"Transaction failed: {e}")
            raise HTTPException(status_code=500, detail=f"Failed to initiate disbursement")

        return TxnDisbursementDto.model_validate(disbursement_dtl)


    @staticmethod
    def get_disbursement_detail_by_seq(disbursement_seq:int,db: Session):
        disbursement = db.query(TxnDisbursement)\
            .options(joinedload(TxnDisbursement.pda), joinedload(TxnDisbursement.fda), joinedload(TxnDisbursement.pda_vessel_details),joinedload(TxnDisbursement.communication_histories))\
            .filter_by(disbursement_seq=disbursement_seq)\
            .first()
        
        if not disbursement:
            return None

        disbursement_dto = TxnDisbursementDto.model_validate(disbursement)
        
        # Sort communication histories by comm_history_id in ascending order and add files
        if disbursement_dto.communication_histories:
            disbursement_dto.communication_histories.sort(key=lambda x: x.comm_history_id)
            for comm_history in disbursement_dto.communication_histories:
                files = FileUploadRepository.get_communication_history_files(comm_history.comm_history_id, db)
                comm_history.files = files
        
        if disbursement_dto.pda_vsl_id:
            vessel_comparison_data = db.query(VesselDetailsComparison).filter_by(pda_vsl_id=disbursement.pda_vsl_id).first()
            if vessel_comparison_data:
                if disbursement_dto.pda:
                    disbursement_dto.pda.pda_vessel_details = VesselDetailsComparisonDto.model_validate(vessel_comparison_data)
            
            fda_vessel_comparison_data = db.query(FdaVesselDetailsComparison).filter_by(pda_vsl_id=disbursement.pda_vsl_id).first()
            if fda_vessel_comparison_data:
                    if disbursement_dto.fda:
                        disbursement_dto.fda.fda_vessel_details = VesselDetailsComparisonDto.model_validate(fda_vessel_comparison_data)

        return disbursement_dto


    # @staticmethod
    # def get_vessel_details_by_pda_vslid(pda_vsl_id:int,db:Session):
    #     pda_vsl = db.query(PdaVesselDetails).filter(PdaVesselDetails.pda_vsl_id==pda_vsl_id).first()
    #     return pda_vsl

    @staticmethod
    def return_to_pda(request_body: ReturnToPdaRequestDTO, db: Session):
        disbursement_dtl = db.query(TxnDisbursement).options(joinedload(TxnDisbursement.pa_form_links)) .filter(TxnDisbursement.disbursement_seq == request_body.disbursement_seq).first()
        if not disbursement_dtl:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Disbursement with seq {request_body.disbursement_seq} not found."
            )
        disbursement_dtl.return_message=request_body.return_message
        PDARepository.update_pa_form_link_status(request_body.disbursement_seq,'N',db)
        if disbursement_dtl.return_message:
            disbursement_dtl.return_status='Y'
        
        disbursement_dtl.pda.email_to = None
        disbursement_dtl.pda.email_cc= None
        pa_form_otp = (
        db.query(TxnPAFormOTP)
        .filter(TxnPAFormOTP.disbursement_seq == request_body.disbursement_seq)
        .all()
    )
 
        if pa_form_otp:
            for otp in pa_form_otp:
                db.delete(otp)
        db.commit()
        db.refresh(disbursement_dtl)
        return disbursement_dtl
    
    @staticmethod
    def update_pda_details(pda_dto: TxnPdaEditDto,user:str,db:Session):
        disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(pda_dto.disbursement_seq, db) 
        if disbursement_dtl.pda.state=='N' or disbursement_dtl.pda.state=='D':
            raise HTTPException(status_code=400, detail="Cannot update the inactive or deleted record")
        
        if pda_dto.update_signature == 'Y' and pda_dto.email_signature:
            result = db.query(User).filter(User.username == user).update(
                            {User.email_signature: pda_dto.email_signature},
                            synchronize_session=False
                        )
                
            if result == 0:
                raise HTTPException(status_code=404, detail="User not found")
            db.commit()
        
        if disbursement_dtl.portagent_id!=pda_dto.portagent_id:
            if disbursement_dtl.return_status=='Y' and disbursement_dtl.return_message!="":
                disbursement_dtl.return_status='N'
                disbursement_dtl.return_message=""
                disbursement = db.query(TxnDisbursement).options(joinedload(TxnDisbursement.pda)).filter(TxnDisbursement.disbursement_seq == pda_dto.disbursement_seq).first()
                disbursement.pda.is_re_request='N'
                db.commit()

        if pda_dto.pda_submit == 'Y':
            status = StatusRepository.get_status_details_by_name('COMPLETED',db)
            disbursement_dtl.pda.status = status.status_id
            disbursement_dtl.pda.pda_processing_date = datetime.now()

        if pda_dto.is_re_request == 'Y':
            status = StatusRepository.get_status_details_by_name('RE-REQUESTED',db)
            disbursement_dtl.pda.status = status.status_id
        
        try:
            # --- Update PDA vessel details ---
            if disbursement_dtl.pda_vsl_id:
                pda_vsl = db.query(PdaVesselDetails).filter(
                    PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id
                ).first()

                if not pda_vsl:
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail=f"Vessel with pda_vsl_id {disbursement_dtl.pda_vsl_id} not found."
                    )

                pda_vsl.vsl_dtls =  pda_dto.portagent_pda_data.get("vessel", {})
                db.commit()
        
        except Exception:
            db.rollback()
            raise
        disbursement_dtl.pda.portagent_pda_data = pda_dto.portagent_pda_data
        disbursement_dtl.port_tariff_rule = pda_dto.port_tariff_rule.model_dump() if pda_dto.port_tariff_rule else None
        disbursement_dtl.pda.meraki_pda_data = pda_dto.meraki_pda_data
        disbursement_dtl.pda.pda_roe = pda_dto.roe
        disbursement_dtl.pda.pda_currency_to = pda_dto.pda_currency_to
        disbursement_dtl.pda.pda_currency_from = pda_dto.pda_currency_from
        disbursement_dtl.pda.pda_custom_calculation = pda_dto.pda_custom_calculation
        disbursement_dtl.pda.advance_percentage = pda_dto.advance_percentage
        disbursement_dtl.pda.conversion_rate = pda_dto.conversion_rate
        disbursement_dtl.pda.currency_conversion = pda_dto.currency_conversion
        disbursement_dtl.pda.pda_remittance = pda_dto.pda_remittance
        disbursement_dtl.pda.pda_eta = pda_dto.eta
        disbursement_dtl.pda.pda_etd = pda_dto.etd
        disbursement_dtl.pda.pda_vessel_stay = pda_dto.vessel_stay
        disbursement_dtl.pda.invoice_ref_no = pda_dto.invoice_ref_no
        disbursement_dtl.pda.meraki_pda_amount = pda_dto.meraki_pda_amount
        disbursement_dtl.pda.portagent_pda_amount = pda_dto.portagent_pda_amount
        disbursement_dtl.pda.converted_curr_from=pda_dto.converted_curr_from
        disbursement_dtl.pda.converted_curr_to=pda_dto.converted_curr_to
        disbursement_dtl.pda. conversion_pda_rate=pda_dto.conversion_pda_rate
        disbursement_dtl.pda.pmt_curr_from=pda_dto.pmt_curr_from
        disbursement_dtl.pda.pmt_curr_to=pda_dto.pmt_curr_to
        disbursement_dtl.pda.manual_pda_amount=f"{pda_dto.pmt_curr_to} {pda_dto.currency_conversion}"

        
        disbursement_dtl.pda.updated_by = user
        
        if pda_dto.email_to:
            if isinstance(pda_dto.email_to, list):
                disbursement_dtl.pda.email_to = ",".join(pda_dto.email_to)
            else:
                disbursement_dtl.pda.email_to = pda_dto.email_to

        if pda_dto.email_cc:
            if isinstance(pda_dto.email_cc, list):
                disbursement_dtl.pda.email_cc = ",".join(pda_dto.email_cc)
            else:
                disbursement_dtl.pda.email_cc = pda_dto.email_cc
                
        disbursement_dtl.client_id= pda_dto.client_id
        disbursement_dtl.portagent_id = pda_dto.portagent_id
        disbursement_dtl.country_id = pda_dto.country_id
        disbursement_dtl.voyage = pda_dto.voyage
        disbursement_dtl.port_id = pda_dto.port_id
        disbursement_dtl.purpose_id = pda_dto.purpose_id
        disbursement_dtl.cargo_id = pda_dto.cargo_id
        disbursement_dtl.eta = pda_dto.eta
        disbursement_dtl.etd = pda_dto.etd
        disbursement_dtl.vessel_stay = pda_dto.vessel_stay
        disbursement_dtl.roe_agent = pda_dto.roe
    
        db.add(disbursement_dtl)
        db.commit()
        db.refresh(disbursement_dtl.pda)

        FileUploadRepository.syn_file(pda_dto.file_list,db,user)


        
    @staticmethod
    def update_pda_re_request_flag( pda_dto: TxnPdaEditDto,db:Session):
        disbursement = (
            db.query(TxnDisbursement)
            .options(joinedload(TxnDisbursement.pda))
            .filter(TxnDisbursement.disbursement_seq == pda_dto.disbursement_seq)
            .first()
        )

        if not disbursement or not disbursement.pda:
            print("Disbursement or PDA not found")
            return False

        disbursement.pda.is_re_request = pda_dto.is_re_request
        db.commit()
        db.refresh(disbursement.pda)
        print("PDA after:", disbursement.pda.is_re_request)
        return True
    
    @staticmethod
    def add_pda_client_link(client_token_link : ClientFormLink, db: Session):
        """
        Add or update a PDA clinet link in the database.
        Updates timestamps and email correctly.
        """
        try:
            disbursement_seq = client_token_link.disbursement_seq

            # Retrieve existing record
            existing_record = db.query(ClientFormLink).filter(ClientFormLink.disbursement_seq == disbursement_seq).first()

            # Prepare email_to as a string
            if isinstance(client_token_link.email_to, (list, tuple)):
                email_str = ",".join([e.strip() for e in client_token_link.email_to if e.strip()])
            else:
                email_str = client_token_link.email_to.strip() if client_token_link.email_to else None

            if existing_record:
                # Update fields
                existing_record.status = client_token_link.status
                existing_record.email_to = email_str
                existing_record.link_generation = datetime.now()
                #Commented based on the Jira PDA-386
                # existing_record.link_expiry = PDARepository.get_expiry_time()

                db.commit()
                db.refresh(existing_record)
                return existing_record

            else:
                # Set timestamps for new record if not already set
                if not client_token_link.link_generation:
                    client_token_link.link_generation = datetime.now()
                if not client_token_link.link_expiry:
                    client_token_link.link_expiry = PDARepository.get_expiry_time()
                client_token_link.email_to = email_str

                db.add(client_token_link)
                db.commit()
                db.refresh(client_token_link)
                return client_token_link

        except Exception as e:
            db.rollback()
            print("Error while storing token:", e)
            traceback.print_exc()
            raise HTTPException(status_code=500, detail="Failed to store or update PDA link.")
        
    @staticmethod
    def client_request(user,request_dto:TxnClientApprovalRequestInitiateDTo,db):
        if request_dto.update_signature == 'Y' and request_dto.email_signature:
                db.query(User).filter(User.username == user).update(
                    {User.email_signature: request_dto.email_signature},
                    synchronize_session=False
                )
        db.query(PDAModel).filter(PDAModel.disbursement_seq == request_dto.disbursement_seq).update(
                    {PDAModel.meraki_cmt_to_client: request_dto.meraki_cmt_to_client},
                    synchronize_session=False
                )
        disbursement_dtl=PDARepository.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq,db)
        status = StatusRepository.get_status_details_by_name('Approval Request',db)
        disbursement_dtl.pda.status=status.status_id
        db.commit()
        
    @staticmethod
    def add_pda_client_link_noauth(client_token_link: ClientFormLink, db: Session):
        """
        Add a new PDA client link in the database.
        Each recipient should have a separate record, allowing multiple entries per disbursement.
        """
        try:
            # Prepare email_to as a string
            if isinstance(client_token_link.email_to, (list, tuple)):
                email_str = ",".join([e.strip() for e in client_token_link.email_to if e.strip()])
            else:
                email_str = client_token_link.email_to.strip() if client_token_link.email_to else None
            client_token_link.email_to = email_str

            # Set timestamps if not already set
            if not client_token_link.link_generation:
                client_token_link.link_generation = datetime.now()
            if not client_token_link.link_expiry:
                client_token_link.link_expiry = PDARepository.get_expiry_time()

            # Always add a new record, do not check for existing
            db.add(client_token_link)
            db.commit()
            db.refresh(client_token_link)
            return client_token_link

        except Exception as e:
            db.rollback()
            print("Error while storing token:", e)
            traceback.print_exc()
            raise HTTPException(status_code=500, detail="Failed to store PDA link.")


    @staticmethod
    def validate_client_link(db: Session, token: str, email: str):
        now = datetime.now()

        client_link = (
            db.query(ClientFormLink)
            .filter(
                ClientFormLink.token == token
            )
            .first()
        )

        if not client_link:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Invalid link"
                )
        if client_link.status == 'N':
            raise HTTPException(
                status_code=status.HTTP_410_GONE,
               detail="Link is InActive / not Active "
        )
        # if pda_link.link_expiry <= now:
        #     raise HTTPException(
        #         status_code=status.HTTP_410_GONE,
        #         detail="Link has expired"
        #     )

        email_list = [e.strip().lower() for e in client_link.email_to.split(',')]
        if email.lower() not in email_list:
            return None
        
        existing_otp_entry = (
            db.query(TxnClientFormOTP)
            .filter(TxnClientFormOTP.disbursement_seq == client_link.disbursement_seq)
            .first()
            )
        if existing_otp_entry:
            if existing_otp_entry.email.lower() == email.lower():
                return client_link
            else:
                raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Invalid  Disbursement already started by {existing_otp_entry.email}"
            )


        return client_link
    
    @staticmethod
    def validate_client_link_noauth(db: Session, token: str):
        now = datetime.now()

        client_link = (
            db.query(ClientFormLink)
            .filter(
                ClientFormLink.token == token
            )
            .first()
        )

        if not client_link:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Invalid link"
                )
        if client_link.status == 'N':
            raise HTTPException(
                status_code=status.HTTP_410_GONE,
               detail="Link is InActive / not Active "
        )
        # if pda_link.link_expiry <= now:
        #     raise HTTPException(
        #         status_code=status.HTTP_410_GONE,
        #         detail="Link has expired"
        #     )

        email_list = [e.strip().lower() for e in client_link.email_to.split(',')]
        

        return client_link
    
    @staticmethod
    def add_or_update_client_otp(disbursement_seq: int,pda_id:int, fda_id:int,email:str, otp: int,uuid:str,status :str, db: Session) -> None:
    
        # Get OTP expiry time in minutes from environment variable
        expiry_minutes = int(os.getenv("OTP_EXPIRY", 5))  # default to 5 minutes
        time_zone = os.getenv("TIME_ZONE", "Asia/Kolkata")
        # Create timezone-aware datetime
        tz = ZoneInfo(time_zone)
        now = datetime.now()
        expires_at = now + timedelta(minutes=expiry_minutes)
       

        existing_otp = db.query(TxnClientFormOTP).filter(TxnClientFormOTP.disbursement_seq == disbursement_seq).first()
        # Update the existing OTP entry
        if existing_otp:
            existing_otp.otp = otp
            existing_otp.uuid = uuid
            existing_otp.generated_at = now
            existing_otp.expires_at = expires_at
            existing_otp.status = status
            db.commit()
            db.refresh(existing_otp)
            return existing_otp
        else:
            # Create a new OTP entry
            new_otp =TxnClientFormOTP(disbursement_seq=disbursement_seq,pda_id=pda_id,fda_id=fda_id,email=email,otp=otp,uuid=uuid, expires_at=expires_at, status =status)
            db.add(new_otp)
            db.commit()
            db.refresh(new_otp)
            return new_otp
        
    @staticmethod    
    def validate_client_form_otp(uuid :str,otp:int,db: Session):
            """Validate the evidence whether  genuine  or not """
            otp = db.query(TxnClientFormOTP).filter(TxnClientFormOTP.uuid == uuid, TxnClientFormOTP.otp ==otp).first()        
            return otp  

    @staticmethod
    def update_paClient_form_link_status(disbursement_seq:int,status:str, db:Session):
         pda_link = (
            db.query(ClientFormLink)
            .filter(
                ClientFormLink.disbursement_seq == disbursement_seq
            )
            .first()
        )
         pda_link.status=status
         db.commit()
         db.refresh(pda_link)
    
    @staticmethod
    def update_pda_disbursement_paClientform_submit(request_body: DisbursementClientFormRequestDTO, db: Session):
        try:
                #Set the status as Approval sumbit 
                disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
                status = StatusRepository.get_status_details_by_name('Approval Submit',db)
                disbursement_dtl.pda.status=status.status_id
                db.commit()
                # --- Update PDA ---
                port_agent_data = request_body.model_dump()
                port_agent_data = {k: (v if v != "" else None) for k, v in port_agent_data.items()}
                if disbursement_dtl.pda:
                    disbursement_dtl.pda.portagent_pda_data = port_agent_data
                    flag_modified(disbursement_dtl.pda, "portagent_pda_data")
                else:
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="No PDA record linked to this disbursement."
                    )

                # --- Update Disbursement ---
                # disbursement_dtl.pda.is_approved = request_body.is_approved
                disbursement_dtl.pda.approved_by = request_body.approved_by
                disbursement_dtl.pda.approved_on = datetime.now() 
                # if request_body.is_approved == 'N':
                # disbursement_dtl.pda.client_message = request_body.client_message
                db.commit()
                db.refresh(disbursement_dtl) 

        except Exception:
            db.rollback()
            raise
        # PDARepository.update_paClient_form_link_status(request_body.disbursement_seq,'N',db)


    @staticmethod
    def recalculate_disbursement(request_data: RecalculateDisbursementRequestDTO, db: Session):
        # --- Fetch disbursement with PDA + FDA ---
        disbursement_dtl = (
            db.query(TxnDisbursement)
            .options(joinedload(TxnDisbursement.pda), joinedload(TxnDisbursement.fda))
            .filter(TxnDisbursement.disbursement_seq == request_data.disbursement_seq)
            .first()
        )

        if not disbursement_dtl or not disbursement_dtl.pda:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Disbursement not found for seq={request_data.disbursement_seq}",
            )

        # --- Pick Vessel DTO based on flag ---
        if request_data.pda_custom_calculation == "Y":
            print(f"vessel_dto inside if")
            # vessel_dto = (
            #     db.query(PdaVesselDetails)
            #     .filter(PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id)
            #     .first()
            # )
            vessel_dto = request_data.vessel
            disbursement_dtl.pda.pda_custom_calculation='Y'
            db.commit()
        else:  # re_calculate == "N"
            print(f"vessel_dto inside else")
            vessel_dto  = VesselRepository.get_vessel_info_by_id(disbursement_dtl.vsl_id,db)
            disbursement_dtl.pda.pda_custom_calculation='N'
            db.commit()
        if request_data and request_data.vessel and hasattr(request_data.vessel, "additional_properties"):
                setattr(vessel_dto, "additional_properties", request_data.vessel.additional_properties)

        # commented by surjit to calculate from the screen data
        print(f"vessel_dto  is {vessel_dto.__dict__}")
        vessel_info = vessel_dto
        # --- Prepare Vessel Info ---
        # port_agent_pda_json = disbursement_dtl.pda.portagent_pda_data
        # vessel_info = enrich_vessel_info(vessel_dto, port_agent_pda_json)
        print(f"vessel_info  enrich_vessel_info {vessel_info.__dict__}")
        # --- Work on a copy of Meraki PDA Data (only JSON is copied) ---
        meraki_pda_data_json = copy.deepcopy(disbursement_dtl.pda.meraki_pda_data)
        services = request_data.port_tariff_rule.items if request_data.port_tariff_rule and request_data.port_tariff_rule.items else []
        services = {"items": services}
       
        try:
            meraki_pda_data_json["services"] = process_services_calculation(services,vessel_info,db,disbursement_dtl.disbursement_seq,"PDA",request_data)

            totals = calculate_grand_total(meraki_pda_data_json["services"]["items"])
            # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
            meraki_pda_data_json["services"]["grand_total"] = totals["grand_total"]

            # --- Replace JSON on the ORM object (not persisted) ---
            disbursement_dtl.pda.meraki_pda_data = meraki_pda_data_json
            disbursement_dtl.port_tariff_rule=request_data.port_tariff_rule.dict()

            disbursement_dtl.pda.portagent_pda_data = request_data.portagent_pda_data
        except SQLAlchemyError as e:
            db.rollback()
            print(" Database error:", e)
            raise
        except Exception as e:
            db.rollback()
            print("Unexpected error:", e)
            raise
       

        # --- Return DTO without commit/flush ---
        return TxnDisbursementDto.model_validate(disbursement_dtl)




    def update_paClient_form_link_status_noauth(disbursement_seq: int, status: str, db: Session):
        """
        Update the status for all ClientFormLink records for a given disbursement.
        """
        try:
            links = db.query(ClientFormLink).filter(ClientFormLink.disbursement_seq == disbursement_seq).all()
            for link in links:
                link.status = status
            
            db.commit()
        except Exception as e:
            db.rollback()
            print("Error updating ClientFormLink status:", e)
            raise

    @staticmethod
    def update_pda_disbursement_paClientform_submit_noauth(request_body: DisbursementClientFormRequestDTO, db: Session):
            try:
                    disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
                    
                    # --- Update PDA ---
                    port_agent_data = request_body.model_dump()
                    port_agent_data = {k: (v if v != "" else None) for k, v in port_agent_data.items()}
                    if disbursement_dtl.pda:
                        disbursement_dtl.pda.portagent_pda_data = port_agent_data
                        flag_modified(disbursement_dtl.pda, "portagent_pda_data")
                    else:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail="No PDA record linked to this disbursement."
                        )

                    # --- Update Disbursement ---
                    disbursement_dtl.pda.is_approved = request_body.is_approved
                    disbursement_dtl.pda.approved_by = request_body.approved_by
                    disbursement_dtl.pda.approved_on = datetime.now() 
                    if request_body.is_approved == 'N':
                        disbursement_dtl.pda.client_message = request_body.client_message
                    db.commit()
                    db.refresh(disbursement_dtl) 

            except Exception:
                db.rollback()
                raise
            PDARepository.update_paClient_form_link_status_noauth(request_body.disbursement_seq,'N',db)
            
    def get_email_sign_by_user(user, db: Session):
        data = db.query(User.email_signature).filter(User.username==user).first()
        return data[0]

    def resend_pda_link(disbursement_seq,db):
        link_entry = db.query(PAFormLink).filter(PAFormLink.disbursement_seq == disbursement_seq).first()
        if not link_entry:
            raise HTTPException(status_code=404, detail="PDA link not found for this disbursement")
        
        #Commented based on the Jira PDA-386
        # link_entry.link_expiry = PDARepository.get_expiry_time()
        link_entry.link_generation = datetime.now()
        link_entry.status = 'Y'
        otp_entry = (
                        db.query(TxnPAFormOTP)
                        .filter(TxnPAFormOTP.disbursement_seq == disbursement_seq)
                        .first()
                    )
        if otp_entry:
            db.delete(otp_entry)            
        db.commit()
        db.refresh(link_entry)
        return link_entry.registration_link
    
    @staticmethod
    def _check_duplicate_disbursement(dto, db: Session, check_type: str = 'PDA') -> None:  
        # Extract values from DTO
        client_id = getattr(dto, 'client_id', None)
        vessel_id = getattr(dto, 'vessel_id', None)
        portagent_id = getattr(dto, 'portagent_id', None)
        port_id = getattr(dto, 'port_id', None)
        eta = getattr(dto, 'eta', None)
        etd = getattr(dto, 'etd', None)
        
        
        # Skip check if all values are null
        if all(v is None for v in [client_id, vessel_id, portagent_id, port_id, eta, etd]):
            print("Skipping check - all values are null")
            return
        
        completed_status = StatusRepository.get_status_details_by_name('COMPLETED', db)
        
        # Choose which table to check based on check_type
        if check_type == 'FDA':
            query = db.query(TxnFDA).join(
                TxnDisbursement, TxnFDA.disbursement_seq == TxnDisbursement.disbursement_seq
            ).filter(
                TxnFDA.status != completed_status.status_id,and_(TxnFDA.state!="D",TxnFDA.state!="N")
            )
            # Add filters only for non-null values from txn_disbursement joined with txn_fda
            if client_id is not None:
                query = query.filter(TxnDisbursement.client_id == client_id)
            if vessel_id is not None:
                query = query.filter(TxnDisbursement.vsl_id == vessel_id)
            if portagent_id is not None:
                query = query.filter(TxnDisbursement.portagent_id == portagent_id)
            if port_id is not None:
                query = query.filter(TxnDisbursement.port_id == port_id)
            if eta is not None:
                query = query.filter(func.date(TxnFDA.fda_eta) == func.date(eta))
            if etd is not None:
                query = query.filter(func.date(TxnFDA.fda_etd) == func.date(etd))
        else:  # Default to PDA
            query = db.query(PDAModel).join(
                TxnDisbursement, PDAModel.disbursement_seq == TxnDisbursement.disbursement_seq
            ).filter(
                PDAModel.status != completed_status.status_id,and_(PDAModel.state!="D",PDAModel.state!="N")
            )
            # Add filters only for non-null values from txn_disbursement joined with txn_pda
            if client_id is not None:
                query = query.filter(TxnDisbursement.client_id == client_id)
            if vessel_id is not None:
                query = query.filter(TxnDisbursement.vsl_id == vessel_id)
            if portagent_id is not None:
                query = query.filter(TxnDisbursement.portagent_id == portagent_id)
            if port_id is not None:
                query = query.filter(TxnDisbursement.port_id == port_id)
            if eta is not None:
                query = query.filter(func.date(PDAModel.pda_eta) == func.date(eta))
            if etd is not None:
                query = query.filter(func.date(PDAModel.pda_etd) == func.date(etd))
        
        existing_record = query.first()
        
        if existing_record:
            fields = []
            if client_id is not None:
                fields.append("client")
            if vessel_id is not None:
                fields.append("vessel")
            if portagent_id is not None:
                fields.append("port agent")
            if port_id is not None:
                fields.append("port")
            if eta is not None:
                fields.append("ETA")
            if etd is not None:
                fields.append("ETD")
            raise HTTPException(
                status_code=400,
                detail=f"A disbursement with the same {', '.join(fields)} already exists."
            )
    
            
    def active_inactive_delete_state(dto: RecordState, db):
        disbursement = db.query(TxnDisbursement).options(
            joinedload(TxnDisbursement.pda),
            joinedload(TxnDisbursement.fda)
        ).filter(TxnDisbursement.disbursement_seq == dto.disbursement_seq).first()
        
        if not disbursement:
            raise HTTPException(status_code=404, detail="Disbursement not found")

        if dto.pda_id and dto.fda_id:
            # Both PDA and FDA IDs present - check FDA first (query directly, don't use filtered version)
            fda = db.query(TxnFDA).filter(
                TxnFDA.disbursement_seq == dto.disbursement_seq,
                TxnFDA.fda_id == dto.fda_id
            ).first()
            
            if not fda:
                raise HTTPException(status_code=404, detail="FDA not found")
            
            if fda.state == 'Y' or fda.state is None:
                # FDA is active, update FDA directly
                fda.state = dto.state
                if dto.state == 'D':
                    db.query(TxnDisbursementFiles).filter(
                        TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                        TxnDisbursementFiles.pda_fda_flag == 'FDA'
                    ).update({"is_deleted": "Y"}, synchronize_session=False)
                    disbursement.roe_agent = disbursement.pda.pda_roe
                result = "FDA is Inactivated" if dto.state == 'N' else "FDA is deleted successfully"
            elif fda.state in ('N', 'D'):
                # FDA is inactive or deleted, now update PDA
                if not disbursement.pda:
                    raise HTTPException(status_code=404, detail="PDA not found")
                if disbursement.pda.state == 'D':
                    raise HTTPException(status_code=400, detail="PDA is already deleted")
                if disbursement.pda.state == 'Y' or disbursement.pda.state is None:
                    disbursement.pda.state = dto.state
                    if dto.state == 'D':
                        db.query(TxnDisbursementFiles).filter(
                            TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                            TxnDisbursementFiles.pda_fda_flag == 'PDA'
                        ).update({"is_deleted": "Y"}, synchronize_session=False)
                    result = "PDA is Inactivated" if dto.state == 'N' else "PDA is deleted successfully"
                elif disbursement.pda.state == 'N' and dto.state == 'D':
                    disbursement.pda.state = dto.state
                    db.query(TxnDisbursementFiles).filter(
                        TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                        TxnDisbursementFiles.pda_fda_flag == 'PDA'
                    ).update({"is_deleted": "Y"}, synchronize_session=False)
                    result = "PDA is deleted successfully"
                else:
                    raise HTTPException(status_code=400, detail="Cannot update inactive or deleted record")
        elif dto.pda_id and not dto.fda_id:
            if not disbursement.pda:
                raise HTTPException(status_code=404, detail="PDA not found")
            if disbursement.pda.state == 'D':
                raise HTTPException(status_code=400, detail="PDA is already deleted")
            if disbursement.pda.state == 'Y' or disbursement.pda.state is None:
                disbursement.pda.state = dto.state
                if dto.state == 'D':
                    db.query(TxnDisbursementFiles).filter(
                        TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                        TxnDisbursementFiles.pda_fda_flag == 'PDA'
                    ).update({"is_deleted": "Y"}, synchronize_session=False)
                result = "PDA is Inactivated" if dto.state == 'N' else "PDA is deleted successfully"
            elif disbursement.pda.state == 'N' and dto.state == 'D':
                disbursement.pda.state = dto.state
                db.query(TxnDisbursementFiles).filter(
                    TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                    TxnDisbursementFiles.pda_fda_flag == 'PDA'
                ).update({"is_deleted": "Y"}, synchronize_session=False)
                result = "PDA is deleted successfully"
            else:
                raise HTTPException(status_code=400, detail="Cannot update inactive or deleted record")
        elif dto.fda_id:
            if not disbursement.fda:
                raise HTTPException(status_code=404, detail="FDA not found")
            if disbursement.fda.state == 'D':
                raise HTTPException(status_code=400, detail="FDA is already deleted")
            if disbursement.fda.state == 'Y' or disbursement.fda.state is None:
                disbursement.fda.state = dto.state
                if dto.state == 'D':
                    db.query(TxnDisbursementFiles).filter(
                        TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                        TxnDisbursementFiles.pda_fda_flag == 'FDA'
                    ).update({"is_deleted": "Y"}, synchronize_session=False)
                result = "FDA is Inactivated" if dto.state == 'N' else "FDA is deleted successfully"
            elif disbursement.fda.state == 'N' and dto.state == 'D':
                disbursement.fda.state = dto.state
                db.query(TxnDisbursementFiles).filter(
                    TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
                    TxnDisbursementFiles.pda_fda_flag == 'FDA'
                ).update({"is_deleted": "Y"}, synchronize_session=False)
                result = "FDA is deleted successfully"
            else:
                raise HTTPException(status_code=400, detail="Cannot update inactive or deleted record")
        else:
            raise HTTPException(status_code=400, detail="Either pda_id or fda_id must be provided")
        
        db.commit()
        return result

    def check_inactive_or_deleted(disbursement):
        if disbursement.pda.state=='D':
            raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="Disbursement is deleted"
                )
        if disbursement.pda.state=='N':
            raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="Disbursement is already inactive"
                )
        

    def payment_instruction_mail(dto,username,db):
        PDARepository._update_user_signature(username,dto.signature,db)
        db.commit()
        