from pydantic import BaseModel, Field
from typing import Optional, List

class MissingVesselDTO(BaseModel):
    name: Optional[str] = None
    imo_number: Optional[str] = None

class MissingPortDTO(BaseModel):
    name: Optional[str] = None
    country: Optional[str] = None

class MissingPortAgentDTO(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None

class MissingCargoDTO(BaseModel):
    name: Optional[str] = None

class MissingPurposeDTO(BaseModel):
    name: Optional[str] = None

class NotifyMissingEntitiesRequestDTO(BaseModel):
    client_id: Optional[int] = None
    client_name: Optional[str] = None
    user_email: Optional[str] = None
    vessel: Optional[MissingVesselDTO] = None
    port: Optional[MissingPortDTO] = None
    port_agent: Optional[MissingPortAgentDTO] = None
    cargo: Optional[MissingCargoDTO] = None
    purpose: Optional[MissingPurposeDTO] = None
    notes: Optional[str] = None
