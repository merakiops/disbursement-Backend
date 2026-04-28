# from api.dynamic_table_controller import CharStatusEnum
# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
# from sqlalchemy.orm import relationship
# from sqlalchemy.sql import func
# from app.db import Base 
# import os

# SCHEMA_NAME = os.getenv("DB_SCHEMA")
# class TxnTariffServiceColumn(Base):
#     __tablename__ = "txn_tariff_service_column"
#     __table_args__ = {'schema': SCHEMA_NAME}

#     column_id = Column(Integer, primary_key=True, index=True)
#     tariff_service_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_tariff_service.tariff_service_id"), nullable=False)
#     name = Column(String(100), nullable=False)
#     data_type = Column(String(50), nullable=False)
#     # is_mandatory = Column(String, nullable=True)
#     is_mandatory = Column(
#         SAEnum(CharStatusEnum, name="char_status_enum", create_type=False, native_enum=True),
#         nullable=True
#     )
#     created_on = Column(DateTime, default=func.now())
#     updated_on = Column(DateTime, default=func.now(), onupdate=func.now())
#     created_by = Column(String(50), nullable=True)
#     updated_by = Column(String(50), nullable=True)

#     # Relationship
#     tariff_service = relationship("MaTariffService", back_populates="columns",lazy="joined")
# app/models/tariff_service_column.py
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, Enum as SAEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db import Base
import os
from app.models.charstatusenum import CharStatusEnum
from app.config import Config

SCHEMA_NAME=Config.SCHEMA_NAME

# Changes made by --- Lakshmi

class TxnTariffServiceColumn(Base):
    __tablename__ = "txn_tariff_service_column"
    __table_args__ = {'schema': SCHEMA_NAME}

    column_id = Column(Integer, primary_key=True, index=True)
    tariff_service_id = Column(
        Integer, 
        ForeignKey(f"{SCHEMA_NAME}.ma_tariff_service.tariff_service_id"),
        nullable=False
    )
    name = Column(String(100), nullable=False)
    data_type = Column(String(50), nullable=False)
    is_mandatory = Column(
        SAEnum(CharStatusEnum, name="char_status_enum", schema=SCHEMA_NAME, create_type=False, native_enum=True),
        nullable=True
    )
    created_on = Column(DateTime, default=func.now())
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now())
    created_by = Column(String(50), nullable=True)
    updated_by = Column(String(50), nullable=True)
    status = Column(
        SAEnum(CharStatusEnum, name="char_status_enum", schema=SCHEMA_NAME, create_type=False, native_enum=True),
        nullable=True
    ) 

    tariff_service = relationship("MaTariffService", back_populates="columns", lazy="joined")

