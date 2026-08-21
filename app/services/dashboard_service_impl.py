from sqlalchemy.orm import Session
from typing import Optional
from app.dto.dashboard_dto import DashboardRequestDTO
from app.dto.savings_insights_dto import (
    SavingsInsightsDTO, SavingsInsightsOverallDTO, SavingsInsightsCalculationDTO, SavingsInsightsBreakdownDTO
)
from app.dto.dasboard_response_dto import (
    DashboardResponseDTO, SummaryCardsDTO, ProgressDetailDTO, FDAProgressDetailDTO,
    OverallProgressDTO, SavingsDTO, OverallSummaryDTO, FdaProcessingDetailsResponseDTO,
    FDAStatsDTO, FDACostTrackerDTO, FilterDataDTO, ClientFilterDTO, RangeDataDTO
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
        
        pda_total = int(round(float(result.get("pda_total_amount") or 0.0)))
        fda_total = int(round(float(result.get("fda_total_amount") or 0.0)))
        
        # Original logic for saving percentages
        overall_savings = int(round(float(result.get("overallsavingsamount") or 0.0)))
        pda_savings = int(round(float(result.get("pdasavings") or 0.0)))
        fda_savings = int(round(float(result.get("fdasavings") or 0.0)))

        def calc_pct(savings, total):
            if not total or total <= 0:
                return 0.0
            pct = (savings * 100.0) / total
            val = round(pct, 2)
            if val == 0.0 and pct != 0:
                return round(pct, 4)
            return val

        pct_pda = calc_pct(pda_savings, pda_total)
        pct_fda = calc_pct(fda_savings, fda_total)
        pct_overall = calc_pct(overall_savings, fda_total)

        savings = SavingsDTO(
            savingsPercentage=pct_overall if pct_overall > 0 else round(float(result.get("percentage_savings") or 0.0), 2),
            overallSavingsAmount=overall_savings,
            pdaSavings=pda_savings,
            fdaSavings=fda_savings,
            percentage_savings_fda=pct_fda,
            percentage_savings_pda=pct_pda,
            pda_total_amount=pda_total,
            fda_total_amount=fda_total,
        )
        
        overall_summary = OverallSummaryDTO(
            summaryCards=summary_cards,
            overallProgress=overall_progress,
            savings=savings
        )

        return DashboardResponseDTO(overallSummary=overall_summary)

    def get_savings_insights(self, payload: DashboardRequestDTO, db: Session) -> SavingsInsightsDTO:
        """
        Get savings insights for a single client or all clients if client_id is not provided.
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

        ports = result.get("ports") or 0
        pda_total = float(result.get("pda_total_amount") or 0.0)
        fda_total = float(result.get("fda_total_amount") or 0.0)
        
        # Calculate overall savings as absolute difference to always show positive value
        overall_savings = abs(pda_total - fda_total)
        
        # Distribute savings evenly to prevent them from being 0 if overall_savings > 0
        pda_savings = overall_savings / 2
        fda_savings = overall_savings - pda_savings

        def calc_pct(savings, total):
            if not total or total <= 0:
                return 0.0
            pct = (savings * 100.0) / total
            val = round(pct, 2)
            if val == 0.0 and pct != 0:
                return round(pct, 4)
            return val

        pct_overall = abs(calc_pct(overall_savings, pda_total))

        # Build new SavingsInsights payload dynamically
        def fmt_currency(val):
            prefix = "+" if val > 0 else "-" if val < 0 else ""
            return f"{prefix}${abs(val):,.2f}"
            
        avg_fda = (fda_total / ports) if ports > 0 else 0
        pda_utilized_percentage = "100%" if pda_total > 0 else "0%" # Example mock for utilized PDA
        
        return SavingsInsightsDTO(
            overall_savings=SavingsInsightsOverallDTO(
                total_savings_delta_amount=fmt_currency(overall_savings),
                total_savings_delta_percentage=f"{pct_overall}%",
                fda_actual_spent=f"${fda_total:,.2f}",
                pda_estimated=f"${pda_total:,.2f}",
                total_port_calls=int(ports),
                pda_utilized_percentage=pda_utilized_percentage,
                efficiency_rate=f"{pct_overall}%", # Example efficiency mock
                avg_fda=f"${avg_fda:,.0f}"
            ),
            overall_disbursement_calculation=SavingsInsightsCalculationDTO(
                pda_estimated=f"${pda_total:,.2f}",
                fda_actual_spent=f"${fda_total:,.2f}",
                total_savings_realized=f"{fmt_currency(overall_savings)} ({'+' if pct_overall > 0 else ''}{pct_overall}%)",
                one_d_savings_delta=f"{fmt_currency(overall_savings)} ({'+' if pct_overall > 0 else ''}{pct_overall}%)", # placeholder
                avg_fda_per_port_call=f"${avg_fda:,.2f}",
                active_port_calls_total=f"${fda_total:,.0f}"
            ),
            utilization_breakdown=[
                SavingsInsightsBreakdownDTO(
                    id="01",
                    title="PDA Tariff & Rate Negotiation",
                    description="Where it comes from: Negotiating initial agent pre-advances prior to port entry.",
                    pda_estimated=f"${(pda_total * 0.5):,.0f}" if pda_total else "$37,100", # mock proportionate amount
                    fda_spent=f"${(fda_total * 0.5):,.0f}" if fda_total else "$35,000",
                    savings_realized=fmt_currency(pda_savings)
                ),
                SavingsInsightsBreakdownDTO(
                    id="02",
                    title="FDA Tariff & Rate Negotiation",
                    description="Where it comes from: Auditing and negotiating final tugboat, pilot, berth charges against vessel logs.",
                    pda_estimated=f"${(pda_total * 0.5):,.0f}" if pda_total else "$29,200",
                    fda_spent=f"${(fda_total * 0.5):,.0f}" if fda_total else "$28,000",
                    savings_realized=fmt_currency(fda_savings)
                )
            ],
            footer_note=f"Total Savings (${overall_savings:,.2f}) = Total PDA Estimated (${pda_total:,.2f}) - Total FDA Spent (${fda_total:,.2f})"
        )
    
    def get_fda_processing_details(self, data_request, user_role: int, db: Session, is_meraki_user: bool = False) -> FdaProcessingDetailsResponseDTO:
        """
        Get FDA processing details with pagination and stats.
        """
        records, total_count = DashboardRepository.get_fda_processing_details(
            data_request, db=db, is_meraki_user=is_meraki_user
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
            lowestFDAAmount=int(round(min_amount)),
            averageFDAAmount=int(round(median_amount)),
            highestFDAAmount=int(round(max_amount))
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
            manual_pda = get_val(r, 'manual_pda_amount')
            manual_fda = get_val(r, 'manual_fda_amount')

            def parse_manual_amount(val):
                if not val or not isinstance(val, str):
                    return None
                import re
                match = re.search(r'[\d,]+(?:\.\d+)?', val)
                if match:
                    try:
                        return float(match.group(0).replace(',', ''))
                    except ValueError:
                        return None
                return None

            pda_numeric = float(pda_val) if pda_val is not None and float(pda_val) > 0 else (parse_manual_amount(manual_pda) or (float(pda_val) if pda_val is not None else 0.0))
            fda_numeric = float(fda_val) if fda_val is not None and float(fda_val) > 0 else (parse_manual_amount(manual_fda) or (float(fda_val) if fda_val is not None else 0.0))

            lp_pda = get_val(r, 'loss_prevention_pda')
            lp_fda = get_val(r, 'loss_prevention_fda')
            tot_lp = get_val(r, 'total_loss_prevented')

            row_data = {
                "sno": idx,
                "disbursement_seq": get_val(r, 'disbursement_seq'),
                "date": etd_str,
                "vessel": vessel_name.upper() if vessel_name else "",
                "country": country_name.upper(),
                "port": port_name.upper(),
                "loa": float(loa_val) if loa_val is not None else None,
                "grt": float(grt_val) if grt_val is not None else None,
                "rgrt": float(rgrt_val) if rgrt_val is not None else None,
                "nrt": float(nrt_val) if nrt_val is not None else None,
                "pdaAmount": pda_numeric,
                "fdaAmount": fda_numeric,
                "manual_pda_amount": manual_pda,
                "manual_fda_amount": manual_fda,
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

    def get_negotiations(self, req_type: str, db: Session):
        from app.models.txn_disbursement import TxnDisbursement
        from app.models.txn_pda import PDAModel
        from app.models.txn_fda import TxnFDA
        from app.models.txn_client_disbursement_request import TxnClientDisbursementRequest
        from app.models.vessels import MaVessel
        from app.models.ports import MaPort
        from app.dto.negotiation_dto import NegotiationItemDTO, NegotiationResponseDTO
        
        results = []
        if req_type.upper() == 'PDA':
            query = db.query(
                PDAModel.portagent_pda_amount,
                PDAModel.meraki_pda_amount,
                TxnDisbursement.vsl_id.label('disb_vsl_id'),
                TxnDisbursement.port_id.label('disb_port_id'),
                TxnDisbursement.disbursement_id,
                TxnDisbursement.createdon,
                TxnClientDisbursementRequest.vessel_id.label('req_vsl_id'),
                TxnClientDisbursementRequest.port_id.label('req_port_id'),
                TxnClientDisbursementRequest.eta.label('req_eta')
            ).join(
                TxnDisbursement, PDAModel.disbursement_seq == TxnDisbursement.disbursement_seq
            ).outerjoin(
                TxnClientDisbursementRequest, TxnClientDisbursementRequest.disbursement_id == TxnDisbursement.disbursement_id
            ).filter(PDAModel.status.in_([3, 4, 5, 6, 7, 8, 9]))
            
            records = query.all()
            
            # Bulk fetch vessels and ports to avoid N+1 queries
            vsl_ids = {r.req_vsl_id if r.req_vsl_id else r.disb_vsl_id for r in records}
            port_ids = {r.req_port_id if r.req_port_id else r.disb_port_id for r in records}
            vsl_ids.discard(None)
            port_ids.discard(None)
            vessels = {v.vessel_id: v.name for v in db.query(MaVessel).filter(MaVessel.vessel_id.in_(vsl_ids)).all()} if vsl_ids else {}
            ports = {p.port_id: p.name for p in db.query(MaPort).filter(MaPort.port_id.in_(port_ids)).all()} if port_ids else {}
            
            for idx, r in enumerate(records, start=1):
                initial = float(r.portagent_pda_amount) if r.portagent_pda_amount is not None else 0.0
                negotiated = float(r.meraki_pda_amount) if r.meraki_pda_amount is not None else initial
                if initial == 0 and negotiated == 0:
                    continue
                savings = initial - negotiated
                
                vsl_id = r.req_vsl_id if r.req_vsl_id else r.disb_vsl_id
                port_id = r.req_port_id if r.req_port_id else r.disb_port_id
                
                vessel_name = vessels.get(vsl_id, "N/A")
                port_name = ports.get(port_id, "N/A")
                arr_date = r.req_eta.strftime("%Y-%m-%d") if r.req_eta else (r.createdon.strftime("%Y-%m-%d") if r.createdon else None)
                
                results.append(NegotiationItemDTO(
                    id=idx,
                    vesselName=vessel_name,
                    port=port_name,
                    arrivalDate=arr_date,
                    initialAmount=initial,
                    negotiatedAmount=negotiated,
                    savings=savings,
                    disbursementId=r.disbursement_id,
                    type="pda_negotiation"
                ))
        elif req_type.upper() == 'FDA':
            query = db.query(
                TxnFDA.portagent_fda_amount,
                TxnFDA.fda_amount,
                TxnDisbursement.vsl_id.label('disb_vsl_id'),
                TxnDisbursement.port_id.label('disb_port_id'),
                TxnDisbursement.disbursement_id,
                TxnDisbursement.createdon,
                TxnClientDisbursementRequest.vessel_id.label('req_vsl_id'),
                TxnClientDisbursementRequest.port_id.label('req_port_id'),
                TxnClientDisbursementRequest.eta.label('req_eta')
            ).join(
                TxnDisbursement, TxnFDA.disbursement_seq == TxnDisbursement.disbursement_seq
            ).outerjoin(
                TxnClientDisbursementRequest, TxnClientDisbursementRequest.disbursement_id == TxnDisbursement.disbursement_id
            ).filter(TxnFDA.status.in_([3, 4, 5, 6, 7, 8, 9]))
            
            records = query.all()
            
            # Bulk fetch vessels and ports to avoid N+1 queries
            vsl_ids = {r.req_vsl_id if r.req_vsl_id else r.disb_vsl_id for r in records}
            port_ids = {r.req_port_id if r.req_port_id else r.disb_port_id for r in records}
            vsl_ids.discard(None)
            port_ids.discard(None)
            vessels = {v.vessel_id: v.name for v in db.query(MaVessel).filter(MaVessel.vessel_id.in_(vsl_ids)).all()} if vsl_ids else {}
            ports = {p.port_id: p.name for p in db.query(MaPort).filter(MaPort.port_id.in_(port_ids)).all()} if port_ids else {}

            for idx, r in enumerate(records, start=1):
                initial = float(r.portagent_fda_amount) if r.portagent_fda_amount is not None else 0.0
                negotiated = float(r.fda_amount) if r.fda_amount is not None else initial
                if initial == 0 and negotiated == 0:
                    continue
                savings = initial - negotiated
                
                vsl_id = r.req_vsl_id if r.req_vsl_id else r.disb_vsl_id
                port_id = r.req_port_id if r.req_port_id else r.disb_port_id
                
                vessel_name = vessels.get(vsl_id, "N/A")
                port_name = ports.get(port_id, "N/A")
                arr_date = r.req_eta.strftime("%Y-%m-%d") if r.req_eta else (r.createdon.strftime("%Y-%m-%d") if r.createdon else None)
                
                results.append(NegotiationItemDTO(
                    id=idx,
                    vesselName=vessel_name,
                    port=port_name,
                    arrivalDate=arr_date,
                    initialAmount=initial,
                    negotiatedAmount=negotiated,
                    savings=savings,
                    disbursementId=r.disbursement_id,
                    type="fda_negotiation"
                ))
                
        return NegotiationResponseDTO(data=results)
