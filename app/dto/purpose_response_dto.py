from pydantic import BaseModel
from typing import Optional,List

class PurposeResponseDTO(BaseModel):
    purpose_id: int
    name: str
    status: Optional[str] = None

    model_config = {
        "from_attributes": True
    }


class PurposeCreateUpdateResponseDTO(BaseModel):
    message: str
    data: PurposeResponseDTO

    model_config = {
        "from_attributes": True
    }


class PurposeListResponseDTO(BaseModel):
    total_count: int
    data: List[PurposeResponseDTO]
