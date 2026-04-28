from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from sqlalchemy.orm import relationship
from sqlalchemy import TIMESTAMP

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnPAFormOTP(Base):
    __tablename__ = "txn_pa_form_otp"
    __table_args__ = {'schema': SCHEMA_NAME}

    
    disbursement_seq = Column(Integer,ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"),nullable=False, primary_key=True)
    email = Column(String)
    otp = Column(Integer)
    generated_at = Column("generated_at", DateTime, nullable=False, default=func.now())  # Use DateTime here too
    expires_at = Column("expires_at", TIMESTAMP(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())    
    uuid = Column("uuid", String, nullable=False)  # Use DateTime for token expiry
    status = Column(String)
