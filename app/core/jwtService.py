"""
Author: Punith  
Created For: FastAPI JWT Utility Module  
Created On: January 09 2025
Description: This module provides JWT token generation, validation, caching, and role retrieval functions.
"""

import jwt
from datetime import datetime, timedelta, timezone
from app.config import Config
from app.repo.user_repo import UserRepo
import time
from sqlalchemy.orm import Session
from zoneinfo import ZoneInfo
import pytz
from dotenv import load_dotenv
import os
from fastapi import Request, HTTPException
from typing import Dict, Optional, Any
import inspect
import logging

# Load environment variables
load_dotenv()
logger = logging.getLogger(__name__)

# Load keys from files
private_key = Config.JWT_PRIVATE_KEY
public_key = Config.JWT_PUBLIC_KEY

# Initialize an empty dictionary for caching the tokens at the module level (outside functions)
jwt_cache: Dict[int, Dict[str, Optional[Dict[str, Any]]]] = {}

# Function to  Store a JWT token in the in-memory cache with its expiration time.
def store_token_in_cache(user_id: int, token: str, expiration: float) -> None:
    """
    Stores token in cache with 3-tier rotation: current -> previous -> past.
    Skips storage if token is already the current one.
    """
    expiration_datetime = (
        expiration if isinstance(expiration, datetime) else datetime.fromtimestamp(expiration)
    )

    existing_tokens = jwt_cache.get(user_id, {})
    current_token = existing_tokens.get("current")

    # If token is already current, no need to rotate
    if current_token and current_token["token"] == token:
        logger.info(f"[TOKEN STORAGE SKIPPED] Duplicate token for user {user_id}, no rotation.")
        return

    previous_token = existing_tokens.get("previous")
    jwt_cache[user_id] = {
        "current": {
            "token": token,
            "exp": expiration_datetime
        },
        "previous": current_token,
        "past": previous_token,
    }

    logger.info(f"[TOKEN STORAGE] User ID: {user_id} | NEW CURRENT TOKEN: {token} | Expires: {expiration_datetime} | MOVED TO PREVIOUS: {current_token} | MOVED TO PAST: {previous_token}")
    _validate_token_rotation(user_id)
#Function to  Generate a JWT token for a given user.
def generate_token(userid, username,useremail=None, additional_claims=None, db: Session = None):
    # Capture caller information
    stack = inspect.stack()
    caller = stack[1]  # The caller will be at position 1 (position 0 is the current function)
    if len(stack) < 2:  # Ensure there's at least one frame (the caller)
        logger.warning("Unable to get caller information from stack")
        return None
    # Extract relevant details from the stack
    caller_filename = caller.filename
    caller_line_number = caller.lineno
    caller_function_name = caller.function

    # Log or store where the function was called from
    logger.info(f"generate_token triggered from {caller_function_name} in {caller_filename} at line {caller_line_number}")


    # Set expiration time (UTC) as Unix timestamp (float)
    logger.info(f"JWT_ACCESS_TOKEN_EXPIRES in generate token: {Config.JWT_ACCESS_TOKEN_EXPIRES}")
    ist = pytz.timezone(os.getenv('TIME_ZONE'))
    expiration_time = datetime.now(ist) + timedelta(minutes=int(Config.JWT_ACCESS_TOKEN_EXPIRES))
    expiration_timestamp = expiration_time.timestamp()    # Convert to Unix timestamp

    payload = {
        'sub': username,
        'iat': datetime.now(ist),  # Issue time (UTC)
        'exp': expiration_timestamp  # Expiration time as Unix timestamp (float)
    }

    # Optionally include additional claims
    if additional_claims:
        payload.update(additional_claims)

    token = jwt.encode(payload, private_key, algorithm=Config.JWT_ALGORITHM)
    logger.info(f'Generated token for user {userid}: {token}')
    # Store the token in the in-memory cache
    store_token_in_cache(userid,token, expiration_timestamp)

    # Store or update token in database
    decode_username = additional_claims["username"]
    external_user = None
    if decode_username =='ExternalUser':
        external_user='Y'
    else :
        external_user ='N'

    			 
    existing_token = UserRepo.get_token_by_userid(db,userid)
    if existing_token:
        UserRepo.update_token_by_userid(userid, token,existing_token.token, expiration_timestamp, db)
    else:
        if userid:
            UserRepo.add_token(token, expiration_timestamp, userid, db, useremail,external_user)
					
				 
																 
						  
																										  
			 
					   
    return token



# Function to validate JWT Token and Decode Token
def validate_token(token):
    try:
        # Decode the token with the public key to verify its signature
        decoded_token = jwt.decode(
            token,
            public_key,
            algorithms=[Config.JWT_ALGORITHM],
            leeway=10  # Allow 10 seconds leeway for clock differences
        )

        # Ensure the token has not expired
        if 'exp' in decoded_token and decoded_token['exp'] < datetime.now().timestamp():
            raise HTTPException(status_code=401, detail="Token has expired!")  # Token expired

        return decoded_token
    except jwt.ExpiredSignatureError:

        raise HTTPException(status_code=401, detail="Token has expired!")   # Token expired
    except jwt.InvalidTokenError as e:
        raise HTTPException(status_code=401, detail="Invalid token!!")  # Invalid token

def _debug_print_cache():
    """Logs the current token cache for debugging."""
    logger.info("=== CURRENT TOKEN CACHE ===")
    for user_id, tokens in jwt_cache.items():
        current = tokens.get("current", {}).get("token") if tokens.get("current") else "None"
        previous = tokens.get("previous", {}).get("token") if tokens.get("previous") else "None"
        past = tokens.get("past", {}).get("token") if tokens.get("past") else "None"
        logger.info(f"User {user_id}: Current={current} | Previous={previous} | Past={past}")
    logger.info("===========================")
#Function to Retrieve a token from the in-memory cache.
def get_token_from_cache(token: str) -> Optional[str]:
    """
    Checks if the token exists in cache (current, previous, or past).
    If current token is used successfully, clears previous and past.
    """
    logger.info(f"[VALIDATE] Incoming token: {token}...")
    _debug_print_cache()

    now = datetime.now()
    for user_id, tokens in jwt_cache.items():
        # Check current
        if tokens.get("current") and tokens["current"]["token"] == token:
            if tokens["current"]["exp"] > now:
                jwt_cache[user_id]["previous"] = None
                jwt_cache[user_id]["past"] = None
                return "current"
            else:
                jwt_cache[user_id]["current"] = None
                return None

        # Check previous
        if tokens.get("previous") and tokens["previous"]["token"] == token:
            if tokens["previous"]["exp"] > now:
                return "previous"
            else:
                jwt_cache[user_id]["previous"] = None
                return None

        # Check past
        if tokens.get("past") and tokens["past"]["token"] == token:
            if tokens["past"]["exp"] > now:
                return "past"
            else:
                jwt_cache[user_id]["past"] = None
                return None

    return None
#Function to Retrieve the current user's roles from the request
def get_current_user_roles(request: Request):
    
    user = getattr(request.state, "user", None)
    if user:
        return user.get("roleId"), user.get("role_name")
    return None, None

def clean_cache(user_id: int, token_type: str = None):
    """Clean specific token type or all for a user"""
    if user_id in jwt_cache:
        if token_type:
            if token_type in jwt_cache[user_id]:
                logger.info(f"Removing {token_type} token for user {user_id}")
                jwt_cache[user_id][token_type] = None
        else:
            logger.info(f"Removing all tokens for user {user_id}")
            del jwt_cache[user_id]

def _validate_token_rotation(user_id: int) -> None:
    """Validates token rotation integrity"""
    if user_id not in jwt_cache:
        return

    current = jwt_cache[user_id].get("current")
    previous = jwt_cache[user_id].get("previous")

    if current and previous:
        if current["token"] == previous["token"]:
            logger.error(f"[ERROR] Token rotation violation for user {user_id} - identical tokens!")
            # Auto-correct by keeping only current token
            jwt_cache[user_id]["previous"] = None
        elif current["exp"] <= previous["exp"]:
            logger.warning(f"[WARNING] Suspicious expiration for user {user_id} - "
                  f"current expires {current['exp']} <= previous {previous['exp']}")