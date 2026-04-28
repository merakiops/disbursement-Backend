"""
Author: Punith
Description: This module defines an abstract service class for handling 
registration tokens in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.models.registration import Registration

class RegistrationService(ABC):
    """
    Abstract base class defining the contract for registration token operations.
    """
    @abstractmethod
    def store_token(self, registration_token: Registration, db: Session):
        """
        Stores a new registration token in the database.
        
        Args:
            registration_token (Registration): The registration token object.
            db (Session): The database session.
        
        Returns:
            None
        """
        pass

    @abstractmethod
    def get_token(self, registration_token: str, db: Session):
        """
        Retrieves a registration token from the database.
        
        Args:
            registration_token (str): The registration token string.
            db (Session): The database session.
        
        Returns:
            Registration: The retrieved registration token object, if found.
        """
        pass

    @abstractmethod
    def update_token_status(self, userid: int, db: Session):
        """
        Updates the status of a registration token based on the user ID.
        
        Args:
            userid (int): The user ID associated with the token.
            db (Session): The database session.
        
        Returns:
            None
        """
        pass
