from sqlalchemy.orm import Session
from app.models.country import MaCountry
from sqlalchemy import distinct   

class CurrencyRepository:
    @staticmethod
    def get_distinct_currency(db:Session):
        try:
            result = db.query(distinct(MaCountry.currency)).all()
            return result
        except Exception as e:
            print(f"Error fetching currency")