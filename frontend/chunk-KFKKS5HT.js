import {
  EmailSentNotificationComponent
} from "./chunk-SNZ4PAUJ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-7ATAFLL6.js";
import {
  DisbursmentDetails,
  formatDate
} from "./chunk-YH7BMAPD.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-TQVZRFDQ.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-7LZOSO4L.js";
import {
  PdaService
} from "./chunk-GUPQORLI.js";
import {
  FileUploadComponent,
  FileUploadService
} from "./chunk-PHWOHFCM.js";
import {
  MatProgressSpinner
} from "./chunk-A7N62EC5.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  formatToLocalISOString
} from "./chunk-4B5JIWQW.js";
import {
  PortAgentFormService
} from "./chunk-YF5NCWIB.js";
import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-65SYLNKY.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-7SVTSSNI.js";
import {
  MatSelectModule
} from "./chunk-2LYLMMA2.js";
import {
  MatCheckbox
} from "./chunk-K64LDRY5.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  COMMA,
  ENTER,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
  MatOption
} from "./chunk-BAX6ITZM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgForOf,
  NgIf,
  NgStyle,
  inject,
  map,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7YW2NURN.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/disbursment/disbursement.component.service.ts
var DisbursementService = class _DisbursementService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get the data from db
  getDisbursementData(params) {
    return this.http.post("disbursement_tracker", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to get the disbursement data based on client
  getClientDisbursementData(params) {
    return this.http.post("client_disbursement_tracker", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to get the disbursementDtl from db
  getDisbursementDataDtls(params) {
    return this.http.get(`disbursement_tracker_detail/${params}`, {}).pipe(map((response) => {
      return response;
    }));
  }
  // method to send the data to db
  disbursementDataToDb(disbursementDlts) {
    return this.http.post("disbursement_tracker_update", disbursementDlts).pipe(map((response) => {
      return response;
    }));
  }
  getDisbursementDataToExport(params) {
    return this.http.post("export_disbursement_detail", params).pipe(map((response) => {
      return response;
    }));
  }
  deleteOrInActivateDisbursement(params) {
    return this.http.post(`active_inactive_delete_state`, params).pipe(map((response) => {
      return response;
    }));
  }
  paymentInstructionEmail(data) {
    return this.http.post(`payment_instruction_mail`, data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function DisbursementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisbursementService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DisbursementService, factory: _DisbursementService.\u0275fac, providedIn: "root" });
};

// src/app/pages/disbursment/disburs-dtls-comp/payment-instruction-dialog.component.ts
var _c0 = ["topTextDiv"];
var _c1 = ["bottomTextDiv"];
function PaymentInstructionDialogComponent_mat_chip_row_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 43);
    \u0275\u0275listener("removed", function PaymentInstructionDialogComponent_mat_chip_row_16_Template_mat_chip_row_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeToEmail(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 44)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
  }
}
function PaymentInstructionDialogComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5, " ");
  }
}
function PaymentInstructionDialogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " At least one recipient is required ");
    \u0275\u0275elementEnd();
  }
}
function PaymentInstructionDialogComponent_mat_chip_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 43);
    \u0275\u0275listener("removed", function PaymentInstructionDialogComponent_mat_chip_row_30_Template_mat_chip_row_removed_0_listener() {
      const email_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeCcEmail(email_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 44)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r7, " ");
  }
}
function PaymentInstructionDialogComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8, " ");
  }
}
function PaymentInstructionDialogComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275listener("blur", function PaymentInstructionDialogComponent_tr_53_Template_td_blur_3_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateTableValue(row_r10, $event));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r10.value, " ");
  }
}
var PaymentInstructionDialogComponent = class _PaymentInstructionDialogComponent {
  dialogRef;
  data;
  toEmailList = [];
  ccEmailList = [];
  selectedToEmails = [];
  selectedCcEmails = [];
  separatorKeysCodes = [ENTER, COMMA];
  subject = "";
  bottomTextContent = "<b>Charterers account items / World scale items</b> - No such cost in invoice<br><b>Owners account items rejected</b> - No owner cost item in invoice.";
  to = new FormControl("", [Validators.email]);
  cc = new FormControl("");
  greetingText = "";
  tableData = [];
  signatureData = sessionStorage.getItem("signature");
  signature = new FormControl(this.signatureData || "");
  update_signature = new FormControl(false);
  topTextDiv;
  bottomTextDiv;
  filteredToOptions;
  filteredCcOptions;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.toEmailList = data?.to || [];
    this.ccEmailList = data?.cc || [];
    const vesselName = data?.vesselName || "VESSEL";
    const voyage = data?.voyage || "VOY";
    const type = data?.type || "PDA";
    const port = data?.port || "PORT";
    const purpose = data?.purpose || "PURPOSE";
    const portAgent = data?.portAgent || "AGENCY";
    const pdaAmount = data?.pdaAmount || "0";
    const advancePay = data?.advancePay || "0";
    const advance_percentage = data?.advancePercentage;
    const due = this.formatDate(data?.due);
    const disbursement_id = this.data.disbursement_id;
    const currency = this.data.pmt_curr_to?.toUpperCase() || "";
    this.subject = `${type} - CONFIRMATION - ${vesselName} - VOY - ${voyage} - ${port} - DISBURSEMENT ID - ${disbursement_id}`;
    this.greetingText = `Good Day,

Kindly consider below details for subject vessel ${type} approval.`;
    this.tableData = [
      { label: "Vessel - Voyage", value: `${vesselName} - VOY - ${voyage}` },
      { label: "Port - Call Purpose", value: `${port} - ${purpose}` },
      { label: "Agency", value: portAgent },
      { label: `${type} Amount`, value: `${currency} ${pdaAmount}` }
    ];
    if (advance_percentage !== void 0 && advance_percentage !== null && advance_percentage > 0) {
      this.tableData.push({ label: this.data?.type === "PDA" ? `${advance_percentage}% Advance Pay` : "Advance Pay", value: `${currency} ${advancePay}` });
    }
    const pda = Number(pdaAmount);
    const fda = Number(pdaAmount);
    const advance = Number(advancePay);
    const balanceAmount = this.data?.type === "PDA" ? pda - advance : fda - advance;
    if (this.data?.type === "FDA") {
      this.tableData.push({ label: "Balance Amount", value: `${currency} ${balanceAmount}` });
    }
    this.tableData.push({ label: "Due", value: due });
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
  }
  ngOnInit() {
    this.filteredToOptions = this.to.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.toEmailList)));
    this.filteredCcOptions = this.cc.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.ccEmailList)));
  }
  filterOptions(value, datasource) {
    const filterValue = value.toLowerCase();
    return datasource.filter((option) => {
      if (typeof option === "string") {
        return option.toLowerCase().includes(filterValue);
      }
      return false;
    });
  }
  addEmailToSelection(email, targetArray) {
    if (!email || targetArray.includes(email)) {
      return false;
    }
    targetArray.push(email);
    return true;
  }
  addToEmail(event) {
    const value = (event.value || "").trim();
    if (this.addEmailToSelection(value, this.selectedToEmails)) {
      event.chipInput?.clear();
      this.to.setValue("");
    }
  }
  selectToEmail(event) {
    const value = event.option?.viewValue;
    if (this.addEmailToSelection(value, this.selectedToEmails)) {
      this.to.setValue("");
    }
  }
  removeToEmail(email) {
    this.selectedToEmails = this.selectedToEmails.filter((e) => e !== email);
  }
  addCcEmail(event) {
    const value = (event.value || "").trim();
    if (this.addEmailToSelection(value, this.selectedCcEmails)) {
      event.chipInput?.clear();
      this.cc.setValue("");
    }
  }
  selectCcEmail(event) {
    const value = event.option?.viewValue;
    if (this.addEmailToSelection(value, this.selectedCcEmails)) {
      this.cc.setValue("");
    }
  }
  removeCcEmail(email) {
    this.selectedCcEmails = this.selectedCcEmails.filter((e) => e !== email);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  updateTableValue(row, event) {
    row.value = event.target.innerText;
  }
  onContinue() {
    if (this.selectedToEmails.length === 0) {
      return;
    }
    if (this.update_signature.value) {
      sessionStorage.setItem("signature", this.signature.value ?? "");
    }
    const topText = this.topTextDiv?.nativeElement?.innerText || this.greetingText;
    const bottomText = this.bottomTextDiv?.nativeElement?.innerHTML || "<b>Charterers account items / World scale items</b> - No such cost in invoice<br><b>Owners account items rejected</b> - No owner cost item in invoice.";
    const tableObject = this.tableData.reduce((acc, row) => {
      acc[row.label] = row.value;
      return acc;
    }, {});
    this.dialogRef.close({
      email_to: this.selectedToEmails,
      email_cc: this.selectedCcEmails,
      subject: this.subject,
      body: {
        upper_text: topText,
        table: tableObject,
        lower_text: bottomText
      },
      signature: this.signature.value ?? "",
      update_signature: this.update_signature.value ? "Y" : "N"
    });
  }
  static \u0275fac = function PaymentInstructionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentInstructionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentInstructionDialogComponent, selectors: [["app-payment-instruction-dialog"]], viewQuery: function PaymentInstructionDialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.topTextDiv = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bottomTextDiv = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 24, consts: [["chipGrid", ""], ["autoTo", "matAutocomplete"], ["chipGridCc", ""], ["autoCc", "matAutocomplete"], ["topTextDiv", ""], ["bottomTextDiv", ""], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [1, "email-dialog"], [1, "email-section"], [1, "email-fields"], [1, "field-container"], [1, "field-label", 2, "margin-right", "18px"], [1, "field-input"], [3, "removed", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Add email", "matInput", "", 3, "matChipInputTokenEnd", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "validation-message", 4, "ngIf"], [1, "field-label", 2, "margin-right", "15px"], [1, "subject-field-container"], [1, "subject-field-label"], [1, "subject-field-input"], [2, "font-weight", "500", "color", "var(--app-text-primary)", "font-size", "14px"], [1, "body-field-container"], [1, "body-field-label"], [1, "body-field-input"], [1, "email-body-container"], ["contenteditable", "true", "placeholder", "Enter text above table...", 1, "email-content-editor"], [1, "email-table"], [4, "ngFor", "ngForOf"], ["contenteditable", "true", "placeholder", "Enter text below table...", 1, "email-content-editor-bottom", 3, "innerHTML"], [1, "signature-field-container"], [1, "signature-field-label"], [1, "signature-field-input"], [1, "signature-error-field"], ["appearance", "outline", 1, "signature-input-field"], ["matInput", "", "placeholder", "Enter Signature", 1, "signature-input", 3, "formControl"], [1, "checkbox-container"], [3, "formControl"], [1, "button-section"], ["mat-flat-button", "", 1, "cancel-button", 3, "click"], ["mat-flat-button", "", 1, "continue-button", 3, "click", "disabled"], [3, "removed"], ["matChipRemove", ""], [3, "value"], [1, "validation-message"], [1, "email-table-label"], ["contenteditable", "true", 1, "email-table-value", 3, "blur"]], template: function PaymentInstructionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "h6");
      \u0275\u0275text(2, "Payment Instruction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 7);
      \u0275\u0275listener("click", function PaymentInstructionDialogComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "mat-label");
      \u0275\u0275text(12, "To:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13)(14, "mat-chip-grid", null, 0);
      \u0275\u0275template(16, PaymentInstructionDialogComponent_mat_chip_row_16_Template, 5, 1, "mat-chip-row", 14);
      \u0275\u0275elementStart(17, "input", 15);
      \u0275\u0275listener("matChipInputTokenEnd", function PaymentInstructionDialogComponent_Template_input_matChipInputTokenEnd_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addToEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-autocomplete", 16, 1);
      \u0275\u0275listener("optionSelected", function PaymentInstructionDialogComponent_Template_mat_autocomplete_optionSelected_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectToEmail($event));
      });
      \u0275\u0275template(20, PaymentInstructionDialogComponent_mat_option_20_Template, 2, 2, "mat-option", 17);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, PaymentInstructionDialogComponent_div_22_Template, 2, 0, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "div", 19)(25, "mat-label");
      \u0275\u0275text(26, "CC:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "mat-chip-grid", null, 2);
      \u0275\u0275template(30, PaymentInstructionDialogComponent_mat_chip_row_30_Template, 5, 1, "mat-chip-row", 14);
      \u0275\u0275elementStart(31, "input", 15);
      \u0275\u0275listener("matChipInputTokenEnd", function PaymentInstructionDialogComponent_Template_input_matChipInputTokenEnd_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addCcEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-autocomplete", 16, 3);
      \u0275\u0275listener("optionSelected", function PaymentInstructionDialogComponent_Template_mat_autocomplete_optionSelected_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectCcEmail($event));
      });
      \u0275\u0275template(34, PaymentInstructionDialogComponent_mat_option_34_Template, 2, 2, "mat-option", 17);
      \u0275\u0275pipe(35, "async");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "mat-label");
      \u0275\u0275text(39, "Subject:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 22)(41, "span", 23);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 24)(44, "div", 25)(45, "mat-label");
      \u0275\u0275text(46, "Body:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 26)(48, "div", 27)(49, "div", 28, 4);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "table", 29);
      \u0275\u0275template(53, PaymentInstructionDialogComponent_tr_53_Template, 5, 2, "tr", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "div", 31, 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 32)(57, "div", 33)(58, "mat-label");
      \u0275\u0275text(59, "Signature:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 34)(61, "div", 35)(62, "mat-form-field", 36);
      \u0275\u0275element(63, "textarea", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 38)(65, "mat-checkbox", 39);
      \u0275\u0275text(66, "Update Signature");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 40)(68, "button", 41);
      \u0275\u0275listener("click", function PaymentInstructionDialogComponent_Template_button_click_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275text(69, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 42);
      \u0275\u0275listener("click", function PaymentInstructionDialogComponent_Template_button_click_70_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContinue());
      });
      \u0275\u0275text(71, "Send");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipGrid_r11 = \u0275\u0275reference(15);
      const autoTo_r12 = \u0275\u0275reference(19);
      const chipGridCc_r13 = \u0275\u0275reference(29);
      const autoCc_r14 = \u0275\u0275reference(33);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.selectedToEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.to)("matAutocomplete", autoTo_r12)("matChipInputFor", chipGrid_r11)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(21, 20, ctx.filteredToOptions));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedToEmails.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.selectedCcEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.cc)("matAutocomplete", autoCc_r14)("matChipInputFor", chipGridCc_r13)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(35, 22, ctx.filteredCcOptions));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.subject);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.greetingText, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tableData);
      \u0275\u0275advance();
      \u0275\u0275property("innerHTML", ctx.bottomTextContent, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(9);
      \u0275\u0275property("formControl", ctx.signature);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.update_signature);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.selectedToEmails.length === 0);
    }
  }, dependencies: [
    MatIcon,
    CommonModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    MatDialogModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatCheckbox
  ], styles: ["\n\n.email-dialog[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow-y: auto;\n  max-height: 80vh;\n  background-color: var(--app-page-bg);\n  color: var(--app-text-primary);\n}\n.email-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 0 10px;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--app-text-primary);\n}\n.close-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--app-text-secondary);\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.close-icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-bg-dark-3);\n  color: var(--app-status-error);\n}\n.email-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 28px;\n  margin-bottom: 25px;\n}\n.field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  width: 100%;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--app-text-primary);\n  font-size: 15px;\n  margin-top: 7px;\n}\n.field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n  .mat-mdc-chip-grid {\n  background-color: var(--color-bg-dark-2) !important;\n  border-radius: 8px !important;\n}\nmat-chip-grid[_ngcontent-%COMP%] {\n  min-height: 38px;\n  border: 1px solid var(--app-border) !important;\n  border-radius: 8px;\n  padding: 4px 12px;\n  display: flex !important;\n  flex-wrap: wrap;\n  gap: 8px;\n  background-color: var(--color-bg-dark-2) !important;\n  box-sizing: border-box;\n}\nmat-chip-grid[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-action) !important;\n  background-color: var(--color-bg-dark-3) !important;\n}\n  .email-dialog mat-chip-grid input {\n  border: none !important;\n  outline: none !important;\n  background: transparent !important;\n  background-color: transparent !important;\n  flex: 1 1 auto;\n  min-width: 150px;\n  font-size: 14px;\n  padding: 4px;\n  color: var(--app-text-primary) !important;\n}\n  .email-dialog mat-chip-grid input::placeholder {\n  color: var(--app-text-secondary) !important;\n}\nmat-chip-row[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-5) !important;\n  color: var(--app-text-primary) !important;\n  font-size: 12px;\n  padding: 3px 6px 3px 10px;\n  height: 28px;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 0 0 0;\n}\n.continue-button[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  color: white !important;\n  padding: 12px 24px;\n  border-radius: 6px;\n  min-width: 100px;\n}\n.continue-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--color-primary-hover) !important;\n}\n.continue-button[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  color: #666;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-5);\n  border: 1px solid var(--app-border);\n  color: var(--app-text-primary);\n  padding: 12px 24px;\n  border-radius: 6px;\n  min-width: 100px;\n}\n.validation-message[_ngcontent-%COMP%] {\n  color: var(--app-status-error);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.body-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 12px 0;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.subject-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 12px 0;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.subject-field-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--app-text-primary);\n  font-size: 15px;\n  margin-top: 8px;\n}\n.subject-field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  padding: 8px 0;\n}\n.body-field-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--app-text-primary);\n  font-size: 15px;\n}\n.body-field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n.body-textarea-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .body-textarea-field .mat-mdc-text-field-wrapper {\n  width: 100% !important;\n}\n  .body-textarea-field .mat-mdc-form-field-infix {\n  width: 100% !important;\n}\n  .body-textarea-field textarea {\n  width: 100% !important;\n}\n.signature-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 12px 0 0 0;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.signature-field-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--app-text-primary);\n  font-size: 16px;\n  margin-top: 8px;\n  min-width: 80px;\n}\n.signature-field-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n  gap: 15px;\n}\n.signature-input-field[_ngcontent-%COMP%] {\n  width: 60% !important;\n  max-width: 100% !important;\n}\n  .signature-input-field {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .signature-input-field .mat-mdc-text-field-wrapper {\n  width: 100% !important;\n  max-width: 100% !important;\n  background-color: var(--app-input-bg) !important;\n}\n  .signature-input-field .mat-mdc-input-element {\n  color: #000 !important;\n}\n  .signature-input-field .mat-mdc-form-field-infix {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .signature-input-field .mdc-text-field {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .signature-input-field textarea, \n  .signature-input-field .mdc-text-field__input {\n  width: 100% !important;\n  max-width: 100% !important;\n  min-height: 60px !important;\n  box-sizing: border-box !important;\n  background-color: var(--app-textarea-bg) !important;\n  background: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n.signature-error-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n}\n.email-body-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  border-radius: 8px;\n  padding: 16px;\n  background-color: var(--color-bg-dark-1);\n}\n.email-content-editor[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  margin-bottom: 16px;\n  min-height: 40px;\n  font-size: 14px;\n  color: var(--app-text-primary);\n  outline: none;\n  padding: 12px;\n  background-color: var(--color-bg-dark-2);\n  border-radius: 4px;\n  border: 1px solid var(--app-border);\n}\n.email-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  background-color: var(--color-bg-dark-2);\n  margin-bottom: 16px;\n  border: 1px solid var(--app-border);\n}\n.email-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid var(--app-border);\n  color: var(--app-text-primary);\n  font-size: 14px;\n}\n.email-table-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  width: 40%;\n  background-color: var(--color-bg-dark-5);\n  color: var(--app-text-primary);\n}\n.email-table-value[_ngcontent-%COMP%] {\n  outline: none;\n  font-weight: 500;\n  background-color: var(--color-bg-dark-2);\n}\n.email-content-editor-bottom[_ngcontent-%COMP%] {\n  min-height: 60px;\n  outline: none;\n  font-size: 14px;\n  color: var(--app-text-secondary);\n  padding: 12px;\n  background-color: var(--color-bg-dark-2);\n  border-radius: 4px;\n  border: 1px solid var(--app-border);\n}\n  .rounded-dialog .mat-mdc-dialog-container {\n  border-radius: 15px !important;\n  background-color: var(--app-page-bg) !important;\n  overflow: hidden;\n}\n/*# sourceMappingURL=payment-instruction-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentInstructionDialogComponent, { className: "PaymentInstructionDialogComponent" });
})();

// src/app/pages/disbursment/disburs-dtls-comp/payment-instruction-logic.ts
var PaymentInstructionLogic = class {
  /**
   * Determines if the Payment Instruction button should be visible
   * @param pdaId - PDA ID (null if FDA only)
   * @param pdaStatus - PDA status
   * @param fdaStatus - FDA status
   * @returns true if button should be visible
   */
  static isButtonVisible(pdaId, pdaStatus, fdaStatus) {
    if (!pdaId) {
      return fdaStatus?.toUpperCase() === "COMPLETED";
    }
    return pdaStatus?.toUpperCase() === "COMPLETED";
  }
  /**
   * Determines which content source to use and the amount
   * @param pdaId - PDA ID (null if FDA only)
   * @param fdaStatus - FDA status
   * @param pdaAmount - PDA amount
   * @param fdaAmount - FDA amount
   * @returns object with content type and amount
   */
  static getContentSource(pdaId, fdaStatus, pdaAmount, fdaAmount) {
    if (!pdaId) {
      return { type: "FDA", amount: fdaAmount };
    }
    if (fdaStatus?.toUpperCase() === "COMPLETED") {
      return { type: "FDA", amount: fdaAmount };
    }
    return { type: "PDA", amount: pdaAmount };
  }
  /**
   * Complete state determination
   */
  static getPaymentInstructionState(pdaId, pdaStatus, fdaStatus, pdaAmount, fdaAmount) {
    return {
      isButtonVisible: this.isButtonVisible(pdaId, pdaStatus, fdaStatus),
      contentType: this.getContentSource(pdaId, fdaStatus, pdaAmount, fdaAmount).type,
      amount: this.getContentSource(pdaId, fdaStatus, pdaAmount, fdaAmount).amount
    };
  }
};

// src/app/pages/disbursment/disburs-dtls-comp/disburs-dtls-comp.component.ts
var _c02 = () => ({ "background-color": "var(--color-bg-dark-1) !important", color: "var(--color-text-light-1) !important", "text-align": "end !important" });
var _c12 = () => ({ "text-align": "start !important" });
var _c2 = () => ({ "background-color": "var(--color-bg-dark-1) !important", color: "var(--color-text-light-1) !important" });
var _c3 = () => ({});
function DisbursDtlsCompComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading Disbursement Details...");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-card", 9)(2, "h6", 10)(3, "mat-icon", 11);
    \u0275\u0275text(4, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Unable to Load Disbursement Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "There was an error fetching the disbursement information. Please try again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryFetch());
    });
    \u0275\u0275elementStart(9, "mat-icon", 13);
    \u0275\u0275text(10, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Retry ");
    \u0275\u0275elementEnd()()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 84);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_8_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.isEditFun(1));
    });
    \u0275\u0275text(1, "edit");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 85);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_9_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.isEditFun(1));
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86)(1, "mat-icon", 84);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_10_Template_mat_icon_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitForm(1));
    });
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 87);
    \u0275\u0275element(1, "input", 88)(2, "mat-datepicker-toggle", 89)(3, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agencyPicker_r8 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", agencyPicker_r8)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(3, _c2) : \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("for", agencyPicker_r8);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate((tmp_4_0 = ctx_r1.disbursementForm.get("agency_nomination_date")) == null ? null : tmp_4_0.value), " ");
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 87);
    \u0275\u0275element(1, "input", 91)(2, "mat-datepicker-toggle", 89)(3, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pdaPicker_r9 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", pdaPicker_r9)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(3, _c2) : \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("for", pdaPicker_r9);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate((tmp_4_0 = ctx_r1.disbursementForm.get("pda_received_ops_agent")) == null ? null : tmp_4_0.value), " ");
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 87);
    \u0275\u0275element(1, "input", 92)(2, "mat-datepicker-toggle", 89)(3, "mat-datepicker", null, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fdaPicker_r10 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", fdaPicker_r10)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(3, _c2) : \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("for", fdaPicker_r10);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate((tmp_4_0 = ctx_r1.disbursementForm.get("fda_receive_date")) == null ? null : tmp_4_0.value), " ");
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 84);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_114_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.isEditFun(2));
    });
    \u0275\u0275text(1, "edit");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 85);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_115_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.isEditFun(2));
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86)(1, "mat-icon", 84);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_116_Template_mat_icon_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitForm(2));
    });
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 93)(1, "mat-button-toggle", 94);
    \u0275\u0275text(2, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 95);
    \u0275\u0275text(4, "NA");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.disbursementForm.get("sm_detailed_entry")) == null ? null : tmp_4_0.value);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 97)(1, "mat-button-toggle", 94);
    \u0275\u0275text(2, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 95);
    \u0275\u0275text(4, "NA");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.disbursementForm.get("sm_ws_chart_ac")) == null ? null : tmp_4_0.value);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 98)(1, "mat-button-toggle", 94);
    \u0275\u0275text(2, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 95);
    \u0275\u0275text(4, "NA");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.disbursementForm.get("towage_agency_agrement")) == null ? null : tmp_4_0.value);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 99)(1, "mat-button-toggle", 94);
    \u0275\u0275text(2, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 95);
    \u0275\u0275text(4, "NA");
    \u0275\u0275elementEnd()();
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.disbursementForm.get("owners_item_rejected")) == null ? null : tmp_4_0.value);
  }
}
function DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-list", 30)(1, "mat-grid-tile")(2, "mat-card", 31)(3, "div", 32)(4, "h3");
    \u0275\u0275text(5, "General Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "button", 34);
    \u0275\u0275template(8, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_8_Template, 2, 0, "mat-icon", 35)(9, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_9_Template, 2, 0, "mat-icon", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_10_Template, 3, 0, "button", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-grid-list", 38)(12, "mat-grid-tile")(13, "div")(14, "div", 39)(15, "span");
    \u0275\u0275text(16, "Disbursement ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 39)(19, "span");
    \u0275\u0275text(20, "Port Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39)(23, "span");
    \u0275\u0275text(24, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 39)(27, "span");
    \u0275\u0275text(28, "Vessel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 39)(31, "span");
    \u0275\u0275text(32, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 39)(35, "span");
    \u0275\u0275text(36, "Port");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 39)(39, "span");
    \u0275\u0275text(40, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 39)(43, "span");
    \u0275\u0275text(44, "Cargo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 39)(47, "span");
    \u0275\u0275text(48, "ETA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 39)(51, "span");
    \u0275\u0275text(52, "ETD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 49)(55, "span", 50);
    \u0275\u0275text(56, "PDA Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "textarea", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "mat-grid-tile")(59, "div")(60, "div", 39)(61, "span");
    \u0275\u0275text(62, "OPS PIC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 39)(65, "span");
    \u0275\u0275text(66, "Agency Nomination Date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_67_Template, 5, 5, "mat-form-field", 53)(68, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_68_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 39)(70, "span");
    \u0275\u0275text(71, "PDA Received");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_72_Template, 5, 5, "mat-form-field", 53)(73, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_73_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 39)(75, "span");
    \u0275\u0275text(76, "PDA Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 39)(79, "span");
    \u0275\u0275text(80, "PDA Processing Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 39)(83, "span");
    \u0275\u0275text(84, "FDA Received");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_form_field_85_Template, 5, 5, "mat-form-field", 53)(86, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_86_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 39)(88, "span");
    \u0275\u0275text(89, "FDA Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 39)(92, "span");
    \u0275\u0275text(93, "FDA Processing Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 39)(96, "span");
    \u0275\u0275text(97, "Invoice No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 39)(100, "span");
    \u0275\u0275text(101, "Voyage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 49)(104, "span", 50);
    \u0275\u0275text(105, "FDA Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "textarea", 59);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(107, "mat-grid-tile")(108, "mat-card", 31)(109, "div", 32)(110, "h3");
    \u0275\u0275text(111, "Financial and Management Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 33)(113, "button", 34);
    \u0275\u0275template(114, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_114_Template, 2, 0, "mat-icon", 35)(115, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_icon_115_Template, 2, 0, "mat-icon", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(116, DisbursDtlsCompComponent_div_2_mat_grid_list_3_button_116_Template, 3, 0, "button", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "mat-grid-list", 60)(118, "mat-grid-tile")(119, "div", 61)(120, "div", 39)(121, "span");
    \u0275\u0275text(122, "Estimated Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 39)(125, "span");
    \u0275\u0275text(126, "PDA Amount (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 39)(129, "span");
    \u0275\u0275text(130, "FDA Amount (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(131, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 39)(133, "span");
    \u0275\u0275text(134, "PDA Agent Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(135, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 39)(137, "span");
    \u0275\u0275text(138, "FDA Agent Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(139, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 39)(141, "span");
    \u0275\u0275text(142, "Savings at PDA ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "input", 67);
    \u0275\u0275listener("input", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template_input_input_143_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateTotalLostPrevented());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 39)(145, "span");
    \u0275\u0275text(146, "Days Outstanding");
    \u0275\u0275elementEnd();
    \u0275\u0275element(147, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 39)(149, "span");
    \u0275\u0275text(150, "Detailed Entry softmar(Yes/NA)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(151, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_151_Template, 5, 0, "mat-button-toggle-group", 69)(152, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_152_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 39)(154, "span");
    \u0275\u0275text(155, "WS/Chart A/C in Softmar(Yes/NA)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(156, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_156_Template, 5, 0, "mat-button-toggle-group", 71)(157, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_157_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(158, "mat-grid-tile")(159, "div", 61)(160, "div", 39)(161, "span");
    \u0275\u0275text(162, "Final Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(163, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 39)(165, "span");
    \u0275\u0275text(166);
    \u0275\u0275elementEnd();
    \u0275\u0275element(167, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "div", 39)(169, "span");
    \u0275\u0275text(170, "Agents ROE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "input", 74);
    \u0275\u0275listener("input", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template_input_input_171_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateRoeLoss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 39)(173, "span");
    \u0275\u0275text(174, "Actual ROE from OANDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "input", 75);
    \u0275\u0275listener("input", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template_input_input_175_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateRoeLoss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 39)(177, "span");
    \u0275\u0275text(178, "ROE Loss USD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(179, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 39)(181, "span");
    \u0275\u0275text(182, "Savings at FDA ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "input", 77);
    \u0275\u0275listener("input", function DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template_input_input_183_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateTotalLostPrevented());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "div", 39)(185, "span");
    \u0275\u0275text(186, "Total Savings ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(187, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "div", 39)(189, "span");
    \u0275\u0275text(190, "Towage / Agency Agreement(Yes/NA)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(191, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_191_Template, 5, 0, "mat-button-toggle-group", 79)(192, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_192_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "div", 39)(194, "span");
    \u0275\u0275text(195, "Owners Items Rejected(Yes/NA)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(196, DisbursDtlsCompComponent_div_2_mat_grid_list_3_mat_button_toggle_group_196_Template, 5, 0, "mat-button-toggle-group", 80)(197, DisbursDtlsCompComponent_div_2_mat_grid_list_3_span_197_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(198, "mat-grid-list", 81)(199, "mat-grid-tile")(200, "div", 39)(201, "span", 82);
    \u0275\u0275text(202, "Savings Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275element(203, "textarea", 83);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_17_0;
    let tmp_20_0;
    let tmp_42_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.isInputCard1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard1);
    \u0275\u0275advance(39);
    \u0275\u0275property("value", ctx_r1.formatDate((tmp_6_0 = ctx_r1.disbursementForm.get("eta")) == null ? null : tmp_6_0.value));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.formatDate((tmp_7_0 = ctx_r1.disbursementForm.get("etd")) == null ? null : tmp_7_0.value));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isInputCard1)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(54, _c02) : \u0275\u0275pureFunction0(55, _c12))("readonly", ctx_r1.isInputCard1);
    \u0275\u0275advance(6);
    \u0275\u0275property("readonly", ctx_r1.isInputCard1)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(56, _c2) : \u0275\u0275pureFunction0(57, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard1);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.formatDate((tmp_17_0 = ctx_r1.disbursementForm.get("pda_processing_date")) == null ? null : tmp_17_0.value));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard1);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.formatDate((tmp_20_0 = ctx_r1.disbursementForm.get("fda_processing_date")) == null ? null : tmp_20_0.value));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard1)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(58, _c2) : \u0275\u0275pureFunction0(59, _c3));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isInputCard1)("ngStyle", ctx_r1.isInputCard1 ? \u0275\u0275pureFunction0(60, _c2) : \u0275\u0275pureFunction0(61, _c3))("readonly", ctx_r1.isInputCard1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance(7);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(62, _c2) : \u0275\u0275pureFunction0(63, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2);
    \u0275\u0275advance(8);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(64, _c2) : \u0275\u0275pureFunction0(65, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(66, _c2) : \u0275\u0275pureFunction0(67, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(68, _c2) : \u0275\u0275pureFunction0(69, _c3));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("PDA Remittance (", (tmp_42_0 = ctx_r1.disbursementForm.get("pda_ptm_curr_to")) == null ? null : tmp_42_0.value, ")");
    \u0275\u0275advance();
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(70, _c2) : \u0275\u0275pureFunction0(71, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(72, _c2) : \u0275\u0275pureFunction0(73, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(74, _c2) : \u0275\u0275pureFunction0(75, _c3));
    \u0275\u0275advance(8);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(76, _c2) : \u0275\u0275pureFunction0(77, _c3));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isInputCard2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInputCard2);
    \u0275\u0275advance(6);
    \u0275\u0275property("readonly", ctx_r1.isInputCard2)("ngStyle", ctx_r1.isInputCard2 ? \u0275\u0275pureFunction0(78, _c2) : \u0275\u0275pureFunction0(79, _c3));
  }
}
function DisbursDtlsCompComponent_div_2_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentInstructionEmailDialog());
    });
    \u0275\u0275text(1, " Payment Instruction");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendPdaRequest());
    });
    \u0275\u0275text(1, " Resend Link");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPDA());
    });
    \u0275\u0275text(1, " View PDA ");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewFDA());
    });
    \u0275\u0275text(1, " View FDA ");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addFDA());
    });
    \u0275\u0275text(1, " Add FDA ");
    \u0275\u0275elementEnd();
  }
}
function DisbursDtlsCompComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15)(2, "div", 16);
    \u0275\u0275template(3, DisbursDtlsCompComponent_div_2_mat_grid_list_3_Template, 204, 80, "mat-grid-list", 17);
    \u0275\u0275elementStart(4, "div", 18)(5, "button", 19);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewLessButton());
    });
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "View less");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-icon", 20);
    \u0275\u0275text(9, " expand_less");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275template(11, DisbursDtlsCompComponent_div_2_button_11_Template, 2, 0, "button", 22)(12, DisbursDtlsCompComponent_div_2_button_12_Template, 2, 0, "button", 22);
    \u0275\u0275elementStart(13, "button", 23);
    \u0275\u0275text(14, "Download-report");
    \u0275\u0275elementStart(15, "mat-icon", 24);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-menu", 25, 0)(19, "button", 26);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReport("PDA"));
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, " Download PDA Report ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 27);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReport("FDA"));
    });
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, " Download FDA Report ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 28);
    \u0275\u0275listener("click", function DisbursDtlsCompComponent_div_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.upload());
    });
    \u0275\u0275text(26, " Upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, DisbursDtlsCompComponent_div_2_button_27_Template, 2, 0, "button", 22)(28, DisbursDtlsCompComponent_div_2_button_28_Template, 2, 0, "button", 29)(29, DisbursDtlsCompComponent_div_2_button_29_Template, 2, 0, "button", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const menu_r19 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.disbursementForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.disbursementForm.get("fda_id")) == null ? null : tmp_4_0.value) && ((tmp_4_0 = ctx_r1.disbursementForm.get("pda_id")) == null ? null : tmp_4_0.value) || ((tmp_4_0 = ctx_r1.disbursementForm.get("pda_status")) == null ? null : tmp_4_0.value) === "Completed" || ((tmp_4_0 = ctx_r1.disbursementForm.get("fda_status")) == null ? null : tmp_4_0.value) === "Completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.disbursementForm.get("pda_status")) == null ? null : tmp_5_0.value) === "Requested" || ((tmp_5_0 = ctx_r1.disbursementForm.get("pda_status")) == null ? null : tmp_5_0.value) === "Re-Requested");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r19);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ((tmp_7_0 = ctx_r1.disbursementForm.get("pda_status")) == null ? null : tmp_7_0.value) === "Requested");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r1.disbursementForm.get("pda_id")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.disbursementForm.get("fda_id")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx_r1.disbursementForm.get("fda_state")) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.toString().trim().toUpperCase()) !== "D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.disbursementForm.get("pda_status")) == null ? null : tmp_10_0.value) === "Completed" && (!((tmp_10_0 = ctx_r1.disbursementForm.get("fda_id")) == null ? null : tmp_10_0.value) || ((tmp_10_0 = ctx_r1.disbursementForm.get("fda_state")) == null ? null : tmp_10_0.value == null ? null : tmp_10_0.value.toString().trim().toUpperCase()) === "D"));
  }
}
var MY_DATE_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
var DisbursDtlsCompComponent = class _DisbursDtlsCompComponent {
  fb;
  disbursementService;
  routes;
  snackBar;
  dialog;
  fileUploadService;
  datePipe;
  pdaService;
  portAgentFormService;
  disbursement_obj;
  disbursementChange = new EventEmitter();
  viewLess = new EventEmitter();
  isInputCard1 = true;
  isInputCard2 = true;
  isInputCard3 = true;
  isInputCard4 = true;
  disbursementForm;
  isLoading = false;
  hasError = false;
  loader = inject(LoaderService);
  pdaEditData = null;
  constructor(fb, disbursementService, routes, snackBar, dialog, fileUploadService, datePipe, pdaService, portAgentFormService) {
    this.fb = fb;
    this.disbursementService = disbursementService;
    this.routes = routes;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.fileUploadService = fileUploadService;
    this.datePipe = datePipe;
    this.pdaService = pdaService;
    this.portAgentFormService = portAgentFormService;
  }
  formatDate = formatDate;
  ngOnInit() {
    this.getDisbursmentDataDetailsFromDb(this.disbursement_obj);
  }
  isEditFun(id) {
    switch (id) {
      case 1:
        this.isInputCard1 = !this.isInputCard1;
        break;
      case 2:
        this.isInputCard2 = !this.isInputCard2;
        break;
    }
  }
  ngOnChanges(changes) {
    if (changes["disbursement_obj"] && this.disbursement_obj) {
      this.getDisbursmentDataDetailsFromDb(this.disbursement_obj);
    }
  }
  buildForm(disbursementdetails) {
    this.disbursementForm = this.fb.group({
      disbursement_seq: [disbursementdetails?.disbursement_seq || null],
      disbursement_id: [disbursementdetails?.disbursement_id || null],
      client_name: [disbursementdetails?.client_name || null],
      port_agent_name: [disbursementdetails?.port_agent_name || null],
      pic: [disbursementdetails?.pic || null],
      ops_pic: [disbursementdetails?.ops_pic || null],
      agency_nomination_date: [disbursementdetails?.agency_nomination_date || null],
      invoice_number: [disbursementdetails?.invoice_number || null],
      pda_id: [disbursementdetails?.pda_id || null],
      pda_received_ops_agent: [disbursementdetails?.pda_received_ops_agent || null],
      pda_processing_date: [disbursementdetails?.pda_processing_date || null],
      pda_status: [disbursementdetails?.pda_status || null],
      portagent_pda_amount: [disbursementdetails?.portagent_pda_amount || null],
      actual_pda_amount: [disbursementdetails?.actual_pda_amount || null],
      pda_remittance: [disbursementdetails?.pda_remittance || null],
      pda_remark: [disbursementdetails?.pda_remark || null],
      fda_id: [disbursementdetails?.fda_id || null],
      fda_state: [disbursementdetails?.fda_state || null],
      fda_received_ops_agent: [disbursementdetails?.fda_received_ops_agent || null],
      fda_processing_date: [disbursementdetails?.fda_processing_date || null],
      portagent_fda_amount: [disbursementdetails?.portagent_fda_amount || null],
      actual_fda_amount: [disbursementdetails?.actual_fda_amount || null],
      fda_status: [disbursementdetails?.fda_status || null],
      fda_remark: [disbursementdetails?.fda_remark || null],
      days_outstanding: [disbursementdetails?.days_outstanding || null],
      vessel_name: [disbursementdetails?.vessel_name || null],
      voyage: [disbursementdetails?.voyage || null],
      port: [disbursementdetails?.port || null],
      country: [disbursementdetails?.country || null],
      purpose: [disbursementdetails?.purpose || null],
      cargo: [disbursementdetails?.cargo || null],
      eta: [disbursementdetails?.eta || null],
      etd: [disbursementdetails?.etd || null],
      sm_estimated_amount: [disbursementdetails?.sm_estimated_amount || 0],
      sm_detailed_entry: [disbursementdetails?.sm_detailed_entry || "NA"],
      sm_ws_chart_ac: [disbursementdetails?.sm_ws_chart_ac || "NA"],
      owners_item_rejected: [disbursementdetails?.owners_item_rejected || "NA"],
      towage_agency_agrement: [disbursementdetails?.towage_agency_agrement || "NA"],
      roe_agent: [disbursementdetails?.roe_agent || null],
      roe_actual_oanda: [disbursementdetails?.roe_actual_oanda || null],
      roe_loss: [disbursementdetails?.roe_loss || null],
      loss_prevention_pda: [disbursementdetails?.loss_prevention_pda || null],
      loss_prevention_fda: [disbursementdetails?.loss_prevention_fda || null],
      total_loss_prevented: [disbursementdetails?.total_loss_prevented || null],
      loss_prevented_reason: [disbursementdetails?.loss_prevented_reason || null],
      fda_receive_date: [disbursementdetails?.fda_receive_date || null],
      pda_receive_date: [disbursementdetails?.pda_receive_date || null],
      final_status: [disbursementdetails?.final_status || null],
      advance_percentage: [disbursementdetails?.advance_percentage || null],
      pda_ptm_curr_to: [disbursementdetails?.pda_ptm_curr_to || null],
      fda_ptm_curr_to: [disbursementdetails?.fda_ptm_curr_to || null],
      manual_pda_amount: [disbursementdetails?.manual_pda_amount || null],
      manual_fda_amount: [disbursementdetails?.manual_fda_amount || null]
    });
  }
  /** Fetches disbursement details data from the database. */
  getDisbursmentDataDetailsFromDb(disbursement_obj) {
    this.isLoading = true;
    this.disbursementService.getDisbursementDataDtls(disbursement_obj?.disbursement_seq).subscribe({
      next: (details) => {
        const disbursementDetails = new DisbursmentDetails(details);
        this.buildForm(disbursementDetails);
        this.isLoading = false;
      },
      error: (error) => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }
  /** Handles retry logic for fetching disbursement details. */
  retryFetch() {
    this.hasError = false;
    this.getDisbursmentDataDetailsFromDb(this.disbursement_obj);
  }
  submitForm(id) {
    switch (id) {
      case 1:
        this.isInputCard1 = true;
        break;
      case 2:
        this.isInputCard2 = true;
        break;
    }
    if (this.disbursementForm.valid) {
      const formValue = __spreadValues({}, this.disbursementForm.value);
      if (formValue.pda_received_ops_agent) {
        formValue.pda_receive_date = formatToLocalISOString(formValue.pda_received_ops_agent);
      }
      if (formValue.fda_received_ops_agent) {
        formValue.fda_received_ops_agent = formatToLocalISOString(formValue.fda_received_ops_agent);
      }
      if (formValue.agency_nomination_date) {
        formValue.agency_nomination_date = formatToLocalISOString(formValue.agency_nomination_date);
      }
      if (formValue.fda_receive_date) {
        formValue.fda_receive_date = formatToLocalISOString(formValue.fda_receive_date);
      }
      this.disbursementChange.emit(formValue);
    }
  }
  // Function for Action Buttons 
  viewLessButton() {
    this.viewLess.emit();
    this.isInputCard1 = true;
  }
  viewPDA() {
    const disbursement_seq = this.disbursementForm.get("disbursement_seq")?.value;
    sessionStorage.setItem("disbursement_seq", disbursement_seq);
    if (this.disbursementForm.get("pda_id")?.value != null) {
      this.routes.navigate(["layout/pda/edit"]);
    } else {
      this.snackBar.showWarning("PDA not available for this disbursement");
    }
  }
  viewFDA() {
    const disbursement_seq = this.disbursementForm.get("disbursement_seq")?.value;
    sessionStorage.setItem("disbursement_seq", disbursement_seq);
    if (this.disbursementForm.get("fda_id")?.value != null) {
      this.routes.navigate(["layout/fda/edit"]);
    } else {
      this.snackBar.showWarning("FDA not available for this disbursement");
    }
  }
  addFDA() {
    const disbursement_id = this.disbursementForm.get("disbursement_id")?.value;
    const pic = this.disbursementForm.get("pic")?.value;
    const idParam = `${disbursement_id} - ${pic}`;
    this.routes.navigate(["layout/fda/create", idParam]);
  }
  upload() {
    const isUpload = true;
    const disbursementId = this.disbursementForm.get("disbursement_id")?.value;
    const disbursementSeq = this.disbursementForm.get("disbursement_seq")?.value;
    const data = {
      isUploadMode: isUpload,
      files: [],
      disbursementId,
      pdaId: this.disbursementForm.get("pda_id")?.value,
      fdaId: this.disbursementForm.get("fda_id")?.value,
      disbursement_seq: disbursementSeq,
      isDisbursment: true
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "96vw";
    dialogConfig.maxWidth = "100vw";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(FileUploadComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
      }
    });
  }
  downloadReport(option) {
    if (option === "PDA" && this.disbursementForm.get("pda_id")?.value === null) {
      this.snackBar.showWarning("PDA not available for this disbursement");
    } else if (option === "FDA" && this.disbursementForm.get("fda_id")?.value === null) {
      this.snackBar.showWarning("FDA not available for this disbursement");
    } else {
      const data = {
        disbursement_seq: this.disbursementForm.get("disbursement_seq")?.value || null,
        report_type: option
      };
      this.loader.show();
      this.fileUploadService.downloadReport(data, this.disbursementForm.get("disbursement_id")?.value || null).subscribe({
        next: (res) => {
          this.loader.hide();
        },
        error: (error) => {
          this.loader.hide();
          const errMsg = error.message || "Something went wrong please try again later.";
          this.snackBar.showError(errMsg);
        }
      });
    }
  }
  resendPdaRequest() {
    this.loader.show();
    const data = { disbursement_seq: this.disbursementForm.get("disbursement_seq")?.value };
    this.pdaService.resendPdaLink(data).subscribe({
      next: (response) => {
        this.loader.hide();
        this.snackBar.showSuccess(response.message);
      },
      error: (error) => {
        this.loader.hide();
        const errMsg = error?.error?.error || "Something went wrong. Please try again later.";
        this.snackBar.showError(errMsg);
      }
    });
  }
  calculateTotalLostPrevented() {
    const pdaValue = Number(this.disbursementForm.get("loss_prevention_pda")?.value) || 0;
    const fdaValue = Number(this.disbursementForm.get("loss_prevention_fda")?.value) || 0;
    const total = pdaValue + fdaValue;
    this.disbursementForm.get("total_loss_prevented")?.setValue(total);
  }
  calculateRoeLoss() {
    const actualRoe = Number(this.disbursementForm.get("roe_actual_oanda")?.value) || 0;
    const agentRoe = Number(this.disbursementForm.get("roe_agent")?.value) || 0;
    const roeLossRaw = actualRoe - agentRoe;
    const roeLoss = Number(roeLossRaw.toFixed(4));
    this.disbursementForm.get("roe_loss")?.setValue(roeLoss, { emitEvent: false });
  }
  getFormValue(fieldName, defaultValue = "") {
    return this.disbursementForm?.get(fieldName)?.value || defaultValue;
  }
  openPaymentInstructionEmailDialog() {
    const pdaId = this.getFormValue("pda_id");
    const pdaStatus = this.getFormValue("pda_status");
    const fdaStatus = this.getFormValue("fda_status");
    const pdaAmount = Number(this.getFormValue("actual_pda_amount", "0"));
    const fdaAmount = Number(this.getFormValue("actual_fda_amount", "0"));
    const state = PaymentInstructionLogic.getPaymentInstructionState(pdaId, pdaStatus, fdaStatus, pdaAmount, fdaAmount);
    if (!state.isButtonVisible) {
      this.snackBar.showWarning("Payment Instruction is not available at this time");
      return;
    }
    const advancePay = Number(this.getFormValue("pda_remittance", "0"));
    const advancePercentage = this.disbursementForm.get("advance_percentage")?.value || 0;
    const dialogData = {
      to: [],
      cc: [],
      vesselName: this.getFormValue("vessel_name", "VESSEL"),
      voyage: this.getFormValue("voyage", "VOY"),
      port: this.getFormValue("port", "PORT"),
      purpose: this.getFormValue("purpose", "PURPOSE"),
      portAgent: this.getFormValue("port_agent_name", "AGENCY"),
      pdaAmount: state.amount.toString(),
      advancePay: advancePay.toString(),
      advancePercentage,
      due: state.contentType === "FDA" ? this.getFormValue("fda_processing_date") : this.getFormValue("pda_processing_date"),
      type: state.contentType,
      disbursement_id: this.getFormValue("disbursement_id"),
      pmt_curr_to: state.contentType === "PDA" ? this.getFormValue("pda_ptm_curr_to", "") : this.getFormValue("fda_ptm_curr_to", "")
    };
    this.portAgentFormService.getMasterData({ fields: ["client"] }).subscribe({
      next: (response) => {
        const matchedClient = response.client?.find((c) => c.company_name === this.getFormValue("client_name"));
        this.loader.hide();
        dialogData.to = matchedClient?.email ? Array.isArray(matchedClient.email) ? matchedClient.email : [matchedClient.email] : [];
        dialogData.cc = dialogData.to;
        const dialogRef = this.dialog.open(PaymentInstructionDialogComponent, {
          disableClose: true,
          width: "900px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          panelClass: ["rounded-dialog", "theme-dark"],
          data: dialogData
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.loader.show();
            this.disbursementService.paymentInstructionEmail(result).subscribe({
              next: (res) => {
                this.loader.hide();
                this.dialog.open(EmailSentNotificationComponent, {
                  disableClose: true,
                  panelClass: "email-dialog-style",
                  width: "400px",
                  height: "150px"
                });
              },
              error: (err) => {
                this.loader.hide();
                this.snackBar.showError("Failed to send payment instruction email");
              }
            });
          }
        });
      },
      error: (err) => {
        this.loader.hide();
        this.snackBar.showError("Failed to load client list");
      }
    });
  }
  static \u0275fac = function DisbursDtlsCompComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisbursDtlsCompComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DisbursementService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FileUploadService), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(PdaService), \u0275\u0275directiveInject(PortAgentFormService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisbursDtlsCompComponent, selectors: [["app-disburs-dtls-comp"]], inputs: { disbursement_obj: "disbursement_obj" }, outputs: { disbursementChange: "disbursementChange", viewLess: "viewLess" }, standalone: true, features: [\u0275\u0275ProvidersFeature([
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["menu", "matMenu"], ["agencyPicker", ""], ["pdaPicker", ""], ["fdaPicker", ""], ["class", "loader-container", 4, "ngIf"], [4, "ngIf"], ["class", "container theme-dark", 4, "ngIf"], [1, "loader-container"], ["diameter", "20", 2, "margin-left", "auto", "margin-right", "auto"], [1, "mat-elevation-z3"], [2, "font-size", "15px"], ["fontSet", "material-symbols-outlined", 1, "err-icon"], ["mat-raised-button", "", "color", "primary", 1, "action-btn", 2, "width", "10%", 3, "click"], ["fontSet", "material-symbols-outlined", 2, "font-size", "17px", "margin-bottom", "-12px"], [1, "container", "theme-dark"], [3, "formGroup"], [2, "background", "var(--app-page-bg)"], ["cols", "2", "rowHeight", "515px", "gutterSize", "12px", "style", "margin-bottom: 8px;", 4, "ngIf"], [1, "cards_footer"], ["mat-raised-button", "", "color", "primary", 1, "action-btn", "view-less", 3, "click"], ["fontSet", "material-symbols-outlined", 2, "margin", "-3px", "margin-left", "2px"], [1, "dis-btn-section"], ["mat-raised-button", "", "class", "action-btn", 3, "click", 4, "ngIf"], ["matIconButton", "", 1, "action-btn", 3, "matMenuTriggerFor"], [2, "height", "15px", "width", "31px", "font-size", "18px"], [1, "menu-report"], ["mat-menu-item", "", 1, "action-btn", 3, "click", "disabled"], ["mat-menu-item", "", 1, "action-btn", 3, "click"], ["mat-raised-button", "", 1, "action-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", "class", "action-btn", 3, "click", 4, "ngIf"], ["cols", "2", "rowHeight", "515px", "gutterSize", "12px", 2, "margin-bottom", "8px"], [1, "info-card2", "mat-elevation-z3"], [1, "card-header"], [2, "display", "flex", "justify-content", "space-around", "align-content", "space-around"], ["mat-icon-button", "", 1, "edit-button"], ["fontSet", "material-symbols-outlined", 3, "click", 4, "ngIf"], ["fontSet", "material-symbols-outlined", "style", "color: red;", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "save-button", 4, "ngIf"], ["cols", "2", "rowHeight", "320px"], [1, "field"], ["type", "text", "readonly", "", "formControlName", "disbursement_id", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "port_agent_name", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "client_name", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "vessel_name", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "country", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "port", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "purpose", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "cargo", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important", 3, "value"], [1, "field", 2, "width", "100%"], [2, "margin-top", "15px", "white-space", "nowrap"], ["formControlName", "pda_remark", "rows", "3", 1, "isInput", 2, "width", "80%", 3, "disabled", "ngStyle", "readonly"], ["type", "text", "formControlName", "ops_pic", 1, "isInput", 2, "width", "60%", 3, "readonly", "ngStyle"], ["appearance", "outline", "class", "date-picker-field", 4, "ngIf"], ["class", "isInput", "style", "font-weight: 500;color: var(--color-white)", 4, "ngIf"], ["type", "text", "readonly", "", "formControlName", "pda_status", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "readonly", "", "formControlName", "fda_status", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "formControlName", "invoice_number", 1, "isInput", 3, "readonly", "ngStyle"], ["type", "text", "readonly", "", "formControlName", "voyage", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["formControlName", "fda_remark", "rows", "3", 1, "isInput", 2, "width", "80%", 3, "disabled", "ngStyle", "readonly"], ["cols", "2", "rowHeight", "260px", 2, "margin-bottom", "0", "border", "none"], [2, "width", "100%"], ["type", "number", "formControlName", "sm_estimated_amount", 1, "isInput", 3, "readonly", "ngStyle"], ["type", "text", "formControlName", "portagent_pda_amount", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important", 3, "readonly"], ["type", "number", "readonly", "", "formControlName", "portagent_fda_amount", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "text", "formControlName", "manual_pda_amount", 1, "isInput", 3, "readonly", "ngStyle"], ["type", "text", "formControlName", "manual_fda_amount", 1, "isInput", 3, "readonly", "ngStyle"], ["type", "number", "formControlName", "loss_prevention_pda", 1, "isInput", 3, "input", "readonly", "ngStyle"], ["type", "text", "readonly", "", "formControlName", "days_outstanding", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["formControlName", "sm_detailed_entry", "class", "toggle-yn-group", 4, "ngIf"], ["class", "isInput", "style", "font-weight: 600;color: var(--color-white)", 4, "ngIf"], ["formControlName", "sm_ws_chart_ac", "class", "toggle-yn-group", 4, "ngIf"], ["type", "text", "readonly", "", "formControlName", "final_status", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "number", "formControlName", "pda_remittance", 1, "isInput", 3, "readonly", "ngStyle"], ["type", "number", "formControlName", "roe_agent", 1, "isInput", 3, "input", "readonly", "ngStyle"], ["type", "number", "formControlName", "roe_actual_oanda", 1, "isInput", 3, "input", "readonly", "ngStyle"], ["type", "number", "readonly", "", "formControlName", "roe_loss", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["type", "number", "formControlName", "loss_prevention_fda", 1, "isInput", 3, "input", "readonly", "ngStyle"], ["type", "number", "readonly", "", "formControlName", "total_loss_prevented", 1, "isInput", 2, "background-color", "var(--color-bg-dark-1) !important", "color", "var(--color-text-light-1) !important"], ["formControlName", "towage_agency_agrement", "class", "toggle-yn-group", 4, "ngIf"], ["formControlName", "owners_item_rejected", "class", "toggle-yn-group", 4, "ngIf"], ["cols", "1", "rowHeight", "40px", 2, "margin-bottom", "0"], [2, "white-space", "nowrap"], ["formControlName", "loss_prevented_reason", "rows", "3", 1, "isInput", 2, "width", "80%", 3, "readonly", "ngStyle"], ["fontSet", "material-symbols-outlined", 3, "click"], ["fontSet", "material-symbols-outlined", 2, "color", "red", 3, "click"], ["mat-icon-button", "", 1, "save-button"], ["appearance", "outline", 1, "date-picker-field"], ["matInput", "", "formControlName", "agency_nomination_date", 3, "matDatepicker", "ngStyle"], ["matSuffix", "", 3, "for"], [1, "isInput", 2, "font-weight", "500", "color", "var(--color-white)"], ["matInput", "", "formControlName", "pda_received_ops_agent", 2, "width", "60%", 3, "matDatepicker", "ngStyle"], ["matInput", "", "formControlName", "fda_receive_date", 3, "matDatepicker", "ngStyle"], ["formControlName", "sm_detailed_entry", 1, "toggle-yn-group"], ["value", "Yes"], ["value", "NA"], [1, "isInput", 2, "font-weight", "600", "color", "var(--color-white)"], ["formControlName", "sm_ws_chart_ac", 1, "toggle-yn-group"], ["formControlName", "towage_agency_agrement", 1, "toggle-yn-group"], ["formControlName", "owners_item_rejected", 1, "toggle-yn-group"], ["mat-raised-button", "", "color", "primary", 1, "action-btn", 3, "click"]], template: function DisbursDtlsCompComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DisbursDtlsCompComponent_div_0_Template, 4, 0, "div", 4)(1, DisbursDtlsCompComponent_div_1_Template, 12, 0, "div", 5)(2, DisbursDtlsCompComponent_div_2_Template, 30, 9, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasError && ctx.disbursementForm);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    NgStyle,
    MatGridListModule,
    MatGridList,
    MatGridTile,
    MatCardModule,
    MatCard,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatFormField,
    MatSuffix,
    MatProgressSpinner,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatSelectModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ], styles: ["\n\n.info-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px;\n  width: 100%;\n  height: 200px;\n  background-color: var(--color-bg-dark-1) !important;\n  border: 1px solid var(--color-bg-dark-2) !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px var(--shadow-1);\n  .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: -10px;\n    margin-bottom: -10px;\n    h3 {\n      font-size: 16px;\n      font-weight: 500;\n      color: var(--color-primary);\n    }\n  }\n  .card-content {\n    display: flex;\n    gap: 24px;\n  }\n  .column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .field {\n    display: flex;\n    gap: 2px;\n    text-align: left;\n    margin: 2px;\n    justify-content: space-between;\n    span {\n      color: var(--color-text-light-1) !important;\n      white-space: nowrap;\n    }\n    strong {\n      color: var(--color-white) !important;\n    }\n  }\n  .divider {\n    width: 1px;\n    background-color: var(--color-border-5);\n  }\n}\n.info-card2[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  width: 100%;\n  height: auto;\n  min-height: 420px;\n  background-color: var(--color-bg-dark-1) !important;\n  border: 1px solid var(--color-bg-dark-2) !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px var(--shadow-1);\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: -10px;\n    h3 {\n      font-size: 16px;\n      font-weight: 500;\n      color: var(--color-primary);\n    }\n  }\n  .card-content {\n    display: flex;\n    gap: 24px;\n  }\n  .column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .loss-field {\n    display: flex;\n    margin: 2px;\n    justify-content: space-between;\n    span {\n      color: var(--color-text-light-1) !important;\n      white-space: nowrap;\n    }\n    strong {\n      color: var(--color-white) !important;\n    }\n  }\n  .field {\n    display: flex;\n    gap: 20px;\n    text-align: left;\n    margin: 0;\n    padding: 0 2px;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--color-border-5);\n    align-items: center;\n    min-height: 28px;\n    span {\n      color: var(--color-text-light-1) !important;\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n    }\n    strong {\n      color: var(--color-white) !important;\n    }\n  }\n  .divider {\n    width: 1px;\n    background-color: var(--color-border-5);\n  }\n}\n.edit-button[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  border-radius: 8px;\n  border: none;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 5px;\n  box-shadow: 0px 1px 3px var(--shadow-2);\n  min-width: 30px !important;\n  min-height: 24px !important;\n  position: relative;\n  z-index: 5;\n  .mat-icon {\n    color: var(--color-bg-light-1);\n    font-size: 18px;\n    padding-top: 4px;\n  }\n  &:hover {\n    background-color: var(--color-primary-hover) !important;\n    cursor: pointer;\n  }\n}\n.save-button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  border-radius: 8px;\n  border: none;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 1px 3px var(--shadow-2);\n  min-width: 30px !important;\n  min-height: 24px !important;\n  position: relative;\n  z-index: 5;\n  .mat-icon {\n    color: var(--color-bg-light-1);\n    font-size: 18px;\n    padding-top: 4px;\n  }\n  &:hover {\n    background-color: var(--color-success-transparent) !important;\n    cursor: pointer;\n  }\n}\n.isInput[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-weight: 600;\n  outline: none;\n  text-align: end;\n  background-color: transparent !important;\n  color: var(--app-text-secondary) !important;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 6px;\n  font-size: 12px;\n}\ninput.isInput[_ngcontent-%COMP%], \nselect.isInput[_ngcontent-%COMP%] {\n  display: inline-block;\n}\ntextarea.isInput[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  justify-content: flex-start !important;\n}\ntextarea.isInput[_ngcontent-%COMP%]:not([readonly]):not([disabled]) {\n  background-color: white !important;\n  color: black !important;\n}\nmat-grid-list[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  overflow: visible !important;\n}\n  mat-grid-list mat-grid-tile {\n  overflow: visible !important;\n}\n  mat-grid-list .mat-grid-tile-content {\n  overflow: visible !important;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  overflow-y: auto;\n  height: 100px;\n  padding: 5px;\n}\n.err-icon[_ngcontent-%COMP%] {\n  color: var(--color-error);\n  font-size: 20px;\n  margin-bottom: -7px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  height: 30px !important;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none !important;\n  border-radius: 8px !important;\n  min-width: 100px !important;\n  font-size: 16px !important;\n  white-space: nowrap !important;\n  margin-top: 5px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.cards_footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  background: transparent;\n  gap: 10px;\n  padding: 12px 0;\n  margin-top: -100px;\n  position: relative;\n  z-index: 10;\n}\n.dis-btn-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n}\n  .mat-grid-tile-content {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: flex;\n  align-items: flex-start !important;\n  justify-content: initial !important;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: visible !important;\n}\n  .mat-grid-tile-content > div {\n  width: 100%;\n  overflow: visible !important;\n}\n  .menu-report {\n  min-width: 250px !important;\n}\n  .mat-mdc-menu-panel {\n  min-width: 209px !important;\n  margin-left: 0px;\n  margin-bottom: 10px !important;\n  margin-top: 10px !important;\n  padding: 2px;\n  background-color: var(--color-bg-dark-1) !important;\n  border: 1px solid var(--color-bg-dark-2);\n}\n  .mat-mdc-menu-item {\n  min-height: 40px !important;\n}\n  .mat-menu-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px !important;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%], \n.mat-mdc-menu-item[_ngcontent-%COMP%]:visited, \n.mat-mdc-menu-item[_ngcontent-%COMP%]:link {\n  text-align: center;\n}\n  .mat-mdc-menu-content {\n  margin: 0;\n  padding: 0px !important;\n  outline: 0;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%]:not([disabled]):hover {\n  background-color: var(--color-bg-dark-2);\n  color: var(--color-white) !important;\n}\n  .mat-mdc-menu-item-text {\n  font-size: 19px;\n  font-weight: 500 !important;\n}\n  .field app-date-time-picker .mat-mdc-form-field {\n  width: 100%;\n}\n  .field app-date-time-picker .mat-mdc-text-field-wrapper {\n  padding: 0 !important;\n}\n  .field app-date-time-picker .mat-mdc-form-field-infix {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  min-height: auto !important;\n}\n  .field app-date-time-picker .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n  .field app-date-time-picker .mdc-text-field {\n  padding: 0 !important;\n}\n  .field app-date-time-picker .mat-datepicker-toggle {\n  display: inline-block !important;\n}\n  .field app-date-time-picker .mat-icon-button {\n  width: 40px !important;\n  height: 40px !important;\n  padding: 8px !important;\n}\n  .field app-date-time-picker .mat-mdc-form-field-icon-suffix {\n  display: flex !important;\n  align-items: center !important;\n}\n  .field app-date-time-picker ngx-mat-datepicker-toggle button {\n  display: flex !important;\n}\n.date-picker-field[_ngcontent-%COMP%] {\n  width: 60% !important;\n  font-size: 12px;\n}\n  .date-picker-field .mat-mdc-text-field-wrapper {\n  padding: 0 !important;\n}\n  .date-picker-field .mat-mdc-form-field-infix {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  min-height: 24px !important;\n}\n  .date-picker-field .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n  .date-picker-field .mdc-text-field {\n  padding: 0 8px !important;\n  height: 24px !important;\n}\n  .date-picker-field .mat-mdc-input-element {\n  font-size: 11px !important;\n  font-weight: 600 !important;\n}\n  .date-picker-field .mat-datepicker-toggle {\n  width: 24px !important;\n  height: 24px !important;\n}\n  .date-picker-field .mat-mdc-icon-button {\n  padding: 0px !important;\n  width: 24px !important;\n  height: 24px !important;\n}\n  .date-picker-field .mat-mdc-icon-button .mat-icon {\n  font-size: 16px !important;\n}\n  .date-picker-field .mat-datepicker-toggle-default-icon {\n  transform: scale(0.75);\n}\n  .date-picker-field .mat-mdc-icon-button:active {\n  transform: scale(0.9);\n}\n  .mat-datepicker-popup {\n  transform: scale(0.75);\n  transform-origin: top center;\n}\n  .mat-datepicker-content {\n  transform: scale(1);\n  box-shadow: 0 4px 12px var(--shadow-1);\n  border-radius: 8px;\n}\n  .mat-calendar {\n  font-size: 13px;\n}\n  .mat-calendar-header {\n  padding: 8px;\n}\n  .mat-calendar-body-cell-content {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n  .mat-calendar-body-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n.loss-field[_ngcontent-%COMP%]   input.isInput[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-weight: 600;\n  outline: none;\n  text-align: start;\n  padding: 4px 8px;\n}\n.loss-field[_ngcontent-%COMP%]   input.isInput[_ngcontent-%COMP%]:not([readonly]) {\n  border: 1px solid var(--color-border-5) !important;\n  background-color: var(--color-bg-dark-2) !important;\n  transition: all 0.2s ease;\n}\n.loss-field[_ngcontent-%COMP%]   textarea.isInput[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-weight: 600;\n  outline: none;\n  text-align: start;\n  width: 100%;\n  padding: 6px 8px;\n  resize: vertical;\n  min-height: 40px;\n  font-family: inherit;\n  font-size: inherit;\n}\n.loss-field[_ngcontent-%COMP%]   textarea.isInput[_ngcontent-%COMP%]:not([readonly]) {\n  border: 1px solid var(--color-border-5) !important;\n  background-color: white !important;\n  color: black !important;\n  transition: all 0.2s ease;\n}\n.loss-field[_ngcontent-%COMP%]   textarea.isInput[_ngcontent-%COMP%]:not([readonly]):focus {\n  border-bottom: 2px solid var(--color-primary) !important;\n  outline: none;\n}\n.loss-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin: 2px;\n  justify-content: flex-start;\n  overflow: visible !important;\n  min-height: fit-content;\n}\n.loss-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1) !important;\n  white-space: normal;\n  word-wrap: break-word;\n  margin-bottom: 4px;\n}\n.loss-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.field[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  min-height: fit-content;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-wrap: break-word;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n  .rounded-dialog .mat-mdc-dialog-container {\n  border-radius: 12px !important;\n}\n  .toggle-yn-group {\n  height: 20px !important;\n  border: 1px solid var(--color-border-5) !important;\n  border-radius: 4px !important;\n  overflow: hidden;\n  box-shadow: none !important;\n}\n  .toggle-yn-group.mat-button-toggle-group {\n  box-shadow: none !important;\n  border-radius: 4px !important;\n}\n  .toggle-yn-group .mat-button-toggle {\n  background-color: var(--color-bg-dark-2) !important;\n  color: var(--color-text-light-1) !important;\n  border: none !important;\n  height: 20px !important;\n}\n  .toggle-yn-group .mat-button-toggle-button {\n  height: 20px !important;\n  padding: 0 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n  .toggle-yn-group .mat-button-toggle-label-content {\n  line-height: 20px !important;\n  padding: 0 !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  display: flex !important;\n  align-items: center !important;\n}\n  .toggle-yn-group .mat-button-toggle-checked {\n  background-color: var(--color-primary) !important;\n  color: var(--color-white) !important;\n}\n  .toggle-yn-group .mat-button-toggle-checked .mat-button-toggle-label-content {\n  color: var(--color-white) !important;\n}\n  .toggle-yn-group .mat-button-toggle + .mat-button-toggle {\n  border-left: 1px solid var(--color-border-5) !important;\n}\n  .toggle-yn-group .mat-button-toggle-focus-overlay {\n  display: none !important;\n}\n/*# sourceMappingURL=disburs-dtls-comp.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisbursDtlsCompComponent, { className: "DisbursDtlsCompComponent" });
})();

export {
  DisbursementService,
  DisbursDtlsCompComponent
};
//# sourceMappingURL=chunk-KFKKS5HT.js.map
