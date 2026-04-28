from pydantic import BaseModel, Field,validator
from typing import Optional,List
from enum import  Enum


class VesselCreateUpdateDTO(BaseModel):
    vessel_id: Optional[int] = None
    name:Optional[str] = None
    imo_number: Optional[str] = None
    grt:  Optional[float]=None
    rgrt:Optional[float]=None
    nrt: Optional[float]=None
    loa: Optional[float]=None
    beam: Optional[float]=None
    depth: Optional[float]=None
    dwt: Optional[float]=None
    type: Optional[str]=None
    email: Optional[str]=None
    status: Optional[str]=None
    display_flag: Optional[str]=None
    is_manual: Optional[str]=None

    model_config = {
        "from_attributes": True
    }

    @validator("rgrt", pre=True)
    def empty_str_to_none(cls, v):
        if v == "":
            return None
        return v
    
class VesselsByAssignmentResponse(BaseModel):
    active_vessels_list: Optional[List[VesselCreateUpdateDTO]] = None
    assigned_vessels: Optional[List[VesselCreateUpdateDTO]] = []
    unassigned_vessels: Optional[List[VesselCreateUpdateDTO]] = []

    model_config = {
        "from_attributes": True
    }


class VesselListRequestDTO(BaseModel):
        """
        DTO for Retrival of Document Review summary.
        """
        page:int
        page_size:int
        query: Optional[str] = None
        status: Optional[str] = None

        class Config:
            schema_extra = {
                "example": {
                    "company_id":1,
                    "page": 1,
                    "page_size": 10,
                    "query": "sample query",
                    "status":["Y"]
                }
            }

class VesselListAllowedField(str, Enum):
    active_vessels_list = "active_vessels_list"
    assigned_unassigned = "assigned_unassigned"

 
class VesselListAssignedRequestDTO(BaseModel):
    company_id:Optional[int] =None
    fields: Optional[List[VesselListAllowedField]] = ["active_vessels_list"]
 






# from pydantic import BaseModel, Field, validator
# from typing import Optional
# import re


# class VesselCreateDTO(BaseModel):
#     name: str = Field(..., min_length=1, max_length=50, description="This field cannot be empty. Please enter a value.")
#     imo_number: str = Field(..., description="This field cannot be empty. Please enter a value.")
#     grt: 
#     rgrt: 
#     nrt: 
#     loa: 
#     beam: 
#     depth: 
#     dwt: 
#     type: str = Field(..., min_length=1, max_length=50)
#     email: Optional[str]
#     created_by: Optional[str]
#     updated_by: Optional[str]
#     status: Optional[str] = "ACTIVE"
#     display_flag: Optional[str]
#     is_manual: Optional[str]

#     @validator("name")
#     def validate_name(cls, value):
#         if not re.fullmatch(r"[A-Za-z ]{1,50}", value):
#             raise ValueError("Vessel name must contain only alphabetic characters and spaces (1–50 chars).")
#         return value.strip()

#     @validator("imo_number")
#     def validate_imo(cls, value):
#         if not value.isdigit() or len(value) != 7:
#             raise ValueError("IMO number must be exactly 7 digits.")
#         return value

#     @validator("grt", "rgrt", "nrt")
#     def validate_positive_number(cls, value, field):
#         if value <= 0:
#             raise ValueError(f"{field.name.upper()} must be a positive number.")
#         return value

#     @validator("loa", "beam", "depth", "dwt")
#     def validate_positive_decimal(cls, value, field):
#         if value <= 0:
#             raise ValueError(f"{field.name.upper()} must be a positive decimal number.")
#         return value

#     @validator("type")
#     def validate_type(cls, value):
#         if not re.fullmatch(r"[A-Za-z ]{1,50}", value):
#             raise ValueError("Type must contain only alphabetic characters and spaces (1–50 chars).")
#         return value.strip()

#     @validator("status")
#     def validate_status(cls, value):
#         if value and value.upper() not in ("ACTIVE", "INACTIVE"):
#             raise ValueError("Status must be either 'ACTIVE' or 'INACTIVE'.")
#         return value.upper() if value else "ACTIVE"


