"""
Author: Punith
Description: This module provides repository functions for user management,
including user retrieval, creation, updates, and token management.
"""
from app.models.tokens import Tokens
from sqlalchemy.orm import Session, joinedload
from typing import Optional  # For Optional type hint
from fastapi import Depends, HTTPException
from app.db import get_db
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo
import bcrypt
import os
from dotenv import load_dotenv
from sqlalchemy import func
from sqlalchemy import select, or_
from app.models.user import User,Role
import pytz
from app.core.security import hash_password
from typing import Union,List
from app.exceptions.user_exceptions import UserEmailAlreadyExistsException
from app.core.security import pwd_context
from app.dto.user_create_request_dto import UserCreateRequestDTO,UserListRequestDTO 
import logging
from sqlalchemy.orm import joinedload
from app.models.company import MaCompany
from sqlalchemy import asc
from app.repo.user_login_history_repo import UserLoginHistoryRepo
from app.models.user_login_attempt import UserLoginHistory
from app.core.security import verify_password
from app.dto.password_response_dto import PasswordResetFinalResponseDTO
from app.models.user_password_history import UserPasswordHistory

load_dotenv()
logger = logging.getLogger("app_logger")
default_password=os.getenv("DEFAULT_PASSWORD")

class UserRepo: 
    """
    Repository class for user-related database operations.
    """
    expiry_value = os.getenv("PASSWORD_EXPIRY", "90")  # Default to 1 if not set
    expiry_type = os.getenv("PASSWORD_EXPIRY_TYPE", "days")  # Default to "days"
    default_password=os.getenv("DEFAULT_PASSWORD")

    # Convert expiry_value to integer with fallback
    try:
        expiry_value = int(expiry_value)
    except ValueError:
        expiry_value = 1  # Default to 1 in case of invalid value

    if expiry_type.lower() == "minutes":
        expiry_delta = timedelta(minutes=expiry_value)
    elif expiry_type.lower() == "hours":
        expiry_delta = timedelta(hours=expiry_value)
    elif expiry_type.lower() == "days":
        expiry_delta = timedelta(days=expiry_value)

    @staticmethod
    def get_user_by_username(username: str, db: Session) -> Optional[User]:
        """Retrieve a user by email."""
        logger.info(f"userrepo::get_user_by_username::useremail:{username}")
        # Use db session passed via dependency
        return db.query(User).filter(func.lower(User.username) == username.lower()).first()

    @staticmethod
    def get_user_by_userid(userid: int, db: Session) -> Optional[User]:
        """Retrieve a user by user ID."""
        return db.query(User).filter(User.userid == userid).first()

    @staticmethod
    def add_user(user: User, db: Session) -> None:
        """Add a new user to the database."""
        # Use db session passed via dependency
        db.add(user)
        db.commit()

    @staticmethod
    def get_token(db: Session,token: str) -> Optional[str]:
        """Retrieve a token from the database."""
        logger.info(f"Looking for token in DB: {token}")
        result = db.query(Tokens).filter(Tokens.token == token).first()
        logger.info(f"Token query result: {result}")
        return result


    @staticmethod
    def get_token_by_userid(db: Session, userid: int) -> Optional[str]:
        """Retrieve a token by user ID."""
        return db.query(Tokens).filter(Tokens.disbursement_or_user_id == userid).first()
				 
																			 
										  
																			  

    @staticmethod
    def update_token_by_userid(userid: int, new_token: str,existing_token:str, expiration_timestamp:float, db: Session) -> None:
        """Update a user's token in the database."""
        logger.info(f"user_repo update token new token {new_token} and existing token {existing_token} and user_id {userid}")
        if isinstance(expiration_timestamp, datetime):
            expiration_datetime = expiration_timestamp
        else:    
            expiration_datetime = datetime.fromtimestamp(expiration_timestamp)
        existing_token = db.query(Tokens).filter(Tokens.disbursement_or_user_id == userid).first()
        if existing_token:
            logger.info(f"user_repo update token existing token found updating with new token")
            existing_token.token = new_token
            existing_token.exp = expiration_datetime
            db.commit()
        else:
            logger.info(f"No existing token found for user ID {userid}. Cannot update.")

				 
																																	  
													
																																   
													  
													  
				 
																			  
																						
						  
																							   
											
													
					   
			 
																								   
    
    @staticmethod
    def upadte_status_by_user_id(userid: int, new_status: str, db: Session):
        """Update a user's status in the database."""
        logger.info(f"user_repo update status new status {new_status}  and user_id {userid}")
        try:
            existing_user = db.query(User).filter(User.userid == userid).first()
            if existing_user:
                existing_user.status = new_status  
                existing_user.updatedon = datetime.now()
                db.commit()
                logger.info(f"Updated user {userid} status to {new_status}")
            else:
                logger.warning(f"No user found for user ID {userid}. Cannot update.")
        except Exception as e:
            db.rollback()
            logger.error(f"Error updating status for user {userid}: {e}")
            raise

    @staticmethod
    def add_token(token: str, expiration_timestamp: float,userid:int, db: Session,useremail:str, is_external_user:str ) -> None:
        """Add a new token to the database."""
        if isinstance(expiration_timestamp, datetime):
            expiration_datetime = expiration_timestamp
        else:    
            expiration_datetime = datetime.fromtimestamp(expiration_timestamp)
        new_token = Tokens(disbursement_or_user_id=userid, token = token, exp=expiration_datetime,user_email=useremail,is_external_user=is_external_user)
        db.add(new_token)
        db.commit()

    @staticmethod
    def update_user_password(userid: int, new_password: str, db: Session) -> None:
        """Update a user's password and set its expiration."""
        existing_user = db.query(User).filter(User.userid == userid).first()
        now = pytz.timezone(os.getenv('TIME_ZONE'))
        if not existing_user:
            raise ValueError(f"User with userid {userid} not found")

            # Hash the new password using bcrypt
        hashed_password = hash_password(new_password)
        # Update the user's password
        if existing_user.roleid == 1:
            existing_user.password = hashed_password
            existing_user.password_expiry = func.now() + UserRepo.expiry_delta
        else:
            existing_user.password = hashed_password
            existing_user.is_first_login = "N"
            existing_user.password_expiry = func.now() + UserRepo.expiry_delta

        db.commit()

    @staticmethod
    def get_admin_emails(company_id: int,db: Session):
        """Retrieve emails of users with admin roles."""
        # Fetch the role_id for 'Client Admin'
        role_query = select(Role.role_id).where(Role.role_name =="Admin")
        role_ids = db.execute(role_query).scalars().all()

        if not role_ids:
            return []  # No Client Admin role found

        # Fetch the email of users with this role_id and given company_id
        # user_query = select(User.email).where(
        #     or_(User.roleid.in_(role_ids), User.companyid == company_id, User.companyid == None)
        # )
        user_query = select(User.email).where(
            User.roleid.in_(role_ids),
            User.companyid == company_id,
            User.email.isnot(None),
            User.email != ""
        )
        admin_emails = db.execute(user_query).scalars().all()
        return admin_emails  # Returns a list of emails
    
    @staticmethod
    def getMasterRoles(db: Session):
        """Retrieve child roles for a given master role."""
        roles = db.query(Role).filter(Role.status == "Y").all()
        if not roles:
            raise HTTPException(status_code=404, detail="Roles not found")
        
        return  roles 
    
    @staticmethod
    def search_users(db: Session, super_admin:str,query: str = None,company_id:int= None, page: int = 1, page_size: int = 10):
        """Search for users based on query parameters."""
        base_query = db.query(User)

        if query:
            base_query = base_query.filter(or_(
                User.name.ilike(f"%{query}%"),
                User.email.ilike(f"%{query}%"),
                Role.role_desc.ilike(f"%{query}%"),
            ))
        if super_admin == 'N':
            if company_id:
                base_query = base_query.filter(User.companyid == company_id)

        return (
            base_query
            .options(joinedload(User.roles), joinedload(User.company))
            .order_by(User.name.asc())  # Sort by first name in ascending order
            .limit(page_size)
            .offset((page - 1) * page_size)
            .all()
        )
    
    @staticmethod
    def create_or_update_user( user_data: UserCreateRequestDTO,username:str, db: Session) -> User:
        try:
            #validate company id
            company = db.query(MaCompany).filter(MaCompany.company_id == user_data.company_id).first()
            if not company:
                raise HTTPException(status_code=400, detail="Invalid company_id provided.")

            # Validate role existence
            role = db.query(Role).filter(Role.role_id == user_data.role_id).first()
            if not role:
                raise HTTPException(status_code=400, detail="Invalid role_id provided.")
            if user_data.email:
                cleaned_email = user_data.email.strip()
                email_query = db.query(User).filter(User.email == cleaned_email)

                if hasattr(user_data, "user_id") and user_data.user_id:
                    email_query = email_query.filter(User.userid != user_data.user_id)

                duplicate_user = email_query.first()
                if duplicate_user:
                    raise HTTPException(status_code=400, detail="Email already exists.")         
            existing_user = None

            # Check if user_data has user_id and fetch the existing user
            if hasattr(user_data, "user_id") and user_data.user_id:
                existing_user = db.query(User).filter(User.userid == user_data.user_id).first()

            if existing_user:
                # Update only provided fields, keeping existing values where applicable
                existing_user.name = user_data.name or existing_user.name
                if user_data.email is not None:
                    cleaned_email = user_data.email.strip()
                    existing_user.email = cleaned_email if cleaned_email else None
                existing_user.username = user_data.username or existing_user.username
                existing_user.roleid = user_data.role_id if user_data.role_id is not None else existing_user.roleid                
                if existing_user.status =='B':
                    existing_history = (db.query(UserLoginHistory).filter(UserLoginHistory.userid == user_data.user_id).first())
                    if existing_history and existing_history.attempt_left != 5:
                        UserLoginHistoryRepo.reset_login_attempt(user_data.user_id, db)  
                     
                existing_user.status = user_data.status if user_data.status is not None else existing_user.status
                existing_user.companyid = user_data.company_id if user_data.company_id is not None else existing_user.companyid
                existing_user.is_mfa_enabled = user_data.is_mfa_enabled if user_data.is_mfa_enabled is not None else existing_user.is_mfa_enabled
                existing_user.updated_by = username
                existing_user.email_signature=user_data.email_signature if user_data.email_signature else existing_user.email_signature
          
                db.commit()
                db.refresh(existing_user)
                
                
                return existing_user

            # If no existing user, create a new one
            new_user = User(
                name=user_data.name,
                email = user_data.email.strip() if user_data.email and user_data.email.strip() else None,
                username=user_data.username,
                roleid=user_data.role_id,
                status=user_data.status if user_data.status is not None else 'Y', # Default to Y
                created_by= user_data.created_by,
                companyid = user_data.company_id,
                password = hash_password(UserRepo.default_password),
                password_expiry=func.now()+UserRepo.expiry_delta,
                is_mfa_enabled=user_data.is_mfa_enabled if user_data.is_mfa_enabled is not None else ('N' if user_data.email else None),
                is_first_login = 'Y',
                email_signature=user_data.email_signature if user_data.email_signature else None

            )

            db.add(new_user)
            db.commit()
            db.refresh(new_user)


            return new_user
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=f"Unable to create or update user.")


    @staticmethod
    def get_all_users(request_dto: UserListRequestDTO, db: Session):
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size
        query = db.query(User).options(
            joinedload(User.company),
            joinedload(User.roles)
        )

    # Search filter
        if request_dto.query:
            pattern = f"%{request_dto.query}%"
            query = query.filter(
                User.name.ilike(pattern) |
                User.username.ilike(pattern) |
                User.email.ilike(pattern)
            )

        query = query.order_by(asc(User.name))

        total_count = query.count()
        users = query.offset(offset).limit(request_dto.page_size).all()

        return {
            "total_count": total_count,
            "data": users
        }
        
    @staticmethod
    def get_all_pic(db: Session):
        pics =(db.query(User).filter(User.roleid.in_([1, 2])).all())
        return pics
    
    @staticmethod
    def reset_password_admin(username,db):
        user = UserRepo.get_user_by_username(username, db)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        elif user and user.is_first_login=='N':
            return "the password is already set to default password"
        else:
            UserRepo.update_user_password(userid=user.userid,new_password=default_password,db=db)

            return "Password has been reset to the default password."
        
    @staticmethod
    def change_password(body,token, db: Session):
        old_password = body.old_password
        new_password = body.new_password
        
        user_name=body.username
        user_obj = db.query(User).filter(User.username == user_name).first()
        if not user_obj:
            raise HTTPException(status_code=404, detail="User not found")

        
        token_obj = db.query(Tokens).filter(
            Tokens.disbursement_or_user_id == user_obj.userid  
        ).first()

        if not token_obj or token!=token_obj.token:
            raise HTTPException(
                status_code=400,
                detail="Invalid user"
            )

        # Fetch user
        user_obj = UserRepo.get_user_by_userid(user_obj.userid, db)
        if not user_obj:
            raise HTTPException(
                status_code=404,
                detail="User not found"
            )

        # Verify old password matches hashed password in DB
        if not verify_password(old_password, user_obj.password):
            raise HTTPException(
                status_code=400,
                detail="Old password is incorrect"
            )

        # Ensure new password is not same as old
        if verify_password(new_password, user_obj.password):
            raise HTTPException(
                status_code=400,
                detail="New password cannot be the same as old password"
            )

        # Hash and update password
        user_obj.password = hash_password(new_password)
        user_obj.password_expiry = func.now() + UserRepo.expiry_delta
        user_obj.is_first_login='Y'
        db.commit()

        return {"message": "Password changed successfully"}
    
    @staticmethod
    def reset_expired_password(body, db: Session):
        from app.services.user_password_history_service_impl import UserPasswordHistoryServiceImpl
        from app.services.user_service_impl import UserServiceImpl
        
        password_history_service = UserPasswordHistoryServiceImpl()
        user_service = UserServiceImpl()
        
        try:
            user = UserRepo.get_user_by_username(body.username, db)
            if not user:
                logger.warning(f"Password reset failed - User not found: {body.username}")
                raise HTTPException(status_code=404, detail="User not found")
                
            # Validate password is expired
            if not user_service.is_password_expired(user.password_expiry):
                logger.warning(f"Password reset failed - Password not expired: {body.username}")
                return PasswordResetFinalResponseDTO(
                    status="failed",
                    status_code=400,
                    message="Password is still active. Cannot reset non-expired password."
                )

            if not verify_password(body.old_password, user.password):
                logger.warning(f"Password reset failed - Invalid old password: {body.username}")
                raise HTTPException(status_code=401, detail="Invalid old password")
            
            user_service.validate_password(user, body.new_password, db)
    
            UserRepo.update_user_password(user.userid, body.new_password, db)

            pwdhistory = UserPasswordHistory(userid=user.userid, password=user.password)
            password_history_service.add_password_history(passwordhistory=pwdhistory, db=db)
            
            logger.info(f"Password successfully reset for user: {body.username}")
            
            return PasswordResetFinalResponseDTO(
                status="success",
                status_code=200,
                message="Password updated successfully"
            )
        
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Error resetting password for {body.username}")
            db.rollback()
            raise HTTPException(status_code=500, detail="Internal server error")