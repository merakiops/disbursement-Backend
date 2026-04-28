"""
Author: Punith
Description: Repository class for handling registration token operations in the database.
"""
from app.models.user import User
from app.models.registration import Registration
from sqlalchemy.orm import Session
from app.models.login_otp import LoginOtp
from typing import Optional
from datetime import datetime
from zoneinfo import ZoneInfo
import pytz
import os
from dotenv import load_dotenv

load_dotenv()
class RegistartionRepo:
    """
    A repository class for managing registration token-related database operations.
    """


    @staticmethod
    def store_token(registration_token : Registration, db: Session):
        """
        Stores or updates a registration token for a user.

        Args:
            registration_token (Registration): The registration token object to be stored.
            db (Session): The database session.

        Returns:
            None
        """
        
        try:
            userid = registration_token.userid

            # Retrieve existing record
            existing_record = db.query(Registration).filter(Registration.userid == userid).first()

            # Update the existing record with new values
            if existing_record:
                existing_record.registration_link = registration_token.registration_link
                existing_record.registration_token = registration_token.registration_token
                existing_record.link_generation =  registration_token.link_generation
                existing_record.link_expiry = registration_token.link_expiry
                existing_record.status = registration_token.status

            else:
                # If record doesn't exist, insert new one
                db.add(registration_token)

            db.commit()

        except Exception as e:
            db.rollback()
            print(f"Error while storing token: {e}")

    @staticmethod
    def get_token(token:str, db: Session):
        """
        Retrieves a registration record based on the token.

        Args:
            token (str): The registration token.
            db (Session): The database session.

        Returns:
            Optional[Registration]: The registration record if found, otherwise None.
        """
        ist = pytz.timezone(os.getenv('TIME_ZONE'))
        query = db.query(Registration).filter(
            Registration.registration_token == token,
            #Registration.link_expiry > datetime.now(ist),  # Ensure the link has not expired
            Registration.status == 'Y'  # Ensure the status is 'A'
        )
        print(str(query.statement.compile(compile_kwargs={"literal_binds": True})))
        registration = query.first()
        print(f"Registration from repo: {registration}")
        return registration

    @staticmethod
    def update_token_status(userid: int, db: Session):
        """
        Updates the status of a registration token to 'I' (Inactive).

        Args:
            userid (int): The ID of the user.
            db (Session): The database session.

        Returns:
            None
        """
        ist = pytz.timezone(os.getenv('TIME_ZONE'))
        existing_token = db.query(Registration).filter(Registration.userid == userid).first()
        print(f"Existing token repo: {existing_token}")
        if existing_token:
            existing_token.status = 'N'
            existing_token.updatedon = datetime.now(ist)

        db.commit()

    @staticmethod
    def get_all_registration_dtl(passwordreset_token : str,db):
        """
        Retrieves all registration details based on the password reset token.

        Args:
            passwordreset_token (str): The password reset token.
            db: The database session or connection.

        Returns:
            The retrieved registration details.
        """
        return db.query(Registration).filter(Registration.registration_token == passwordreset_token).first()