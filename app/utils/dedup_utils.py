from typing import List, Any, Set, Tuple
import re

def normalize_string(val: Any) -> str:
    if val is None:
        return ""
    return str(val).strip().lower()

def normalize_agent_name(val: Any) -> str:
    if val is None:
        return ""
    val_str = str(val).strip().lower()
    
    # Remove common punctuation
    val_str = re.sub(r'[^\w\s]', ' ', val_str)
    
    # Common corporate and shipping suffixes to remove to find the core name
    # We use word boundaries \b so we don't accidentally remove parts of a name
    suffixes = [
        r'\bpvt\b', r'\bltd\b', r'\bllc\b', r'\binc\b', r'\bco\b', 
        r'\bcorporation\b', r'\bcorp\b', r'\bshipping\b', r'\bmarine\b', 
        r'\bmaritime\b', r'\bagency\b', r'\bagencies\b', r'\bprivate\b',
        r'\blimited\b', r'\bship\b', r'\bmanagement\b', r'\bgroup\b'
    ]
    
    for suffix in suffixes:
        val_str = re.sub(suffix, '', val_str)
        
    # Remove extra whitespaces
    val_str = re.sub(r'\s+', ' ', val_str).strip()
    return val_str

def get_date_str(val: Any) -> str:
    if not val:
        return ""
    if hasattr(val, "isoformat"):
        return val.isoformat()[:10]
    val_str = str(val)
    if len(val_str) >= 10:
        return val_str[:10]
    return val_str

def extract_field(record: Any, field_names: List[str]) -> Any:
    for field in field_names:
        if isinstance(record, dict) and field in record:
            return record[field]
        if hasattr(record, field) and getattr(record, field) is not None:
            return getattr(record, field)
    return None

def get_record_key(record: Any) -> Tuple:
    vessel = extract_field(record, ["vessel_name", "vessel"])
    country = extract_field(record, ["country_name", "country"])
    port = extract_field(record, ["port_name", "port"])
    etd = extract_field(record, ["etd", "arrival_local", "eta"])
    voyage_no = extract_field(record, ["voyage_no", "voyage"])
    port_agent = extract_field(record, ["port_agent", "agent", "vendor_short_name"])
    
    return (
        normalize_string(vessel),
        normalize_string(country),
        normalize_string(port),
        get_date_str(etd),
        normalize_string(voyage_no),
        normalize_agent_name(port_agent)
    )

def deduplicate_records(records: List[Any]) -> List[Any]:
    seen_keys = set()
    deduped_list = []
    
    for record in records:
        key = get_record_key(record)
        if key not in seen_keys:
            seen_keys.add(key)
            deduped_list.append(record)
            
    return deduped_list
