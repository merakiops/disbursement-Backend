from pydantic import BaseModel, Field
from typing import Optional, Any,List,Dict, Union
from datetime import datetime
from uuid import UUID
from app.dto.vw_vessel_details_comparision_dto import VesselDetailsComparisonDto
from app.dto.communication_history_dto import CommunicationHistoryDto

# ---------- PDA DTO ----------
class PDADto(BaseModel):
    pda_eta: Optional[datetime] = None
    pda_etd: Optional[datetime] = None
    pda_vessel_stay:Optional[int] = None
    portagent_pda_amount: Optional[float] = None
    meraki_pda_amount: Optional[float] = None
    advance_percentage: Optional[float] = None
    pda_remittance: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    pda_vessel_details: Optional[VesselDetailsComparisonDto] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_pda_data: Optional[Dict[str, Any]] = None
    is_manual_entry: Optional[str] = None
    pda_processing_date: Optional[datetime] = None
    pda_received_ops_agent: Optional[str] = None
    pda_remark: Optional[str] = None
    status: Optional[int] = None
    status_name:Optional[str]= None
    email_to: Optional[str] = None
    email_cc: Optional[str] = None
    pda_id: Optional[int] = None
    pda_roe: Optional[float] = None
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    disbursement_seq: Optional[int] = None
    is_re_request: Optional[str] = None
    created_on: Optional[datetime] = None
    updated_on: Optional[datetime] = None
    created_by: Optional[str] = None
    updated_by: Optional[str] = None
    invoice_ref_no: Optional[str] = None
    converted_curr_from : Optional[str]=None
    converted_curr_to: Optional[str]=None
    conversion_pda_rate: Optional[float]=None
    pmt_curr_from: Optional[str]=None
    pmt_curr_to: Optional[str]=None
    state: Optional[str] = None


    model_config = {
        "from_attributes": True
    }

# ---------- FDA DTO ----------
class FDADto(BaseModel):
    # Empty in sample, but keeping placeholder
    portagent_fda_amount: Optional[float] = None
    meraki_pda_amount: Optional[float] = None
    credit_note: Optional[float] = None
    fda_amount: Optional[float] = None
    balance_due: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    fda_currency_from:Optional[str] = None
    fda_currency_to:Optional[str] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_fda_data: Optional[Dict[str, Any]] = None
    fda_processing_date: Optional[datetime] = None
    fda_received_ops_agent: Optional[str] = None
    status: Optional[int] = None
    status_name: Optional[str] = None
    fda_vessel_details: Optional[VesselDetailsComparisonDto] = None
    fda_eta: Optional[datetime] = None
    fda_etd: Optional[datetime] = None
    fda_receive_date: Optional[datetime] = None
    fda_remark: Optional[str] = None
    fda_custom_calculation: Optional[str] = None
    fda_roe: Optional[float] = None
    fda_vessel_stay: Optional[int] = None
    invoice_ref_no: Optional[str] = None
    fda_id: Optional[int] = None
    converted_curr_from : Optional[str]=None
    converted_curr_to: Optional[str]=None
    conversion_fda_rate: Optional[float]=None
    pmt_curr_from: Optional[str]=None
    pmt_curr_to: Optional[str]=None
    state: Optional[str] = None


    model_config = {
        "from_attributes": True
    }

class PDAVslDtlsDto(BaseModel):
    vsl_id: Optional[int] = None
    imo_number: Optional[str] = None
    name: Optional[str] = None
    grt: Optional[float] = None
    rgrt: Optional[float] = None
    nrt: Optional[float] = None
    loa: Optional[float] = None
    beam: Optional[float] = None
    depth: Optional[float] = None
    dwt: Optional[float]=None
    type: Optional[str]=None

    class Config:
        from_attributes = True

class PdaVesselDetailsDto(BaseModel):
    vsl_dtls: Optional[PDAVslDtlsDto]
    fda_vsl_dtls: Optional[PDAVslDtlsDto]=None

    class Config:
        from_attributes = True

# ---------- TxnDisbursement DTO ----------
class PortTariffRuleDTO(BaseModel):
    items: List[Dict[str, Any]] = []

class TxnDisbursementDto(BaseModel):
    pda_vsl_id: Optional[int] = None
    status: Optional[int] = None
    status_name : Optional[str] = None
    roe_loss: Optional[float] = None
    loss_prevention_pda: Optional[float] = None
    voyage: Optional[str] = None
    final_amount: Optional[float] = None
    port_tariff_rule: Optional[PortTariffRuleDTO] = None
    loss_prevention_fda: Optional[float] = None
    createdon: Optional[datetime] = None
    disbursement_seq: Optional[int] = None
    port_id: Optional[int] = None
    ops_pic: Optional[str] = None
    sm_estimated_amount: Optional[float] = None
    total_loss_prevented: Optional[float] = None
    disbursement_id: Optional[str] = None
    purpose_id: Optional[int] = None
    agency_nomination_date: Optional[datetime] = None
    sm_detailed_entry: Optional[str] = None
    loss_prevented_reason: Optional[str] = None
    updatedon: Optional[datetime] = None
    comp_id: Optional[int] = None
    cargo_id: Optional[int] = None
    invoice_number: Optional[str] = None
    remarks: Optional[str] = None
    created_by: Optional[str] = None
    client_id: Optional[int] = None
    eta: Optional[datetime] = None
    roe_agent: Optional[float] = None
    sm_ws_chart_ac: Optional[str] = None
    updated_by: Optional[str] = None
    portagent_id: Optional[int] = None
    etd: Optional[datetime] = None
    roe_actual_oanda: Optional[float] = None
    towage_agency_agrement: Optional[str] = None
    country_id: Optional[int] = None
    vessel_stay: Optional[int] = None
    owners_item_rejected: Optional[str] = None
    vsl_id :Optional[int] = None
    return_status:Optional[str] = None
    return_message:Optional[str] = None

    # Nested DTOs
    pda: Optional[PDADto] = None
    fda: Optional[FDADto] = None
    pda_vessel_details : Optional[PdaVesselDetailsDto] = None
    # This is coloum that is showed in the response for disbusement details api
    communication_histories : Optional[List[CommunicationHistoryDto]] = None

    model_config = {
        "from_attributes": True
    }



class ValidatePdaLink(BaseModel):
    pda_token:str
    email :str

class linkValidationResponseDTO(BaseModel):
    status: str
    message: str
    user_uuid: UUID


class BankDetailsResponseDTO(BaseModel):
    bank_details_id: Optional[int] = None
    country_name: Optional[str] = None
    beneficiary_acc_holder_name: Optional[str] = None
    bank_name: Optional[str] = None
    correspondent_account_number: Optional[str] = None
    current_account_number: Optional[str] = None
    ifsc_code: Optional[str] = None
    bik_code: Optional[str] = None
    swift_code: Optional[str] = None
    currency: Optional[str] = None
    inn_code: Optional[str]  = None
    bic_code: Optional[str]  = None
    iban_number: Optional[str] = None
    branch_address: Optional[str] = None
   

    class Config:
        from_attributes = True  # allows ORM to DTO conversion using `.from_orm()`

class OTPValidationResponseDTO(BaseModel):
    disbursement_seq:int
    disbursement_id:str
    client_id:int
    client_name:str
    port_agent_name:str
    status: str  
    status_code: int  
    uuid: str
    expires: str
    name: str
    username: str
    role_id: str
    role_name: str
    detail: str
    billing_address:str
    json_template:Optional[Any] = None
    bank_details:Optional[BankDetailsResponseDTO]=None
    pda: Optional[PDADto] = None
    voyage:Optional[str]=None
    vessel_dtls:Optional[PdaVesselDetailsDto]
    model_config = {
        "from_attributes": True
    }





class BankDetailsDTO(BaseModel):
    country_name: Optional[str] = ""
    beneficiary_acc_holder_name: Optional[str] = ""
    bank_name: Optional[str] = ""
    correspondent_account_number: Optional[str] = ""
    current_account_number: Optional[str] = ""
    ifsc_code: Optional[str] = ""
    bik_code: Optional[str] = ""
    swift_code: Optional[str] = ""
    currency: Optional[str] = ""
    inn_code: Optional[str] = ""
    bic_code: Optional[str] = ""
    iban_number: Optional[str] = ""
    branch_address: Optional[str] = ""


class PortAgentDTO(BaseModel):
    name: Optional[str] = ""
    address: Optional[str] = ""
    bank_details: BankDetailsDTO


class ClientDTO(BaseModel):
    client_id:Optional[int]=None
    name: Optional[str] = ""


class PortDTO(BaseModel):
    port_id: int = 0
    name: Optional[str] = ""


class CountryDTO(BaseModel):
    country_id: int = 0
    name: Optional[str] = ""


class PurposeDTO(BaseModel):
    purpose_id: int = 0
    name: Optional[str] = ""


class CargoDTO(BaseModel):
    cargo_id: int = 0
    type: Optional[str] = ""


class VesselDTO(BaseModel):
    vsl_id: Optional[str] = None
    imo_number: Optional[str] = ""
    name: Optional[str] = ""
    grt: Optional[str] = ""
    rgrt: Optional[str] = ""
    nrt: Optional[str] = ""
    loa: Optional[str] = ""
    beam: Optional[str] = ""
    depth: Optional[str] = ""
    dwt: Optional[str] = ""
    type: Optional[str] = ""
    additional_properties: Optional[Dict[str, Any]] = {}
    additional_properties_object: Optional[List[Dict[str, Any]]] = []

class PDAVesselDTO(BaseModel):
    vsl_id: Optional[int] = ""
    imo_number: Optional[str] = ""
    name: Optional[str] = ""
    grt: Optional[float] = ""
    rgrt: Optional[float] = ""
    nrt: Optional[float] = ""
    loa: Optional[float] = ""
    beam: Optional[float] = ""
    depth: Optional[float] = ""
    dwt: Optional[float] = ""
    type: Optional[str] = ""
    additional_properties: Optional[Dict[str, Any]] = {}
    additional_properties_object: Optional[List[Dict[str, Any]]] = []

class SubServiceDTO(BaseModel):
    name: Optional[str] = ""
    # purpose: Optional[str] = ""
    basic_value: Optional[str] = Field("", alias="basic_value")
    calculated_basic_value: Optional[float] = None    
    movement: str = Field(1, alias="movement")
    tariff_percent: str = Field(1, alias="tariff_percent")
    formula_result: Optional[str] = Field("Basic Value * Tariff % * Movement", alias="formula_result")
    optional: str = Field('N', alias="optional")
    sub_total: float = Field(0, alias="sub_total")
    operational_flag: Optional[str] = Field("+", alias="operational_flag")
    formula_inputs: Optional[str] = None
    # reference: Optional[str] = None

    unique_key: Optional[str] = None
    hide:Optional[str]=None

class ServiceDTO(BaseModel):
    SNO: Optional[int]=None
    code: str = ""
    service: Optional[str] = ""
    # feedback:Optional[str]=None
    pa_remark:Optional[str]=None
    negotiate:Optional[str]=None
    agreed:Optional[str] = None
    # is_auto_calculate: Optional[str] = "N"
    subService: List[SubServiceDTO] = Field(..., alias="subService")
    total: Optional[float] = None

    purpose: Optional[str] = None
    meraki_feedback: Optional[str] = None
    meraki_remark_client: Optional[str] = None
    client_comment: Optional[str] = None
    display_to_client: Optional[str] = None
    client_option: Optional[str] = None
    info_msg: Optional[str] = None

class AdditionalChargeDTO(BaseModel):
    name: Optional[str] = None
    basic_value: Optional[str] = None
    rate: float = 0
    formula_result: Optional[str] = None
    total: float = 0

class ServicesWrapperDTO(BaseModel):
    items: List[ServiceDTO]
    # additional_charges: List[AdditionalChargeDTO] Commented by Harsha
    # service_total: float = 0
    grand_total: float = 0





class DisbursementPAFormRequestDTO(BaseModel):
    disbursement_seq: int = 0
    port_id: Optional[int]=None
    country_id:Optional[int]=None
    voyage:Optional[str]=None
    eta : Optional[datetime]=None
    etd : Optional[datetime]=None
    roe: Optional[float]= None
    vessel_stay : Optional[int] =None 
    client: ClientDTO
    port_agent: PortAgentDTO
    port: PortDTO
    country: CountryDTO
    purpose: PurposeDTO
    cargo: CargoDTO
    vessel: VesselDTO
    services: ServicesWrapperDTO
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    invoice_ref_no:Optional[str] = None
    file_list:Optional[List[Any]]=[]
    port_tariff_rule:Optional[Dict[str, Any]] = None


class PurposeInitateDTO(BaseModel):
    purpose_id:Optional[int]=None
    name: Optional[str] = None


class CargoInitateDTO(BaseModel):
    cargo_id: Optional[int]=None
    type: Optional[str] = None

class TxnDisbursementInitiateDTo(BaseModel):
    comp_id:Optional[int]=None
    client_id : int
    portagent_id :int
    country_id :Optional[int]=None
    port_id :Optional[int]=None
    vessel_id : Optional[int]=None
    imo_number: Optional[str]=None
    vessel: Optional[VesselDTO]=None
    cargo: Optional[CargoInitateDTO]=None
    purpose: Optional[PurposeInitateDTO]=None
    eta:Optional[datetime]=None
    etd:Optional[datetime]=None
    vessel_stay:Optional[int]=None
    roe: Optional[float] = None
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    voyage: Optional[str]=None
    invoice_ref_no:Optional[str] = None
    email_to: Union[str, List[str]]  
    email_cc: Union[str, List[str]]  
    email_signature:Optional[str] = None
    update_signature:Optional[str] = None
    def get_email_to_list(self) -> List[str]:
        if isinstance(self.email_to, str):
            return [e.strip() for e in self.email_to.split(",") if e.strip()]
        return [e.strip() for e in self.email_to if e and e.strip()]

    def get_email_cc_list(self) -> List[str]:
        if isinstance(self.email_cc, str):
            return [e.strip() for e in self.email_cc.split(",") if e.strip()]
        return [e.strip() for e in self.email_cc if e and e.strip()]



class TxnDisbursementInitiateManualDTo(BaseModel):
    comp_id:int
    client_id : int
    portagent_id :int
    country_id :int
    port_id :int
    vessel_id : int
    imo_number: str
    vessel: VesselDTO
    cargo: CargoDTO
    purpose: PurposeDTO
    eta:datetime
    etd:datetime
    vessel_stay:int
    roe: Optional[float] = None
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    voyage: str
    invoice_ref_no:Optional[str] = None
    port_tariff_rule:Optional[Dict[str, Any]] = None

class DisbursementUpdateDTO(BaseModel):
    pda_id: Optional[int]
    fda_id: Optional[int]
    disbursement_id: Optional[str]= None
    pda:Optional[PDADto]
    fda:Optional[FDADto]
    disbursement:Optional[TxnDisbursementDto]

class TxnPdaEditDto(BaseModel):
    disbursement_seq: Optional[int] = None
    disbursement_id: Optional[str] = None
    client_id: Optional[int] = None
    portagent_id: Optional[int] = None
    country_id: Optional[int] = None
    port_id: Optional[int] = None
    pda_vsl_id: Optional[int] = None
    voyage: Optional[str] = None
    port_tariff_rule: Optional[PortTariffRuleDTO] = None
    roe: Optional[float] = None
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    vessel: Optional[PDAVesselDTO] = None
    purpose_id: Optional[int]= None
    cargo_id :Optional[int] = None
    eta: Optional[datetime] = None
    etd : Optional[datetime] = None
    vessel_stay : Optional[int] = None
    advance_percentage: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    pda_remittance: Optional[float] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_pda_data: Optional[Dict[str, Any]] = None
    pda_submit:Optional[str] = None
    pda_save:Optional[str] = None
    override_calculation :Optional[str] = None
    is_re_request:Optional[str] = None
    email_to: Optional[Union[str, List[str]]] = None
    email_cc: Optional[Union[str, List[str]] ] = None
    invoice_ref_no: Optional[str] = None
    email_signature:Optional[str] = None
    update_signature:Optional[str] = None
    meraki_pda_amount:Optional[float] = None
    portagent_pda_amount:Optional[float] = None
    file_list:Optional[List[Any]]=[]
    save:Optional[str]=None
    converted_curr_from : Optional[str]=None
    converted_curr_to: Optional[str]=None
    conversion_pda_rate: Optional[float]=None
    pmt_curr_from: Optional[str]=None
    pmt_curr_to: Optional[str]=None


    model_config = {
        "from_attributes": True
    }
    def get_email_to_list(self) -> List[str]:
        if not self.email_to:
            return []
        if isinstance(self.email_to, str):
            return [e.strip() for e in self.email_to.split(",") if e.strip()]
        return [e.strip() for e in self.email_to if e and e.strip()]

    def get_email_cc_list(self) -> List[str]:
        if not self.email_cc:
            return []
        if isinstance(self.email_cc, str):
            return [e.strip() for e in self.email_cc.split(",") if e.strip()]
        return [e.strip() for e in self.email_cc if e and e.strip()]

class ReturnToPdaRequestDTO(BaseModel):
    disbursement_seq:int
    return_message: str

class ReturnToPdaResponseDTO(BaseModel):
    message:str
    data:None

class TxnReRequestInitiateDTo(BaseModel):
    disbursement_seq:int
    email_to: Optional[Union[str, List[str]]] = None
    email_cc: Optional[Union[str, List[str]] ] = None
    is_re_request : Optional[str] = None
    
    def get_email_to_list(self) -> List[str]:
        if not self.email_to:
            return []
        if isinstance(self.email_to, str):
            return [e.strip() for e in self.email_to.split(",") if e.strip()]
        return [e.strip() for e in self.email_to if e and e.strip()]

    def get_email_cc_list(self) -> List[str]:
        if not self.email_cc:
            return []
        if isinstance(self.email_cc, str):
            return [e.strip() for e in self.email_cc.split(",") if e.strip()]
        return [e.strip() for e in self.email_cc if e and e.strip()]


class TxnClientApprovalRequestInitiateDTo(BaseModel):
    disbursement_seq:int
    email_to: Optional[Union[str, List[str]]] = None
    email_cc: Optional[Union[str, List[str]] ] = None
    meraki_cmt_to_client:Optional[str]=None
    email_signature:Optional[str]=None
    update_signature:Optional[str]= None

    
    def get_email_to_list(self) -> List[str]:
        if not self.email_to:
            return []
        if isinstance(self.email_to, str):
            return [e.strip() for e in self.email_to.split(",") if e.strip()]
        return [e.strip() for e in self.email_to if e and e.strip()]

    def get_email_cc_list(self) -> List[str]:
        if not self.email_cc:
            return []
        if isinstance(self.email_cc, str):
            return [e.strip() for e in self.email_cc.split(",") if e.strip()]
        return [e.strip() for e in self.email_cc if e and e.strip()]
    
class ValidateClientLink(BaseModel):
    token:str
    email :str

class ValidateClientLinkNoAuth(BaseModel):
    token:str


class DisbursementClientFormRequestDTO(BaseModel):
    disbursement_id : str
    disbursement_seq: int = 0
    voyage:Optional[str]=None
    eta : str
    etd : str
    roe: Optional[float]= None
    vessel_stay : Optional[int] =None 
    client: ClientDTO
    port_agent: PortAgentDTO
    port: PortDTO
    country: CountryDTO
    purpose: PurposeDTO
    cargo: CargoDTO
    vessel:PDAVesselDTO
    services: ServicesWrapperDTO
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    # pda_custom_calculation:Optional[str] = None
    # is_approved: Optional[str] = Field(None, exclude=True)
    approved_by: Optional[str] = Field(None, exclude=True)
    client_message: Optional[str] = Field(None, exclude=True)
    pic_approval : Optional[str] = None
class RecalculateDisbursementRequestDTO(BaseModel):
    disbursement_seq: int
    disbursement_id: Optional[str] = None
    client_id: Optional[int] = None
    portagent_id: Optional[int] = None
    country_id: Optional[int] = None
    port_id: Optional[int] = None
    pda_vsl_id: Optional[int] = None
    voyage: Optional[str] = None
    port_tariff_rule: Optional[PortTariffRuleDTO] = None
    roe: Optional[float] = None
    pda_currency_to:Optional[str] = None
    pda_currency_from:Optional[str] = None
    pda_custom_calculation:Optional[str] = None
    vessel: Optional[PDAVesselDTO] = None
    purpose_id: Optional[int]= None
    cargo_id :Optional[int] = None
    eta: Optional[datetime] = None
    etd : Optional[datetime] = None
    vessel_stay : Optional[int] = None
    advance_percentage: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    pda_remittance: Optional[float] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_pda_data: Optional[Dict[str, Any]] = None
    override_calculation :Optional[str] = None
    is_re_request:Optional[str] = None
    # re_calculate: str


class linkValidationNoAuthResponseDTO(BaseModel):
    disbursement_seq:int
    client_id:int
    client_name:str
    port_agent_name:str
    status: str  
    status_code: int  
    uuid: Optional[str] = None
    expires: str
    name: str
    username: str
    role_id: str
    role_name: str
    detail: str
    billing_address:str
    json_template:Optional[Any] = None
    bank_details:Optional[BankDetailsResponseDTO]=None
    pda: Optional[PDADto] = None
    model_config = {
        "from_attributes": True
    }

class ResendLink(BaseModel):
    disbursement_seq:int

class RecordState(BaseModel):
    pda_id: Optional[int] = None
    fda_id: Optional[int] = None
    disbursement_seq: Optional[int] = None
    state: str

class PtmInstrMailRequestDTO(BaseModel):
    email_to: Optional[List[str]] = []
    email_cc: Optional[List[str]] = []
    subject: Optional[str] = None
    body: Optional[Dict[str, Any]] = None
    signature: Optional[str] = None
    update_signature: Optional[str] = None
