import logging
from sqlalchemy import text
from demurrage.db import engine, Base, DEMURRAGE_DB_SCHEMA
import demurrage.models  # Import to register models with Base

logger = logging.getLogger("app_logger")

def init_db():
    """
    Initializes the demurrage database.
    Creates the schema if it doesn't exist, then creates all tables.
    """
    try:
        with engine.connect() as conn:
            # Create schema if it doesn't exist (e.g. 'dev' or 'prod')
            conn.execute(text(f"CREATE SCHEMA IF NOT EXISTS {DEMURRAGE_DB_SCHEMA};"))
            conn.commit()
            logger.info(f"Database schema '{DEMURRAGE_DB_SCHEMA}' verified or created.")
        
        # Create all tables defined in models.py
        Base.metadata.create_all(bind=engine)
        logger.info("Demurrage database tables initialized successfully.")
    except Exception as e:
        logger.error(f"Failed to initialize demurrage database: {e}")
        raise e

if __name__ == "__main__":
    init_db()
