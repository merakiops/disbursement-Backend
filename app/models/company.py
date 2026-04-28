"""
Author: Punith
Description: Defines SQLAlchemy ORM models for `Company` and `Company_type`, including relationships with `App_Owning_Company`.
"""
from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, ForeignKey,DateTime
from sqlalchemy.orm import relationship, declarative_base, Session, joinedload
from sqlalchemy.sql import func
from sqlalchemy.exc import SQLAlchemyError
import os
from dotenv import load_dotenv
from app.db import Base


load_dotenv()

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class AppOwningCompany(Base):
    __tablename__ = "ma_app_owning_company"
    __table_args__ = {"schema": SCHEMA_NAME}

    app_own_comp_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    address = Column(Text, nullable=True)
    phone_number = Column(String(20), nullable=True)
    email = Column(String(100), nullable=True)
    created_on = Column(TIMESTAMP, default=func.now(), nullable=False)
    updated_on = Column(TIMESTAMP, default=func.now(), onupdate=func.now(), nullable=False)
    created_by = Column(String(30), nullable=True)
    updated_by = Column(String(30), nullable=True)
    status = Column(String(30), nullable=True)
    default_password = Column(String(100), nullable=True)

    # One-to-many relationship to MaCompany
    companies = relationship("MaCompany", back_populates="owning_company")



class MaCompanyType(Base):
    __tablename__ = "ma_company_type"
    __table_args__ = {"schema": SCHEMA_NAME}

    company_type_id = Column(Integer, primary_key=True, autoincrement=True)
    company_type_name = Column('name',String(100), nullable=True)
    created_on = Column(TIMESTAMP, default=func.now(), nullable=True)
    created_by = Column(String, onupdate=func.now(), nullable=True)
    status = Column(String(3), nullable=True)

    # One-to-many relationship to MaCompany
    companies = relationship("MaCompany", back_populates="company_type")


class MaCompany(Base):
    __tablename__ = "ma_company"
    __table_args__ = {"schema":SCHEMA_NAME}

    company_id = Column('company_id',Integer, primary_key=True, autoincrement=True)
    app_owning_company_id = Column("app_own_comp_id",Integer,ForeignKey(f"{SCHEMA_NAME}.ma_app_owning_company.app_own_comp_id"), nullable=True)
    company_type_id = Column(Integer,ForeignKey(f"{SCHEMA_NAME}.ma_company_type.company_type_id"), nullable=True)
    company_name = Column('name', Text, nullable=True)
    created_on = Column(TIMESTAMP, nullable=False, default=func.now())
    updated_on = Column(TIMESTAMP, nullable=False, onupdate=func.now())
    created_by = Column(String(30), nullable=True)
    updated_by = Column(String(30), nullable=True)
    status = Column(String(30), nullable=True)
    email= Column( String(100),unique=True, nullable=True)
    address = Column( String(100), nullable=True)
    phone_number = Column(String(20), unique=True, nullable=True)
    bank_details_id = Column(Integer,ForeignKey(f"{SCHEMA_NAME}.ma_bank_details.bank_details_id"), nullable=True)


    # Relationships
    owning_company = relationship("AppOwningCompany", back_populates="companies")
    company_type = relationship("MaCompanyType", back_populates="companies")    
    vessels_as_owner = relationship("CompVslAsso", back_populates="owner_company")
    bank_details = relationship("BankDetails", foreign_keys=[bank_details_id])