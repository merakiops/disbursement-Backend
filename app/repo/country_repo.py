from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status
from app.models.country import MaCountry
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO, CountryListRequestDTO
import logging
from typing import List
from sqlalchemy import distinct
from app.models.port_tariff_rule import MaPortTariffRule


logger = logging.getLogger("app_logger")


class CountryRepository:
    """
    Repository for creating or updating a country.
    - If a country with the same name exists, update it if `country_id` matches.
    - If it doesn't exist, create a new one.
    """

    @staticmethod
    def create_or_update_country(country_data: CountryCreateUpdateDTO, username: str, db: Session) -> MaCountry:
        try:
            duplicate = None
            currency = None
            country_name = None

            if country_data.currency:
                currency = country_data.currency.strip().upper()

            if country_data.name:
                country_name = country_data.name.strip()

            if country_data.country_id:
                logger.info("Attempting to update country with ID: %s", country_data.country_id)
                country = db.query(MaCountry).filter(MaCountry.country_id == country_data.country_id).first()

                if country_data.name:
                    duplicate = db.query(MaCountry).filter(MaCountry.name.ilike(country_name),MaCountry.country_id != country_data.country_id).first()

                if not country:
                    logger.warning("Country with ID %s not found.", country_data.country_id)
                    raise HTTPException(
                        status_code=status.HTTP_404_NOT_FOUND,
                        detail="Country not found with the given ID."
                    )

                if duplicate:
                    logger.warning("Duplicate country name '%s' found during update.", country_name)
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="Another country with this name already exists."
                    )

                country.name = country_name or country.name
                country.currency = currency or country.currency if currency or country.currency else None
                country.status = country_data.status or "Y"
                country.updated_by = username

                db.commit()
                db.refresh(country)

                logger.info("Successfully updated country ID: %s", country.country_id)
                return country

            else:
                logger.info("Creating a new country: %s", country_name)
                duplicate = db.query(MaCountry).filter(MaCountry.name.ilike(country_data.name.strip())).first()

                if duplicate:
                    logger.warning("Country creation failed - duplicate name found: %s", country_data.name)
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="Another country with this name already exists."
                    )

                new_country = MaCountry(
                    name=country_name,
                    currency=currency if currency else None,
                    status=country_data.status or "Y",
                    created_by=username,
                )
                db.add(new_country)
                db.commit()
                db.refresh(new_country)

                logger.info("Country created successfully with ID: %s", new_country.country_id)
                return new_country

        except HTTPException:
            raise  
        except IntegrityError as ie:
            db.rollback()
            logger.error("Integrity error: %s", str(ie))
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Database integrity error during country operation."
            )
        except Exception as e:
            db.rollback()
            logger.exception("Unexpected error during country operation.")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Unexpected error during country operation."
            )

    @staticmethod
    def get_all_countries(db: Session) -> List[MaCountry]:
        try:
            logger.info("Fetching all countries")
            countries = db.query(MaCountry).order_by(MaCountry.name.asc()).all()
            logger.info("Fetched %d countries", len(countries))
            return countries
        except Exception as e:
            logger.exception("Error fetching countries")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error fetching countries from the database."
            )
    
    @staticmethod
    def get_country_list(request_dto:CountryListRequestDTO,db: Session ):
        """
        Fetch paginated list of countries for given company_id.
        Supports filtering with query string across multiple fields.
        Returns a dict: { 'total_count': int, 'data': list }
        """        

        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")
        offset = (request_dto.page - 1) * request_dto.page_size
        print(f"Fetching vessels for  query='{request_dto.query}', offset={offset}, limit={request_dto.page_size}")

        # Base query with mandatory filters
        base_query = (db.query(MaCountry).order_by(MaCountry.name.asc()))

        # Dynamic search on all useful fields
        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(
                (MaCountry.name.ilike(search_pattern)) |
                (MaCountry.currency.ilike(search_pattern))                
            
            )

        # Get total count first
        total_count = base_query.count()

        # Apply pagination
        countries = base_query.offset(offset).limit(request_dto.page_size).all()

        # Return as dictionary
        return {
            "total_count": total_count,
            "data": countries
        }

    @staticmethod
    def get_country_info_by_id(country_id:int,db:Session):
        country_dtls = db.query(MaCountry).filter(MaCountry.country_id == country_id).first()
        return country_dtls

    @staticmethod
    def get_all_countries_in_rule(db: Session) -> List[MaCountry]:
        try:
            logger.info("Fetching all countries with port tariff rules")
            countries = db.query(MaCountry).join(
                MaPortTariffRule, MaCountry.country_id == MaPortTariffRule.country_id
            ).distinct().order_by(MaCountry.name.asc()).all()
            logger.info("Fetched %d countries", len(countries))
            return countries
        except Exception as e:
            logger.exception("Error fetching countries")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error fetching countries from the database."
            )
            