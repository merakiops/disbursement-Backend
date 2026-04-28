"""
Author: Punith
Description: This module defines an abstract service class for handling 
user login history operations in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.models.user_login_attempt import UserLoginHistory

class UserLoginHistoryService(ABC):
    """
    Abstract base class defining the contract for user login history operations.
    """

    @abstractmethod
    def store_login_history(self, userLoginHistory: UserLoginHistory, db: Session):
        """
        Stores user login history in the database.

        Args:
            userLoginHistory (UserLoginHistory): The login history data to be stored.
            db (Session): The database session.

        Returns:
            None
        """
        pass
