#!/usr/bin/env python3
import os
import sys
import argparse
from dotenv import load_dotenv
from sqlalchemy import create_engine, text

# Determine the directory of the current script and load the root .env
script_dir = os.path.dirname(os.path.realpath(__file__))
project_root = os.path.abspath(os.path.join(script_dir, ".."))
env_path = os.path.join(project_root, ".env")

load_dotenv(env_path)

DB_URL = os.getenv("DB_URL")
DB_SCHEMA = os.getenv("DB_SCHEMA", "prod")

if not DB_URL:
    print("Error: DB_URL environment variable is not set in your .env file.")
    sys.exit(1)

def run_migration(apply_changes: bool):
    engine = create_engine(DB_URL)
    
    trigger_sql = f"""
    CREATE OR REPLACE FUNCTION {DB_SCHEMA}.trg_update_vw_disbursement_tracker()
    RETURNS TRIGGER AS $$
    BEGIN
        -- Update base table txn_fda when fda_amount or manual_fda_amount is modified
        IF NEW.fda_amount IS DISTINCT FROM OLD.fda_amount OR NEW.manual_fda_amount IS DISTINCT FROM OLD.manual_fda_amount THEN
            UPDATE {DB_SCHEMA}.txn_fda
            SET fda_amount = NEW.fda_amount,
                manual_fda_amount = COALESCE(NEW.manual_fda_amount, OLD.manual_fda_amount, NEW.fda_amount::text)
            WHERE disbursement_seq = NEW.disbursement_seq;
        END IF;

        -- Update advance_amount_remitted, outstanding_balance, or remark on txn_disbursement
        IF NEW.advance_amount_remitted IS DISTINCT FROM OLD.advance_amount_remitted OR
           NEW.outstanding_balance IS DISTINCT FROM OLD.outstanding_balance OR
           NEW.remark IS DISTINCT FROM OLD.remark THEN
            UPDATE {DB_SCHEMA}.txn_disbursement
            SET advance_amount_remitted = NEW.advance_amount_remitted,
                outstanding_balance = NEW.outstanding_balance,
                remark = NEW.remark
            WHERE disbursement_seq = NEW.disbursement_seq;
        END IF;

        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;

    DROP TRIGGER IF EXISTS trg_vw_disbursement_tracker_update ON {DB_SCHEMA}.vw_disbursement_tracker;

    CREATE TRIGGER trg_vw_disbursement_tracker_update
    INSTEAD OF UPDATE ON {DB_SCHEMA}.vw_disbursement_tracker
    FOR EACH ROW
    EXECUTE FUNCTION {DB_SCHEMA}.trg_update_vw_disbursement_tracker();
    """

    print("====================================================================")
    print(f"Database View Trigger: {DB_SCHEMA}.vw_disbursement_tracker")
    print(f"Mode: {'APPLY' if apply_changes else 'DRY RUN'}")
    print("====================================================================\n")

    with engine.connect() as conn:
        if apply_changes:
            print("Applying INSTEAD OF UPDATE trigger to database view...")
            conn.execute(text(trigger_sql))
            conn.commit()
            print("Success! INSTEAD OF UPDATE trigger applied to vw_disbursement_tracker.")

            print("\nUpdating disbursement_seq = 258 with fda_amount = 42801.8...")
            update_sql = f"UPDATE {DB_SCHEMA}.vw_disbursement_tracker SET fda_amount = 42801.8 WHERE disbursement_seq = 258"
            res = conn.execute(text(update_sql))
            conn.commit()
            print(f"Updated record! Rows affected: {res.rowcount}")
        else:
            print("[DRY RUN] Trigger and update script not applied. Run with --apply to execute.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Create INSTEAD OF UPDATE trigger for vw_disbursement_tracker.")
    parser.add_argument("--apply", action="store_true", help="Apply trigger and update changes to the database.")
    args = parser.parse_args()
    
    run_migration(args.apply)
