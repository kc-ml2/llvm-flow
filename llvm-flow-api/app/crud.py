from sqlalchemy.orm import Session
from sqlmodel import func, select

from app.models import OptimizationRecord


def create_optimization_record(
    user_name: str,
    file_store_dirname: str,
    file_names: list[str],
    opt_passes: list[str],
) -> OptimizationRecord:
    return OptimizationRecord(
        user_name=user_name,
        file_store_dirname=file_store_dirname,
        file_names=file_names,
        opt_passes=opt_passes,
    )


def get_optimization_record_by_id(
    optimization_record_id: str, session: Session
) -> OptimizationRecord:
    statement = select(OptimizationRecord).where(
        OptimizationRecord.id == optimization_record_id
    )
    data = session.execute(statement).scalar_one_or_none()

    return data


def get_optimization_records(
    page: int, page_size: int, desc: bool, session: Session
) -> tuple[list[OptimizationRecord], int]:
    count_query = select(func.count(OptimizationRecord.id))
    total_count = session.execute(count_query).scalar()

    offset = (page - 1) * page_size
    data_query = select(OptimizationRecord).offset(offset).limit(page_size)
    if desc:
        data_query = data_query.order_by(OptimizationRecord.created_at.desc())
    else:
        data_query = data_query.order_by(OptimizationRecord.created_at.asc())
    data = session.execute(data_query).scalars().all()

    return data, total_count


def get_optimization_records_by_user(
    page: int, page_size: int, desc: bool, user_name: str, session: Session
) -> tuple[list[OptimizationRecord], int]:
    """특정 사용자의 최적화 레코드 조회"""
    count_query = select(func.count(OptimizationRecord.id)).where(
        OptimizationRecord.user_name == user_name
    )
    total_count = session.execute(count_query).scalar()

    offset = (page - 1) * page_size
    data_query = (
        select(OptimizationRecord)
        .where(OptimizationRecord.user_name == user_name)
        .offset(offset)
        .limit(page_size)
    )

    if desc:
        data_query = data_query.order_by(OptimizationRecord.created_at.desc())
    else:
        data_query = data_query.order_by(OptimizationRecord.created_at.asc())

    data = session.execute(data_query).scalars().all()
    return data, total_count
