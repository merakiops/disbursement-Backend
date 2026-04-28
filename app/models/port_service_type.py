from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db import Base 
import os




SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaPortServiceType(Base):
    __tablename__ = "ma_port_service_type"
    __table_args__ = {'schema': SCHEMA_NAME}

    service_id = Column(Integer, primary_key=True, index=True)
    code = Column(String(50), nullable=False, unique=True)
    name = Column(String(100), nullable=False)
    status = Column(String(1), default="Y")
    created_on = Column(DateTime, default=func.now())
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now())
    created_by = Column(String(50), nullable=True)
    updated_by = Column(String(50), nullable=True)

    # Relationships
    sub_services = relationship("MaPortSubServiceType", back_populates="service",lazy="joined")
    tariff_services = relationship("MaTariffService", back_populates="service",lazy="joined")
