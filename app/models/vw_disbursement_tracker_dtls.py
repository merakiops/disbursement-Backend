from sqlalchemy import Column, Integer, String, Float, DateTime
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class DisbursementTrackerDetails(Base):
    __tablename__ = "vw_disbursement_tracker_details"
    __table_args__ = {'schema': SCHEMA_NAME}

    disbursement_seq = Column(Integer, primary_key=True)
    disbursement_id = Column(String, nullable=True)

    pic = Column(String, nullable=True)
    client_name = Column(String, nullable=True)
    port_agent_name = Column(String, nullable=True)
    ops_pic = Column(String, nullable=True)

    agency_nomination_date = Column(DateTime, nullable=True)
    invoice_number = Column(String, nullable=True)

    pda_id = Column(Integer, nullable=True)
    pda_received_ops_agent = Column(String, nullable=True)
    pda_processing_date = Column(DateTime, nullable=True)
    pda_status = Column(String, nullable=True)
    pda_state = Column(String, nullable=True)
    portagent_pda_amount = Column(Float, nullable=True)
    pda_remittance = Column(String, nullable=True)
    pda_remark = Column(String, nullable=True)

    fda_id = Column(Integer, nullable=True)
    fda_received_ops_agent = Column(String, nullable=True)
    fda_processing_date = Column(DateTime, nullable=True)
    portagent_fda_amount = Column(Float, nullable=True)
    fda_status = Column(String, nullable=True)
    fda_state = Column(String, nullable=True)
    fda_remark = Column(String, nullable=True)

    days_outstanding = Column(Integer, nullable=True)
    vessel_name = Column(String, nullable=True)
    voyage = Column(String, nullable=True)
    port = Column(String, nullable=True)
    country = Column(String, nullable=True)
    purpose = Column(String, nullable=True)
    cargo = Column(String, nullable=True)
    eta = Column(DateTime, nullable=True)
    etd = Column(DateTime, nullable=True)

    sm_estimated_amount = Column(Float, nullable=True)
    sm_detailed_entry = Column(String(10), nullable=True)  # 'Y' or 'N'
    sm_ws_chart_ac = Column(String(10), nullable=True)
    owners_item_rejected = Column(String(10), nullable=True)
    towage_agency_agrement = Column(String(10), nullable=True)

    roe_agent = Column(Float, nullable=True)
    roe_actual_oanda = Column(Float, nullable=True)
    roe_loss = Column(Float, nullable=True)

    loss_prevention_pda = Column(Float, nullable=True)
    loss_prevention_fda = Column(Float, nullable=True)
    total_loss_prevented = Column(Float, nullable=True)
    loss_prevented_reason = Column(String, nullable=True)
    fda_receive_date=Column(DateTime, nullable=True)
    pda_receive_date=Column(DateTime, nullable=True)

    final_status = Column(String, nullable=True)
    advance_percentage = Column(Integer, nullable=True)
    pda_ptm_curr_to=Column(String, nullable=True)
    fda_ptm_curr_to=Column(String, nullable=True)

    actual_pda_amount = Column(Float, nullable=True)
    actual_fda_amount = Column(Float, nullable=True)

    manual_pda_amount=Column(String)
    manual_fda_amount=Column(String)
