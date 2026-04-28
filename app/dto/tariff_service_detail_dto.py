from pydantic import BaseModel
from typing import List, Optional

class TariffFieldDTO(BaseModel):
    field_name: str
    data_type: str
    is_mandatory: Optional[str]

class TariffServiceDetailDTO(BaseModel):
    service_id: int
    service_name: str
    fields: List[TariffFieldDTO]
