import os
import logging
from fastapi import HTTPException
from dotenv import load_dotenv
from sqlalchemy import create_engine,MetaData
from sqlalchemy.orm import sessionmaker, Session,configure_mappers
from sqlalchemy.engine.url import make_url
from sqlalchemy.ext.declarative import declarative_base
from app.models import *

# Load environment variables
load_dotenv('.env') 
env = os.getenv('ENV', 'stag') 
env_files = {
        'stag': '.env.stag'
    }
env_file = env_files.get(env, '.env')  # Default to .env if no match
load_dotenv(env_file)  # Load the environment-specific .env file

SCHEMA_NAME = os.getenv("DB_SCHEMA")
# Logging setup
logger = logging.getLogger("app_logger")

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}
 
# Metadata with schema and naming convention
metadata = MetaData(naming_convention=convention, schema=SCHEMA_NAME)

configure_mappers()
# Declare base class for models
Base = declarative_base(metadata=metadata)

SECRET_NAME = os.getenv("SECRET_NAME")
AWS_REGION = os.getenv("AWS_REGION_NAME")




# Fetch database URL from AWS Secret Manager


DATABASE_URL =  os.getenv("DB_URL")


if not DATABASE_URL:
        raise ValueError("DATABASE_URI not found in environment variables")

# Function to create the database engine
def create_db_engine():
    try:
        # Parse the database URL
        db_url = make_url(DATABASE_URL)
        engine_params = {
            'echo': False,  
            'pool_pre_ping': True,
            'pool_size': 20,  
            'max_overflow': 10,  
            'pool_timeout': 40,  
            'pool_recycle': 3600,  
        }

        # Create engine depending on the backend (e.g., SQLite, PostgreSQL, MySQL, etc.)
        if db_url.get_backend_name() == "sqlite":
            engine_params.update({
                'connect_args': {"check_same_thread": False}
            })
        
            if 'pool_size' in engine_params:
                del engine_params['pool_size']
            engine = create_engine(DATABASE_URL, **engine_params)
        else:
            engine = create_engine(DATABASE_URL,**engine_params)

        logger.info("Database engine created successfully!")

        return engine
    except Exception as e:
        logger.error(f"Error creating database engine or tables: {e}")
        raise Exception(status_code=403, detail=f"Error creating database engine or tables: {e}")

# Create the database engine
engine = create_db_engine()

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency for database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
