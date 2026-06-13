from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict

class DeductionResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    operation_id: int
    event_name: str
    start_time: datetime
    end_time: datetime
    time_used: float
    comments_clause: Optional[str] = None
    created_at: datetime


class PortOperationResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    voyage_id: int
    operation_type: str
    port: str
    terminal: Optional[str] = None
    start_time: datetime
    start_event: Optional[str] = None
    end_time: datetime
    end_event: Optional[str] = None
    time_used: float
    gross_used_laytime: float
    comments_clause: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    deductions: List[DeductionResponseSchema] = []


class DemurrageSummaryResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    voyage_id: int
    total_used_laytime: float
    total_deductions: float
    allowed_laytime: float
    demurrage_time: float
    gross_demurrage_cost: float
    undisputed_demurrage_paid: float
    add_commission: float
    net_demurrage: float
    created_at: datetime


class VoyageResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    vessel: str
    charterparty_terms: Optional[str] = None
    allowed_laytime_hours: float
    demurrage_rate_usd_per_day: float
    address_commission_percent: float
    undisputed_demurrage_paid: float
    freight: Optional[str] = None
    laycan: Optional[str] = None
    laycan_narrowed_date: Optional[str] = None
    laycan_narrowed_start_time: Optional[str] = None
    laycan_narrowed_end_time: Optional[str] = None
    actual_rotation: Optional[str] = None
    cp_speed: Optional[str] = None
    timebar_clause: Optional[str] = None
    additional_laytime: Optional[str] = None
    client_name: Optional[str] = None
    created_at: datetime
    updated_at: datetime


class DemurrageCaseResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    voyage: VoyageResponseSchema
    load_port: PortOperationResponseSchema
    load_deductions: List[DeductionResponseSchema] = []
    discharge_port: PortOperationResponseSchema
    discharge_deductions: List[DeductionResponseSchema] = []
    summary: DemurrageSummaryResponseSchema
