"""
Author: Punith
Date: January 15, 2025
Description:
    This module provides email sending functionalities using SMTP.
    Supports plain text emails, registration emails, and template-based emails.
"""

import smtplib
from dotenv import load_dotenv
import os
from fastapi import HTTPException
from typing import Union, List, Optional, Dict, Any, Tuple
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from jinja2 import Template
import logging
logger = logging.getLogger("app_logger")
# Load environment variables
load_dotenv()

def _get_clean_env(key: str) -> Optional[str]:
    val = os.getenv(key)
    if not val:
        return None
    val = val.strip().strip('"').strip("'")
    if "not_configured" in val or "your_email_here" in val:
        return None
    return val

def get_smtp_config():
    server = _get_clean_env("SMTP_HOST") or _get_clean_env("SMTP_SERVER") or "smtp.gmail.com"
    port = int(_get_clean_env("SMTP_PORT") or 587)
    email = _get_clean_env("SMTP_USER") or _get_clean_env("EMAIL_ADDRESS")
    raw_pass = _get_clean_env("SMTP_PASS") or _get_clean_env("EMAIL_PASSWORD")
    password = raw_pass.replace(" ", "") if raw_pass else None
    return server, port, email, password

SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD = get_smtp_config()

# Define email templates directory
# TEMPLATE_DIR = "email_templates"
TEMPLATE_DIR = "templates/email_templates"
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class SendMail:
    """
    A utility class for sending emails via SMTP.
    Supports sending plain text emails, registration emails, and template-based emails.
    """

    #Function to Sends a plain text email to one or more recipients.
    @staticmethod
    def send_email(to_email: Union[str, list], subject: str, message: str, cc: Optional[Union[str, list]] = None):
        """
        Sends an email to one or more recipients.

        :param to_email: Single email address (str) or list of email addresses.
        :param subject: Subject of the email.
        :param message: Body of the email.
        :param cc: Single email (str) or list of emails (optional).
        """
        try:
            # Always normalize to list
            if isinstance(to_email, str):
                to_email = [e.strip() for e in to_email.split(",") if e.strip()]

            if cc is None:
                cc = []
            elif isinstance(cc, str):
                cc = [e.strip() for e in cc.split(",") if e.strip()]

            all_recipients = to_email + cc

            # Construct the email
            msg = MIMEMultipart()
            msg["From"] = EMAIL_ADDRESS
            msg["To"] = ", ".join(to_email)
            if cc:
                msg["Cc"] = ", ".join(cc)
            msg["Subject"] = subject
            msg.attach(MIMEText(message, "plain"))

            # Send email
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.sendmail(EMAIL_ADDRESS, all_recipients, msg.as_string())

            print(f"Email sent to {', '.join(to_email)} with CC: {', '.join(cc)}")

        except Exception as e:
            logging.error(f"Failed to send email", exc_info=True)

        
    @staticmethod
    def send_regemail(to_email: Union[str, list], subject: str, message: str):
        """
        Sends an email to one or more recipients.

        :param to_email: Single email address (str) or list of email addresses (list of str).
        :param subject: Subject of the email.
        :param message: Body of the email.
        :raises HTTPException: If an error occurs while sending the email.
        """
        try:
            # If to_email is a single string, convert it to a list
            if isinstance(to_email, str):
                to_email = [to_email]  # Ensure it's a list

            # Create email message
            msg = MIMEMultipart()
            msg["From"] = EMAIL_ADDRESS
            msg["To"] = ", ".join(to_email)  # Join recipients with a comma
            msg["Subject"] = subject
           
            msg.attach(MIMEText(message, "plain"))
            # Establish connection and send email
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()  # Start TLS for security
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)  # Login to the email server
                server.sendmail(EMAIL_ADDRESS, to_email, msg.as_string())  # Send email to multiple recipients

            print(f"Email sent to {', '.join(to_email)}")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to send email")
    
    # For using Template while sending mail
    @staticmethod
    def _extract_attachment_data(att: Any, db: Any = None) -> Tuple[Optional[str], Optional[bytes]]:
        import base64
        import os
        import urllib.request

        filename = None
        file_bytes = None

        if isinstance(att, (tuple, list)):
            if len(att) >= 2:
                filename = str(att[0])
                data = att[1]
                if isinstance(data, bytes):
                    file_bytes = data
                elif isinstance(data, str):
                    if os.path.exists(data):
                        try:
                            with open(data, "rb") as f:
                                file_bytes = f.read()
                        except Exception:
                            pass
                    elif data.startswith("http://") or data.startswith("https://"):
                        try:
                            req = urllib.request.urlopen(data)
                            file_bytes = req.read()
                        except Exception:
                            pass
                    else:
                        try:
                            b64_str = data.split(",")[-1]
                            file_bytes = base64.b64decode(b64_str)
                        except Exception:
                            file_bytes = data.encode("utf-8")
        elif isinstance(att, dict):
            filename = att.get("name") or att.get("filename") or att.get("file_name") or "attachment.pdf"
            file_id = att.get("file_id")
            complete_file_path = att.get("complete_file_path") or att.get("file_path") or att.get("path")
            url = att.get("url") or att.get("presigned_url")
            
            file_obj = att.get("file") if att.get("file") is not None else att.get("content") or att.get("data")
            if isinstance(file_obj, dict):
                file_obj = file_obj.get("content") or file_obj.get("data") or file_obj.get("base64") or file_obj.get("path") or file_obj.get("url") or file_obj.get("bytes")

            # 1. Check if direct bytes or non-empty base64 string/path
            if isinstance(file_obj, bytes):
                file_bytes = file_obj
            elif isinstance(file_obj, str) and len(file_obj.strip()) > 0:
                if os.path.exists(file_obj):
                    try:
                        with open(file_obj, "rb") as f:
                            file_bytes = f.read()
                    except Exception:
                        pass
                elif file_obj.startswith("http://") or file_obj.startswith("https://"):
                    try:
                        req = urllib.request.urlopen(file_obj)
                        file_bytes = req.read()
                    except Exception:
                        pass
                else:
                    try:
                        b64_str = file_obj.split(",")[-1]
                        file_bytes = base64.b64decode(b64_str)
                    except Exception:
                        file_bytes = file_obj.encode("utf-8")

            # 2. Check direct URL if file_bytes is still None
            if not file_bytes and url and isinstance(url, str):
                try:
                    req = urllib.request.urlopen(url)
                    file_bytes = req.read()
                except Exception:
                    pass

            # 3. Check complete_file_path in S3 if file_bytes is still None
            if not file_bytes and complete_file_path and isinstance(complete_file_path, str):
                try:
                    from app.repo.file_upload import FileUploadRepository, BUCKET_NAME
                    s3_client = FileUploadRepository.get_s3_client()
                    response = s3_client.get_object(Bucket=BUCKET_NAME, Key=complete_file_path)
                    file_bytes = response['Body'].read()
                except Exception as s3_err:
                    logger.warning(f"Failed to fetch S3 object {complete_file_path}: {s3_err}")

            # 4. Lookup TxnDisbursementFiles table or generate report PDF if db is provided
            if not file_bytes and db is not None:
                try:
                    import re
                    import json
                    from app.repo.file_upload import FileUploadRepository, BUCKET_NAME
                    from app.models.txn_disbursement_files import TxnDisbursementFiles

                    # Check if filename is a generated report (e.g. MDA830_PDA.pdf or MDA830_FDA.pdf)
                    match = re.search(r'MDA(\d+)_(PDA|FDA)', filename, re.IGNORECASE) if filename else None
                    if match:
                        seq_id = int(match.group(1))
                        rep_type = match.group(2).upper()
                        try:
                            from app.dto.vw_report_dto import PdaReportRequestDTO
                            from app.services.report_service_impl import PdaReportServiceImpl
                            from jinja2 import Environment, FileSystemLoader
                            from sqlalchemy.inspection import inspect

                            pda_report_service = PdaReportServiceImpl()
                            dto_rep = PdaReportRequestDTO(disbursement_seq=seq_id, report_type=rep_type)
                            report = pda_report_service.get_rep_deatils_by_id(dto_rep, db)
                            if report:
                                report_dict = {c.key: getattr(report, c.key) for c in inspect(report).mapper.column_attrs}
                                BASE_DIR = os.path.abspath(os.path.dirname(__file__))
                                TEMPLATE_DIR = os.path.join(BASE_DIR, "..", "templates", "Report_templates")
                                env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
                                template_name = "pda_report_template.html" if rep_type == "PDA" else "fda_report_template.html"
                                template = env.get_template(template_name)
                                
                                service_data = report_dict.get("service_charge")
                                if isinstance(service_data, str):
                                    try:
                                        report_dict["service_charge"] = json.loads(service_data)
                                    except Exception:
                                        report_dict["service_charge"] = []
                                elif service_data is None:
                                    report_dict["service_charge"] = []

                                system_service_data = report_dict.get("system_service_charge")
                                if isinstance(system_service_data, str):
                                    try:
                                        report_dict["system_service_charge"] = json.loads(system_service_data)
                                    except Exception:
                                        report_dict["system_service_charge"] = []
                                elif system_service_data is None:
                                    report_dict["system_service_charge"] = []

                                report_dict = pda_report_service.chunk_service_items(report_dict)
                                html_content = template.render(**report_dict)
                                css_path = os.path.join(TEMPLATE_DIR, "report_styles.css")
                                
                                try:
                                    from weasyprint import HTML, CSS
                                    file_bytes = HTML(string=html_content, base_url=TEMPLATE_DIR).write_pdf(
                                        stylesheets=[CSS(filename=css_path)]
                                    )
                                except Exception as weasy_err:
                                    logger.warning(f"Weasyprint PDF generation error: {weasy_err}")
                        except Exception as gen_err:
                            logger.warning(f"Failed to generate report PDF for {filename}: {gen_err}")

                    # If not a generated report or generation failed, query TxnDisbursementFiles table
                    if not file_bytes:
                        db_file = None
                        if file_id:
                            db_file = db.query(TxnDisbursementFiles).filter(
                                TxnDisbursementFiles.file_id == file_id,
                                TxnDisbursementFiles.is_deleted == 'N'
                            ).first()
                        elif filename:
                            # 1. Exact match
                            db_file = db.query(TxnDisbursementFiles).filter(
                                TxnDisbursementFiles.file_name == filename,
                                TxnDisbursementFiles.is_deleted == 'N'
                            ).order_by(TxnDisbursementFiles.file_id.desc()).first()

                            # 2. Fuzzy match by filename without extension
                            if not db_file:
                                clean_name = filename.rsplit('.', 1)[0] if '.' in filename else filename
                                db_file = db.query(TxnDisbursementFiles).filter(
                                    TxnDisbursementFiles.file_name.ilike(f"%{clean_name}%"),
                                    TxnDisbursementFiles.is_deleted == 'N'
                                ).order_by(TxnDisbursementFiles.file_id.desc()).first()

                        if db_file and db_file.complete_file_path:
                            s3_client = FileUploadRepository.get_s3_client()
                            response = s3_client.get_object(Bucket=BUCKET_NAME, Key=db_file.complete_file_path)
                            file_bytes = response['Body'].read()
                except Exception as db_s3_err:
                    logger.warning(f"Failed to fetch file from DB/S3 for {filename} / {file_id}: {db_s3_err}")

        elif isinstance(att, str):
            if os.path.exists(att):
                filename = os.path.basename(att)
                try:
                    with open(att, "rb") as f:
                        file_bytes = f.read()
                except Exception:
                    pass

        return filename, file_bytes

    @staticmethod
    def send_template_email(
        to_email: Union[str, list], 
        subject: str, 
        template_name: Optional[str] = None, 
        context: Dict = None, 
        template_type: str = "plain",
        cc_email: Union[str, List[str]] = None,
        message: Optional[str] = None,
        attachments: Optional[List[Any]] = None
    ):
        """
        Sends an email with an optional template (only for HTML) or a direct plain text message.

        :param to_email: Single email address (str) or list of email addresses.
        :param subject: Subject of the email.
        :param template_name: Name of the email template (only for HTML).
        :param context: Dictionary for template rendering (only for HTML).
        :param template_type: "plain" or "html".
        :param cc_email: Optional CC email(s).
        :param message: Direct message for plain text emails.
        :param attachments: Optional list of attachments (dict/tuple/base64/bytes/path).
        """
        try:
            if isinstance(to_email, str):
                to_email = [to_email]  # Ensure list format
            
            # Ensure cc_email is a list if provided
            if cc_email:
                if isinstance(cc_email, str):
                    cc_email = [cc_email]
            else:
                cc_email = []

            recipients = to_email + cc_email  # Combine recipients

            # Process email body
            if template_type == "html":
                if not template_name:
                    raise ValueError("Template name is required for HTML emails.")
                
                # Load template file
                APP_DIR = os.path.join(BASE_DIR, "..")
                # TEMPLATE_DIR = os.path.join(APP_DIR, "email_templates")
                TEMPLATE_DIR = os.path.join(APP_DIR, "templates/email_templates")
                template_path = os.path.join(TEMPLATE_DIR, template_name)

                if not os.path.exists(template_path):
                    raise HTTPException(status_code=400, detail=f"Template '{template_name}' not found.")

                with open(template_path, "r", encoding="utf-8") as file:
                    template_content = file.read()

                # Render template using Jinja2
                template = Template(template_content)
                email_body = template.render(context or {})
            else:
                # Use direct message for plain text emails
                if not message:
                    raise ValueError("Message is required for plain text emails.")
                email_body = message

            smtp_server, smtp_port, email_address, email_password = get_smtp_config()

            if not email_address or not email_password:
                logger.error(f"Cannot send email: SMTP credentials incomplete (email: {email_address}, password set: {bool(email_password)})")
                raise ValueError("SMTP credentials not properly configured on server.")

            # Create email
            msg = MIMEMultipart()
            msg["From"] = email_address
            msg["To"] = ", ".join(to_email)
            if cc_email:
                msg["Cc"] = ", ".join(cc_email)
            msg["Subject"] = subject
            msg.attach(MIMEText(email_body, "html" if template_type == "html" else "plain"))

            # Process attachments if provided
            if attachments:
                for att in attachments:
                    try:
                        filename, file_bytes = SendMail._extract_attachment_data(att)
                        if file_bytes and filename:
                            part = MIMEApplication(file_bytes, Name=filename)
                            part['Content-Disposition'] = f'attachment; filename="{filename}"'
                            msg.attach(part)
                    except Exception as att_err:
                        logger.error(f"Failed to attach file {att}: {att_err}")

            # Send email via SMTP
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()  # Secure connection
                server.login(email_address, email_password)
                server.sendmail(email_address, recipients, msg.as_string())

            logger.info(f"Email sent to {', '.join(to_email)} with CC to {', '.join(cc_email) if cc_email else 'None'}")
        except Exception as e:
            logger.error(f"Failed to send template email to {to_email}: {e}", exc_info=True)
            raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

    @staticmethod
    def send_email_with_pdf(
        to_email: Union[str, list],
        subject: str,
        html_body: str,
        pdf_bytes: Optional[bytes] = None,
        pdf_filename: str = "FDA_Report.pdf",
        cc_email: Optional[Union[str, list]] = None
    ):
        """
        Sends an HTML email with optional PDF attachment.
        """
        try:
            if isinstance(to_email, str):
                to_email = [e.strip() for e in to_email.split(",") if e.strip()]
            if isinstance(cc_email, str):
                cc_email = [e.strip() for e in cc_email.split(",") if e.strip()]
            elif cc_email is None:
                cc_email = []

            recipients = to_email + cc_email

            msg = MIMEMultipart()
            msg["From"] = EMAIL_ADDRESS
            msg["To"] = ", ".join(to_email)
            if cc_email:
                msg["Cc"] = ", ".join(cc_email)
            msg["Subject"] = subject

            # Attach HTML Body
            msg.attach(MIMEText(html_body, "html"))

            # Attach PDF if provided
            if pdf_bytes:
                part = MIMEApplication(pdf_bytes, Name=pdf_filename)
                part['Content-Disposition'] = f'attachment; filename="{pdf_filename}"'
                msg.attach(part)

            # Send email via SMTP
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.sendmail(EMAIL_ADDRESS, recipients, msg.as_string())

            print(f"FDA Email sent with PDF attachment to {', '.join(to_email)}")
        except Exception as e:
            logging.error("Failed to send email with PDF", exc_info=True)
            raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
