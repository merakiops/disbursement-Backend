
from typing import Dict, Any, List, Optional
from pydantic import  create_model, ConfigDict
from typing import List, Dict, Any
from typing import Dict, Any, List
from pydantic import create_model


# BASE_SERVICE_DTO_MAP = {
#     "pilotage": {
#         "create_dto": PilotageCreateUpdateDTO,
#         "response_dto": PilotageResponseDTO,
#         "list_response_dto": PilotageListResponseDTO,
#         "description": "Manage Pilotage tariff entries"
#     },
#     "towage": {
#         "create_dto": TowageCreateUpdateDTO,
#         "response_dto": TowageResponseDTO,
#         "list_response_dto": TowageListResponseDTO,
#         "description": "Manage towage tariff entries"
#     },
#       "tonnagedues": {
#         "create_dto": TonnageDuesCreateUpdateDTO,
#         "response_dto": TonnageDuesResponseDTO,
#         "list_response_dto": TonnageDuesListResponseDTO,
#         "description": "Manage tonnagedues tariff entries"
#     },
#     "localstateagencyfee": {
#         "create_dto": LocalStateAgencyFeeCreateUpdateDTO,
#         "response_dto": LocalStateAgencyFeeResponseDTO,
#         "list_response_dto": LocalStateAgencyFeeListResponseDTO,
#         "description": "Manage local state agency fee tariff entries"
#     },
#     "oilfence": {
#         "create_dto": OilFenceCreateUpdateDTO,
#         "response_dto": OilFenceResponseDTO,
#         "list_response_dto": OilFenceListResponseDTO,
#         "description": "Manage oil fence tariff entries"
#     },
#     "agencyfees": {
#         "create_dto": AgencyFeesCreateUpdateDTO,
#         "response_dto": AgencyFeesResponseDTO,
#         "list_response_dto": AgencyFeesListResponseDTO,
#         "description": "Manage agency fees tariff entries"
#     },
#     "bankcharges": {
#         "create_dto": BankChargesCreateUpdateDTO,
#         "response_dto": BankChargesResponseDTO,
#         "list_response_dto": BankChargesListResponseDTO,
#         "description": "Manage bank charges tariff entries"
#     },
#     "anchoragedues":{
#         "create_dto":AnchorageDuesCreateUpdateDTO,
#         "response_dto": AnchorageDuesResponseDTO,
#         "list_response_dto": AnchorageDuesListResponseDTO,
#         "description": "Manage Anchorage Dues tariff entries"
#     },
#     "mooring":{
#         "create_dto":MooringCreateUpdateDTO,
#         "response_dto": MooringResponseDTO,
#         "list_response_dto": MooringListResponseDTO,
#         "description": "Manage mooring tariff entries"
#     },
#     "berthdues":{
#         "create_dto":BerthDuesCreateUpdateDTO,
#         "response_dto": BerthDuesResponseDTO,
#         "list_response_dto": BerthDuesListResponseDTO,
#         "description": "Manage Berth Dues tariff entries"
#     },
#     "stationarydues":{
#         "create_dto":StationaryDuesCreateUpdateDTO,
#         "response_dto": StationaryDuesResponseDTO,
#         "list_response_dto": StationaryDuesListResponseDTO,
#         "description": "Manage Stationary Dues tariff entries"
#     }
# }


# method to normalize service name --- Lakshmi

def normalize_service_name(name: str) -> str:
    """
    Normalize service name .
    Example: 'Local State Agency Fee' -> 'local_state_agency_fee'
    """
    return name.strip().lower().replace(" ", "_")





# def generate_service_dto_map_from_db(service) -> Dict[str, Dict[str, Any]]:
#     service_map: Dict[str, Dict[str, Any]] = {}
#     raw_service_name = service.service_name
#     service_name = normalize_service_name(raw_service_name)
#     fields = getattr(service, "fields", []) or []
#     if not fields:
#         return service_map

#     normalized_cols = {}
#     for field in fields:
#         if not field.field_name:
#             continue
#         col_name = field.field_name.strip().lower().replace(" ", "_")
#         py_type = map_field_type(field.data_type)
#         normalized_cols[col_name] = (Optional[py_type], None)
#         # normalized_cols["country_name"] = (Optional[str], None)
#         # normalized_cols["port_name"] = (Optional[str], None)
#         # normalized_cols["tariff_service_name"] = (Optional[str], None)    
#     if not normalized_cols:
#         return service_map

#     RowDTO = create_model(f"{service_name}_RowDTO", **normalized_cols)
#     CreateDTO = create_model(f"{service_name}_CreateDTO", data=(List[RowDTO], ...))
  
#     ResponseDTO = create_model(
#         f"{service_name}_ResponseDTO",
#         tariff_service_id=(int | None, None),
#         tariff_service_name=(str | None, None),
#         message=(str | None, None),
#         __config__=ConfigDict(from_attributes=True),
#         **normalized_cols
#     )
#     print("ResponseDTO", ResponseDTO)

#     ListResponseDTO = create_model(
#         f"{service_name}_ListResponseDTO",
#         total_count=(int, ...),
#         data=(List[ResponseDTO], ...)
#     )
#     print("ListResponseDTO", ListResponseDTO)    

#     service_map[service_name] = {
#         "create_dto": CreateDTO,
#         "response_dto": ResponseDTO,
#         "list_response_dto": ListResponseDTO,
#         "description": f"Manage {raw_service_name} tariff entries",
#         "display_name": raw_service_name,
#         "slug": service_name,
#     }
#     return service_map

# metod to generate the dto dynamically --- Lakshmi
def generate_service_dto_map_from_db(service) -> Dict[str, Dict[str, Any]]:
    service_map: Dict[str, Dict[str, Any]] = {}
    raw_service_name = service.service_name
    service_name = normalize_service_name(raw_service_name)
    fields = getattr(service, "fields", []) or []
    if not fields:
        return service_map

    # Base normalized columns from fields
    normalized_cols = {}
    for field in fields:
        if not field.field_name:
            continue
        col_name = field.field_name.strip().lower().replace(" ", "_")
        py_type = map_field_type(field.data_type)
        normalized_cols[col_name] = (Optional[py_type], None)
        normalized_cols["seq"] = (Optional[int], None)

    if not normalized_cols:
        return service_map

    # Create RowDTO and CreateDTO (unaffected by country/port names)
    RowDTO = create_model(f"{service_name}_RowDTO", **normalized_cols)
    CreateDTO = create_model(f"{service_name}_CreateDTO", data=(List[RowDTO], ...))

    # --- Clone normalized_cols for ResponseDTO and add country_name/port_name ---
    response_cols = normalized_cols.copy()
    response_cols["country_name"] = (Optional[str], None)
    response_cols["port_name"] = (Optional[str], None)
    response_cols["seq"] = (Optional[int], None)     


    ResponseDTO = create_model(
        f"{service_name}_ResponseDTO",
        tariff_service_id=(Optional[int], None),
        tariff_service_name=(Optional[str], None),
        
        message=(Optional[str], None),
        __config__=ConfigDict(from_attributes=True),
        **response_cols
    )

    ListResponseDTO = create_model(
        f"{service_name}_ListResponseDTO",
        total_count=(int, ...),
        data=(List[ResponseDTO], ...)
    )

    service_map[service_name] = {
        "create_dto": CreateDTO,
        "response_dto": ResponseDTO,
        "list_response_dto": ListResponseDTO,
        "description": f"Manage {raw_service_name} tariff entries",
        "display_name": raw_service_name,
        "slug": service_name,
    }

    return service_map



def map_field_type(db_type: str):
    if not db_type:
        return str

    t = db_type.lower()

    if t in ("number", "int", "integer", "bigint", "smallint", "serial"):
        return int

    if t in ("decimal", "numeric", "float", "double", "real", "money"):
        return float

    if t in ("bool", "boolean"):
        return bool

    if t in ("text","date", "timestamp", "datetime", "timestamptz"):
        return str

    return str




# Generate DTOs for all services for the batch processing
# SERVICE_DTO_MAP = generate_batch_dtos(BASE_SERVICE_DTO_MAP)2