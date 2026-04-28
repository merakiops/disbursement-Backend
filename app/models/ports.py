"""
Author: Nitesh
Description: Defines SQLAlchemy ORM model for `Port`
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey,JSON,func
# from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import os
from app.models.country import MaCountry  # adjust import as per your structure
from sqlalchemy.ext.declarative import declarative_base
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaPort(Base):
    __tablename__ = "ma_port"
    __table_args__ = {'schema': SCHEMA_NAME}

    port_id = Column(Integer, primary_key=True, index=True)
    country_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_country.country_id"), nullable=False)
    name = Column(String, unique=True, nullable=False)
    created_on = Column(DateTime, default=func.now(), nullable=False)
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    created_by = Column(String, nullable=True)
    updated_by = Column(String, nullable=True)
    status = Column(String, nullable=True)
    vessel_fields = Column(JSON, nullable=True)

    # Relationship to country
    country = relationship("MaCountry", backref="ports")
    tariff_rules = relationship("MaPortTariffRule", back_populates="port")
