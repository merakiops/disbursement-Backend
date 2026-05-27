from app.models.company import MaCompany, MaCompanyType
from app.models.bank_details import BankDetails
from app.models.user import User
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from app.dto.port_agent_create_or_update_dto import PortAgentCreateUpdateDTO, PortAgentListRequestDTO
import logging
from sqlalchemy import or_
from sqlalchemy import func 
from typing import List
from app.core.generic_update_function import generic_update

logger = logging.getLogger("app_logger")

def convert_email_to_list(email_str):
    """Convert database email string to list format"""
    if not email_str or email_str == '{}':
        return None
    if isinstance(email_str, str):
        return [e.strip() for e in email_str.split(';') if e.strip()]
    return email_str

class PortAgentRepository:
    @staticmethod
    def create_or_update_port_agent(port_data: PortAgentCreateUpdateDTO, username: str, db: Session) -> MaCompany:
        try:
            # Ensure email list is unique and clean
            email_list = list(dict.fromkeys([e.strip() for e in (port_data.email or [])]))
            email_str = "; ".join(email_list) if email_list else None

            # Check for email uniqueness across companies
            if email_list:
                email_conditions = [MaCompany.email.ilike(f"%{email}%") for email in email_list]

                query = db.query(MaCompany).filter(or_(*email_conditions),MaCompany.status=='Y')
                if port_data.company_id:
                    query = query.filter(MaCompany.company_id != port_data.company_id)

                conflicting_companies = query.all()
                existing_emails = set()
                for company in conflicting_companies:
                    for db_email in (company.email or "").split(","):
                        existing_emails.add(db_email.strip().lower())

                for email in email_list:
                    if email.lower() in existing_emails:
                        raise HTTPException(
                            status_code=400,
                            detail=f"Email '{email}' already exists in another Port Agent."
                        )
         
            # Create or update the Port Agent
            if port_data.company_id:
                logger.info(f"Updating Port Agent with ID: {port_data.company_id}")
                company = db.query(MaCompany).filter(MaCompany.company_id == port_data.company_id).first()
                if not company:
                    raise HTTPException(status_code=404, detail="Port Agent not found.")

                # Check for duplicate name in other companies
                if port_data.company_name:
                    duplicate_name = db.query(MaCompany).filter(
                        func.lower(MaCompany.company_name) == port_data.company_name.lower(),
                        MaCompany.company_id != port_data.company_id,MaCompany.status=='Y'
                    ).first()
                    if duplicate_name:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail=f"Port Agent '{port_data.company_name}' already exists."
                        )
                update_data = {
                    "company_name": port_data.company_name or company.company_name,
                    "app_owning_company_id": port_data.app_owning_company_id or company.app_owning_company_id,
                    "company_type_id": port_data.company_type_id or company.company_type_id,
                    "email":  email_str if email_str else port_data.email,
                    "phone_number": port_data.phone_number or company.phone_number,
                    "address": port_data.address or company.address,
                    "status": 'Y' or company.status,
                }
                incoming_name = (port_data.company_name or "").strip()
                existing_name = (company.company_name or "").strip()
                incoming_address = (port_data.address or "").strip()
                existing_address = (company.address or "").strip()

                if incoming_name.lower() == existing_name.lower() and incoming_address.lower()==existing_address.lower() :
                    logger.info("Company name unchanged. Performing direct update for company ID: %s", port_data.company_id)
                    # Proceed to update fields
                    company.company_name = port_data.company_name or company.company_name
                    company.email = email_str or company.email
                    company.phone_number = port_data.phone_number or company.phone_number
                    company.address = port_data.address or company.address
                    company.status = port_data.status or company.status
                    company.bank_details_id=company.bank_details_id or port_data.bank_details.bank_details_id
                    company.updated_by = username

                else:
                    company = generic_update(
                    db=db,
                    model=MaCompany,
                    instance_id=port_data.company_id,
                    update_data=update_data,
                    username=username,
                    unique_check_columns=["company_name","address"]
                )
                    old_id_obj = db.query(MaCompany).filter(MaCompany.company_id==port_data.company_id).first()
                    new_id_obj = db.query(MaCompany).filter(MaCompany.company_id==company.company_id).first()
                    if old_id_obj and new_id_obj:
                        old_id_obj.bank_details_id = new_id_obj.bank_details_id or None
                
                bank_id = db.query(MaCompany).filter(MaCompany.bank_details_id==port_data.bank_details.bank_details_id).first()
                bank_data = port_data.bank_details
                # update the bank details if the both company_id and bank_details_id is present
                if (bank_data and bank_data.bank_details_id) or bank_id:
                    existing_bank = db.query(BankDetails).filter_by(bank_details_id=bank_data.bank_details_id).first()
                    if not existing_bank:
                        raise HTTPException(status_code=404, detail="Bank details not found.")

                    existing_bank.country_name = bank_data.country_name
                    existing_bank.beneficiary_acc_holder_name = bank_data.beneficiary_acc_holder_name
                    existing_bank.bank_name = bank_data.bank_name
                    existing_bank.correspondent_account_number = bank_data.correspondent_account_number
                    existing_bank.current_account_number = bank_data.current_account_number
                    existing_bank.ifsc_code = bank_data.ifsc_code
                    existing_bank.bik_code = bank_data.bik_code
                    existing_bank.swift_code = bank_data.swift_code
                    existing_bank.currency = bank_data.currency
                    existing_bank.inn_code = bank_data.inn_code
                    existing_bank.bic_code = bank_data.bic_code
                    existing_bank.iban_number = bank_data.iban_number
                    existing_bank.branch_address = bank_data.branch_address
                    existing_bank.updated_by =  username

                    new_bank_details = existing_bank
                # Create new bank details if no bank_details_id is provided
                elif bank_data:
                    new_bank_details = BankDetails(
                        country_name=bank_data.country_name,
                        beneficiary_acc_holder_name=bank_data.beneficiary_acc_holder_name,
                        bank_name=bank_data.bank_name,
                        correspondent_account_number=bank_data.correspondent_account_number,
                        current_account_number=bank_data.current_account_number,
                        ifsc_code=bank_data.ifsc_code,
                        bik_code=bank_data.bik_code,
                        swift_code=bank_data.swift_code,
                        currency=bank_data.currency,
                        inn_code=bank_data.inn_code,
                        bic_code=bank_data.bic_code,
                        iban_number=bank_data.iban_number,
                        branch_address=bank_data.branch_address,
                        created_by=username,
                        updated_by=username,
                    )
                    db.add(new_bank_details)
                    db.flush()  # Ensure ID is available
                    company.bank_details_id = new_bank_details.bank_details_id



                db.commit()
                db.refresh(company)
                return company

            # Create new Port Agent
            logger.info("Creating new Port Agent")

            # Check for duplicate name
            duplicate = db.query(MaCompany).filter(
                func.lower(MaCompany.company_name) == port_data.company_name.lower()
            ).first()
            if duplicate:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Port Agent '{port_data.company_name}' already exists."
                )

            user = db.query(User).filter(User.username == username).first()
            if not user:
                raise HTTPException(status_code=404, detail="User not found.")

            user_company = db.query(MaCompany).filter(MaCompany.company_id == user.companyid).first()
            if not user_company:
                raise HTTPException(status_code=404, detail="User's company not found.")

            app_owning_company_id = user_company.app_owning_company_id

            company_type = db.query(MaCompanyType).filter(
                MaCompanyType.company_type_name == "Port Agent"
            ).first()
            if not company_type:
                raise HTTPException(status_code=404, detail="Company type 'Port Agent' not found.")

            company_type_id = company_type.company_type_id
            bank_data = port_data.bank_details

            new_bank_details = BankDetails(
                        country_name=bank_data.country_name,
                        beneficiary_acc_holder_name=bank_data.beneficiary_acc_holder_name,
                        bank_name=bank_data.bank_name,
                        correspondent_account_number=bank_data.correspondent_account_number,
                        current_account_number=bank_data.current_account_number,
                        ifsc_code=bank_data.ifsc_code,
                        bik_code=bank_data.bik_code,
                        swift_code=bank_data.swift_code,
                        currency=bank_data.currency,
                        inn_code=bank_data.inn_code,
                        bic_code=bank_data.bic_code,                        
                        iban_number=bank_data.iban_number,
                        branch_address=bank_data.branch_address,
                        created_by=username,
                        updated_by=username,
                    )
            new_company = MaCompany(
                company_name=port_data.company_name,
                app_owning_company_id=app_owning_company_id,
                company_type_id=company_type_id,
                email=email_str,
                phone_number=port_data.phone_number,
                address=port_data.address,
                status=port_data.status or "Y",
                created_by=username,
                bank_details_id=port_data.bank_details.bank_details_id
            )
            
            db.add(new_bank_details)
            db.flush()  # This ensures bank_details_id is available

            new_company.bank_details_id = new_bank_details.bank_details_id
            db.add(new_company)

            db.commit()
            db.refresh(new_bank_details)
            db.refresh(new_company)

            return new_company


        except SQLAlchemyError as e:
            db.rollback()
            logger.error(f"Database error: {str(e)}")
            raise HTTPException(status_code=400, detail="Database error occurred during Port Agent operation")

    @staticmethod
    def get_port_agent_list(request_dto: PortAgentListRequestDTO, db: Session):
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise HTTPException(status_code=400, detail="Page and page_size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size

        # Filter only Port Agents 
        port_agent_type = db.query(MaCompanyType).filter(
            MaCompanyType.company_type_name == "Port Agent"
        ).first()
        if not port_agent_type:
            raise HTTPException(status_code=404, detail="Company type 'Port Agent' not found.")

        base_query = db.query(MaCompany).filter(MaCompany.company_type_id == port_agent_type.company_type_id,MaCompany.status=='Y')

        if request_dto.query:
            base_query = base_query.filter(MaCompany.company_name.ilike(f"%{request_dto.query.strip()}%"))

        total_count = base_query.count()
        port_agents = base_query.offset(offset).limit(request_dto.page_size).all()

        # Convert email strings to lists for DTO compatibility
        for port_agent in port_agents:
            port_agent.email = convert_email_to_list(port_agent.email)

        return {
            "total_count": total_count,
            "data": port_agents
        }
    @staticmethod
    def get_all_port_agents(db: Session) -> List[MaCompany]:
        try:
            logger.info("Fetching all port agents from the database.")

        # Get the company_type_id for 'Port Agent'
            port_agent_type_id = (
                db.query(MaCompanyType.company_type_id)
                .filter(func.lower(MaCompanyType.company_type_name) == func.lower("Port Agent"))
                .scalar()
            )


            if not port_agent_type_id:
                raise HTTPException(status_code=404, detail="Company type 'Port Agent' not found.")

            port_agents = (
                db.query(MaCompany)
                .filter(MaCompany.company_type_id == port_agent_type_id,MaCompany.status=='Y')
                .order_by(MaCompany.company_name.asc())
                .all()
            )

            # Convert email strings to lists for DTO compatibility
            for port_agent in port_agents:
                port_agent.email = convert_email_to_list(port_agent.email)

            logger.info("Fetched %d port agents", len(port_agents))
            return port_agents

        except Exception as e:
            logger.exception("Error fetching port agents")
            raise HTTPException(
                status_code=500,
                detail="Error fetching port agents from the database."
            )
