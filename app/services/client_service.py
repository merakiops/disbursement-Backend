
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO,ClientListRequestDTO
from app.models.company import MaCompany


class ClientService(ABC):

    @abstractmethod
    def create_or_update_client(self, client_data: ClientCreateUpdateDTO,username:str, db: Session) -> MaCompany:
        pass

    @abstractmethod
    def get_client_list(self, request_dto: ClientListRequestDTO, db: Session):
         pass
    @abstractmethod
    def get_all_clients(self,db: Session):
        pass