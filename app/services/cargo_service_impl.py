from sqlalchemy.orm import Session
from app.services.cargo_service import CargoService
from app.repo.cargo_repo import CargoRepository
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO,CargoListRequestDTO
from app.models.cargo import MaCargo
from typing import List

class CargoServiceImpl(CargoService):

    def create_or_update_cargo(self, cargo_data: CargoCreateUpdateDTO,username:str,db: Session) -> MaCargo:
        return CargoRepository.create_or_update_cargo(cargo_data, username,db)
    
    def get_cargo_list(self,cargo_data:CargoListRequestDTO,db:Session):
         return CargoRepository.get_cargo_list(cargo_data,db)
    
    def get_all_cargo_list(self,db:Session):
        return CargoRepository.get_all_cargo_list(db)
    