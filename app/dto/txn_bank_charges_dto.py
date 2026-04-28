from pydantic import BaseModel
from typing import Optional,List

class BankChargesCreateUpdateDTO(BaseModel):
    seq: Optional[int] = None
    country: int
    port:  Optional[int] = None
    min_gross_tonnage: int
    max_gross_tonnage: Optional[int] = None
    rate: float
    
    

class BankChargesResponseDTO(BankChargesCreateUpdateDTO):
    tariff_service_id: Optional[int] = None
    tariff_service_name: Optional[str] = None
    country_name: str
    port_name: Optional[str]
    message: Optional[str] = None

class BankChargesListResponseDTO(BaseModel):
    total_count: int
    data: List[BankChargesResponseDTO]

    model_config = {
        "from_attributes": True
    }