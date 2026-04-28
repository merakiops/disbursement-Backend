"""
Author: Nitesh
Module: Client Controller
Description: This module handles client or company creation and updating.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.client_service_impl import ClientServiceImpl
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO,ClientListRequestDTO
from app.dto.client_response_dto import ClientResponseDTO, ClientCreateUpdateResponseDTO,ClientListResponseDTO
from app.core.decorators import jwt_required, role_required
from typing import List

clientController = APIRouter()
client_service = ClientServiceImpl()

# ALLOWED_ROLES = [
#     {"id": 1, "desc": "Admin"},
#     {"id": 2, "desc": "User"}
# ]

@clientController.post("/api/v1/clients", tags=["client management"], response_model=ClientCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_client(request: Request, client_data: ClientCreateUpdateDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    company_id = request.state.user["company"]
    
    client = client_service.create_or_update_client(client_data, username, db)

    response_dto = ClientResponseDTO.model_validate(client)
    response_dto.vsl_ids = [v.vsl_id for v in client.vessels_as_owner if v.status == 'Y']  # Binding vessel IDs
    
    message = "Client updated successfully" if client_data.company_id else "Client created successfully"
    response = ClientCreateUpdateResponseDTO(message=message, data=response_dto)
    return response



@clientController.post("/api/v1/clientlist", tags=["client management"], response_model=ClientListResponseDTO)
@jwt_required
async def get_client_list(request: Request, request_data: ClientListRequestDTO, db: Session = Depends(get_db)):
    client_list = client_service.get_client_list(request_data, db)

    # Manually bind vsl_ids for each client
    clients_with_vessels = []
    for client in client_list["data"]:
        dto = ClientResponseDTO.model_validate(client)
        dto.vsl_ids = [v.vsl_id for v in client.vessels_as_owner if v.status == 'Y']
        clients_with_vessels.append(dto)

    response = ClientListResponseDTO(total_count=client_list["total_count"],data=clients_with_vessels)
    return response


