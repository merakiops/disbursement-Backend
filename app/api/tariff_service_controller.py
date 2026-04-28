from app.dto.tariff_service_entry_dto import GenericTariffInsertRequest
from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.orm import Session

from app.db import get_db
from app.services.txn_tariff_service_impl import TariffServiceImpl
from app.core.decorators import jwt_required
from app.core.service_dto_map import generate_service_dto_map_from_db, normalize_service_name

tariff_service_controller = APIRouter()
tariff_service = TariffServiceImpl()


# @tariff_service_controller.api_route("/api/v1/tariff_service/{service_name}"
# , methods=["GET", "POST"])
# @jwt_required
# async def dynamic_handler(service_name: str, request: Request, db: Session = Depends(get_db)):
#     """
#     Dynamic handler for all tariff services.
#     Generates DTOs per request based on database data.
#     """
#     # 1Fetch all services from DB
#     tariff_services = tariff_service.get_tariff_service_details(db)
#     print("1", tariff_services)
#     #  Normalize service_name for comparison
#     normalized_name = normalize_service_name(service_name)

#     #  Find the requested service
#     service = next(
#         (s for s in tariff_services if normalize_service_name(s.service_name) == normalized_name),
#         None
#     )
#     if not service:
#         raise HTTPException(status_code=404, detail=f"Service '{service_name}' not found.")
#     print("2", service)
#     #  Generate DTOs dynamically for this service
#     dto_map = generate_service_dto_map_from_db(service)
#     print("33333", dto_map)
#     dto = dto_map[normalized_name]

#     create_dto: Type[BaseModel] = dto["create_dto"]
#     response_dto: Type[BaseModel] = dto["response_dto"]
#     list_response_dto: Optional[Type[BaseModel]] = dto.get("list_response_dto")

#     username = request.state.user["username"]
#     method = request.method

#     # ---------------------------
#     # POST: Create or update entries
#     # ---------------------------
#     if method == "POST":
#         try:
#             body = await request.json()
#         except Exception:
#             raise HTTPException(status_code=400, detail="Invalid JSON body.")

#         validated_body = create_dto(**body)
#         results = []

#         for item in validated_body.data:
#             # Save/update DB entry
#             result = tariff_service.create_or_update_tariff_entry(
#                 normalized_name,
#                 item.model_dump(),
#                 username,
#                 db
#             )
#             # Convert DB row values to string to satisfy DTO
#             row_data = {k: str(v) if v is not None else "" for k, v in result.items()}
#             results.append(response_dto.model_validate(row_data))

#         return {
#             "message": f"Successfully processed {len(results)} entries",
#             "data": results
#         }

#     # ---------------------------
#     # GET: Retrieve entries
#     # ---------------------------
#     if method == "GET":
#         db_results = tariff_service.get_all(normalized_name, db)
#         results = []

#         for row in db_results:
#             row_data = {k: str(v) if v is not None else "" for k, v in row.items()}
#             results.append(response_dto.model_validate(row_data))

#         if list_response_dto:
#             return list_response_dto(
#                 total_count=len(results),
#                 data=results
#             )

#         return results



# api to fetch and post tariff service entries dynamically --- Lakshmi
@tariff_service_controller.get("/api/v1/tariff_service/{service_name}")
@jwt_required
async def get_tariff_service_entries(
    service_name: str,
    request: Request,
    db: Session = Depends(get_db)
):
    tariff_services = tariff_service.get_tariff_service_details(db)
    normalized_name = normalize_service_name(service_name)
    service = next(
        (s for s in tariff_services if normalize_service_name(s.service_name) == normalized_name),
        None
    )
    if not service:
        raise HTTPException(404, f"Service '{service_name}' not found.")

    dto_map = generate_service_dto_map_from_db(service)
    dto = dto_map.get(normalized_name)
    if not dto:
        raise HTTPException(500, f"No DTO generated for service '{service_name}'")

    response_dto = dto["response_dto"]
    list_response_dto = dto.get("list_response_dto")

    db_results = tariff_service.get_all(normalized_name, db)
    results = [response_dto.model_validate(row, from_attributes=True) for row in db_results]
    return list_response_dto(total_count=len(results), data=results)



@tariff_service_controller.post("/api/v1/tariff_service/{service_name}")
@jwt_required
async def create_or_update_tariff(
    service_name: str,
    payload: GenericTariffInsertRequest, 
    request: Request,
    db: Session = Depends(get_db)
):
    tariff_services = tariff_service.get_tariff_service_details(db)
    normalized_name = normalize_service_name(service_name)

    service = next(
        (s for s in tariff_services if normalize_service_name(s.service_name) == normalized_name),
        None
    )
    if not service:
        raise HTTPException(404, f"Service '{service_name}' not found.")

    dto = generate_service_dto_map_from_db(service)[normalized_name]
    create_dto = dto["create_dto"]
    response_dto = dto["response_dto"]

    # Now Swagger passes payload automatically
    validated = create_dto(**payload.model_dump())

    username = request.state.user["username"]
    results = []

    for item in validated.data:
        db_row = tariff_service.create_or_update_tariff_entry(
            normalized_name, item.model_dump(), username, db
        )
        results.append(response_dto.model_validate(db_row))

    return {
        "message": f"Successfully processed {len(results)} entries",
        "data": results
    }




