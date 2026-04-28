from app.services.dynamic_table_service import DynamicTableService
from fastapi import APIRouter, Depends,  Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from pydantic import BaseModel
from typing import List, Optional


dynamic_table_controller = APIRouter()
dynamic_table_service = DynamicTableService()

class ColumnDefinition(BaseModel):
    name: str
    data_type: str 
    size: int = 100
    nullable: bool = True

class CreateTableRequest(BaseModel):
    service_name: str
    fields: List[ColumnDefinition]

class Relationship(BaseModel):
    name: str              
    ref_table: str               
    ref_field: str = "id"       
    on_delete: Optional[str] = "CASCADE" 

   
# Dynamic tariff creation endpoint --- Lakshmi
# Dynamic tariff creation endpoint
@dynamic_table_controller.post("/api/v1/create-tariff-table", tags=["Dynamic Table Management"])
@jwt_required
async def create_tariff_table(
    request: Request,
    table_request: CreateTableRequest,
    db: Session = Depends(get_db)
):
    """
    Create a dynamic tariff table with the specified columns.

    Args:
        request: HTTP request containing authenticated user information
        table_request: Request body with service name and field definitions
        db: Database session

    Returns:
        Dictionary with success message
    """
    username = request.state.user["username"]
    
    return dynamic_table_service.create_table_dynamically(
        service_name=table_request.service_name,
        fields=table_request.fields,
        username=username,
        db=db
    )
# Dynamic tariff creation endpoint --- Lakshmi

# @dynamic_table_controller.post("/api/v1/create-tariff-table", tags=["Dynamic Table Management"])
# @jwt_required
# async def create_tariff_table(
#     request: Request,
#     table_request: CreateTableRequest,
#     db: Session = Depends(get_db)
# ):
#     username = request.state.user["username"]

#     try:
#         # --- 1. Prevent duplicate services ---
#         existing_service = db.query(MaTariffService).filter(
#             MaTariffService.name.ilike(table_request.service_name)
#         ).first()
#         if existing_service:
#             raise HTTPException(status_code=400, detail="Service already exists")

#         # --- 2. Create Service Type ---
#         port_service_type = MaPortServiceType(
#             code=0,
#             name=table_request.service_name,
#             created_by=username,
#             status=CharStatusEnum.Y
#         )
#         db.add(port_service_type)
#         db.flush()  # get service_id

#         # --- 3. Create Tariff Service Master ---
#         tariff_service = MaTariffService(
#             name=table_request.service_name,
#             service_id=port_service_type.service_id or 0,
#             created_by=username,
#             status=CharStatusEnum.Y
#         )
#         db.add(tariff_service)
#         db.flush()  # get tariff_service_id

#         # --- 4. Detect COUNTRY / PORT columns ---
#         has_country = any(col.name.strip().lower() == "country" for col in table_request.fields)
#         has_port = any(col.name.strip().lower() == "port" for col in table_request.fields)

#         # --- 5. Auto-add COUNTRY if PORT exists but no COUNTRY ---
#         if has_port and not has_country:
#             country_field = {
#                 "name": "country",
#                 "data_type": "int",
#                 "is_mandatory": "Y",
#                 "nullable": False  # optional, depends on your logic
#             }
#             # Insert at first index
#             table_request.fields.insert(0, country_field)

#         # --- 6. Save Column Metadata ---
#         for col in table_request.fields:
#             # If col is a SQLAlchemy object, use getattr, otherwise dict access
#             col_name = getattr(col, 'name', col.get('name')).strip().lower() \
#                 if hasattr(col, 'name') or isinstance(col, dict) else None
#             data_type = getattr(col, 'data_type', col.get('data_type')).lower() \
#                 if hasattr(col, 'data_type') or isinstance(col, dict) else 'text'
#             is_mandatory_val = getattr(col, 'is_mandatory', col.get('is_mandatory', 'Y')) \
#                 if hasattr(col, 'is_mandatory') or isinstance(col, dict) else 'Y'

#             # Force country/port to INT
#             if col_name in ("country", "port"):
#                 data_type = "int"

#             db.add(
#                 TxnTariffServiceColumn(
#                     tariff_service_id=tariff_service.tariff_service_id,
#                     name=normalize_service_name(getattr(col, 'name', col.get('name'))),
#                     data_type=data_type,
#                     is_mandatory=CharStatusEnum.Y if is_mandatory_val == 'Y' else CharStatusEnum.N,
#                     created_by=username,
#                     status=CharStatusEnum.Y
#                 )
#             )

#         db.flush()  # persist all columns before calling stored procedure

#         # --- 7. Call stored procedure to create the dynamic table ---
#         sql_string = """
#         CALL meraki_dev.proc_create_tariff_table(:tariff_service_id, :username, :service_name)
#         """
#         db.execute(
#             text(sql_string),
#             {
#                 "tariff_service_id": tariff_service.tariff_service_id,
#                 "username": username,
#                 "service_name": table_request.service_name
#             }
#         )

#         db.commit()  # commit all changes after successful table creation

#         return {"message": f"Tariff service '{tariff_service.name}' created successfully"}

#     except Exception as e:
#         db.rollback()
#         raise HTTPException(status_code=500, detail=str(e))





