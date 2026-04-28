from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from typing import List,Type, Any, Dict, List
from sqlalchemy.inspection import inspect
import logging
logger = logging.getLogger("app_logger")

def generic_update(
    db: Session,
    model: Type[Any],
    instance_id: Any,
    update_data: Dict[str, Any],
    username: str,
    unique_check_columns: List[str] = None
) -> Any:
    """
    Performs update by deactivating the old record and creating a new one.
    """
    try:
        # Get the primary key column name and object dynamically
        
        mapper = inspect(model)
        pk_column = mapper.primary_key[0]

        # Find Python attr name that points to the pk_column
        for attr in mapper.attrs:
            if hasattr(attr, 'columns') and pk_column in attr.columns:
                pk_column_name = attr.key
                break
        else:
            raise Exception("Primary key attribute name not found")
        

        # Retrieve the instance to deactivate
        instance_to_deactivate = db.query(model).filter(pk_column == instance_id).first()

        if not instance_to_deactivate:
            logger.warning("Record with ID %s not found in model %s.", instance_id, model.__name__)
            raise HTTPException(status_code=404, detail="Record not found with the given ID.")
        
        # Skip update if values in unique_check_columns are unchanged
        if unique_check_columns:
            is_unchanged = all((getattr(instance_to_deactivate, col)) == (update_data.get(col))for col in unique_check_columns
            )
            if is_unchanged:
                logger.info("No changes in %s. Skipping update.", unique_check_columns)
                return instance_to_deactivate  # or None
        excluded_columns = {"grt", "rgrt", "nrt", "loa", "beam", "depth", "dwt", "type","address"}
        unique_check_columns = [col for col in unique_check_columns if col not in excluded_columns]
        #Check for active duplicates
        if unique_check_columns:
            for column_name in unique_check_columns:
                unique_column = getattr(model, column_name)
                duplicate_query = db.query(model).filter(
                    unique_column.ilike(update_data.get(column_name)),
                    getattr(model, 'status') == 'Y',
                    pk_column != instance_id
                )
                if duplicate_query.first():
                    logger.warning("Duplicate active value for column '%s' found: %s", column_name, update_data.get(column_name))
                    raise ValueError(f"{column_name} already exists.")

        # Deactivate the old record
        instance_to_deactivate.status = 'N'
        instance_to_deactivate.updated_by = username
        if hasattr(model, 'display_flag'):
            instance_to_deactivate.display_flag='N'

        db.flush()

        # Create the new, active record
        new_instance_data = {**update_data, 'status': 'Y', 'created_by': username}
        
        # Remove the primary key to allow the database to generate a new one
        new_instance_data.pop(pk_column_name, None)

        new_instance = model(**new_instance_data)
        db.add(new_instance)

        db.commit()
        db.refresh(new_instance)

        logger.info("Successfully record. Old ID: %s, New ID: %s",
                    getattr(instance_to_deactivate, pk_column_name), getattr(new_instance, pk_column_name))
        return new_instance

    
    except IntegrityError as e:
        db.rollback()
        logger.error("Database integrity error during generic update: %s", str(e))
        raise HTTPException(status_code=400, detail="Database integrity error during the operation.")
    except Exception as e:
        db.rollback()
        logger.exception("Unexpected error during generic update: %s", str(e))
        raise HTTPException(status_code=400,detail=f"Unexpected error during  update")

