from datetime import datetime
from typing import List, Optional, Union
from pydantic import BaseModel, Field, model_validator

class VoyageCreateSchema(BaseModel):
    vessel: str = Field(..., min_length=1, description="Vessel is mandatory")
    voyage_no: Optional[str] = None
    charterparty_terms: Optional[str] = Field(default="", description="Charterparty Terms")

    allowed_laytime_hours: float = Field(default=0.0, ge=0.0, description="Allowed Laytime must be greater than or equal to zero")
    demurrage_rate_usd_per_day: float = Field(default=0.0, ge=0.0, description="Demurrage Rate must be greater than or equal to zero")
    address_commission_percent: float = Field(default=0.0, ge=0.0, description="Address Commission cannot be negative")
    undisputed_demurrage_paid: float = Field(default=0.0, ge=0.0, description="Undisputed demurrage paid cannot be negative")
    freight: Optional[Union[str, float, int]] = None
    laycan: Optional[str] = None
    laycan_narrowed_date: Optional[str] = None
    laycan_narrowed_start_time: Optional[str] = None
    laycan_narrowed_end_time: Optional[str] = None
    actual_rotation: Optional[str] = None
    cp_speed: Optional[Union[str, float, int]] = None
    timebar_clause: Optional[str] = None
    additional_laytime: Optional[str] = None
    client_name: Optional[str] = None
    bl_date: Optional[datetime] = None
    cp_date: Optional[datetime] = None
    bl_dated: Optional[datetime] = None
    cp_dated: Optional[datetime] = None

    @model_validator(mode='before')
    @classmethod
    def map_voyage_no(cls, data):
        if isinstance(data, dict):
            voyage_keys = ['voyage_no', 'voyage_No', 'voyageNo', 'voyage No', 'voyageno', 'voyage_number']
            for k in voyage_keys:
                if k in data:
                    data['voyage_no'] = data[k]
                    break
        return data

    @model_validator(mode='after')

    def sync_dates(self) -> 'VoyageCreateSchema':
        if self.bl_dated is not None and self.bl_date is None:
            self.bl_date = self.bl_dated
        elif self.bl_date is not None and self.bl_dated is None:
            self.bl_dated = self.bl_date

        if self.cp_dated is not None and self.cp_date is None:
            self.cp_date = self.cp_dated
        elif self.cp_date is not None and self.cp_dated is None:
            self.cp_dated = self.cp_date
        return self



class PortOperationCreateSchema(BaseModel):
    port: str = Field(..., min_length=1, description="Port name is mandatory")
    terminal: Optional[str] = None
    start_time: datetime
    start_event: Optional[str] = None
    end_time: datetime
    end_event: Optional[str] = None
    comments_clause: Optional[str] = None

    @model_validator(mode='after')
    def validate_times(self) -> 'PortOperationCreateSchema':
        if self.end_time <= self.start_time:
            raise ValueError("End Time must always be greater than Start Time")
        return self


class DeductionEventCreateSchema(BaseModel):
    event_name: str = Field(..., min_length=1, description="Event name is mandatory")
    start_time: datetime
    end_time: datetime
    comments_clause: Optional[str] = None

    @model_validator(mode='after')
    def validate_times(self) -> 'DeductionEventCreateSchema':
        if self.end_time <= self.start_time:
            raise ValueError("Deduction start_time must be less than deduction end_time")
        return self


class DemurrageCaseCreateSchema(BaseModel):
    voyage: VoyageCreateSchema
    load_port: PortOperationCreateSchema
    load_deductions: List[DeductionEventCreateSchema] = Field(default_factory=list)
    discharge_port: PortOperationCreateSchema
    discharge_deductions: List[DeductionEventCreateSchema] = Field(default_factory=list)
