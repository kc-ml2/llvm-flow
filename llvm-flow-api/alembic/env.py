from logging.config import fileConfig
from pathlib import Path
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))
from app.core.config import settings

config = context.config
fileConfig(config.config_file_name)

config.set_main_option("sqlalchemy.url", settings.SQLALCHEMY_DATABASE_URI)
Path(settings.SQLALCHEMY_DATABASE_URI).parent.mkdir(parents=True, exist_ok=True)

def run_migrations_offline():
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url, literal_binds=True, dialect_opts={"paramstyle": "named"}
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection
        )
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online() 