from typing import Optional
from fastapi import APIRouter, Depends, status, UploadFile, File, HTTPException
from fastapi.responses import StreamingResponse, JSONResponse
from sqlalchemy.orm import Session
import tempfile
import os
from demurrage.db import get_db
from demurrage.schemas.request import DemurrageCaseCreateSchema
from demurrage.schemas.response import DemurrageCaseResponseSchema
from demurrage.services.demurrage_service import DemurrageService
from demurrage.services.pdf_generator import generate_demurrage_pdf
from demurrage.services.timesheet_service import extract_timesheet_from_pdf

router = APIRouter(
    prefix="/api/v1/demurrage",
    tags=["Demurrage Calculator"]
)

@router.post(
    "",
    responses={
        200: {"description": "Successful save returning Demurrage Statement PDF file"},
        201: {"model": DemurrageCaseResponseSchema, "description": "Successful save returning case JSON"}
    }
)
def save_demurrage_case(
    payload: DemurrageCaseCreateSchema, 
    format: Optional[str] = "pdf", 
    db: Session = Depends(get_db)
):
    """
    Saves Voyage, Port Operations, Deduction Events and computes the Demurrage Calculations Summary.
    By default, returns the compiled statement as a PDF file stream.
    If 'format=json' is specified, returns the case details as JSON.
    """
    db_voyage = DemurrageService.save_demurrage_case(db, payload)
    
    # Check if PDF response format is requested (default)
    if format != "json":
        pdf_buffer = generate_demurrage_pdf(db_voyage)
        filename = f"Demurrage_Statement_{db_voyage.vessel.replace(' ', '_')}.pdf"
        return StreamingResponse(
            pdf_buffer,
            media_type="application/pdf",
            headers={"Content-Disposition": f"attachment; filename={filename}"}
        )
        
    # Return JSON if explicitly requested
    case_data = DemurrageService.get_demurrage_case(db, db_voyage.id)
    return case_data


@router.get("/{voyage_id}", response_model=DemurrageCaseResponseSchema)
def get_demurrage_case(voyage_id: int, db: Session = Depends(get_db)):
    """
    Retrieves the complete details of a Demurrage Case including Voyage, Ports, Deductions, and Calculations Summary.
    """
    case_data = DemurrageService.get_demurrage_case(db, voyage_id)
    return case_data


@router.get("/{voyage_id}/pdf")
def get_demurrage_case_pdf(voyage_id: int, db: Session = Depends(get_db)):
    """
    Generates and downloads the Demurrage Statement PDF report for the given Voyage ID.
    """
    # Retrieve the voyage ORM object from database
    case_data = DemurrageService.get_demurrage_case(db, voyage_id)
    voyage = case_data["voyage"]
    
    pdf_buffer = generate_demurrage_pdf(voyage)
    filename = f"Demurrage_Statement_{voyage.vessel.replace(' ', '_')}.pdf"
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )


@router.post("/extract")
async def extract_timesheet(
    file: UploadFile = File(...)
):
    """
    Upload a Timesheet PDF and extract structured operation data.
    Runs OCR 100% locally.
    """
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    tmp_path = None
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_path = tmp_file.name

        operations = extract_timesheet_from_pdf(tmp_path)

        return JSONResponse(
            content={
                "success": True,
                "filename": file.filename,
                "total_operations": len(operations),
                "processing": "100% Local — No API used",
                "data": operations
            },
            status_code=200
        )
    except Exception as e:
        import traceback
        import logging
        logging.getLogger("app_logger").error(f"Failed to extract timesheet: {traceback.format_exc()}")
        raise HTTPException(
            status_code=500,
            detail=f"Processing failed: {str(e)}"
        )
    finally:
        if tmp_path and os.path.exists(tmp_path):
            try:
                os.unlink(tmp_path)
            except Exception:
                pass
