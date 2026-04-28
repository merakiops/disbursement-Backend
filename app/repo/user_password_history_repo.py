"""
Author: Punith
Description: Repository class for handling user password history in the database.
This class provides methods to add password history, verify passwords, 
and check if a password has been reused within the last four entries.
"""
from app.models.user import User
from app.models.tokens import Tokens
from sqlalchemy.orm import Session
from app.models.user_password_history import UserPasswordHistory
from passlib.context import CryptContext
from app.models.user_password_history import UserPasswordHistory as PasswordHistory

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserPasswordHistoryRepo:
    """
    Repository class for managing user password history.
    """

    @staticmethod
    def add_password_history(passwordhistory : UserPasswordHistory, db: Session) -> None:
        """
        Adds a new password history entry for a user.
        
        :param passwordhistory: UserPassword_history instance containing user ID and password hash.
        :param db: Database session.
        """
        db.add(passwordhistory)
        db.commit()

    @staticmethod
    def verify_password(plain_password: str, hashed_password: str) -> bool:
        """
        Verifies if the provided plain password matches the hashed password.
        
        :param plain_password: Raw password input.
        :param hashed_password: Stored hashed password.
        :return: True if passwords match, False otherwise.
        """
        return pwd_context.verify(plain_password, hashed_password)

    @staticmethod
    def is_password_reused(user_id: int, new_password: str, db: Session) -> bool:
        """
        Checks if the new password matches any of the last four stored passwords.
        
        :param user_id: ID of the user.
        :param new_password: New password to be checked.
        :param db: Database session.
        :return: True if password has been reused, False otherwise.
        """

        # Fetch the last 4 password hashes for the user
        last_passwords = (
            db.query(PasswordHistory)
            .filter(PasswordHistory.userid == user_id)
            .order_by(PasswordHistory.changeat.desc())
            .limit(4)
            .all()
        )

        # Compare the new password with the stored password hashes
        for past_password in last_passwords:
            if UserPasswordHistoryRepo.verify_password(new_password, past_password.password):
                return True  # Password is reused


        return False


