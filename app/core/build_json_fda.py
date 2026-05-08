import json
from app.repo.vessel_repo import VesselRepository
from sqlalchemy.orm import Session
from app.repo.company_Repo import CompanyRepo
from app.repo.pda_repo import PDARepository
from app.repo.bank_repo import BankRepository
from app.repo.port_repo import PortRepository
from app.repo.country_repo import CountryRepository
from app.repo.purpose_repo import PurposeRepository
from app.repo.cargo_repo import CargoRepository
from typing import List, Dict
from collections import OrderedDict
from app.dto.pda_dto import TxnDisbursementInitiateManualDTo
from app.dto.pda_dto import VesselDTO

def build_disbursement_fda_json(disbursement_seq:int,vsl_id:int,client_id:int,portagent_id:int,port_id:int,country_id:int,purpose_id,cargo_id:int,services: List[Dict],vessel_stay,ETA,ETD,voyage,fda_custom_calculation,fda_currency_from,fda_currency_to,ROE,db:Session):
    disbursement_data = OrderedDict({
        "disbursement_seq": disbursement_seq,
        "voyage":voyage,
        "eta": str(ETA)[:10],
        "etd": str(ETD)[:10],
        "fda_roe": ROE,
        "fda_currency_to":fda_currency_to,
        "fda_currency_from":fda_currency_from,
        "fda_custom_calculation":fda_custom_calculation,
        "vessel_stay": vessel_stay,
        "client": {
            "client_id":1,
            "name": "",
            "address":""
        },
        "port_agent": {
            "name": "",
            "address": "Test_address",
            "bank_details": {
                "country_name": "India",
                "beneficiary_acc_holder_name": "Test",
                "bank_name": "Test_Bank",
                "correspondent_account_number": "1234567890",
                "current_account_number": "1234567890",
                "ifsc_code": "TESTIFSC",
                "bik_code": "Test123",
                "swift_code": "SWIFTTEST123",
                "currency": "INR",
                "inn_code": "INNR",
                "iban_number": "Ban123",
                "bic_code":"bic123",
                "branch_address": "INDIA"
            }
        },
        "port": {
            "port_id": 142,
            "name": ""
        },
        "country": {
            "country_id": 48,
            "name": ""
        },
        "purpose": {
            "purpose_id": 1,
            "name": ""
        },
        "cargo": {
            "cargo_id": 1,
            "type": "oil"
        },
        "vessel": {
            "vsl_id": "60",
            "imo_number": "1233",
            "name": "Test",
            "grt": "123",
            "rgrt": "1234",
            "nrt": "12",
            "loa": "123",
            "beam": "133",
            "depth": "133",
            "dwt": "",
            "type": "",
            "additional_properties":{
                
            }
        },
       "services": {
    "items": [
      {
        "SNO": "",
        "code": "620",
        "service": "Pilotage",
        # "feedback": "",
        "pa_remark": "",
        "negotiate": "",
        "agreed": "",
        # "is_auto_calculate": "N",
        "purpose": "",
        "subService": [
          {
            "name": "Pilot Inward",
            "unique_key": "",
            "basic_value": "",
            "calculated_basic_value": "",
            "movement": "",
            "tariff_percent": "",
            "formula_result": "",
            "optional": "",
            "sub_total": 1500,
            "hide":"",
            "operational_flag": "",
            "formula_inputs": "",
            # "reference": ""
          },
        
        ],
        "meraki_feedback": "",
        "meraki_remark_client": "",
        "client_comment": "",
        "display_to_client":"",
        "client_option": "",
        "info_msg": "",
        "total":0
        
      },
      
      
    ],
    "grand_total": 0
  }
    })


    client_info = CompanyRepo.get_company_details_by_id(client_id,db)
    if client_info:
        disbursement_data["client"].update({
            "client_id":client_info.company_id,
            "name":client_info.company_name,
            "address":client_info.address
        })
    port_agent_info = CompanyRepo.get_company_details_by_id(portagent_id,db)
    port_agent_bank_dtls = BankRepository.get_bank_details_by_id(port_agent_info.bank_details_id,db)
    if port_agent_info:
        disbursement_data["port_agent"].update({
            "name":port_agent_info.company_name,
            "address":port_agent_info.address
        })
    if port_agent_bank_dtls:
        disbursement_data["port_agent"]["bank_details"].update({
                "country_name": port_agent_bank_dtls.country_name,
                "beneficiary_acc_holder_name": port_agent_bank_dtls.beneficiary_acc_holder_name,
                "bank_name": port_agent_bank_dtls.bank_name,
                "correspondent_account_number": port_agent_bank_dtls.correspondent_account_number,
                "current_account_number": port_agent_bank_dtls.current_account_number,
                "ifsc_code": port_agent_bank_dtls.ifsc_code,
                "bik_code": port_agent_bank_dtls.bik_code,
                "swift_code": port_agent_bank_dtls.swift_code,
                "currency": port_agent_bank_dtls.currency,
                "inn_code": port_agent_bank_dtls.inn_code,
                "iban_number": port_agent_bank_dtls.iban_number,
                "bic_code":port_agent_bank_dtls.bic_code,
                "branch_address": port_agent_bank_dtls.branch_address
        })
    port_dtls = PortRepository.get_port_info_by_id(port_id,db)
    if port_dtls:
        disbursement_data["port"].update({
                "port_id":port_dtls.port_id,
                "name":port_dtls.name
            })
    country_dtls = CountryRepository.get_country_info_by_id(country_id,db)
    if country_dtls:
        
        disbursement_data["country"].update({
                "country_id":country_dtls.country_id,
                "name":country_dtls.name
            })
       
    purpose_dtls  = PurposeRepository.get_purpose_dtl_by_id(purpose_id,db)
    if purpose_dtls:
        disbursement_data["purpose"].update({
                "purpose_id":purpose_dtls.purpose_id,
                "name":purpose_dtls.name
            })
    cargo_dtls = CargoRepository.get_cargo_info_by_id(cargo_id,db)
    if cargo_dtls:
        disbursement_data["cargo"].update({
                "cargo_id":cargo_dtls.cargo_id,
                "type":cargo_dtls.type
            })

        
    vsl_dtl = VesselRepository.get_vessel_info_by_id(vsl_id,db)
    if vsl_dtl:
        disbursement_data["vessel"].update({
            "vsl_id": vsl_dtl.vessel_id,
            "imo_number": vsl_dtl.imo_number,
            "name": vsl_dtl.name,
            "grt": vsl_dtl.grt,
            "rgrt": vsl_dtl.rgrt,
            "nrt": vsl_dtl.nrt,
            "loa": vsl_dtl.loa,
            "beam": vsl_dtl.beam,
            "depth": vsl_dtl.depth,
            "dwt": vsl_dtl.dwt,
            "type": vsl_dtl.type,
        })
        if services:
            disbursement_data["services"] = services
    return json.loads(json.dumps(disbursement_data))

def build_pa_disbursement_json(disbursement_id:int,dto: TxnDisbursementInitiateManualDTo,services: List[Dict],db: Session):
    disbursement_data = OrderedDict({
        "disbursement_seq": disbursement_id,  # or disbursement_seq passed separately
        "client": {
            "client_id": 1,
            "name": "",
            "address":""
        },
        "port_agent": {
            "name": "",
            "address": "",
            "bank_details": {
                "country_name": "India",
                "beneficiary_acc_holder_name": "Test",
                "bank_name": "Test_Bank",
                "correspondent_account_number": "1234567890",
                "current_account_number": "1234567890",
                "ifsc_code": "TESTIFSC",
                "bik_code": "Test123",
                "swift_code": "SWIFTTEST123",
                "currency": "INR",
                "inn_code": "INNR",
                "iban_number": "Ban123",
                "bic_code":"bic123",
                "branch_address": "INDIA"
            }
        },
        "port": {"port_id": dto.port_id, "name": ""},
        "country": {"country_id": dto.country_id, "name": ""},
        "purpose": {"purpose_id": dto.purpose.purpose_id, "name": dto.purpose.name},
        "cargo": {"cargo_id": dto.cargo.cargo_id, "type": dto.cargo.type},
        "vessel": {  # keep structure
            "vsl_id": None, "imo_number": None, "name": None,
            "grt": None, "rgrt": None, "nrt": None,
            "loa": None, "beam": None, "depth": None,
            "dwt": None, "type": None
        },
        "services": services or []
    })
    client_info = CompanyRepo.get_company_details_by_id(dto.client_id,db)
    if client_info:
        disbursement_data["client"].update({
            "client_id":client_info.company_id,
            "name":client_info.company_name,
            "address":client_info.address
        })
    port_dtls = PortRepository.get_port_info_by_id(dto.port_id,db)
    if port_dtls:
        disbursement_data["port"].update({
                "port_id":port_dtls.port_id,
                "name":port_dtls.name
            })
    country_dtls = CountryRepository.get_country_info_by_id(dto.country_id,db)
    if country_dtls:
        
        disbursement_data["country"].update({
                "country_id":country_dtls.country_id,
                "name":country_dtls.name
            })
   
    vessel_data = dto.vessel.model_dump()
    vessel_data = {k: (v if v != "" else None) for k, v in vessel_data.items()}
    disbursement_data["vessel"].update(vessel_data)
    port_agent_info = CompanyRepo.get_company_details_by_id(dto.portagent_id,db)
    
    port_agent_bank_dtls = BankRepository.get_bank_details_by_id(port_agent_info.bank_details_id,db)
    if port_agent_info:
        disbursement_data["port_agent"].update({
            "name":port_agent_info.company_name,
            "address":port_agent_info.address
        })
    if port_agent_bank_dtls:
        disbursement_data["port_agent"]["bank_details"].update({
                "country_name": port_agent_bank_dtls.country_name,
                "beneficiary_acc_holder_name": port_agent_bank_dtls.beneficiary_acc_holder_name,
                "bank_name": port_agent_bank_dtls.bank_name,
                "correspondent_account_number": port_agent_bank_dtls.correspondent_account_number,
                "current_account_number": port_agent_bank_dtls.current_account_number,
                "ifsc_code": port_agent_bank_dtls.ifsc_code,
                "bik_code": port_agent_bank_dtls.bik_code,
                "swift_code": port_agent_bank_dtls.swift_code,
                "currency": port_agent_bank_dtls.currency,
                "inn_code": port_agent_bank_dtls.inn_code,
                "iban_number": port_agent_bank_dtls.iban_number,
                "bic_code":port_agent_bank_dtls.bic_code,
                "branch_address": port_agent_bank_dtls.branch_address
        })
 

    return json.loads(json.dumps(disbursement_data))


def extract_vessel_from_port_agent(port_agent_json: dict) -> VesselDTO:
    vessel_data = port_agent_json.get("vessel", {})

    # Ensure additional_properties is always a dict
    additional_props = vessel_data.get("additional_properties", {})
    if not isinstance(additional_props, dict):
        additional_props = {}

    return VesselDTO(
        vsl_id=vessel_data.get("vsl_id"),
        imo_number=vessel_data.get("imo_number"),
        name=vessel_data.get("name"),
        grt=vessel_data.get("grt"),
        rgrt=vessel_data.get("rgrt"),
        nrt=vessel_data.get("nrt"),
        loa=vessel_data.get("loa"),
        beam=vessel_data.get("beam"),
        depth=vessel_data.get("depth"),
        dwt=vessel_data.get("dwt"),
        type=vessel_data.get("type"),
        additional_properties=additional_props
    )



import json

def enrich_vessel_info(vessel_obj, port_agent_pda_json):
    """
    Attach the entire additional_properties object from port_agent_pda_json
    into vessel_obj as vessel_obj.additional_properties
    """
    try:
        # Parse JSON if it's a string
        if isinstance(port_agent_pda_json, str):
            port_agent_pda_json = json.loads(port_agent_pda_json)

        # Safely extract additional_properties
        additional_props = (
            port_agent_pda_json.get("vessel", {})
            .get("additional_properties", {})
        )

        # Bind the whole object, not individual keys
        if isinstance(additional_props, dict):
            if isinstance(vessel_obj, dict):
                vessel_obj["additional_properties"] = additional_props 
            else:
                setattr(vessel_obj, "additional_properties", additional_props)

    except Exception as e:
        print(f"Error enriching vessel info: {e}")

    return vessel_obj
