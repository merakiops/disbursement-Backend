"""
Author: Nitesh
Module: Purpose Controller
Description: This module handles purpose creation and management.
"""

from fastapi import APIRouter, Depends, status, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.purpose_service_impl import PurposeServiceImpl
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO, PurposeListRequestDTO
from app.dto.purpose_response_dto import PurposeResponseDTO, PurposeCreateUpdateResponseDTO, PurposeListResponseDTO
from app.core.decorators import jwt_required,role_required
from typing import List

purposeController = APIRouter()
purpose_service = PurposeServiceImpl()

ALLOWED_ROLES = [
    {"id": 1,"name":"Admin"},
    {"id": 2,"name":"User"}
]

@purposeController.post("/api/v1/create-updatePurpose",tags=["purpose management"],response_model=PurposeCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_purpose(request: Request,purpose_data: PurposeCreateUpdateDTO,db: Session = Depends(get_db)):
    """
    Create a new purpose or update an existing one based on the provided `purpose_id`.

    - If `purpose_id` is provided and found, the purpose will be updated.
    - If no `purpose_id` is provided, a new purpose will be created.
    """
    username = request.state.user["username"]
    purpose = purpose_service.create_or_update_purpose(purpose_data, username, db)
    message = "Purpose updated successfully" if purpose_data.purpose_id else "Purpose created successfully"

    response = PurposeCreateUpdateResponseDTO(
        message=message,
        data=PurposeResponseDTO.model_validate(purpose)
    )
    return response


@purposeController.post("/api/v1/purposelist",tags=["purpose management"],response_model=PurposeListResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def get_purpose_list(request: Request,request_dto: PurposeListRequestDTO,db: Session = Depends(get_db)):
    """
    Get a paginated and optionally filtered list of purposes.
    """
    purposes = purpose_service.get_purpose_list(request_dto, db)

    dto_purposes = [PurposeResponseDTO.model_validate(p) for p in purposes["data"]]

    response = PurposeListResponseDTO(
        message="List of purposes fetched successfully",
        total_count=purposes["total_count"],
        data=dto_purposes
    )
    return response
