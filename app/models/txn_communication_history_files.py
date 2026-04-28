from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.db import Base
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnCommunicationHistoryFiles(Base):
    __tablename__ = "txn_communication_history_files"
    __table_args__ = {'schema': SCHEMA_NAME}

    comm_history_file_id = Column(Integer, primary_key=True, autoincrement=True)
    comm_history_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_communication_history.comm_history_id"), nullable=False)
    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), nullable=False)
    file_id = Column(Integer, nullable=False)
    created_on = Column(DateTime, nullable=False, default=func.now())
    created_by = Column(String, nullable=False)