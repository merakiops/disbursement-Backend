'''
This Class handles Abstract class for creating, updating, and fetching countries
'''
from abc import ABC, abstractmethod
from sqlalchemy.orm import Session
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO,CountryListRequestDTO
from app.models.country import MaCountry
from typing import List

class CountryService(ABC):
    
    @abstractmethod
    def create_or_update_country(self, country_data: CountryCreateUpdateDTO,username:str, db: Session) -> MaCountry:
        pass

    @abstractmethod
    def get_all_countries(self,db: Session)-> List[MaCountry]:
        pass

    @abstractmethod
    def get_country_list(self,request_dto:CountryListRequestDTO,db: Session ):
        pass
    
    @abstractmethod
    def get_all_countries_in_rule(self,db: Session):
        pass

