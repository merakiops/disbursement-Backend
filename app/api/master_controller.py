from fastapi import APIRouter, Request, Depends, status, File, UploadFile, HTTPException
from app.core.decorators import jwt_required
from sqlalchemy.orm import Session
from app.db import get_db
from typing import List
from app.services import company_service_impl, user_service_impl
from app.dto.master_data_response_dto import MasterDataResponseDTO, CompanyDTO, RoleDTO,MasterDataRequestDTO,CompanyType,VesselPropDTO,MaPortServiceDTO,MaTariffServiceDTO
from app.services import user_service_impl
from app.services.country_service_impl import CountryServiceImpl
from app.services.currency_service_impl import CurrencyServiceImpl
from app.services.cargo_service_impl import CargoServiceImpl
from app.services.purpose_service_impl import PurposeServiceImpl
from app.services.client_service_impl import ClientServiceImpl
from app.services.port_agent_service_impl import PortAgentServiceImpl
from app.services import vessel_service_impl
from app.services.port_service_impl import PortServiceImpl
from app.repo.tariff_repo import TariffRepo
from typing import Optional
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO


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
tariff_repo = TariffRepo()

@masterController.post("/api/v1/getmaster-data",status_code=status.HTTP_200_OK, response_model= MasterDataResponseDTO)
@jwt_required
async def getCompanyList(request: Request,body: MasterDataRequestDTO,  db: Session = Depends(get_db)):
    username = request.state.user['username']
    company_id = request.state.user['company']
    user = userservice.get_user_by_username(username, db=db)
    requested_fields = [field.lower() for field in body.fields] if body.fields else ["all"]

    allowed_fields = {"all", "country", "active_vessels","inactive_vessels", "roles","cargo","purpose","client","port_agent","companies","company_types","vessel_properties","port_services","tariff_services","currency"}
    unknown_fields = set(requested_fields) - allowed_fields
    print("unknown_fields:",unknown_fields)
    if unknown_fields:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=f"Invalid fields requested: {', '.join(unknown_fields)}")


    result = {}

    if "all" in requested_fields or "country" in requested_fields:
        countries = country_service.get_all_countries(db)
        result["country"] = countries

    if "all" in requested_fields or "active_vessels" in requested_fields:
        active_vessels = vessl_service.get_all_vessels_by_status(company_id,'Y',db)
        active_vessels_list = list(active_vessels) if active_vessels is not None else []
        if not any(getattr(v, 'name', '') and str(getattr(v, 'name', '')).lower() == "others" for v in active_vessels_list):
            active_vessels_list.append(VesselCreateUpdateDTO(vessel_id=0, name="Others", status="Y"))
        result["active_vessels"] = active_vessels_list

    if "all" in requested_fields or "inactive_vessels" in requested_fields:
        inactive_vessels = vessl_service.get_all_vessels_by_status(company_id,'N',db)
        result["inactive_vessels"] = inactive_vessels

    if "all" in requested_fields or "roles" in requested_fields:
         roles = userservice.getMasterRoles(db)
         roles_dto = [RoleDTO.model_validate(r) for r in roles]
         result["roles"] = roles_dto
    
    if "all" in requested_fields or "cargo" in requested_fields:
        cargos = cargo_service.get_all_cargo_list(db)
        cargos_list = list(cargos) if cargos is not None else []
        if not any(getattr(c, 'type', '') and str(getattr(c, 'type', '')).lower() == "others" for c in cargos_list):
            cargos_list.append(CargoCreateUpdateDTO(cargo_id=0, type="Others", status="Y"))
        result["cargo"] = cargos_list

    if "all" in requested_fields or "purpose" in requested_fields:
        purposes = purpose_service.get_all_purpose(db)
        purposes_list = list(purposes) if purposes is not None else []
        if not any(getattr(p, 'name', '') and str(getattr(p, 'name', '')).lower() == "others" for p in purposes_list):
            purposes_list.append(PurposeCreateUpdateDTO(purpose_id=0, name="Others", status="Y"))
        result["purpose"] = purposes_list

    if "all" in requested_fields or "client" in requested_fields:
        clients = client_service.get_all_clients(db)
        result["client"] = clients

    if "all" in requested_fields or "port_agent" in requested_fields:
        port_agents = port_agent_service.get_all_port_agents(db)
        port_agents_list = list(port_agents) if port_agents is not None else []
        if not any(getattr(pa, 'company_name', '') and str(getattr(pa, 'company_name', '')).lower() == "others" for pa in port_agents_list):
            port_agents_list.append(PortAgentCreateUpdateDTO(company_id=0, company_name="Others", status="Y"))
        result["port_agent"] = port_agents_list

    if "all" in requested_fields or "companies" in requested_fields:
        owning_company_id = 1
        if user and user.company:
            owning_company_id = user.company.app_owning_company_id
        elif company_id:
            from app.models.company import MaCompany
            comp = db.query(MaCompany.app_owning_company_id).filter(MaCompany.company_id == company_id).first()
            if comp:
                owning_company_id = comp[0]

        companylist = companyservice.get_all_companies_with_details(owning_company_id,db)        
        companies_dto = [CompanyDTO.model_validate(c) for c in companylist]
        result["companies"] = companies_dto
    
    if "all" in requested_fields or "company_types" in requested_fields:

        company_types = companyservice.get_all_company_types(db)
        company_type_dto = [CompanyType.model_validate(c) for c in company_types]

        result["company_types"] = company_type_dto
    if "all" in requested_fields or "vessel_properties" in requested_fields:
        vessel_properties = vessl_service.read_all_vsl_prop_calc(db)
        vessel_properties_dto = [VesselPropDTO.model_validate(c) for c in vessel_properties]
        result["vessel_properties"] = vessel_properties_dto
    
    if "all" in requested_fields or "port_services" in requested_fields:
        port_services = port_service.get_port_service_list(db)
        port_services_dto = [MaPortServiceDTO.model_validate(c) for c in port_services]

        excluded_columns = {"Country", "Port", "Max Range", "Min Range", "Formula", "Vessel Type", "Min Fee"}
        excluded_normalized_columns = {col.lower().replace("_", " "): col for col in excluded_columns}
        
        for service in port_services_dto:
            for tariff_service in service.tariff_services:
                tariff_service.columns = [
                    col.name for col in tariff_service.columns 
                    if col.name.lower().replace("_", " ") not in excluded_normalized_columns
                ]
        result["port_services"] = port_services_dto

    if "all" in requested_fields or "tariff_services" in requested_fields:
        tariff_services = tariff_repo.get_tariff_service_list(db)
        tariff_services_dto = [MaTariffServiceDTO.model_validate(ts) for ts in tariff_services]
        excluded_columns = {"Country", "Port", "Max Range", "Min Range", "Formula", "Vessel Type", "Min Fee"}
        excluded_normalized_columns = {col.lower().replace("_", " "): col for col in excluded_columns}
        
        for service in tariff_services_dto:
            service.columns = [
                col.name for col in service.columns 
                if col.name.lower().replace("_", " ") not in excluded_normalized_columns
            ]
        
        result["tariff_services"] = tariff_services_dto


    if "all" in requested_fields or "currency" in requested_fields:
        currency = currency_service.get_distinct_currency(db)
        result["currency"] = currency

    return result
    