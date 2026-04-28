import re
from pydantic import BaseModel, field_validator
from typing import Optional, List
from app.dto.port_agent_create_or_update_dto import BankDetailsDTO

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

class PortAgentResponseDTO(BaseModel):
    company_id: Optional[int]
    company_name: Optional[str]
    app_owning_company_id: Optional[int]
    company_type_id: Optional[int]
    email: Optional[List[str]] 
    phone_number: Optional[str]
    address: Optional[str]
    status: Optional[str]
    bank_details: Optional[BankDetailsDTO] = None

    @field_validator("email", mode="before")
    @classmethod
    def split_and_validate_email_string(cls, v):
        if isinstance(v, str):
            emails = [e.strip(" {}") for e in v.split(";") if e.strip()]
            for email in emails:
                if not EMAIL_REGEX.match(email):
                    raise ValueError(f"Invalid email format: '{email}'")
            return emails
        return v

    model_config = {
        "from_attributes": True
    }

class PortAgentCreateUpdateResponseDTO(BaseModel):
    message: str
    data: PortAgentResponseDTO

    model_config = {
        "from_attributes": True
    }

class PortAgentListResponseDTO(BaseModel):
    total_count: int
    data: List[PortAgentResponseDTO]
