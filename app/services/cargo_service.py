'''
This Class handles Abstract class for creating, updating, and fetching cargo
'''
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO,CargoListRequestDTO
from app.models.cargo import MaCargo
from typing import List

class CargoService(ABC):
    
    @abstractmethod
    def create_or_update_cargo(self, cargo_data: CargoCreateUpdateDTO,username:str, db: Session) -> MaCargo:
        pass

    @abstractmethod
    def get_cargo_list(self,cargo_dto:CargoListRequestDTO,db:Session):
        pass

    @abstractmethod
    def get_all_cargo_list(self,db:Session):
        pass