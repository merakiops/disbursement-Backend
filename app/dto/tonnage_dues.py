from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class TonnageDuesCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country:int
    port: Optional[int] = None
    min_range: Optional[int] = None
    max_range: Optional[int] = None
    tariff_type:str
    month: int
    rate:float
    remark: Optional[str] = None

class TonnageDuesResponseDTO(TonnageDuesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class TonnageDuesListResponseDTO(BaseModel):
    total_count: int
    data: List[TonnageDuesResponseDTO]

    model_config = {
        "from_attributes": True
    }