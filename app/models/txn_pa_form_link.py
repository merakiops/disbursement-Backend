from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime, timedelta
from app.db import Base
from sqlalchemy import TIMESTAMP
import os
from sqlalchemy.orm import relationship

SCHEMA_NAME = os.getenv("DB_SCHEMA")

expiry_value = os.getenv("REGISTRATION_LINK_EXPIRY", "1")
expiry_type = os.getenv("REGISTRATION_LINK_PERIOD_TYPE", "days")

try:
    expiry_value = int(expiry_value)
except ValueError:
    expiry_value = 1  # Fallback

if expiry_type.lower() == "minutes":
    expiry_delta = timedelta(minutes=expiry_value)
elif expiry_type.lower() == "hours":
    expiry_delta = timedelta(hours=expiry_value)
elif expiry_type.lower() == "days":
    expiry_delta = timedelta(days=expiry_value)
else:
    expiry_delta = timedelta(days=1)  # Fallback

def get_expiry_time():
    return datetime.now() + expiry_delta

class PAFormLink(Base):
    __tablename__ = "txn_pa_form_link"
    __table_args__ = {'schema': SCHEMA_NAME}

    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), primary_key=True)
    registration_link = Column(String)
    link_generation = Column("link_generated_on", TIMESTAMP, nullable=False, default=datetime.now)
    link_expiry = Column("link_expiry_on", TIMESTAMP, nullable=True)
    pda_token = Column(String)
    status = Column(String)
    email_to = Column(String)

    class Config:
        orm_mode = True

    