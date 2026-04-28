from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional,List


class ClientCreateUpdateDTO(BaseModel):
    company_id: Optional[int] = None
    app_owning_company_id: Optional[int] = None
    company_type_id: Optional[int] = None
    company_name: Optional[str] = None
    phone_number: Optional[str] = None
    email: Optional[List[str]] = None
    address: Optional[str] = None
    status: Optional[str] = None
    vsl_ids: Optional[List[int]]=None

    @field_validator('email', mode='before')
    @classmethod
    def convert_empty_email_to_none(cls, v):
        return None if not v or v == [] else v

    model_config = {
        "from_attributes": True
    }


class ClientListRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None

    model_config = {
        "from_attributes": True
    }