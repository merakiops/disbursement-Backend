import sys
import os
import argparse
from datetime import datetime

# Add root directory to sys.path to allow app imports
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from sqlalchemy.orm import sessionmaker
from app.db import engine
from app.models.txn_pa_form_otp import TxnPAFormOTP

def get_latest_otp(uuid=None, seq=None, email=None):
    SessionLocal = sessionmaker(bind=engine)
    db = SessionLocal()
    try:
        query = db.query(TxnPAFormOTP)

        if uuid:
            query = query.filter(TxnPAFormOTP.uuid == uuid.strip())
        elif seq:
            query = query.filter(TxnPAFormOTP.disbursement_seq == int(seq))
        elif email:
            query = query.filter(TxnPAFormOTP.email.ilike(f"%{email.strip()}%"))

        # Get latest record sorted by expires_at descending
        record = query.order_by(TxnPAFormOTP.expires_at.desc()).first()

        if not record:
            print("\n❌ No OTP record found for the given criteria.")
            return None

        print("\n" + "=" * 50)
        print("🔑 OTP DETAILS FROM DATABASE")
        print("=" * 50)
        print(f"  OTP Code         : {record.otp}")
        print(f"  User UUID        : {record.uuid}")
        print(f"  Disbursement Seq : {record.disbursement_seq}")
        print(f"  Email Address    : {record.email}")
        print(f"  Status           : {record.status}")
        print(f"  Expires At       : {record.expires_at}")
        
        # Check if expired
        is_expired = record.expires_at < datetime.now() if record.expires_at else True
        print(f"  Is Expired       : {'YES ❌' if is_expired else 'NO (Active) ✅'}")
        print("=" * 50 + "\n")

        return record.otp
    except Exception as e:
        print(f"\n❌ Error fetching OTP: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Fetch original OTP code from database")
    parser.add_argument("--uuid", help="User UUID returned from validate_pda_link")
    parser.add_argument("--seq", help="Disbursement Sequence ID (e.g. 885)")
    parser.add_argument("--email", help="Email address")

    args = parser.parse_args()
    get_latest_otp(uuid=args.uuid, seq=args.seq, email=args.email)






# 💻 How to Run:
# 1. Sabse Latest Active OTP Fetch karne ke liye:
# bash
# python3 scripts/get_otp.py
# 2. Specific user_uuid ke liye OTP Fetch karne ke liye:
# bash
# python3 scripts/get_otp.py --uuid d7249cfc-b795-403e-8542-9b5da32e282c
# 3. Specific Disbursement ID (disbursement_seq) ke liye OTP Fetch karne ke liye:
# bash
# python3 scripts/get_otp.py --seq 885
# 4. Specific Email Address ke liye OTP Fetch karne ke liye:
# bash
# python3 scripts/get_otp.py --email abhaymishraspn96@gmail.com


