from pydantic import BaseModel
from typing import Optional,List

class LocalStateAgencyFeeCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port: Optional[int] = None
    bracket:str
    min_range:int
    max_range:Optional[int] = None
    rate:float

class LocalStateAgencyFeeResponseDTO(LocalStateAgencyFeeCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class LocalStateAgencyFeeListResponseDTO(BaseModel):
    total_count: int
    data: List[LocalStateAgencyFeeResponseDTO]

    model_config = {
        "from_attributes": True
    }