"""
Author: Punith
Description: SQLAlchemy model for tracking user login history.
"""
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import TIMESTAMP
import os
from dotenv import load_dotenv

Base = declarative_base()
load_dotenv()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class UserLoginHistory(Base):
    """
    Represents the login history of users.

    This table stores a record of each user's login attempts,
    including the login timestamp and the user who inserted the record.
    """
    __tablename__ = "txn_login_attempt"
    __table_args__ = {'schema': SCHEMA_NAME}

    def __init__(self, *args, **kwargs):
        super(UserLoginHistory, self).__init__(*args, **kwargs)
        if not self.updated_on:
            self.updated_on = func.now()
            
    userid = Column("user_id", Integer, unique=True, index=True, primary_key=True)
    ip_address = Column("ip_address", String)
    attempt_left = Column("attempt_left", Integer, nullable=False, default=5)

    was_successfull = Column("was_successful", String)
    createdon = Column("created_on", DateTime, nullable=False, default=func.now())  
    updated_on = Column("updated_on",DateTime, nullable=False, onupdate=func.now())


