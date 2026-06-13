from demurrage.api.endpoints import router
from demurrage.init_db import init_db

# Automatically verify schema and create tables on startup
try:
    init_db()
except Exception as e:
    import logging
    logging.getLogger("app_logger").error(f"Auto-initialization of Demurrage DB failed: {e}")
