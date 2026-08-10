from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status
from app.models.vessels import MaVessel,CompVslAsso
from app.dto.vessel_create_or_update_dto import VesselCreateUpdateDTO, VesselListRequestDTO
import logging
from typing import List,Optional
from app.models.vessel_prop_calc import MaVslPropCalc
from app.dto.vessel_response_dto import GetVesselByImoNumberRequestDTO
from app.core.generic_update_function import generic_update
from sqlalchemy.inspection import inspect
import re
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

logger = logging.getLogger("app_logger")

class VesselRepository:
    """
    Repository for creating or updating a vessel.
    - If a vessel with the same IMO exists raise an error.
    - Update if vessel_id exists, else create new.
    """

    @staticmethod
    def create_or_update_vessel(vessel_data: VesselCreateUpdateDTO, username: str, db: Session) -> MaVessel:
        try:
                 
            existing_imo = None
            if vessel_data.imo_number:
                existing_imo = db.query(MaVessel).filter(MaVessel.imo_number == vessel_data.imo_number.strip(),MaVessel.status=='Y').first()
            
            if vessel_data.vessel_id:
                logger.info(f"Updating vessel with ID: {vessel_data.vessel_id}") 
                vessel = db.query(MaVessel).filter(MaVessel.vessel_id == vessel_data.vessel_id).first()

                if not vessel:
                    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Vessel not found with the given ID.")

                # Duplicate IMO number check for other records
                if vessel_data.imo_number and existing_imo and existing_imo.vessel_id != vessel_data.vessel_id:
                    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Another vessel with this IMO number already exists.")
                # Duplicate name check for other records
                if validate_email_string(vessel_data.email)==True:
                    raise HTTPException(status_code=500, detail="Invalid email address")
                    
                update_data = {
                "name": vessel_data.name or vessel.name,
                "imo_number": vessel_data.imo_number or vessel.imo_number,
                "grt": vessel_data.grt or vessel.grt,
                "rgrt": vessel_data.rgrt or vessel.rgrt,
                "nrt": vessel_data.nrt or vessel.nrt,
                "loa": vessel_data.loa or vessel.loa,
                "beam": vessel_data.beam or vessel.beam,
                "depth": vessel_data.depth or vessel.depth,
                "dwt": vessel_data.dwt or vessel.dwt,
                "type": vessel_data.type or vessel.type,
                "email": vessel_data.email if vessel_data.email is not None else vessel.email,
                "status": vessel_data.status or vessel.status,
                "display_flag": vessel_data.display_flag or vessel.display_flag,
                "is_manual": vessel_data.is_manual or vessel.is_manual
            } 

                fields = ["grt","name", "rgrt", "nrt", "loa", "beam", "depth", "dwt", "type"]

                is_col_changed = True
                changed_fields = []

                for field in fields:
                    db_val = getattr(vessel, field)
                    incoming_val = update_data.get(field)

                    # Compare values 
                    if str(db_val).strip() != str(incoming_val).strip():
                        changed_fields.append((field, db_val, incoming_val))

                is_col_changed= bool(changed_fields)
                
                # Update fields
                if is_col_changed:
                    fun_dtl=generic_update(
                        db=db,
                        model=MaVessel,
                        instance_id=vessel_data.vessel_id,
                        update_data=update_data,
                        username=username,
                        unique_check_columns=fields
                    )
                    old_vessel_id = vessel_data.vessel_id
                    new_vessel_id = fun_dtl.vessel_id
                
                    # Query associations with old vessel
                    old_associations = db.query(CompVslAsso).filter(
                        CompVslAsso.vsl_id == old_vessel_id
                    ).all()

                    for assoc in old_associations:
                        # Check if association already exists (prevent duplicates)
                        existing = db.query(CompVslAsso).filter(
                            CompVslAsso.company_id == assoc.company_id,
                            CompVslAsso.vsl_id == new_vessel_id
                        ).first()

                        if not existing:
                            new_association = CompVslAsso(
                                company_id=assoc.company_id,
                                vsl_id=new_vessel_id,
                                status=assoc.status  # preserve original status
                            )
                            db.add(new_association)
                
                    db.commit() 
                    return fun_dtl
                else:
                    vessel.email = update_data["email"]
                    vessel.status = update_data["status"]
                    vessel.display_flag = update_data["display_flag"]
                    vessel.is_manual = update_data["is_manual"]
                    vessel.updated_by= username
                    db.commit()
                    db.refresh(vessel)
                    return vessel 

            else:
                logger.info("Creating new vessel")
                if vessel_data.imo_number and existing_imo:
                    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Vessel with this IMO number already exists.")

                new_vessel = MaVessel(
                    imo_number=vessel_data.imo_number.strip() if vessel_data.imo_number else None,
                    name=vessel_data.name,
                    type=vessel_data.type,
                    grt=vessel_data.grt,
                    rgrt=vessel_data.rgrt,
                    nrt=vessel_data.nrt,
                    loa=vessel_data.loa,
                    beam=vessel_data.beam,
                    depth=vessel_data.depth,
                    dwt=vessel_data.dwt,
                    email=vessel_data.email,
                    status=vessel_data.status or "Y",
                    display_flag=vessel_data.display_flag,
                    is_manual=vessel_data.is_manual,
                    created_by=username
                )

                db.add(new_vessel)
                db.commit()
                db.refresh(new_vessel)
                return new_vessel
       
        except HTTPException:
            raise
        except IntegrityError:
            db.rollback()
            logger.error("Database integrity error occurred while creating/updating vessel.")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Database integrity error occurred during vessel operation.")
        except Exception as e:
            db.rollback()
            logger.error("Unexpected error in vessel repository: %s", str(e))
            raise HTTPException(status_code=500, detail=f"Unexpected error in vessel repository: %s")
        
    @staticmethod
    def get_all_vessels_by_status(company_id :int,status:str, db: Session) :
        print(f"vessel repor company_id is :{company_id} and status {status}")
        vessels = (
            db.query(MaVessel)
            .join(CompVslAsso, CompVslAsso.vsl_id == MaVessel.vessel_id)
            .filter(
                CompVslAsso.company_id == company_id,
                MaVessel.status == status
            )
            .all()
        )

        return vessels
    
    @staticmethod
    def get_vessel_list(company_id: int,request_dto:VesselListRequestDTO,db: Session ):
        """
        Fetch paginated list of vessels for given company_id.
        Supports filtering with query string across multiple fields.
        Returns a dict: { 'total_count': int, 'data': list }
        """        

        if request_dto.page < 1 or request_dto.page_size < 1:
            raise ValueError("Page number and page size must be greater than 0")
        offset = (request_dto.page - 1) * request_dto.page_size
        print(f"Fetching vessels for company_id={company_id}, query='{request_dto.query}', offset={offset}, limit={request_dto.page_size}")

        # Base query with mandatory filters
        base_query = ((db.query(MaVessel).filter(MaVessel.status=='Y').order_by(MaVessel.name.asc()))
            # .join(CompVslAsso, CompVslAsso.vsl_id == MaVessel.vessel_id)
            # .filter(
            #     CompVslAsso.company_id == company_id,
            #     MaVessel.status == 'Y'
            # )
        )

        # Dynamic search on all useful fields
        if request_dto.query:
            search_pattern = f"%{request_dto.query.strip()}%"
            base_query = base_query.filter(
                (MaVessel.name.ilike(search_pattern)) |
                (MaVessel.imo_number.ilike(search_pattern)) |
                (MaVessel.type.ilike(search_pattern)) |
                (MaVessel.email.ilike(search_pattern)) 
            
            )

        # Get total count first
        total_count = base_query.count()

        # Apply pagination
        vessels = base_query.offset(offset).limit(request_dto.page_size).all()

        # Return as dictionary
        return {
            "total_count": total_count,
            "data": vessels
        }
    
    @staticmethod
    def get_vessels_by_assignment_status_for_company(company_id: Optional[int], db: Session):
        """
        Fetch vessels based on assignment status:
        - If company_id is provided: return both assigned and unassigned vessels
        - If company_id is None: return only unassigned vessels
        """
        # Get all assigned vessel IDs (used in both cases)
        subquery = (db.query(CompVslAsso.vsl_id).filter(CompVslAsso.status == 'Y').distinct().subquery())#fetch the vessel_ids which are assigned

        if company_id:

            assigned_vessels = (
                db.query(MaVessel)
                .join(CompVslAsso, CompVslAsso.vsl_id == MaVessel.vessel_id)
                .filter(
                    CompVslAsso.company_id == company_id,
                    CompVslAsso.status == 'Y',
                    MaVessel.status == 'Y'
                ).order_by(MaVessel.name.asc())
                .all()
            )
            

        # Unassigned vessels
            unassigned_vessels = (
                db.query(MaVessel)
                .filter(~MaVessel.vessel_id.in_(subquery),
                        MaVessel.status == 'Y'
                ).order_by(MaVessel.name.asc())
                .all()
            )

            return {
                "assigned_vessels": assigned_vessels,
                "unassigned_vessels": unassigned_vessels
            }

        else:
        # Only unassigned vessels
            unassigned_vessels = (
                db.query(MaVessel)
                .filter(~MaVessel.vessel_id.in_(subquery),
                        MaVessel.status == 'Y'
                ).order_by(MaVessel.name.asc())
                .all()
            )

            return {
            "unassigned_vessels": unassigned_vessels
            }
    @staticmethod
    def read_all_vsl_prop_calc(db: Session):
        return db.query(MaVslPropCalc).all()
    
    @staticmethod
    def get_vessels_by_imo(request:GetVesselByImoNumberRequestDTO, db: Session):  
        result =  (
        db.query(MaVessel)
        .join(CompVslAsso, MaVessel.vessel_id == CompVslAsso.vsl_id)
        .filter(
            MaVessel.imo_number == request.imo_number,
            MaVessel.status =='Y',
            CompVslAsso.company_id == request.client_id
        )
        .first()
            )

        return result
    
    @staticmethod
    def get_vessel_info_by_id(vsl_id:int,db:Session):
        vsl_info = db.query(MaVessel).filter(MaVessel.vessel_id == vsl_id).first()
        return vsl_info

    @staticmethod
    def get_vessel_with_client_id(db: Session):
        result = (db.query(
            CompVslAsso.company_id,
            MaVessel.name)
        .join(MaVessel, CompVslAsso.vsl_id == MaVessel.vessel_id)
        .filter(
            CompVslAsso.status == 'Y',
            MaVessel.status == 'Y'
        )
        .distinct()
        .all())
        return result

    
    
def validate_email_string(v):
        if v is None or v == "":
            return None

        if isinstance(v, str):
            if not EMAIL_REGEX.match(v):
                True
            return False

        
    