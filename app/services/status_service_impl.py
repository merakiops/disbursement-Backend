from app.services.status_service import StatusService
from sqlalchemy.orm import Session
from app.models.status import MaStatus
from app.repo.status_repo import StatusRepository
class StatusServiceImpl(StatusService):
    """
    Implementation of StatusService interface to handle Status-related operations.
    """

    def get_status_details_by_name(self,status_name:int,db: Session) -> MaStatus:
        return StatusRepository.get_status_details_by_name(status_name,db)

    def get_all_status(self,db: Session):
        return StatusRepository.get_all_status(db)