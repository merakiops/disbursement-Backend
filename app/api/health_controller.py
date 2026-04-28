from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse


health_controller = APIRouter()

# rate_limit_store = defaultdict(list)

# @health_controller.get("/api/v1/health")
# def health_check(request: Request, db: Session = Depends(get_db)):
#     client_ip = request.client.host if request.client else "unknown"
#     current_time = datetime.now()
    
#     rate_limit_store[client_ip] = [t for t in rate_limit_store[client_ip] if current_time - t < timedelta(minutes=1)]
    
#     if len(rate_limit_store[client_ip]) >= 5:
#         return JSONResponse(status_code=429, content={"error": "Rate limit exceeded. Maximum 5 requests per minute."})
    
#     rate_limit_store[client_ip].append(current_time)
    
#     try:
#         db.execute(text("SELECT 1"))
#         db_status = "connected"
#     except Exception:
#         db_status = "disconnected"
    
#     return {"status": "active", "message": "Application is running", "database": db_status}

@health_controller.get("/api/v1/health")
def health_check():
    try:
        return {"status": "active", "message": "Application is running"}
    except Exception:
        return JSONResponse(status_code=503, content={"status": "error", "message": "Application error"})
 
