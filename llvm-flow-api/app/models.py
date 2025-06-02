import datetime
import uuid
from typing import Annotated

import pendulum
from pydantic import BaseModel
from sqlalchemy import String, TypeDecorator
from sqlmodel import Field, SQLModel


class CommaSeparatedStrings(TypeDecorator):
    impl = String
    cache_ok = True

    def process_bind_param(
        self, value: list[str] | None, dialect
    ) -> str | None:
        if value is None:
            return None
        return ",".join(value)

    def process_result_value(
        self, value: str | None, dialect
    ) -> list[str] | None:
        if value is None:
            return None
        return value.split(",") if value else []


StringList = Annotated[list[str], CommaSeparatedStrings]


class OptimizationRecord(SQLModel, table=True):
    __tablename__ = "optimization_records"

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4()).replace("-", ""),
        primary_key=True,
        nullable=False,
    )
    user_name: str = Field(nullable=False)
    file_store_dirname: str = Field(nullable=False)
    file_names: StringList = Field(sa_type=CommaSeparatedStrings)
    llvm_version: int = Field(nullable=False)  # version used for clang and opt
    opt_passes: StringList = Field(sa_type=CommaSeparatedStrings)
    created_at: datetime.datetime = Field(
        default_factory=lambda: pendulum.now("UTC")
    )
    updated_at: datetime.datetime = Field(
        default_factory=lambda: pendulum.now("UTC")
    )


class OptimizationPostResponse(BaseModel):
    before_json: dict
    after_json: dict
    before_output: list[str]
    after_output: list[str]
    beforeg_data: str
    afterg_data: str
    file_pass: str


class OptimizationGetResponse(BaseModel):
    id: str
    user_name: str
    opt_passes: list[str]
    file_names: list[str]
    llvm_version: int
    created_at: datetime.datetime
    updated_at: datetime.datetime


class OptimizationGetPagedResponse(BaseModel):
    data: list[OptimizationGetResponse]
    total_count: int
    page: int
    page_size: int
