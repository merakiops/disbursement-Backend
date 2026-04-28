from pydantic import BaseModel
from typing import Optional, Dict, Any, List

class VesselDetailsComparisonDto(BaseModel):
    # pda_vsl_id: Optional[int]
    vessel_id: Optional[int] = 0
    vessel_imo: Optional[str] = None
    vessel_name: Optional[str] = None

    grt: Optional[Dict[str, Any]] = None
    rgrt: Optional[Dict[str, Any]] = None
    nrt: Optional[Dict[str, Any]] = None
    loa: Optional[Dict[str, Any]] = None
    beam: Optional[Dict[str, Any]] = None
    depth: Optional[Dict[str, Any]] = None
    dwt: Optional[Dict[str, Any]] = None
    type: Optional[Dict[str, Any]] = None
    additional_property: Optional[List[Optional[Dict[str, Any]]]] =None

    model_config = {
        "from_attributes": True
    }