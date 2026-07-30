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

        # Dynamically add voyage_no and vessel_imo columns if they don't exist (database migration fallback)
        try:
            with engine.connect() as conn:
                schema_prefix = f"{DEMURRAGE_DB_SCHEMA}." if DEMURRAGE_DB_SCHEMA else ""
                conn.execute(text(f"ALTER TABLE {schema_prefix}voyages ADD COLUMN voyage_no VARCHAR(100);"))
                conn.commit()
                logger.info("Database migration: Added voyage_no column to voyages table successfully.")
        except Exception as e:
            logger.debug(f"Adding voyage_no column skipped (it probably already exists): {e}")

        try:
            with engine.connect() as conn:
                schema_prefix = f"{DEMURRAGE_DB_SCHEMA}." if DEMURRAGE_DB_SCHEMA else ""
                conn.execute(text(f"ALTER TABLE {schema_prefix}voyages ADD COLUMN vessel_imo VARCHAR(100);"))
                conn.commit()
                logger.info("Database migration: Added vessel_imo column to voyages table successfully.")
        except Exception as e:
            logger.debug(f"Adding vessel_imo column skipped (it probably already exists): {e}")
    except Exception as e:
        logger.error(f"Failed to initialize demurrage database: {e}")
        raise e

if __name__ == "__main__":
    init_db()
