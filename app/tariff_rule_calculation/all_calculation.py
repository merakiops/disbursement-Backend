from sqlalchemy.orm import Session
from sqlalchemy import text
import re
import copy
from typing import Any, Dict, List, Union,Optional
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime
from app.models.country import MaCountry
import math
from app.config import Config
from app.models.txn_disbursement import TxnDisbursement
from app.models.cargo import MaCargo
from app.models.txn_pda_vessel_details import PdaVesselDetails
from app.tariff_rule_calculation.suez_canal import bracket_calculation_for_suez_canal,reference_calculation_egypt
from app.core.constants import CountryName
import logging
from decimal import Decimal, ROUND_HALF_UP

SCHEMA_NAME=Config.SCHEMA_NAME
logger = logging.getLogger("app_logger")

            

def get_vessel_or_cargo_attr(vessel, dto, key: str,db):
    """
    Gets attribute value from vessel or cargo based on key name.
    - 'type' or 'vsl type' → vessel.type
    - 'cargo' or 'cargo type' → dto.cargo.type
    """
    key_lower = key.strip().lower()
    # Check if it's a cargo-related attribute
    if key_lower in ['cargo', 'cargo type']:
        cargo_type=None
        if dto and hasattr(dto, 'cargo') and dto.cargo:
            if isinstance(dto.cargo, dict):
                return dto.cargo.get('type')
            else:
                return getattr(dto.cargo, 'type', None)
        if not cargo_type and getattr(dto, 'cargo_id', None):
            cargo_obj = db.query(MaCargo).filter(MaCargo.cargo_id == dto.cargo_id).first()
            if cargo_obj:
                cargo_type = cargo_obj.type
        logger.info(f"the cargo type is {cargo_type}")
        return cargo_type
    
    # Check if it's a vessel type attribute
    if key_lower in ['type', 'vsl type', 'vessel type']:
        return get_vessel_attr(vessel, 'type')
    if key_lower in ['day','days','hours','hour']:
        if key_lower=='day' or key_lower=='days':
            value=dto.vessel_stay/1440
        elif key_lower=='hour' or key_lower=='hours':
            value=(dto.vessel_stay/1440)*24
        else:
            value=dto.vessel_stay
        return int(value)
    # Default: try vessel attributes
    return get_vessel_attr(vessel, key)


def get_vessel_attr(vessel, attr):
    # Convert attribute to lowercase to match your database columns
    attr_lower = attr.lower()
    attr_upper = attr.upper()
    
    logger.info(f"Get_vessel_attr looking for: '{attr}' (trying: '{attr_lower}', '{attr_upper}')")
    
    # case 1: vessel is a dict
    if isinstance(vessel, dict):
        # Try exact match first
        if attr in vessel:
            result = vessel.get(attr, 0) or 0
            logger.info(f"Found exact match in dict: {result}")
            return result
        # Try uppercase match (for LOA, BEAM, DEPTH, etc.)
        if attr_upper in vessel:
            result = vessel.get(attr_upper, 0) or 0
            logger.info(f"Found uppercase match in dict: {result}")
            return result
        # Try lowercase match
        if attr_lower in vessel:
            result = vessel.get(attr_lower, 0) or 0
            logger.info(f"Found lowercase match in dict: {result}")
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
            # Try case-insensitive match in additional_properties
            for key, value in vessel["additional_properties"].items():
                if key.lower() == attr_lower:
                    return value or 0

        logger.info(f"Available vessel keys: {list(vessel.keys())}")
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
        # Try case-insensitive match in additional_properties
        for key, value in vessel.additional_properties.items():
            if key.lower() == attr_lower:
                return value or 0

    # Debug: print available attributes
    if isinstance(vessel, dict):
        logger.info(f"Available vessel attributes: {list(vessel.keys())}")
    else:
        logger.info(f"Available vessel attributes: {[attr for attr in dir(vessel) if not attr.startswith('_')]}")
    
    logger.info(f"Looking for attribute: '{attr}' or '{attr_lower}' or '{attr_upper}'")
    
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
        logger.info(f"Safe eval error: {e} for expression: {expr}")
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


def range_calculation(db: Session,vsl_attr: str,service_name: str,vessel: Any,resultant_col: str,country_id:int=None,port_id:int=None,sub:dict=None) -> Dict[str, Union[float, str]]:
    """
    Retrieves a fee value based on a vessel attribute that falls within a given range.
    """
    try:
        # Check if vsl_attr has sector condition (e.g., 'GRT|sector=laden')


        if sub and isinstance(vsl_attr, str) and '|' in vsl_attr and '=' in vsl_attr:
            vsl_attr, should_process = vsl_attr_and_additional_prop_separator(vsl_attr, vessel, sub)
            if not should_process:
                return {"value": 0, "formula": "sector_mismatch"}
        
        if isinstance(vsl_attr, (int, float)):
            vessel_val_float = float(vsl_attr)
        elif vsl_attr.lower() == "volume":
            vessel_val_float = volume_calculate(vessel)
        else:
            
            vessel_val = get_vessel_attr(vessel, vsl_attr)
            vessel_val_float = float(vessel_val or 0)


        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        query = f"""
            SELECT {resultant_col}
            FROM {SCHEMA_NAME}.{table_name}
            WHERE min_range <= :val AND (max_range >= :val OR max_range IS NULL) and port=:port_id
            ORDER BY min_range DESC
            LIMIT 1
        """

        logger.info(f"Executing query for table '{table_name}' with value: {vessel_val_float}")
        result = db.execute(text(query), {"val": vessel_val_float, "port_id":port_id}).fetchone()
        logger.info(f"Query result: {result},{resultant_col},{table_name},{country_id}")

        if result and result[0] is not None:
            value = result[0]
            logger.info(f"Found fee value: {value}")
        else:
            query = f"""
                SELECT {resultant_col}
                FROM {SCHEMA_NAME}.{table_name}
                WHERE min_range <= :val AND (max_range >= :val OR max_range IS NULL) and country=:country_id
                ORDER BY min_range DESC
                LIMIT 1
            """

            logger.info(f"Executing query for table '{table_name}' with value: {vessel_val_float}")
            result = db.execute(text(query), {"val": vessel_val_float, "country_id":country_id}).fetchone()
            logger.info(f"Query result: {result},{resultant_col},{table_name},{country_id}")
            if result is not None and result[0] is not None:
                value = result[0]
            else:
                value = 0.0  # default if nothing found

    except (ValueError, TypeError, SQLAlchemyError) as e:
        logger.error(f"Error during range calculation in range: {e}")
        value = 0.0

    return {
        "value": value,
        "formula": f"Range:{service_name}:{resultant_col}->{value}"
    }

def evaluate_formula(formula: str, rate: float, vessel,dto,take) -> float:
    try:
        formula_lower = formula.strip().lower()
        
        if formula_lower in ['rate','fixed']:
            return rate
        
        # First replace 'rate' with its value
        formula_expr = formula.lower().replace('rate', str(rate))
        
        # Extract vessel properties (excluding 'rate')
        var_names = extract_vsl_property(formula_expr)
        var_names = {name for name in var_names if name.lower() != 'rate'}
        
        if var_names:
            context = build_variables(vessel, var_names,dto)
            context.update({
                "remaining":take,
                "take":take,
                "value":take
            })
            for var_name, var_value in context.items():
                formula_expr = formula_expr.replace(var_name, str(var_value))
                formula_expr = formula_expr.replace(var_name.upper(), str(var_value))
        return eval(formula_expr)
        
    except Exception as e:
        return rate*take


def bracket_calculation(db: Session,cargo_qty: str,service_name: str,vessel: Any,country_id:int=None,port_id:int=None,sub=None,dto=None) -> List[Dict[str, Any]]:
    """
    Calculates a tiered fee structure based on cargo quantity and tariff brackets.
    """
    try:
        vessel_attr = cargo_qty.strip()
        qty_value = float(get_vessel_attr(vessel, vessel_attr) or 0)
        logger.info(f"Vessel attribute '{vessel_attr}' value: {qty_value}")
        additional_prop=False
        formula_result = [p.strip().strip('()') for p in re.split(r'[+\-*/]', sub["formula_result"])]
        formula_result = [p for p in formula_result if p]  # Remove empty strings

        if formula_result[-1].lower().replace(" ","") not in ["basicvalue","tariff%","tariff", "movement"]: 
            additional_attr=formula_result[-1]
            additional_value=get_vessel_attr(vessel, additional_attr) if formula_result[-1]!="roe" else dto.roe
            if "*(1/" in sub["formula_result"].replace(" ","").lower():  #this is a exception case where the (1/roe is handled)
                additional_value=1/float(additional_value)
            else:
                additional_value=additional_value
            additional_prop=True
        if qty_value <= 0:
            logger.info("Cargo quantity <= 0, skipping bracket calculation.")
            return []
        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        # Check if fixed column exists
        check_column_query = f"""
            SELECT column_name FROM information_schema.columns 
            WHERE table_name = :table_name AND column_name = 'formula' AND table_schema = :schema_name
        """
        has_formula = db.execute(text(check_column_query), {"table_name": table_name, "schema_name": SCHEMA_NAME}).fetchone()
        
        if has_formula:
            query = f"""
                SELECT bracket, min_range, max_range, rate, formula
                FROM {SCHEMA_NAME}.{table_name}
                where port=:port_id
                ORDER BY COALESCE(min_range, 0)
            """
            
        else:
            query = f"""
                SELECT bracket, min_range, max_range, rate
                FROM {SCHEMA_NAME}.{table_name}
                where port=:port_id
                ORDER BY COALESCE(min_range, 0)
            """

        logger.info(f"Executing query: {query}")
        rows = db.execute(text(query),{"port_id":port_id}).fetchall()
        logger.info(f"Found {len(rows)} brackets")
        if not rows:
            if has_formula:
                query = f"""
                SELECT bracket, min_range, max_range, rate, formula
                FROM {SCHEMA_NAME}.{table_name}
                where country=:country_id
                ORDER BY COALESCE(min_range, 0)
            """
            else:
                query = f"""
                SELECT bracket, min_range, max_range, rate
                FROM {SCHEMA_NAME}.{table_name}
                where country=:country_id
                ORDER BY COALESCE(min_range, 0)
            """

            logger.info(f"Executing query: {query}")
            rows = db.execute(text(query),{"country_id":country_id}).fetchall()

        breakdown: List[Dict[str, Any]] = []
        cursor = 1

        for idx, row in enumerate(rows, start=1):
            if has_formula:
                bracket_name, min_q, max_q, rate, formula = row
            else:
                bracket_name, min_q, max_q, rate = row
                formula=None
            # bracket_name, min_q, max_q, rate = row
            min_q = 1 if not min_q or int(min_q) <= 0 else int(min_q)
            max_q = None if not max_q else int(max_q)
            rate = float(rate or 0)

            if cursor > qty_value:
                break

            start = max(cursor, min_q)
            end = min(max_q or int(qty_value), int(qty_value))
            take = max(0, end - start + 1)

            if take > 0:
                if additional_prop:
                    if formula:
                        subtotal = evaluate_formula(formula, rate,vessel,dto,take)
                        formula_inputs=f"{subtotal} * {additional_value}"
                     
                    else:
                        subtotal = take * rate
                        formula_inputs=f"{take} * {rate} *{additional_value}"
                    additional_value = float(additional_value)
                    subtotal=round(subtotal * additional_value, 2)
                    
                else:
                    if formula:
                        subtotal = evaluate_formula(formula, rate,vessel,dto,take)
                        formula_inputs=subtotal
                    else:
                        subtotal = take * rate
                        formula_inputs=f"{take} * {rate}"
                logger.info(f"Adding bracket {idx}: take={take}, rate={rate}, subtotal={subtotal}")
                breakdown.append({
                    "name": bracket_name or f"Bracket {idx}",
                    "unique_key": f"{service_name}|Bracket{idx}",
                    "basic_value": vessel_attr,
                    "calculated_basic_value": take,
                    "movement": "1",
                    "tariff_percent": f"{rate:.2f}",
                    "formula_result": "Basic Value * Movement * Tariff %",
                    "optional": "Y" if sub["optional"]== "Y" else "N",
                    "operational_flag": "+",
                    "sub_total": subtotal,
                    "formula_inputs": formula_inputs,
                    "hide": "Y",
                    "is_bracket_item": "true"
                })

            cursor = end + 1

        logger.info(f"Bracket breakdown completed with {len(breakdown)} items")
        return breakdown

    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Database error in bracket calculation: {e}")
        return []
    except Exception as e:
        logger.error(f"Unexpected error in bracket calculation: {e}")
        return []

def evaluate_condition(basic_value: str, vessel: dict,sub, dto=None,db:Session=None,current_service=None) -> dict:
    """
    Evaluates condition expressions like:
    condition(nrt<8000,0)
    condition(8000<=nrt<=49999,nrt)*6
    condition(type=container ship,0.7540) - string equality check
    condition(vsl type=Oil Tanker,0.7540) - vessel type check
    condition(cargo=container,grt*0.7540) - cargo type check with expression
    """

    # basic_value=basic_value.replace(" ", "")
    # Step 1: Extract condition and return expression
    match = re.search(r'(?i)\bcondition\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)', basic_value, re.IGNORECASE)
    match2 = re.search(r'(?i)\bconditions\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)', basic_value, re.IGNORECASE)

    if not match and not match2:
        return {"value": 0, "formula": False}
    match=match if match else match2

    condition_str = match.group(1).strip().lower()
    return_expr = match.group(2).strip().lower()

    var_names = extract_vsl_property(condition_str)
    context = build_variables(vessel, var_names,dto)
    # Check if this is a string equality condition (e.g., type=container ship)
    if '=' in condition_str and not any(op in condition_str for op in ['<=', '>=', '==', '!=']):
        # String equality check
        key, expected_value = condition_str.split('=', 1)
        key = key.strip()
        expected_value = expected_value.strip()
        
        actual_value = get_vessel_or_cargo_attr(vessel, dto, key,db)
        if actual_value:
            actual_value = str(actual_value).strip().lower()
            if actual_value == expected_value:
                # Condition matches - evaluate return expression
                try:
                    # Try to evaluate as expression (e.g., grt*0.7540)
                    return_var_names = extract_vsl_property(return_expr)
                    return_context = build_variables(vessel, return_var_names,dto)
                    result_value = eval(return_expr.replace(" ",""), {"__builtins__": None}, return_context)
                except:
                    # Fallback to float if not an expression
                    try:
                        result_value = float(return_expr)
                    except:
                        result_value = 0
                
                formula = f"condition({condition_str},{return_expr})={result_value}"
                sub.update({"hide": 'N'})
                return {"value": result_value, "formula": formula}
        
        # Check if default exists before hiding
        if expected_value != 'default' and current_service:
            all_conditions = parse_service_conditions(current_service)
            has_default = any(c['value'] == 'default' and c['key'] == key for c in all_conditions)
            if has_default:
                sub.update({"hide": 'Y'})
                return {"value": 0, "formula": f"condition({condition_str},{return_expr})=False"}
        
        # Handle default case
        if expected_value == 'default':
            if current_service:
                all_conditions = parse_service_conditions(current_service)
                actual_val = get_vessel_or_cargo_attr(vessel, dto, key, db)
                if actual_val:
                    actual_val = str(actual_val).strip().lower()
                    # Check if any specific condition matches
                    has_match = any(c['value'] == actual_val and c['key'] == key and c['value'] != 'default' for c in all_conditions)
                    if has_match:
                        sub.update({"hide": 'Y'})
                        return {"value": 0, "formula": f"condition({condition_str},{return_expr})=skipped(specific_match_exists)"}
            
            # No specific match, use default
            try:
                return_var_names = extract_vsl_property(return_expr)
                return_context = build_variables(vessel, return_var_names,dto)
                result_value = eval(return_expr.replace(" ",""), {"__builtins__": None}, return_context)
            except:
                try:
                    result_value = float(return_expr)
                except:
                    result_value = 0
            
            formula = f"condition({condition_str},{return_expr})={result_value}"
            sub.update({"hide": 'N'})
            return {"value": result_value, "formula": formula}
        
        # No match and no default
        sub.update({"hide": 'Y'})
        return {"value": 0, "formula": f"condition({condition_str},{return_expr})=False"}

    

    # Step 3: Evaluate condition
    try:
        condition_result = eval(condition_str.replace(" ",""), {"__builtins__": {}}, context)
        if condition_result:
            # Step 4: Evaluate return expression
            result_value = eval(return_expr.replace(" ",""), {"__builtins__": {}}, context)

            # Step 5: Check multiplier (e.g. *6)
            after_cal = basic_value.split(')')[1].strip()
            if after_cal:
                result_value=eval(f"{result_value}{after_cal}")

            formula = f"condition({condition_str},{return_expr})={result_value}"
            res={"value": result_value, "formula": formula}
            if sub:
                if res['formula']:
                    sub.update({"hide": 'N'})
                else:
                    sub.update({"hide": 'Y'})
            return res

        else:
            sub.update({"hide": 'Y'})
            formula = f"condition({condition_str},{return_expr})=False"
            return {"value": 0, "formula": condition_result}

    except Exception as e:
        sub.update({"hide": 'Y'})
        return {"value": 0, "formula": condition_result}

def parse_service_conditions(current_service):
    """Parse all type/cargo conditions from current service subservices"""
    conditions = []
    for sub in current_service.get('subService', []):
        for field in ['basic_value', 'tariff_percent']:
            value = sub.get(field, '')
            # Check inline conditions (e.g., GRT*0.7540|type=container ship)
            if '|' in value and '=' in value:
                parts = value.split('|', 1)
                if len(parts) > 1 and '=' in parts[1]:
                    cond = parts[1].strip()
                    if '=' in cond:
                        key, val = cond.split('=', 1)
                        key = key.strip().lower()
                        val = val.strip().lower()
                        if key in ['type', 'vsl type', 'vessel type', 'cargo', 'cargo type']:
                            conditions.append({'key': key, 'value': val, 'field': field})
            # Check condition() functions (e.g., condition(type=oil tanker,0.7540))
            if 'condition' in value.lower():
                match = re.search(r'condition\s*\(\s*([^,]+)\s*,', value, re.IGNORECASE)
                if match:
                    cond_expr = match.group(1).strip().lower()
                    if '=' in cond_expr and not any(op in cond_expr for op in ['<=', '>=', '==', '!=']):
                        key, val = cond_expr.split('=', 1)
                        key = key.strip()
                        val = val.strip()
                        if key in ['type', 'vsl type', 'vessel type', 'cargo', 'cargo type']:
                            conditions.append({'key': key, 'value': val, 'field': field})
    return conditions

def with_vessel_attr_calculation(basic_value: str, vessel: dict, sub: Any = None, dto: Any = None, services:Any=None,should_round=False,db:Session=None,current_service=None) -> dict:
    """
    NA:GRT*0.019:NA:NA
    Round:MOVEMENT|MAX(MARINE CHARGES->TEST(MOVEMENT)-40 , 0)/6:NA:NA
    NA:GRT*0.7540|type=container ship op de:NA:NA - expression with condition
    """
    try:
        country_obj=get_country_obj_by_id(db,dto.country_id)
        if basic_value.count('|')>1:
            value =evaluate_rule(basic_value, vessel,dto)
            return {"value": value,"formula": f"rule= {basic_value} and value is {value}"}
        if 'condition' in basic_value.lower() or 'cond' in basic_value.lower():
            if country_obj.name.strip()==CountryName.TURKEY:
                from app.tariff_rule_calculation.turkey import evaluate_condition_turkey
                res=evaluate_condition_turkey(basic_value, vessel, sub,current_service)
            else:
                res=evaluate_condition(basic_value, vessel,sub,dto,db,current_service)
            return res
        
        # Check for expression with condition (e.g., GRT*0.7540|type=container ship)
        if '|' in basic_value and '=' in basic_value:
            parts = basic_value.split('|', 1)
            expr = parts[0].strip()
            condition = parts[1].strip()
            
            # Parse condition: key=value
            if '=' in condition:
                key, expected_value = condition.split('=', 1)
                key = key.strip()
                expected_value = expected_value.strip().lower()
                
                # Check vessel or cargo attribute
                actual_value = get_vessel_or_cargo_attr(vessel, dto, key,db)
                if actual_value:
                    actual_value = str(actual_value).strip().lower()
                    if actual_value == expected_value:
                        # Condition matches, evaluate expression
                        var_names = extract_vsl_property(expr)
                        variables = build_variables(vessel, var_names,dto)
                        value = eval(expr.replace(" ",""), {"__builtins__": None}, variables)
                        sub.update({"hide": 'N'})
                        return {"value": value, "formula": f"{expr}|{condition}={value}"}
                
                # Check if default exists before hiding
                if expected_value != 'default' and current_service:
                    all_conditions = parse_service_conditions(current_service)
                    has_default = any(c['value'] == 'default' and c['key'] == key for c in all_conditions)
                    if has_default:
                        sub.update({"hide": 'Y'})
                        return {"value": 0, "formula": f"{expr}|{condition}=False"}
                
                # Handle default case
                if expected_value == 'default':
                    if current_service:
                        all_conditions = parse_service_conditions(current_service)
                        actual_val = get_vessel_or_cargo_attr(vessel, dto, key, db)
                        if actual_val:
                            actual_val = str(actual_val).strip().lower()
                            # Check if any specific condition matches
                            has_match = any(c['value'] == actual_val and c['key'] == key and c['value'] != 'default' for c in all_conditions)
                            if has_match:
                                sub.update({"hide": 'Y'})
                                return {"value": 0, "formula": f"{expr}|{condition}=skipped(specific_match_exists)"}
                    
                    # No specific match, use default
                    var_names = extract_vsl_property(expr)
                    variables = build_variables(vessel, var_names,dto)
                    value = eval(expr.replace(" ",""), {"__builtins__": None}, variables)
                    sub.update({"hide": 'N'})
                    return {"value": value, "formula": f"{expr}|{condition}={value}"}
                
                # No match and no default
                sub.update({"hide": 'Y'})
                return {"value": 0, "formula": f"{expr}|{condition}=False"}
        
        parts = [p.strip() for p in basic_value.split('|')]
        expr = parts[0]
        modifier_expr = parts[1] if len(parts) > 1 else None
        
        # Check if expression starts with Round:
        # if should_round:
        #     expr =basic_value  # Remove 'Round:' prefix
        #     print("8ijm0pl,",expr)
        
        movement_value = None
        if modifier_expr and 'movement' in modifier_expr.lower():
            ref_pattern = re.compile(r"([A-Z\s]+)->([A-Z\s]+)\(\s*MOVEMENT\s*\)", re.IGNORECASE)
            ref_match = ref_pattern.search(modifier_expr)
            
            movement_field = None
            if ref_match:
                service_name = ref_match.group(1).strip()
                sub_name = ref_match.group(2).strip()
                logger.info(f"Reference with movement: {service_name} -> {sub_name}")
                
                if services:
                    ref_service = next((s for s in services if s.get("service", "").lower() == service_name.lower()), None)
                    if ref_service:
                        ref_sub = next((ss for ss in ref_service.get("subService", []) 
                                    if isinstance(ss, dict) and ss.get("name", "").lower() == sub_name.lower()), None)
                        if ref_sub:
                            movement_field = ref_sub.get('movement')
            else:
                movement_field = sub.get('movement') if sub else None
            
            if movement_field:
                movement_parts = movement_field.split(':')
                value_part = movement_parts[1] if len(movement_parts) > 1 else movement_field
                
                # Extract arithmetic operation if present
                match = re.match(r"(.+?)\s*([\+\-\*\/]\s*[\d.]+)$", value_part.strip())
                operation = '*1'
                if match:
                    value_part = match.group(1).strip()
                    operation = match.group(2).replace(" ", "")
                
                if value_part.upper() in ["DAY", "DAYS"]:
                    movement_value = float(dto.vessel_stay) / 1440 if dto else 1
                    movement_value = eval(f"{movement_value}{operation}")
                elif value_part.upper() in ["HOUR", "HOURS"]:
                    movement_value = float(dto.vessel_stay) / 60 if dto else 1
                    movement_value = eval(f"{movement_value}{operation}")
                elif "/" in value_part.upper():
                    match2 = re.match(r"(\d+)\s*HOURS?\s*/\s*DAY", value_part.upper())
                    hours_per_day = int(match2.group(1)) if match2 else 0
                    movement_value = (float(dto.vessel_stay) / 1440) * hours_per_day if dto else 1
                    movement_value = eval(f"{movement_value}{operation}")
                else:
                    try:
                        movement_value = float(value_part)
                    except:
                        movement_value = 1
                
                logger.info(f"Converted movement to numeric: {movement_value}")
                
                # Replace the reference pattern in modifier_expr with the numeric value
                if ref_match:
                    modifier_expr = modifier_expr.replace(ref_match.group(0), str(movement_value))
                    logger.info(f"Modified expression: {modifier_expr}")

        # Base variables
        var_names = extract_vsl_property(expr, modifier_expr)

        variables = build_variables(vessel, var_names,dto)
        logger.info(f"Variables available: {variables}")
        # Add movement to variables if it was calculated
        if movement_value is not None:
            variables["movement"] = movement_value
        # Detect vessel attributes used in LEFT expression
        variables.update({'max':max,'min':min})
        used_vars = {
            v for v in variables.keys() if v not in ['max', 'min', 'movement']
            if re.search(rf"\b{v}\b", expr, re.IGNORECASE)
        }
        if modifier_expr:
            modifier_value = eval(
                modifier_expr.replace(" ",""),
                {"__builtins__": None},
                variables
            )
            # Case 1: expression itself is movement
            if expr.strip().lower() == "movement":
                variables["movement"] = modifier_value
            # Case 2: vessel attribute expressions
            elif used_vars:
                for v in used_vars:
                    variables[v] = modifier_value
        value = eval(
            expr.replace(" ",""),
            {"__builtins__": None},
            variables
        )
        # Apply rounding if needed
        if should_round:
            value = round(value)
            logger.info(f"Rounded value: {value}")
        return {
            "value": value,
            "formula": expr
        }
    except Exception as e:
        logger.error(f"Error in with_vessel_attr_calculation: {e}")
        return {"value": 0.0, "formula": basic_value}




def direct_vessel_property(basic_value: str, vessel: Any,dto) -> Dict[str, Any]:
    """
    Fetches a direct vessel property such as GRT, NRT, or LOA.
    """
    try:
        if basic_value.lower()=='volume':
            val=volume_calculate(vessel)
        elif basic_value.lower()=='roe':
            val=getattr(dto, 'roe', 1) or 1
        else:
            val = float(get_vessel_attr(vessel, basic_value) or 0)
        logger.info(f"Direct vessel property '{basic_value}' = {val}")
        return {"value": val, "formula": basic_value}
    except Exception as e:
        logger.error(f"Error retrieving vessel property '{basic_value}': {e}")
        return {"value": 0.0, "formula": basic_value}


def direct_number_calculation(basic_value: Union[str, int, float]) -> Dict[str, Any]:
    """
    Returns a numeric constant as a structured result.
    """
    try:
        if isinstance(basic_value, (int, float)):
            val = basic_value
        elif isinstance(basic_value, str) and basic_value.replace('.', '', 1).isdigit():
            val = basic_value
        else:
            raise ValueError(f"Invalid numeric input: {basic_value}")

        logger.info(f"Direct number calculation: {basic_value} -> {val}")
        return {"value": val, "formula": str(basic_value)}

    except Exception as e:
        logger.error(f"Error in direct number calculation: {e}")
        return {"value": 0.0, "formula": str(basic_value)}


def total_calculation(service:Dict[str,Any]):
    """
    Calculate total for a service by summing sub_total values where optional is 'N'.
    Supports operations like 'total*ROE', 'total+ROE', 'total-ROE'.
    """
    service_name = service.get("service", "Unnamed Service")
    total = 0
    calculated_subs = []

    # Sum all non-optional subservices
    for sub in service.get("subService", []):
        if isinstance(sub, dict) and sub.get("optional") == "N":
            sub_total = sub.get("sub_total", 0)
            total += sub_total
            if sub_total > 0:
                calculated_subs.append(f"{sub.get('name')}: {sub_total}")

    total = round(total, 2)
    if calculated_subs:
        logger.info(f"     Service '{service_name}' total: {total} from {len(calculated_subs)} sub-services")
        for sub_info in calculated_subs:
            logger.info(f"      - {sub_info}")
    else:
        logger.info(f"      Service '{service_name}' total: {total} (no calculated sub-services)")
   
    return {"value": total, "formula": "GrandTotal"}


def volume_calculate(vessel):
    vol=["LOA","BEAM","DEPTH"]
    vol_value=1
    for i in vol:
        vol_value*=get_vessel_attr(vessel,i)

    return vol_value


def reference_calculation(services, vessel, service_name, sub_name, db,dto,current_sub=None):
    
    try:
        # Locate the parent service
        ref_service = next(
            (s for s in services if s.get("service", "").lower() == service_name.lower()),
            None
        )

        if ref_service:
            # Locate the sub-service
            ref_sub = next(
                (ss for ss in ref_service.get("subService", [])
                 if isinstance(ss, dict) and ss.get("name", "").lower() == sub_name.lower()),
                None
            )
         
            if ref_sub and ref_sub.get("sub_total", 0) > 0 and ((ref_sub.get("optional", '')=='N')or (ref_sub.get("optional", '')=='Y' and ref_sub.get("hide", '')=='Y')):
                # Reference found with a calculated value
                return {
                    "value": ref_sub.get("sub_total", 0),
                    "formula": f"{service_name}->{sub_name}"
                }

            elif ref_sub and ((ref_sub.get("optional", '')=='N')or (ref_sub.get("optional", '')=='Y' and ref_sub.get("hide", '')=='Y')):
                # Reference found but not yet calculated — trigger calculation
                calculated = calculate_subservice(ref_sub, vessel, db, services, current_service=ref_service,dto=dto)
                if calculated and isinstance(calculated, list) and len(calculated) > 0:
                    return {
                        "value": calculated[0].get("sub_total", 0),
                        "formula": f"{service_name}->{sub_name}"
                    }
            else:
                # Reference not found or not applicable
                return {"value": 0.0, "formula": f"{service_name}->{sub_name}"}

    except Exception as e:
        logger.info(f" Exception in reference lookup (tariff): {e}")

    return {"value": 0.0, "formula": f"{service_name}->{sub_name}"}


def calculate_service_total_roe(service: dict, vessel, db, disbursement_type:str = None, disbursement_seq: int = None, dto: Any = None):
    """Calculate total for a service by summing sub_total values where optional is N"""
    service_name = service.get("service", "Unnamed Service")
    total = 0
    calculated_subs = []
    
    for sub in service.get("subService", []):
        if isinstance(sub, dict) and sub.get("optional") == "N":
            # # ── NEW: Skip bracket parent without |System ──────────────
            # basic_value = sub.get("basic_value", "")
            # unique_key = sub.get("unique_key", "")
            
            # # Check if it's a bracket and doesn't have |System suffix
            # if (isinstance(basic_value, str) and 
            #     basic_value.lower().startswith("bracket") and 
            #     "|system" not in unique_key.lower()):
            #     logger.info(f"Skipping bracket parent '{sub.get('name')}' (no |System) from total calculation")
            #     continue
            # # ── END NEW ───────────────────────────────────────────────
            sub_total = sub.get("sub_total", 0)
            total += sub_total
            if sub_total > 0:
                calculated_subs.append(f"{sub.get('name')}: {sub_total}")

    total = round(total, 2)
    total_type = service.get('total', 0)

    if isinstance(total_type, str):
        total_type = total_type.strip().lower()
        res=extract_vsl_property(total_type)
        variable=build_variables(vessel, res,dto)
    else:
        total_type = total_type    
        variable={}

    # Check if total_type contains a ROE formula string
    if isinstance(total_type, str) and len(total_type) > 6 and "roe" == total_type.lower().strip():
        matches = re.findall(r'[\+\-\*/]?roe\d*', total_type)
        roe_part = [m.lstrip("+-*/") for m in matches]

        vsl_props = get_vessel_attr(vessel, 'additional_properties') or {}
        vsl_val = vsl_props.get(roe_part[0]) if vsl_props.get(roe_part[0]) else getattr(dto, 'roe', 1) or 1

        logger.info(f"in the final roe calculation {vsl_val} {total_type.replace(roe_part[0], str(vsl_val))} {roe_part}")
        # Only apply formula if it contains 'total' and 'roe'
        total_cal = total_type.replace("total", str(total)).replace(roe_part[0], str(vsl_val))
        total_cal = total_cal.replace("%", "/100")
        total = eval(total_cal)
        total = round(total, 2)
    elif isinstance(total_type, str) and len(total_type) > 6:
        try:
            total_type = total_type.lower().replace(" ","")

            variable.update({'total':total})
            for key in variable:
                if key != "total" and variable[key] == 0:
                    variable[key] = 1
            total = eval(
                total_type,
                {"__builtins__": {}},   # block built-ins
                variable
            )
            total = round(total, 2)
        except Exception as e:
            logger.error(f"Error evaluating total formula: {e}")
            total = total


    # Assign final total back to service
    service["total"] = total

    # Print subservice breakdown
    if calculated_subs:
        logger.info(f"    Service '{service_name}' total: {total} from {len(calculated_subs)} sub-services")
        for sub_info in calculated_subs:
            logger.info(f"      - {sub_info}")
    else:
        logger.info(f"    Service '{service_name}' total: {total} (no calculated sub-services)")
    
    # Process info_msg placeholders
    info_msg = service.get("info_msg", "")
    if info_msg and '{$' in info_msg:
        attach_info_field(db, service, vessel, disbursement_seq, disbursement_type="pda")
    
    return service

def get_movement_value(sub: dict, vessel, db: Session,current_service, disbursement_seq: int, disbursement_type: str, dto, services: list = None):
    try:
        
        movement = sub.get("movement", "1").lower()
        base_movement = sub.get("movement", "1").lower()  # e.g., "NA:Days:NA:NA"
        service = current_service['service'].lower()
        logger.info(f"inside the movement section {dto.vessel_stay}")
        # Extract second element (days/hours/etc.)
        value = movement.split(':')[1] if ':' in movement else movement
        movement = movement.split(':')[0] if ':' in movement else movement
        country_obj = get_country_obj_by_id(db,dto.country_id)
        # Special case
        if service == 'tonnage dues' and country_obj.name==CountryName.CHINA:
            return 1.0

        numeric_value = value
        logger.info(f"the numeric value is {numeric_value} {value} {movement.lower()}")
        
        # Check for sector condition and extract base value before processing
        if '|' in numeric_value and '=' in numeric_value:
            value = value.split('|')[0].strip()
        
        match = re.match(r"(.+?)\s*([\+\-\*\/]\s*[\d.]+)$", value.strip())
        number_part='*1'
        if match:
            value = match.group(1).strip()
            number_part = match.group(2).replace(" ", "")
        if numeric_value is not None:
            if re.match(r"^[0-9\.\*\+\-\/\(\) ]+$", value):
                try:
                    # Direct formula
                        value=f"{value}{number_part}"
                        numeric_value = eval(value)
                except Exception as e:
                    raise Exception("unable to evaluate")

            # Day/hour conversions
            elif value.upper() in ["DAY", "DAYS"]:
                numeric_value = float(dto.vessel_stay) / 1440
                numeric_value=eval(f"{numeric_value}{number_part}")
                logger.info(f"the days is {numeric_value}")
            elif value.upper() in ["HOUR", "HOURS"]:
                numeric_value = float(dto.vessel_stay) / 60
                numeric_value=eval(f"{numeric_value}{number_part}")
            elif "/" in value.upper():
                match = re.match(r"(\d+)\s*HOURS?\s*/\s*DAY", value.upper())
                
                hours_per_day = int(match.group(1)) if match else 0
                numeric_value = (float(dto.vessel_stay) / 1440) * hours_per_day
                numeric_value=eval(f"{numeric_value}{number_part}")
            else:
                # e.g., "2 DAYS" or "4 HOURS" or "3 days *2"
                match2 = re.match(r"(\d+(?:\.\d+)?)\s*(DAYS?|HOURS?|HRS?)", numeric_value, re.IGNORECASE)
                if match2:
                    base_value = float(match2.group(1))
                    # Check if there's a multiplication or other operation after the unit
                    remaining = numeric_value[match2.end():].strip()
                    if remaining:
                        try:
                            # Evaluate the operation (e.g., "*2", "+5", etc.)
                            numeric_value = eval(f"{base_value}{remaining}")
                        except:
                            numeric_value = base_value
                    else:
                        numeric_value = base_value
                else:
                    if 'condition' in base_movement:
                        if 'round' in base_movement:
                            should_round=True
                        else:
                            should_round=False
                        res=with_vessel_attr_calculation(base_movement.split(':')[1], vessel, sub, dto, services,should_round,db,current_service)
                        return res['value']
                    # Try vessel attribute
                    val = get_vessel_attr(vessel, value)
                    numeric_value = safe_float(val, 1.0) if val not in (None, 0) else None
                    if numeric_value is not None and number_part != '*1':
                        try:
                            numeric_value = eval(f"{numeric_value}{number_part}")
                            logger.info(f"Applied operation: {val}{number_part} = {numeric_value}")
                        except Exception as e:
                            logger.error(f"Error applying operation {number_part}: {e}")
            

        logger.info(f"Converted movement to numeric value: {numeric_value}")

        if "RANGE" in movement.upper() or "DATASET" in movement.upper():
            parts = [p.strip() for p in base_movement.lower().split(":")[1:]]
            if len(parts) >= 3:
                vsl_attr, service_name, resultant_col = parts[:3]
                resultant_col = resultant_col.replace(" ", "_")
                logger.info(f"the range is here in movement {numeric_value} {vsl_attr} {service_name} {resultant_col}")
                
                # Check for sector condition in movement
                if '|' in vsl_attr and '=' in vsl_attr:
                    vsl_attr = "|".join([str(numeric_value)] + vsl_attr.split("|")[1:])
                    vsl_attr, should_process = vsl_attr_and_additional_prop_separator(vsl_attr, vessel, sub)
                    if not should_process:
                        return 0
                    if "RANGE" in movement.upper():
                        result=range_calculation(db, numeric_value, service_name, vessel, resultant_col, dto.country_id,dto.port_id,sub)
                    else:
                        result=discrete_value_calculation(db, numeric_value, service_name, vessel, resultant_col, dto.country_id,dto.port_id,sub)
                    return result['value']
                
                try:
                    vsl_attr=float(vsl_attr)
                    return vsl_attr
                except Exception as e:
                    vsl_attr=vsl_attr
                if "RANGE" in movement.upper():
                    result=range_calculation(db, numeric_value, service_name, vessel, resultant_col, dto.country_id,dto.port_id,sub)
                else:
                    result=discrete_value_calculation(db, numeric_value, service_name, vessel, resultant_col, dto.country_id,dto.port_id,sub)
                return result['value']
            
        elif movement.upper().startswith("BRACKET"):
            if value.upper()=='DAYS' or value.upper()=='DAY':
                numeric_value*=24
            cargo_qty = numeric_value
            service_name = "anchorage dues"
            new_msg='|System'
            existing_uni_key = sub.get("unique_key") or ""
            if new_msg not in existing_uni_key:
                    key= (existing_uni_key + new_msg).strip()
                    sub.update({"unique_key":key})
            return movement_bracket_calculation(db, cargo_qty, service_name, vessel, dto.country_id,dto.port_id)
        
        elif isinstance(base_movement.upper(), str) and ("->" in movement.upper() or movement.upper().strip().startswith("SubService Reference")):
            logger.info(f"in the reference -> and the calcution is for {movement.upper()}")
            if movement.upper().startswith("SUBSERVICE REFERENCE"):
                parts = [b.strip() for b in movement.upper().split(":")]
                service_name=current_service['service']
                sub_service=parts[1]
            else:
                
                parts = [b.strip() for b in movement.upper().split(":")]

                arrow_part = next((p for p in parts if "->" in p), None)
                    
                if arrow_part:
                    service_parts = [p.strip() for p in arrow_part.split("->")]
                    service_name = service_parts[0]
                    sub_service = service_parts[1]
                    logger.info(f"the data is and the basic value {service_name} {sub_service}")
                else:
                    logger.info("No '->' found in parts.")
            result=reference_calculation(services, vessel,service_name, sub_service, db,dto)        
            return result['value']
        elif isinstance(movement.upper(), str) and (movement.upper().startswith("SUM") or movement.upper().startswith("SUBTRACT") or movement.upper().startswith("MULTIPLY")):
            result=evaluate_sum_basic_value(base_movement, services,vessel,db,dto)
            return result['value']
        if base_movement.startswith("slab"):
            return calculate_slab_movement(base_movement,sub,dto,vessel)

        if base_movement.replace(" ","").lower().startswith("roundoff"):
            parts = [p.strip() for p in base_movement.split(":")]
            parts[0] = 'na'
            base = ":".join(parts)
            
            # Temporarily update sub movement to evaluate
            original_movement = sub.get('movement')
            sub['movement'] = base
            
            res_value = get_movement_value(sub, vessel, db, current_service, disbursement_seq, disbursement_type, dto, services)
            
            # Restore original movement
            sub['movement'] = original_movement
            
            if isinstance(res_value, (int, float)):
                rounded_value = float(Decimal(str(res_value)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))
                return rounded_value
            
            return 1.0
        
        return numeric_value if numeric_value is not None and numeric_value>=0 else 0

    except Exception as e:
        logger.info(f"[get_movement_value] Error: {e}")
        db.rollback()
        return 1.0


def tonnage_due_rate_by_etd(db: Session,etd: datetime,month: int,val: float,sub,vessel,country_id):
    """
    Determines the tonnage due rate based on the difference between ETD and another vessel date.
    - If difference < 30 days: return 0 (no change)
    - If difference 31-60 days: fetch 'discount' rate
    - If difference > 61 days: fetch 'normal' rate and if the date is not present in the additional property then alo it is 'normal' rate
    """

    try:
        logger.info(f"the month before calculation is {month}")
        tariff_type = "Normal"
        date=date_for_tonnage_calc(vessel)
        if date is None or date<etd:
            tariff_type = "Normal"
            month = 1
            logger.info("No date found. Using default tariff_type and month.")
        logger.info(f"the date is here {date} {etd}")
        val=get_vessel_attr(vessel,val) # vessel property

        movement=(sub["movement"]).lower().split(':')[1]
        # Case 1: discounted with X days
        if "discount" in movement:
            tariff_type = "Discount"
            # Extract the number
            match = re.search(r'(\d+)', movement)
            if match:
                days = int(match.group(1))  # extract number
                logger.info(f"extracted days: {days}")

                if days == 30:
                    month = 1
                elif days == 90:
                    month = 3
                elif days == 365:
                    month = 12
                else:
                    month = month

        # Case 2: pure numeric movement ("30", "90", "365")
        else:
            days = int(movement)
            if days == 30:
                month = 1
            elif days == 90:
                month = 3
            elif days == 365:
                month = 12
            else:
                month = month

        logger.info(f"the final tariff_type and month is {tariff_type} {month}")
        


        query = f"""
            SELECT rate
            FROM {SCHEMA_NAME}.txn_tonnage_dues
            WHERE min_range <= :val
            AND (max_range >= :val OR max_range IS NULL)
            AND month = :month
            AND tariff_type = :tariff_type
            AND country = :country_id
            LIMIT 1
        """

        logger.info(f"Executing query with val={val}, tariff_type={tariff_type}")
        result = db.execute(text(query), {"val": val, "tariff_type": tariff_type,"country_id":country_id,"month":month}).fetchone()
        logger.info(f"Query result: {result},{val},{country_id}")

        if result and result[0] is not None:
            rate = float(result[0])
            logger.info(f"Found rate: {rate}")
        else:
            rate = 0.0
            logger.info("No matching rate found for given value and tariff type")
        days=days = 30 if month == 1 else 90 if month == 3 else 365 if month == 12 else 30
        return {
            "value": rate,
            "formula": f" Tonnage Due Currently applied basic rate is NRT with {days} days {tariff_type} @rate -> {rate}"
        }

    except SQLAlchemyError as e:
        logger.error(f"Database error in tonnage_due_rate_by_etd: {e}")
        return {"value": 0.0, "formula": "DB Error"}
    except Exception as e:
        logger.error(f"Unexpected error in tonnage_due_rate_by_etd: {e}")
        return {"value": 0.0, "formula": "Error"}


def date_for_tonnage_calc(vessel):
    additional_props = get_vessel_attr(vessel, 'additional_properties') or {} #additional_properties
    date=None
    if additional_props:
        logger.info("enters the tonnage for calculation")
        for value in additional_props.values():
            # convert value to string before regex
            val_str = str(value)
            if re.match(r'^\d{4}-\d{2}-\d{2}$', val_str):
                # convert to datetime
                date = datetime.fromisoformat(val_str)
                break  # stop at first valid date
        logger.info(f"the date is {date}")
    return date


def evaluate_basic_value(basic_value: str, sub, vessel, db: Session, services: list = None, current_service: dict = None,dto:Any=None,disbursement_seq=None,disbursement_type=None):
    logger.info(f"basic_value is {basic_value}")
    act_basic_value=basic_value
    basic_value=basic_value.lower()

    try:
        if isinstance(basic_value, str) and basic_value.startswith('date:'):
            return evaluate_date_condition(sub,basic_value, vessel, dto)

        country_obj = get_country_obj_by_id(db,dto.country_id)

        
        if (isinstance(basic_value, str)and '->' not in basic_value and (basic_value.startswith('fixed') or basic_value.startswith('na') or basic_value[:1].isspace())) or 'movement' in basic_value:           
            parts = [b.strip() for b in basic_value.split(":")]
            logger.info(f"the basic value is :: {basic_value} {parts[1]}")   
            if len(parts) > 1:
                value_part = parts[1]

                # Handle All_Services case
                if value_part.lower() in ['services total','service total','all service', 'all services', 'sum of services']:
                    return services_total_calculation(services,current_service,vessel, sub, dto, db)

                # If numeric (e.g., Fixed:1000:Pilotage:NA)
                if str(value_part).replace('.', '', 1).isdigit():
                    logger.info(f"in the number calculation -> {value_part}")
                    return direct_number_calculation(float(value_part))

                # If vessel property (e.g., Fixed:NRT:Pilotage:NA)
                elif value_part.replace(" ","").isalpha():
                    logger.info(f"the vessel attr is -> {value_part}")
                    return direct_vessel_property(value_part, vessel,dto)
            if 'round' in basic_value:
                should_round=True
            else:
                should_round=False
            return with_vessel_attr_calculation(value_part, vessel, sub, dto, services,should_round,db,current_service)


        # Case 2: Reference to another service/sub-service
        if isinstance(basic_value, str) and not basic_value.strip().startswith("sum") and ("->" in basic_value or basic_value.strip().startswith("subservice reference")):
            logger.info(f"in the reference -> and the calcution is for {basic_value}")
            parts = [b.strip() for b in basic_value.split(":")]
            if basic_value.startswith("subservice reference"):
                service_name = current_service['service']
                logger.info(f"the service name is subservice reference {service_name}")
                # service_name=parts[2]
                sub_service=parts[1]
            else:  
                if 'movement' not in basic_value:        #basic is NA:MOVEMENT|MAX(MARINE CHARGES->TEST(MOVEMENT)-40 , 0):NA:NA 
                    parts=parts[1]
                    parts=[b.strip() for b in parts.split("->")]
                    service_name=parts[0]
                    sub_service=parts[1]
                else:
                    parts = [b.strip() for b in basic_value.split(":")]                 
                    if len(parts) > 1:
                        value_part = parts[1]
                    return with_vessel_attr_calculation(value_part, vessel, sub, dto,services,False,db,current_service)  
            if country_obj.name.strip()==CountryName.EGYPT:
                return reference_calculation_egypt(services, vessel,service_name, sub_service, db,dto,sub)
               
            return reference_calculation(services, vessel,service_name, sub_service, db,dto,sub)

        # Case 3: Range calculation
        if isinstance(basic_value, str) and basic_value.startswith("range:"):
                logger.info("the range is here")

                # Safely split after removing 'Range:' prefix
                parts = [p.strip() for p in basic_value.split(":")[1:]]
                logger.info(f"the lenght {len(parts)}")
                vsl_attr, service_name, resultant_col = parts
                resultant_col=resultant_col.replace(" ","_")
                if country_obj.name==CountryName.CHINA:
                    return handle_china_base_range(parts,vsl_attr,service_name,vessel,resultant_col,dto,db)
                
                if country_obj.name==CountryName.INDIA:
                    return handle_india_base_range(vsl_attr,service_name,vessel,resultant_col,dto,db)
                if country_obj.name==CountryName.EGYPT:
                    return handle_formula_section(db, vsl_attr, service_name, vessel, resultant_col, dto,sub)
                if country_obj.name==CountryName.RUSSIA:
                    return handle_formula_section(db, vsl_attr, service_name, vessel, resultant_col, dto,sub)
                #this is the fall back
                return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id,sub)

        # Case 4: Bracket calculation
        if isinstance(basic_value, str) and basic_value.startswith("bracket"):
                parts=act_basic_value.split(':') #Sailing Condition
                if '|' not in basic_value:
                    cargo_qty = parts[1] 
                    service_name = parts[2]
                    return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id,dto.port_id,sub,dto)
                else:
                    cargo_and_suez = parts[1].split('|')

                    if len(cargo_and_suez) < 2 or '=' not in cargo_and_suez[1]:
                        return None
                    cargo_qty = cargo_and_suez[0].strip()
                    suez_key, suez_value = cargo_and_suez[1].split('=', 1)

                    suez_type = suez_value.lower().strip()
                    additional_prop_suez_type = get_vessel_attr(vessel, suez_key.strip())
                    additional_prop_suez_type=additional_prop_suez_type if additional_prop_suez_type else 'LADEN'
                    service_name = parts[2]
                    if suez_type.lower() == additional_prop_suez_type.lower():
                        return bracket_calculation_for_suez_canal(db,cargo_qty,service_name,vessel,suez_type,dto,services,disbursement_seq,disbursement_type,sub)
                    sub.update({"hide": 'Y'})
                    return None        
        if isinstance(basic_value, str) and (basic_value.startswith("sum") or basic_value.startswith("subtract") or basic_value.startswith("multiply")):
            # if country_obj.name==CountryName.TURKEY:
            #     from app.tariff_rule_calculation.turkey import evaluate_sum_basic_value_turkey
            #     return evaluate_sum_basic_value_turkey(basic_value, services, vessel, db, dto, sub)
            return evaluate_sum_basic_value(basic_value, services,vessel,db,dto)
        
        if isinstance(basic_value, str) and not basic_value.replace(" ","").lower().startswith("roundoff") and basic_value.startswith("round") :
            if '%' in basic_value:
                percentage=True
                return calculate_round_off(basic_value, vessel,sub=sub,percentage=percentage,dto=dto)
            else:
                return calculate_round_off(basic_value, vessel,sub=sub,dto=dto)
        if basic_value.startswith("slab"):
            return calculate_slab_movement(basic_value,sub,dto,vessel)
        if basic_value.startswith("dataset"):

            # Safely split after removing 'dataset:' prefix
            parts = [p.strip() for p in basic_value.split(":")[1:]]
            vsl_attr, service_name, resultant_col = parts
            resultant_col=resultant_col.replace(" ","_")
            return discrete_value_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id,sub)
        if basic_value.replace(" ","").lower().startswith("roundoff"):
            parts = [p.strip() for p in basic_value.split(":")]
            parts[0] = 'fixed'
            base = ":".join(parts)
            res_obj = evaluate_basic_value(base, sub, vessel, db, services, current_service, dto, disbursement_seq, disbursement_type)
            
            if isinstance(res_obj, dict):
                value = res_obj.get('value', 0)
                rounded_value = float(Decimal(str(value)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))
                return {'value': rounded_value, 'formula': f"roundup({value})={rounded_value}"}
            
            return {'value': 0, 'formula': 'roundup_error'}
    except Exception as e:
        # Roll back DB transaction on ANY error to prevent "InFailedSqlTransaction"
        db.rollback()
        raise e
        


def evaluate_tariff_percent(tariff_value: str, sub,vessel, db: Session, current_service,services: list = None,dto:Any=None):
    logger.info(f"tariff_value is {tariff_value} and country is {dto.country_id}")
    act_tariff_value=tariff_value
    tariff_value=tariff_value.lower()

    try:
        # Check if this is a date condition (new format: Date:condition(...))
        if isinstance(tariff_value, str) and tariff_value.startswith('date:'):
            return evaluate_date_condition(sub,act_tariff_value, vessel, dto)
        
        # Fetch correct country row
        country_obj = get_country_obj_by_id(db,dto.country_id)

        if (isinstance(tariff_value, str)and '->' not in tariff_value and (tariff_value.startswith('fixed') or tariff_value.startswith('na') or tariff_value[:1].isspace())) or ('movement' in tariff_value and not 'slab' in tariff_value):           
            parts = [b.strip() for b in tariff_value.split(":")]
            
            if len(parts) > 1:
                value_part = parts[1]
                # Handle All_Services case
                if value_part.lower()  in ['services total','service total','all service', 'all services', 'sum of services']:
                    return services_total_calculation(services,current_service,vessel, sub, dto, db)


                # If numeric (e.g., Fixed:1000:Pilotage:NA)
                if str(value_part).replace('.', '', 1).isdigit():
                    logger.info(f"in the number calculation -> {value_part}")
                    return direct_number_calculation(float(value_part))

                # If vessel property (e.g., Fixed:NRT:Pilotage:NA)
                elif value_part.replace(" ","").isalpha():
                    logger.info(f"the vessel attr is -> {value_part}")
                    return direct_vessel_property(value_part, vessel,dto)
            if 'round' in tariff_value:
                should_round=True
            else:
                should_round=False
            #If vessel property (e.g., Fixed:NRT*6*9.08:Pilotage:NA)
            return with_vessel_attr_calculation(value_part, vessel, sub, dto, services,should_round,db,current_service)

        # Case 2: Reference to another service/sub-service
        if isinstance(tariff_value, str) and (tariff_value.startswith("subservice reference") or "->" in tariff_value):
            if tariff_value.startswith("subservice reference"):
                parts = [b.strip() for b in tariff_value.split(":")]
                service_name = current_service['service']
                sub_service=parts[1]
            else:
                if 'movement' not in tariff_value:        #tariff_value is NA:MOVEMENT|MAX(MARINE CHARGES->TEST(MOVEMENT)-40 , 0):NA:NA 
                    parts=[b.strip() for b in tariff_value.split("->")]
                    service_name=parts[0]
                    sub_service=parts[1]
                else:
                    parts = [b.strip() for b in tariff_value.split(":")]                 
                    if len(parts) > 1:
                        value_part = parts[1]
                    return with_vessel_attr_calculation(value_part, vessel, sub, dto,services,'False',db)           
            return reference_calculation(services, vessel,service_name, sub_service, db,dto,sub)

        # Case 3: Range calculation
        if isinstance(tariff_value, str) and tariff_value.startswith("range:"):
            logger.info("the range is here")

            # Safely split after removing 'Range:' prefix
            parts = [p.strip() for p in tariff_value.split(":")[1:]]
            logger.info(f"the lenght {len(parts)}")
            vsl_attr, service_name, resultant_col = parts
            logger.info(f"the lenght {service_name}")
            resultant_col=resultant_col.replace(" ","_")
            
            # Check for sector condition in tariff
            if '|' in vsl_attr and '=' in vsl_attr:
                vsl_attr, should_process = vsl_attr_and_additional_prop_separator(vsl_attr, vessel, sub)
                if not should_process:
                    return {"value": 0, "formula": "sector_mismatch"}
            
            if country_obj.name==CountryName.CHINA:
                return handle_china_tariff_range(parts, service_name, vsl_attr, resultant_col, vessel, tariff_value, sub, dto, db)
                
            # if country_obj.name=='INDIA':
            #     return handle_india_tariff_range(db, vsl_attr, service_name, vessel, resultant_col, dto)
            # if country_obj.name=='TUNISIA':
            #     from app.tariff_rule_calculation.tunisia import handle_tunisia_tariff_range
            #     return handle_tunisia_tariff_range(db, vsl_attr, service_name, vessel, resultant_col, dto)
        
            # if country_obj.name=='EGYPT':
            #     from app.tariff_rule_calculation.suez_canal import handle_suez_tariff_range
            #     return handle_suez_tariff_range(db, vsl_attr, service_name, vessel, resultant_col, dto)
            # return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id)
            return handle_formula_section(db, vsl_attr, service_name, vessel, resultant_col, dto,sub)

        # Case 4: Bracket calculation
        if isinstance(tariff_value, str) and tariff_value.startswith("bracket"):
            parts=act_tariff_value.split(':') #Sailing Condition
            if '|' not in tariff_value:
                cargo_qty = parts[1] 
                service_name = parts[2]
                return bracket_calculation(db, cargo_qty, service_name, vessel,dto.country_id,dto.port_id,sub)
            else:
                cargo_and_suez = parts[1].split('|')
                if len(cargo_and_suez) < 2 or '=' not in cargo_and_suez[1]:
                    return None
                cargo_qty = cargo_and_suez[0].strip()
                suez_key, suez_value = cargo_and_suez[1].split('=', 1)

                suez_type = suez_value.lower().strip()
                additional_prop_suez_type = get_vessel_attr(vessel, suez_key.strip())
                additional_prop_suez_type=additional_prop_suez_type if additional_prop_suez_type else 'LADEN'
                service_name = parts[2]
                if suez_type.lower() == additional_prop_suez_type.lower():
                    return bracket_calculation_for_suez_canal(db,cargo_qty,service_name,vessel,suez_type,dto,services)
                sub.update({"hide": 'Y'})
                return None   
        
        # Case 5: sum calcualtion 
        if isinstance(tariff_value, str) and (tariff_value.startswith("sum") or tariff_value.startswith("subtract") or tariff_value.startswith("multiply")):
            # if country_obj.name==CountryName.TURKEY:
            #     from app.tariff_rule_calculation.turkey import evaluate_sum_basic_value_turkey
            #     return evaluate_sum_basic_value_turkey(tariff_value, services, vessel, db, dto)
            return evaluate_sum_basic_value(tariff_value, services,vessel,db,dto)
        
        # Case 6: round off calculation
        if isinstance(tariff_value, str) and not tariff_value.replace(" ","").lower().startswith("roundoff") and tariff_value.startswith("round"):
            if '%' in tariff_value:
                # tariff_value=tariff_value.replace(" ","")
                return calculate_round_off(tariff_value, vessel,percentage=True,sub=sub,dto=dto)
            else:
                return calculate_round_off(tariff_value, vessel,percentage=False,sub=sub,dto=dto)
        if tariff_value.startswith("slab"):
            return calculate_slab_movement(tariff_value,sub,dto,vessel)
        if tariff_value.startswith("dataset"):

            # Safely split after removing 'dataset:' prefix
            parts = [p.strip() for p in tariff_value.split(":")[1:]]
            vsl_attr, service_name, resultant_col = parts
            resultant_col=resultant_col.replace(" ","_")
            return discrete_value_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id,sub)

        if tariff_value.replace(" ","").lower().startswith("roundoff"):
            parts = [p.strip() for p in tariff_value.split(":")]
            parts[0] = 'fixed'
            base = ":".join(parts)
            res_obj = evaluate_tariff_percent(base, sub, vessel, db, current_service, services, dto)
            
            if isinstance(res_obj, dict):
                value = res_obj.get('value', 0)
                rounded_value = float(Decimal(str(value)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))
                return {'value': rounded_value, 'formula': f"roundoff({value})={rounded_value}"}
            
            return {'value': 0, 'formula': 'roundoff_error'}  
        
    except Exception as e:
        # Ensure clean DB state
        db.rollback()
        raise e
    

def calculate_subservice(sub: dict, vessel, db: Session, services: list = None, current_service: dict = None, disbursement_seq: int = None, disbursement_type: str = "PDA",dto:Any=None):

    base_sub=copy.deepcopy(sub)
    if hasattr(vessel, "model_dump"):   
        vessel = vessel.model_dump()
    elif hasattr(vessel, "dict"):      
        vessel = vessel.dict()
    # Initialize calculated_basic_value and formula_inputs
    sub["calculated_basic_value"] = 0
    sub["formula_inputs"] = ""
    
    # Evaluate basic value and tariff percent
    basic_val = evaluate_basic_value(sub["basic_value"],sub, vessel, db, services, current_service,dto,disbursement_seq,disbursement_type)
    tariff_eval = evaluate_tariff_percent(sub.get("tariff_percent", 1),sub, vessel, db,current_service, services,dto)
    tariff_val = tariff_eval.get("value", 1) if isinstance(tariff_eval, dict) else tariff_eval if isinstance(tariff_eval, list) else 1
    movement_val = get_movement_value(sub, vessel, db,current_service, disbursement_seq, disbursement_type,dto)
    logger.info(f"the movement value is tariff_eval,basic_val {movement_val} {tariff_eval} {basic_val}")
    
    # Case 1: breakdown list (brackets) - returns multiple items
    if isinstance(basic_val, list) or isinstance(tariff_val, list):
        sub_total=0
        results = []
        val=basic_val if isinstance(basic_val, list) else tariff_val
        for idx, br in enumerate(val):
            new_sub = sub.copy() if idx > 0 else sub
            new_msg='|System'
            existing_uni_key = sub.get("unique_key") or ""
            if new_msg not in existing_uni_key:
                    key= (existing_uni_key + new_msg).strip()
                    sub.update({"unique_key":key})
            new_sub.update({
                "name": br.get("name"),
                "calculated_basic_value": br.get("calculated_basic_value", 0),
                "tariff_percent": br.get("tariff_percent"),
                "sub_total": br.get("sub_total", 0),
                "formula_inputs": br.get("formula_inputs"),
                "hide": "Y" if br.get("hide") == "Y" or br.get("is_bracket_item") == "true" else br.get("hide", "Y"),
                "optional":"Y"    #this attached breakup are for debugging 

            })
            sub_total+=br.get("sub_total", 0)
            results.append(new_sub)
        
            base_sub.update({
                "sub_total": sub_total,
                # "optional":"Y", #this will be exculded from the total calculation of the service total
                # "hide": "Y"                   # to handle optional functionality
            })
        results.append(base_sub) # append the base sub to the bracket
        

        return results


    # Case 2: dict with evaluated value + formula (including reference case)
    if isinstance(basic_val, dict):
        movement = movement_val
        tariff = tariff_val
        raw_formula = tariff_eval.get("formula")
        formula_info = raw_formula if isinstance(raw_formula, dict) else {}
        formula_result = re.findall(r'\b[a-zA-Z][a-zA-Z\s]*[a-zA-Z]\b|\b[a-zA-Z]\b|[()\[\]]', sub["formula_result"])
        
        # Extract only property names (exclude basic terms and operators)
        basic_terms = ['basic', 'value', 'movement', 'tariff', '%', 'and', 'or', '(', ')', '[', ']','basic value','tariff%','tariff %']
        properties = [p for p in formula_result if p.lower() not in basic_terms and not p.replace('.', '').isdigit()]
        
        if properties:
            # Get the last property (e.g., 'ROE')
            attr = properties[-1].lower()
            value_replace = get_vessel_attr(vessel, attr)
            # value_replace = float(value_replace) if value_replace else getattr(dto, attr, 1)
            value_replace = float(value_replace) if value_replace else getattr(dto, attr, 1) if getattr(dto, attr, 1) else 1
            formula_eval = sub["formula_result"].lower()
            
            # Replace basic value, movement, tariff first
            formula_eval = formula_eval.replace("basic value", str(basic_val["value"])).replace("movement", str(movement)).replace("tariff %", str(tariff))
            
            # Then replace the custom property (e.g., ROE)
            formula_eval = formula_eval.replace(attr, str(value_replace))        
            if isinstance(raw_formula, dict):
                min_fee = raw_formula.get("min_fee", 0)
                formula_col = raw_formula.get("formula", "")
            else:
                min_fee = 0
                formula_col = ''
            calc_value=formula_col
            # Case 1: min_value = 0 → MIN-FEE LOGIC only for india pilotage
            if formula_col:
                formula_eval = sub["formula_result"].lower()
                extracted_val=formula_eval.split('*')[-1]
                extracted_val=extracted_val.replace(attr,str(value_replace))
                variables = {"basicvalue": basic_val.get("value", 1),"basic value": basic_val.get("value", 1),"movement": movement_val,"tariff": tariff_val}
                calc_value = formula_col.lower()
                for key in variables:
                    calc_value = calc_value.replace(key, str(variables[key]))

                if min_fee is None:
                    # Use ONLY calculated value
                    calc_value=f"{calc_value} * {extracted_val}"
                    formula_eval = str(calc_value)

                else:
                    # min_fee exists — apply normal min_fee comparison
                    calc_value = eval(calc_value)
                    if calc_value > min_fee:
                        calc_value = f"{movement_val} * {tariff_val} * {basic_val.get('value', 1)} * {extracted_val}"
                        formula_eval = str(calc_value)
                    else:
                        min_fee=f'{min_fee}*{extracted_val}'
                        formula_eval = str(min_fee)

                logger.info(f"not in the roe section {formula_eval}")


            else:
                formula_eval = formula_eval.lower().replace("basic value", str(basic_val["value"])).replace("movement", str(movement)).replace("tariff %", str(tariff))
                logger.info(f"the formal eval is: {formula_eval}")
        else:
            # Handle dynamic property multiplication
            additional_props = get_vessel_attr(vessel, 'additional_properties') or {}
            formula_upper = sub["formula_result"].upper()
            
            # Find matching property in additional_properties
            multiplier_value = 1.0
            matched_prop = None
            
            for prop_key, prop_value in additional_props.items():
                if prop_key.upper() in formula_upper:
                    try:
                        multiplier_value = float(prop_value) if prop_value not in (None, '') else 1
                        matched_prop = prop_key
                        break
                    except (ValueError, TypeError):
                        continue
            
            # If no match found, check for ROE fallback
            if not matched_prop and hasattr(dto, 'roe'):
                multiplier_value = getattr(dto, 'roe', 1) or 1
                matched_prop = "ROE"
            
            logger.info(f"Dynamic multiplier: {matched_prop} = {multiplier_value}")
            
            formula_eval = sub["formula_result"].lower()
            formula_eval = formula_eval.replace("basic value", str(basic_val["value"])).replace("movement", str(movement)).replace("tariff %", str(tariff))
            
            # Replace the matched property or any unmatched terms with the multiplier value
            if matched_prop:
                formula_eval = formula_eval.replace(matched_prop.lower(), str(multiplier_value))
            
            # Replace any remaining unmatched property names with 1

            formula_words = re.findall(r'\b[a-zA-Z][a-zA-Z\s]*[a-zA-Z]\b|\b[a-zA-Z]\b', formula_eval)
            basic_terms = ['basic', 'value', 'movement', 'tariff']
            
            for word in formula_words:
                if word.lower() not in basic_terms and not word.replace('.', '').isdigit():
                    formula_eval = formula_eval.replace(word.lower(), '1')
            
            logger.info(f"the formula_eval is {formula_eval}")
        try:
            sub_total=eval(formula_eval)
        except Exception as e:
            logger.error(f"the error in calculating sub service is {e}")
            sub_total=0
            # raise Exception(f"Unable to evaluate the sub total {e}")
        
        movement_base=sub["movement"].split(':')#attaching the movement resulatant value except for range
        if len(movement_base) >= 4:
            value_part = movement_base[1].lower().strip()
            if value_part not in ['day','days','hour','hours'] and not re.match(r'^\d+\s*(day|days|hour|hours|hours/day|hour/day)$', value_part.replace(" ","")):
                movement_base[1] = str(movement_val)
                movement = ":".join(movement_base)
            else:
                movement = sub["movement"]
        else:
            movement = sub["movement"]
        country_obj = get_country_obj_by_id(db,dto.country_id)
        if (sub["unique_key"]).lower()=="tonnage dues" and country_obj.name==CountryName.CHINA: #for the tonnage dues alone
            # movement_base[1] = sub.get('movement').split(':')[1]
            # movement = ":".join(movement_base) 
            date=date_for_tonnage_calc(vessel)
             
            if date and (date-dto.etd).days<=30 and (date-dto.etd).days>=0:
                    sub.update({
                    "calculated_basic_value": basic_val["value"],
                    "formula_inputs": formula_eval,
                    "sub_total": sub_total,
                    "optional":"Y",
                    # "movement": movement
                    })
            else:
                sub.update({
                    "calculated_basic_value": basic_val["value"],
                    "formula_inputs": formula_eval,
                    "sub_total": sub_total,
                    # "movement": movement
                    })
            for service in services:
                if service.get("service", "").lower() == "tonnage dues" and country_obj.name==CountryName.CHINA:
                    new_msg = (tariff_eval.get("formula") or "").strip()
                    existing_msg = service.get("info_msg") or ""
                    if new_msg not in existing_msg:
                        service["info_msg"] = (existing_msg + "\n" + new_msg).strip()
                    break                
        else:
            sub.update({
                "calculated_basic_value": basic_val["value"],
                "formula_inputs": formula_eval,
                "sub_total": sub_total,
                "movement": movement
            })
            for service in services:
                info_msg = service.get("info_msg", "")
                if info_msg and "balance amount" in info_msg:
                    attach_info_field(db,service, vessel,disbursement_seq,disbursement_type)
            if sub.get('movement').startswith('Bracket'): # Attached the rule and gave the sub_total to the bracket for the movement (e.g., anchorage) in India.
                result=[]
                base_sub.update({
                "optional":"Y",
                "hide": "Y",
                "sub_total": sub.get('sub_total')})
                sub.update({
                "hide": 'Y' })
                result.extend((sub, base_sub))
                return result


            # sub=sub|base_sub if sub.get('movement').startswith('Bracket') else sub
        return [sub]

    return [sub]


def has_reference_dependency(sub: dict) -> bool:
    """Check if a subservice has reference dependencies"""
    basic_val = sub.get("basic_value", "")
    tariff_val = sub.get("tariff_percent", "")
    
    # Check if basic_value has reference
    basic_has_ref = False
    if isinstance(basic_val, str):
        basic_has_ref = any(pattern in basic_val for pattern in ["->", "Sum", "Subtract", "Multiply", "Calculation","Date", "Services Total"])
    
    # Check if tariff_percent has reference  
    tariff_has_ref = False
    if isinstance(tariff_val, str):
        tariff_has_ref = any(pattern in tariff_val for pattern in ["->", "Sum", "Subtract", "Multiply", "Calculation","Date","Services Total"])
    
    has_ref = basic_has_ref or tariff_has_ref
    
    if has_ref:
        ref_types = []
        if basic_has_ref:
            ref_types.append(f"basic_value: '{basic_val}'")
        if tariff_has_ref:
            ref_types.append(f"tariff_percent: '{tariff_val}'")
        logger.info(f"  Reference detected in '{sub.get('name')}': {', '.join(ref_types)}")
    
    return has_ref


def has_services_total_dependency(sub: dict) -> bool:
    """Check if a subservice depends on Services Total"""
    basic_val = sub.get("basic_value", "")
    tariff_val = sub.get("tariff_percent", "")
    
    if isinstance(basic_val, str) and basic_val.lower() in ['services total','service total','all service', 'all services', 'sum of services']:
        return True
    if isinstance(tariff_val, str) and tariff_val.lower() in ['services total','service total','all service', 'all services', 'sum of services']:
        return True
    
    return False


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
        logger.info(f"     Service '{service_name}' total: {total} from {len(calculated_subs)} sub-services")
        for sub_info in calculated_subs:
            logger.info(f"      - {sub_info}")
    else:
        logger.info(f"      Service '{service_name}' total: {total} (no calculated sub-services)")
    
    return service


def calculate_grand_total(services: list):
    """Calculate grand total by summing service totals where is_auto_calculate is N"""
    service_total = sum(service.get("total", 0) for service in services if service.get("is_auto_calculate") == "N")
    grand_total = sum(float(s.get("total") or 0) for s in services)
    return {
        # "service_total": round(service_total, 2),
        "grand_total": round(grand_total, 2)
    }


def calculate_all_services_in_order(services: list, vessel, db: Session, disbursement_seq: Optional[int] = None , disbursement_type: str = "PDA",dto:Any=None
                                    ):
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
    logger.info("=== FIRST PASS: Calculating non-reference subservices ===")
    for i, service in enumerate(temp_services):
        service_name = service.get("service", f"Service_{i}")
        logger.info(f"\nProcessing service: {service_name}")
        
        subs = service.get("subService", [])
        updated_subs = []
        
        for sub in subs:
            sub_name = sub.get("name", "Unnamed")
            
            if not has_reference_dependency(sub):
                logger.info(f"  Calculating non-reference sub: {sub_name}")
                calculated_subs = calculate_subservice(
                    sub, vessel_dict, db, temp_services, service, 
                    disbursement_seq, disbursement_type,dto
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
                            logger.info(f"    {calc_sub.get('name')} result: {sub_total}")
                else:
                    updated_subs.append(calculated_subs)
            else:
                logger.info(f"  Skipping reference sub for now: {sub_name}")
                updated_subs.append(sub)
        
        service["subService"] = updated_subs
        # Calculate service total after first pass
        # calculate_service_total_roe(service,vessel,db,disbursement_type,disbursement_seq,dto)
        # logger.info(f"   Service '{service_name}' total after first pass: {service.get('total', 0)}")

    
    # Second pass: Calculate subservices WITH references
    logger.info("\n=== SECOND PASS: Calculating reference subservices ===")
    for i, service in enumerate(temp_services):
        service_name = service.get("service", f"Service_{i}")
        logger.info(f"\nProcessing service: {service_name}")
        
        subs = service.get("subService", [])
        updated_subs = []
        
        for sub in subs:
            sub_name = sub.get("name", "Unnamed")
            
            if has_reference_dependency(sub) and ('sum' not in (sub.get('basic_value') or '').lower()) and ('sum' not in (sub.get('tariff_percent') or '').lower()):
                logger.info(f"   Calculating reference sub: {sub_name}")
                
                calculated_subs = calculate_subservice(
                    sub, vessel_dict, db, temp_services, service, 
                    disbursement_seq, disbursement_type,dto
                )
                
                if isinstance(calculated_subs, list):
                    updated_subs.extend(calculated_subs)
                    # Print detailed results
                    for calc_sub in calculated_subs:
                        if isinstance(calc_sub, dict):
                            sub_total = calc_sub.get("sub_total", 0)
                            formula_inputs = calc_sub.get("formula_inputs", "")
                            logger.info(f"    {calc_sub.get('name')} result: {sub_total}")
                            logger.info(f"    Formula: {formula_inputs}")
                else:
                    updated_subs.append(calculated_subs)
                    logger.info(f"     No calculation results for {sub_name}")
            
            else:
                updated_subs.append(sub)
                # Print existing calculated values
                if isinstance(sub, dict) and sub.get("sub_total", 0) > 0:
                    logger.info(f"   Already calculated: {sub_name} = {sub.get('sub_total')}")
        
        service["subService"] = updated_subs
        # Only recalc total if new subs with numeric values were added
    
    logger.info("\n=== THIRD PASS: Calculating reference subservices ===")
    for i, service in enumerate(temp_services):
        service_name = service.get("service", f"Service_{i}")
        logger.info(f"\nProcessing service: {service_name}")
        
        subs = service.get("subService", [])
        updated_subs = []
        
        for sub in subs:
            sub_name = sub.get("name", "Unnamed")
            
            if has_reference_dependency(sub) and ('sum' in (sub.get('basic_value') or '').lower()) or ('sum' in (sub.get('tariff_percent') or '').lower()):
                logger.info(f"   Calculating reference sub: {sub_name}")
                
                calculated_subs = calculate_subservice(
                    sub, vessel_dict, db, temp_services, service, 
                    disbursement_seq, disbursement_type,dto
                )
                
                if isinstance(calculated_subs, list):
                    updated_subs.extend(calculated_subs)
                    # Print detailed results
                    for calc_sub in calculated_subs:
                        if isinstance(calc_sub, dict):
                            sub_total = calc_sub.get("sub_total", 0)
                            formula_inputs = calc_sub.get("formula_inputs", "")
                            logger.info(f"    {calc_sub.get('name')} result: {sub_total}")
                            logger.info(f"    Formula: {formula_inputs}")
                else:
                    updated_subs.append(calculated_subs)
                    logger.info(f"     No calculation results for {sub_name}")
            
            else:
                updated_subs.append(sub)
                # Print existing calculated values
                if isinstance(sub, dict) and sub.get("sub_total", 0) > 0:
                    logger.info(f"   Already calculated: {sub_name} = {sub.get('sub_total')}")
        
        service["subService"] = updated_subs
        
        calculate_service_total_roe(service, vessel, db, disbursement_type, disbursement_seq, dto)
        


    return temp_services


def process_services_calculation(services_data, vessel_info, db, disbursement_seq:Optional[int] =None, disbursement_type="PDA",dto:Any=None):
    """Main function to process service calculations with proper dependency order"""
    # Calculate all services in proper order
    calculated_services = calculate_all_services_in_order(
        services_data["items"], 
        vessel_info, 
        db, 
        disbursement_seq, 
        disbursement_type,dto
    )
    
    # Update the services data
    services_data["items"] = calculated_services
    
    for service in calculated_services:
        for sub in service.get("subService", []):
            if has_services_total_dependency(sub):
                calculated_subs = calculate_subservice(
                    sub, vessel_info, db, calculated_services, service, 
                    disbursement_seq, disbursement_type, dto
                )
                if calculated_subs and isinstance(calculated_subs, list):
                    # Update the sub in place
                    sub.update(calculated_subs[0])
        # Recalculate service total after updating services total dependencies
        calculate_service_total_roe(service, vessel_info, db, disbursement_type, disbursement_seq, dto)
    
    # Calculate totals
    totals = calculate_grand_total(calculated_services)
    # services_data["service_total"] = totals["service_total"]
    services_data["grand_total"] = totals["grand_total"]
    
    return services_data



def range_calculation_india(db: Session,vsl_attr: str,service_name: str,vessel: Any,resultant_col: str,country_id:int=None,port_id:int=None) -> Dict[str, Union[float, str]]:
    """
    Retrieves a fee value based on a vessel attribute that falls within a given range.
    """
    logger.info(f"the country id is {country_id} {type(vessel)}")
    try:
        tug_info=None
        if isinstance(vsl_attr,(float,int)):
            vessel_val_float=float(vsl_attr)
        elif vsl_attr.lower() == "volume":
            vessel_val_float = volume_calculate(vessel)
        else:
            if re.search(r'[|;]', vsl_attr):
                parts = re.split(r'\s*[|;]\s*', vsl_attr, maxsplit=1)

                # DWT + tug info
                vsl_attr = parts[0].strip()
                tug_info = parts[1].strip().lower()
                logger.info(f"Delimiter found {vsl_attr} {tug_info}")
                
            vessel_val = get_vessel_attr(vessel, vsl_attr)
            vessel_val_float = float(vessel_val or 0)
 
        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        TABLE_COLUMNS_CACHE = {}

        # 1. Cache table columns
        if table_name not in TABLE_COLUMNS_CACHE:
            columns_query = text("""
                SELECT column_name
                FROM information_schema.columns
                WHERE table_name = :table_name
                AND table_schema = :schema_name                
            """)
            cols = db.execute(columns_query, {"table_name": table_name,"schema_name": SCHEMA_NAME}).fetchall()
            TABLE_COLUMNS_CACHE[table_name] = {c[0] for c in cols}
        if 'formula' not in TABLE_COLUMNS_CACHE.get(table_name, set()):
            return range_calculation(db, vsl_attr, service_name, vessel,resultant_col, country_id, port_id)
        has_vessel_type = "vessel_type" in TABLE_COLUMNS_CACHE[table_name]

        # 2. Conditional SQL parts
        vessel_where = ""
        vessel_order = ""

        if has_vessel_type:
            vessel_where = "AND (vessel_type = :type OR vessel_type IS NULL)"
            vessel_order = """
                CASE
                    WHEN vessel_type like '%' || :type || '%' THEN 1
                    ELSE 2
                END,
            """

        # 3. Build query
        query = f"""
                SELECT *
                FROM {SCHEMA_NAME}.{table_name} t
                WHERE min_range <= :val
                AND (max_range >= :val OR max_range IS NULL)
                AND (
                        port = :port_id
                        OR (
                            port IS NULL
                            AND country = :country_id
                            AND NOT EXISTS (
                                SELECT 1
                                FROM {SCHEMA_NAME}.{table_name} t2
                                WHERE t2.port = :port_id
                                AND t2.min_range <= :val
                                AND (t2.max_range >= :val OR t2.max_range IS NULL)
                                {vessel_where}
                            )
                        )
                    )
                {vessel_where}
                ORDER BY
                CASE WHEN port = :port_id THEN 1 ELSE 2 END,
                {vessel_order}
                min_range DESC;
        """
        # 4. Prepare parameters
        vessel_type = get_vessel_attr(vessel, "type") or ""
        params = {
            "val": vessel_val_float,
            "port_id": port_id,
            "country_id": country_id,
            "type": vessel_type
        }

        # 5. Execute safely
        result = None
        try:
            result = db.execute(text(query), params).fetchall()
        except Exception as e:
            logger.error("Error during range calculation:", e)
        if result is None:
            return {"value": 0.0, "formula": f"Range:{service_name}:{resultant_col}->0"}
 
        # Check if resultant_col exists in row
        if resultant_col not in result[0]._mapping:
            logger.info(f"Column '{resultant_col}' NOT FOUND in row columns: {result[0]._mapping.keys()}")
            return {"value": 0.0, "formula": f"Range:{service_name}:{resultant_col}->0"}
 
        # Finally extract the value
        if len(result)==1:
            value = result[0]._mapping[resultant_col] or 0.0
            logger.info(f"EXTRACTED: {result[0]._mapping}")
            EXTRACTED= result[0]._mapping
        else:
            if tug_info:
                result = next((t for t in result if tug_info in (t._mapping.get("formula") or "").lower()), None)
                value = result._mapping[resultant_col] or 0.0
                logger.info(f"EXTRACTED: {result._mapping}")
                EXTRACTED= result._mapping
            else:
                value = result[0]._mapping[resultant_col] or 0.0
                logger.info(f"EXTRACTED: {result[0]._mapping}")
                EXTRACTED= [dict(row._mapping) for row in result]


 
    except Exception as e:
        logger.error(f"Error during range calculation: {e}")
        value = 0.0
 
    return {
        "value": value,
        "formula": f"Range:{service_name}:{resultant_col}->{value}",
        "EXTRACTED": EXTRACTED
    }

def evaluate_sum_basic_value(basic_value: str, services: list,vessel,db,dto):
        logger.info("=== OPERATION FUNCTION START  FOR SUM OF SERVICES ===")
        
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
        
        logger.info(f"{operation} expression: {basic_value}")
        
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
            
            logger.info(f"{operation} parameters: {params}")
            
            if operation == "Subtract" and len(params) < 2:
                logger.info(" Subtract requires at least 2 parameters")
                return {"value": 0.0, "formula": basic_value}
            
            result = initial_value
            formula_parts = []
            
            for i, param in enumerate(params):
                logger.info(f"\n Processing {operation} parameter {i}: '{param}'")
                
                param_value = neutral_value
                param_formula = ""
                
                # Case 1: Reference to sub-service (service->sub_service)
                if "->" in param:
                    parts = [x.strip() for x in param.split("->", 1)]
                    if len(parts) == 2:
                        service_name, sub_name = parts
                        logger.info(f"   Parsed reference: service='{service_name}', sub='{sub_name}'")
                        
                        # Find the service (case-insensitive)
                        ref_service = None
                        for s in services:
                            if s.get("service", "").strip().lower() == service_name.strip().lower():
                                ref_service = s
                                break
                        
                        if not ref_service:
                            logger.info(f"    Service '{service_name}' NOT FOUND!")
                            param_value = neutral_value
                            param_formula = f"{service_name}->{sub_name}={neutral_value}"
                        else:
                            logger.info(f"    Found service: '{ref_service.get('service')}'")
                            
                            # Find the sub-service (case-insensitive)
                            ref_sub = None
                            for ss in ref_service.get("subService", []):
                                if isinstance(ss, dict) and ss.get("name", "").strip().lower() == sub_name.strip().lower():
                                    ref_sub = ss
                                    break
                            
                            if not ref_sub:
                                logger.info(f"    Sub-service '{sub_name}' NOT FOUND!")
                                param_value = neutral_value
                                param_formula = f"{service_name}->{sub_name}={neutral_value}"
                            else:
                                logger.info(f" Found sub-service: '{ref_sub.get('name')}'")
                                
                                if ref_sub.get("optional") == "Y" and ref_sub.get("hide") == "N":
                                    param_value = neutral_value
                                    param_formula = f"{service_name}->{sub_name}=SKIPPED(optional)"
                                else:
                                    sub_total = ref_sub.get("sub_total", 0)
                                    param_value = float(sub_total or 0)
                                    param_formula = f"{service_name}->{sub_name}={param_value}"
                    else:
                        logger.info(f"   Invalid reference format: {param}")
                        param_value = neutral_value
                        param_formula = f"{param}={neutral_value}"
                
                # Case 2: Direct numeric value
                elif param.replace('.', '', 1).isdigit():
                    param_value = float(param)
                    param_formula = param
                    logger.info(f"   Using direct numeric value: {param_value}")
                
                # Case 3: Vessel attribute (like GRT, LOA, NRT, RGRT, etc.)
                elif param.isalpha() and param.upper() in ['GRT', 'LOA', 'NRT', 'RGRT']:
                    vessel_val = get_vessel_attr(vessel, param)
                    param_value = float(vessel_val) if vessel_val else neutral_value
                    param_formula = f"{param}({param_value})"
                    logger.info(f"   Using vessel attribute '{param}': {param_value}")
                
                else:
                    ref_service = next(
                        (s for s in services if s.get("service", "").strip().lower() == param.lower()),
                        None
                        )
                    if ref_service and isinstance(ref_service.get("total"),(int,float)):
                        service_total = ref_service.get("total", 0) 
                        param_value = float(service_total)
                        param_formula = f"{param}({service_total})"
                        logger.info(f"   Using service total '{param}': {service_total}")
                    elif ref_service and isinstance(ref_service.get("total"),str):
                        logger.info(f"   Calculating service total for '{param}'")
                        service_total = calculate_service_total_roe(service=ref_service,vessel=vessel,db=db,dto=dto)
                        logger.info(f"   Calculated service total '{param}': {ref_service.get("total")}")
                        param_value = float(ref_service.get("total", 0) )
                        param_formula = f"{param}({service_total})"
                        
                    else:
                        logger.info(f"Invalid parameter format: {param}")
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
            
            logger.info(f" {operation} calculation result: {result} = {formula_str}")
            logger.info(f" === {operation.upper()} FUNCTION END ===\n")
            
            return {
                "value": round(result, 2),
                "formula": f"{operation}({formula_str})"
            }
                
        except Exception as e:
            logger.error(f" Exception in {operation} function: {e}")
            import traceback
            traceback.print_exc()
            return {"value": initial_value, "formula": basic_value}


def extract_roe(formula: str):
    """
    Extracts ROE parts from a formula anywhere they appear.
    Returns:
        main_formula: formula with ROE removed
        roe_parts: list of ROE occurrences (without operators)
    """
    # Match operator (+, -, *, /) optionally before ROE and the ROE itself
    pattern = r'[\+\-\*/]?ROE\d*'
    matches = re.findall(pattern, formula.upper())
    roe_parts = [m.lstrip("+-*/") for m in matches]  # remove operator from ROE
    logger.info(f"the roe parts and the matches {roe_parts} {matches}")

    # Remove all ROE occurrences from the formula
    main_formula = re.sub(pattern, '', formula).strip()

    return roe_parts[0]

def handle_china_base_range(parts,vsl_attr,service_name,vessel,resultant_col,dto,db):
    if len(parts) == 3 and service_name!='Tonnage Dues:':
        return range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id)
    else:
        vsl_attr=vsl_attr.split("With")[0].strip()
        return tonnage_due_rate_by_etd(db,dto.etd,"date",vsl_attr,vessel)
    

def handle_china_tariff_range(parts, service_name, vsl_attr, resultant_col, vessel, tariff_value, sub, dto, db):

    if len(parts) == 3 and service_name.strip() != 'tonnage dues':

        resultant_col = resultant_col.replace(" ", "_")

        return range_calculation(db,vsl_attr,service_name,vessel, resultant_col,dto.country_id,dto.port_id,sub)

    else:
        resultant_col = resultant_col.replace(" ", "_")

        month = (
            int([word for word in tariff_value.split() if word.isdigit()][0])
            if len(tariff_value) > 30
            else 1
        )

        if month == 30:
            month = 1
        elif month == 90:
            month = 3
        elif month == 365:
            month = 12
        else:
            month = 1

        vsl_attr = vsl_attr.split("With")[0].strip()
        logger.info(f"India Range: Tonnage Dues | etd = {dto.etd}")
        return tonnage_due_rate_by_etd(db,dto.etd,month,vsl_attr,sub,vessel,dto.country_id)

    
def handle_india_base_range(vsl_attr,service_name,vessel,resultant_col,dto,db):
    result=range_calculation(db, vsl_attr, service_name, vessel, resultant_col,dto.country_id,dto.port_id)
    try:
        numeric_value = float(result['value'])
        logger.info(f"Converted to int: {numeric_value}")
        return {"value": numeric_value,"formula": f"Range:{service_name}:{resultant_col}->{numeric_value}"}
    except (ValueError, TypeError):
        logger.info(f"Non-numeric range result: {result}")
        numeric_value = direct_vessel_property(result['value'], vessel,dto)
        if isinstance(numeric_value, dict):
            numeric_value = numeric_value.get('value', 0)
            logger.info(f"the numeric value is {numeric_value}")
        return {"value": numeric_value,"formula": f"Range:{service_name}:{resultant_col}->{numeric_value}"}

def handle_india_tariff_range(db, vsl_attr, service_name, vessel, resultant_col, dto):
    rate = range_calculation_india(db, vsl_attr, service_name, vessel, resultant_col, dto.country_id,dto.port_id)
    min_value = rate['EXTRACTED']['min_range']

    if min_value == 0:
        logger.info("The range min_value is 0")
        result = {
            'value': rate['value'],
            'formula': {"min_value":0,"min_fee":rate['EXTRACTED']['min_fee']}
        }

    else:
        logger.info(f"Range min_value is NOT 0: {min_value} | Rate: {rate['value']}")

        # Get vessel property value (ex: NRT)
        vsl_value = direct_vessel_property(vsl_attr, vessel,dto)
        vsl_numeric = vsl_value['value'] if isinstance(vsl_value, dict) else float(vsl_value)

        adjusted_min = min_value - 1
        computed_value = (vsl_numeric - adjusted_min) * rate['value']

        result = {
            'value': computed_value,
            'formula': f"({vsl_numeric} - {adjusted_min}) * {rate['value']} = {computed_value}"
        }

    return result

def movement_bracket_calculation(db: Session, movement_value: float, service_name: str, vessel: Any, country_id: int = None,port_id:int=None) -> float:
    """
    Calculates movement-based bracketed value for a vessel based on tiered rates.
    Returns the final calculated numeric value.
    """
    try:
        if movement_value <= 0:
            logger.info("Movement value <= 0, skipping bracket calculation.")
            return 1

        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        query = f"""
            SELECT bracket, min_range, max_range, rate
            FROM {SCHEMA_NAME}.{table_name}
            WHERE port = :port_id
            ORDER BY COALESCE(min_range, 0)
        """
        rows = db.execute(text(query), {"port_id": port_id}).fetchall()
        logger.info(f"Found {len(rows)} brackets for service '{service_name}'")
        if not rows:
            query = f"""
            SELECT bracket, min_range, max_range, rate
            FROM {SCHEMA_NAME}.{table_name}
            WHERE country = :country_id
            ORDER BY COALESCE(min_range, 0)
            """
            rows = db.execute(text(query), {"country_id": country_id}).fetchall()

        total_value = 0.0
        cursor = 1

        for idx, row in enumerate(rows, start=1):
            bracket_name, min_q, max_q, rate = row
            min_q = 1 if not min_q or int(min_q) <= 0 else int(min_q)
            max_q = None if not max_q else int(max_q)
            rate = float(rate or 0)

            if cursor > movement_value:
                break

            start = max(cursor, min_q)
            end = min(max_q or int(movement_value), int(movement_value))
            take = max(0, end - start + 1)

            if take > 0:
                subtotal = take * rate
                logger.info(f"Bracket {idx}: take={take}, rate={rate}, subtotal={subtotal}")
                total_value += subtotal

            cursor = end + 1

        logger.info(f"Final movement bracket value: {total_value}")
        if total_value==0:
            return 1
        else:
            return total_value

    except SQLAlchemyError as e:
        logger.error(f"Database error in movement bracket calculation: {e}")
        return 0.0
    except Exception as e:
        logger.error(f"Unexpected error in movement bracket calculation: {e}")
        return 0.0
    
def handle_formula_section(db, vsl_attr, service_name, vessel, resultant_col, dto,sub):
    logger.info(f"handle the formula {vsl_attr} {service_name}")
    vol=["LOA","BEAM","DEPTH"]
    if vsl_attr.lower()=='volume':
        vsl_attr=1
        for i in vol:
            vsl_attr*=get_vessel_attr(vessel,i)
    else:
        vsl_attr=vsl_attr
    rate = range_calculation_india(db, vsl_attr, service_name, vessel, resultant_col, dto.country_id,dto.port_id)
    logger.info(f"the rate with extracted value {rate}")
    # Check if EXTRACTED is a list and has formula with 'days'
    if isinstance(rate.get('EXTRACTED'), list):
        # Get vessel_stay in days
        vessel_stay_days = float(dto.vessel_stay) / 1440 if hasattr(dto, 'vessel_stay') else 0
        
        # Find matching row based on formula condition
        matched_row = None
        for row in rate['EXTRACTED']:
            formula = (row.get('formula') or '').lower()
            condition=None
            if 'days' in formula or 'day' in formula:
                movement = sub.get('movement', '')
                movement_attr = movement.split(':')[1] if ':' in movement else ''
                
                # Check if movement_attr is just a digit
                if movement_attr.strip().isdigit():
                    return {'value': float(movement_attr), 'formula': f"Fixed days: {movement_attr}"}
                
                # Check if movement has a number (e.g., "2 days", "2days", "2 day")
                match = re.match(r'(\d+)\s*days?', movement_attr.lower())
                if match:
                    day_value = float(match.group(1))
                else:
                    day_value = vessel_stay_days
                
                formula=formula.replace('s','')
                condition = formula.replace('day', str(day_value))
            elif 'hours' in formula or 'hour' in formula:
                formula=formula.replace('s','')
                # Parse and evaluate condition
                vessel_stay_days=vessel_stay_days*24
                condition = formula.replace('hour', str(vessel_stay_days))
            else:
                return {'value':row[resultant_col],'formula':f"{condition}"}
            try:
                if eval(condition):
                    matched_row = row
                    break
            except:
                continue
        
        if matched_row:
            return {'value': matched_row[resultant_col], 'formula': f"Matched: {matched_row.get('formula', '')}"}
        else:
            rate={
                "value": rate['value'],
                "formula": f"Range:{service_name}:{resultant_col}->{rate['value']}",
                "EXTRACTED": rate['EXTRACTED'][0]
                }
    if not isinstance(rate, dict) or 'EXTRACTED' not in rate:
        return rate
    
    extracted = extracted = dict(rate.get('EXTRACTED') or {})
    if isinstance(extracted, dict):
        formula_col = (extracted.get('formula') or '').lower()

        if 'tug' in formula_col:
            return {
                'value': rate.get('value'),
                'formula': f"resultant_col"
            }
        

    
    extracted = rate.get('EXTRACTED') or {}

    min_value = extracted.get('min_range', 0)
    tariff = rate.get('value', 0)
    formula_text = extracted.get('formula', '')

    def normalize(f): return re.sub(r'\s+', '', f.lower()) if f else ''
    formula_expr = normalize(formula_text)
    
    # prepare variables
    try:
        tariff_value = float(tariff) if float(tariff) != 0 else 1
    except (TypeError, ValueError):
        tariff_value = get_vessel_attr(vessel, vsl_attr)

    var_names = extract_vsl_property(formula_expr)

    variables = build_variables(vessel, var_names,dto)

    # Add all extracted columns to variables
    for key, value in extracted.items():
        if key not in ['formula', 'min_range'] and value is not None:
            try:
                variables[key.lower()] = float(value)
            except (ValueError, TypeError):
                variables[key.lower()] = value

    variables.update({
        "volume": vsl_attr,
        "tariff": tariff_value,
        "tariff%": tariff_value,
        "basicfee": tariff_value,
        "minrange": float(min_value)
    })

    # evaluate dynamically
    try:
        if 'formula=' in formula_expr.lower().replace(" ","") or 'tariff=' in formula_expr.lower().replace(" ",""): 
            formula_expr_split = formula_expr.split('=')
            formula_tariff=formula_expr_split[0].lower()
            operation=formula_expr_split[1].lower()
            if 'formula' in formula_tariff:#formula= basic_value*tariff*movement
                result = {
                'value': rate['value'],
                'formula': {"min_fee":rate['EXTRACTED'].get('min_fee') or 0,"formula":operation}}
                return result
            else:#Tariff=(grt-min range)*Tariff
                formula_expr=operation

        tariff = eval(formula_expr.replace(" ",""), {"__builtins__": None,"math": math}, variables)
        if isinstance(tariff, (int, float)) and not isinstance(tariff, bool):
            tariff = float(tariff)
        else:
            tariff= rate['value']
    except Exception as e:
        logger.error(f"Failed to evaluate formula '{formula_text}': {e}")
        tariff = tariff_value
        
    return {'value':tariff,'formula':f"{formula_text}={tariff}"}

def parse_min_max(s: str):
    min_val = 0.0
    max_val = float("inf")

    if not s:
        return min_val, max_val

    parts = dict(
        item.strip().split("=", 1)
        for item in s.split(",")
        if "=" in item
    )

    min_val = float(parts.get("min", parts.get("min_value", min_val)))
    max_val = float(parts.get("max", parts.get("max_value", max_val)))

    return min_val, max_val


def apply_min_max(value, min_val, max_val):
    """
    Applies min/max rule:
    - below min → 0
    - above max → max
    """
    # base_value=float(value)
    # if base_value < min_val or base_value > max_val:
    #     return 0
    return value

SAFE_FUNCS = {
    "MIN": lambda a, b: a if a < b else b,
    "MAX": lambda a, b: a if a > b else b,
    "min": lambda a, b: a if a < b else b,
    "max": lambda a, b: a if a > b else b,
    "abs": abs,
    "round": round
}

def evaluate_rule(rule: str, vessel: dict,dto) -> float:
    try:
        parts = [p.strip() for p in rule.split("|")]

        base_expr = parts[0]
        modifier_expr = None
        min_max_expr = None

        if len(parts) == 2:
            if "min=" in parts[1] or "max=" in parts[1]:
                min_max_expr = parts[1]
            else:
                modifier_expr = parts[1]

        elif len(parts) == 3:
            modifier_expr = parts[1]
            min_max_expr = parts[2]

        min_val, max_val = parse_min_max(min_max_expr)
        var_names = extract_vsl_property(base_expr)
        base_context = build_variables(vessel, var_names,dto)

        value = eval(
            base_expr.lower().replace(" ",""),
            {"__builtins__": {}},
            {**SAFE_FUNCS, **base_context}
        )

        if modifier_expr:
            modifier_expr = modifier_expr.upper()

            modifier_expr = re.sub(
                r"\b[A-Z_]+\b",
                "VALUE",
                modifier_expr
            )

            modifier_context = {
                **SAFE_FUNCS,
                "VALUE": float(value),
                "MIN_VALUE": min_val,
                "MAX_VALUE": max_val,
                "min_value": min_val,
                "max_value": max_val
            }

            value = eval(
                modifier_expr,
                {"__builtins__": {}},
                modifier_context
            )
        # Step 3: Apply min/max business rule
        return apply_min_max(float(value), min_val, max_val)

    except Exception as e:
        logger.error(f"the failed rule in evaluate rule function{e}")
        raise ValueError(f"Rule evaluation failed: {rule}") from e
    
def ceiling_value(value, slab):
    """
    Rounds value up to the nearest slab_size.
    Exact multiples remain unchanged.
    """
    return {'value':math.ceil(value / slab) * slab , 'formula':"slab value"}


def calculate_round_off(rule, vessel,percentage=False,sub=None,dto=None):
    original_expr = rule.split(':')[1].replace('%', '').strip()
    
    if 'condition' in original_expr.lower():
        match = re.search(r'condition\(([^,]+),([^)]+)\)', original_expr, re.IGNORECASE)
        match2=re.search(r'conditions\(([^,]+),([^)]+)\)', original_expr, re.IGNORECASE)
        match = match if match else match2
        if match:
            condition_str = match.group(1).strip()
            return_expr = match.group(2).strip()
            variables = list(set(re.split(r'[+\-*/()<>=!]+', condition_str)))
            variables = [v.strip() for v in variables if v.strip() and not v.replace('.','').isdigit()]
            context={}
            for key in variables:
                value=get_vessel_attr(vessel, key)
                try:
                    value=float(value)
                except:
                    pass
                context[key]=value
                context[key.replace(' ','')]=value


            # Extract the percentage expression before comparison
            percentage_match = re.match(r'(.+?)([<>=!]+)(.+)', condition_str)
            if percentage_match:
                left_expr = percentage_match.group(1).strip().replace(" ","")
                operator = percentage_match.group(2).strip()
                right_value = percentage_match.group(3).strip()
                # Calculate percentage and apply ceiling
                percentage_value = eval(left_expr, {"__builtins__": {}}, context)
                ceiled_value = math.ceil(percentage_value / 10)*10
                
                # Build comparison with ceiled value
                comparison = f"{ceiled_value}{operator}{right_value}"
                condition_result = eval(comparison, {"__builtins__": {}}, {})
                
                if condition_result:
                    result_value = eval(return_expr.replace(" ",""), {"__builtins__": {}}, context) 
                    return {'value': (ceiling_value(round(result_value), 10)['value'])/100, 'formula': f"ceil({percentage_value})={ceiled_value}, condition true"}
                else:
                    sub.update({
                        'hide':'Y','optional':'Y'
                    })
                    return {'value': 0, 'formula': f"ceil({percentage_value})={ceiled_value}, condition false"}
    
    # Find all vessel property names in original expression (with spaces)
    prop_pattern = re.findall(r'[a-zA-Z][a-zA-Z\s]*[a-zA-Z]|[a-zA-Z]', original_expr)
    
    # Replace each property with its value
    expr = original_expr
    for prop in prop_pattern:
        value = get_vessel_attr(vessel, prop.strip())
        expr = expr.replace(prop, str(value))
    
    # Remove any remaining spaces and evaluate
    expr = expr.replace(' ', '')
    percentage_value = eval(expr) if eval(expr)>=0 else 0
    if percentage:
        return ceiling_value(percentage_value, 10)
    else:
        return {'value':math.ceil(percentage_value) , 'formula':"round off value"}


def calculate_slab_movement(rule: str,sub: Any = None,dto: Any = None,vessel=None) -> Dict[str, Any]:
    """
    Example rule:
        slab:movement/6:NA:NA

    - Takes movement from sub['movement']
    - Converts movement to numeric value
    - Applies expression (e.g., movement / 6)
    - Returns CEIL value
    """

    try:
        if 'movement' in rule:
            if not sub or not sub.get("movement"):
                return {"value": 0, "formula": rule}

            # Extract expression part → movement/6
            parts = rule.split(":")
            if len(parts) < 2:
                return {"value": 0, "formula": rule}

            expr = parts[1].strip().lower()  # movement/6
            movement_raw = sub.get("movement")  # e.g. "MOVEMENT:DAY", "MOVEMENT:6 HOURS"

            # Extract movement value part
            movement_parts = movement_raw.split(":")
            value_part = movement_parts[1].strip() if len(movement_parts) > 1 else movement_raw.strip()

            # Extract arithmetic operation if present
            match = re.match(r"(.+?)\s*([\+\-\*\/]\s*[\d.]+)$", value_part.strip())
            operation = '*1'
            if match:
                value_part = match.group(1).strip()
                operation = match.group(2).replace(" ", "")
                    
            if value_part.upper() in ["DAY", "DAYS"]:
                movement_value = float(dto.vessel_stay) / 1440 if dto else 1
                movement_value = eval(f"{movement_value}{operation}")
            elif value_part.upper() in ["HOUR", "HOURS"]:
                movement_value = float(dto.vessel_stay) / 60 if dto else 1
                movement_value = eval(f"{movement_value}{operation}")
            elif "/" in value_part.upper():
                match2 = re.match(r"(\d+)\s*HOURS?\s*/\s*DAY", value_part.upper())
                hours_per_day = int(match2.group(1)) if match2 else 0
                movement_value = (float(dto.vessel_stay) / 1440) * hours_per_day if dto else 1
                movement_value = eval(f"{movement_value}{operation}")
            else:
                try:
                    movement_value = float(value_part)
                except:
                    movement_value = 1

            # Evaluate expression (movement/6)
            variables = {"movement": movement_value}
            raw_value = eval(expr, {"__builtins__": None}, variables)

            # Apply CEIL
            final_value = math.ceil(raw_value)
            return {
                "value": final_value,
                "formula": f"ceil({expr}) => ceil({raw_value})"
            }
        else:
            parts = rule.split(":")
            if len(parts) < 2:
                return {"value": 0, "formula": rule}

            expr = parts[1].strip().lower()
            expr = resolve_vessel_expression(expr, sub, dto,vessel)
            variables = list(set(re.findall(r'\b[a-zA-Z_]\w*\b', expr.replace(" ",""))))
            context={}
            for key in variables:
                value=get_vessel_attr(vessel, key)
                context[key]=value

            # Safe evaluation
            raw_value = eval(expr, {"__builtins__": None},context)
            final_value = math.ceil(raw_value)

            return {
                "value": final_value,
                "formula": f"ceil({expr}) => ceil({raw_value})"
            }
    except Exception as e:
        logger.error(f"Error in calculate_slab_movement: {e}")
        return {"value": 0, "formula": str}
    
def resolve_vessel_expression(expr: str, sub: Any, dto: Any,vessel) -> str:
    """
    Replaces vessel property names inside an expression with numeric values
    Example:
      (NRT/GRT)/1000 → (18000/30000)/1000
    """
    # Find possible identifiers (supports spaces)
    identifiers = sorted(
        set(re.findall(r"[A-Z][A-Z ]+[A-Z]", expr.upper())),
        key=len,
        reverse=True  # longest first to avoid partial replacement
    )

    resolved_expr = expr

    for ident in identifiers:
        value = get_vessel_attr(vessel,ident.strip())
        if value is None:
            raise ValueError(f"Missing vessel property: {ident}")

        resolved_expr = re.sub(
            r"\b" + re.escape(ident) + r"\b",
            str(float(value)),
            resolved_expr
        )
    return resolved_expr





def attach_info_field(db, service, vessel, disbursement_id, disbursement_type="pda"):
    """
    Attaches info to info_msg:
    - {$subservice_name field$} format: replaces with subservice field value
    - {placeholder} format: replaces with balance amount
    """
    try:
        info_msg = service.get("info_msg", "")      
        if not info_msg:
            return

        # Handle {subservice} {$field$} pattern
        if '{$' in info_msg:
            # Build subservice lookup dict with field values
            subservices_data = {}
            for sub in service.get('subService', []):
                name = sub.get('name', '').strip().lower()
                if not name:
                    continue
                    
                formula_result = sub.get('formula_result', '').lower()
                formula_inputs = sub.get('formula_inputs', '')
                
                # Extract variables from formula_result
                variables = []
                for part in formula_result.split('*'):
                    part = part.strip()
                    if '1/' in part:
                        var = part.split('/')[-1].replace(')', '').strip()
                        variables.append(var)
                    else:
                        variables.append(part)
                
                # Extract numbers from formula_inputs
                numbers = re.findall(r'\d+\.?\d*', formula_inputs)
                
                # Map variables to numbers
                field_values = {}
                for var, num in zip(variables, numbers):
                    try:
                        field_values[var] = float(num)
                    except (ValueError, IndexError):
                        pass
                
                subservices_data[name] = {
                    'basic value': sub.get('calculated_basic_value', 0),
                    'total': sub.get('sub_total', 0),
                    'tariff': field_values.get('tariff %', field_values.get('tariff', 0)),
                    'movement': field_values.get('movement', 0)
                }
            
            # Pattern: {subservice_name} <any text> {$field$}
            pattern = r'\{([^}$]+)\}([^{]*?)\{\$([^$}]+)\$?\}'
            
            def replace_match(match):
                sub_name = match.group(1).strip().lower()
                connector = match.group(2)  # e.g., " is ", " in the "
                field = match.group(3).strip().lower()
                
                if sub_name in subservices_data and field in subservices_data[sub_name]:
                    value = subservices_data[sub_name][field]
                    return f"{sub_name}{connector}{value}"
                return match.group(0)  # Return original if not found
            
            info_msg = re.sub(pattern, replace_match, info_msg, flags=re.IGNORECASE)
            service["info_msg"] = info_msg
            return

        # Handle balance amount pattern
        if "balance amount" in info_msg.lower() or "balance amt" in info_msg.lower():
            match = re.search(r"\{([^}]+)\}", info_msg)
            if not match:
                return

            placeholder = match.group(1)
            full_placeholder = match.group(0) 
            balance_amount = None

            if disbursement_id:
                disbursement_id = disbursement_id if isinstance(disbursement_id, int) else disbursement_id[3::]
                dis_obj = db.query(TxnDisbursement).filter(
                    TxnDisbursement.disbursement_seq == disbursement_id
                ).first()
                if dis_obj:
                    col_type = 'vsl_dtls' if disbursement_type.lower() == 'pda' else 'fda_vsl_dtls'
                    vessel_obj = db.query(getattr(PdaVesselDetails, col_type))\
                                   .filter(PdaVesselDetails.pda_vsl_id == dis_obj.pda_vsl_id)\
                                   .first()
                    if vessel_obj:
                        vessel_data = vessel_obj[0]
                        additional_props = vessel_data.get('additional_properties', {})
                        balance_amount = next(
                            (value for key, value in additional_props.items()
                            if key.lower() == placeholder.lower()),
                            None
                        )

            if not balance_amount:
                balance_amount = get_vessel_attr(vessel, placeholder)
            if balance_amount is None:
                balance_amount = 0
            
            service["info_msg"] = info_msg.replace(full_placeholder, str(balance_amount)) if placeholder in info_msg else info_msg.replace(info_msg.split(' ')[-1], str(balance_amount))

    except Exception as e:
        logger.error(f"Error in attach_info_field: {e}")
        return

def build_variables(vessel, var_names,dto):
    variables = {}
    for name in var_names:
        if name.lower()=='volume':
            value=volume_calculate(vessel)
        elif name.lower()=='days' or name.lower()=='day':
            value=dto.vessel_stay/1440
        elif name.lower()=='hours' or name.lower()=='hour':
            value=(dto.vessel_stay/1440)*24
        elif name.lower()=='roe':
            value=getattr(dto, 'roe', 1) or 1
        else:
            logger.info(f"name in build variable {name}")
            value = get_vessel_attr(vessel, name)
        if value is None:
            continue
        try:
            value = float(value)
        except:
            pass
        variables[name] = value
        variables[name.replace(" ", "")] = value
    return variables

def extract_vsl_property(*expressions):
    vsl_property = set()
    for exp in expressions:
        if not exp:
            continue
        parts = re.split(r'[+\-*/()<>=!,]+', exp)
        for p in parts:
            p = p.strip()
            if p and not p.replace('.', '').isdigit():
                vsl_property.add(p.lower())
    return vsl_property

def get_country_obj_by_id(db,country_id: int):
    return  db.query(MaCountry).filter(MaCountry.country_id == country_id).first()
        

def evaluate_date_condition(sub,condition_str, vessel, dto):
    try:
        # Extract condition(...) content using regex
        match = re.search(r'condition\(([^)]+)\)', condition_str, re.IGNORECASE)
        if not match:
            logger.error(f"Error: Could not parse date condition format: {condition_str}")
            return {"value": 0, "formula": "invalid_condition"}
        
        content = match.group(1)  # Get content inside condition(...)
        logger.info(f"content is {content}")
        
        # Format: 'may-01<=etd and nov-30<=etd,10.18' or 'may-01<=etd<=nov-30,10.18'
        last_comma_idx = content.rfind(',')
        if last_comma_idx == -1:
            logger.error(f"Error: No value found in date condition: {condition_str}")
            return {"value": 0, "formula": "invalid_condition"}
        
        condition_part = content[:last_comma_idx].strip()
        try:
            value = float(content[last_comma_idx+1:].strip())
        except ValueError as e:
            logger.error(f"Error: Could not parse tariff value from condition: {content[last_comma_idx+1:]}")
            return {"value": 0, "formula": "invalid_value"}
        
        logger.info(f"value: {value}")
        logger.info(f"condition_part is {condition_part}")
        
        # Month map for conversion
        month_map = {
            'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
            'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12
        }
        
        # Extract date property from condition (etd, eta, or other vessel attributes)
        all_words = re.findall(r'\b\w+\b', condition_part.lower())
        date_prop = next((word for word in all_words if word not in ['and', 'or'] and word not in month_map.keys() and not word.isdigit()), 'etd')
        logger.info(f"extracted date_prop: {date_prop}")
        
        # Get date value from dto first, then vessel additional properties, then vessel attributes
        date_str = None
        target_date = None
        
        if dto:
            if hasattr(dto, date_prop):
                date_str = getattr(dto, date_prop)
            elif isinstance(dto, dict) and date_prop in dto:
                date_str = dto[date_prop]
        
        # Try to get from vessel additional properties
        if not date_str:
            vessel_dict = vessel.model_dump() if hasattr(vessel, "model_dump") else (vessel.dict() if hasattr(vessel, "dict") else vessel)
            additional_props = get_vessel_attr(vessel_dict, 'additional_properties') or {}
            if additional_props and date_prop in additional_props:
                date_str = additional_props[date_prop]
        
        # Try to get from vessel attributes
        if not date_str:
            date_str = get_vessel_attr(vessel, date_prop)
        
        logger.info(f"Found {date_prop} value: {date_str}")
        
        # Parse date to datetime
        if isinstance(date_str, datetime):
            target_date = date_str
        else:
            try:
                target_date = datetime.strptime(str(date_str), '%Y-%m-%d')
            except (ValueError, TypeError):
                try:
                    target_date = datetime.strptime(str(date_str), '%Y-%m-%d %H:%M:%S')
                except (ValueError, TypeError):
                    logger.error(f"Error: Invalid {date_prop} format: {date_str}")
                    return {"value": 0, "formula": "invalid_date"}
        
        logger.info(f"Parsed target_date: {target_date.strftime('%Y-%m-%d')}, Month-Day: {target_date.month:02d}-{target_date.day:02d}")
        
        # Extract all date conditions and operators
        parts = re.split(r'\s+(and|or)\s+', condition_part.lower())
        conditions = [parts[i].strip() for i in range(0, len(parts), 2)]  # Get conditions at even indices
        operators = [parts[i].strip() for i in range(1, len(parts), 2)]   # Get operators at odd indices
        
        logger.info(f"Extracted conditions: {conditions}")
        logger.info(f"Extracted operators: {operators}")
        
        # Get target date in MM-DD format (without year)
        target_month_day = (target_date.month, target_date.day)
        
        # Evaluate conditions with proper logical operators
        condition_results = []
        
        for cond in conditions:
            cond = cond.strip().lower()
            logger.info(f"\nEvaluating condition: '{cond}'")
            
            condition_pass = False
            
            # Pattern: mm-dd<=property<=mm-dd (CHAINED COMPARISON - range between two dates)
            # e.g., may-01<=etd<=nov-30
            if '<=' in cond:
                parts_split = cond.split('<=')
                
                # CHAINED COMPARISON: mm-dd<=property<=mm-dd (3 parts)
                if len(parts_split) == 3:
                    left_date_str = parts_split[0].strip()
                    middle_prop = parts_split[1].strip()
                    right_date_str = parts_split[2].strip()
                    
                    # Check if both ends are dates in mm-dd format
                    if re.match(r'^[a-z]{3}-\d{2}$', left_date_str) and re.match(r'^[a-z]{3}-\d{2}$', right_date_str):
                        logger.info(f"  Chained comparison: {left_date_str} <= {middle_prop} <= {right_date_str}")
                        
                        # Parse left date (range start)
                        left_month_str, left_day_str = left_date_str.split('-')
                        left_month = month_map.get(left_month_str, 1)
                        left_day = int(left_day_str)
                        left_month_day = (left_month, left_day)
                        
                        # Parse right date (range end)
                        right_month_str, right_day_str = right_date_str.split('-')
                        right_month = month_map.get(right_month_str, 1)
                        right_day = int(right_day_str)
                        right_month_day = (right_month, right_day)
                        
                        # Handle year-crossing ranges (e.g., dec-01<=etd<=apr-30)
                        # vs normal ranges (e.g., may-01<=etd<=nov-30)
                        if left_month > right_month:
                            # Year-crossing range: check if date >= start OR date <= end
                            logger.info(f"  Year-crossing range detected: {left_month_day} (Dec onwards) to {right_month_day} (up to Apr)")
                            if target_month_day >= left_month_day or target_month_day <= right_month_day:
                                condition_pass = True
                                logger.info(f"{target_month_day} is in year-crossing range (>={left_month_day} OR <={right_month_day}) is TRUE")
                            else:
                                logger.info(f"{target_month_day} is NOT in year-crossing range is FALSE")
                        else:
                            # Normal range within same year: check if date >= start AND date <= end
                            logger.info(f"  Normal range detected: {left_month_day} to {right_month_day}")
                            if target_month_day >= left_month_day and target_month_day <= right_month_day:
                                condition_pass = True
                                logger.info(f"{target_month_day} is between {left_month_day} and {right_month_day} is TRUE")
                            else:
                                logger.info(f"{target_month_day} is NOT between {left_month_day} and {right_month_day} is FALSE")
                
                # SIMPLE COMPARISON: mm-dd<=property or property<=mm-dd (2 parts)
                elif len(parts_split) == 2:
                    left_part = parts_split[0].strip()
                    right_part = parts_split[1].strip()
                    
                    # Case 1: mm-dd<=property (range start: date should be >= mm-dd)
                    if re.match(r'^[a-z]{3}-\d{2}$', left_part):
                        month_str, day_str = left_part.split('-')
                        month = month_map.get(month_str, 1)
                        day = int(day_str)
                        cond_month_day = (month, day)
                        
                        # Compare MM-DD values
                        if target_month_day >= cond_month_day:
                            condition_pass = True
                            logger.info(f"{target_month_day} >= {cond_month_day} is TRUE")
                        else:
                            logger.info(f"{target_month_day} >= {cond_month_day} is FALSE")
                    
                    # Case 2: property<=mm-dd (range end: date should be <= mm-dd)
                    elif re.match(r'^[a-z]{3}-\d{2}$', right_part):
                        month_str, day_str = right_part.split('-')
                        month = month_map.get(month_str, 1)
                        day = int(day_str)
                        cond_month_day = (month, day)
                        
                        # Compare MM-DD values
                        if target_month_day <= cond_month_day:
                            condition_pass = True
                            logger.info(f"{target_month_day} <= {cond_month_day} is TRUE")
                        else:
                            logger.info(f"{target_month_day} <= {cond_month_day} is FALSE")
            
            # Pattern: mm-dd<property<mm-dd (CHAINED) or mm-dd<property (single)
            elif '<' in cond:
                parts_split = cond.split('<')
                
                # CHAINED COMPARISON: mm-dd<property<mm-dd (3 parts)
                if len(parts_split) == 3:
                    left_date_str = parts_split[0].strip()
                    middle_prop = parts_split[1].strip()
                    right_date_str = parts_split[2].strip()
                    
                    # Check if both ends are dates in mm-dd format
                    if re.match(r'^[a-z]{3}-\d{2}$', left_date_str) and re.match(r'^[a-z]{3}-\d{2}$', right_date_str):
                        logger.info(f"  Chained comparison: {left_date_str} < {middle_prop} < {right_date_str}")
                        
                        # Parse left date (range start)
                        left_month_str, left_day_str = left_date_str.split('-')
                        left_month = month_map.get(left_month_str, 1)
                        left_day = int(left_day_str)
                        left_month_day = (left_month, left_day)
                        
                        # Parse right date (range end)
                        right_month_str, right_day_str = right_date_str.split('-')
                        right_month = month_map.get(right_month_str, 1)
                        right_day = int(right_day_str)
                        right_month_day = (right_month, right_day)
                        
                        # For chained < comparison: left < target < right
                        # This means: target > left AND target < right
                        if target_month_day > left_month_day and target_month_day < right_month_day:
                            condition_pass = True
                            logger.info(f"{target_month_day} > {left_month_day} AND {target_month_day} < {right_month_day} is TRUE")
                        else:
                            logger.info(f"{target_month_day} > {left_month_day} AND {target_month_day} < {right_month_day} is FALSE")
                
                # SIMPLE COMPARISON: mm-dd<property or property<mm-dd (2 parts)
                elif len(parts_split) == 2:
                    left_part = parts_split[0].strip()
                    right_part = parts_split[1].strip()
                    
                    # Case 1: mm-dd<property
                    if re.match(r'^[a-z]{3}-\d{2}$', left_part):
                        month_str, day_str = left_part.split('-')
                        month = month_map.get(month_str, 1)
                        day = int(day_str)
                        cond_month_day = (month, day)
                        
                        if target_month_day > cond_month_day:
                            condition_pass = True
                            logger.info(f"{target_month_day} > {cond_month_day} is TRUE")
                        else:
                            logger.info(f"{target_month_day} > {cond_month_day} is FALSE")
                    
                    # Case 2: property<mm-dd
                    elif re.match(r'^[a-z]{3}-\d{2}$', right_part):
                        month_str, day_str = right_part.split('-')
                        month = month_map.get(month_str, 1)
                        day = int(day_str)
                        cond_month_day = (month, day)
                        
                        if target_month_day < cond_month_day:
                            condition_pass = True
                            logger.info(f"{target_month_day} < {cond_month_day} is TRUE")
                        else:
                            logger.info(f"{target_month_day} < {cond_month_day} is FALSE")
            
            # Pattern: mm-dd>=property (range end: date should be <= mm-dd)
            elif '>=' in cond:
                parts_split = cond.split('>=')
                left_part = parts_split[0].strip()
                right_part = parts_split[1].strip()
                
                # Case 1: mm-dd>=property (date should be <= mm-dd)
                if re.match(r'^[a-z]{3}-\d{2}$', left_part):
                    month_str, day_str = left_part.split('-')
                    month = month_map.get(month_str, 1)
                    day = int(day_str)
                    cond_month_day = (month, day)
                    
                    if target_month_day <= cond_month_day:
                        condition_pass = True
                        logger.info(f"{target_month_day} <= {cond_month_day} is TRUE")
                    else:
                        logger.info(f"{target_month_day} <= {cond_month_day} is FALSE")
                
                # Case 2: property>=mm-dd (date should be >= mm-dd)
                elif re.match(r'^[a-z]{3}-\d{2}$', right_part):
                    month_str, day_str = right_part.split('-')
                    month = month_map.get(month_str, 1)
                    day = int(day_str)
                    cond_month_day = (month, day)
                    
                    if target_month_day >= cond_month_day:
                        condition_pass = True
                        logger.info(f"{target_month_day} >= {cond_month_day} is TRUE")
                    else:
                        logger.info(f"{target_month_day} >= {cond_month_day} is FALSE")
            
            # Pattern: mm-dd>property (exclusive less than)
            elif '>' in cond:
                parts_split = cond.split('>')
                left_part = parts_split[0].strip()
                right_part = parts_split[1].strip()
                
                # Case 1: mm-dd>property
                if re.match(r'^[a-z]{3}-\d{2}$', left_part):
                    month_str, day_str = left_part.split('-')
                    month = month_map.get(month_str, 1)
                    day = int(day_str)
                    cond_month_day = (month, day)
                    
                    if target_month_day < cond_month_day:
                        condition_pass = True
                        logger.info(f"{target_month_day} < {cond_month_day} is TRUE")
                    else:
                        logger.info(f"{target_month_day} < {cond_month_day} is FALSE")
                
                # Case 2: property>mm-dd
                elif re.match(r'^[a-z]{3}-\d{2}$', right_part):
                    month_str, day_str = right_part.split('-')
                    month = month_map.get(month_str, 1)
                    day = int(day_str)
                    cond_month_day = (month, day)
                    
                    if target_month_day > cond_month_day:
                        condition_pass = True
                        logger.info(f"{target_month_day} > {cond_month_day} is TRUE")
                    else:
                        logger.info(f"{target_month_day} > {cond_month_day} is FALSE")
            
            condition_results.append(condition_pass)
        
        # Apply logical operators to get final result
        final_result = condition_results[0] if condition_results else False
        
        for i, operator in enumerate(operators):
            if operator == 'and':
                final_result = final_result and condition_results[i + 1]
            elif operator == 'or':
                final_result = final_result or condition_results[i + 1]
        
        logger.info(f"Condition results: {condition_results}")
        logger.info(f"Final result: {final_result}")
        
        if final_result:
            sub.update({"hide": 'N'})
            return {"value": value, "formula": f"condition_passed: {value}"}
        else:
            sub.update({"hide": 'Y'})
            return {"value": 0, "formula": "condition_failed"}
        
    except Exception as e:
        logger.error(f"Error in evaluate_date_condition: {e}")
        return {"value": 0, "formula": "error"}

def services_total_calculation(services,current_service,vessel, sub, dto, db):
    total = 0
    current_service_name = current_service.get("service", "").lower() if current_service else ""
    
    # Debug: Check calculation state of each service
    all_calculated = True
    for service in services:
        for sub_service in service.get('subService', []):
            if sub_service.get('optional') == 'N':
                if 'sub_total' not in sub_service or sub_service.get('sub_total') == 0:
                    all_calculated = False
    
    if not all_calculated:
        logger.info("INCOMPLETE CALCULATION STATE - Some services not fully calculated. Result may be incorrect.")
    
    for service in services:
        service_name = service.get("service", "").lower()
        # Skip the current service to avoid circular reference
        if service_name == current_service_name:
            continue
        
        # Sum only non-optional subservice sub_totals
        service_subtotal = 0
        for sub_service in service.get('subService', []):
            if sub_service.get('optional') == 'N':
                sub_total = sub_service.get('sub_total', 0)
                if isinstance(sub_total, (int, float)) and sub_total > 0:
                    service_subtotal += sub_total
        logger.info(f"Service '{service_name}' subtotal (optional=N only): {service_subtotal}")
        total += service_subtotal
    
    return {"value": total, "formula": "All_Services"}        

def vsl_attr_and_additional_prop_separator(vsl_attr: str, vessel: Any, sub: dict) -> tuple:
    """
    Separates vessel attribute and sector from format: 'GRT|sector=value'
    Returns: (vsl_attr, should_process)
    If sector doesn't match vessel's additional_properties, sets hide='Y' and returns False
    """
    if '|' not in vsl_attr:
        return vsl_attr, True
    
    parts = vsl_attr.split('|', 1)
    base_attr = parts[0].strip()
    condition = parts[1].strip()
    
    # Parse condition: sector=value
    if '=' not in condition:
        return base_attr, True
    
    key, expected_additional_value = condition.split('=', 1) #key is addititonal key and expected_additional_value is its value
    key = key.strip()
    expected_additional_value = expected_additional_value.strip().lower()
    
    # Get actual value from vessel additional_properties

    additional_vsl_value = get_vessel_attr(vessel, key)
    
    if additional_vsl_value:
        additional_vsl_value = str(additional_vsl_value).strip().lower()
        if additional_vsl_value == expected_additional_value:
            return base_attr, True
    
    # Sector doesn't match - hide subservice
    sub.update({"hide": 'Y'})
    return base_attr, False


def discrete_value_calculation(db: Session, vsl_attr: str, service_name: str, vessel: Any, resultant_col: str, country_id: int = None, port_id: int = None, sub: dict = None) -> Dict[str, Union[float, str]]:
    """
    Retrieves a fee value based on discrete min_range matching.
    Uses specific ordering: exact match, NULL, less than, greater than.
    First preference: port_id, fallback: country_id
    """

    
    try:
        if sub and isinstance(vsl_attr, str) and '|' in vsl_attr and '=' in vsl_attr:
            logger.info(f"Sector condition detected in vsl_attr: in dataset functionality {vsl_attr}")
            vsl_attr, should_process = vsl_attr_and_additional_prop_separator(vsl_attr, vessel, sub)
            if not should_process:
                logger.info("Sector mismatch - skipping calculation")
                return {"value": 0, "formula": "sector_mismatch"}
            logger.info(f"Sector condition passed, using vsl_attr: {vsl_attr}")
        
        if isinstance(vsl_attr, (int, float)):
            vessel_val_float = float(vsl_attr)
            logger.info(f"Using numeric vsl_attr directly: {vessel_val_float}")
        elif vsl_attr.lower() == "volume":
            vessel_val_float = volume_calculate(vessel)
            logger.info(f"Calculated volume: {vessel_val_float}")
        else:
            vessel_val = get_vessel_attr(vessel, vsl_attr)
            vessel_val_float = float(vessel_val or 0)
            logger.info(f"Retrieved vessel attribute '{vsl_attr}': {vessel_val_float}")

        table_name = f"txn_{service_name.lower().replace(' ', '_')}"
        logger.info(f"Querying table: {table_name}")
        
        query = f"""
            SELECT {resultant_col}
            FROM {SCHEMA_NAME}.{table_name}
            WHERE port = :port_id
            ORDER BY
                CASE
                    WHEN min_range = FLOOR(:val) THEN 1
                    WHEN min_range < FLOOR(:val) THEN 2
                    ELSE 3
                END,
                CASE
                    WHEN min_range < FLOOR(:val) THEN min_range
                    ELSE -min_range
                END DESC
            LIMIT 1;
        """

        logger.info(f"Executing port-level query with val={vessel_val_float}, port_id={port_id}")
        result = db.execute(text(query), {"val": vessel_val_float, "port_id": port_id}).fetchone()

        if result and result[0] is not None:
            value = result[0]
            logger.info(f"Found value at port level: {value}")
        else:
            logger.info("No result at port level, trying country level")
            query = f"""
                SELECT {resultant_col}
                FROM {SCHEMA_NAME}.{table_name}
                WHERE country = :country_id
                ORDER BY
                    CASE
                        WHEN min_range = FLOOR(:val) THEN 1
                        WHEN min_range < FLOOR(:val) THEN 2
                        ELSE 3
                    END,
                    CASE
                        WHEN min_range < FLOOR(:val) THEN min_range
                        ELSE -min_range
                    END DESC
                LIMIT 1;
            """
            logger.info(f"Executing country-level query with val={vessel_val_float}, country_id={country_id}")
            result = db.execute(text(query), {"val": vessel_val_float, "country_id": country_id}).fetchone()
            value = result[0] if result and result[0] is not None else 0.0
            logger.info(f"Country level result: {value}")
            
    except (ValueError, TypeError, SQLAlchemyError) as e:
        logger.error(f"Error during discrete value calculation: {e}")
        value = 0.0

    logger.info(f"Final discrete value: {value}")
    logger.info(f"=== DISCRETE VALUE CALCULATION END ===")
    
    return {
        "value": value,
        "formula": f"Discrete:{service_name}:{resultant_col}->{value}"
    }
