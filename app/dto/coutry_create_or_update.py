from pydantic import BaseModel
from typing import Optional,List

class CountryCreateUpdateDTO(BaseModel):
    country_id: Optional[int] = None
    name:  Optional[str] = None
    currency: Optional[str] = None
    status: Optional[str] = None


    model_config = {
        "from_attributes": True
    }

class CountryListRequestDTO(BaseModel):
        """
        DTO for Retrival of Document Review summary.
        """
        page:int
        page_size:int
        query: Optional[str] = None
        status: Optional[str] = None

        class Config:
            schema_extra = {
                "example": {
                    "company_id":1,
                    "page": 1,
                    "page_size": 10,
                    "query": "sample query",
                    "status":["Y"]
                }
            }    


