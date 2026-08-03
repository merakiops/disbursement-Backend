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
        
        # Chunk system_service_charge (system/payment currency) mapped 1-to-1 with service_charge
        if report_dict.get("service_charge") and "chunks" in report_dict["service_charge"]:
            service_charge_chunks = report_dict["service_charge"]["chunks"]
            system_items = report_dict.get("system_service_charge", {}).get("items", []) if report_dict.get("system_service_charge") else []

            # Map system items by service name
            system_item_map = {}
            for item in system_items:
                if isinstance(item, dict) and item.get("service"):
                    key = item["service"].strip().lower()
                    system_item_map[key] = item

            system_chunks = []
            for agent_chunk in service_charge_chunks:
                sys_chunk = []
                for agent_item in agent_chunk:
                    service_name = (agent_item.get("service") or "").strip().lower()
                    sys_match = system_item_map.get(service_name, {})
                    sys_chunk.append(sys_match)
                    
                    if sys_match.get("info_msg"):
                        agent_item["info_msg"] = sys_match.get("info_msg")
                system_chunks.append(sys_chunk)

            report_dict["system_service_charge"] = report_dict.get("system_service_charge") or {}
            report_dict["system_service_charge"]["chunks"] = system_chunks

        return report_dict