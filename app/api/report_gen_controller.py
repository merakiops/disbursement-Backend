from fastapi import APIRouter, Depends, HTTPException, Request, Response
from fastapi.responses import FileResponse, StreamingResponse
from sqlalchemy.orm import Session
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML, CSS
from datetime import date, datetime
import os
import json
from sqlalchemy.inspection import inspect
from app.db import get_db
from app.dto.vw_report_dto import PdaReportRequestDTO
from app.services.report_service_impl import PdaReportServiceImpl
from app.core.decorators import jwt_required

reportgenController = APIRouter()
pda_report_service = PdaReportServiceImpl()

# Path to your Jinja2 templates directory
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
APP_DIR = os.path.join(BASE_DIR, "..")
TEMPLATE_DIR = os.path.join(APP_DIR, "templates","Report_templates")
env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))


@reportgenController.post("/api/v1/report_generation")
@jwt_required
async def report_generation(request: Request,dto:PdaReportRequestDTO, db: Session = Depends(get_db)):
    """
    Generates a PDA and FDA report PDF for the given disbursement_seq and report_type using data from the view 'vw_pda_report and 'vw_fda_report'
    """
    # Fetch the report data from database
    
    report = pda_report_service.get_rep_deatils_by_id(dto, db)
    if not report:
        raise HTTPException(status_code=404, detail="Cannot generate report: report not found.") 

    # Convert a SQLAlchemy model instance into a clean dictionary.
    report_dict = {c.key: getattr(report, c.key) for c in inspect(report).mapper.column_attrs}
    
    # Load the Jinja2 HTML For PDA and FDA report based on the report type featch the template
    if dto.report_type=="PDA":
        template = env.get_template("pda_report_template.html")
        
    elif dto.report_type=="FDA":
        template = env.get_template("fda_report_template.html")
    
    service_data = report_dict.get("service_charge")
    
    if isinstance(service_data, str):
        try:
            report_dict["service_charge"] = json.loads(service_data)
        except json.JSONDecodeError:
            report_dict["service_charge"] = []
    elif service_data is None:
        report_dict["service_charge"] = []
    
    report_dict = pda_report_service.chunk_service_items(report_dict)

    # Render the HTML using the report data
    html_content = template.render(**report_dict) 

    # Generate PDF from the HTML
    css_path = os.path.join(TEMPLATE_DIR, "report_styles.css")
    pdf_content = HTML(string=html_content, base_url=TEMPLATE_DIR).write_pdf(
        stylesheets=[CSS(filename=css_path)]
    )
    
    # print("pdf_content",pdf_content)
    if dto.report_type=="PDA":
        report_name=f"MDA{dto.disbursement_seq}_PDA"
    else:
        report_name=f"MDA{dto.disbursement_seq}_FDA"
        
   
    # Return PDF response
    return Response(
        content=pdf_content,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"""attachment; filename="{report_name}".pdf"""
        }
    )
 