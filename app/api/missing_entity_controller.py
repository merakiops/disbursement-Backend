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
if not _raw_meraki_email or "configured" in _raw_meraki_email:
    MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("SMTP_USER") or os.getenv("EMAIL_ADDRESS") or "reports@merakishippingservices.com"
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
