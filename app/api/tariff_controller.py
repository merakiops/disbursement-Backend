"""
Author: Punith
Module: Tariff Controller
Description: This module handles Tariff related operation.
"""
from fastapi import APIRouter, Depends, status, HTTPException, Request, Query
from app.dto.port_tariff_rule_dto import PortTariffRuleDTO,convert_to_dto
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.tariff_service_impl import TariffServiceImpl
from app.core.decorators import jwt_required, role_required
from app.dto.port_tariff_rule_dto import PortTariffRulesFinalDTO,PortTariffRulesRequestDTO
from fastapi.responses import JSONResponse
from typing import Optional
tariffController = APIRouter()
tariff_service = TariffServiceImpl()

@tariffController.post("/api/v1/tariff_rule/save", summary="Create or Update Tariff")
@jwt_required
def create_or_update_tariff_rule(request:Request,dto: PortTariffRuleDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try:
        data_dict = dto.model_dump(exclude_unset=True)        
        result = tariff_service.create_or_update_tariff_rule(username,data_dict,db)
        message = "Updated Successfully " if dto.port_tariff_rule_id else "Saved Successfully"
        return {"message": message, "data": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@tariffController.post("/api/v1/tariff_rules",response_model=PortTariffRulesFinalDTO,summary="Get all Tariff rules")
@jwt_required
def create_or_update_tariff_rule(request:Request,dto:PortTariffRulesRequestDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try:
        tariff_rules = tariff_service.get_all_tariff_rules(dto,db)
        return tariff_rules
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e)) 