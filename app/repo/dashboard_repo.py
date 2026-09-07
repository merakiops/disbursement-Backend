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
            return None

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
            
            prod_cids = []
            if "ESDMCC" in ankkumam_clients: prod_cids.append(83)
            if "NWL" in ankkumam_clients: prod_cids.append(14)
            
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
            
            # Fetch PROD keys for dedup (we fetch all active prod records for these clients)
            # Since client mapping: ESDMCC=83, NWL=14
            prod_cids = []
            if "ESDMCC" in ankkumam_clients: prod_cids.append(83)
            if "NWL" in ankkumam_clients: prod_cids.append(14)
            
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
            return None
            
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

        # Backward compatibility: client_id=85 (Kamba) shows all kamba data
        if is_kamba_client or (ds in ["kamba", "mysql"] and client_ids and 85 in [int(x) for x in client_ids if str(x).isdigit()] and len(client_ids) == 1):
            result = DashboardRepository._get_kamba_summary_for_companies(None, db)
            if result:
                return result

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
        ankkumam_clients = []
        if client_ids:
            for cid in client_ids:
                if str(cid) == '83':
                    ankkumam_clients.append("ESDMCC")
                elif str(cid) == '14':
                    ankkumam_clients.append("NWL")
        else:
            ankkumam_clients = ["ESDMCC", "NWL"]

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
                    where_clauses.append("d.vessel IN :vessels")
                    params["vessels"] = tuple(tf.vessel)
                if tf.country and len(tf.country) > 0:
                    where_clauses.append("d.country IN :countries")
                    params["countries"] = tuple(tf.country)
                if tf.port and len(tf.port) > 0:
                    where_clauses.append("d.port IN :ports")
                    params["ports"] = tuple(tf.port)

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
            for r in rows:
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

                c_id = 83 if str(r.get("client")) == "ESDMCC" else (14 if str(r.get("client")) == "NWL" else 85)

                ankkumam_records.append({
                    "disbursement_seq": r['disbursement_seq'],
                    "client_id": c_id,
                    "etd": etd_str,
                    "vessel_name": r["vessel_name"] or f"Vessel-{r['disbursement_seq']}",
                    "country_id": None,
                    "country_name": r["country_name"] or "N/A",
                    "port_id": None,
                    "port_name": r["port_name"] or "N/A",
                    "loa": "-", "grt": "-", "rgrt": "-", "nrt": "-",
                    "loss_prevention_pda": lp_pda,
                    "loss_prevention_fda": lp_fda,
                    "total_loss_prevented": tot_lp,
                    "loss_prevented_reason": r.get("reason"),
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
            return None

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

                return {
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

        # Determine if we need to merge kamba data
        should_merge_kamba = False
        kamba_company_ids = []
        if client_id is None:
            # No client selected = all clients, merge all kamba data
            should_merge_kamba = True
            kamba_company_ids = list(PROD_TO_KAMBA_MAPPING.values())
        elif client_id in PROD_TO_KAMBA_MAPPING:
            # Specific client with kamba mapping
            should_merge_kamba = True
            kamba_company_ids = [PROD_TO_KAMBA_MAPPING[client_id]]

        if should_merge_kamba and kamba_company_ids:
            kamba_filter = DashboardRepository._get_kamba_filter_data(kamba_company_ids, db)
            if kamba_filter:
                # Merge vessel/country/port lists (deduplicate and sort)
                vessel_names = sorted(list(set(vessel_names + kamba_filter.get("vessel_name", []))))
                country_names = sorted(list(set(country_names + kamba_filter.get("country_name", []))))
                port_names = sorted(list(set(port_names + kamba_filter.get("port_name", []))))

                # Merge range stats (take min of mins, max of maxes)
                def merge_range(prod_stat_obj, prod_min_attr, prod_max_attr, kamba_min_val, kamba_max_val):
                    prod_min = float(getattr(prod_stat_obj, prod_min_attr)) if prod_stat_obj and getattr(prod_stat_obj, prod_min_attr, None) is not None else None
                    prod_max = float(getattr(prod_stat_obj, prod_max_attr)) if prod_stat_obj and getattr(prod_stat_obj, prod_max_attr, None) is not None else None
                    vals_min = [v for v in [prod_min, kamba_min_val] if v is not None]
                    vals_max = [v for v in [prod_max, kamba_max_val] if v is not None]
                    if vals_min and vals_max:
                        return {"min_value": min(vals_min), "max_value": max(vals_max)}
                    return {"min_value": prod_min, "max_value": prod_max} if prod_min is not None else None

                loa_merged = merge_range(loa_stats, 'min_loa', 'max_loa', kamba_filter.get("loa_min"), kamba_filter.get("loa_max"))
                nrt_merged = merge_range(nrt_stats, 'min_nrt', 'max_nrt', kamba_filter.get("nrt_min"), kamba_filter.get("nrt_max"))
                grt_merged = merge_range(grt_stats, 'min_grt', 'max_grt', kamba_filter.get("grt_min"), kamba_filter.get("grt_max"))
                rgrt_merged = merge_range(rgrt_stats, 'min_rgrt', 'max_rgrt', kamba_filter.get("rgrt_min"), kamba_filter.get("rgrt_max"))

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
