"""
This class handles the abstract service definition for Purpose operations.
"""

from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from typing import List
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO, PurposeListRequestDTO
from app.models.purpose import MaPurpose

class PurposeService(ABC):

    @abstractmethod
    def create_or_update_purpose(self, purpose_data: PurposeCreateUpdateDTO, username: str, db: Session) -> MaPurpose:
        pass

    @abstractmethod
    def get_purpose_list(self, request_dto: PurposeListRequestDTO, db: Session):
        pass
    
    @abstractmethod
    def get_all_purpose(self,db:Session):
        pass