"""
Author: punith
Description: DTOs for authentication responses in a FastAPI application.
"""
from pydantic import BaseModel
from datetime import datetime
from typing import Any
from typing import Optional
class TokenResponse(BaseModel):
    """
    Data Transfer Object (DTO) for access token response.

    Attributes:
        access_token (str): The JWT access token.
        token_type (str): The type of token (e.g., "bearer").
        userId (int): The ID of the authenticated user.
    """
    access_token: str
    token_type: str
    userId: int

class LoginResponseDTO(BaseModel):
    """
    Data Transfer Object (DTO) for login response.

    Attributes:
        status (str): The status of the login attempt (e.g., "success", "failed").
        status_code (int): The HTTP status code of the response.
        token (Optional[TokenResponse]): The authentication token details, if login is successful.
        expires (Optional[str]): Expiration timestamp of the token in ISO 8601 format.
        uuid (Optional[str]): A unique identifier for the logged-in user.
        detail (Optional[str]): Additional detail related to the login attempt.
    """
    status: str
    status_code: int
    token: Optional[TokenResponse]
    expires: Optional[str]    
    detail: Optional[str]=None
    uuid: Optional[str]= None
    is_mfa_enabled: Optional[str]= None
    is_first_login: Optional[str] = None
    name: Optional[str] = None
    username:Optional[str] = None
    role_id : Optional[int] = None
    role_name:Optional[str] = None
    email_signature:Optional[str]=None
    company_name:Optional[str] = None
    company_id :Optional[int]=None


    class Config:
        """
        Pydantic configuration for JSON serialization and API schema.

        - Ensures `datetime` objects are serialized as ISO 8601 formatted strings.
        - Provides an example JSON response for API documentation.
        """
        # Ensure datetime objects are serialized as ISO formatted strings
        json_encoders = {
            datetime: lambda v: v.isoformat()  # Convert datetime to ISO 8601 string format
        }
        schema_extra = {
            "example": {
                "status": "success",
                "status_code": 200,
                "token": {
                    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    "token_type": "bearer",
                    "userId": 1
                },
                "expires": "2025-01-01T00:00:00+05:30",
                "uuid": "user-uuid-example",
                "detail": "success"
            }
        }
