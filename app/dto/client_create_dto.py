

from pydantic import BaseModel, Field, field_validator
from typing import List
import re

class ClientCreateDTO(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=50)
    vessel_ids: List[int]  #  dropdown 

    @field_validator('client_name')
    def validate_client_name(cls, v):
        v = v.strip()
        if not v:
            raise ValueError("This field cannot be empty. Please enter a value.")
        if not re.match(r"^[A-Za-z ]+$", v):
            raise ValueError("Client name must contain only alphabetic characters and spaces.")
        if any(char.isdigit() for char in v):
            raise ValueError("Client name cannot contain numbers.")
        return v
