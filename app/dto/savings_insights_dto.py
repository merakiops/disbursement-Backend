from pydantic import BaseModel
from typing import List

class SavingsInsightsBreakdownDTO(BaseModel):
    id: str
    title: str
    description: str
    pda_estimated: str
    fda_spent: str
    savings_realized: str

class SavingsInsightsCalculationDTO(BaseModel):
    pda_estimated: str
    fda_actual_spent: str
    total_savings_realized: str
    one_d_savings_delta: str
    avg_fda_per_port_call: str
    active_port_calls_total: str

class SavingsInsightsOverallDTO(BaseModel):
    total_savings_delta_amount: str
    total_savings_delta_percentage: str
    fda_actual_spent: str
    pda_estimated: str
    total_port_calls: int
    pda_utilized_percentage: str
    efficiency_rate: str
    avg_fda: str
    pda_saving: float
    fda_saving: float

class SavingsInsightsDTO(BaseModel):
    overall_savings: SavingsInsightsOverallDTO
    overall_disbursement_calculation: SavingsInsightsCalculationDTO
    utilization_breakdown: List[SavingsInsightsBreakdownDTO]
    footer_note: str
    operall_saving: float
