
import os
from sqlalchemy import Column, Integer, inspect, ForeignKey
from sqlalchemy.orm import relationship
from app.db import Base, engine

SCHEMA_NAME = os.getenv("DB_SCHEMA")
_MODEL_CACHE = {}

def create_txn_model(service_name: str):
    table = f"txn_{service_name.lower()}"

    if table in _MODEL_CACHE:
        return _MODEL_CACHE[table]

    inspector = inspect(engine)
    columns = inspector.get_columns(table, schema=SCHEMA_NAME)
    fks = inspector.get_foreign_keys(table, schema=SCHEMA_NAME)

    if not columns:
        raise Exception(f"Table {SCHEMA_NAME}.{table} not found in DB")

    attrs = {
        "__tablename__": table,
        "__table_args__": {"schema": SCHEMA_NAME, "extend_existing": True}
    }

    # ---- Columns ----
    has_pk = False

    for col in columns:
        is_pk = bool(col.get("primary_key")) or bool(col.get("identity")) or col.get("autoincrement")
        has_pk = has_pk or is_pk
        attrs[col["name"]] = Column(
            col["name"],
            col["type"],
            primary_key=is_pk,
            nullable=col["nullable"]
        )


    # ---- Guarantee PK (VERY IMPORTANT) ----
    if not has_pk:
        attrs["id"] = Column(Integer, primary_key=True, autoincrement=True)

    # ---- Foreign keys + relationships ----
    for fk in fks:
        local_col = fk["constrained_columns"][0]
        ref_table = fk["referred_table"]
        ref_schema = fk.get("referred_schema") or SCHEMA_NAME
        ref_col = fk["referred_columns"][0]

        # Attach FK constraint
        attrs[local_col] = Column(
            local_col,
            inspector.get_columns(table, schema=SCHEMA_NAME)
                [[c["name"] for c in columns].index(local_col)]["type"],
            ForeignKey(f"{ref_schema}.{ref_table}.{ref_col}")
        )

        # ORM relationship
        attrs[f"{local_col}_obj"] = relationship(
            ref_table.title().replace("_", ""),
            lazy="joined"
        )

    # ---- Create dynamic ORM model ----
    model = type(table.title().replace("_", ""), (Base,), attrs)

    _MODEL_CACHE[table] = model
    return model
