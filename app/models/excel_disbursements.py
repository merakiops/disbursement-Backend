from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from app.db import Base

SCHEMA_NAME = "excel_data_dev"


class ExcelVessel(Base):
    __tablename__ = "vessels"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    vessel_name = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=True)


class ExcelCountry(Base):
    __tablename__ = "countries"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    country_name = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=True)


class ExcelPort(Base):
    __tablename__ = "ports"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    port_name = Column(String, nullable=True)
    country_id = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=True)


class ExcelDisbursementsIndividualItemsCost(Base):
    __tablename__ = "disbursements_individual_items_cost"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(Text, nullable=True)
    dwt = Column(Float, nullable=True)
    voyage_no = Column(Integer, nullable=True)
    port_func = Column(String, nullable=True)
    arrival_local = Column(DateTime, nullable=True)
    departure_local = Column(DateTime, nullable=True)
    port_days = Column(Float, nullable=True)
    agent = Column(String, nullable=True)
    amount_curr = Column(Float, nullable=True)
    curr = Column(String, nullable=True)
    vessel_type = Column(String, nullable=True)
    created_on = Column(DateTime, nullable=True)
    vessel_id = Column(Integer, nullable=True)
    country_id = Column(Integer, nullable=True)
    port_id = Column(Integer, nullable=True)


class ExcelDisbursementsPaidAmountsAnalysis(Base):
    __tablename__ = "disbursements_paid_amounts_analysis"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(Text, nullable=True)
    dwt = Column(Float, nullable=True)
    voyage_no = Column(Integer, nullable=True)
    port_func = Column(String, nullable=True)
    arrival_local = Column(DateTime, nullable=True)
    departure_local = Column(DateTime, nullable=True)
    port_days = Column(Float, nullable=True)
    agent = Column(String, nullable=True)
    amount_curr = Column(Float, nullable=True)
    curr = Column(String, nullable=True)
    vessel_type = Column(String, nullable=True)
    created_on = Column(DateTime, nullable=True)
    vessel_id = Column(Integer, nullable=True)
    country_id = Column(Integer, nullable=True)
    port_id = Column(Integer, nullable=True)


class ExcelDisbursementsTotalPortCost(Base):
    __tablename__ = "disbursements_total_port_cost"
    __table_args__ = {"schema": SCHEMA_NAME}

    id = Column(Integer, primary_key=True, autoincrement=True)
    vessel_type = Column(String, nullable=True)
    voyage_no = Column(Integer, nullable=True)
    voyage_status = Column(String, nullable=True)
    port_func = Column(String, nullable=True)
    vendor_short_name = Column(String, nullable=True)
    arrival_local = Column(DateTime, nullable=True)
    eta_gmt = Column(DateTime, nullable=True)
    etd_gmt = Column(DateTime, nullable=True)
    departure_local = Column(DateTime, nullable=True)
    port_days = Column(Float, nullable=True)
    curr = Column(String, nullable=True)
    advance_amt = Column(Float, nullable=True)
    final_amt = Column(Float, nullable=True)
    dwt = Column(Float, nullable=True)
    grt = Column(Float, nullable=True)
    cargo_grades = Column(String, nullable=True)
    counterparty_short_name = Column(String, nullable=True)
    company_code = Column(String, nullable=True)
    opr_type = Column(String, nullable=True)
    imo_no = Column(String, nullable=True)
    created_on = Column(DateTime, nullable=True)
    vessel_id = Column(Integer, nullable=True)
    country_id = Column(Integer, nullable=True)
    port_id = Column(Integer, nullable=True)
