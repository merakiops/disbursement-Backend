from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime,ForeignKey,JSON,Text
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from sqlalchemy.sql import func
import os
from app.db import Base
from sqlalchemy.orm import relationship,foreign
from sqlalchemy.ext.mutable import MutableDict
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy import and_
from app.models.status import MaStatus
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import column_property
from sqlalchemy import select

SCHEMA_NAME = os.getenv("DB_SCHEMA")
class PDAModel(Base):
    
    __tablename__ = "txn_pda"
    __table_args__ = {'schema': SCHEMA_NAME}

    pda_id = Column(Integer, primary_key=True, index=True)
    disbursement_seq = Column(Integer,ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"),nullable=False)
    portagent_pda_amount = Column(Float)
    meraki_pda_amount = Column(Float)
    advance_percentage = Column(Integer)
    pda_remittance = Column(String)
    conversion_rate = Column(Float)
    currency_conversion = Column(Float)
    meraki_pda_data = Column(MutableDict.as_mutable(JSON))
    portagent_pda_data = Column(MutableDict.as_mutable(JSON))
    is_manual_entry = Column(String)
    pda_processing_date = Column(DateTime)
    pda_received_ops_agent = Column(String)
    pda_remark = Column(String)
    pda_roe = Column(Float)
    status = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_status.status_id"))
    email_to = Column(String)
    email_cc = Column(String)
    pda_currency_to=Column(String)
    pda_currency_from=Column(String)
    pda_custom_calculation=Column(String)
    pda_receive_date = Column(DateTime)
    is_re_request = Column(String)
    is_approved   = Column(String)
    approved_by = Column(String)
    approved_on = Column(DateTime)
    client_message = Column(String)
    pda_vessel_stay = Column(Integer)
    pda_eta = Column(DateTime)
    pda_etd = Column(DateTime)
    invoice_ref_no = Column(String)
    created_on = Column("created_on", DateTime, nullable=False, default=func.now())
    updated_on = Column("updated_on", DateTime, nullable=False, default=func.now(), onupdate=func.now())
    created_by = Column("created_by",String,index=True,nullable=False)
    updated_by = Column("updated_by",String,index=True,nullable=False)
    pic_approval = Column(String)
    meraki_cmt_to_client = Column(Text)
    converted_curr_from = Column(String)
    converted_curr_to = Column(String)
    conversion_pda_rate = Column(String)
    pmt_curr_from = Column(String)
    pmt_curr_to = Column(String)
    state = Column(String,default='Y')
    manual_pda_amount = Column(String)

    disbursement = relationship("TxnDisbursement", back_populates="pda" )

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
