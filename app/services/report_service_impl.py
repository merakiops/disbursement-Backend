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
            max_height = 950
            
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
        
        # Chunk system_service_charge (system/payment currency)
        if report_dict.get("system_service_charge") and "items" in report_dict["system_service_charge"]:
            ## fetch the system service charges only to the respective service charges
            
            service_charge_chunks = report_dict["service_charge"]["chunks"]
            system_items = report_dict["system_service_charge"]["items"]

            # Collect service names from service_charge chunks
            service_names = set()

            for chunk in service_charge_chunks:
                for item in chunk:
                    service_name = item.get("service")

                    if service_name:
                        service_names.add(service_name.strip().lower())

            # Filter matching system services
            filtered_system_items = []

            for item in system_items:
                system_service_name = item.get("service", "").strip().lower()

                if system_service_name in service_names:
                    filtered_system_items.append(item)
            # KEEP filtered system items separately
            report_dict["system_service_charge"]["items"] = filtered_system_items
            items = filtered_system_items
            chunks = []
            current_chunk = []
            current_height = 0
            max_height = 950
            
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
            
            report_dict["system_service_charge"]["chunks"] = chunks
            # Calculate grand total from chunks
            grand_total = 0

            for chunk in chunks:
                for item in chunk:
                    try:
                        grand_total += float(item.get("total") or 0)
                    except Exception:
                        pass

            report_dict["system_service_charge"]["grand_total"] = round(grand_total, 2)
            

            # add the info msg from system_service_charge to service charges
            system_info_msg_map = {
                item.get("service", "").strip().lower(): item.get("info_msg")
                for item in filtered_system_items
                if item.get("info_msg")
            }

            for chunk in report_dict["service_charge"]["chunks"]:
                for item in chunk:
                    service_key = item.get("service", "").strip().lower()
                    if service_key in system_info_msg_map:
                        item["info_msg"] = system_info_msg_map[service_key]
        
        return report_dict