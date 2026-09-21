#!/usr/bin/env python3
"""
2024_DATA_UPDATED.xlsx -> Postgres. One self-contained script.

What it does, in order:
  1. Connect to the database.
  2. Check whether the schema exists. Create it if it doesn't.
  3. Check whether the table, counter, function and trigger exist. Create what's missing.
  4. Read the Excel file.
  5. Insert the rows. Rows already present are skipped, so re-running is safe.

Every row gets an auto-generated unique id: MDA<year>_<serial>, e.g. MDA2024_01.
The id is assigned by a database trigger, so rows inserted later by any other
client get one automatically too.

Usage:
    export DB_URL='postgresql://user:pass@host:5432/postgres'
    python setup_and_load.py

    # or without an env var:
    python setup_and_load.py --db-url 'postgresql://...'

Requires: openpyxl, psycopg2-binary
"""
import argparse
import datetime as dt
import hashlib
import io
import os
import re
import sys

try:
    import openpyxl
    import psycopg2
    from psycopg2 import sql
except ImportError as e:
    sys.exit(f"Missing package: {e.name}\nRun:  pip install openpyxl psycopg2-binary")

DEFAULT_SCHEMA = "ankkumam_data_excel"
DEFAULT_TABLE = "data"
DEFAULT_EXCEL = "2024 DATA UPDATED 07-09 (1).xlsx"

# (Excel header, db column, pg type) in sheet order, left to right.
COLUMNS = [
    # (None,                                      "column_1",                     "text"),
    ("FINAL STATUS",                            "final_status",                 "text"),
    ("AVANAH",                                  "client",                       "text"),
    ("Agency Nomination Date",                  "agency_nomination_date",       "date"),
    ("Invoice no.",                             "invoice_no",                   "text"),
    ("PDA",                                     "pda",                          "text"),
    ("PDA received from OPS / AGENTS",          "pda_received_date",            "date"),
    ("PDA Status",                              "pda_status",                   "text"),
    ("PDA Processing Date",                     "pda_processing_date",          "date"),
    ("PDA PAYMENT STATUS",                      "pda_payment_status",           "text"),
    ("FDA",                                     "fda",                          "text"),
    ("FDA received from OPS / AGENTS",          "fda_received_date",            "date"),
    ("FDA Status",                              "fda_status",                   "text"),
    ("Vessel",                                  "vessel",                       "text"),
    ("VOYAGE",                                  "voyage",                       "integer"),
    ("PORT",                                    "port",                         "text"),
    ("COUNTRY",                                 "country",                      "text"),
    ("PURPOSE",                                 "purpose",                      "text"),
    ("CARGO",                                   "cargo",                        "text"),
    ("ETA",                                     "eta",                          "date"),
    ("ETD",                                     "etd",                          "date"),
    ("PORT AGENT",                              "port_agent",                   "text"),
    ("Estimated Amount ( Softmar )",            "estimated_amount_softmar",     "text"),
    ("PDA Amount",                              "pda_amount",                   "text"),
    ("Remittance Details\n( Currency Details )", "remittance_details",          "text"),
    ("FDA Amount (USD)",                        "fda_amount_usd",               "numeric(18,2)"),
    ("Agents Roe",                              "agents_roe",                   "numeric(18,6)"),
    ("Actual Roe from OANDA",                   "actual_roe_oanda",             "numeric(18,6)"),
    ("Roe loss USD",                            "roe_loss_usd",                 "numeric(18,2)"),
    ("Detailed Entry Softmar (Yes/No)",         "detailed_entry_softmar",       "text"),
    ("WS/Chart A/C in Softmar (Yes/NA)",        "ws_chart_ac_in_softmar",       "text"),
    ("Owners Items Rejected (Yes/NA)",          "owners_items_rejected",        "text"),
    ("Towage / Agency Agreement (Yes/NA)",      "towage_agency_agreement",      "text"),
    ("FDA Processing Date(Eiger Completion)",   "fda_processing_date",          "date"),
    ("Days Outstanding",                        "days_outstanding",             "numeric(10,2)"),
    (None,                                      "column_36",                    "text"),
    ("Remarks",                                 "remarks",                      "text"),
    ("Savings AT PDA ( $ )",                    "savings_at_pda_usd",           "numeric(18,2)"),
    ("Savings AT FDA ( $ )",                    "savings_at_fda_usd",           "numeric(18,2)"),
    ("TOTAL savings ( $ )",                     "total_savings_usd",            "numeric(18,2)"),
    ("REASON",                                  "reason",                       "text"),
]

DATA_COLS = [c for _, c, _ in COLUMNS]
LOAD_COLS = DATA_COLS + ["excel_row", "row_hash"]

# Order the trigger tries when Agency Nomination Date is empty.
YEAR_FALLBACK = ["agency_nomination_date", "eta", "pda_received_date", "fda_received_date"]


# ------------------------------------------------------------------ excel

def parse_date(v):
    if v is None:
        return None
    if isinstance(v, (dt.datetime, dt.date)):
        return (v.date() if isinstance(v, dt.datetime) else v).isoformat()
    s = str(v).strip()
    if not s:
        return None
    for fmt in ("%m/%d/%Y", "%d/%m/%Y", "%Y-%m-%d", "%d-%b-%y", "%d-%b-%Y", "%d %b %Y"):
        try:
            return dt.datetime.strptime(s, fmt).date().isoformat()
        except ValueError:
            pass
    m = re.match(r"^\s*(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\d*\s*$", s)   # "9 Sep 20242"
    if m:
        try:
            return dt.datetime.strptime(" ".join(m.groups()), "%d %b %Y").date().isoformat()
        except ValueError:
            pass
    raise ValueError(f"could not parse date {v!r}")


def parse_number(v):
    if v is None:
        return None
    if isinstance(v, bool):
        raise ValueError(f"expected a number, found {v!r}")
    if isinstance(v, (int, float)):
        return repr(v) if isinstance(v, float) else str(v)
    if not str(v).strip():
        return None
    raise ValueError(f"expected a number, found text {v!r}")


def parse_text(v):
    """Kept verbatim. Only a truly empty cell becomes NULL."""
    if v is None:
        return None
    if isinstance(v, (dt.datetime, dt.date)):
        return (v.date() if isinstance(v, dt.datetime) else v).isoformat()
    if isinstance(v, float) and v.is_integer():
        return str(int(v))
    return str(v)


def read_sheet(path, sheet=None):
    if not os.path.exists(path):
        sys.exit(f"Excel file not found: {path}\nPass the right path with --excel.")

    wb = openpyxl.load_workbook(path, data_only=True, read_only=True)
    ws = wb[sheet] if sheet else wb[wb.sheetnames[0]]
    rows = ws.iter_rows(values_only=True)

    header = list(next(rows))
    for i, (expected, dbcol, _) in enumerate(COLUMNS):
        found = header[i] if i < len(header) else None
        if (found or None) != expected:
            sys.exit(f"Sheet layout changed at column {i + 1}: expected {expected!r}, "
                     f"found {found!r}. Update COLUMNS in this script.")

    out = []
    for excel_row, r in enumerate(rows, start=2):
        if all(v is None for v in r):
            continue
        rec = []
        for i, (_, dbcol, pgtype) in enumerate(COLUMNS):
            raw = r[i] if i < len(r) else None
            try:
                if pgtype == "date":
                    rec.append(parse_date(raw))
                elif pgtype == "integer" or pgtype.startswith("numeric"):
                    rec.append(parse_number(raw))
                else:
                    rec.append(parse_text(raw))
            except ValueError as e:
                sys.exit(f"Excel row {excel_row}, column '{dbcol}': {e}")
        digest = hashlib.md5(
            "\x1f".join("" if v is None else v for v in rec).encode("utf-8")
        ).hexdigest()
        rec += [str(excel_row), digest]
        out.append(rec)

    wb.close()
    if not out:
        sys.exit("The sheet has no data rows.")
    return out


# -------------------------------------------------------------------- ddl

def build_ddl(schema, table, pad, per_year):
    q = f'"{schema}"'
    width = max(len(c) for c in DATA_COLS)
    cols = ",\n".join(f"    {c.ljust(width)} {t}" for _, c, t in COLUMNS)
    year_expr = "\n           ".join(f"EXTRACT(YEAR FROM NEW.{c})::int," for c in YEAR_FALLBACK)
    counter_key = "v_year" if per_year else "0"

    return f"""
CREATE SCHEMA IF NOT EXISTS {q};

CREATE TABLE IF NOT EXISTS {q}."{table}" (
    mda_id        text PRIMARY KEY,
{cols},
    excel_row     integer,
    row_hash      text,
    loaded_at     timestamptz NOT NULL DEFAULT now()
);

-- Upgrade path: a table created by an earlier version of this script has no
-- row_hash. Add it so the duplicate check below works either way.
ALTER TABLE {q}."{table}" ADD COLUMN IF NOT EXISTS row_hash text;
CREATE UNIQUE INDEX IF NOT EXISTS ux_{table}_row_hash ON {q}."{table}" (row_hash);

-- Serial counter behind the generated id.
-- year_key = 0 means one running serial shared across all years.
CREATE TABLE IF NOT EXISTS {q}.mda_id_counter (
    year_key    integer PRIMARY KEY,
    last_serial integer NOT NULL DEFAULT 0
);

CREATE OR REPLACE FUNCTION {q}.set_mda_id() RETURNS trigger AS $$
DECLARE
    v_year   integer;
    v_serial integer;
BEGIN
    IF NEW.mda_id IS NOT NULL THEN
        RETURN NEW;
    END IF;

    v_year := COALESCE(
           {year_expr}
           EXTRACT(YEAR FROM now())::int
    );

    INSERT INTO {q}.mda_id_counter (year_key, last_serial)
         VALUES ({counter_key}, 1)
    ON CONFLICT (year_key)
      DO UPDATE SET last_serial = {q}.mda_id_counter.last_serial + 1
      RETURNING last_serial INTO v_serial;

    -- lpad() truncates when the value is longer than the target width, so the
    -- width must never drop below the serial's own length.
    NEW.mda_id := 'MDA' || v_year::text || '_'
                  || lpad(v_serial::text, GREATEST({pad}, length(v_serial::text)), '0');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_set_mda_id ON {q}."{table}";
CREATE TRIGGER trg_set_mda_id
    BEFORE INSERT ON {q}."{table}"
    FOR EACH ROW EXECUTE FUNCTION {q}.set_mda_id();

CREATE INDEX IF NOT EXISTS idx_{table}_client ON {q}."{table}" (client);
CREATE INDEX IF NOT EXISTS idx_{table}_vessel ON {q}."{table}" (vessel);
CREATE INDEX IF NOT EXISTS idx_{table}_port   ON {q}."{table}" (port);
CREATE INDEX IF NOT EXISTS idx_{table}_eta    ON {q}."{table}" (eta);
CREATE INDEX IF NOT EXISTS idx_{table}_status ON {q}."{table}" (final_status);
""".strip() + "\n"


# ------------------------------------------------------------------- misc

def get_db_url(cli_value):
    if cli_value:
        return cli_value
    url = os.environ.get("DB_URL")
    if not url:
        for folder in (os.getcwd(), os.path.dirname(os.path.abspath(__file__))):
            path = os.path.join(folder, ".env")
            if os.path.exists(path):
                for line in open(path):
                    if line.strip().startswith("DB_URL="):
                        url = line.strip().split("=", 1)[1].strip().strip("'\"")
                        break
            if url:
                break
    if not url:
        sys.exit("No database URL.\nSet DB_URL, add it to a .env file, or pass --db-url.")
    return url


def exists(cur, query, params):
    cur.execute(query, params)
    return cur.fetchone() is not None


def main():
    ap = argparse.ArgumentParser(description="Create the schema if needed, then load the Excel data.")
    ap.add_argument("--excel", default=DEFAULT_EXCEL)
    ap.add_argument("--sheet", default=None)
    ap.add_argument("--schema", default=DEFAULT_SCHEMA)
    ap.add_argument("--table", default=DEFAULT_TABLE)
    ap.add_argument("--db-url", default=None)
    ap.add_argument("--pad", type=int, default=2,
                    help="minimum serial width (2 -> MDA2024_01, 4 -> MDA2024_0001)")
    ap.add_argument("--serial-per-year", action="store_true",
                    help="restart the serial at 1 for each year")
    ap.add_argument("--reload", action="store_true",
                    help="delete existing rows and reset the counter before loading")
    ap.add_argument("--drop", action="store_true",
                    help="drop the table and counter entirely, then rebuild")
    ap.add_argument("--print-ddl", action="store_true", help="print the SQL and exit")
    args = ap.parse_args()

    if args.print_ddl:
        print(build_ddl(args.schema, args.table, args.pad, args.serial_per_year))
        return

    print(f"Reading {args.excel} ...")
    data = read_sheet(args.excel, args.sheet)
    print(f"  {len(data)} rows x {len(DATA_COLS)} columns\n")

    conn = psycopg2.connect(get_db_url(args.db_url))
    cur = conn.cursor()
    ident = sql.Identifier(args.schema, args.table)

    # --- step 1: schema -------------------------------------------------
    schema_there = exists(cur,
        "SELECT 1 FROM information_schema.schemata WHERE schema_name = %s", (args.schema,))
    print(f"Schema '{args.schema}': {'already exists' if schema_there else 'not found, creating'}")

    # --- step 2: table --------------------------------------------------
    table_there = schema_there and exists(cur,
        "SELECT 1 FROM information_schema.tables WHERE table_schema = %s AND table_name = %s",
        (args.schema, args.table))
    print(f"Table  '{args.schema}.{args.table}': "
          f"{'already exists' if table_there else 'not found, creating'}")

    if args.drop and table_there:
        cur.execute(sql.SQL("DROP TABLE IF EXISTS {}").format(ident))
        cur.execute(sql.SQL("DROP TABLE IF EXISTS {}").format(
            sql.Identifier(args.schema, "mda_id_counter")))
        print("  --drop: table and counter removed")
        table_there = False

    # Creates whatever is missing; harmless when everything is already there.
    cur.execute(build_ddl(args.schema, args.table, args.pad, args.serial_per_year))
    print("  schema, table, counter, function and trigger are in place")

    before = 0
    if table_there:
        cur.execute(sql.SQL("SELECT count(*) FROM {}").format(ident))
        before = cur.fetchone()[0]
        print(f"  table currently holds {before} rows")

    if args.reload and not args.drop:
        cur.execute(sql.SQL("TRUNCATE {}").format(ident))
        cur.execute(sql.SQL("TRUNCATE {}").format(
            sql.Identifier(args.schema, "mda_id_counter")))
        print("  --reload: rows deleted and serial counter reset")
        before = 0

    # --- step 3: load ---------------------------------------------------
    # COPY into a temp table first, then insert only the rows we don't have.
    # That keeps re-runs safe and still lets the trigger assign the ids.
    coldefs = sql.SQL(", ").join(
        sql.SQL("{} text").format(sql.Identifier(c)) for c in LOAD_COLS)
    cur.execute(sql.SQL("CREATE TEMP TABLE staging ({}) ON COMMIT DROP").format(coldefs))

    def enc(v):
        return "\\N" if v is None else '"' + v.replace('"', '""') + '"'

    buf = io.StringIO()
    for rec in data:
        buf.write(",".join(enc(v) for v in rec) + "\n")
    buf.seek(0)
    cur.copy_expert(
        "COPY staging FROM STDIN WITH (FORMAT csv, QUOTE '\"', NULL '\\N')", buf)

    casts = sql.SQL(", ").join(
        sql.SQL("{}::{}").format(sql.Identifier(c), sql.SQL(t)) for _, c, t in COLUMNS
    ) + sql.SQL(", excel_row::integer, row_hash")
    names = sql.SQL(", ").join(sql.Identifier(c) for c in LOAD_COLS)

    cur.execute(sql.SQL(
        "INSERT INTO {} ({}) SELECT {} FROM staging ORDER BY excel_row::integer "
        "ON CONFLICT (row_hash) DO NOTHING"
    ).format(ident, names, casts))
    inserted = cur.rowcount
    skipped = len(data) - inserted

    print(f"\nInserted {inserted} new rows"
          + (f", skipped {skipped} already present" if skipped else ""))

    conn.commit()

    # --- step 4: verify -------------------------------------------------
    cur.execute(sql.SQL(
        "SELECT count(*), count(DISTINCT mda_id) FROM {}").format(ident))
    total, distinct = cur.fetchone()
    cur.execute(sql.SQL(
        "SELECT mda_id FROM {} ORDER BY loaded_at, excel_row LIMIT 1").format(ident))
    first = cur.fetchone()
    cur.execute(sql.SQL(
        "SELECT mda_id FROM {} ORDER BY loaded_at DESC, excel_row DESC LIMIT 1").format(ident))
    last = cur.fetchone()

    print(f"Table now holds {total} rows, {distinct} distinct ids")
    if first and last:
        print(f"  id range: {first[0]} ... {last[0]}")
    if total != distinct:
        print("  WARNING: ids are not unique. Investigate before using this table.")

    cur.close()
    conn.close()
    print("\nDone.")


if __name__ == "__main__":
    main()