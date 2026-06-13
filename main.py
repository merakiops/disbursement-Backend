from dotenv import load_dotenv
import os
import socket
import logging
from logging.handlers import RotatingFileHandler
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
import jwt
import pytz
import random
from datetime import datetime, timedelta

from app.api.dynamic_table_controller import dynamic_table_controller
from app.api.auth_controller import Auth_controller
from app.api.otp_controller import Otp_controller
from app.api.password_rest_controller import PasswordReset_controller
from app.api.company_controller import companyController
from app.api.user_controller import userController
from app.api.country_controller import countryController
from app.api.vessel_controller import vesselController
from app.api.client_controller import clientController
from app.api.cargo_controller import cargoController
from app.api.purpose_controller import purposeController
from app.api.port_agent_controller import portAgentController
from app.api.port_controller import portController
from app.api.master_controller import masterController
from app.api.tariff_controller import tariffController
from app.api.tariff_list_controller import tariff_controller
from app.api.tariff_service_controller import tariff_service_controller
from app.api.pda_controller import disbursementController
from app.api.fda_controller import disbursementControllerFDA
from app.api.report_gen_controller import reportgenController
from app.api.communication_history_controller import commHistoryController
from app.api.file_upload_controller import file_upload
from app.api.disbursement_filter_controller import disbursementFilter
from app.api.dashboard_controller import DashboardController
from app.api.health_controller import health_controller
from app.db import engine, Base
from app.db import get_db  # your db session generator
from app.constants.constants import ALLOWED_ORIGINS
from app.config import Config
from app.api.test import testrouter
from demurrage.api.router import router as demurrage_router
from app.core.jwtService import (
    get_token_from_cache,
    store_token_in_cache,
    get_current_user_roles,
    clean_cache,
    generate_token
)
from app.repo.user_repo import UserRepo
import uvicorn
from app.core.decorators import refresh_token_middleware
from starlette.middleware.base import BaseHTTPMiddleware
import traceback
from app.exceptions.AppException import AppException
from fastapi import FastAPI, Request, HTTPException
from fastapi.exceptions import RequestValidationError

try:
    HOST = socket.gethostbyname(socket.gethostname())
except Exception:
    HOST = "0.0.0.0"
# === Load environment variables ===
environment = os.getenv("env", "prod")
env_files = {
    "prod": ".env.prod",
}
env_file = env_files.get(environment, ".env")
load_dotenv(env_file)

print(f"Loaded environment: {environment}")
print(f"Using .env file: {env_file}")

try:
    HOST = socket.gethostbyname(socket.gethostname())
except Exception:
    HOST = "0.0.0.0"

# === Initialize FastAPI app ===
app = FastAPI(docs_url="/api/docs")
app.middleware("http")(refresh_token_middleware)
# === Create DB tables if needed ===
#Base.metadata.create_all(bind=engine)

#Exception

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled Exception: {traceback.format_exc()}")
    return JSONResponse(
        status_code=500,
        content={
            "status": "error",
            "status_code": 500,
            "error": "Internal Server Error",
            "details": str(exc),
        },
    )


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    logger.warning(f"HTTPException: {traceback.format_exc()}")
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "status": "error",
            "status_code": exc.status_code,
            "error": exc.detail,
            "details": str(exc),
        },
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    logger.warning(f"Validation error: {exc.errors()}")
    return JSONResponse(
        status_code=422,
        content={
            "status": "error",
            "status_code": 422,
            "error": "Validation Error",
            "details": exc.errors(),
        },
    )


@app.exception_handler(AppException)
async def app_exception_handler(request: Request, exc: AppException):
    logger.warning(f"AppException: {exc.message}")
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "status": "error",
            "status_code": exc.status_code,
            "error": exc.message,
            "details": str(exc),
        },
    )

@app.exception_handler(FileNotFoundError)
async def file_not_found_exception_handler(request: Request, exc: FileNotFoundError):
    logger.warning(f"FileNotFoundError: {traceback.format_exc()}")
    return JSONResponse(
        status_code=404,
        content={
            "status": "error",
            "status_code": 404,
            "error": "File Not Found",
            "details": str(exc),
        },
    )


@app.exception_handler(ValueError)
async def value_error_exception_handler(request: Request, exc: ValueError):
    logger.warning(f"ValueError: {traceback.format_exc()}")
    return JSONResponse(
        status_code=400,
        content={
            "status": "error",
            "status_code": 400,
            "error": "Value Error",
            "details": str(exc),
        },
    )


# === Setup logger ===
LOG_FILE = os.path.join(os.path.dirname(__file__), "app.log")
MAX_LOG_SIZE = 10 * 1024 * 1024  # 10 MB
BACKUP_COUNT = 10

logger = logging.getLogger("app_logger")
if not logger.handlers:
    formatter = logging.Formatter(
        "%(asctime)s - %(levelname)s - %(name)s - [%(filename)s:%(lineno)d] - %(message)s"
    )
    rotating_handler = RotatingFileHandler(LOG_FILE, maxBytes=MAX_LOG_SIZE, backupCount=BACKUP_COUNT)
    rotating_handler.setFormatter(formatter)
    logger.setLevel(logging.INFO)
    logger.addHandler(rotating_handler)

class FixProxySchemeMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Force FastAPI to treat X-Forwarded-Proto (from AWS) as the scheme
        proto = request.headers.get("x-forwarded-proto")
        if proto:
            request.scope["scheme"] = proto
        response = await call_next(request)
        return response


# === Add CORS middleware ===
app.add_middleware(FixProxySchemeMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Include API routers ===
app.include_router(health_controller, tags=["Health Check"])
app.include_router(Auth_controller, tags=["Authentication"])
app.include_router(Otp_controller, tags=["Otp Validation"])
app.include_router(PasswordReset_controller, tags=["Password"])
app.include_router(companyController, tags=["Company"])
app.include_router(userController, tags=["User"])
app.include_router(testrouter, tags=["test"])
app.include_router(countryController,tags=["Country"])
app.include_router(vesselController,tags=["Vessels"])
app.include_router(clientController,tags=["Clients"])
app.include_router(cargoController,tags=["Cargos"])
app.include_router(purposeController,tags=["Purpose"])
app.include_router(portAgentController,tags=["Port-Agent"])
app.include_router(portController,tags=["Ports"])
app.include_router(masterController, tags=["master Data"])
app.include_router(tariffController,tags=["tariff_control"])
app.include_router(tariff_controller)
app.include_router(tariff_service_controller)
app.include_router(disbursementController, tags=["Disbursement"])
app.include_router(disbursementControllerFDA, tags=["DisbursementFDA"])
app.include_router(reportgenController,tags=["PDA and FDA report generation"])
app.include_router(file_upload, tags=["FileUpload"])
app.include_router(commHistoryController,tags=["communication history"])
app.include_router(disbursementFilter,tags=["filter"])
app.include_router(DashboardController, tags=["Dashboard"])
app.include_router(dynamic_table_controller, tags=["Dynamic Table Creation"])
app.include_router(demurrage_router)

# === Main entrypoint ===
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=HOST,
        port=8081,
        reload=True
    )
