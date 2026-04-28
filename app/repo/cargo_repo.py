from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from app.models.cargo import MaCargo
from app.dto.cargo_create_or_update_dto import CargoCreateUpdateDTO, CargoListRequestDTO
from typing import List
import logging
from app.core.generic_update_function import generic_update
logger = logging.getLogger("app_logger")


class CargoRepository:
    """
    Repository for creating or updating a cargo entry.
    """

    @staticmethod
    def create_or_update_cargo(cargo_data: CargoCreateUpdateDTO, username: str, db: Session) -> MaCargo:
        try:
            update_data = cargo_data.model_dump()
            cargo_type = update_data.get('type')
                
            if cargo_type:
                cargo_type = cargo_type.strip()
                update_data['type'] = cargo_type

            if cargo_data.cargo_id:
                duplicate = db.query(MaCargo).filter(
                MaCargo.type.ilike(cargo_type),
                MaCargo.cargo_id != cargo_data.cargo_id,
                MaCargo.status == 'Y'
            ).first()

                if duplicate:
                    logger.warning("Duplicate cargo type '%s' found during update.", cargo_type)
                    raise HTTPException(status_code=400, detail="Cargo with this type already exists.")

                logger.info("Attempting to update cargo with ID: %s", cargo_data.cargo_id)
                return generic_update(
                        db=db,
                        model=MaCargo,
                        instance_id=cargo_data.cargo_id,
                        update_data=update_data,
                        username=username,
                        unique_check_columns=['type']
                    )
               
            else:
                if not cargo_type:
                    raise HTTPException(status_code=400, detail="Cargo type is required for creation.")

                logger.info("Creating new cargo: %s", cargo_type)
                duplicate = db.query(MaCargo).filter(MaCargo.type.ilike(cargo_type), MaCargo.status == 'Y').first()

                if duplicate:
                    logger.warning("Cargo creation failed - duplicate type found: %s", cargo_type)
                    raise HTTPException(status_code=400, detail="Cargo already exists.")

                new_cargo = MaCargo(
                    type=cargo_type,
                    status=cargo_data.status,
                    created_by=username
                )
                db.add(new_cargo)
                db.commit()
                db.refresh(new_cargo)

                logger.info("Cargo created successfully with ID: %s", new_cargo.cargo_id)
                return new_cargo

        except HTTPException:
            raise
        except IntegrityError as ie:
            db.rollback()
            logger.error("Integrity error: %s", str(ie))
            raise HTTPException(status_code=400, detail="Database integrity error during cargo operation.")
        except Exception as e:
            db.rollback()
            logger.exception("Unexpected error during cargo operation: %s", str(e))
            raise HTTPException(status_code=500, detail=f"Unexpected error")


    @staticmethod
    def get_all_cargos(db: Session) -> List[MaCargo]:
        try:
            logger.info("Fetching all cargos")
            cargos = db.query(MaCargo).order_by(MaCargo.type.asc()).all()
            logger.info("Fetched %d cargos", len(cargos))
            return cargos
        except Exception as e:
            logger.exception("Error fetching cargos")
            raise HTTPException(status_code=500, detail="Error fetching cargos from the database.")

    @staticmethod
    def get_cargo_list(request_dto: CargoListRequestDTO, db: Session):
        """
        Fetch paginated list of cargos.
        Supports filtering with query string across useful fields.
        Returns a dict: { 'total_count': int, 'data': list }
        """
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size
        logger.info(f"Fetching cargos for query='{request_dto.query}', offset={offset}, limit={request_dto.page_size}")

        base_query = db.query(MaCargo).filter(MaCargo.status=='Y').order_by(MaCargo.type.asc())

        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(MaCargo.type.ilike(search_pattern))

        total_count = base_query.count()
        cargos = base_query.offset(offset).limit(request_dto.page_size).all()

        return {
            "total_count": total_count,
            "data": cargos
        }
    
    @staticmethod
    def get_all_cargo_list(db: Session) -> List[MaCargo]:
        try:
            logger.info("Fetching all active cargos")
            cargos = (
                db.query(MaCargo).filter(MaCargo.status=='Y')
                .order_by(MaCargo.type.asc())
                .all()
            )
            logger.info("Fetched %d active cargos", len(cargos))
            return cargos
        except Exception as e:
            logger.exception("Error fetching active cargos")
            raise HTTPException(
            status_code=500,
            detail="Error fetching active cargos from the database."
        )
    
    @staticmethod
    def get_cargo_info_by_id(cargo_id:int, db:Session):
        cargo_dtls= db.query(MaCargo).filter(MaCargo.cargo_id == cargo_id).first()
        return cargo_dtls
    

