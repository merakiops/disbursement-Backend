
from sqlalchemy.orm import Session
from app.services.client_service import ClientService
from app.repo.client_repo import ClientRepository
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO,ClientListRequestDTO
from app.models.company import MaCompany


class ClientServiceImpl(ClientService):


    def create_or_update_client(self, client_data: ClientCreateUpdateDTO,username:str, db: Session) -> MaCompany:
        return ClientRepository.create_or_update_client(client_data, username,db)
    
    def get_client_list(self, request_dto: ClientListRequestDTO, db: Session):
        return ClientRepository.get_client_list(request_dto, db)
    
    def get_all_clients(self, db: Session):
        return ClientRepository.get_all_clients(db)