import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
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
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  CdkTextareaAutosize,
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
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-56DUDJD6.js";
import {
  COMMA,
  ENTER,
  MatOption
} from "./chunk-BAX6ITZM.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  map,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";

// src/app/pages/pda/email-dialog/email-dialog.component.ts
function EmailDialogComponent_mat_chip_row_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 26);
    \u0275\u0275listener("removed", function EmailDialogComponent_mat_chip_row_15_Template_mat_chip_row_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeToEmail(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
  }
}
function EmailDialogComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
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
function EmailDialogComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " At least one recipient is required ");
    \u0275\u0275elementEnd();
  }
}
function EmailDialogComponent_mat_chip_row_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 26);
    \u0275\u0275listener("removed", function EmailDialogComponent_mat_chip_row_29_Template_mat_chip_row_removed_0_listener() {
      const email_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeCcEmail(email_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r7, " ");
  }
}
function EmailDialogComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
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
function EmailDialogComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " At least one CC recipient is required ");
    \u0275\u0275elementEnd();
  }
}
var EmailDialogComponent = class _EmailDialogComponent {
  dialogRef;
  data;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  toEmailList = [];
  ccEmailList = [];
  selectedToEmails = [];
  selectedCcEmails = [];
  separatorKeysCodes = [ENTER, COMMA];
  to = new FormControl("", [Validators.email]);
  cc = new FormControl("", [Validators.email]);
  signatureData = sessionStorage.getItem("signature");
  email_signature = new FormControl(this.signatureData != null ? this.signatureData : "");
  update_signature = new FormControl("");
  filteredToOptions;
  filteredCcOptions;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.toEmailList = data?.to || [];
    this.ccEmailList = data?.cc || [];
  }
  ngOnInit() {
    this.filteredToOptions = this.to.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.toEmailList)));
    this.filteredCcOptions = this.cc.valueChanges.pipe(startWith(""), map((value) => this.filterOptions(value || "", this.ccEmailList)));
  }
  // method to filter options based on input
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
    if (this.update_signature.value) {
      sessionStorage.setItem("signature", this.email_signature.value ?? "");
    }
    this.dialogRef.close({ to: this.selectedToEmails, cc: this.selectedCcEmails, email_signature: this.email_signature.value ?? "", update_signature: this.update_signature.value ? "Y" : "N" });
  }
  isFormValid() {
    return this.selectedToEmails.length > 0 && this.selectedCcEmails.length > 0;
  }
  static \u0275fac = function EmailDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailDialogComponent, selectors: [["app-email-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 21, consts: [["chipGrid", ""], ["autoTo", "matAutocomplete"], ["chipGridCc", ""], ["autoCc", "matAutocomplete"], [1, "email-dialog"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [1, "email-fields"], [1, "field-container"], [1, "field-label"], [1, "field-input"], [3, "removed", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Add email", "matInput", "", 3, "matChipInputTokenEnd", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "validation-message", 4, "ngIf"], [1, "field-container-sig"], [1, "field-label-sig"], [1, "field-container-input"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter Signature", "cdkTextareaAutosize", "", 3, "formControl"], [1, "checkbox-container"], [3, "formControl"], [1, "button-section"], ["mat-flat-button", "", 1, "cancel-button", 3, "click"], ["mat-flat-button", "", 1, "continue-button", 3, "click", "disabled"], [3, "removed"], ["matChipRemove", ""], [3, "value"], [1, "validation-message"]], template: function EmailDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h6");
      \u0275\u0275text(3, "Send Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275listener("click", function EmailDialogComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "mat-label");
      \u0275\u0275text(11, "To:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "mat-chip-grid", null, 0);
      \u0275\u0275template(15, EmailDialogComponent_mat_chip_row_15_Template, 5, 1, "mat-chip-row", 11);
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275listener("matChipInputTokenEnd", function EmailDialogComponent_Template_input_matChipInputTokenEnd_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addToEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-autocomplete", 13, 1);
      \u0275\u0275listener("optionSelected", function EmailDialogComponent_Template_mat_autocomplete_optionSelected_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectToEmail($event));
      });
      \u0275\u0275template(19, EmailDialogComponent_mat_option_19_Template, 2, 2, "mat-option", 14);
      \u0275\u0275pipe(20, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, EmailDialogComponent_div_21_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "div", 9)(24, "mat-label");
      \u0275\u0275text(25, "CC:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 10)(27, "mat-chip-grid", null, 2);
      \u0275\u0275template(29, EmailDialogComponent_mat_chip_row_29_Template, 5, 1, "mat-chip-row", 11);
      \u0275\u0275elementStart(30, "input", 12);
      \u0275\u0275listener("matChipInputTokenEnd", function EmailDialogComponent_Template_input_matChipInputTokenEnd_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addCcEmail($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "mat-autocomplete", 13, 3);
      \u0275\u0275listener("optionSelected", function EmailDialogComponent_Template_mat_autocomplete_optionSelected_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectCcEmail($event));
      });
      \u0275\u0275template(33, EmailDialogComponent_mat_option_33_Template, 2, 2, "mat-option", 14);
      \u0275\u0275pipe(34, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, EmailDialogComponent_div_35_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 16)(37, "div", 17)(38, "mat-label");
      \u0275\u0275text(39, "Signature:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 18)(41, "div", 10)(42, "mat-form-field", 19);
      \u0275\u0275element(43, "textarea", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 21)(45, "mat-checkbox", 22);
      \u0275\u0275text(46, "Update Signature");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(47, "div", 23)(48, "button", 24);
      \u0275\u0275listener("click", function EmailDialogComponent_Template_button_click_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275text(49, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 25);
      \u0275\u0275listener("click", function EmailDialogComponent_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContinue());
      });
      \u0275\u0275text(51, "Continue");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const chipGrid_r9 = \u0275\u0275reference(14);
      const autoTo_r10 = \u0275\u0275reference(18);
      const chipGridCc_r11 = \u0275\u0275reference(28);
      const autoCc_r12 = \u0275\u0275reference(32);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.selectedToEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.to)("matAutocomplete", autoTo_r10)("matChipInputFor", chipGrid_r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 17, ctx.filteredToOptions));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedToEmails.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.selectedCcEmails);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.cc)("matAutocomplete", autoCc_r12)("matChipInputFor", chipGridCc_r11)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(34, 19, ctx.filteredCcOptions));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedCcEmails.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.email_signature);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.update_signature);
      \u0275\u0275advance(5);
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
    CdkTextareaAutosize,
    MatFormFieldModule,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
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
    MatCheckbox
  ], styles: ["\n\n.email-dialog[_ngcontent-%COMP%] {\n  padding: 24px;\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 0 24px 0;\n  padding: 0 0 16px 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: #333;\n}\n.close-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #666;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  color: #f44336;\n}\n.email-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  flex: 1;\n  margin: 0 0 24px 0;\n  padding: 0;\n}\n.field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 30px;\n  margin: 0;\n  padding: 0;\n  margin-top: -16px;\n}\n.field-label[_ngcontent-%COMP%] {\n  min-width: 60px;\n  padding: 20px 0 0 0;\n  margin: 0;\n  font-weight: 500;\n  color: #555;\n  text-align: left;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\nmat-chip-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 72px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 12px;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 8px;\n  background-color: var(--app-input-bg);\n  transition: border-color 0.2s ease;\n  box-sizing: border-box;\n}\nmat-chip-grid[_ngcontent-%COMP%]:focus-within {\n  border-color: #3C50E0;\n  background-color: var(--app-input-bg);\n}\nmat-chip-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  flex: 1;\n  min-width: 200px;\n  font-size: 14px;\n  padding: 8px 4px;\n  margin: 0;\n  line-height: 1.4;\n}\nmat-chip-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\nmat-chip-row[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n  border-radius: 16px;\n  font-size: 13px;\n  margin: 2px;\n  padding: 6px 12px;\n  height: auto;\n  line-height: 1.2;\n}\nmat-chip-row[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%] {\n  color: #1565c0;\n  opacity: 0.7;\n  margin: 0 0 0 4px;\n  padding: 0;\n  width: 18px;\n  height: 18px;\n}\nmat-chip-row[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 0 0 0;\n  border-top: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.continue-button[_ngcontent-%COMP%] {\n  background-color: #3C50E0;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  margin: 0;\n  border-radius: 6px;\n  min-width: 100px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: background-color 0.2s ease;\n}\n.continue-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2c3fcc;\n}\n.continue-button[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  color: #666;\n  cursor: not-allowed;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ddd;\n  color: #666;\n  padding: 12px 24px;\n  margin: 0;\n  border-radius: 6px;\n  min-width: 100px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  border-color: #f44336;\n  color: #f44336;\n}\n.validation-message[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 12px;\n  margin: 4px 0 0 0;\n  padding: 0 0 0 12px;\n}\n  .email-dialog-style .mat-mdc-dialog-surface {\n  border-radius: 12px !important;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n  .mat-mdc-option {\n  font-size: 14px;\n}\n  .mat-mdc-autocomplete-panel {\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  height: 60px;\n}\n  .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  background-color: var(--app-input-bg) !important;\n}\n  .mat-mdc-form-field:has(textarea) .mat-mdc-text-field-wrapper {\n  background-color: var(--app-textarea-bg) !important;\n}\n  textarea.mat-mdc-input-element {\n  background-color: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n.field-container-sig[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  margin: 0;\n  padding: 0;\n  margin-top: -16px;\n}\n.field-label-sig[_ngcontent-%COMP%] {\n  min-width: 60px;\n  margin: 0;\n  font-weight: 500;\n  color: #555;\n  text-align: left;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.field-container-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 0;\n  width: 80%;\n}\n.field-container-sig[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   textarea[matInput][_ngcontent-%COMP%] {\n  max-height: 80px;\n  background-color: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n.field-container-sig[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   textarea[matInput][_ngcontent-%COMP%]::placeholder {\n  color: #999;\n  opacity: 1;\n}\n/*# sourceMappingURL=email-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailDialogComponent, { className: "EmailDialogComponent" });
})();

export {
  EmailDialogComponent
};
//# sourceMappingURL=chunk-LG7TJWKL.js.map
