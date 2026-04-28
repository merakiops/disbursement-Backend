'''
This Class handles Abstract class for creating, updating, and fetching countries
'''
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.port_create_or_update_dto import PortCreateUpdateDTO,PortListRequestDTO
from app.models.ports import MaPort
from typing import List

class PortService(ABC):
    
    @abstractmethod
    def create_or_update_port(self, port_data: PortCreateUpdateDTO,username:str, db: Session) -> MaPort:
        pass

    # @abstractmethod
    # def get_all_countries_by_status(self,status:str,db: Session)-> List[MaPort]:
    #     pass

    @abstractmethod
    def get_port_list(self,request_dto:PortListRequestDTO,db: Session ):
        pass
    @abstractmethod
    def get_port_service_list(self,db: Session):
        pass
    @abstractmethod
    def get_ports_by_country(self, country_id: int, db: Session) -> List[MaPort]:
        pass

    @abstractmethod
    def get_ports_for_country(self, country_id: int, db: Session) -> List[MaPort]:
        pass
    
    @abstractmethod
    def get_port_info_by_id(self,port_id:int,db:Session):
        pass

    @abstractmethod
    def get_all_port(self, db: Session):
        pass
