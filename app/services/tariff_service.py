"""
Author: Punith
Description: This module defines an abstract service class for handling 
tariff in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.port_tariff_rule_dto import PortTariffRulesRequestDTO

class TariffService(ABC):
    @abstractmethod
    def get_all_tariff_rules(self,request:PortTariffRulesRequestDTO,db: Session):
        pass

    @abstractmethod
    def create_or_update_tariff_rule(sel,user:str, data: dict,db: Session):
        pass