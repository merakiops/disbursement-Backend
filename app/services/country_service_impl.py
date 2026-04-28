from sqlalchemy.orm import Session
from app.services.country_service import CountryService
from app.repo.country_repo import CountryRepository
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO,CountryListRequestDTO
from app.models.country import MaCountry
from typing import List

class CountryServiceImpl(CountryService):

    def create_or_update_country(self, country_data: CountryCreateUpdateDTO,username:str,db: Session) -> MaCountry:
        return CountryRepository.create_or_update_country(country_data, username,db)


    def get_all_countries(self,db: Session) -> List[MaCountry]:
        return CountryRepository.get_all_countries(db)
    
    def get_country_list(self,request_dto:CountryListRequestDTO,db: Session ):
        return CountryRepository.get_country_list(request_dto,db)
    
    def get_distinct_currency(self,db: Session):
        result=CountryRepository.get_distinct_currency(db)
        all_currencies = []
        for (currency_str,) in result:
            split_currencies = [c.strip() for c in currency_str.split(',')]
            all_currencies+=split_currencies

        unique_currencies = set(all_currencies)
        return unique_currencies

    def get_all_countries_in_rule(self, db):
        return CountryRepository.get_all_countries_in_rule(db)
