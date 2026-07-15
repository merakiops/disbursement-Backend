from contextvars import ContextVar
from typing import Optional, List

current_user_role_id: ContextVar[Optional[int]] = ContextVar("current_user_role_id", default=None)
current_user_company_ids: ContextVar[Optional[List[int]]] = ContextVar("current_user_company_ids", default=None)
current_user_company_names: ContextVar[Optional[List[str]]] = ContextVar("current_user_company_names", default=None)
