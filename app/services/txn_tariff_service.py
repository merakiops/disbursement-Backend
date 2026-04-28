from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.tariff_service_detail_dto import TariffServiceDetailDTO
from typing import Dict,Any,List
# from app.dto.base_dto import BaseListRequestDTO


class Txn_TariffService(ABC):

    @abstractmethod
    def get_tariff_service_details(self, db: Session) -> TariffServiceDetailDTO:
        pass

    @abstractmethod
    def create_or_update_tariff_entry(self, service_name: str, payload: Dict[str, Any], username: str, db: Session) -> Dict:
        pass
    @abstractmethod
    def get_all(self, service_name: str, db: Session) -> List[Dict]:
        pass

