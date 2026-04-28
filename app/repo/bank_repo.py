from sqlalchemy.orm import Session, joinedload
from app.models.bank_details import BankDetails




class BankRepository:
    @staticmethod
    def get_bank_details_by_id(bank_details_id:int,db: Session) -> BankDetails:
        bank_details = db.query(BankDetails).filter(BankDetails.bank_details_id== bank_details_id).first()
        return bank_details
    