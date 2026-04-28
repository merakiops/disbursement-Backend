"""
Author: Punith
Description: Defines SQLAlchemy ORM model for `Vessel` and links to `MaCompany` (Client).
"""

from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime,TIMESTAMP,PrimaryKeyConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.orm import foreign
from sqlalchemy.ext.declarative import declarative_base

import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaVessel(Base):
    __tablename__ = "ma_vessels"
    __table_args__ = {"schema": SCHEMA_NAME}

    
    vessel_id = Column("vsl_id", Integer, primary_key=True, autoincrement=True, index=True)

    imo_number = Column( String(50), nullable=True,index=True)
    name = Column( String(100), nullable=False)
    grt = Column( Float, nullable=False)
    rgrt = Column( Float, nullable=True)
    nrt = Column( Float, nullable=False)
    loa = Column( Float, nullable=False)
    beam = Column( Float, nullable=False)
    depth = Column( Float, nullable=False)
    dwt = Column( Float, nullable=False)
    type = Column(String(50), nullable=False)
    email = Column(String(100),nullable=True)
    created_on = Column(DateTime, default=func.now())
    updated_on = Column(DateTime, onupdate=func.now())
    created_by = Column(String(100),nullable=True)
    updated_by = Column(String(100),nullable=True)
    status = Column(String(50),nullable=True)
    display_flag = Column(String(10),nullable=True)  
    is_manual= Column(String(10),nullable=True)


    # Relationships
    associations = relationship("CompVslAsso", back_populates="vessel")


class CompVslAsso(Base):
    __tablename__ = "asso_of_comp_vsl"
    __table_args__ = {"schema": SCHEMA_NAME}

    company_id = Column( Integer, ForeignKey(f"{SCHEMA_NAME}.ma_company.company_id"), nullable=False, primary_key=True)
    vsl_id = Column(Integer, ForeignKey(f"{SCHEMA_NAME}.ma_vessels.vsl_id"), nullable=False, primary_key=True)
    status = Column(String(30), nullable=False)
    
    owner_company = relationship("app.models.company.MaCompany", back_populates="vessels_as_owner")
    vessel = relationship("MaVessel",back_populates="associations")

  