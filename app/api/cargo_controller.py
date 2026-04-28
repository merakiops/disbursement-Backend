"""
Author: Nitesh
Module: Cargo Controller
Description: This module handles cargo creation and management.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.cargo_service_impl import CargoServiceImpl
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO, CargoListRequestDTO
from app.dto.cargo_response_dto import CargoResponseDTO, CargoCreateUpdateResponseDTO, CargoListResponseDTO
from app.core.decorators import jwt_required, role_required
from typing import List,Optional
from fastapi import Query

cargoController = APIRouter()
cargo_service = CargoServiceImpl()

ALLOWED_ROLES = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]

@cargoController.post("/api/v1/create-updateCargo", tags=["cargo management"], response_model=CargoCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_cargo(request: Request, cargo_data: CargoCreateUpdateDTO, db: Session = Depends(get_db)):
    """
    Create a new cargo or update an existing one based on the provided `cargo_id`.

    - If `cargo_id` is passed and found, the cargo will be updated.
    - If no `cargo_id` is passed, a new cargo will be created.
    """
    username = request.state.user["username"]
    cargo = cargo_service.create_or_update_cargo(cargo_data, username, db)
    message = "Cargo updated successfully" if cargo_data.cargo_id else "Cargo created successfully"

    response = CargoCreateUpdateResponseDTO(message=message, data=CargoResponseDTO.model_validate(cargo))
    return response


@cargoController.post("/api/v1/cargolist",tags=["cargo management"],response_model=CargoListResponseDTO,status_code=status.HTTP_200_OK)
@jwt_required
async def get_cargo_list(request: Request,request_dto: CargoListRequestDTO,db: Session = Depends(get_db)
):
    """
    Get paginated and optionally filtered list of cargos via POST request.
    """
    cargos = cargo_service.get_cargo_list(request_dto, db)

    dto_cargos = [CargoResponseDTO.model_validate(c) for c in cargos["data"]]

    response = CargoListResponseDTO(
        message="List of cargos fetched successfully",
        total_count=cargos["total_count"],
        data=dto_cargos
    )
    return response

