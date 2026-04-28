"""
Author: Punith
Module: Otp Controller
Description: 
    This module handles OTP validation and resending for authentication. 
    It includes endpoints for validating an OTP and resending a new OTP.
"""
from fastapi import APIRouter, Request, Depends, HTTPException,BackgroundTasks
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from app.services.otp_service_impl import OTPService, OTPServiceImpl
from app.api.auth_controller import generate_otp_and_uuid
from app.core.SendMail import SendMail
from app.dto.otp_request_dto import OTPValidateRequestDTO
import os
from app.config import Config
from app.dto.otp_response_dto import OTPValidateResponseDTO, OTPResendResponseDTO


# Initialize router and OTP service
Otp_controller = APIRouter()
otp_service = OTPServiceImpl()
MERAKI_DISBURSEMENT_EMAIL_ADDRESS = os.getenv("MERAKI_DISBURSEMENT_EMAIL_ADDRESS")

#Validates the OTP provided by the user.
@Otp_controller.post("/api/v1/otp/validate",response_model=OTPValidateResponseDTO)
@jwt_required
async def validate_otp(request: Request,body: OTPValidateRequestDTO,db: Session = Depends(get_db)):
    data = await request.json()
    otp = body.otp
    uuid = body.uuid
    userid = request.state.user['user_id']
    useremail = request.state.user['useremail']

    try:
        is_valid = otp_service.validate_otp(userid,uuid,otp, db)
        if is_valid:
            otp_service.update_otp_expires(userid, uuid, db, useremail)
            return OTPValidateResponseDTO(
                status="success",
                status_code=200,
                message="OTP Validated Successfully"
            )
        else:
            return OTPValidateResponseDTO(
                status="failed",
                status_code=400,
                message="Invalid OTP"
            )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

#Resends a new OTP to the user.
@Otp_controller.post("/api/v1/otp/resend", response_model=OTPResendResponseDTO)
@jwt_required
async def resend_otp(request: Request, background_tasks: BackgroundTasks,db: Session = Depends(get_db)):
    #data = await request.json()
    userid = request.state.user['user_id']
    useremail = request.state.user['useremail']
    otp, user_uuid = generate_otp_and_uuid()
    subject = "Your OTP Code for Meraki PDA App login"
    # message = (
    #             f"Dear User,\n\n"
    #             f"You requested to log in to your Meraki PDA account.\n\n"
    #             f"Your One-Time Password (OTP) is: {otp}\n\n"
    #             f"Please enter this code in the app to complete your login.\n"
    #             f"This code is valid for a limited time and can only be used once.\n\n"
    #             f"Best,\nMeraki PDA App Team"
    #             )
    context = {
        "otp": otp,
        "email_id": MERAKI_DISBURSEMENT_EMAIL_ADDRESS
        }
     # Store OTP in database
    otp_service.add_otp(userid, otp, user_uuid, db)


    #Send OTP via email in the background
    # background_tasks.add_task(SendMail.send_email, useremail, subject, message)
    background_tasks.add_task(
        SendMail.send_template_email,
        to_email=useremail,
        subject=subject,
        template_name="password_otp.html",
        context=context,
        template_type="html"
    )

    return OTPResendResponseDTO(
        status="success",
        status_code=200,
        message="OTP Resent Successfully",
        uuid=user_uuid
    )





