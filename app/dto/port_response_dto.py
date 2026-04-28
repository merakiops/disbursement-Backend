from pydantic import BaseModel,field_validator
from typing import Optional,Dict,List,Any,Union


# class PortResponseDTO(BaseModel):
#     port_id: int
#     country_id: int
#     name:Optional[str] = None
#     status: Optional[str] = None
#     vessel_fields: Optional[Dict[str, Any]] = None


#     model_config = {
#         "from_attributes": True
#     }
class CustomFieldDTO(BaseModel):
    field_name: str
    data_type: Union[int,float,str]
    is_mandatory: Optional[str] = None

    @field_validator('is_mandatory', mode='before')
    @classmethod
    def normalize_is_mandatory(cls, v):
        if isinstance(v, str):
            v = v.strip().upper()
            if v == 'Y':
                return 'Y'
            elif v == 'N':
                return 'N'
        return None

class PortResponseDTO(BaseModel):
    port_id: int
    country_id: int
    name:Optional[str] = None
    status: Optional[str] = None
    country_name:Optional[str]=None
    vessel_fields: Optional[List[CustomFieldDTO]] = None  

    model_config = {
        "from_attributes": True
    }


class PortCreateUpdateResponseDTO(BaseModel):
    message: str
    data: PortResponseDTO

    model_config = {
        "from_attributes": True
    }


class PortListResponseDTO(BaseModel):
    total_count: int
    data: List[PortResponseDTO]
