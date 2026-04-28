"""
Author: Punith
Module: User  Controller
Description: This module handles user creation, user update.
"""
from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services import user_service_impl
from app.dto.user_create_response_dto import UserListResponseDTO, UserCreateResponseDTO
from app.dto.user_create_request_dto import UserCreateRequestDTO,UserListRequestDTO
from typing import List
from app.core.decorators import jwt_required,role_required

userController = APIRouter()
userservice = user_service_impl.UserServiceImpl()

ALLOWED_ROLES = [
    {"id": 1,"name":"Admin"}
]

@userController.post("/api/v1/createUser",status_code=status.HTTP_201_CREATED,summary="Create or update a user",tags=["User Management"]
)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_user(request: Request, user_create: UserCreateRequestDTO, db: Session = Depends(get_db)):
    """
    Author: Punith  
    Description: Create a new user or update existing user.  
    Checks if username already exists during creation.  
    Returns the creation and edit message.
    """
    username = request.state.user['username']
    user_create = user_create.model_copy(update={"created_by": username})

    # If user_id is present,then its an update operation
    if user_create.user_id:
        updated_user = userservice.create_or_update_user(user_create, username, db)
        return {
            "message": "User updated successfully",
            "user": UserCreateResponseDTO.model_validate(updated_user)
        }

    #  if it is a create operation — check if username already exists
    existing_user = userservice.get_user_by_username(user_create.username, db)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    new_user = userservice.create_or_update_user(user_create, username, db)
    return {
        "message": "User created successfully",
        "user": UserCreateResponseDTO.model_validate(new_user)
    }


@userController.post("/api/v1/users", tags=["User Management"], response_model=UserListResponseDTO)
@jwt_required
async def get_all_users(request: Request, request_dto: UserListRequestDTO, db: Session = Depends(get_db)):
    """
    Get paginated and optionally filtered list of users.
    """
    result = userservice.get_all_users(request_dto, db)

    user_list = [
        UserCreateResponseDTO.model_validate(user)
        for user in result["data"]
    ]

    return UserListResponseDTO(
        total_count=result["total_count"],
        data=user_list
    )




