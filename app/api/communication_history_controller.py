from fastapi import APIRouter, Request,Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.core.decorators import jwt_required
from app.dto.communication_history_dto import TxnCommunicationHistoryBaseRequestDTO
from app.services.communication_history_service_impl import TxnCommunicationHistoryServiceImpl
import os
from dotenv import load_dotenv
import logging
from sqlalchemy.inspection import inspect


logger = logging.getLogger("app_logger")
commHistoryController = APIRouter()													
load_dotenv()
HOST = os.getenv("HOST")
ALLOWED_ROLES = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "User"}
]
com_history_service = TxnCommunicationHistoryServiceImpl()


@commHistoryController.post("/api/v1/fetch_communication_history")
@jwt_required
async def fetch_communication_history_detail(request: Request,dto:TxnCommunicationHistoryBaseRequestDTO, db: Session = Depends(get_db)):
    username = request.state.user["username"]
    response = com_history_service.fetch_communication_history_detail(dto,db)

    return response
