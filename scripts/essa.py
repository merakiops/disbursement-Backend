#!/usr/bin/env python3
"""
merged_essa.xlsx -> Postgres. One self-contained script.

Same schema, same table, same trigger as the other loaders. The table is NOT
changed in any way. This sheet already uses the table's own column names, so
every column maps one to one.

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
    python setup_and_load_essa.py

    # or without an env var:
    python setup_and_load_essa.py --db-url 'postgresql://...'

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
DEFAULT_EXCEL = "merged_essa.xlsx"
DEFAULT_SHEET = "Merged"

# ---------------------------------------------------------------- the table
#
# The full table shape, unchanged. Used only to create the table when it is not
# there yet, so a fresh database ends up identical to the one the other loaders
# build. Nothing here is altered by this script.
TABLE_COLUMNS = [
    ("column_1",                 "text"),
    ("client",                   "text"),
    ("final_status",             "text"),
    ("pic",                      "text"),
    ("ops_pic",                  "text"),
    ("agency_nomination_date",   "date"),
    ("invoice_no",               "text"),
    ("pda",                      "text"),
    ("pda_received_date",        "date"),
    ("pda_status",               "text"),
    ("pda_processing_date",      "date"),
    ("pda_payment_status",       "text"),
    ("fda",                      "text"),
    ("fda_received_date",        "date"),
    ("fda_status",               "text"),
    ("vessel",                   "text"),
    ("voyage",                   "integer"),
    ("port",                     "text"),
    ("country",                  "text"),
    ("purpose",                  "text"),
    ("cargo",                    "text"),
    ("eta",                      "date"),
    ("etd",                      "date"),
    ("port_agent",               "text"),
    ("estimated_amount_softmar", "text"),
    ("pda_amount",               "text"),
    ("remittance_details",       "text"),
    ("fda_amount_usd",           "numeric(18,2)"),
    ("agents_roe",               "numeric(18,6)"),
    ("actual_roe_oanda",         "numeric(18,6)"),
    ("roe_loss_usd",             "numeric(18,2)"),
    ("detailed_entry_softmar",   "text"),
    ("ws_chart_ac_in_softmar",   "text"),
    ("owners_items_rejected",    "text"),
    ("towage_agency_agreement",  "text"),
    ("fda_processing_date",      "date"),
    ("days_outstanding",         "numeric(10,2)"),
    ("column_36",                "text"),
    ("remarks",                  "text"),
    ("savings_at_pda_usd",       "numeric(18,2)"),
    ("savings_at_fda_usd",       "numeric(18,2)"),
    ("total_savings_usd",        "numeric(18,2)"),
    ("reason",                   "text"),
    ("source",                   "text"),
]
PGTYPE = dict(TABLE_COLUMNS)

# ---------------------------------------------------------------- the sheet
#
# (Excel header, db column) in sheet order, left to right. 44 columns.
# This sheet already uses the table's own column names, so the mapping is
# one-to-one. The only thing worth knowing:
#   'mda_id' -> column_1   The sheet's mda_id holds the source system's own id.
#                          The table's mda_id is the trigger-generated primary
#                          key, so the two must not collide.
SHEET_MAP = [
    ("mda_id",                   "column_1"),
    ("client",                   "client"),
    ("final_status",             "final_status"),
    ("pic",                      "pic"),
    ("ops_pic",                  "ops_pic"),
    ("agency_nomination_date",   "agency_nomination_date"),
    ("invoice_no",               "invoice_no"),
    ("pda",                      "pda"),
    ("pda_received_date",        "pda_received_date"),
    ("pda_status",               "pda_status"),
    ("pda_processing_date",      "pda_processing_date"),
    ("pda_payment_status",       "pda_payment_status"),
    ("fda",                      "fda"),
    ("fda_received_date",        "fda_received_date"),
    ("fda_status",               "fda_status"),
    ("vessel",                   "vessel"),
    ("voyage",                   "voyage"),
    ("port",                     "port"),
    ("country",                  "country"),
    ("purpose",                  "purpose"),
    ("cargo",                    "cargo"),
    ("eta",                      "eta"),
    ("etd",                      "etd"),
    ("port_agent",               "port_agent"),
    ("estimated_amount_softmar", "estimated_amount_softmar"),
    ("pda_amount",               "pda_amount"),
    ("remittance_details",       "remittance_details"),
    ("fda_amount_usd",           "fda_amount_usd"),
    ("agents_roe",               "agents_roe"),
    ("actual_roe_oanda",         "actual_roe_oanda"),
    ("roe_loss_usd",             "roe_loss_usd"),
    ("detailed_entry_softmar",   "detailed_entry_softmar"),
    ("ws_chart_ac_in_softmar",   "ws_chart_ac_in_softmar"),
    ("owners_items_rejected",    "owners_items_rejected"),
    ("towage_agency_agreement",  "towage_agency_agreement"),
    ("fda_processing_date",      "fda_processing_date"),
    ("days_outstanding",         "days_outstanding"),
    ("column_36",                "column_36"),
    ("remarks",                  "remarks"),
    ("savings_at_pda_usd",       "savings_at_pda_usd"),
    ("savings_at_fda_usd",       "savings_at_fda_usd"),
    ("total_savings_usd",        "total_savings_usd"),
    ("reason",                   "reason"),
    ("source",                   "source"),
]

DATA_COLS = [c for _, c in SHEET_MAP]
LOAD_COLS = DATA_COLS + ["excel_row", "row_hash"]

# A row with none of these filled is a stray/total line, not a port call.
IDENTITY_COLS = ["vessel", "port", "eta"]

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


# Cells that could not be read as numbers. Reported at the end of read_sheet().
BAD_NUMBERS = []


def clean_number(s):
    """Return a float, or None when the text is not a number at all.

    The merged sheet carries amounts in several shapes:
        '$4122950'    currency symbol
        '52 310.49'   space as thousands separator
        '21.773,56'   European style, dot thousands and comma decimal
        '1,234.50'    English style, comma thousands and dot decimal
    """
    s = re.sub(r"[^\d.,\-]", "", s)          # drop $, spaces, letters
    if not s or s in {"-", ".", ","}:
        return None
    has_dot, has_comma = "." in s, "," in s
    if has_dot and has_comma:
        # whichever separator comes last is the decimal point
        dec = "," if s.rfind(",") > s.rfind(".") else "."
        s = s.replace("," if dec == "." else ".", "").replace(dec, ".")
    elif has_comma:
        tail = s.split(",")[-1]
        s = s.replace(",", "." if s.count(",") == 1 and len(tail) in (1, 2) else "")
    try:
        return float(s)
    except ValueError:
        return None


def parse_number(v, where=""):
    if v is None:
        return None
    if isinstance(v, bool):
        raise ValueError(f"expected a number, found {v!r}")
    if isinstance(v, (int, float)):
        return repr(v) if isinstance(v, float) else str(v)
    s = str(v).strip()
    if not s:
        return None
    f = clean_number(s)
    if f is None:
        BAD_NUMBERS.append((where, v))
        return None
    return str(int(f)) if f.is_integer() else repr(f)


def parse_text(v):
    """Kept verbatim. Only a truly empty cell becomes NULL."""
    if v is None:
        return None
    if isinstance(v, (dt.datetime, dt.date)):
        return (v.date() if isinstance(v, dt.datetime) else v).isoformat()
    if isinstance(v, float) and v.is_integer():
        return str(int(v))
    return str(v)


def read_sheet(path, sheet=None, keep_empty=False):
    if not os.path.exists(path):
        sys.exit(f"Excel file not found: {path}\nPass the right path with --excel.")

    BAD_NUMBERS.clear()
    wb = openpyxl.load_workbook(path, data_only=True, read_only=True)
    ws = wb[sheet] if sheet else wb[wb.sheetnames[0]]
    rows = ws.iter_rows(values_only=True)

    def norm(h):
        """Headers are compared case- and whitespace-insensitively."""
        return None if h is None else " ".join(str(h).strip().lower().split())

    header = list(next(rows))
    for i, (expected, dbcol) in enumerate(SHEET_MAP):
        found = header[i] if i < len(header) else None
        if norm(found) != norm(expected):
            sys.exit(f"Sheet layout changed at column {i + 1}: expected {expected!r}, "
                     f"found {found!r}. Update SHEET_MAP in this script.")

    ident_at = [i for i, (_, c) in enumerate(SHEET_MAP) if c in IDENTITY_COLS]

    out, stray = [], []
    for excel_row, r in enumerate(rows, start=2):
        if all(v is None for v in r):
            continue
        if not keep_empty and all(r[i] is None for i in ident_at if i < len(r)):
            stray.append(excel_row)
            continue
        rec = []
        for i, (_, dbcol) in enumerate(SHEET_MAP):
            raw = r[i] if i < len(r) else None
            pgtype = PGTYPE[dbcol]
            try:
                if pgtype == "date":
                    rec.append(parse_date(raw))
                elif pgtype == "integer" or pgtype.startswith("numeric"):
                    rec.append(parse_number(raw, f"row {excel_row} / {dbcol}"))
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
    if BAD_NUMBERS:
        print(f"  {len(BAD_NUMBERS)} cell(s) were not numbers and went in as NULL:")
        for where, v in BAD_NUMBERS[:10]:
            print(f"      {where}: {v!r}")
        if len(BAD_NUMBERS) > 10:
            print(f"      ... and {len(BAD_NUMBERS) - 10} more")
    if stray:
        print(f"  skipped {len(stray)} row(s) with no vessel/port/ETA: "
              f"excel row {', '.join(map(str, stray))}  (use --keep-empty to load them)")
    if not out:
        sys.exit("The sheet has no data rows.")
    return out


# -------------------------------------------------------------------- ddl

def build_ddl(schema, table, pad, per_year):
    q = f'"{schema}"'
    width = max(len(c) for c, _ in TABLE_COLUMNS)
    cols = ",\n".join(f"    {c.ljust(width)} {t}" for c, t in TABLE_COLUMNS)
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
    ap.add_argument("--sheet", default=DEFAULT_SHEET)
    ap.add_argument("--schema", default=DEFAULT_SCHEMA)
    ap.add_argument("--table", default=DEFAULT_TABLE)
    ap.add_argument("--db-url", default=None)
    ap.add_argument("--keep-empty", action="store_true",
                    help="also load rows that have no vessel, port and ETA")
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

    load_cols = list(LOAD_COLS)
    print(f"Reading {args.excel} ...")
    data = read_sheet(args.excel, args.sheet, args.keep_empty)
    print(f"  {len(data)} rows x {len(DATA_COLS)} mapped columns"
          f"  (every table column is mapped)\n")

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

    # Every column this sheet writes to must already exist. Stop rather than
    # alter the table.
    cur.execute(
        "SELECT column_name FROM information_schema.columns "
        "WHERE table_schema = %s AND table_name = %s", (args.schema, args.table))
    have = {r[0] for r in cur.fetchall()}
    absent = [c for c in load_cols if c not in have]
    if absent:
        sys.exit(f"Table is missing these columns: {', '.join(absent)}. "
                 f"Add them before loading, or drop them from SHEET_MAP.")

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
        sql.SQL("{} text").format(sql.Identifier(c)) for c in load_cols)
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
        sql.SQL("{}::{}").format(sql.Identifier(c), sql.SQL(PGTYPE[c])) for _, c in SHEET_MAP
    ) + sql.SQL(", excel_row::integer, row_hash")
    names = sql.SQL(", ").join(sql.Identifier(c) for c in load_cols)

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