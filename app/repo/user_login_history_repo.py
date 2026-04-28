"""
Author: Punith
Description: This module defines the UserloginHistoryRepo class, which provides methods for storing user login history in the database.
"""
from sqlalchemy.orm import Session
from app.models.user_login_attempt import UserLoginHistory
from datetime import datetime

class UserLoginHistoryRepo:
    """
    Repository class for handling user login history operations.
    """

    @staticmethod
    def store_login_history(userLoginHistory: UserLoginHistory, db: Session):
                """
        Stores a new user login history record in the database.
        
        :param userLoginHistory: Instance of UserLoginHistory containing login details.
        :param db: Database session.
        """     
                from app.services.user_service_impl import UserService, UserServiceImpl
                user_service = UserServiceImpl()
                existing_history = db.query(UserLoginHistory).filter(UserLoginHistory.userid ==userLoginHistory.userid).first()
                if existing_history:
                        existing_history.ip_address= userLoginHistory.ip_address
                        if userLoginHistory.was_successfull == 'N':
                                previous_attempts = existing_history.attempt_left
                                existing_history.attempt_left = max(existing_history.attempt_left - 1, 0)
                                if previous_attempts == 1  and existing_history.attempt_left==0:
                                        user_service.update_status_by_user_id(userLoginHistory.userid,'B',db)
                        if userLoginHistory.was_successfull == 'Y' and existing_history.attempt_left != 5:
                                existing_history.attempt_left =5

                        existing_history.was_successfull = userLoginHistory.was_successfull
                        existing_history.updated_on = datetime.now()
                else:
                        db.add(userLoginHistory)
                        
                db.commit()

    @staticmethod
    def reset_login_attempt(user_id:int, db: Session):
            
            existing_history = db.query(UserLoginHistory).filter(UserLoginHistory.userid ==user_id).first()
            existing_history.attempt_left =5
            db.commit()


            