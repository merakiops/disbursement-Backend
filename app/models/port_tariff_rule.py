from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey,func,JSON
from sqlalchemy.orm import declarative_base
import datetime
from sqlalchemy.orm import relationship,foreign
import os
from app.db import Base
from app.models.ports import MaPort
from app.models.country import MaCountry

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaPortTariffRule(Base):
    __tablename__ = "ma_port_tariff_rule"
    __table_args__ = {'schema': SCHEMA_NAME}

    port_tariff_rule_id = Column(Integer, primary_key=True, index=True,autoincrement=True)
    port_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_port.port_id"), nullable=False)
    country_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_country.country_id"), nullable=False)
    rules = Column(JSON, nullable=False)  # assuming rules is JSON or long text
    status = Column(String(1), default='Y')
    created_on = Column(DateTime,nullable=False,default=func.now(), server_default=func.now())
    updated_on = Column(DateTime, nullable=False, onupdate=func.now())
    created_by = Column(String(100))
    updated_by = Column(String(100))

    port = relationship(MaPort, primaryjoin= foreign(port_id) == MaPort.port_id,lazy="joined", back_populates="tariff_rules")
    country  = relationship(MaCountry,primaryjoin= foreign(country_id) == MaCountry.country_id,lazy="joined")
