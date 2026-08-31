from fastapi import APIRouter, Depends, HTTPException, status, Request, File, Form, UploadFile
from typing import Optional
from sqlalchemy.orm import Session
from app.db import get_db
from app.dto.timeline_dto import (
    DisbursementSummaryListResponseDTO,
    DetailedDisbursementTimelineResponseDTO
)
from app.services.timeline_service import TimelineService
from app.core.decorators import jwt_required, role_required
import logging
import os
import uuid
from app.repo.file_upload import FileUploadRepository

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
    If logged in user is a Client, filter data by their client_id. If Meraki/Admin, fetch all records.
    """
    try:
        user_info = getattr(request.state, "user", {}) or {}
        username = (user_info.get("username") or "").lower()
        role_id = user_info.get("roleId")

        meraki_usernames = ["meraki", "meraki-operations", "meraki_superadmin", "meraki_admin"]
        is_meraki_admin = (username in meraki_usernames) or (role_id in [1, 2])

        client_id = None
        if not is_meraki_admin:
            client_id = user_info.get("company")

        response = TimelineService.get_all_requests_timeline_summary(db, client_id=client_id)
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

from app.dto.timeline_dto import TimelineDocumentUploadRequestDTO

@timelineController.post(
    "/api/v1/disbursement_timeline/{identifier}/document",
    tags=["Disbursement Timeline"]
)
@jwt_required
async def upload_timeline_document(
    identifier: str,
    request: Request,
    step_title: str = Form(...),
    file: UploadFile = File(...),
    file_name: Optional[str] = Form(None),
    db: Session = Depends(get_db)
):
    try:
        user_info = getattr(request.state, "user", {}) or {}
        username = user_info.get("username", "System")
        
        s3_client = FileUploadRepository.get_s3_client()
        file_ext = file.filename.split('.')[-1] if '.' in file.filename else ''
        file_path = f"timeline_docs/{identifier}/{uuid.uuid4()}.{file_ext}"
        content_type = file.content_type
        
        try:
            s3_client.put_object(
                Bucket=os.getenv("BUCKET_NAME"),
                Key=file_path,
                Body=file.file,
                ContentType=content_type
            )
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to upload to S3: {e}")

        # Create a mock payload to pass to TimelineService
        class MockPayload:
            pass
        payload = MockPayload()
        payload.step_title = step_title
        payload.file_name = file_name if file_name else file.filename
        payload.file_path = file_path
        
        response = TimelineService.save_timeline_document(identifier, payload, username, db)
        return response
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error uploading document: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to upload document: {str(e)}"
        )
