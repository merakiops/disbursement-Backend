import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-ETTDPF5T.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import {
  FileDisplayComponent,
  FileUploadService
} from "./chunk-3TJ2XT7F.js";
import {
  MatTableModule
} from "./chunk-HAXYAMEC.js";
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
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  COMMA,
  ENTER,
  MatOption
} from "./chunk-BAX6ITZM.js";
import {
  DomSanitizer
} from "./chunk-K7GFJLXC.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  ElementRef,
  NgForOf,
  NgIf,
  Renderer2,
  inject,
  map,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7YW2NURN.js";

// src/app/pages/fda/approval-request-dialog/approval-request-dialog.component.ts
function ApprovalRequestDialogComponent_mat_chip_row_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 45);
    \u0275\u0275listener("removed", function ApprovalRequestDialogComponent_mat_chip_row_16_Template_mat_chip_row_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeToEmail(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 46)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
  }
}
function ApprovalRequestDialogComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 47);
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
function ApprovalRequestDialogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " At least one recipient is required ");
    \u0275\u0275elementEnd();
  }
}
function ApprovalRequestDialogComponent_mat_chip_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 45);
    \u0275\u0275listener("removed", function ApprovalRequestDialogComponent_mat_chip_row_30_Template_mat_chip_row_removed_0_listener() {
      const email_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeCcEmail(email_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 46)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r7, " ");
  }
}
function ApprovalRequestDialogComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 47);
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
function ApprovalRequestDialogComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " At least one CC recipient is required ");
    \u0275\u0275elementEnd();
  }
}
function ApprovalRequestDialogComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Body is required ");
    \u0275\u0275elementEnd();
  }
}
function ApprovalRequestDialogComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Signature is required ");
    \u0275\u0275elementEnd();
  }
}
function ApprovalRequestDialogComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div");
    \u0275\u0275element(3, "mat-checkbox", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275element(8, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275element(10, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 53)(12, "mat-checkbox", 30);
    \u0275\u0275text(13, "Client, Owner, Charter, Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 54);
    \u0275\u0275element(15, "textarea", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const serviceControl_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", serviceControl_r9.get("display_to_client"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_8_0 = serviceControl_r9.get("service")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", serviceControl_r9.get("systemTotal"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", serviceControl_r9.get("total"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", serviceControl_r9.get("client_option"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", serviceControl_r9.get("meraki_remark_client"));
  }
}
var ApprovalRequestDialogComponent = class _ApprovalRequestDialogComponent {
  dialogRef;
  data;
  fb;
  snackBar;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  toEmailList = [];
  ccEmailList = [];
  bodyText = "";
  signatureText = "";
  displayedColumns = ["select", "service", "system", "agent", "request"];
  selectedToEmails = [];
  selectedCcEmails = [];
  separatorKeysCodes = [ENTER, COMMA];
  selectedAll = false;
  to = new FormControl("", [Validators.email]);
  cc = new FormControl("", [Validators.email]);
  body = new FormControl("", [Validators.required]);
  signatureData = sessionStorage.getItem("signature");
  meraki_comment_to_client = new FormControl("");
  signature = new FormControl(this.signatureData != null ? this.signatureData : "");
  createServiceForm;
  services = [];
  filteredToOptions;
  filteredCcOptions;
  datasource = [];
  update_signature = new FormControl("");
  constructor(dialogRef, data, fb, snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.fb = fb;
    this.snackBar = snackBar;
    this.toEmailList = data?.to || [];
    this.ccEmailList = data?.cc || [];
    this.bodyText = data?.body || "";
    this.signatureText = data?.signatureText || "";
    if (data?.services?.items && Array.isArray(data.services.items)) {
      this.services = data.services.items;
    }
  }
  get servicesFormArray() {
    return this.createServiceForm.get("services");
  }
  ngOnInit() {
    this.filteredToOptions = this.to.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.toEmailList)));
    this.filteredCcOptions = this.cc.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.ccEmailList)));
    this.createServiceForm = this.fb.group({
      services: this.fb.array([])
    });
    if (this.services && Array.isArray(this.services)) {
      this.services.forEach((service) => {
        this.addService(service);
      });
    }
  }
  addService(item) {
    const serviceGroup = this.fb.group({
      SNO: [item.SNO],
      code: [item.code],
      total: [item.total || 0],
      service: [item.service || ""],
      purpose: [item.purpose || ""],
      pa_remark: [item.pa_remark || ""],
      meraki_feedback: [item.meraki_feedback || ""],
      meraki_remark_client: [item.meraki_remark_client || ""],
      client_comment: [item.client_comment || ""],
      client_option: [item.client_option === "N" ? false : true],
      info_msg: [item.info_msg || ""],
      agreed: [item.agreed || "N"],
      negotiate: [item.negotiate || "N"],
      subService: [item.subService || []],
      expanded: [false],
      systemTotal: [item.systemTotal || 0],
      display_to_client: [item.display_to_client === "N" ? false : true]
    });
    this.servicesFormArray.push(serviceGroup);
    this.updateDataSource();
  }
  updateDataSource() {
    this.datasource = [];
    for (let service of this.servicesFormArray.controls) {
      this.datasource.push(service);
    }
    ;
  }
  filterOptions(value, datasource) {
    const filterValue = value.toLowerCase();
    return datasource.filter((option) => option.toLowerCase().includes(filterValue));
  }
  addEmailToSelection(email, targetArray) {
    if (!email || targetArray.includes(email) || !this.isValidEmail(email)) {
      return false;
    }
    targetArray.push(email);
    return true;
  }
  isValidEmail(email) {
    return Validators.email({ value: email }) === null;
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
  onContinue() {
    if (!this.isFormValid()) {
      return;
    }
    const services = this.createServiceForm.value.services;
    const selectedServices = services.filter((service) => service.display_to_client);
    if (selectedServices.length === 0) {
      this.snackBar.showError("Please select at least one service");
      return;
    }
    const formData = this.createServiceForm.value;
    const clientServices = this.formatServiceData(formData);
    if (this.update_signature.value) {
      sessionStorage.setItem("signature", this.signature.value ?? "");
    }
    this.dialogRef.close({ to: this.selectedToEmails, cc: this.selectedCcEmails, meraki_comment_to_client: this.meraki_comment_to_client.value, email_signature: this.signature.value ?? "", update_signature: this.update_signature ? "Y" : "N", services: clientServices });
  }
  isFormValid() {
    return this.selectedToEmails.length > 0 && this.selectedCcEmails.length > 0;
  }
  formatServiceData(formData) {
    return formData.services.map((service) => ({
      SNO: service.SNO,
      code: service.code,
      total: service.total,
      service: service.service,
      purpose: service.purpose,
      pa_remark: service.pa_remark,
      meraki_feedback: service.meraki_feedback,
      meraki_remark_client: service.meraki_remark_client,
      client_comment: service.client_comment,
      client_option: service.client_option ? "Y" : "N",
      info_msg: service.info_msg,
      agreed: service.agreed || "N",
      negotiate: service.negotiate || "N",
      subService: Array.isArray(service.subService) ? service.subService : [service.subService],
      display_to_client: service.display_to_client ? "Y" : "N"
    }));
  }
  selectAll() {
    this.selectedAll = !this.selectedAll;
    this.servicesFormArray.controls.forEach((control) => {
      control.patchValue({
        display_to_client: this.selectedAll
      });
    });
  }
  static \u0275fac = function ApprovalRequestDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApprovalRequestDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalRequestDialogComponent, selectors: [["app-email-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 26, consts: [["chipGrid", ""], ["autoTo", "matAutocomplete"], ["chipGridCc", ""], ["autoCc", "matAutocomplete"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [1, "email-dialog"], [1, "email-section"], [1, "email-fields"], [1, "field-container"], [1, "field-label", 2, "margin-right", "18px"], [1, "field-input"], [3, "removed", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Add email", "matInput", "", 3, "matChipInputTokenEnd", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "validation-message", 4, "ngIf"], [1, "field-label", 2, "margin-right", "15px"], [1, "body-field-container"], [1, "body-field-label"], [1, "body-field-input"], ["appearance", "outline", 1, "body-textarea-field"], ["matInput", "", "placeholder", "Enter message body", "rows", "3", 1, "body-textarea", 3, "formControl"], [1, "signature-field-container"], [1, "signature-field-label"], [1, "signature-field-input"], [1, "signature-error-field"], ["appearance", "outline", 1, "signature-input-field"], ["matInput", "", "placeholder", "Enter Signature", 1, "signature-input", 3, "formControl"], [1, "checkbox-container"], [3, "formControl"], [1, "comment-section"], [3, "formGroup"], [1, "table-header"], [2, "transform", "scale(0.8)"], [2, "width", "30px !important", 3, "click"], [2, "width", "20%"], [2, "width", "15%"], [2, "width", "30%"], [1, "table-content"], [1, "table-iterate"], ["class", "table-field-outside", 4, "ngFor", "ngForOf"], [1, "button-section"], ["mat-flat-button", "", 1, "cancel-button", 3, "click"], ["mat-flat-button", "", 1, "continue-button", 3, "click", "disabled"], [3, "removed"], ["matChipRemove", ""], [3, "value"], [1, "validation-message"], [1, "table-field-outside"], [1, "table-field"], [2, "width", "30px !important", 3, "formControl"], ["type", "text", "readonly", "", 3, "formControl"], [2, "width", "35%", "margin-left", "-12px"], [1, "table-text-area"], ["placeholder", "Enter additional information", 3, "formControl"]], template: function ApprovalRequestDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "h6");
      \u0275\u0275text(2, "Approval Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 5);
      \u0275\u0275listener("click", function ApprovalRequestDialogComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "mat-label");
      \u0275\u0275text(12, "To:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "mat-chip-grid", null, 0);
      \u0275\u0275template(16, ApprovalRequestDialogComponent_mat_chip_row_16_Template, 5, 1, "mat-chip-row", 12);
      \u0275\u0275elementStart(17, "input", 13);
      \u0275\u0275listener("matChipInputTokenEnd", function ApprovalRequestDialogComponent_Template_input_matChipInputTokenEnd_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addToEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-autocomplete", 14, 1);
      \u0275\u0275listener("optionSelected", function ApprovalRequestDialogComponent_Template_mat_autocomplete_optionSelected_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectToEmail($event));
      });
      \u0275\u0275template(20, ApprovalRequestDialogComponent_mat_option_20_Template, 2, 2, "mat-option", 15);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ApprovalRequestDialogComponent_div_22_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 9)(24, "div", 17)(25, "mat-label");
      \u0275\u0275text(26, "CC:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11)(28, "mat-chip-grid", null, 2);
      \u0275\u0275template(30, ApprovalRequestDialogComponent_mat_chip_row_30_Template, 5, 1, "mat-chip-row", 12);
      \u0275\u0275elementStart(31, "input", 13);
      \u0275\u0275listener("matChipInputTokenEnd", function ApprovalRequestDialogComponent_Template_input_matChipInputTokenEnd_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addCcEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-autocomplete", 14, 3);
      \u0275\u0275listener("optionSelected", function ApprovalRequestDialogComponent_Template_mat_autocomplete_optionSelected_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectCcEmail($event));
      });
      \u0275\u0275template(34, ApprovalRequestDialogComponent_mat_option_34_Template, 2, 2, "mat-option", 15);
      \u0275\u0275pipe(35, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, ApprovalRequestDialogComponent_div_36_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 18)(38, "div", 19)(39, "mat-label");
      \u0275\u0275text(40, "Body:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 20)(42, "mat-form-field", 21);
      \u0275\u0275element(43, "textarea", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, ApprovalRequestDialogComponent_div_44_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 23)(46, "div", 24)(47, "mat-label");
      \u0275\u0275text(48, "Signature:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 25)(50, "div", 26)(51, "mat-form-field", 27);
      \u0275\u0275element(52, "textarea", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 29)(54, "mat-checkbox", 30);
      \u0275\u0275text(55, "Update Signature");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, ApprovalRequestDialogComponent_div_56_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 31)(58, "form", 32)(59, "div", 33)(60, "div", 34)(61, "mat-checkbox", 35);
      \u0275\u0275listener("click", function ApprovalRequestDialogComponent_Template_mat_checkbox_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAll());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 36)(63, "h6");
      \u0275\u0275text(64, "Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 37)(66, "h6");
      \u0275\u0275text(67, "System Value");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 37)(69, "h6");
      \u0275\u0275text(70, "Agent Value");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 38)(72, "h6");
      \u0275\u0275text(73, "Request");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 39)(75, "div", 40);
      \u0275\u0275template(76, ApprovalRequestDialogComponent_div_76_Template, 16, 6, "div", 41);
      \u0275\u0275elementStart(77, "div", 42)(78, "button", 43);
      \u0275\u0275listener("click", function ApprovalRequestDialogComponent_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275text(79, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "button", 44);
      \u0275\u0275listener("click", function ApprovalRequestDialogComponent_Template_button_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContinue());
      });
      \u0275\u0275text(81, "Continue");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      const chipGrid_r10 = \u0275\u0275reference(15);
      const autoTo_r11 = \u0275\u0275reference(19);
      const chipGridCc_r12 = \u0275\u0275reference(29);
      const autoCc_r13 = \u0275\u0275reference(33);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.selectedToEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.to)("matAutocomplete", autoTo_r11)("matChipInputFor", chipGrid_r10)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(21, 22, ctx.filteredToOptions));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedToEmails.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.selectedCcEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.cc)("matAutocomplete", autoCc_r13)("matChipInputFor", chipGridCc_r12)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(35, 24, ctx.filteredCcOptions));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedCcEmails.length === 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("formControl", ctx.meraki_comment_to_client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.body.invalid && (ctx.body.dirty || ctx.body.touched));
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.signature);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.update_signature);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.signature.invalid && (ctx.signature.dirty || ctx.signature.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.createServiceForm);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.datasource);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.selectedToEmails.length === 0 || ctx.selectedCcEmails.length === 0);
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
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormControlDirective,
    FormGroupDirective,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatSelectModule,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatCheckbox,
    MatTableModule
  ], styles: ["\n\n.email-dialog[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n}\n.email-section[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 0 10px;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: #333;\n}\n.close-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #666;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  color: #f44336;\n}\n.email-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 28px;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 25px;\n}\n.field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n}\n.field-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  color: #555;\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 7px;\n}\n.field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-width: 0;\n}\nmat-chip-grid[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-height: 30px;\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 4px 8px;\n  margin: 0;\n  display: flex !important;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-content: flex-start;\n  gap: 4px;\n  background-color: var(--app-input-bg);\n  transition: border-color 0.2s ease;\n  box-sizing: border-box;\n}\nmat-chip-grid[_ngcontent-%COMP%]:focus-within {\n  border-color: #3C50E0;\n  background-color: var(--app-input-bg);\n}\nmat-chip-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  flex: 1 1 auto;\n  min-width: 150px;\n  max-width: 100%;\n  font-size: 13px;\n  padding: 4px;\n  margin: 0;\n  line-height: 1.2;\n  height: 22px;\n}\nmat-chip-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\nmat-chip-row[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n  font-size: 12px;\n  margin: 0;\n  padding: 3px 6px 3px 10px;\n  height: 28px;\n  line-height: 1.4;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nmat-chip-row[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%] {\n  color: #1565c0;\n  opacity: 0.7;\n  margin: 0 0 0 2px;\n  padding: 0;\n  width: 16px;\n  height: 16px;\n}\nmat-chip-row[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.button-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 0 0 0;\n  flex-shrink: 0;\n}\n.continue-button[_ngcontent-%COMP%] {\n  background-color: #3C50E0;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  margin: 0;\n  border-radius: 6px;\n  min-width: 100px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: background-color 0.2s ease;\n}\n.continue-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2c3fcc;\n}\n.continue-button[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  color: #666;\n  cursor: not-allowed;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ddd;\n  color: #666;\n  padding: 12px 24px;\n  margin: 0;\n  border-radius: 6px;\n  min-width: 100px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  border-color: #f44336;\n  color: #f44336;\n}\n.validation-message[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 12px;\n  margin: 4px 0 0 0;\n  padding: 0 0 0 12px;\n}\n  .email-dialog-style .mat-mdc-dialog-surface {\n  border-radius: 12px !important;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n  .mat-mdc-option {\n  font-size: 14px;\n}\n  .mat-mdc-autocomplete-panel {\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n  .email-dialog mat-chip-grid {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .email-dialog .mat-mdc-chip-grid {\n  width: 100% !important;\n  max-width: 100% !important;\n  display: flex !important;\n  flex-wrap: wrap !important;\n}\n  .email-dialog .mat-mdc-chip-set {\n  width: 100% !important;\n  max-width: 100% !important;\n}\nmat-chip-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\nmat-chip-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\nmat-chip-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\nmat-chip-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.body-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 12px 0;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n}\n.body-field-label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-weight: 500;\n  color: #555;\n  font-size: 16px;\n}\n.body-field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-width: 0;\n}\n.body-textarea-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0;\n}\n.body-textarea[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 14px;\n  font-family: inherit;\n  line-height: 1.5;\n  resize: vertical;\n  box-sizing: border-box;\n}\n  .body-textarea-field {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .body-textarea-field .mat-mdc-text-field-wrapper {\n  width: 100% !important;\n  padding: 0 !important;\n  background-color: var(--app-textarea-bg) !important;\n}\n  .body-textarea-field .mat-mdc-form-field-flex {\n  width: 100% !important;\n  padding: 0 !important;\n}\n  .body-textarea-field .mat-mdc-form-field-infix {\n  width: 100% !important;\n  padding: 0 !important;\n  border: 0 !important;\n  min-height: auto !important;\n}\n  .body-textarea-field .mdc-text-field {\n  width: 100% !important;\n  padding: 0 !important;\n}\n  .body-textarea-field .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n  .body-textarea-field textarea.mat-mdc-input-element {\n  width: 100% !important;\n  max-width: 100% !important;\n  font-size: 14px !important;\n  line-height: 1.5 !important;\n  padding: 8px 12px !important;\n  min-height: 100px !important;\n  resize: vertical !important;\n  box-sizing: border-box !important;\n  background-color: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n  .body-textarea-field .mdc-text-field--outlined .mdc-notched-outline {\n  width: 100% !important;\n}\n  .body-textarea-field .mdc-text-field--focused .mdc-notched-outline {\n  border-color: #3C50E0 !important;\n  border-width: 2px !important;\n}\n.signature-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 16px;\n  margin: 12px 0 0 0;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n}\n.signature-field-label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-weight: 500;\n  color: #555;\n  font-size: 16px;\n  white-space: nowrap;\n}\n.signature-field-input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-width: 0;\n}\n.signature-input-field[_ngcontent-%COMP%] {\n  width: 90% !important;\n  max-width: 100% !important;\n  margin: 0;\n}\n.signature-error-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0;\n  padding: 0;\n}\n.signature-input[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  padding: 7px;\n}\n  .signature-input-field {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n  .signature-input-field .mat-mdc-text-field-wrapper {\n  width: 100% !important;\n  padding: 0 !important;\n  background-color: var(--app-textarea-bg) !important;\n}\n  .signature-input-field .mat-mdc-form-field-flex {\n  width: 100% !important;\n  padding: 0 !important;\n}\n  .signature-input-field .mat-mdc-form-field-infix {\n  width: 100% !important;\n  padding: 0 !important;\n  border: 0 !important;\n  min-height: auto !important;\n}\n  .signature-input-field .mdc-text-field {\n  width: 100% !important;\n  padding: 0 !important;\n}\n  .signature-input-field .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n  .signature-input-field input.mat-mdc-input-element {\n  width: 100% !important;\n  max-width: 100% !important;\n  font-size: 16px !important;\n  font-style: italic !important;\n  line-height: 1.5 !important;\n  padding: 12px 14px !important;\n  box-sizing: border-box !important;\n  color: #333 !important;\n  background-color: var(--app-textarea-bg) !important;\n}\n  .signature-input-field .mdc-text-field--outlined .mdc-notched-outline {\n  width: 100% !important;\n}\n  .signature-input-field .mdc-text-field--focused .mdc-notched-outline {\n  border-color: #3C50E0 !important;\n  border-width: 2px !important;\n}\n  .signature-input-field input.mat-mdc-input-element::placeholder {\n  font-family: inherit !important;\n  font-style: normal !important;\n  color: #999;\n  opacity: 1;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 16px;\n  background-color: var(--app-page-bg);\n  box-sizing: border-box;\n}\n.table-field-outside[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bdbdbd;\n  padding: 15px 0;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.table-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  color: white;\n  line-height: 1.4;\n}\n.table-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 85vh;\n  row-gap: 12px;\n  padding: 0 16px 16px 16px;\n  background-color: var(--app-page-bg);\n  border-top: none;\n  box-sizing: border-box;\n}\n.table-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.table-field[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.table-iterate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.table-field[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: white;\n  line-height: 1.4;\n}\n.table-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #333;\n  background-color: var(--app-input-bg);\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.table-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3C50E0;\n  background-color: var(--app-input-bg);\n  box-shadow: 0 0 0 2px rgba(60, 80, 224, 0.1);\n}\n.table-text-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin-top: 8px;\n  margin-left: auto;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 95%;\n  min-height: 80px;\n  max-height: 200px;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #333;\n  background-color: var(--app-textarea-bg);\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  border-color: #bbb;\n  background-color: var(--app-textarea-bg);\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3C50E0;\n  background-color: var(--app-textarea-bg);\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n  font-style: italic;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.table-field[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n  .table-field .mat-mdc-checkbox .mdc-checkbox {\n  transform: scale(0.8);\n}\n  .table-field .mat-mdc-checkbox label {\n  font-size: 13px;\n  color: #555;\n}\n  .table-field .mat-mdc-checkbox .mdc-label {\n  font-size: 13px;\n  color: #555;\n}\n/*# sourceMappingURL=approval-request-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalRequestDialogComponent, { className: "ApprovalRequestDialogComponent" });
})();

// src/app/shared/directive/auto-resize-input.directive.ts
var AutoResizeInputDirective = class _AutoResizeInputDirective {
  el;
  renderer;
  minWidth = 100;
  maxWidth = 600;
  bufferSpace = 20;
  mirrorSpan = null;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.createMirrorElement();
    this.updateWidth();
  }
  ngOnDestroy() {
    if (this.mirrorSpan && this.mirrorSpan.parentNode) {
      this.mirrorSpan.parentNode.removeChild(this.mirrorSpan);
    }
  }
  onInput() {
    this.updateWidth();
  }
  createMirrorElement() {
    this.mirrorSpan = this.renderer.createElement("span");
    const computedStyle = window.getComputedStyle(this.el.nativeElement);
    this.renderer.setStyle(this.mirrorSpan, "position", "absolute");
    this.renderer.setStyle(this.mirrorSpan, "visibility", "hidden");
    this.renderer.setStyle(this.mirrorSpan, "white-space", "pre");
    this.renderer.setStyle(this.mirrorSpan, "font-family", computedStyle.fontFamily);
    this.renderer.setStyle(this.mirrorSpan, "font-size", computedStyle.fontSize);
    this.renderer.setStyle(this.mirrorSpan, "font-weight", computedStyle.fontWeight);
    this.renderer.setStyle(this.mirrorSpan, "font-style", computedStyle.fontStyle);
    this.renderer.setStyle(this.mirrorSpan, "letter-spacing", computedStyle.letterSpacing);
    this.renderer.setStyle(this.mirrorSpan, "padding-left", computedStyle.paddingLeft);
    this.renderer.setStyle(this.mirrorSpan, "padding-right", computedStyle.paddingRight);
    this.renderer.setStyle(this.mirrorSpan, "border-left-width", computedStyle.borderLeftWidth);
    this.renderer.setStyle(this.mirrorSpan, "border-right-width", computedStyle.borderRightWidth);
    this.renderer.setStyle(this.mirrorSpan, "box-sizing", computedStyle.boxSizing);
    this.renderer.appendChild(document.body, this.mirrorSpan);
  }
  updateWidth() {
    if (!this.mirrorSpan)
      return;
    const element = this.el.nativeElement;
    const value = element.value || element.placeholder || "";
    this.mirrorSpan.textContent = value || " ";
    const textWidth = this.mirrorSpan.offsetWidth;
    let newWidth = textWidth + this.bufferSpace;
    newWidth = Math.max(this.minWidth, Math.min(newWidth, this.maxWidth));
    this.renderer.setStyle(element, "width", `${newWidth}px`);
  }
  static \u0275fac = function AutoResizeInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoResizeInputDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AutoResizeInputDirective, selectors: [["", "appAutoResizeInput", ""]], hostBindings: function AutoResizeInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function AutoResizeInputDirective_input_HostBindingHandler() {
        return ctx.onInput();
      })("change", function AutoResizeInputDirective_change_HostBindingHandler() {
        return ctx.onInput();
      });
    }
  }, inputs: { minWidth: "minWidth", maxWidth: "maxWidth", bufferSpace: "bufferSpace" }, standalone: true });
};

// src/app/components/comm-history/comm-history.component.ts
function CommHistoryComponent_div_8_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", history_r1.message, " ");
  }
}
function CommHistoryComponent_div_8_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17)(1, "mat-icon", 18);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Email To: ", history_r1.email_to, " ");
  }
}
function CommHistoryComponent_div_8_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17)(1, "mat-icon", 18);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Email CC: ", history_r1.email_cc, " ");
  }
}
function CommHistoryComponent_div_8_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_button_21_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const i_r3 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.toggleExpand(i_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.expandedItems[i_r3] ? "info" : "info_outline");
  }
}
function CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36)(1, "mat-icon", 37);
    \u0275\u0275text(2, "arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_1_span_4_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    const lastLine_r7 = ctx.last;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", line_r6, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lastLine_r7);
  }
}
function CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_1_Template, 5, 2, "span", 34)(2, CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_span_2_Template, 1, 0, "span", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const summary_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.splitSummaryLines(summary_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r9);
  }
}
function CommHistoryComponent_div_8_div_22_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_1_span_5_ng_container_1_Template, 3, 2, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getVesselSummary(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_1_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const prop_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prop_r10.field);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_9_0 = prop_r10.old_value) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = prop_r10.new_value) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "N/A");
  }
}
function CommHistoryComponent_div_8_div_22_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4, "Field Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6, "Previous Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275text(8, "Current Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CommHistoryComponent_div_8_div_22_div_1_div_9_div_9_Template, 7, 3, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.getVesselProperties(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Vessel Modifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_1_span_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_div_22_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r3 = \u0275\u0275nextContext(2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleVessel(i_r3));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, CommHistoryComponent_div_8_div_22_div_1_div_9_Template, 10, 2, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    const history_r1 = ctx_r10.$implicit;
    const i_r3 = ctx_r10.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getVesselSummary(history_r1).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.vesselExpanded[i_r3] ? "info" : "info_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.vesselExpanded[i_r3]);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36)(1, "mat-icon", 37);
    \u0275\u0275text(2, "arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_1_span_4_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = ctx.$implicit;
    const lastLine_r14 = ctx.last;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", line_r13, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lastLine_r14);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_1_Template, 5, 2, "span", 34)(2, CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_span_2_Template, 2, 0, "span", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const summary_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.splitSummaryLines(summary_r15));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r16);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_2_span_5_ng_container_1_Template, 3, 2, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getMerakiSummary(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "Movement Changes");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\xA0 ");
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xA0 ");
    \u0275\u0275elementStart(7, "mat-icon", 53);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \xA0 ");
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mov_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", mov_r17.subservice_name, ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mov_r17.old_value);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(mov_r17.new_value);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_1_div_1_Template, 12, 3, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", service_r18.movement);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " N/A ");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_1_Template, 2, 1, "div", 35)(2, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_div_2_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r18.movement && service_r18.movement.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !service_r18.movement || service_r18.movement.length === 0);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "strong");
    \u0275\u0275text(2, "Optional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", service_r18.optional, " ");
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "strong");
    \u0275\u0275text(2, "Required:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", service_r18.required, " ");
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "strong");
    \u0275\u0275text(2, "Total Changed:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\xA0 ");
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xA0 ");
    \u0275\u0275elementStart(7, "mat-icon", 53);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \xA0 ");
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(service_r18.total_change.old_total);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(service_r18.total_change.new_total);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " N/A ");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 41)(2, "div", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_4_Template, 3, 2, "div", 44);
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275template(6, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_6_Template, 4, 1, "div", 47)(7, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_7_Template, 4, 1, "div", 47)(8, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_8_Template, 12, 2, "div", 48)(9, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_div_9_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r18 = ctx.$implicit;
    const history_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-template-columns", ctx_r3.hasMerakiMovements(history_r1) ? "1fr 1fr 1fr" : "1fr 1fr");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r18.service_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasMerakiMovements(history_r1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r18.optional);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r18.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r18.total_change);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !service_r18.optional && !service_r18.required && !service_r18.total_change);
  }
}
function CommHistoryComponent_div_8_div_22_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4, "Service Name");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_2_div_9_div_5_Template, 2, 0, "div", 44);
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7, "Other Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CommHistoryComponent_div_8_div_22_div_2_div_9_div_8_Template, 10, 8, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("grid-template-columns", ctx_r3.hasMerakiMovements(history_r1) ? "1fr 1fr 1fr" : "1fr 1fr");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.hasMerakiMovements(history_r1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getMerakiServices(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Meraki Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_2_span_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_div_22_div_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const i_r3 = \u0275\u0275nextContext(2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleMeraki(i_r3));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, CommHistoryComponent_div_8_div_22_div_2_div_9_Template, 9, 5, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    const history_r1 = ctx_r10.$implicit;
    const i_r3 = ctx_r10.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getMerakiSummary(history_r1).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.merakiExpanded[i_r3] ? "info" : "info_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.merakiExpanded[i_r3]);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36)(1, "mat-icon", 37);
    \u0275\u0275text(2, "arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_1_span_4_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r20 = ctx.$implicit;
    const lastLine_r21 = ctx.last;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", line_r20, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lastLine_r21);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_1_Template, 5, 2, "span", 34)(2, CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_span_2_Template, 2, 0, "span", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const summary_r22 = ctx.$implicit;
    const last_r23 = ctx.last;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.splitSummaryLines(summary_r22));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r23);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_3_span_5_ng_container_1_Template, 3, 2, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getPortAgentSummary(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_div_6_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r24);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "ul", 60);
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_div_6_li_5_Template, 2, 1, "li", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r25.service_name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", service_r25.message);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275text(3, "Service Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275text(5, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_div_6_Template, 6, 2, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.getPortAgentServices(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "mat-icon", 67);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r26 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", service_r26, " ");
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_8_div_1_Template, 4, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getPortAgentAgreed(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No agreed services ");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "mat-icon", 71);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r27 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", service_r27, " ");
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_11_div_1_Template, 4, 1, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getPortAgentNegotiate(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No negotiate services ");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 41);
    \u0275\u0275text(3, "Agreed Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275text(5, "Negotiate Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 63)(7, "div", 41);
    \u0275\u0275template(8, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_8_Template, 2, 1, "div", 35)(9, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_9_Template, 2, 0, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 41);
    \u0275\u0275template(11, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_11_Template, 2, 1, "div", 35)(12, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_div_12_Template, 2, 0, "div", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentAgreed(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentAgreed(history_r1).length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentNegotiate(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentNegotiate(history_r1).length === 0);
  }
}
function CommHistoryComponent_div_8_div_22_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_3_div_9_div_1_Template, 7, 1, "div", 58)(2, CommHistoryComponent_div_8_div_22_div_3_div_9_div_2_Template, 13, 4, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentServices(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasPortAgentAgreedOrNegotiate(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Port Agent Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_3_span_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_div_22_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const i_r3 = \u0275\u0275nextContext(2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePortAgent(i_r3));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, CommHistoryComponent_div_8_div_22_div_3_div_9_Template, 3, 3, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    const history_r1 = ctx_r10.$implicit;
    const i_r3 = ctx_r10.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentSummary(history_r1).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.portAgentExpanded[i_r3] ? "info" : "info_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.portAgentExpanded[i_r3]);
  }
}
function CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36)(1, "mat-icon", 37);
    \u0275\u0275text(2, "arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_1_span_4_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r29 = ctx.$implicit;
    const lastLine_r30 = ctx.last;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", line_r29, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lastLine_r30);
  }
}
function CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_1_Template, 5, 2, "span", 34)(2, CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_span_2_Template, 2, 0, "span", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const summary_r31 = ctx.$implicit;
    const last_r32 = ctx.last;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.splitSummaryLines(summary_r31));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r32);
  }
}
function CommHistoryComponent_div_8_div_22_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_4_span_5_ng_container_1_Template, 3, 2, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getClientSummary(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_4_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r33 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r33.service_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r33.message || "N/A");
  }
}
function CommHistoryComponent_div_8_div_22_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4, "Service Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6, "Message");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CommHistoryComponent_div_8_div_22_div_4_div_9_div_7_Template, 5, 2, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.getClientServices(history_r1));
  }
}
function CommHistoryComponent_div_8_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Client Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommHistoryComponent_div_8_div_22_div_4_span_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_div_22_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r28);
      const i_r3 = \u0275\u0275nextContext(2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleClient(i_r3));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, CommHistoryComponent_div_8_div_22_div_4_div_9_Template, 8, 2, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    const history_r1 = ctx_r10.$implicit;
    const i_r3 = ctx_r10.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getClientSummary(history_r1).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.clientExpanded[i_r3] ? "info" : "info_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.clientExpanded[i_r3]);
  }
}
function CommHistoryComponent_div_8_div_22_div_5_div_18_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function CommHistoryComponent_div_8_div_22_div_5_div_18_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const file_r35 = \u0275\u0275nextContext().$implicit;
      const history_r1 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.getUploadedFiles(history_r1.comm_history_id, file_r35.file_id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " View ");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_5_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function CommHistoryComponent_div_8_div_22_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275template(8, CommHistoryComponent_div_8_div_22_div_5_div_18_button_8_Template, 4, 0, "button", 72)(9, CommHistoryComponent_div_8_div_22_div_5_div_18_span_9_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r35 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r35.name || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r35.description || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r35.source_type || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", file_r35.complete_file_path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !file_r35.complete_file_path);
  }
}
function CommHistoryComponent_div_8_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Attached Files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39)(9, "div", 40)(10, "div", 41);
    \u0275\u0275text(11, "Filename");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41);
    \u0275\u0275text(15, "Source Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 41);
    \u0275\u0275text(17, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CommHistoryComponent_div_8_div_22_div_5_div_18_Template, 10, 5, "div", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", history_r1.files.length, " file(s) attached ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", history_r1.files);
  }
}
function CommHistoryComponent_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, CommHistoryComponent_div_8_div_22_div_1_Template, 10, 3, "div", 25)(2, CommHistoryComponent_div_8_div_22_div_2_Template, 10, 3, "div", 25)(3, CommHistoryComponent_div_8_div_22_div_3_Template, 10, 3, "div", 25)(4, CommHistoryComponent_div_8_div_22_div_4_Template, 10, 3, "div", 25)(5, CommHistoryComponent_div_8_div_22_div_5_Template, 19, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const history_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getVesselProperties(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getMerakiServices(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getPortAgentServices(history_r1).length > 0 || ctx_r3.hasPortAgentAgreedOrNegotiate(history_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getClientServices(history_r1).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", history_r1.files && history_r1.files.length > 0);
  }
}
function CommHistoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "mat-icon", 9);
    \u0275\u0275text(4, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "div", 13)(9, "h6", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CommHistoryComponent_div_8_p_11_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 17)(15, "mat-icon", 18);
    \u0275\u0275text(16, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CommHistoryComponent_div_8_p_19_Template, 4, 1, "p", 19)(20, CommHistoryComponent_div_8_p_20_Template, 4, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CommHistoryComponent_div_8_button_21_Template, 3, 1, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CommHistoryComponent_div_8_div_22_Template, 6, 6, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const history_r1 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(history_r1.display_message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasValue(history_r1.message));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", history_r1.source_type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(18, 9, history_r1.created_on, "dd-MMM-yyyy HH:mm"), " \u2022 ", history_r1.created_by, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.hasValue(history_r1.email_to));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasValue(history_r1.email_cc));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isExpandable(history_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.expandedItems[i_r3] && (ctx_r3.hasModifiedData(history_r1) || ctx_r3.hasFiles(history_r1)));
  }
}
var CommHistoryComponent = class _CommHistoryComponent {
  snackBar;
  sanitizer;
  dialog;
  fileUploadService;
  accordion;
  data = [];
  constructor(snackBar, sanitizer, dialog, fileUploadService) {
    this.snackBar = snackBar;
    this.sanitizer = sanitizer;
    this.dialog = dialog;
    this.fileUploadService = fileUploadService;
  }
  communicationHistory = [];
  expandedItems = [];
  vesselExpanded = [];
  merakiExpanded = [];
  portAgentExpanded = [];
  clientExpanded = [];
  previewUrl = null;
  loader = inject(LoaderService);
  fileOpenPayload = [];
  ngOnInit() {
    this.initializeData();
  }
  ngOnChanges(changes) {
    if (changes["data"] && changes["data"].currentValue) {
      this.initializeData();
    }
  }
  initializeData() {
    this.communicationHistory = this.data || [];
    this.expandedItems = new Array(this.communicationHistory.length).fill(false);
    this.vesselExpanded = new Array(this.communicationHistory.length).fill(false);
    this.merakiExpanded = new Array(this.communicationHistory.length).fill(false);
    this.portAgentExpanded = new Array(this.communicationHistory.length).fill(false);
    this.clientExpanded = new Array(this.communicationHistory.length).fill(false);
  }
  toggleExpand(index) {
    this.expandedItems[index] = !this.expandedItems[index];
  }
  toggleVessel(index) {
    this.vesselExpanded[index] = !this.vesselExpanded[index];
  }
  toggleMeraki(index) {
    this.merakiExpanded[index] = !this.merakiExpanded[index];
  }
  togglePortAgent(index) {
    this.portAgentExpanded[index] = !this.portAgentExpanded[index];
  }
  toggleClient(index) {
    this.clientExpanded[index] = !this.clientExpanded[index];
  }
  hasValue(value) {
    if (value === null || value === void 0 || value === "") {
      return false;
    }
    if (Array.isArray(value) && value.length === 0) {
      return false;
    }
    return true;
  }
  isExpandable(history) {
    return this.hasModifiedData(history) || this.hasFiles(history) || this.hasModifiedFields(history);
  }
  hasModifiedData(history) {
    if (!history.modified_data || !history.modified_data.modified) {
      return false;
    }
    const { vessel, meraki, port_agent, client } = history.modified_data.modified;
    const hasVessel = vessel?.properties?.length > 0 || vessel?.summary?.length > 0;
    const hasMeraki = meraki?.services?.length > 0 || meraki?.summary?.length > 0;
    const hasPortAgent = port_agent?.services?.length > 0 || port_agent?.summary?.length > 0 || port_agent?.agreed?.length > 0 || port_agent?.negotiate?.length > 0;
    const hasClient = client?.services?.length > 0 || client?.summary?.length > 0;
    return hasVessel || hasMeraki || hasPortAgent || hasClient;
  }
  hasFiles(history) {
    return !!(history.files && history.files.length > 0);
  }
  hasModifiedFields(history) {
    return !!(history.modified_field && history.modified_field.length > 0);
  }
  getVesselProperties(history) {
    return history.modified_data?.modified?.vessel?.properties || [];
  }
  getVesselSummary(history) {
    return history.modified_data?.modified?.vessel?.summary || [];
  }
  getMerakiServices(history) {
    return history.modified_data?.modified?.meraki?.services || [];
  }
  getMerakiSummary(history) {
    return history.modified_data?.modified?.meraki?.summary || [];
  }
  hasMerakiMovements(history) {
    const services = this.getMerakiServices(history);
    return services.some((service) => service.movement && service.movement.length > 0);
  }
  getPortAgentServices(history) {
    return history.modified_data?.modified?.port_agent?.services || [];
  }
  getPortAgentSummary(history) {
    return history.modified_data?.modified?.port_agent?.summary || [];
  }
  getPortAgentAgreed(history) {
    return history.modified_data?.modified?.port_agent?.agreed || [];
  }
  getPortAgentNegotiate(history) {
    return history.modified_data?.modified?.port_agent?.negotiate || [];
  }
  hasPortAgentAgreedOrNegotiate(history) {
    const agreed = this.getPortAgentAgreed(history);
    const negotiate = this.getPortAgentNegotiate(history);
    return agreed && agreed.length > 0 || negotiate && negotiate.length > 0;
  }
  getClientServices(history) {
    return history.modified_data?.modified?.client?.services || [];
  }
  getClientSummary(history) {
    return history.modified_data?.modified?.client?.summary || [];
  }
  splitSummaryLines(summary) {
    return summary.split("\n").filter((line) => line.trim().length > 0);
  }
  getUploadedFiles(comm_history_id, file_id) {
    const data = {
      disbursement_seq: this.communicationHistory.find((history) => history.comm_history_id === comm_history_id)?.disbursement_seq
    };
    this.loader.showDialogLoader();
    this.fileUploadService.fileDataForCommunicationHistory(data).subscribe({
      next: (res) => {
        this.fileOpenPayload = (res || []).filter((f) => f.file_id === file_id);
        this.loader.hideDialogLoader();
        this.preview(comm_history_id, this.fileOpenPayload[0], "preview");
      },
      error: (err) => {
        this.loader.hideDialogLoader();
        const errMsg = err?.error?.error || "Error fetching files from DB";
        this.snackBar.showError(errMsg);
      }
    });
  }
  preview(comm_history_id, file, uploadOrPreview) {
    if (this.canPreview(file, uploadOrPreview)) {
      let url = void 0;
      if (file instanceof File) {
        url = URL.createObjectURL(file);
        this.openPreviewDialog(url, file.name);
      } else if ("presigned_url" in file && typeof file.presigned_url === "string") {
        this.previewWithRetry(comm_history_id, file, file.presigned_url);
        return;
      }
      if (!url) {
        this.snackBar.showError("Cannot preview this file.");
        return;
      }
    }
  }
  previewWithRetry(comm_history_id, file, presignedUrl) {
    fetch(presignedUrl, { method: "GET" }).then((response) => {
      if (response.status === 403) {
        this.refreshPresignedUrlAndPreview(comm_history_id, file);
        return;
      }
      if (response.status === 404) {
        this.snackBar.showError("File not found.");
        return;
      }
      if (response.ok) {
        this.openPreviewDialog(presignedUrl, file.name);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    }).catch(() => {
      this.snackBar.showError("Cannot preview this file.");
    });
  }
  canPreview(file, uploadOrPreview) {
    if (uploadOrPreview === "upload" && file instanceof File) {
      return file.type.startsWith("image/") || file.type === "application/pdf";
    }
    if (uploadOrPreview === "preview" && "presigned_url" in file && typeof file.presigned_url === "string") {
      const previewFile = file;
      const presignedUrl = previewFile.presigned_url;
      const containsValidExtension = presignedUrl.includes(".pdf") || presignedUrl.includes(".png") || presignedUrl.includes(".jpg") || presignedUrl.includes(".jpeg");
      return containsValidExtension;
    }
    return false;
  }
  openPreviewDialog(url, fileName) {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    const data = {
      url: this.previewUrl,
      name: fileName
    };
    this.dialog.open(FileDisplayComponent, {
      data,
      width: "100vw",
      height: "100vh",
      maxHeight: "100vh",
      maxWidth: "100vw"
    });
  }
  refreshPresignedUrlAndPreview(comm_history_id, file) {
    const data = {
      disbursement_seq: this.communicationHistory.find((history) => history.comm_history_id === comm_history_id)?.disbursement_seq
      // pda_fda_flag: this.existingdata.isDisbursment ? "DIS" : this.existingdata?.pdaId ? 'PDA' : 'FDA',
    };
    this.fileUploadService.fileDataFromDb(data).subscribe({
      next: (res) => {
        const updatedFile = res.find((f) => f.file_id === file.file_id);
        if (updatedFile?.presigned_url) {
          this.openPreviewDialog(updatedFile.presigned_url, file.name);
        } else {
          this.snackBar.showError("Unable to refresh preview link.");
        }
      },
      error: () => {
        this.snackBar.showError("Error refreshing preview link.");
      }
    });
  }
  static \u0275fac = function CommHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommHistoryComponent)(\u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FileUploadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommHistoryComponent, selectors: [["app-comm-history"]], viewQuery: function CommHistoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatAccordion, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.accordion = _t.first);
    }
  }, inputs: { data: "data" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "section-main"], ["multi", "", 1, "custom-accordion"], [1, "custom-panel"], [1, "custom-header"], [1, "custom-title"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-card"], [1, "status-indicator"], [1, "status-icon"], [1, "history-wrapper"], [1, "history-header"], [1, "history-content"], [2, "display", "flex", "flex-direction", "row", "align-items", "center", "gap", "10px"], [1, "history-title"], ["class", "history-message", 4, "ngIf"], [2, "font-size", "14px", "color", "var(--color-text-light-1)", "margin", "0", "font-weight", "500"], [1, "history-meta"], [1, "meta-icon"], ["class", "history-meta", 4, "ngIf"], ["mat-icon-button", "", "class", "info-btn", 3, "click", 4, "ngIf"], ["class", "history-details", 4, "ngIf"], [1, "history-message"], ["mat-icon-button", "", 1, "info-btn", 3, "click"], [1, "history-details"], ["class", "nested-section", 4, "ngIf"], [1, "nested-section"], [1, "nested-header"], [1, "nested-summary"], ["class", "summary-text", 4, "ngIf"], ["mat-icon-button", "", 1, "nested-info-btn", 3, "click"], ["class", "nested-content", 4, "ngIf"], [1, "summary-text"], [4, "ngFor", "ngForOf"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "summary-item"], [1, "summary-bullet-icon"], [1, "nested-content"], [1, "compact-table"], [1, "compact-table-header"], [1, "compact-cell"], ["class", "compact-table-row", 4, "ngFor", "ngForOf"], [1, "compact-table-row"], ["class", "compact-cell", 4, "ngIf"], ["class", "compact-table-row", 3, "grid-template-columns", 4, "ngFor", "ngForOf"], [2, "font-weight", "600"], ["style", "margin-bottom: 4px;", 4, "ngIf"], ["style", "margin-top: 4px; padding: 6px 10px; background: var(--color-bg-dark-2); border-radius: 4px; font-weight: 500;", 4, "ngIf"], ["style", "color: #999;", 4, "ngIf"], ["style", "margin: 4px 0; padding: 6px 10px; background: var(--color-bg-dark-2); border-radius: 4px; font-weight: 500;", 4, "ngFor", "ngForOf"], [2, "margin", "4px 0", "padding", "6px 10px", "background", "var(--color-bg-dark-2)", "border-radius", "4px", "font-weight", "500"], [2, "color", "var(--app-status-error)"], [2, "font-size", "14px", "width", "14px", "height", "14px", "vertical-align", "middle", "color", "var(--color-action)"], [2, "color", "var(--color-success)"], [2, "color", "#999"], [2, "margin-bottom", "4px"], [2, "margin-top", "4px", "padding", "6px 10px", "background", "var(--color-bg-dark-2)", "border-radius", "4px", "font-weight", "500"], ["class", "compact-table", 4, "ngIf"], ["class", "compact-table", "style", "margin-top: 12px;", 4, "ngIf"], [1, "compact-list"], [1, "compact-table", 2, "margin-top", "12px"], [1, "compact-table-header", 2, "grid-template-columns", "1fr 1fr"], [1, "compact-table-row", 2, "grid-template-columns", "1fr 1fr"], ["style", "color: #999; font-style: italic;", 4, "ngIf"], ["style", "margin: 4px 0; padding: 6px 10px; background: var(--color-bg-dark-2); border-radius: 4px; font-weight: 500; color: var(--color-success); display: inline-flex; align-items: center; gap: 6px;", 4, "ngFor", "ngForOf"], [2, "margin", "4px 0", "padding", "6px 10px", "background", "var(--color-bg-dark-2)", "border-radius", "4px", "font-weight", "500", "color", "var(--color-success)", "display", "inline-flex", "align-items", "center", "gap", "6px"], [2, "font-size", "16px", "width", "16px", "height", "16px", "color", "var(--color-success)"], [2, "color", "#999", "font-style", "italic"], ["style", "margin: 4px 0; padding: 6px 10px; background: var(--color-bg-dark-2); border-radius: 4px; font-weight: 500; color: var(--app-status-warning); display: inline-flex; align-items: center; gap: 6px;", 4, "ngFor", "ngForOf"], [2, "margin", "4px 0", "padding", "6px 10px", "background", "var(--color-bg-dark-2)", "border-radius", "4px", "font-weight", "500", "color", "var(--app-status-warning)", "display", "inline-flex", "align-items", "center", "gap", "6px"], [2, "font-size", "16px", "width", "16px", "height", "16px", "color", "var(--app-status-warning)"], ["class", "file-view-btn", 3, "click", 4, "ngIf"], [1, "file-view-btn", 3, "click"]], template: function CommHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "mat-accordion", 1)(2, "mat-expansion-panel", 2)(3, "mat-expansion-panel-header", 3)(4, "mat-panel-title", 4)(5, "mat-icon");
      \u0275\u0275text(6, "history");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " \xA0 Communication History Timeline ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, CommHistoryComponent_div_8_Template, 23, 12, "div", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.communicationHistory);
    }
  }, dependencies: [MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatIcon, CommonModule, NgForOf, NgIf, DatePipe, MatButtonModule, MatIconButton], styles: ['\n\n.section-main[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: var(--color-bg-dark-10);\n}\n.custom-title[_ngcontent-%COMP%] {\n  color: var(--color-white);\n}\n.custom-header[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.custom-header[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-bg-dark-10) !important;\n}\n  .section-main .mat-expansion-panel {\n  background-color: var(--color-bg-dark-10);\n  color: var(--color-white);\n  border-radius: 8px !important;\n}\n  .section-main .mat-expansion-panel-body {\n  background-color: var(--color-bg-dark-10);\n  color: var(--color-text-light-1);\n  border-radius: 8px !important;\n}\n.history-item[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background-color: var(--color-bg-dark-10);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 12px 16px;\n}\n.history-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.history-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  transition: all 0.2s ease;\n  display: flex;\n  gap: 16px;\n  position: relative;\n}\n.history-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  padding: 8px 0;\n  gap: 12px;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  position: relative;\n  padding: 12px 0;\n}\n.status-indicator[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 37px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2px;\n  bottom: -12px;\n  background: var(--color-bg-dark-10);\n}\n.history-item[_ngcontent-%COMP%]:last-child   .status-indicator[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.status-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0c7403;\n  color: white;\n  font-size: 14px;\n}\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-white);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n}\n.history-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 2px 0 !important;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-light-1);\n}\n.history-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-action);\n  font-weight: 500;\n  margin: 2px 0;\n  background: var(--color-bg-dark-2);\n  padding: 2px 16px;\n  border-radius: 20px;\n  border: 1px solid var(--color-bg-dark-2);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.history-message[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  display: inline-block;\n  color: var(--color-action) !important;\n  font-size: 20px;\n  line-height: 1;\n}\n.history-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "\\2022";\n  margin-left: 8px;\n  color: #bdbdbd;\n}\n.info-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-white);\n}\n.info-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(25, 118, 210, 0.08);\n}\n.history-details[_ngcontent-%COMP%] {\n  padding: 8px 0 0 0;\n  background-color: var(--color-bg-dark-10);\n}\n.nested-section[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  background: var(--color-bg-dark-10);\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n.nested-section[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  transform: translateY(-1px);\n}\n.nested-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: var(--color-bg-dark-10);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nested-summary[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.nested-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-action);\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  font-weight: 500;\n  line-height: 1.6;\n  white-space: pre-line;\n  padding: 4px 0;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.summary-bullet-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-white);\n  flex-shrink: 0;\n}\n.nested-info-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-white);\n  width: 36px;\n  height: 36px;\n}\n.nested-info-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.nested-content[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px 16px;\n  background: var(--color-bg-dark-10);\n  border-radius: 0 0 8px 8px;\n}\n.compact-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--color-bg-dark-10);\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  box-shadow: none;\n}\n.compact-table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n}\n.compact-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  border-bottom: 1px solid var(--color-bg-dark-10);\n  transition: all 0.2s ease;\n}\n.compact-table-row[_ngcontent-%COMP%]   .compact-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.compact-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.compact-table-row[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n  box-shadow: none;\n}\n.compact-cell[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 12px;\n  color: var(--color-white);\n  word-wrap: break-word;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n}\n.compact-table-header[_ngcontent-%COMP%]   .compact-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-action);\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.compact-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  list-style-type: none;\n}\n.compact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 6px 0;\n  color: var(--color-text-light-1);\n  line-height: 1.4;\n}\n.source-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  background-color: var(--color-bg-dark-10);\n}\n.source-type[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-light-1);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n  .custom-panel-nested .mat-expansion-indicator {\n  display: inline-block;\n  margin-right: 35px;\n}\n.section-nested[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n  position: relative;\n}\n.section-nested[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 11px;\n  top: 48px;\n  bottom: -8px;\n  width: 2px;\n  background-color: #4CAF50;\n  z-index: 0;\n}\n.section-nested[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.section-nested[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  z-index: 1;\n  background-color: var(--color-bg-dark-10);\n}\n.template-content[_ngcontent-%COMP%] {\n  padding: 0;\n  background: var(--color-bg-dark-10);\n  border: none;\n  box-shadow: none;\n}\n.template-content.template-success[_ngcontent-%COMP%] {\n  border-left: 3px solid #e0e0e0;\n}\n.template-content.template-error[_ngcontent-%COMP%] {\n  border-left: 3px solid #e0e0e0;\n}\n.template-content.template-warning[_ngcontent-%COMP%] {\n  border-left: 3px solid #e0e0e0;\n}\n.service-header-error[_ngcontent-%COMP%] {\n  background-color: #F44336 !important;\n}\n.file-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 0;\n  background: transparent;\n  border: none;\n}\n.info-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-white);\n  text-align: start;\n  letter-spacing: 0.3px;\n}\n.file-view-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: none;\n  transition: all 0.2s ease;\n  letter-spacing: 0.3px;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.summary-box[_ngcontent-%COMP%] {\n  background: var(--color-bg-dark-10);\n  border: 1px solid var(--app-status-warning);\n  border-radius: 4px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n}\n.summary-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  color: var(--app-status-warning);\n}\n.summary-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  list-style-type: disc;\n}\n.summary-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-status-warning);\n  margin-bottom: 4px;\n}\n.summary-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.data-grid[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: none;\n}\n.grid-row[_ngcontent-%COMP%] {\n  display: contents;\n}\n.data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: auto auto;\n}\n.grid-label[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.grid-label[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n.grid-value[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: var(--color-bg-dark-10);\n  color: var(--color-text-light-1);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  word-break: break-word;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  transition: background-color 0.2s ease;\n}\n.grid-value[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-bg-dark-10);\n}\n.grid-value[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n.grid-value.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 14px;\n}\n.grid-value.return-msg[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #FF9800;\n}\n.grid-value.remarks[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-text-light-1);\n}\n.grid-value.status-yes[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-weight: 500;\n}\n.grid-value.status-no[_ngcontent-%COMP%] {\n  color: #F44336;\n  font-weight: 500;\n}\n.grid-value.status-pending[_ngcontent-%COMP%] {\n  color: #FF9800;\n  font-weight: 500;\n}\n.file-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border: 1px solid var(--color-bg-dark-10);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.file-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.file-header[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #2196F3;\n  color: white;\n  font-weight: 500;\n  font-size: 13px;\n}\n.file-item[_ngcontent-%COMP%]   .data-grid[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n}\n.file-link[_ngcontent-%COMP%] {\n  color: #2196F3;\n  text-decoration: none;\n  font-weight: 500;\n}\n.file-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-bg-dark-10);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.file-table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header-4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header-5[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header-6[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  background: var(--color-bg-dark-10);\n  border-bottom: 2px solid var(--color-bg-dark-10);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.file-table-header[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header-2[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header-3[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header-4[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header-5[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header-6[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  color: var(--color-white);\n  font-size: 12px;\n  text-align: center;\n  border-right: 1px solid var(--color-bg-dark-10);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table-header[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-header-2[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-header-3[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-header-4[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-header-5[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-header-6[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row-4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row-5[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row-6[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  border-bottom: 1px solid var(--color-bg-dark-10);\n}\n.file-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row-2[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row-3[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row-4[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row-5[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row-6[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-table-row[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row-2[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row-2[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row-3[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row-3[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row-4[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row-4[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row-5[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row-5[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row-6[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #444;\n  font-size: 13px;\n  text-align: center;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-10);\n  transition: background-color 0.2s ease;\n}\n.file-table-row-6[_ngcontent-%COMP%]:hover   .file-table-cell[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n}\n.file-table-row[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row-2[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row-3[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row-4[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row-5[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.file-table-row-6[_ngcontent-%COMP%]   .file-table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      to bottom,\n      #5a5a5a 0%,\n      #4a4a4a 100%);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: none;\n  transition: all 0.2s ease;\n  letter-spacing: 0.3px;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      to bottom,\n      #4a4a4a 0%,\n      #3a3a3a 100%);\n  box-shadow: none;\n  transform: translateY(-1px);\n}\n.action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.file-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.services-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.service-item[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.service-header[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #4CAF50;\n  color: white;\n  font-weight: 500;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.service-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.service-item[_ngcontent-%COMP%]   .data-grid[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n}\n@media (max-width: 768px) {\n  .data-grid[_ngcontent-%COMP%] {\n    grid-auto-flow: row;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n  .grid-label[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .grid-value[_ngcontent-%COMP%] {\n    background-color: var(--color-bg-dark-10);\n    justify-content: flex-start;\n    text-align: left;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .grid-value[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: none;\n  }\n}\n  .mat-expansion-panel.mat-expansion-panel-disabled .mat-expansion-panel-header-title, \n  .mat-expansion-panel.mat-expansion-panel-disabled .mat-expansion-panel-header-description {\n  color: inherit !important;\n}\n  .custom-panel-nested.mat-expansion-panel-disabled .custom-title-nested {\n  color: #555 !important;\n  opacity: 1 !important;\n}\n  .custom-panel-nested.mat-expansion-panel-disabled .custom-title-nested .title-line {\n  color: #555 !important;\n  opacity: 1 !important;\n}\n  .custom-panel-nested.mat-expansion-panel-disabled .custom-title-nested .title-line strong {\n  color: #555 !important;\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n  .custom-panel-nested.mat-expansion-panel-disabled .mat-expansion-panel-header {\n  color: #555 !important;\n}\n  .mat-expansion-panel-header[aria-disabled=true] {\n  color: inherit !important;\n}\n  .mat-expansion-panel-header.mat-disabled {\n  color: inherit !important;\n}\n/*# sourceMappingURL=comm-history.component.css.map */'], data: { animation: [
    trigger("slideDown", [
      transition(":enter", [
        style({ height: "0", opacity: "0", overflow: "hidden" }),
        animate("300ms ease-out", style({ height: "*", opacity: "1" }))
      ]),
      transition(":leave", [
        style({ height: "*", opacity: "1", overflow: "hidden" }),
        animate("200ms ease-in", style({ height: "0", opacity: "0" }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommHistoryComponent, { className: "CommHistoryComponent" });
})();

export {
  ApprovalRequestDialogComponent,
  AutoResizeInputDirective,
  CommHistoryComponent
};
//# sourceMappingURL=chunk-4IJ5BGQL.js.map
