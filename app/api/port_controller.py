"""
Author: Nitesh
Module: Port Controller
Description: This module handles port creation, update, and listing.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db import get_db
from app.services.port_service_impl import PortServiceImpl
from app.dto.port_create_or_update_dto import PortCreateUpdateDTO, PortListRequestDTO
from app.dto.port_response_dto import PortResponseDTO, PortCreateUpdateResponseDTO, PortListResponseDTO
from app.core.decorators import jwt_required, role_required

portController = APIRouter()
port_service = PortServiceImpl()

ALLOWED_ROLES = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]

@portController.post("/api/v1/create-updatePort", tags=["port management"], response_model=PortCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_port(request: Request, port_data: PortCreateUpdateDTO, db: Session = Depends(get_db)):
    """
    Create a new port or update an existing one based on the provided `port_id`.

    - If `port_id` is passed and found, the port will be updated.
    - If no `port_id` is passed, a new port will be created.
    """
    username = request.state.user["username"]
    port = port_service.create_or_update_port(port_data, username, db)
    message = "Port updated successfully" if port_data.port_id else "Port created successfully"

    response = PortCreateUpdateResponseDTO(message=message, data=PortResponseDTO.model_validate(port))
    return response


@portController.post("/api/v1/portlist", tags=["port management"], response_model=PortListResponseDTO)
@jwt_required
async def get_port_list(request: Request, request_dto: PortListRequestDTO, db: Session = Depends(get_db)):
    """
    Retrieve a paginated list of ports with optional search and status filters.
    """
    username = request.state.user["username"]
    port_list = port_service.get_port_list(request_dto, db)

    response = PortListResponseDTO(
        total_count=port_list["total_count"],
        data=[PortResponseDTO.model_validate(port) for port in port_list["data"]]
    )
    return response

@portController.get("/api/v1/ports/by-country/{country_id}", response_model=List[PortResponseDTO], tags=["Port Management"])
def get_ports_by_country(country_id: int, db: Session = Depends(get_db)):
    """
    Get all ports under a given country.
    """
    ports = port_service.get_ports_by_country(country_id, db)
    if not ports:
        raise HTTPException(status_code=404, detail="No ports found for this country.")
    return ports

@portController.get("/api/v1/ports/for-country/{country_id}", response_model=List[PortResponseDTO], tags=["Port Management"])
def get_ports_for_country(country_id: int, db: Session = Depends(get_db)):
    """
    Get all ports under a given country.
    """
    ports = port_service.get_ports_for_country(country_id, db)
    if not ports:
        raise HTTPException(status_code=404, detail="No ports found for this country.")
    return ports
