from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.models.company import MaCompany

class companyService(ABC):
    
    
    @abstractmethod
    def get_all_companies_with_details(self,owning_company_id:int, db: Session): 
        pass 

    @abstractmethod
    def get_all_company_types(self,db: Session):
        pass
    
    @abstractmethod
    def get_company_name_by_id(self,db: Session, company_id:int) -> str:
        pass
    
    @abstractmethod
    def get_company_details_by_id(self,company_id:int,db: Session) -> MaCompany:
       pass
        