from pydantic import BaseModel
from typing import Optional, List,Dict,Any,Literal,Union


class CustomFieldDTO(BaseModel):
    field_name: str
    data_type: Union[int,float,str]   # validate this as Literal["text", "number", "date"] if needed

class PortCreateUpdateDTO(BaseModel):
    port_id: Optional[int] = None
    name: Optional[str] = None
    country_id: Optional[int] = None
    status: Optional[str] = None
    vessel_fields: Optional[List[CustomFieldDTO]] = None

# like this Literal["text", "number", "date", "currency"] 

# class PortCreateUpdateDTO(BaseModel):
#     port_id: Optional[int] = None
#     name: Optional[str] = None
#     country_id: Optional[int] = None
#     status: Optional[str] = None
#     vessel_fields: Optional[Dict[str, Any]] = None


#     model_config = {
#         "from_attributes": True
#     }


class PortListRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None
    status: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "page": 1,
                "page_size": 10,
                "query": "Port of Singapore",
                "status": "Y"
            }
        }
