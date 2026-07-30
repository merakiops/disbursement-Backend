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
from jinja2 import Environment, FileSystemLoader, Template
try:
    from weasyprint import HTML, CSS
except Exception:
    HTML = CSS = None
from app.dto.vw_report_dto import PdaReportRequestDTO
from app.services.report_service_impl import PdaReportServiceImpl

pda_report_service = PdaReportServiceImpl()
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

    draft_payload = build_fda_email_draft_payload(fda_dto.disbursement_seq, db)

    return {
        "status": "success",
        "message": "fda Updated successfully",
        "email_draft": draft_payload
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


def build_fda_email_draft_payload(disbursement_seq: int, db: Session):
    try:
        disbursement_dtl = fda_service.get_disbursement_by_disbursment_seq(disbursement_seq, db)
        if not disbursement_dtl:
            return None

        port_dtl = port_service.get_port_info_by_id(disbursement_dtl.port_id, db)
        vessel_dtl = pda_service.get_vessel_details_by_pda_vslid(disbursement_dtl.pda_vsl_id, db)

        vessel_name = ""
        imo_no = ""
        if vessel_dtl and hasattr(vessel_dtl, 'fda_vsl_dtls') and vessel_dtl.fda_vsl_dtls:
            vessel_name = vessel_dtl.fda_vsl_dtls.get('name', '') or ""
            imo_no = vessel_dtl.fda_vsl_dtls.get('imo_number', '') or ""
        elif vessel_dtl and hasattr(vessel_dtl, 'vsl_dtls') and vessel_dtl.vsl_dtls:
            vessel_name = vessel_dtl.vsl_dtls.get('name', '') or ""
            imo_no = vessel_dtl.vsl_dtls.get('imo_number', '') or ""

        voyage_no = disbursement_dtl.voyage or ""
        port_name = port_dtl.name if port_dtl else ""
        disbursement_id = disbursement_dtl.disbursement_id or f"MDA{disbursement_seq}"

        to_email_list = []
        cc_email_list = []
        if hasattr(disbursement_dtl, 'pda') and disbursement_dtl.pda:
            if disbursement_dtl.pda.email_to:
                to_email_list = [e.strip() for e in disbursement_dtl.pda.email_to.split(",") if e.strip()]
            if disbursement_dtl.pda.email_cc:
                cc_email_list = [e.strip() for e in disbursement_dtl.pda.email_cc.split(",") if e.strip()]

        fda_amt = 0.0
        if hasattr(disbursement_dtl, 'fda') and disbursement_dtl.fda:
            fda_amt = float(disbursement_dtl.fda.portagent_fda_amount or 0.0)
        elif hasattr(disbursement_dtl, 'final_amount') and disbursement_dtl.final_amount is not None:
            fda_amt = float(disbursement_dtl.final_amount or 0.0)

        adv_amt = float(getattr(disbursement_dtl, 'advance_amount_remitted', 0.0) or 0.0)
        bal_val = getattr(disbursement_dtl, 'outstanding_balance', None)
        bal_amt = float(bal_val) if bal_val is not None else (fda_amt - adv_amt)

        subject = f"FDA CONFIRMATION - {vessel_name.upper()} - VOY - {voyage_no} - LOADING AT {port_name.upper()} - {disbursement_id}"

        BASE_DIR = os.path.abspath(os.path.dirname(__file__))
        APP_DIR = os.path.join(BASE_DIR, "..")
        template_dir = os.path.join(APP_DIR, "templates", "email_templates")
        template_path = os.path.join(template_dir, "fda_confirmation_draft.html")

        if os.path.exists(template_path):
            with open(template_path, "r", encoding="utf-8") as f:
                template_str = f.read()
            template = Template(template_str)
            html_body = template.render(
                vessel_name=vessel_name,
                voyage_no=voyage_no,
                imo_no=imo_no,
                port_name=port_name,
                call_purpose="LOADING",
                agency_name="HOST AGENCY",
                fda_amount=f"USD {fda_amt:,.2f}",
                advance_paid=f"USD {adv_amt:,.2f}",
                balance_pay=f"USD {bal_amt:,.2f}",
                bank_details={
                    "account_holder_name": "Host Agency LLC",
                    "account_no": "435029052840",
                    "routing_no": "0260-0959-3",
                    "swift_code": "BOFAUS3N"
                },
                sender_name="Philomina CJ",
                company_name="Meraki Greatlakes Shipping and Technical Management L.L.C-FZ"
            )
        else:
            html_body = f"<p>Good Day,</p><p>FDA Confirmation for {disbursement_id}</p>"

        return {
            "disbursement_seq": disbursement_seq,
            "disbursement_id": disbursement_id,
            "subject": subject,
            "to_email": to_email_list,
            "cc_email": cc_email_list,
            "email_body_html": html_body,
            "pdf_report_url": f"/api/v1/report_generation?disbursement_seq={disbursement_seq}&report_type=FDA"
        }
    except Exception as e:
        logger.error(f"Error building fda email draft payload: {e}", exc_info=True)
        return None


@disbursementControllerFDA.get("/api/v1/fda_confirmation_email_preview/{disbursement_seq}")
@jwt_required
async def get_fda_confirmation_email_preview(request: Request, disbursement_seq: int, db: Session = Depends(get_db)):
    draft = build_fda_email_draft_payload(disbursement_seq, db)
    if not draft:
        raise HTTPException(status_code=404, detail="Disbursement details not found for email preview")
    return {
        "status": "success",
        "email_draft": draft
    }


@disbursementControllerFDA.post("/api/v1/send_fda_confirmation_email")
@jwt_required
async def send_fda_confirmation_email(request: Request, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    body = await request.json()
    disbursement_seq = body.get("disbursement_seq")
    to_email = body.get("to_email")
    cc_email = body.get("cc_email", [])
    subject = body.get("subject")
    html_body = body.get("email_body_html")

    if not disbursement_seq or not to_email or not subject or not html_body:
        raise HTTPException(status_code=400, detail="disbursement_seq, to_email, subject and email_body_html are required.")

    pdf_bytes = None
    try:
        dto = PdaReportRequestDTO(disbursement_seq=int(disbursement_seq), report_type="FDA")
        report = pda_report_service.get_rep_deatils_by_id(dto, db)
        if report and HTML is not None:
            import json
            report_dict = {c.key: getattr(report, c.key) for c in inspect(report).mapper.column_attrs}
            BASE_DIR = os.path.abspath(os.path.dirname(__file__))
            TEMPLATE_DIR = os.path.join(BASE_DIR, "..", "templates", "Report_templates")
            env_rep = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
            template = env_rep.get_template("fda_report_template.html")
            
            service_data = report_dict.get("service_charge")
            if isinstance(service_data, str):
                try: report_dict["service_charge"] = json.loads(service_data)
                except Exception: report_dict["service_charge"] = []
            elif service_data is None: report_dict["service_charge"] = []

            system_service_data = report_dict.get("system_service_charge")
            if isinstance(system_service_data, str):
                try: report_dict["system_service_charge"] = json.loads(system_service_data)
                except Exception: report_dict["system_service_charge"] = []
            elif system_service_data is None: report_dict["system_service_charge"] = []

            report_dict = pda_report_service.chunk_service_items(report_dict)
            html_content = template.render(**report_dict)
            css_path = os.path.join(TEMPLATE_DIR, "report_styles.css")
            pdf_bytes = HTML(string=html_content, base_url=TEMPLATE_DIR).write_pdf(stylesheets=[CSS(filename=css_path)])
    except Exception as e:
        logger.error(f"PDF Generation warning for FDA email: {e}")

    background_tasks.add_task(
        SendMail.send_email_with_pdf,
        to_email=to_email,
        subject=subject,
        html_body=html_body,
        pdf_bytes=pdf_bytes,
        pdf_filename=f"MDA{disbursement_seq}_FDA.pdf",
        cc_email=cc_email
    )

    return {
        "status": "success",
        "message": "FDA Confirmation Email sent successfully",
        "disbursement_seq": disbursement_seq
    }