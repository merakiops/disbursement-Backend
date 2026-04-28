from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO,PortAgentListRequestDTO
from app.models.company import MaCompany

class PortAgentService(ABC):

    @abstractmethod
    def create_or_update_port_agent(self, port_data: PortAgentCreateUpdateDTO, username: str, db: Session) -> MaCompany:
        pass

    @abstractmethod
    def get_port_agent_list(self, request_dto: PortAgentListRequestDTO, db: Session):
        pass
    @abstractmethod
    def get_all_port_agents(self,db: Session):
        pass