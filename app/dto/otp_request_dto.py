"""
Author: Punith
Description: DTOs for OTP validation and resending in a FastAPI application.
"""
from pydantic import BaseModel

class OTPValidateRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for OTP validation requests.

    Attributes:
        otp (int): The One-Time Password (OTP) entered by the user.
        uuid (str): A unique identifier for the OTP request.
    """
    otp: int
    uuid: str

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON payload for API documentation.
        """
        schema_extra = {
            "example": {
                "otp": 123456,
                "uuid": "162fa307-1953-4a05-acaf-169ae8653645"
            }
        }

class OTPResendRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for OTP resend requests.

    This class is used when a user requests a new OTP.
    """

    class Config:
        """
        Pydantic configuration for schema example.

        Provides an example JSON payload for API documentation.
        """
        schema_extra = {
            "example": {
                None
            }
        }

