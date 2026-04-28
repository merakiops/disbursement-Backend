
from typing import Dict
from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.repo.dynamic_table_repo import DynamicTableRepository
from app.models.charstatusenum import CharStatusEnum
from app.core.service_dto_map import normalize_service_name


class dynamicTableServiceImpl:
    """Service implementation for dynamic table operations"""

    def __init__(self):
        self.repo = DynamicTableRepository()

    def create_table_dynamically(
        self,
        service_name: str,
        fields: list,
        username: str,
        db: Session
    ) -> Dict:
        """
        Create a dynamic tariff table with the given specifications.

        Args:
            service_name: Name of the tariff service
            fields: List of column definitions
            username: User creating the table
            db: Database session

        Returns:
            Dictionary with success message

        Raises:
            HTTPException: If service already exists or operation fails
        """
        try:
            # --- 1. Check for duplicate service ---
            if self.repo.check_duplicate_service(service_name, db):
                raise HTTPException(
                    status_code=400,
                    detail="Service already exists"
                )

            # --- 2. Create Service Type ---
            # port_service_type = self.repo.create_port_service_type(
            #     service_name=service_name,
            #     username=username,
            #     status=CharStatusEnum.Y,
            #     db=db
            # )

            # --- 3. Create Tariff Service Master ---
            tariff_service = self.repo.create_tariff_service(
                service_name=service_name,
                # service_id=port_service_type.service_id or 0,
                username=username,
                status=CharStatusEnum.Y,
                db=db
            )

            # --- 4. Detect COUNTRY / PORT columns ---
            has_country = any(
                col.name.strip().lower() == "country" for col in fields
            )
            has_port = any(
                col.name.strip().lower() == "port" for col in fields
            )

            # --- 5. Auto-add COUNTRY if PORT exists but no COUNTRY ---
            if has_port and not has_country:
                self._add_country_column(
                    tariff_service_id=tariff_service.tariff_service_id,
                    username=username,
                    db=db
                )
                # Add country to fields list
                fields.insert(0, self._create_country_field())

            # --- 6. Save Column Metadata ---
            self._create_column_metadata(
                tariff_service_id=tariff_service.tariff_service_id,
                fields=fields,
                username=username,
                db=db
            )

            # --- 7. Call  function to create the dynamic table ---
            result = self.repo.create_dynamic_table_via_function(
                tariff_service_id=tariff_service.tariff_service_id,
                username=username,
                service_name=service_name,
                db=db
            )

            # --- 8. Commit all changes ---
            self.repo.commit_transaction(db)

            return {
                "message": result.get("message")
            }

        except HTTPException:
            self.repo.rollback_transaction(db)
            raise
        except Exception as e:
            self.repo.rollback_transaction(db)
            raise HTTPException(
                status_code=500,
                detail=str(e)
            )

    def _add_country_column(
        self,
        tariff_service_id: int,
        username: str,
        db: Session
    ) -> None:
        """Add country column to the tariff service"""
        self.repo.create_tariff_service_column(
            tariff_service_id=tariff_service_id,
            column_name="country",
            data_type="int",
            is_mandatory=CharStatusEnum.Y,
            username=username,
            status=CharStatusEnum.Y,
            db=db
        )

    def _create_column_metadata(
        self,
        tariff_service_id: int,
        fields: list,
        username: str,
        db: Session
    ) -> None:
        """Create metadata for all columns"""
        for col in fields:
            col_name = col.name.strip().lower()

            # Ensure country/port are always INT
            if col_name in ("country", "port"):
                col.data_type = "int"

            self.repo.create_tariff_service_column(
                tariff_service_id=tariff_service_id,
                column_name=normalize_service_name(col.name),
                data_type=col.data_type,
                is_mandatory=CharStatusEnum.Y if not col.nullable else CharStatusEnum.N,
                username=username,
                status=CharStatusEnum.Y,
                db=db
            )

        db.flush()  # Persist all columns before calling stored procedure

    @staticmethod
    def _create_country_field():
        """Create a country column definition object"""
        class CountryField:
            def __init__(self):
                self.name = "country"
                self.data_type = "int"
                self.nullable = False

        return CountryField()
