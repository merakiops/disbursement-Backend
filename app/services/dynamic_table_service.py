
from typing import Dict
from app.services.dynamic_table_service_impl import dynamicTableServiceImpl
from sqlalchemy.orm import Session


dynamic_table_impl = dynamicTableServiceImpl()


class DynamicTableService:
    """Service class for dynamic table operations"""

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
        """
        return dynamic_table_impl.create_table_dynamically(
            service_name=service_name,
            fields=fields,
            username=username,
            db=db
        )
