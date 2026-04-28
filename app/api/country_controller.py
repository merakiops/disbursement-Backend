"""
Author: Nitesh
Module: Country Controller
Description: This module handles country creation.
"""

from fastapi import APIRouter, Depends, status, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.services.country_service_impl import CountryServiceImpl
from app.dto.coutry_create_or_update import CountryCreateUpdateDTO,CountryListRequestDTO
from app.dto.country_response_dto import CountryResponseDTO,CountryCreateUpdateResponseDTO,CountryListResponseDTO
from app.core.decorators import jwt_required,role_required
from app.models.country import MaCountry
from typing import List,Optional
from fastapi import Query


countryController = APIRouter()
country_service = CountryServiceImpl()

ALLOWED_ROLES = [
    {"id": 1,"name":"Admin"},
    {"id": 2,"name":"User"}
]

@countryController.post("/api/v1/create-updateCountry", tags=["country management"],response_model=CountryCreateUpdateResponseDTO)
@jwt_required
# @role_required(ALLOWED_ROLES)
async def create_or_update_country(request: Request, country_data: CountryCreateUpdateDTO, db: Session = Depends(get_db)):
    '''
    Create a new country or update an existing one based on the provided `country_id`.

    - If `country_id` is passed and found, the country will be updated.
    - If no `country_id` is passed, a new country will be created.
    '''
    username = request.state.user["username"]
    country= country_service.create_or_update_country(country_data,username, db)
    message = "Country updated successfully" if country_data.country_id else "Country created successfully"

    response = CountryCreateUpdateResponseDTO(message=message,data=CountryResponseDTO.model_validate(country))
    return response


# @countryController.get("/api/v1/allcountries",response_model=CountryCreateUpdateResponseDTO,status_code=status.HTTP_200_OK)
# @jwt_required
# # @role_required(ALLOWED_ROLES)
# async def get_country_list(request: Request,db: Session = Depends(get_db)):
#     username = request.state.user["username"]
#     countries = country_service.get_all_countries(db)
#     dto_countries = [CountryResponseDTO.model_validate(c) for c in countries]
#     message = "List of countries fetched successfully"

#     response = CountryCreateUpdateResponseDTO(message=message,data=dto_countries)
#     return response


@countryController.post("/api/v1/countrylist",status_code=status.HTTP_200_OK, response_model=CountryListResponseDTO)
@jwt_required
async def get_country_list(request: Request,request_dto:CountryListRequestDTO,db: Session = Depends(get_db)):
    username = request.state.user["username"]
    country_list = country_service.get_country_list(request_dto,db)
    response = CountryListResponseDTO(
    total_count=country_list["total_count"],
    data=[CountryResponseDTO.model_validate(country) for country in country_list["data"]]
    ) 
    return response


# @countryController.post("/api/v1/countrylist", status_code=status.HTTP_200_OK, response_model=CountryListResponseDTO)
# @jwt_required
# async def get_country_list(
#     request: Request,
#     page: int = Query(1),
#     page_size: int = Query(10),
#     query: Optional[str] = None,
#     status: Optional[str] = None,
#     db: Session = Depends(get_db)
# ):
#     username = request.state.user["username"]
#     request_dto = CountryListRequestDTO(page=page, page_size=page_size, query=query, status=status)
#     country_list = country_service.get_country_list(request_dto, db)
#     return CountryListResponseDTO(
#         total_count=country_list["total_count"],
#         data=[CountryResponseDTO.model_validate(country) for country in country_list["data"]]
#     )


