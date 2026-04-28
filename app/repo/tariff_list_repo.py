from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.models.tariff_service import MaTariffService
from app.models.tariff_service_column import TxnTariffServiceColumn
from app.dto.tariff_service_detail_dto import TariffServiceDetailDTO, TariffFieldDTO
from typing import List

class TariffRepository:

    @staticmethod
    def get_tariff_service_details(db: Session) -> List[TariffServiceDetailDTO]:
        services = db.query(MaTariffService).order_by(MaTariffService.tariff_service_id.asc()).all()

        if not services:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No tariff services found.")

        result = []

        for service in services:
            columns = (
                db.query(TxnTariffServiceColumn)
                .filter(TxnTariffServiceColumn.tariff_service_id == service.tariff_service_id).order_by(TxnTariffServiceColumn.column_id.asc())
                .all()
            )

            result.append(
                TariffServiceDetailDTO(
                    service_id=service.tariff_service_id,
                    service_name=service.name,
                    fields=[
                        TariffFieldDTO(
                            field_name=col.name,
                            data_type=col.data_type,
                            is_mandatory=col.is_mandatory or "N"
                        ) for col in columns
                    ]
                )
            )

        return result
