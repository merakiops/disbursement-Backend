"""
Author: Punith
Description: SQLAlchemy model for tracking user password history.
"""
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
import os
from dotenv import load_dotenv

Base = declarative_base()
load_dotenv()


SCHEMA_NAME = os.getenv("DB_SCHEMA")

class UserPasswordHistory(Base):
    """
    Represents the password history of users.

    This table keeps track of users' past passwords for security purposes,
    ensuring that users do not reuse recent passwords.
    """
    __tablename__ = "txn_password_history"
    __table_args__ = {'schema': SCHEMA_NAME}

    pwd_history_id = Column(Integer, unique=True, index=True, primary_key=True)
    userid = Column("user_id", Integer, index=True)
    password = Column("password", String, nullable=False)  # Use DateTime for token expiry
    changeat = Column("change_at", DateTime, nullable=False, default=func.now())  # Use DateTime here too
    

