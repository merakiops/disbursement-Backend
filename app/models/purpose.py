"""
Author: Nitesh
Description: Defines SQLAlchemy ORM model for `Purpose`
"""

from sqlalchemy import Column, Integer, String, DateTime,ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
import os

Base = declarative_base()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaPurpose(Base):
    __tablename__ = "ma_purpose"
    __table_args__ = {'schema': SCHEMA_NAME}

    purpose_id = Column(Integer, primary_key=True, index=True)
    name = Column(String,unique=True, nullable=False)
    created_on = Column(DateTime, default=func.now(), nullable=False)
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    created_by = Column(String, nullable=True)
    updated_by = Column(String, nullable=True)
    status = Column(String, nullable=True,default='Y')