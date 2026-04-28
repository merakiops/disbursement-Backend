from fastapi import APIRouter, Depends, status, HTTPException, Request,BackgroundTasks
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db import get_db
from app.core.decorators import jwt_required, role_required
from app.dto.fda_dto import FDACreationRequestDto,FDACreationWithPDARequestDto,RecalculationRequestDTO,DisbursementResponse,TxnFdaEditDto,TxnClientApprovalRequestInitiateDTo
from app.dto.vw_disbursement_tracker_dto import DisbursementTrackerRequestDTO,DisbursementTrackerResponseDTO,DisbursementTrackerDTO
from app.dto.fda_dto import TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO
from app.services.fda_service_impl import FDAServiceImpl
from app.services.pda_service_impl import PDAServiceImpl
from app.services.vw_disbursement_tracker_service_impl import DisbursementListServiceImpl
from app.services.company_service_impl import CompanyServiceImpl
from app.services.port_service_impl import PortServiceImpl
from app.core.SendMail import SendMail
import uuid
from app.core.security import encrypt_token, decrypt_token
import os
from dotenv import load_dotenv
from datetime import datetime, timezone, timedelta
from app.config import Config
import pytz
from fastapi.responses import JSONResponse
import time
import logging
from sqlalchemy.inspection import inspect
ALLOWED_ROLES_ADMIN_USER = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]
ALLOWED_ROLES_CLIENT = [
    {"id": 3, "name": "Client"}
]

logger = logging.getLogger("app_logger")
disbursementControllerFDA = APIRouter()													
load_dotenv()
HOST = os.getenv("HOST")
ALLOWED_ROLES = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]
fda_service = FDAServiceImpl()
company_service = CompanyServiceImpl()
disbursement_service = DisbursementListServiceImpl()
port_service = PortServiceImpl()
pda_service = PDAServiceImpl()
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")


@disbursementControllerFDA.post("/api/v1/fda_creation_without_pda",  tags=["DisbursementFDA"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def fda_creation_without_pda(request: Request,request_data: FDACreationRequestDto, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    response = fda_service.fda_creation_without_pda(username,request_data,db)

    return response

@disbursementControllerFDA.get("/api/v1/list_of_disbursement_id",  tags=["DisbursementFDA"],response_model=List[DisbursementResponse]) 
@jwt_required
def get_disbursement_objects_for_completed_pda(request:Request,db: Session = Depends(get_db)):   
    return fda_service.get_disbursement_objects_for_completed_pda(db)

@disbursementControllerFDA.get("/api/v1/get_port_agent_data_by_disbursement_seq/{disbursement_seq}", tags=["DisbursementFDA"]) 
@jwt_required
def get_port_agent_data_by_disbursement_seq(request:Request,disbursement_seq:int,db: Session = Depends(get_db)):  
    result= fda_service.get_port_agent_data_by_disbursement_seq(disbursement_seq,db)
    return {
            "portagent_pda_data": result.pda.portagent_pda_data,
            "comp_id": result.comp_id,
            "portagent_id": result.portagent_id,
            "pda_currency_to":result.pda.pda_currency_to,
            "pda_currency_from":result.pda.pda_currency_from,
            "pda_roe":result.pda.pda_roe,
            "invoice_ref_no":result.pda.invoice_ref_no,
            "pda_vessel_details":result.pda.pda_vessel_details,
            "port_tariff_rule":result.port_tariff_rule
        }

@disbursementControllerFDA.post("/api/v1/fda_creation_with_pda", tags=["DisbursementFDA"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def fda_creation_with_pda(request: Request,request_data: FDACreationWithPDARequestDto, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    response = fda_service.fda_creation_with_pda(username,request_data,db)

    return response

@disbursementControllerFDA.post("/api/v1/fda_edit", tags=["DisbursementFDA"])
@jwt_required
# @role_required(ALLOWED_ROLES)
async def edit_fda_details(request: Request,background_tasks: BackgroundTasks, fda_dto: TxnFdaEditDto , db: Session = Depends(get_db)):
    username = request.state.user["username"]
    fda_service.update_fda_details(fda_dto,username,db)

    return {
        "status": "success",
        "message": "fda Updated successfully"
    }

@disbursementControllerFDA.post("/api/v1/calculation",  tags=["DisbursementFDA"])
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def calculation(request: Request,request_data: RecalculationRequestDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    if request_data.port_change_flag=='Y':
        response = fda_service.port_change_in_fda(request_data,db)
    else:
        response = fda_service.Re_calculation(request_data,db)

    return response

@disbursementControllerFDA.post("/api/v1/FDA_client_approval_request")
@jwt_required
@role_required(ALLOWED_ROLES_ADMIN_USER)
async def client_request(request: Request, background_tasks: BackgroundTasks,request_dto:TxnClientApprovalRequestInitiateDTo, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    body = await request.json()  
    fda_service.client_request(username,request_dto,db)
    

    # Generate secure token + link
    # raw_token = uuid.uuid4().hex + uuid.uuid4().hex
    # encrypted_token = encrypt_token(raw_token)
    pda_disbursement_link=f"{HOST}/login"
    disbursement_dtl = fda_service.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq, db) 

    print(f"request_dto.email_to  {request_dto.email_to }")
    if request_dto.email_to:
        email_to_list = request_dto.get_email_to_list()
    else:
        raise HTTPException(status_code=400, detail="Atleast one TO Recipant needed.")
    
    if request_dto.email_cc:
        email_cc_list = request_dto.get_email_cc_list()
    else:
        raise HTTPException(status_code=400, detail="Atleast one CC Recipant needed")

    print(f"email_to_list {email_to_list}" )
    print(f"email_cc_list {email_cc_list}" )

    if  not email_to_list:
        raise HTTPException(status_code=400, detail="No recipient email addresses provided.")
    
    client_name = company_service.get_company_name_by_id(db, disbursement_dtl.client_id)
    port_agent_name = company_service.get_company_name_by_id(db, disbursement_dtl.portagent_id)
    signature=request_dto.email_signature
    if signature:
        signature = signature.replace("\n", "<br>")
    port_dtl=port_service.get_port_info_by_id(disbursement_dtl.port_id,db)
    vessel_name=pda_service.get_vessel_details_by_pda_vslid(disbursement_dtl.pda_vsl_id,db)
    if disbursement_dtl.pda_vessel_details:
        vessel_name=vessel_name.fda_vsl_dtls['name']
    else:
        vessel_name=""
    print(vessel_name)
    voy_no =disbursement_dtl.voyage
    port_name=port_dtl.name
    subject_parts = [
    vessel_name.upper() if vessel_name else "",
    f"VOY-{voy_no}" if voy_no else "",  
    port_name.upper() if port_name else ""
    ]
    filtered_parts = list(filter(None, subject_parts))
    subject = f"FDA  - {'-'.join(filtered_parts)} - {disbursement_dtl.disbursement_id}" if filtered_parts else f"FDA Approval Request for Disbursement - {disbursement_dtl.disbursement_id}"
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
        "body": request_dto.meraki_cmt_to_client
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
    
@disbursementControllerFDA.post("/api/v1/FDA_client_disbursement_tracker",response_model=DisbursementTrackerResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
@role_required(ALLOWED_ROLES_CLIENT)
async def get_disbursement_client_list(request: Request,request_dto: DisbursementTrackerRequestDTO,db: Session = Depends(get_db)):
    """
    Get paginated and optionally filtered list of disbursement via POST request.
    """
    # Extract username from JWT (depends on your middleware structure)
    username = request.state.user["username"]    
    disbursement = disbursement_service.get_disbursement_client_list(username,request_dto, db)

    dto_disbursement = [DisbursementTrackerDTO.model_validate(d) for d in disbursement["data"]]

    response = DisbursementTrackerResponseDTO(
        message="List of disbursement fetched successfully",
        total_count=disbursement["total_count"],
        data=dto_disbursement
    )
    return response

@disbursementControllerFDA.post("/api/v1/FDA_client_form_submit")
@jwt_required
@role_required(ALLOWED_ROLES_CLIENT)
async def pdaClientFormSubmit(request: Request, request_body:DisbursementClientFormRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    username = request.state.user["username"]

    fda_service.update_fda_disbursement_paClientform_submit(request_body,username,db)
    disbursement_dtl = fda_service.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
    client_name = company_service.get_company_name_by_id(db, disbursement_dtl.client_id)
    port_agent_name = company_service.get_company_name_by_id(db, disbursement_dtl.portagent_id)

    subject = f"FDA Disbursement Approval Submitted - {request_body.disbursement_id}"
    # message = f"Client {client_name} has submitted FDA Disbursement Approval for vessel {request_body.vessel.name}. Please check now."
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