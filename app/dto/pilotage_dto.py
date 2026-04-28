# app/dto/pilotage_dto.py

from pydantic import BaseModel
from typing import Optional,List

class PilotageCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port: Optional[int] = None
    min_range:Optional[int] = None
    max_range:Optional[int] = None
    pilotage_fee:Optional[str] = None
    tariff:Optional[float] = None
    min_fee:Optional[float] = None
    vessel_type:Optional[str] = None
    formula:Optional[str] = None

class PilotageResponseDTO(PilotageCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class PilotageListResponseDTO(BaseModel):
    total_count: int
    data: List[PilotageResponseDTO]

    model_config = {
        "from_attributes": True
    }