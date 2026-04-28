import boto3
from botocore.exceptions import ClientError
import os
from app.dto.file_upload_dto import FileUploadRequestDTO,FileUploadSaveRequestDTO,ListOfUploadedFilesRequestDTO
import os
from sqlalchemy.orm import Session
from botocore.client import Config
from datetime import datetime
from dotenv import load_dotenv
from app.models.txn_disbursement_files import TxnDisbursementFiles
from app.constants.constants import ACTIVE_STATUS

load_dotenv()
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION")
BUCKET_NAME = os.getenv("BUCKET_NAME")
   
class FileUploadRepository: 
    @staticmethod
    def get_s3_client():
        
        key = AWS_ACCESS_KEY_ID
        secret = AWS_SECRET_ACCESS_KEY
        if key and secret: # Use explicit credentials for development/testing
            return boto3.client(
                "s3",
                region_name=AWS_REGION,
                aws_access_key_id=key,
                aws_secret_access_key=secret,
                config=Config(s3={'addressing_style': 'virtual'})
            )
        else: # Use IAM Role Permissions
            return boto3.client(
                "s3",
                region_name=AWS_REGION,
                config=Config(s3={'addressing_style': 'virtual'})
            )


    @staticmethod
    def generate_presigned_url(operation, file_path, expires_in=900):
        """Generate presigned URL for upload or download operations"""
        s3_client = FileUploadRepository.get_s3_client()
        try:
            params = {"Bucket": BUCKET_NAME, "Key": file_path}
            
            # Add ContentType for upload operations
            if operation == "put_object":
                file_ext = file_path.split('.')[-1].lower() if '.' in file_path else ''
                content_type = {
                    # PDF
                    'pdf': 'application/pdf',
                    # Images
                    'jpg': 'image/jpeg', 
                    'jpeg': 'image/jpeg',
                    'png': 'image/png',
                    # Microsoft Office
                    'doc': 'application/msword',
                    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'xls': 'application/vnd.ms-excel',
                    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                }.get(file_ext, 'application/octet-stream')
                params["ContentType"] = content_type
            
            return s3_client.generate_presigned_url(operation, Params=params, ExpiresIn=expires_in)
        except ClientError as e:
            raise RuntimeError(f"Failed to generate presigned URL: {str(e)}")

    @staticmethod
    def generate_presigned_urls(dto: FileUploadRequestDTO):
        return [FileUploadRepository.generate_presigned_url("put_object", path, 300) for path in dto.file_path]
        
    @staticmethod
    def file_upload_save(dto: FileUploadSaveRequestDTO, db: Session, user: str):
        if not dto.files:
            return

        file_names = [f.file_name for f in dto.files]
        existing_files = db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.file_name.in_(file_names),
            TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
            TxnDisbursementFiles.pda_fda_flag == dto.pda_fda_flag,
            TxnDisbursementFiles.is_deleted == 'N'
        ).all()

        existing_files_dict = {f.file_name: f for f in existing_files}

        for file_item in dto.files:
            if file_item.sync == 'N':
                existing_file = existing_files_dict.get(file_item.file_name)

                if existing_file:
                    if file_item.md5_file == existing_file.md5_file:
                        continue
                    else:
                        existing_file.is_deleted = 'Y'
                        existing_file.updated_on = datetime.now()
                        existing_file.updated_by = user
                        db.flush()  

                    if file_item.md5_file == existing_file.md5_file:
                        pass
            
                record = TxnDisbursementFiles(
                    disbursement_seq=dto.disbursement_seq,
                    file_name=file_item.file_name,
                    file_description=file_item.file_description,
                    complete_file_path=file_item.file_path,
                    md5_file=file_item.md5_file,
                    pda_fda_flag=dto.pda_fda_flag,
                    is_deleted='N',
                    created_by=user,
                    created_on=datetime.now(),
                    sync=file_item.sync,
                    source_type=dto.source_type if dto.source_type else "Meraki"
                )
                db.add(record)

            db.commit()

            
        
    @staticmethod
    def list_of_uploaded_files(dto:ListOfUploadedFilesRequestDTO,db: Session,user:str):
        if not dto.disbursement_seq:
            return []

        query = db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq,
            TxnDisbursementFiles.is_deleted == 'N'
        )

        if dto.pda_fda_flag=='PDA' or dto.pda_fda_flag=='FDA':
            query = query.filter(TxnDisbursementFiles.pda_fda_flag == dto.pda_fda_flag)

        files = query.all()

        result = []     
        for file in files:
            presigned_url = FileUploadRepository.generate_presigned_url("get_object", file.complete_file_path)
            result.append({
                "file_id": file.file_id,
                "name": file.file_name,
                "description": file.file_description,
                "complete_file_path": file.complete_file_path,
                "presigned_url": presigned_url,
                "sync":file.sync,
                "source_type":file.source_type
            })

        return result

    @staticmethod
    def get_communication_history_files(comm_history_id: int, db: Session):
        """Get file metadata for communication history without pre-signed URLs"""
        from app.models.txn_communication_history_files import TxnCommunicationHistoryFiles
        
        files = db.query(
            TxnDisbursementFiles.file_id,
            TxnDisbursementFiles.file_name.label('name'),
            TxnDisbursementFiles.file_description.label('description'),
            TxnDisbursementFiles.complete_file_path,
            TxnDisbursementFiles.sync,
            TxnDisbursementFiles.source_type
        ).join(
            TxnCommunicationHistoryFiles,
            TxnDisbursementFiles.file_id == TxnCommunicationHistoryFiles.file_id
        ).filter(
            TxnCommunicationHistoryFiles.comm_history_id == comm_history_id
        ).all()
        
        return [{
            "file_id": file.file_id,
            "name": file.name,
            "description": file.description,
            "complete_file_path": file.complete_file_path,
            "sync": file.sync,
            "source_type": file.source_type
        } for file in files]

    @staticmethod
    def get_file_download_url(file_id: int, db: Session):
        """Get pre-signed download URL for a specific file"""
        file = db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.file_id == file_id,
            TxnDisbursementFiles.is_deleted == 'N'
        ).first()
        
        if not file:
            raise RuntimeError("File not found or deleted")
        
        return FileUploadRepository.generate_presigned_url("get_object", file.complete_file_path)

    @staticmethod
    def delete_file(file_id: int, db: Session):
        file = db.query(TxnDisbursementFiles).filter(TxnDisbursementFiles.file_id == file_id).first()
        if not file:
            return False     
        file.is_deleted = ACTIVE_STATUS
        db.commit()
        return True
   
    def syn_file(file_list: list, db: Session,user:str):
        if not file_list:
            return

        # Update all matching file_ids
        db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.file_id.in_(file_list)
        ).update(
            {
                TxnDisbursementFiles.sync: 'Y',
                TxnDisbursementFiles.updated_on: datetime.now(),
                TxnDisbursementFiles.updated_by: user
            },
            synchronize_session=False
        )

        db.commit()



    @staticmethod
    def list_of_uploaded_files_comm_hist(dto:ListOfUploadedFilesRequestDTO,db: Session,user:str):
        if not dto.disbursement_seq:
            return []

        query = db.query(TxnDisbursementFiles).filter(
            TxnDisbursementFiles.disbursement_seq == dto.disbursement_seq
        )

        if dto.pda_fda_flag=='PDA' or dto.pda_fda_flag=='FDA':
            query = query.filter(TxnDisbursementFiles.pda_fda_flag == dto.pda_fda_flag)

        files = query.all()

        result = []     
        for file in files:
            presigned_url = FileUploadRepository.generate_presigned_url("get_object", file.complete_file_path)
            result.append({
                "file_id": file.file_id,
                "name": file.file_name,
                "description": file.file_description,
                "complete_file_path": file.complete_file_path,
                "presigned_url": presigned_url,
                "sync":file.sync,
                "source_type":file.source_type
            })

        return result