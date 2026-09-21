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
    
    # ID definitions for the merge
    keep_id = 49  # EMZOIL (will be renamed to EMZOIL FZCO)
    merge_id = 61 # EMZOIL FZCO (will be merged into 49 and deleted)
    
    print("====================================================================")
    print(f"Company Merge Script: Merging ID {merge_id} into ID {keep_id}")
    print(f"Database URL: {DB_URL.split('@')[-1] if '@' in DB_URL else DB_URL}")
    print(f"Schema: {DB_SCHEMA}")
    print(f"Mode: {'APPLY' if apply_changes else 'DRY RUN (No changes will be saved)'}")
    print("====================================================================\n")

    with engine.connect() as conn:
        # Check if the companies exist
        c_keep = conn.execute(text(f"SELECT * FROM {DB_SCHEMA}.ma_company WHERE company_id = :id"), {"id": keep_id}).first()
        c_merge = conn.execute(text(f"SELECT * FROM {DB_SCHEMA}.ma_company WHERE company_id = :id"), {"id": merge_id}).first()
        
        if not c_keep:
            print(f"Warning: Company with ID {keep_id} was not found in the database. It may have already been merged.")
        else:
            print(f"Found Target Company to Keep: ID {keep_id} -> Name: '{c_keep.name}', Address: '{c_keep.address}'")
            
        if not c_merge:
            print(f"Notice: Company with ID {merge_id} was not found in the database. The merge may already be complete.")
            if c_keep and c_keep.name != 'EMZOIL FZCO':
                print(f"However, target company name is still '{c_keep.name}'.")
            else:
                print("Nothing to do.")
                return

        # Start transaction
        trans = conn.begin()
        try:
            # 1. Update company 49 info
            if c_keep:
                print(f"\n[Step 1] Updating Company ID {keep_id} details to 'EMZOIL FZCO'...")
                if apply_changes:
                    conn.execute(text(f"""
                        UPDATE {DB_SCHEMA}.ma_company 
                        SET name = 'EMZOIL FZCO', address = 'Dubai' 
                        WHERE company_id = :id
                    """), {"id": keep_id})
                    print("-> Updated successfully.")
                else:
                    print("-> [DRY RUN] Would update name to 'EMZOIL FZCO' and address to 'Dubai'")
            
            # 2. Merge asso_of_comp_vsl
            print(f"\n[Step 2] Merging asso_of_comp_vsl (Vessel associations)...")
            res_vsl = conn.execute(text(f"SELECT * FROM {DB_SCHEMA}.asso_of_comp_vsl WHERE company_id = :merge_id"), {"merge_id": merge_id})
            rows_61 = [dict(r._mapping) for r in res_vsl]
            
            for r61 in rows_61:
                vsl_id = r61['vsl_id']
                status_61 = r61['status']
                
                # Check for collision
                chk = conn.execute(text(f"""
                    SELECT * FROM {DB_SCHEMA}.asso_of_comp_vsl 
                    WHERE company_id = :keep_id AND vsl_id = :vsl_id
                """), {"keep_id": keep_id, "vsl_id": vsl_id}).first()
                
                if chk:
                    chk_dict = dict(chk._mapping)
                    print(f"  Collision on Vessel ID {vsl_id}: ID {keep_id} status is '{chk_dict['status']}', ID {merge_id} status is '{status_61}'")
                    if apply_changes:
                        if status_61 == 'Y' and chk_dict['status'] != 'Y':
                            print(f"  -> Updating ID {keep_id} association status to 'Y'")
                            conn.execute(text(f"""
                                UPDATE {DB_SCHEMA}.asso_of_comp_vsl 
                                SET status = 'Y' 
                                WHERE company_id = :keep_id AND vsl_id = :vsl_id
                            """), {"keep_id": keep_id, "vsl_id": vsl_id})
                        print(f"  -> Deleting redundant association row for ID {merge_id}")
                        conn.execute(text(f"""
                            DELETE FROM {DB_SCHEMA}.asso_of_comp_vsl 
                            WHERE company_id = :merge_id AND vsl_id = :vsl_id
                        """), {"merge_id": merge_id, "vsl_id": vsl_id})
                    else:
                        if status_61 == 'Y' and chk_dict['status'] != 'Y':
                            print(f"  -> [DRY RUN] Would update ID {keep_id} status to 'Y'")
                        print(f"  -> [DRY RUN] Would delete association row for ID {merge_id}")
                else:
                    print(f"  No collision: Reassigning Vessel ID {vsl_id} to ID {keep_id}")
                    if apply_changes:
                        conn.execute(text(f"""
                            UPDATE {DB_SCHEMA}.asso_of_comp_vsl 
                            SET company_id = :keep_id 
                            WHERE company_id = :merge_id AND vsl_id = :vsl_id
                        """), {"keep_id": keep_id, "merge_id": merge_id, "vsl_id": vsl_id})
                    else:
                        print(f"  -> [DRY RUN] Would update company_id to {keep_id}")

            # 3. Simple references re-pointing
            ref_tables = [
                ("txn_disbursement", "client_id"),
                ("txn_disbursement", "comp_id"),
                ("txn_disbursement", "portagent_id"),
                ("ma_users", "company_id"),
                ("txn_pda_portagent_history", "portagent_id")
            ]
            
            print(f"\n[Step 3] Re-linking simple reference columns...")
            for table, col in ref_tables:
                cnt = conn.execute(text(f"SELECT COUNT(*) FROM {DB_SCHEMA}.{table} WHERE {col} = :merge_id"), {"merge_id": merge_id}).scalar()
                print(f"  Table '{DB_SCHEMA}.{table}' Column '{col}': found {cnt} matching rows.")
                if cnt > 0:
                    if apply_changes:
                        conn.execute(text(f"UPDATE {DB_SCHEMA}.{table} SET {col} = :keep_id WHERE {col} = :merge_id"), {"keep_id": keep_id, "merge_id": merge_id})
                        print(f"  -> Updated {cnt} rows.")
                    else:
                        print(f"  -> [DRY RUN] Would update {cnt} rows.")

            # 4. Delete the duplicate company row
            print(f"\n[Step 4] Deleting duplicate company ID {merge_id}...")
            if apply_changes:
                conn.execute(text(f"DELETE FROM {DB_SCHEMA}.ma_company WHERE company_id = :merge_id"), {"merge_id": merge_id})
                print("-> Deleted successfully.")
            else:
                print(f"-> [DRY RUN] Would delete row with company_id {merge_id} from {DB_SCHEMA}.ma_company")

            if apply_changes:
                trans.commit()
                print("\nMigration committed successfully to the database!")
            else:
                trans.rollback()
                print("\nDry run completed successfully. No changes were committed.")
                
        except Exception as e:
            trans.rollback()
            print("\nError encountered during migration. Transaction rolled back.", e)
            raise

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Merge two duplicate companies in the database.")
    parser.add_argument("--apply", action="store_true", help="Apply the changes directly to the database. Without this, the script runs in dry-run mode.")
    args = parser.parse_args()
    
    run_migration(args.apply)
