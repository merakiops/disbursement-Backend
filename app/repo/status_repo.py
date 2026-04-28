from sqlalchemy.orm import Session, joinedload
from app.models.status import MaStatus
from sqlalchemy import func

class StatusRepository:
    @staticmethod
    def get_status_details_by_name(status_name:str,db: Session) -> MaStatus:
        status = db.query(MaStatus).filter(func.upper(MaStatus.status_name)== status_name.upper()).first()
        return status
    
    @staticmethod
    def get_all_status(db: Session):
        status = db.query(MaStatus).all()
        return status
