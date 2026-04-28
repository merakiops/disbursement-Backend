from sqlalchemy import Column, Integer, String, DateTime, Text, Date,Float
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class DisbursementTracker(Base):
    
    __tablename__ = "vw_disbursement_tracker"
    __table_args__ = {'schema': SCHEMA_NAME}

    disbursement_seq=Column(Integer,primary_key=True)
    disbursement_id = Column(String, unique=True)
    pic = Column(String(50))
    client_name = Column(String(255))
    vessel_name = Column(String(50))
    port_agent = Column(String(255))
    port = Column(String(50))
    country =Column(String(70))
    voyage = Column(String)
    eta = Column(DateTime, nullable=True)
    etd = Column(DateTime, nullable=True)
    status = Column(String)
    status_background_color= Column(String)
    status_text_color = Column(String)
    due_date = Column(Date)
    due_days = Column(Integer)
    due_comment = Column(Text)
    due_flag = Column(Text)
    due_color=Column(String)
    pda_state=Column(String)
    fda_state=Column(String)
    pda_id=Column(Integer)
    fda_id=Column(Integer)
    final_status=Column(String)
    purpose=Column(String)
    pda_savings=Column(Float)
    fda_savings=Column(Float)
    fda_amount=Column(Float)
    pda_amount=Column(Float)
    pda_status=Column(String)
    fda_status=Column(String)
    pda_status_text_color=Column(String)
    pda_status_background_color=Column(String)
    fda_status_text_color=Column(String)
    fda_status_background_color=Column(String)
    final_status_background_color=Column(String)
    final_status_text_color=Column(String)
    manual_pda_amount=Column(String)
    manual_fda_amount=Column(String)
    loss_prevented_reason=Column(String)



