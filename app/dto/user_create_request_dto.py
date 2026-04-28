from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreateRequestDTO(BaseModel):
    user_id: Optional[int] =None
    company_id:Optional[int]=None
    role_id:Optional[int]=None
    name:Optional[str]=None
    username: Optional[str]=None
    email: Optional[str] = None
    status: Optional[str]=None
    is_mfa_enabled:Optional[str]=None
    created_by: Optional[str] = None
    email_signature: Optional[str] = None



class UserListRequestDTO(BaseModel):
    page: int
    page_size: int
    query: Optional[str] = None
    

    model_config = {
        "from_attributes": True
    }
