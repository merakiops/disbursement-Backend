import logging
import uuid

from fastapi import HTTPException, status, BackgroundTasks
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.services.company_service import companyService
from app.services.user_service_impl import UserServiceImpl
from app.services.registration_service_impl import RegistrationServiceImpl
from app.core.security import encrypt_token
from app.core.SendMail import SendMail
from app.repo.company_Repo import CompanyRepo
from app.models.company import MaCompany


logger = logging.getLogger("app_logger")

user_service =  UserServiceImpl()
registration_service = RegistrationServiceImpl()

class CompanyServiceImpl(companyService):

    def get_all_companies_with_details(self, owning_company_id:int,db: Session): 
        companies  = CompanyRepo.get_all_companies_with_details(owning_company_id,db)
        result = []
        for company in companies:
            result.append({
                "company_id": company.company_id,
                "company_name": company.company_name,
                "status": company.status,
                "created_by": company.created_by,
                "owning_company": {
                    "id": company.owning_company.app_own_comp_id if company.owning_company else None,
                    "name": company.owning_company.name if company.owning_company else None
                },
                "company_type": {
                    "id": company.company_type.company_type_id if company.company_type else None,
                    "name": company.company_type.company_type_name if company.company_type else None,
                }
            })
        return result
    
    def get_all_company_types(self,db: Session):
        return CompanyRepo.get_all_company_types(db)
    
    def get_company_name_by_id(self,db: Session, company_id:int) -> str:
        return CompanyRepo.get_company_name_by_id(db,company_id)
    
    def get_company_details_by_id(self,company_id:int,db: Session) -> MaCompany:
        return CompanyRepo.get_company_details_by_id(company_id,db)

        
         