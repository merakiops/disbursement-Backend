"""
Author: Punith
Description: This module defines the SQLAlchemy ORM model for user registration links.
             It includes link generation, expiry logic, and dynamic attribute updates.
"""
from dotenv import load_dotenv
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import TIMESTAMP
from datetime import datetime, timedelta
import os
from datetime import timedelta

load_dotenv()
Base = declarative_base()
SCHEMA_NAME = os.getenv("DB_SCHEMA")

expiry_value = os.getenv("REGISTRATION_LINK_EXPIRY", "1")  # Default to 1 if not set
expiry_type = os.getenv("REGISTRATION_LINK_PERIOD_TYPE", "days")  # Default to "days"

# Convert expiry_value to integer with fallback
try:
    expiry_value = int(expiry_value)
except ValueError:
    expiry_value = 1  # Default to 1 in case of invalid value

if expiry_type.lower() == "minutes":
    expiry_delta = timedelta(minutes=expiry_value)
elif expiry_type.lower() == "hours":
    expiry_delta = timedelta(hours=expiry_value)
elif expiry_type.lower() == "days":
    expiry_delta = timedelta(days=expiry_value)
else:
    expiry_delta = timedelta(days=1)

class Registration(Base):
    """
    Represents the registration link tracking table.
    Manages the generation, expiry, and status of registration links.
    """
    __tablename__ = "txn_user_registration"
    __table_args__ = {'schema': SCHEMA_NAME}

    userid = Column("user_id", Integer, unique=True, index=True, primary_key=True)
    registration_link = Column("registration_link", String, index=True)
    link_generation= Column("link_generated_on", TIMESTAMP, nullable=False, default=func.now())
    link_expiry = Column("link_expiry_on", TIMESTAMP, nullable=False, default=func.now() + expiry_delta)
    registration_token = Column("registration_token", String, index=True)
    status = Column("status", String, nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not getattr(self, "link_generation", None):
            self.link_generation = datetime.now()
        if not getattr(self, "link_expiry", None):
            self.link_expiry = datetime.now() + expiry_delta
    


    def update_attributes(self, new_values: dict):
        """
        Method to update attributes dynamically from a dictionary
        """
        for key, value in new_values.items():
            if hasattr(self, key):  # Only update existing attributes
                setattr(self, key, value)
            else:
                print(f"Warning: '{key}' is not a valid attribute of Registration.")



