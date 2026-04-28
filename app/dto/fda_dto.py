from pydantic import BaseModel, Field
from typing import Optional, Any,List,Dict
from datetime import datetime
from uuid import UUID
from pydantic import BaseModel
from typing import Optional, Union
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from app.dto.vw_vessel_details_comparision_dto import VesselDetailsComparisonDto


class VesselDTO(BaseModel):
    vsl_id: Optional[str] = ""
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


class VesselDTOcal(BaseModel):
    vsl_id: Optional[int] = None
    imo_number: Optional[int] = None
    name: Optional[str] = None
    grt: Optional[float] = None
    rgrt: Optional[float] = None
    nrt: Optional[float] = None
    loa: Optional[float] = None
    beam: Optional[float] = None
    depth: Optional[float] = None
    dwt: Optional[float] = None
    type: Optional[str] = None
    additional_properties: Optional[Dict[str, Any]] = {}
    additional_properties_object: Optional[List[Dict[str, Any]]] = []

class CargoDTO(BaseModel):
    cargo_id: int = 0
    type: Optional[str] = ""

class PurposeDTO(BaseModel):
    purpose_id: int = 0
    name: Optional[str] = ""

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
    dwt: Optional[float]
    type: Optional[str]

    class Config:
        from_attributes = True

class FDACreationRequestDto(BaseModel): 
    comp_id:int
    client_id : int
    portagent_id :int
    country_id :int
    port_id :int
    vessel_id : int
    imo_number: str
    vessel: Optional[VesselDTO]=None
    cargo: CargoDTO
    purpose: PurposeDTO
    eta:datetime
    etd:datetime
    vessel_stay:int
    roe: Optional[float] = None
    fda_currency_to:Optional[str] = None
    fda_currency_from:Optional[str] = None
    fda_custom_calculation:Optional[str] = None
    voyage: str
    fda_submit:Optional[str]=None
    invoice_ref_no: Optional[str] = None
    port_tariff_rule:Optional[Dict[str, Any]] = None

class PDADto(BaseModel):
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

    model_config = {
        "from_attributes": True
    }

class PortTariffRuleDTO(BaseModel):
    items: List[Dict[str, Any]] = []

class FDADto(BaseModel):
    # Empty in sample, but keeping placeholder
    portagent_fda_amount: Optional[float] = None
    meraki_pda_amount: Optional[float] = None
    credit_note: Optional[float] = None
    fda_amount: Optional[float] = None
    balance_due: Optional[float] = None
    conversion_rate: Optional[float] = None
    fda_eta:Optional[datetime] = None
    fda_etd:Optional[datetime] = None
    currency_conversion: Optional[float] = None
    fda_vessel_details: Optional[VesselDetailsComparisonDto] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_fda_data: Optional[Dict[str, Any]] = None
    fda_processing_date: Optional[datetime] = None
    fda_received_ops_agent: Optional[str] = None
    status: Optional[int] = None
    status_name: Optional[str] = None
    fda_vessel_stay: Optional[int] = None
    fda_receive_date:Optional[datetime] = None          
    fda_remark:Optional[str] = None                 
    fda_custom_calculation:Optional[str] = None 
    fda_roe: Optional[float] = None     

    model_config = {
        "from_attributes": True
    }

class PdaVesselDetailsDto(BaseModel):
    fda_vsl_dtls: Optional[PDAVslDtlsDto]=None

    model_config = {
        "from_attributes": True
    }


class FDACreationResponseDto(BaseModel):
    fda: Optional[FDADto] = None
   

    model_config = {
        "from_attributes": True
    }

class DisbursementResponse(BaseModel):
    disbursement_id: str
    created_by: str
    disbursement_seq: int

    model_config = {
        "from_attributes": True
    }

class FDACreationWithPDARequestDto(BaseModel): 
    disbursement_seq: int
    comp_id:int
    client_id : int
    portagent_id :int
    country_id :int
    port_id :int
    vessel_id : int
    imo_number: str
    vessel: Optional[VesselDTO]=None
    cargo: CargoDTO
    purpose: PurposeDTO
    eta:datetime
    etd:datetime
    vessel_stay:int
    roe: Optional[float] = None
    fda_currency_to:Optional[str] = None
    fda_currency_from:Optional[str] = None
    fda_custom_calculation:Optional[str] = None
    voyage: str
    invoice_ref_no: Optional[str] = None
    port_tariff_rule:Optional[Dict[str, Any]] = None

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

class TxnFdaEditDto(BaseModel):
    disbursement_seq: Optional[int] = None
    disbursement_id: Optional[str] = None
    client_id: Optional[int] = None
    portagent_id: Optional[int] = None
    country_id: Optional[int] = None
    port_id: Optional[int] = None
    pda_vsl_id: Optional[int] = None
    voyage: Optional[str] = None
    roe: Optional[float] = None
    fda_currency_to:Optional[str] = None
    fda_currency_from:Optional[str] = None
    fda_custom_calculation:Optional[str] = None
    vessel: Optional[VesselDTOcal] = None
    purpose_id: Optional[int]= None
    cargo_id :Optional[int] = None
    eta: Optional[datetime] = None
    etd : Optional[datetime] = None
    vessel_stay : Optional[int] = None
    advance_percentage: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_fda_data: Optional[Dict[str, Any]] = None
    credit_note: Optional[float] = None
    currency_conversion: Optional[float] = None
    conversion_rate: Optional[float] = None
    balance_due: Optional[float] = None
    fda_save: Optional[str] = None
    fda_submit: Optional[str] = None
    port_tariff_rule: Optional[PortTariffRuleDTO] = None
    comp_id:Optional[int]=None
    re_calculate_flag: Optional[str] =None
    port_change_flag:Optional[str] = None
    invoice_ref_no: Optional[str] = None
    meraki_pda_amount:Optional[float] = None
    portagent_fda_amount:Optional[float] = None
    file_list:Optional[List[Any]]=[]
    converted_curr_from : Optional[str]=None
    converted_curr_to: Optional[str]=None
    conversion_fda_rate: Optional[float]=None
    pmt_curr_from: Optional[str]=None
    pmt_curr_to: Optional[str]=None
   


    model_config = {
        "from_attributes": True
    }


class RecalculationRequestDTO(BaseModel):
    disbursement_seq: Optional[int] = None
    disbursement_id: Optional[str] = None
    client_id: Optional[int] = None
    portagent_id: Optional[int] = None
    country_id: Optional[int] = None
    port_id: Optional[int] = None
    pda_vsl_id: Optional[int] = None
    voyage: Optional[str] = None
    roe: Optional[float] = None
    fda_currency_to:Optional[str] = None
    fda_currency_from:Optional[str] = None
    fda_custom_calculation:Optional[str] = None
    vessel: Optional[VesselDTOcal] = None
    purpose_id: Optional[int]= None
    cargo_id :Optional[int] = None
    eta: Optional[datetime] = None
    etd : Optional[datetime] = None
    vessel_stay : Optional[int] = None
    advance_percentage: Optional[float] = None
    conversion_rate: Optional[float] = None
    currency_conversion: Optional[float] = None
    meraki_pda_data: Optional[Dict[str, Any]] = None
    portagent_fda_data: Optional[Dict[str, Any]] = None
    credit_note: Optional[float] = None
    currency_conversion: Optional[float] = None
    conversion_rate: Optional[float] = None
    balance_due: Optional[float] = None
    fda_save: Optional[str] = None
    fda_submit: Optional[str] = None
    port_tariff_rule: Optional[PortTariffRuleDTO] = None
    comp_id:Optional[int]=None
    # re_calculate_flag: Optional[str] =None
    port_change_flag:Optional[str] = None


    #for the change of port missing field
    vessel_id: Optional[int] = None
    imo_number: Optional[str] = None
    cargo: Optional[CargoDTO] = None
    voyage_fdacreate: Optional[str] = None
    purpose: Optional[PurposeDTO]=None

   


    model_config = {
        "from_attributes": True
    }

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
class ClientDTO(BaseModel):
    client_id:Optional[int]=None
    name: Optional[str] = ""  
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

class PortDTO(BaseModel):
    port_id: int = 0
    name: Optional[str] = ""

class CountryDTO(BaseModel):
    country_id: int = 0
    name: Optional[str] = ""
    
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
    display:Optional[str]=None
    

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

class ServicesWrapperDTO(BaseModel):
    items: List[ServiceDTO]
    # additional_charges: List[AdditionalChargeDTO] Commented by Harsha
    # service_total: float = 0
    grand_total: float = 0
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