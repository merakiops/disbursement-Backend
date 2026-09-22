from pydantic import BaseModel
from typing import Optional, List, Any, Dict, Union
from datetime import datetime, date
from pydantic import model_validator

class DisbursementTrackerDTO(BaseModel):
    disbursement_seq: Union[int, str]
    disbursement_id: Optional[str]
    source: Optional[str] = None
    pic: Optional[str]
    client_name: Optional[str]
    vessel_name: Optional[str]
    port_agent: Optional[str]
    port: Optional[str]
    country: Optional[str]
    voyage: Optional[str]
    eta: Optional[datetime]
    etd: Optional[datetime]
    status: Optional[str]
    status_background_color: Optional[str]
    status_text_color: Optional[str]
    due_date: Optional[datetime]
    due_days: Optional[int]
    due_comment: Optional[str]
    due_flag: Optional[str]
    due_color: Optional[str]
    pda_state: Optional[str] = None
    fda_state: Optional[str] = None
    fda_id: Optional[int] = None
    pda_id: Optional[int] = None
    fda_amount: Optional[float] = None
    pda_amount: Optional[float] = None
    pda_savings: Optional[float] = None
    fda_savings: Optional[float] = None
    final_status: Optional[str] = None
    purpose: Optional[str] = None
    pda_status: Optional[str] = None
    fda_status: Optional[str] = None
    fda_status_background_color: Optional[str] = None
    fda_status_text_color: Optional[str] = None
    pda_status_background_color: Optional[str] = None
    pda_status_text_color: Optional[str] = None
    final_status_background_color: Optional[str] = None
    final_status_text_color: Optional[str] = None
    manual_fda_amount: Optional[str] = None
    manual_pda_amount: Optional[str] = None
    loss_prevented_reason: Optional[str] = None
    advance_amount_remitted: Optional[float] = None
    outstanding_balance: Optional[float] = None
    remark: Optional[str] = None
    created_on: Optional[datetime] = None
    fda_completed_date: Optional[datetime] = None
    model_config = {
        "from_attributes": True
    }

    @model_validator(mode='before')
    @classmethod
    def strict_bind_agency_nomination_date(cls, data: Any) -> Any:
        if isinstance(data, dict):
            # Strictly bind created_on to agency_nomination_date only
            data["created_on"] = data.get("agency_nomination_date")
        else:
            # Strictly bind for ORM / View objects
            nomination_date = getattr(data, "agency_nomination_date", None)
            setattr(data, "created_on", nomination_date)
        return data

    @model_validator(mode='after')
    def apply_status_rules(self) -> 'DisbursementTrackerDTO':
        pda = (self.pda_status or "").strip().lower().replace("-", " ")
        fda = (self.fda_status or "").strip().lower().replace("-", " ")
        
        def get_color(status_name: str):
            mapping = {
                "pda in progress": ("#f59e0b", "#ffffff"),
                "cancelled": ("#ef4444", "#ffffff"),
                "awaiting fda": ("#f59e0b", "#ffffff"),
                "fda in progress": ("#f59e0b", "#ffffff"),
                "fda completed": ("#10b981", "#ffffff"),
            }
            return mapping.get(status_name.lower(), (self.final_status_background_color, self.final_status_text_color))

        new_final = self.final_status
        
        if pda in ["under process", "under progress", "in progress"]:
            new_final = "PDA in Progress"
        elif pda == "cancelled":
            if fda in ["n/a", "na", "-", ""]:
                new_final = "Cancelled"
        elif pda == "completed":
            if fda in ["n/a", "na", "-", ""]:
                new_final = "Awaiting FDA"
            elif fda in ["under process", "under progress", "in progress"]:
                new_final = "FDA in Progress"
            elif fda == "completed":
                new_final = "FDA Completed"
        elif pda in ["n/a", "na", "-", ""]:
            if fda in ["under process", "under progress", "in progress"]:
                new_final = "FDA in Progress"
                
        if new_final and new_final != self.final_status:
            self.final_status = new_final
            self.status = new_final
            bg, txt = get_color(new_final)
            if bg and txt:
                self.final_status_background_color = bg
                self.final_status_text_color = txt
                self.status_background_color = bg
                self.status_text_color = txt
                
        return self

class UpdateDisbursementTrackerCellDTO(BaseModel):
    disbursement_seq: Union[int, str]
    data_source: Optional[str] = "standard"
    advance_amount_remitted: Optional[float] = None
    outstanding_balance: Optional[float] = None
    remark: Optional[str] = None


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