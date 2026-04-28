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

Base = declarative_base()
SCHEMA_NAME = os.getenv("DB_SCHEMA")

class JsonTemplate(Base):
    """
    Represents the OTP (One-Time Password) login table for user authentication.
    Stores OTPs with associated user information, timestamps, and statuses.
    """
    __tablename__ = "ma_json_template"
    __table_args__ = {'schema': SCHEMA_NAME}

    seq = Column( Integer, unique=True, index=True, primary_key=True)
    json_name = Column(String, index=True)
    json_value = Column(JSON, nullable=False)  
    
    model_config = {"from_attributes": True}
