"""
Author: Punith
Description: This module defines the abstract class `Status`, which provides an interface for managing Status operations
such as adding, validating, and updating  statuses in a database.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.pda_dto import TxnDisbursementInitiateDTo
from app.models.txn_pa_form_link import PAFormLink
from app.models.status import MaStatus
class StatusService(ABC):
    """
    Abstract class defining Status-related operations.
    """
    @abstractmethod
    def get_status_details_by_name(self,status_name:int,db: Session) -> MaStatus:
        pass

    @abstractmethod
    def get_all_status(self, db: Session):
        pass