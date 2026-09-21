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
    
    update_view_sql = f"""
    CREATE OR REPLACE VIEW {DB_SCHEMA}.vw_dashboard_data AS
     SELECT td.disbursement_seq,
        td.client_id,
        fda.fda_etd AS etd,
        (vsl.fda_vsl_dtls ->> 'name'::text) AS vessel_name,
        td.country_id,
        country.name AS country_name,
        td.port_id,
        port.name AS port_name,
        (NULLIF((vsl.fda_vsl_dtls ->> 'loa'::text), ''::text))::numeric AS loa,
        (NULLIF((vsl.fda_vsl_dtls ->> 'grt'::text), ''::text))::numeric AS grt,
        (NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'::text), ''::text))::numeric AS rgrt,
        (NULLIF((vsl.fda_vsl_dtls ->> 'nrt'::text), ''::text))::numeric AS nrt,
        td.loss_prevention_pda,
        td.loss_prevention_fda,
        td.total_loss_prevented,
        td.loss_prevented_reason,
            CASE
                WHEN (fda.state = 'D'::"char") THEN NULL::double precision
                WHEN (upper((fda.fda_currency_from)::text) = 'USD'::text) THEN (((fda.portagent_fda_data -> 'services'::text) ->> 'grand_total'::text))::double precision
                WHEN (upper((fda.fda_currency_to)::text) = 'USD'::text) THEN (round(((((fda.portagent_fda_data -> 'services'::text) ->> 'grand_total'::text))::numeric * (fda.fda_roe)::numeric), 2))::double precision
                WHEN (upper((fda.pmt_curr_to)::text) = 'USD'::text) THEN fda.portagent_fda_amount
                ELSE COALESCE(fda.fda_amount, fda.portagent_fda_amount)
            END AS fda_amount,
            CASE
                WHEN (upper((pda.pda_currency_from)::text) = 'USD'::text) THEN (((pda.portagent_pda_data -> 'services'::text) ->> 'grand_total'::text))::double precision
                WHEN (upper((pda.pda_currency_to)::text) = 'USD'::text) THEN (round(((((pda.portagent_pda_data -> 'services'::text) ->> 'grand_total'::text))::numeric * (pda.pda_roe)::numeric), 2))::double precision
                WHEN (upper((pda.pmt_curr_to)::text) = 'USD'::text) THEN pda.portagent_pda_amount
                ELSE pda.portagent_pda_amount
            END AS pda_amount,
            CASE
                WHEN (fda.state = 'D'::"char") THEN ''::character varying
                ELSE fda.manual_fda_amount
            END AS manual_fda_amount,
        (pda.manual_pda_amount)::text AS manual_pda_amount
       FROM ((((( {DB_SCHEMA}.txn_fda fda
         JOIN {DB_SCHEMA}.txn_disbursement td ON ((td.disbursement_seq = fda.disbursement_seq)))
         LEFT JOIN ( SELECT txn_pda.disbursement_seq,
                txn_pda.manual_pda_amount,
                txn_pda.portagent_pda_amount,
                txn_pda.pda_currency_to,
                txn_pda.pda_currency_from,
                txn_pda.portagent_pda_data,
                txn_pda.pda_roe,
                txn_pda.pmt_curr_to
               FROM {DB_SCHEMA}.txn_pda
              ORDER BY txn_pda.disbursement_seq) pda ON ((td.disbursement_seq = pda.disbursement_seq)))
         LEFT JOIN {DB_SCHEMA}.txn_pda_vessel_details vsl ON ((td.pda_vsl_id = vsl.pda_vsl_id)))
         LEFT JOIN {DB_SCHEMA}.ma_country country ON ((td.country_id = country.country_id)))
         LEFT JOIN {DB_SCHEMA}.ma_port port ON ((td.port_id = port.port_id)))
      WHERE ((fda.status = 7) AND ((fda.state IS NULL) OR (fda.state <> 'D'::"char")))
    UNION ALL
     SELECT td.disbursement_seq,
        td.client_id,
        pda.pda_etd AS etd,
        (vsl.vsl_dtls ->> 'name'::text) AS vessel_name,
        td.country_id,
        country.name AS country_name,
        td.port_id,
        port.name AS port_name,
        (NULLIF((vsl.vsl_dtls ->> 'loa'::text), ''::text))::numeric AS loa,
        (NULLIF((vsl.vsl_dtls ->> 'grt'::text), ''::text))::numeric AS grt,
        (NULLIF((vsl.vsl_dtls ->> 'rgrt'::text), ''::text))::numeric AS rgrt,
        (NULLIF((vsl.vsl_dtls ->> 'nrt'::text), ''::text))::numeric AS nrt,
        td.loss_prevention_pda,
        td.loss_prevention_fda,
        td.total_loss_prevented,
        td.loss_prevented_reason,
        NULL::double precision AS fda_amount,
            CASE
                WHEN (upper((pda.pda_currency_from)::text) = 'USD'::text) THEN (((pda.portagent_pda_data -> 'services'::text) ->> 'grand_total'::text))::double precision
                WHEN (upper((pda.pda_currency_to)::text) = 'USD'::text) THEN (round(((((pda.portagent_pda_data -> 'services'::text) ->> 'grand_total'::text))::numeric * (pda.pda_roe)::numeric), 2))::double precision
                WHEN (upper((pda.pmt_curr_to)::text) = 'USD'::text) THEN pda.portagent_pda_amount
                ELSE NULL::double precision
            END AS pda_amount,
        NULL::text AS manual_fda_amount,
        (pda.manual_pda_amount)::text AS manual_pda_amount
       FROM (((( {DB_SCHEMA}.txn_pda pda
         JOIN {DB_SCHEMA}.txn_disbursement td ON ((td.disbursement_seq = pda.disbursement_seq)))
         LEFT JOIN {DB_SCHEMA}.txn_pda_vessel_details vsl ON ((td.pda_vsl_id = vsl.pda_vsl_id)))
         LEFT JOIN {DB_SCHEMA}.ma_country country ON ((td.country_id = country.country_id)))
         LEFT JOIN {DB_SCHEMA}.ma_port port ON ((td.port_id = port.port_id)))
      WHERE ((pda.status = 7) AND (NOT (EXISTS ( SELECT 1
               FROM ( {DB_SCHEMA}.txn_fda fda
                 JOIN {DB_SCHEMA}.txn_disbursement td_fda ON ((td_fda.disbursement_seq = fda.disbursement_seq)))
              WHERE ((fda.status = 7) AND ((fda.state IS NULL) OR (fda.state <> 'D'::"char")) AND (td_fda.disbursement_seq = td.disbursement_seq))))) AND ((pda.state IS NULL) OR (pda.state <> 'D'::"char")));
    """
    
    print("====================================================================")
    print(f"Database View Update: {DB_SCHEMA}.vw_dashboard_data")
    print(f"Database URL: {DB_URL.split('@')[-1] if '@' in DB_URL else DB_URL}")
    print(f"Mode: {'APPLY' if apply_changes else 'DRY RUN'}")
    print("====================================================================\n")

    with engine.connect() as conn:
        cur_cnt = conn.execute(text(f"SELECT COUNT(*) FROM {DB_SCHEMA}.vw_dashboard_data")).scalar()
        print(f"Current records in dashboard view: {cur_cnt}")
        
        if apply_changes:
            print("Applying new view definition...")
            conn.execute(text(update_view_sql))
            new_cnt = conn.execute(text(f"SELECT COUNT(*) FROM {DB_SCHEMA}.vw_dashboard_data")).scalar()
            print(f"Success! New records in dashboard view: {new_cnt}")
        else:
            print("\n[DRY RUN] View updates not executed. Run with --apply to execute.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update the database dashboard data view.")
    parser.add_argument("--apply", action="store_true", help="Apply the view changes directly to the database.")
    args = parser.parse_args()
    
    run_migration(args.apply)
