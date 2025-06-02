import os
import shutil
from pathlib import Path

from fastapi import UploadFile

from app.core.logger import logger


def save_file_to_local(file: UploadFile, save_path: str):
    Path(save_path).parent.mkdir(parents=True, exist_ok=True)
    logger.debug(f"Saving file to {save_path}")

    with open(save_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    logger.debug(f"File saved to {save_path}")

    return save_path


def save_directory_to_local(directory_path: str, save_path: str):
    Path(save_path).parent.mkdir(parents=True, exist_ok=True)
    logger.debug(f"Saving directory to {save_path}")

    shutil.copytree(directory_path, save_path)

    logger.debug(f"Directory saved to {save_path}")


def copy_directory_from_local(source_path: str, target_path: str):
    logger.debug(f"Copying directory from {source_path}")

    if os.path.exists(target_path):
        shutil.rmtree(target_path)

    shutil.copytree(source_path, target_path)

    logger.debug(f"Directory copied from {source_path} to {target_path}")
