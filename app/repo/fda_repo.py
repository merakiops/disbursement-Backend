from sqlalchemy import text,or_
from sqlalchemy.orm import Session,joinedload
from app.dto.fda_dto import FDACreationRequestDto,FDACreationWithPDARequestDto,TxnFdaEditDto,RecalculationRequestDTO,TxnClientApprovalRequestInitiateDTo,DisbursementClientFormRequestDTO
from app.repo.tariff_repo import TariffRepo
from fastapi import HTTPException
from app.repo.status_repo import StatusRepository
from app.core.build_json_fda import build_disbursement_fda_json,build_pa_disbursement_json,enrich_vessel_info,extract_vessel_from_port_agent
from app.models.txn_disbursement import TxnDisbursement
from app.repo.vessel_repo import VesselRepository
from app.repo.pda_repo import PDARepository
import copy
from app.tariff_rule_calculation.all_calculation import calculate_subservice, calculate_service_total, calculate_grand_total,process_services_calculation
from sqlalchemy.orm.attributes import flag_modified
from app.models.txn_fda import TxnFDA
from sqlalchemy.sql import func
from app.models.txn_pda_vessel_details import PdaVesselDetails
from datetime import datetime,timezone
from app.models.txn_pda import PDAModel
from sqlalchemy.exc import SQLAlchemyError
from app.models.vessels import MaVessel
from app.models.user import User
from app.repo.file_upload import FileUploadRepository
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")
class FDARepository:

    @staticmethod
    def _get_next_disbursement_id(db: Session) -> str:
        """Generate next disbursement ID"""
        try:
            result = db.execute(text(f"SELECT last_value FROM {SCHEMA_NAME}.txn_disbursement_disbursement_seq_seq"))
            curr_val = result.scalar()
            if curr_val is None or curr_val == 0 or curr_val == 1:
                # If the value is None or 0, treat it as the first disbursement (start at 1)
                next_val = 1
            else:
                # Otherwise, increment the current value
                next_val = curr_val + 1

            return f"MDA{next_val}"
        except SQLAlchemyError as e:
            raise HTTPException(
                status_code=500,
                detail="Failed to generate disbursement ID"
            )
    
    @staticmethod
    def fda_creation_without_pda(user: str, dto: FDACreationRequestDto, db: Session):
        PDARepository._check_duplicate_disbursement(dto, db, check_type='FDA')
        
        disbursement_id = FDARepository._get_next_disbursement_id(db)
        tariff_rule = dto.port_tariff_rule
        
        if tariff_rule is None:
            tariff_rule=TariffRepo.get_tariff_rule_by_port_and_country(dto.port_id,dto.country_id,db)
            if tariff_rule is None:
                raise HTTPException(status_code=400,
                                detail=f"No tariff rule found for port_id={dto.port_id} and country_id={dto.country_id}")
            else:
                tariff_rule=tariff_rule.rules
        status = StatusRepository.get_status_details_by_name('UNDER-PROCESS', db)

       
        vessel_data = dto.vessel.model_dump()
        vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}
        

        try:
            ma_vsl_id_value = int(dto.vessel.vsl_id)
        except (ValueError, TypeError):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail=f"Invalid vessel ID: {dto.vessel.vsl_id}")

       
        meraki_pda_data = build_disbursement_fda_json(
            disbursement_id, dto.vessel_id, dto.client_id, dto.portagent_id,
            dto.port_id, dto.country_id, dto.purpose.purpose_id,
            dto.cargo.cargo_id, tariff_rule, dto.vessel_stay,dto.eta,dto.etd,dto.voyage,dto.fda_custom_calculation,dto.fda_currency_from,dto.fda_currency_to,dto.roe,db
        )
    

        portagent_fda_data = build_pa_disbursement_json(disbursement_id, dto, tariff_rule, db)
                

        fda = TxnFDA(
            created_by=user,
            fda_roe=dto.roe,
            fda_currency_to=dto.fda_currency_to,
            fda_currency_from=dto.fda_currency_from,
            fda_custom_calculation=dto.fda_custom_calculation,
            status=status.status_id,
            created_on=datetime.now(timezone.utc),
            meraki_pda_data=meraki_pda_data,
            portagent_fda_data=portagent_fda_data,
            fda_eta=dto.eta,
            fda_etd=dto.etd,
            fda_vessel_stay=dto.vessel_stay,
            invoice_ref_no=dto.invoice_ref_no
        )

        new_vsl = PdaVesselDetails(
            ma_vsl_id=ma_vsl_id_value,
            fda_vsl_dtls=vessel_data
        )

        new_disbursement = TxnDisbursement(
            disbursement_id=disbursement_id,
            comp_id=dto.comp_id,
            client_id=dto.client_id,
            portagent_id=dto.portagent_id,
            country_id=dto.country_id,
            vsl_id=dto.vessel_id,
            pda_vsl_id=None, 
            voyage=dto.voyage,
            port_id=dto.port_id,
            purpose_id=dto.purpose.purpose_id,
            cargo_id=dto.cargo.cargo_id,
            created_by=user,
            createdon=datetime.now(timezone.utc),
            fda=fda,
            port_tariff_rule=tariff_rule,
            invoice_number =dto.invoice_ref_no,
            roe_agent=dto.roe
        )

       
        vessel_dto = VesselRepository.get_vessel_info_by_id(dto.vessel_id, db)
        vessel_info = enrich_vessel_info(vessel_dto, portagent_fda_data)


        try:
            meraki_pda_data["services"] = process_services_calculation(services_data=meraki_pda_data["services"],vessel_info=vessel_info,db=db,disbursement_type="FDA",dto=dto)
            totals = calculate_grand_total(meraki_pda_data["services"]["items"])
            # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
            meraki_pda_data["services"]["grand_total"] = totals["grand_total"]


        except SQLAlchemyError as e:
            db.rollback()
            print(" Database error:", e)
            raise
        except Exception as e:
            db.rollback()
            print("Unexpected error:", e)
            raise

        # Step 5: Save only if requested
        if dto.fda_submit == "Y":
            meraki_pda_data["services"] = process_services_calculation(
            services_data=tariff_rule,vessel_info=vessel_info,
            db=db,
            disbursement_type="FDA",
            dto=dto
            )
            totals = calculate_grand_total(meraki_pda_data["services"]["items"])
            meraki_pda_data["services"]["grand_total"] = totals["grand_total"]
            

            
            try:
                db.add(new_vsl)
                db.flush()
                new_disbursement.pda_vsl_id = new_vsl.pda_vsl_id

                db.add(new_disbursement)
                db.flush()    
                
                fda.meraki_pda_data = meraki_pda_data
                flag_modified(fda, "meraki_pda_data")

                db.commit()
                db.refresh(new_disbursement)

                return {
                    "message": "FDA created successfully",
                    "disbursement_seq": new_disbursement.disbursement_seq
                }

            except Exception as e:
                db.rollback()
                raise HTTPException(500, str(e))
        else:
            
            new_disbursement.pda_vsl_id = 10 
            fda.meraki_pda_data = meraki_pda_data
            new_disbursement.fda = fda
            return {"meraki_pda_data": fda.meraki_pda_data,
                    "portagent_fda_data": fda.portagent_fda_data,
                    "port_tariff_rule": dto.port_tariff_rule
                    }
    
    @staticmethod    
    def get_disbursement_objects_for_completed_pda(db: Session):
        status = StatusRepository.get_status_details_by_name('COMPLETED', db)
        
        active_fda_exists = (
            db.query(TxnFDA.disbursement_seq)
            .filter(
                TxnFDA.disbursement_seq == TxnDisbursement.disbursement_seq,
                TxnFDA.state != 'D'
            )
            .exists()
        )

        results = (
            db.query(
                TxnDisbursement.disbursement_id,
                TxnDisbursement.created_by,
                TxnDisbursement.disbursement_seq
            )
            .join(
                PDAModel,
                TxnDisbursement.disbursement_seq == PDAModel.disbursement_seq
            )
            .filter(
                PDAModel.status == status.status_id,

                or_(
                    func.upper(func.trim(PDAModel.state)) != 'D',
                    PDAModel.state == None
                ),

                ~active_fda_exists
            )
            .distinct()
            .all()
        )

        return [
            {"disbursement_id": i.disbursement_id, "created_by": i.created_by, "disbursement_seq":i.disbursement_seq}
            for i in results
        ]

    @staticmethod  
    def get_port_agent_data_by_disbursement_seq(disbursement_seq,db: Session):
        result= PDARepository.get_disbursement_detail_by_seq(disbursement_seq, db)
        return result
        
    
    @staticmethod
    def fda_creation_with_pda(user: str, dto: FDACreationWithPDARequestDto, db: Session):
        
        # Check for existing active FDA only
        existing_fda = db.query(TxnFDA).filter(
            TxnFDA.disbursement_seq == dto.disbursement_seq,
            TxnFDA.state != 'D'
        ).first()
        
        # Block if active FDA exists
        if existing_fda:
            raise HTTPException(status_code=400, detail="FDA already exists for this disbursement")
        
        disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(dto.disbursement_seq, db)
        if disbursement_dtl.port_id == dto.port_id and disbursement_dtl.country_id == dto.country_id and disbursement_dtl.vsl_id == dto.vessel_id:
            
            status = StatusRepository.get_status_details_by_name('UNDER-PROCESS', db)
            vessel_data = dto.vessel.model_dump()
            vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}
            tariff_rule = dto.port_tariff_rule
        
            if tariff_rule is None:
                tariff_rule=TariffRepo.get_tariff_rule_by_port_and_country(dto.port_id,dto.country_id,db)
                if tariff_rule is None:
                    raise HTTPException(status_code=400,
                                    detail=f"No tariff rule found for port_id={dto.port_id} and country_id={dto.country_id}")
                else:
                    tariff_rule=tariff_rule.rules

        
            meraki_pda_data = build_disbursement_fda_json(
                disbursement_dtl.disbursement_id, disbursement_dtl.vsl_id, disbursement_dtl.client_id, disbursement_dtl.portagent_id,
                disbursement_dtl.port_id, disbursement_dtl.country_id, disbursement_dtl.purpose_id,
                disbursement_dtl.cargo_id,tariff_rule, disbursement_dtl.vessel_stay,dto.eta,dto.etd,disbursement_dtl.voyage,dto.fda_custom_calculation,dto.fda_currency_from,dto.fda_currency_to,dto.roe,db
            )
    
            portagent_fda_data = build_pa_disbursement_json(disbursement_dtl.disbursement_id, dto,tariff_rule, db)
    
            fda = TxnFDA(
                disbursement_seq=disbursement_dtl.disbursement_seq,
                created_by=user,
                fda_roe=dto.roe,
                fda_currency_to=dto.fda_currency_to,
                fda_currency_from=dto.fda_currency_from,
                fda_custom_calculation=dto.fda_custom_calculation,
                status=status.status_id,
                created_on=datetime.now(timezone.utc),
                meraki_pda_data=meraki_pda_data,
                portagent_fda_data=portagent_fda_data,
                fda_eta=dto.eta,
                fda_etd=dto.etd,
                fda_vessel_stay=dto.vessel_stay,
                invoice_ref_no=dto.invoice_ref_no,
                converted_curr_from = disbursement_dtl.pda.converted_curr_from,
                converted_curr_to = disbursement_dtl.pda.converted_curr_to,
                conversion_fda_rate = disbursement_dtl.pda.conversion_pda_rate,
                pmt_curr_from = disbursement_dtl.pda.pmt_curr_from,
                pmt_curr_to=disbursement_dtl.pda.pmt_curr_to

            )
            if disbursement_dtl.pda_vsl_id:
                pda_vsl = db.query(PdaVesselDetails).filter(
                        PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id
                    ).first()
                if pda_vsl:
                    pda_vsl.fda_vsl_dtls = vessel_data
                    # Don't commit here, will commit at the end
            
            vessel_dto = VesselRepository.get_vessel_info_by_id(dto.vessel_id, db)
            vessel_info = enrich_vessel_info(vessel_dto, portagent_fda_data)

            try:
                meraki_pda_data["services"] = process_services_calculation(services_data=meraki_pda_data["services"],vessel_info=vessel_info,db=db,disbursement_seq=disbursement_dtl.disbursement_seq,disbursement_type="FDA",dto=dto)

                totals = calculate_grand_total(meraki_pda_data["services"]["items"])
                # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
                meraki_pda_data["services"]["grand_total"] = totals["grand_total"]


            except SQLAlchemyError as e:
                db.rollback()
                print(" Database error:", e)
                raise
            except Exception as e:
                db.rollback()
                print("Unexpected error:", e)
                raise
        
    
            try:
                db.add(fda)
                db.flush()
                flag_modified(fda, "meraki_pda_data")
                disbursement_dtl.port_tariff_rule=dto.port_tariff_rule
                disbursement_dtl.roe_agent=dto.roe
                disbursement_dtl.pda.pda_remittance=0 if disbursement_dtl.pda.state=='N' else disbursement_dtl.pda.pda_remittance
                db.commit()
                db.refresh(fda)

                return {"message": "FDA created successfully",
                        "disbursement_seq": disbursement_dtl.disbursement_seq,
                        "meraki_pda_data": fda.meraki_pda_data,
                        "portagent_fda_data": fda.portagent_fda_data,
                        "port_tariff_rule": disbursement_dtl.port_tariff_rule
                        }
            except Exception as e:
                    db.rollback()
                    import traceback
                    traceback.print_exc()
                    raise HTTPException(status_code=500, detail=f"Failed to save disbursement: {str(e)}")   
        else:
            raise HTTPException(status_code=400,
                                detail=f"Port ID or Country ID does not match with the original PDA record.")
    
    @staticmethod
    def update_fda_details(fda_dto: TxnFdaEditDto,user:str,db:Session):
        disbursement_dtl = PDARepository.get_disbursement_by_disbursment_seq(fda_dto.disbursement_seq, db) 
        print(f"fda_save={fda_dto.fda_save}, fda_submit={fda_dto.fda_submit}")
        if disbursement_dtl.fda.state=='N' or disbursement_dtl.fda.state=='D':
            raise HTTPException(status_code=400, detail="Cannot update the inactive or deleted record")
        
        try:
               
            if disbursement_dtl.pda_vsl_id:
                pda_vsl = db.query(PdaVesselDetails).filter(
                    PdaVesselDetails.pda_vsl_id == disbursement_dtl.pda_vsl_id
                ).first()

                if not pda_vsl:
                    raise HTTPException(
                        status_code=400,
                        detail=f"Vessel with pda_vsl_id {disbursement_dtl.pda_vsl_id} not found."
                    )

                pda_vsl.fda_vsl_dtls =  fda_dto.portagent_fda_data.get("vessel", {})
                pda_vsl.ma_vsl_id = fda_dto.portagent_fda_data.get("vessel", {}).get("vsl_id")
                db.commit()
        except Exception:
            db.rollback()
            raise

        if disbursement_dtl.port_id!=fda_dto.port_id:
            tariff_rule = TariffRepo.get_tariff_rule_by_port_and_country(fda_dto.port_id, fda_dto.country_id, db)
            disbursement_dtl.port_tariff_rule=tariff_rule.rules
        else:
            disbursement_dtl.port_tariff_rule = fda_dto.port_tariff_rule.model_dump() if fda_dto.port_tariff_rule else None



        #update the fda table
        disbursement_dtl.fda.portagent_fda_data = fda_dto.portagent_fda_data
        disbursement_dtl.fda.meraki_pda_data = fda_dto.meraki_pda_data
        disbursement_dtl.fda.fda_roe = fda_dto.roe
        disbursement_dtl.fda.fda_currency_to = fda_dto.fda_currency_to
        disbursement_dtl.fda.fda_currency_from = fda_dto.fda_currency_from
        disbursement_dtl.fda.fda_custom_calculation = fda_dto.fda_custom_calculation
        disbursement_dtl.fda.conversion_rate = fda_dto.conversion_rate
        disbursement_dtl.fda.currency_conversion = fda_dto.currency_conversion
        disbursement_dtl.fda.updated_by = user
        disbursement_dtl.fda.credit_note = fda_dto.credit_note
        disbursement_dtl.fda.balance_due = fda_dto.balance_due
        disbursement_dtl.fda.fda_eta = fda_dto.eta
        disbursement_dtl.fda.fda_etd = fda_dto.etd
        disbursement_dtl.fda.fda_vessel_stay = fda_dto.vessel_stay
        disbursement_dtl.fda.invoice_ref_no = fda_dto.invoice_ref_no
        disbursement_dtl.fda.meraki_pda_amount = fda_dto.meraki_pda_amount
        disbursement_dtl.fda.portagent_fda_amount = fda_dto.portagent_fda_amount  
        disbursement_dtl.fda.converted_curr_from=fda_dto.converted_curr_from
        disbursement_dtl.fda.converted_curr_to=fda_dto.converted_curr_to
        disbursement_dtl.fda. conversion_fda_rate=fda_dto.conversion_fda_rate
        disbursement_dtl.fda.pmt_curr_from=fda_dto.pmt_curr_from
        disbursement_dtl.fda.pmt_curr_to=fda_dto.pmt_curr_to
        disbursement_dtl.fda.manual_fda_amount=f"{fda_dto.pmt_curr_to} {fda_dto.currency_conversion}"

        #update the disbursement table
        disbursement_dtl.client_id= fda_dto.client_id
        disbursement_dtl.portagent_id = fda_dto.portagent_id
        disbursement_dtl.country_id = fda_dto.country_id
        disbursement_dtl.voyage = fda_dto.voyage
        disbursement_dtl.port_id = fda_dto.port_id
        disbursement_dtl.purpose_id = fda_dto.purpose_id
        disbursement_dtl.cargo_id = fda_dto.cargo_id
        disbursement_dtl.eta = fda_dto.eta
        disbursement_dtl.etd = fda_dto.etd
        disbursement_dtl.vessel_stay = fda_dto.vessel_stay
        disbursement_dtl.roe_agent = fda_dto.roe
        disbursement_dtl.vsl_id = fda_dto.vessel.vsl_id

        if fda_dto.fda_submit == 'Y':
            status = StatusRepository.get_status_details_by_name('COMPLETED',db)
            disbursement_dtl.fda.status = status.status_id
            disbursement_dtl.fda.fda_processing_date = datetime.now()
            disbursement_dtl.status = status.status_id


         
        db.add(disbursement_dtl)
        db.commit()
        db.refresh(disbursement_dtl.fda)
        FileUploadRepository.syn_file(fda_dto.file_list,db,user)


    def port_change_in_fda(dto: RecalculationRequestDTO, db: Session):
        tariff_rule = dto.port_tariff_rule

        if tariff_rule is None:
                tariff_rule=TariffRepo.get_tariff_rule_by_port_and_country(dto.port_id,dto.country_id,db)
                if tariff_rule is None:
                    raise HTTPException(status_code=400,
                                    detail=f"No tariff rule found for port_id={dto.port_id} and country_id={dto.country_id}")
                else:
                    tariff_rule=tariff_rule.rules
           
        if tariff_rule is None:
            raise HTTPException(status_code=400,
                                detail=f"No tariff rule found for port_id={dto.port_id} and country_id={dto.country_id}")
        meraki_pda_data = build_disbursement_fda_json(
            dto.disbursement_id, dto.vessel_id, dto.client_id, dto.portagent_id,
            dto.port_id, dto.country_id, dto.purpose.purpose_id,
            dto.cargo.cargo_id, tariff_rule.rules, dto.vessel_stay,dto.eta,dto.etd,dto.voyage,dto.fda_custom_calculation,dto.fda_currency_from,dto.fda_currency_to,dto.fda_roe,db
        )
        portagent_fda_data = build_pa_disbursement_json(dto.disbursement_id, dto, tariff_rule.rules, db)
        
        vessel_dto = VesselRepository.get_vessel_info_by_id(dto.pda_vsl_id, db)
        vessel_info = enrich_vessel_info(vessel_dto, portagent_fda_data)
        services = meraki_pda_data.get("services", {}).get("items", [])
        temp_services = copy.deepcopy(services)

        disbursement_dtl = (
            db.query(TxnDisbursement)
            .options(joinedload(TxnDisbursement.pda), joinedload(TxnDisbursement.fda))
            .filter(TxnDisbursement.disbursement_seq == dto.disbursement_seq)
            .first()
            )

        try:
            meraki_pda_data["services"] = process_services_calculation(services_data=meraki_pda_data["services"],vessel_info=vessel_info,db=db,disbursement_seq=disbursement_dtl.disbursement_seq,disbursement_type="FDA",dto=dto)

            totals = calculate_grand_total(meraki_pda_data["services"]["items"])
            # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
            meraki_pda_data["services"]["grand_total"] = totals["grand_total"]


        except SQLAlchemyError as e:
            db.rollback()
            print(" Database error:", e)
            raise
        except Exception as e:
            db.rollback()
            print("Unexpected error:", e)
            raise

        return {"meraki_pda_data": meraki_pda_data,
                "portagent_fda_data": portagent_fda_data,
                "port_tariff_rule": disbursement_dtl.port_tariff_rule
                }
    
    def Re_calculation(dto: RecalculationRequestDTO, db: Session):
        disbursement_dtl = ( 
            db.query(TxnDisbursement)
            .options(joinedload(TxnDisbursement.pda), joinedload(TxnDisbursement.fda))
            .filter(TxnDisbursement.disbursement_seq == dto.disbursement_seq)
            .first()
            )
        if not disbursement_dtl or not disbursement_dtl.fda:
            raise HTTPException(
                status_code=404,
                detail=f"Disbursement not found for seq={dto.disbursement_seq}",
            )
        port_agent_fda_json = copy.deepcopy(dto.portagent_fda_data)
        meraki_pda_data_json = copy.deepcopy(dto.meraki_pda_data)
        services = dto.port_tariff_rule.items if dto.port_tariff_rule and dto.port_tariff_rule.items else []
        services = {"items": services}
        if dto.fda_custom_calculation == "Y":
            vessel_dto = dto.vessel.model_dump()
            vessel_info = enrich_vessel_info(vessel_dto, port_agent_fda_json)
            disbursement_dtl.fda.fda_custom_calculation='Y'
            db.commit()

        else: 
            vessel_dto  = VesselRepository.get_vessel_info_by_id(disbursement_dtl.vsl_id,db)
            vessel_info = enrich_vessel_info(vessel_dto, port_agent_fda_json)
            disbursement_dtl.fda.fda_custom_calculation='N'
            db.commit()

        try:
            meraki_pda_data_json["services"] = process_services_calculation(services_data=services,vessel_info=vessel_info,db=db,disbursement_seq=disbursement_dtl.disbursement_seq,disbursement_type="FDA",dto=dto)

            totals = calculate_grand_total(meraki_pda_data_json["services"]["items"])
            # meraki_pda_data_json["services"]["service_total"] = totals["service_total"]
            meraki_pda_data_json["services"]["grand_total"] = totals["grand_total"]


        except SQLAlchemyError as e:
            db.rollback()
            print(" Database error:", e)
            raise
        except Exception as e:
            db.rollback()
            print("Unexpected error:", e)
            raise
    
        return {
            "meraki_pda_data": meraki_pda_data_json,
            "portagent_fda_data": port_agent_fda_json,
            "fda_custom_calculation": disbursement_dtl.fda.fda_custom_calculation,
            "port_tariff_rule": dto.port_tariff_rule
        }
        
        
    @staticmethod
    def client_request(user,request_dto:TxnClientApprovalRequestInitiateDTo,db):
        if request_dto.update_signature == 'Y' and request_dto.email_signature:
                db.query(User).filter(User.username == user).update(
                    {User.email_signature: request_dto.email_signature},
                    synchronize_session=False
                )
        db.query(TxnFDA).filter(TxnFDA.disbursement_seq == request_dto.disbursement_seq).update(
                    {TxnFDA.meraki_cmt_to_client: request_dto.meraki_cmt_to_client},
                    synchronize_session=False
                )
        disbursement_dtl=PDARepository.get_disbursement_by_disbursment_seq(request_dto.disbursement_seq,db)
        status = StatusRepository.get_status_details_by_name('Approval Request',db)
        disbursement_dtl.fda.status=status.status_id
        db.commit()
        
    def get_disbursement_by_disbursment_seq(disbursmenet_seq:int, db: Session):
        disbursmenet = db.query(TxnDisbursement).options(
            joinedload(TxnDisbursement.fda),
            joinedload(TxnDisbursement.pda)
        ).filter(
            TxnDisbursement.disbursement_seq == disbursmenet_seq
        ).first()
        
        # Filter out deleted FDA
        if disbursmenet and disbursmenet.fda and disbursmenet.fda.state == 'D':
            disbursmenet.fda = None
        
        return disbursmenet
    
    @staticmethod
    def update_fda_disbursement_paClientform_submit(request_body: DisbursementClientFormRequestDTO, db: Session):
        try:
                #Set the status as Approval sumbit 
                disbursement_dtl = FDARepository.get_disbursement_by_disbursment_seq(request_body.disbursement_seq, db)
                status = StatusRepository.get_status_details_by_name('Approval Submit',db)
                disbursement_dtl.fda.status=status.status_id
                db.commit()
                # --- Update FDA ---
                port_agent_data = request_body.model_dump()
                port_agent_data = {k: (v if v != "" else None) for k, v in port_agent_data.items()}
                if disbursement_dtl.fda:
                    disbursement_dtl.fda.portagent_fda_data = port_agent_data
                    flag_modified(disbursement_dtl.fda, "portagent_fda_data")
                else:
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="No PDA record linked to this disbursement."
                    )

                # --- Update Disbursement ---
                disbursement_dtl.fda.approved_by = request_body.approved_by
                disbursement_dtl.fda.approved_on = datetime.now() 
                db.commit()
                db.refresh(disbursement_dtl) 

        except Exception:
            db.rollback()
            raise