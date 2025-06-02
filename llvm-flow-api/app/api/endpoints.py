import json
import os
import shutil
import subprocess
from pathlib import Path
from typing import Annotated, Literal

from fastapi import (
    APIRouter,
    BackgroundTasks,
    Depends,
    File,
    Form,
    HTTPException,
    UploadFile,
)
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app import crud
from app.api.service import (
    after_output,
    before_output,
    read_afterll,
    read_beforell,
    read_json,
)
from app.api.shell_scripts import (
    SCRIPT_CMD_C,
    SCRIPT_CMD_CPP,
    SCRIPT_CMD_LL,
    create_shell_envs,
)
from app.core.config import settings
from app.core.database import get_db
from app.core.logger import logger
from app.models import (
    OptimizationGetPagedResponse,
    OptimizationGetResponse,
    OptimizationPostResponse,
    OptimizationRecord,
)
from app.services.local_storage import (
    copy_directory_from_local,
    save_directory_to_local,
)
from app.services.s3 import download_directory_from_s3, save_directory_to_s3
from app.utils import cleanup_temp_dir, find_project_root, get_directory_name

router = APIRouter()
MEDIA_ROOT = "media"
DUMMY_ROOT = os.path.join(os.path.dirname(__file__), "dummy_data")

TEST_MODE = os.environ.get("TEST_MODE", "false").lower() == "true"


def extract_error_message(full_error_message):
    error_position = full_error_message.find("error generated.")
    warning_position = full_error_message.find("opt: Did you mean")
    if error_position != -1:
        return full_error_message[:error_position]
    elif warning_position != -1:
        return full_error_message[:warning_position]
    else:
        return full_error_message


def load_dummy_json(filename):
    path = os.path.join(os.path.dirname(__file__), "dummy_data", filename)
    with open(path, "r") as f:
        return json.load(f)


def make_test_result():
    def safe_json(path):
        try:
            with open(path, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def safe_txt(path):
        try:
            with open(path, "r") as f:
                return f.read()
        except Exception:
            return ""

    def safe_csv_col(path, col):
        try:
            import csv

            with open(path) as f:
                tr = csv.reader(f, delimiter="\t")
                return [row[0].split(" ")[col] for row in tr if row]
        except Exception:
            return []

    return {
        "before_json": safe_json(
            os.path.join(DUMMY_ROOT, "before/before.json")
        ),
        "after_json": safe_json(os.path.join(DUMMY_ROOT, "after/after.json")),
        "before_output": safe_csv_col(
            os.path.join(DUMMY_ROOT, "output.tsv"), 0
        ),
        "after_output": safe_csv_col(
            os.path.join(DUMMY_ROOT, "output.tsv"), 1
        ),
        "beforeg_data": safe_txt(os.path.join(DUMMY_ROOT, "beforeg.ll")),
        "afterg_data": safe_txt(os.path.join(DUMMY_ROOT, "afterg.ll")),
        "file_pass": "simplifycfg",
    }


def make_result(
    file_save_path: str, opt_passes: list[str]
) -> OptimizationPostResponse:
    return {
        "before_json": read_json(
            os.path.join(file_save_path, "before/before.json")
        ),
        "after_json": read_json(
            os.path.join(file_save_path, "after/after.json")
        ),
        "before_output": before_output(
            os.path.join(file_save_path, "output.tsv")
        ),
        "after_output": after_output(
            os.path.join(file_save_path, "output.tsv")
        ),
        "beforeg_data": read_beforell(file_save_path),
        "afterg_data": read_afterll(file_save_path),
        "file_pass": ",".join(opt_passes),
    }


def validate_string_comma_separated(value: str) -> str:
    try:
        return value.split(",")
    except Exception:
        raise HTTPException(
            status_code=422,
            detail="Invalid comma separated string of opt_passes",
        )


def save_directory_and_cleanup(temp_dir: str, directory_name: str):
    try:
        if settings.STAGE == "prod":
            save_directory_to_s3(temp_dir, directory_name)
        elif settings.STAGE == "dev":
            save_directory_to_local(temp_dir, directory_name)
        else:
            raise Exception(f"Invalid stage: {settings.STAGE}")
    except Exception as e:
        storage_type = "s3" if settings.STAGE == "prod" else "local"
        logger.error(
            f"Failed to save directory {directory_name} to {storage_type}: {e}"
        )
        raise e
    finally:
        cleanup_temp_dir(temp_dir)


@router.post("/upload/{file_type}")
async def upload(
    file_type: Literal["C", "CPP", "LL"],
    background_tasks: BackgroundTasks,
    user_name: Annotated[str, Form()],
    llvm_version: Annotated[int, Form()],
    opt_passes: Annotated[str, Form()],  # comma separated string
    files: list[UploadFile] = File(...),
    db: Session = Depends(get_db),
) -> OptimizationPostResponse:
    # Validate the format of file_names and opt_passes
    opt_passes: list[str] = validate_string_comma_separated(opt_passes)

    if TEST_MODE:
        return make_test_result()

    try:
        # Log the received values
        logger.info(f"Received opt_passes: {opt_passes!r}")
        logger.info(f"Received files: {[f.filename for f in files]}")

        directory_name = get_directory_name()
        root_dirpath = find_project_root()
        logger.info(f"Project root: {root_dirpath}")
        temp_dir = os.path.join(root_dirpath, "tmp", directory_name)
        logger.info(f"Temp directory: {temp_dir}")

        # Create temp directory first
        Path(temp_dir).mkdir(parents=True, exist_ok=True)

        for file in files:
            save_path = Path(temp_dir) / file.filename
            with open(save_path, "wb") as f:
                shutil.copyfileobj(file.file, f)

        script_command_to_run = {
            "C": SCRIPT_CMD_C,
            "CPP": SCRIPT_CMD_CPP,
            "LL": SCRIPT_CMD_LL,
        }[file_type.upper()].format(temp_dir, ",".join(opt_passes))
        logger.info(f"Executing script: {script_command_to_run}")

        try:
            subprocess.run(
                script_command_to_run,
                env=create_shell_envs(llvm_version),
                capture_output=True,
                shell=True,
                check=True,
            )

        except subprocess.CalledProcessError as e:
            logger.error(
                f"{file_type} SCRIPT **FAILED**. Error: {
                    e.stderr.decode('utf-8') if e.stderr else 'Unknown error'
                }"
            )
            error_output = (
                e.stderr.decode("utf-8")
                if e.stderr
                else "Unknown error occurred."
            )
            error_message = extract_error_message(error_output)
            # shutil.rmtree(temp_dir) # Let finally block handle cleanup
            raise HTTPException(status_code=500, detail=error_message)

        optimization_record = OptimizationRecord(
            user_name=user_name,
            file_store_dirname=directory_name,
            llvm_version=llvm_version,
            file_names=[f.filename for f in files],
            opt_passes=opt_passes,
        )
        db.add(optimization_record)
        db.commit()

        result = make_result(temp_dir, optimization_record.opt_passes)

        return result

    except HTTPException as e:
        if e.status_code == 500:
            shutil.rmtree(temp_dir)
        raise e
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"DB error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        background_tasks.add_task(
            save_directory_and_cleanup,
            temp_dir,
            settings.MEDIA_DIR / directory_name,
        )


@router.get("/optimization-records")
def get_records(
    page: int,
    page_size: int,
    desc: bool = True,
    user_name_filter: str = None,
    session: Session = Depends(get_db),
):
    if user_name_filter:
        optimization_records, total_count = (
            crud.get_optimization_records_by_user(
                page, page_size, desc, user_name_filter, session
            )
        )
    else:
        optimization_records, total_count = crud.get_optimization_records(
            page, page_size, desc, session
        )

    response = OptimizationGetPagedResponse(
        data=[
            OptimizationGetResponse(
                id=record.id,
                user_name=record.user_name,
                opt_passes=record.opt_passes,
                file_names=record.file_names,
                llvm_version=record.llvm_version,
                created_at=record.created_at,
                updated_at=record.updated_at,
            )
            for record in optimization_records
        ],
        total_count=total_count,
        page=page,
        page_size=page_size,
    )

    return response


@router.post("/show")
def show(
    background_tasks: BackgroundTasks,
    optimization_record_id: str = Form(...),
    session: Session = Depends(get_db),
):
    try:
        optimization_record = crud.get_optimization_record_by_id(
            optimization_record_id, session
        )

        if not optimization_record:
            raise HTTPException(
                status_code=404, detail="Optimization record not found"
            )

        root_dirpath = find_project_root()
        temp_dir = os.path.join(
            root_dirpath, "tmp", optimization_record.file_store_dirname
        )
        Path(temp_dir).mkdir(parents=True, exist_ok=True)

        if settings.STAGE == "prod":
            download_directory_from_s3(
                optimization_record.file_store_dirname, temp_dir
            )
        elif settings.STAGE == "dev":
            copy_directory_from_local(
                os.path.join(
                    settings.MEDIA_DIR, optimization_record.file_store_dirname
                ),
                temp_dir,
            )

        return make_result(temp_dir, optimization_record.opt_passes)
    except Exception as e:
        logger.error(e)
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        background_tasks.add_task(cleanup_temp_dir, temp_dir)
