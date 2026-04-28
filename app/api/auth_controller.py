"""
Author: Punith
Module: Authentication Controller
Description: This module handles user authentication, including login, JWT token generation,
             OTP handling, and email notifications.
"""
from fastapi import APIRouter, Request, HTTPException, BackgroundTasks, Response
from fastapi.responses import JSONResponse
from app.config import Config
from datetime import datetime, timezone, timedelta
from collections import OrderedDict

from app.services.user_service_impl import UserServiceImpl
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db import get_db
import logging
import random
import pytz
import os
from dotenv import load_dotenv
import uuid
from app.dto.login_request_dto import LoginRequestDTO
from app.dto.login_response_dto import LoginResponseDTO
from app.services.otp_service_impl import  OTPServiceImpl

from app.core.decorators import jwt_required
from app.core.SendMail import SendMail

# Initialize service instances
Auth_controller = APIRouter()
otp_service = OTPServiceImpl()
user_service = UserServiceImpl()

# Load environment variables
load_dotenv()

logger = logging.getLogger("app_logger")
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

user = None


# Handles user login, validates credentials, generates JWT token, and sends OTP via email.
@Auth_controller.post('/api/v1/auth/token', response_model=LoginResponseDTO)
async def login(background_tasks: BackgroundTasks,request: Request, body: LoginRequestDTO,db: Session = Depends(get_db)):
    logger.info("Entering auth_route")

    # Get the data from the request body
    data = await request.json()
    username = body.username.strip().lower()
    password = body.password
    client_ip = request.client.host if request.client else "unknown"
    logger.info(f"Client IP: {client_ip}")


    logger.info("Received login attempt for username: %s", username)
    logger.info("Received login attempt for password: %s", password)

     # Define expiration time for the JWT token
    token_expiry_minutes = int(Config.JWT_ACCESS_TOKEN_EXPIRES)
    expiry_datetime = datetime.now(timezone.utc) + timedelta(minutes=token_expiry_minutes)
    ist = pytz.timezone(os.getenv('TIME_ZONE'))
    expiration_time = datetime.now(ist) + timedelta(minutes=int(Config.JWT_ACCESS_TOKEN_EXPIRES))
    expiry_minutes = int(Config.JWT_ACCESS_TOKEN_EXPIRES)
    expiry_seconds = expiry_minutes * 60
    expires_dt = datetime.now(timezone.utc) + timedelta(seconds=expiry_seconds)
    print(f"expiration_time in controller: {expiration_time}")
    print(f"expiration_time iso in controller: {expiration_time.isoformat()}")


    # Check if username and password are provided
    if not username or not password:
        return JSONResponse(
            status_code=400,
            content=OrderedDict([
                ('status', 'fail'),
                ('message', 'username and password are required')
            ])
        )

    # Validate the login credentials and get the token
    token_or_error  = user_service.validate_login(username, password,client_ip, db)
    logger.info("Type of token_or_error: %s, Value: %s", type(token_or_error), token_or_error)


    if not isinstance(token_or_error, str):
        user = user_service.get_user_by_username(username, db)

    # If authentication fails, return error response
    if isinstance(token_or_error, str):
        logger.info("Invalid login attempt for username: %s, Reason: %s", username, token_or_error)
        return JSONResponse(
            status_code=401,
            content=LoginResponseDTO(
                status="failed",
                status_code=401,
                token=None,
                expires=None,
                message=token_or_error
            ).model_dump()
        )
   
    token = token_or_error["token"]
    expires = token_or_error["expires"]
    user = token_or_error["user"]  # You can use this if needed later
    useremail = user.email
    is_mfa_enabled = 'N'
    is_first_login = user.is_first_login
    uuid = None

    if user.is_mfa_enabled =='Y' and user.email:
        # Generate OTP and UUID
        otp,user_uuid = generate_otp_and_uuid()
        uuid = user_uuid
        subject = "Your OTP Code for Meraki PDA App login"
        # message = (
        #         f"Dear User,\n\n"
        #         f"You requested to log in to your Meraki PDA account.\n\n"
        #         f"Your One-Time Password (OTP) is: {otp}\n\n"
        #         f"Please enter this code in the app to complete your login.\n"
        #         f"This code is valid for a limited time and can only be used once.\n\n"
        #         f"Best,\nMeraki PDA App Team"
        #         )

        context = {
        "otp": otp,
        "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
        is_mfa_enabled ='Y'
        otp_service.add_otp(user.userid,otp,user_uuid,db)
        # Send email in the background
        # background_tasks.add_task(SendMail.send_email,useremail,subject,message)
        background_tasks.add_task(
        SendMail.send_template_email,
        to_email=useremail,
        subject=subject,
        template_name="password_otp.html", 
        context=context,
        template_type="html"
    )

    
    # Prepare the response with the token and expiration time
    if not isinstance(token_or_error, str):
        logger.info("seeting Cookie")
        response = JSONResponse(
        content=LoginResponseDTO(
        status="success",
        status_code=200,
        token=None,  # token not included in body if you're using cookies
        expires=expires.isoformat(),
        uuid= uuid,
        is_mfa_enabled = is_mfa_enabled,
        is_first_login =is_first_login,
        name=user.name,
        username= user.username,
        role_id=user.roleid,
        role_name=user.roles.role_name,
        email_signature=user.email_signature, 
        company_name = user.company.company_name,
        company_id = user.company.company_id,
   
        detail="Authentication successful"
            ).model_dump()
        )
        response.set_cookie(
            key="Token",
            value=token,
            httponly=True,
            secure=True,
            samesite="lax",
            expires=expires_dt,
            max_age=expiry_seconds
        )
        logger.info("Cookie is has been setted successfully")
        return response
    else:
        # Auth failed
        return JSONResponse(
            status_code=401,
            content={"status": "failed", "status_code": 401, "message": token_or_error}
        )

    #return response_obj

#Generates a random 6-digit OTP and a unique UUID.
def generate_otp_and_uuid():
    otp = random.randint(100000, 999999)  # Generate a 6-digit OTP
    unique_id = str(uuid.uuid4())  # Generate a random UUID
    return otp, unique_id

@Auth_controller.get("/api/test")
@jwt_required
def test(request: Request,db: Session = Depends(get_db)):
    #user_id = request.state.user['user_id']
    #print(user_id)
    return {"message": "Hello World"}


@Auth_controller.post("/api/v1/auth/logout", tags=["Logout Authentication"])
@jwt_required
def logout(request:Request,response: Response,db: Session = Depends(get_db)):
    """
    Clears the authentication cookie to log the user out.
    """
    response = JSONResponse(
        status_code=200,
        content={
            "status": "success",
            "status_code": 200,
            "message": "Logged out successfully"
        }
    )
    response.delete_cookie("Token")
    return response

@Auth_controller.get("/api/v1/verify", tags=["Authentication"])
@jwt_required
def get_current_user_details(request: Request, db: Session = Depends(get_db)):
    try:
        user = request.state.user
        print("user in verify endpoint: ", user)
        if not user:
            raise HTTPException(
                status_code=401,
                detail="User not authenticated"
            )
        
        return {
            "valid": "success",
            "name": user.get("sub") or user.get("name"),
            "username": user.get("username"),
            "role_name": user.get("role_name"),
            "role_id": user.get("roleId")
        }
    except AttributeError:
        raise HTTPException(
            status_code=401,
            detail="Invalid user session"
        )
    except Exception as e:
        logger.error(f"Error in get_current_user_details: {e}")
        raise HTTPException(
            status_code=500,
            detail="Failed to retrieve user details"
        )