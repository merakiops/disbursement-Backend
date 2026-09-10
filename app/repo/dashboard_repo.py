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
                "percentage_savings_fda": round((overall_savings / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_pda": round((overall_savings / pda_total * 100), 2) if pda_total > 0 else 0.0,
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
            
            # Fetch raw ankkumam records
            class DummyDataRequest:
                tableFilter = None
                pageSize = -1
                page = 1
                clientId = None
            
            raw_records, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, DummyDataRequest(), False, True, 0, db
            )
            
            _, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
            prod_cids = [excel_to_prod_cid[c] for c in ankkumam_clients if c in excel_to_prod_cid]
            
            # Fetch PROD keys exactly as dashboard does (only records with FDA amount)
            from sqlalchemy import text
            from app.db import SCHEMA_NAME
            
            cids_str = ",".join(str(c) for c in prod_cids)
            prod_keys_sql = "SELECT vw.vessel_name, vw.country_name as country, vw.port_name as port, vw.etd, td.voyage, NULL as port_agent FROM " + SCHEMA_NAME + ".vw_dashboard_data vw LEFT JOIN " + SCHEMA_NAME + ".txn_disbursement td ON vw.disbursement_seq = td.disbursement_seq WHERE vw.client_id IN (" + cids_str + ") AND (vw.fda_amount IS NOT NULL OR (vw.manual_fda_amount IS NOT NULL AND vw.manual_fda_amount != ''))"
            
            prod_records = db.execute(text(prod_keys_sql)).mappings().all()
            
            prod_dicts = [
                {
                    "vessel_name": r["vessel_name"],
                    "country": r["country"],
                    "port": r["port"],
                    "etd": r["etd"],
                    "voyage_no": r["voyage"],
                    "port_agent": r["port_agent"]
                } for r in prod_records
            ]
            
            from app.utils.dedup_utils import deduplicate_records
            
            # Put prod first so they take priority
            all_records = prod_dicts + raw_records
            deduped_all = deduplicate_records(all_records)
            
            # Filter back to only ankkumam records that survived
            deduped_ankkumam = [r for r in deduped_all if r.get("data_source") == "ankkumam"]
            
            # Now compute summary on deduped_ankkumam
            c_set = set()
            p_set = set()
            v_set = set()
            
            pda_total = 0.0
            fda_total = 0.0
            pda_sav = 0.0
            fda_sav = 0.0
            tot_sav = 0.0
            
            completed_pda = 0
            under_process_pda = 0
            completed_fda = 0
            under_process_fda = 0
            
            for r in deduped_ankkumam:
                if r.get("country_name") and r["country_name"] != "N/A": c_set.add(str(r["country_name"]).strip().upper())
                if r.get("port_name") and r["port_name"] != "N/A": p_set.add(str(r["port_name"]).strip().upper())
                if r.get("vessel_name"): v_set.add(str(r["vessel_name"]).strip().upper())
                
                try:
                    pda_val = float(str(r.get("pda_amount") or "0").replace(",", ""))
                except:
                    pda_val = 0.0
                pda_total += pda_val
                
                try:
                    fda_val = float(str(r.get("fda_amount") or "0").replace(",", ""))
                except:
                    fda_val = 0.0
                fda_total += fda_val
                
                pda_sav += float(r.get("loss_prevention_pda") or 0.0)
                fda_sav += float(r.get("loss_prevention_fda") or 0.0)
                tot_sav += float(r.get("total_loss_prevented") or 0.0)
                
                if str(r.get("pda_status") or "").strip().lower() == "completed":
                    completed_pda += 1
                else:
                    under_process_pda += 1
                    
                if str(r.get("fda_status") or "").strip().lower() == "completed":
                    completed_fda += 1
                else:
                    under_process_fda += 1
                
            tot_disb = len(deduped_ankkumam)
            
            return {
                "country_list": list(c_set),
                "port_list": list(p_set),
                "vessel_list": list(v_set),
                "countries": len(c_set),
                "ports": len(p_set),
                "vessels": len(v_set),
                "total_pda": completed_pda,
                "completed_pda": completed_pda,
                "under_process_pda": under_process_pda,
                "total_fda": tot_disb,
                "completed_fda": completed_fda,
                "under_process_fda": under_process_fda,
                "yet_to_process": 0,
                "pdasavings": pda_sav,
                "fdasavings": fda_sav,
                "overallsavingsamount": tot_sav,
                "fda_total_amount": fda_total,
                "pda_total_amount": pda_total,
                "percentage_savings": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_fda": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_pda": round((tot_sav / pda_total * 100), 2) if pda_total > 0 else 0.0,
                "pda_completed_no_fda": 0
            }
        except Exception as e:
            db.rollback()
            import traceback
            with open("/tmp/ankkumam_error.log", "w") as f:
                f.write(traceback.format_exc())
            print(f"Error computing deduped ankkumam summary: {e}")
            return [], 0
            
            # Fetch raw ankkumam records
            class DummyDataRequest:
                tableFilter = None
                pageSize = -1
                page = 1
                clientId = None
            
            raw_records, _ = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, DummyDataRequest(), False, True, 0, db
            )
            
            # Fetch PROD keys for dedup (we fetch all active prod records for these clients)
            # Since client mapping: ESDMCC=83, NWL=14
            _, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
            prod_cids = [excel_to_prod_cid[c] for c in ankkumam_clients if c in excel_to_prod_cid]
            
            from app.models.vw_disbursement_tracker import DisbursementTracker
            prod_records = db.query(
                DisbursementTracker.vessel_name,
                DisbursementTracker.country,
                DisbursementTracker.port,
                DisbursementTracker.etd,
                DisbursementTracker.voyage,
                DisbursementTracker.port_agent
            ).filter(DisbursementTracker.client_id.in_(prod_cids)).all()
            
            # Create dummy prod dicts to pass to deduplicator
            prod_dicts = [
                {
                    "vessel_name": r.vessel_name,
                    "country": r.country,
                    "port": r.port,
                    "etd": r.etd,
                    "voyage_no": r.voyage,
                    "port_agent": r.port_agent
                } for r in prod_records
            ]
            
            from app.utils.dedup_utils import deduplicate_records
            
            # Put prod first so they take priority
            all_records = prod_dicts + raw_records
            deduped_all = deduplicate_records(all_records)
            
            # Filter back to only ankkumam records that survived
            deduped_ankkumam = [r for r in deduped_all if r.get("data_source") == "ankkumam"]
            
            # Now compute summary on deduped_ankkumam
            c_set = set()
            p_set = set()
            v_set = set()
            
            pda_total = 0.0
            fda_total = 0.0
            pda_sav = 0.0
            fda_sav = 0.0
            tot_sav = 0.0
            
            for r in deduped_ankkumam:
                if r.get("country_name") and r["country_name"] != "N/A": c_set.add(str(r["country_name"]).strip().upper())
                if r.get("port_name") and r["port_name"] != "N/A": p_set.add(str(r["port_name"]).strip().upper())
                if r.get("vessel_name"): v_set.add(str(r["vessel_name"]).strip().upper())
                
                pda_total += float(r.get("pda_amount") or 0.0)
                fda_total += float(r.get("fda_amount") or 0.0)
                pda_sav += float(r.get("loss_prevention_pda") or 0.0)
                fda_sav += float(r.get("loss_prevention_fda") or 0.0)
                tot_sav += float(r.get("total_loss_prevented") or 0.0)
                
            tot_disb = len(deduped_ankkumam)
            
            return {
                "country_list": list(c_set),
                "port_list": list(p_set),
                "vessel_list": list(v_set),
                "countries": len(c_set),
                "ports": len(p_set),
                "vessels": len(v_set),
                "total_pda": tot_disb,
                "completed_pda": tot_disb,
                "under_process_pda": 0,
                "total_fda": tot_disb,
                "completed_fda": tot_disb,
                "under_process_fda": 0,
                "yet_to_process": 0,
                "pdasavings": pda_sav,
                "fdasavings": fda_sav,
                "overallsavingsamount": tot_sav,
                "fda_total_amount": fda_total,
                "pda_total_amount": pda_total,
                "percentage_savings": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_fda": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_pda": round((tot_sav / pda_total * 100), 2) if pda_total > 0 else 0.0,
                "pda_completed_no_fda": 0
            }
        except Exception as e:
            db.rollback()
            import traceback
            with open("/tmp/ankkumam_error.log", "w") as f:
                f.write(traceback.format_exc())
            print(f"Error computing deduped ankkumam summary: {e}")
            return [], 0
            
            clients_str = ",".join(f"'{c}'" for c in ankkumam_clients)
            where_sql = f"d.client IN ({clients_str})"
            
            v_list = db.execute(text(f"SELECT DISTINCT d.vessel FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.vessel IS NOT NULL")).scalars().all()
            c_list = db.execute(text(f"SELECT DISTINCT d.country FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.country IS NOT NULL")).scalars().all()
            p_list = db.execute(text(f"SELECT DISTINCT d.port FROM ankkumam_data_excel.data d WHERE {where_sql} AND d.port IS NOT NULL")).scalars().all()
            
            v_cnt = len(v_list)
            c_cnt = len(c_list)
            p_cnt = len(p_list)
            tot_disb = db.execute(text(f"SELECT COUNT(*) FROM ankkumam_data_excel.data d WHERE {where_sql}")).scalar() or 0
            
            amt_sql = f"""
                SELECT 
                    SUM(CAST(COALESCE(NULLIF(regexp_replace(CAST(d.pda_amount AS TEXT), '[^0-9.]', '', 'g'), ''), '0') AS NUMERIC)) as pda_tot,
                    SUM(CAST(COALESCE(NULLIF(regexp_replace(CAST(d.fda_amount_usd AS TEXT), '[^0-9.]', '', 'g'), ''), '0') AS NUMERIC)) as fda_tot,
                    SUM(CAST(COALESCE(NULLIF(regexp_replace(CAST(d.savings_at_pda_usd AS TEXT), '[^0-9.]', '', 'g'), ''), '0') AS NUMERIC)) as pda_sav,
                    SUM(CAST(COALESCE(NULLIF(regexp_replace(CAST(d.savings_at_fda_usd AS TEXT), '[^0-9.]', '', 'g'), ''), '0') AS NUMERIC)) as fda_sav,
                    SUM(CAST(COALESCE(NULLIF(regexp_replace(CAST(d.total_savings_usd AS TEXT), '[^0-9.]', '', 'g'), ''), '0') AS NUMERIC)) as tot_sav
                FROM ankkumam_data_excel.data d
                WHERE {where_sql}
            """
            amts = db.execute(text(amt_sql)).mappings().first()
            
            pda_total = float(amts.get('pda_tot') or 0.0)
            fda_total = float(amts.get('fda_tot') or 0.0)
            pda_sav = float(amts.get('pda_sav') or 0.0)
            fda_sav = float(amts.get('fda_sav') or 0.0)
            tot_sav = float(amts.get('tot_sav') or 0.0)
            
            return {
                "country_list": [str(c).strip().upper() for c in c_list if c],
                "port_list": [str(p).strip().upper() for p in p_list if p],
                "vessel_list": [str(v).strip().upper() for v in v_list if v],
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
                "pdasavings": pda_sav,
                "fdasavings": fda_sav,
                "overallsavingsamount": tot_sav,
                "fda_total_amount": fda_total,
                "pda_total_amount": pda_total,
                "percentage_savings": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_fda": round((tot_sav / fda_total * 100), 2) if fda_total > 0 else 0.0,
                "percentage_savings_pda": round((tot_sav / pda_total * 100), 2) if pda_total > 0 else 0.0,
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
        merged["percentage_savings"] = round((overall_savings / pda_total * 100), 2) if pda_total > 0 else 0.0
        merged["percentage_savings_fda"] = round((overall_savings / fda_total * 100), 2) if fda_total > 0 else 0.0
        merged["percentage_savings_pda"] = round((overall_savings / pda_total * 100), 2) if pda_total > 0 else 0.0

        return merged

    @staticmethod
    def get_dashboard_summary(client_ids: List[int], from_date, to_date, data_source: Optional[str] = "all", db: Session = None):
        """
        Get dashboard summary based on client_ids and data_source.
        For clients with kamba mapping, merges data from both prod and kamba_data_prod schemas.
        Client ID 84 represents X-Platform (mapped to excel_data_dev schema).
        Client ID 85 represents Kamba (all kamba data, kept for backward compatibility).
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

        # Backward compatibility: client_id=85 (Kamba) shows all kamba data plus ALGHAF
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

        # --- Standard + Kamba merged flow ---
        # Expand client_ids to include old/merged prod IDs
        if client_ids is not None and len(client_ids) == 0:
            client_ids = None
            
        expanded_client_ids = client_ids
        if client_ids:
            expanded_client_ids = get_all_prod_ids_for_client_list(client_ids)

        # Get prod summary via existing function
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

        # Fetch Ankkumam data instead of Kamba
        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        ankkumam_clients = []
        if client_ids:
            for cid in client_ids:
                if cid and int(cid) in prod_cid_to_excel:
                    ankkumam_clients.append(prod_cid_to_excel[int(cid)])
                elif str(cid) == '85' and "ALGHAF" in excel_to_prod_cid:
                    ankkumam_clients.append("ALGHAF")
        else:
            ankkumam_clients = list(excel_to_prod_cid.keys())

        if ankkumam_clients:
            ankkumam_summary = DashboardRepository._get_ankkumam_summary_for_companies(ankkumam_clients, db)
            
            # Fetch actual unique lists for primary data to merge properly
            prod_where = ["1=1"]
            prod_params = {}
            if expanded_client_ids:
                try:
                    int_cids = [int(x) for x in expanded_client_ids if str(x).isdigit()]
                except:
                    int_cids = list(expanded_client_ids)
                if int_cids:
                    prod_where.append("client_id = ANY(:cids)")
                    prod_params["cids"] = int_cids
                    
            if from_date:
                prod_where.append("etd::date >= :from_date::date")
                prod_params["from_date"] = from_date
            if to_date:
                prod_where.append("etd::date <= :to_date::date")
                prod_params["to_date"] = to_date
                
            prod_where_sql = " AND ".join(prod_where)
            
            prod_vessels = db.execute(text(f"SELECT DISTINCT vessel_name FROM {SCHEMA_NAME}.vw_dashboard_data WHERE {prod_where_sql} AND vessel_name IS NOT NULL"), prod_params).scalars().all()
            prod_countries = db.execute(text(f"SELECT DISTINCT country_name FROM {SCHEMA_NAME}.vw_dashboard_data WHERE {prod_where_sql} AND country_name IS NOT NULL"), prod_params).scalars().all()
            prod_ports = db.execute(text(f"SELECT DISTINCT port_name FROM {SCHEMA_NAME}.vw_dashboard_data WHERE {prod_where_sql} AND port_name IS NOT NULL"), prod_params).scalars().all()
            
            prod_summary["country_list"] = [str(c).strip().upper() for c in prod_countries if c]
            prod_summary["port_list"] = [str(p).strip().upper() for p in prod_ports if p]
            prod_summary["vessel_list"] = [str(v).strip().upper() for v in prod_vessels if v]
            
            return DashboardRepository._merge_summaries(prod_summary, ankkumam_summary)

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
    def _get_ankkumam_records(ankkumam_company_ids, data_request, is_meraki_user, is_all_records, offset, db):
        ankkumam_records = []
        try:
            ids_str = ",".join(f"'{c}'" for c in ankkumam_company_ids)
            where_clauses = [f"d.client IN ({ids_str})"]
            params = {}

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
                from sqlalchemy import func
                from app.models.vw_fda_processing_details import VwFdaProcessingDetails
                
                norm_vessels = [str(v).upper().split(" EX ")[0].replace(" ", "") for v in vessel_names]
                norm_col = func.replace(func.split_part(func.upper(VwFdaProcessingDetails.vessel_name), ' EX ', 1), ' ', '')
                
                stats = db.query(
                    norm_col.label("norm_vessel"),
                    func.max(VwFdaProcessingDetails.loa).label("loa"),
                    func.max(VwFdaProcessingDetails.grt).label("grt"),
                    func.max(VwFdaProcessingDetails.rgrt).label("rgrt"),
                    func.max(VwFdaProcessingDetails.nrt).label("nrt")
                ).filter(norm_col.in_(norm_vessels)).group_by(norm_col).all()
                
                for s in stats:
                    vessel_stats_map[s.norm_vessel] = {
                        "loa": s.loa if s.loa is not None else "-",
                        "grt": s.grt if s.grt is not None else "-",
                        "rgrt": s.rgrt if s.rgrt is not None else "-",
                        "nrt": s.nrt if s.nrt is not None else "-"
                    }

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

                _, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
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
                    "loa": v_stats["loa"], "grt": v_stats["grt"], "rgrt": v_stats["rgrt"], "nrt": v_stats["nrt"],
                    "loss_prevention_pda": lp_pda,
                    "loss_prevention_fda": lp_fda,
                    "total_loss_prevented": tot_lp,
                    "loss_prevented_reason": r.get("reason"),
                    "pda_status": r.get("pda_status"),
                    "fda_status": r.get("fda_status"),
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
                list(DashboardRepository._get_dynamic_client_mapping(db)[1].keys()), data_request, is_meraki_user, is_all_records, offset, db
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

        params = {}
        where_clauses = [
            "1=1",
            "(vw.fda_amount IS NOT NULL OR (vw.manual_fda_amount IS NOT NULL AND vw.manual_fda_amount != ''))"
        ]

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
            if tf.loa:
                if tf.loa.min_value is not None:
                    where_clauses.append("vw.loa >= :loa_min")
                    params["loa_min"] = tf.loa.min_value
                if tf.loa.max_value is not None:
                    where_clauses.append("vw.loa <= :loa_max")
                    params["loa_max"] = tf.loa.max_value
            if tf.nrt:
                if tf.nrt.min_value is not None:
                    where_clauses.append("vw.nrt >= :nrt_min")
                    params["nrt_min"] = tf.nrt.min_value
                if tf.nrt.max_value is not None:
                    where_clauses.append("vw.nrt <= :nrt_max")
                    params["nrt_max"] = tf.nrt.max_value
            if tf.grt:
                if tf.grt.min_value is not None:
                    where_clauses.append("vw.grt >= :grt_min")
                    params["grt_min"] = tf.grt.min_value
                if tf.grt.max_value is not None:
                    where_clauses.append("vw.grt <= :grt_max")
                    params["grt_max"] = tf.grt.max_value
            if tf.rgrt:
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
                NULL::text AS arrival_local,
                NULL::text AS departure_local,
                NULL::numeric AS port_days,
                NULL::text AS agent,
                NULL::text AS cargo_grade,
                NULL::text AS counterparty_short_name,
                NULL::text AS imo_no,
                NULL::numeric AS advance_amt,
                NULL::numeric AS final_amt,
                td.advance_amount_remitted,
                td.outstanding_balance,
                td.remark
            FROM {SCHEMA_NAME}.vw_dashboard_data vw
            LEFT JOIN {SCHEMA_NAME}.txn_disbursement td ON vw.disbursement_seq = td.disbursement_seq
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
            # Fetch ALL records from both sources (no per-source pagination)
            # then combine and paginate the merged result
            data_query_all = text(data_query_str)
            raw_std = list(db.execute(data_query_all, params).mappings().all())
            standard_records = [dict(r, data_source="standard") for r in raw_std]

            ankkumam_records, ankkumam_count = DashboardRepository._get_ankkumam_records(
                ankkumam_clients, data_request, is_meraki_user, True, 0, db
            )

            # Merge both record sets (Prod first, then Ankkumam)
            from app.utils.dedup_utils import deduplicate_records
            all_records = standard_records + ankkumam_records
            all_records = deduplicate_records(all_records)
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
    def get_dashboard_filter_data(client_id: Optional[int], data_source: Optional[str] = "all", db: Session = None):
        """
        Get unique filter data for dashboard filters.
        For clients with kamba mapping or when no client is selected, merges filter data from both schemas.
        """
        # Get client details (id and name) from the MaCompany table (company_type_id = 2 is Client)
        clients_result = db.query(MaCompany.company_id, MaCompany.company_name).filter(
            MaCompany.company_type_id == 2,
            MaCompany.status == 'Y'
        ).order_by(MaCompany.company_name).all()
        
        clients_list = [{"id": c[0], "name": c[1]} for c in clients_result] if clients_result else []

        # Backward compatibility: client_id=85 ("Kamba") shows all kamba data
        if client_id == 85 or (data_source and data_source.lower() in ["kamba", "mysql"]):
            try:
                vessel_names = sorted([v[0] for v in db.execute(text("SELECT DISTINCT vessel FROM kamba_data_prod.vessels WHERE vessel IS NOT NULL AND vessel != ''")).all() if v[0]])
                country_names = sorted([c[0] for c in db.execute(text("SELECT DISTINCT country FROM kamba_data_prod.countries WHERE country IS NOT NULL AND country != ''")).all() if c[0]])
                port_names = sorted([p[0] for p in db.execute(text("SELECT DISTINCT port FROM kamba_data_prod.ports WHERE port IS NOT NULL AND port != ''")).all() if p[0]])

                grt_res = db.execute(text("SELECT MIN(grt), MAX(grt) FROM kamba_data_prod.vessels WHERE grt IS NOT NULL")).first()
                min_grt = float(grt_res[0]) if grt_res and grt_res[0] is not None else None
                max_grt = float(grt_res[1]) if grt_res and grt_res[1] is not None else None

                kamba_filters = {
                    "clients": clients_list,
                    "vessel_name": vessel_names,
                    "country_name": country_names,
                    "port_name": port_names,
                    "loa": None,
                    "nrt": None,
                    "grt": {"min_value": min_grt, "max_value": max_grt} if min_grt is not None else None,
                    "rgrt": None,
                    "vessel_type": [],
                    "agent": [],
                    "cargo_grade": [],
                    "counterparty_short_name": []
                }
                _, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
                alghaf_only = ["ALGHAF"] if "ALGHAF" in excel_to_prod_cid else []
                ankkumam_filters = DashboardRepository._get_ankkumam_filter_data(alghaf_only, db)
                if ankkumam_filters:
                    kamba_filters["vessel_name"] = sorted(list(set(kamba_filters["vessel_name"] + ankkumam_filters.get("vessel_name", []))))
                    kamba_filters["country_name"] = sorted(list(set(kamba_filters["country_name"] + ankkumam_filters.get("country_name", []))))
                    kamba_filters["port_name"] = sorted(list(set(kamba_filters["port_name"] + ankkumam_filters.get("port_name", []))))
                return kamba_filters
            except Exception as e:
                print("Error querying PostgreSQL kamba_data_prod filter data:", e)


        # If client_id is 84 ("X-Platform") or data_source is explicitly "excel", return Excel schema data only
        if client_id == 84 or (data_source and data_source.lower() == "excel"):
            distinct_vessel_types = []
            distinct_agents = []
            distinct_cargo_grades = []
            distinct_counterparties = []

            try:
                with db.begin_nested():
                    vessel_names = sorted([v[0] for v in db.query(ExcelVessel.vessel_name).distinct().all() if v[0]])
                    country_names = sorted([c[0] for c in db.query(ExcelCountry.country_name).distinct().all() if c[0]])
                    port_names = sorted([p[0] for p in db.query(ExcelPort.port_name).distinct().all() if p[0]])
                    
                    v_types_1 = [r[0] for r in db.query(ExcelDisbursementsIndividualItemsCost.vessel_type).distinct().all() if r[0]]
                    v_types_2 = [r[0] for r in db.query(ExcelDisbursementsPaidAmountsAnalysis.vessel_type).distinct().all() if r[0]]
                    v_types_3 = [r[0] for r in db.query(ExcelDisbursementsTotalPortCost.vessel_type).distinct().all() if r[0]]
                    distinct_vessel_types = sorted(list(set(v_types_1 + v_types_2 + v_types_3)))

                    agents_1 = [r[0] for r in db.query(ExcelDisbursementsIndividualItemsCost.agent).distinct().all() if r[0]]
                    agents_2 = [r[0] for r in db.query(ExcelDisbursementsPaidAmountsAnalysis.agent).distinct().all() if r[0]]
                    agents_3 = [r[0] for r in db.query(ExcelDisbursementsTotalPortCost.vendor_short_name).distinct().all() if r[0]]
                    distinct_agents = sorted(list(set(agents_1 + agents_2 + agents_3)))

                    distinct_cargo_grades = sorted([r[0] for r in db.query(ExcelDisbursementsTotalPortCost.cargo_grades).distinct().all() if r[0]])
                    distinct_counterparties = sorted([r[0] for r in db.query(ExcelDisbursementsTotalPortCost.counterparty_short_name).distinct().all() if r[0]])

                    grt_stats = db.query(
                        func.min(ExcelDisbursementsTotalPortCost.grt).label('min_grt'),
                        func.max(ExcelDisbursementsTotalPortCost.grt).label('max_grt')
                    ).filter(ExcelDisbursementsTotalPortCost.grt.isnot(None)).first()

                    return {
                        "clients": clients_list,
                        "vessel_name": vessel_names,
                        "country_name": country_names,
                        "port_name": port_names,
                        "loa": None,
                        "nrt": None,
                        "grt": {"min_value": float(grt_stats.min_grt), "max_value": float(grt_stats.max_grt)} if grt_stats and grt_stats.min_grt is not None else None,
                        "rgrt": None,
                        "vessel_type": distinct_vessel_types,
                        "agent": distinct_agents,
                        "cargo_grade": distinct_cargo_grades,
                        "counterparty_short_name": distinct_counterparties
                    }
            except Exception:
                db.rollback()

        # --- Standard + Kamba merged flow ---
        # Get standard prod filter data
        vessel_names = sorted([v[0] for v in db.query(VwFdaProcessingDetails.vessel_name).distinct().all() if v[0]])
        country_names = sorted([c[0] for c in db.query(VwFdaProcessingDetails.country_name).distinct().all() if c[0]])
        port_names = sorted([p[0] for p in db.query(VwFdaProcessingDetails.port_name).distinct().all() if p[0]])

        loa_stats = db.query(
            func.min(VwFdaProcessingDetails.loa).label('min_loa'),
            func.max(VwFdaProcessingDetails.loa).label('max_loa')
        ).filter(VwFdaProcessingDetails.loa.isnot(None)).first()
        
        nrt_stats = db.query(
            func.min(VwFdaProcessingDetails.nrt).label('min_nrt'),
            func.max(VwFdaProcessingDetails.nrt).label('max_nrt')
        ).filter(VwFdaProcessingDetails.nrt.isnot(None)).first()
        
        grt_stats = db.query(
            func.min(VwFdaProcessingDetails.grt).label('min_grt'),
            func.max(VwFdaProcessingDetails.grt).label('max_grt')
        ).filter(VwFdaProcessingDetails.grt.isnot(None)).first()
        
        rgrt_stats = db.query(
            func.min(VwFdaProcessingDetails.rgrt).label('min_rgrt'),
            func.max(VwFdaProcessingDetails.rgrt).label('max_rgrt')
        ).filter(VwFdaProcessingDetails.rgrt.isnot(None)).first()

        # Determine if we need to merge ankkumam data
        prod_cid_to_excel, excel_to_prod_cid = DashboardRepository._get_dynamic_client_mapping(db)
        should_merge_ankkumam = False
        ankkumam_clients = []
        if client_id is None:
            should_merge_ankkumam = True
            ankkumam_clients = list(excel_to_prod_cid.keys())
        elif client_id and int(client_id) in prod_cid_to_excel:
            should_merge_ankkumam = True
            ankkumam_clients = [prod_cid_to_excel[int(client_id)]]
        elif str(client_id) == '85':
            should_merge_ankkumam = True
            if "ALGHAF" in excel_to_prod_cid:
                ankkumam_clients = ["ALGHAF"]

        if should_merge_ankkumam and ankkumam_clients:
            ankkumam_filter = DashboardRepository._get_ankkumam_filter_data(ankkumam_clients, db)
            if ankkumam_filter:
                # Merge vessel/country/port lists (deduplicate and sort)
                vessel_names = sorted(list(set(vessel_names + ankkumam_filter.get("vessel_name", []))))
                country_names = sorted(list(set(country_names + ankkumam_filter.get("country_name", []))))
                port_names = sorted(list(set(port_names + ankkumam_filter.get("port_name", []))))

                # Merge range stats (take min of mins, max of maxes)
                def merge_range(prod_stat_obj, prod_min_attr, prod_max_attr, ankkumam_min_val, ankkumam_max_val):
                    prod_min = float(getattr(prod_stat_obj, prod_min_attr)) if prod_stat_obj and getattr(prod_stat_obj, prod_min_attr, None) is not None else None
                    prod_max = float(getattr(prod_stat_obj, prod_max_attr)) if prod_stat_obj and getattr(prod_stat_obj, prod_max_attr, None) is not None else None
                    vals_min = [v for v in [prod_min, ankkumam_min_val] if v is not None]
                    vals_max = [v for v in [prod_max, ankkumam_max_val] if v is not None]
                    if vals_min and vals_max:
                        return {"min_value": min(vals_min), "max_value": max(vals_max)}
                    return {"min_value": prod_min, "max_value": prod_max} if prod_min is not None else None

                loa_merged = merge_range(loa_stats, 'min_loa', 'max_loa', None, None)
                nrt_merged = merge_range(nrt_stats, 'min_nrt', 'max_nrt', None, None)
                grt_merged = merge_range(grt_stats, 'min_grt', 'max_grt', None, None)
                rgrt_merged = merge_range(rgrt_stats, 'min_rgrt', 'max_rgrt', None, None)

                return {
                    "clients": clients_list,
                    "vessel_name": vessel_names,
                    "country_name": country_names,
                    "port_name": port_names,
                    "loa": loa_merged,
                    "nrt": nrt_merged,
                    "grt": grt_merged,
                    "rgrt": rgrt_merged,
                    "vessel_type": [],
                    "agent": [],
                    "cargo_grade": [],
                    "counterparty_short_name": []
                }

        filter_data = {
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
        
        return filter_data
