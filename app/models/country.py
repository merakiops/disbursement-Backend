"""
Author: Nitesh
Description: Defines SQLAlchemy ORM model for `Country`
"""

from sqlalchemy import Column, Integer, String, DateTime,ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
import os
from app.db import Base

SCHEMA_NAME = os.getenv("DB_SCHEMA")

class MaCountry(Base):
    __tablename__ = "ma_country"
    __table_args__ = {'schema': SCHEMA_NAME}

    country_id = Column(Integer, primary_key=True, index=True)
    name = Column(String,unique=True, nullable=False)
    currency = Column(String, nullable=True)
    created_on = Column(DateTime, default=func.now(), nullable=False)
    updated_on = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    created_by = Column(String, nullable=True)
    updated_by = Column(String, nullable=True)
    status = Column(String, nullable=True)

    # ports=relationship("MaPort", backref="country")
    


    
    
    

