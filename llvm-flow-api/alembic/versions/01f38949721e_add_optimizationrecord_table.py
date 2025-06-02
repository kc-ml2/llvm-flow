"""Add OptimizationRecord table

Revision ID: 01f38949721e
Revises: c6b6fb03f1c5
Create Date: 2025-05-22 20:03:09.296020
"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '01f38949721e'
down_revision = 'c6b6fb03f1c5'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table(
        'optimization_records',
        sa.Column('id', sa.String(), primary_key=True),
        sa.Column('user_name', sa.String(), nullable=False),
        sa.Column('file_store_dirname', sa.String(), nullable=False),
        sa.Column('file_names', sa.String(), nullable=True),
        sa.Column('llvm_version', sa.Integer(), nullable=False),
        sa.Column('opt_passes', sa.String(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=False)
    )


def downgrade():
    op.drop_table('optimizationrecord')
