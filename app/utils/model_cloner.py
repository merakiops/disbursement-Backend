import copy

class ModelCopy:
    """
    A safe cloner for SQLAlchemy models that avoids recursion into SQLAlchemy internal state
    and deepcopies json attributes (like dicts and lists) without keeping DB session references.
    """
    def __init__(self, obj):
        if obj is None:
            return
        for key, value in obj.__dict__.items():
            if key.startswith('_sa_'):
                continue
            # Recursively copy related objects (SQLAlchemy models)
            if value is not None and hasattr(value, '__dict__') and not isinstance(value, (str, int, float, dict, list, tuple)):
                setattr(self, key, ModelCopy(value))
            elif isinstance(value, dict):
                # Cast to standard dict and deepcopy to avoid tracking reference issues
                setattr(self, key, copy.deepcopy(dict(value)))
            elif isinstance(value, list):
                # Cast to standard list and deepcopy
                setattr(self, key, copy.deepcopy(list(value)))
            else:
                # Copy primitives, datetimes, etc.
                setattr(self, key, copy.deepcopy(value) if hasattr(value, '__deepcopy__') else value)
