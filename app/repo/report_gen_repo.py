from sqlalchemy.orm import Session, joinedload
from app.models.vw_pda_report import PdaReport
from app.models.vw_fda_report import FdaReport
from app.dto.vw_report_dto import PdaReportRequestDTO
from fastapi import HTTPException

class PdaReportRepository:
    @staticmethod
    def get_rep_deatils_by_id(dto:PdaReportRequestDTO,db: Session) -> PdaReport:
        if dto.report_type=="PDA":
            pda_report_details = db.query(PdaReport).filter(PdaReport.disbursement_seq == dto.disbursement_seq).first()
            if not pda_report_details.pmt_curr_to or not pda_report_details.pmt_curr_from or not pda_report_details.conversion_rate or pda_report_details.conversion_rate.upper()== "NA":      
                raise HTTPException(status_code=400, detail= "Payment currency details are missing. Please enter the required data and save.")
            else:
                return pda_report_details
        elif dto.report_type=="FDA":
            fda_report_details = db.query(FdaReport).filter(FdaReport.disbursement_seq == dto.disbursement_seq).first()
            
            if not fda_report_details.pmt_curr_to or not fda_report_details.pmt_curr_from or not fda_report_details.conversion_rate or fda_report_details.conversion_rate.upper()== "NA":
                raise HTTPException(status_code=400, detail= "Payment currency details are missing. Please enter the required data and save.")
            else:
                return fda_report_details    
        else:
            raise ValueError("Please enter the correct report type")