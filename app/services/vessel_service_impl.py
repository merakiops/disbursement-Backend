

from sqlalchemy.orm import Session
from app.services.vessel_service import VesselService
from app.repo.vessel_repo import VesselRepository
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO,VesselListRequestDTO
from app.models.vessels import MaVessel
from typing import List
from app.dto.vessel_response_dto import GetVesselByImoNumberRequestDTO


class VesselServiceImpl(VesselService):


    def create_or_update_vessel(self, vessel_data: VesselCreateUpdateDTO,username:str, db: Session) -> MaVessel:
        return VesselRepository.create_or_update_vessel(vessel_data, username,db)

    def get_all_vessels_by_status(self,company_id :int, status:str,db: Session) :
        return VesselRepository.get_all_vessels_by_status(company_id,status,db)
    
    def get_vessel_list(self, company_id: int,  request_dto:VesselListRequestDTO,db: Session,):
        return VesselRepository.get_vessel_list(company_id,request_dto,db)
    
    def get_vessels_by_assignment_status_for_company(self,company_id: int, db: Session) -> List[MaVessel]:
        return VesselRepository.get_vessels_by_assignment_status_for_company(company_id,db)
    
    def read_all_vsl_prop_calc(self,db: Session):
        return VesselRepository.read_all_vsl_prop_calc(db)
    
    def get_vessels_by_imo(self,request:GetVesselByImoNumberRequestDTO,db: Session):
        return VesselRepository.get_vessels_by_imo(request,db)

    def get_vessel_with_client_id(self,db: Session):
        return VesselRepository.get_vessel_with_client_id(db)