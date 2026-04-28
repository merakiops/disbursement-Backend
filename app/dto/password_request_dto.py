"""
Author: Punith
Description: DTOs for password reset and OTP validation in a FastAPI application.
"""
from pydantic import BaseModel
from typing import Optional

class ForgetPasswordRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for initiating a password reset request.

    Attributes:
        user_email (str): The email address of the user requesting the password reset.
    """
    username: str

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON request for API documentation.
        """
        schema_extra = {
            "example": {
                "user_email": "xyz@domain.com",

            }
        }


class PasswordResetOTPValidateRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for validating the OTP during password reset.

    Attributes:
        user_email (str): The email address of the user.
        otp (int): The one-time password (OTP) sent to the user's email.
        uuid (str): A unique identifier for tracking the OTP validation request.
    """
    username: str
    otp: int
    uuid :Optional[str] = None

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON request for API documentation.
        """
        schema_extra = {
            "example": {
                "user_email": "xyz@domain.com",
                "otp": 123456,
                "uuid": "5d2f252b-a9b5-4637-b35a-70ebb080e7f4",

            }
        }

class PasswordResetRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for resetting the user's password.

    Attributes:
        user_email (str): The email address of the user resetting the password.
        new_password (str): The new password chosen by the user.
        passwordreset_token (str): A secure token required to validate the password reset process.
    """
    username: str
    new_password: str
    passwordreset_token:Optional[str] = None

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON request for API documentation.
        """
        schema_extra = {
            "example": {
                "user_email": "xyz@domain.com",
                "new_password": "Test@1234",
                "passwordreset_token": "NIDIf6GKnrKOrus-UhSYmdlB5xnFih5PuvvjaZsY0P9MXQ04O50f6JLaCMZ4RH_Ts_LQMr60FfJXYc_ckxrWFcoOPgysjoVBNyLyWa72vTNVOg8hvA1JaC7-F9Q="

            }
        }

class PasswordResetLinkValidateRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for validating the password reset link.

    Attributes:
        passwordreset_token (str): The token used to validate the password reset link.
    """
    passwordreset_token: str

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON request for API documentation.
        """
        schema_extra = {
            "example": {
                "passwordreset_token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

            }
        }

class PasswordResetFinalRequestDTO(BaseModel):
    username: str
    otp: int
    uuid : str
    new_password: str
    
class ResendOTPRequestDTO(BaseModel):
    username: str
    uuid : str

class ResetPasswordAdminRequestDTO(BaseModel):
    username : str

class ChangePasswordRequestDTO(BaseModel):
    username : str
    old_password : str
    new_password : str

class ExpiredPasswordResetRequestDTO(BaseModel):
    username: str
    old_password: str
    new_password: str
    