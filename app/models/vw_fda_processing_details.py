from sqlalchemy import Column, Integer, String, DateTime, Float
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class VwFdaProcessingDetails(Base):
    
    __tablename__ = "vw_dashboard_data"
    __table_args__ = {'schema': SCHEMA_NAME}

    
    disbursement_seq = Column(Integer, primary_key=True)
    client_id = Column(Integer, nullable=False)
    etd = Column(DateTime)
    vessel_name = Column(String)
    country_id = Column(Integer)
    country_name = Column(String)
    port_id = Column(Integer)
    port_name = Column(String)
    loa = Column(Float)
    grt = Column(Float)
    rgrt = Column(Float)
    nrt = Column(Float)
    fda_amount = Column(Float)
    pda_amount = Column(Float)
    manual_pda_amount =Column(String)
    manual_fda_amount =Column(String)
    