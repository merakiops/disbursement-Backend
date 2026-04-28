"""
Author: Punith
Description: This module defines an abstract service class for managing 
user password history in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.models.user_password_history import UserPasswordHistory

class UserPasswordHistoryService(ABC):
    """
    Abstract base class defining the contract for user password history operations.
    """

    @abstractmethod
    def add_password_history(self, passwordhistory: UserPasswordHistory, db: Session) -> None:
        """
        Adds a new password history record to the database.

        Args:
            passwordhistory (UserPassword_history): The password history record to be added.
            db (Session): The active database session.

        Returns:
            None
        """
        pass

    @abstractmethod
    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """
        Verifies if a plain-text password matches its hashed version.

        Args:
            plain_password (str): The plain-text password entered by the user.
            hashed_password (str): The stored hashed password.

        Returns:
            bool: True if the password matches, False otherwise.
        """
        pass

    @abstractmethod
    def is_password_reused(self, user_id: int, new_password: str, db: Session) -> bool:
        """
        Checks if a given password has been used previously by the user.

        Args:
            user_id (int): The ID of the user.
            new_password (str): The new password to be checked.
            db (Session): The active database session.

        Returns:
            bool: True if the password has been used before, False otherwise.
        """
        pass
