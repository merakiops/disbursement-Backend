from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON,Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from sqlalchemy.orm import relationship

SCHEMA_NAME = os.getenv("DB_SCHEMA")
import _json
class TxnCommunicationHistory(Base):
    __tablename__ = "txn_communication_history"
    __table_args__ = {'schema': SCHEMA_NAME}

    comm_history_id = Column(Integer, primary_key=True)
    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), nullable=False)
    display_message = Column(Text, nullable=True)
    pda_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_pda.pda_id"), nullable=True)
    fda_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_fda.fda_id"), nullable=True)
    port_agent_resp_data = Column(JSON)
    email_to = Column(String)
    email_cc = Column(String)
    created_on = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String)
    meraki_resp_data = Column(JSON, nullable=True) 
    source_type =Column(Text, nullable=True)                                                                                       
    message =Column(Text, nullable=True)
    modified_data = Column(JSON, nullable=True)
    flag = Column(String, nullable=True)
