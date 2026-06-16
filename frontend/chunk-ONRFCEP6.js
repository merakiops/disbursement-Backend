import {
  mailRegex
} from "./chunk-REH2YONL.js";
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
  NumberValueAccessor,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/master/vessel/vessel.service.ts
var VesseService = class _VesseService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to post the data to Db
  VesselDataToDB(data) {
    const imo = data.imo_number;
    data.imo_number = imo !== null && imo !== void 0 ? imo.toString() : null;
    data.status = data.status === true ? "Y" : "N";
    return this.http.post("vessels", data).pipe(map((response) => {
      return response;
    }));
  }
  // method to get the all vessels
  VesselDataFromDb(data) {
    const imo = data.imo_number;
    data.imo_number = imo !== null && imo !== void 0 ? imo.toString() : null;
    return this.http.post("vessellist", data).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  static \u0275fac = function VesseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VesseService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VesseService, factory: _VesseService.\u0275fac, providedIn: "root" });
};

// src/app/pages/master/vessel/vessel.model.ts
var MaVessel = class {
  vessel_id;
  imo_number;
  name;
  grt;
  rgrt;
  nrt;
  loa;
  beam;
  depth;
  type;
  dwt;
  displayFlag;
  status;
  email;
  is_manual;
  selected;
  constructor(maVessel) {
    Object.assign(this, maVessel);
    this.vessel_id = maVessel?.vessel_id ?? null;
    this.imo_number = maVessel?.imo_number ?? null;
    this.name = maVessel?.name ?? null;
    this.grt = maVessel?.grt ?? null;
    this.rgrt = maVessel?.rgrt ?? null;
    this.nrt = maVessel?.nrt ?? null;
    this.loa = maVessel?.loa ?? null;
    this.beam = maVessel?.beam ?? null;
    this.depth = maVessel?.depth ?? null;
    this.type = maVessel?.type ?? null;
    this.dwt = maVessel?.dwt ?? null;
    this.displayFlag = maVessel?.displayFlag ?? null;
    this.status = true;
    this.email = maVessel?.email ?? null;
    this.is_manual = maVessel?.is_manual ?? null;
  }
};
var allowOnlyNumbers = (event) => {
  const regex = /^[0-9]$/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
};

// src/app/components/create-vessel/create-vessel.component.ts
function CreateVesselComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateVesselComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Vessel Name is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "IMO number is required");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter 7 digit IMO number");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "GRT is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "NRT is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "LOA is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Beam is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Depth is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Type of Vessel is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Dead Weight is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Negative numbers are not allowed");
    \u0275\u0275elementEnd();
  }
}
function CreateVesselComponent_mat_error_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter valid email.");
    \u0275\u0275elementEnd();
  }
}
var CreateVesselComponent = class _CreateVesselComponent {
  fb;
  vesselService;
  existingdata;
  snackBar;
  dialogRef;
  vesselForm;
  isEditMode = false;
  allowLimitedInput = allowLimitedInput;
  allowOnlyNumbers = allowOnlyNumbers;
  disallowNumericData = allowOnlyLetters;
  vesselClass = new MaVessel();
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  constructor(fb, vesselService, existingdata, snackBar, dialogRef) {
    this.fb = fb;
    this.vesselService = vesselService;
    this.existingdata = existingdata;
    this.snackBar = snackBar;
    this.dialogRef = dialogRef;
    const data = existingdata?.rowData || {};
    this.isEditMode = !!existingdata;
    this.vesselForm = this.fb.group({
      vessel_id: [data?.vessel_id || 0],
      name: [data?.name || "", [Validators.required]],
      imo_number: [data?.imo_number || "", [Validators.required, Validators.pattern(/^\d{7}$/)]],
      grt: [data?.grt || "", [Validators.required, this.positiveNumberValidator]],
      rgrt: [data?.rgrt || "", [this.positiveNumberValidator]],
      nrt: [data?.nrt || "", [Validators.required, this.positiveNumberValidator]],
      loa: [data?.loa || "", [Validators.required, this.positiveNumberValidator]],
      beam: [data?.beam || "", [Validators.required, this.positiveNumberValidator]],
      depth: [data?.depth || "", [Validators.required, this.positiveNumberValidator]],
      type: [data?.type || "", [Validators.required]],
      dwt: [data?.dwt || "", [Validators.required, this.positiveNumberValidator]],
      displayFlag: [data?.displayFlag || "Y"],
      email: [data?.email || "", [Validators.email, Validators.pattern(mailRegex)]],
      is_manual: [data?.is_manual || "Y"]
      //  status: [data?.status === 'Inactive' ? false : true],
    });
  }
  ngOnInit() {
    if (this.isEditMode) {
      this.vesselForm.get("imo_number")?.disable();
    }
  }
  // method to create the vessel when the add vessel button is clicked
  onSubmit() {
    if (this.vesselForm.valid) {
      this.loader.showDialogLoader();
      const formValue = __spreadProps(__spreadValues({}, this.vesselForm.value), {
        name: this.vesselForm.value.name.trim(),
        status: this.vesselClass.status
      });
      this.vesselService.VesselDataToDB(formValue).subscribe({
        next: (response) => {
          this.loader.hideDialogLoader();
          this.snackBar.showSuccess(response.message);
          this.dialogRef.close("refresh");
        },
        error: (err) => {
          this.loader.hideDialogLoader();
          const errorMsg = err.error?.error || "Something went wrong. Please try again.";
          this.snackBar.showError(errorMsg);
        }
      });
    } else {
      this.snackBar.showError("Please use valid informations.");
    }
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.vesselForm.get(controlName);
    trimInput(control);
  }
  // method to handle the paste event
  onPaste(event) {
    const input = event.target;
    const controlName = input.getAttribute("formControlName");
    if (!controlName)
      return;
    const value = handlePasteText(event);
    this.vesselForm.get(controlName)?.setValue(value);
  }
  // method to allow only positive numbers
  positiveNumberValidator(control) {
    const value = control.value;
    if (value === null || value === void 0 || value === "")
      return null;
    return Number(value) >= 0 ? null : { negativeNumber: true };
  }
  // method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreateVesselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateVesselComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VesseService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateVesselComponent, selectors: [["app-create-vessel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 22, consts: [[4, "ngIf"], [1, "dialog-container"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-container"], ["appearance", "outline", 1, "compact-form-field"], ["matInput", "", "type", "text", "placeholder", "Enter Vessel Name", "formControlName", "name", 3, "keypress", "blur", "paste"], ["matInput", "", "type", "number", "placeholder", "Enter IMO Number", "formControlName", "imo_number", 3, "keypress"], ["matInput", "", "type", "number", "placeholder", "Enter GRT Value", "formControlName", "grt"], ["matInput", "", "type", "number", "placeholder", "Enter RGRT Value", "formControlName", "rgrt"], ["matInput", "", "type", "number", "placeholder", "Enter NRT Value", "formControlName", "nrt"], ["matInput", "", "type", "number", "placeholder", "Enter LOA Value", "formControlName", "loa"], ["matInput", "", "type", "number", "placeholder", "Enter Beam Value", "formControlName", "beam"], ["matInput", "", "type", "number", "placeholder", "Enter Depth Value", "formControlName", "depth"], ["matInput", "", "type", "text", "placeholder", "Enter Vessel Type", "formControlName", "type", 3, "keypress", "blur", "paste"], ["matInput", "", "type", "number", "placeholder", "Enter Dead Weight", "formControlName", "dwt"], ["matInput", "", "type", "email", "placeholder", "Enter an Email", "formControlName", "email", 3, "keypress"], [1, "fixed-button-container"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "add-country"]], template: function CreateVesselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateVesselComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h6");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function CreateVesselComponent_Template_button_click_5_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(6, "mat-icon");
      \u0275\u0275text(7, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function CreateVesselComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-label");
      \u0275\u0275text(12, "Vessel Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("keypress", function CreateVesselComponent_Template_input_keypress_13_listener($event) {
        ctx.disallowNumericData($event);
        return ctx.allowLimitedInput($event, 50);
      })("blur", function CreateVesselComponent_Template_input_blur_13_listener() {
        return ctx.onInputTrim("name");
      })("paste", function CreateVesselComponent_Template_input_paste_13_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, CreateVesselComponent_mat_error_14_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-form-field", 6)(16, "mat-label");
      \u0275\u0275text(17, "IMO Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 8);
      \u0275\u0275listener("keypress", function CreateVesselComponent_Template_input_keypress_18_listener($event) {
        return ctx.allowLimitedInput($event, 7);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, CreateVesselComponent_mat_error_19_Template, 2, 0, "mat-error", 0)(20, CreateVesselComponent_mat_error_20_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-form-field", 6)(22, "mat-label");
      \u0275\u0275text(23, "GRT");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 9);
      \u0275\u0275template(25, CreateVesselComponent_mat_error_25_Template, 2, 0, "mat-error", 0)(26, CreateVesselComponent_mat_error_26_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-form-field", 6)(28, "mat-label");
      \u0275\u0275text(29, "RGRT");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 10);
      \u0275\u0275template(31, CreateVesselComponent_mat_error_31_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 6)(33, "mat-label");
      \u0275\u0275text(34, "NRT");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 11);
      \u0275\u0275template(36, CreateVesselComponent_mat_error_36_Template, 2, 0, "mat-error", 0)(37, CreateVesselComponent_mat_error_37_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-form-field", 6)(39, "mat-label");
      \u0275\u0275text(40, "LOA");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 12);
      \u0275\u0275template(42, CreateVesselComponent_mat_error_42_Template, 2, 0, "mat-error", 0)(43, CreateVesselComponent_mat_error_43_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-form-field", 6)(45, "mat-label");
      \u0275\u0275text(46, "Beam (in meters)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 13);
      \u0275\u0275template(48, CreateVesselComponent_mat_error_48_Template, 2, 0, "mat-error", 0)(49, CreateVesselComponent_mat_error_49_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-form-field", 6)(51, "mat-label");
      \u0275\u0275text(52, "Depth (in meters)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 14);
      \u0275\u0275template(54, CreateVesselComponent_mat_error_54_Template, 2, 0, "mat-error", 0)(55, CreateVesselComponent_mat_error_55_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-form-field", 6)(57, "mat-label");
      \u0275\u0275text(58, "Type Of Vessel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 15);
      \u0275\u0275listener("keypress", function CreateVesselComponent_Template_input_keypress_59_listener($event) {
        ctx.disallowNumericData($event);
        return ctx.allowLimitedInput($event, 50);
      })("blur", function CreateVesselComponent_Template_input_blur_59_listener() {
        return ctx.onInputTrim("type");
      })("paste", function CreateVesselComponent_Template_input_paste_59_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, CreateVesselComponent_mat_error_60_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-form-field", 6)(62, "mat-label");
      \u0275\u0275text(63, "Dead Weight");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 16);
      \u0275\u0275template(65, CreateVesselComponent_mat_error_65_Template, 2, 0, "mat-error", 0)(66, CreateVesselComponent_mat_error_66_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-form-field", 6)(68, "mat-label");
      \u0275\u0275text(69, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 17);
      \u0275\u0275listener("keypress", function CreateVesselComponent_Template_input_keypress_70_listener($event) {
        return ctx.allowLimitedInput($event, 50);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, CreateVesselComponent_mat_error_71_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 18)(73, "button", 19);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      let tmp_16_0;
      let tmp_17_0;
      let tmp_18_0;
      let tmp_19_0;
      let tmp_20_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Vessel" : "Add Vessel");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.vesselForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.vesselForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.vesselForm.get("imo_number")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.vesselForm.get("imo_number")) == null ? null : tmp_5_0.hasError("pattern"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.vesselForm.get("grt")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.vesselForm.get("grt")) == null ? null : tmp_7_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_8_0 = ctx.vesselForm.get("rgrt")) == null ? null : tmp_8_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_9_0 = ctx.vesselForm.get("nrt")) == null ? null : tmp_9_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.vesselForm.get("nrt")) == null ? null : tmp_10_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_11_0 = ctx.vesselForm.get("loa")) == null ? null : tmp_11_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_12_0 = ctx.vesselForm.get("loa")) == null ? null : tmp_12_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_13_0 = ctx.vesselForm.get("beam")) == null ? null : tmp_13_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_14_0 = ctx.vesselForm.get("beam")) == null ? null : tmp_14_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_15_0 = ctx.vesselForm.get("depth")) == null ? null : tmp_15_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_16_0 = ctx.vesselForm.get("depth")) == null ? null : tmp_16_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_17_0 = ctx.vesselForm.get("type")) == null ? null : tmp_17_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_18_0 = ctx.vesselForm.get("dwt")) == null ? null : tmp_18_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_19_0 = ctx.vesselForm.get("dwt")) == null ? null : tmp_19_0.hasError("negativeNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_20_0 = ctx.vesselForm.get("email")) == null ? null : tmp_20_0.hasError("pattern"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Vessel" : "Add Vessel", " ");
    }
  }, dependencies: [MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatError, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, LoaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  max-width: 280px;\n  box-sizing: border-box;\n}\n.dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  height: 100%;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n  position: sticky;\n  top: 0;\n  background-color: var(-- --color-bg-dark-6);\n  z-index: 2;\n  padding: 10px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  border: none;\n  margin-left: auto;\n  background: none;\n  color: red;\n}\n.form-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 160px);\n  margin-top: 10px;\n  padding: 10px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n.fixed-button-container[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background-color: var(--color-bg-dark-4);\n  padding: 10px;\n  border-top: 1px solid #e0e0e0;\n  z-index: 1;\n}\n.add-country[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  background-color: #3C50E0;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=create-vessel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateVesselComponent, { className: "CreateVesselComponent" });
})();

export {
  VesseService,
  CreateVesselComponent
};
//# sourceMappingURL=chunk-ONRFCEP6.js.map
