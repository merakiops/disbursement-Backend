from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO

class CountryResponseDTO(BaseModel):
    country_id: int
    name: str
    currency: str 
    status: Optional[str] = None 

    model_config = {
        "from_attributes": True
    }

class CountryCreateUpdateResponseDTO(BaseModel):
    message: str
    data: CountryResponseDTO

    model_config = {
        "from_attributes": True
    }



class CountryListResponseDTO(BaseModel):
    total_count: int
    data: List[CountryResponseDTO]