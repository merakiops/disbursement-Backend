from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO
from enum import Enum


class OwningCompanyDTO(BaseModel):
    id: int
    name: str
    model_config = {
        "from_attributes": True
    }

class CompanyTypeDTO(BaseModel):
    id: int
    name: str
    model_config = {
        "from_attributes": True
    }



class CompanyDTO(BaseModel):
    company_id: int
    company_name: str
    status: str
    created_by: str
    owning_company: OwningCompanyDTO
    company_type: CompanyTypeDTO
    model_config = {
        "from_attributes": True
    }

class RoleDTO(BaseModel):
    role_id: int
    created_on: datetime
    role_name: Optional[str] = None
    status: str
    created_by: str
    model_config = {
        "from_attributes": True
    }

class CompanyType(BaseModel):
    company_type_id :Optional[int] = None
    company_type_name:Optional[str] = None
    status:Optional[str] = None
    model_config = {
        "from_attributes": True
    }
class VesselPropDTO(BaseModel):
    vsl_field_id: int
    name: Optional[str] = None
    status: Optional[str] = None   
    model_config = {
        "from_attributes": True
    }
# Column DTO
class TxnTariffServiceColumnDTO(BaseModel):
    column_id: int
    tariff_service_id: int
    name: str
    data_type: str
    is_mandatory: Optional[str] = None

    model_config = {
        "from_attributes": True,
        "coerce_numbers_to_str": True
    }
# TariffService DTO
class MaTariffServiceDTO(BaseModel):
    tariff_service_id: int
    service_id: Optional[str] = None
    name: str
    status: Optional[str] = None
    columns: List[TxnTariffServiceColumnDTO] = []

    model_config = {
        "from_attributes": True,
        "coerce_numbers_to_str": True
    }

class MaPortSubServiceDTO(BaseModel):
    sub_service_id: int
    service_id: int
    name: str
    status: str | None = None    

    model_config = {
        "from_attributes": True,
        "coerce_numbers_to_str": True
    }

class MaPortServiceDTO(BaseModel):
    service_id: int
    code: Optional[str] = None
    name: str
    status: str
    sub_services: List[MaPortSubServiceDTO] = []
    tariff_services: List[MaTariffServiceDTO] = []

    model_config = {
        "from_attributes": True,
        "coerce_numbers_to_str": True
    }

# Fix the forward references
MaPortSubServiceDTO.model_rebuild()

class CompanyRoleResponseDTO(BaseModel):
    companies: List[CompanyDTO]
    roles: List[RoleDTO]
    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "companies": [
                    {
                        "company_id": 1,
                        "company_name": "TechCorp",
                        "status": "Active",
                        "created_by": "admin",
                        "owning_company": {"id": 10, "name": "Global Holdings"},
                        "company_type": {"id": 2, "name": "Private"}
                    }
                ],
                "roles": [
                    {
                        "role_id": 101,
                        "created_on": "2024-05-01T12:00:00",
                        "role_desc": "Administrator",
                        "status": "Active",
                        "created_by": "admin"
                    }
                ]
            }
        }

class MasterDataResponseDTO(BaseModel):
    active_vessels: Optional[List[VesselCreateUpdateDTO]] = None
    inactive_vessels: Optional[List[VesselCreateUpdateDTO]] = None
    country: Optional[List[CountryCreateUpdateDTO]] = None
    cargo:Optional[List[CargoCreateUpdateDTO]]=None
    purpose:Optional[List[PurposeCreateUpdateDTO]]=None
    client:Optional[List[ClientCreateUpdateDTO]]=None
    port_agent:Optional[List[PortAgentCreateUpdateDTO]]=None
    roles: Optional[List[RoleDTO]] = None
    companies: Optional[List[CompanyDTO]] = None
    company_types : Optional[List[CompanyType]] = None
    vessel_properties: Optional[List[VesselPropDTO]] = None
    port_services : Optional[List[MaPortServiceDTO]] = None
    tariff_services: Optional[List[MaTariffServiceDTO]] = None
    currency:Optional[List[str]] = None


class AllowedField(str, Enum):
    all = "all"
    country = "country"
    active_vessels = "active_vessels"
    inactive_vessels = "inactive_vessels"
    roles = "roles"
    cargo="cargo"
    purpose="purpose"
    client="client"
    port_agent="port_agent"
    companies = "companies"
    company_types = "company_types"
    vessel_properties = "vessel_properties"
    port_services = "port_services"
    tariff_services = "tariff_services"
    currency = "currency"

class MasterDataRequestDTO(BaseModel):
    fields: Optional[List[AllowedField]] = ["all"]