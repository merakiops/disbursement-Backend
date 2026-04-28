from pydantic import BaseModel
from typing import Optional, List

class CargoResponseDTO(BaseModel):
    cargo_id: int
    type: str
    status: Optional[str] = None

    model_config = {
        "from_attributes": True
    }


class CargoCreateUpdateResponseDTO(BaseModel):
    message: str
    data: CargoResponseDTO

    model_config = {
        "from_attributes": True
    }


class CargoListResponseDTO(BaseModel):
    total_count: int
    data: List[CargoResponseDTO]
