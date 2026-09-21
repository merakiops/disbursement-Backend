from typing import List, Any, Set, Tuple
import re

_PUNCTUATION_RE = re.compile(r'[^\w\s]')
_WHITESPACE_RE = re.compile(r'\s+')
_SUFFIXES = [
    r'\bpvt\b', r'\bltd\b', r'\bllc\b', r'\binc\b', r'\bco\b', 
    r'\bcorporation\b', r'\bcorp\b', r'\bshipping\b', r'\bmarine\b', 
    r'\bmaritime\b', r'\bagency\b', r'\bagencies\b', r'\bprivate\b',
    r'\blimited\b', r'\bship\b', r'\bmanagement\b', r'\bgroup\b'
]
_SUFFIX_RES = [re.compile(s) for s in _SUFFIXES]

def normalize_string(val: Any) -> str:
    if val is None:
        return ""
    return str(val).strip().lower()

def normalize_agent_name(val: Any) -> str:
    if val is None:
        return ""
    val_str = str(val).strip().lower()
    
    # Remove common punctuation
    val_str = _PUNCTUATION_RE.sub(' ', val_str)
    
    # Common corporate and shipping suffixes to remove to find the core name
    for suffix_re in _SUFFIX_RES:
        val_str = suffix_re.sub('', val_str)
        
    # Remove extra whitespaces
    val_str = _WHITESPACE_RE.sub(' ', val_str).strip()
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
    client_id = extract_field(record, ["client_id", "client", "company_id"])
    vessel = extract_field(record, ["vessel_name", "vessel"])
    port = extract_field(record, ["port_name", "port"])
    port_agent = extract_field(record, ["port_agent", "agent", "vendor_short_name"])
    eta = extract_field(record, ["eta", "arrival_local"])
    etd = extract_field(record, ["etd", "departure_local"])
    purpose = extract_field(record, ["purpose", "purpose_name"])
    
    return (
        normalize_string(client_id),
        normalize_string(vessel),
        normalize_string(port),
        normalize_agent_name(port_agent),
        get_date_str(eta),
        get_date_str(etd),
        normalize_string(purpose)
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
