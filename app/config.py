import os
from dotenv import load_dotenv
from datetime import timedelta
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend


# Load environment variables from .env file
#load_dotenv()
load_dotenv('.env') 
env = os.getenv('ENV', 'prod') 
env_files = {
        'prod': '.env.prod'
    }

env_file = env_files.get(env, '.env')  # Default to .env if no match
load_dotenv(env_file)  # Load the environment-specific .env file
print("ENV:", os.getenv("ENV"))

# Define paths for the keys
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PRIVATE_KEY_PATH = os.path.join(BASE_DIR, 'keys', 'private.key')
PUBLIC_KEY_PATH = os.path.join(BASE_DIR, 'keys', 'public.key')

SECRET_NAME = os.getenv("SECRET_NAME")
AWS_REGION = os.getenv("AWS_REGION_NAME")




# Check if private and public keys exist
if not os.path.exists(PRIVATE_KEY_PATH):
    raise FileNotFoundError(f"Private key not found at {PRIVATE_KEY_PATH}")

if not os.path.exists(PUBLIC_KEY_PATH):
    raise FileNotFoundError(f"Public key not found at {PUBLIC_KEY_PATH}")

# Load the password for the private key (this could be provided securely via input or environment variable)

private_key_password = os.getenv("PRIVATE_KEY_PASSWORD")
print("DB_URL:", os.getenv("DB_URL"))

if not private_key_password:
    raise ValueError("PRIVATE_KEY_PASSWORD not found in environment variables")

# Load and decrypt the private key
with open(PRIVATE_KEY_PATH, 'rb') as private_file:
    private_key = serialization.load_pem_private_key(
        private_file.read(),
        password=private_key_password.encode(),  # Password for decryption
        backend=default_backend()
    )
JWT_PUBLIC_KEY_value ="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"
# Load the public key for JWT verification
with open(PUBLIC_KEY_PATH, 'r') as public_file:
    JWT_PUBLIC_KEY = JWT_PUBLIC_KEY_value

# Now the private key is decrypted and you can use it for signing JWTs

class Config:
    SCHEMA_NAME= os.getenv("DB_SCHEMA")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    if not JWT_SECRET_KEY:
        raise ValueError("JWT_SECRET_KEY not found in environment variables")


    SQLALCHEMY_TRACK_MODIFICATIONS = False

    JWT_ACCESS_TOKEN_EXPIRES = os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 60)  # Default to 15 mins if not set
    # JWT_ALGORITHM = os.getenv('JWT_ALGORITHM', 'RS256')
    # JWT_PUBLIC_KEY = JWT_PUBLIC_KEY  # Public key for verifying JWTs
    JWT_PUBLIC_KEY_value ="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"
    JWT_ALGORITHM='HS256'
    JWT_PUBLIC_KEY = JWT_PUBLIC_KEY_value # Public key for verifying JWTs
    JWT_PRIVATE_KEY = private_key if JWT_ALGORITHM == 'RS256' else JWT_PUBLIC_KEY_value  # Use the decrypted private key for RS256, or symmetric key for HS256

# if "ENVIRONMENT" in os.environ:
#     ENVIRONMENT = os.environ["ENVIRONMENT"]
# else:
#     ENVIRONMENT = ""

# if (ENVIRONMENT == "LOCAL") or (ENVIRONMENT == "DEV") or (ENVIRONMENT == ""):

#      JWT_PUBLIC_KEY_value ="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"
# elif ENVIRONMENT == "PROD":

#     JWT_PUBLIC_KEY_value =  "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"
# else:
#     print("No env selected")

