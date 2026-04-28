from pydantic import BaseModel
from typing import Optional,List

class CountryCurrencyResponseDTO(BaseModel):
     currency:List[str] 
