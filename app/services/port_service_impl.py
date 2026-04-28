from sqlalchemy.orm import Session
from app.services.port_service import PortService
from app.repo.port_repo import PortRepository
from app.dto.port_create_or_update_dto import PortCreateUpdateDTO,PortListRequestDTO
from app.models.ports import MaPort
from typing import List

class PortServiceImpl(PortService):

    def create_or_update_port(self, port_data: PortCreateUpdateDTO,username:str,db: Session) -> MaPort:
        return PortRepository.create_or_update_port(port_data, username,db)


    # def get_all_ports_by_status(self,status:str,db: Session) -> List[MaPort]:
    #     return PortRepository(status,db)
    
    def get_port_list(self,request_dto:PortListRequestDTO,db: Session )-> List[MaPort]:
        return PortRepository.get_port_list(request_dto,db)
    
    # def get_all_port(self,db: Session) -> List[MaPort]:
    #     return PortRepository.get_all_countries(db)

    def get_port_service_list(self,db: Session):
        return PortRepository.get_port_service_list(db)
    
    def get_ports_by_country(self, country_id: int, db: Session) -> List[MaPort]:
        return PortRepository.get_ports_by_country(country_id, db)
    
    def get_ports_for_country(self, country_id: int, db: Session) -> List[MaPort]:
        return PortRepository.get_ports_for_country(country_id, db)
    
    def get_port_info_by_id(self, port_id,db):
        return PortRepository.get_port_info_by_id(port_id,db)

    def get_all_port(self, db: Session):
        return PortRepository.get_all_port(db)