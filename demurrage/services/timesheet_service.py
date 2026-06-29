import os
import re
import shutil
import fitz
import pytesseract
from pdf2image import convert_from_path
from PIL import Image

# Fallback for homebrew tesseract on macOS if not in system PATH
if not shutil.which("tesseract"):
    homebrew_tesseract = "/opt/homebrew/bin/tesseract"
    if os.path.exists(homebrew_tesseract):
        pytesseract.pytesseract.tesseract_cmd = homebrew_tesseract

def clean_time(t_str: str) -> str:
    # FUNCTION: clean_time
    # -----------------------------------------------
    # KYO: Time formats normalize karna (HH:MM or HH:MM-HH:MM)
    # -----------------------------------------------
    t_str = t_str.strip().upper()
    t_str = t_str.replace("O", "0").replace("I", "1").replace("L", "1").replace("Z", "2")
    t_str = t_str.replace(" ", "")
    
    # Match HH:MM or HH:MM-HH:MM
    match = re.search(r'(\d{2}:\d{2}(?:-\d{2}:\d{2})?)', t_str)
    if match:
        return match.group(1)
        
    # Digits fallback logic
    digits = re.sub(r'[^0-9-]', '', t_str)
    if len(digits) == 4:
        return f"{digits[:2]}:{digits[2:]}"
    elif len(digits) == 8:
        return f"{digits[:2]}:{digits[2:4]}-{digits[4:6]}:{digits[6:]}"
    return ""

def clean_date(d_str: str) -> str:
    # FUNCTION: clean_date
    # -----------------------------------------------
    # KYO: Date formats normalize karna (DD.MM.YYYY)
    # -----------------------------------------------
    d_str = d_str.strip().replace(",", ".")
    match = re.search(r'(\d{2}[./]\d{2}[./]\d{4})', d_str)
    if match:
        return match.group(1).replace("/", ".")
    # Partial date fallback (.03.2026 / 03.2026)
    match_partial = re.search(r'(\.?\d{2}\.\d{4})', d_str)
    if match_partial:
        return match_partial.group(1)
    return ""

def clean_operation(op_str: str) -> str:
    # FUNCTION: clean_operation
    # -----------------------------------------------
    # KYO: Operation text se OCR errors aur extra symbols clean karna
    # -----------------------------------------------
    op_str = re.sub(r'[|\[\]_©»~“‘’={};,\-]', '', op_str)
    words = op_str.split()
    clean_words = []
    junk_words = {"we", "ee", "oe", "oo", "co", "sf", "wf", "ef", "a", "ti", "lt"}
    for w in words:
        if w.lower() in junk_words:
            continue
        clean_words.append(w)
    return " ".join(clean_words).strip()

def is_footnote_or_garbage(op_text: str) -> bool:
    op_lower = op_text.lower()
    # Signature blocks & remarks
    if op_lower in ["master", "shipper", "master shipper", "captain", "agent", "on behalf of"]:
        return True
    if "on behalf of" in op_lower or "shipper" in op_lower:
        return True
    if "remark" in op_lower:
        return True
    # Footnote text
    if op_lower.startswith("til ") or op_lower.startswith("from "):
        if any(char.isdigit() for char in op_lower):
            return True
    words = op_lower.split()
    if "immigration" in op_lower and ("from" in words or "till" in words or "on" in words):
        return True
    if op_lower in ["unnct", "f", "zo", "fe"]:
        return True
    if len(op_text) < 3:
        return True
    return False

def is_bosp(text: str) -> bool:
    t = text.lower()
    t_clean = re.sub(r'[^a-z0-9]', '', t)
    if "bosp" in t_clean or "b0sp" in t_clean or "bospo" in t_clean or "b0spo" in t_clean:
        return True
    if "b.o.s.p" in t or "b.0s.p" in t or "b.os.p" in t:
        return True
    return False

def extract_timesheet_from_pdf(pdf_path: str) -> list:
    # FUNCTION: extract_timesheet_from_pdf
    # -----------------------------------------------
    # KYO: PDF se table structure aur content extract karna coordinate layout logic se
    # -----------------------------------------------
    images = convert_from_path(pdf_path, dpi=300)
    all_operations = []
    
    for page_idx, img in enumerate(images):
        w, h = img.size
        # Resize dynamically to improve OCR resolution on small elements/times
        large_img = img.resize((w * 2, h * 2))
        gray = large_img.convert("L")
        
        W, H = large_img.size
        
        # Word-level layout details fetch karo
        data = pytesseract.image_to_data(gray, output_type=pytesseract.Output.DICT)
        
        # Dynamically find the bottom of the header section
        header_bottom_y = 0
        header_keywords = {"vessel", "location", "grade", "dated", "owner", "flag", "m/t", "operation", "time", "date"}
        for i in range(len(data['text'])):
            txt = data['text'][i].strip().lower().rstrip(':')
            tp = data['top'][i]
            ht = data['height'][i]
            cf = data['conf'][i]
            if cf >= 15 and tp < 1800 and txt in header_keywords:
                bottom = tp + ht
                if bottom > header_bottom_y:
                    header_bottom_y = bottom
        if header_bottom_y == 0:
            header_bottom_y = 1400
            
        # Group words by line coordinates (using Tesseract snippet structure)
        groups = {}
        for i in range(len(data['text'])):
            text = data['text'][i].strip()
            if text:
                b = data['block_num'][i]
                p = data['par_num'][i]
                l = data['line_num'][i]
                key = (b, p, l)
                
                left = data['left'][i]
                top = data['top'][i]
                width = data['width'][i]
                height = data['height'][i]
                conf = data['conf'][i]
                
                # Filter out horizontal lines and low-confidence OCR noise
                is_garbage_word = False
                if conf < 15:
                    special_chars = set("*#—~§«»“‘’[]|_")
                    has_special = any(c in special_chars for c in text)
                    if has_special or width > 600:
                        is_garbage_word = True
                if is_garbage_word:
                    continue
                    
                if key not in groups:
                    groups[key] = []
                groups[key].append({
                    'text': text,
                    'left': left,
                    'top': top,
                    'width': width,
                    'height': height,
                    'center_x': left + width / 2,
                    'center_y': top + height / 2
                })
                
        # Line snippets generate karo
        snippets = []
        for key, g_words in groups.items():
            g_words.sort(key=lambda w: w['left'])
            snippet_text = " ".join(w['text'] for w in g_words)
            
            s_left = min(w['left'] for w in g_words)
            s_top = min(w['top'] for w in g_words)
            s_right = max(w['left'] + w['width'] for w in g_words)
            s_bottom = max(w['top'] + w['height'] for w in g_words)
            
            snippets.append({
                'text': snippet_text,
                'left': s_left,
                'top': s_top,
                'width': s_right - s_left,
                'height': s_bottom - s_top,
                'center_x': s_left + (s_right - s_left) / 2,
                'center_y': s_top + (s_bottom - s_top) / 2,
                'words': g_words
            })
            
        snippets.sort(key=lambda s: s['center_y'])
        
        # Column bounds define karo
        col_split_1 = 0.60 * W
        col_split_2 = 0.80 * W
        
        # Snippets ko vertically aligned rows mein cluster karo (Anchored to avoid vertical drift)
        rows = []
        threshold = 50  # Alignment misalignment margin
        
        for s in snippets:
            s_col = 0 if s['center_x'] < col_split_1 else (1 if s['center_x'] < col_split_2 else 2)
            placed = False
            
            for r in rows:
                # Column check to prevent merging multiple items of same column (avoid row vertical merging)
                has_same_col = any(
                    (0 if snp['center_x'] < col_split_1 else (1 if snp['center_x'] < col_split_2 else 2)) == s_col
                    for snp in r['snippets']
                )
                if not has_same_col and abs(s['center_y'] - r['snippets'][0]['center_y']) <= threshold:
                    r['snippets'].append(s)
                    placed = True
                    break
                    
            if not placed:
                rows.append({
                    'snippets': [s]
                })
                
        # Group words by columns inside each row
        parsed_lines = []
        for r in rows:
            op_words = []
            time_words = []
            date_words = []
            
            row_words = []
            for s in r['snippets']:
                row_words.extend(s['words'])
                
            row_words.sort(key=lambda w: w['left'])
            
            for w in row_words:
                cx = w['center_x']
                text = w['text']
                
                is_time_or_date_candidate = (cx >= col_split_1)
                if is_time_or_date_candidate:
                    has_digits = any(c.isdigit() for c in text)
                    has_ocr_digits = any(c in "OILZ" for c in text.upper()) and len(text) >= 3
                    if not (has_digits or has_ocr_digits):
                        is_time_or_date_candidate = False
                        
                if not is_time_or_date_candidate:
                    op_words.append(text)
                elif cx < col_split_2:
                    time_words.append(text)
                else:
                    date_words.append(text)
                    
            op_text = " ".join(op_words).strip()
            time_text = " ".join(time_words).strip()
            date_text = " ".join(date_words).strip()
            
            if op_text or time_text or date_text:
                parsed_lines.append({
                    'center_y': r['snippets'][0]['center_y'],
                    'op': op_text,
                    'time': time_text,
                    'date': date_text
                })
                
        parsed_lines.sort(key=lambda pl: pl['center_y'])
        
        # Cleanup rows and filter out table headers
        for pl in parsed_lines:
            # Ignore anything above the table headers
            if pl['center_y'] < header_bottom_y:
                continue
                
            is_header = False
            text_lower = (pl['op'] + " " + pl['time'] + " " + pl['date']).lower()
            
            header_patterns = [
                "agent's time sheet",
                "primorsk marine",
                "m/t:", "e.o.s.p:",
                "flag:", "n.o.r. tendered:",
                "owner:", "n.o.r. accepted:",
                "berthed:", "page 1",
                "cargo to load:", "operation time date",
                "vessel:", "location:", "grade:", "dated:",
                "agent's remarks:", "underwater survey",
                "inward clearance by immigration"
            ]
            
            if any(pat in text_lower for pat in header_patterns):
                if "free pratique" in text_lower:
                    pass
                else:
                    is_header = True
                    
            if is_header:
                continue
                
            c_op = clean_operation(pl['op'])
            if is_footnote_or_garbage(c_op):
                continue
                
            c_time = clean_time(pl['time'])
            c_date = clean_date(pl['date'])
            
            if c_op:
                all_operations.append({
                    'operation': c_op,
                    'time': c_time,
                    'date': c_date
                })
                if is_bosp(c_op):
                    # Stop parsing this page after B.O.S.P is reached
                    break
                
    return all_operations
