from abc import ABC, abstractmethod
from sqlalchemy.orm import Session

class CurrencyService(ABC):
    
    @abstractmethod
    def get_distinct_currency(self,db: Session):
        pass