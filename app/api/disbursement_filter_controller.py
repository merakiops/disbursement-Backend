from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from fastapi import APIRouter, Request, Depends, status, File, UploadFile, HTTPException
from app.services.status_service_impl import StatusServiceImpl
from app.services import company_service_impl, user_service_impl
from app.dto.disbursement_filter_dto import FilteredDisbursementDataRequestDTO,FilteredDisbursementResponseDTO
from app.services.vw_disbursement_tracker_service_impl import DisbursementListServiceImpl
from app.services import company_service_impl, user_service_impl
from app.services import user_service_impl
from app.services.country_service_impl import CountryServiceImpl
from app.services.currency_service_impl import CurrencyServiceImpl
from app.services.cargo_service_impl import CargoServiceImpl
from app.services.purpose_service_impl import PurposeServiceImpl
from app.services.client_service_impl import ClientServiceImpl
from app.services.port_agent_service_impl import PortAgentServiceImpl
from app.services import vessel_service_impl
from app.services.port_service_impl import PortServiceImpl


userservice = user_service_impl.UserServiceImpl()
masterController = APIRouter()
country_service = CountryServiceImpl()
currency_service=CurrencyServiceImpl()
companyservice = company_service_impl.CompanyServiceImpl()
userservice =  user_service_impl.UserServiceImpl()
vessl_service = vessel_service_impl.VesselServiceImpl()
cargo_service=CargoServiceImpl()
port_service = PortServiceImpl()
purpose_service = PurposeServiceImpl()
client_service = ClientServiceImpl()
port_agent_service=PortAgentServiceImpl()
statusservice = StatusServiceImpl()

disbursementfilter_service=DisbursementListServiceImpl()
disbursementFilter = APIRouter()
@disbursementFilter.post("/api/v1/filter-getmaster-data",response_model= FilteredDisbursementResponseDTO) 
@jwt_required
async def filter_disbursement(request: Request,body: FilteredDisbursementDataRequestDTO,  db: Session = Depends(get_db)):
    
    requested_fields = [field.lower() for field in body.fields] if body.fields else ["all"]

    allowed_fields = {"all","status","pic","client","vessels","port_agent","country","port","purpose","cargo","voyage"}
    unknown_fields = set(requested_fields) - allowed_fields
    if unknown_fields:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=f"Invalid fields requested: {', '.join(unknown_fields)}")


    result = {}
    
    if "all" in requested_fields or "status" in requested_fields:
        status_list = statusservice.get_all_status(db)
        result["status"] = [{"status": s.status_name} for s in status_list]
    
    if "all" in requested_fields or "pic" in requested_fields:
        pic_list = userservice.get_all_pic(db)
        result["pic"] = [{"user": p.username or "", "names": p.name or ""} for p in pic_list]
    
    if "all" in requested_fields or "vessels" in requested_fields:
        vessels = vessl_service.get_vessel_with_client_id(db)
        result["vessels"] = [{"company_id": v[0], "name": v[1]} for v in vessels] if vessels else []
        
    if "all" in requested_fields or "port" in requested_fields:
        port = port_service.get_all_port(db)
        result["port"] = port
    
    if "all" in requested_fields or "country" in requested_fields:
        country = country_service.get_all_countries_in_rule(db)
        result["country"] = country
 
    if "all" in requested_fields or "cargo" in requested_fields:
        cargos = cargo_service.get_all_cargo_list(db)
        result["cargo"] = cargos

    if "all" in requested_fields or "purpose" in requested_fields:
        purpose = purpose_service.get_all_purpose(db)
        result["purpose"] = purpose

    if "all" in requested_fields or "client" in requested_fields:
        client_list = client_service.get_all_clients(db)
        result["client"] = [{"client_id": c.company_id, "name": c.company_name} for c in client_list]

    if "all" in requested_fields or "port_agent" in requested_fields:
        port_agent = port_agent_service.get_all_port_agents(db)
        result["port_agent"] = port_agent
    
    if "all" in requested_fields or "voyage" in requested_fields:
        voyage = disbursementfilter_service.get_unique_voyage_number(db)
        result["voyage"] = [{"name": v} for v in voyage] if voyage else []


    return result
    