import io
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame,
    Paragraph, Spacer, Table, TableStyle, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from demurrage.models import Voyage

def generate_demurrage_pdf(voyage: Voyage) -> io.BytesIO:
    """
    Generates a demurrage statement PDF based on the test_report.py layout.
    Uses dynamic data from the Voyage model and returns an in-memory BytesIO stream.
    """
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
    C_MID     = colors.HexColor('#8AAAC8')
    C_DOT     = colors.HexColor('#1E3A58')

    HEADER_H = 4.5 * cm
    PANEL_W  = 6.8 * cm

    # ── Dynamic Context & Data mapping ─────────────────────────────────
    COMPANY       = "MERAKI SHIPPING"
    DOC_TITLE     = "DEMURRAGE STATEMENT"

    VESSEL_CAPS   = (voyage.vessel or "UNKNOWN").upper()
    CP_TERMS      = voyage.charterparty_terms or ""
    cp_date_str = ""
    if voyage.cp_date:
        if isinstance(voyage.cp_date, datetime):
            cp_date_str = voyage.cp_date.strftime("%d %b %Y")
        else:
            cp_date_str = str(voyage.cp_date)

    bl_date_str = ""
    if voyage.bl_date:
        if isinstance(voyage.bl_date, datetime):
            bl_date_str = voyage.bl_date.strftime("%d %b %Y")
        else:
            bl_date_str = str(voyage.bl_date)

    CP_DATE       = cp_date_str
    CLIENT        = voyage.client_name or ""

    # Dynamic Laycan Narrowed formatting
    laycan_narrowed_str = ""
    if voyage.laycan_narrowed_date:
        laycan_narrowed_str = voyage.laycan_narrowed_date
        time_details = []
        if voyage.laycan_narrowed_start_time:
            time_details.append(voyage.laycan_narrowed_start_time)
        if voyage.laycan_narrowed_end_time:
            time_details.append(voyage.laycan_narrowed_end_time)
        if time_details:
            laycan_narrowed_str += f" ({' to '.join(time_details)})"

    # Build Voyage Particulars list matching test_report.py keys
    voyage_particulars = [
        ("Vessel Name", voyage.vessel or ""),
        ("Charterparty", voyage.charterparty_terms or ""),
        ("CP Date", cp_date_str),
        ("BL Date", bl_date_str),
        ("Laycan", voyage.laycan or ""),
        ("Laycan Narrowed", laycan_narrowed_str),
        ("Allowed Laytime (hours)", f"{voyage.allowed_laytime_hours:.2f} hrs"),
        ("Additional Laytime", f"{voyage.additional_laytime or '0.00'} hrs"),
        ("Demurrage Rate", f"USD {voyage.demurrage_rate_usd_per_day:,.2f} / Day PDPR"),
        ("Address Commission", f"{voyage.address_commission_percent}%"),
        ("CP Speed", voyage.cp_speed or ""),
        ("Freight", voyage.freight or ""),
        ("Timebar Clause", voyage.timebar_clause or "")
    ]

    # Build Ports and Operations list
    ports_data = []
    # Order operations LOAD first, then DISCHARGE
    sorted_ops = sorted(voyage.port_operations, key=lambda x: 0 if x.operation_type == "LOAD" else 1)
    
    for i, op in enumerate(sorted_ops):
        op_type_str = "LOAD" if op.operation_type == "LOAD" else "DISCHARGE"
        port_title = f"PORT {i+1} \u2014 {op.port.upper()}  ({op_type_str})  |  Terminal: {op.terminal or ''}"
        
        # Events
        start_str = op.start_time.strftime("%d %b %Y %H:%M") if op.start_time else ""
        end_str = op.end_time.strftime("%d %b %Y %H:%M") if op.end_time else ""
        event_desc = f"{op.start_event or 'Commenced'} \u2192 {op.end_event or 'Completed'}"
        events = [(event_desc, start_str, end_str, f"{op.time_used:.2f}")]
        
        # Deductions
        deductions = []
        total_ded_hrs = 0.0
        for ded in op.deductions:
            ded_start_str = ded.start_time.strftime("%d %b %Y %H:%M") if ded.start_time else ""
            ded_end_str = ded.end_time.strftime("%d %b %Y %H:%M") if ded.end_time else ""
            ded_hrs = f"{ded.time_used:.2f}"
            deductions.append((ded.event_name, ded_start_str, ded_end_str, ded_hrs, "", ded.comments_clause or ""))
            total_ded_hrs += ded.time_used
            
        net_hrs = op.gross_used_laytime - total_ded_hrs
        
        ports_data.append({
            "title": port_title,
            "events": events,
            "deductions": deductions,
            "summary": (f"{op.gross_used_laytime:.2f} hrs", f"\u2212 {total_ded_hrs:.2f} hrs", f"{net_hrs:.2f} hrs")
        })

    # Summary and Financials lists
    summary = voyage.summary
    laytime_summary_data = [
        ("bg-white", "Total Gross Laytime Used (Both Ports)", "val",  f"{summary.total_used_laytime:.2f} hrs"),
        ("bg-ice",   "Less: Total Deductions",               "neg",  f"{summary.total_deductions:.2f} hrs"),
        ("bg-white", "Allowed Laytime",                      "val",  f"{summary.allowed_laytime:.2f} hrs"),
        ("bg-ice",   "Additional / Extra Laytime",           "val",  f"{voyage.additional_laytime or '0.00'} hrs"),
        ("bg-wake",  "Time on Demurrage",                    "blue", f"{summary.demurrage_time:.2f} hrs"),
    ]

    financials_data = [
        ("Gross Demurrage", f"USD {summary.gross_demurrage_cost:,.2f}", False),
        ("Less: Undisputed Demurrage Paid", f"USD {summary.undisputed_demurrage_paid:,.2f}", False),
        ("Less: Address Commission @ {0}%".format(voyage.address_commission_percent), f"USD {abs(summary.add_commission):,.2f}", True),
    ]

    NET_LABEL = "NET DEMURRAGE DUE"
    NET_VALUE = f"USD {summary.net_demurrage:,.2f}"

    # Dynamic Notes & Conditions
    notes_data = []
    notes_data.append(f"Laytime is calculated reversible basis across all ports as per {voyage.charterparty_terms or 'fixtures'}.")
    notes_data.append("All times are expressed in <b>local port time</b> unless otherwise stated.")
    
    unique_deds = set()
    for op in sorted_ops:
        for ded in op.deductions:
            unique_deds.add(ded.event_name)
    if unique_deds:
        notes_data.append(f"Deductions applied: {', '.join(sorted(unique_deds))}.")
        
    notes_data.append(f"Demurrage accrues at <b>USD {voyage.demurrage_rate_usd_per_day:,.2f} per day</b> pro-rata (PDPR) after expiry of allowed laytime.")
    notes_data.append(f"Address Commission of <b>{voyage.address_commission_percent}%</b> is deducted from the gross demurrage amount.")
    if voyage.additional_laytime:
        notes_data.append(f"Additional / Extra Laytime of <b>{voyage.additional_laytime} hrs</b> included in laytime calculation.")
    notes_data.append("This statement is subject to mutual agreement between Owners and Charterers and final audit.")

    # ── Page Layout Callback (Thread-Safe Closure) ─────────────────────
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

        # Document Title
        canvas.setFont('Helvetica-Bold', 24)
        canvas.setFillColor(C_WHITE)
        canvas.drawString(1.8 * cm, H - 2.0 * cm, DOC_TITLE)

        title_width = canvas.stringWidth(DOC_TITLE, 'Helvetica-Bold', 24)
        canvas.setFillColor(C_GOLD)
        canvas.rect(1.8 * cm, H - 2.25 * cm, title_width, 2, fill=1, stroke=0)

        # Right panel text
        px = W - PANEL_W + 0.40 * cm
        canvas.setFont('Helvetica-Bold', 10)
        canvas.setFillColor(C_GOLD)
        canvas.drawString(px, H - 1.60 * cm, f"Vessel: {VESSEL_CAPS}")
        canvas.setStrokeColor(C_GDIM)
        canvas.setLineWidth(0.5)
        canvas.line(px, H - 2.15 * cm, W - 0.5 * cm, H - 2.15 * cm)

        if CLIENT:
            canvas.setFont('Helvetica-Bold', 10)
            canvas.setFillColor(C_WHITE)
            canvas.drawString(px, H - 2.60 * cm, f"Client: {CLIENT}")

        # Left sidebar
        canvas.setFillColor(C_NAVY)
        canvas.rect(0, 1.42 * cm, 0.85 * cm, H - HEADER_H - 3 - 1.42 * cm, fill=1, stroke=0)

        # Footer
        canvas.setFillColor(C_NAVY)
        canvas.rect(0, 0, W, 1.40 * cm, fill=1, stroke=0)
        canvas.setFillColor(C_GOLD)
        canvas.rect(0, 1.40 * cm, W, 2, fill=1, stroke=0)
        canvas.setFont('Helvetica', 6.5)
        canvas.setFillColor(C_MID)
        canvas.drawCentredString(W / 2, 0.50 * cm,
            f"{COMPANY}  \u00b7  {DOC_TITLE}  \u00b7  "
            f"{VESSEL_CAPS}  \u00b7  CP: {CP_TERMS}  \u00b7  CONFIDENTIAL")

        canvas.restoreState()

    # ── Style Helpers ───────────────────────────────────────────────────
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

    # Styles
    lbl_s  = S('lbl',  'Helvetica-Bold', 8,    C_MSTEEL,  TA_LEFT)
    val_s  = S('val',  'Helvetica',      8.5,  C_DARK,    TA_LEFT)
    bold_r = S('br',   'Helvetica-Bold', 8.5,  C_DARK,    TA_RIGHT)
    blue_r = S('blr',  'Helvetica-Bold', 8.5,  C_HORIZON, TA_RIGHT)
    red_r  = S('redr', 'Helvetica-Bold', 8.5,  C_RED,     TA_RIGHT)
    th     = S('th',   'Helvetica-Bold', 7.5,  C_WHITE,   TA_LEFT)
    thr    = S('thr',  'Helvetica-Bold', 7.5,  C_WHITE,   TA_RIGHT)
    tc     = S('tc',   'Helvetica',      7.5,  C_DARK,    TA_LEFT)
    tcr    = S('tcr',  'Helvetica',      7.5,  C_DARK,    TA_RIGHT)
    tci    = S('tci',  'Helvetica',      6.5,  C_MSTEEL,  TA_LEFT)
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
    sum_b  = S('sb',   'Helvetica-Bold', 8,    C_HORIZON, TA_RIGHT)

    # ── Flowable Builders ──────────────────────────────────────────────
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
        half = (len(voyage_particulars) + 1) // 2
        left  = voyage_particulars[:half]
        right = voyage_particulars[half:]

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
        if not deds:
            # Empty placeholders in case there are no deductions
            deds = [("No Deductions", "", "", "0.00", "", "")]
            
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
            P(d[4], tcr),
            P(d[5], tci)
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
        cl_map = {'val': bold_r, 'neg': S('sn2','Helvetica-Bold',8,C_RED,TA_RIGHT), 'blue': sum_b}
        rows = [[P(lbl, sum_k), P(val, cl_map[cls])] for _, lbl, cls, val in laytime_summary_data]
        t = Table(rows, colWidths=[W_body*0.68, W_body*0.32])
        ts = [
            ('TOPPADDING',(0,0),(-1,-1),5), ('BOTTOMPADDING',(0,0),(-1,-1),5),
            ('LEFTPADDING',(0,0),(-1,-1),10), ('RIGHTPADDING',(0,0),(-1,-1),10),
            ('LINEBELOW',(0,-1),(-1,-1),0.3, C_RULE),
        ]
        for i,(bg,_,__,___) in enumerate(laytime_summary_data):
            ts.append(('BACKGROUND',(0,i),(-1,i), bg_map[bg]))
        t.setStyle(TableStyle(ts))
        return t

    def financial_rows(W_body):
        rows = []
        for i,(lbl,val,is_neg) in enumerate(financials_data):
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

    # ── Build Document Story ──────────────────────────────────────────
    buffer = io.BytesIO()
    LEFT = 1.8*cm; RIGHT = 1.5*cm
    TOP  = HEADER_H + 0.6*cm; BOTTOM = 2.0*cm

    frame    = Frame(LEFT, BOTTOM, W-LEFT-RIGHT, H-TOP-BOTTOM, id='main')
    template = PageTemplate(id='all', frames=[frame], onPage=draw_page)
    doc      = BaseDocTemplate(buffer, pagesize=A4, pageTemplates=[template])
    W_body   = W - LEFT - RIGHT
    story    = []

    def sec(title, items):
        story.append(KeepTogether(
            section_header(title, W_body) + items + [Spacer(1,10)]
        ))

    # Page 1
    story.append(net_box(W_body))
    story.append(Spacer(1, 14))

    sec("VOYAGE PARTICULARS", [voyage_table(W_body)])

    for port in ports_data:
        sec(port["title"], [
            P("Laytime Events", ph_s),
            event_table(port["events"], W_body),
            Spacer(1,5),
            P("Deductions Applied", ph_s),
            deduction_table(port["deductions"], W_body),
            Spacer(1,4),
            port_summary(*port["summary"], W_body),
        ])

    # Page 2
    story.append(Spacer(1, 15))
    sec("LAYTIME CALCULATION SUMMARY", [laytime_summary_table(W_body)])

    fin_items = financial_rows(W_body) + [Spacer(1,3), net_box(W_body)]
    sec("FINANCIAL SETTLEMENT", fin_items)

    note_items = [P(f"{i+1}.  {n}", note_s) for i,n in enumerate(notes_data)]
    sec("NOTES & CONDITIONS", note_items)

    doc.build(story)
    buffer.seek(0)
    return buffer
