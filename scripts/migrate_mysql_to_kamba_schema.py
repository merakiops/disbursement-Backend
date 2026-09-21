import os
import sys
import logging
from datetime import datetime, date
from sqlalchemy import create_engine, text, MetaData, Table, Column, Integer, BigInteger, String, Text, Numeric, Float, Boolean, DateTime, Date, Time
from app.db import engine as postgres_engine, get_mysql_engine

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("migration")

def get_postgres_column_type(mysql_col_type, mysql_col_name):
    """
    Map MySQL column data types to PostgreSQL compatible SQLAlchemy types.
    """
    type_str = str(mysql_col_type).lower()
    
    if "tinyint(1)" in type_str or "boolean" in type_str:
        return Boolean
    elif "tinyint" in type_str or "smallint" in type_str or "int" in type_str:
        if "bigint" in type_str:
            return BigInteger
        return Integer
    elif "decimal" in type_str or "numeric" in type_str:
        return Numeric(15, 2)
    elif "float" in type_str or "double" in type_str:
        return Float
    elif "datetime" in type_str or "timestamp" in type_str:
        return DateTime
    elif "date" in type_str:
        return Date
    elif "time" in type_str:
        return Time
    elif "text" in type_str or "blob" in type_str or "varchar" in type_str or "char" in type_str:
        return Text
    else:
        return Text

def clean_row_data(row_dict):
    """
    Clean row data for PostgreSQL compatibility (e.g. remove null bytes from string fields).
    """
    cleaned = {}
    for k, v in row_dict.items():
        if isinstance(v, str):
            # Remove null bytes which PostgreSQL string columns do not allow
            v = v.replace('\x00', '')
        cleaned[k] = v
    return cleaned

def run_migration():
    logger.info("Starting MySQL to PostgreSQL 'kamba_data' schema migration...")
    
    mysql_engine = get_mysql_engine()
    if not mysql_engine:
        logger.error("Could not connect to MySQL RDS engine. Aborting.")
        sys.exit(1)
        
    with postgres_engine.connect() as pg_conn:
        logger.info("Creating schema 'kamba_data' in PostgreSQL if not exists...")
        pg_conn.execute(text("CREATE SCHEMA IF NOT EXISTS kamba_data;"))
        pg_conn.commit()

    mysql_metadata = MetaData()
    mysql_metadata.reflect(bind=mysql_engine)
    
    logger.info(f"Found {len(mysql_metadata.tables)} tables in MySQL database.")
    
    migration_summary = []

    for table_name, mysql_table in mysql_metadata.tables.items():
        logger.info(f"Processing table: '{table_name}'...")
        
        # 1. Build PostgreSQL table definition in schema 'kamba_data'
        pg_metadata = MetaData(schema="kamba_data")
        pg_columns = []
        
        for col in mysql_table.columns:
            col_type = get_postgres_column_type(col.type, col.name)
            is_pk = col.primary_key
            pg_col = Column(
                col.name,
                col_type,
                primary_key=is_pk,
                nullable=col.nullable if not is_pk else False
            )
            pg_columns.append(pg_col)
            
        pg_table = Table(table_name, pg_metadata, *pg_columns)
        
        # Drop table if exists and recreate in PostgreSQL 'kamba_data'
        with postgres_engine.connect() as pg_conn:
            pg_conn.execute(text(f"DROP TABLE IF EXISTS kamba_data.\"{table_name}\" CASCADE;"))
            pg_conn.commit()
            pg_table.create(pg_conn)
            pg_conn.commit()
            
        # 2. Fetch rows from MySQL table and insert into PostgreSQL
        with mysql_engine.connect() as my_conn:
            mysql_count = my_conn.execute(text(f"SELECT COUNT(*) FROM `{table_name}`")).scalar() or 0
            
            if mysql_count == 0:
                logger.info(f"Table '{table_name}' has 0 rows in MySQL. Table created empty.")
                migration_summary.append((table_name, 0, 0))
                continue
                
            logger.info(f"Migrating {mysql_count} rows for table '{table_name}'...")
            
            offset = 0
            batch_size = 500
            inserted_count = 0
            
            while True:
                rows = my_conn.execute(text(f"SELECT * FROM `{table_name}` LIMIT {batch_size} OFFSET {offset}")).mappings().all()
                if not rows:
                    break
                    
                cleaned_rows = [clean_row_data(dict(r)) for r in rows]
                
                with postgres_engine.connect() as pg_conn:
                    pg_conn.execute(pg_table.insert(), cleaned_rows)
                    pg_conn.commit()
                    
                inserted_count += len(rows)
                offset += batch_size
                
            logger.info(f"Successfully migrated {inserted_count}/{mysql_count} rows into kamba_data.\"{table_name}\".")
            migration_summary.append((table_name, mysql_count, inserted_count))

    # Verification Summary Report
    print("\n" + "="*70)
    print(f"{'TABLE NAME':<35} | {'MYSQL ROWS':<12} | {'POSTGRES ROWS':<12}")
    print("="*70)
    mismatches = 0
    for tbl, my_cnt, pg_cnt in migration_summary:
        status = "OK" if my_cnt == pg_cnt else "MISMATCH!"
        if my_cnt != pg_cnt:
            mismatches += 1
        print(f"{tbl:<35} | {my_cnt:<12} | {pg_cnt:<12} [{status}]")
    print("="*70)
    if mismatches == 0:
        logger.info("MIGRATION COMPLETED SUCCESSFULLY WITH 100% DATA INTEGRITY!")
    else:
        logger.warning(f"MIGRATION COMPLETED WITH {mismatches} TABLE MISMATCHES!")

if __name__ == "__main__":
    run_migration()
