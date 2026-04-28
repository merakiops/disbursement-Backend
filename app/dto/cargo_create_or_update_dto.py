from pydantic import BaseModel, Field
from typing import Optional

class CargoCreateUpdateDTO(BaseModel):
    cargo_id: Optional[int] = None
    type: Optional[str] = Field(
        default=None,
        min_length=1,
        max_length=50,
        pattern="^[A-Za-z ]+$",
        description="Alphabetic characters and spaces only"
    )
    status: Optional[str] = None

    model_config = {
        "from_attributes": True
    }


class CargoListRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None
    status: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "page": 1,
                "page_size": 10,
                "query": "name of cargos",
                "status": "Y"
            }
        }
