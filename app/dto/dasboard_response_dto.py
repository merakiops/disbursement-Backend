from pydantic import BaseModel
from typing import List, Optional


# Summary and Progress DTOs
class SummaryCardsDTO(BaseModel):
    countries: int
    ports: int
    vessels: int
    totalPDA: int
    totalFDA: int


class ProgressDetailDTO(BaseModel):
    Completed: int
    Underprogress: int
    total: int
    pdaCompletedNoFda:int


class FDAProgressDetailDTO(BaseModel):
    Completed: int
    Underprogress: int
    yetToProcess: int
    total: int


class OverallProgressDTO(BaseModel):
    pda: ProgressDetailDTO
    fda: FDAProgressDetailDTO


class SavingsDTO(BaseModel):
    savingsPercentage: float
    overallSavingsAmount: float
    pdaSavings: float
    fdaSavings: float
    percentage_savings_fda: float
    percentage_savings_pda: float
    pda_total_amount: float
    fda_total_amount: float


class OverallSummaryDTO(BaseModel):
    summaryCards: SummaryCardsDTO
    overallProgress: OverallProgressDTO
    savings: SavingsDTO


# Main Dashboard Response DTO
class DashboardResponseDTO(BaseModel):
    overallSummary: OverallSummaryDTO


# FDA Processing Details Response DTOs
class FdaProcessingDetailDTO(BaseModel):
    sno: int
    disbursement_seq: int
    date: str
    vessel: Optional[str] = None
    country: str
    port: str
    loa: float
    grt: float
    rgrt: float
    nrt: float
    pdaAmount: float
    fdaAmount: float
    manual_fda_amount:Optional[str] = None
    manual_pda_amount:Optional[str] = None


class FDAStatsDTO(BaseModel):
    lowestFDAAmount: float
    averageFDAAmount: float
    highestFDAAmount: float


class FDACostTrackerDTO(BaseModel):
    totalRecords: int
    stats: FDAStatsDTO
    tableData: List[FdaProcessingDetailDTO]


class FdaProcessingDetailsResponseDTO(BaseModel):
    fdaCostTracker: FDACostTrackerDTO


# Filter Data Response DTOs
class ClientFilterDTO(BaseModel):
    id: int
    name: str

class FilterDataRequestDTO(BaseModel):
    client_id: Optional[int] = None
class RangeDataDTO(BaseModel):
    min_value: float
    max_value: float

class FilterDataDTO(BaseModel):
    clients: List[ClientFilterDTO] = []
    vessel_name: List[str] = []
    country_name: List[str] = []
    port_name: List[str] = []
    loa: Optional[RangeDataDTO] = None
    nrt: Optional[RangeDataDTO] = None
    grt: Optional[RangeDataDTO] = None
    rgrt: Optional[RangeDataDTO] = None

    model_config = {
        "from_attributes": True
    }
