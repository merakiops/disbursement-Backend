"""
Author: punith
Description: DTOs for OTP validation and resend responses in a FastAPI application.
"""
from pydantic import BaseModel
from datetime import datetime
from typing import Any,Optional


class OTPValidateResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for OTP validation responses.

    Attributes:
        status (str): The status of the OTP validation (e.g., "success", "failed").
        status_code (int): The HTTP status code of the response.
        message (Optional[str]): A message providing additional details about the validation result.
    """
    status: str
    status_code: int
    message: Optional[str]=None

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
                "message": "OTP Validated Successfully",
            }
        }

class OTPResendResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for OTP resend responses.

    Attributes:
        status (str): The status of the OTP resend request (e.g., "success", "failed").
        status_code (int): The HTTP status code of the response.
        message (str): A message providing details about the resend request.
        uuid (str): A unique identifier for the resent OTP request.
    """
    status: str
    status_code: int
    message: str
    uuid: str

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
                "message": "OTP Validated Successfully",
                "uuid":"730649fc-fe38-46f2-9d28-abadd9f4f6cd"
            }
        }