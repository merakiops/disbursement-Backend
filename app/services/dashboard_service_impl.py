from sqlalchemy.orm import Session
from typing import Optional
from app.dto.dashboard_dto import DashboardRequestDTO
from app.dto.dasboard_response_dto import (
    DashboardResponseDTO, SummaryCardsDTO, ProgressDetailDTO, FDAProgressDetailDTO, 
    OverallProgressDTO, SavingsDTO, OverallSummaryDTO, FdaProcessingDetailsResponseDTO,
   FDAStatsDTO, FDACostTrackerDTO, FilterDataDTO, ClientFilterDTO,
    RangeDataDTO
)
from app.services.dashboard_service import DashboardService
from app.repo.dashboard_repo import DashboardRepository
from fastapi import HTTPException, status


class DashboardServiceImpl(DashboardService):
    
    def get_dashboard_summary(self, payload: DashboardRequestDTO, db: Session) -> DashboardResponseDTO:
        """
        Get dashboard summary for a single client or all clients if client_id is not provided.
        """
        from_date = payload.monthRange.from_date if payload.monthRange else None
        to_date = payload.monthRange.to_date if payload.monthRange else None
        
        result = DashboardRepository.get_dashboard_summary(
            payload.clientId,
            from_date,
            to_date,
            db
        )
        
        if not result:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Dashboard data not found"
            )
        
        summary_cards = SummaryCardsDTO(
            countries=result.get("countries") or 0,
            ports=result.get("ports") or 0,
            vessels=result.get("vessels") or 0,
            totalPDA=result.get("total_pda") or 0,
            totalFDA=result.get("total_fda") or 0
        )
        
        pda_progress = ProgressDetailDTO(
            Completed=result.get("completed_pda") or 0,
            Underprogress=result.get("under_process_pda") or 0,
            total=result.get("total_pda") or 0,
            pdaCompletedNoFda=result.get("pda_completed_no_fda") or 0

        )
        
        fda_progress = FDAProgressDetailDTO(
            Completed=result.get("completed_fda") or 0,
            Underprogress=result.get("under_process_fda") or 0,
            yetToProcess=result.get("yet_to_process") or 0,
            total=result.get("total_fda") or 0
        )
        
        overall_progress = OverallProgressDTO(
            pda=pda_progress,
            fda=fda_progress
        )
        
        savings = SavingsDTO(
            savingsPercentage=float(result.get("percentage_savings") or 0.0),
            overallSavingsAmount=float(result.get("overallsavingsamount") or 0.0),
            pdaSavings=float(result.get("pdasavings") or 0.0),
            fdaSavings=float(result.get("fdasavings") or 0.0),
            percentage_savings_fda=float(result.get("percentage_savings_fda") or 0.0),
            percentage_savings_pda=float(result.get("percentage_savings_pda") or 0.0),
            pda_total_amount=float(result.get("pda_total_amount") or 0.0),
            fda_total_amount=float(result.get("fda_total_amount") or 0.0),

        )
        
        overall_summary = OverallSummaryDTO(
            summaryCards=summary_cards,
            overallProgress=overall_progress,
            savings=savings
        )
        
        return DashboardResponseDTO(overallSummary=overall_summary)
    
    def get_fda_processing_details(self, data_request, user_role: int, db: Session) -> FdaProcessingDetailsResponseDTO:
        """
        Get FDA processing details with pagination and stats.
        """
        records, total_count = DashboardRepository.get_fda_processing_details(
            data_request, db=db
        )
        
        # Calculate stats from filtered records
        if records:
            fda_amounts = [float(r.fda_amount) for r in records if r.fda_amount not in (None, 0)]
            if fda_amounts:
                fda_amounts_sorted = sorted(fda_amounts)
                min_amount = min(fda_amounts)
                n = len(fda_amounts_sorted)

                # -----median of two value if record is even -----
                # if n % 2 == 0:
                #     median_amount = (fda_amounts_sorted[n//2 - 1] + fda_amounts_sorted[n//2]) / 2
                # else:
                #     median_amount = fda_amounts_sorted[n//2]
                
                median_amount = fda_amounts_sorted[n//2]
                max_amount = max(fda_amounts)
            else:
                min_amount = median_amount = max_amount = 0.0
        else:
            min_amount = median_amount = max_amount = 0.0
        
        stats = FDAStatsDTO(
            lowestFDAAmount=round(min_amount, 2),
            averageFDAAmount=round(median_amount, 2),
            highestFDAAmount=round(max_amount, 2)
        )
        is_client = user_role == 3
        
        table_data = []
        for idx, r in enumerate(records, start=1):
            etd = getattr(r, 'etd', None)
            etd_str = etd.date().isoformat() if etd else ""
            row_data = {
                "sno": idx,
                "disbursement_seq": getattr(r, 'disbursement_seq', None),
                "date": etd_str,
                "country": getattr(r, 'country_name', None) or "",
                "port": getattr(r, 'port_name', None) or "",
                "loa": str(r.loa) if r.loa is not None else None,
                "grt": str(r.grt) if r.grt is not None else None,
                "rgrt": str(r.rgrt) if r.rgrt is not None else None,
                "nrt": str(r.nrt) if r.nrt is not None else None,
                "pdaAmount": float(r.pda_amount) if r.pda_amount is not None else 0.0,
                "fdaAmount": float(r.fda_amount) if r.fda_amount is not None else 0.0,
                "manual_pda_amount": getattr(r, 'manual_pda_amount', None),
                "manual_fda_amount": getattr(r, 'manual_fda_amount', None)
            }
            if not is_client:
                row_data["vessel"] = getattr(r, 'vessel_name', None) or ""
            table_data.append(row_data)
            

        fda_cost_tracker = FDACostTrackerDTO(
            totalRecords=total_count,
            stats=stats,
            tableData=table_data
        )
        
        return FdaProcessingDetailsResponseDTO(
            fdaCostTracker=fda_cost_tracker
        )

    def get_dashboard_filter_data(self, client_id: Optional[int], db: Session) -> FilterDataDTO:
        """
        Get data for dashboard filters.
        """
        filter_data_dict = DashboardRepository.get_dashboard_filter_data(client_id, db)
        
        clients = [ClientFilterDTO(**client) for client in filter_data_dict.get("clients", [])]
        
        return FilterDataDTO(
            clients=clients,
            vessel_name=filter_data_dict.get("vessel_name", []),
            country_name=filter_data_dict.get("country_name", []),
            port_name=filter_data_dict.get("port_name", []),
            loa=RangeDataDTO(**filter_data_dict["loa"]) if filter_data_dict.get("loa") else None,
            nrt=RangeDataDTO(**filter_data_dict["nrt"]) if filter_data_dict.get("nrt") else None,
            grt=RangeDataDTO(**filter_data_dict["grt"]) if filter_data_dict.get("grt") else None,
            rgrt=RangeDataDTO(**filter_data_dict["rgrt"]) if filter_data_dict.get("rgrt") else None
        )
