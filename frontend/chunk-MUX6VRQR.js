import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import {
  mailRegex
} from "./chunk-REH2YONL.js";
import {
  MatSlideToggleModule
} from "./chunk-R2NPM7IG.js";
import {
  allowLimitedInput,
  allowOnlyLetters,
  formatAddressForDisplay,
  handlePasteText,
  trimInput
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import {
  MatSnackBarModule,
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  ENTER
} from "./chunk-BAX6ITZM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  computed,
  inject,
  map,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";

// src/app/pages/master/port-agent/port-agent.service.ts
var PortAgentService = class _PortAgentService {
  http;
  constructor(http) {
    this.http = http;
  }
  portAgentDataFromDb(params) {
    return this.http.post("port-agentlist", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  PortAgentDataToDb(data) {
    return this.http.post("port-agent", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function PortAgentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortAgentService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortAgentService, factory: _PortAgentService.\u0275fac, providedIn: "root" });
};

// src/app/components/create-port-agent/create-port-agent.component.ts
function CreatePortAgentComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreatePortAgentComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Port Agent Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreatePortAgentComponent_mat_chip_16_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 28);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function CreatePortAgentComponent_mat_chip_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 26);
    \u0275\u0275listener("removed", function CreatePortAgentComponent_mat_chip_16_Template_mat_chip_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeEmail(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, CreatePortAgentComponent_mat_chip_16_mat_icon_2_Template, 2, 0, "mat-icon", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("removable", ctx_r3.removable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.removable);
  }
}
function CreatePortAgentComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Billing Address is required. ");
    \u0275\u0275elementEnd();
  }
}
var CreatePortAgentComponent = class _CreatePortAgentComponent {
  fb;
  dialogRef;
  existingdata;
  portAgentService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  portAgentForm;
  isEditMode = false;
  emailList = [];
  separatorKeysCodes = [ENTER];
  removable = true;
  addOnBlur = true;
  constructor(fb, dialogRef, existingdata, portAgentService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.portAgentService = portAgentService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.portAgentForm = this.fb.group({
      company_id: [data?.company_id || 0],
      company_name: [data?.company_name || "", Validators.required],
      app_owning_company_id: [data?.app_owning_company_id || 0],
      company_type_id: [data?.company_type_id || 0],
      email: [],
      address: [formatAddressForDisplay(data?.address || "")],
      accountHolderName: [data?.bank_details?.beneficiary_acc_holder_name || ""],
      bank_details_id: [data?.bank_details?.bank_details_id || 0],
      bankName: [data?.bank_details?.bank_name || ""],
      accountNumber: [data?.bank_details?.current_account_number || ""],
      correspondentAccountNumber: [data?.bank_details?.correspondent_account_number || ""],
      ibanNumber: [data?.bank_details?.iban_number || ""],
      ifscCode: [data?.bank_details?.ifsc_code || ""],
      country: [data?.bank_details?.country_name || ""],
      currency: [data?.bank_details?.currency || ""],
      bankBranchAddress: [formatAddressForDisplay(data?.bank_details?.branch_address || "")],
      swiftCode: [data?.bank_details?.swift_code || ""],
      bicCode: [data?.bank_details?.bic_code || ""],
      inCode: [data?.bank_details?.inn_code || ""],
      bikCode: [data?.bank_details?.bik_code || ""]
    });
    if (data?.email) {
      if (typeof data.email === "string") {
        this.emailList = data.email.split(",").map((e) => e.trim()).filter(Boolean);
      } else if (Array.isArray(data.email)) {
        this.emailList = data.email.map((e) => e.trim()).filter(Boolean);
      } else {
        this.emailList = [];
      }
    }
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.portAgentForm.get(controlName);
    trimInput(control);
  }
  // Method to handle chip input: validate and add email to emailList, update form control
  addEmail(event) {
    const input = event.input;
    const value = (event.value || "").trim();
    if (value && this.isValidEmail(value)) {
      this.emailList.push(value);
      if (this.emailList.length > 0) {
        input.value = "";
      }
    } else if (value) {
      this.snackBar.showError("Invalid email format.");
    }
  }
  // Method to remove the given email from emailList, update form control value,
  removeEmail(email) {
    const index = this.emailList.indexOf(email);
    if (index >= 0) {
      this.emailList.splice(index, 1);
    }
  }
  // method to validate the email
  isValidEmail(email) {
    return mailRegex.test(email);
  }
  // add email to chip on typing of valid email
  checkAndAutoAddEmail(event) {
    const input = event.target;
    const value = input.value.trim();
    if (this.isValidEmail(value)) {
      if (!this.emailList.includes(value)) {
        this.emailList.push(value);
        this.portAgentForm.get("email")?.setErrors(null);
        input.value = "";
      } else {
        this.portAgentForm.get("email")?.setErrors({ customEmailError: true });
        input.value = "";
      }
    }
  }
  onPaste(event) {
    const value = handlePasteText(event);
    this.portAgentForm.get("company_name")?.setValue(value);
  }
  onSubmit() {
    if (this.emailList.length === 0) {
      this.snackBar.showError("Please enter at least one valid email.");
      return;
    }
    this.portAgentForm.markAllAsTouched();
    if (!this.portAgentForm.valid) {
      this.snackBar.showError("Please fill all required fields correctly.");
      return;
    }
    this.loader.showDialogLoader();
    const formValue = this.portAgentForm.value;
    const payload = {
      company_id: formValue.company_id || 0,
      app_owning_company_id: formValue.app_owning_company_id || 0,
      company_type_id: formValue.company_type_id || 0,
      company_name: formValue.company_name,
      phone_number: formValue.phone_number || "",
      email: this.emailList,
      address: formValue.address || "",
      status: "Y",
      bank_details: {
        bank_details_id: formValue.bank_details_id,
        country_name: formValue.country || null,
        beneficiary_acc_holder_name: formValue.accountHolderName || "",
        bank_name: formValue.bankName || "",
        correspondent_account_number: formValue.correspondentAccountNumber || "",
        current_account_number: formValue.accountNumber || "",
        ifsc_code: formValue.ifscCode || "",
        bik_code: formValue.bikCode || "",
        swift_code: formValue.swiftCode || "",
        bic_code: formValue.bicCode || "",
        currency: formValue.currency || "",
        inn_code: formValue.inCode || "",
        iban_number: formValue.ibanNumber || "",
        branch_address: formValue.bankBranchAddress || ""
      }
    };
    this.portAgentService.PortAgentDataToDb(payload).subscribe({
      next: (res) => {
        this.loader.hideDialogLoader();
        this.snackBar.showSuccess(res.message);
        this.dialogRef.close("refresh");
      },
      error: (err) => {
        this.loader.hideDialogLoader();
        const errorMsg = err.error?.error || "Something went wrong. Please try again.";
        this.snackBar.showError(errorMsg);
      }
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreatePortAgentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePortAgentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(PortAgentService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePortAgentComponent, selectors: [["app-create-port-agent"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 9, consts: [["chipGrid", ""], [4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "formGroup"], ["appearance", "outline", 1, "inputWidthForWindowFill"], ["matInput", "", "formControlName", "company_name", 3, "keypress", "blur", "paste"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add email, press enter or comma", 1, "inputTextArea", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["matInput", "", "rows", "3", "formControlName", "address"], [1, "bankDtlsHeader"], ["appearance", "outline"], ["matInput", "", "formControlName", "accountHolderName"], ["matInput", "", "formControlName", "bankName", 3, "blur", "paste"], ["matInput", "", "formControlName", "accountNumber", 3, "blur", "paste"], ["matInput", "", "formControlName", "correspondentAccountNumber", 3, "blur", "paste"], ["matInput", "", "formControlName", "ibanNumber", 3, "blur", "paste"], ["matInput", "", "formControlName", "swiftCode", 3, "blur", "paste"], ["matInput", "", "formControlName", "bicCode", 3, "blur", "paste"], ["matInput", "", "formControlName", "inCode", 3, "blur", "paste"], ["matInput", "", "formControlName", "bikCode", 3, "blur", "paste"], ["matInput", "", "formControlName", "ifscCode", 3, "blur", "paste"], ["matInput", "", "formControlName", "country", 3, "blur", "paste"], ["matInput", "", "formControlName", "currency", 3, "blur", "paste"], ["matInput", "", "rows", "3", "formControlName", "bankBranchAddress"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "add-port-agent", 3, "click"], [3, "removed", "removable"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function CreatePortAgentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, CreatePortAgentComponent_app_loader_0_Template, 1, 0, "app-loader", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function CreatePortAgentComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 4)(8, "mat-form-field", 5)(9, "mat-label");
      \u0275\u0275text(10, "Port Agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275listener("keypress", function CreatePortAgentComponent_Template_input_keypress_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.disallowNumericData($event);
        return \u0275\u0275resetView(ctx.allowLimitedInput($event, 50));
      })("blur", function CreatePortAgentComponent_Template_input_blur_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("company_name"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreatePortAgentComponent_mat_error_12_Template, 2, 0, "mat-error", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 5)(14, "mat-chip-grid", null, 0);
      \u0275\u0275template(16, CreatePortAgentComponent_mat_chip_16_Template, 3, 3, "mat-chip", 7);
      \u0275\u0275elementStart(17, "input", 8);
      \u0275\u0275listener("matChipInputTokenEnd", function CreatePortAgentComponent_Template_input_matChipInputTokenEnd_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addEmail($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "mat-form-field", 5)(19, "mat-label");
      \u0275\u0275text(20, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "textarea", 9);
      \u0275\u0275template(22, CreatePortAgentComponent_mat_error_22_Template, 2, 0, "mat-error", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 10);
      \u0275\u0275text(24, "Enter Bank Details & Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "hr")(26, "br");
      \u0275\u0275elementStart(27, "mat-form-field", 11)(28, "mat-label");
      \u0275\u0275text(29, "Beneficiary account Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-form-field", 11)(32, "mat-label");
      \u0275\u0275text(33, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 13);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("bankName"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-form-field", 11)(36, "mat-label");
      \u0275\u0275text(37, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 14);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("accountNumber"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "mat-form-field", 11)(40, "mat-label");
      \u0275\u0275text(41, "Correspondent Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 15);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("correspondentAccountNumber"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "mat-form-field", 11)(44, "mat-label");
      \u0275\u0275text(45, "IBAN Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 16);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("correspondentAccountNumber"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "mat-form-field", 11)(48, "mat-label");
      \u0275\u0275text(49, "SWIFT ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 17);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("swiftCode"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "mat-form-field", 11)(52, "mat-label");
      \u0275\u0275text(53, "BIC Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 18);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("bicCode"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "mat-form-field", 11)(56, "mat-label");
      \u0275\u0275text(57, "INN Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "input", 19);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("inCode"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "mat-form-field", 11)(60, "mat-label");
      \u0275\u0275text(61, "BIK Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 20);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("bikCode"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "mat-form-field", 11)(64, "mat-label");
      \u0275\u0275text(65, "IFSC Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 21);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("ifscCode"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "mat-form-field", 11)(68, "mat-label");
      \u0275\u0275text(69, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 22);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_70_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("country"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "mat-form-field", 11)(72, "mat-label");
      \u0275\u0275text(73, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "input", 23);
      \u0275\u0275listener("blur", function CreatePortAgentComponent_Template_input_blur_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("currency"));
      })("paste", function CreatePortAgentComponent_Template_input_paste_74_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "mat-form-field", 5)(76, "mat-label");
      \u0275\u0275text(77, "Bank Branch with Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div")(80, "button", 25);
      \u0275\u0275listener("click", function CreatePortAgentComponent_Template_button_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_8_0;
      const chipGrid_r5 = \u0275\u0275reference(15);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Port Agent" : "Add Port Agent");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.portAgentForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.portAgentForm.get("company_name")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.emailList);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r5)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_8_0 = ctx.portAgentForm.get("address")) == null ? null : tmp_8_0.hasError("required"));
      \u0275\u0275advance(59);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Port Agent" : "Add Port Agent", " ");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    MatIconModule,
    MatIcon,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatChipsModule,
    MatChip,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    LoaderComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-port-agent[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-port-agent[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 70px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  margin-left: 8px;\n}\n  input::placeholder {\n  font-size: 10px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n  mat-form-field:has(textarea) .mat-mdc-floating-label {\n  top: 20px !important;\n  line-height: 1 !important;\n}\n.inputTextArea[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.inputWidthForWindowFill[_ngcontent-%COMP%] {\n  max-width: 530px !important;\n}\n.bankDtlsHeader[_ngcontent-%COMP%] {\n  align-content: center;\n  font-size: 13px;\n  color: #7e8188;\n  font-weight: 500;\n}\n/*# sourceMappingURL=create-port-agent.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePortAgentComponent, { className: "CreatePortAgentComponent" });
})();

export {
  PortAgentService,
  CreatePortAgentComponent
};
//# sourceMappingURL=chunk-MUX6VRQR.js.map
