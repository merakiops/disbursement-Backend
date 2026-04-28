from pydantic import BaseModel
from typing import Optional,List

class BerthDuesCreateUpdateDTO(BaseModel):
    seq : Optional[int] = None
    country: int
    port: Optional[int] = None
    min_range:int
    max_range:Optional[int] = None
    basic_fee: float
    formula: Optional[str] = None
    tariff: Optional[float] = None

class BerthDuesResponseDTO(BerthDuesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class BerthDuesListResponseDTO(BaseModel):
    total_count: int
    data: List[BerthDuesResponseDTO]