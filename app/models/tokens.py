"""
Author: Punith
Description: Defines the SQLAlchemy ORM model for `Tokens`, managing user authentication tokens.
"""

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
import os
from dotenv import load_dotenv

Base = declarative_base()
load_dotenv()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class Tokens(Base):
    """
    Represents the `txn_user_token` table, storing user authentication tokens.
    """
    __tablename__ = "txn_user_token"
    __table_args__ = {'schema': SCHEMA_NAME}

    disbursement_or_user_id = Column(Integer,primary_key=True)
    token = Column("token", String, index=True)
    exp = Column("expiry_at", DateTime, nullable=False)  # Use DateTime for token expiry
    user_email = Column(String)
    is_external_user = Column(String)
    createdon = Column("created_on", DateTime, nullable=False, default=func.now())  # Use DateTime here for creation time 
    updated_on = Column(DateTime, nullable=False, onupdate=func.now())
    created_by = Column(String(30), nullable=True)
    updated_by = Column(String(30), nullable=True)
    
   



    def __repr__(self):
        """
        Returns a string representation of the Tokens instance.
        """
        return f"<Tokens(token={self.token}, userid={self.user_email}, exp={self.exp})>"