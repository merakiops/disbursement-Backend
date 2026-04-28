import logging
from dotenv import load_dotenv
import os
from sqlalchemy.orm import Session
import pytz
from app.dto.file_upload_dto import FileUploadRequestDTO,FileUploadSaveRequestDTO,ListOfUploadedFilesRequestDTO
from app.services.file_upload_service import FileUpload
from app.repo.file_upload import FileUploadRepository

class FileUploadImpl(FileUpload):

    def generate_presigned_urls(self, dto: FileUploadRequestDTO):
        return FileUploadRepository.generate_presigned_urls(dto)

    def generate_presigned_url_download(self, dto: FileUploadRequestDTO):
        return FileUploadRepository.generate_presigned_url_download(dto)

    def delete_file(self, file_id: int, db: Session):
        return FileUploadRepository.delete_file(file_id,db)
    
    def file_upload_save(self,dto:FileUploadSaveRequestDTO,db: Session,user:str):
        return FileUploadRepository.file_upload_save(dto,db,user)
    
    def list_of_uploaded_files(self,dto:ListOfUploadedFilesRequestDTO,db: Session,user:str):
        return FileUploadRepository.list_of_uploaded_files(dto,db,user)
    
    def get_file_download_url(self, file_id: int, db: Session):
        """Get pre-signed download URL for a specific file"""
        return FileUploadRepository.get_file_download_url(file_id, db)
    
    def list_of_uploaded_files_comm_hist(self, dto:ListOfUploadedFilesRequestDTO,db: Session,user:str):
        return FileUploadRepository.list_of_uploaded_files_comm_hist(dto, db, user)
        
