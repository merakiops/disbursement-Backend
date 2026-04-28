"""
Author: Punith
Module: Client Response DTO
Description: DTOs for returning client (company) data in API responses.
"""

import re
from pydantic import BaseModel, field_validator
from typing import Optional,List

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

class ClientResponseDTO(BaseModel):
    company_id: Optional[int]
    company_name: Optional[str]
    app_owning_company_id: Optional[int]
    company_type_id: Optional[int]
    email: Optional[List[str]]
    phone_number: Optional[str]
    address: Optional[str]
    status: Optional[str]
    vsl_ids: Optional[List[int]]=[]

    @field_validator("email", mode="before")
    @classmethod
    def split_and_validate_email_string(cls, v):
        if v is None or v == "" or v == "{}":
            return None

        if isinstance(v, str):
            emails = [e.strip(" {}") for e in v.split(";") if e.strip()]
            if not emails:  # If no valid emails after processing
                return None
            for email in emails:
                if not EMAIL_REGEX.match(email):
                    raise ValueError(f"Invalid email format: '{email}'")
            return emails

        if isinstance(v, list):
            for email in v:
                if not isinstance(email, str) or not EMAIL_REGEX.match(email):
                    raise ValueError(f"Invalid email format: '{email}'")
            return v

        raise ValueError("Invalid type for email field")

    model_config = {
        "from_attributes": True
    }

    model_config = {
        "from_attributes": True
    }

class ClientCreateUpdateResponseDTO(BaseModel):
    message: str
    data: ClientResponseDTO


    model_config = {
        "from_attributes": True
    }


class ClientListResponseDTO(BaseModel):
    total_count: int
    data: List[ClientResponseDTO]