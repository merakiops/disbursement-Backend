from pydantic import BaseModel
from typing import Optional,List

class AnchorageDuesCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port: Optional[int] = None
    bracket:str
    min_range:int
    max_range:Optional[int] = None
    rate:float

class AnchorageDuesResponseDTO(AnchorageDuesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class AnchorageDuesListResponseDTO(BaseModel):
    total_count: int
    data: List[AnchorageDuesResponseDTO]

    model_config = {
        "from_attributes": True
    }
