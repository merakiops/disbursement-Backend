from app.exceptions.AppException import AppException

class DemurrageException(AppException):
    """Base exception for all demurrage-related operations."""
    def __init__(self, status_code: int, message: str):
        super().__init__(status_code=status_code, message=message)

class DemurrageValidationError(DemurrageException):
    """Exception raised when demurrage inputs fail domain validation rules."""
    def __init__(self, message: str):
        super().__init__(status_code=400, message=message)

class DemurrageNotFoundException(DemurrageException):
    """Exception raised when a demurrage case is not found."""
    def __init__(self, message: str):
        super().__init__(status_code=404, message=message)
