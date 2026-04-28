from app.models.company import MaCompany, MaCompanyType
from app.models.user import User
from app.models.vessels import CompVslAsso, MaVessel
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.dto.client_create_or_update_dto import ClientCreateUpdateDTO,ClientListRequestDTO
from sqlalchemy.exc import SQLAlchemyError
import logging
from sqlalchemy import func, or_
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

class ClientRepository:
    @staticmethod
    def create_or_update_client(client_data: ClientCreateUpdateDTO, username: str, db: Session) -> MaCompany:
        try:
            current_vsl_ids = set(client_data.vsl_ids or [])

            email_list = list(dict.fromkeys([e.strip() for e in (client_data.email or [])]))
            email_str = "; ".join(email_list) if email_list else None

            if email_list:
                email_conditions = [MaCompany.email.ilike(f"%{email}%") for email in email_list]

                query = db.query(MaCompany).filter(or_(*email_conditions),MaCompany.status=='Y')
                if client_data.company_id:
                    query = query.filter(MaCompany.company_id != client_data.company_id)

                conflicting_companies = query.all()
                existing_emails = set()
                for company in conflicting_companies:
                    for db_email in (company.email or "").split(","):
                        existing_emails.add(db_email.strip().lower())

                for email in email_list:
                    if email.lower() in existing_emails:
                        raise HTTPException(
                            status_code=400,
                            detail=f"Email '{email}' already exists."
                        )

            # Check for duplicate company name for both create and update operations
            duplicate =duplicateCompanyName(client_data,db)

            if duplicate:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Client name '{client_data.company_name}' already exists."
                )
            
            if client_data.company_id:
                logger.info(f"Updating company with ID: {client_data.company_id}")
                company = db.query(MaCompany).filter(MaCompany.company_id == client_data.company_id).first()
                if not company:
                    raise HTTPException(status_code=404, detail="Client not found.")

                # # Update fields
                # company.company_name = client_data.company_name or company.company_name
                # company.app_owning_company_id = client_data.app_owning_company_id or company.app_owning_company_id
                # company.company_type_id = client_data.company_type_id or company.company_type_id
                # company.email = email_str or company.email
                # company.phone_number = client_data.phone_number or company.phone_number
                # company.address = client_data.address or company.address
                # company.status = client_data.status or company.status
                # company.updated_by = username
                update_data = {
                    "company_name": client_data.company_name or company.company_name,
                    "app_owning_company_id": client_data.app_owning_company_id or company.app_owning_company_id,
                    "company_type_id": client_data.company_type_id or company.company_type_id,
                    "email": email_str or company.email,
                    "phone_number": client_data.phone_number or company.phone_number,
                    "address": client_data.address or company.address,
                    "status": 'Y' or company.status,
                }
                
                # Direct update without generic_update
                logger.info("Performing direct update for company ID: %s", client_data.company_id)
                
                company.company_name = update_data["company_name"]
                company.app_owning_company_id = update_data["app_owning_company_id"]
                company.company_type_id = update_data["company_type_id"]
                company.email = update_data["email"]
                company.phone_number = update_data["phone_number"]
                company.address = update_data["address"]
                company.status = update_data["status"]
                company.updated_by = username
                
                db.commit()
                db.refresh(company)

                # old_id = client_data.company_id
                # new_id = company.company_id
                # old_company_vessels = db.query(CompVslAsso.vsl_id).filter(CompVslAsso.company_id == old_id).all()
                
                if client_data.vsl_ids is not None and client_data.vsl_ids!=[0]:
                    current_vsl_ids=set(client_data.vsl_ids)
                    
                    # Get all vessel associations for this company (active and inactive)
                    all_associations = db.query(CompVslAsso).filter(
                        CompVslAsso.company_id == company.company_id
                    ).all()
                    
                    # Separate vessels into active (status='Y') and all existing vessels
                    active_vsl_ids = {assoc.vsl_id for assoc in all_associations if assoc.status == 'Y'}
                    all_vsl_ids = {assoc.vsl_id for assoc in all_associations}
                    
                    # Determine what needs to happen:
                    vessels_to_remove = active_vsl_ids - current_vsl_ids  # Currently active but not in new list → deactivate
                    vessels_to_reactivate = (current_vsl_ids & all_vsl_ids) - active_vsl_ids  # Exists but inactive → reactivate
                    vessels_to_add = current_vsl_ids - all_vsl_ids  # Doesn't exist at all → create new
                    
                    logger.info(f"Vessel ID to add: {vessels_to_add}")
                    logger.info(f"Vessel ID to reactivate: {vessels_to_reactivate}")
                    logger.info(f"Vessel ID to remove: {vessels_to_remove}")

                    # Deactivate vessels that are no longer assigned
                    if vessels_to_remove:
                        db.query(CompVslAsso).filter(
                            CompVslAsso.company_id == company.company_id,
                            CompVslAsso.vsl_id.in_(vessels_to_remove)
                        ).update({"status": "N"}, synchronize_session=False)

                    # Reactivate vessels that were previously inactive
                    if vessels_to_reactivate:
                        db.query(CompVslAsso).filter(
                            CompVslAsso.company_id == company.company_id,
                            CompVslAsso.vsl_id.in_(vessels_to_reactivate)
                        ).update({"status": "Y"}, synchronize_session=False)

                    # Create new associations for vessels never assigned before
                    for vsl_id in vessels_to_add:
                        db.add(CompVslAsso(
                            company_id=company.company_id,
                            vsl_id=vsl_id,
                            status="Y"
                        ))
                
                db.commit()
                db.refresh(company)
                return company

            else:
                
                user = db.query(User).filter(User.username == username).first()
                company_id_from_user = user.companyid

                company = db.query(MaCompany).filter(MaCompany.company_id == company_id_from_user).first()
                if not company:
                    raise HTTPException(status_code=404, detail="Company not found for the user.")

                app_owning_company_id = company.app_owning_company_id

                company_type = db.query(MaCompanyType).filter(
                    MaCompanyType.company_type_name == "Client"
                ).first()
                if not company_type:
                    raise HTTPException(status_code=404, detail="Company type 'Client' not found.")

                company_type_id = company_type.company_type_id
                

                logger.info("Creating new company")
                new_company = MaCompany(
                    company_name=client_data.company_name,
                    app_owning_company_id=app_owning_company_id,
                    company_type_id=company_type_id,
                    email=email_str,
                    phone_number=client_data.phone_number,
                    address=client_data.address,
                    status=client_data.status or "Y",
                    created_by=username
                )

                db.add(new_company)
                db.commit()
                db.refresh(new_company)

                # Add vessel associations
                for vsl_id in current_vsl_ids:
                    db.add(CompVslAsso(
                        company_id=new_company.company_id,
                        vsl_id=vsl_id,
                        status="Y"
                    ))
                db.commit()

                return new_company

        except SQLAlchemyError as e:
            db.rollback()
            print(f"Error in create_or_update_client: {str(e)}")
            logger.error(f"Database error: {str(e)}")
            raise HTTPException(status_code=400, detail="Database error occurred during client operation")
        
    @staticmethod
    def get_client_list(request_dto: ClientListRequestDTO, db: Session):
        if request_dto.page < 1 or request_dto.page_size < 1:
            raise HTTPException(status_code=400, detail="Page and page_size must be greater than 0")

        offset = (request_dto.page - 1) * request_dto.page_size

        base_query = (db.query(MaCompany).filter(MaCompany.company_type_id == 2,MaCompany.status=='Y').order_by(MaCompany.company_name.asc()))
        if request_dto.query:
            base_query = base_query.filter(MaCompany.company_name.ilike(f"%{request_dto.query.strip()}%"))

        total_count = base_query.count()

        companies = base_query.offset(offset).limit(request_dto.page_size).all()

        # Convert email strings to lists for DTO compatibility
        for company in companies:
            company.email = convert_email_to_list(company.email)

        return {
            "total_count": total_count,
            "data": companies
        }
    @staticmethod
    def get_all_clients(db: Session) -> List[MaCompany]:
        try:
            logger.info("Fetching all clients from the database.")

        # Get the company_type_id for 'Client'
            client_type_id = (
                db.query(MaCompanyType.company_type_id)
                .filter(func.lower(MaCompanyType.company_type_name)==func.lower("Client"))
                .scalar()
            )

            if not client_type_id:
                raise HTTPException(status_code=404, detail="Company type 'Client' not found.")

            clients = (
                db.query(MaCompany)
                .filter(MaCompany.company_type_id == client_type_id,MaCompany.status=='Y')
                .order_by(MaCompany.company_name.asc())
                .all()
            )

            # Convert email strings to lists for DTO compatibility
            for client in clients:
                client.email = convert_email_to_list(client.email)

            logger.info("Fetched %d clients", len(clients))
            return clients

        except Exception as e:
            logger.exception("Error fetching clients: %s", str(e))
            raise HTTPException(
                status_code=500,
                detail=f"Unexpected error occurred"
            )
        
def duplicateCompanyName(client_data, db: Session):
    duplicate = db.query(MaCompany).filter(
        func.lower(MaCompany.company_name) == client_data.company_name.lower(),MaCompany.company_type_id==2,MaCompany.status=='Y'
    )
    if client_data.company_id:
        duplicate = duplicate.filter(MaCompany.company_id != client_data.company_id,MaCompany.status=='Y')

    return duplicate.first()
