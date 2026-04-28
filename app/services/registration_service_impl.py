"""
Author: Punith
Description: This module implements the RegistrationService interface, 
providing concrete methods to store, retrieve, and update registration tokens.
"""
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from app.models.registration import Registration
from app.repo.registartion_Repo import RegistartionRepo
from app.services.registration_service import RegistrationService

load_dotenv()

class RegistrationServiceImpl(RegistrationService):
    """
    Implementation of the RegistrationService abstract class.
    This class interacts with the RegistrationRepo to handle database operations.
    """

    def store_token(self,registration_token : Registration, db: Session):
        """
        Stores a new registration token in the database.

        Args:
            registration_token (Registration): The registration token object.
            db (Session): The database session.

        Returns:
            None
        """
        RegistartionRepo.store_token(registration_token, db)


    def get_token(self,registration_token : str, db: Session):
        """
        Retrieves a registration token from the database.

        Args:
            registration_token (str): The registration token string.
            db (Session): The database session.

        Returns:
            Registration: The retrieved registration token object, if found.
        """
        return RegistartionRepo.get_token(registration_token, db)


    def update_token_status(self,userid:int,db: Session):
        """
        Updates the status of a registration token based on the user ID.

        Args:
            userid (int): The user ID associated with the token.
            db (Session): The database session.

        Returns:
            None
        """
        RegistartionRepo.update_token_status(userid, db)


    def get_all_registration_dtl(self,passwordreset_token : str,db):
        """
        Retrieves all registration details based on the password reset token.

        Args:
            passwordreset_token (str): The password reset token.
            db: The database session or connection.

        Returns:
            The retrieved registration details.
        """
        return RegistartionRepo.get_all_registration_dtl(passwordreset_token, db)



