from app.repo.user_repo import UserRepo
from app.core.jwtService import generate_token
from app.core.security import pwd_context
from app.db import get_db
from sqlalchemy.orm import Session
import traceback
import logging
from fastapi import HTTPException
from typing import Optional
from app.models.user import User
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
from app.models.user_login_attempt import UserLoginHistory
from app.services.user_login_history_service_impl import UserLoginHistoryServiceImpl
from app.services.user_service import UserService
import pytz
from dotenv import load_dotenv
import os
import re
from app.services.user_password_history_service_impl import  UserPasswordHistoryServiceImpl
from app.config import Config
from app.dto.user_create_request_dto import UserCreateRequestDTO,UserListRequestDTO
from app.dto.user_create_response_dto import UserCreateResponseDTO
from typing import List
from app.models.user_password_history import UserPasswordHistory


logger = logging.getLogger("app_logger")
login_history_service = UserLoginHistoryServiceImpl()
password_history_service = UserPasswordHistoryServiceImpl()

load_dotenv()
class UserServiceImpl(UserService):

    def validate_login(self, username: str, password: str,client_ip:str, db: Session):
        """
        Validate user login credentials and return JWT token if successful.
        """
        username = username.strip().lower()
        try:
            logger.info(f"Attempting login for user: {username}")

            user = UserRepo.get_user_by_username(username, db)
            if not user:
                logger.warning(f"Login failed - User not found: {username}")
                raise HTTPException(status_code=404, detail="User Not Found.")
            # if user.is_blocked =='Y':
            #     logger.warning(f"Login failed - User is Blocked: {username}")
            #     userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='N')
            #     login_history_service.store_login_history(userhistory, db)
            #     raise HTTPException(status_code=403, detail="User is blocked")
            if user.status =='N':
                logger.warning(f"Login failed - Inactive user: {username}")
                userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='N')
                login_history_service.store_login_history(userhistory, db)
                raise HTTPException(status_code=403, detail="Inactive user. Please contact administrator.")
            if user.status =='B':
                logger.warning(f"Login failed - Blocked  user: {username}")
                userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='N')
                login_history_service.store_login_history(userhistory, db)
                raise HTTPException(status_code=403, detail="User Accoiunt is Blocked. Please contact administrator.")
                    

            # Verify password
            logger.info(f"Verifying password for user: {username}")
            if not pwd_context.verify(password, user.password):
                logger.warning(f"Login failed - Incorrect password for user: {username}")
                userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='N')
                login_history_service.store_login_history(userhistory, db)
                raise HTTPException(status_code=400, detail="Invalid credentials.")

            # Check if password has expired
            if self.is_password_expired(user.password_expiry):
                logger.warning(f"Login blocked - Password expired for user: {username}")
                userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='N')
                login_history_service.store_login_history(userhistory, db)
                raise HTTPException(status_code=403, detail="Password has expired. Please reset your password.")
            

            # Generate JWT token
            logger.info(f"Generating JWT token for user: {username}")
            additional_claims = {
                "user_id": user.userid,                
                "username": user.username,
                "company": user.companyid,
                "roleId": user.roleid,
                "useremail": user.email,
                "role_name": user.roles.role_name
            }

            access_token = generate_token(
                userid =user.userid,
                username=user.username,
                useremail=user.email,
                additional_claims=additional_claims,
                db=db,
            )

            if access_token:
                logger.info(f"Storing login history for user: {username}")
                userhistory = UserLoginHistory(userid=user.userid,ip_address=client_ip, was_successfull='Y')
                login_history_service.store_login_history(userhistory, db)

            logger.info(f"User {username} successfully logged in.")
            #return {"access_token": access_token, "token_type": "bearer", "userId": user.userid}
            jwt_expires = int(Config.JWT_ACCESS_TOKEN_EXPIRES)
            return{
                "token": access_token,
                "user": user,
                "expires": datetime.now(pytz.timezone(os.getenv('TIME_ZONE'))) + timedelta(minutes=jwt_expires)
                }
            

        except HTTPException as e:
            logger.error(f"HTTP Exception in validate_login for user {username}: {e.detail}")
            raise e  # Re-raise the original HTTPException without modification
        except Exception as e:
            stack_trace = traceback.format_exc()
            logger.error(f"Unexpected error in validate_login for user {username}: {e}\n{stack_trace}")
            raise HTTPException(status_code=500, detail=f"Internal server error.")

        except Exception as e:
            stack_trace = traceback.format_exc()
            print(f"Error in UserService::validate_login: {e}")
            print(f"Error in UserService::validate_login tack trace: {stack_trace}")
            logger.error(f"Stack trace: {stack_trace}")
            return None

    def is_password_expired(self, password_expiry: Optional[datetime]) -> bool:
        """Check if the user's password has expired."""
        if password_expiry:
            now = datetime.now(pytz.timezone(os.getenv('TIME_ZONE')))
            password_expiry = password_expiry.replace(tzinfo=timezone.utc) 
            expired = password_expiry < now
            if expired:
                logger.info("Password has expired.")
            return expired
        return False

    def get_user_by_username(self, username: str, db: Session) -> Optional[User]:
        logger.info(f"Fetching user by email: {username}")
        user = UserRepo.get_user_by_username(username, db)
        if user:
            logger.info(f"User found for email: {username}")
        else:
            logger.warning(f"No user found for email: {username}")
        return user

    def get_user_by_userid(self, userid: str, db: Session) -> Optional[User]:
        logger.info(f"Fetching user by ID: {userid}")
        user = UserRepo.get_user_by_userid(userid, db)
        if user:
            logger.info(f"User found for ID: {userid}")
        else:
            logger.warning(f"No user found for ID: {userid}")
        return user

    def validate_password(self,user, new_password, db):
        if not re.fullmatch(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,16}$", new_password):
            raise HTTPException(
                status_code=400, 
                detail="Password must be 8-16 characters long, contain at least one lowercase letter \n "
                    "one uppercase letter, one digit, and one special character (@#$%^&*!)."
                )
                  
        lastuserpwd_status = password_history_service.is_password_reused(user.userid, new_password, db=db)
        if not lastuserpwd_status:
            raise HTTPException(
                status_code=400,
                detail="New password cannot be the same as any of your last five used passwords. Please choose a different password "
            )
    def update_user_password(self, userid: int, new_password: str, db: Session) -> None:
        logger.info(f"Updating password for user ID: {userid}")
        UserRepo.update_user_password(userid, new_password, db)
        logger.info(f"Password updated successfully for user ID: {userid}")

    def get_admin_emails(self, company_id: int,db: Session, ):
        logger.info(f"Fetching client admin email for company: {company_id}")
        return UserRepo.get_admin_emails(company_id,db)
    
    def getMasterRoles(self,db: Session):
        logger.info(f"Fetching master roles:")
        return UserRepo.getMasterRoles(db)
    
    
    def search_users(self,db: Session,super_admin:str, query: str,company_id:int, page: int = 1, page_size: int = 10):
        logger.info(f"Fetching users based on pagination offset and serach parameter:")
        return UserRepo.search_users(db,super_admin,query,company_id,page,page_size)
    
    def create_or_update_user(self, user_create: UserCreateRequestDTO,username:str, db: Session) -> User:
       return UserRepo.create_or_update_user(user_create,username,db)
    def update_status_by_user_id(self,userid: int, new_status: str, db: Session):
        return UserRepo.upadte_status_by_user_id(userid, new_status,db)
    
    def get_all_users(self, request_dto: UserListRequestDTO,db: Session) -> List[User]:
        return UserRepo.get_all_users(request_dto,db)

    def get_all_pic(self, db: Session):
        return UserRepo.get_all_pic(db)

    def reset_password_admin(self,username,db):
        return UserRepo.reset_password_admin(username,db)

    def change_password(self,body,token ,db: Session):
        return UserRepo.change_password(body,token, db)
    
    def reset_expired_password(self, body, db: Session):
        logger.info(f"Attempting to reset expired password for user: {body.username}")
        return UserRepo.reset_expired_password(body, db)