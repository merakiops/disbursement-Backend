from sqlalchemy.orm import Session
from sqlalchemy import func, desc, text
from app.models.vw_fda_processing_details import VwFdaProcessingDetails
from app.models.company import MaCompany
from app.models.txn_disbursement import TxnDisbursement
from typing import List, Optional
import os

SCHEMA_NAME = os.getenv("DB_SCHEMA")
class DashboardRepository:
    
    @staticmethod
    def get_dashboard_summary(client_ids: List[int], from_date, to_date, db: Session):
        """
        Get dashboard summary using the database function.
        """
        query = text(f"""
            SELECT *
            FROM {SCHEMA_NAME}.fn_dashboard_summary(:client_ids, :from_date, :to_date)
        """)
        
        result = db.execute(
            query,
            {
                "client_ids": client_ids,
                "from_date": from_date,
                "to_date": to_date
            }
        ).mappings().first()
        
        return result
    
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
    def get_fda_processing_details(data_request, db: Session):
        """
        Get FDA processing details with pagination directly querying tables.
        Fetches records if pda.status = 7 OR fda.status = 7.
        """
        if data_request.page < 1 or data_request.pageSize < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (data_request.page - 1) * data_request.pageSize
        params = {}

        where_clauses = ["(pda.disbursement_seq IS NOT NULL OR fda.disbursement_seq IS NOT NULL)"]

        if data_request.clientId:
            try:
                client_ids = [int(x) for x in data_request.clientId]
            except (ValueError, TypeError):
                client_ids = list(data_request.clientId)
            where_clauses.append("td.client_id = ANY(:client_ids)")
            params["client_ids"] = client_ids

        if getattr(data_request, 'monthRange', None):
            if data_request.monthRange.from_date:
                where_clauses.append("COALESCE(fda.fda_etd, pda.pda_etd)::date >= :from_date::date")
                params["from_date"] = data_request.monthRange.from_date
            if data_request.monthRange.to_date:
                where_clauses.append("COALESCE(fda.fda_etd, pda.pda_etd)::date <= :to_date::date")
                params["to_date"] = data_request.monthRange.to_date

        if getattr(data_request, 'yearRange', None):
            if data_request.yearRange.from_year:
                where_clauses.append("EXTRACT(YEAR FROM COALESCE(fda.fda_etd, pda.pda_etd)) >= :from_year")
                params["from_year"] = int(data_request.yearRange.from_year)
            if data_request.yearRange.to_year:
                where_clauses.append("EXTRACT(YEAR FROM COALESCE(fda.fda_etd, pda.pda_etd)) <= :to_year")
                params["to_year"] = int(data_request.yearRange.to_year)

        if data_request.tableFilter:
            tf = data_request.tableFilter
            if tf.vessel:
                where_clauses.append("COALESCE(vsl.fda_vsl_dtls ->> 'name', vsl.vsl_dtls ->> 'name') = ANY(:vessel_names)")
                params["vessel_names"] = list(tf.vessel)
            if tf.country:
                where_clauses.append("country.name = ANY(:country_names)")
                params["country_names"] = list(tf.country)
            if tf.port:
                where_clauses.append("port.name = ANY(:port_names)")
                params["port_names"] = list(tf.port)
            if tf.loa:
                if tf.loa.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric) >= :loa_min")
                    params["loa_min"] = tf.loa.min_value
                if tf.loa.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric) <= :loa_max")
                    params["loa_max"] = tf.loa.max_value
            if tf.nrt:
                if tf.nrt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric) >= :nrt_min")
                    params["nrt_min"] = tf.nrt.min_value
                if tf.nrt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric) <= :nrt_max")
                    params["nrt_max"] = tf.nrt.max_value
            if tf.grt:
                if tf.grt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric) >= :grt_min")
                    params["grt_min"] = tf.grt.min_value
                if tf.grt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric) <= :grt_max")
                    params["grt_max"] = tf.grt.max_value
            if tf.rgrt:
                if tf.rgrt.min_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric) >= :rgrt_min")
                    params["rgrt_min"] = tf.rgrt.min_value
                if tf.rgrt.max_value is not None:
                    where_clauses.append("COALESCE((NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric, (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric) <= :rgrt_max")
                    params["rgrt_max"] = tf.rgrt.max_value

        where_str = " AND ".join(where_clauses)

        base_sql = f"""
            FROM {SCHEMA_NAME}.txn_disbursement td
            LEFT JOIN {SCHEMA_NAME}.txn_pda pda 
                ON td.disbursement_seq = pda.disbursement_seq 
               AND (pda.state IS NULL OR pda.state <> 'D')
            LEFT JOIN {SCHEMA_NAME}.txn_fda fda 
                ON td.disbursement_seq = fda.disbursement_seq 
               AND (fda.state IS NULL OR fda.state <> 'D')
            LEFT JOIN {SCHEMA_NAME}.txn_pda_vessel_details vsl 
                ON td.pda_vsl_id = vsl.pda_vsl_id
            LEFT JOIN {SCHEMA_NAME}.ma_country country 
                ON td.country_id = country.country_id
            LEFT JOIN {SCHEMA_NAME}.ma_port port 
                ON td.port_id = port.port_id
            WHERE {where_str}
        """

        count_query = text(f"SELECT COUNT(DISTINCT td.disbursement_seq) {base_sql}")
        total_count = db.execute(count_query, params).scalar() or 0

        data_query = text(f"""
            SELECT 
                td.disbursement_seq,
                td.client_id,
                COALESCE(fda.fda_etd, pda.pda_etd) AS etd,
                COALESCE(
                    vsl.fda_vsl_dtls ->> 'name',
                    vsl.vsl_dtls ->> 'name'
                ) AS vessel_name,
                td.country_id,
                country.name AS country_name,
                td.port_id,
                port.name AS port_name,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'loa'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'loa'), ''))::numeric
                ) AS loa,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'grt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'grt'), ''))::numeric
                ) AS grt,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'rgrt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'rgrt'), ''))::numeric
                ) AS rgrt,
                COALESCE(
                    (NULLIF((vsl.fda_vsl_dtls ->> 'nrt'), ''))::numeric,
                    (NULLIF((vsl.vsl_dtls ->> 'nrt'), ''))::numeric
                ) AS nrt,
                td.loss_prevention_pda,
                td.loss_prevention_fda,
                CASE 
                    WHEN td.loss_prevention_pda IS NULL AND td.loss_prevention_fda IS NULL THEN td.total_loss_prevented
                    ELSE (COALESCE(td.loss_prevention_pda, 0) + COALESCE(td.loss_prevention_fda, 0))
                END AS total_loss_prevented,
                td.loss_prevented_reason,
                CASE
                    WHEN fda.disbursement_seq IS NULL THEN NULL::double precision
                    WHEN (fda.state = 'D') THEN NULL::double precision
                    WHEN (upper(fda.fda_currency_from) = 'USD') THEN (((fda.portagent_fda_data -> 'services') ->> 'grand_total'))::double precision
                    WHEN (upper(fda.fda_currency_to) = 'USD') THEN (round(((((fda.portagent_fda_data -> 'services') ->> 'grand_total'))::numeric * fda.fda_roe::numeric), 2))::double precision
                    WHEN (upper(fda.pmt_curr_to) = 'USD') THEN fda.portagent_fda_amount
                    ELSE NULL::double precision
                END AS fda_amount,
                CASE
                    WHEN pda.disbursement_seq IS NULL THEN NULL::double precision
                    WHEN (upper(pda.pda_currency_from) = 'USD') THEN (((pda.portagent_pda_data -> 'services') ->> 'grand_total'))::double precision
                    WHEN (upper(pda.pda_currency_to) = 'USD') THEN (round(((((pda.portagent_pda_data -> 'services') ->> 'grand_total'))::numeric * pda.pda_roe::numeric), 2))::double precision
                    WHEN (upper(pda.pmt_curr_to) = 'USD') THEN pda.portagent_pda_amount
                    ELSE NULL::double precision
                END AS pda_amount,
                CASE
                    WHEN fda.disbursement_seq IS NULL THEN NULL::text
                    WHEN (fda.state = 'D') THEN ''
                    ELSE fda.manual_fda_amount
                END AS manual_fda_amount,
                pda.manual_pda_amount::text AS manual_pda_amount
            {base_sql}
            ORDER BY etd DESC NULLS LAST
            OFFSET :offset LIMIT :limit
        """)

        params["offset"] = offset
        params["limit"] = data_request.pageSize

        records = db.execute(data_query, params).mappings().all()

        return records, total_count


    
    @staticmethod
    def get_dashboard_filter_data(client_id: Optional[int], db: Session):
        """
        Get unique filter data for dashboard filters.
        Returns distinct values for clients (id + name), vessel_name, country_name, port_name.
        """
        # Query for distinct client IDs from disbursement table
        client_ids_result = db.query(TxnDisbursement.client_id).distinct().order_by(
            TxnDisbursement.client_id
        ).all()
        client_ids = [c[0] for c in client_ids_result if c[0]]
        
        # Query for distinct vessel names
        if client_id:
            vessel_names_result = db.query(VwFdaProcessingDetails.vessel_name).filter(
                VwFdaProcessingDetails.client_id == client_id
            ).distinct().order_by(
                VwFdaProcessingDetails.vessel_name
            ).all()
        else:
            vessel_names_result = db.query(VwFdaProcessingDetails.vessel_name).distinct().order_by(
                VwFdaProcessingDetails.vessel_name
            ).all()
        vessel_names = [v[0] for v in vessel_names_result if v[0]]
    
        
        # Query for distinct country names
        if client_id:
            country_names_result = db.query(VwFdaProcessingDetails.country_name).filter(
                VwFdaProcessingDetails.client_id == client_id
            ).distinct().order_by(
                VwFdaProcessingDetails.country_name
            ).all()
        else:
            country_names_result = db.query(VwFdaProcessingDetails.country_name).distinct().order_by(
                VwFdaProcessingDetails.country_name
            ).all()
        country_names = [c[0] for c in country_names_result if c[0]]
        
        # Query for distinct port names
        if client_id:
            port_names_result = db.query(VwFdaProcessingDetails.port_name).filter(
                VwFdaProcessingDetails.client_id == client_id
            ).distinct().order_by(
                VwFdaProcessingDetails.port_name
            ).all()
        else:
            port_names_result = db.query(VwFdaProcessingDetails.port_name).distinct().order_by(
                VwFdaProcessingDetails.port_name
            ).all()
        port_names = [p[0] for p in port_names_result if p[0]]
        
        # Query for LOA min/max values
        loa_stats = db.query(
            func.min(VwFdaProcessingDetails.loa).label('min_loa'),
            func.max(VwFdaProcessingDetails.loa).label('max_loa')
        ).filter(VwFdaProcessingDetails.loa.isnot(None)).first()
        
        # Query for NRT min/max values
        nrt_stats = db.query(
            func.min(VwFdaProcessingDetails.nrt).label('min_nrt'),
            func.max(VwFdaProcessingDetails.nrt).label('max_nrt')
        ).filter(VwFdaProcessingDetails.nrt.isnot(None)).first()
        
        # Query for GRT min/max values
        grt_stats = db.query(
            func.min(VwFdaProcessingDetails.grt).label('min_grt'),
            func.max(VwFdaProcessingDetails.grt).label('max_grt')
        ).filter(VwFdaProcessingDetails.grt.isnot(None)).first()
        
        # Query for RGRT min/max values
        rgrt_stats = db.query(
            func.min(VwFdaProcessingDetails.rgrt).label('min_rgrt'),
            func.max(VwFdaProcessingDetails.rgrt).label('max_rgrt')
        ).filter(VwFdaProcessingDetails.rgrt.isnot(None)).first()
        
        # Get client details (id and name) from the MaCompany table
        clients_result = db.query(MaCompany.company_id, MaCompany.company_name).filter(
            MaCompany.company_id.in_(client_ids),
            MaCompany.status == 'Y'
        ).order_by(MaCompany.company_name).all()
        
        clients_list = [{"id": c[0], "name": c[1]} for c in clients_result] if clients_result else []
        
        filter_data = {
            "clients": clients_list,
            "vessel_name": vessel_names,
            "country_name": country_names,
            "port_name": port_names,
            "loa": {"min_value": float(loa_stats.min_loa), "max_value": float(loa_stats.max_loa)} if loa_stats.min_loa is not None else None,
            "nrt": {"min_value": float(nrt_stats.min_nrt), "max_value": float(nrt_stats.max_nrt)} if nrt_stats.min_nrt is not None else None,
            "grt": {"min_value": float(grt_stats.min_grt), "max_value": float(grt_stats.max_grt)} if grt_stats.min_grt is not None else None,
            "rgrt": {"min_value": float(rgrt_stats.min_rgrt), "max_value": float(rgrt_stats.max_rgrt)} if rgrt_stats.min_rgrt is not None else None
        }
        
        return filter_data
