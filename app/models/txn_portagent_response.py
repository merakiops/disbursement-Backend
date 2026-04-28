from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from sqlalchemy.orm import relationship

SCHEMA_NAME = os.getenv("DB_SCHEMA")
import _json
class TxnPortAgentResponse(Base):
    __tablename__ = "txn_portagent_response"
    __table_args__ = {'schema': SCHEMA_NAME}

    portagent_resp_id = Column(Integer, primary_key=True)
    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), nullable=False)
    pda_id = Column(Integer)
    data = Column(JSON)
    created_on = Column(DateTime, default=datetime.utcnow)
    updated_on = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_by = Column(String)
    updated_by = Column(String)
    bank_details = Column(JSON)
    address = Column(String)
