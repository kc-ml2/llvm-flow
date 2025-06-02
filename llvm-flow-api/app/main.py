from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import endpoints
from app.core.config import settings

__version__ = "1.0.0"

app = FastAPI(
    title="LLVM Flow API",
    version=__version__,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS 설정: 모든 origin 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://llvmflow.kc-ml2.com"]
    if settings.STAGE == "prod"
    else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": f"LLVM Flow API version {__version__}"}


app.include_router(endpoints.router)
