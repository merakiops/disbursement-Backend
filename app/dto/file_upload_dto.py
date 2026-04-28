from pydantic import BaseModel
from typing import Optional,List


class FileUploadRequestDTO(BaseModel):
    file_path:Optional[List[str]] = None

class FileDTO(BaseModel):
    file_name:Optional[str]=None
    md5_file:Optional[str]=None
    file_path:Optional[str] = None
    file_description:Optional[str]=None
    sync:Optional[str]=None


class FileUploadSaveRequestDTO(BaseModel):
 
    pda_fda_flag:Optional[str]=None
    disbursement_seq:Optional[int]=None
    source_type:Optional[str]=None
    files:Optional[List[FileDTO]]
    


class ListOfUploadedFilesRequestDTO(BaseModel):
    disbursement_seq:Optional[int]=None
    pda_fda_flag:Optional[str]=None
    