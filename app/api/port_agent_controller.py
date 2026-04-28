"""
Author: Nitesh
Module: Port Agent Controller
Description: This module handles port agent creation, updating, and listing.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.port_agent_service_impl import PortAgentServiceImpl
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO,PortAgentListRequestDTO
from app.dto.port_agent_response_dto import PortAgentResponseDTO,PortAgentListResponseDTO,PortAgentCreateUpdateResponseDTO
from app.core.decorators import jwt_required, role_required
from typing import List
from pydantic import ValidationError

portAgentController = APIRouter()
port_agent_service = PortAgentServiceImpl()

# ALLOWED_ROLES = [{"id": 1, "desc": "Admin"}, {"id": 2, "desc": "User"}]

@portAgentController.post("/api/v1/port-agent", tags=["port agent management"], response_model=PortAgentCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_port_agent(request: Request, port_data: PortAgentCreateUpdateDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    company = port_agent_service.create_or_update_port_agent(port_data, username, db)
    message = "Port Agent updated successfully" if port_data.company_id else "Port Agent created successfully"

    try:
        validated_data = PortAgentResponseDTO.model_validate(company)
    except ValidationError as e:
        raise HTTPException(status_code=422,detail=[err['msg'] for err in e.errors()])

    return PortAgentCreateUpdateResponseDTO(message=message, data=validated_data)

@portAgentController.post("/api/v1/port-agentlist", tags=["port agent list"], response_model=PortAgentListResponseDTO)
@jwt_required
async def get_port_agent_list(request: Request, request_data: PortAgentListRequestDTO, db: Session = Depends(get_db)):
    result = port_agent_service.get_port_agent_list(request_data, db)
    return {
        "total_count": result["total_count"],
        "data": [PortAgentResponseDTO.model_validate(c) for c in result["data"]]
    }
