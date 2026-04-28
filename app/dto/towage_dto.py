from pydantic import BaseModel
from typing import Optional,List

class TowageCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port:  Optional[int] = None
    min_range: Optional[int] = None
    max_range: Optional[float] = None
    towage_fee:float
    holiday_fee: Optional[float] = None
    formula:Optional[str] = None
    tariff:Optional[float] = None

class TowageResponseDTO(TowageCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class TowageListResponseDTO(BaseModel):
    total_count: int
    data: List[TowageResponseDTO]

    model_config = {
        "from_attributes": True
    }