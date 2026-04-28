from pydantic import BaseModel
from typing import Optional,List,Any,Dict
from datetime import datetime,date

class DisbursementTrackerDTO(BaseModel):

    disbursement_seq : Optional[int]
    disbursement_id : Optional[str]
    pic : Optional[str]
    client_name : Optional[str]
    vessel_name : Optional[str]
    port_agent : Optional[str]
    port : Optional[str]
    country : Optional[str]
    voyage :Optional[str]
    eta : Optional[datetime]
    etd : Optional[datetime]
    status : Optional[str]
    status_background_color : Optional[str]
    status_text_color : Optional[str]
    due_date : Optional[datetime]
    due_days : Optional[int]
    due_comment : Optional[str]
    due_flag : Optional[str]
    due_color: Optional[str]
    pda_state: Optional[str]=None
    fda_state: Optional[str]=None
    fda_id:Optional[int]=None
    pda_id: Optional[int]=None
    fda_amount:Optional[float]=None
    pda_amount:Optional[float]=None
    pda_savings:Optional[float]=None
    fda_savings:Optional[float]=None
    final_status: Optional[str]=None
    purpose: Optional[str]=None
    pda_status:Optional[str]=None
    fda_status:Optional[str]=None
    fda_status_background_color:Optional[str]=None
    fda_status_text_color:Optional[str]=None
    pda_status_background_color:Optional[str]=None
    pda_status_text_color:Optional[str]=None
    final_status_background_color:Optional[str]=None
    final_status_text_color:Optional[str]=None
    manual_fda_amount:Optional[str]=None
    manual_pda_amount:Optional[str]=None
    loss_prevented_reason:Optional[str]=None


    model_config = {
        "from_attributes": True
    }

class FromToObj(BaseModel):
    from_date: Optional[date] = None
    to_date: Optional[date] = None

class NumericRangeFilter(BaseModel):
    has_data: Optional[str] = None
    min_value: Optional[float] = None
    max_value: Optional[float] = None

class FilterDTO(BaseModel):
    eta_etd: Optional[FromToObj] = None
    pda_processing_date:Optional[FromToObj] = None
    fda_processing_date:Optional[FromToObj] = None
    pda_over_due: Optional[NumericRangeFilter] = None
    fda_over_due: Optional[NumericRangeFilter] = None
    roe_loss:Optional[NumericRangeFilter] = None
    loss_prevention_pda:Optional[NumericRangeFilter] = None
    loss_prevention_fda:Optional[NumericRangeFilter] = None
    total_loss_prevention:Optional[NumericRangeFilter] = None
    status: Optional [List[str]] = None
    pic : Optional [List[str]] = None
    vessel : Optional [List[str]] = None
    port : Optional [List[str]] = None
    country : Optional [List[str]] = None
    port_agent : Optional [List[str]] = None
    client : Optional [List[str]] = None
    voyage : Optional [List[str]] = None
    

#For paging
class DisbursementTrackerRequestDTO(BaseModel):
    page: int 
    page_size: int 
    query: Optional[str] = None
    filter: Optional[FilterDTO] = None   


    class Config:
        schema_extra = {
            "example": {
                "page": 1,
                "page_size": 10,
                "query": "name of client"
            }
        }

class DisbursementTrackerResponseDTO(BaseModel):
    total_count: int
    data: List[DisbursementTrackerDTO]