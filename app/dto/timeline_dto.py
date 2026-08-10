from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class TimelineEntryResponseDTO(BaseModel):
    timeline_id: int
    disbursement_id: Optional[str] = None
    disbursement_seq: Optional[int] = None
    request_id: Optional[int] = None
    status: str
    action_by_role: Optional[str] = None
    action_by_user: Optional[str] = None
    message: Optional[str] = None
    details: Optional[Dict[str, Any]] = None
    created_on: datetime

    model_config = {
        "from_attributes": True
    }

class DisbursementTimelineListResponseDTO(BaseModel):
    disbursement_id: Optional[str] = None
    total_entries: int
    timeline: List[TimelineEntryResponseDTO]
