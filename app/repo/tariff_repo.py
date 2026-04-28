from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func, or_,asc
from app.models.tariff_service import MaTariffService
from app.models.country import MaCountry
from app.models.ports import MaPort
from app.models.port_tariff_rule import MaPortTariffRule
from app.dto.port_tariff_rule_dto import PortTariffRuleDTO
from typing import Optional
from app.dto.port_tariff_rule_dto import PortTariffRuleDTO
from app.dto.port_tariff_rule_dto import PortTariffRulesRequestDTO

class TariffRepo:
    @staticmethod
    def get_tariff_service_list(db: Session):

        return db.query(MaTariffService).all()

   
    @staticmethod
    def get_all_tariff_rules(dto:PortTariffRulesRequestDTO,db: Session):
        
        query = (
        db.query(MaPortTariffRule)
        .join(MaPortTariffRule.port)
        .join(MaPortTariffRule.country)
        .filter(MaPortTariffRule.status == "Y")
        .order_by(
            asc(MaCountry.name),
            asc(MaPort.name)
        )
    )
        if dto.port_id:
            query = query.filter(MaPortTariffRule.port_id == dto.port_id)
        

        if dto.query_name:
            query = query.filter(
                or_(
                    MaPort.name.ilike(f"%{dto.query_name}%"),
                    MaCountry.name.ilike(f"%{dto.query_name}%")
                )
            )
        print("SQL Query :", query.statement.compile(compile_kwargs={"literal_binds": True}))

        total = query.count()
        results = query.offset((dto.page - 1) * dto.page_size).limit(dto.page_size).all()

        return {
            "status": "success",
            "total": total,
            "page": dto.page,
            "page_size": dto.page_size,
            "data": [
            {
                "port_tariff_rule_id": r.port_tariff_rule_id,
                "port_id": r.port.port_id,
                "port_name": r.port.name,
                "country_id": r.country.country_id,
                "country_name": r.country.name,
                "rules": r.rules,
                "status": r.status,
                "vessel_fields": r.port.vessel_fields,
                "created_on": r.created_on,
                "created_by": r.created_by
            } for r in results
        ]
}

    @staticmethod
    def create_or_update_tariff_rule(user: str, data: dict, db: Session):
        vessel_fields = data.pop("vessel_fields", None)
        port_name = data.pop("name", None) 
        if data.get("port_id") == 0:
            existing_Pname=db.query(MaPort).filter(MaPort.name==port_name).first()
            if existing_Pname:
                raise ValueError("Port already exists.") 
            new_port = MaPort(
                name=port_name,  
                vessel_fields=vessel_fields,
                country_id=data.get("country_id"),
                status='Y',
                created_by=user,
                created_on=func.now(),
            )
            db.add(new_port)
            db.commit()
            db.refresh(new_port)
            data["port_id"] = new_port.port_id
        existing_rule = db.query(MaPortTariffRule).filter(
            MaPortTariffRule.port_id == data["port_id"]
        ).first()

        if existing_rule and data.get("port_tariff_rule_id", 0) == 0:
            raise ValueError("Rule already exists.")
        
        immutable_fields = {"port_tariff_rule_id", "created_by", "created_on"}

        if existing_rule:
            for field, value in data.items():
                if field in immutable_fields:
                    continue
                if hasattr(existing_rule, field):
                    setattr(existing_rule, field, value)
            existing_rule.updated_by = user
            existing_rule.updated_on = func.now()
            db.commit()
            db.refresh(existing_rule)
        else:
            data.pop("port_tariff_rule_id", None)
            data.setdefault("created_by", user)
            new_rule = MaPortTariffRule(**data)
            db.add(new_rule)
            db.commit()
            db.refresh(new_rule)
            existing_rule = new_rule

        port = None
        # if vessel_fields:
        port = db.query(MaPort).filter(MaPort.port_id == data["port_id"]).first()
        if not port:
                print(f"No port found for port_id: {data['port_id']}")
        if port:
                port.vessel_fields = vessel_fields
                port.updated_by = user
                port.updated_on = func.now()
                db.commit()
                db.refresh(port)

        return {
            "tariff_rule": PortTariffRuleDTO.model_validate(existing_rule).model_dump(),
            "vessel_fields": port.vessel_fields if port else None
        }
    
    @staticmethod
    def get_tariff_rule_by_port_and_country(port_id: int, country_id: int, db: Session):
        traiff_rule = db.query(MaPortTariffRule).filter(MaPortTariffRule.country_id == country_id, MaPortTariffRule.port_id ==port_id).first()
        return traiff_rule

