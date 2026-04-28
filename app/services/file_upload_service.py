from abc import ABC, abstractmethod
from app.dto.file_upload_dto import FileUploadRequestDTO,FileUploadSaveRequestDTO,ListOfUploadedFilesRequestDTO
from sqlalchemy.orm import Session

class FileUpload(ABC):

    @abstractmethod
    def generate_presigned_urls(self,dto: FileUploadRequestDTO):
        pass

    @abstractmethod
    def generate_presigned_url_download(self,dto: FileUploadRequestDTO):
        pass

    @abstractmethod
    def delete_file(self, file_id: int, db: Session):
        pass

    @abstractmethod
    def file_upload_save(self,dto:FileUploadSaveRequestDTO,db: Session,user:str):
        pass

    @abstractmethod
    def list_of_uploaded_files(self,dto:ListOfUploadedFilesRequestDTO,db: Session,user:str):
        pass

    @abstractmethod
    def list_of_uploaded_files_comm_hist(self, dto:ListOfUploadedFilesRequestDTO, db: Session, user:str):
        pass
