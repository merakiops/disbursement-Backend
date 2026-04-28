from sqlalchemy.orm import Session, joinedload
from sqlalchemy import  or_

from app.models.company import MaCompany, MaCompanyType


class CompanyRepo:

    def get_all_companies_with_details(owning_company_id:int,db: Session):
        try:
            companies = db.query(MaCompany)\
                .options(
                    joinedload(MaCompany.owning_company),
                    joinedload(MaCompany.company_type)
                )\
            .filter(MaCompany.app_owning_company_id==owning_company_id)\
            .all()
            
            return companies
        except Exception as e:
            print(f"Error fetching companies: {e}")
            return []
    

    def get_all_company_types(db: Session):
        try:
            cilent_types = db.query(MaCompanyType)\
            .all()
            
            return cilent_types
        except Exception as e:
            print(f"Error fetching companies: {e}")
            return []


    def get_company_name_by_id(db: Session, company_id:int) -> str:
        company_name = db.query(MaCompany.company_name).filter(MaCompany.company_id == company_id).first()
        return company_name[0] if company_name else None
    
    def get_company_details_by_id(company_id:int,db: Session) -> MaCompany:
        company_dtls = db.query(MaCompany).filter(MaCompany.company_id == company_id).first()
        return company_dtls if company_dtls else None


  


    