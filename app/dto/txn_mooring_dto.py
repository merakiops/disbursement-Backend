from pydantic import BaseModel
from typing import Optional,List

class MooringCreateUpdateDTO(BaseModel):
    seq : Optional[int] = None
    country: int
    port: Optional[int] = None
    min_range:int
    max_range:Optional[float] = None
    basic_fee: float
    formula: Optional[str] = None
    tariff: Optional[float] = None

class MooringResponseDTO(MooringCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class MooringListResponseDTO(BaseModel):
    total_count: int
    data: List[MooringResponseDTO]