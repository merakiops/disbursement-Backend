from sqlalchemy.orm import Session, joinedload
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status
from sqlalchemy import cast, String
import logging
from app.models.ports import MaPort
from app.models.country import MaCountry
from app.dto.port_create_or_update_dto import PortCreateUpdateDTO, PortListRequestDTO
from app.dto.port_response_dto import PortListResponseDTO, PortResponseDTO, CustomFieldDTO
from sqlalchemy import or_
from app.models.port_service_type import MaPortServiceType
from app.models.port_service_sub_type import MaPortSubServiceType
from app.models.tariff_service import MaTariffService
from typing import List
from app.models.port_tariff_rule import MaPortTariffRule

logger = logging.getLogger("app_logger")


class PortRepository:
    @staticmethod
    def create_or_update_port(port_data: PortCreateUpdateDTO, username: str, db: Session) -> PortResponseDTO:
        try:
            port_name = port_data.name.strip() if port_data.name else None
            country_id = port_data.country_id

            if not port_name:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Port name is required."
                )

            # Validate duplicate field names 
            if port_data.vessel_fields:
                field_names = [field.field_name.strip().lower() for field in port_data.vessel_fields if field.field_name]
                duplicates = {name for name in field_names if field_names.count(name) > 1}
                if duplicates:
                    raise HTTPException(
                        status_code=400,
                        detail=f"Duplicate field names found in vessel_fields: {', '.join(duplicates)}"
                    )

            # Check if country exists and is active
            if country_id:
                country = db.query(MaCountry).filter(
                    MaCountry.country_id == country_id
                ).first()
                if not country:
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="Selected country is invalid or inactive."
                    )

            if port_data.port_id:
                logger.info(f"Updating Port with ID: {port_data.port_id}")
                port = db.query(MaPort).options(joinedload(MaPort.country)).filter(MaPort.port_id == port_data.port_id).first()

                if not port:
                    raise HTTPException(status_code=404, detail="Port not found.")

                # Check for duplicate port name
                duplicate = db.query(MaPort).filter(
                    MaPort.name.ilike(port_name),
                    MaPort.port_id != port_data.port_id
                ).first()
                if duplicate:
                    raise HTTPException(
                        status_code=400,
                        detail="Port already exists."
                    )

                # Update fields conditionally
                port.name = port_name or port.name
                port.country_id = country_id or port.country_id
                port.status = port_data.status or port.status or "Y"
                port.updated_by = username

                if port_data.vessel_fields is not None:
                    logger.info(f"Vessel fields to be saved: {port_data.vessel_fields}")
                    port.vessel_fields = [field.model_dump() for field in port_data.vessel_fields]
                db.commit()
                db.refresh(port)
                logger.info("Port updated successfully.")

            else:
                logger.info("Creating new Port.")

                # Check for duplicate during create
                duplicate = db.query(MaPort).filter(
                    MaPort.name.ilike(port_name)
                ).first()
                if duplicate:
                    raise HTTPException(
                        status_code=400,
                        detail="Port already exists."
                    )

                new_port = MaPort(
                    name=port_name,
                    country_id=country_id,
                    status=port_data.status or "Y",
                    created_by=username,
                    vessel_fields=[field.model_dump() for field in port_data.vessel_fields] if port_data.vessel_fields else None
                )

                db.add(new_port)
                db.commit()
                db.refresh(new_port)
                port = db.query(MaPort).options(joinedload(MaPort.country)).filter(MaPort.port_id == new_port.port_id).first()
                logger.info("Port created successfully.")

            # Return response DTO
            return PortResponseDTO(
                port_id=port.port_id,
                country_id=port.country_id,
                name=port.name,
                status=port.status,
                country_name=port.country.name if port.country else None,
                vessel_fields=[
                    CustomFieldDTO(**field) for field in (port.vessel_fields or [])
                ] if isinstance(port.vessel_fields, list) else []
            )

        except HTTPException:
            raise
        except IntegrityError as ie:
            db.rollback()
            logger.error("Integrity error: %s", str(ie))
            raise HTTPException(
                status_code=400,
                detail="Database integrity error during Port operation."
            )
        except Exception as e:
            db.rollback()
            logger.exception("Unexpected error during Port operation.")
            raise HTTPException(
                status_code=500,
                detail=str(e)
            )         

    @staticmethod
    def get_port_list(request_dto: PortListRequestDTO, db: Session):
        """
        Fetch paginated list of ports with country name and vessel fields.
        Supports search by port name or country name.
        """
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size
        query_str = request_dto.query.strip() if request_dto.query else None

        # Start base query with join
        query = db.query(MaPort).join(MaCountry).options(joinedload(MaPort.country)).order_by(MaPort.name.asc())

        # Apply search filter if query_str provided
        if query_str:
            search_pattern = f"%{query_str}%"
            query = query.filter(
                or_(
                    MaPort.name.ilike(search_pattern),
                    MaCountry.name.ilike(search_pattern)
                )
            )

        total_count = query.count()
        ports = query.offset(offset).limit(request_dto.page_size).all()

        response_data = []
        for port in ports:
            vessel_fields = port.vessel_fields or []
            vessel_field_dtos = [
                CustomFieldDTO(**field) for field in vessel_fields
            ] if isinstance(vessel_fields, list) else []

            response_data.append(PortResponseDTO(
                port_id=port.port_id,
                country_id=port.country_id,
                name=port.name,
                status=port.status,
                country_name=port.country.name if port.country else None,
                vessel_fields=vessel_field_dtos
            ))

        return {
            "total_count": total_count,
            "data": response_data
        }
    
    @staticmethod
    def get_port_service_list(db: Session):
        return db.query(MaPortServiceType).options(
        joinedload(MaPortServiceType.sub_services),
        joinedload(MaPortServiceType.tariff_services)
        .joinedload(MaTariffService.columns)
    ).all()

    @staticmethod
    def get_ports_for_country(country_id: int, db: Session) -> List[PortResponseDTO]:
        ports = (
            db.query(MaPort)
            .join(MaCountry, MaPort.country_id == MaCountry.country_id)  # Join with MaCountry based on country_id
            .options(
                joinedload(MaPort.country)  # Eager load the country relationship
            )
            .filter(MaPort.country_id == country_id)  # Filter by the country_id you're interested in
            .order_by(MaPort.name.asc())  # Optionally order by port name
            .all()
        )
        if not ports:
            raise HTTPException(
            status_code=400,
            detail=f"No Ports found for selected country"
        )

        response_data = []
        for port in ports:
            vessel_fields = port.vessel_fields or []
            vessel_field_dtos = [
                CustomFieldDTO(**field) for field in vessel_fields
            ] if isinstance(vessel_fields, list) else []

            response_data.append(PortResponseDTO(
                port_id=port.port_id,
                country_id=port.country_id,
                name=port.name,
                status=port.status,
                country_name=port.country.name if port.country else None,
                vessel_fields=vessel_field_dtos
            ))

        return response_data

    @staticmethod
    def get_ports_by_country(country_id: int, db: Session) -> List[PortResponseDTO]:
        ports = (
            db.query(MaPort)
            .join(MaCountry)
            .join(MaPortTariffRule, MaPort.port_id == MaPortTariffRule.port_id)
            .options(joinedload(MaPort.country), joinedload(MaPort.tariff_rules) ) 
            .filter(MaPort.country_id == country_id,MaPortTariffRule.status == 'Y')
            .order_by(MaPort.name.asc())
            .all()
        )
        if not ports:
            raise HTTPException(
            status_code=400,
            detail=f"No active tariff rules found for ports in country_id"
        )

        response_data = []
        for port in ports:
            vessel_fields = port.vessel_fields or []
            vessel_field_dtos = [
                CustomFieldDTO(**field) for field in vessel_fields
            ] if isinstance(vessel_fields, list) else []

            response_data.append(PortResponseDTO(
                port_id=port.port_id,
                country_id=port.country_id,
                name=port.name,
                status=port.status,
                country_name=port.country.name if port.country else None,
                vessel_fields=vessel_field_dtos
            ))

        return response_data

    @staticmethod
    def get_port_info_by_id(port_id:int,db:Session):
        port_dtls = db.query(MaPort).filter(MaPort.port_id ==port_id).first()
        return port_dtls

    @staticmethod
    def get_all_port(db):
        return db.query(MaPort).join(
            MaPortTariffRule, MaPort.port_id == MaPortTariffRule.port_id
        ).distinct(MaPort.port_id).all()

         

