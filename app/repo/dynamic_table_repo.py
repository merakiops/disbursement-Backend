from sqlalchemy.orm import Session
from sqlalchemy import text
from app.models.tariff_service import MaTariffService
from app.models.port_service_type import MaPortServiceType
from app.models.tariff_service_column import TxnTariffServiceColumn
from app.config import Config

SCHEMA_NAME=Config.SCHEMA_NAME

class DynamicTableRepository:
    """Repository for dynamic table operations"""

    @staticmethod
    def check_duplicate_service(service_name: str, db: Session) -> bool:
        """Check if service already exists"""
        existing_service = db.query(MaTariffService).filter(
            MaTariffService.name.ilike(service_name)
        ).first()
        return existing_service is not None

    @staticmethod
    def create_port_service_type(
        service_name: str,
        username: str,
        status,
        db: Session
    ) -> MaPortServiceType:
        """Create a new port service type"""
        port_service_type = MaPortServiceType(
            code=0,
            name=service_name,
            created_by=username,
            status=status
        )
        db.add(port_service_type)
        db.flush()
        return port_service_type

    @staticmethod
    def create_tariff_service(
        service_name: str,
        # service_id: int,
        username: str,
        status,
        db: Session
    ) -> MaTariffService:
        """Create a new tariff service master"""
        tariff_service = MaTariffService(
            name=service_name,
            # service_id=service_id or 0,
            created_by=username,
            status=status
        )
        db.add(tariff_service)
        db.flush()
        return tariff_service

    @staticmethod
    def create_tariff_service_column(
        tariff_service_id: int,
        column_name: str,
        data_type: str,
        is_mandatory,
        username: str,
        status,
        db: Session
    ) -> TxnTariffServiceColumn:
        """Create a tariff service column metadata"""
        column = TxnTariffServiceColumn(
            tariff_service_id=tariff_service_id,
            name=column_name,
            data_type=data_type.lower(),
            is_mandatory=is_mandatory,
            created_by=username,
            status=status
        )
        db.add(column)
        return column

    @staticmethod
    def create_dynamic_table_via_function(
        tariff_service_id: int,
        username: str,
        service_name: str,
        db: Session
    ) -> dict:
        """Call stored function to create the dynamic table and get status"""

        sql_string = f"""
            SELECT *
            FROM {SCHEMA_NAME}.fn_create_tariff_table(
            :tariff_service_id,
            :username,
            :service_name
        )
        """
        
        result = db.execute(
            text(sql_string),
            {
                "tariff_service_id": tariff_service_id,
                "username": username,
                "service_name": service_name
            }
        ).fetchone()


        return {"status": result.status, "message": result.message}

    @staticmethod
    def commit_transaction(db: Session) -> None:
        """Commit database transaction"""
        db.commit()

    @staticmethod
    def rollback_transaction(db: Session) -> None:
        """Rollback database transaction"""
        db.rollback()
