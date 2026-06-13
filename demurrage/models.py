from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from demurrage.db import Base, DEMURRAGE_DB_SCHEMA

def get_fk_ref(target: str) -> str:
    """Helper to prepend schema to ForeignKey target if schema is defined."""
    if DEMURRAGE_DB_SCHEMA:
        return f"{DEMURRAGE_DB_SCHEMA}.{target}"
    return target

class Voyage(Base):
    __tablename__ = "voyages"
    __table_args__ = {"schema": DEMURRAGE_DB_SCHEMA} if DEMURRAGE_DB_SCHEMA else {}

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    vessel = Column(String(100), nullable=False)
    charterparty_terms = Column(String(255), nullable=True)  # Made nullable to allow empty/None inputs
    allowed_laytime_hours = Column(Float, nullable=False, default=0.0)
    demurrage_rate_usd_per_day = Column(Float, nullable=False, default=0.0)
    address_commission_percent = Column(Float, nullable=False, default=0.0)
    undisputed_demurrage_paid = Column(Float, nullable=False, default=0.0)
    freight = Column(String(100), nullable=True)
    laycan = Column(String(100), nullable=True)
    laycan_narrowed_date = Column(String(100), nullable=True)
    laycan_narrowed_start_time = Column(String(100), nullable=True)
    laycan_narrowed_end_time = Column(String(100), nullable=True)
    actual_rotation = Column(String(100), nullable=True)
    cp_speed = Column(String(100), nullable=True)
    timebar_clause = Column(String(255), nullable=True)
    additional_laytime = Column(String(100), nullable=True)
    client_name = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    # Relationships
    port_operations = relationship("PortOperation", back_populates="voyage", cascade="all, delete-orphan")
    summary = relationship("DemurrageSummary", back_populates="voyage", uselist=False, cascade="all, delete-orphan")


class PortOperation(Base):
    __tablename__ = "port_operations"
    __table_args__ = {"schema": DEMURRAGE_DB_SCHEMA} if DEMURRAGE_DB_SCHEMA else {}

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    voyage_id = Column(Integer, ForeignKey(get_fk_ref("voyages.id"), ondelete="CASCADE"), nullable=False)
    operation_type = Column(String(20), nullable=False)  # 'LOAD' or 'DISCHARGE'
    port = Column(String(100), nullable=False)
    terminal = Column(String(100), nullable=True)
    start_time = Column(DateTime, nullable=False)
    start_event = Column(String(100), nullable=True)
    end_time = Column(DateTime, nullable=False)
    end_event = Column(String(100), nullable=True)
    time_used = Column(Float, nullable=False)
    gross_used_laytime = Column(Float, nullable=False)
    comments_clause = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    # Relationships
    voyage = relationship("Voyage", back_populates="port_operations")
    deductions = relationship("OperationDeduction", back_populates="operation", cascade="all, delete-orphan")


class OperationDeduction(Base):
    __tablename__ = "operation_deductions"
    __table_args__ = {"schema": DEMURRAGE_DB_SCHEMA} if DEMURRAGE_DB_SCHEMA else {}

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    operation_id = Column(Integer, ForeignKey(get_fk_ref("port_operations.id"), ondelete="CASCADE"), nullable=False)
    event_name = Column(String(100), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    time_used = Column(Float, nullable=False)
    comments_clause = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=func.now())

    # Relationships
    operation = relationship("PortOperation", back_populates="deductions")


class DemurrageSummary(Base):
    __tablename__ = "demurrage_summary"
    __table_args__ = {"schema": DEMURRAGE_DB_SCHEMA} if DEMURRAGE_DB_SCHEMA else {}

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    voyage_id = Column(Integer, ForeignKey(get_fk_ref("voyages.id"), ondelete="CASCADE"), nullable=False)
    total_used_laytime = Column(Float, nullable=False)
    total_deductions = Column(Float, nullable=False)
    allowed_laytime = Column(Float, nullable=False)
    demurrage_time = Column(Float, nullable=False)
    gross_demurrage_cost = Column(Float, nullable=False)
    undisputed_demurrage_paid = Column(Float, nullable=False, default=0.0)
    add_commission = Column(Float, nullable=False)
    net_demurrage = Column(Float, nullable=False)
    created_at = Column(DateTime, default=func.now())

    # Relationships
    voyage = relationship("Voyage", back_populates="summary")
