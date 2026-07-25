from pydantic import BaseModel
from typing import Optional, List, Union

class FilterdateDTO(BaseModel):
    from_date : Optional[str] = None
    to_date : Optional[str] = None

class FilteryearDTO(BaseModel):
    from_year : Optional[str] = None
    to_year : Optional[str] = None

class DashboardRequestDTO(BaseModel):
    clientId: Optional[List[Union[int, str]]] = None
    monthRange: Optional[FilterdateDTO] = None
    yearRange : Optional[FilteryearDTO] = None

class RangeFilterDTO(BaseModel):
    min_value: Optional[float] = None
    max_value: Optional[float] = None

class TableFilterDTO(BaseModel):
    vessel: Optional[List[str]] = []
    country: Optional[List[str]] = []
    port: Optional[List[str]] = []
    loa: Optional[RangeFilterDTO] = None
    nrt: Optional[RangeFilterDTO] = None
    grt: Optional[RangeFilterDTO] = None
    rgrt: Optional[RangeFilterDTO] = None
    vessel_type: Optional[List[str]] = []
    agent: Optional[List[str]] = []
    cargo_grade: Optional[List[str]] = []
    counterparty_short_name: Optional[List[str]] = []

class DashboardDataRequest(BaseModel):
    page: int = 1
    pageSize: int = 10
    clientId: Optional[List[Union[int, str]]] = None
    monthRange: Optional[FilterdateDTO] = None
    yearRange: Optional[FilteryearDTO] = None
    tableFilter: Optional[TableFilterDTO] = None
    dataSource: Optional[str] = "all"  # "all", "excel", or "standard"

class UpdateDashboardRowDTO(BaseModel):
    disbursement_seq: int
    data_source: Optional[str] = "standard"  # "standard" or "excel"
    advance_amount_remitted: Optional[float] = None
    outstanding_balance: Optional[float] = None
    remark: Optional[str] = None
