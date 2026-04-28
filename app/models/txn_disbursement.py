from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime,ForeignKey,JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from sqlalchemy.sql import func
import os
from app.db import Base
from sqlalchemy.orm import relationship,foreign
from app.models.company import MaCompany
from sqlalchemy.ext.mutable import MutableDict, MutableList
from sqlalchemy.dialects.postgresql import JSONB
from app.models.status import MaStatus
from sqlalchemy import event


SCHEMA_NAME = os.getenv("DB_SCHEMA")

class TxnDisbursement(Base):
    __tablename__ = "txn_disbursement"
    __table_args__ = {'schema': SCHEMA_NAME}

    disbursement_seq = Column(Integer, primary_key=True, index=True, autoincrement=True)
    disbursement_id = Column(String)
    comp_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_company.company_id"), nullable=True)
    client_id = Column(Integer)
    portagent_id = Column(Integer)
    country_id = Column(Integer)
    pda_vsl_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_pda_vessel_details.pda_vsl_id"))
    vsl_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_vessels.vsl_id"))
    voyage = Column(String)
    port_id = Column(Integer)
    purpose_id = Column(Integer)
    cargo_id = Column(Integer)
    eta = Column(DateTime)
    etd = Column(DateTime)
    vessel_stay = Column(Integer)
    status = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_status.status_id"))
    final_amount = Column(Float)
    ops_pic = Column(String)
    agency_nomination_date = Column(DateTime)
    invoice_number = Column(String)
    roe_agent = Column(Float)
    roe_actual_oanda = Column(Float)
    roe_loss = Column(Float)
    port_tariff_rule = Column(MutableDict.as_mutable(JSONB))
    sm_estimated_amount = Column(Float)
    sm_detailed_entry = Column(String)
    sm_ws_chart_ac = Column(String)
    towage_agency_agrement = Column(String)
    owners_item_rejected = Column(String)
    loss_prevention_pda = Column(Float)
    loss_prevention_fda = Column(Float)
    total_loss_prevented = Column(Float)
    loss_prevented_reason = Column(String)
    remarks = Column(String)
    return_message=Column(String)
    return_status=Column(String)
    createdon = Column("created_on", DateTime, nullable=False, default=func.now())
    updatedon = Column("updated_on", DateTime, nullable=False, default=func.now(), onupdate=func.now())
    created_by = Column("created_by",String,index=True,nullable=False)
    updated_by = Column("updated_by",String,index=True,nullable=False)


    pda = relationship("PDAModel", back_populates="disbursement", uselist=False,cascade="all, delete-orphan",primaryjoin="TxnDisbursement.disbursement_seq == PDAModel.disbursement_seq")
    fda = relationship("TxnFDA", back_populates="disbursement", uselist=False,primaryjoin="and_(TxnDisbursement.disbursement_seq == TxnFDA.disbursement_seq, TxnFDA.state != 'D')")
    portagent_history = relationship("PDAPortAgentHistory",primaryjoin="TxnDisbursement.disbursement_seq == PDAPortAgentHistory.disbursement_seq",foreign_keys="[PDAPortAgentHistory.disbursement_seq]",uselist=True,lazy='select')
    communication_histories = relationship("TxnCommunicationHistory",cascade="all, delete-orphan",foreign_keys="[TxnCommunicationHistory.disbursement_seq]")
    portagent_responses = relationship("TxnPortAgentResponse", foreign_keys="[TxnPortAgentResponse.disbursement_seq]")
    pa_form_links = relationship("PAFormLink", backref=None, cascade="all, delete-orphan")
    disbursement_files = relationship("TxnDisbursementFiles",backref=None,cascade="all, delete-orphan",passive_deletes=True)
    pda_vessel_details = relationship("PdaVesselDetails", back_populates="disbursements")
    # status_master = relationship(
    #     "MaStatus",
    #     primaryjoin=and_(foreign(status) == MaStatus.status_id),
    #     lazy="joined"
    # )
    # @property
    # def status_name(self):
    #     return self.status_master.status_name if self.status_master else None

@event.listens_for(TxnDisbursement.roe_agent, "set")
def receive_roe_agent_set(target, value, oldvalue, initiator):
    if value == oldvalue:
        return
    actual = target.roe_actual_oanda or 0
    agent = value or 0
    target.roe_loss = round(actual - agent, 4)