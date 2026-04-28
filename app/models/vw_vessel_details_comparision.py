from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import JSONB
from app.db import Base
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class VesselDetailsComparison(Base):
    __tablename__ = 'vw_vessel_details_comparison'
    __table_args__ = {'schema': SCHEMA_NAME}

    pda_vsl_id = Column(Integer, primary_key=True)
    vessel_id = Column(Integer)
    vessel_imo = Column(String)
    vessel_name = Column(String)

    grt = Column(JSONB)
    rgrt = Column(JSONB)
    nrt = Column(JSONB)
    loa = Column(JSONB)
    beam = Column(JSONB)
    depth = Column(JSONB)
    dwt = Column(JSONB)
    type = Column(JSONB)
    additional_property = Column(JSONB)