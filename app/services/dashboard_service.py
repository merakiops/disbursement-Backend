from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.dashboard_dto import DashboardRequestDTO
from app.dto.dasboard_response_dto import DashboardResponseDTO, FdaProcessingDetailsResponseDTO, FilterDataDTO


class DashboardService(ABC):
    
    @abstractmethod
    def get_dashboard_summary(self, payload: DashboardRequestDTO, db: Session) -> DashboardResponseDTO:
        pass
    
    @abstractmethod
    def get_fda_processing_details(self, page: int, page_size: int, db: Session) -> FdaProcessingDetailsResponseDTO:
        pass
    
    @abstractmethod
    def get_dashboard_filter_data(self, db: Session) -> FilterDataDTO:
        pass
