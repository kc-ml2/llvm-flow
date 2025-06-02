import os
from pathlib import Path

import boto3

from app.core.config import settings
from app.core.logger import logger


def save_file_to_s3(file: str, save_path: str) -> str:
    logger.debug(f"File saved to S3: {save_path}")
    s3 = boto3.client("s3")

    with open(file, "rb") as f:
        s3.upload_fileobj(f, settings.S3_BUCKET, save_path)


def save_directory_to_s3(directory_path: str, s3_key: str) -> str:
    logger.info(f"Directory saved to S3: {s3_key}")
    s3 = boto3.client("s3")

    directory = Path(directory_path)
    parent_dir = directory.parent

    for filepath in directory.rglob("*"):
        if filepath.is_file():
            # S3 key (directory_path의 상위 경로를 기준으로 상대 경로 생성)
            s3_key = str(filepath.relative_to(parent_dir))

            s3.upload_file(str(filepath), settings.S3_BUCKET, s3_key)
            logger.debug(
                f"Uploaded {filepath} to s3://{settings.S3_BUCKET}/{s3_key}"
            )

    logger.debug(
        f"All files uploaded from {directory_path} to s3://{settings.S3_BUCKET}/"
    )


def download_directory_from_s3(save_path: str, download_path: str) -> str:
    logger.debug(f"Directory downloaded from S3: {save_path}")
    s3 = boto3.client("s3")

    paginator = s3.get_paginator("list_objects_v2")
    pages = paginator.paginate(Bucket=settings.S3_BUCKET, Prefix=save_path)

    for page in pages:
        if "Contents" not in page:
            continue

        for obj in page["Contents"]:
            key = obj["Key"]

            relative_path = os.path.relpath(key, save_path)
            local_file_path = os.path.join(download_path, relative_path)

            os.makedirs(os.path.dirname(local_file_path), exist_ok=True)

            s3.download_file(settings.S3_BUCKET, key, local_file_path)
            logger.info(f"Downloaded {key} to {local_file_path}")

    logger.info(f"All files downloaded from {save_path} to {download_path}")
