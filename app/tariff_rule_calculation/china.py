from sqlalchemy import text
import re



def basic_value_for_china(basic_value,services,vessel,db,dto):   
    from app.tariff_rule_calculation.all_calculation import direct_number_calculation,direct_vessel_property,with_vessel_attr_calculation,bracket_calculation,tonnage_due_rate_by_etd,range_calculation,reference_calculation
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
            print("the range is here")

            # Safely split after removing 'Range:' prefix
            parts = [p.strip() for p in basic_value.split(":")[1:]]
            print("the lenght",len(parts))
            vsl_attr, service_name, resultant_col = parts

            if len(parts) == 3 and service_name!='Tonnage Dues:':
                
                resultant_col=resultant_col.replace(" ","_")
                return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id)
            else:
                resultant_col=resultant_col.replace(" ","_")
                print("the tonnage dues is")
                vsl_attr=vsl_attr.split("With")[0].strip()
                return tonnage_due_rate_by_etd(db,dto.etd,"date",vsl_attr,vessel)
                
    # Case 4: Bracket calculation
    if isinstance(basic_value, str) and basic_value.upper().startswith("BRACKET"):
            cargo_qty = "Cargo Quantity" 
            service_name = "local state agency fee"
            return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id)
    
def evaluate_tariff_percent_for_china(tariff_value, sub,vessel, db, services,dto):
    from app.tariff_rule_calculation.all_calculation import direct_number_calculation,direct_vessel_property,with_vessel_attr_calculation,bracket_calculation,tonnage_due_rate_by_etd,range_calculation,reference_calculation

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
        print("the range is here")

        # Safely split after removing 'Range:' prefix
        parts = [p.strip() for p in tariff_value.split(":")[1:]]
        print("the lenght",len(parts))
        vsl_attr, service_name, resultant_col = parts
        print("the lenght",service_name)

        if len(parts) == 3 and service_name.strip()!='Tonnage Dues':
            
            resultant_col=resultant_col.replace(" ","_")
            print("the values of range are",  service_name)
            return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id)
        else:
            resultant_col=resultant_col.replace(" ","_")
            month=int([word for word in tariff_value.split() if word.isdigit()][0]) if len(tariff_value)>30 else 1 #Range:NRT:Tonnage Dues:Rate (to handle like this)
            if month==30:
                month=1
            elif month==90:
                month=3
            elif month==365:
                month=12
            else:
                month=1
            vsl_attr=vsl_attr.split("With")[0].strip()
            print("Inside tariff etd =", dto.etd, type(dto.etd))
            return tonnage_due_rate_by_etd(db,dto.etd,month,vsl_attr,sub,vessel,dto.country_id)

    # Case 4: Bracket calculation
    if isinstance(tariff_value, str) and tariff_value.upper().startswith("BRACKET"):
        cargo_qty = "Cargo Quantity" 
        service_name = "local state agency fee"
        return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id)
    
def get_movement_value_china(sub, vessel, db, disbursement_seq, disbursement_type,dto):
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
