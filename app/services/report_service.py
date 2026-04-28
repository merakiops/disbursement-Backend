from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.vw_report_dto import PdaReportRequestDTO


class PdaReportService(ABC):
    @abstractmethod
    def get_rep_deatils_by_id(self, dto:PdaReportRequestDTO ,db: Session):
        pass
    
    @abstractmethod
    def chunk_service_items(self, report_dict: dict) -> dict:
        pass