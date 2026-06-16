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
  MatProgressSpinnerModule
} from "./chunk-A7N62EC5.js";
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

// src/app/pages/master/cargo/cargo.service.ts
var CargoService = class _CargoService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get the data from db
  CargoDataFromDb(params) {
    return this.http.post("cargolist ", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to send the data to db
  CargoDataToDB(data) {
    return this.http.post("create-updateCargo", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function CargoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CargoService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CargoService, factory: _CargoService.\u0275fac, providedIn: "root" });
};

// src/app/components/create-cargo/create-cargo.component.ts
function CreateCargoComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateCargoComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Cargo Name is required. ");
    \u0275\u0275elementEnd();
  }
}
var CreateCargoComponent = class _CreateCargoComponent {
  fb;
  dialogRef;
  existingdata;
  cargoService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  cargoForm;
  isEditMode = false;
  constructor(fb, dialogRef, existingdata, cargoService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.cargoService = cargoService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.cargoForm = this.fb.group({
      cargo_id: [data?.cargo_id || 0],
      type: [data?.type || "", Validators.required]
    });
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.cargoForm.get(controlName);
    trimInput(control);
  }
  onPaste(event) {
    const value = handlePasteText(event);
    this.cargoForm.get("type")?.setValue(value);
  }
  // onSubmit method will trigger when the Add or Edit cargo button clicks
  onSubmit() {
    if (this.cargoForm.valid) {
      this.loader.showDialogLoader();
      this.cargoService.CargoDataToDB(this.cargoForm.value).subscribe({
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
  static \u0275fac = function CreateCargoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateCargoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CargoService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateCargoComponent, selectors: [["app-create-cargo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "type", 3, "keypress", "paste", "blur"], ["mat-flat-button", "", "color", " primary", "type", "submit", 1, "add-cargo"]], template: function CreateCargoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateCargoComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreateCargoComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreateCargoComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "Cargo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275listener("keypress", function CreateCargoComponent_Template_input_keypress_11_listener($event) {
        ctx.disallowNumericData($event);
        return ctx.allowLimitedInput($event, 50);
      })("paste", function CreateCargoComponent_Template_input_paste_11_listener($event) {
        return ctx.onPaste($event);
      })("blur", function CreateCargoComponent_Template_input_blur_11_listener() {
        return ctx.onInputTrim("type");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreateCargoComponent_mat_error_12_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div")(14, "button", 6);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Cargo" : "Add Cargo");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.cargoForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.cargoForm.get("type")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Cargo" : "Add Cargo", "");
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, MatSlideToggleModule, MatSnackBarModule, LoaderComponent, MatProgressSpinnerModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  max-width: 280px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-cargo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-cargo[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=create-cargo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateCargoComponent, { className: "CreateCargoComponent" });
})();

export {
  CargoService,
  CreateCargoComponent
};
//# sourceMappingURL=chunk-X6PCRKUH.js.map
