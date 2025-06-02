import logging

from app.core.config import settings

logging.basicConfig(level=settings.LOGGING_LEVEL)
logger = logging.getLogger(__name__)
