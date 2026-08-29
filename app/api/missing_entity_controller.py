from fastapi import APIRouter, Depends, HTTPException, status, Request, BackgroundTasks
from sqlalchemy.orm import Session
import os
import logging
from app.db import get_db
from app.dto.missing_entity_dto import NotifyMissingEntitiesRequestDTO
from app.core.SendMail import SendMail
from app.core.decorators import jwt_required, role_required

logger = logging.getLogger("app_logger")

ALLOWED_ROLES_ALL = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"},
    {"id": 3, "name": "Client"}
]

missingEntityController = APIRouter()

_raw_meraki_email = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")
if not _raw_meraki_email or "configured" in _raw_meraki_email or "default-email" in _raw_meraki_email:
    MERAKI_DISBURSEMENT_EMAIL_ADDRESS = "disbursement@merakishippingservices.com"
else:
    MERAKI_DISBURSEMENT_EMAIL_ADDRESS = _raw_meraki_email

@missingEntityController.post("/api/v1/notify_missing_entities", tags=["Master Data"])
@jwt_required
@role_required(ALLOWED_ROLES_ALL)
async def notify_missing_entities(
    request: Request,
    background_tasks: BackgroundTasks,
    request_data: NotifyMissingEntitiesRequestDTO,
    db: Session = Depends(get_db)
):
    """
    Sends email notification to Meraki Operations when 'Other' is selected for Vessel, Port, Port Agent, Cargo, or Purpose.
    """
    try:
        user_name = request_data.client_name
        if not user_name:
            user_name = request.state.user.get("username", "Client User") if hasattr(request.state, "user") else "Client User"

        subject = f"Missing Master Entity Notification - Requested by {user_name}"

        context = {
            "client_name": user_name,
            "user_email": request_data.user_email,
            "vessel": request_data.vessel.model_dump() if request_data.vessel else None,
            "port": request_data.port.model_dump() if request_data.port else None,
            "port_agent": request_data.port_agent.model_dump() if request_data.port_agent else None,
            "cargo": request_data.cargo.model_dump() if request_data.cargo else None,
            "purpose": request_data.purpose.model_dump() if request_data.purpose else None,
            "notes": request_data.notes
        }

        recipient = MERAKI_DISBURSEMENT_EMAIL_ADDRESS.strip()
        
        # Save vessel to database if present
        if request_data.vessel and request_data.vessel.name:
            from app.models.vessels import MaVessel, CompVslAsso
            existing_vsl = None
            if request_data.vessel.imo_number:
                existing_vsl = db.query(MaVessel).filter(MaVessel.imo_number == request_data.vessel.imo_number).first()
            if not existing_vsl:
                existing_vsl = db.query(MaVessel).filter(MaVessel.name.ilike(request_data.vessel.name)).first()
            
            if not existing_vsl:
                new_vsl = MaVessel(
                    name=request_data.vessel.name,
                    imo_number=request_data.vessel.imo_number,
                    grt=0.0,
                    nrt=0.0,
                    loa=0.0,
                    beam=0.0,
                    depth=0.0,
                    dwt=0.0,
                    type="Other",
                    status="Y",
                    created_by=user_name
                )
                db.add(new_vsl)
                db.flush() # Flush to get new_vsl.vessel_id
                
                # Assign to client
                client_id = request_data.client_id
                if not client_id and hasattr(request.state, "user"):
                    client_id = request.state.user.get("company_id")
                    if not client_id:
                        client_id = request.state.user.get("client_id")
                        
                if client_id:
                    vsl_asso = CompVslAsso(
                        company_id=client_id,
                        vsl_id=new_vsl.vessel_id,
                        status="Y"
                    )
                    db.add(vsl_asso)
                    
                db.commit()
                logger.info(f"Saved new missing vessel to database: {request_data.vessel.name} and assigned to client_id {client_id}")

        background_tasks.add_task(
            SendMail.send_template_email,
            to_email=[recipient],
            subject=subject,
            template_name="missing_entities_notification.html",
            context=context,
            template_type="html"
        )

        logger.info(f"Scheduled missing entities notification email to {recipient}")
        return {
            "status": "success",
            "message": "Notification sent successfully to Meraki Operations."
        }

    except Exception as e:
        logger.error(f"Error in notify_missing_entities: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to process missing entities notification: {str(e)}"
        )
