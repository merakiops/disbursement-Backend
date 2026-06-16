import {
  MatSlideToggleModule
} from "./chunk-R2NPM7IG.js";
import {
  allowLimitedInput,
  allowOnlyLetters,
  handlePasteText,
  trimInput
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import {
  MatSelect
} from "./chunk-2LYLMMA2.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-K64LDRY5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
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
  MatOption
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/master/user-management/user-management.service.ts
var UseManagementService = class _UseManagementService {
  http;
  constructor(http) {
    this.http = http;
  }
  userDataFromDb(body) {
    return this.http.post("users", body).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data.map((user) => __spreadProps(__spreadValues({}, user), {
        is_mfa_enabled: user.is_mfa_enabled === "Y" ? "YES" : "NO"
      }))
    })));
  }
  userDataToDb(body) {
    const formData = __spreadProps(__spreadValues({}, body), {
      is_mfa_enabled: body.is_mfa_enabled ? "Y" : "N"
    });
    return this.http.post("createUser", formData).pipe(map((response) => response));
  }
  masterFromDb(data) {
    return this.http.post("getmaster-data", data).pipe(map((response) => response));
  }
  resetUserPassword(username) {
    return this.http.post("reset-password-by-admin", { username }).pipe(map((response) => response));
  }
  static \u0275fac = function UseManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseManagementService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UseManagementService, factory: _UseManagementService.\u0275fac, providedIn: "root" });
};

// src/app/components/create-user/create-user.component.ts
function CreateUserComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateUserComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Full name is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " User name is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " MaxLength is 50 Characters ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275property("value", role_r1.role_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r1.role_name);
  }
}
function CreateUserComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select the role. ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r2 = ctx.$implicit;
    \u0275\u0275property("value", company_r2.company_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(company_r2.company_name);
  }
}
function CreateUserComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select the company. ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Enter Valid Email format. ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 4)(2, "mat-label");
    \u0275\u0275text(3, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 14)(5, "mat-option", 15);
    \u0275\u0275text(6, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 16);
    \u0275\u0275text(8, "InActive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 17);
    \u0275\u0275text(10, "Block");
    \u0275\u0275elementEnd()()()();
  }
}
var CreateUserComponent = class _CreateUserComponent {
  fb;
  dialogRef;
  existingdata;
  userService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  userForm;
  isEditMode = false;
  roleList = [];
  companyList = [];
  isRoleSelected = true;
  filteredCompanyList = [];
  constructor(fb, dialogRef, existingdata, userService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.userService = userService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.userForm = this.fb.group({
      user_id: [data?.user_id || 0],
      role_id: [{ value: data?.role_id ?? null, disabled: this.isEditMode }, Validators.required],
      company_id: [{ value: data?.company_id || "", disabled: this.isEditMode }, Validators.required],
      name: [data?.name || "", Validators.required],
      username: [{ value: data?.username || "", disabled: this.isEditMode }, [Validators.required, Validators.maxLength(50)]],
      email: [
        data?.email || "",
        [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
      ],
      is_mfa_enabled: [{ value: data?.is_mfa_enabled === "YES" ? true : false, disabled: !data?.email }],
      status: [data?.status || "Y"]
    });
  }
  ngOnInit() {
    this.getMaRolesFromDb();
    this.enableAndDisableMFA();
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.userForm.get(controlName);
    trimInput(control);
  }
  onPaste(event) {
    const input = event.target;
    const controlName = input.getAttribute("formControlName");
    if (!controlName)
      return;
    const value = handlePasteText(event);
    this.userForm.get(controlName)?.setValue(value);
  }
  // onSubmit method will trigger when the Add or Edit  button clicks
  onSubmit() {
    if (this.userForm.valid) {
      this.loader.showDialogLoader();
      this.userService.userDataToDb(this.userForm.getRawValue()).subscribe({
        next: (res) => {
          this.loader.hideDialogLoader();
          this.snackBar.showSuccess(res.message);
          this.dialogRef.close("refresh");
        },
        error: (error) => {
          this.loader.hideDialogLoader();
          const errorMsg = error?.error?.error || "Something went wrong. Please try again.";
          this.snackBar.showError(errorMsg);
        }
      });
    }
  }
  // method to fetch the role list from db
  getMaRolesFromDb() {
    const data = { fields: ["roles"] };
    this.loader.showDialogLoader();
    this.userService.masterFromDb(data).subscribe({
      next: (response) => {
        this.roleList = response.roles;
        this.loader.hideDialogLoader();
        this.getMaCompaniesFromDb();
      },
      error: () => {
        this.loader.hideDialogLoader();
      }
    });
  }
  // method to fetch the list of companies from db
  getMaCompaniesFromDb() {
    const data = { fields: ["companies"] };
    this.loader.showDialogLoader();
    this.userService.masterFromDb(data).subscribe({
      next: (response) => {
        this.companyList = response.companies;
        this.isEditMode ? this.filteredCompanyList = this.companyList : this.onRoleChange(null);
        this.loader.hideDialogLoader();
      },
      error: () => {
        this.loader.hideDialogLoader();
      }
    });
  }
  // method to select the companies based on role
  onRoleChange(roleId) {
    const companyCtrl = this.userForm.get("company_id");
    if (!roleId) {
      companyCtrl?.disable();
      this.filteredCompanyList = [];
      return;
    }
    const selectedRole = this.roleList.find((role) => role.role_id === roleId);
    if (!selectedRole)
      return;
    const isAdminOrUser = selectedRole.role_id === 1 || selectedRole.role_id === 2;
    this.filteredCompanyList = this.companyList.filter((company) => {
      return isAdminOrUser ? company.company_name?.includes("Meraki") : company.company_type?.name === selectedRole.role_name;
    });
    companyCtrl?.enable();
  }
  // method to enable and disable the MFA based and email
  enableAndDisableMFA() {
    const emailCtrl = this.userForm.get("email");
    const mfaCtrl = this.userForm.get("is_mfa_enabled");
    if (emailCtrl && mfaCtrl && !emailCtrl.disabled) {
      emailCtrl.valueChanges.subscribe((value) => {
        const isValid = emailCtrl.valid && !!value;
        isValid ? mfaCtrl.enable() : mfaCtrl.disable();
        mfaCtrl.reset();
      });
    }
    if (emailCtrl?.disabled) {
      mfaCtrl?.enable();
    }
  }
  // method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreateUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(UseManagementService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateUserComponent, selectors: [["app-create-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 13, consts: [[4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "keypress", "blur", "paste"], ["matInput", "", "formControlName", "username", 3, "keypress", "blur"], ["formControlName", "role_id", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "company_id"], ["matInput", "", "formControlName", "email"], ["formControlName", "is_mfa_enabled", 1, "checkbox"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-user"], [3, "value"], ["formControlName", "status"], ["value", "Y"], ["value", "N"], ["value", "B"]], template: function CreateUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateUserComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreateUserComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreateUserComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275listener("keypress", function CreateUserComponent_Template_input_keypress_11_listener($event) {
        ctx.disallowNumericData($event);
        return ctx.allowLimitedInput($event, 50);
      })("blur", function CreateUserComponent_Template_input_blur_11_listener() {
        return ctx.onInputTrim("name");
      })("paste", function CreateUserComponent_Template_input_paste_11_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreateUserComponent_mat_error_12_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 4)(14, "mat-label");
      \u0275\u0275text(15, "UserName");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 6);
      \u0275\u0275listener("keypress", function CreateUserComponent_Template_input_keypress_16_listener($event) {
        return ctx.allowLimitedInput($event, 50);
      })("blur", function CreateUserComponent_Template_input_blur_16_listener() {
        return ctx.onInputTrim("username");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, CreateUserComponent_mat_error_17_Template, 2, 0, "mat-error", 0)(18, CreateUserComponent_mat_error_18_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 4)(20, "mat-label");
      \u0275\u0275text(21, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-select", 7);
      \u0275\u0275listener("selectionChange", function CreateUserComponent_Template_mat_select_selectionChange_22_listener($event) {
        return ctx.onRoleChange($event.value);
      });
      \u0275\u0275template(23, CreateUserComponent_mat_option_23_Template, 2, 2, "mat-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, CreateUserComponent_mat_error_24_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-form-field", 4)(26, "mat-label");
      \u0275\u0275text(27, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-select", 9);
      \u0275\u0275template(29, CreateUserComponent_mat_option_29_Template, 2, 2, "mat-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, CreateUserComponent_mat_error_30_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-form-field", 4)(32, "mat-label");
      \u0275\u0275text(33, "Email(Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 10);
      \u0275\u0275template(35, CreateUserComponent_mat_error_35_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-checkbox", 11);
      \u0275\u0275text(37, " Multi-Factor Authentication ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, CreateUserComponent_div_38_Template, 11, 0, "div", 0);
      \u0275\u0275elementStart(39, "div")(40, "button", 12);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit User" : "Add User");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.userForm.get("username")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.userForm.get("username")) == null ? null : tmp_5_0.hasError("maxlength"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.roleList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.userForm.get("role_id")) == null ? null : tmp_7_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.filteredCompanyList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_9_0 = ctx.userForm.get("company_id")) == null ? null : tmp_9_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.userForm.get("email")) == null ? null : tmp_10_0.hasError("pattern"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isEditMode);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update User" : "Add User", "");
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf, MatSlideToggleModule, MatSnackBarModule, LoaderComponent, MatOption, MatSelect, MatCheckboxModule, MatCheckbox], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  max-width: 280px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-user[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-user[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-error-muted);\n  line-height: 1.2;\n  margin-top: 0px;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n  .mat-mdc-select-value-text {\n  color: black !important;\n}\n.checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=create-user.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateUserComponent, { className: "CreateUserComponent" });
})();

export {
  UseManagementService,
  CreateUserComponent
};
//# sourceMappingURL=chunk-YJWVWTAZ.js.map
