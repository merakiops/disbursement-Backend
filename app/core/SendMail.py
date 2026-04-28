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
from typing import Union,List, Optional, Dict
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from jinja2 import Template
import logging
# Load environment variables
load_dotenv()


# Load environment variables
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))




# Fetch database Email Credentials  from AWS Secret Manager or environment variables
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD =os.getenv("EMAIL_PASSWORD")

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
    def send_template_email(
        to_email: Union[str, list], 
        subject: str, 
        template_name: Optional[str] = None, 
        context: Dict = None, 
        template_type: str = "plain",
        cc_email: Union[str, List[str]] = None,
        message: Optional[str] = None
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

            # Create email
            msg = MIMEMultipart()
            msg["From"] = EMAIL_ADDRESS
            msg["To"] = ", ".join(to_email)
            if cc_email:
                msg["Cc"] = ", ".join(cc_email)
            msg["Subject"] = subject
            msg.attach(MIMEText(email_body, "html" if template_type == "html" else "plain"))

            # Send email via SMTP
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()  # Secure connection
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.sendmail(EMAIL_ADDRESS, recipients, msg.as_string())

            print(f"Email sent to {', '.join(to_email)} with CC to {', '.join(cc_email) if cc_email else 'None'}")
        except Exception as e:
            print(f"Email sending failed: {e}")  # Print error for debugging
            raise HTTPException(status_code=500, detail=f"Failed to send email")
