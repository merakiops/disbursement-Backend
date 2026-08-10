from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.mutable import MutableList
from sqlalchemy.sql import func
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnClientDisbursementRequest(Base):
    __tablename__ = "txn_client_disbursement_request"
    __table_args__ = {'schema': SCHEMA_NAME}

    request_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    disbursement_id = Column(String, index=True, nullable=True)
    country_id = Column(Integer, nullable=True)
    client_id = Column(Integer, nullable=True)
    vessel_id = Column(Integer, nullable=True)
    port_id = Column(Integer, nullable=True)
    cargo_id = Column(Integer, nullable=True)
    draft = Column(String, nullable=True)
    imo_number = Column(String, nullable=True)
    vessel = Column(String, nullable=True)
    nrt = Column(Float, nullable=True)
    grt = Column(Float, nullable=True)
    rgrt = Column(Float, nullable=True)
    loa = Column(Float, nullable=True)
    beam = Column(Float, nullable=True)
    depth = Column(Float, nullable=True)
    dwt = Column(Float, nullable=True)
    type = Column(String, nullable=True)
    eta = Column(DateTime, nullable=True)
    etd = Column(DateTime, nullable=True)
    vessel_stay = Column(Integer, nullable=True)
    voyage = Column(String, nullable=True)
    pda_roe = Column(Float, nullable=True)
    pda_currency_from = Column(String, nullable=True)
    pda_currency_to = Column(String, nullable=True)
    invoice_ref_no = Column(String, nullable=True)
    port_agents = Column("port_agents", MutableList.as_mutable(JSONB), nullable=True)
    status = Column(String, default="PENDING", nullable=False)
    created_on = Column("created_on", DateTime, nullable=False, default=func.now())
    updated_on = Column("updated_on", DateTime, nullable=False, default=func.now(), onupdate=func.now())
    created_by = Column("created_by", String, index=True, nullable=True)
    updated_by = Column("updated_by", String, index=True, nullable=True)
