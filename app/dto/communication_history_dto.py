from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime

class TxnCommunicationHistoryBaseRequestDTO(BaseModel):
    disbursement_seq: int

class CommunicationHistoryFileDto(BaseModel):
    file_id: Optional[int] = None
    name: Optional[str] = None
    description: Optional[str] = None
    complete_file_path: Optional[str] = None
    sync: Optional[str] = None
    source_type: Optional[str] = None
    
    model_config = {
        "from_attributes": True
    }

# This DTO is used to Display in the response for the disbursement_details api
class CommunicationHistoryDto(BaseModel):
    comm_history_id: Optional[int] = None
    disbursement_seq: Optional[int] = None
    display_message: Optional[str] = None
    pda_id: Optional[int] = None
    fda_id: Optional[int] = None
    # meraki_resp_data: Optional[Dict[str, Any]] = None
    # port_agent_resp_data: Optional[Dict[str, Any]] = None
    modified_data : Optional[Dict[str, Any]] = None
    email_to: Optional[str] = None
    email_cc: Optional[str] = None
    source_type: Optional[str] = None
    message: Optional[str] = None
    flag: Optional[str] = None
    created_on: Optional[datetime] = None
    created_by: Optional[str] = None
    files: Optional[List[CommunicationHistoryFileDto]] = []
    
    model_config = {
        "from_attributes": True
    }
