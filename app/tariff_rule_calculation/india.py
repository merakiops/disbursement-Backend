from sqlalchemy import text
import re

def basic_value_for_india(basic_value,services,vessel,db,dto):   
    from app.tariff_rule_calculation.all_calculation import direct_number_calculation,direct_vessel_property,with_vessel_attr_calculation,bracket_calculation,range_calculation,reference_calculation,evaluate_sum_basic_value
    print("the basic value is  ::",basic_value)  
    if (isinstance(basic_value, str)and '->' not in basic_value and (basic_value.startswith('Fixed') or basic_value.startswith('NA') or basic_value[:1].isspace())):           
        parts = [b.strip() for b in basic_value.split(":")]
            
        if len(parts) > 1:
            value_part = parts[1]

            # If numeric (e.g., Fixed:1000:Pilotage:NA)
            if str(value_part).replace('.', '', 1).isdigit():
                print("in the number calculation ->", value_part)
                return direct_number_calculation(float(value_part))

            # If vessel property (e.g., Fixed:NRT:Pilotage:NA)
            elif value_part.isalpha():
                print("the vessel attr is ->", value_part)
                return direct_vessel_property(value_part, vessel)

            
        return with_vessel_attr_calculation(value_part,vessel)


    # Case 2: Reference to another service/sub-service
    if isinstance(basic_value, str) and ("->" in basic_value or basic_value.strip().startswith("SubService Reference")):
        print("in the reference -> and the calcution is for",basic_value)
        if basic_value.startswith("SubService Reference"):
            parts = [b.strip() for b in basic_value.split(":")]
            service_name=parts[2]
            sub_service=parts[1]
        else:
            
            parts = [b.strip() for b in basic_value.split(":")]

            arrow_part = next((p for p in parts if "->" in p), None)
                
            if arrow_part:
                service_parts = [p.strip() for p in arrow_part.split("->")]
                service_name = service_parts[0]
                sub_service = service_parts[1]
                print("the data is and the basic value ",service_name,sub_service)
            else:
                print("No '->' found in parts.")
                
        return reference_calculation(services, vessel,service_name, sub_service, db,dto.etd,dto.country_id)

    # Case 3: Range calculation
    if isinstance(basic_value, str) and basic_value.startswith("Range:"):
        print("the range is here for basic value")
        print("the range is here for the basic",basic_value)

        # Safely split after removing 'Range:' prefix
        parts = [p.strip() for p in basic_value.split(":")[1:]]
        print("the lenght for basic",len(parts),parts)
        vsl_attr, service_name, resultant_col = parts
        print("the lenght",service_name)
   
        resultant_col=resultant_col.replace(" ","_")
        print("the values of range are",  service_name)
        print("the value is for range.",range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id))
        result=range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id)
        try:
            numeric_value = int(result['value'])
            print("Converted to int:", numeric_value)
            return {
                "value": numeric_value,
                "formula": f"Range:{service_name}:{resultant_col}->{numeric_value}"}
        except (ValueError, TypeError):
            print("Non-numeric range result:", result)
            numeric_value = direct_vessel_property(result['value'], vessel)
            if isinstance(numeric_value, dict):
                numeric_value = numeric_value.get('value', 0)
            return {
                "value": numeric_value,
                "formula": f"Range:{service_name}:{resultant_col}->{numeric_value}"}
        
               
    # Case 4: Bracket calculation
    if isinstance(basic_value, str) and basic_value.upper().startswith("BRACKET"):
            cargo_qty = "Cargo Quantity" 
            service_name = "local state agency fee"
            return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id)

    if isinstance(basic_value, str) and basic_value.upper().startswith("SUM"):
        return evaluate_sum_basic_value(basic_value, services)
        
    

def evaluate_tariff_percent_for_india(tariff_value, sub,vessel, db, services,dto):
    from app.tariff_rule_calculation.all_calculation import direct_number_calculation,direct_vessel_property,with_vessel_attr_calculation,bracket_calculation,tonnage_due_rate_by_etd,range_calculation_india,reference_calculation

     # Case 1: Direct vessel property
    if (isinstance(tariff_value, str)and '->' not in tariff_value and (tariff_value.startswith('Fixed') or tariff_value.startswith('NA') or tariff_value[:1].isspace())):           
        parts = [b.strip() for b in tariff_value.split(":")]
        
        if len(parts) > 1:
            value_part = parts[1]

            # If numeric (e.g., Fixed:1000:Pilotage:NA)
            if str(value_part).replace('.', '', 1).isdigit():
                print("in the number calculation ->", value_part)
                return direct_number_calculation(float(value_part))

            # If vessel property (e.g., Fixed:NRT:Pilotage:NA)
            elif value_part.isalpha():
                print("the vessel attr is ->", value_part)
                return direct_vessel_property(value_part, vessel)

        #If vessel property (e.g., Fixed:NRT*6*9.08:Pilotage:NA)
        return with_vessel_attr_calculation(value_part,vessel)

    # Case 2: Reference to another service/sub-service
    if isinstance(tariff_value, str) and (tariff_value.startswith("SubService Reference") or "->" in tariff_value):
        if tariff_value.startswith("SubService Reference"):
            parts = [b.strip() for b in tariff_value.split(":")]
            service_name=parts[2]
            sub_service=parts[1]
        else:
            parts=[b.strip() for b in tariff_value.split("->")]
            service_name=parts[0]
            sub_service=parts[1]
        
        return reference_calculation(services, vessel,service_name, sub_service, db,dto.etd,dto.country_id)

    # Case 3: Range calculation
    if isinstance(tariff_value, str) and tariff_value.startswith("Range:"):
        # Safely split after removing 'Range:' prefix
        parts = [p.strip() for p in tariff_value.split(":")[1:]]
        print("the lenght for tariff",len(parts),parts)
        vsl_attr, service_name, resultant_col = parts
        resultant_col=resultant_col.replace(" ","_").lower()
        print("the values of range are:", range_calculation_india(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id))
        rate=range_calculation_india(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id)
                # print("the rate is :",rate)
                #{'value': 20300.0,
                # 'formula': 'Range:Towage:towage_fee->20300.0',
                # 'EXTRACTED': {'seq': 12, 'tariff_service_id': 2, 'country': 20, 'port': None, 'min_range': 390, 'max_range': None, 'towage_fee': 20300.0, 'holiday_fee': None, 'created_on': datetime.datetime(2025, 8, 20, 21, 17, 17, 904000), 'updated_on': datetime.datetime(2025, 8, 20, 21, 17, 17, 904000), 'created_by': 'surjit', 'updated_by': None}}
        min_value=rate['EXTRACTED']['min_range']
        if min_value==0:
            print("the result is zero")
            result={'value': rate['value'],
            'formula': 'Range:Towage:towage_fee->0'}
        else:
            print("result is not a 0",min_value,rate['value'])
            vsl_value=direct_vessel_property(vsl_attr, vessel)
            min_value=min_value-1
            value=(vsl_value['value']-min_value)*rate['value']
            result={'value': value,
                'formula':value}
            print("the result is ",result)
        return result

    # Case 4: Bracket calculation
    if isinstance(tariff_value, str) and tariff_value.upper().startswith("BRACKET"):
        cargo_qty = "Cargo Quantity" 
        service_name = "local state agency fee"
        return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id)
    


def get_movement_value_india(sub, vessel, db, disbursement_seq, disbursement_type,dto):
    print("inside the movement section",dto.vessel_stay)
    from app.tariff_rule_calculation.all_calculation import safe_float,get_vessel_attr    
    movement = sub.get("movement", "1")
    service = sub.get("unique_key", "1")
    if service=='Tonnage Dues':
        return 1.0

    else:
        # Try to parse movement as a float first
        movement_float = safe_float(movement, None)
        if movement_float is not None:
            return movement_float

        if isinstance(movement, str):
            movement = movement.strip()

            # Direct formula
            if re.match(r"^[0-9\.\*\+\-\/\(\) ]+$", movement):
                return eval(movement)
            
            if disbursement_type.upper() == "PDA":
                table_name = "txn_pda"
                stay_column = "pda_vessel_stay"
            elif disbursement_type.upper() == "FDA":
                table_name = "txn_fda"
                stay_column = "fda_vessel_stay"
            else:
                # Default to PDA if unknown
                table_name = "txn_pda"
                stay_column = "pda_vessel_stay"

            if movement.upper() in ["DAY", "HOUR","DAYS","HOURS"] or re.match(r"\d+\s*HOURS?\s*/\s*DAY", movement.upper()):

                minutes = float(dto.vessel_stay)
                movement_type = movement.upper()

                if movement_type == "DAY" or movement_type == "DAYS":
                        value = minutes / 1440  # Convert minutes to days
                elif movement_type == "HOUR" or movement_type == "HOURS":
                        value = minutes / 60    # Convert minutes to hours
                elif "/" in movement_type:
                        # Extract the number before "HOURS/DAY" (e.g., 12 from "12Hours/Day")
                        match =re.match(r"(\d+)\s*HOURS?\s*/\s*DAY", movement_type)
                        hours_per_day = int(match.group(1)) if match else 0
                        value = (minutes / 1440) * hours_per_day  # Convert to days, then multiply

                return value

                # Default return if no result
            return 1.0
            
            #for 2 DAYS or 4 HOURS
        elif re.match(r"(?i)(\d+(?:\.\d+)?)(?=\s*(DAY|DAYS|HOUR|HOURS|HR|HRS))", movement.upper()): 
                match=re.match(r"(?i)(\d+(?:\.\d+)?)(?=\s*(DAY|DAYS|HOUR|HOURS|HR|HRS))", movement.upper())
                return float(match.group(1))

        else:
                # Treat as vessel attribute
                val = get_vessel_attr(vessel, movement)
                if val is not None and val != 0:
                    return safe_float(val, 1.0)

                # Fallback: vessel_stay
                query = f"""
                    SELECT {stay_column}
                    FROM {table_name}
                    WHERE disbursement_seq = :did
                """
                result = db.execute(text(query), {"did": disbursement_seq}).fetchone()
                if result and result[0] is not None:
                    return float(result[0]) / 1440
                return 1.0

# def handle_china_range(parts,service_name,vessel,resultant_col,dto,db):
#     if len(parts) == 3 and service_name!='Tonnage Dues:':
#         return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id)
#     else:
#         print("the tonnage dues is")
#         vsl_attr=vsl_attr.split("With")[0].strip()
#         return tonnage_due_rate_by_etd(db,dto.etd,"date",vsl_attr,vessel)
