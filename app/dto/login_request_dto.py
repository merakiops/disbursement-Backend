"""
Author: Punith
Description: DTO for user login request in FastAPI application.
"""
from pydantic import BaseModel

class LoginRequestDTO(BaseModel):
    """
    Data Transfer Object (DTO) for user login requests.

    Attributes:
        username (str): The Username of the user.
        password (str): The user's password.
    """
    username: str
    password: str

    class Config:
        """
        Pydantic configuration for schema example.
        Provides an example JSON payload for API documentation.
        """
        schema_extra = {
            "example": {
                "username": "xyz",
                "password": "password123"
            }
        }
