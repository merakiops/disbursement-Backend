from sqlalchemy.orm import Session
from app.repo.report_gen_repo import PdaReportRepository
from app.services.report_service import PdaReportService
from app.dto.vw_report_dto import PdaReportRequestDTO

class PdaReportServiceImpl(PdaReportService):
    def get_rep_deatils_by_id(self, dto: PdaReportRequestDTO, db: Session):
        return PdaReportRepository.get_rep_deatils_by_id(dto, db)
    
    def chunk_service_items(self, report_dict: dict) -> dict:
        if report_dict.get("service_charge") and "items" in report_dict["service_charge"]:
            items = report_dict["service_charge"]["items"]
            items = [item for item in items if item.get("total") and item.get("total") != 0]
            chunks = []
            current_chunk = []
            current_height = 0
            max_height = 750
            
            for item in items:
                row_height = 60 + (len(item.get("service", "")) // 50) * 20 + (len(item.get("info_msg", "") or "") // 50) * 15
                
                if current_height + row_height > max_height and current_chunk:
                    chunks.append(current_chunk)
                    current_chunk = [item]
                    current_height = row_height
                else:
                    current_chunk.append(item)
                    current_height += row_height
            
            if current_chunk:
                chunks.append(current_chunk)
            
            report_dict["service_charge"]["chunks"] = chunks
        
        return report_dict