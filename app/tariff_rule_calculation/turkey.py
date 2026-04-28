import re

def evaluate_condition_turkey(basic_value: str, vessel: dict,sub,current_service) -> dict:
    from app.tariff_rule_calculation.all_calculation import evaluate_condition

    # Extract condition
    match = re.search(r'(?i)\bcondition\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)', basic_value) or \
            re.search(r'(?i)\bconditions\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)', basic_value)

    if not match:
        return {"value": 0, "formula": False}

    condition_str = match.group(1).strip()
    return_expr = match.group(2).strip()

    # Get and normalize additional properties
    additional = vessel.get("additional_properties", {}) if isinstance(vessel, dict) else getattr(vessel, "additional_properties", {})
    normalized_additional = normalize_additional(additional)

    # Prepare context for eval
    context = normalized_additional.copy()

    # Normalize the condition dynamically using additional properties as reference
    normalized_condition = normalize_condition_dynamic(condition_str, additional)

    try:
        # Evaluate the condition
        new_condition_str = replace_keys_with_values(normalized_condition, normalized_additional)
        condition_result = eval(new_condition_str, {"__builtins__": {}})
        result_value = eval(return_expr, {"__builtins__": {}}, context)
        # optional_subservices = [sub_service.get("optional")for sub_service in current_service.get("subService", [])]
        # if all(opt == 'N' for opt in optional_subservices):
        if condition_result:
                res={
                    "value": result_value,
                    "formula": f"condition({normalized_condition},{return_expr})={result_value}"
                }
                sub.update({"hide": 'N'})
                return res
        sub.update({"hide": 'Y'})
        return {"value": 0, "formula": False}
        # else:
            # Keep existing optional value unchanged

            # if condition_result:
            #     return {
            #         "value": result_value,
            #         "formula": f"condition({normalized_condition},{return_expr})={result_value}"
            #     }

        # return {"value": result_value, "formula": False}

    except Exception as e:
        try:
            print("error so going to default",basic_value)
            return evaluate_condition(basic_value, vessel,sub)
        except Exception as e:
            print("Error evaluating condition:", e)
            sub.update({"hide": 'N',"optional": 'Y'})
            return {"value": 0, "formula": False}


def normalize_additional(additional: dict) -> dict:
    """
    Normalize keys and values in additional_properties:
    - keys: lowercase, spaces replaced with underscores
    - values: lowercase and stripped of extra spaces
    """
    normalized = {}
    for key, value in additional.items():
        # Normalize key
        normalized_key = key.strip().lower().replace(" ", "_")
        # Normalize value
        if isinstance(value, str):
            normalized_value = value.strip().lower().replace(" ", "_")
        else:
            normalized_value = value  # keep numbers or other types as-is
        normalized[normalized_key] = normalized_value
    return normalized

def normalize_condition_dynamic(condition_str: str, additional: dict) -> str:
    """
    Dynamically replace keys in condition_str with normalized keys
    from additional_properties. Also converts = to == for Python eval.
    """
    # Normalize keys using additional dict
    normalized_keys = {
        key.strip().lower(): key.replace(" ", "_")
        for key in additional.keys()
    }

    # Replace keys (case-insensitive)
    key_pattern = r'\b(' + '|'.join(re.escape(k) for k in normalized_keys) + r')\b'

    def replace_key(match):
        return normalized_keys[match.group(0).lower()]

    condition_str = re.sub(key_pattern, replace_key, condition_str, flags=re.IGNORECASE)

    # Normalize RHS values
    def normalize_value(match):
        value = match.group(1).strip()
        normalized = (
            value
            .replace(" ", "_")
            .replace("_(", "_(")   # ensure underscore before parentheses
        )
        return f"== {normalized}"

    condition_str = re.sub(r'=\s*([^),]+?)(?=\s+(?:and|or)\s+|\)|,|$)', normalize_value, condition_str, flags=re.IGNORECASE)
    return condition_str

def replace_keys_with_values(condition_str: str, additional: dict) -> str:
    """
    Replace normalized keys in condition_str with their actual values from additional dict.
    Wrap all string values in single quotes (keys and RHS literals) for Python-evaluable condition.
    """
    #dict for normalized keys -> values
    try:
        condition_str=re.sub(r'(?<![=!])=(?!=)', '==', condition_str)
        norm_additional = {k.lower().replace(" ", "_"): v for k, v in additional.items()}
        # First, replace keys with their values
        def replace_key_value(match):
            key = match.group(0)
            key_lower = key.lower()
            value = norm_additional.get(key_lower)
            # Wrap string values in quotes
            if isinstance(value, str):
                return f"'{value}'"
            elif value is None:
                return 'None'
            else:
                return str(value)

        # Replace normalized keys in the condition
        pattern = r'\b(' + '|'.join(re.escape(k.replace(" ", "_")) for k in additional.keys()) + r')\b'
        condition_with_keys = re.sub(pattern, replace_key_value, condition_str, flags=re.IGNORECASE)

        # Then, wrap value literals in quotes if they are unquoted words
        def add_single_quote(match):
            val = match.group(1)
            # Already quoted? leave as-is
            if val.startswith("'") or val.startswith('"'):
                return match.group(0)
            # Otherwise, wrap in quotes
            return f"== '{val}'"

        # Match all == <value> patterns and wrap RHS in quotes
        final_condition = re.sub(r'==\s*([^\s\)]+)(?=\s+(and|or)\s+|\)|$)', add_single_quote, condition_with_keys)

        return final_condition
    except Exception as e:
        print("Error in replace_keys_with_values:", e)
        return condition_str
    

def evaluate_sum_basic_value_turkey(basic_value: str, services: list,vessel,db,dto,sub=None):
        from app.tariff_rule_calculation.all_calculation import get_vessel_attr,calculate_service_total_roe
        print("=== OPERATION FUNCTION START FOR TURKEY ===")
        # Extract operation type
        if basic_value.startswith("sum"):
            operation = "Sum"
            params_str = basic_value[4:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif basic_value.startswith("subtract"):
            operation = "Subtract"
            params_str = basic_value[9:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif basic_value.startswith("multiply"):
            operation = "Multiply"
            params_str = basic_value[9:-1]
            initial_value = 1.0
            neutral_value = 1.0
        else:
            return {"value": 0.0, "formula": basic_value}
        
        print(f"{operation} expression: {basic_value}")
        
        try:
            # Parse parameters considering nested brackets and operation
            params_str = basic_value.split(":", 2)[1]   # e.g. "pilotage -> test,pilotage -> test 2"

            params = []
            current_param = ""
            bracket_count = 0

            for char in params_str:
                if char == '(':
                    bracket_count += 1
                elif char == ')':
                    bracket_count -= 1
                elif char == ',' and bracket_count == 0:
                    if current_param.strip():
                        params.append(current_param.strip())
                    current_param = ""
                    continue
                current_param += char

            if current_param.strip():
                params.append(current_param.strip())
            
            print(f"{operation} parameters: {params}")
            
            if operation == "Subtract" and len(params) < 2:
                print(" Subtract requires at least 2 parameters")
                return {"value": 0.0, "formula": basic_value}
            
            result = initial_value
            formula_parts = []
            any_hidden = False  # Track if any referenced sub-service is hidden
            
            for i, param in enumerate(params):
                print(f"\n Processing {operation} parameter {i}: '{param}'")
                
                param_value = neutral_value
                param_formula = ""
                
                # Case 1: Reference to sub-service (service->sub_service)
                if "->" in param:
                    parts = [x.strip() for x in param.split("->", 1)]
                    if len(parts) == 2:
                        service_name, sub_name = parts
                        print(f"   Parsed reference: service='{service_name}', sub='{sub_name}'")
                        
                        # Find the service (case-insensitive)
                        ref_service = None
                        for s in services:
                            if s.get("service", "").strip().lower() == service_name.strip().lower():
                                ref_service = s
                                break
                        
                        if not ref_service:
                            print(f"    Service '{service_name}' NOT FOUND!")
                            param_value = neutral_value
                            param_formula = f"{service_name}->{sub_name}={neutral_value}"
                        else:
                            print(f"    Found service: '{ref_service.get('service')}'")
                            
                            # Find the sub-service (case-insensitive)
                            ref_sub = None
                            for ss in ref_service.get("subService", []):
                                if isinstance(ss, dict) and ss.get("name", "").strip().lower() == sub_name.strip().lower():
                                    ref_sub = ss
                                    break
                            
                            if not ref_sub:
                                print(f"    Sub-service '{sub_name}' NOT FOUND!")
                                param_value = neutral_value
                                param_formula = f"{service_name}->{sub_name}={neutral_value}"
                            else:
                                print(f" Found sub-service: '{ref_sub.get('name')}'")
                                
                                # If referenced sub-service is hidden, hide current sub-service too
                                if ref_sub.get("hide") == "Y":
                                    any_hidden = True
                                    param_value = neutral_value
                                    param_formula = f"{service_name}->{sub_name}=HIDDEN"
                                elif ref_sub.get("optional") == "Y":
                                    param_value = neutral_value
                                    param_formula = f"{service_name}->{sub_name}=SKIPPED(optional)"
                                else:
                                    sub_total = ref_sub.get("sub_total", 0)
                                    param_value = float(sub_total or 0)
                                    param_formula = f"{service_name}->{sub_name}={param_value}"
                    else:
                        print(f"   Invalid reference format: {param}")
                        param_value = neutral_value
                        param_formula = f"{param}={neutral_value}"
                
                # Case 2: Direct numeric value
                elif param.replace('.', '', 1).isdigit():
                    param_value = float(param)
                    param_formula = param
                    print(f"   Using direct numeric value: {param_value}")
                
                # Case 3: Vessel attribute (like GRT, LOA, NRT, RGRT, etc.)
                elif param.isalpha() and param.upper() in ['GRT', 'LOA', 'NRT', 'RGRT']:
                    vessel_val = get_vessel_attr(vessel, param)
                    param_value = float(vessel_val) if vessel_val else neutral_value
                    param_formula = f"{param}({param_value})"
                    print(f"   Using vessel attribute '{param}': {param_value}")
                
                else:
                    ref_service = next(
                        (s for s in services if s.get("service", "").strip().lower() == param.lower()),
                        None
                        )
                    if ref_service and isinstance(ref_service.get("total"),(int,float)):
                        service_total = ref_service.get("total", 0) 
                        param_value = float(service_total)
                        param_formula = f"{param}({service_total})"
                        print(f"   Using service total '{param}': {service_total}")
                    elif ref_service and isinstance(ref_service.get("total"),str):
                        print(f"   Calculating service total for '{param}'")
                        service_total = calculate_service_total_roe(service=ref_service,vessel=vessel,db=db,dto=dto)
                        print(f"   Calculated service total '{param}': {ref_service.get("total")}")
                        param_value = float(ref_service.get("total", 0) )
                        param_formula = f"{param}({service_total})"
                        
                    else:
                        print(f"Invalid parameter format: {param}")
                        param_value = neutral_value
                        param_formula = f"{param}={neutral_value}"
                
                # Apply the operation
                if operation == "Sum":
                    result += param_value
                    formula_parts.append(param_formula)
                elif operation == "Multiply":
                    result *= param_value
                    formula_parts.append(param_formula)
                elif operation == "Subtract":
                    if i == 0:
                        # First parameter is the minuend
                        result = param_value
                        formula_parts.append(param_formula)
                    else:
                        # Subsequent parameters are subtrahends
                        result -= param_value
                        formula_parts.append(param_formula)
            
            # Build the formula string based on operation
            if operation == "Sum":
                formula_str = " + ".join(formula_parts)
            elif operation == "Multiply":
                formula_str = " * ".join(formula_parts)
            elif operation == "Subtract":
                formula_str = " - ".join(formula_parts)
            
            print(f" {operation} calculation result: {result} = {formula_str}")
            print(f" === {operation.upper()} FUNCTION END ===\n")
            
            # If any referenced sub-service is hidden, hide current sub-service
            if any_hidden and sub:
                sub.update({"hide": "Y"})
            
            return {
                "value": round(result, 2),
                "formula": f"{operation}({formula_str})"
            }
                
        except Exception as e:
            print(f" DEBUG Exception in {operation} function: {e}")
            import traceback
            traceback.print_exc()
            return {"value": initial_value, "formula": basic_value}
