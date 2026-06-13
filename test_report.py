"""
generate_gregal_v2.py
=====================
Gregal Demurrage Statement — Pure ReportLab (no weasyprint)
Usage: python3 generate_gregal_v2.py
Output: Gregal_Demurrage.pdf
"""

import io
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame,
    Paragraph, Spacer, Table, TableStyle, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_RIGHT

W, H = A4

# ── Palette ─────────────────────────────────────────────────────────
C_NAVY    = colors.HexColor('#0A1628')
C_STEEL   = colors.HexColor('#1A3A5C')
C_HORIZON = colors.HexColor('#2B5F8E')
C_GOLD    = colors.HexColor('#B8965A')
C_GDIM    = colors.HexColor('#8A6A3A')
C_ICE     = colors.HexColor('#EEF4FA')
C_WAKE    = colors.HexColor('#D6E6F5')
C_MSTEEL  = colors.HexColor('#4A6A8A')
C_DARK    = colors.HexColor('#1C2B3A')
C_WHITE   = colors.white
C_RULE    = colors.HexColor('#C2D4E8')
C_RED     = colors.HexColor('#A93226')
C_BLLT    = colors.HexColor('#A8C4DC')
C_MID     = colors.HexColor('#8AAAC8')
C_DOT     = colors.HexColor('#1E3A58')

HEADER_H = 4.5 * cm
PANEL_W  = 6.8 * cm

# ══════════════════════════════════════════════════════════════════════
#  DATA
# ══════════════════════════════════════════════════════════════════════

# COMPANY       = "EAKOMARINE TECHNICAL MANAGEMENT PRIVATE LIMITED"
COMPANY       = ""
COMPANY_SHORT = "EAKOMARINE"
COMPANY_SUB   = "TECHNICAL MANAGEMENT PRIVATE LIMITED"
TAGLINE       = "Ship Management   \u2022   Marine Operations   \u2022   Technical Services"
# DOC_TITLE     = "DEMURRAGE STATEMENT"
DOC_TITLE     = "DEMURRAGE STATEMENT"

VESSEL        = "Gregal"
VESSEL_CAPS   = "GREGAL"
CP_TERMS      = "EXXONMOBILVOY2005"
CP_DATE       = "01 April 2026"
REFERENCE     = "Gregal/Samaria"
CLIENT     = "EMZOIL"

VOYAGE = [
    ("Vessel Name",        "Gregal"),
    ("Charterparty",       "EXXONMOBILVOY2005"),
    ("CP Date",            "01 April 2026"),
    ("Laycan",             "24th \u2013 29th Apr 2026 TBN 1(00:01\u201323:59) IN CHOPT"),
    ("Laycan Narrowed",    "05 May 2026 (00:00\u201323:59)"),
    ("Allowed Laytime (hours)",    "96.00 hrs | SHINC"),
    ("Additional Laytime",    "7.7 hrs"),
    ("Demurrage Rate",     "USD 200,000 / Day PDPR"),
    ("Address Commission", "2.5%"),
    ("CP Speed",           "12.00\u201312.5 Knots WSNP IN CHOP"),
    ("Actual Rotation",    "YES"),
    ("Freight",            "Lumpsum USD 16,000,000  |  BSS 1:1"),
    ("Timebar Clause",            "60"),
]

PORTS = [
    {
        "title": "PORT 1 \u2014 NOVOROSSYISK  (LOAD)  |  Terminal: Sheskharis",
        "events": [
            ("Commenced Loading \u2192 Documents on Board",
             "04 May 2026  22:18", "09 May 2026  13:12", "110.90"),
        ],
        "deductions": [
            ("Document Allowance", "06 May 2026 22:54", "07 May 2026 01:54", "3", "", ""),
            ("Others", "07 May 2026 1:18", "07 May 2026 02:48", "0.75", "50%", "UAV Attack/ Half demurrage"),
        ],
        "summary": ("110.90 hrs", "\u2212 3.75 hrs", "107.15 hrs"),
    },
    {
        "title": "PORT 2 \u2014 MUNDRA  (DISCHARGE)  |  Terminal: APSEZ SPM",
        "events": [
            ("NORT \u2192 Hose Disconnected",
             "27 May 2026  21:42", "03 Jun 2026  18:18", "164.60"),
        ],
        "deductions": [
            ("First Day Window", "27 May 2026  21:42", "28 May 2026  03:42", "6.00","","NOR"),
            ("Inward Passage",   "02 Jun 2026  04:24", "02 Jun 2026  07:12", "2.80", "",""),
        ],
        "summary": ("164.60 hrs", "\u2212 8.80 hrs", "155.80 hrs"),
    },
]

LAYTIME_SUMMARY = [
    ("bg-white", "Total Gross Laytime Used (Both Ports)", "val",  "275.50 hrs"),
    ("bg-ice",   "Less: Total Deductions",               "neg",  "12.55 hrs"),
    ("bg-white", "Allowed Laytime (SHINC)",              "val",  "96 hrs"),
    ("bg-ice",   "Additional / Extra Laytime",           "val",  "7.70 hrs"),
    ("bg-wake",  "Time on Demurrage",                    "blue", "159.25 hrs"),
]

FINANCIALS = [
    ("Gross Demurrage", "USD 1,327,083.33", False),
    ("Less: Undisputed Demurrage",                          "USD 0.00",        False),
    ("Less: Address Commission @ 2.5%",                     "USD 33,177.08", True),
]

NET_LABEL = "NET DEMURRAGE DUE"
NET_VALUE = "USD 1,293,906.25"

NOTES = [
    "Laytime is calculated on a <b>SHINC reversible basis</b> across all ports as per EXXONMOBILVOY2005 Charterparty.",
    "All times are expressed in <b>local port time</b> unless otherwise stated.",
    "Deductions: First Day Window, Inward Passage, Document Allowance, Others.",
    "Demurrage accrues at <b>USD 200,000 per day</b> pro-rata (PDPR) after expiry of allowed laytime.",
    "Address Commission of <b>2.5%</b> is deducted from the gross demurrage amount.",
    "Extra Laytime of <b>7.7 hrs</b> (Early Loading allowance) included in allowed laytime calculation.",
    "This statement is subject to mutual agreement between Owners and Charterers and final audit.",
    "Any disputes shall be resolved as per the arbitration clause in the Charterparty.",
]

OUTPUT_PDF = "Gregal_Demurrage.pdf"


# ══════════════════════════════════════════════════════════════════════
#  PAGE DECORATION (header + sidebar + footer) via onPage callback
# ══════════════════════════════════════════════════════════════════════

def draw_page(canvas, doc):
    canvas.saveState()

    # Header band
    canvas.setFillColor(C_NAVY)
    canvas.rect(0, H - HEADER_H, W, HEADER_H, fill=1, stroke=0)

    # Diagonal stripes
    canvas.setStrokeColor(colors.HexColor('#122038'))
    canvas.setLineWidth(9)
    for x in range(-20, int(W) + 80, 30):
        canvas.line(x, H, x + HEADER_H, H - HEADER_H)

    # Right panel
    canvas.setFillColor(C_STEEL)
    canvas.rect(W - PANEL_W, H - HEADER_H, PANEL_W, HEADER_H, fill=1, stroke=0)

    # Gold divider
    canvas.setFillColor(C_GOLD)
    canvas.rect(W - PANEL_W - 2, H - HEADER_H, 3, HEADER_H, fill=1, stroke=0)

    # Gold bottom rule
    canvas.setFillColor(C_GOLD)
    canvas.rect(0, H - HEADER_H - 3, W, 3.5, fill=1, stroke=0)

    # Company name
    # canvas.setFont('Helvetica-Bold', 19)
    # canvas.setFillColor(C_WHITE)
    # canvas.drawString(1.8*cm, H - 1.55*cm, COMPANY_SHORT)
    # nw = canvas.stringWidth(COMPANY_SHORT, 'Helvetica-Bold', 19)
    # canvas.setFillColor(C_GOLD)
    # canvas.rect(1.8*cm, H - 1.80*cm, nw, 1.8, fill=1, stroke=0)

    # canvas.setFont('Helvetica-Bold', 9.5)
    # canvas.setFillColor(C_BLLT)
    # canvas.drawString(1.8*cm, H - 2.25*cm, COMPANY_SUB)

    # canvas.setFont('Helvetica', 7.5)
    # canvas.setFillColor(C_GOLD)
    # canvas.drawString(1.8*cm, H - 2.75*cm, TAGLINE)

    # canvas.setFillColor(C_DOT)
    # for i in range(14):
    #     canvas.circle(1.8*cm + i*0.40*cm, H - 3.20*cm, 1.8, fill=1, stroke=0)

    canvas.setFont('Helvetica-Bold', 24)
    canvas.setFillColor(C_WHITE)

    canvas.drawString(
        1.8 * cm,
        H - 2.0 * cm,
        DOC_TITLE
    )

    title_width = canvas.stringWidth(
        DOC_TITLE,
        'Helvetica-Bold',
        24
    )

    canvas.setFillColor(C_GOLD)
    canvas.rect(
        1.8 * cm,
        H - 2.25 * cm,
        title_width,
        2,
        fill=1,
        stroke=0
    )

    # Right panel text
    px = W - PANEL_W + 0.40*cm
    canvas.setFont('Helvetica-Bold', 10)
    canvas.setFillColor(C_GOLD)
    canvas.drawString(px, H - 1.60*cm, f"Vessel: {VESSEL_CAPS}")
    canvas.setStrokeColor(C_GDIM)
    canvas.setLineWidth(0.5)
    canvas.line(px, H - 2.15*cm, W - 0.5*cm, H - 2.15*cm)
    # Client Name (Bigger and Above Vessel)
    # canvas.setFont('Helvetica-Bold', 11)
    # canvas.setFillColor(C_WHITE)
    # canvas.drawString(px, H - 2.55*cm, f"Client: {CLIENT}")
    # # Vessel Details
    # canvas.setFont('Helvetica', 7)
    # canvas.setFillColor(C_MID)
    # canvas.drawString(px, H - 3.10*cm, f"Vessel: {VESSEL_CAPS}")
    # canvas.drawString(px, H - 3.45*cm, f"CP: {CP_TERMS}")
    # canvas.drawString(px, H - 3.80*cm, f"CP Date: {CP_DATE}")

    # canvas.setFont('Helvetica-Bold', 11)
    # canvas.setFillColor(C_WHITE)

    # canvas.drawString(
    #     px,
    #     H - 2.90*cm,
    #     f"Vessel: {VESSEL_CAPS}"
    # )

    # Left sidebar
    canvas.setFillColor(C_NAVY)
    canvas.rect(0, 1.42*cm, 0.85*cm, H - HEADER_H - 3 - 1.42*cm, fill=1, stroke=0)

    # Footer
    canvas.setFillColor(C_NAVY)
    canvas.rect(0, 0, W, 1.40*cm, fill=1, stroke=0)
    canvas.setFillColor(C_GOLD)
    canvas.rect(0, 1.40*cm, W, 2, fill=1, stroke=0)
    canvas.setFont('Helvetica', 6.5)
    canvas.setFillColor(C_MID)
    canvas.drawCentredString(W / 2, 0.50*cm,
        f"{COMPANY}  \u00b7  {DOC_TITLE}  \u00b7  "
        f"{VESSEL_CAPS}  \u00b7  CP: {CP_DATE}  \u00b7  CONFIDENTIAL")

    canvas.restoreState()


# ══════════════════════════════════════════════════════════════════════
#  STYLE HELPERS
# ══════════════════════════════════════════════════════════════════════

def S(name, font='Helvetica', size=9, color=None, align=TA_LEFT, leading=None, sa=0, sb=0):
    return ParagraphStyle(
        name, fontName=font, fontSize=size,
        textColor=color or C_DARK,
        alignment=align,
        leading=leading or size * 1.35,
        spaceAfter=sa, spaceBefore=sb
    )

def P(text, style):
    return Paragraph(text, style)

# Pre-built styles
lbl_s  = S('lbl',  'Helvetica-Bold', 8,    C_MSTEEL,  TA_LEFT)
val_s  = S('val',  'Helvetica',      8.5,  C_DARK,    TA_LEFT)
bold_r = S('br',   'Helvetica-Bold', 8.5,  C_DARK,    TA_RIGHT)
blue_r = S('blr',  'Helvetica-Bold', 8.5,  C_HORIZON, TA_RIGHT)
red_r  = S('redr', 'Helvetica-Bold', 8.5,  C_RED,     TA_RIGHT)
th     = S('th',   'Helvetica-Bold', 7.5,  C_WHITE,   TA_LEFT)
thr    = S('thr',  'Helvetica-Bold', 7.5,  C_WHITE,   TA_RIGHT)
tc     = S('tc',   'Helvetica',      7.5,  C_DARK,    TA_LEFT)
tcr    = S('tcr',  'Helvetica',      7.5,  C_DARK,    TA_RIGHT)
tci    = S('tci',  'Helvetica',      6.5,  C_MSTEEL,  TA_LEFT)   # italic remarks
ph_s   = S('ph',   'Helvetica-Bold', 8,    C_HORIZON, TA_LEFT,  sa=3, sb=5)
fin_l  = S('fl',   'Helvetica',      9.5,  C_DARK,    TA_LEFT)
fin_v  = S('fv',   'Helvetica-Bold', 9.5,  C_DARK,    TA_RIGHT)
fin_r  = S('fr',   'Helvetica-Bold', 9.5,  C_RED,     TA_RIGHT)
net_l  = S('nl',   'Helvetica-Bold', 12,   C_WHITE,   TA_LEFT)
net_v  = S('nv',   'Helvetica-Bold', 13,   C_GOLD,    TA_RIGHT)
note_s = S('nt',   'Helvetica',      7.5,  C_MSTEEL,  TA_LEFT, leading=13)
sec_s  = S('sec',  'Helvetica-Bold', 7.5,  C_GOLD,    TA_LEFT)
sum_k  = S('sk',   'Helvetica-Bold', 8,    C_MSTEEL,  TA_LEFT)
sum_v  = S('sv',   'Helvetica-Bold', 8,    C_DARK,    TA_RIGHT)
sum_n  = S('sn',   'Helvetica-Bold', 8,    C_RED,     TA_RIGHT)
sum_b  = S('sb',   'Helvetica-Bold', 8,    C_HORIZON, TA_RIGHT)


# ══════════════════════════════════════════════════════════════════════
#  FLOWABLE BUILDERS
# ══════════════════════════════════════════════════════════════════════

def section_header(title, W_body):
    lbl_t = Table([[P(title.upper(), sec_s)]], colWidths=[W_body])
    lbl_t.setStyle(TableStyle([
        ('TOPPADDING',(0,0),(-1,-1),0), ('BOTTOMPADDING',(0,0),(-1,-1),2),
        ('LEFTPADDING',(0,0),(-1,-1),0),
    ]))
    hr = Table([['']], colWidths=[W_body], rowHeights=[1.5])
    hr.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1), C_GOLD)]))
    return [lbl_t, hr, Spacer(1, 5)]


def net_box(W_body):
    t = Table([[P(NET_LABEL, net_l), P(NET_VALUE, net_v)]],
              colWidths=[W_body*0.60, W_body*0.40])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,-1), C_NAVY),
        ('LINEABOVE',(0,0),(-1,-1), 2.5, C_GOLD),
        ('TOPPADDING',(0,0),(-1,-1),11), ('BOTTOMPADDING',(0,0),(-1,-1),11),
        ('LEFTPADDING',(0,0),(-1,-1),10), ('RIGHTPADDING',(0,0),(-1,-1),10),
    ]))
    return t


def voyage_table(W_body):
    half = (len(VOYAGE) + 1) // 2
    left  = VOYAGE[:half]
    right = VOYAGE[half:]

    def kv(pairs, w_key=3.6*cm):
        rows = [[P(k, lbl_s), P(v, val_s)] for k, v in pairs]
        t = Table(rows, colWidths=[w_key, W_body*0.5 - w_key])
        t.setStyle(TableStyle([
            ('ROWBACKGROUNDS',(0,0),(-1,-1),[C_WHITE, C_ICE]),
            ('TOPPADDING',(0,0),(-1,-1),4), ('BOTTOMPADDING',(0,0),(-1,-1),4),
            ('LEFTPADDING',(0,0),(-1,-1),8), ('RIGHTPADDING',(0,0),(-1,-1),4),
        ]))
        return t

    two = Table([[kv(left), kv(right)]], colWidths=[W_body*0.5, W_body*0.5])
    two.setStyle(TableStyle([
        ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('TOPPADDING',(0,0),(-1,-1),0), ('BOTTOMPADDING',(0,0),(-1,-1),0),
        ('LEFTPADDING',(0,0),(-1,-1),0), ('RIGHTPADDING',(0,0),(-1,-1),0),
    ]))
    return two


def event_table(events, W_body):
    data = [[P('Event / Description',th), P('Start (Local)',thr),
             P('End (Local)',thr), P('Hrs Used',thr)]]
    for e in events:
        data.append([P(e[0],tc), P(e[1],tcr), P(e[2],tcr), P(e[3],tcr)])
    t = Table(data, colWidths=[W_body*0.40, W_body*0.22, W_body*0.22, W_body*0.16])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0), C_STEEL),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[C_WHITE, C_ICE]),
        ('TOPPADDING',(0,0),(-1,-1),4), ('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LEFTPADDING',(0,0),(-1,-1),7), ('RIGHTPADDING',(0,0),(-1,-1),7),
        ('LINEBELOW',(0,-1),(-1,-1),0.8, C_GOLD),
        ('GRID',(0,0),(-1,-1),0.3, C_RULE),
    ]))
    return t


def deduction_table(deds, W_body):

    # has_remarks = any(d[4] for d in deds)
    has_remarks = True
    if has_remarks:
        cw = [
            W_body*0.24,  # Deduction Type
            W_body*0.16,  # From
            W_body*0.16,  # To
            W_body*0.08,  # Hrs
            W_body*0.10,  # To Count
            W_body*0.26   # Remarks
        ]
        hdr = [
            P('Deduction Type',th),
            P('From',thr),
            P('To',thr),
            P('Hrs',thr),
            P('To Count',thr),
            P('Remarks',th)
        ]
        rows = [[
            P(d[0],tc),
            P(d[1],tcr),
            P(d[2],tcr),
            P(d[3], S(f'dr{i}','Helvetica-Bold',7.5,C_RED,TA_RIGHT)),
            P(d[4], tcr),      # To Count
            P(d[5], tci)       # Remarks
        ] for i,d in enumerate(deds)]
    else:
        cw = [
            W_body*0.24,  # Deduction Type
            W_body*0.16,  # From
            W_body*0.16,  # To
            W_body*0.08,  # Hrs
            W_body*0.10,  # To Count
            W_body*0.26   # Remarks
        ]
        hdr = [
            P('Deduction Type',th),
            P('From',thr),
            P('To',thr),
            P('Hrs',thr),
            P('To Count',thr),
            P('Remarks',th)
        ]
        rows = [[
            P(d[0],tc),
            P(d[1],tcr),
            P(d[2],tcr),
            P(d[3], S(f'dr{i}','Helvetica-Bold',7.5,C_RED,TA_RIGHT)),
            P(d[4], tcr),      # To Count
            P(d[5], tci)       # Remarks
        ] for i,d in enumerate(deds)]

    data = [hdr] + rows
    t = Table(data, colWidths=cw)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0), C_MSTEEL),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[C_WHITE, C_ICE]),
        ('TOPPADDING',(0,0),(-1,-1),4), ('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LEFTPADDING',(0,0),(-1,-1),7), ('RIGHTPADDING',(0,0),(-1,-1),7),
        ('GRID',(0,0),(-1,-1),0.3, C_RULE),
        ('VALIGN',(0,0),(-1,-1),'TOP'),
    ]))
    return t


def port_summary(gross, deduct, net, W_body):
    t = Table([
        [P("Gross Laytime Used", lbl_s), P(gross,  bold_r)],
        [P("Total Deductions",   lbl_s), P(deduct, red_r)],
        [P("Net Laytime Used",   lbl_s), P(net,    blue_r)],
    ], colWidths=[W_body*0.75, W_body*0.25])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,-1), C_ICE),
        ('TOPPADDING',(0,0),(-1,-1),4), ('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LEFTPADDING',(0,0),(-1,-1),8), ('RIGHTPADDING',(0,0),(-1,-1),8),
        ('LINEABOVE',(0,0),(-1,0),0.5, C_GOLD),
        ('LINEBELOW',(0,-1),(-1,-1),1.5, C_HORIZON),
    ]))
    return t


def laytime_summary_table(W_body):
    bg_map = {'bg-white': C_WHITE, 'bg-ice': C_ICE, 'bg-wake': C_WAKE}
    cl_map = {'val': bold_r, 'neg': S('sn2','Helvetica-Bold',8,C_RED,TA_RIGHT),
              'blue': sum_b}
    rows = [[P(lbl, sum_k), P(val, cl_map[cls])]
            for _, lbl, cls, val in LAYTIME_SUMMARY]
    t = Table(rows, colWidths=[W_body*0.68, W_body*0.32])
    ts = [
        ('TOPPADDING',(0,0),(-1,-1),5), ('BOTTOMPADDING',(0,0),(-1,-1),5),
        ('LEFTPADDING',(0,0),(-1,-1),10), ('RIGHTPADDING',(0,0),(-1,-1),10),
        ('LINEBELOW',(0,-1),(-1,-1),0.3, C_RULE),
    ]
    for i,(bg,_,__,___) in enumerate(LAYTIME_SUMMARY):
        ts.append(('BACKGROUND',(0,i),(-1,i), bg_map[bg]))
    t.setStyle(TableStyle(ts))
    return t


def financial_rows(W_body):
    rows = []
    for i,(lbl,val,is_neg) in enumerate(FINANCIALS):
        vs  = fin_r if is_neg else fin_v
        bg  = C_WHITE if i % 2 == 0 else C_ICE
        row = Table([[P(lbl,fin_l), P(val,vs)]], colWidths=[W_body*0.65, W_body*0.35])
        row.setStyle(TableStyle([
            ('BACKGROUND',(0,0),(-1,-1), bg),
            ('TOPPADDING',(0,0),(-1,-1),7), ('BOTTOMPADDING',(0,0),(-1,-1),7),
            ('LEFTPADDING',(0,0),(-1,-1),10), ('RIGHTPADDING',(0,0),(-1,-1),10),
            ('LINEBELOW',(0,0),(-1,-1),0.4, C_RULE),
        ]))
        rows.append(row)
    return rows


# ══════════════════════════════════════════════════════════════════════
#  BUILD PDF
# ══════════════════════════════════════════════════════════════════════

def build():
    LEFT = 1.8*cm; RIGHT = 1.5*cm
    TOP  = HEADER_H + 0.6*cm; BOTTOM = 2.0*cm

    frame    = Frame(LEFT, BOTTOM, W-LEFT-RIGHT, H-TOP-BOTTOM, id='main')
    template = PageTemplate(id='all', frames=[frame], onPage=draw_page)
    doc      = BaseDocTemplate(OUTPUT_PDF, pagesize=A4, pageTemplates=[template])
    W_body   = W - LEFT - RIGHT
    story    = []

    def sec(title, items):
        story.append(KeepTogether(
            section_header(title, W_body) + items + [Spacer(1,10)]
        ))

    # ── Page 1 ────────────────────────────────────────────────────────
    story.append(net_box(W_body))
    story.append(Spacer(1, 14))

    sec("VOYAGE PARTICULARS", [voyage_table(W_body)])

    for port in PORTS:
        sec(port["title"], [
            P("Laytime Events", ph_s),
            event_table(port["events"], W_body),
            Spacer(1,5),
            P("Deductions Applied", ph_s),
            deduction_table(port["deductions"], W_body),
            Spacer(1,4),
            port_summary(*port["summary"], W_body),
        ])

    # ── Page 2 ────────────────────────────────────────────────────────
    sec("LAYTIME CALCULATION SUMMARY", [laytime_summary_table(W_body)])

    fin_items = financial_rows(W_body) + [Spacer(1,3), net_box(W_body)]
    sec("FINANCIAL SETTLEMENT", fin_items)

    note_items = [P(f"{i+1}.  {n}", note_s) for i,n in enumerate(NOTES)]
    sec("NOTES & CONDITIONS", note_items)

    doc.build(story)
    print(f"\n✓  PDF saved \u2192 {OUTPUT_PDF}")


if __name__ == "__main__":
    print("Building Gregal Demurrage Statement...")
    build()