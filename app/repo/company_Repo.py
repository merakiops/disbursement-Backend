from sqlalchemy.orm import Session, joinedload
from sqlalchemy import or_, text

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
            
            kamba_sql = "SELECT id, company as name, active FROM kamba_data_prod.companies"
            kamba_rows = db.execute(text(kamba_sql)).mappings().all()
            existing_names = {c.company_name.lower() for c in companies if c.company_name}
            
            for k in kamba_rows:
                if k['name'] and k['name'].lower() not in existing_names:
                    k_company = MaCompany(
                        company_id=-k['id'] if k['id'] else None,
                        company_name=k['name'],
                        status='Y' if k['active'] == 1 else 'N',
                        app_owning_company_id=owning_company_id,
                        company_type_id=None
                    )
                    companies.append(k_company)
                    existing_names.add(k_company.company_name.lower())
                    
            companies.sort(key=lambda x: x.company_name)
            
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


  


    