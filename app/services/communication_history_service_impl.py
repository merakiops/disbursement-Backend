import json
from sqlalchemy.orm import Session, joinedload
from app.dto.pda_dto import DisbursementPAFormRequestDTO, TxnDisbursementInitiateDTo
from app.repo.communication_history_repo import CommunicationHistroyRepository
from app.dto.communication_history_dto import TxnCommunicationHistoryBaseRequestDTO
from app.models.txn_communication_history import TxnCommunicationHistory
from app.models.txn_disbursement import TxnDisbursement
from app.models.ports import MaPort
from app.models.company import MaCompany
from app.models.country import MaCountry
from app.models.txn_pda_vessel_details import PdaVesselDetails
from app.models.txn_pa_form_otp import TxnPAFormOTP
from app.models.txn_communication_history_files import TxnCommunicationHistoryFiles
import logging
from app.core.constants import SourceType, CommunicationFlag
from datetime import datetime
from app.utils.communication_diff_handler import CommunicationDiffHandler
from app.services.communication_history_service import TxnCommunicationHistoryService
from app.dto.fda_dto import FDACreationRequestDto
logger = logging.getLogger("app_logger")

class  TxnCommunicationHistoryServiceImpl(TxnCommunicationHistoryService):
    
    def __init__(self):
        self.diff_handler = CommunicationDiffHandler()

    def fetch_communication_history_detail(self,dto:TxnCommunicationHistoryBaseRequestDTO, db: Session):
        return CommunicationHistroyRepository.fetch_communication_history_detail(dto,db)
    
    def create_disbursement_history(self, disbursement: TxnDisbursement, user: str, dto: TxnDisbursementInitiateDTo, db: Session) -> None:
        """Create disbursement communication history with detailed message"""
        
        # Fetch related data in single query
        result = db.query(
            MaPort.name.label('port_name'),
            MaCompany.company_name.label('agent_name'), 
            MaCountry.name.label('country_name'),
            PdaVesselDetails.vsl_dtls.label('vessel_dtls')
        ).select_from(TxnDisbursement).outerjoin(MaPort, disbursement.port_id == MaPort.port_id)\
         .outerjoin(MaCompany, (disbursement.portagent_id == MaCompany.company_id) & (MaCompany.company_type_id == 3))\
         .outerjoin(MaCountry, disbursement.country_id == MaCountry.country_id)\
         .outerjoin(PdaVesselDetails, disbursement.pda_vsl_id == PdaVesselDetails.pda_vsl_id).filter(TxnDisbursement.disbursement_seq == disbursement.disbursement_seq).first()
        
        port_name, agent_name, country_name, vessel_dtls = result or (None, None, None, None)
        
        country_name = country_name or None
        port_name = port_name or None
        agent_name = agent_name or None

        vessel_name = (
            vessel_dtls.get("name")
            if vessel_dtls and isinstance(vessel_dtls, dict)
            else None
        )
        # Build the middle segment dynamically
        parts = []

        if port_name:
            parts.append(port_name)

        if vessel_name:
            parts.append(vessel_name)

        middle = " - ".join(parts) if parts else ""

        # Build final message
        if middle and agent_name:
            displayMessage = f"PDA Requested for the {middle} to {agent_name}"
        elif middle:
            displayMessage = f"PDA Requested for the {middle}"
        elif agent_name:
            displayMessage = f"PDA Requested to {agent_name}"
        else:
            displayMessage = "PDA Requested"
        
        # Create communication history
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message=displayMessage,
            pda_id=disbursement.pda.pda_id,
            port_agent_resp_data = disbursement.pda.portagent_pda_data,
            meraki_resp_data = disbursement.pda.meraki_pda_data,
            created_by=user,
            created_on=datetime.now(),
            email_to=",".join(dto.get_email_to_list()) or None,
            email_cc=",".join(dto.get_email_cc_list()) or None,
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.PDA_REQUEST
        )
        
        # Use repository to save
        CommunicationHistroyRepository.create_communication_history(db, comm_history)
    
    def _insert_communication_files(self, comm_history_id: int, disbursement_seq: int, file_list: list, created_by: str, db: Session) -> None:
        """Insert files into txn_communication_history_files table"""
        logger.info(f"_insert_communication_files called with comm_history_id: {comm_history_id}, file_list: {file_list}")
        
        if file_list:
            file_records = []
            for i, file_item in enumerate(file_list):
                file_id = file_item.get('file_id') if isinstance(file_item, dict) else file_item
                logger.info(f"Processing file {i+1}: file_id={file_id}, type={type(file_item)}")
                
                file_record = TxnCommunicationHistoryFiles(
                    comm_history_id=comm_history_id,
                    disbursement_seq=disbursement_seq,
                    file_id=file_id,
                    created_by=created_by,
                    created_on=datetime.now()
                )
                file_records.append(file_record)
                logger.info(f"Added file record for file_id: {file_id}")
            
            # Use repository to save
            CommunicationHistroyRepository.create_communication_history_files(db, file_records)
            logger.info(f"Successfully inserted {len(file_list)} file records")
        else:
            logger.info("No files provided to insert")
    
    def create_pda_submission_pa_history(self, disbursement: TxnDisbursement, request_body: DisbursementPAFormRequestDTO, db: Session) -> None:
        """Create communication history for PDA form submission"""
        file_list : list = request_body.file_list if request_body and request_body.file_list else []
        
        # Get submitter email and port agent name in single query
        result = db.query(
            TxnPAFormOTP.email,
            MaCompany.company_name.label('agent_name')
        ).outerjoin(MaCompany, (disbursement.portagent_id == MaCompany.company_id) & (MaCompany.company_type_id == 3))\
         .filter(TxnPAFormOTP.disbursement_seq == disbursement.disbursement_seq).first()
        
        submitter_email, agent_name = result if result else (None, None)
        logger.info(f"Query result - Submitter email: {submitter_email}, Agent name: {agent_name}")
        
        displayMessage = f"PDA Submitted by {agent_name}" if agent_name else "PDA Submitted"
        logger.info(f"Display message: {displayMessage}")
        
        # Create communication history
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message=displayMessage,
            pda_id=disbursement.pda.pda_id if disbursement.pda else None,
            port_agent_resp_data = disbursement.pda.portagent_pda_data if disbursement.pda else None,
            meraki_resp_data = disbursement.pda.meraki_pda_data if disbursement.pda else None,
            created_by=submitter_email or "Port Agent",
            created_on=datetime.now(),
            source_type=SourceType.PORTAGENT,
            flag=CommunicationFlag.PDA_SUBMIT
        )
        
        logger.info(f"Creating communication history record via repository")
        # Use repository to save
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if file_list:
            logger.info(f"Inserting {len(file_list)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                disbursement.disbursement_seq, 
                file_list, 
                submitter_email  or "Port Agent", 
                db
            )
        else:
            logger.info("No files to insert")
        
        logger.info("create_pda_submission_history completed successfully")
    
    def create_return_to_pda_history(self, disbursementDtls: TxnDisbursement,returnMsg:str, emailTo:str, submitter:str, portagent:str, db: Session) -> None:
        """Create return to PDA communication history"""
        
        #  (Port Agent Company) to Meraki
        displayMessage = f"PDA Returned by Port Agent - {portagent}" if portagent else "PDA Returned by Port Agent."
        history_data = TxnCommunicationHistory(
            disbursement_seq=disbursementDtls.disbursement_seq,
            pda_id=disbursementDtls.pda.pda_id if disbursementDtls.pda else None,
            display_message=displayMessage,
            email_to=emailTo,
            message=returnMsg,
            created_on=datetime.now(),
            created_by=submitter or "Port Agent",
            source_type=SourceType.PORTAGENT,
            flag=CommunicationFlag.PDA_RETURN
        )
        
        CommunicationHistroyRepository.create_communication_history(db, history_data)
    
    def create_pda_save_communication_history(self, pda_dto, old_disbursement, user, db):
        """Create communication history for PDA save action"""
        #Portagent Data
        new_portagent_data = pda_dto.portagent_pda_data if pda_dto else {}
        old_portagent_data = old_disbursement.pda.portagent_pda_data if old_disbursement.pda else {}

        #Meraki Data
        new_meraki_data = pda_dto.meraki_pda_data if pda_dto else {}
        old_meraki_data = old_disbursement.pda.meraki_pda_data if old_disbursement.pda else {}

        #Vessel Data
        new_vessel_data = new_portagent_data.get("vessel", {}) if new_portagent_data else {}
        old_vessel_data = old_portagent_data.get("vessel", {}) if old_portagent_data else {}
        
        print("DEBUG: old_vessel_data =")
        print(json.dumps(old_vessel_data, indent=4))

        print("DEBUG: new_vessel_data =")
        print(json.dumps(new_vessel_data, indent=4))
        if old_disbursement.purpose_id!=pda_dto.purpose_id:
            purpose_change = True
        else:
            purpose_change = False
        # Use CommunicationDiffHandler for comprehensive comparison
        modified_data = self.diff_handler._get_modified_data(
            old_meraki_data or {}, 
            new_meraki_data or {},
            old_portagent_data or {}, 
            new_portagent_data or {},
            old_vessel_data,
            new_vessel_data,purpose_change=purpose_change
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=pda_dto.disbursement_seq,
            display_message="PDA Updated By Meraki",
            pda_id=old_disbursement.pda.pda_id,
            port_agent_resp_data=pda_dto.portagent_pda_data,
            meraki_resp_data=pda_dto.meraki_pda_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.PDA_UPDATE
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if pda_dto.file_list:
            files : list = pda_dto.file_list
            logger.info(f"Inserting {len(files)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                pda_dto.disbursement_seq, 
                files, 
                user, 
                db
            )
        else:
            logger.info("No files to insert")

    def create_pda_submit_communication_history(self, pda_dto, old_disbursement, user, db):
        """Create communication history for PDA save action"""
        #Portagent Data
        new_portagent_data = pda_dto.portagent_pda_data if pda_dto else {}
        old_portagent_data = old_disbursement.pda.portagent_pda_data if old_disbursement.pda else {}

        #Meraki Data
        new_meraki_data = pda_dto.meraki_pda_data if pda_dto else {}
        old_meraki_data = old_disbursement.pda.meraki_pda_data if old_disbursement.pda else {}

        #Vessel Data
        new_vessel_data = new_portagent_data.get("vessel", {}) if new_portagent_data else {}
        old_vessel_data = old_portagent_data.get("vessel", {}) if old_portagent_data else {}

        if old_disbursement.purpose_id!=pda_dto.purpose_id:
            purpose_change = True
        else:
            purpose_change = False
        
        # Use CommunicationDiffHandler for comprehensive comparison
        modified_data = self.diff_handler._get_modified_data(
            old_meraki_data or {}, 
            new_meraki_data or {},
            old_portagent_data or {}, 
            new_portagent_data or {},
            old_vessel_data,
            new_vessel_data,purpose_change=purpose_change
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=pda_dto.disbursement_seq,
            display_message="PDA Updated By Meraki",
            pda_id=old_disbursement.pda.pda_id,
            port_agent_resp_data=pda_dto.portagent_pda_data,
            meraki_resp_data=pda_dto.meraki_pda_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.PDA_SUBMIT
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if pda_dto.file_list:
            files : list = pda_dto.file_list
            logger.info(f"Inserting {len(files)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                pda_dto.disbursement_seq, 
                files, 
                user, 
                db
            )
        else:
            logger.info("No files to insert")
    
    def create_pda_re_request_communication_history(self, pda_dto, old_disbursement, user, db):
        """Create communication history for PDA re-request action"""
        
        #Portagent Data
        new_portagent_data = pda_dto.portagent_pda_data if pda_dto else {}
        old_portagent_data = old_disbursement.pda.portagent_pda_data if old_disbursement.pda else {}

        #Meraki Data  meraki_pda_data
        new_meraki_data = pda_dto.meraki_pda_data if pda_dto else {}
        old_meraki_data = old_disbursement.pda.meraki_pda_data if old_disbursement.pda else {}

        #Vessel Data
        new_vessel_data = new_portagent_data.get("vessel", {}) if new_portagent_data else {}
        old_vessel_data = old_portagent_data.get("vessel", {}) if old_portagent_data else {}
        
        if old_disbursement.purpose_id!=pda_dto.purpose_id:
            purpose_change = True
        else:
            purpose_change = False
        # Use CommunicationDiffHandler for comprehensive comparison
        modified_data = self.diff_handler._get_modified_data(
            old_meraki_data or {}, 
            new_meraki_data or {},
            old_portagent_data or {}, 
            new_portagent_data or {},
            old_vessel_data,
            new_vessel_data,purpose_change=purpose_change
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=pda_dto.disbursement_seq,
            display_message="PDA Re-Requested for Negotiation",
            pda_id=old_disbursement.pda.pda_id,
            port_agent_resp_data=pda_dto.portagent_pda_data,
            meraki_resp_data=pda_dto.meraki_pda_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            email_to= None,
            email_cc= None,
            message= None,
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.PDA_RE_REQUEST
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if pda_dto.file_list:
            files : list = pda_dto.file_list
            logger.info(f"Inserting {len(files)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                pda_dto.disbursement_seq, 
                files, 
                user, 
                db
            )
        else:
            logger.info("No files to insert")

    
    def create_pda_rerturn_re_request_communication_history(self, pda_dto, old_disbursement, user, db):
        """Create communication history for PDA re-request action"""
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=pda_dto.disbursement_seq,
            display_message="PDA Requested to New Port Agent after Return",
            pda_id=old_disbursement.pda.pda_id,
            port_agent_resp_data=pda_dto.portagent_pda_data,
            meraki_resp_data=pda_dto.meraki_pda_data,
            modified_data= None,
            created_by=user,
            created_on=datetime.now(),
            email_to=",".join(pda_dto.get_email_to_list()) or None,
            email_cc=",".join(pda_dto.get_email_cc_list()) or None,
            message= None,
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.PDA_RETURN_RE_REQUEST
        )
        
        CommunicationHistroyRepository.create_communication_history(db, comm_history)
    
    def create_pa_re_submit_communication_history(self, new_disbursement, old_disbursement, request_body, db):
        """Create communication history for PDA save action"""
        #Portagent Data
        new_portagent_data = new_disbursement.pda.portagent_pda_data if new_disbursement.pda else {}
        old_portagent_data = old_disbursement.pda.portagent_pda_data if old_disbursement.pda else {}

        #Meraki Data
        new_meraki_data = new_disbursement.pda.meraki_pda_data if new_disbursement.pda else {}
        old_meraki_data = old_disbursement.pda.meraki_pda_data if old_disbursement.pda else {}

        #Vessel Data
        new_vessel_data = new_portagent_data.get("vessel", {}) if new_portagent_data else {}
        old_vessel_data = old_portagent_data.get("vessel", {}) if old_portagent_data else {}
        
        print("DEBUG: old_vessel_data =")
        print(json.dumps(old_vessel_data, indent=4))

        print("DEBUG: new_vessel_data =")
        print(json.dumps(new_vessel_data, indent=4))

        result = db.query(
            TxnPAFormOTP.email,
            MaCompany.company_name.label('agent_name')
        ).outerjoin(MaCompany, (new_disbursement.portagent_id == MaCompany.company_id) & (MaCompany.company_type_id == 3))\
         .filter(TxnPAFormOTP.disbursement_seq == new_disbursement.disbursement_seq).first()
        
        submitter_email, agent_name = result if result else (None, None)

        if old_disbursement.purpose_id!=request_body.purpose.purpose_id:
            purpose_change = True
        else:
            purpose_change = False

        # Use CommunicationDiffHandler for comprehensive comparison
        modified_data = self.diff_handler._get_modified_data(
            old_meraki_data or {}, 
            new_meraki_data or {},
            old_portagent_data or {}, 
            new_portagent_data or {},
            old_vessel_data,
            new_vessel_data,purpose_change=purpose_change
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=new_disbursement.disbursement_seq,
            display_message="PDA Updated By Meraki",
            pda_id=new_disbursement.pda.pda_id,
            port_agent_resp_data=new_disbursement.pda.portagent_pda_data,
            meraki_resp_data=new_disbursement.pda.meraki_pda_data,
            modified_data=modified_data,
            created_by=submitter_email or "Port Agent",
            created_on=datetime.now(),
            source_type=SourceType.PORTAGENT,
            flag=CommunicationFlag.PDA_RE_SUBUMIT
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if request_body.file_list:
            files : list = request_body.file_list
            logger.info(f"Inserting {len(files)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                request_body.disbursement_seq, 
                files, 
                submitter_email or "Port Agent", 
                db
            )
        else:
            logger.info("No files to insert")
    
    def _get_modified_data(self, old_meraki_data, new_meraki_data, old_portagent_data, new_portagent_data):
        """Get modified data comparison"""
        vessel_fields = ["grt", "nrt", "loa", "beam", "dwt"]
        service_fields = ["pa_remark", "negotiate", "total", "client_comment", "optional"]
        
        modifications = {
            "modified": {
                "meraki": {
                    "services": self._compare_meraki_services(
                        old_meraki_data.get("services", {}),
                        new_meraki_data.get("services", {}),
                        service_fields
                    )
                },
                "port_agent": {
                    "vessel": self._compare_vessel_details(
                        old_portagent_data.get("vessel", {}),
                        new_portagent_data.get("vessel", {}),
                        vessel_fields
                    ),
                    "services": self._compare_portagent_services(
                        old_portagent_data.get("services", {}),
                        new_portagent_data.get("services", {}),
                        service_fields
                    )
                }
            }
        }
        
        return modifications
    
    def _compare_vessel_details(self, old_vessel, new_vessel):
        """Compare ALL vessel fields including additional_properties"""

        changes = []

        # Merge normal fields + additional_properties
        def flatten(v):
            base = {k: v.get(k) for k in v if k != "additional_properties"}
            extra = v.get("additional_properties", {})
            return {**base, **extra}

        old_flat = flatten(old_vessel)
        new_flat = flatten(new_vessel)

        all_fields = set(old_flat.keys()) | set(new_flat.keys())

        for field in all_fields:
            old_value = old_flat.get(field)
            new_value = new_flat.get(field)

            if old_value != new_value:
                changes.append({
                    "field": field,
                    "old_value": old_value,
                    "new_value": new_value,
                    "description": f"{field} value updated from {old_value} to {new_value}"
                })

        return {"properties": changes}

    
    def _compare_meraki_services(self, old_services, new_services, compare_fields):
        """Compare meraki services"""
        service_changes = []
        
        old_service_map = {svc["service"]: svc for svc in old_services.get("items", [])}
        
        for new_service in new_services.get("items", []):
            service_name = new_service["service"]
            old_service = old_service_map.get(service_name, {})
            
            subservice_movements = []
            
            old_subs = {sub["name"]: sub for sub in old_service.get("subService", [])}
            
            for new_sub in new_service.get("subService", []):
                sub_name = new_sub["name"]
                old_sub = old_subs.get(sub_name, {})
                
                for field in compare_fields:
                    old_val = old_sub.get(field)
                    new_val = new_sub.get(field)
                    
                    if old_val != new_val:
                        subservice_movements.append({
                            "subservice_name": sub_name,
                            "field": field,
                            "old_value": old_val,
                            "new_value": new_val,
                            "description": f"{sub_name} {field} updated"
                        })
            
            if subservice_movements:
                service_changes.append({
                    "service_name": service_name,
                    "subservice_movements": subservice_movements,
                    "description": f"Subservice movements updated"
                })
        
        return service_changes
    
    def _compare_portagent_services(self, old_services, new_services, compare_fields):
        """Compare port agent services"""
        service_changes = []
        
        old_service_map = {svc["service"]: svc for svc in old_services.get("items", [])}
        
        for new_service in new_services.get("items", []):
            service_name = new_service["service"]
            old_service = old_service_map.get(service_name, {})
            
            changes = {}
            
            for field in compare_fields:
                old_val = old_service.get(field)
                new_val = new_service.get(field)
                
                if old_val != new_val:
                    changes[field] = {
                        "old_value": old_val,
                        "new_value": new_val,
                        "description": f"{field} value updated from '{old_val}' to '{new_val}'"
                    }
            
            if changes:
                service_changes.append({
                    "service_name": service_name,
                    "changes": changes
                })
        
        return service_changes
    
    def create_client_approval_request_communication_history(self, disbursement, request_dto, user, db):
        """Create communication history for client approval request"""
        if disbursement.fda:
            portagent_date = disbursement.fda.portagent_fda_data if disbursement.fda else {}
            port_agent_resp_data=disbursement.fda.portagent_fda_data if disbursement.fda else None
            display_message = "Client Approval Requested For FDA"
        elif disbursement.pda:
            portagent_date = disbursement.pda.portagent_pda_data if disbursement.pda else {}
            port_agent_resp_data=disbursement.pda.portagent_pda_data if disbursement.pda else None
            display_message = "Client Approval Requested For PDA"
        else:
            portagent_date = {}   
            port_agent_resp_data={}   
            display_message="Client Approval Requested"      

        # Use the client approval summary function to extract relevant data
        summary_data = self.diff_handler._get_client_approval_summary(portagent_date)
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message=display_message,
            pda_id=disbursement.pda.pda_id if disbursement.pda else None,
            fda_id=disbursement.fda.fda_id if disbursement.fda else None,
            modified_data=summary_data,
            port_agent_resp_data= port_agent_resp_data,
            created_by=user,
            created_on=datetime.now(),
            email_to=",".join(request_dto.get_email_to_list()) if request_dto.email_to else None,
            email_cc=",".join(request_dto.get_email_cc_list()) if request_dto.email_cc else None,
            message=request_dto.meraki_cmt_to_client,
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.CLIENT_APPROVAL_REQUEST
        )
        
        CommunicationHistroyRepository.create_communication_history(db, comm_history)
    
    def create_pda_client_form_submit_communication_history(self, old_disbursement, new_disbursement, user, db):
        """Create communication history for PDA client form submission"""

        old_portagent_data = old_disbursement.pda.portagent_pda_data if old_disbursement.pda else {}
        new_portagent_data = new_disbursement.pda.portagent_pda_data if new_disbursement.pda else {}
        display_message = "PDA Client Form Submitted"
        flag=CommunicationFlag.PDA_CLIENT_SUBMIT

        # Use CommunicationDiffHandler to compare old vs new data
        modified_data = self.diff_handler._get_client_form_submit_summary(
            old_portagent_data or {}, 
            new_portagent_data or {}
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=new_portagent_data.get("disbursement_seq") if new_portagent_data else None,
            display_message=display_message,
            pda_id=new_disbursement.pda.pda_id if new_disbursement.pda else None,
            port_agent_resp_data=new_portagent_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.CLIENT,
            flag=flag
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")


    def create_fda_communication_history(self, disbursement, user: str, dto: FDACreationRequestDto, db: Session,fda_type:str="fda_with_pda") -> None:
        """Create disbursement communication history with detailed message"""
        if fda_type=="fda_with_pda":
            display_message='FDA creation with pda'
            pda_id=disbursement.pda.pda_id if disbursement.pda else None

            #Meraki Data
            new_meraki_data = disbursement.fda.meraki_pda_data if disbursement.fda else {}
            old_meraki_data = {}

            # Extract vessel data - dto.vessel is an object, pda has vessel in items array
            new_vessel_data = dto.vessel.model_dump() if dto.vessel else {}
            
            old_vessel_data = disbursement.pda.portagent_pda_data.get("vessel", {}) if disbursement.pda else {}
            
            print("DEBUG: old_vessel_data =", old_vessel_data)
            print("DEBUG: new_vessel_data =", new_vessel_data)
            if disbursement.purpose_id!=dto.purpose.purpose_id:
                purpose_change = True
            else:
                purpose_change = False
            modified_data = self.diff_handler._get_modified_data(
                old_meraki_data or {}, 
                new_meraki_data or {},
                {}, #portagent data
                {}, #portagent data
                old_vessel_data,
                new_vessel_data, disbursement, dto, is_fda_creation=True, purpose_change=purpose_change
            )
        else:
            display_message='FDA creation without pda'
            pda_id=None
            modified_data=None
        
        # Create communication history
        comm_history = TxnCommunicationHistory(
            disbursement_seq=disbursement.disbursement_seq,
            display_message=display_message,
            pda_id=pda_id,
            modified_data=modified_data,
            fda_id=disbursement.fda.fda_id,
            port_agent_resp_data = disbursement.fda.portagent_fda_data,
            meraki_resp_data = disbursement.fda.meraki_pda_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.MERAKI,
            flag=CommunicationFlag.FDA_CREATION
        )
        
        # Use repository to save
        CommunicationHistroyRepository.create_communication_history(db, comm_history)

    def create_fda_save_and_submit_communication_history(self, dto, old_disbursement, user, db):
        """Create communication history for PDA save action"""
        #Portagent Data
        new_portagent_data = dto.portagent_fda_data if dto else {}
        old_portagent_data = old_disbursement.fda.portagent_fda_data if old_disbursement.fda else {}

        #Meraki Data
        new_meraki_data = dto.meraki_pda_data if dto else {}
        old_meraki_data = old_disbursement.fda.meraki_pda_data if old_disbursement.fda else {}

        #Vessel Data
        new_vessel_data = new_portagent_data.get("vessel", {}) if new_portagent_data else {}
        old_vessel_data = old_portagent_data.get("vessel", {}) if old_portagent_data else {}
        
        print("DEBUG: old_vessel_data =")
        print(json.dumps(old_vessel_data, indent=4))

        print("DEBUG: new_vessel_data =")
        print(json.dumps(new_vessel_data, indent=4))
        # Use CommunicationDiffHandler for comprehensive comparison
        if old_disbursement.purpose_id!=dto.purpose_id:
            purpose_change = True
        else:
            purpose_change = False
        modified_data = self.diff_handler._get_modified_data(
            old_meraki_data or {}, 
            new_meraki_data or {},
            old_portagent_data or {}, 
            new_portagent_data or {},
            old_vessel_data,
            new_vessel_data,purpose_change=purpose_change
        )
        
        if dto.fda_save=='Y':
            flag=CommunicationFlag.FDA_UPDATE
            display_message="FDA Updated By Meraki"
        if dto.fda_submit=='Y':
            flag=CommunicationFlag.FDA_SUBMIT
            display_message="FDA Submitted By Meraki"

        comm_history = TxnCommunicationHistory(
            disbursement_seq=dto.disbursement_seq,
            display_message=display_message,
            pda_id=old_disbursement.pda.pda_id if old_disbursement.pda else None,
            fda_id=old_disbursement.fda.fda_id,
            port_agent_resp_data=dto.portagent_fda_data,
            meraki_resp_data=dto.meraki_pda_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.MERAKI,
            flag=flag
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
        
        # Insert files using reusable method
        if dto.file_list:
            files : list = dto.file_list
            logger.info(f"Inserting {len(files)} files")
            self._insert_communication_files(
                saved_history.comm_history_id, 
                dto.disbursement_seq, 
                files, 
                user, 
                db
            )
        else:
            logger.info("No files to insert")

    def create_fda_client_form_submit_communication_history(self, old_disbursement, new_disbursement, user, db):
        """Create communication history for PDA client form submission"""
        old_portagent_data = old_disbursement.fda.portagent_fda_data if old_disbursement.fda else {}
        new_portagent_data = new_disbursement.fda.portagent_fda_data if new_disbursement.fda else {}
        flag=CommunicationFlag.FDA_CLIENT_SUBMIT
        display_message = "FDA Client Form Submitted"
        

        # Use CommunicationDiffHandler to compare old vs new data
        modified_data = self.diff_handler._get_client_form_submit_summary(
            old_portagent_data or {}, 
            new_portagent_data or {}
        )
        
        comm_history = TxnCommunicationHistory(
            disbursement_seq=new_portagent_data.get("disbursement_seq") if new_portagent_data else None,
            display_message=display_message,
            fda_id=new_disbursement.fda.fda_id if new_disbursement.fda else None,
            port_agent_resp_data=new_portagent_data,
            modified_data=modified_data,
            created_by=user,
            created_on=datetime.now(),
            source_type=SourceType.CLIENT,
            flag=flag
        )
        
        saved_history = CommunicationHistroyRepository.create_communication_history(db, comm_history)
        logger.info(f"Communication history created with ID: {saved_history.comm_history_id}")
