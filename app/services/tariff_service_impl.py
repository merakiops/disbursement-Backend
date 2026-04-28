"""
Author: Punith
Description: This module defines an abstract service class for handling 
tariff in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.repo.tariff_repo import TariffRepo
from app.services.tariff_service import TariffService
from typing import Optional
from app.dto.port_tariff_rule_dto import PortTariffRulesRequestDTO


class TariffServiceImpl(TariffService):
    def get_all_tariff_rules(self,dto:PortTariffRulesRequestDTO,db: Session):
        return TariffRepo.get_all_tariff_rules(dto,db)


    def create_or_update_tariff_rule(self,user:str, data: dict,db: Session):
        return TariffRepo.create_or_update_tariff_rule(user,data,db)