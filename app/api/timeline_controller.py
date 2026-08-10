from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.dto.timeline_dto import (
    DisbursementSummaryListResponseDTO,
    DetailedDisbursementTimelineResponseDTO
)
from app.services.timeline_service import TimelineService
from app.core.decorators import jwt_required, role_required
import logging

logger = logging.getLogger("app_logger")

ALLOWED_ROLES_ALL = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"},
    {"id": 3, "name": "Client"}
]

timelineController = APIRouter()

@timelineController.get(
    "/api/v1/disbursement_timeline_all",
    tags=["Disbursement Timeline"],
    response_model=DisbursementSummaryListResponseDTO
)
@jwt_required
@role_required(ALLOWED_ROLES_ALL)
async def get_all_disbursements_timeline_summary(
    request: Request,
    db: Session = Depends(get_db)
):
    """
    Fetch list of all disbursement requests with current status, vessel, port, progress percentage, and 4 timeline steps for master table view.
    """
    try:
        response = TimelineService.get_all_requests_timeline_summary(db)
        return response
    except Exception as e:
        logger.error(f"Error fetching all disbursement timelines: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch disbursement timelines summary: {str(e)}"
        )

@timelineController.get(
    "/api/v1/disbursement_timeline/{identifier}",
    tags=["Disbursement Timeline"],
    response_model=DetailedDisbursementTimelineResponseDTO
)
@jwt_required
@role_required(ALLOWED_ROLES_ALL)
async def get_disbursement_timeline_detail(
    request: Request,
    identifier: str,
    db: Session = Depends(get_db)
):
    """
    Fetch detailed timeline steps for a specific request ID / disbursement ID (when clicking the eye icon).
    """
    try:
        response = TimelineService.get_single_request_detailed_timeline(db, identifier)
        return response
    except Exception as e:
        logger.error(f"Error fetching disbursement timeline detail for {identifier}: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch disbursement timeline detail: {str(e)}"
        )
