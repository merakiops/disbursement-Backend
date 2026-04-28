from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime

class DisbursementTrackerDetailsDTO(BaseModel):
    disbursement_seq: Optional[int]
    disbursement_id: Optional[str]

    pic: Optional[str]
    client_name: Optional[str]
    port_agent_name: Optional[str]
    ops_pic: Optional[str]


    agency_nomination_date: Optional[datetime]
    invoice_number: Optional[str]

    pda_id: Optional[int]
    pda_received_ops_agent: Optional[str]
    pda_processing_date: Optional[datetime]
    pda_status: Optional[str]
    pda_state: Optional[str]=None
    portagent_pda_amount: Optional[float]
    pda_remittance: Optional[float]
    pda_remark: Optional[str]

    fda_id: Optional[int]=None
    fda_received_ops_agent: Optional[str]
    fda_processing_date: Optional[datetime]
    portagent_fda_amount: Optional[float]
    fda_status: Optional[str]
    fda_state: Optional[str]=None
    fda_remark: Optional[str]

    days_outstanding: Optional[int]
    vessel_name: Optional[str]
    voyage: Optional[str]
    port: Optional[str]
    country: Optional[str]
    purpose: Optional[str]
    cargo: Optional[str]
    eta: Optional[datetime]
    etd: Optional[datetime]

    sm_estimated_amount: Optional[float]
    sm_detailed_entry: Optional[str] 
    sm_ws_chart_ac: Optional[str]    
    owners_item_rejected: Optional[str]  
    towage_agency_agrement: Optional[str] 
    roe_agent: Optional[float]
    roe_actual_oanda: Optional[float]
    roe_loss: Optional[float]

    loss_prevention_pda: Optional[float]          #pda
    loss_prevention_fda: Optional[float]          #fda
    total_loss_prevented: Optional[float]
    loss_prevented_reason: Optional[str]
    fda_receive_date:Optional[datetime]
    pda_receive_date:Optional[datetime]

    final_status: Optional[str]
    advance_percentage: Optional[int]=None   
    pda_ptm_curr_to:Optional[str]=None
    fda_ptm_curr_to:Optional[str]=None

    actual_pda_amount:Optional[float]=None
    actual_fda_amount:Optional[float]=None

    manual_pda_amount:Optional[str] =None
    manual_fda_amount:Optional[str]=None

    model_config = {
        "from_attributes": True
    }


#For paging
class DisbursementTrackerDetailsRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None


    class Config:
        schema_extra = {
            "example": {
                "page": 1,
                "page_size": 10,
                "query": "name of client"
            }
        }

class DisbursementResponseDTO(BaseModel):
    total_count: int
    data: List[DisbursementTrackerDetailsDTO]


class DisbursementUpdateResponseDTO(BaseModel):
    message: str
    data: DisbursementTrackerDetailsDTO

    model_config = {
        "from_attributes": True
    }


class DisbursementdetailsTrackerResponseDTO(BaseModel):
    message: str
    data: None


class DisbursementTrackerDetailsDTOToExport(BaseModel):
    disbursement_seq: Optional[int]
    disbursement_id: Optional[str]

    pic: Optional[str]
    client_name: Optional[str]
    port_agent_name: Optional[str]
    ops_pic: Optional[str]


    agency_nomination_date: Optional[datetime]
    invoice_number: Optional[str]

    pda_id: Optional[int]
    pda_received_ops_agent: Optional[str]
    pda_processing_date: Optional[datetime]
    pda_status: Optional[str]
    portagent_pda_amount: Optional[float]
    pda_remittance: Optional[float]
    pda_remark: Optional[str]

    fda_id: Optional[int]
    fda_received_ops_agent: Optional[str]
    fda_processing_date: Optional[datetime]
    portagent_fda_amount: Optional[float]
    fda_status: Optional[str]
    fda_remark: Optional[str]

    days_outstanding: Optional[int]
    vessel_name: Optional[str]
    voyage: Optional[str]
    port: Optional[str]
    country: Optional[str]
    purpose: Optional[str]
    cargo: Optional[str]
    eta: Optional[datetime]
    etd: Optional[datetime]

    sm_estimated_amount: Optional[float]
    sm_detailed_entry: Optional[str] 
    sm_ws_chart_ac: Optional[str]    
    owners_item_rejected: Optional[str]  
    towage_agency_agrement: Optional[str] 
    roe_agent: Optional[float]
    roe_actual_oanda: Optional[float]
    roe_loss: Optional[float]

    loss_prevention_pda: Optional[float]         
    loss_prevention_fda: Optional[float]
    total_loss_prevented: Optional[float]
    loss_prevented_reason: Optional[str]
    fda_receive_date:Optional[datetime]
    pda_receive_date:Optional[datetime]

    final_status: Optional[str]

    status_background_color : Optional[str]
    status_text_color : Optional[str]
    due_date : Optional[datetime]
    due_days : Optional[int]
    due_comment : Optional[str]
    due_flag : Optional[str]
    due_color: Optional[str]


    model_config = {
        "from_attributes": True
    }
