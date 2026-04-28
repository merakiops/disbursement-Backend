from sqlalchemy.orm import Session
from app.services.currency_service import CurrencyService
from app.repo.currency_repo import CurrencyRepository

class CurrencyServiceImpl(CurrencyService):
    
    def get_distinct_currency(self,db: Session):
        result=CurrencyRepository.get_distinct_currency(db)
        all_currencies = []
        for (currency_str,) in result:
            split_currencies = [c.strip() for c in currency_str.split(',')]
            all_currencies+=split_currencies

        unique_currencies = set(all_currencies)
        return unique_currencies