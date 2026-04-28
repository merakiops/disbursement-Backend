from fastapi import APIRouter, Request,Depends
from app.core.decorators import jwt_required, role_required
from sqlalchemy.orm import Session
from fastapi import Depends
from app.db import get_db
from sqlalchemy import text
import time

testrouter = APIRouter()


@testrouter.get("/api/test1")
@jwt_required

async def latency(request: Request,db: Session = Depends(get_db)):
    start = time.perf_counter()    
    db.execute(text("SELECT name from ma_app_owning_company")) 
    latency_ms = round((time.perf_counter() - start) * 1000, 2) 
    return {"rds_latency_ms": latency_ms }

@testrouter.get("/api/test")
def test(request: Request,db: Session = Depends(get_db)):
    #user_id = request.state.user['user_id']
    #print(user_id)
    return {"message": "Hello World"}