"""
Author: Punith
Description: This module handles password reset functionality, including OTP generation,
password reset validation, and secure token-based authentication.
"""


from urllib import request
from fastapi import FastAPI, APIRouter, BackgroundTasks, Depends, HTTPException, Request,Cookie
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.user_service_impl import UserService, UserServiceImpl
import uuid
from app.core.security import encrypt_token
from app.core.security import decrypt_token
from app.core.SendMail import SendMail
import re
from app.services.user_password_history_service_impl import  UserPasswordHistoryServiceImpl
from app.models.user_password_history import UserPasswordHistory
import random
from app.services.otp_service_impl import OTPService, OTPServiceImpl
from app.dto.password_response_dto import ForgetPasswordResponseDTO, PasswordResetResponseDTO,PasswordResetOTPValidateResponseDTO,PasswordResetLinkValidateResponseDTO,PasswordResetFinalResponseDTO,ResendOTPResponseDTO,ResetPasswordAdminResponseDTO,ExpiredPasswordResetResponseDTO
from app.dto.password_request_dto import ForgetPasswordRequestDTO, PasswordResetRequestDTO, PasswordResetOTPValidateRequestDTO,PasswordResetLinkValidateRequestDTO,PasswordResetFinalRequestDTO,ResendOTPRequestDTO,ResetPasswordAdminRequestDTO,ChangePasswordRequestDTO,ExpiredPasswordResetRequestDTO
import uuid
from app.models.user_password_history import UserPasswordHistory
import importlib
import secrets
import os
from app.core.decorators import jwt_required
from app.core.security import hash_password
from app.models.registration import Registration
from app.services.registration_service_impl import RegistrationServiceImpl


# Initialize router and services
PasswordReset_controller = APIRouter()
password_history_service = UserPasswordHistoryServiceImpl()
user_service = UserServiceImpl()
otp_service = OTPServiceImpl()
registration_service = RegistrationServiceImpl()
HOST = os.getenv("HOST")
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

#Send the reset password link to the user email else sent to all admins 
@PasswordReset_controller.post("/api/v1/request-password-reset/", response_model=ForgetPasswordResponseDTO)
async def request_reset_password(body:ForgetPasswordRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    # data = await request.json()
    username = body.username
    if not username:
         raise HTTPException(
                status_code=404,
                detail="Please verify the username and provide the correct one."
            )

    user = user_service.get_user_by_username(username, db=db)
    
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    
    if user.email:
        raw_token = secrets.token_hex(32)
        encrypted_token = encrypt_token(raw_token)
        reset_link = f"{HOST}reset-password/{encrypted_token}"
        
        reset_entry = Registration(
            userid=user.userid,
            registration_link=reset_link,
            registration_token=encrypted_token,
            status='Y'
        )
        registration_service.store_token(reset_entry, db=db)
        
        subject = "Password Reset Link for Meraki PDA App"
        # message = (
        #     f"Dear User,\n\n"
        #     f"You requested a password reset.\n\n"
        #     f"Click the link below to reset your password:\n"
        #     f"{reset_link}\n\n"
        #     f"Best,\nMeraki PDA App Team"
        # )
        context = {
            "reset_link": reset_link,
            "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
        # background_tasks.add_task(SendMail.send_email, user.email, subject, message)  

        background_tasks.add_task(
        SendMail.send_template_email,
        to_email=user.email,
        subject=subject,
        template_name="password_link.html", 
        context=context,
        template_type="html"
    )
        return ForgetPasswordResponseDTO(
            status="success",
            status_code=200,
            message="Password reset link is sent to your email successfully",
            screen="Check Your Email",
        )
    else:
        company_id = user.companyid
        admin_emails = user_service.get_admin_emails(company_id, db)
        print("admin_emails",admin_emails)
        if not admin_emails:
            raise HTTPException(
                status_code=404,
                detail="No admin emails found for the company to process the request"
            )
        subject = f"Password Reset Request for User {user.username}"
        # message = (
        #     f"Dear Admin,\n\n"
        #     f"The user '{user.username}' from your company has requested a password reset but does not have an associated email address.\n\n"
        #     f"Please assist the user in resetting their password through the admin panel or other internal procedures.\n\n"
        #     f"Best,\n"
        #     f"Meraki PDA App Team"
        # )
        context = {
            "user_name": user.username,
            "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
        # background_tasks.add_task(SendMail.send_email, admin_emails, subject, message)
        background_tasks.add_task(
            SendMail.send_template_email,
            to_email=admin_emails,
            subject=subject,
            template_name="password_admin.html",
            context=context,
            template_type="html"
        )
        return ForgetPasswordResponseDTO(
            status="success",
            status_code=200,
            message="User has no email. Password reset request sent to admins.",
            screen="Login",
        )

#Validate the link and sent OTP 
@PasswordReset_controller.post("/api/v1/validate-link", response_model=PasswordResetLinkValidateResponseDTO)
async def get_password_reset_otp(body: PasswordResetLinkValidateRequestDTO, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    passwordreset_token = body.passwordreset_token
    try:
        decrypt_token(passwordreset_token)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid token")
    
    reset_entry = registration_service.get_token(passwordreset_token, db=db)
    if not reset_entry:
        raise HTTPException(status_code=400, detail="Token expired or invalid")
    
    regsitration_dtls = registration_service.get_all_registration_dtl(passwordreset_token,db)
    uses_dtl = user_service.get_user_by_userid(regsitration_dtls.userid, db=db)
    
    otp, user_uuid = generate_otp_and_uuid()
    
    try:
        otp_service.add_otp(regsitration_dtls.userid, otp, user_uuid, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to store OTP")

    if not uses_dtl.email:
        raise HTTPException(status_code=400, detail="User email not found")
    
    subject = "Your OTP Code for Meraki PDA App Password Reset"
    # message = (
    #     f"Dear User,\n\n"
    #     f"Your One-Time Password (OTP) is: {otp}\n\n"
    #     f"Please enter this code to complete the password reset process.\n"
    #     f"This code is valid for a limited time and can only be used once.\n\n"
    #     f"Best,\nMeraki PDA App Team"
    # )
    context = {
        "otp": otp,
        "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
    }
    # background_tasks.add_task(SendMail.send_email, uses_dtl.email, subject, message)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=uses_dtl.email,
        subject=subject,
        template_name="password_otp.html", 
        context=context,
        template_type="html"
    )
    
    return PasswordResetLinkValidateResponseDTO(
        status="success",
        status_code=200,
        message="OTP sent successfully",
        uuid=user_uuid,
        username=uses_dtl.username
    )

# Validate the OTP and Validate and Update Password
@PasswordReset_controller.post("/api/v1/password-reset/validate-otp", response_model=PasswordResetFinalResponseDTO)
async def validate_otp_and_reset_password(body: PasswordResetFinalRequestDTO, db: Session = Depends(get_db)):
    username = body.username
    otp = body.otp
    uuid = body.uuid
    new_password = body.new_password
    
    user = user_service.get_user_by_username(username, db=db)
    
    
    is_valid = otp_service.validate_otp(user.userid, uuid, otp, db)
    if not is_valid:
        raise HTTPException(status_code=400, detail="Invalid or expired OTP")
    
    #validate password
    user_service.validate_password(user, new_password, db)
    
    # Update password
    user_service.update_user_password(user.userid, new_password, db=db)
    pwdhistory = UserPasswordHistory(userid=user.userid, password=user.password)
    password_history_service.add_password_history(passwordhistory=pwdhistory, db=db)
    
    return PasswordResetFinalResponseDTO(
        status="success",
        status_code=200,
        message="Password updated successfully"
    )

# Re-send the OTP
@PasswordReset_controller.post("/api/v1/resend-otp",response_model = ResendOTPResponseDTO )
def resend_otp(body: ResendOTPRequestDTO,background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    username = body.username
    uuid = body.uuid
    user = user_service.get_user_by_username(username, db=db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    otp, user_uuid = generate_otp_and_uuid()

   
    otp_service.add_otp(user.userid, otp, uuid, db)


    if not user.email:
        raise HTTPException(status_code=400, detail="User email not found")

    subject = "Your OTP Code for Meraki PDA App Password Reset"
    # message = (
    #     f"Dear User,\n\n"
    #     f"Your One-Time Password (OTP) is: {otp}\n\n"
    #     f"Please enter this code to complete the password reset process.\n"
    #     f"This code is valid for a limited time and can only be used once.\n\n"
    #     f"Best,\nMeraki PDA App Team"
    # )
    context = {
        "otp": otp,
        "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
    # background_tasks.add_task(SendMail.send_email,user.email, subject, message)

    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=user.email,
        subject=subject,
        template_name="password_otp.html",
        context=context,
        template_type="html"
    )

    return ResendOTPResponseDTO(
        status="success",
        status_code=200,
        message="OTP Re-sent successfully"
    )

# Admin Reset Password for Requested User’s Password
@PasswordReset_controller.post("/api/v1/reset-password-by-admin",response_model=ResetPasswordAdminResponseDTO)
@jwt_required
async def reset_password_admin(request:Request, request_body:ResetPasswordAdminRequestDTO, db: Session = Depends(get_db)):
    try:
        msg= user_service.reset_password_admin(request_body.username, db=db)
        return ResetPasswordAdminResponseDTO(message=msg)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


#Resets the user's password after verifying the reset token and applying password security policies.
@PasswordReset_controller.post("/api/v1/password-reset/otp-validate", response_model=PasswordResetOTPValidateResponseDTO)
async def password_reset(background_tasks: BackgroundTasks,body: PasswordResetOTPValidateRequestDTO,db: Session = Depends(get_db)):
    lastuserpwd_status = None
    #data = await request.json()
    otp = body.otp
    uuid = body.uuid
    username = body.username
    user = user_service.get_user_by_username(username, db=db)

    try:
        is_valid = otp_service.validate_otp(user.userid,uuid,otp, db)
       
        if is_valid:
            otp_service.update_otp_expires(user.userid, uuid, db, user.email)
             # Generate long, random token
            #raw_token = uuid.uuid4().hex + uuid.uuid4().hex  # 64-char random token
            raw_token = secrets.token_hex(32)
            encrypted_token = encrypt_token(raw_token)  # Encrypt the token
            reset_link = f"{HOST}reset-password/{encrypted_token}" 
            # Store encrypted token in database
            reset_entry = Registration(
            userid=user.userid,
            registration_link = reset_link,
            registration_token=encrypted_token,
            status='Y'
              )
            registration_service.store_token(reset_entry, db=db)
            subject = "Password Reset Link for Meraki PDA App"
            message = (
                f"Dear User,\n\n"
                f"You requested a password reset.\n\n"
                f"Click the link below to reset your password:\n"
                f"{reset_link}\n\n"                
                f"Best,\nMeraki PDA App Team"
                )
            # Send email in the background
            background_tasks.add_task(SendMail.send_email, user.email, subject, message)
            return PasswordResetOTPValidateResponseDTO(
                status="success",
                status_code=200,
                passwordreset_token =encrypted_token,
                message="Password Reset Otp Validated successfully"
            )
        else:
            return PasswordResetOTPValidateResponseDTO(
                status="Failed",
                status_code=400,
                message="Password Reset Otp Not Validated"
            )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@PasswordReset_controller.post("/api/v1/password-reset/", response_model=PasswordResetResponseDTO)
@jwt_required
async def password_reset(request: Request,body: PasswordResetRequestDTO,db: Session = Depends(get_db)):
    lastuserpwd_status = None   
    username = body.username
    new_password = body.new_password

    user = user_service.get_user_by_username(username, db=db)

    if not re.fullmatch(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,16}$", new_password):
        return PasswordResetResponseDTO(
            status="failed",
            status_code=400,
            message="Password must be 8-16 characters long, contain at least one lowercase letter \n "
                    "one uppercase letter, one digit, and one special character (@#$%^&*!).",
        )
    try:        
        lastuserpwd_status = password_history_service.is_password_reused(user.userid, new_password, db=db)
        if not lastuserpwd_status:
            return PasswordResetResponseDTO(
                status="failed",
                status_code=400,
                message="New password cannot be the same as any of your last five used passwords. Please choose a different password "
            )
        if lastuserpwd_status:            
            pwdhistory = UserPasswordHistory(userid=user.userid, password=user.password)
            password_history_service.add_password_history(passwordhistory=pwdhistory, db=db)
            user_service.update_user_password(user.userid, new_password, db=db)
            return PasswordResetResponseDTO(
                status="success",
                status_code=200,
                message="Password updated successfully"
            )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@PasswordReset_controller.post("/api/v1/password-reset-mail/", response_model=PasswordResetResponseDTO)
async def password_reset(body: PasswordResetRequestDTO,db: Session = Depends(get_db)):
    lastuserpwd_status = None   
    username = body.username
    new_password = body.new_password
    passwordreset_token = body.passwordreset_token
    user = user_service.get_user_by_username(username, db=db)

    try:
        decrypted_token = decrypt_token(passwordreset_token)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid token")
    reset_entry = registration_service.get_token(passwordreset_token, db=db)
    if not reset_entry:
        raise HTTPException(status_code=400, detail="Token expired or invalid")

    if not re.fullmatch(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,16}$", new_password):
        return PasswordResetResponseDTO(
            status="failed",
            status_code=400,
            message="Password must be 8-16 characters long, contain at least one lowercase letter \n "
                    "one uppercase letter, one digit, and one special character (@#$%^&*!).",
        )
    try:        
        lastuserpwd_status = password_history_service.is_password_reused(user.userid, new_password, db=db)
        if not lastuserpwd_status:
            return PasswordResetResponseDTO(
                status="failed",
                status_code=400,
                message="New password cannot be the same as any of your last five used passwords. Please choose a different password "
            )
        if lastuserpwd_status:            
            pwdhistory = UserPasswordHistory(userid=user.userid, password=user.password)
            password_history_service.add_password_history(passwordhistory=pwdhistory, db=db)
            user_service.update_user_password(user.userid, new_password, db=db)
            registration_service.update_token_status(reset_entry.userid, db=db)
            return PasswordResetResponseDTO(
                status="success",
                status_code=200,
                message="Password updated successfully"
            )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
 

def generate_otp_and_uuid():
    otp = random.randint(100000, 999999)  # Generate a 6-digit OTP
    unique_id = str(uuid.uuid4())  # Generate a random UUID
    return otp, unique_id

@PasswordReset_controller.post("/api/v1/change-password")
@jwt_required
async def change_password(request: Request,body: ChangePasswordRequestDTO, db: Session = Depends(get_db)):
    try:
        token= request.cookies.get("Token")
        result=user_service.change_password(body,token,db)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Reset Expired Password
@PasswordReset_controller.post("/api/v1/expired-password-reset", response_model=PasswordResetFinalResponseDTO)
async def reset_expired_password(body: ExpiredPasswordResetRequestDTO, db: Session = Depends(get_db)):
    try:
        result = user_service.reset_expired_password(body, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

