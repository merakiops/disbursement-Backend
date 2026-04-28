from fastapi import status, HTTPException

class UserEmailAlreadyExistsException(HTTPException):
    def __init__(self):
        self.message = "Email-Id Already Present"
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=self.message
        )
        