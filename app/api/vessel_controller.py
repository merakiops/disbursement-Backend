"""
Author: Nitesh
Module: Vessel Controller
Description: This module handles vessel creation and updating.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.vessel_service_impl import VesselServiceImpl
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO,VesselListRequestDTO,VesselsByAssignmentResponse,VesselListAssignedRequestDTO
from app.dto.vessel_response_dto import VesselResponseDTO,VesselCreateUpadteResponseDTO,GetVesselByImoNumberResponseDTO, VesselListResponseDTO,GetVesselByImoNumberRequestDTO
from app.core.decorators import jwt_required, role_required
from app.models.vessels import MaVessel
from app.services.user_service_impl import UserServiceImpl
from fastapi import Query
from typing import List,Optional

vesselController = APIRouter()
vessel_service = VesselServiceImpl()

# ALLOWED_ROLES = [
#     {"id": 1, "desc": "Admin"},
#     {"id": 2, "desc": "User"}
# ]

@vesselController.post("/api/v1/vessels", tags=["vessel management"], response_model=VesselCreateUpadteResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_vessel(request: Request,vessel_data: VesselCreateUpdateDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    # company_id = request.state.user["company"]
    vessel = vessel_service.create_or_update_vessel(vessel_data, username, db)
    message = "Vessel updated successfully" if vessel_data.vessel_id else "Vessel created successfully"

    response = VesselCreateUpadteResponseDTO(message=message,data=VesselResponseDTO.model_validate(vessel))
    return response


@vesselController.post("/api/v1/vessellist", tags=["vessel list"], response_model=VesselListResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def get_vessel_list(request: Request,request_data: VesselListRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    company_id = request.state.user["company"]
    # company_id = request.state.user["company"]
    vessel_list = vessel_service.get_vessel_list(company_id,request_data, db)
    response = VesselListResponseDTO(
    total_count=vessel_list["total_count"],
    data=[VesselCreateUpdateDTO.model_validate(vessel) for vessel in vessel_list["data"]]
    )
    return response

# @vesselController.get("/api/v1/vessellist", tags=["vessel list"], response_model=VesselListResponseDTO)
# @jwt_required
# # @role_required(ALLOWED_ROLES)
# async def get_vessel_list(request: Request,page: int = Query(1, ge=1),page_size: int = Query(10, ge=1),query: Optional[str] = None,status: Optional[str] = None,db: Session = Depends(get_db)):
#     username = request.state.user["username"]
#     company_id = request.state.user["company"]

#     request_dto = VesselListRequestDTO(
#         page=page,
#         page_size=page_size,
#         query=query,
#         status=status
#     )

#     vessel_list = vessel_service.get_vessel_list(company_id, request_dto, db)

#     response = VesselListResponseDTO(
#         total_count=vessel_list["total_count"],
#         data=[VesselCreateUpdateDTO.model_validate(vessel) for vessel in vessel_list["data"]]
#     )
#     return response



@vesselController.post("/api/v1/vessels-by-assignment", tags=["vessel list"], response_model=VesselsByAssignmentResponse)
@jwt_required
async def get_vessels_by_assignment_status_for_company(request: Request, request_dto: VesselListAssignedRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user['username']
    company_id = request_dto.company_id
    requested_fields = [field.lower() for field in request_dto.fields] if request_dto.fields else ["active_vessels_list"]
    allowed_fields = {"active_vessels_list", "assigned_unassigned"}
    unknown_fields = set(requested_fields) - allowed_fields
    print("unknown_fields:",unknown_fields)
    if unknown_fields:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid fields requested: {', '.join(unknown_fields)}"
        )


    result = {}
    result = vessel_service.get_vessels_by_assignment_status_for_company(company_id, db)
    if "active_vessels_list" in requested_fields:
        return{
            "active_vessels_list": [VesselCreateUpdateDTO.model_validate(v) for v in result.get("assigned_vessels", [])],            
        }
    elif "assigned_unassigned" in requested_fields:
        return {
            "assigned_vessels": [VesselCreateUpdateDTO.model_validate(v) for v in result.get("assigned_vessels", [])],
            "unassigned_vessels": [VesselCreateUpdateDTO.model_validate(v) for v in result.get("unassigned_vessels", [])]
        }
    
    return{
            "unassigned_vessels": [VesselCreateUpdateDTO.model_validate(v) for v in result.get("unassigned_vessels", [])]
    }

@vesselController.post("/api/v1/vessel-info-by-imo",response_model=GetVesselByImoNumberResponseDTO, tags=["vessel details"])
async def get_vessel_by_imo_number(dto:GetVesselByImoNumberRequestDTO, db: Session = Depends(get_db)):
    try:
        vessel=vessel_service.get_vessels_by_imo(dto,db)
        message="The vessel details of the perticular client id is given below"
        return GetVesselByImoNumberResponseDTO(message=message,data=vessel)
    except Exception:
        raise HTTPException(status_code=400, detail="The vessel details for the perticular client name is not present")