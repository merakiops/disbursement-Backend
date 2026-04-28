from pydantic import BaseModel,Field
from typing import List, Optional
from datetime import datetime
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO
from enum import Enum


class AllowedFilterField(str, Enum):
    all = "all"
    status = "status"
    pic = "pic"
    client = "client"
    vessels = "vessels"
    port_agent = "port_agent"
    country = "country"
    port = "port"
    purpose = "purpose"
    cargo = "cargo"
    voyage="voyage"

class FilteredDisbursementDataRequestDTO(BaseModel):
    fields: Optional[List[AllowedFilterField]] = ["all"]


class StatusDTO(BaseModel):
    status: str

class PicDTO(BaseModel):
    user: str
    names :str

class ClientDTO(BaseModel):
    client_id: int
    name: str

class VesselDTO(BaseModel):
    company_id : int
    name: str

class PortAgentDTO(BaseModel):
    company_name: str 

class CountryDTO(BaseModel):
    country_id: int
    name: str

class PortDTO(BaseModel):
    name: Optional[str] = None
    country_id: Optional[int] = None

class PurposeDTO(BaseModel):
    name: Optional[str] = Field(
        default=None,
        min_length=1,
        max_length=100,
        pattern="^[A-Za-z ]+$",
        description="Alphabetic characters and spaces only"
    ) 

class CargoDTO(BaseModel):
     type: Optional[str] = Field(
        default=None,
        min_length=1,
        max_length=50,
        pattern="^[A-Za-z ]+$",
        description="Alphabetic characters and spaces only"
    )
     
class VoyageDTO(BaseModel):
     name: Optional[str]=None

class FilteredDisbursementResponseDTO(BaseModel):
    status : Optional[List[StatusDTO]] = None
    pic : Optional[List[PicDTO]] = None
    client : Optional[List[ClientDTO]] = None
    vessels : Optional[List[VesselDTO]] = None
    port_agent : Optional[List[PortAgentDTO]] = None
    country : Optional[List[CountryDTO]] = None
    port : Optional[List[PortDTO]] = None
    purpose : Optional[List[PurposeDTO]] = None
    cargo : Optional[List[CargoDTO]] = None
    voyage : Optional[List[VoyageDTO]] = None




