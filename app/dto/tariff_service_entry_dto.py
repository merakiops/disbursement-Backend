from pydantic import BaseModel
from typing import List, Dict, Any

# created the dto class for tariff insert request --- Lakshmi

class GenericTariffInsertRequest(BaseModel):
    data: List[Dict[str, Any]]
