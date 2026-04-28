"""
Author: Punith
Description: Defines SQLAlchemy ORM models for `Role` and `User`, including relationships with `MaCompany`.
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey,Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy.types import TypeDecorator
from sqlalchemy.orm import relationship,backref
from dotenv import load_dotenv
import os
from datetime import timedelta
from sqlalchemy import TIMESTAMP
from sqlalchemy.orm import foreign
from sqlalchemy.dialects.postgresql import JSON
from app.db import Base
from app.models.company import MaCompany
from datetime import datetime

load_dotenv()

SCHEMA_NAME = os.getenv("DB_SCHEMA")
print(f"schema nmae {SCHEMA_NAME}")

expiry_value = os.getenv("PASSWORD_EXPIRY", "90")  # Default to 1 if not set
expiry_type = os.getenv("PASSWORD_EXPIRY_TYPE", "days")  # Default to "days"

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

class PGDateTime(TypeDecorator):
    """
    Custom DateTime type for PostgreSQL compatibility.
    """
    impl = DateTime

    def process_bind_param(self, value, dialect):
        return value

    def process_result_value(self, value, dialect):
        return value



class User(Base):
    """
    Represents the `ma_users` table, defining different users.
    """
    __tablename__ = "ma_users"
    __table_args__ = {'schema': SCHEMA_NAME}

    userid = Column("user_id",Integer, primary_key=True, index=True)
    companyid = Column("company_id", Integer, ForeignKey(f"{SCHEMA_NAME}.ma_company.company_id"), nullable=True)
    roleid = Column("role_id",Integer,ForeignKey(f"{SCHEMA_NAME}.ma_roles.role_id"),nullable=False)
    name = Column("name", String)
    username = Column("username",String, unique=True, index=True, nullable=False)
    email =  Column("email",String, nullable=True)
    password = Column("password",String, nullable=False)
    password_expiry = Column("password_expiry", DateTime, nullable=False)
    createdon = Column("created_on", DateTime, nullable=False, default=func.now())
    updatedon = Column("updated_on", DateTime, nullable=False, default=func.now(), onupdate=func.now())
    created_by = Column("created_by",String,index=True,nullable=False)
    updated_by = Column("updated_by",String,index=True,nullable=False)
    status = Column("status",String,index=True,nullable=False)    
    is_mfa_enabled =Column("is_mfa_enabled",String,index=True,nullable=True)
    is_first_login =Column("is_first_login",String,index=True,nullable=True)  
    email_signature =Column(Text,index=True,nullable=True)  

    roles = relationship('Role', backref='user_roles', lazy='subquery')

    company  = relationship(MaCompany,lazy="joined")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if getattr(self, "password_expiry", None) is None:
            self.link_password_expiryexpiry = datetime.now() + expiry_delta


    def __repr__(self):
        # Check if roles is a list or a single object
        if isinstance(self.roles, list):
            role_names = [role.role_name for role in self.roles] if self.roles else ['No roles assigned']
        else:
            role_names = [self.roles.role_name] if self.roles else ['No roles assigned']

        return (f"<User(user_id={self.userid}, user_name={self.email}, "
                f"password={self.password}, role_id={self.roleid}, roles={', '.join(role_names)})>")


class Role(Base):
    """
    Represents the `ma_roles` table, defining different roles.
    """
    __tablename__ = "ma_roles"
    __table_args__ = {'schema': SCHEMA_NAME}

    role_id = Column(Integer, primary_key=True, index=True)
    role_name = Column("name", String, unique=True, nullable=False)
   
    status = Column("status", String, unique=True, nullable=False)
    created_on = Column("created_on", DateTime, nullable=False, default=func.now())
    created_by = Column("created_by", String, index=True, nullable=False)
    role_desc=Column("role_description",String, nullable=True)
    
    users = relationship("User", backref="role", lazy='dynamic')

