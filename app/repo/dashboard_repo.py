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
        Get FDA processing details with pagination using SQLAlchemy ORM.
        """
        if data_request.page < 1 or data_request.pageSize < 1:
            raise ValueError("Page number and page size must be greater than 0")

        offset = (data_request.page - 1) * data_request.pageSize
        base_query = db.query(VwFdaProcessingDetails)
        filters = []

        if data_request.clientId:
            filters.append(
                VwFdaProcessingDetails.client_id.in_(data_request.clientId)
            )

        if data_request.tableFilter:
            tf = data_request.tableFilter
            if tf.vessel:
                filters.append(
                    VwFdaProcessingDetails.vessel_name.in_(tf.vessel)
                )
            if tf.country:
                filters.append(
                    VwFdaProcessingDetails.country_name.in_(tf.country)
                )
            if tf.port:
                filters.append(
                    VwFdaProcessingDetails.port_name.in_(tf.port)
                )
            if tf.loa:
                if tf.loa.min_value is not None:
                    filters.append(VwFdaProcessingDetails.loa >= tf.loa.min_value)
                if tf.loa.max_value is not None:
                    filters.append(VwFdaProcessingDetails.loa <= tf.loa.max_value)
            if tf.nrt:
                if tf.nrt.min_value is not None:
                    filters.append(VwFdaProcessingDetails.nrt >= tf.nrt.min_value)
                if tf.nrt.max_value is not None:
                    filters.append(VwFdaProcessingDetails.nrt <= tf.nrt.max_value)
            if tf.grt:
                if tf.grt.min_value is not None:
                    filters.append(VwFdaProcessingDetails.grt >= tf.grt.min_value)
                if tf.grt.max_value is not None:
                    filters.append(VwFdaProcessingDetails.grt <= tf.grt.max_value)
            if tf.rgrt:
                if tf.rgrt.min_value is not None:
                    filters.append(VwFdaProcessingDetails.rgrt >= tf.rgrt.min_value)
                if tf.rgrt.max_value is not None:
                    filters.append(VwFdaProcessingDetails.rgrt <= tf.rgrt.max_value)

        if filters:
            base_query = base_query.filter(*filters)

        base_query = base_query.order_by(
            VwFdaProcessingDetails.etd.desc()
        )

        total_count = base_query.distinct().count()
 
        records = (
            base_query
            .offset(offset)
            .limit(data_request.pageSize)
            .all()
        )

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
