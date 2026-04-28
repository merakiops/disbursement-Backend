from sqlalchemy import Column, Integer, String, Enum, DateTime,ForeignKey,JSON,Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime
from app.db import Base
import os
from sqlalchemy.orm import relationship

SCHEMA_NAME = os.getenv("DB_SCHEMA")
import _json
class TxnDisbursementFiles(Base):
    __tablename__ = "txn_disbursement_files"
    __table_args__ = {"schema": SCHEMA_NAME}

    file_id = Column(Integer, primary_key=True,autoincrement=True)
    disbursement_seq = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.txn_disbursement.disbursement_seq"), nullable=False)
    file_name = Column(String, nullable=False)
    file_description=Column(String, nullable=False)
    complete_file_path = Column(String, nullable=False)
    md5_file = Column(String, nullable=True)
    pda_fda_flag = Column(String, nullable=True)  # You can use Enum if there are specific values like 'PDA', 'FDA'
    is_deleted = Column(Enum("Y", "N", name="char_status_enum"),nullable=False,default="N")
    created_on = Column(DateTime, default=func.now())
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now())
    created_by = Column(String, nullable=False)
    updated_by = Column(String, nullable=False)
    sync=Column(String, nullable=False)
    source_type=Column(String, nullable=False)

    
