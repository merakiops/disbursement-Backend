import logging
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.engine.url import make_url
from demurrage.config import DEMURRAGE_DB_URL, DEMURRAGE_DB_SCHEMA

logger = logging.getLogger("app_logger")

# Naming convention for foreign keys, primary keys, indexes, etc.
convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

# Metadata with specific schema for demurrage tables
metadata = MetaData(naming_convention=convention, schema=DEMURRAGE_DB_SCHEMA)

# Base class for demurrage models
Base = declarative_base(metadata=metadata)

def create_demurrage_engine():
    try:
        db_url = make_url(DEMURRAGE_DB_URL)
        engine_params = {
            'echo': False,
            'pool_pre_ping': True,
            'pool_size': 10,
            'max_overflow': 5,
            'pool_timeout': 30,
            'pool_recycle': 1800,
        }

        if db_url.get_backend_name() == "sqlite":
            engine_params.update({'connect_args': {"check_same_thread": False}})
            if 'pool_size' in engine_params:
                del engine_params['pool_size']
            if 'max_overflow' in engine_params:
                del engine_params['max_overflow']
        
        engine = create_engine(DEMURRAGE_DB_URL, **engine_params)
        logger.info(f"Demurrage database engine created successfully for schema '{DEMURRAGE_DB_SCHEMA}'")
        return engine
    except Exception as e:
        logger.error(f"Error creating demurrage database engine: {e}")
        raise ValueError(f"Error creating demurrage database engine: {e}")

engine = create_demurrage_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    """
    FastAPI dependency that provides a transactional database session for the demurrage database.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
