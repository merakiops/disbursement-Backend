from pydantic import BaseModel, EmailStr
from typing import Optional,List
from app.models.user import User

class UserCreateResponseDTO(BaseModel):
    user_id: Optional[int]
    name: str
    username: str
    email: Optional[str]
    status: Optional[str]
    is_mfa_enabled: Optional[str]
    company_id: Optional[int] = None
    company_name: Optional[str] = None
    role_id: Optional[int] = None
    role_name: Optional[str] = None
    email_signature: Optional[str] = None

    @classmethod
    def model_validate(cls, user: User):
        return cls(
            user_id=user.userid,
            name=user.name,
            username=user.username,
            email=user.email,
            status=user.status,
            is_mfa_enabled=user.is_mfa_enabled,
            company_id=user.company.company_id if user.company else None,
            company_name=user.company.company_name if user.company else None,
            role_id=user.roles.role_id if user.roles else None,
            role_name=user.roles.role_name if user.roles else None,
            email_signature=user.email_signature if user.email_signature else None
        )

class UserListResponseDTO(BaseModel):
    total_count: int
    data: List[UserCreateResponseDTO]
    
    model_config = {
        "from_attributes": True
    }
