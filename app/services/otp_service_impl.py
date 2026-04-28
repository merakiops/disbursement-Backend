"""
Author: Punith
Description: This module implements the OtpSerivce interface, providing various methods to handle otp,
Validation create new Otp and update the status .
"""
import logging
from dotenv import load_dotenv
import os
from app.repo.otp_repo import OtpRepo
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.exceptions.otp_not_valid_exception import OTPNotValidException
from zoneinfo import ZoneInfo
import pytz
from app.services.otp_service import OTPService

load_dotenv()

# Configure Logging
logger = logging.getLogger("app_logger")
class OTPServiceImpl(OTPService):
    """
    Implementation of OTPService interface to handle OTP-related operations.
    """


    def add_otp(self,userid: int, otp: int, uuid: str, db: Session) -> None:
        """
        Adds an OTP entry to the database.
        """
        logger.info(f"Adding OTP for user: {userid}")
        OtpRepo.add_otp(userid, otp, uuid, db)


    def validate_otp(self,userid: int, uuid: str, otp: int, db: Session):
        """
        Validates an OTP against stored records, checking for expiry and correctness.
        """
        logger.info(f"Validating OTP for user: {userid}, uuid: {uuid}")

        otp_record = OtpRepo.get_otp(userid, uuid, db)

        if not otp_record:
            logger.warning(f"OTP record not found for user: {userid}, uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP is not found.")


        ist = pytz.timezone(os.getenv('TIME_ZONE'))
        current_time = datetime.now()

        if current_time > otp_record.expires_at:
            logger.warning(f"OTP expired for user: {userid}, uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="OTP is expired or invalid.")

        # OTP value check
        if otp_record.otp != otp:
            logger.warning(f"Incorrect OTP entered for user: {userid}, uuid: {uuid}")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Incorrect OTP.")

        return True


    def update_otp_expires(self,userid: int, uuid: str, db: Session, useremail: str):
        """
        Updates the status of an OTP entry in the database.
        """
        logger.info(f"Updating OTP status for user: {userid}, uuid: {uuid}")
        OtpRepo.update_otp_expires(userid, uuid, db, useremail)
