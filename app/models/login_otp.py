"""
Author: Punith
Description: This module defines the SQLAlchemy ORM model for handling One-Time Password (OTP) authentication 
             in the system. It stores OTPs issued to users, their UUIDs, timestamps, and statuses.
"""
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import TIMESTAMP
import os

Base = declarative_base()
SCHEMA_NAME = os.getenv("DB_SCHEMA")

class LoginOtp(Base):
    """
    Represents the OTP (One-Time Password) login table for user authentication.
    Stores OTPs with associated user information, timestamps, and statuses.
    """
    __tablename__ = "txn_login_otp"
    __table_args__ = {'schema': SCHEMA_NAME}

    userid = Column("user_id", Integer, unique=True, index=True, primary_key=True)
    otp = Column("otp", Integer, index=True)
    generated_at = Column("generated_at", DateTime, nullable=False, default=func.now())  # Use DateTime here too
    expires_at = Column("expires_at", TIMESTAMP(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())    
    uuid = Column("uuid", String, nullable=False)  # Use DateTime for token expiry

