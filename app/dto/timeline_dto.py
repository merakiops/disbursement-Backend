from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class TimelineStepSummaryDTO(BaseModel):
    step: int
    name: str
    status: str  # COMPLETED, CURRENT, PENDING, REJECTED

class DisbursementSummaryItemDTO(BaseModel):
    request_id: Optional[int] = None
    disbursement_id: Optional[str] = None
    disbursement_seq: Optional[int] = None
    vessel: Optional[str] = None
    port: Optional[str] = None
    submitted_on: Optional[datetime] = None
    current_status: str  # Submitted, Under Review, Approved, Completed, Rejected
    current_step: int  # 1 to 4
    total_steps: int = 4
    progress_percentage: int  # 25, 50, 75, 100
    last_updated: Optional[datetime] = None
    timeline_steps: List[TimelineStepSummaryDTO]

class DisbursementSummaryListResponseDTO(BaseModel):
    total_count: int
    data: List[DisbursementSummaryItemDTO]

class DetailedTimelineStepDTO(BaseModel):
    step: int
    title: str  # Submitted, Under Review, Approved, Completed, Rejected
    status: str  # COMPLETED, CURRENT, PENDING, REJECTED
    date_time: Optional[datetime] = None
    description: Optional[str] = None
    updated_by: Optional[str] = None

class DetailedDisbursementTimelineResponseDTO(BaseModel):
    request_id: Optional[int] = None
    disbursement_id: Optional[str] = None
    disbursement_seq: Optional[int] = None
    vessel: Optional[str] = None
    port: Optional[str] = None
    current_status: str
    current_step: int
    progress_percentage: int
    timeline: List[DetailedTimelineStepDTO]
