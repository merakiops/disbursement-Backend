from fastapi import APIRouter,HTTPException,Request,Depends
from app.core.decorators import jwt_required
import os
from dotenv import load_dotenv
from app.db import get_db
import logging
from app.dto.file_upload_dto import FileUploadRequestDTO,FileUploadSaveRequestDTO,ListOfUploadedFilesRequestDTO
from app.services.file_upload_service_impl import FileUploadImpl
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

logger = logging.getLogger("app_logger")
file_upload = APIRouter()													
load_dotenv()
HOST = os.getenv("HOST")
ALLOWED_ROLES = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]
file_uploads = FileUploadImpl()
@file_upload.post("/api/v1/file_upload")
# @jwt_required
def presigned_url(request: Request,dto:FileUploadRequestDTO,db: Session = Depends(get_db)):
    try: 
        url = file_uploads.generate_presigned_urls(dto)
        return {"presigned_url": url}
    except RuntimeError as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@file_upload.post("/api/v1/file_upload_save")
@jwt_required
def file_upload_save(request:Request,dto:FileUploadSaveRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try: 
        file_uploads.file_upload_save(dto,db,username)   
        return JSONResponse(
            status_code=200,
            content={"message": "File saved successfully"}
            ) 
    except RuntimeError as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@file_upload.post("/api/v1/list_of_uploaded_files")
@jwt_required
def list_of_uploaded_files(request:Request,dto:ListOfUploadedFilesRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try: 
        file=file_uploads.list_of_uploaded_files(dto,db,username)
        return file
    except RuntimeError as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@file_upload.get("/api/v1/file_download/{file_id}")
@jwt_required
def get_file_download_url(request: Request, file_id: int, db: Session = Depends(get_db)):
    """Get pre-signed download URL for a specific file"""
    try:
        url = file_uploads.get_file_download_url(file_id, db)
        return {"download_url": url}
    except RuntimeError as e:
        raise HTTPException(status_code=404, detail=str(e))

@file_upload.delete("/api/v1/file_delete/{file_id}")
def delete_files(request: Request,file_id:int,db: Session = Depends(get_db)):
    try:
        file=file_uploads.delete_file(file_id,db)
        if file==True:
            return JSONResponse(
                status_code=200,
                content={"message": "File deleted successfully"}
                ) 
        else:
            return JSONResponse(
                status_code=404,
                content={"message": "File not found"}
                ) 

    except RuntimeError as e:
        raise HTTPException(status_code=400, detail=str(e))


@file_upload.post("/api/v1/list_of_uploaded_files_comm_hist")
@jwt_required
def list_of_uploaded_files_comm_hist(request:Request,dto:ListOfUploadedFilesRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    try: 
        file=file_uploads.list_of_uploaded_files_comm_hist(dto,db,username)
        return file
    except RuntimeError as e:
        raise HTTPException(status_code=400, detail=str(e))
