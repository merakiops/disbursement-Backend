import os
import logging
from fastapi import HTTPException
from dotenv import load_dotenv
from sqlalchemy import create_engine,MetaData
from sqlalchemy.orm import sessionmaker, Session,configure_mappers
from sqlalchemy.engine.url import make_url
from sqlalchemy.ext.declarative import declarative_base

# Load environment variables
load_dotenv('.env') 
env = os.getenv('ENV', 'prod') 
env_files = {
        'prod': '.env.prod'
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

# Remote MySQL Engine and Session Setup
_mysql_engine_instance = None

def get_mysql_engine():
    global _mysql_engine_instance
    if _mysql_engine_instance is not None:
        return _mysql_engine_instance
    
    db_url = os.getenv("MYSQL_DB_URL")
    if not db_url:
        load_dotenv('.env', override=True)
        db_url = os.getenv("MYSQL_DB_URL")
    
    if not db_url:
        db_url = "mysql+pymysql://admin:disbursementdev980@disbursement-dev.cxstuhubx9sn.us-east-1.rds.amazonaws.com:3306/meraki-final"
        
    try:
        _mysql_engine_instance = create_engine(
            db_url,
            echo=False,
            pool_pre_ping=True,
            pool_size=10,
            max_overflow=5,
            pool_recycle=3600
        )
        logger.info("Remote MySQL Database engine created successfully!")
        return _mysql_engine_instance
    except Exception as e:
        logger.warning(f"Could not create MySQL engine: {e}")
        return None

mysql_engine = get_mysql_engine()

# Dependency for database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_mysql_db():
    if not MysqlSessionLocal:
        db = SessionLocal()
    else:
        db = MysqlSessionLocal()
    try:
        yield db
    finally:
        db.close()

# Global ORM query event listener for multi-tenancy client isolation
from sqlalchemy import event
from sqlalchemy.orm import with_loader_criteria

@event.listens_for(Session, "do_orm_execute")
def _do_orm_execute(orm_execute_state):
    if orm_execute_state.is_select:
        from app.core.context import current_user_company_ids, current_user_company_names
        
        company_ids = current_user_company_ids.get()
        company_names = current_user_company_names.get()
        
        if company_ids is not None:
            from app.models.txn_disbursement import TxnDisbursement
            from app.models.vw_fda_processing_details import VwFdaProcessingDetails
            from app.models.vw_disbursement_tracker import DisbursementTracker
            from app.models.vw_disbursement_tracker_dtls import DisbursementTrackerDetails
            from app.models.vw_fda_report import FdaReport
            from app.models.vw_pda_report import PdaReport
            from app.models.vessels import CompVslAsso
            
            statement = orm_execute_state.statement
            
            # Apply filters for models with client_id
            statement = statement.options(
                with_loader_criteria(
                    TxnDisbursement,
                    lambda cls: cls.client_id.in_(company_ids)
                ),
                with_loader_criteria(
                    VwFdaProcessingDetails,
                    lambda cls: cls.client_id.in_(company_ids)
                ),
                with_loader_criteria(
                    CompVslAsso,
                    lambda cls: cls.company_id.in_(company_ids)
                )
            )
            
            # Apply filters for models with client_name
            if company_names:
                statement = statement.options(
                    with_loader_criteria(
                        DisbursementTracker,
                        lambda cls: cls.client_name.in_(company_names)
                    ),
                    with_loader_criteria(
                        DisbursementTrackerDetails,
                        lambda cls: cls.client_name.in_(company_names)
                    ),
                    with_loader_criteria(
                        FdaReport,
                        lambda cls: cls.client_name.in_(company_names)
                    ),
                    with_loader_criteria(
                        PdaReport,
                        lambda cls: cls.client_name.in_(company_names)
                    )
                )
                
            orm_execute_state.statement = statement
