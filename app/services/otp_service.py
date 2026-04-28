"""
Author: Punith
Description: This module defines the abstract class `OTPService`, which provides an interface for managing OTP operations
such as adding, validating, and updating OTP statuses in a database.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session

class OTPService(ABC):
    """
    Abstract class defining OTP-related operations.
    """

    @abstractmethod
    def add_otp(self, userid: int, otp: int, uuid: str, db: Session, useremail: str) -> None:
        """
        Abstract method to add an OTP entry for a user.

        :param userid: ID of the user
        :param otp: OTP value
        :param uuid: Unique identifier for the OTP session
        :param db: Database session
        :param useremail: Email ID of the user
        """
        pass

    @abstractmethod
    def validate_otp(self, userid: int, uuid: str, otp: int, db: Session) -> bool:
        """
        Abstract method to validate an OTP for a user.

        :param userid: ID of the user
        :param uuid: Unique identifier for the OTP session
        :param otp: OTP value
        :param db: Database session
        :return: Boolean indicating whether the OTP is valid
        """
        pass

    @abstractmethod
    def update_otp_expires(self, userid: int, uuid: str, db: Session, useremail: str) -> None:
        """
        Abstract method to update the OTP status once it has been used or expired.

        :param userid: ID of the user
        :param uuid: Unique identifier for the OTP session
        :param db: Database session
        :param useremail: Email ID of the user
        """
        pass
