from pydantic import BaseModel, field_validator
import re
from typing import Optional, List

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

class BankDetailsDTO(BaseModel):
    bank_details_id: Optional[int]
    country_name: Optional[str]
    beneficiary_acc_holder_name: Optional[str]
    bank_name: Optional[str]
    correspondent_account_number: Optional[str]
    current_account_number: Optional[str]
    ifsc_code: Optional[str]
    bik_code: Optional[str]
    swift_code: Optional[str]
    currency: Optional[str]
    inn_code: Optional[str]
    bic_code: Optional[str]
    iban_number: Optional[str]
    branch_address: Optional[str]

    model_config = {"from_attributes": True}

class PortAgentCreateUpdateDTO(BaseModel):
    company_id: Optional[int] = None
    app_owning_company_id: Optional[int] = None
    company_type_id: Optional[int] = None
    company_name: str 
    phone_number: Optional[str] = None
    email: List[str]  
    address: Optional[str] = None
    status: Optional[str] = None
    bank_details: Optional[BankDetailsDTO] = None

    @field_validator("email", mode="before")
    @classmethod
    def validate_and_split_emails(cls, v):
        if isinstance(v, str):
            emails = [e.strip(" {}") for e in v.split("; ") if e.strip()]
        elif isinstance(v, list):
            emails = v
        else:
            return v

        for email in emails:
            if not EMAIL_REGEX.fullmatch(email):
                raise ValueError(f"Invalid email format: '{email}'")
        return emails

    model_config = {"from_attributes": True}


class PortAgentListRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None
    status:Optional[str]=None  # needed for filtering

    model_config = {
        "from_attributes": True
    }