"""
Author: Punith
Description: This module implements the UserloginHistoryService interface, 
providing functionality to store user login history in the database.
"""
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from app.models.user_login_attempt import UserLoginHistory
from app.repo.user_login_history_repo import UserLoginHistoryRepo
import logging
from app.services.user_login_history_service import UserLoginHistoryService
from fastapi import HTTPException
load_dotenv()

logger = logging.getLogger("app_logger")

class UserLoginHistoryServiceImpl(UserLoginHistoryService):
    """
    Implementation of UserloginHistoryService for managing user login history.
    """

    def store_login_history(self, userLoginHistory: UserLoginHistory, db: Session):
        """
        Stores user login history in the database.

        Args:
            userLoginHistory (UserLoginHistory): The login history record to store.
            db (Session): The active database session.

        Raises:
            Exception: If an error occurs while storing login history.
        """
        try:
            logger.info(f"Storing login history for user: {userLoginHistory.userid}")
            UserLoginHistoryRepo.store_login_history(userLoginHistory, db)
            logger.info(f"Successfully stored login history for user: {userLoginHistory.userid}")
        except Exception as e:
            logger.error(f"Error storing login history for user {userLoginHistory.userid}")
            raise HTTPException(status_code=403, detail=f"Error storing login history for user {userLoginHistory.userid}")
