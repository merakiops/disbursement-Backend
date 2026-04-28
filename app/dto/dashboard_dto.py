from pydantic import BaseModel
from typing import Optional, List

class FilterdateDTO(BaseModel):
    from_date : Optional[str] = None
    to_date : Optional[str] = None

class FilteryearDTO(BaseModel):
    from_year : Optional[str] = None
    to_year : Optional[str] = None

class DashboardRequestDTO(BaseModel):
    clientId: Optional[List[int]] = None
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

class DashboardDataRequest(BaseModel):
    page: int
    pageSize: int
    clientId: Optional[List[str]]= None
    tableFilter: Optional[TableFilterDTO] = None
