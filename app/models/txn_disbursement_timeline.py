from sqlalchemy import Column, Integer, String, DateTime, Text, JSON
from sqlalchemy.sql import func
from datetime import datetime
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnDisbursementTimeline(Base):
    __tablename__ = "txn_disbursement_timeline"
    __table_args__ = {'schema': SCHEMA_NAME}

    timeline_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    disbursement_id = Column(String, index=True, nullable=True)
    disbursement_seq = Column(Integer, nullable=True)
    request_id = Column(Integer, nullable=True)
    status = Column(String, nullable=False)
    action_by_role = Column(String, nullable=True)  # CLIENT, MERAKI, PORT_AGENT
    action_by_user = Column(String, nullable=True)
    message = Column(Text, nullable=True)
    details = Column(JSON, nullable=True)
    created_on = Column(DateTime, default=datetime.utcnow, nullable=False)
