from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.dto.timeline_dto import DisbursementTimelineListResponseDTO
from app.services.timeline_service import TimelineService
from app.core.decorators import jwt_required, role_required, ALLOWED_ROLES_ALL
import logging

logger = logging.getLogger("app_logger")

timelineController = APIRouter()

@timelineController.get(
    "/api/v1/disbursement_timeline/{identifier}",
    tags=["Disbursement Timeline"],
    response_model=DisbursementTimelineListResponseDTO
)
@jwt_required
@role_required(ALLOWED_ROLES_ALL)
async def get_disbursement_timeline(
    request: Request,
    identifier: str,
    db: Session = Depends(get_db)
):
    """
    Fetch complete chronological timeline history for a disbursement ID, request ID, or disbursement sequence.
    """
    try:
        response = TimelineService.get_timeline(db, identifier)
        return response
    except Exception as e:
        logger.error(f"Error fetching disbursement timeline for {identifier}: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch disbursement timeline: {str(e)}"
        )
