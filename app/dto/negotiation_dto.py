from pydantic import BaseModel
from typing import Optional, List

class NegotiationRequestDTO(BaseModel):
    type: str  # 'PDA' or 'FDA'

class NegotiationItemDTO(BaseModel):
    id: int
    vesselName: str
    port: str
    arrivalDate: Optional[str] = None
    initialAmount: float
    negotiatedAmount: float
    savings: float
    disbursementId: str
    type: str

class NegotiationResponseDTO(BaseModel):
    data: List[NegotiationItemDTO]
