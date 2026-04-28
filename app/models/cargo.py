"""
Author: Nitesh
Description: Defines SQLAlchemy ORM model for `Cargo
"""


from sqlalchemy import Column, Integer, String, DateTime,ForeignKey,TIMESTAMP
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
import os

Base = declarative_base()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaCargo(Base):
    __tablename__ = "ma_cargo"
    __table_args__ = {'schema': SCHEMA_NAME}

    cargo_id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String(100), nullable=False)
    created_on = Column(TIMESTAMP, default=func.now(), nullable=False)
    updated_on = Column(TIMESTAMP, default=func.now(), onupdate=func.now(), nullable=False)
    created_by = Column(String(30), nullable=True)
    updated_by = Column(String(30), nullable=True)
    status = Column(String(10), default="Y", nullable=False)
