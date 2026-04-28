from app.services.bank_details_service import BankService
from sqlalchemy.orm import Session
from app.models.bank_details import BankDetails
from app.repo.bank_repo import BankRepository
class BankServiceImpl(BankService):
    """
    Implementation of PDAService interface to handle PDA-related operations.
    """

    def get_bank_details_by_id(self,bank_details_id:int,db: Session) -> BankDetails:
        return BankRepository.get_bank_details_by_id(bank_details_id,db)