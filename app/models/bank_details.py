"""
Author: Punith
Description: This module defines the SQLAlchemy ORM model for handling JSON Template
             in the system. 
"""
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.db import Base
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class BankDetails(Base):
    """
    Represents the OTP (One-Time Password) login table for user authentication.
    Stores OTPs with associated user information, timestamps, and statuses.
    """
    __tablename__ = "ma_bank_details"
    __table_args__ = {'schema': SCHEMA_NAME}

    bank_details_id = Column( Integer, unique=True, index=True, primary_key=True,autoincrement=True)
    country_name = Column(String, index=True)
    beneficiary_acc_holder_name = Column(String, nullable=True)  
    bank_name = Column(String, nullable=True) 
    correspondent_account_number = Column(String, nullable=True) 
    current_account_number = Column(String, nullable=True) 
    ifsc_code = Column(String, nullable=True)
    bik_code = Column(String, nullable=True)
    swift_code = Column(String, nullable=True)
    currency  = Column(String,nullable=True)
    inn_code = Column(String,nullable=True)
    bic_code = Column(String,nullable=True)
    iban_number = Column(String,nullable=True)
    bic_code = Column(String,nullable=True)
    branch_address = Column(String,nullable=True)
    createdon = Column("created_on", DateTime, nullable=True, default=func.now())
    updatedon = Column("updated_on", DateTime, nullable=True, default=func.now(), onupdate=func.now())
    created_by = Column("created_by",String,index=True,nullable=False)
    updated_by = Column("updated_by",String,index=True,nullable=False)

    model_config = {"from_attributes": True}
