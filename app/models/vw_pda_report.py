from sqlalchemy import Column, Integer, String, DateTime,Text,JSON,Float
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class PdaReport(Base):
    
    __tablename__="vw_pda_report"
    __table_args__={'schema':SCHEMA_NAME}
    
    disbursement_seq = Column(Integer,primary_key=True)
    disbursement_id = Column(Text)
    pda_id = Column(Integer)
    report_type = Column(Text)
    invoice_ref_no=Column(String)
    company_name = Column(String(255))
    report_date = Column(DateTime)
    client_name = Column(String(255))
    client_address = Column(String(1000))
    portagent_name = Column(String(255))
    portagent_address = Column(String(1000))
    account_holder = Column(String(50))
    current_account_number = Column(String(20))
    bank_name = Column(String(50))
    ifsc_code = Column(String(20))
    vessel_name = Column(String)
    port_name = Column(String(50))
    currency = Column(String(20))
    country_name = Column(String(70))
    voyage_no = Column(String)
    eta = Column(String)
    etd = Column(String)
    portagent_pda_amount = Column(String)
    meraki_pda_amount = Column(String)
    advance_percentage = Column(String)
    pda_remittance = Column(String)
    conversion_rate = Column(String)
    currency_conversion = Column(String)
    balance_amount = Column(String)
    service_charge = Column(JSON)
    pda_roe = Column(Float)
    pda_currency_from = Column(String)
    pda_currency_to = Column(String)
    