from fastapi import APIRouter, Request, Depends, status, File, UploadFile
from app.core.decorators import jwt_required
from sqlalchemy.orm import Session
from app.db import get_db
from typing import List
from app.services import company_service_impl, user_service_impl
from app.dto.master_data_response_dto import CompanyRoleResponseDTO, CompanyDTO, RoleDTO
from app.services import user_service_impl


userservice = user_service_impl.UserServiceImpl()
companyController = APIRouter()

companyservice = company_service_impl.CompanyServiceImpl()
userservice =  user_service_impl.UserServiceImpl()


@companyController.post("/api/v1/getUserMaster",status_code=status.HTTP_200_OK, response_model=CompanyRoleResponseDTO)
@jwt_required
async def getCompanyList(request: Request, db: Session = Depends(get_db)):
    username = request.state.user['username']
    user = userservice.get_user_by_username(username, db=db)
    companylist = companyservice.get_all_companies_with_details(user.company.app_owning_company_id,db)
    roles = userservice.getMasterRoles(db)

    companies_dto = [CompanyDTO.model_validate(c) for c in companylist]
    roles_dto = [RoleDTO.model_validate(r) for r in roles]

    return {
        "companies": companies_dto,
        "roles": roles_dto
    }

