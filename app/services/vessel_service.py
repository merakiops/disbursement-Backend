
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO, VesselListRequestDTO
from app.models.vessels import MaVessel
from typing import List
from app.dto.vessel_response_dto import GetVesselByImoNumberRequestDTO


class VesselService(ABC):

    @abstractmethod
    def create_or_update_vessel(self, vessel_data: VesselCreateUpdateDTO,username:str, db: Session) -> MaVessel:
        pass
    
    @abstractmethod
    def get_all_vessels_by_status(self,company_id :int, status:str, db: Session) :
        pass
    
    @abstractmethod
    def get_vessel_list(self, company_id: int, request_dto:VesselListRequestDTO,db: Session, ):
        pass

    @abstractmethod
    def get_vessels_by_assignment_status_for_company(self,company_id: int, db: Session) -> List[MaVessel]:
        """
        Fetch all vessels that are not associated with any company.
        """
        pass
    @abstractmethod
    def read_all_vsl_prop_calc(self,db: Session):
        """
        Fetch all vessels properties that are not associated .
        """
        pass
    def get_vessels_by_imo(self,request:GetVesselByImoNumberRequestDTO,db: Session):
        pass
    
    @abstractmethod
    def get_vessel_with_client_id(self, db: Session):
        pass
