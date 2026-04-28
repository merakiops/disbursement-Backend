"""
Author: Punith
Description: Repository class for handling OTP-related database operations.
"""
from app.models.user import User
from app.models.tokens import Tokens
from sqlalchemy.orm import Session
from app.models.login_otp import LoginOtp
from typing import Optional
import os
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

class OtpRepo:
    """
    A repository class for managing OTP-related operations in the database.
    """

    @staticmethod
    def add_otp(userid: int, otp: int,uuid:str, db: Session) -> None:
        """
        Adds or updates an OTP for a given user.

        Args:
            userid (int): The ID of the user.
            otp (int): The OTP value.
            uuid (str): The unique identifier for the OTP.
            db (Session): The database session.
            useremail (str): The email of the user performing the operation.

        Returns:
            None
        """
        # Get OTP expiry time in minutes from environment variable
        expiry_minutes = int(os.getenv("OTP_EXPIRY", 5))  # default to 5 minutes
        time_zone = os.getenv("TIME_ZONE", "Asia/Kolkata")
        # Create timezone-aware datetime
        tz = ZoneInfo(time_zone)
        now = datetime.now()
        expires_at = now + timedelta(minutes=expiry_minutes)
       

        existing_otp = db.query(LoginOtp).filter(LoginOtp.userid == userid).first()
        # Update the existing OTP entry
        if existing_otp:
            existing_otp.otp = otp
            existing_otp.uuid = uuid
            existing_otp.generated_at = now
            existing_otp.expires_at = expires_at

        else:
            # Create a new OTP entry
            new_otp =LoginOtp(userid=userid,otp=otp,uuid=uuid, expires_at=expires_at)
            db.add(new_otp)

        db.commit()

    @staticmethod
    def get_otp(userid:int, uuid:str, db: Session) -> Optional[LoginOtp]:
        """
        Retrieves an OTP record for a given user and UUID.

        Args:
            userid (int): The ID of the user.
            uuid (str): The unique identifier for the OTP.
            db (Session): The database session.

        Returns:
            Optional[LoginOtp]: The OTP record if found, otherwise None.
        """
        return db.query(LoginOtp).filter(LoginOtp.userid == userid,LoginOtp.uuid == uuid).first()

    @staticmethod
    def update_otp_expires(userid: int, uuid:str, db: Session, useremail:str):
        """
        Updates the expires  of an OTP record to Current time.

        Args:
            userid (int): The ID of the user.
            uuid (str): The unique identifier for the OTP.
            db (Session): The database session.

        Returns:
            None
        """
        time_zone = os.getenv("TIME_ZONE", "Asia/Kolkata")
        tz = ZoneInfo(time_zone)
        now = datetime.now()

        otp = db.query(LoginOtp).filter(LoginOtp.userid == userid,LoginOtp.uuid== uuid).first()
        if otp:
            otp.expires_at = now
        db.commit()