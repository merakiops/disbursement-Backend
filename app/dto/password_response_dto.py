"""
Author: Punith
Description: DTOs for password reset responses in a FastAPI application.
"""
from pydantic import BaseModel
from datetime import datetime
from typing import Any
from typing import Optional

class ForgetPasswordResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after initiating a password reset.

    Attributes:
        status (str): The status of the request (e.g., success, failure).
        status_code (int): The HTTP status code of the response.
        message (str): A descriptive message about the request outcome.
        uuid (Optional[str]): A unique identifier for tracking the request (if applicable).
    """
    status: str
    status_code: int
    message: str
    screen : str
   

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON response for API documentation.
        """
        # Ensure datetime objects are serialized as ISO formatted strings

        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "message": "OTP code Resent successfully",
                "uuid": "5d2f252b-a9b5-4637-b35a-70ebb080e7f4"
            }
        }

class PasswordResetOTPValidateResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after validating OTP for password reset.

    Attributes:
        status (str): The status of the OTP validation process.
        status_code (int): The HTTP status code of the response.
        message (str): A descriptive message about the validation result.
        passwordreset_token (str): A security token for proceeding with the password reset.
    """
    status: str
    status_code: int
    message: str
    passwordreset_token: str

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON response for API documentation.
        """
        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "message": "OTP Validated successfully",
                "passwordreset_token":"NIDIf6GKnrKOrus-UhSYmdlB5xnFih5PuvvjaZsY0P9MXQ04O50f6JLaCMZ4RH_Ts_LQMr60FfJXYc_ckxrWFcoOPgysjoVBNyLyWa72vTNVOg8hvA1JaC7-F9Q="


            }
        }
    
class PasswordResetResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after successfully resetting the password.

    Attributes:
        status (str): The status of the password reset process.
        status_code (int): The HTTP status code of the response.
        message (str): A message indicating the password update status.
    """
    status: str
    status_code: int
    message: str    

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON response for API documentation.
        """
        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "message": "Password Updated successfully"


            }
        }   

class PasswordResetLinkValidateResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after validating the password reset link.

    Attributes:
        status (str): The status of the link validation process.
        status_code (int): The HTTP status code of the response.
        message (str): A descriptive message about the validation result.
    """
    status: str
    status_code: int
    uuid : str
    message: str
    username:str

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON response for API documentation.
        """
        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "message": "Link Validated successfully"


            }
        }

class PasswordResetFinalResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after successfully resetting the password.

    Attributes:
        status (str): The status of the password reset process.
        status_code (int): The HTTP status code of the response.
        message (str): A message indicating the password update status.
    """
    status: str
    status_code: int
    message: str  

class ResendOTPResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for the response after resending the OTP.

    Attributes:
        status (str): The status of the OTP resend process.
        status_code (int): The HTTP status code of the response.
        message (str): A message indicating the OTP resend status.
    """
    status: str
    status_code: int
    message: str    

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON response for API documentation.
        """
        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "message": "OTP code Resent successfully"
            }
        }
class ResetPasswordAdminResponseDTO(BaseModel):
    message: str

class ExpiredPasswordResetResponseDTO(BaseModel):
    status: str
    status_code: int
    message: str

