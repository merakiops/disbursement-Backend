"""
Author: Punith
Description: This module defines the abstract class `BankService`, which provides an interface for managing Bank operations
such as adding, validating, and updating Bank statuses in a database.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.pda_dto import TxnDisbursementInitiateDTo
from app.models.txn_pa_form_link import PAFormLink
from app.models.bank_details import BankDetails
class BankService(ABC):
    """
    Abstract class defining Bank-related operations.
    """
    @abstractmethod
    def get_bank_details_by_id(self,bank_details_id:int,db: Session) -> BankDetails:
        pass