from fastapi import APIRouter, Depends, status, HTTPException, Request, Query
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from app.dto.dashboard_dto import DashboardRequestDTO, DashboardDataRequest
from app.dto.dasboard_response_dto import (
    DashboardResponseDTO, FdaProcessingDetailsResponseDTO, FilterDataDTO,FilterDataRequestDTO
)
from app.services.dashboard_service_impl import DashboardServiceImpl
from typing import Optional
from pydantic import BaseModel

DashboardController = APIRouter()
dashboard_service = DashboardServiceImpl()



@DashboardController.post("/api/v1/dashboard", response_model=DashboardResponseDTO)
@jwt_required
async def call_dashboard_summary(request: Request, payload: DashboardRequestDTO, db: Session = Depends(get_db)):
    """
    Get dashboard summary for a single client using request payload.
    """
    try:
        return dashboard_service.get_dashboard_summary(payload, db)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )


@DashboardController.post("/api/v1/dashboard-table", response_model=FdaProcessingDetailsResponseDTO)
@jwt_required
async def get_fda_processing_details(request: Request, data_request: DashboardDataRequest, db: Session = Depends(get_db)):
    """
    Get FDA processing details with pagination.
    """
    try:
        user_role = request.state.user.get('roleId', '')

        result = dashboard_service.get_fda_processing_details(data_request, user_role, db)
        return result
    except Exception as e:

        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@DashboardController.post("/api/v1/dashboard-filter-data", response_model=FilterDataDTO)
@jwt_required
async def get_dashboard_filter_data(request: Request, filter_request: FilterDataRequestDTO, db: Session = Depends(get_db)):
    """
    Get unique filter data for dashboard filters.
    Returns distinct values for client_id, client_name, vessel_name, country_name, port_name.
    """
    try:
        result = dashboard_service.get_dashboard_filter_data(filter_request.client_id, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
