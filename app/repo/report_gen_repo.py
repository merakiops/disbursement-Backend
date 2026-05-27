from sqlalchemy.orm import Session, joinedload
from app.models.vw_pda_report import PdaReport
from app.models.vw_fda_report import FdaReport
from app.dto.vw_report_dto import PdaReportRequestDTO

class PdaReportRepository:
    @staticmethod
    def get_rep_deatils_by_id(dto:PdaReportRequestDTO,db: Session) -> PdaReport:
        if dto.report_type=="PDA":
            pda_report_details = db.query(PdaReport).filter(PdaReport.disbursement_seq == dto.disbursement_seq).first()
            return pda_report_details
        elif dto.report_type=="FDA":
            pda_report_details = db.query(FdaReport).filter(FdaReport.disbursement_seq == dto.disbursement_seq).first()
            return pda_report_details
        else:
            raise ValueError("Please enter the correct report type")