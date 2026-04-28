
from sqlalchemy import Column, Integer, String,TIMESTAMP,Text,JSON
from sqlalchemy.ext.declarative import declarative_base
import os

Base = declarative_base()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class PDAPortagentHistory(Base):
    __tablename__ = 'txn_pda_portagent_history'
    __table_args__ = {'schema': SCHEMA_NAME}

    pda_portagent_history_id = Column(Integer, primary_key=True, autoincrement=True)
    disbursement_seq = Column(Integer, nullable=False)
    pda_id = Column(Integer, nullable=True)
    portagent_id = Column(Integer, nullable=True)
    bank_details = Column(JSON, nullable=True)
    address = Column(String(1000), nullable=True)
    data = Column(JSON, nullable=True)
    created_on = Column(TIMESTAMP, nullable=True)
    created_by = Column(String, nullable=True)