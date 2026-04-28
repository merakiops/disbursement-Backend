# app/dto/vessel_response_dto.py

from pydantic import BaseModel, EmailStr
from typing import Optional,List
from datetime import datetime
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO

class VesselResponseDTO(BaseModel):
    vessel_id: int
    name: str
    imo_number: Optional[str] = None
    grt: float
    rgrt: Optional[float]=None
    nrt: float
    loa: float
    beam: float
    depth: float
    dwt: float
    type: str
    email: Optional[str] = None
    status: Optional[str] = None
    display_flag: Optional[str] = None
    is_manual: Optional[str] = None
    created_by: Optional[str] = None
    updated_by: Optional[str] = None

    model_config = {
        "from_attributes": True  
    }

class GetVesselByImoNumberRequestDTO(BaseModel):
    imo_number : Optional[str]
    client_id: Optional[int]



class VesselCreateUpadteResponseDTO(BaseModel):
    message : str
    data: VesselResponseDTO


class VesselListResponseDTO(BaseModel):
    total_count: int
    data: List[VesselCreateUpdateDTO]

class GetVesselByImoNumberResponseDTO(BaseModel):
    message : str
    data: VesselResponseDTO