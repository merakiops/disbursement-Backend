from sqlalchemy.orm import Session
from app.services.purpose_service import PurposeService
from app.repo.purpose_repo import PurposeRepository
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO,PurposeListRequestDTO
from app.models.purpose import MaPurpose
from typing import List

class PurposeServiceImpl(PurposeService):

    def create_or_update_purpose(self, purpose_data: PurposeCreateUpdateDTO,username:str,db: Session) -> MaPurpose:
        return PurposeRepository.create_or_update_purpose(purpose_data, username,db)
    
    def get_purpose_list(self,purpose_data:PurposeListRequestDTO,db:Session):
         return PurposeRepository.get_purpose_list(purpose_data,db)
    
    def get_all_purpose(self,db):
        return PurposeRepository.get_all_purpose(db)