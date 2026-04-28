"""
Author: Punith
Module: Port Controller
Description: This module handles Disbursement creation, update, and listing.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request,BackgroundTasks
from sqlalchemy.orm import Session
from typing import List
from app.db import get_db
from app.core.decorators import jwt_required,role_required
from app.dto.pda_dto import TxnDisbursementInitiateDTo,ValidatePdaLink,ReturnToPdaResponseDTO,TxnDisbursementDto,OTPValidationResponseDTO,linkValidationResponseDTO,TxnDisbursementInitiateManualDTo,TxnPdaEditDto,TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO ,RecalculateDisbursementRequestDTO,ValidateClientLinkNoAuth,linkValidationNoAuthResponseDTO,PtmInstrMailRequestDTO
from app.services.pda_service_impl import PDAServiceImpl
import uuid
from app.core.security import encrypt_token, encrypt_token_mail,decrypt_token_mail
from app.models.txn_pa_form_link import PAFormLink
import os
from app.core.SendMail import SendMail
from dotenv import load_dotenv
from app.services.company_service_impl import CompanyServiceImpl
from app.api.password_rest_controller import generate_otp_and_uuid
from datetime import datetime, timezone, timedelta
from app.core.jwtService import generate_token
from app.config import Config
import pytz
from fastapi.responses import JSONResponse
import time
import logging
from fastapi.encoders import jsonable_encoder
from app.services.bank_details_service_impl import BankServiceImpl
from app.dto.pda_dto import DisbursementPAFormRequestDTO,ReturnToPdaRequestDTO, ResendLink,RecordState
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO,DisbursementTrackerResponseDTO,DisbursementTrackerDTO
from app.services.vw_disbursement_tracker_service_impl import DisbursementListServiceImpl
from app.dto.vw_disbursement_tracker_dtls_dto import DisbursementTrackerDetailsDTO,DisbursementdetailsTrackerResponseDTO,DisbursementTrackerDetailsDTOToExport
from app.services.vw_disbursement_tracker_service_impl import DisbursementListServiceImpl
from app.services.pda_service_impl import PDAServiceImpl
from app.services.port_service_impl import PortServiceImpl
from app.services.communication_history_service_impl import TxnCommunicationHistoryServiceImpl
from sqlalchemy.engine import Row
from app.models import PDAModel,TxnDisbursement
from app.dto.pda_dto import PDADto
import json
from cryptography.fernet import Fernet

FERNET_KEY = b'AkBB1S6CVzGc2EejYxZWpw5_XkJ41h8a298rFH4pqhU='  # Store securely
fernet = Fernet(FERNET_KEY)

logger = logging.getLogger("app_logger")
disbursementController = APIRouter()													
load_dotenv()
HOST = os.getenv("HOST")
ALLOWED_ROLES_ADMIN_USER = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]
ALLOWED_ROLES_PORT_AGENT = [
    {"id": 4, "name": "Port Agent"}
]
ALLOWED_ROLES_CLIENT = [
    {"id": 3, "name": "Client"}
]
pda_service = PDAServiceImpl()
company_service = CompanyServiceImpl()
bank_service = BankServiceImpl()
disbursement_service = DisbursementListServiceImpl()
port_service=PortServiceImpl()
comm_history_service = TxnCommunicationHistoryServiceImpl()
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

@disbursementController.post("/api/v1/initiate_disbursement", tags=["Disbursement"],response_model=TxnDisbursementDto)
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def initiate_disbursement(request: Request, background_tasks: BackgroundTasks,request_data: TxnDisbursementInitiateDTo, db: Session = Depends(get_db)):
    
    try:
        username = request.state.user["username"]
        
        # Create disbursement through service layer
        response = await pda_service.initiate_disbursement(
            user=username,
            request_data=request_data,
            background_tasks=background_tasks,
            db=db
        )
        
        logger.info(f"Disbursement initiated successfully: {response.disbursement_seq}")
        return response
        
    except HTTPException:
        raise
    except ValueError as e:
        logger.error(f"Validation error in initiate_disbursement")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="failed to initiate disbursement"
        )
    except Exception as e:
        logger.error(f"Unexpected error in initiate_disbursement")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to initiate disbursement"
        )

@disbursementController.post("/api/v1/validate_pda_link", tags=["Disbursement"], response_model=linkValidationResponseDTO)
# @role_required(ALLOWED_ROLES_PORT_AGENT)
async def validate_pda_link(request: Request, background_tasks: BackgroundTasks,request_data: ValidatePdaLink, db: Session = Depends(get_db)):
    validate_pda = pda_service.validate_pda_link(db,request_data.pda_token,request_data.email)
    if not validate_pda:
            raise HTTPException(status_code=404, detail="PDA link not found or email mismatch.")
        
    
    if validate_pda.status != 'Y':
            raise HTTPException(status_code=400, detail="PDA link is not active.")

    #Commented based on the Jira PDA-386
    # if validate_pda.link_expiry and validate_pda.link_expiry < datetime.now():
    #         raise HTTPException(status_code=400, detail="PDA link has expired.")
    otp,user_uuid = generate_otp_and_uuid()
    otp_entry = pda_service.add_or_update_paform_otp(validate_pda.disbursement_seq,request_data.email,otp,user_uuid,'Y',db)
    subject = "OTP AUTHENTICATION"
    # message = (
    #         f"Dear User,\n\n"
    #         f"You have requested access to the Meraki PDA Disbursement Form.\n"
    #         f"Please use the below OTP to complete your authentication process:\n\n"
    #         f"🔐 OTP: {otp}\n\n"
    #         f"This OTP is valid for a limited time. Do not share it with anyone.\n\n"
    #         f"Regards,\nMeraki Team"
    #     )
    context = {
        "otp":otp,
        "email_id":MERAKI_DISBURSEMENT_EMAIL_ADDRESS
    }
    # background_tasks.add_task(SendMail.send_email, request_data.email, subject, message)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=request_data.email,
        subject=subject,
        template_name="pda_otp_disbursement.html", 
        context=context,
        template_type="html",
    )
    
    return linkValidationResponseDTO(
            status= "success",
            message= f"Link is valid, OTP has been successfully sent to the {request_data.email}.",
            user_uuid= user_uuid  
    )

def to_jsonable(obj):
    if isinstance(obj, Row):
        return dict(obj._mapping)
    elif isinstance(obj, list):
        return [to_jsonable(item) for item in obj]
    return obj
@disbursementController.post("/api/v1/validate_pda_link_otp",tags=["Disbursement"],response_model=OTPValidationResponseDTO)
# @role_required(ALLOWED_ROLES_PORT_AGENT)
async def reviewValidateOtp(request: Request, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    data = await request.json()
    uuid = data.get('uuid')
    otp = data.get('otp')
    start = time.time()
    otp_valid = pda_service.validate_pa_form_otp(uuid,otp,db)
    print((f"validate_pa_form_otp took {time.time() - start:.2f} seconds"))
    if not otp_valid:
        return JSONResponse(
            status_code=401,
            content={
                "status": "fail",
                "detail": "Invalid OTP"
            }
        )

    # Token expiry calculations
    expiry_minutes = int(Config.JWT_ACCESS_TOKEN_EXPIRES)
    expiry_seconds = expiry_minutes * 60
    utc_now = datetime.now(timezone.utc)
    expires_dt = utc_now + timedelta(seconds=expiry_seconds)

    # Optional: local timezone
    ist = pytz.timezone(os.getenv("TIME_ZONE", "Asia/Kolkata"))
    expiration_time_ist = expires_dt.astimezone(ist)

    # Claims for JWT
    additional_claims = {
        "user_id": otp_valid.disbursement_seq,     
        "username": "ExternalUser",
        "useremail": otp_valid.email,
        "company": 0,
        "roleId": 4,
        "role_name": "Port Agent"
    }
    start = time.time()
    # Generate token
    token = generate_token(
        userid=otp_valid.disbursement_seq,
        username="ExternalUser",
        useremail=otp_valid.email,
        additional_claims=additional_claims,
        db=db,
    )
    print((f"generate_token took {time.time() - start:.2f} seconds"))
    
    disbursement = pda_service.get_disbursement_by_disbursment_seq(otp_valid.disbursement_seq,db)
    pda_service.check_inactive_or_deleted(disbursement)
    pda_dto = None
    if disbursement.pda:
        try:
            # if disbursement.pda is an ORM object
            pda_dto = PDADto.model_validate(disbursement.pda)
        except Exception:
            # fallback if it's already dict-like
            pda_dto = PDADto(**jsonable_encoder(disbursement.pda))
    print(f"pda_dto {pda_dto}")        
    client_name = company_service.get_company_name_by_id(db,disbursement.client_id)
    port_agent_name= company_service.get_company_name_by_id(db,disbursement.portagent_id)
    json_template = pda_service.get_json_template_by_name("pa_form",db)
    company_details = company_service.get_company_details_by_id(disbursement.portagent_id,db)
    billing_address = company_details.address
    bank_details = bank_service.get_bank_details_by_id(company_details.bank_details_id,db)
    vessel_dtls=pda_service.get_vessel_details_by_pda_vslid(disbursement.pda_vsl_id, db)
    json_template = to_jsonable(json_template)
    json_template = jsonable_encoder(json_template)
    response_dto = OTPValidationResponseDTO(						 
    disbursement_seq=otp_valid.disbursement_seq,	
    disbursement_id=disbursement.disbursement_id,
    client_id = disbursement.client_id,			  
    client_name=client_name,
    port_agent_name=port_agent_name,
    pda = pda_dto,										
    status="success",
    status_code=200,
    uuid=uuid,
    expires= expires_dt.isoformat() if expires_dt else None,
    name=getattr(otp_valid, 'name', "External User"),
    username=otp_valid.email,
    role_id="4",
    role_name="Port Agent",
    detail="OTP is valid. Token cookie has been set.",
    json_template = json_template,
    billing_address = billing_address,
    bank_details =bank_details,
    vessel_dtls=vessel_dtls,
    voyage=disbursement.voyage
)
    response_data = jsonable_encoder(response_dto)

    # Return as JSONResponse
    response = JSONResponse(content=response_data)
    # Set secure HttpOnly cookie
    response.set_cookie(
        key="Token",
        value=token,
        httponly=True,
        secure=True,
        samesite="lax",
        expires=expires_dt,
        max_age=expiry_seconds
    )

    return response


@disbursementController.post("/api/v1/pda_pa_form_submit",tags=["Disbursement"])
@jwt_required
@role_required(ALLOWED_ROLES_PORT_AGENT)
async def pdaFormSubmit(request: Request, request_body:DisbursementPAFormRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    try:
        
        pda_dtl = pda_service.update_pda_disbursement_paform_submit(request_body,db)
    except Exception as e:
        raise Exception("unable to submit")
    disbursement_dtl = pda_service.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
    client_name = company_service.get_company_name_by_id(db, disbursement_dtl.client_id)
    port_agent_name = company_service.get_company_name_by_id(db, disbursement_dtl.portagent_id)
    port_dtl=port_service.get_port_info_by_id(disbursement_dtl.port_id,db)
    voy_no=disbursement_dtl.voyage
    vessel_name=disbursement_dtl.pda_vessel_details.vsl_dtls["name"]
    port_name=port_dtl.name
    subject_parts = [
    vessel_name.upper() if vessel_name else "",
    f"VOY-{voy_no}" if voy_no else "",  
    port_name.upper() if port_name else ""
    ]
    filtered_parts = list(filter(None, subject_parts))
    # subject = "PDA Disbursement Submitted"
    subject = f"PDA - {'-'.join(filtered_parts)} - {disbursement_dtl.disbursement_id}" if filtered_parts else "PDA Disbursement Submitted - {disbursement_dtl.disbursement_id}"
    # message = f"Port Agent {port_agent_name} has submitted PDA Disbursement for vessel {request_body.vessel.name}. Please check now."
    context = {
        "client_name": client_name,
        "port_agent_name": port_agent_name,
        "disbursement_id":disbursement_dtl.disbursement_id,
        "vessel_name":disbursement_dtl.pda_vessel_details.vsl_dtls["name"],
        "port_name":port_dtl.name,
        "eta":disbursement_dtl.pda.pda_eta,
        "etd":disbursement_dtl.pda.pda_etd,
    }
    
    #email_cc_list = [email.strip() for email in disbursement_dtl.pda.email_to.split(",") if email.strip()]
    #email_to_list = [email.strip() for email in disbursement_dtl.pda.email_cc.split(",") if email.strip()]
    # background_tasks.add_task(SendMail.send_template_email,[MERAKI_DISBURSEMENT_EMAIL_ADDRESS.strip()], subject, message)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=[MERAKI_DISBURSEMENT_EMAIL_ADDRESS.strip()],
        subject=subject,
        template_name="pda_submit.html", 
        context=context,
        template_type="html",
    )

    return {
        "status": "success",
        "message": "Disbursement submitted successfully",
        "disbursement_seq": request_body.disbursement_seq
    }

										   
@disbursementController.post("/api/v1/initiate_disbursement_manual", tags=["Disbursement"],response_model=TxnDisbursementDto)
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def initiate_disbursement_manual(request: Request, background_tasks: BackgroundTasks,request_data: TxnDisbursementInitiateManualDTo, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    response = pda_service.initiate_disbursement_manual(username,request_data,db)

    return response

@disbursementController.get("/api/v1/disbursement_detail/{disbursement_seq}", tags=["Disbursement"],response_model=TxnDisbursementDto)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def disbursement_details(request: Request, background_tasks: BackgroundTasks,disbursement_seq: int, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    response = pda_service.get_disbursement_detail_by_seq(disbursement_seq,db)

    return response


# This below endpoints belongs to the Disbursement Tracker

@disbursementController.post("/api/v1/disbursement_tracker",tags=["Disbursement"],response_model=DisbursementTrackerResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def get_disbursement_list(request: Request,request_dto: DisbursementTrackerRequestDTO,db: Session = Depends(get_db)):
    """
    Get paginated and optionally filtered list of disbursement via POST request.
    """
    disbursement = disbursement_service.get_disbursement_list(request_dto, db)

    dto_disbursement = [DisbursementTrackerDTO.model_validate(d) for d in disbursement["data"]]

    response = DisbursementTrackerResponseDTO(
        message="List of disbursement fetched successfully",
        total_count=disbursement["total_count"],
        data=dto_disbursement
    )
    return response
										   
															
@disbursementController.get("/api/v1/disbursement_tracker_detail/{disbursement_seq}",tags=["Disbursement"],response_model=DisbursementTrackerDetailsDTO,status_code=status.HTTP_200_OK)
@jwt_required
async def get_disbursement_details(request: Request,disbursement_seq:int,db: Session = Depends(get_db)):
    disbursement = disbursement_service.get_disbursement_details(disbursement_seq, db)
    if not disbursement:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Disbursement with seq {disbursement_seq} not found")
    return disbursement												 

@disbursementController.post("/api/v1/disbursement_tracker_update", tags=["Disbursement"] ,response_model=DisbursementdetailsTrackerResponseDTO)
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def update_disbursement_details(request: Request, disbursement_data: DisbursementTrackerDetailsDTO , db: Session = Depends(get_db)):
    username = request.state.user["username"]
    disbursement = disbursement_service.disbursement_details_edit(username, disbursement_data, db)
    message="Disbursement updated successfully"
   
    return DisbursementdetailsTrackerResponseDTO(message=message,data=None)

@disbursementController.post("/api/v1/export_disbursement_detail", tags=["Disbursement"], response_model=List[DisbursementTrackerDetailsDTOToExport])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def export_disbursement_detail(request: Request,request_dto: DisbursementTrackerRequestDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    disbursement_list = disbursement_service.export_disbursement_detail(request_dto, db)
    
    return disbursement_list
							 
	 
@disbursementController.post("/api/v1/return_to_pda/", tags=["Disbursement"],response_model=ReturnToPdaResponseDTO)
@jwt_required
@role_required(ALLOWED_ROLES_PORT_AGENT)
async def return_to_pda(request: Request,background_tasks: BackgroundTasks, disbursement_data: ReturnToPdaRequestDTO , db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try:    
        email_cc_obj = db.query(PDAModel).filter(PDAModel.disbursement_seq==disbursement_data.disbursement_seq).first()
        email_cc_list=[email.strip() for email in email_cc_obj.email_cc.split(",") if email.strip()]+[MERAKI_DISBURSEMENT_EMAIL_ADDRESS]
        email_to_list=[email.strip() for email in email_cc_obj.email_to.split(",") if email.strip()]
        disbursement = pda_service.return_to_pda(disbursement_data, email_cc_list, email_to_list, db)
        message1="Successfully returned to PDA"
        port_agent_and_vsl_id_obj=pda_service.get_disbursement_by_disbursment_seq(disbursement_data.disbursement_seq,db)
        port_agent_name = company_service.get_company_name_by_id(db, port_agent_and_vsl_id_obj.portagent_id)
        disbursement_dtl = pda_service.get_disbursement_by_disbursment_seq(disbursement_data.disbursement_seq, db)
        vessel_obj=pda_service.get_vessel_details_by_pda_vslid(disbursement_dtl.pda_vsl_id,db) 
        vessel_name=vessel_obj.vsl_dtls['name'] if vessel_obj else '-'
        # subject = "PDA Disbursement Returned"
        subject=f"PDA Form Returned by Port Agent {port_agent_name}  – {vessel_name} - {disbursement_dtl.disbursement_id}"
        # message = f"Port Agent {port_agent_name} has returned PDA Disbursement for vessel {port_agent_and_vsl_id_obj.vsl_id}. Please check now."
        context = {
            "disbursement_id" : disbursement_dtl.disbursement_id,
            "vessel_name" : vessel_name,
            "port_agent_name" : port_agent_name,
            "email_id" : MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
        
        #email_to_list = [email.strip() for email in disbursement_data.email_to.split(",") if email.strip()]
        # background_tasks.add_task(SendMail.send_email, to_email=email_cc_list, subject=subject, message=message,cc=[])
        background_tasks.add_task(
                        SendMail.send_template_email,
                        to_email=email_cc_list,
                        subject=subject,
                        template_name="pda_return_to_pda.html", 
                        context=context,
                        template_type="html",
                        cc_email=[]
                    )

        return ReturnToPdaResponseDTO(message=message1,data=None)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Unable to return")

@disbursementController.post("/api/v1/pda_edit", tags=["Disbursement PDA"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def edit_pda_details(request: Request,background_tasks: BackgroundTasks, pda_dto: TxnPdaEditDto , db: Session = Depends(get_db)):
    username = request.state.user["username"]
    signature=pda_service.get_email_sign_by_user(username,db)
    if signature:
    # Replace newline (\n) with <br> tags for email-safe rendering
        signature = signature.replace("\n", "<br>")
    pda_service.update_pda_details(pda_dto,username,db)
    disbursement_dtl = pda_service.get_disbursement_by_disbursment_seq(pda_dto.disbursement_seq, db) 
    port_dtl=port_service.get_port_info_by_id(disbursement_dtl.port_id,db)
    if pda_dto.pda_save !='Y'and pda_dto.pda_submit !='Y' and pda_dto.save !='Y':
        if disbursement_dtl.pda.is_manual_entry !='Y' :
                raw_token = uuid.uuid4().hex + uuid.uuid4().hex
                encrypted_token = encrypt_token(raw_token)
                pda_disbursement_link = f"{HOST}pda-disburesement/{encrypted_token}"
                
                disbursement = pda_service.get_disbursement_by_disbursment_seq(pda_dto.disbursement_seq, db)
                client_name = company_service.get_company_name_by_id(db, disbursement.client_id)
                port_agent_name = company_service.get_company_name_by_id(db, disbursement.portagent_id)
                
                if pda_dto.email_to:
                    email_to_list = pda_dto.get_email_to_list()
                else:
                    email_to_list = disbursement.pda.email_to if disbursement.pda.email_to else []
                
                if pda_dto.email_cc:
                    email_cc_list = pda_dto.get_email_cc_list()
                else:
                    email_cc_list = disbursement.pda.email_cc if disbursement.pda.email_cc else []
                    
                    
                link_entry = PAFormLink(
                    disbursement_seq=pda_dto.disbursement_seq,
                    registration_link=pda_disbursement_link,
                    pda_token=encrypted_token,
                    email_to=email_to_list,
                    status="Y",
                )
                link_entry = pda_service.add_pda_link(link_entry, db)

                
                pda_service.update_pda_re_request_flag(pda_dto, db)
                #print(f"disbursement.pda.email_to  {disbursement.pda.email_to }")
                sub  = None
                body = None
                if pda_dto.is_re_request!='Y':
                    sub = f"PDA Request for Disbursement - {disbursement_dtl.disbursement_id}"
                    body = "Re-PDA"
                    signature=pda_dto.email_signature
                    if signature:
                        signature = signature.replace("\n", "<br>")
                    context = {
                    "client_name": client_name,
                    "pda_disbursement_link": link_entry.registration_link,
                    "email_id":MERAKI_DISBURSEMENT_EMAIL_ADDRESS,
                    "signature": signature
                    } 
                    template_name = "pda_re_request.html"
                else :
                    vessel_name = pda_dto.vessel.name
                    voy_no = pda_dto.voyage 
                    port_name=port_dtl.name
                    subject_parts = [
                    vessel_name.upper() if vessel_name else "",
                    f"VOY-{voy_no}" if voy_no else "",  
                    port_name.upper() if port_name else ""
                    ]
                    filtered_parts = list(filter(None, subject_parts))
                    sub = f"REVISED PDA REQUEST - {'-'.join(filtered_parts)} - {disbursement_dtl.disbursement_id}" if filtered_parts else "PDA Re-Request for Disbursement"
                    # sub = "PDA Re-Request for Disbursement "
                    body = "PDA"
                    context = {
                    "client_name": client_name,
                    "port_agent_name": port_agent_name,
                    "invoice_number":disbursement_dtl.pda.invoice_ref_no,
                    "vessel_name":disbursement_dtl.pda_vessel_details.vsl_dtls['name'] if disbursement_dtl.pda_vessel_details else None ,
                    "port_name":port_dtl.name if disbursement_dtl.port_id else None,
                    "eta":disbursement_dtl.pda.pda_eta if disbursement_dtl.pda else None,
                    "etd":disbursement_dtl.pda.pda_etd if disbursement_dtl.pda else None,
                    "re_req_pda_link":link_entry.registration_link,
                    "signature":signature,
                    "email_id":MERAKI_DISBURSEMENT_EMAIL_ADDRESS
                    }
                    template_name="pda_re_request_negotiation.html"
                print(f"request_dto.email_to  {pda_dto.email_to }")
                print(f"email_to_list {email_to_list}" )
                print(f"email_cc_list {email_cc_list}" )

                if  not email_to_list:
                    raise HTTPException(status_code=400, detail="No recipient email addresses provided.")
                

                # subject = "PDA Request for Disbursement"
                subject = sub
                client_name = company_service.get_company_name_by_id(db, disbursement.client_id)
                port_agent_name = company_service.get_company_name_by_id(db, disbursement.portagent_id)
                # message = f"""
                # Dear Port Agent,

                # You have a {body} request to review and respond to.

                # Client: {client_name}
                # Port Agent: {port_agent_name}

                # Please use the following secure link to access the form and provide the required information:
                # {link_entry.registration_link}

                # Regards,
                # Meraki Team
                # """
                

                # Validate before scheduling
                if not email_to_list:
                    raise HTTPException(status_code=400, detail="No recipient email addresses provided.")
                
                background_tasks.add_task(
                        SendMail.send_template_email,
                        to_email=email_to_list,
                        subject=subject,
                        template_name=template_name, 
                        context=context,
                        template_type="html",
                        cc_email=email_cc_list
                    )

                return {
                    "status": "success",
                    "message": "We have successfully initiated the re-request.",
                    "disbursement_seq": pda_dto.disbursement_seq,
                    "pda_link": link_entry.registration_link,
                    "requested_by": username,
                }

    if pda_dto.pda_submit =='Y':
       return {
            "status": "success",
            "message": "Pda Submitted successfully"
        }
    else:    
        return {
            "disbursement_seq": pda_dto.disbursement_seq,
            "status": "success",
            "message": "Pda Updated successfully"
        }

@disbursementController.post("/api/v1/client_approval_request", tags=["Disbursement"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def client_request(request: Request, background_tasks: BackgroundTasks,request_dto:TxnClientApprovalRequestInitiateDTo, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    body = await request.json()  
    pda_service.client_request(username,request_dto,db)
    

    # Generate secure token + link
    # raw_token = uuid.uuid4().hex + uuid.uuid4().hex
    # encrypted_token = encrypt_token(raw_token)
    pda_disbursement_link=f"{HOST}/login"
    disbursement_dtl = pda_service.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq, db) 

    print(f"request_dto.email_to  {request_dto.email_to }")
    if request_dto.email_to:
        email_to_list = request_dto.get_email_to_list()
    else:
        email_to_list = disbursement_dtl.pda.email_to if disbursement_dtl.pda.email_to else []
    if request_dto.email_cc:
        email_cc_list = request_dto.get_email_cc_list()
    else:
        email_cc_list = disbursement_dtl.pda.email_cc if disbursement_dtl.pda.email_cc else []

    print(f"email_to_list {email_to_list}" )
    print(f"email_cc_list {email_cc_list}" )

    if  not email_to_list:
        raise HTTPException(status_code=400, detail="No recipient email addresses provided.")

    signature=request_dto.email_signature
    if signature:
        signature = signature.replace("\n", "<br>")
    port_agent_name = company_service.get_company_name_by_id(db, disbursement_dtl.portagent_id)
    port_dtl=port_service.get_port_info_by_id(disbursement_dtl.port_id,db)
    vessel_name=disbursement_dtl.pda_vessel_details.vsl_dtls["name"]
    voy_no =disbursement_dtl.voyage
    port_name=port_dtl.name
    subject_parts = [
    vessel_name.upper() if vessel_name else "",
    f"VOY-{voy_no}" if voy_no else "",  
    port_name.upper() if port_name else ""
    ]
    filtered_parts = list(filter(None, subject_parts))
    subject = f"PDA  - {'-'.join(filtered_parts)} - {disbursement_dtl.disbursement_id}" if filtered_parts else "PDA Approval Request for Disbursement - {disbursement_dtl.disbursement_id}"
    # message = f"""
    # Dear Client,

    # You have a PDA approval request to review and respond to.

    # Port Agent: {port_agent_name}

    # Please use the following secure link to access the form and provide the required information:
    # {link_entry.registration_link}

    # Regards,
    # Meraki Team
    # """
    context = {
        "port_agent_name":port_agent_name,
        "client_approval_link":pda_disbursement_link,
        "signature":signature,
        "email_id":MERAKI_DISBURSEMENT_EMAIL_ADDRESS,
        "body":request_dto.meraki_cmt_to_client
    }

    # Validate before scheduling
    if not email_to_list:
        raise HTTPException(status_code=400, detail="No recipient email addresses provided.")

    # Schedule async background email
    # background_tasks.add_task(SendMail.send_email, email_to_list, subject, message, cc=email_cc_list)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=email_to_list,
        subject=subject,
        template_name="pda_client_app_req.html", 
        context=context,
        template_type="html",
        cc_email=email_cc_list
    )

    return {
        "status": "success",
        "message": "We have successfully initiated the Client Approval request.",
        "disbursement_seq": request_dto.disbursement_seq,
        "pda_link": pda_disbursement_link,
        "requested_by": username,
    }


#    method to get the disbursement list based on client and status 
@disbursementController.post("/api/v1/client_disbursement_tracker_approval_pending",tags=["Disbursement"],response_model=DisbursementTrackerResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
@role_required(ALLOWED_ROLES_CLIENT)
async def get_disbursement_approval_request_client_list(request: Request,request_dto: DisbursementTrackerRequestDTO,db: Session = Depends(get_db)):
    """
    Get paginated and optionally filtered list of disbursement via POST request.
    """
    # Extract username from JWT (depends on your middleware structure)
    username = request.state.user["username"]    
    print("username",username)
    disbursement = disbursement_service.get_disbursement_approval_request_client_list(username,request_dto, db)

    dto_disbursement = [DisbursementTrackerDTO.model_validate(d) for d in disbursement["data"]]

    response = DisbursementTrackerResponseDTO(
        message="List of disbursement fetched successfully",
        total_count=disbursement["total_count"],
        data=dto_disbursement
    )
    return response




@disbursementController.post("/api/v1/client_disbursement_tracker",tags=["Disbursement"],response_model=DisbursementTrackerResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
@role_required(ALLOWED_ROLES_CLIENT)
async def get_disbursement_client_list(request: Request,request_dto: DisbursementTrackerRequestDTO,db: Session = Depends(get_db)):
    """
    Get paginated and optionally filtered list of disbursement via POST request.
    """
    # Extract username from JWT (depends on your middleware structure)
    username = request.state.user["username"]    
    print("username",username)
    disbursement = disbursement_service.get_disbursement_client_list(username,request_dto, db)

    dto_disbursement = [DisbursementTrackerDTO.model_validate(d) for d in disbursement["data"]]

    response = DisbursementTrackerResponseDTO(
        message="List of disbursement fetched successfully",
        total_count=disbursement["total_count"],
        data=dto_disbursement
    )
    return response

@disbursementController.post("/api/v1/pda_client_form_submit",tags=["Disbursement"])
@jwt_required
@role_required(ALLOWED_ROLES_CLIENT)
async def pdaClientFormSubmit(request: Request, request_body:DisbursementClientFormRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    
    # Update disbursement and create communication history
    pda_service.update_pda_disbursement_paClientform_submit(request_body, username, db)
    
    disbursement_dtl = pda_service.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
    client_name = company_service.get_company_name_by_id(db, disbursement_dtl.client_id)
    port_agent_name = company_service.get_company_name_by_id(db, disbursement_dtl.portagent_id)

    subject = f"PDA Disbursement Approval Submitted - {request_body.disbursement_id}"
    # message = f"Client {client_name} has submitted PDA Disbursement Approval for vessel {request_body.vessel.name}. Please check now."
    context ={
        "client_name": client_name,
        "vessel_name":request_body.vessel.name,
        "port_name":request_body.port.name,
        "voyage": request_body.voyage,
        "email_id":MERAKI_DISBURSEMENT_EMAIL_ADDRESS
    }
    #email_cc_list = [email.strip() for email in disbursement_dtl.pda.email_to.split(",") if email.strip()]
    #email_to_list = [email.strip() for email in disbursement_dtl.pda.email_cc.split(",") if email.strip()]
    # background_tasks.add_task(SendMail.send_email,[MERAKI_DISBURSEMENT_EMAIL_ADDRESS.strip()], subject, message)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=[MERAKI_DISBURSEMENT_EMAIL_ADDRESS.strip()],
        subject=subject,
        template_name="client_form_submit.html",
        context=context,
        template_type="html",
        cc_email=[]
    )
    return {
        "status": "success",
        "message": "Disbursement Approval submitted successfully",
        "disbursement_seq": request_body.disbursement_seq
    }

@disbursementController.post("/api/v1/recalculate_disbursement",tags=["Disbursement"],response_model=TxnDisbursementDto)
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def recalculate_disbursement(request: Request, request_data: RecalculateDisbursementRequestDTO,db: Session = Depends(get_db)):
    """
    Recalculate disbursement totals (in-memory only).
    """
    response = pda_service.recalculate_disbursement(request_data, db)
    return response

@disbursementController.post("/api/v1/resend_pda_link", tags=["Disbursement"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def resend_pda_link(request: Request, background_tasks: BackgroundTasks, dto:ResendLink, db: Session = Depends(get_db)):
    """
    Resend PDA link when expired - updates expiry date and sends email to stored recipients
    """

    username = request.state.user["username"]

    result = pda_service.resend_pda_link(
        disbursement_seq=dto.disbursement_seq,
        username=username,
        background_tasks=background_tasks,
        db=db
    )

    return {
        "status": "success",
        "message": "PDA link has been resent successfully"
    }


@disbursementController.post("/api/v1/active_inactive_delete_state")
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def active_inactive_delete_state(request: Request, dto: RecordState, db: Session = Depends(get_db)):
    try:
        result = pda_service.active_inactive_delete_state(dto, db)
        return {
            "status": "success",
            "message": result
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        print(f"Error in active_inactive_delete_state: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    

@disbursementController.post("/api/v1/payment_instruction_mail")
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def payment_instruction_mail(request: Request, dto: PtmInstrMailRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    result=pda_service.payment_instruction_mail(dto, username, background_tasks, db)
    return {
        "status": "success",
        "message": "Payment instruction email sent successfully"
    }
        