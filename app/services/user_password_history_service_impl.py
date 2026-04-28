"""
Author: Punith
Description: Implementation of UserPasswordHistoryService for managing user password history, 
password verification, and password reuse checks in a FastAPI application.
"""
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from app.repo.user_password_history_repo import UserPasswordHistoryRepo
from app.repo.user_repo import UserRepo
from app.models.user_password_history import UserPasswordHistory
from passlib.context import CryptContext
import logging
from app.services.user_password_history_service import UserPasswordHistoryService
from fastapi import HTTPException

load_dotenv()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

logger = logging.getLogger("app_logger")


class UserPasswordHistoryServiceImpl(UserPasswordHistoryService):
    """
    Implementation of UserPasswordHistoryService to handle password history operations,
    password verification, and preventing password reuse.
    """

    def add_password_history(self, passwordhistory: UserPasswordHistory, db: Session) -> None:
        """
        Adds a new password history record to the database.

        Args:
            passwordhistory (UserPassword_history): The password history record.
            db (Session): The active database session.

        Returns:
            None
        """
        try:
            logger.info(f"Adding password history for user: {passwordhistory.userid}")
            UserPasswordHistoryRepo.add_password_history(passwordhistory, db)
            logger.info(f"Successfully added password history for user: {passwordhistory.userid}")
        except Exception as e:
            logger.error(f"Error adding password history for user {passwordhistory.userid}")
            raise HTTPException(status_code=403, detail=f"Error adding password history for user {passwordhistory.userid}")

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """
        Verifies if a plain-text password matches its hashed version.

        Args:
            plain_password (str): The plain-text password entered by the user.
            hashed_password (str): The stored hashed password.

        Returns:
            bool: True if the password matches, False otherwise.
        """
        try:
            logger.info("Verifying password hash.")
            return pwd_context.verify(plain_password, hashed_password)
        except Exception as e:
            logger.error(f"Error verifying password")
            

    def is_password_reused(self, user_id: int, new_password: str, db: Session) -> bool:
        """
        Checks if a given password has been used previously by the user.

        Args:
            user_id (int): The ID of the user.
            new_password (str): The new password to be checked.
            db (Session): The active database session.

        Returns:
            bool: True if the password has been reused, False otherwise.
        """
        try:
            logger.info(f"Checking if the password is reused for user: {user_id}")
            user = UserRepo.get_user_by_userid(user_id, db)

            if not user:
                logger.warning(f"User {user_id} not found.")
                return False  # User does not exist, so no reused password issue

            current_password = self.verify_password(new_password, user.password)
            last_password = UserPasswordHistoryRepo.is_password_reused(user_id, new_password, db)

            if not current_password and not last_password:
                logger.info(f"Password for user {user_id} is not reused.")
                return True

            logger.warning(f"User {user_id} tried to reuse an old password.")
            return False
        except Exception as e:
            logger.error(f"Error checking password reuse for user {user_id}")
            raise HTTPException(status_code=403, detail=f"Error checking password reuse for user {user_id}")
