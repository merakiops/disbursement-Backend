from pydantic import BaseModel
from typing import Optional,List

class AdministrativeDuesCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port:  Optional[int] = None
    min_range: Optional[int] = None
    max_range: Optional[int] = None
    vessel_type:Optional[str] = None
    basin_tariff:Optional[float] = None
    port_access_tariff:Optional[float] = None
    quay_tariff:Optional[float] = None
    

class AdministrativeDuesResponseDTO(AdministrativeDuesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class AdministrativeDuesListResponseDTO(BaseModel):
    total_count: int
    data: List[AdministrativeDuesResponseDTO]

    model_config = {
        "from_attributes": True
    }