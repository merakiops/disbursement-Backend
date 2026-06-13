import os
from urllib.parse import urlparse, urlunparse
from dotenv import load_dotenv

# Load main env configuration
load_dotenv('.env')
env = os.getenv('ENV', 'prod')
env_files = {
    'prod': '.env.prod'
}
env_file = env_files.get(env, '.env')
load_dotenv(env_file)

MAIN_DB_URL = os.getenv("DB_URL")

def get_demurrage_db_url() -> str:
    """
    Derives the database URL for the 'demurrage' database.
    If DEMURRAGE_DB_URL is explicitly set in .env, it takes precedence.
    Otherwise, it substitutes the database name in DB_URL with 'demurrage'.
    """
    explicit_url = os.getenv("DEMURRAGE_DB_URL")
    if explicit_url:
        return explicit_url
    
    if not MAIN_DB_URL:
        raise ValueError("DB_URL not found in environment variables")
        
    try:
        parsed = urlparse(MAIN_DB_URL)
        # Substitute database name with 'demurrage'
        new_parsed = parsed._replace(path="/demurrage")
        return urlunparse(new_parsed)
    except Exception as e:
        # Fallback if URL parsing fails for some reason
        if "/disbursement" in MAIN_DB_URL:
            return MAIN_DB_URL.replace("/disbursement", "/demurrage")
        raise ValueError(f"Could not derive demurrage DB URL from DB_URL: {e}")

DEMURRAGE_DB_URL = get_demurrage_db_url()
# Default to 'dev' schema as requested
DEMURRAGE_DB_SCHEMA = os.getenv("DEMURRAGE_DB_SCHEMA", "dev")
