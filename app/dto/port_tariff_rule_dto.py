from pydantic import BaseModel, field_validator
from typing import Optional, List, Dict,Any
from datetime import datetime
from app.models.port_tariff_rule import MaPortTariffRule

class SubService(BaseModel):
    name: Optional[str] = None
    unique_key: Optional[str] = None
    # purpose: str
    basic_value: str
    calculated_basic_value: Optional[float] = None
    movement: str
    tariff_percent: str
    formula_result: str
    optional: str
    operational_flag: str
    sub_total: float
    hide:Optional[str]=None
    formula_inputs: Optional[str] = None
    # reference: str
    @field_validator("movement", mode="before")
    @classmethod
    def movement_to_str(cls, v):
        if v is None or (isinstance(v, str) and v.strip() == ""):
            return "1"
        return str(v)

    @field_validator("tariff_percent", mode="before")
    @classmethod
    def tariff_percent_to_str(cls, v):
        if v is None or (isinstance(v, str) and v.strip() == ""):
            return "1.00"
        if isinstance(v, (int, float)):
            return f"{v:.2f}"
        return v


class AdditionalCharge(BaseModel):
    name: str
    basic_value: str
    rate: float
    formula_result: str
    total: float

class Service(BaseModel):
    SNO: int
    code: str
    service: str
    # feedback: Optional[str] = None
    pa_remark: Optional[str] = None
    negotiate: str
    agreed: str
    # is_auto_calculate: str
    subService: List[SubService]
    
    purpose: Optional[str] = None
    meraki_feedback: Optional[str] = None
    meraki_remark_client: Optional[str] = None
    client_comment: Optional[str] = None
    display_to_client: Optional[str] = None
    client_option: Optional[str] = None
    info_msg: Optional[str] = None

    total: Optional[str] = None

class Rules(BaseModel):
    items: List[Service]
    additional_charges: Optional[List[AdditionalCharge]] = None
    # service_total: float
    grand_total: float


class PortTariffRuleDTO(BaseModel):
    port_tariff_rule_id: Optional[int] = None
    port_id: int
    name:Optional[str]=None
    country_id: int
    rules: Rules
    status: Optional[str] = "Y"
    vessel_fields: Optional[List[Dict]] = None 
    class Config:
        from_attributes = True 

class CountryDTO(BaseModel):
    country_name: str

class PortDTO(BaseModel):
    portname: str

class PortTariffRulesDTO(BaseModel):
    port_id: int
    port_name: str
    country_id: int
    country_name: str
    rules: Rules
    created_on: datetime
    created_by: str
    updated_on: Optional[datetime] = None
    updated_by: Optional[str] = None
    status: Optional[str] = "Y"
    port_tariff_rule_id: Optional[int] = None
    vessel_fields: Optional[List[Dict[str, Any]]] = None

class PortTariffRulesFinalDTO(BaseModel):
     status: str
     total: int
     page: int
     page_size: int
     data: List[PortTariffRulesDTO]

def convert_to_dto(input_data: List[MaPortTariffRule]) -> List[PortTariffRulesDTO]:
    dtos = []
    for item in input_data:
        dto = PortTariffRulesDTO(
            port_tariff_rule_id=item.port_tariff_rule_id,
            port_name=item.port.name if item.port else None,
            country_name=item.country.name if item.country else None,
            rules=item.rules,
            created_on=item.created_on,
            created_by=item.created_by,
            updated_on=item.updated_on,
            updated_by=item.updated_by,
            status=item.status
        )
        dtos.append(dto)
    return dtos

class PortTariffRulesRequestDTO(BaseModel):
     page: int
     page_size: int
     query_name: Optional[str] = None
     port_id: Optional[int]=None