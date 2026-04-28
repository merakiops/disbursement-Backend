"""
Author: Punith
Description: This module defines an abstract service class for handling 
user-related operations in a FastAPI application using SQLAlchemy.
"""
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from typing import Optional, Dict, Any,List
from app.models.user import User
from app.dto.user_create_request_dto import UserCreateRequestDTO,UserListRequestDTO
from app.dto.user_create_response_dto import UserCreateResponseDTO

class UserService(ABC):
    """
    Abstract base class defining the contract for user-related operations.
    """

    @abstractmethod
    def validate_login(self, username: str, password: str,client_ip:str, db: Session) -> Dict[str, Any]:
        """
        Validates user login credentials.

        Args:
            useremail (str): The email of the user attempting to log in.
            password (str): The user's password.
            db (Session): The database session.

        Returns:
            Dict[str, Any]: A dictionary containing authentication results.
        """
        pass

    @abstractmethod
    def get_user_by_username(self, useremail: str, db: Session) -> Optional[User]:
        """
        Retrieves a user by their email.

        Args:
            useremail (str): The email of the user.
            db (Session): The database session.

        Returns:
            Optional[User]: The user object if found, otherwise None.
        """
        pass

    @abstractmethod
    def get_user_by_userid(self, userid: str, db: Session) -> Optional[User]:
        """
        Retrieves a user by their user ID.

        Args:
            userid (str): The ID of the user.
            db (Session): The database session.

        Returns:
            Optional[User]: The user object if found, otherwise None.
        """
        pass

    @abstractmethod
    def update_user_password(self, userid: int, new_password: str, db: Session) -> None:
        """
        Updates a user's password.

        Args:
            userid (int): The ID of the user.
            new_password (str): The new password to set.
            db (Session): The database session.

        Returns:
            None
        """
        pass

    @abstractmethod
    def get_admin_emails(self, company_id: int,db: Session):
        """
        Retrieves the email addresses of administrators for a given company.

        Args:
            company_id (int): The ID of the company.
            db (Session): The database session.

        Returns:
            List[str]: A list of admin email addresses.
        """
        pass
    
    @abstractmethod
    def getMasterRoles(self,db: Session):
        """
        Retrieves master roles based on role ID.

        Args:
            db (Session): The database session.
            roleId (int): The ID of the role.

        Returns:
            List[Dict[str, Any]]: A list of roles and their details.
        """
        pass


    @abstractmethod
    def search_users(self,db: Session,super_admin:str, query: str,company_id:int, page: int = 1, page_size: int = 10):
        """
        Searches for users based on the given criteria.

        Args:
            db (Session): The database session.
            super_admin (str): Indicates if the search is performed by a super admin.
            query (str): The search query.
            company_id (int): The company ID to filter users.
            page (int, optional): The page number for pagination. Defaults to 1.
            page_size (int, optional): The number of users per page. Defaults to 10.

        Returns:
            List[Dict[str, Any]]: A paginated list of matching users.
        """
        pass

    @abstractmethod
    def create_or_update_user(self, user_create: UserCreateRequestDTO, username:str,db: Session) -> User:
        """
        Create  User based on Username.

        Args:
            db (Session): The database session.
            user_create (UserCreateRequestDTO): DTO of the User creation.

        Returns:
            Created user details.
        """
        pass
    @abstractmethod
    def update_status_by_user_id(self,userid: int, new_status: str, db: Session):
        """
        Updates a user's status.

        Args:
            userid (int): The ID of the user.
            new_status (str): The new status to set.
            db (Session): The database session.

        Returns:
            None
        """
        pass
    @abstractmethod
    def get_all_users(self, request_dto: UserListRequestDTO, db: Session) -> List[UserCreateResponseDTO]:
        """
        Fetch all users from the database.

        Args:
        db (Session): The database session.

        Returns:
        List[UserCreateResponseDTO]: List of user details.
        """
        pass
    
    @abstractmethod
    def get_all_pic(self, db: Session):
        pass

    @abstractmethod
    def reset_password_admin(self,username,db):
        pass

    @abstractmethod
    def change_password(body, token,db: Session):
        pass