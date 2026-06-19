from datetime import datetime
from typing import List

def calculate_time_used_hours(start_time: datetime, end_time: datetime) -> float:
    """
    Calculates time difference between end_time and start_time in hours.
    """
    if not start_time or not end_time:
        return 0.0
    
    diff = end_time - start_time
    # Convert seconds to hours
    hours = diff.total_seconds() / 3600.0
    return hours


def calculate_total_deductions_hours(deduction_times: List[float]) -> float:
    """
    Sum of all deduction times in hours.
    """
    return sum(deduction_times)


def calculate_demurrage_time(
    total_used_laytime: float, 
    total_deductions: float, 
    allowed_laytime_hours: float
) -> float:
    """
    Formula: demurrage_time = max(0.0, total_used_laytime - total_deductions - allowed_laytime)
    """
    net_used = total_used_laytime - total_deductions
    demurrage = net_used - allowed_laytime_hours
    return max(0.0, demurrage)


def calculate_gross_demurrage_cost(
    demurrage_time_hours: float, 
    demurrage_rate_usd_per_day: float
) -> float:
    """
    Formula: gross_demurrage_cost = (demurrage_time * demurrage_rate_usd_per_day) / 24
    """
    cost = (demurrage_time_hours * demurrage_rate_usd_per_day) / 24.0
    return cost


def calculate_add_commission(
    gross_demurrage_cost: float, 
    address_commission_percent: float
) -> float:
    """
    Formula: add_commission = (-gross_demurrage_cost) * (address_commission_percent / 100)
    Note: Calculated as a negative value representing a discount/reduction.
    """
    commission = (-gross_demurrage_cost) * (address_commission_percent / 100.0)
    return commission


def calculate_net_demurrage(
    gross_demurrage_cost: float, 
    undisputed_demurrage_paid: float, 
    add_commission: float
) -> float:
    """
    Formula: net_demurrage = gross_demurrage_cost - undisputed_demurrage_paid + add_commission
    Note: add_commission is negative, so adding it reduces the net demurrage.
    """
    net = gross_demurrage_cost - undisputed_demurrage_paid + add_commission
    return net
