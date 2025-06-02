#! /usr/bin/env bash

set -e
set -x

# Check if the database exists
if [ -f "$LLVM_FLOW_SQLITE_DB_NAME" ]; then
    echo "Database already exists"
    # Let the DB start
    python app/backend_pre_start.py

    # Run migrations
    alembic upgrade head

else
    echo "Database does not exist, creating..."
    alembic upgrade head  # This is the only way to create sqlite db
fi

