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
            getattr(payload, 'dataSource', 'all'),
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
        
        def get_val(item, key, default=None):
            if isinstance(item, dict):
                return item.get(key, default)
            return getattr(item, key, default)

        # Calculate stats from filtered records
        if records:
            fda_amounts = [float(get_val(r, 'fda_amount')) for r in records if get_val(r, 'fda_amount') not in (None, 0)]
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
        
        def get_val(item, key, default=None):
            if isinstance(item, dict):
                return item.get(key, default)
            return getattr(item, key, default)

        table_data = []
        for idx, r in enumerate(records, start=1):
            etd = get_val(r, 'etd')
            if hasattr(etd, 'date'):
                etd_str = etd.date().isoformat()
            elif isinstance(etd, str):
                etd_str = etd
            else:
                etd_str = ""

            country_name = get_val(r, 'country_name') or ""
            port_name = get_val(r, 'port_name') or ""
            vessel_name = get_val(r, 'vessel_name') or ""

            loa_val = get_val(r, 'loa')
            grt_val = get_val(r, 'grt')
            rgrt_val = get_val(r, 'rgrt')
            nrt_val = get_val(r, 'nrt')
            pda_val = get_val(r, 'pda_amount')
            fda_val = get_val(r, 'fda_amount')
            lp_pda = get_val(r, 'loss_prevention_pda')
            lp_fda = get_val(r, 'loss_prevention_fda')
            tot_lp = get_val(r, 'total_loss_prevented')

            row_data = {
                "sno": idx,
                "disbursement_seq": get_val(r, 'disbursement_seq'),
                "date": etd_str,
                "country": country_name.upper(),
                "port": port_name.upper(),
                "loa": float(loa_val) if loa_val is not None else None,
                "grt": float(grt_val) if grt_val is not None else None,
                "rgrt": float(rgrt_val) if rgrt_val is not None else None,
                "nrt": float(nrt_val) if nrt_val is not None else None,
                "pdaAmount": float(pda_val) if pda_val is not None else 0.0,
                "fdaAmount": float(fda_val) if fda_val is not None else 0.0,
                "manual_pda_amount": get_val(r, 'manual_pda_amount'),
                "manual_fda_amount": get_val(r, 'manual_fda_amount'),
                "loss_prevention_pda": float(lp_pda) if lp_pda is not None else None,
                "loss_prevention_fda": float(lp_fda) if lp_fda is not None else None,
                "total_loss_prevented": round((float(lp_pda or 0) + float(lp_fda or 0)), 2) if (lp_pda is not None or lp_fda is not None) else (float(tot_lp) if tot_lp is not None else None),
                "loss_prevented_reason": get_val(r, 'loss_prevented_reason'),
                "voyage_no": get_val(r, 'voyage_no'),
                "vessel_type": get_val(r, 'vessel_type'),
                "port_func": get_val(r, 'port_func'),
                "arrival_local": get_val(r, 'arrival_local'),
                "departure_local": get_val(r, 'departure_local'),
                "port_days": float(get_val(r, 'port_days')) if get_val(r, 'port_days') is not None else None,
                "agent": get_val(r, 'agent'),
                "cargo_grade": get_val(r, 'cargo_grade'),
                "counterparty_short_name": get_val(r, 'counterparty_short_name'),
                "imo_no": get_val(r, 'imo_no'),
                "advance_amt": float(get_val(r, 'advance_amt')) if get_val(r, 'advance_amt') is not None else None,
                "final_amt": float(get_val(r, 'final_amt')) if get_val(r, 'final_amt') is not None else None,
                "advance_amount_remitted": float(get_val(r, 'advance_amount_remitted')) if get_val(r, 'advance_amount_remitted') is not None else None,
                "outstanding_balance": float(get_val(r, 'outstanding_balance')) if get_val(r, 'outstanding_balance') is not None else None,
                "remark": get_val(r, 'remark'),
                "data_source": get_val(r, 'data_source', 'standard'),
            }
            if not is_client:
                row_data["vessel"] = vessel_name.upper()
            table_data.append(row_data)
            

        fda_cost_tracker = FDACostTrackerDTO(
            totalRecords=total_count,
            stats=stats,
            tableData=table_data
        )
        
        return FdaProcessingDetailsResponseDTO(
            fdaCostTracker=fda_cost_tracker
        )

    def update_dashboard_row(self, payload, db: Session):
        """
        Update advance_amount_remitted, outstanding_balance, and remark for a specific dashboard row.
        """
        return DashboardRepository.update_dashboard_row(payload, db)

    def get_dashboard_filter_data(self, client_id: Optional[int], data_source: Optional[str] = "all", db: Session = None) -> FilterDataDTO:
        """
        Get data for dashboard filters.
        """
        filter_data_dict = DashboardRepository.get_dashboard_filter_data(client_id, data_source, db)
        
        clients = [ClientFilterDTO(**client) for client in filter_data_dict.get("clients", [])]
        
        return FilterDataDTO(
            clients=clients,
            vessel_name=filter_data_dict.get("vessel_name", []),
            country_name=filter_data_dict.get("country_name", []),
            port_name=filter_data_dict.get("port_name", []),
            loa=RangeDataDTO(**filter_data_dict["loa"]) if filter_data_dict.get("loa") else None,
            nrt=RangeDataDTO(**filter_data_dict["nrt"]) if filter_data_dict.get("nrt") else None,
            grt=RangeDataDTO(**filter_data_dict["grt"]) if filter_data_dict.get("grt") else None,
            rgrt=RangeDataDTO(**filter_data_dict["rgrt"]) if filter_data_dict.get("rgrt") else None,
            vessel_type=filter_data_dict.get("vessel_type", []),
            agent=filter_data_dict.get("agent", []),
            cargo_grade=filter_data_dict.get("cargo_grade", []),
            counterparty_short_name=filter_data_dict.get("counterparty_short_name", [])
        )
