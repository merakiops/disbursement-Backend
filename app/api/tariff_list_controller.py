from fastapi import APIRouter, Depends, status,Request
from sqlalchemy.orm import Session
from app.db import get_db
from typing import List
from app.services.txn_tariff_service_impl import TariffServiceImpl
from app.dto.tariff_service_detail_dto import TariffServiceDetailDTO
from app.core.decorators import jwt_required, role_required

tariff_controller = APIRouter()
tariff_service = TariffServiceImpl()

@tariff_controller.get("/api/v1/tariff-service",tags=["tariff management"],response_model=List[TariffServiceDetailDTO],status_code=status.HTTP_200_OK)
@jwt_required
def get_tariff_form_fields(request:Request,db: Session = Depends(get_db)):
    """
    Fetch field definitions for a given service (like pilotage or towage)

    This endpoint is used to render dynamic forms from txn_tariff_service_column.
    """
    return tariff_service.get_tariff_service_details(db)
