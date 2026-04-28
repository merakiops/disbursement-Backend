from pydantic import BaseModel, create_model
from typing import List, Type, Dict, Any

def create_batch_dto(base_dto: Type[BaseModel], name_suffix: str = "BatchCreateUpdateDTO") -> Type[BaseModel]:
    """
    Dynamically creates a Batch DTO that wraps a list of the base DTO
    """
    batch_dto_name = base_dto.__name__.replace("CreateUpdateDTO", name_suffix)
    
    return create_model(
        batch_dto_name,
        data=(List[base_dto], ...),
        __base__=BaseModel
    )

def generate_batch_dtos(service_dto_map: Dict[str, Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
    """
    Generates Batch DTOs for all services and updates the service map
    """
    updated_map = {}
    
    for service_name, config in service_dto_map.items():
        create_dto = config["create_dto"]
        
        # Create Batch DTO
        batch_dto = create_batch_dto(create_dto)
        
        # Update config to use Batch DTO
        updated_config = config.copy()
        updated_config["create_dto"] = batch_dto
        updated_config["original_create_dto"] = create_dto  # Keep reference to original
        
        updated_map[service_name] = updated_config
    
    return updated_map