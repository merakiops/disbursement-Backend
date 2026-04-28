"""
Author: Punith
Description: This module defines the SQLAlchemy ORM model for handling JSON Template
             in the system. 
"""
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import TIMESTAMP
import os
from app.models.vessels import MaVessel
from sqlalchemy.ext.mutable import MutableDict
from sqlalchemy.orm import relationship
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class PdaVesselDetails(Base):
    
    __tablename__ = "txn_pda_vessel_details"
    __table_args__ = {'schema': SCHEMA_NAME}

    pda_vsl_id = Column("pda_vsl_id", Integer, primary_key=True, autoincrement=True, index=True)
    ma_vsl_id = Column(Integer,ForeignKey(MaVessel.vessel_id),nullable=False)
    vsl_dtls = Column(MutableDict.as_mutable(JSON))
    fda_vsl_dtls= Column(MutableDict.as_mutable(JSON))
    
    disbursements = relationship("TxnDisbursement", back_populates="pda_vessel_details")