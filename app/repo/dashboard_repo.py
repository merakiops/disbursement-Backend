from app.models.purpose import MaPurpose
from sqlalchemy.orm import Session
from sqlalchemy import func, desc, text, extract
from app.models.vw_fda_processing_details import VwFdaProcessingDetails
from app.models.company import MaCompany
from app.models.txn_disbursement import TxnDisbursement
from app.models.excel_disbursements import (
    ExcelVessel,
    ExcelCountry,
    ExcelPort,
    ExcelDisbursementsIndividualItemsCost,
    ExcelDisbursementsPaidAmountsAnalysis,
    ExcelDisbursementsTotalPortCost
)
from app.client_kamba_mapping import (
    PROD_TO_KAMBA_MAPPING,
    get_kamba_ids_for_client_list,
    get_all_prod_ids_for_client_list,
    has_kamba_data
)
from typing import List, Optional
import os
from datetime import datetime

SCHEMA_NAME = os.getenv("DB_SCHEMA")


class DashboardRepository:

    @staticmethod
    def _get_dynamic_client_mapping(db):
        from sqlalchemy import text
        from app.models.company import MaCompany
        excel_clients_result = db.execute(text("SELECT DISTINCT client FROM ankkumam_data_excel.data WHERE client IS NOT NULL")).fetchall()
        excel_clients = [r[0].strip() for r in excel_clients_result if r[0]]
        prod_cid_to_excel_client = {}
        excel_client_to_prod_cid = {}
        for ec in excel_clients:
            comp = db.query(MaCompany).filter(
                MaCompany.company_type_id == 2,
                MaCompany.status == 'Y',
                MaCompany.company_name.ilike(f"{ec}%")
            ).first()
            if comp:
                prod_cid_to_excel_client[comp.company_id] = ec
                excel_client_to_prod_cid[ec] = comp.company_id
        return prod_cid_to_excel_client, excel_client_to_prod_cid
    
    @staticmethod
    def _get_kamba_summary_for_companies(kamba_company_ids, db):
        """
        Get kamba_data_prod summary filtered by specific company IDs.
        If kamba_company_ids is None or empty, fetches all kamba data.
        """
        try:
            if kamba_company_ids:
                ids_str = ",".join(str(i) for i in kamba_company_ids)
                company_filter = f"WHERE d.companies_id IN ({ids_str})"
                company_filter_d = f"AND d.companies_id IN ({ids_str})"
            else:
                company_filter = ""
                company_filter_d = ""

            v_cnt = db.execute(text(f"""
                SELECT COUNT(DISTINCT v.vessel) FROM kamba_data_prod.disbursements d
                JOIN kamba_data_prod.vessels v ON d.vessels_id = v.id
                {company_filter}
            """)).scalar() or 0

            c_cnt = db.execute(text(f"""
                SELECT COUNT(DISTINCT c.country) FROM kamba_data_prod.disbursements d
                JOIN kamba_data_prod.countries c ON d.countries_id = c.id
                {company_filter}
            """)).scalar() or 0

            p_cnt = db.execute(text(f"""
                SELECT COUNT(DISTINCT p.port) FROM kamba_data_prod.disbursements d
                JOIN kamba_data_prod.ports p ON d.ports_id = p.id
                {company_filter}
            """)).scalar() or 0

            tot_disb = db.execute(text(f"""
                SELECT COUNT(*) FROM kamba_data_prod.disbursements d
                WHERE 1=1 {company_filter_d}
            """)).scalar() or 0

            tot_fda_amt = db.execute(text(f"""
                SELECT COALESCE(SUM(CASE WHEN fd.amount ~ '^[0-9]+(\\.[0-9]+)?$' THEN fd.amount::DECIMAL(15,2) ELSE 0.0 END), 0.0)
                FROM kamba_data_prod.fdadetails fd
                JOIN kamba_data_prod.disbursements d ON fd.disbursements_id = d.id
                WHERE 1=1 {company_filter_d}
            """)).scalar() or 0.0

            tot_pda_amt = db.execute(text(f"""
                SELECT COALESCE(SUM(CASE WHEN pd.amount ~ '^[0-9]+(\\.[0-9]+)?$' THEN pd.amount::DECIMAL(15,2) ELSE 0.0 END), 0.0)
                FROM kamba_data_prod.pdadetails pd
                JOIN kamba_data_prod.disbursements d ON pd.disbursements_id = d.id
                WHERE 1=1 {company_filter_d}
            """)).scalar() or 0.0

            pda_total = float(tot_pda_amt or 0.0)
            fda_total = float(tot_fda_amt or 0.0)
            overall_savings = max(0.0, pda_total - fda_total)

            return {
                "countries": c_cnt,
                "ports": p_cnt,
                "vessels": v_cnt,
                "total_pda": tot_disb,
                "completed_pda": tot_disb,
                "under_process_pda": 0,
                "total_fda": tot_disb,
                "completed_fda": tot_disb,
                "under_process_fda": 0,
                "yet_to_process": 0,
                "pdasavings": overall_savings,
                "fdasavings": overall_savings,
                "overallsavingsamount": overall_savings,
                "fda_total_amount": fda_total,
                "pda_total_amount": pda_total,
                "percentage_savings": round((overall_savings / pda_total * 100), 2) if pda_total > 0 else 0.0,
                "percentage_savings_fda": round((overall_savings / (fda_total + overall_savings) * 100), 2) if (fda_total + overall_savings) > 0 else 0.0,
                "percentage_savings_pda": round((overall_savings / (pda_total + overall_savings) * 100), 2) if (pda_total + overall_savings) > 0 else 0.0,
                "pda_completed_no_fda": 0
            }
        except Exception as e:
            db.rollback()
            import traceback
            with open("/tmp/ankkumam_error.log", "w") as f:
                f.write(traceback.format_exc())
            print(f"Error computing deduped ankkumam summary: {e}")
            return [], 0

    @staticmethod
    def _get_ankkumam_summary_for_companies(ankkumam_clients, db):
        try:
            if not ankkumam_clients:
                return None
            
            class DummyDataRequest:
                tableFilter = None
                pageSize = -1
                page = 1
                clientId = None

            # Fetch records for overallProgress (Old process: Completed FDA only)
            completed_records, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, DummyDataRequest(), False, True, 0, db, only_completed_fda=True
            )

            # Fetch records for savings & amounts (New process: All records)
            all_records, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, DummyDataRequest(), False, True, 0, db, only_completed_fda=False
            )
            
            c_set = set()
            p_set = set()
            v_set = set()
            
            completed_pda = 0
            under_process_pda = 0
            completed_fda = 0
            under_process_fda = 0
            UNDER_PROCESS_STATUSES = {"under process", "in process", "in processs", "unixting"}

            # --- OLD PROCESS: Progress Counts (from completed_records) ---
            for r in completed_records:
                if r.get("country_name") and r["country_name"] != "N/A": 
                    c_set.add(str(r["country_name"]).strip().upper())
                if r.get("port_name") and r["port_name"] != "N/A": 
                    p_set.add(str(r["port_name"]).strip().upper())
                if r.get("vessel_name"): 
                    v_set.add(str(r["vessel_name"]).strip().upper())

                pda_stat = str(r.get("pda_status") or "").strip().lower()
                if pda_stat == "completed":
                    completed_pda += 1
                elif pda_stat in UNDER_PROCESS_STATUSES:
                    under_process_pda += 1
                
                fda_stat = str(r.get("fda_status") or "").strip().lower()
                if fda_stat == "completed":
                    completed_fda += 1
                elif fda_stat in UNDER_PROCESS_STATUSES:
                    under_process_fda += 1

            # --- NEW PROCESS: Financial Totals & Savings (from all_records) ---
            pda_total = 0.0
            fda_total = 0.0
            pda_sav = 0.0
            fda_sav = 0.0
            tot_sav = 0.0

            for r in all_records:
                try:
                    pda_val = float(str(r.get("pda_amount") or "0").replace(",", ""))
                except Exception:
                    pda_val = 0.0
                pda_total += pda_val
                
                try:
                    fda_val = float(str(r.get("fda_amount") or "0").replace(",", ""))
                except Exception:
                    fda_val = 0.0
                fda_total += fda_val
                
                pda_sav += float(r.get("loss_prevention_pda") or 0.0)
                fda_sav += float(r.get("loss_prevention_fda") or 0.0)
                tot_sav += float(r.get("total_loss_prevented") or 0.0)

            return {
                "country_list": list(c_set),
                "port_list": list(p_set),
                "vessel_list": list(v_set),
                "countries": len(c_set),
                "ports": len(p_set),
                "vessels": len(v_set),
                "total_pda": completed_pda + under_process_pda,
                "completed_pda": completed_pda,
                "under_process_pda": under_process_pda,
                "total_fda": completed_fda + under_process_fda,
                "completed_fda": completed_fda,
                "under_process_fda": under_process_fda,
                "yet_to_process": 0,
                "pdasavings": pda_sav,
                "fdasavings": fda_sav,
                "overallsavingsamount": tot_sav,
                "fda_total_amount": fda_total,
                "pda_total_amount": pda_total,
                "percentage_savings": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_fda": round((fda_sav / (fda_total + fda_sav) * 100), 2) if (fda_total + fda_sav) > 0 else 0.0,
                "percentage_savings_pda": round((pda_sav / (pda_total + pda_sav) * 100), 2) if (pda_total + pda_sav) > 0 else 0.0,
                "pda_completed_no_fda": 0
            }
        except Exception as e:
            db.rollback()
            return None


    @staticmethod
    def _merge_summaries(prod_summary, kamba_summary):
        """Merge prod and kamba summary dicts by adding counts together."""
        if not kamba_summary:
            return prod_summary
        if not prod_summary:
            return kamba_summary

        merged = dict(prod_summary)
        
        # Get true unique counts by merging lists as sets
        if "country_list" in prod_summary and "country_list" in kamba_summary:
            merged["countries"] = len(set(prod_summary["country_list"] + kamba_summary["country_list"]))
        else:
            merged["countries"] = float(prod_summary.get("countries") or 0) + float(kamba_summary.get("countries") or 0)
            
        if "port_list" in prod_summary and "port_list" in kamba_summary:
            merged["ports"] = len(set(prod_summary["port_list"] + kamba_summary["port_list"]))
        else:
            merged["ports"] = float(prod_summary.get("ports") or 0) + float(kamba_summary.get("ports") or 0)
            
        if "vessel_list" in prod_summary and "vessel_list" in kamba_summary:
            merged["vessels"] = len(set(prod_summary["vessel_list"] + kamba_summary["vessel_list"]))
        else:
            merged["vessels"] = float(prod_summary.get("vessels") or 0) + float(kamba_summary.get("vessels") or 0)

        additive_keys = [
            "total_pda", "completed_pda", "under_process_pda",
            "total_fda", "completed_fda", "under_process_fda", "yet_to_process",
            "pdasavings", "fdasavings", "overallsavingsamount",
            "fda_total_amount", "pda_total_amount", "pda_completed_no_fda"
        ]
        for key in additive_keys:
            prod_val = float(prod_summary.get(key) or 0)
            kamba_val = float(kamba_summary.get(key) or 0)
            merged[key] = prod_val + kamba_val

        # Recalculate percentage fields
        pda_total = float(merged.get("pda_total_amount") or 0)
        fda_total = float(merged.get("fda_total_amount") or 0)
        overall_savings = float(merged.get("overallsavingsamount") or 0)
        pda_sav = float(merged.get("pdasavings") or 0)
        fda_sav = float(merged.get("fdasavings") or 0)
        merged["percentage_savings"] = round((overall_savings / pda_total * 100), 2) if pda_total > 0 else 0.0
        merged["percentage_savings_fda"] = round((fda_sav / (fda_total + fda_sav) * 100), 2) if (fda_total + fda_sav) > 0 else 0.0
        merged["percentage_savings_pda"] = round((pda_sav / (pda_total + pda_sav) * 100), 2) if (pda_total + pda_sav) > 0 else 0.0

        return merged


    @staticmethod
    def get_savings_graph(client_ids: List[int], from_date, to_date, data_source: Optional[str] = "all", db: Session = None):
        """
        Get month-wise PDA and FDA savings for the last 6 months using:
        - FDA savings date: fda_receive_date (fallback to updated_on)
        - PDA savings date: updated_on (fallback to created_on)
        """
        if db is None:
            raise ValueError("Database session (db) cannot be None")

        from sqlalchemy import text
        from datetime import datetime
        from dateutil.relativedelta import relativedelta
        from dateutil import parser
        from app.db import SCHEMA_NAME

        ds = (data_source or "all").lower()
        six_months_ago = (datetime.now() - relativedelta(months=5)).replace(day=1, hour=0, minute=0, second=0, microsecond=0)

        expanded_client_ids = get_all_prod_ids_for_client_list(client_ids) if client_ids else None

        # Initialize last 6 months map
        monthly_data = {}
        for i in range(5, -1, -1):
            month_date = datetime.now() - relativedelta(months=i)
            month_str = month_date.strftime("%b")
            month_key = month_date.strftime("%Y-%m")
            monthly_data[month_key] = {
                "month": month_str,
                "pda_savings": 0.0,
                "fda_savings": 0.0
            }

        # 1. Query Production PDA Savings (fixed td.created_on)
        if ds not in ["kamba", "excel"]:
            pda_where = ["COALESCE(pda.updated_on, td.created_on) >= :six_months_ago"]
            params = {"six_months_ago": six_months_ago}

            if expanded_client_ids:
                int_cids = [int(x) for x in expanded_client_ids if str(x).isdigit()]
                if int_cids:
                    pda_where.append("td.client_id = ANY(:cids)")
                    params["cids"] = int_cids

            pda_sql = f'''
                SELECT 
                    to_char(COALESCE(pda.updated_on, td.created_on), 'YYYY-MM') as month_key,
                    SUM(COALESCE(vw.loss_prevention_pda, 0)) as pda_savings
                FROM {SCHEMA_NAME}.txn_pda pda
                JOIN {SCHEMA_NAME}.txn_disbursement td ON pda.disbursement_seq = td.disbursement_seq
                JOIN {SCHEMA_NAME}.vw_dashboard_data vw ON td.disbursement_seq = vw.disbursement_seq
                WHERE {" AND ".join(pda_where)} AND COALESCE(vw.loss_prevention_pda, 0) > 0
                GROUP BY to_char(COALESCE(pda.updated_on, td.created_on), 'YYYY-MM')
            '''
            
            pda_records = db.execute(text(pda_sql), params).mappings().all()
            for r in pda_records:
                mk = r["month_key"]
                if mk in monthly_data:
                    monthly_data[mk]["pda_savings"] += float(r["pda_savings"] or 0)

        # 2. Query Production FDA Savings (fixed td.created_on)
        if ds not in ["kamba", "excel"]:
            fda_where = ["COALESCE(fda.fda_receive_date, fda.updated_on, td.created_on) >= :six_months_ago"]
            params = {"six_months_ago": six_months_ago}

            if expanded_client_ids:
                int_cids = [int(x) for x in expanded_client_ids if str(x).isdigit()]
                if int_cids:
                    fda_where.append("td.client_id = ANY(:cids)")
                    params["cids"] = int_cids

            fda_sql = f'''
                SELECT 
                    to_char(COALESCE(fda.fda_receive_date, fda.updated_on, td.created_on), 'YYYY-MM') as month_key,
                    SUM(COALESCE(vw.loss_prevention_fda, 0)) as fda_savings
                FROM {SCHEMA_NAME}.txn_fda fda
                JOIN {SCHEMA_NAME}.txn_disbursement td ON fda.disbursement_seq = td.disbursement_seq
                JOIN {SCHEMA_NAME}.vw_dashboard_data vw ON td.disbursement_seq = vw.disbursement_seq
                WHERE {" AND ".join(fda_where)} AND COALESCE(vw.loss_prevention_fda, 0) > 0
                GROUP BY to_char(COALESCE(fda.fda_receive_date, fda.updated_on, td.created_on), 'YYYY-MM')
            '''
            
            fda_records = db.execute(text(fda_sql), params).mappings().all()
            for r in fda_records:
                mk = r["month_key"]
                if mk in monthly_data:
                    monthly_data[mk]["fda_savings"] += float(r["fda_savings"] or 0)

        # 3. Query Excel / Ankkumam Records
        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        ankkumam_clients = []
        if client_ids:
            c_list = client_ids if isinstance(client_ids, list) else [client_ids]
            for cid in c_list:
                if cid and str(cid).isdigit() and int(cid) in prod_cid_to_excel:
                    ankkumam_clients.append(prod_cid_to_excel[int(cid)])
        else:
            ankkumam_clients = list(excel_to_prod_cid.keys())

        if ankkumam_clients and ds in ["all", "excel"]:
            class DummyDataRequest:
                tableFilter = None
                pageSize = -1
                page = 1
                clientId = None
            
            deduped, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, DummyDataRequest(), False, True, 0, db, only_completed_fda=False
            )
            for r in deduped:
                pda_sav = float(r.get("loss_prevention_pda") or 0.0)
                fda_sav = float(r.get("loss_prevention_fda") or 0.0)

                # Process PDA Savings Date Fallback
                if pda_sav > 0:
                    raw_pda_date = str(r.get("pda_received_date") or r.get("pda_processing_date") or r.get("etd") or "").strip()
                    if raw_pda_date and raw_pda_date.lower() not in ["n/a", "none"]:
                        try:
                            pda_dt = parser.parse(raw_pda_date, dayfirst=True)
                            if pda_dt >= six_months_ago:
                                mk = pda_dt.strftime("%Y-%m")
                                if mk in monthly_data:
                                    monthly_data[mk]["pda_savings"] += pda_sav
                        except Exception:
                            pass

                # Process FDA Savings Date Fallback
                if fda_sav > 0:
                    raw_fda_date = str(r.get("fda_received_date") or r.get("fda_processing_date") or r.get("etd") or "").strip()
                    if raw_fda_date and raw_fda_date.lower() not in ["n/a", "none"]:
                        try:
                            fda_dt = parser.parse(raw_fda_date, dayfirst=True)
                            if fda_dt >= six_months_ago:
                                mk = fda_dt.strftime("%Y-%m")
                                if mk in monthly_data:
                                    monthly_data[mk]["fda_savings"] += fda_sav
                        except Exception:
                            pass

        sorted_keys = sorted(list(monthly_data.keys()))
        result_list = [monthly_data[k] for k in sorted_keys]
        
        return {"data": result_list}

    @staticmethod
    def get_dashboard_hover_stats(client_ids: List[int], from_date, to_date, data_source: Optional[str] = "all", payload=None, db: Session = None):
        if db is None:
            raise ValueError("Database session (db) cannot be None")

        from collections import Counter
        from app.dto.dasboard_response_dto import (
            DashboardHoverStatsResponseDTO, HoverCountriesDTO, HoverPortsDTO, 
            HoverPortCallsDTO, HoverVesselsDTO, HoverFdaDTO, HoverTopItemDTO
        )
        
        is_excel_client = False
        is_kamba_client = False
        if client_ids:
            try:
                c_list = client_ids if isinstance(client_ids, list) else [client_ids]
                c_ids = [int(x) for x in c_list if str(x).isdigit()]
                is_excel_client = 84 in c_ids and len(c_ids) == 1
                is_kamba_client = 85 in c_ids and len(c_ids) == 1
            except (ValueError, TypeError):
                pass

        ds = (data_source or "all").lower()

        country_counter = Counter()
        port_counter = Counter()
        vessel_counter = Counter()
        
        total_pda = 0
        total_fda = 0
        pda_completed = 0
        pda_under_process = 0
        fda_completed = 0
        fda_under_process = 0
        total_valid_port_calls = 0

        # Check for Excel/Ankkumam client mapping
        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        ankkumam_clients = []
        if client_ids:
            c_list = client_ids if isinstance(client_ids, list) else [client_ids]
            for cid in c_list:
                if cid and str(cid).isdigit() and int(cid) in prod_cid_to_excel:
                    ankkumam_clients.append(prod_cid_to_excel[int(cid)])
                elif str(cid) == '85' and "ALGHAF" in excel_to_prod_cid:
                    ankkumam_clients.append("ALGHAF")

        def process_ankkumam(ankkumam_cls):
            nonlocal total_pda, total_fda, pda_completed, pda_under_process, fda_completed, fda_under_process, total_valid_port_calls
            if not ankkumam_cls:
                return
            
            class FilteredDataRequest:
                tableFilter = getattr(payload, 'tableFilter', None) if payload else None
                monthRange = getattr(payload, 'monthRange', None) if payload else None
                yearRange = getattr(payload, 'yearRange', None) if payload else None
                pageSize = -1
                page = 1
                clientId = None
            
            raw_records, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_cls, FilteredDataRequest(), False, True, 0, db, only_completed_fda=True
            )

            UNDER_PROCESS_STATUSES = {"under process", "in process", "in processs", "unixting"}

            for r in raw_records:
                c_name = str(r.get("country_name") or "N/A").strip().upper()
                p_name = str(r.get("port_name") or "N/A").strip().upper()
                v_name = str(r.get("vessel_name") or "N/A").strip().upper()
                
                fda_stat = str(r.get("fda_status") or "").strip().lower()
                pda_stat = str(r.get("pda_status") or "").strip().lower()
                
                has_active_pda_or_fda = (fda_stat == "completed" or fda_stat in UNDER_PROCESS_STATUSES) or \
                                        (pda_stat == "completed" or pda_stat in UNDER_PROCESS_STATUSES)
                
                if has_active_pda_or_fda:
                    total_valid_port_calls += 1
                    if c_name != "N/A": country_counter[c_name] += 1
                    if p_name != "N/A": port_counter[p_name] += 1
                    if v_name != "N/A": vessel_counter[v_name] += 1

                if pda_stat == "completed":
                    total_pda += 1
                    pda_completed += 1
                elif pda_stat in UNDER_PROCESS_STATUSES:
                    total_pda += 1
                    pda_under_process += 1

                if fda_stat == "completed":
                    total_fda += 1
                    fda_completed += 1
                elif fda_stat in UNDER_PROCESS_STATUSES:
                    total_fda += 1
                    fda_under_process += 1

        # Direct Routing: Pure Ankkumam/Excel Clients
        if ankkumam_clients and not is_kamba_client and ds not in ["standard", "excel"]:
            process_ankkumam(ankkumam_clients)
        else:
            # Standard Production Database Query
            if not is_kamba_client and ds != "kamba" and ds != "excel":
                from sqlalchemy import text
                from app.db import SCHEMA_NAME
                
                expanded_client_ids = get_all_prod_ids_for_client_list(client_ids) if client_ids else None
                
                base_where = ["1=1"]
                params = {}
                if expanded_client_ids:
                    int_cids = [int(x) for x in expanded_client_ids if str(x).isdigit()]
                    if int_cids:
                        base_where.append("td.client_id = ANY(:cids)")
                        params["cids"] = int_cids
                if from_date:
                    base_where.append("td.etd::date >= :from_date::date")
                    params["from_date"] = from_date
                if to_date:
                    base_where.append("td.etd::date <= :to_date::date")
                    params["to_date"] = to_date
                
                # Apply payload tableFilters
                if payload and getattr(payload, 'tableFilter', None):
                    tf = payload.tableFilter
                    if getattr(tf, 'vessel', None) and len(tf.vessel) > 0:
                        base_where.append("UPPER(v.name) = ANY(:vessel_names)")
                        params["vessel_names"] = [str(x).upper() for x in tf.vessel]
                    if getattr(tf, 'country', None) and len(tf.country) > 0:
                        base_where.append("UPPER(c.name) = ANY(:country_names)")
                        params["country_names"] = [str(x).upper() for x in tf.country]
                    if getattr(tf, 'port', None) and len(tf.port) > 0:
                        base_where.append("UPPER(p.name) = ANY(:port_names)")
                        params["port_names"] = [str(x).upper() for x in tf.port]

                base_where_sql = " AND ".join(base_where)
                
                sql = f'''
                    SELECT 
                        td.disbursement_seq,
                        UPPER(c.name) as country, 
                        UPPER(p.name) as port, 
                        UPPER(v.name) as vessel,
                        fda.status as fda_status,
                        pda.status as pda_status,
                        fda.fda_id as fda_id
                    FROM {SCHEMA_NAME}.txn_disbursement td
                    LEFT JOIN {SCHEMA_NAME}.ma_country c ON td.country_id = c.country_id
                    LEFT JOIN {SCHEMA_NAME}.ma_port p ON td.port_id = p.port_id
                    LEFT JOIN {SCHEMA_NAME}.ma_vessels v ON td.vsl_id = v.vsl_id
                    LEFT JOIN {SCHEMA_NAME}.txn_fda fda ON td.disbursement_seq = fda.disbursement_seq AND (fda.state IS NULL OR fda.state <> 'D')
                    LEFT JOIN {SCHEMA_NAME}.txn_pda pda ON td.disbursement_seq = pda.disbursement_seq AND (pda.state IS NULL OR pda.state <> 'D')
                    WHERE {base_where_sql}
                '''
                
                prod_records = db.execute(text(sql), params).mappings().all()
                for r in prod_records:
                    c_name = r.get("country") or "N/A"
                    p_name = r.get("port") or "N/A"
                    v_name = r.get("vessel") or "N/A"
                    
                    pda_st = r.get("pda_status")
                    fda_st = r.get("fda_status")
                    has_fda = fda_st is not None and r.get("fda_id") is not None

                    has_pda_or_fda = (pda_st is not None) or has_fda
                    
                    if has_pda_or_fda:
                        total_valid_port_calls += 1
                        if c_name != "N/A": country_counter[c_name] += 1
                        if p_name != "N/A": port_counter[p_name] += 1
                        if v_name != "N/A": vessel_counter[v_name] += 1
                    
                    if pda_st is not None:
                        total_pda += 1
                        if pda_st == 7:
                            pda_completed += 1
                        else:
                            pda_under_process += 1
                    
                    # Strictly count valid FDA records matching fn_dashboard_summary
                    if has_fda:
                        total_fda += 1
                        if fda_st == 7:
                            fda_completed += 1
                        else:
                            fda_under_process += 1

            # Execute fallback ONLY when query is global and not specific to a production client
            if not is_excel_client and ds != "excel" and ds != "standard" and not client_ids:
                ankkumam_cls = list(excel_to_prod_cid.keys())
                process_ankkumam(ankkumam_cls)
            
        top_countries = [HoverTopItemDTO(name=k, count=v) for k, v in country_counter.most_common(5)]
        top_ports = [HoverTopItemDTO(name=k, count=v) for k, v in port_counter.most_common(5)]
        top_vessels = [HoverTopItemDTO(name=k, count=v) for k, v in vessel_counter.most_common(5)]
        
        unique_ports = len(port_counter)
        unique_countries = len(country_counter)
        unique_vessels = len(vessel_counter)

        total_port_calls = total_valid_port_calls
        avg_calls_per_port = round(total_port_calls / unique_ports, 2) if unique_ports > 0 else 0.0
        
        fda_awaiting = max(0, total_port_calls - (fda_completed + fda_under_process))
        fda_completion_pct = round((fda_completed / total_fda) * 100, 2) if total_fda > 0 else 0.0

        return DashboardHoverStatsResponseDTO(
            countries=HoverCountriesDTO(
                total_countries=unique_countries,
                top_countries=top_countries
            ),
            ports=HoverPortsDTO(
                total_ports=unique_ports,
                top_ports=top_ports
            ),
            port_calls=HoverPortCallsDTO(
                total_port_calls=total_port_calls,
                average_calls_per_port=avg_calls_per_port,
                top_ports=top_ports
            ),
            vessels=HoverVesselsDTO(
                total_vessels=unique_vessels,
                active_vessels=fda_under_process,
                completed_vessels=fda_completed,
                top_vessels=top_vessels
            ),
            fda=HoverFdaDTO(
                total_fda=total_fda,
                completed=fda_completed,
                in_progress=fda_under_process,
                awaiting_fda=fda_awaiting,
                completion_percentage=fda_completion_pct
            )
        )

    @staticmethod
    def get_dashboard_summary(client_ids: List[int], from_date, to_date, data_source: Optional[str] = "all", db: Session = None):
        """
        Get dashboard summary based on client_ids and data_source.
        When client_ids is null/empty ("All Clients"), merges production DB summary with clean Ankkumam summary.
        """
        is_excel_client = False
        is_kamba_client = False
        if client_ids:
            try:
                c_ids = [int(x) for x in client_ids if str(x).isdigit()]
                is_excel_client = 84 in c_ids and len(c_ids) == 1
                is_kamba_client = 85 in c_ids and len(c_ids) == 1
            except (ValueError, TypeError):
                is_excel_client = False
                is_kamba_client = False

        ds = (data_source or "all").lower()

        # Backward compatibility: client_id=85 (Kamba)
        if is_kamba_client or (ds in ["kamba", "mysql"] and client_ids and 85 in [int(x) for x in client_ids if str(x).isdigit()] and len(client_ids) == 1):
            kamba_summary = DashboardRepository._get_kamba_summary_for_companies(None, db)
            ankkumam_summary = DashboardRepository._get_ankkumam_summary_for_companies(["ALGHAF"], db)
            if kamba_summary and ankkumam_summary:
                return DashboardRepository._merge_summaries(kamba_summary, ankkumam_summary)
            elif kamba_summary:
                return kamba_summary
            elif ankkumam_summary:
                return ankkumam_summary
            else:
                return {}

        if is_excel_client or ds == "excel":
            try:
                with db.begin_nested():
                    v_cnt = db.query(func.count(func.distinct(ExcelVessel.vessel_name))).scalar() or 0
                    c_cnt = db.query(func.count(func.distinct(ExcelCountry.country_name))).scalar() or 0
                    p_cnt = db.query(func.count(func.distinct(ExcelPort.port_name))).scalar() or 0
                    tot_fda = db.query(func.count(ExcelDisbursementsTotalPortCost.id)).scalar() or 0
                    tot_amt = db.query(func.sum(ExcelDisbursementsTotalPortCost.final_amt)).scalar() or 0.0
                    return {
                        "countries": c_cnt,
                        "ports": p_cnt,
                        "vessels": v_cnt,
                        "total_pda": 0,
                        "completed_pda": 0,
                        "under_process_pda": 0,
                        "total_fda": tot_fda,
                        "completed_fda": tot_fda,
                        "under_process_fda": 0,
                        "yet_to_process": 0,
                        "pdasavings": 0.0,
                        "fdasavings": 0.0,
                        "overallsavingsamount": 0.0,
                        "fda_total_amount": float(tot_amt),
                        "percentage_savings": 0.0,
                        "percentage_savings_fda": 0.0,
                        "percentage_savings_pda": 0.0,
                        "pda_total_amount": 0.0,
                        "pda_completed_no_fda": 0
                    }
            except Exception:
                db.rollback()
                return {}

        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        ankkumam_clients = []
        if client_ids:
            c_list = client_ids if isinstance(client_ids, list) else [client_ids]
            for cid in c_list:
                if cid and str(cid).isdigit() and int(cid) in prod_cid_to_excel:
                    ankkumam_clients.append(prod_cid_to_excel[int(cid)])
                elif str(cid) == '85' and "ALGHAF" in excel_to_prod_cid:
                    ankkumam_clients.append("ALGHAF")
        else:
            # Client selection is NULL ("All Clients")
            ankkumam_clients = list(excel_to_prod_cid.keys())

        # If a single specific Excel client is requested, return strictly its summary
        if client_ids and ankkumam_clients and not is_kamba_client and ds not in ["standard", "excel"]:
            ankkumam_summary = DashboardRepository._get_ankkumam_summary_for_companies(ankkumam_clients, db)
            if ankkumam_summary:
                ankkumam_summary.pop("vessel_list", None)
                ankkumam_summary.pop("country_list", None)
                ankkumam_summary.pop("port_list", None)
                return ankkumam_summary

        # Standard Production Query
        expanded_client_ids = client_ids
        if client_ids:
            expanded_client_ids = get_all_prod_ids_for_client_list(client_ids)

        query = text(f"""
            SELECT *
            FROM {SCHEMA_NAME}.fn_dashboard_summary(:client_ids, :from_date, :to_date)
        """)
        
        result = db.execute(
            query,
            {
                "client_ids": expanded_client_ids,
                "from_date": from_date,
                "to_date": to_date
            }
        ).mappings().first()
        
        prod_summary = dict(result) if result else {}

        # Merge with clean Ankkumam dataset if "All Clients" (client_ids is null)
        if ankkumam_clients and client_ids is None:
            ankkumam_summary = DashboardRepository._get_ankkumam_summary_for_companies(ankkumam_clients, db)
            if ankkumam_summary:
                merged = DashboardRepository._merge_summaries(prod_summary, ankkumam_summary)
                merged.pop("vessel_list", None)
                merged.pop("country_list", None)
                merged.pop("port_list", None)
                return merged

        if prod_summary:
            p_sav = float(prod_summary.get("pdasavings") or 0)
            f_sav = float(prod_summary.get("fdasavings") or 0)
            pda_tot = float(prod_summary.get("pda_total_amount") or 0)
            fda_tot = float(prod_summary.get("fda_total_amount") or 0)
            prod_summary["percentage_savings_fda"] = round((f_sav / (fda_tot + f_sav) * 100), 2) if (fda_tot + f_sav) > 0 else 0.0
            prod_summary["percentage_savings_pda"] = round((p_sav / (pda_tot + p_sav) * 100), 2) if (pda_tot + p_sav) > 0 else 0.0

        return prod_summary
    
    @staticmethod
    def get_client_ids_by_names(client_names: List[str], db: Session):
        """
        Fetch client IDs by names.
        """
        return db.query(MaCompany.company_id).filter(
            MaCompany.company_name.in_(client_names),
            MaCompany.company_type_id == 2,
            MaCompany.status == 'Y'
        ).all()
    
    @staticmethod
    def get_fda_stats(clientId: List[int] = None, db: Session = None):
        """
        Get FDA statistics (min, avg, max amounts).
        """
        query = db.query(
            func.min((VwFdaProcessingDetails.fda_amount)).label('min_amount'),
            func.avg((VwFdaProcessingDetails.fda_amount)).label('avg_amount'),
            func.max((VwFdaProcessingDetails.fda_amount)).label('max_amount'),
            func.count(VwFdaProcessingDetails.client_id).label('total_count')
        )
        
        if clientId:
            query = query.filter(VwFdaProcessingDetails.client_id.in_(clientId))
        
        return query.first()
    @staticmethod
    def _get_ankkumam_records(ankkumam_company_ids, data_request, is_meraki_user, is_all_records, offset, db, only_completed_fda: bool = False):
        ankkumam_records = []
        try:
            ids_str = ",".join(f"'{c}'" for c in ankkumam_company_ids)
            where_clauses = [f"d.client IN ({ids_str})"]
            params = {}

            if only_completed_fda:
                where_clauses.append("LOWER(d.fda_status) = 'completed'")

            if data_request.tableFilter:
                tf = data_request.tableFilter
                if tf.vessel and len(tf.vessel) > 0:
                    where_clauses.append("UPPER(d.vessel) = ANY(:vessels)")
                    params["vessels"] = [str(x).upper() for x in tf.vessel]
                if tf.country and len(tf.country) > 0:
                    where_clauses.append("UPPER(d.country) = ANY(:countries)")
                    params["countries"] = [str(x).upper() for x in tf.country]
                if tf.port and len(tf.port) > 0:
                    where_clauses.append("UPPER(d.port) = ANY(:ports)")
                    params["ports"] = [str(x).upper() for x in tf.port]
                if getattr(tf, 'purpose', None) and len(tf.purpose) > 0:
                    where_clauses.append("UPPER(d.purpose) = ANY(:purpose_names)")
                    params["purpose_names"] = [str(x).upper() for x in tf.purpose]    

            current_year = datetime.now().year
            has_year_filter = False
            if getattr(data_request, 'yearRange', None):
                if data_request.yearRange.from_year:
                    where_clauses.append("EXTRACT(YEAR FROM d.etd) >= :from_year")
                    params["from_year"] = int(data_request.yearRange.from_year)
                    has_year_filter = True
                if data_request.yearRange.to_year:
                    where_clauses.append("EXTRACT(YEAR FROM d.etd) <= :to_year")
                    params["to_year"] = int(data_request.yearRange.to_year)
                    has_year_filter = True

            if getattr(data_request, 'monthRange', None):
                if data_request.monthRange.from_date:
                    where_clauses.append("d.etd >= :m_from_date")
                    params["m_from_date"] = data_request.monthRange.from_date
                if data_request.monthRange.to_date:
                    where_clauses.append("d.etd <= :m_to_date")
                    params["m_to_date"] = data_request.monthRange.to_date

            where_sql = " AND ".join(where_clauses)
            
            count_sql = f"SELECT COUNT(*) FROM ankkumam_data_excel.data d WHERE {where_sql}"
            ankkumam_count = db.execute(text(count_sql), params).scalar() or 0

            data_sql = f"""
                SELECT 
                    d.mda_id AS disbursement_seq,
                    d.vessel AS vessel_name,
                    d.country AS country_name,
                    d.port AS port_name,
                    d.purpose AS purpose_name,
                    d.etd AS etd,
                    d.pda_amount,
                    d.fda_amount_usd,
                    d.voyage,
                    d.pda_status, d.fda_status,
                    d.reason, d.savings_at_pda_usd, d.savings_at_fda_usd, d.total_savings_usd,
                    d.client
                FROM ankkumam_data_excel.data d
                WHERE {where_sql}
                ORDER BY d.etd DESC NULLS LAST
            """
            
            if not is_all_records:
                data_sql += " LIMIT :limit OFFSET :offset"
                params["limit"] = data_request.pageSize
                params["offset"] = offset

            rows = db.execute(text(data_sql), params).mappings().all()
            
            # Fetch vessel stats from PROD schema (using normalized matching)
            vessel_names = list(set([r.get("vessel_name") for r in rows if r.get("vessel_name")]))
            vessel_stats_map = {}
            if vessel_names:
                from app.models.vessels import MaVessel
                
                norm_vessels = [str(v).upper().split(" EX ")[0].replace(" ", "") for v in vessel_names]
                norm_col = func.replace(func.split_part(func.upper(MaVessel.name), ' EX ', 1), ' ', '')
                
                stats = db.query(
                    norm_col.label("norm_vessel"),
                    func.max(MaVessel.loa).label("loa"),
                    func.max(MaVessel.grt).label("grt"),
                    func.max(MaVessel.rgrt).label("rgrt"),
                    func.max(MaVessel.nrt).label("nrt")
                ).filter(norm_col.in_(norm_vessels)).group_by(norm_col).all()
                
                for s in stats:
                    vessel_stats_map[s.norm_vessel] = {
                        "loa": s.loa if s.loa is not None else "-",
                        "grt": s.grt if s.grt is not None else "-",
                        "rgrt": s.rgrt if s.rgrt is not None else "-",
                        "nrt": s.nrt if s.nrt is not None else "-"
                    }

            _, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
            
            for r in rows:
                v_name = r.get("vessel_name")
                norm_v = str(v_name).upper().split(" EX ")[0].replace(" ", "") if v_name else ""
                v_stats = vessel_stats_map.get(norm_v, {"loa": "-", "grt": "-", "rgrt": "-", "nrt": "-"})

                etd_val = r.get("etd")
                etd_str = etd_val.isoformat() if hasattr(etd_val, 'isoformat') else str(etd_val or "")
                
                try: pda_amt = abs(float(str(r["pda_amount"]).replace(",", ""))) if r["pda_amount"] is not None else 0.0
                except: pda_amt = 0.0
                
                try: fda_amt = abs(float(str(r["fda_amount_usd"]).replace(",", ""))) if r["fda_amount_usd"] is not None else 0.0
                except: fda_amt = 0.0
                
                try: lp_pda = abs(float(str(r["savings_at_pda_usd"]).replace(",", ""))) if r["savings_at_pda_usd"] is not None else 0.0
                except: lp_pda = 0.0
                
                try: lp_fda = abs(float(str(r["savings_at_fda_usd"]).replace(",", ""))) if r["savings_at_fda_usd"] is not None else 0.0
                except: lp_fda = 0.0
                
                try: tot_lp = abs(float(str(r["total_savings_usd"]).replace(",", ""))) if r["total_savings_usd"] is not None else 0.0
                except: tot_lp = 0.0

                c_id = excel_to_prod_cid.get(str(r.get("client")), 85)

                ankkumam_records.append({
                    "disbursement_seq": r['disbursement_seq'],
                    "client_id": c_id,
                    "etd": etd_str,
                    "vessel_name": r["vessel_name"] or f"Vessel-{r['disbursement_seq']}",
                    "country_id": None,
                    "country_name": r["country_name"] or "N/A",
                    "port_id": None,
                    "port_name": r["port_name"] or "N/A",
                    "purpose": r.get("purpose_name") or "-",
                    "loa": v_stats["loa"], "grt": v_stats["grt"], "rgrt": v_stats["rgrt"], "nrt": v_stats["nrt"],
                    "loss_prevention_pda": lp_pda,
                    "loss_prevention_fda": lp_fda,
                    "total_loss_prevented": tot_lp,
                    "loss_prevented_reason": r.get("reason"),
                    "pda_status": "Completed" if str(r.get("pda_status") or "").strip().lower() == "completed" else "N/A",
                    "fda_status": "Completed" if str(r.get("fda_status") or "").strip().lower() == "completed" else "Under process",
                    "fda_amount": fda_amt,
                    "pda_amount": pda_amt,
                    "manual_fda_amount": "-",
                    "manual_pda_amount": "-",
                    "voyage_no": r.get("voyage") or "-",
                    "vessel_type": "-", "port_func": "-",
                    "arrival_local": etd_str or "-", "departure_local": "-",
                    "port_days": "-", "agent": "-", "cargo_grade": "-", "counterparty_short_name": "-", "imo_no": "-",
                    "advance_amt": pda_amt if pda_amt > 0 else "-",
                    "final_amt": fda_amt if fda_amt > 0 else "-",
                    "advance_amount_remitted": "-",
                    "outstanding_balance": "-",
                    "remark": "-",
                    "data_source": "ankkumam"
                })
            return ankkumam_records, ankkumam_count
        except Exception as e:
            db.rollback()
            import traceback
            with open("/tmp/ankkumam_error.log", "w") as f:
                f.write(traceback.format_exc())
            print(f"Error computing deduped ankkumam summary: {e}")
            return [], 0

    @staticmethod
    def get_fda_processing_details(data_request, db: Session, is_meraki_user: bool = False):
        """
        Get FDA processing details with pagination.
        For clients with kamba mapping, merges records from both prod and kamba_data_prod.
        """
        is_all_records = data_request.pageSize <= 0 or data_request.pageSize == -1
        if not is_all_records and (data_request.page < 1 or data_request.pageSize < 1):
            raise ValueError("Page number and page size must be greater than 0")

        raw_cids = data_request.clientId if data_request.clientId is not None else data_request.client_id
        client_ids_list = []
        if raw_cids is not None:
            if isinstance(raw_cids, list):
                client_ids_list = [str(x) for x in raw_cids]
            else:
                client_ids_list = [str(raw_cids)]

        has_excel_client = False
        has_kamba_client = False
        has_other = False
        if client_ids_list:
            for cid in client_ids_list:
                if str(cid) == "84":
                    has_excel_client = True
                elif str(cid) == "85":
                    has_kamba_client = True
                else:
                    has_other = True

        # Backward compatibility
        if has_kamba_client and not has_other and not has_excel_client:
            ds = "ankkumam"
        elif has_excel_client and not has_other and not has_kamba_client:
            ds = "excel"
        else:
            ds = "standard"

        offset = 0 if is_all_records else (data_request.page - 1) * data_request.pageSize

        if ds in ["ankkumam", "kamba", "mysql"]:
            return DashboardRepository._get_ankkumam_records(
                list(DashboardRepository._get_dynamic_client_mapping(db)[1].keys()), data_request, is_meraki_user, is_all_records, offset, db, only_completed_fda=True
            )

        if ds == "excel":
            excel_records = []
            excel_count = 0
            try:
                with db.begin_nested():
                    q = db.query(
                        ExcelDisbursementsTotalPortCost.id.label("disbursement_seq"),
                        ExcelVessel.vessel_name,
                        ExcelCountry.country_name,
                        ExcelPort.port_name,
                        ExcelDisbursementsTotalPortCost.arrival_local.label("etd"),
                        ExcelDisbursementsTotalPortCost.advance_amt.label("pda_amount"),
                        ExcelDisbursementsTotalPortCost.final_amt.label("fda_amount"),
                        ExcelDisbursementsTotalPortCost.grt,
                        ExcelDisbursementsTotalPortCost.dwt,
                        ExcelDisbursementsTotalPortCost.vendor_short_name.label("agent"),
                        ExcelDisbursementsTotalPortCost.cargo_grades.label("cargo_grade"),
                        ExcelDisbursementsTotalPortCost.counterparty_short_name,
                        ExcelDisbursementsTotalPortCost.voyage_no,
                        ExcelDisbursementsTotalPortCost.vessel_type,
                        ExcelDisbursementsTotalPortCost.port_func,
                        ExcelDisbursementsTotalPortCost.departure_local,
                        ExcelDisbursementsTotalPortCost.port_days,
                        ExcelDisbursementsTotalPortCost.imo_no,
                        ExcelDisbursementsTotalPortCost.advance_amount_remitted,
                        ExcelDisbursementsTotalPortCost.outstanding_balance,
                        ExcelDisbursementsTotalPortCost.remark
                    ).outerjoin(ExcelVessel, ExcelDisbursementsTotalPortCost.vessel_id == ExcelVessel.id)\
                     .outerjoin(ExcelCountry, ExcelDisbursementsTotalPortCost.country_id == ExcelCountry.id)\
                     .outerjoin(ExcelPort, ExcelDisbursementsTotalPortCost.port_id == ExcelPort.id)

                    if data_request.tableFilter:
                        tf = data_request.tableFilter
                        if tf.vessel:
                            q = q.filter(ExcelVessel.vessel_name.in_(tf.vessel))
                        if tf.country:
                            q = q.filter(ExcelCountry.country_name.in_(tf.country))
                        if tf.port:
                            q = q.filter(ExcelPort.port_name.in_(tf.port))
                        if tf.vessel_type:
                            q = q.filter(ExcelDisbursementsTotalPortCost.vessel_type.in_(tf.vessel_type))
                        if tf.agent:
                            q = q.filter(ExcelDisbursementsTotalPortCost.vendor_short_name.in_(tf.agent))
                        if tf.cargo_grade:
                            q = q.filter(ExcelDisbursementsTotalPortCost.cargo_grades.in_(tf.cargo_grade))
                        if tf.counterparty_short_name:
                            q = q.filter(ExcelDisbursementsTotalPortCost.counterparty_short_name.in_(tf.counterparty_short_name))

                    current_year = datetime.now().year
                    has_year_filter = False
                    if getattr(data_request, 'yearRange', None):
                        if data_request.yearRange.from_year:
                            q = q.filter(extract('year', ExcelDisbursementsTotalPortCost.arrival_local) >= int(data_request.yearRange.from_year))
                            has_year_filter = True
                        if data_request.yearRange.to_year:
                            q = q.filter(extract('year', ExcelDisbursementsTotalPortCost.arrival_local) <= int(data_request.yearRange.to_year))
                            has_year_filter = True

                    excel_count = q.count()
                    
                    def map_excel_row(r):
                        return {
                            "disbursement_seq": r.disbursement_seq,
                            "client_id": None,
                            "etd": r.etd,
                            "vessel_name": r.vessel_name or r.imo_no or f"Vessel-{r.disbursement_seq}",
                            "country_id": None,
                            "country_name": r.country_name or "N/A",
                            "port_id": None,
                            "port_name": r.port_name or "N/A",
                            "loa": None,
                            "grt": float(r.grt) if r.grt is not None else None,
                            "rgrt": None,
                            "nrt": None,
                            "loss_prevention_pda": None,
                            "loss_prevention_fda": None,
                            "total_loss_prevented": None,
                            "loss_prevented_reason": None,
                            "fda_amount": abs(float(r.fda_amount)) if r.fda_amount is not None else 0.0,
                            "pda_amount": abs(float(r.pda_amount)) if r.pda_amount is not None else 0.0,
                            "manual_fda_amount": None,
                            "manual_pda_amount": None,
                            "voyage_no": str(r.voyage_no) if r.voyage_no else None,
                            "vessel_type": r.vessel_type,
                            "port_func": r.port_func,
                            "arrival_local": r.etd.isoformat() if r.etd else None,
                            "departure_local": r.departure_local.isoformat() if r.departure_local else None,
                            "port_days": float(r.port_days) if r.port_days is not None else None,
                            "agent": r.agent,
                            "cargo_grade": r.cargo_grade,
                            "counterparty_short_name": r.counterparty_short_name,
                            "imo_no": r.imo_no,
                            "advance_amt": abs(float(r.pda_amount)) if r.pda_amount is not None else None,
                            "final_amt": abs(float(r.fda_amount)) if r.fda_amount is not None else None,
                            "advance_amount_remitted": float(r.advance_amount_remitted) if r.advance_amount_remitted is not None else None,
                            "outstanding_balance": float(r.outstanding_balance) if r.outstanding_balance is not None else None,
                            "remark": r.remark,
                            "data_source": "excel"
                        }

                    excel_query_obj = q.order_by(desc(ExcelDisbursementsTotalPortCost.arrival_local))
                    if not is_all_records:
                        excel_query_obj = excel_query_obj.offset(offset).limit(data_request.pageSize)
                    excel_fetched = excel_query_obj.all()

                    for r in excel_fetched:
                        excel_records.append(map_excel_row(r))
                    return excel_records, excel_count
            except Exception:
                db.rollback()
                return [], 0

        # --- Standard + Kamba merged flow ---
        # Expand client_ids to include old/merged prod IDs
        expanded_client_ids_list = client_ids_list
        if client_ids_list:
            expanded_client_ids_list = [str(x) for x in get_all_prod_ids_for_client_list(client_ids_list)]

        # We use vw_dashboard_data which contains both FDA and PDA records.
        # Since this API is for the FDA tracker, we must exclude PDA-only records.
        where_clauses = [
            f"EXISTS (SELECT 1 FROM {SCHEMA_NAME}.txn_fda fda WHERE fda.disbursement_seq = vw.disbursement_seq AND fda.status = 7 AND (fda.state IS NULL OR fda.state <> 'D'))"
        ]

        params = {}

        if expanded_client_ids_list:
            try:
                int_cids = [int(x) for x in expanded_client_ids_list if str(x).isdigit()]
            except (ValueError, TypeError):
                int_cids = list(expanded_client_ids_list)
            if int_cids:
                where_clauses.append("vw.client_id = ANY(:client_ids)")
                params["client_ids"] = int_cids

        if getattr(data_request, 'monthRange', None):
            if data_request.monthRange.from_date:
                where_clauses.append("vw.etd::date >= :from_date::date")
                params["from_date"] = data_request.monthRange.from_date
            if data_request.monthRange.to_date:
                where_clauses.append("vw.etd::date <= :to_date::date")
                params["to_date"] = data_request.monthRange.to_date

        current_year = datetime.now().year
        has_year_filter = False
        if getattr(data_request, 'yearRange', None):
            if data_request.yearRange.from_year:
                where_clauses.append("EXTRACT(YEAR FROM vw.etd) >= :from_year")
                params["from_year"] = int(data_request.yearRange.from_year)
                has_year_filter = True
            if data_request.yearRange.to_year:
                where_clauses.append("EXTRACT(YEAR FROM vw.etd) <= :to_year")
                params["to_year"] = int(data_request.yearRange.to_year)
                has_year_filter = True


        if data_request.tableFilter:
            tf = data_request.tableFilter
            if tf.vessel:
                where_clauses.append("UPPER(vw.vessel_name) = ANY(:vessel_names)")
                params["vessel_names"] = [str(x).upper() for x in tf.vessel]
            if tf.country:
                where_clauses.append("UPPER(vw.country_name) = ANY(:country_names)")
                params["country_names"] = [str(x).upper() for x in tf.country]
            if tf.port:
                where_clauses.append("UPPER(vw.port_name) = ANY(:port_names)")
                params["port_names"] = [str(x).upper() for x in tf.port]
            if getattr(tf, 'purpose', None) and len(tf.purpose) > 0:
                where_clauses.append("UPPER(purp.name) = ANY(:purpose_names)")
                params["purpose_names"] = [str(x).upper() for x in tf.purpose]    
            if getattr(tf, 'loa', None):
                if tf.loa.min_value is not None:
                    where_clauses.append("vw.loa >= :loa_min")
                    params["loa_min"] = tf.loa.min_value
                if tf.loa.max_value is not None:
                    where_clauses.append("vw.loa <= :loa_max")
                    params["loa_max"] = tf.loa.max_value
            if getattr(tf, 'nrt', None):
                if tf.nrt.min_value is not None:
                    where_clauses.append("vw.nrt >= :nrt_min")
                    params["nrt_min"] = tf.nrt.min_value
                if tf.nrt.max_value is not None:
                    where_clauses.append("vw.nrt <= :nrt_max")
                    params["nrt_max"] = tf.nrt.max_value
            if getattr(tf, 'grt', None):
                if tf.grt.min_value is not None:
                    where_clauses.append("vw.grt >= :grt_min")
                    params["grt_min"] = tf.grt.min_value
                if tf.grt.max_value is not None:
                    where_clauses.append("vw.grt <= :grt_max")
                    params["grt_max"] = tf.grt.max_value
            if getattr(tf, 'rgrt', None):
                if tf.rgrt.min_value is not None:
                    where_clauses.append("vw.rgrt >= :rgrt_min")
                    params["rgrt_min"] = tf.rgrt.min_value
                if tf.rgrt.max_value is not None:
                    where_clauses.append("vw.rgrt <= :rgrt_max")
                    params["rgrt_max"] = tf.rgrt.max_value

        where_sql = " AND ".join(where_clauses)

        count_query = text(f"""
            SELECT COUNT(DISTINCT vw.disbursement_seq)
            FROM {SCHEMA_NAME}.vw_dashboard_data vw
            LEFT JOIN {SCHEMA_NAME}.txn_disbursement td ON vw.disbursement_seq = td.disbursement_seq
            LEFT JOIN {SCHEMA_NAME}.ma_purpose purp ON td.purpose_id = purp.purpose_id
            WHERE {where_sql}
        """)

        standard_count = db.execute(count_query, params).scalar() or 0

        data_query_str = f"""
            SELECT 
                vw.disbursement_seq,
                vw.client_id,
                vw.etd,
                vw.vessel_name,
                vw.country_id,
                vw.country_name,
                vw.port_id,
                vw.port_name,
                vw.loa,
                vw.grt,
                vw.rgrt,
                vw.nrt,
                vw.loss_prevention_pda,
                vw.loss_prevention_fda,
                vw.total_loss_prevented,
                vw.loss_prevented_reason,
                vw.fda_amount,
                vw.pda_amount,
                vw.manual_fda_amount,
                vw.manual_pda_amount,
                td.voyage AS voyage_no,
                NULL::text AS vessel_type,
                NULL::text AS port_func,
                td.eta::text AS arrival_local,
                vw.etd::text AS departure_local,
                NULL::numeric AS port_days,
                mac.name AS agent,
                NULL::text AS cargo_grade,
                NULL::text AS counterparty_short_name,
                NULL::text AS imo_no,
                NULL::numeric AS advance_amt,
                NULL::numeric AS final_amt,
                td.advance_amount_remitted,
                td.outstanding_balance,
                td.remark,
                COALESCE(purp.name, '-') AS purpose
            FROM {SCHEMA_NAME}.vw_dashboard_data vw
            LEFT JOIN {SCHEMA_NAME}.txn_disbursement td ON vw.disbursement_seq = td.disbursement_seq
            LEFT JOIN {SCHEMA_NAME}.ma_company mac ON td.portagent_id = mac.company_id
            LEFT JOIN {SCHEMA_NAME}.ma_purpose purp ON td.purpose_id = purp.purpose_id
            WHERE {where_sql}
            ORDER BY vw.etd DESC NULLS LAST
        """

        # Determine if we need to also fetch ankkumam data
        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        ankkumam_clients = []
        if client_ids_list:
            for cid in client_ids_list:
                if cid and int(cid) in prod_cid_to_excel:
                    ankkumam_clients.append(prod_cid_to_excel[int(cid)])
                elif str(cid) == '85' and "ALGHAF" in excel_to_prod_cid:
                    ankkumam_clients.append("ALGHAF")
        else:
            ankkumam_clients = list(excel_to_prod_cid.keys())

        if ankkumam_clients:
            data_query_all = text(data_query_str)
                
            raw_std = list(db.execute(data_query_all, params).mappings().all())
            standard_records = [dict(r, data_source="standard") for r in raw_std]

            ankkumam_records, ankkumam_count = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, data_request, is_meraki_user, True, 0, db, only_completed_fda=True
            )

            from app.utils.dedup_utils import get_record_key, deduplicate_records

            # Deduplicate internally within Ankkumam first
            # ankkumam_records = deduplicate_records(ankkumam_records)

            # Fetch all Prod keys for proper deduplication (regardless of completed status)
            prod_keys_sql = f'''
                SELECT 
                    vw.vessel_name, 
                    vw.country_name as country_name, 
                    vw.port_name as port_name, 
                    vw.etd, 
                    td.eta,
                    td.voyage as voyage_no, 
                    mac.name as port_agent,
                    purp.name as purpose
                FROM {SCHEMA_NAME}.vw_dashboard_data vw
                LEFT JOIN {SCHEMA_NAME}.txn_disbursement td ON vw.disbursement_seq = td.disbursement_seq
                LEFT JOIN {SCHEMA_NAME}.ma_company mac ON td.portagent_id = mac.company_id
                LEFT JOIN {SCHEMA_NAME}.ma_purpose purp ON td.purpose_id = purp.purpose_id
            '''
            cids_str = ",".join(str(c) for c in (int_cids if 'int_cids' in locals() else []))
            if cids_str:
                prod_keys_sql += f" WHERE vw.client_id IN ({cids_str})"
                
            all_prod_for_keys = db.execute(text(prod_keys_sql)).mappings().all()
            
            # Map column names for get_record_key which expects specific dict keys
            mapped_prod = [
                {
                    "vessel_name": r.get("vessel_name"),
                    "country_name": r.get("country_name") or r.get("country"),
                    "port_name": r.get("port_name") or r.get("port"),
                    "etd": r.get("etd"),
                    "eta": r.get("eta"),
                    "voyage_no": r.get("voyage_no"),
                    "agent": r.get("port_agent"),
                    "purpose": r.get("purpose")
                } for r in all_prod_for_keys
            ]
            
            std_keys = {get_record_key(r) for r in mapped_prod}
            deduped_ankkumam = [r for r in ankkumam_records if get_record_key(r) not in std_keys]

            all_records = standard_records + deduped_ankkumam
            total_count = len(all_records)

            def get_sort_key(record):
                val = record.get("etd")
                if not val:
                    return ""
                if hasattr(val, "isoformat"):
                    return val.isoformat()
                return str(val)
                
            all_records.sort(key=get_sort_key, reverse=True)

            # Apply pagination on merged data
            if not is_all_records:
                all_records = all_records[offset:offset + data_request.pageSize]

            return all_records, total_count
        else:
            # No ankkumam mapping, standard flow only
            if not is_all_records:
                data_query_str += " OFFSET :offset LIMIT :limit"

            data_query = text(data_query_str)
            if not is_all_records:
                params["offset"] = offset
                params["limit"] = data_request.pageSize

            raw_std = list(db.execute(data_query, params).mappings().all())
            standard_records = [dict(r, data_source="standard") for r in raw_std]
            return standard_records, standard_count

    @staticmethod
    def update_dashboard_row(payload, db: Session):
        """
        Update advance_amount_remitted, outstanding_balance, and remark for a row in standard or excel schema.
        Supports setting values to numbers/strings or setting them to null/None.
        """
        ds = (payload.data_source or "standard").lower()
        update_fields = payload.model_dump(exclude_unset=True) if hasattr(payload, 'model_dump') else payload.dict(exclude_unset=True)

        d_seq = payload.disbursement_seq
        if isinstance(d_seq, str) and d_seq.startswith("Kamba"):
            d_seq = int(d_seq.replace("Kamba", ""))
        else:
            d_seq = int(d_seq)

        if ds == "excel":
            row = db.query(ExcelDisbursementsTotalPortCost).filter(ExcelDisbursementsTotalPortCost.id == d_seq).first()
            if not row:
                raise ValueError(f"Excel disbursement record with ID {d_seq} not found")
            if "advance_amount_remitted" in update_fields:
                row.advance_amount_remitted = payload.advance_amount_remitted
            if "outstanding_balance" in update_fields:
                row.outstanding_balance = payload.outstanding_balance
            if "remark" in update_fields:
                row.remark = payload.remark
            db.commit()
            db.refresh(row)
            return row
        else:
            row = db.query(TxnDisbursement).filter(TxnDisbursement.disbursement_seq == d_seq).first()
            if not row:
                raise ValueError(f"Standard disbursement record with seq {d_seq} not found")
            if "advance_amount_remitted" in update_fields:
                row.advance_amount_remitted = payload.advance_amount_remitted
            if "outstanding_balance" in update_fields:
                row.outstanding_balance = payload.outstanding_balance
            if "remark" in update_fields:
                row.remark = payload.remark
            db.commit()
            db.refresh(row)
            return row

    
    @staticmethod
    def _get_ankkumam_filter_data(ankkumam_clients, db):
        try:
            ids_str = ",".join(f"'{c}'" for c in ankkumam_clients)
            where_sql = f"d.client IN ({ids_str})"
            
            from sqlalchemy import text
            vessels = db.execute(text(f"SELECT DISTINCT d.vessel FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.vessel IS NOT NULL")).scalars().all()
            countries = db.execute(text(f"SELECT DISTINCT d.country FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.country IS NOT NULL")).scalars().all()
            ports = db.execute(text(f"SELECT DISTINCT d.port FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.port IS NOT NULL")).scalars().all()
            
            return {
                "vessel_name": [str(v).strip().upper() for v in vessels if v],
                "country_name": [str(c).strip().upper() for c in countries if c],
                "port_name": [str(p).strip().upper() for p in ports if p]
            }
        except Exception as e:
            print(f"Error getting ankkumam filter data: {e}")
            return {}
            
    @staticmethod
    def get_dashboard_filter_data(filter_req, db: Session = None):
        """
        Get unique filter data for dashboard filters with bidirectional cascading.
        Accepts FilterDataRequestDTO object or legacy client_id.
        """
        # Handle both FilterDataRequestDTO and raw client_id for backward compatibility
        if hasattr(filter_req, 'client_id'):
            client_id = filter_req.client_id
            data_source = filter_req.data_source or "all"
            selected_vessel = getattr(filter_req, 'selected_vessel', []) or []
            selected_country = getattr(filter_req, 'selected_country', []) or []
            selected_port = getattr(filter_req, 'selected_port', []) or []
        else:
            client_id = filter_req
            data_source = "all"
            selected_vessel, selected_country, selected_port = [], [], []

        # 1. Fetch Client List
        clients_result = db.query(MaCompany.company_id, MaCompany.company_name).filter(
            MaCompany.company_type_id == 2,
            MaCompany.status == 'Y'
        ).order_by(MaCompany.company_name).all()
        
        clients_list = [{"id": c[0], "name": c[1]} for c in clients_result] if clients_result else []

        # 2. Build Base Query on VwFdaProcessingDetails
        query = db.query(VwFdaProcessingDetails)

        # Apply client_id filter if present
        if client_id is not None:
            if isinstance(client_id, list):
                cids = [int(x) for x in client_id if str(x).isdigit()]
                if cids:
                    query = query.filter(VwFdaProcessingDetails.client_id.in_(cids))
            elif str(client_id).isdigit():
                query = query.filter(VwFdaProcessingDetails.client_id == int(client_id))

        # 3. Apply Bidirectional Filter Conditions dynamically
        if selected_vessel and len(selected_vessel) > 0:
            query = query.filter(func.upper(VwFdaProcessingDetails.vessel_name).in_([v.upper() for v in selected_vessel]))
            
        if selected_country and len(selected_country) > 0:
            query = query.filter(func.upper(VwFdaProcessingDetails.country_name).in_([c.upper() for c in selected_country]))

        if selected_port and len(selected_port) > 0:
            query = query.filter(func.upper(VwFdaProcessingDetails.port_name).in_([p.upper() for p in selected_port]))

        # 4. Fetch distinct attributes from the dynamically filtered dataset
        vessel_names = sorted([v[0] for v in query.with_entities(VwFdaProcessingDetails.vessel_name).distinct().all() if v[0]])
        country_names = sorted([c[0] for c in query.with_entities(VwFdaProcessingDetails.country_name).distinct().all() if c[0]])
        port_names = sorted([p[0] for p in query.with_entities(VwFdaProcessingDetails.port_name).distinct().all() if p[0]])

        # 5. Range Stats
        loa_stats = query.with_entities(
            func.min(VwFdaProcessingDetails.loa).label('min_loa'),
            func.max(VwFdaProcessingDetails.loa).label('max_loa')
        ).filter(VwFdaProcessingDetails.loa.isnot(None)).first()

        nrt_stats = query.with_entities(
            func.min(VwFdaProcessingDetails.nrt).label('min_nrt'),
            func.max(VwFdaProcessingDetails.nrt).label('max_nrt')
        ).filter(VwFdaProcessingDetails.nrt.isnot(None)).first()

        grt_stats = query.with_entities(
            func.min(VwFdaProcessingDetails.grt).label('min_grt'),
            func.max(VwFdaProcessingDetails.grt).label('max_grt')
        ).filter(VwFdaProcessingDetails.grt.isnot(None)).first()

        rgrt_stats = query.with_entities(
            func.min(VwFdaProcessingDetails.rgrt).label('min_rgrt'),
            func.max(VwFdaProcessingDetails.rgrt).label('max_rgrt')
        ).filter(VwFdaProcessingDetails.rgrt.isnot(None)).first()

        return {
            "clients": clients_list,
            "vessel_name": vessel_names,
            "country_name": country_names,
            "port_name": port_names,
            "loa": {"min_value": float(loa_stats.min_loa), "max_value": float(loa_stats.max_loa)} if loa_stats and loa_stats.min_loa is not None else None,
            "nrt": {"min_value": float(nrt_stats.min_nrt), "max_value": float(nrt_stats.max_nrt)} if nrt_stats and nrt_stats.min_nrt is not None else None,
            "grt": {"min_value": float(grt_stats.min_grt), "max_value": float(grt_stats.max_grt)} if grt_stats and grt_stats.min_grt is not None else None,
            "rgrt": {"min_value": float(rgrt_stats.min_rgrt), "max_value": float(rgrt_stats.max_rgrt)} if rgrt_stats and rgrt_stats.min_rgrt is not None else None,
            "vessel_type": [],
            "agent": [],
            "cargo_grade": [],
            "counterparty_short_name": []
        }
