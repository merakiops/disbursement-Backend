from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any, Union
from datetime import datetime

class PortAgentSelectionDTO(BaseModel):
    portagent_id: int
    CNA: Optional[bool] = False
    CNAPC: Optional[bool] = False
    ONA: Optional[bool] = False
    OPA: Optional[bool] = False
    purpose_id: Optional[Union[List[int], int]] = None

class TxnClientDisbursementInitiateDTO(BaseModel):
    country_id: Optional[int] = None
    client_id: Optional[int] = None
    vessel_id: Optional[int] = None
    port_id: Optional[int] = None
    cargo_id: Optional[int] = None
    draft: Optional[str] = None
    imo_number: Optional[str] = None
    vessel: Optional[str] = None
    nrt: Optional[float] = None
    grt: Optional[float] = None
    rgrt: Optional[float] = None
    loa: Optional[float] = None
    beam: Optional[float] = None
    depth: Optional[float] = None
    dwt: Optional[float] = None
    type: Optional[str] = None
    eta: Optional[datetime] = None
    etd: Optional[datetime] = None
    vessel_stay: Optional[int] = None
    voyage: Optional[str] = None
    pda_roe: Optional[float] = None
    pda_currency_from: Optional[str] = None
    pda_currency_to: Optional[str] = None
    invoice_ref_no: Optional[str] = None
    portAgents: Optional[List[PortAgentSelectionDTO]] = Field(default_factory=list)
    email_to: Optional[Union[str, List[str]]] = None
    email_cc: Optional[Union[str, List[str]]] = None
    email_signature: Optional[str] = None
    update_signature: Optional[str] = None

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

class TxnClientDisbursementRequestResponseDTO(BaseModel):
    request_id: int
    disbursement_id: Optional[str] = None
    country_id: Optional[int] = None
    client_id: Optional[int] = None
    vessel_id: Optional[int] = None
    port_id: Optional[int] = None
    cargo_id: Optional[int] = None
    draft: Optional[str] = None
    imo_number: Optional[str] = None
    vessel: Optional[str] = None
    nrt: Optional[float] = None
    grt: Optional[float] = None
    rgrt: Optional[float] = None
    loa: Optional[float] = None
    beam: Optional[float] = None
    depth: Optional[float] = None
    dwt: Optional[float] = None
    type: Optional[str] = None
    eta: Optional[datetime] = None
    etd: Optional[datetime] = None
    vessel_stay: Optional[int] = None
    voyage: Optional[str] = None
    pda_roe: Optional[float] = None
    pda_currency_from: Optional[str] = None
    pda_currency_to: Optional[str] = None
    invoice_ref_no: Optional[str] = None
    port_agents: Optional[List[Dict[str, Any]]] = None
    others: Optional[Dict[str, Any]] = None
    status: str
    created_on: Optional[datetime] = None
    updated_on: Optional[datetime] = None
    created_by: Optional[str] = None
    updated_by: Optional[str] = None

    model_config = {
        "from_attributes": True
    }
