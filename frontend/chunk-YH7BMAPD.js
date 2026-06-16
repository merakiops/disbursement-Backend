import {
  require_moment
} from "./chunk-Z6YUOPJY.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/pages/disbursment/disbursment.component.model.ts
var import_moment = __toESM(require_moment());
var DisbursmentDetails = class {
  disbursement_seq;
  disbursement_id;
  client_name;
  port_agent_name;
  pic;
  ops_pic;
  agency_nomination_date;
  invoice_number;
  pda_id;
  pda_received_ops_agent;
  pda_processing_date;
  pda_status;
  portagent_pda_amount;
  actual_pda_amount;
  pda_remittance;
  pda_remark;
  fda_id;
  fda_state;
  fda_received_ops_agent;
  fda_processing_date;
  portagent_fda_amount;
  actual_fda_amount;
  fda_status;
  fda_remark;
  days_outstanding;
  vessel_name;
  voyage;
  port;
  country;
  purpose;
  cargo;
  eta;
  etd;
  sm_estimated_amount;
  sm_detailed_entry;
  sm_ws_chart_ac;
  owners_item_rejected;
  towage_agency_agrement;
  roe_agent;
  roe_actual_oanda;
  roe_loss;
  loss_prevention_pda;
  loss_prevention_fda;
  total_loss_prevented;
  loss_prevented_reason;
  pda_receive_date;
  fda_receive_date;
  final_status;
  due_pda_processing_date;
  due_days;
  due_comment;
  due_flag;
  due_color;
  advance_percentage;
  pda_ptm_curr_to;
  fda_ptm_curr_to;
  manual_pda_amount;
  manual_fda_amount;
  constructor(details) {
    this.disbursement_seq = details.disbursement_seq || null;
    this.disbursement_id = details.disbursement_id || null;
    this.client_name = details.client_name || null;
    this.port_agent_name = details.port_agent_name || null;
    this.pic = details.pic || null;
    this.ops_pic = details.ops_pic || null;
    this.agency_nomination_date = details.agency_nomination_date || null;
    this.invoice_number = details.invoice_number || null;
    this.pda_id = details.pda_id || null;
    this.pda_received_ops_agent = details.pda_received_ops_agent || null;
    this.pda_processing_date = details.pda_processing_date || null;
    this.pda_status = details.pda_status || null;
    this.portagent_pda_amount = details.portagent_pda_amount || null;
    this.actual_pda_amount = details.actual_pda_amount || null;
    this.pda_remittance = details.pda_remittance || null;
    this.pda_remark = details.pda_remark || null;
    this.fda_id = details.fda_id || null;
    this.fda_state = details.fda_state || null;
    this.fda_received_ops_agent = details.fda_received_ops_agent || null;
    this.fda_processing_date = details.fda_processing_date || null;
    this.portagent_fda_amount = details.portagent_fda_amount || null;
    this.actual_fda_amount = details.actual_fda_amount || null;
    this.fda_status = details.fda_status || null;
    this.fda_remark = details.fda_remark || null;
    this.days_outstanding = details.days_outstanding || null;
    this.vessel_name = details.vessel_name || null;
    this.voyage = details.voyage || null;
    this.port = details.port || null;
    this.country = details.country || null;
    this.purpose = details.purpose || null;
    this.cargo = details.cargo || null;
    this.eta = details.eta || null;
    this.etd = details.etd || null;
    this.sm_estimated_amount = details.sm_estimated_amount || null;
    this.sm_detailed_entry = details.sm_detailed_entry || null;
    this.sm_ws_chart_ac = details.sm_ws_chart_ac || null;
    this.owners_item_rejected = details.owners_item_rejected || null;
    this.towage_agency_agrement = details.towage_agency_agrement || null;
    this.roe_agent = details.roe_agent || null;
    this.roe_actual_oanda = details.roe_actual_oanda || null;
    this.roe_loss = details.roe_loss || null;
    this.loss_prevention_pda = details.loss_prevention_pda || null;
    this.loss_prevention_fda = details.loss_prevention_fda || null;
    this.total_loss_prevented = details.total_loss_prevented || null;
    this.loss_prevented_reason = details.loss_prevented_reason || null;
    this.pda_receive_date = details.pda_receive_date || null;
    this.fda_receive_date = details.fda_receive_date || null;
    this.final_status = details.final_status || null;
    this.due_pda_processing_date = details.due_pda_processing_date || null;
    this.due_days = details.due_days || null;
    this.due_comment = details.due_comment || null;
    this.due_flag = details.due_flag || null;
    this.due_color = details.due_color || null;
    this.advance_percentage = details.advance_percentage || null;
    this.pda_ptm_curr_to = details.pda_ptm_curr_to || null;
    this.fda_ptm_curr_to = details.fda_ptm_curr_to || null;
    this.manual_pda_amount = details.manual_pda_amount || null;
    this.manual_fda_amount = details.manual_fda_amount || null;
  }
};
var columnsToDisplay = [
  { name: "", property: "eye_icon", "access": [1, 2, 3] },
  { name: "Disbursement ID", property: "disbursement_id", "access": [1, 2, 3] },
  { name: "Final Status", property: "final_status", "access": [1, 2, 3] },
  { name: "PIC", property: "pic", "access": [1, 2] },
  { name: "Client", property: "client_name", "access": [1, 2] },
  { name: "PDA Status", property: "pda_status", "access": [1, 2, 3] },
  { name: "FDA Status", property: "fda_status", "access": [1, 2, 3] },
  { name: "Vessel", property: "vessel_name", "access": [1, 2, 3] },
  { name: "Voy no", property: "voyage", "access": [1, 2, 3] },
  { name: "Port", property: "port", "access": [1, 2, 3] },
  { name: "Port Agent", property: "port_agent", "access": [1, 2, 3] },
  { name: "ETA", property: "eta", "access": [1, 2, 3] },
  { name: "ETD", property: "etd", "access": [1, 2, 3] },
  { name: "PDA amount $", property: "pda_amount", "access": [1, 2, 3] },
  { name: "FDA amount $", property: "fda_amount", "access": [1, 2, 3] },
  { name: "PDA Agent Amount", property: "manual_pda_amount", "access": [1, 2, 3] },
  { name: "FDA Agent Amount", property: "manual_fda_amount", "access": [1, 2, 3] },
  { name: "Purpose", property: "purpose", "access": [3] },
  { name: "PDA Savings $", property: "pda_savings", "access": [3] },
  { name: "FDA Savings $", property: "fda_savings", "access": [3] },
  { name: "Savings Reason", property: "loss_prevented_reason", "access": [3] },
  { name: "Action", property: "action", "access": [1, 2] }
];
var ColumnsTodisplayInExportData = [
  { label: "Disbursement ID", field: "disbursement_id" },
  { label: "PIC", field: "pic" },
  { label: "Client", field: "client_name" },
  { label: "Vessel", field: "vessel_name" },
  { label: "Port Agent", field: "port_agent_name" },
  { label: "Port", field: "port" },
  { label: "ETA", field: "eta" },
  { label: "ETD", field: "etd" },
  { label: "Country", field: "country" },
  { label: "Voyage", field: "voyage" },
  { label: "PDA Status", field: "pda_status" },
  { label: "PDA Processing Date", field: "pda_processing_date" },
  { label: "Purpose", field: "purpose" },
  { label: "Cargo", field: "cargo" },
  { label: "FDA Received", field: "fda_receive_date" },
  { label: "FDA Status", field: "fda_status" },
  { label: "FDA Processing Date", field: "fda_processing_date" },
  { label: "Agency Nomination Date", field: "agency_nomination_date" },
  { label: "Invoice No", field: "invoice_number" },
  { label: "PDA Remark", field: "pda_remark" },
  { label: "FDA Remark", field: "fda_remark" },
  { label: "Estimated Amount", field: "sm_estimated_amount" },
  { label: "PDA Amount (USD)", field: "portagent_pda_amount" },
  { label: "FDA Amount (USD)", field: "portagent_fda_amount" },
  { label: "Agents ROE", field: "roe_agent" },
  { label: "Actual ROE from OANDA", field: "roe_actual_oanda" },
  { label: "ROE Loss USD", field: "roe_loss" },
  { label: "Final Status", field: "final_status" },
  { label: "Loss Prevention at PDA ($)", field: "loss_prevention_pda" },
  { label: "Loss Prevention at FDA ($)", field: "loss_prevention_fda" },
  { label: "Total Loss Prevented ($)", field: "total_loss_prevented" },
  { label: "PDA Remittance ($)", field: "pda_remittance" },
  { label: "Detailed Entry(Yes/NA)", field: "sm_detailed_entry" },
  { label: "Towage / Agency Agreement(Yes/NA)", field: "towage_agency_agrement" },
  { label: "Days Outstanding", field: "days_outstanding" },
  { label: "WS/Chart A/C (Yes/NA)", field: "sm_ws_chart_ac" },
  { label: "Owners Items Rejected(Yes/NA)", field: "owners_item_rejected" },
  { label: "Loss Prevented Reason", field: "loss_prevented_reason" }
];
var formatDate = (date) => {
  if (!date)
    return "";
  if (typeof date === "string" && /^\d{2}-\d{2}-\d{4}$/.test(date)) {
    return date;
  }
  const momentDate = (0, import_moment.default)(date);
  if (!momentDate.isValid())
    return "";
  return momentDate.format("DD-MM-YYYY");
};

export {
  DisbursmentDetails,
  columnsToDisplay,
  ColumnsTodisplayInExportData,
  formatDate
};
//# sourceMappingURL=chunk-YH7BMAPD.js.map
