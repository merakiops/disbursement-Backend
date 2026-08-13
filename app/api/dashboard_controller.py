from fastapi import APIRouter, Depends, status, HTTPException, Request, Query
from fastapi.responses import Response
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from app.dto.dashboard_dto import DashboardRequestDTO, DashboardDataRequest
from app.dto.dasboard_response_dto import (
    DashboardResponseDTO, FdaProcessingDetailsResponseDTO, FilterDataDTO, FilterDataRequestDTO
)
from app.services.dashboard_service_impl import DashboardServiceImpl
import csv
import io

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
    Get FDA processing details with pagination or full dataset if pageSize <= 0.
    """
    try:
        user_info = getattr(request.state, 'user', {}) or {}
        user_role = user_info.get('roleId', '')
        raw_username = str(user_info.get('username') or user_info.get('user') or '').lower()
        is_meraki_user = ("meraki" in raw_username) or (user_role == 1 or user_role == '1')

        result = dashboard_service.get_fda_processing_details(data_request, user_role, db, is_meraki_user=is_meraki_user)
        return result
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@DashboardController.post("/api/v1/dashboard-table/export")
@jwt_required
async def export_fda_processing_details(request: Request, data_request: DashboardDataRequest, db: Session = Depends(get_db)):
    """
    Export all matching FDA processing details into a downloadable Excel/CSV file.
    """
    try:
        user_info = getattr(request.state, 'user', {}) or {}
        user_role = user_info.get('roleId', '')
        raw_username = str(user_info.get('username') or user_info.get('user') or '').lower()
        is_meraki_user = ("meraki" in raw_username) or (user_role == 1 or user_role == '1')

        # Force pageSize = -1 to fetch ALL matching records
        data_request.pageSize = -1
        result = dashboard_service.get_fda_processing_details(data_request, user_role, db, is_meraki_user=is_meraki_user)
        
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Write CSV Header
        headers = [
            "S.No", "Disbursement Seq", "Date", "Vessel", "Country", "Port",
            "LOA", "GRT", "RGRT", "NRT", "PDA Amount", "FDA Amount",
            "Voyage No", "Vessel Type", "Port Function", "Arrival Local", "Departure Local",
            "Port Days", "Agent", "Cargo Grade", "Counterparty", "IMO No"
        ]
        writer.writerow(headers)
        
        for row in result.fdaCostTracker.tableData:
            writer.writerow([
                row.sno,
                row.disbursement_seq,
                row.date,
                row.vessel or "",
                row.country or "",
                row.port or "",
                row.loa or "",
                row.grt or "",
                row.rgrt or "",
                row.nrt or "",
                row.pdaAmount,
                row.fdaAmount,
                row.voyage_no or "",
                row.vessel_type or "",
                row.port_func or "",
                row.arrival_local or "",
                row.departure_local or "",
                row.port_days or "",
                row.agent or "",
                row.cargo_grade or "",
                row.counterparty_short_name or "",
                row.imo_no or ""
            ])
            
        csv_data = output.getvalue()
        return Response(
            content=csv_data,
            media_type="text/csv",
            headers={
                "Content-Disposition": "attachment; filename=dashboard_export.csv"
            }
        )
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
        data_src = getattr(filter_request, 'data_source', 'all')
        result = dashboard_service.get_dashboard_filter_data(filter_request.client_id, data_src, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

