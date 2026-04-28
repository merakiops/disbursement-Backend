from sqlalchemy.orm import Session, joinedload
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError
from app.models.tariff_service import MaTariffService
from app.models.tariff_service_column import TxnTariffServiceColumn
import logging
from sqlalchemy import func, and_
from app.models.txn_tariff_service import create_txn_model
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError
from datetime import datetime
from sqlalchemy import Table, MetaData, select, and_, func
from app.config import Config

SCHEMA_NAME=Config.SCHEMA_NAME

logger = logging.getLogger("app_logger")


def get_related_name(obj, attr: str) -> str:
    """Helper to get related object's `name` attribute."""
    try:
        related_obj = getattr(obj, attr, None)
        return getattr(related_obj, "name", None) if related_obj else None
    except Exception as e:
        logger.warning(f"Failed to get related name for {attr}: {e}")
        return None


def duplicate_check(tariff_service_id: int, payload: dict, db: Session) -> dict:
    """
    Dynamically builds a filter_dict using fields defined in TxnTariffServiceColumn.
    Ensures the request payload contains all configured fields for duplicate check.
    """
    columns = db.query(TxnTariffServiceColumn).filter(
        TxnTariffServiceColumn.tariff_service_id == tariff_service_id
    ).all()

    filter_dict = {}
    for col in columns:
        field_name = col.name.strip().lower().replace(" ", "_")
        if field_name in payload:
            value = payload[field_name]
            if isinstance(value, str):
                value = value.lower()
            filter_dict[field_name] = value
        else:
            raise HTTPException(status_code=400, detail=f"Missing duplicate key field: {field_name}")

    return filter_dict


class TariffServiceRepository:

    # @staticmethod
    # def create_or_update(service_name: str, payload: dict, username: str, db: Session) -> dict:
    #     """
    #     Creates or updates a record for a given tariff service based on dynamic duplicate-check rules.
    #     """
    #     print("payloaddddddd", payload)
    #     # model_class = SERVICE_MODEL_MAP.get(service_name.lower())
    #     # if not model_class:
    #     #     raise HTTPException(status_code=400, detail=f"Unsupported service: {service_name}")

    #     normalized_input = service_name.lower().replace("_", "")
    #     tariff_service = db.query(MaTariffService).filter(
    #         func.replace(func.lower(MaTariffService.name), " ", "") == normalized_input
    #     ).first()
    #     print("tariff_serviceeeeeee", tariff_service, normalized_input)

    #     if not tariff_service:
    #         raise HTTPException(status_code=404, detail="Tariff service not found")

    #     payload["tariff_service_id"] = tariff_service.tariff_service_id
    #     seq = payload.get("seq")
    #     obj = None

    #     try:
    #         #Duplicate Check
    #         filter_dict = duplicate_check(tariff_service.tariff_service_id, payload, db)
    #         filters = [
    #             func.lower(getattr(model_class, key)) == val if isinstance(val, str)
    #             else getattr(model_class, key) == val
    #             for key, val in filter_dict.items()
    #         ]

    #         if seq:
    #             # Updating an existing record
    #             obj = db.query(model_class).options(
    #                 joinedload(getattr(model_class, "country_obj")),
    #                 joinedload(getattr(model_class, "port_obj")),
    #                 joinedload(getattr(model_class, "tariff_service")),
    #             ).filter(model_class.seq == seq).first()

    #             if not obj:
    #                 raise HTTPException(status_code=404, detail=f"{service_name.capitalize()} entry not found.")
    #             # Prevent update that causes duplication
    #             duplicate = db.query(model_class).filter(and_(*filters)).filter(model_class.seq != seq).first()
    #             if duplicate:
    #                 raise HTTPException(status_code=400, detail=f"{service_name.capitalize()} with same data already exists.")
    #             # Apply payload values to the object
    #             for key, value in payload.items():
    #                 if hasattr(obj, key):
    #                     setattr(obj, key, value)

    #             obj.updated_by = username

    #         else:
    #             # Creating a new record
    #             duplicate = db.query(model_class).filter(and_(*filters)).first()
    #             if duplicate:
    #                 raise HTTPException(status_code=400, detail=f"{service_name.capitalize()} entry already exists.")

    #             obj = model_class(**payload, created_by=username)
    #             db.add(obj)

    #         db.commit()
    #         db.refresh(obj)
    #         # Prepare response dictionary
    #         response = {
    #             col.name: getattr(obj, col.name)
    #             for col in model_class.__table__.columns
    #         }

    #         response["country_name"] = get_related_name(obj, "country_obj")
    #         response["port_name"] = get_related_name(obj, "port_obj")
    #         response["tariff_service_name"] = get_related_name(obj, "tariff_service")

    #         operation = "Updated" if seq else "Created"
    #         response["message"] = f"{service_name.capitalize()} {operation} Successfully"
    #         return response

    #     except HTTPException:
    #         raise
    #     except IntegrityError as e:
    #         db.rollback()
    #         logger.error(f"IntegrityError while creating/updating {service_name}: {e}")
    #         raise HTTPException(status_code=400, detail=str(e.orig))
    #     except Exception as e:
    #         db.rollback()
    #         logger.exception("Error in create_or_update")
    #         raise HTTPException(status_code=500, detail=str(e))

#   class TariffServiceRepository:


# methdod to create and update and get tariff service entry ---Lakshmi

    @staticmethod
    def create_or_update(service_name: str, payload: dict, username: str, db: Session) -> dict:

        normalized_input = service_name.lower().replace("_", "")
        tariff_service = db.query(MaTariffService).filter(
            func.replace(func.lower(MaTariffService.name), " ", "") == normalized_input
        ).first()

        if not tariff_service:
            raise HTTPException(404, "Tariff service not found")

        table_name = f"txn_{service_name}"
        metadata = MetaData()
        metadata.reflect(bind=db.bind, schema=SCHEMA_NAME)

        full_table_name = f"{SCHEMA_NAME}.{table_name}"
        if full_table_name not in metadata.tables:
            raise HTTPException(404, f"Dynamic table {table_name} not found")

        table: Table = metadata.tables[full_table_name]

        payload["tariff_service_id"] = tariff_service.tariff_service_id
        seq = payload.get("seq")

        try:
            duplicate_filters = [
                table.c[k] == v
                for k, v in payload.items()
                if k in table.c and k not in ("seq", "created_by", "updated_by")
            ]

            if seq:
                exists = db.execute(select(table).where(table.c.seq == seq)).first()
                if not exists:
                    raise HTTPException(404, "Entry not found")

                dup = db.execute(
                    select(table).where(and_(*duplicate_filters), table.c.seq != seq)
                ).first()
                if dup:
                    raise HTTPException(400, "Duplicate entry exists")
                payload.pop("seq", None)
                db.execute(
                    table.update()
                    .where(table.c.seq == seq)
                    .values(**payload, updated_by=username)
                )

            else:
                dup = db.execute(select(table).where(and_(*duplicate_filters))).first()
                if dup:
                    raise HTTPException(400, "Duplicate entry exists")

                payload["created_by"] = username
                payload.pop("seq", None)
                payload["created_on"]=datetime.now()
                db.execute(table.insert().values(**payload))

            db.commit()
            return {"message": "Updated Successfully" if seq else "Created Successfully", "data": payload}

        except IntegrityError as e:
            db.rollback()
            raise HTTPException(400, str(e.orig))
        except Exception as e:
            db.rollback()
            raise HTTPException(500, str(e))


    @staticmethod
    def get_all(service_name: str, db: Session) -> list:
        model_class = create_txn_model(service_name.lower())
        if not model_class:
            raise HTTPException(400, f"Unsupported service: {service_name}")

        query = db.query(model_class)
        if hasattr(model_class, "country_obj"):
            query = query.options(joinedload(model_class.country_obj))
        if hasattr(model_class, "port_obj"):
            query = query.options(joinedload(model_class.port_obj))
        if hasattr(model_class, "tariff_service"):
            query = query.options(joinedload(model_class.tariff_service))

        results = query.order_by(model_class.seq.asc()).all()

        response = []
        for obj in results:
            row = {col.name: getattr(obj, col.name) for col in model_class.__table__.columns}
            row["country_name"] = get_related_name(obj, "country_obj")
            row["port_name"] = get_related_name(obj, "port_obj")
            row["tariff_service_name"] = get_related_name(obj, "tariff_service")
            response.append(row)
        print("666666666", response)

        return response


   
        



