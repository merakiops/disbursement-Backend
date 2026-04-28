from pydantic import BaseModel
from typing import Optional,List

class OilFenceCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port:  Optional[int] = None
    min_range: int
    max_range: Optional[int] = None
    fee:float

class OilFenceResponseDTO(OilFenceCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class OilFenceListResponseDTO(BaseModel):
    total_count: int
    data: List[OilFenceResponseDTO]

    model_config = {
        "from_attributes": True
    }