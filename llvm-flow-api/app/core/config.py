from pathlib import Path
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict

from app.utils import find_project_root


class Settings(BaseSettings):
    TEST_MODE: bool = False
    LOGGING_LEVEL: Literal["DEBUG", "INFO"] = "INFO"
    STAGE: Literal["dev", "prod"] = "dev"
    SQLITE_DB_NAME: str = "llvm-flow.db.sqlite3"
    S3_BUCKET: str | None = None

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        db_path = find_project_root() / self.SQLITE_DB_NAME

        db_path.parent.mkdir(parents=True, exist_ok=True)

        return f"sqlite:///{db_path}"

    @property
    def MEDIA_DIR(self) -> Path:
        project_root = find_project_root()
        return project_root / "media"

    @property
    def S3_BUCKET_SAFE(self) -> str:
        if not self.S3_BUCKET:
            raise ValueError(
                "S3_BUCKET is not set. Set the LLVM_FLOW_S3_BUCKET "
                "environment variable to use S3 storage."
            )
        return self.S3_BUCKET

    model_config = SettingsConfigDict(env_prefix="LLVM_FLOW_")


settings = Settings()
