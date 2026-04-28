from app.tariff_rule_calculation.all_calculation import handle_formula_section,get_vessel_attr

def handle_tunisia_tariff_range(db, vsl_attr, service_name, vessel, resultant_col, dto):
    vol=["LOA","BEAM","DEPTH"]
    if vsl_attr.lower()=='volume':
        vsl_attr=1
        for i in vol:
            vsl_attr*=get_vessel_attr(vessel,i)
    value=handle_formula_section(db, vsl_attr, service_name, vessel, resultant_col, dto)
    
    return {
        'value': value,
        'formula': f"{vsl_attr}=>{value}"
    }


