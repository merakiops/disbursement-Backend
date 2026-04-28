from sqlalchemy import Column, Integer, String, Float, DateTime,ForeignKey,JSON,Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from app.models.status import MaStatus
from sqlalchemy.orm import relationship,foreign
from sqlalchemy import and_
from sqlalchemy.orm import column_property
from sqlalchemy import select

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnFDA(Base):
    __tablename__ = "txn_fda"
    __table_args__ = {'schema': SCHEMA_NAME}

    fda_id = Column(Integer, primary_key=True, index=True)
    disbursement_seq = Column(Integer,ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"),nullable=False)
    portagent_fda_amount = Column(Float)
    meraki_pda_amount = Column(Float)
    credit_note = Column(Float)
    fda_amount = Column(Float)
    balance_due = Column(Float)
    conversion_rate = Column(Float)
    currency_conversion = Column(Float)
    meraki_pda_data = Column(JSON)
    portagent_fda_data = Column(JSON)
    fda_processing_date = Column(DateTime)
    fda_received_ops_agent = Column(String)
    fda_roe= Column(Float)
    fda_currency_from= Column(String)
    fda_currency_to= Column(String)
    fda_receive_date=Column(DateTime, nullable=False, default=func.now())
    fda_remark= Column(String)
    fda_custom_calculation= Column(String)
    fda_eta=Column(DateTime)
    fda_etd=Column(DateTime)
    status = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_status.status_id"))
    fda_vessel_stay=Column(Integer)
    invoice_ref_no = Column(String)
    created_on = Column("created_on", DateTime, nullable=False, default=func.now())
    updated_on = Column("updated_on", DateTime, nullable=False, default=func.now(), onupdate=func.now())
    created_by = Column("created_by",String,index=True,nullable=False)
    updated_by = Column("updated_by",String,index=True,nullable=False)
    approved_by = Column(String)
    approved_on = Column(DateTime)
    pic_approval = Column(String)
    meraki_cmt_to_client = Column(Text)
    converted_curr_from = Column(String)
    converted_curr_to = Column(String)
    conversion_fda_rate = Column(String)
    pmt_curr_from = Column(String)
    pmt_curr_to = Column(String)
    state = Column(String,default='Y')
    manual_fda_amount = Column(String)

    disbursement = relationship("TxnDisbursement", back_populates="fda")

    status_master = relationship(
        "MaStatus",
        primaryjoin=and_(foreign(status) == MaStatus.status_id),
        lazy="joined"
    )
    status_name = column_property(
        select(MaStatus.status_name)
        .where(MaStatus.status_id == status)
        .correlate_except(MaStatus)
        .scalar_subquery()
    )