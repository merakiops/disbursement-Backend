from sqlalchemy.orm import Session
from sqlalchemy import text
import re
import copy
from typing import Optional


def get_vessel_attr(vessel, attr):
    # Convert attribute to lowercase to match your database columns
    attr_lower = attr.lower()
    attr_upper = attr.upper()
    
    print(f"DEBUG get_vessel_attr looking for: '{attr}' (trying: '{attr_lower}', '{attr_upper}')")
    
    # case 1: vessel is a dict
    if isinstance(vessel, dict):
        # Try exact match first
        if attr in vessel:
            result = vessel.get(attr, 0) or 0
            print(f"Found exact match in dict: {result}")
            return result
        # Try uppercase match (for LOA, BEAM, DEPTH, etc.)
        if attr_upper in vessel:
            result = vessel.get(attr_upper, 0) or 0
            print(f"Found uppercase match in dict: {result}")
            return result
        # Try lowercase match
        if attr_lower in vessel:
            result = vessel.get(attr_lower, 0) or 0
            print(f"Found lowercase match in dict: {result}")
            return result
        # Try in additional_properties
        if "additional_properties" in vessel and isinstance(vessel["additional_properties"], dict):
            # Try exact match in additional_properties
            if attr in vessel["additional_properties"]:
                return vessel["additional_properties"].get(attr, 0) or 0
            # Try lowercase match in additional_properties
            if attr_lower in vessel["additional_properties"]:
                return vessel["additional_properties"].get(attr_lower, 0) or 0
            # Try uppercase match in additional_properties
            if attr_upper in vessel["additional_properties"]:
                return vessel["additional_properties"].get(attr_upper, 0) or 0

        print(f"Available vessel keys: {list(vessel.keys())}")
        return 0

    # case 2: vessel is an object
    # Try exact match first
    if hasattr(vessel, attr):
        val = getattr(vessel, attr, 0)
        return val or 0
    
    # Try lowercase match
    if hasattr(vessel, attr_lower):
        val = getattr(vessel, attr_lower, 0)
        return val or 0

    # Try uppercase match
    if hasattr(vessel, attr_upper):
        val = getattr(vessel, attr_upper, 0)
        return val or 0

    # Check additional_properties
    if hasattr(vessel, "additional_properties") and isinstance(vessel.additional_properties, dict):
        # Try exact match in additional_properties
        if attr in vessel.additional_properties:
            return vessel.additional_properties.get(attr, 0) or 0
        # Try lowercase match in additional_properties
        if attr_lower in vessel.additional_properties:
            return vessel.additional_properties.get(attr_lower, 0) or 0
        # Try uppercase match in additional_properties
        if attr_upper in vessel.additional_properties:
            return vessel.additional_properties.get(attr_upper, 0) or 0

    # Debug: print available attributes
    if isinstance(vessel, dict):
        print(f"Available vessel attributes: {list(vessel.keys())}")
    else:
        print(f"Available vessel attributes: {[attr for attr in dir(vessel) if not attr.startswith('_')]}")
    
    print(f"Looking for attribute: '{attr}' or '{attr_lower}' or '{attr_upper}'")
    
    return 0

def safe_eval(expr: str) -> float:
    """Safely evaluate mathematical expression with proper operator precedence"""
    if not expr.strip():
        return 0.0
    
    # Remove spaces
    expr = expr.replace(' ', '')
    
    try:
        # Handle parentheses first (highest priority)
        while '(' in expr:
            start = expr.rfind('(')
            end = expr.find(')', start)
            if end == -1:
                break
            
            inner_expr = expr[start+1:end]
            inner_result = safe_eval(inner_expr)
            expr = expr[:start] + str(inner_result) + expr[end+1:]
        
        # Handle multiplication and division
        while '*' in expr or '/' in expr:
            # Find the first * or /
            mul_pos = expr.find('*')
            div_pos = expr.find('/')
            
            if mul_pos != -1 and (div_pos == -1 or mul_pos < div_pos):
                # Process multiplication
                left, right = extract_operands(expr, mul_pos)
                result = left * right
                expr = replace_operation(expr, mul_pos, left, right, result)
            else:
                # Process division
                left, right = extract_operands(expr, div_pos)
                if right == 0:
                    right = 1  # Avoid division by zero
                result = left / right
                expr = replace_operation(expr, div_pos, left, right, result)
        
        # Handle addition and subtraction
        while '+' in expr or ('-' in expr and expr.find('-') > 0):  # Skip first character if it's negative
            # Find the first + or -
            add_pos = expr.find('+')
            sub_pos = -1
            for i in range(1, len(expr)):  # Start from 1 to skip negative sign at beginning
                if expr[i] == '-':
                    sub_pos = i
                    break
            
            if add_pos != -1 and (sub_pos == -1 or add_pos < sub_pos):
                # Process addition
                left, right = extract_operands(expr, add_pos)
                result = left + right
                expr = replace_operation(expr, add_pos, left, right, result)
            else:
                # Process subtraction
                left, right = extract_operands(expr, sub_pos)
                result = left - right
                expr = replace_operation(expr, sub_pos, left, right, result)
        
        return float(expr)
    
    except Exception as e:
        print(f"Safe eval error: {e} for expression: {expr}")
        return 0.0

def extract_operands(expr: str, op_pos: int) -> tuple:
    """Extract left and right operands from an expression"""
    # Find left operand
    left_end = op_pos
    left_start = left_end - 1
    while left_start >= 0 and (expr[left_start].isdigit() or expr[left_start] == '.' or 
                              (expr[left_start] == '-' and (left_start == 0 or expr[left_start-1] in '+-*/'))):
        left_start -= 1
    left_start += 1
    left_operand = float(expr[left_start:left_end])
    
    # Find right operand
    right_start = op_pos + 1
    right_end = right_start + 1
    while right_end < len(expr) and (expr[right_end].isdigit() or expr[right_end] == '.' or 
                                    (expr[right_end] == '-' and right_end == right_start)):
        right_end += 1
    right_operand = float(expr[right_start:right_end])
    
    return left_operand, right_operand

def replace_operation(expr: str, op_pos: int, left: float, right: float, result: float) -> str:
    """Replace an operation with its result in the expression"""
    # Find the actual substring to replace
    left_start = op_pos - len(str(left).replace('-', ''))  # Handle negative numbers
    if left < 0 and left_start > 0 and expr[left_start-1] == '-':
        left_start -= 1
    
    right_end = op_pos + 1 + len(str(right).replace('-', ''))
    if right < 0 and op_pos + 1 < len(expr) and expr[op_pos+1] == '-':
        right_end += 1
    
    return expr[:left_start] + str(result) + expr[right_end:]


def safe_float(val, default=1.0):
    try:
        return float(val)
    except (TypeError, ValueError):
        return default


def get_movement_value(sub: dict, vessel, db: Session, disbursement_seq: int, disbursement_type: str):
    movement = sub.get("movement", "1")

    # Try to parse movement as a float first
    movement_float = safe_float(movement, None)
    if movement_float is not None:
        return movement_float

    if isinstance(movement, str):
        movement = movement.strip()

        # Direct formula
        if re.match(r"^[0-9\.\*\+\-\/\(\) ]+$", movement):
            return safe_eval(movement)
        
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

        if movement.upper() in ["DAY", "HOUR"] or "HOURS/DAY" in movement.upper():
            query = f"""
                SELECT {stay_column}
                FROM {table_name}
                WHERE disbursement_seq = :did
            """
            result = db.execute(text(query), {"did": disbursement_seq}).fetchone()
            print(f"movement result {result}")

            if result and result[0] is not None:
                minutes = float(result[0])
                movement_type = movement.upper()

                if movement_type == "DAY":
                    value = minutes / 1440  # Convert minutes to days
                elif movement_type == "HOUR":
                    value = minutes / 60    # Convert minutes to hours
                elif "HOURS/DAY" in movement_type:
                    # Extract the number before "HOURS/DAY" (e.g., 12 from "12Hours/Day")
                    match = re.match(r"(\d+)\s*HOURS/DAY", movement_type)
                    hours_per_day = int(match.group(1)) if match else 0
                    value = (minutes / 1440) * hours_per_day  # Convert to days, then multiply

                return round(value, 2)

            # Default return if no result
            return 1.0

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
            return round(float(result[0]) / 1440, 2)
        return 1.0

    return 1.0


def evaluate_basic_value(basic_value: str, vessel, db: Session, services: list = None, current_service: dict = None):
    print(f"basic_value is {basic_value}")
    # print(f"vessel info is {vessel.__dict__}")

    # Case 1: direct number
    if isinstance(basic_value, (int, float)):
        return {"value": round(float(basic_value), 2), "formula": str(basic_value)}
    if isinstance(basic_value, str) and basic_value.replace('.', '', 1).isdigit():
        return {"value": round(float(basic_value), 2), "formula": basic_value}

    # Case 2: Direct vessel attribute (like RGRT, NRT, LOA, etc.)
    if isinstance(basic_value, str) and basic_value.isalpha() and not basic_value.startswith(('Range(', 'Bracket(', 'Sum(')):
        print(f"Direct vessel attribute method: {basic_value}")
        vessel_val = get_vessel_attr(vessel, basic_value)
        print(f"Vessel attribute '{basic_value}' value: {vessel_val}")
        print(f"Vessel keys/attrs: {vessel.keys() if isinstance(vessel, dict) else [attr for attr in dir(vessel) if not attr.startswith('_')]}")
        
        return {
            "value": float(vessel_val),
            "formula": basic_value
        }
    # Case 3 for Complex Calculation function - Calculation(expression with nested functions)
    if isinstance(basic_value, str) and basic_value.startswith("Calculate(") and basic_value.endswith(")"):
        print("=== CALCULATION FUNCTION START ===")
        print(f"Calculation expression: {basic_value}")
        
        try:
            # Extract the inner expression
            expression = basic_value[12:-1]  # Remove "Calculation(" and ")"
            print(f"Raw expression: {expression}")
            
            def evaluate_expression(expr: str, services: list, current_services: list = None) -> float:
                """Recursively evaluate mathematical expression with function calls"""
                print(f"  Evaluating expression: {expr}")
                
                # Remove outer parentheses if they wrap the entire expression
                expr = expr.strip()
                if expr.startswith('(') and expr.endswith(')'):
                    # Check if it's balanced parentheses
                    bracket_count = 0
                    balanced = True
                    for i, char in enumerate(expr):
                        if char == '(':
                            bracket_count += 1
                        elif char == ')':
                            bracket_count -= 1
                        if bracket_count == 0 and i < len(expr) - 1:
                            balanced = False
                            break
                    if balanced:
                        expr = expr[1:-1]
                
                # First, evaluate all function calls recursively (including nested ones)
                while True:
                    # Find the innermost function call
                    function_match = re.search(r'(\w+)\(([^()]*(?:\([^()]*\)[^()]*)*)\)', expr)
                    if not function_match:
                        break
                    
                    func_name = function_match.group(1)
                    func_params = function_match.group(2)
                    full_match = function_match.group(0)
                    
                    print(f"    Found function: {func_name}({func_params})")
                    
                    # Handle different function types
                    if func_name in ["Sum", "Multiply", "Subtract"]:
                        # For operation functions, we need to evaluate parameters first
                        evaluated_params = []
                        param_parts = []
                        current_param = ""
                        bracket_count = 0
                        
                        # Parse and evaluate each parameter
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    # Evaluate this parameter recursively
                                    param_value = evaluate_expression(current_param.strip(), services)
                                    evaluated_params.append(str(param_value))
                                    param_parts.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            param_value = evaluate_expression(current_param.strip(), services)
                            evaluated_params.append(str(param_value))
                            param_parts.append(current_param.strip())
                        
                        # Rebuild function call with evaluated parameters
                        new_func_call = f"{func_name}({','.join(evaluated_params)})"
                        func_result = evaluate_basic_value(new_func_call, vessel, db, services, current_service)
                        if isinstance(func_result, dict):
                            func_value = func_result["value"]
                        else:
                            func_value = 0.0
                    
                    elif func_name == "Range":
                        # For Range function, evaluate the first parameter (vessel_attr) if it's an expression
                        params_list = []
                        current_param = ""
                        bracket_count = 0
                        
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    if len(params_list) == 0:
                                        # First parameter might be an expression like "Multiply(LOA * BEAM * DEPTH)"
                                        param_value = evaluate_expression(current_param.strip(), services)
                                        params_list.append(str(param_value))
                                    else:
                                        # Other parameters are column names, keep as is
                                        params_list.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            if len(params_list) == 0:
                                param_value = evaluate_expression(current_param.strip(), services)
                                params_list.append(str(param_value))
                            else:
                                params_list.append(current_param.strip())
                        
                        # Rebuild Range function call
                        if len(params_list) >= 5:
                            new_func_call = f"Range({','.join(params_list)})"
                            func_result = evaluate_basic_value(new_func_call, vessel, db, services, current_service)
                            if isinstance(func_result, dict):
                                func_value = func_result["value"]
                            else:
                                func_value = 0.0
                        else:
                            func_value = 0.0
                    
                    elif func_name == "Bracket":
                        # Similar to Range but for Bracket function
                        params_list = []
                        current_param = ""
                        bracket_count = 0
                        
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    if len(params_list) == 0:
                                        param_value = evaluate_expression(current_param.strip(), services)
                                        params_list.append(str(param_value))
                                    else:
                                        params_list.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            if len(params_list) == 0:
                                param_value = evaluate_expression(current_param.strip(), services)
                                params_list.append(str(param_value))
                            else:
                                params_list.append(current_param.strip())
                        
                        if len(params_list) >= 5:
                            new_func_call = f"Bracket({','.join(params_list)})"
                            func_result = evaluate_basic_value(new_func_call, vessel, db, services, current_service)
                            if isinstance(func_result, list):
                                func_value = sum(item.get("sub_total", 0) for item in func_result)
                            else:
                                func_value = 0.0
                        else:
                            func_value = 0.0
                    
                    else:
                        # Unknown function, treat as 0
                        func_value = 0.0
                    
                    # Replace function call with its value in the expression
                    expr = expr.replace(full_match, str(func_value), 1)
                    print(f"    Replaced {full_match} with {func_value}")
                    print(f"    Updated expression: {expr}")
                
                # Now evaluate mathematical expressions with vessel attributes
                # Replace vessel attributes with their values
                vessel_attrs = vessel.keys() if isinstance(vessel, dict) else [c.name for c in vessel.__table__.columns]
                for attr in vessel_attrs:
                    if attr.upper() in expr:
                        attr_value = get_vessel_attr(vessel, attr)
                        expr = expr.replace(attr.upper(), str(attr_value))
                        print(f"    Replaced vessel attribute {attr} with {attr_value}")
                        print(f"    Updated expression: {expr}")
                
                # Now evaluate sub-service references (service->sub_service)
                while "->" in expr:
                    ref_match = re.search(r'(\w+)\s*->\s*([^+\-*/()]+)', expr)
                    if not ref_match:
                        break
                    
                    service_name = ref_match.group(1).strip()
                    sub_name = ref_match.group(2).strip()
                    full_match = ref_match.group(0)
                    
                    print(f"    Found reference: {service_name}->{sub_name}")
                    
                    # Find the sub-service value
                    ref_service = None
                    for s in services:
                        if s.get("service", "").strip().lower() == service_name.lower():
                            ref_service = s
                            break
                    
                    ref_value = 0.0
                    if ref_service:
                        ref_sub = next(
                            (ss for ss in ref_service.get("subService", [])
                            if isinstance(ss, dict) and ss.get("name", "").strip().lower() == sub_name.lower()),
                            None
                        )
                        if ref_sub:
                            ref_value = ref_sub.get("sub_total", 0)
                            print(f"    Found sub-service value: {ref_value}")
                    
                    # Replace reference with its value
                    expr = expr.replace(full_match, str(ref_value), 1)
                    print(f"    Updated expression: {expr}")
                
                # Finally, evaluate the mathematical expression
                try:
                    # Safe evaluation of the remaining expression
                    # Only allow numbers, basic operators, and parentheses
                    if re.match(r'^[0-9\.\+\-\*\/\(\) ]+$', expr):
                        result = safe_eval(expr)
                        print(f"    Final calculation: {expr} = {result}")
                        return result
                    else:
                        print(f" Invalid characters in expression: {expr}")
                        return 0.0
                except Exception as e:
                    print(f" Error evaluating expression: {e}")
                    return 0.0
            
            # Evaluate the entire calculation
            final_result = evaluate_expression(expression, services)
            
            print(f" Calculation final result: {final_result}")
            print(f" === CALCULATION FUNCTION END ===\n")
            
            return {
                "value": round(final_result, 2),
                "formula": f"Calculation({expression}) → {final_result}"
            }
                
        except Exception as e:
            print(f" DEBUG Exception in Calculation function: {e}")
            import traceback
            traceback.print_exc()
            return {"value": 0.0, "formula": basic_value}
    # Case 4 for Operation functions - Sum/Subtract/Multiply(service->sub_service, direct_value, vessel_attr, ...)
    if isinstance(basic_value, str) and (basic_value.startswith("Sum(") or basic_value.startswith("Subtract(") or basic_value.startswith("Multiply(")) and basic_value.endswith(")"):
        print("=== OPERATION FUNCTION START ===")
        
        # Extract operation type
        if basic_value.startswith("Sum("):
            operation = "Sum"
            params_str = basic_value[4:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif basic_value.startswith("Subtract("):
            operation = "Subtract"
            params_str = basic_value[9:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif basic_value.startswith("Multiply("):
            operation = "Multiply"
            params_str = basic_value[9:-1]
            initial_value = 1.0
            neutral_value = 1.0
        else:
            return {"value": 0.0, "formula": basic_value}
        
        print(f"{operation} expression: {basic_value}")
        
        try:
            # Parse parameters considering nested brackets and operations
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
                                
                                # Check if sub_total exists and is calculated
                                sub_total = ref_sub.get("sub_total", 0)
                                param_value = sub_total
                                param_formula = f"{service_name}->{sub_name}={sub_total}"
                                print(f"   Using sub_total: {sub_total}")
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
                elif param.isalpha():
                    vessel_val = get_vessel_attr(vessel, param)
                    param_value = float(vessel_val) if vessel_val else neutral_value
                    param_formula = f"{param}({param_value})"
                    print(f"   Using vessel attribute '{param}': {param_value}")
                
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
            
            return {
                "value": round(result, 2),
                "formula": f"{operation}({formula_str})"
            }
                
        except Exception as e:
            print(f" DEBUG Exception in {operation} function: {e}")
            import traceback
            traceback.print_exc()
            return {"value": initial_value, "formula": basic_value}
        
    # Case 5: Reference -> Another Sub-service
    if isinstance(basic_value, str) and "->" in basic_value:
        print("Arrow method ")
        try:
            service_name, sub_name = [x.strip() for x in basic_value.split("->", 1)]
            
            ref_service = next(
                (s for s in services if s.get("service", "").lower() == service_name.lower()),
                None
            )
            
            if ref_service:
                ref_sub = next(
                    (ss for ss in ref_service.get("subService", [])
                    if isinstance(ss, dict) and ss.get("name", "").lower() == sub_name.lower()),
                    None
                )

                if ref_sub and ref_sub.get("sub_total", 0) > 0:
                    # Reference found with calculated value
                    return {
                        "value": ref_sub.get("sub_total", 0),
                        "formula": f"{service_name}->{sub_name}"
                    }
                elif ref_sub:
                    # Reference found but not calculated yet - trigger calculation
                    calculated = calculate_subservice(ref_sub, vessel, db, services, ref_service)
                    if calculated and isinstance(calculated, list) and len(calculated) > 0:
                        return {
                            "value": calculated[0].get("sub_total", 0),
                            "formula": f"{service_name}->{sub_name}"
                        }

        except Exception as e:
            print(f"DEBUG Exception in reference lookup: {e}")
        
        return {"value": 0.0, "formula": basic_value}
    
    

   
    # Case 6: Range function - Range(vessel_attr_or_function, service_name, min_col, max_col, fee_col)
    if isinstance(basic_value, str) and basic_value.startswith("Range(") and basic_value.endswith(")"):
        print("=== RANGE FUNCTION DEBUG ===")
        print(f"Basic value: {basic_value}")
        try:
            # Extract parameters from Range(...) with proper nested function handling
            params_str = basic_value[6:-1]  # Remove "Range(" and ")"
            print(f"Raw params string: '{params_str}'")
            
            # Parse parameters considering nested functions
            params = []
            current_param = ""
            paren_level = 0
            
            for char in params_str:
                if char == '(':
                    paren_level += 1
                    current_param += char
                elif char == ')':
                    paren_level -= 1
                    current_param += char
                elif char == ',' and paren_level == 0:
                    # Only split on comma if we're not inside parentheses
                    params.append(current_param.strip())
                    current_param = ""
                else:
                    current_param += char
            
            # Add the last parameter
            if current_param.strip():
                params.append(current_param.strip())
                
            print(f"Parsed params: {params}")
            
            if len(params) >= 5:
                vessel_attr_or_function, service_name, min_col, max_col, fee_col = params[:5]
                
                print(f"vessel_attr_or_function: '{vessel_attr_or_function}'")
                print(f"service_name: '{service_name}'")
                print(f"min_col: '{min_col}'")
                print(f"max_col: '{max_col}'")
                print(f"fee_col: '{fee_col}'")
                
                # Step 1: Check if vessel_attr_or_function contains a nested function
                vessel_val = None
                calculated_value = None
                
                if '(' in vessel_attr_or_function and ')' in vessel_attr_or_function:
                    print(f"Detected nested function: {vessel_attr_or_function}")
                    # Evaluate the nested function first
                    try:
                        # Extract function name and parameters
                        func_name = vessel_attr_or_function.split('(')[0].strip()
                        func_params_str = vessel_attr_or_function[len(func_name)+1:-1]
                        
                        # Parse function parameters considering nested functions
                        func_params = []
                        current_func_param = ""
                        func_paren_level = 0
                        
                        for char in func_params_str:
                            if char == '(':
                                func_paren_level += 1
                                current_func_param += char
                            elif char == ')':
                                func_paren_level -= 1
                                current_func_param += char
                            elif char == ',' and func_paren_level == 0:
                                func_params.append(current_func_param.strip())
                                current_func_param = ""
                            else:
                                current_func_param += char
                        
                        if current_func_param.strip():
                            func_params.append(current_func_param.strip())
                        
                        print(f"Function: {func_name}, Parameters: {func_params}")
                        
                        if func_name.lower() == "multiply":
                            result = 1.0
                            formula_parts = []
                            for param in func_params:
                                print(f"Getting vessel attribute: {param}")
                                param_val = get_vessel_attr(vessel, param)
                                print(f"Vessel attribute {param} value: {param_val}")
                                if param_val is not None:
                                    try:
                                        result *= float(param_val)
                                        formula_parts.append(f"{param}={param_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                        return {"value": 0.0, "formula": basic_value}
                                else:
                                    print(f"Missing vessel attribute: {param}")
                                    return {"value": 0.0, "formula": basic_value}
                            
                            vessel_val = result
                            calculated_value = {
                                "value": result,
                                "formula": f"Multiply({' * '.join(formula_parts)}) = {result}"
                            }
                            print(f"Multiply function result: {vessel_val}")
                            
                        elif func_name.lower() == "sum":
                            result = 0.0
                            formula_parts = []
                            for param in func_params:
                                param_val = get_vessel_attr(vessel, param)
                                if param_val is not None:
                                    try:
                                        result += float(param_val)
                                        formula_parts.append(f"{param}={param_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                        return {"value": 0.0, "formula": basic_value}
                                else:
                                    print(f"Missing vessel attribute: {param}")
                                    return {"value": 0.0, "formula": basic_value}
                            
                            vessel_val = result
                            calculated_value = {
                                "value": result,
                                "formula": f"Sum({' + '.join(formula_parts)}) = {result}"
                            }
                            print(f"Sum function result: {vessel_val}")
                            
                        elif func_name.lower() == "subtract":
                            if len(func_params) >= 2:
                                first_val = get_vessel_attr(vessel, func_params[0])
                                if first_val is not None:
                                    try:
                                        result = float(first_val)
                                        formula_parts = [f"{func_params[0]}={first_val}"]
                                        
                                        for param in func_params[1:]:
                                            param_val = get_vessel_attr(vessel, param)
                                            if param_val is not None:
                                                try:
                                                    result -= float(param_val)
                                                    formula_parts.append(f"{param}={param_val}")
                                                except (ValueError, TypeError) as ve:
                                                    print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                                    return {"value": 0.0, "formula": basic_value}
                                            else:
                                                print(f"Missing vessel attribute: {param}")
                                                return {"value": 0.0, "formula": basic_value}
                                        
                                        vessel_val = result
                                        calculated_value = {
                                            "value": result,
                                            "formula": f"Subtract({' - '.join(formula_parts)}) = {result}"
                                        }
                                        print(f"Subtract function result: {vessel_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {func_params[0]}: {first_val}, error: {ve}")
                                        return {"value": 0.0, "formula": basic_value}
                                else:
                                    print(f"Missing first vessel attribute: {func_params[0]}")
                                    return {"value": 0.0, "formula": basic_value}
                            else:
                                print("Subtract function requires at least 2 parameters")
                                return {"value": 0.0, "formula": basic_value}
                        else:
                            print(f"Unsupported function: {func_name}")
                            return {"value": 0.0, "formula": basic_value}
                            
                    except Exception as func_error:
                        print(f"Error evaluating nested function {vessel_attr_or_function}: {func_error}")
                        return {"value": 0.0, "formula": basic_value}
                else:
                    # It's a simple vessel attribute
                    vessel_attr = vessel_attr_or_function.strip()
                    print(f"Getting simple vessel attribute: {vessel_attr}")
                    vessel_val = get_vessel_attr(vessel, vessel_attr)
                    print(f"Vessel attribute '{vessel_attr}' value: {vessel_val}")
                    
                    if vessel_val is not None:
                        try:
                            vessel_val = float(vessel_val)
                            calculated_value = {
                                "value": vessel_val,
                                "formula": f"{vessel_attr} = {vessel_val}"
                            }
                        except (ValueError, TypeError) as ve:
                            print(f"Invalid numeric value for vessel attribute: {vessel_val}, error: {ve}")
                            return {"value": 0.0, "formula": basic_value}
                    else:
                        print(f"Vessel attribute {vessel_attr} returned None")
                
                if vessel_val is None:
                    print("No vessel value found for range comparison")
                    return {"value": 0.0, "formula": basic_value}
                
                # Convert to float for comparison
                try:
                    vessel_val_float = float(vessel_val)
                    print(f"Using value for range lookup: {vessel_val_float}")
                except (ValueError, TypeError) as ve:
                    print(f"Invalid vessel value for range comparison: {vessel_val}, error: {ve}")
                    return {"value": 0.0, "formula": basic_value}
                
                # Build table name - replace spaces with underscores
                service_name = service_name.strip()
                table_name = f"txn_{service_name.lower().replace(' ', '_')}"
                print(f"Table name: {table_name}")
                
                # Clean column names - replace spaces with underscores or use quoted identifiers
                min_col = min_col.strip().replace(' ', '_')
                max_col = max_col.strip().replace(' ', '_')
                fee_col = fee_col.strip().replace(' ', '_')
                
                print(f"Min column: {min_col}")
                print(f"Max column: {max_col}")
                print(f"Fee column: {fee_col}")
                print(f"Looking for range that contains: {vessel_val_float}")
                
                # Build query with proper column names
                query = f"""
                    SELECT {fee_col}
                    FROM {table_name}
                    WHERE {min_col} <= :val AND ({max_col} >= :val OR {max_col} IS NULL)
                    ORDER BY {min_col} DESC
                    FETCH FIRST 1 ROWS ONLY
                """
                
                print(f"Executing query: {query} with value: {vessel_val_float}")
                try:
                    result = db.execute(text(query), {"val": vessel_val_float}).fetchone()
                    print(f"Query result: {result}")
                    
                    if result and result[0] is not None:
                        try:
                            fee_val = round(float(result[0]), 2)
                            print(f"Found fee value: {fee_val}")
                        except (ValueError, TypeError) as ve:
                            print(f"Invalid fee value from database: {result[0]}, error: {ve}")
                            fee_val = 0.0
                    else:
                        fee_val = 0.0
                        print("No result found or fee value is None")
                    
                    # Build comprehensive formula description
                    if calculated_value and "formula" in calculated_value:
                        formula_desc = f"Range({calculated_value['formula']}, {service_name}) → {fee_val}"
                    else:
                        formula_desc = f"Range({vessel_attr_or_function}={vessel_val_float}, {service_name}) → {fee_val}"
                    
                    print(f"Final result: value={fee_val}, formula={formula_desc}")
                    print("=== RANGE FUNCTION DEBUG END ===")
                    
                    return {
                        "value": fee_val,
                        "formula": formula_desc
                    }
                except Exception as e:
                    print(f"Error executing Range query: {e}")
                    # Alternative: Try with quoted identifiers
                    try:
                        min_col_quoted = f'"{min_col.strip()}"'
                        max_col_quoted = f'"{max_col.strip()}"'
                        fee_col_quoted = f'"{fee_col.strip()}"'
                        
                        query_quoted = f"""
                            SELECT {fee_col_quoted}
                            FROM {table_name}
                            WHERE {min_col_quoted} <= :val AND ({max_col_quoted} >= :val OR {max_col_quoted} IS NULL)
                            ORDER BY {min_col_quoted} DESC
                            FETCH FIRST 1 ROWS ONLY
                        """
                        print(f"Trying quoted query: {query_quoted}")
                        result = db.execute(text(query_quoted), {"val": vessel_val_float}).fetchone()
                        print(f"Quoted query result: {result}")
                        
                        if result and result[0] is not None:
                            try:
                                fee_val = round(float(result[0]), 2)
                                print(f"Found fee value with quotes: {fee_val}")
                            except (ValueError, TypeError) as ve:
                                print(f"Invalid fee value from quoted query: {result[0]}, error: {ve}")
                                fee_val = 0.0
                        else:
                            fee_val = 0.0
                            print("No result found with quoted query")
                        
                        # Build comprehensive formula description
                        if calculated_value and "formula" in calculated_value:
                            formula_desc = f"Range({calculated_value['formula']}, {service_name}) → {fee_val}"
                        else:
                            formula_desc = f"Range({vessel_attr_or_function}={vessel_val_float}, {service_name}) → {fee_val}"
                        
                        print(f"Final result with quotes: value={fee_val}, formula={formula_desc}")
                        print("=== RANGE FUNCTION DEBUG END ===")
                        
                        return {
                            "value": fee_val,
                            "formula": formula_desc
                        }
                    except Exception as e2:
                        print(f"Error executing quoted Range query: {e2}")
                        print("=== RANGE FUNCTION DEBUG END ===")
                        return {"value": 0.0, "formula": basic_value}
            else:
                print(f"Invalid Range parameters: {params}")
                print("=== RANGE FUNCTION DEBUG END ===")
                return {"value": 0.0, "formula": basic_value}
                
        except Exception as e:
            print(f"DEBUG Exception in Range function: {e}")
            print("=== RANGE FUNCTION DEBUG END ===")
            return {"value": 0.0, "formula": basic_value}
    # Case 7: Bracket function - Bracket(vessel_attr, service_name, min_col, max_col, rate_col)
    if isinstance(basic_value, str) and basic_value.startswith("Bracket(") and basic_value.endswith(")"):
        print("Bracket function method ----->")
        try:
            # Extract parameters from Bracket(...)
            params_str = basic_value[8:-1]  # Remove "Bracket(" and ")"
            params = [param.strip() for param in params_str.split(",")]
            
            if len(params) >= 5:
                vessel_attr, service_name, min_col, max_col, rate_col = params[:5]
                
                # Get vessel attribute value
                vessel_attr = vessel_attr.strip()
                cargo_qty = float(get_vessel_attr(vessel, vessel_attr) or 0)
                print(f"Vessel attribute '{vessel_attr}' value: {cargo_qty}")
                
                if cargo_qty <= 0:
                    return []  # nothing to allocate

                # Build table name - replace spaces with underscores
                service_name = service_name.strip()
                table_name = f"txn_{service_name.lower().replace(' ', '_')}"
                print(f"Table name: {table_name}")
                
                # Clean column names - replace spaces with underscores
                min_col = min_col.strip().replace(' ', '_')
                max_col = max_col.strip().replace(' ', '_')
                rate_col = rate_col.strip().replace(' ', '_')
                
                print(f"Min column: {min_col}")
                print(f"Max column: {max_col}")
                print(f"Rate column: {rate_col}")
                
                # Build query to get all brackets
                query = f"""
                    SELECT bracket, {min_col}, {max_col}, {rate_col}
                    FROM {table_name}
                    ORDER BY COALESCE({min_col}, 0)
                """
                
                print(f"Executing query: {query}")
                try:
                    rows = db.execute(text(query)).fetchall()
                    print(f"Found {len(rows)} brackets")
                    
                    breakdown = []
                    cursor = 1

                    for idx, row in enumerate(rows, start=1):
                        bracket_name, min_q, max_q, rate = row
                        min_q = 1 if (min_q is None or min_q == "" or int(min_q) <= 0) else int(min_q)
                        max_q = None if (max_q is None or max_q == "") else int(max_q)
                        rate = float(rate or 0)

                        if cursor > cargo_qty:
                            break

                        start = max(cursor, min_q)
                        end = min(max_q if max_q is not None else int(cargo_qty), int(cargo_qty))
                        take = max(0, end - start + 1)

                        if take > 0:
                            subtotal = round(take * rate, 2)
                            print(f"Bracket function method -----> breakdown")
                            breakdown.append({
                                "name": bracket_name or f"Bracket {idx}",
                                "unique_key": f"{service_name}|Bracket{idx}",
                                "basic_value": basic_value,
                                "calculated_basic_value": take,
                                "movement": "1",
                                "tariff_percent": f"{rate:.2f}",
                                "formula_result": "Basic Value * Movement * Tariff %",
                                "optional": "N",
                                "operational_flag": "+",
                                "sub_total": subtotal,
                                "formula_inputs": f"{take} * {rate}",
                                "hide": "N"  ,
                                "is_bracket_item": "true"  
                            })
                        cursor = end + 1

                   
                    for item in breakdown:
                        item["hide"] = "N"

                    print(f"Bracket breakdown: {len(breakdown)} items")
                    return breakdown
                    
                except Exception as e:
                    print(f"Error executing Bracket query: {e}")
                    # Alternative: Try with quoted identifiers
                    try:
                        min_col_quoted = f'"{min_col.strip()}"'
                        max_col_quoted = f'"{max_col.strip()}"'
                        rate_col_quoted = f'"{rate_col.strip()}"'
                        
                        query_quoted = f"""
                            SELECT bracket, {min_col_quoted}, {max_col_quoted}, {rate_col_quoted}
                            FROM {table_name}
                            ORDER BY COALESCE({min_col_quoted}, 0)
                        """
                        print(f"Trying quoted query: {query_quoted}")
                        rows = db.execute(text(query_quoted)).fetchall()
                        print(f"Found {len(rows)} brackets with quoted query")
                        
                        breakdown = []
                        cursor = 1

                        for idx, row in enumerate(rows, start=1):
                            bracket_name, min_q, max_q, rate = row
                            min_q = 1 if (min_q is None or min_q == "" or int(min_q) <= 0) else int(min_q)
                            max_q = None if (max_q is None or max_q == "") else int(max_q)
                            rate = float(rate or 0)

                            if cursor > cargo_qty:
                                break

                            start = max(cursor, min_q)
                            end = min(max_q if max_q is not None else int(cargo_qty), int(cargo_qty))
                            take = max(0, end - start + 1)

                            if take > 0:
                                subtotal = round(take * rate, 2)
                                breakdown.append({
                                    "name": bracket_name or f"Bracket {idx}",
                                    "unique_key": f"{service_name}|Bracket{idx}",
                                    "basic_value": basic_value,
                                    "tariff_percent": f"{rate:.2f}",
                                    "calculated_basic_value": take,
                                    "sub_total": subtotal,
                                    "formula_inputs": f"{take} * {rate}",
                                    "hide": "N"  # Force hide bracket breakdowns
                                })
                                cursor = end + 1

                        
                        for item in breakdown:
                            item["hide"] = "N"

                        print(f"Bracket breakdown with quotes: {len(breakdown)} items")
                        return breakdown
                        
                    except Exception as e2:
                        print(f"Error executing quoted Bracket query: {e2}")
                        return []
            else:
                print(f"Invalid Bracket parameters: {params}")
                return []
                
        except Exception as e:
            print(f"DEBUG Exception in Bracket function: {e}")
            return []



    
     # Case 8: Formula with vessel attributes (like NRT*1*0.45)
    if isinstance(basic_value, str) and re.search(r"[A-Z]+", basic_value):
        expr = basic_value
        vessel_attrs = vessel.keys() if isinstance(vessel, dict) else [c.name for c in vessel.__table__.columns]

        for attr in vessel_attrs:
            if attr.upper() in expr:
                expr = expr.replace(attr.upper(), str(get_vessel_attr(vessel, attr)))

        return {
            "value": round(safe_eval(expr), 2),
            "formula": expr
        }
    

    # Case 9: Unknown format
    return {"value": 0.0, "formula": str(basic_value)}


def evaluate_tariff_percent(tariff_value: str, vessel, db: Session, services: list = None, current_service: dict = None):
    print(f"tariff_value is {tariff_value}")

    # Case 1: direct number
    if isinstance(tariff_value, (int, float)):
        return {"value": round(float(tariff_value), 2), "formula": str(tariff_value)}
    if isinstance(tariff_value, str) and tariff_value.replace('.', '', 1).isdigit():
        return {"value": round(float(tariff_value), 2), "formula": tariff_value}

    # Case 2: Direct vessel attribute (like RGRT, NRT, LOA, etc.)
    if isinstance(tariff_value, str) and tariff_value.isalpha() and not tariff_value.startswith(('Range(', 'Bracket(', 'Sum(')):
        print(f"Direct vessel attribute method: {tariff_value}")
        vessel_val = get_vessel_attr(vessel, tariff_value)
        print(f"Vessel attribute '{tariff_value}' value: {vessel_val}")
        
        return {
            "value": float(vessel_val),
            "formula": tariff_value
        }

    # Case 3 for Complex Calculation function - Calculate(expression with nested functions)
    if isinstance(tariff_value, str) and tariff_value.startswith("Calculate(") and tariff_value.endswith(")"):
        print("=== CALCULATE FUNCTION START (tariff) ===")
        print(f"Calculate expression: {tariff_value}")
        
        try:
            # Extract the inner expression
            expression = tariff_value[10:-1]  # Remove "Calculate(" and ")"
            print(f"Raw expression: {expression}")
            
            def evaluate_expression(expr: str) -> float:
                """Recursively evaluate mathematical expression with function calls"""
                print(f"  Evaluating expression: {expr}")
                
                # Remove outer parentheses if they wrap the entire expression
                expr = expr.strip()
                if expr.startswith('(') and expr.endswith(')'):
                    # Check if it's balanced parentheses
                    bracket_count = 0
                    balanced = True
                    for i, char in enumerate(expr):
                        if char == '(':
                            bracket_count += 1
                        elif char == ')':
                            bracket_count -= 1
                        if bracket_count == 0 and i < len(expr) - 1:
                            balanced = False
                            break
                    if balanced:
                        expr = expr[1:-1]
                
                # First, evaluate all function calls recursively (including nested ones)
                while True:
                    # Find the innermost function call
                    function_match = re.search(r'(\w+)\(([^()]*(?:\([^()]*\)[^()]*)*)\)', expr)
                    if not function_match:
                        break
                    
                    func_name = function_match.group(1)
                    func_params = function_match.group(2)
                    full_match = function_match.group(0)
                    
                    print(f"    Found function: {func_name}({func_params})")
                    
                    # Handle different function types
                    if func_name in ["Sum", "Multiply", "Subtract"]:
                        # For operation functions, we need to evaluate parameters first
                        evaluated_params = []
                        param_parts = []
                        current_param = ""
                        bracket_count = 0
                        
                        # Parse and evaluate each parameter
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    # Evaluate this parameter recursively
                                    param_value = evaluate_expression(current_param.strip())
                                    evaluated_params.append(str(param_value))
                                    param_parts.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            param_value = evaluate_expression(current_param.strip())
                            evaluated_params.append(str(param_value))
                            param_parts.append(current_param.strip())
                        
                        # Rebuild function call with evaluated parameters
                        new_func_call = f"{func_name}({','.join(evaluated_params)})"
                        func_result = evaluate_tariff_percent(new_func_call, vessel, db, services, current_service)
                        if isinstance(func_result, dict):
                            func_value = func_result["value"]
                        else:
                            func_value = 0.0
                    
                    elif func_name == "Range":
                        # For Range function, evaluate the first parameter (vessel_attr) if it's an expression
                        params_list = []
                        current_param = ""
                        bracket_count = 0
                        
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    if len(params_list) == 0:
                                        # First parameter might be an expression like "Multiply(LOA * BEAM * DEPTH)"
                                        param_value = evaluate_expression(current_param.strip())
                                        params_list.append(str(param_value))
                                    else:
                                        # Other parameters are column names, keep as is
                                        params_list.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            if len(params_list) == 0:
                                param_value = evaluate_expression(current_param.strip())
                                params_list.append(str(param_value))
                            else:
                                params_list.append(current_param.strip())
                        
                        # Rebuild Range function call
                        if len(params_list) >= 5:
                            new_func_call = f"Range({','.join(params_list)})"
                            func_result = evaluate_tariff_percent(new_func_call, vessel, db, services, current_service)
                            if isinstance(func_result, dict):
                                func_value = func_result["value"]
                            else:
                                func_value = 0.0
                        else:
                            func_value = 0.0
                    
                    elif func_name == "Bracket":
                        # Similar to Range but for Bracket function
                        params_list = []
                        current_param = ""
                        bracket_count = 0
                        
                        for char in func_params:
                            if char == '(':
                                bracket_count += 1
                            elif char == ')':
                                bracket_count -= 1
                            elif char == ',' and bracket_count == 0:
                                if current_param.strip():
                                    if len(params_list) == 0:
                                        param_value = evaluate_expression(current_param.strip())
                                        params_list.append(str(param_value))
                                    else:
                                        params_list.append(current_param.strip())
                                current_param = ""
                                continue
                            current_param += char
                        
                        if current_param.strip():
                            if len(params_list) == 0:
                                param_value = evaluate_expression(current_param.strip())
                                params_list.append(str(param_value))
                            else:
                                params_list.append(current_param.strip())
                        
                        if len(params_list) >= 5:
                            new_func_call = f"Bracket({','.join(params_list)})"
                            func_result = evaluate_tariff_percent(new_func_call, vessel, db, services, current_service)
                            if isinstance(func_result, list):
                                func_value = sum(item.get("sub_total", 0) for item in func_result)
                            else:
                                func_value = 0.0
                        else:
                            func_value = 0.0
                    
                    else:
                        # Unknown function, treat as 0
                        func_value = 0.0
                    
                    # Replace function call with its value in the expression
                    expr = expr.replace(full_match, str(func_value), 1)
                    print(f"    Replaced {full_match} with {func_value}")
                    print(f"    Updated expression: {expr}")
                
                # Now evaluate mathematical expressions with vessel attributes
                # Replace vessel attributes with their values
                vessel_attrs = vessel.keys() if isinstance(vessel, dict) else [c.name for c in vessel.__table__.columns]
                for attr in vessel_attrs:
                    if attr.upper() in expr:
                        attr_value = get_vessel_attr(vessel, attr)
                        expr = expr.replace(attr.upper(), str(attr_value))
                        print(f"    Replaced vessel attribute {attr} with {attr_value}")
                        print(f"    Updated expression: {expr}")
                
                # Now evaluate sub-service references (service->sub_service)
                while "->" in expr:
                    ref_match = re.search(r'(\w+)\s*->\s*([^+\-*/()]+)', expr)
                    if not ref_match:
                        break
                    
                    service_name = ref_match.group(1).strip()
                    sub_name = ref_match.group(2).strip()
                    full_match = ref_match.group(0)
                    
                    print(f"    Found reference: {service_name}->{sub_name}")
                    
                    # Find the sub-service value
                    ref_service = None
                    for s in services:
                        if s.get("service", "").strip().lower() == service_name.lower():
                            ref_service = s
                            break
                    
                    ref_value = 0.0
                    if ref_service:
                        ref_sub = next(
                            (ss for ss in ref_service.get("subService", [])
                            if isinstance(ss, dict) and ss.get("name", "").strip().lower() == sub_name.lower()),
                            None
                        )
                        if ref_sub:
                            ref_value = ref_sub.get("sub_total", 0)
                            print(f"    Found sub-service value: {ref_value}")
                    
                    # Replace reference with its value
                    expr = expr.replace(full_match, str(ref_value), 1)
                    print(f"    Updated expression: {expr}")
                
                # Finally, evaluate the mathematical expression
                try:
                    # Safe evaluation of the remaining expression
                    # Only allow numbers, basic operators, and parentheses
                    if re.match(r'^[0-9\.\+\-\*\/\(\) ]+$', expr):
                        result = safe_eval(expr)
                        print(f"    Final calculation: {expr} = {result}")
                        return result
                    else:
                        print(f" Invalid characters in expression: {expr}")
                        return 0.0
                except Exception as e:
                    print(f" Error evaluating expression: {e}")
                    return 0.0
            
            # Evaluate the entire calculation
            final_result = evaluate_expression(expression)
            
            print(f"Calculate final result: {final_result}")
            print("=== CALCULATE FUNCTION END (tariff) ===")
            
            return {
                "value": round(final_result, 2),
                "formula": f"Calculate({expression}) → {final_result}"
            }
                
        except Exception as e:
            print(f"DEBUG Exception in Calculate function (tariff): {e}")
            import traceback
            traceback.print_exc()
            return {"value": 0.0, "formula": tariff_value}

    # Case 4 for Operation functions - Sum/Subtract/Multiply(service->sub_service, direct_value, vessel_attr, ...)
    if isinstance(tariff_value, str) and (tariff_value.startswith("Sum(") or tariff_value.startswith("Subtract(") or tariff_value.startswith("Multiply(")) and tariff_value.endswith(")"):
        print("=== OPERATION FUNCTION START (tariff) ===")
        
        # Extract operation type
        if tariff_value.startswith("Sum("):
            operation = "Sum"
            params_str = tariff_value[4:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif tariff_value.startswith("Subtract("):
            operation = "Subtract"
            params_str = tariff_value[9:-1]
            initial_value = 0.0
            neutral_value = 0.0
        elif tariff_value.startswith("Multiply("):
            operation = "Multiply"
            params_str = tariff_value[9:-1]
            initial_value = 1.0
            neutral_value = 1.0
        else:
            return {"value": 0.0, "formula": tariff_value}
        
        print(f"{operation} expression: {tariff_value}")
        
        try:
            # Parse parameters considering nested brackets and operations
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
                return {"value": 0.0, "formula": tariff_value}
            
            result = initial_value
            formula_parts = []
            
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
                                
                                # Check if sub_total exists and is calculated
                                sub_total = ref_sub.get("sub_total", 0)
                                param_value = sub_total
                                param_formula = f"{service_name}->{sub_name}={sub_total}"
                                print(f"   Using sub_total: {sub_total}")
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
                elif param.isalpha():
                    vessel_val = get_vessel_attr(vessel, param)
                    param_value = float(vessel_val) if vessel_val else neutral_value
                    param_formula = f"{param}({param_value})"
                    print(f"   Using vessel attribute '{param}': {param_value}")
                
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
            print(f" === {operation.upper()} FUNCTION END (tariff) ===\n")
            
            return {
                "value": round(result, 2),
                "formula": f"{operation}({formula_str})"
            }
                
        except Exception as e:
            print(f" DEBUG Exception in {operation} function (tariff): {e}")
            import traceback
            traceback.print_exc()
            return {"value": initial_value, "formula": tariff_value}
        
    # Case 5: Reference -> Another Sub-service
    if isinstance(tariff_value, str) and "->" in tariff_value:
        print("Arrow method (tariff)")
        try:
            service_name, sub_name = [x.strip() for x in tariff_value.split("->", 1)]
            
            ref_service = next(
                (s for s in services if s.get("service", "").lower() == service_name.lower()),
                None
            )
            
            if ref_service:
                ref_sub = next(
                    (ss for ss in ref_service.get("subService", [])
                    if isinstance(ss, dict) and ss.get("name", "").lower() == sub_name.lower()),
                    None
                )

                if ref_sub and ref_sub.get("sub_total", 0) > 0:
                    # Reference found with calculated value
                    return {
                        "value": ref_sub.get("sub_total", 0),
                        "formula": f"{service_name}->{sub_name}"
                    }
                elif ref_sub:
                    # Reference found but not calculated yet - trigger calculation
                    calculated = calculate_subservice(ref_sub, vessel, db, services, ref_service)
                    if calculated and isinstance(calculated, list) and len(calculated) > 0:
                        return {
                            "value": calculated[0].get("sub_total", 0),
                            "formula": f"{service_name}->{sub_name}"
                        }

        except Exception as e:
            print(f"DEBUG Exception in reference lookup (tariff): {e}")
        
        return {"value": 0.0, "formula": tariff_value}
    
    # Case 6: Range function - Range(vessel_attr_or_function, service_name, min_col, max_col, fee_col)
    if isinstance(tariff_value, str) and tariff_value.startswith("Range(") and tariff_value.endswith(")"):
        print("=== RANGE FUNCTION DEBUG (tariff) ===")
        print(f"Tariff value: {tariff_value}")
        try:
            # Extract parameters from Range(...) with proper nested function handling
            params_str = tariff_value[6:-1]  # Remove "Range(" and ")"
            print(f"Raw params string: '{params_str}'")
            
            # Parse parameters considering nested functions
            params = []
            current_param = ""
            paren_level = 0
            
            for char in params_str:
                if char == '(':
                    paren_level += 1
                    current_param += char
                elif char == ')':
                    paren_level -= 1
                    current_param += char
                elif char == ',' and paren_level == 0:
                    # Only split on comma if we're not inside parentheses
                    params.append(current_param.strip())
                    current_param = ""
                else:
                    current_param += char
            
            # Add the last parameter
            if current_param.strip():
                params.append(current_param.strip())
                
            print(f"Parsed params: {params}")
            
            if len(params) >= 5:
                vessel_attr_or_function, service_name, min_col, max_col, fee_col = params[:5]
                
                print(f"vessel_attr_or_function: '{vessel_attr_or_function}'")
                print(f"service_name: '{service_name}'")
                print(f"min_col: '{min_col}'")
                print(f"max_col: '{max_col}'")
                print(f"fee_col: '{fee_col}'")
                
                # Step 1: Check if vessel_attr_or_function contains a nested function
                vessel_val = None
                calculated_value = None
                
                if '(' in vessel_attr_or_function and ')' in vessel_attr_or_function:
                    print(f"Detected nested function: {vessel_attr_or_function}")
                    # Evaluate the nested function first
                    try:
                        # Extract function name and parameters
                        func_name = vessel_attr_or_function.split('(')[0].strip()
                        func_params_str = vessel_attr_or_function[len(func_name)+1:-1]
                        
                        # Parse function parameters considering nested functions
                        func_params = []
                        current_func_param = ""
                        func_paren_level = 0
                        
                        for char in func_params_str:
                            if char == '(':
                                func_paren_level += 1
                                current_func_param += char
                            elif char == ')':
                                func_paren_level -= 1
                                current_func_param += char
                            elif char == ',' and func_paren_level == 0:
                                func_params.append(current_func_param.strip())
                                current_func_param = ""
                            else:
                                current_func_param += char
                        
                        if current_func_param.strip():
                            func_params.append(current_func_param.strip())
                        
                        print(f"Function: {func_name}, Parameters: {func_params}")
                        
                        if func_name.lower() == "multiply":
                            result = 1.0
                            formula_parts = []
                            for param in func_params:
                                print(f"Getting vessel attribute: {param}")
                                param_val = get_vessel_attr(vessel, param)
                                print(f"Vessel attribute {param} value: {param_val}")
                                if param_val is not None:
                                    try:
                                        result *= float(param_val)
                                        formula_parts.append(f"{param}={param_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                        return {"value": 0.0, "formula": tariff_value}
                                else:
                                    print(f"Missing vessel attribute: {param}")
                                    return {"value": 0.0, "formula": tariff_value}
                            
                            vessel_val = result
                            calculated_value = {
                                "value": result,
                                "formula": f"Multiply({' * '.join(formula_parts)}) = {result}"
                            }
                            print(f"Multiply function result: {vessel_val}")
                            
                        elif func_name.lower() == "sum":
                            result = 0.0
                            formula_parts = []
                            for param in func_params:
                                param_val = get_vessel_attr(vessel, param)
                                if param_val is not None:
                                    try:
                                        result += float(param_val)
                                        formula_parts.append(f"{param}={param_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                        return {"value": 0.0, "formula": tariff_value}
                                else:
                                    print(f"Missing vessel attribute: {param}")
                                    return {"value": 0.0, "formula": tariff_value}
                            
                            vessel_val = result
                            calculated_value = {
                                "value": result,
                                "formula": f"Sum({' + '.join(formula_parts)}) = {result}"
                            }
                            print(f"Sum function result: {vessel_val}")
                            
                        elif func_name.lower() == "subtract":
                            if len(func_params) >= 2:
                                first_val = get_vessel_attr(vessel, func_params[0])
                                if first_val is not None:
                                    try:
                                        result = float(first_val)
                                        formula_parts = [f"{func_params[0]}={first_val}"]
                                        
                                        for param in func_params[1:]:
                                            param_val = get_vessel_attr(vessel, param)
                                            if param_val is not None:
                                                try:
                                                    result -= float(param_val)
                                                    formula_parts.append(f"{param}={param_val}")
                                                except (ValueError, TypeError) as ve:
                                                    print(f"Invalid numeric value for {param}: {param_val}, error: {ve}")
                                                    return {"value": 0.0, "formula": tariff_value}
                                            else:
                                                print(f"Missing vessel attribute: {param}")
                                                return {"value": 0.0, "formula": tariff_value}
                                        
                                        vessel_val = result
                                        calculated_value = {
                                            "value": result,
                                            "formula": f"Subtract({' - '.join(formula_parts)}) = {result}"
                                        }
                                        print(f"Subtract function result: {vessel_val}")
                                    except (ValueError, TypeError) as ve:
                                        print(f"Invalid numeric value for {func_params[0]}: {first_val}, error: {ve}")
                                        return {"value": 0.0, "formula": tariff_value}
                                else:
                                    print(f"Missing first vessel attribute: {func_params[0]}")
                                    return {"value": 0.0, "formula": tariff_value}
                            else:
                                print("Subtract function requires at least 2 parameters")
                                return {"value": 0.0, "formula": tariff_value}
                        else:
                            print(f"Unsupported function: {func_name}")
                            return {"value": 0.0, "formula": tariff_value}
                            
                    except Exception as func_error:
                        print(f"Error evaluating nested function {vessel_attr_or_function}: {func_error}")
                        return {"value": 0.0, "formula": tariff_value}
                else:
                    # It's a simple vessel attribute
                    vessel_attr = vessel_attr_or_function.strip()
                    print(f"Getting simple vessel attribute: {vessel_attr}")
                    vessel_val = get_vessel_attr(vessel, vessel_attr)
                    print(f"Vessel attribute '{vessel_attr}' value: {vessel_val}")
                    
                    if vessel_val is not None:
                        try:
                            vessel_val = float(vessel_val)
                            calculated_value = {
                                "value": vessel_val,
                                "formula": f"{vessel_attr} = {vessel_val}"
                            }
                        except (ValueError, TypeError) as ve:
                            print(f"Invalid numeric value for vessel attribute: {vessel_val}, error: {ve}")
                            return {"value": 0.0, "formula": tariff_value}
                    else:
                        print(f"Vessel attribute {vessel_attr} returned None")
                
                if vessel_val is None:
                    print("No vessel value found for range comparison")
                    return {"value": 0.0, "formula": tariff_value}
                
                # Convert to float for comparison
                try:
                    vessel_val_float = float(vessel_val)
                    print(f"Using value for range lookup: {vessel_val_float}")
                except (ValueError, TypeError) as ve:
                    print(f"Invalid vessel value for range comparison: {vessel_val}, error: {ve}")
                    return {"value": 0.0, "formula": tariff_value}
                
                # Build table name - replace spaces with underscores
                service_name = service_name.strip()
                table_name = f"txn_{service_name.lower().replace(' ', '_')}"
                print(f"Table name: {table_name}")
                
                # Clean column names - replace spaces with underscores or use quoted identifiers
                min_col = min_col.strip().replace(' ', '_')
                max_col = max_col.strip().replace(' ', '_')
                fee_col = fee_col.strip().replace(' ', '_')
                
                print(f"Min column: {min_col}")
                print(f"Max column: {max_col}")
                print(f"Fee column: {fee_col}")
                print(f"Looking for range that contains: {vessel_val_float}")
                
                # Build query with proper column names
                query = f"""
                    SELECT {fee_col}
                    FROM {table_name}
                    WHERE {min_col} <= :val AND ({max_col} >= :val OR {max_col} IS NULL)
                    ORDER BY {min_col} DESC
                    FETCH FIRST 1 ROWS ONLY
                """
                
                print(f"Executing query: {query} with value: {vessel_val_float}")
                try:
                    result = db.execute(text(query), {"val": vessel_val_float}).fetchone()
                    print(f"Query result: {result}")
                    
                    if result and result[0] is not None:
                        try:
                            fee_val = round(float(result[0]), 2)
                            print(f"Found fee value: {fee_val}")
                        except (ValueError, TypeError) as ve:
                            print(f"Invalid fee value from database: {result[0]}, error: {ve}")
                            fee_val = 0.0
                    else:
                        fee_val = 0.0
                        print("No result found or fee value is None")
                    
                    # Build comprehensive formula description
                    if calculated_value and "formula" in calculated_value:
                        formula_desc = f"Range({calculated_value['formula']}, {service_name}) → {fee_val}"
                    else:
                        formula_desc = f"Range({vessel_attr_or_function}={vessel_val_float}, {service_name}) → {fee_val}"
                    
                    print(f"Final result: value={fee_val}, formula={formula_desc}")
                    print("=== RANGE FUNCTION DEBUG END (tariff) ===")
                    
                    return {
                        "value": fee_val,
                        "formula": formula_desc
                    }
                except Exception as e:
                    print(f"Error executing Range query: {e}")
                    # Alternative: Try with quoted identifiers
                    try:
                        min_col_quoted = f'"{min_col.strip()}"'
                        max_col_quoted = f'"{max_col.strip()}"'
                        fee_col_quoted = f'"{fee_col.strip()}"'
                        
                        query_quoted = f"""
                            SELECT {fee_col_quoted}
                            FROM {table_name}
                            WHERE {min_col_quoted} <= :val AND ({max_col_quoted} >= :val OR {max_col_quoted} IS NULL)
                            ORDER BY {min_col_quoted} DESC
                            FETCH FIRST 1 ROWS ONLY
                        """
                        print(f"Trying quoted query: {query_quoted}")
                        result = db.execute(text(query_quoted), {"val": vessel_val_float}).fetchone()
                        print(f"Quoted query result: {result}")
                        
                        if result and result[0] is not None:
                            try:
                                fee_val = round(float(result[0]), 2)
                                print(f"Found fee value with quotes: {fee_val}")
                            except (ValueError, TypeError) as ve:
                                print(f"Invalid fee value from quoted query: {result[0]}, error: {ve}")
                                fee_val = 0.0
                        else:
                            fee_val = 0.0
                            print("No result found with quoted query")
                        
                        # Build comprehensive formula description
                        if calculated_value and "formula" in calculated_value:
                            formula_desc = f"Range({calculated_value['formula']}, {service_name}) → {fee_val}"
                        else:
                            formula_desc = f"Range({vessel_attr_or_function}={vessel_val_float}, {service_name}) → {fee_val}"
                        
                        print(f"Final result with quotes: value={fee_val}, formula={formula_desc}")
                        print("=== RANGE FUNCTION DEBUG END (tariff) ===")
                        
                        return {
                            "value": fee_val,
                            "formula": formula_desc
                        }
                    except Exception as e2:
                        print(f"Error executing quoted Range query: {e2}")
                        print("=== RANGE FUNCTION DEBUG END (tariff) ===")
                        return {"value": 0.0, "formula": tariff_value}
            else:
                print(f"Invalid Range parameters: {params}")
                print("=== RANGE FUNCTION DEBUG END (tariff) ===")
                return {"value": 0.0, "formula": tariff_value}
                
        except Exception as e:
            print(f"DEBUG Exception in Range function (tariff): {e}")
            print("=== RANGE FUNCTION DEBUG END (tariff) ===")
            return {"value": 0.0, "formula": tariff_value}

    # Case 7: Bracket function - Bracket(vessel_attr, service_name, min_col, max_col, rate_col)
    if isinstance(tariff_value, str) and tariff_value.startswith("Bracket(") and tariff_value.endswith(")"):
        print("Bracket function method (tariff) ----->")
        try:
            # Extract parameters from Bracket(...)
            params_str = tariff_value[8:-1]  # Remove "Bracket(" and ")"
            params = [param.strip() for param in params_str.split(",")]
            
            if len(params) >= 5:
                vessel_attr, service_name, min_col, max_col, rate_col = params[:5]
                
                # Get vessel attribute value
                vessel_attr = vessel_attr.strip()
                cargo_qty = float(get_vessel_attr(vessel, vessel_attr) or 0)
                print(f"Vessel attribute '{vessel_attr}' value: {cargo_qty}")
                
                if cargo_qty <= 0:
                    return []  # nothing to allocate

                # Build table name - replace spaces with underscores
                service_name = service_name.strip()
                table_name = f"txn_{service_name.lower().replace(' ', '_')}"
                print(f"Table name: {table_name}")
                
                # Clean column names - replace spaces with underscores
                min_col = min_col.strip().replace(' ', '_')
                max_col = max_col.strip().replace(' ', '_')
                rate_col = rate_col.strip().replace(' ', '_')
                
                print(f"Min column: {min_col}")
                print(f"Max column: {max_col}")
                print(f"Rate column: {rate_col}")
                
                # Build query to get all brackets
                query = f"""
                    SELECT bracket, {min_col}, {max_col}, {rate_col}
                    FROM {table_name}
                    ORDER BY COALESCE({min_col}, 0)
                """
                
                print(f"Executing query: {query}")
                try:
                    rows = db.execute(text(query)).fetchall()
                    print(f"Found {len(rows)} brackets")
                    
                    breakdown = []
                    cursor = 1

                    for idx, row in enumerate(rows, start=1):
                        bracket_name, min_q, max_q, rate = row
                        min_q = 1 if (min_q is None or min_q == "" or int(min_q) <= 0) else int(min_q)
                        max_q = None if (max_q is None or max_q == "") else int(max_q)
                        rate = float(rate or 0)

                        if cursor > cargo_qty:
                            break

                        start = max(cursor, min_q)
                        end = min(max_q if max_q is not None else int(cargo_qty), int(cargo_qty))
                        take = max(0, end - start + 1)

                        if take > 0:
                            subtotal = round(take * rate, 2)
                            print(f"Bracket function method (tariff) -----> breakdown")
                            breakdown.append({
                                "name": bracket_name or f"Bracket {idx}",
                                "unique_key": f"{service_name}|Bracket{idx}",
                                "basic_value": tariff_value,
                                "calculated_basic_value": take,
                                "movement": "1",
                                "tariff_percent": f"{rate:.2f}",
                                "formula_result": "Basic Value * Movement * Tariff %",
                                "optional": "N",
                                "operational_flag": "+",
                                "sub_total": subtotal,
                                "formula_inputs": f"{take} * {rate}",
                                "hide": "N",
                                "is_bracket_item": "true"
                            })
                        cursor = end + 1

                    for item in breakdown:
                        item["hide"] = "N"

                    print(f"Bracket breakdown: {len(breakdown)} items")
                    return breakdown
                    
                except Exception as e:
                    print(f"Error executing Bracket query: {e}")
                    # Alternative: Try with quoted identifiers
                    try:
                        min_col_quoted = f'"{min_col.strip()}"'
                        max_col_quoted = f'"{max_col.strip()}"'
                        rate_col_quoted = f'"{rate_col.strip()}"'
                        
                        query_quoted = f"""
                            SELECT bracket, {min_col_quoted}, {max_col_quoted}, {rate_col_quoted}
                            FROM {table_name}
                            ORDER BY COALESCE({min_col_quoted}, 0)
                        """
                        print(f"Trying quoted query: {query_quoted}")
                        rows = db.execute(text(query_quoted)).fetchall()
                        print(f"Found {len(rows)} brackets with quoted query")
                        
                        breakdown = []
                        cursor = 1

                        for idx, row in enumerate(rows, start=1):
                            bracket_name, min_q, max_q, rate = row
                            min_q = 1 if (min_q is None or min_q == "" or int(min_q) <= 0) else int(min_q)
                            max_q = None if (max_q is None or max_q == "") else int(max_q)
                            rate = float(rate or 0)

                            if cursor > cargo_qty:
                                break

                            start = max(cursor, min_q)
                            end = min(max_q if max_q is not None else int(cargo_qty), int(cargo_qty))
                            take = max(0, end - start + 1)

                            if take > 0:
                                subtotal = round(take * rate, 2)
                                breakdown.append({
                                    "name": bracket_name or f"Bracket {idx}",
                                    "unique_key": f"{service_name}|Bracket{idx}",
                                    "basic_value": tariff_value,
                                    "tariff_percent": f"{rate:.2f}",
                                    "calculated_basic_value": take,
                                    "sub_total": subtotal,
                                    "formula_inputs": f"{take} * {rate}",
                                    "hide": "N"
                                })
                                cursor = end + 1

                        for item in breakdown:
                            item["hide"] = "N"

                        print(f"Bracket breakdown with quotes: {len(breakdown)} items")
                        return breakdown
                        
                    except Exception as e2:
                        print(f"Error executing quoted Bracket query: {e2}")
                        return []
            else:
                print(f"Invalid Bracket parameters: {params}")
                return []
                
        except Exception as e:
            print(f"DEBUG Exception in Bracket function (tariff): {e}")
            return []

    # Case 8: Formula with vessel attributes (like NRT*1*0.45)
    if isinstance(tariff_value, str) and re.search(r"[A-Z]+", tariff_value):
        expr = tariff_value
        vessel_attrs = vessel.keys() if isinstance(vessel, dict) else [c.name for c in vessel.__table__.columns]

        for attr in vessel_attrs:
            if attr.upper() in expr:
                expr = expr.replace(attr.upper(), str(get_vessel_attr(vessel, attr)))

        return {
            "value": round(safe_eval(expr), 2),
            "formula": expr
        }

    # Case 9: Unknown format
    return {"value": 0.0, "formula": str(tariff_value)}


def calculate_subservice(sub: dict, vessel, db: Session, services: list = None, current_service: dict = None, disbursement_seq: int = None, disbursement_type: str = "PDA"):
    if hasattr(vessel, "model_dump"):   
        vessel = vessel.model_dump()
    elif hasattr(vessel, "dict"):      
        vessel = vessel.dict()
    
    # Initialize calculated_basic_value and formula_inputs
    sub["calculated_basic_value"] = 0
    sub["formula_inputs"] = ""
    
    # Evaluate basic value and tariff percent
    basic_val = evaluate_basic_value(sub["basic_value"], vessel, db, services, current_service)
    tariff_eval = evaluate_tariff_percent(sub.get("tariff_percent", 1), vessel, db, services, current_service)
    tariff_val = tariff_eval.get("value", 1) if isinstance(tariff_eval, dict) else float(tariff_eval or 1)

    movement_val = get_movement_value(sub, vessel, db, disbursement_seq, disbursement_type)
    
    # Case 1: breakdown list (brackets) - returns multiple items
    if isinstance(basic_val, list):
        results = []
        for idx, br in enumerate(basic_val):
            new_sub = sub.copy() if idx > 0 else sub

            new_sub.update({
                "name": br.get("name"),
                "calculated_basic_value": round(br.get("calculated_basic_value", 0), 2),
                "tariff_percent": br.get("tariff_percent"),
                "sub_total": round(br.get("sub_total", 0), 2),
                "formula_inputs": br.get("formula_inputs"),
                "hide": "N" if br.get("hide") == "N" or br.get("is_bracket_item") == "true" else br.get("hide", "Y")
            })

            results.append(new_sub)

        return results


    # Case 2: dict with evaluated value + formula (including reference case)
    if isinstance(basic_val, dict):
        movement = movement_val
        tariff = tariff_val

        if "->" in sub["basic_value"]:
            # Reference case: apply movement and tariff to referenced value
            result = round(basic_val["value"] * movement * tariff, 2)
            formula = f"{basic_val['value']} * {movement} * {tariff:.4f}"
        else:
            # Regular case: multiply by movement and tariff
            result = round(basic_val["value"] * movement * tariff, 2)
            
            # Build formula with actual values instead of attribute names
            if isinstance(sub["basic_value"], str) and sub["basic_value"].isalpha() and not sub["basic_value"].startswith(('Range(', 'Bracket(', 'Sum(')):
                # For direct vessel attributes, show the actual value
                formula = f"{basic_val['value']} * {movement} * {tariff:.4f}"
            else:
                # For formulas and other cases, use the original formula display
                formula = f"{basic_val['formula']} * {movement} * {tariff:.4f}"

        sub.update({
            "calculated_basic_value": round(basic_val["value"], 2),
            "formula_inputs": formula,
            "sub_total": result
        })
        return [sub]

    return [sub]


def has_reference_dependency(sub: dict) -> bool:
    """Check if a subservice has reference dependencies"""
    basic_val = sub.get("basic_value", "")
    tariff_val = sub.get("tariff_percent", "")
    
    # Check if basic_value has reference
    basic_has_ref = False
    if isinstance(basic_val, str):
        basic_has_ref = any(pattern in basic_val for pattern in ["->", "Sum(", "Subtract(", "Multiply(", "Calculation(", "Range(", "Bracket("])
    
    # Check if tariff_percent has reference  
    tariff_has_ref = False
    if isinstance(tariff_val, str):
        tariff_has_ref = any(pattern in tariff_val for pattern in ["->", "Sum(", "Subtract(", "Multiply(", "Calculation(", "Range(", "Bracket("])
    
    has_ref = basic_has_ref or tariff_has_ref
    
    if has_ref:
        ref_types = []
        if basic_has_ref:
            ref_types.append(f"basic_value: '{basic_val}'")
        if tariff_has_ref:
            ref_types.append(f"tariff_percent: '{tariff_val}'")
        print(f"  Reference detected in '{sub.get('name')}': {', '.join(ref_types)}")
    
    return has_ref


def calculate_service_total(service: dict):
    """Calculate total for a service by summing sub_total values where optional is N"""
    service_name = service.get("service", "Unnamed Service")
    total = 0
    calculated_subs = []
    
    for sub in service.get("subService", []):
        if isinstance(sub, dict) and sub.get("optional") == "N":
            sub_total = sub.get("sub_total", 0)
            total += sub_total
            if sub_total > 0:
                calculated_subs.append(f"{sub.get('name')}: {sub_total}")
    
    service["total"] = round(total, 2)
    
    if calculated_subs:
        print(f"    📦 Service '{service_name}' total: {total} from {len(calculated_subs)} sub-services")
        for sub_info in calculated_subs:
            print(f"      - {sub_info}")
    else:
        print(f"    ⚠️  Service '{service_name}' total: {total} (no calculated sub-services)")
    
    return service

def calculate_grand_total(services: list):
    """Calculate grand total by summing service totals where is_auto_calculate is N"""
    service_total = sum(service.get("total", 0) for service in services if service.get("is_auto_calculate") == "N")
    grand_total = sum(service.get("total", 0) for service in services)
    return {
        "service_total": round(service_total, 2),
        "grand_total": round(grand_total, 2)
    }


def calculate_all_services_in_order(services: list, vessel, db: Session, disbursement_seq: Optional[int] = None , disbursement_type: str = "PDA"):
    """
    Calculate all services in proper order:
    1. First pass: Calculate services WITHOUT references
    2. Second pass: Calculate services WITH references
    """
    temp_services = copy.deepcopy(services)
    
    # Convert vessel to dict if needed
    if hasattr(vessel, "model_dump"):   
        vessel_dict = vessel.model_dump()
    elif hasattr(vessel, "dict"):      
        vessel_dict = vessel.dict()
    else:
        vessel_dict = vessel

    # First pass: Calculate subservices WITHOUT references
    print("=== FIRST PASS: Calculating non-reference subservices ===")
    for i, service in enumerate(temp_services):
        service_name = service.get("service", f"Service_{i}")
        print(f"\nProcessing service: {service_name}")
        
        subs = service.get("subService", [])
        updated_subs = []
        
        for sub in subs:
            sub_name = sub.get("name", "Unnamed")
            
            if not has_reference_dependency(sub):
                print(f"  Calculating non-reference sub: {sub_name}")
                calculated_subs = calculate_subservice(
                    sub, vessel_dict, db, temp_services, service, 
                    disbursement_seq, disbursement_type
                )
                if isinstance(calculated_subs, list):
                    updated_subs.extend(calculated_subs)
                    for s in updated_subs:
                        if s.get("basic_value", "").startswith("Bracket(") or s.get("is_bracket_item") == "true":
                            s["hide"] = "N"
                    # Print result
                    for calc_sub in calculated_subs:
                        if isinstance(calc_sub, dict):
                            sub_total = calc_sub.get("sub_total", 0)
                            print(f"    {calc_sub.get('name')} result: {sub_total}")
                else:
                    updated_subs.append(calculated_subs)
            else:
                print(f"  Skipping reference sub for now: {sub_name}")
                updated_subs.append(sub)
        
        service["subService"] = updated_subs
        # Calculate service total after first pass
        calculate_service_total(service)
        print(f"   Service '{service_name}' total after first pass: {service.get('total', 0)}")

    
    # Second pass: Calculate subservices WITH references
    print("\n=== SECOND PASS: Calculating reference subservices ===")
    for i, service in enumerate(temp_services):
        service_name = service.get("service", f"Service_{i}")
        print(f"\nProcessing service: {service_name}")
        
        subs = service.get("subService", [])
        updated_subs = []
        
        for sub in subs:
            sub_name = sub.get("name", "Unnamed")
            
            if has_reference_dependency(sub):
                print(f"   Calculating reference sub: {sub_name}")
                print(f"    Basic value: {sub.get('basic_value')}")
                
                calculated_subs = calculate_subservice(
                    sub, vessel_dict, db, temp_services, service, 
                    disbursement_seq, disbursement_type
                )
                
                if isinstance(calculated_subs, list):
                    updated_subs.extend(calculated_subs)
                    # Print detailed results
                    for calc_sub in calculated_subs:
                        if isinstance(calc_sub, dict):
                            sub_total = calc_sub.get("sub_total", 0)
                            formula_inputs = calc_sub.get("formula_inputs", "")
                            print(f"    {calc_sub.get('name')} result: {sub_total}")
                            print(f"    Formula: {formula_inputs}")
                else:
                    updated_subs.append(calculated_subs)
                    print(f"     No calculation results for {sub_name}")
            else:
                updated_subs.append(sub)
                # Print existing calculated values
                if isinstance(sub, dict) and sub.get("sub_total", 0) > 0:
                    print(f"   Already calculated: {sub_name} = {sub.get('sub_total')}")
        
        service["subService"] = updated_subs
        calculate_service_total(service)
        print(f"   Service '{service_name}' final total: {service.get('total', 0)}")


    return temp_services


def process_services_calculation(services_data, vessel_info, db, disbursement_seq:Optional[int] =None, disbursement_type="PDA"):
    """Main function to process service calculations with proper dependency order"""
    
    # Calculate all services in proper order
    calculated_services = calculate_all_services_in_order(
        services_data["items"], 
        vessel_info, 
        db, 
        disbursement_seq, 
        disbursement_type
    )
    
    # Update the services data
    services_data["items"] = calculated_services
    
    # Calculate totals
    totals = calculate_grand_total(calculated_services)
    services_data["service_total"] = totals["service_total"]
    services_data["grand_total"] = totals["grand_total"]
    
    return services_data


