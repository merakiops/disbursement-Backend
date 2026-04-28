from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.services.txn_tariff_service import Txn_TariffService
from app.repo.tariff_repo import TariffRepo
from app.repo.tariff_service_repo import TariffServiceRepository
from app.repo.tariff_list_repo import TariffRepository
from app.dto.tariff_service_detail_dto import TariffServiceDetailDTO
from typing import List, Dict, Any

class TariffServiceImpl(Txn_TariffService):

    def get_tariff_service_details(self,db: Session) -> TariffServiceDetailDTO:
        return TariffRepository.get_tariff_service_details(db)
    
    def create_or_update_tariff_entry(self,service_name: str,payload: Dict[str, Any],username: str,db: Session) -> Dict:
        return TariffServiceRepository.create_or_update(service_name, payload, username, db)

    def get_all(self,service_name: str,db: Session) -> List[Dict]:
        return TariffServiceRepository.get_all(service_name,db)
