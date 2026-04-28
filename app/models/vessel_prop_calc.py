from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
import os
from app.db import Base


SCHEMA_NAME = os.getenv("DB_SCHEMA")
class MaVslPropCalc(Base):
    """
    Represents the `ma_vsl_prop_calc` table, defining different vessel properties.
    """
    __tablename__ = "ma_vsl_prop_calc"
    __table_args__ = {'schema': SCHEMA_NAME}

    vsl_field_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    status = Column(String, nullable=False)
