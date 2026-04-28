"""
Author: Punith
Date: January 10, 2025
Description: 
    This module provides security utilities for password hashing, verification, 
    and encryption/decryption of JWT tokens using AES-GCM.
"""
import binascii
from passlib.context import CryptContext
import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import base64
from dotenv import load_dotenv
from cryptography.fernet import Fernet
import json

# Load environment variables
load_dotenv()

# Retrieve AWS Secrets Manager details
SECRET_NAME = os.getenv("SECRET_NAME")
AWS_REGION = os.getenv("AWS_REGION_NAME")




# Initialize CryptContext for bcrypt hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#FUnction to Hash the password using bcrypt.
def hash_password(password: str) -> str:
    """Hash the password using bcrypt."""
    return pwd_context.hash(password)

#Function to Verify if the provided plain-text password matches the stored hashed password
def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify the provided password against the stored hash."""
    return pwd_context.verify(plain_password, hashed_password)

# Retrieve JWT secret key from AWS Secrets Manager
JWT_SECRET_KEY =  os.getenv("JWT_SECRET_KEY")

 

# Generate a secret key (only once, then store it securely)
SECRET_KEY = binascii.unhexlify(JWT_SECRET_KEY) # 256-bit key

# Function to Encrypt a given token using AES-GCM encryption
def encrypt_token(token: str) -> str:
    aesgcm = AESGCM(SECRET_KEY)
    nonce = os.urandom(12)  # 96-bit nonce
    encrypted = aesgcm.encrypt(nonce, token.encode(), None)
    return base64.urlsafe_b64encode(nonce + encrypted).decode()

#  Function to Decrypts an AES-GCM encrypted token.
def decrypt_token(encrypted_token: str) -> str:
    aesgcm = AESGCM(SECRET_KEY)
    decoded_data = base64.urlsafe_b64decode(encrypted_token.encode())
    nonce, encrypted = decoded_data[:12], decoded_data[12:]
    return aesgcm.decrypt(nonce, encrypted, None).decode()



def encrypt_token_mail(payload_bytes: bytes, fernet: Fernet) -> str:
    """
    Encrypt already-encoded payload bytes using Fernet.
    Returns URL-safe base64 string.
    """
    encrypted = fernet.encrypt(payload_bytes)
    return encrypted.decode()  # returns string, safe for URL



def decrypt_token_mail(encrypted_str: str, fernet: Fernet) -> dict:
    """
    Decrypt a URL-safe base64 string encrypted with Fernet and parse it as JSON.
    Returns a dictionary.
    """
    decrypted_bytes = fernet.decrypt(encrypted_str.encode())  
    decrypted_str = decrypted_bytes.decode()                  
    payload = json.loads(decrypted_str)                       
    return payload


