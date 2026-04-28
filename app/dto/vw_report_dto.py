from pydantic import BaseModel

class PdaReportRequestDTO(BaseModel):
    disbursement_seq: int
    report_type:str
    
    