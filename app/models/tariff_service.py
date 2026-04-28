from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db import Base 
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")


class MaTariffService(Base):
    __tablename__ = "ma_tariff_service"
    __table_args__ = {'schema': SCHEMA_NAME}

    tariff_service_id = Column(Integer, primary_key=True, index=True)
    service_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_port_service_type.service_id"), nullable=False)
    name = Column(String(100), nullable=False)
    status = Column(String(1), default="Y", nullable=True)
    created_on = Column(DateTime, default=func.now())
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now())
    created_by = Column(String(50), nullable=True)
    updated_by = Column(String(50), nullable=True)

    # Relationships
    service = relationship("MaPortServiceType", back_populates="tariff_services",lazy="joined")
    columns = relationship("TxnTariffServiceColumn", back_populates="tariff_service",lazy="joined")

