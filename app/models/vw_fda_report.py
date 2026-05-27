from sqlalchemy import Column, Integer, String, Date,Text,Float,JSON
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class FdaReport(Base):
    
    __tablename__="vw_fda_report"
    __table_args__={'schema':SCHEMA_NAME}

    disbursement_seq = Column(Integer, primary_key=True)  
    disbursement_id = Column(Text)
    fda_id = Column(Integer)
    company_name = Column(String)
    invoice_ref_no = Column(String)
    report_type = Column(String)
    report_date = Column(String)
    client_name = Column(String)
    client_address = Column(Text)
    portagent_name = Column(String)
    portagent_address = Column(Text)
    account_holder = Column(String)
    current_account_number = Column(String)
    bank_name = Column(String)
    ifsc_code = Column(String)
    vessel_name = Column(String)
    port_name = Column(String)
    voyage_no = Column(String)
    currency = Column(String)
    country_name = Column(String)
    eta = Column(String)
    etd = Column(String)
    remittance = Column(String)
    portagent_fda_amount = Column(String)
    meraki_total = Column(String)
    pda_fda_diff = Column(String)
    advance_percentage = Column(String)
    credit_note = Column(String)
    grand_total = Column(String)
    conversion_rate = Column(String)
    currency_conversion = Column(String)
    balance_due = Column(String)
    service_charge = Column(JSON)  
    fda_roe = Column(Float)
    fda_currency_from = Column(String)
    fda_currency_to = Column(String)
    pmt_curr_to = Column(String)
    pmt_curr_from=Column(String) #for the error msg
    system_service_charge = Column(JSON)