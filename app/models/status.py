"""
Author: Punith
Description: This module defines the SQLAlchemy ORM model for handling JSON Template
             in the system. 
"""
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import TIMESTAMP
import os
from app.db import Base
SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaStatus(Base):
    """
    Represents the OTP (One-Time Password) login table for user authentication.
    Stores OTPs with associated user information, timestamps, and statuses.
    """
    __tablename__ = "ma_status"
    __table_args__ = {'schema': SCHEMA_NAME}

    status_id = Column(Integer, primary_key=True, index=True)
    status_name = Column(Integer, primary_key=True, index=True)
    created_on = Column(DateTime, default=func.now(), nullable=False)
    created_by = Column(String, nullable=True)
