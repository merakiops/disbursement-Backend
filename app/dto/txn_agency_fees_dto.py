from pydantic import BaseModel
from typing import Optional,List

class AgencyFeesCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port:  Optional[int] = None
    min_gross_tonnage: int
    max_gross_tonnage: Optional[int] = None
    without_cargo_operation: float
    with_cargo_operation: float
    supervision_fee_per_day: float
    

class AgencyFeesResponseDTO(AgencyFeesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class AgencyFeesListResponseDTO(BaseModel):
    total_count: int
    data: List[AgencyFeesResponseDTO]

    model_config = {
        "from_attributes": True
    }