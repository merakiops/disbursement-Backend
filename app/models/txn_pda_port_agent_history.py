from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from sqlalchemy.orm import relationship

SCHEMA_NAME = os.getenv("DB_SCHEMA")
import _json
class PDAPortAgentHistory(Base):
    __tablename__ = "txn_pda_portagent_history"
    __table_args__ = {'schema': SCHEMA_NAME}

    pda_portagent_history_id = Column(Integer, primary_key=True)
    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), nullable=False)
    pda_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_pda.pda_id"), nullable=False)
    portagent_id = Column(Integer, nullable=True)  
    bank_details = Column(JSON)
    address = Column(String)
    data = Column(JSON)
    created_on = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String)
