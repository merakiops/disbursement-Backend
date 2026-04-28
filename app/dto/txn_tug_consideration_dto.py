from pydantic import BaseModel
from typing import Optional,List

class TugConsiderationCreateUpdateDTO(BaseModel):
    seq : Optional[int] = None
    country: int
    port: Optional[int] = None
    min_range:int
    max_range:Optional[int] = None
    no_of_tugs:Optional[int] = None


class TugConsiderationResponseDTO(TugConsiderationCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str] = None
    message: Optional[str] = None

class TugConsiderationListResponseDTO(BaseModel):
    total_count: int
    data: List[TugConsiderationResponseDTO]