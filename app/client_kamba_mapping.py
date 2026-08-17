"""
Client-Kamba Mapping Configuration

Maps prod.ma_company.company_id to kamba_data_prod.companies.id
This allows fetching data from both schemas for the same client.

Clients:
- ESDMCC (Eiger Shipping DMCC): prod active=83, prod old=5 → kamba=1
- ESSA (Eiger Shipping SA): prod active=75, prod old=3 → kamba=2
- LME (LME Energy DMCC): prod=86 → kamba=6
- ALGHAF (Alghaf Marine DMCC): prod=2 → kamba=7
- NORTHWELL (Northwell DMCC): prod active=14, prod old=12 → kamba=8
"""

# Maps active prod company_id → kamba_data_prod companies_id
PROD_TO_KAMBA_MAPPING = {
    83: 1,    # Eiger Shipping DMCC (ESDMCC)
    75: 2,    # EIGER Shipping SA (ESSA)
    86: 6,    # LME Energy DMCC (LME)
    2: 7,     # ALGHAF (Alghaf Marine DMCC)
    14: 8,    # NORTHWELL (Northwell DMCC)
}

# Maps old/inactive prod company_ids to the active prod company_id
# so their data gets merged when the active client is selected
PROD_MERGED_IDS = {
    83: [5],      # ESDMCC: id=5 (old) merges into id=83 (active)
    75: [3],      # ESSA: id=3 (old) merges into id=75 (active)
    14: [12],     # NORTHWELL: id=12 (old) merges into id=14 (active)
}

# Reverse mapping: kamba companies_id → active prod company_id
KAMBA_TO_PROD_MAPPING = {v: k for k, v in PROD_TO_KAMBA_MAPPING.items()}


def get_kamba_company_id(prod_company_id):
    """Get kamba companies_id for a given prod company_id."""
    return PROD_TO_KAMBA_MAPPING.get(prod_company_id)


def get_all_prod_ids_for_client(prod_company_id):
    """
    Get all prod company_ids (active + merged old) for a given client.
    Example: for ESDMCC (83) → returns [83, 5]
    """
    ids = [prod_company_id]
    if prod_company_id in PROD_MERGED_IDS:
        ids.extend(PROD_MERGED_IDS[prod_company_id])
    return ids


def get_kamba_ids_for_client_list(client_ids_list):
    """
    Given a list of prod client_ids, return corresponding kamba companies_ids.
    Returns empty list if no mapping found.
    """
    kamba_ids = []
    for cid in client_ids_list:
        try:
            cid_int = int(cid)
        except (ValueError, TypeError):
            continue
        kamba_id = PROD_TO_KAMBA_MAPPING.get(cid_int)
        if kamba_id is not None and kamba_id not in kamba_ids:
            kamba_ids.append(kamba_id)
    return kamba_ids


def get_all_prod_ids_for_client_list(client_ids_list):
    """
    Given a list of prod client_ids, expand them to include merged old IDs.
    Example: [83, 14] → [83, 5, 14, 12]
    """
    expanded = []
    for cid in client_ids_list:
        try:
            cid_int = int(cid)
        except (ValueError, TypeError):
            continue
        all_ids = get_all_prod_ids_for_client(cid_int)
        for id_ in all_ids:
            if id_ not in expanded:
                expanded.append(id_)
    return expanded


def has_kamba_data(client_ids_list):
    """Check if any of the given prod client_ids have kamba data."""
    for cid in client_ids_list:
        try:
            if int(cid) in PROD_TO_KAMBA_MAPPING:
                return True
        except (ValueError, TypeError):
            continue
    return False
