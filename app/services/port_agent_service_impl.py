from sqlalchemy.orm import Session
from app.services.port_agent_service import PortAgentService
from app.repo.port_agent_repo import PortAgentRepository
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO, PortAgentListRequestDTO
from app.models.company import MaCompany

class PortAgentServiceImpl(PortAgentService):

    def create_or_update_port_agent(self, port_data: PortAgentCreateUpdateDTO, username: str, db: Session) -> MaCompany:
        return PortAgentRepository.create_or_update_port_agent(port_data, username, db)

    def get_port_agent_list(self, request_dto: PortAgentListRequestDTO, db: Session):
        return PortAgentRepository.get_port_agent_list(request_dto, db)
    
    def get_all_port_agents(self, db: Session):
        return PortAgentRepository.get_all_port_agents(db)