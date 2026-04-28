from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from app.models.purpose import MaPurpose
from app.dto.purpose_create_or_update_dto import PurposeCreateUpdateDTO, PurposeListRequestDTO
from typing import List
import logging
from app.core.generic_update_function import generic_update
from sqlalchemy.inspection import inspect

logger = logging.getLogger("app_logger")


class PurposeRepository:
    """
    Repository for creating, updating, and retrieving purpose entries.
    """

    @staticmethod
    def create_or_update_purpose(purpose_data: PurposeCreateUpdateDTO, username: str, db: Session) -> MaPurpose:
        try:
            purpose_name = purpose_data.name.strip() if purpose_data.name else None

            update_data = purpose_data.model_dump()
            purpose_name = update_data.get('name')
            
                
            if purpose_name:
                update_data['name'] = purpose_name.strip()
            if purpose_data.purpose_id:
                logger.info("Attempting to update cargo with ID: %s", purpose_data.purpose_id)
                return generic_update(
                        db=db,
                        model=MaPurpose,
                        instance_id=purpose_data.purpose_id,
                        update_data=update_data,
                        username=username,
                        unique_check_columns=['name']
                    )

            else:
                if not purpose_name:
                    raise HTTPException(status_code=400, detail="Purpose name is required for creation.")

                logger.info("Creating new purpose: %s", purpose_name)
                duplicate = db.query(MaPurpose).filter(MaPurpose.name.ilike(purpose_name), MaPurpose.status == 'Y').first()

                if duplicate:
                    logger.warning("Purpose creation failed - duplicate name found: %s", purpose_name)
                    raise HTTPException(status_code=400, detail="Purpose already exists.")

                new_purpose = MaPurpose(
                    name=purpose_name,
                    status=purpose_data.status,
                    created_by=username
                )
                db.add(new_purpose)
                db.commit()
                db.refresh(new_purpose)

                logger.info("Purpose created successfully with ID: %s", new_purpose.purpose_id)
                return new_purpose

        except HTTPException:
            raise
        except IntegrityError as ie:
            db.rollback()
            logger.error("Integrity error: %s", str(ie))
            raise HTTPException(status_code=400, detail="Database integrity error during purpose operation.")
        except Exception as e:
            db.rollback()
            logger.exception("Unexpected error during purpose operation: %s", str(e))
            raise HTTPException(status_code=500, detail=f"Unexpected error")

    @staticmethod
    def get_all_purposes(db: Session) -> List[MaPurpose]:
        try:
            logger.info("Fetching all purposes")
            purposes = db.query(MaPurpose).order_by(MaPurpose.name.asc()).all()
            logger.info("Fetched %d purposes", len(purposes))
            return purposes
        except Exception as e:
            logger.exception("Error fetching purposes")
            raise HTTPException(status_code=500, detail="Error fetching purposes from the database.")

    @staticmethod
    def get_purpose_list(request_dto: PurposeListRequestDTO, db: Session):
        """
        Fetch paginated list of purposes.
        Supports filtering with query string across name field.
        Returns a dict: { 'total_count': int, 'data': list }
        """
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size
        logger.info(f"Fetching purposes for query='{request_dto.query}', offset={offset}, limit={request_dto.page_size}")

        base_query = db.query(MaPurpose).filter(MaPurpose.status=='Y').order_by(MaPurpose.name.asc())

        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(MaPurpose.name.ilike(search_pattern))

        total_count = base_query.count()
        purposes = base_query.offset(offset).limit(request_dto.page_size).all()

        return {
            "total_count": total_count,
            "data": purposes
        }
    @staticmethod
    def get_all_purpose(db: Session) -> List[MaPurpose]:
        try:
            logger.info("Fetching all active purposes")
            purposes = (
                db.query(MaPurpose).filter(MaPurpose.status=='Y')
                .order_by(MaPurpose.name.asc())
                .all()
            )
            logger.info("Fetched %d active purposes", len(purposes))
            return purposes
        except Exception as e:
            logger.exception("Error fetching purposes")
            raise HTTPException(status_code=500, detail="Error fetching purposes from the database.")
    
    @staticmethod
    def get_purpose_dtl_by_id(purpose_id:int,db:Session):
        purpose_dtl = db.query(MaPurpose).filter(MaPurpose.purpose_id ==purpose_id).first()
        return purpose_dtl