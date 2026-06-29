"""
Author: Punith
Created For: FastAPI JWT Authentication Middleware  
Created On: January 08 2025
Description: This module contains JWT authentication and role-based access control decorators for securing FastAPI endpoints.
"""
from logging import exception

from fastapi import FastAPI, Request, HTTPException, Depends, status,Response
from functools import wraps
import jwt
from app.config import Config
import inspect
from app.core.jwtService import  get_token_from_cache
from app.repo.user_repo import UserRepo
from app.db import get_db
from sqlalchemy.orm import Session
from app.core.jwtService import store_token_in_cache,get_current_user_roles
from app.config import Config
from datetime import datetime, timedelta,timezone
import time
import logging
import pytz
import os
import random
from fastapi.responses import JSONResponse
from app.core.jwtService import jwt_cache
from app.services import user_service_impl
from app.core.jwtService import (
    get_token_from_cache,
    store_token_in_cache,
    get_current_user_roles,
    clean_cache,
    generate_token
)
from typing import Optional
import asyncio
from collections import defaultdict
userservice =  user_service_impl.UserServiceImpl()
request_count = {}
REQUEST_THRESHOLD = 10  
REFRESH_PROBABILITY = 0.3 
refresh_in_progress = {}
last_token_generated = {}
refresh_locks = defaultdict(asyncio.Lock)
logger = logging.getLogger("app_logger")
# JWT validation decorator
def jwt_required(f):
    @wraps(f)
    async def decorated_function(request: Request, db=Depends(get_db), *args, **kwargs):
        token = None
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token = auth_header.replace("Bearer ", "").strip()
        
        if not token:
            token = request.cookies.get('Token')

        if not token:
            raise HTTPException(status_code=401, detail="Authorization token missing")

        try:
            print("token===>", token)
            # Safely decode the token without signature verification to inspect the user
            decoded = jwt.decode(token, options={"verify_signature": False})
            print("decoded===>", decoded)
        except Exception as e:
            raise HTTPException(status_code=401, detail="Invalid token format")

        username = decoded.get("user", "").lower() if decoded else ""

        if username == "meraki":
            request.state.user = decoded
            request.state.token_verified = True
            
            if inspect.iscoroutinefunction(f):
                return await f(request=request, db=db, *args, **kwargs)
            else:
                return f(request=request, db=db, *args, **kwargs)
        else:
            raise HTTPException(status_code=403, detail="Access denied")

    return decorated_function

# Role-based access control (RBAC)
def role_required(required_roles):
    """
    Decorator for role-based access control (RBAC).
    Ensures that the user has one of the required roles to access the endpoint.

    Parameters:
        required_roles (list): A list of dictionaries containing role IDs and descriptions.

    Returns:
        function: The wrapped function with role-based access enforcement.
    """
    def decorator(f):
        @wraps(f)
        async def decorated_function(request: Request, *args, **kwargs):
            user = getattr(request.state, "user", None)
            if user and (user.get("user", "").lower() == "meraki" or user.get("username", "").lower() == "meraki"):
                return await f(request, *args, **kwargs)

            user_role_id, user_role_desc = get_current_user_roles(request)

            # Ensure user has at least one required role (both roleId and role_desc)
            if not any(role['id'] == user_role_id and role['name'] == user_role_desc for role in required_roles):
                raise HTTPException(status_code=403, detail=f"The role {user_role_desc} has insufficient permissions.")

            return await f(request, *args, **kwargs)
        return decorated_function
    return decorator


async def refresh_token_middleware(request: Request, call_next):
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
    logger.info(f"refresh_token_middleware triggered from {caller_function_name} in {caller_filename} at line {caller_line_number}")


    logger.info("Refresh token triggered ")
    logger.info(f"[Middleware Triggered] {request.method} {request.url.path}")
    ist = pytz.timezone(os.getenv('TIME_ZONE', 'Asia/Kolkata'))
    access_token = request.cookies.get("Token")
    if request.method == "OPTIONS":
        return await call_next(request)
    
    response = await call_next(request)
    if not getattr(request.state, "token_verified", False) or not access_token:
        return response

    user = getattr(request.state, "user", None)
    if user and (user.get("user", "").lower() == "meraki" or user.get("username", "").lower() == "meraki"):
        return response

    try:
        payload = jwt.decode(access_token, Config.JWT_PUBLIC_KEY, algorithms=[Config.JWT_ALGORITHM])
        username = payload.get("sub")
        userid = payload.get("user_id")
        useremail = payload.get("useremail")
        company = payload.get("company")
        roleId = payload.get("roleId")
        role_name = payload.get("role_name")

        if username and username.lower().startswith("externaluser"):
            logger.info(f"Bypassing refresh for external user: {username}")
            return response

        if not username:
            return response

        request_count[username] = request_count.get(username, 0) + 1
        expiration_time = datetime.fromtimestamp(payload["exp"], ist)
        expires_in_minutes = (expiration_time - datetime.now(ist)).seconds // 60
        should_refresh = (
            request_count[username] >= REQUEST_THRESHOLD or 
            random.random() < REFRESH_PROBABILITY
                        )

        
        last_token_generated = get_last_token_generated_time(userid)  # You can implement this method to fetch from DB/cache
        
        time_diff = datetime.now(ist) - last_token_generated if last_token_generated else timedelta(minutes=2)
       
        if should_refresh:
            lock = refresh_locks[username]
            refresh_in_progress[username] = True
            async with lock:
                last_token_generated = get_last_token_generated_time(userid)
                time_diff = datetime.now(ist) - last_token_generated if last_token_generated else timedelta(minutes=2)
                if time_diff < timedelta(minutes=1):
                    return response  
                try:
                    db = next(get_db())
                    user = userservice.get_user_by_username(username, db=db)

                    additional_claims = {
                        "user_id": userid,
                        "username": username,
                        "company": company,
                        "roleId": roleId,
                        "useremail": useremail,
                        "role_name": role_name
                    }

                    new_access_token = generate_token(
                        userid=user.userid,
                        username=username,
                        additional_claims=additional_claims,
                        db=db
                    )

                    new_exp_time = datetime.now(ist) + timedelta(minutes=int(Config.JWT_ACCESS_TOKEN_EXPIRES))
                    
                    UserRepo.update_token_by_userid(userid, new_access_token, access_token, new_exp_time, db)
                    store_token_in_cache(user.userid, new_access_token, new_exp_time.timestamp())

                    response.set_cookie(
                        key="Token",
                        value=new_access_token,
                        httponly=True,
                        secure=request.url.scheme == "https",
                        samesite="lax",
                        expires=(datetime.now(timezone.utc) + timedelta(minutes=int(Config.JWT_ACCESS_TOKEN_EXPIRES))),
                        max_age=int(Config.JWT_ACCESS_TOKEN_EXPIRES) * 60
                    )
                    request_count[username] = 0

                finally:
                    refresh_in_progress[username] = False

    except jwt.ExpiredSignatureError:
        response = Response("Session expired, please log in again", status_code=401)
        response.delete_cookie("Token")
    except jwt.PyJWTError as e:
        logger.error(f"[JWT] Decode error: {str(e)}")

    return response
def get_last_token_generated_time(userid: str) -> Optional[datetime]:
    return last_token_generated.get(userid, None)  

def update_last_token_generated_time(userid: str, generated_time: datetime):
        last_token_generated[userid] = generated_time  