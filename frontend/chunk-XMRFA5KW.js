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
  CommonModule,
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

// src/app/pages/master/purpose/purpose.service.ts
var PurposeService = class _PurposeService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get the data from db
  purposeDataFromDb(body) {
    return this.http.post("purposelist", body).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to send the data to db
  purposeDataToDb(data) {
    return this.http.post("create-updatePurpose", data).pipe(map((response) => {
      return response;
    }));
  }
  getMaPurpose(params) {
    return this.http.post("getmaster-data", params).pipe(map((response) => response.purpose ?? []));
  }
  static \u0275fac = function PurposeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurposeService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PurposeService, factory: _PurposeService.\u0275fac, providedIn: "root" });
};

// src/app/components/create-purpose/create-purpose.component.ts
function CreatePurposeComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreatePurposeComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Purpose is required. ");
    \u0275\u0275elementEnd();
  }
}
var CreatePurposeComponent = class _CreatePurposeComponent {
  fb;
  dialogRef;
  existingdata;
  purposeService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  purposeForm;
  isEditMode = false;
  constructor(fb, dialogRef, existingdata, purposeService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.purposeService = purposeService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.purposeForm = this.fb.group({
      purpose_id: [data?.purpose_id || 0],
      name: [data?.name || "", Validators.required]
    });
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.purposeForm.get(controlName);
    trimInput(control);
  }
  onPaste(event) {
    const value = handlePasteText(event);
    this.purposeForm.get("name")?.setValue(value);
  }
  // onSubmit method will trigger when the Add or Edit Purpose button clicks
  onSubmit() {
    if (this.purposeForm.valid) {
      this.loader.showDialogLoader();
      this.purposeService.purposeDataToDb(this.purposeForm.value).subscribe({
        next: (res) => {
          this.loader.hideDialogLoader();
          this.snackBar.showSuccess(res.message);
          this.dialogRef.close("refresh");
        },
        error: (error) => {
          this.loader.hideDialogLoader();
          const errorMsg = error.error?.error || "Something went wrong. Please try again.";
          this.snackBar.showError(errorMsg);
        }
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreatePurposeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePurposeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(PurposeService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePurposeComponent, selectors: [["app-create-purpose"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "keypress", "blur", "paste"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-purpose"]], template: function CreatePurposeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreatePurposeComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreatePurposeComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreatePurposeComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275listener("keypress", function CreatePurposeComponent_Template_input_keypress_11_listener($event) {
        ctx.disallowNumericData($event);
        return ctx.allowLimitedInput($event, 50);
      })("blur", function CreatePurposeComponent_Template_input_blur_11_listener() {
        return ctx.onInputTrim("name");
      })("paste", function CreatePurposeComponent_Template_input_paste_11_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreatePurposeComponent_mat_error_12_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div")(14, "button", 6);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Purpose" : "Add Purpose");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.purposeForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.purposeForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Purpose" : "Add Purpose", "");
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, MatSlideToggleModule, MatSnackBarModule, LoaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  max-width: 280px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-purpose[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-purpose[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n/*# sourceMappingURL=create-purpose.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePurposeComponent, { className: "CreatePurposeComponent" });
})();

export {
  PurposeService,
  CreatePurposeComponent
};
//# sourceMappingURL=chunk-XMRFA5KW.js.map
