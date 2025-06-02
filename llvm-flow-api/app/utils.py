import os
import shutil
from pathlib import Path

import nanoid
import pendulum


def get_directory_name() -> str:
    nanoid_id = nanoid.generate("1234567890abcdef", size=4)

    return f"{pendulum.now().format('YYYYMMDD-HHmmss')}-{nanoid_id}"


def cleanup_temp_dir(directory):
    if os.path.exists(directory):
        shutil.rmtree(directory)


def find_project_root(marker_file: str = "pyproject.toml") -> Path:
    current = Path(__file__).parent.resolve()
    root = Path(current.root)
    while current != root:
        if (current / marker_file).exists():
            return current
        current = current.parent

    raise FileNotFoundError("Project root not found")
