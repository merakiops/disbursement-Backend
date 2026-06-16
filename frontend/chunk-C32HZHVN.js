import {
  EmailDialogComponent
} from "./chunk-LG7TJWKL.js";
import {
  EmailSentNotificationComponent
} from "./chunk-SNZ4PAUJ.js";
import "./chunk-4NIIGUZS.js";
import {
  PdaService
} from "./chunk-GUPQORLI.js";
import {
  ClientService
} from "./chunk-DZDO3MWD.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  PA_Rules,
  addAdditionalFieldsToFieldsArray,
  autoCompleteFilter,
  calculateVesselStay,
  clearVesselDetails,
  convertVesselStayToMinutes,
  displayFn,
  fields,
  filterServicesOnPurpose,
  formatToLocalISOString,
  getAdditionalPropertiesObjectFromForm,
  getCompanyIdByName,
  getCurrencyFromCountry,
  getOptionValuefortheFields,
  getPurposeName,
  invoiceReferenceValidation,
  removeAddedFieldsAndControls,
  restrictDecimal,
  validateVesselStay
} from "./chunk-4B5JIWQW.js";
import {
  PortAgentFormService
} from "./chunk-YF5NCWIB.js";
import {
  PortService
} from "./chunk-JRUZ2QQS.js";
import {
  MatTableModule
} from "./chunk-HAXYAMEC.js";
import {
  MatGridListModule
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
  ConfirmationDialogComponent
} from "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
import {
  NgxMatDatepickerInput,
  NgxMatDatepickerToggle,
  NgxMatDatetimepicker,
  NgxMatNativeDateModule
} from "./chunk-P7DPZ3OU.js";
import {
  MatDialog
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
import {
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  MatNativeDateModule,
  MatOption,
  MatOptionModule
} from "./chunk-BAX6ITZM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/components/date-time-picker/date-time-picker.component.ts
var DateTimePickerComponent = class _DateTimePickerComponent {
  form;
  fieldValue;
  label;
  constructor() {
    console.log("date", this.fieldValue);
  }
  static \u0275fac = function DateTimePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateTimePickerComponent, selectors: [["app-date-time-picker"]], inputs: { form: "form", fieldValue: "fieldValue", label: "label" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 12, consts: [["picker", ""], [3, "formGroup"], ["appearance", "outline", 1, "mat-field-small"], ["matInput", "", "ngxMatDatetimePickerInput", "", 3, "ngxMatDatetimePicker", "formControlName"], ["matSuffix", "", 3, "for"], ["ngxMatDatepickerToggleIcon", ""], [3, "showSpinners", "showSeconds", "touchUi", "stepHour", "stepMinute", "stepSecond", "enableMeridian"]], template: function DateTimePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-form-field", 2)(2, "mat-label");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 3);
      \u0275\u0275elementStart(5, "ngx-mat-datepicker-toggle", 4)(6, "mat-icon", 5);
      \u0275\u0275text(7, "event");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "ngx-mat-datetime-picker", 6, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const picker_r1 = \u0275\u0275reference(9);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngxMatDatetimePicker", picker_r1)("formControlName", ctx.fieldValue);
      \u0275\u0275advance();
      \u0275\u0275property("for", picker_r1);
      \u0275\u0275advance(3);
      \u0275\u0275property("showSpinners", true)("showSeconds", false)("touchUi", false)("stepHour", 1)("stepMinute", 1)("stepSecond", 1)("enableMeridian", false);
    }
  }, dependencies: [NgxMatDatepickerInput, NgxMatDatepickerToggle, NgxMatDatetimepicker, NgxMatNativeDateModule, MatIcon, MatFormField, MatLabel, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n  margin-left: -15px;\n}\n  ngx-mat-timepicker .mat-mdc-form-field-infix {\n  min-width: 33px !important;\n  min-height: 36px !important;\n  padding: 4px 8px !important;\n  text-align: center;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=date-time-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateTimePickerComponent, { className: "DateTimePickerComponent" });
})();

// src/app/pages/pda/pda.component.ts
function PdaComponent_div_8_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.getOptionValue(field_r3, opt_r5, ctx_r3.addedFields));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.name === "Cargo" ? opt_r5 == null ? null : opt_r5.type : field_r3.name === "ToCurrency" || field_r3.name === "FromCurrency" ? opt_r5 : opt_r5 == null ? null : opt_r5.name, " ");
  }
}
function PdaComponent_div_8_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Please select the ", field_r3.name, ". ");
  }
}
function PdaComponent_div_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 17, 0);
    \u0275\u0275listener("click", function PdaComponent_div_8_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const trigger_r2 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r2.openPanel());
    })("blur", function PdaComponent_div_8_mat_form_field_1_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r1);
      const field_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onRemove(field_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 18, 1);
    \u0275\u0275listener("optionSelected", function PdaComponent_div_8_mat_form_field_1_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const field_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSelect(field_r3.name, $event.option));
    });
    \u0275\u0275template(7, PdaComponent_div_8_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PdaComponent_div_8_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const auto_r6 = \u0275\u0275reference(6);
    const field_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r3.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r3.name, "");
    \u0275\u0275property("formControlName", field_r3.value)("matAutocomplete", auto_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r3.displayFn.bind(ctx_r3, field_r3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.getFilteredOptions(field_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_12_0 = ctx_r3.pdaCreateForm.get(field_r3.value)) == null ? null : tmp_12_0.hasError("required"));
  }
}
function PdaComponent_div_8_mat_form_field_2_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" please select the ", field_r3.name, " ");
  }
}
function PdaComponent_div_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 22)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 23);
    \u0275\u0275listener("dateChange", function PdaComponent_div_8_mat_form_field_2_Template_input_dateChange_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 24)(5, "mat-datepicker", null, 2);
    \u0275\u0275template(7, PdaComponent_div_8_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const picker_r8 = \u0275\u0275reference(6);
    const field_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r3.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r3.name, "");
    \u0275\u0275property("matDatepicker", picker_r8)("formControlName", field_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r3.pdaCreateForm.get(field_r3.value)) == null ? null : tmp_10_0.hasError("required"));
  }
}
function PdaComponent_div_8_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.name, " is required ");
  }
}
function PdaComponent_div_8_mat_form_field_3_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " valid format (e.g., 1D, 1H, 1D 1H,). ");
    \u0275\u0275elementEnd();
  }
}
function PdaComponent_div_8_mat_form_field_3_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Enter Valid Format ");
    \u0275\u0275elementEnd();
  }
}
function PdaComponent_div_8_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275listener("blur", function PdaComponent_div_8_mat_form_field_3_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r9);
      const field_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(field_r3.name === "Vessel Stay" ? ctx_r3.validateVesselStay(field_r3, ctx_r3.pdaCreateForm) : null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PdaComponent_div_8_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 20)(5, PdaComponent_div_8_mat_form_field_3_mat_error_5_Template, 2, 0, "mat-error", 20)(6, PdaComponent_div_8_mat_form_field_3_mat_error_6_Template, 2, 0, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const field_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r3.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r3.name, "");
    \u0275\u0275property("type", field_r3.data_type || "text")("formControlName", field_r3.value)("readonly", field_r3.pdaReadOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx_r3.pdaCreateForm.get(field_r3.value)) == null ? null : tmp_9_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r3.name === "Vessel Stay" && ((tmp_10_0 = ctx_r3.pdaCreateForm.get(field_r3.value)) == null ? null : tmp_10_0.hasError("invalidFormat")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r3.name === "Invoice Ref No" && ((tmp_11_0 = ctx_r3.pdaCreateForm.get(field_r3.value)) == null ? null : tmp_11_0.hasError("invalidData")));
  }
}
function PdaComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PdaComponent_div_8_mat_form_field_1_Template, 9, 8, "mat-form-field", 14)(2, PdaComponent_div_8_mat_form_field_2_Template, 8, 7, "mat-form-field", 15)(3, PdaComponent_div_8_mat_form_field_3_Template, 7, 9, "mat-form-field", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r3.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r3.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r3.type !== "date" && field_r3.type !== "select");
  }
}
var PdaComponent = class _PdaComponent {
  fb;
  dialog;
  snackBar;
  portService;
  router;
  portAgentFormService;
  pdaService;
  clientService;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  pdaCreateForm;
  countryList = [];
  portList = [];
  vesselList = [];
  purposeList = [];
  portAgentList = [];
  cargoList = [];
  clientList = [];
  currencyList = [];
  fields = fields.map((field) => {
    if (field.name === "Vessel") {
      return __spreadProps(__spreadValues({}, field), { value: "vessel_id" });
    }
    if (field.value && field.value.includes("fda")) {
      return __spreadProps(__spreadValues({}, field), { value: field.value.replace(/fda/g, "pda") });
    }
    if (field.name === "FromCurrency") {
      return __spreadProps(__spreadValues({}, field), { pdaReadOnly: true });
    }
    return field;
  }).filter((field) => field.createPdaForm === true);
  addedFields = [];
  companyList = [];
  filteredOptions = {};
  displayFn = displayFn;
  validateVesselStay = validateVesselStay;
  restrictDecimal = restrictDecimal;
  getOptionValue = getOptionValuefortheFields;
  disableProceedToPdabutton = false;
  disablesendRequestButton = false;
  serviceList = new PA_Rules();
  portServiceList = new PA_Rules();
  constructor(fb, dialog, snackBar, portService, router, portAgentFormService, pdaService, clientService) {
    this.fb = fb;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.portService = portService;
    this.router = router;
    this.portAgentFormService = portAgentFormService;
    this.pdaService = pdaService;
    this.clientService = clientService;
    this.buildPortAgentForm();
  }
  // method to build the port agent form
  buildPortAgentForm() {
    this.pdaCreateForm = this.fb.group({
      country_id: [null],
      client_id: [null],
      portagent_id: [null],
      cargo_id: [null],
      port_id: [null],
      imo_number: [null],
      vessel_id: [null],
      vessel: [null],
      nrt: [null],
      grt: [null],
      rgrt: [null],
      loa: [null],
      beam: [null],
      depth: [null],
      dwt: [null],
      type: [null],
      purpose_id: [null],
      eta: [null, []],
      etd: [null, []],
      vessel_stay: [null],
      pda_roe: [null],
      voyage: [null],
      pda_currency_from: [null],
      pda_currency_to: [null],
      invoice_ref_no: [null]
    });
    invoiceReferenceValidation;
    Object.keys(this.pdaCreateForm.controls).forEach((key) => {
      this.pdaCreateForm.controls[key].valueChanges.subscribe((value) => {
        if (value === "") {
          this.pdaCreateForm.controls[key].setValue(null);
        }
      });
    });
  }
  autoCompleteFilter = autoCompleteFilter;
  getFilteredOptions(field) {
    return this.filteredOptions[field.value] || [];
  }
  ngOnInit() {
    this.getAllMasterData();
    this.fields.forEach((field) => {
      if (field.type === "select") {
        this.autoCompleteFilter(field, this.pdaCreateForm, this.filteredOptions);
      }
    });
  }
  // method to get all master data
  getAllMasterData() {
    this.swapFields();
    this.loader.show();
    const params = {
      fields: ["all"]
    };
    this.portAgentFormService.getMasterData(params).subscribe({
      next: (response) => {
        this.countryList = response.country;
        this.purposeList = response.purpose;
        this.portAgentList = response.port_agent;
        this.clientList = response.client;
        this.cargoList = response.cargo;
        this.vesselList = response.vessel;
        this.companyList = response.companies;
        this.currencyList = response.currency;
        this.formatFieldData(this.fields);
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
      }
    });
  }
  // method to swap fields
  swapFields() {
    const imoIndex = this.fields.findIndex((f) => f.name?.trim() === "IMO Number");
    const vesselIndex = this.fields.findIndex((f) => f.name?.trim() === "Vessel");
    if (imoIndex !== -1 && vesselIndex !== -1) {
      const temp = this.fields[imoIndex];
      this.fields[imoIndex] = this.fields[vesselIndex];
      this.fields[vesselIndex] = temp;
      this.fields[imoIndex].type = "select";
      this.fields[vesselIndex].type = "input";
    }
  }
  // method to calculate the vessel stay on date change
  onDateChange() {
    const eta = this.pdaCreateForm.get("eta")?.value;
    const etd = this.pdaCreateForm.get("etd")?.value;
    const stay = calculateVesselStay(eta, etd);
    if (stay === "eta greater than etd") {
      this.pdaCreateForm.get("vessel_stay")?.setValue(null);
      this.pdaCreateForm.get("etd")?.setValue(null);
    } else {
      this.pdaCreateForm.get("vessel_stay")?.setValue(stay);
    }
  }
  // method to format the fieldValue for the select field
  // getOptionValue(field: any, opt: any): any {
  //   const matchedFields = this.fields.filter((f) =>
  //     this.addedFields.some(addedField => addedField.fieldName === f.name.trim())
  //   );
  //   if (field.name === 'ToCurrency' || field.name === 'FromCurrency') {
  //     // If the field is 'ToCurrency' or 'FromCurrency', return the entire option object
  //     return opt;
  //   }
  //   // Check if the field is in the matchedFields for additional fields
  //   else if (matchedFields.some((f) => f.name === field.name)) {
  //     console.log("returning ", opt.name)
  //     return opt.name;
  //   }
  //   else {
  //     // For other fields, return the value corresponding to the dynamic field ID
  //     const key = `${field.name.trim().toLowerCase().replace(/\s+/g, '')}_id`;
  //     return opt[key];
  //   }
  // }
  // Validate all the fields based on the proceed to PDA button click
  setValidationForProceedToPda() {
    Object.keys(this.pdaCreateForm.controls).forEach((key) => {
      this.pdaCreateForm.get(key)?.clearValidators();
      this.pdaCreateForm.get(key)?.updateValueAndValidity({ emitEvent: false });
    });
    Object.keys(this.pdaCreateForm.controls).forEach((key) => {
      const field = this.addedFields.find((f) => f.controlName === key);
      if (field && field.is_mandatory === "N") {
      } else {
        if (key !== "rgrt") {
          this.pdaCreateForm.get(key)?.setValidators([Validators.required]);
          this.pdaCreateForm.get(key)?.updateValueAndValidity();
        }
      }
    });
  }
  setValidationForSendRequest() {
    Object.keys(this.pdaCreateForm.controls).forEach((key) => {
      if (key === "client_id" || key == "portagent_id") {
        const control = this.pdaCreateForm.get(key);
        control?.setValidators([Validators.required]);
        control?.updateValueAndValidity();
      } else {
        this.pdaCreateForm.get(key)?.clearValidators();
        this.pdaCreateForm.get(key)?.updateValueAndValidity();
      }
    });
  }
  // method to proceed to PDA edit page when the  proceed to PDA button is clicked
  proceedToPda() {
    this.setValidationForProceedToPda();
    if (this.pdaCreateForm.valid) {
      this.disableProceedToPdabutton = true;
      const formData = this.pdaCreateForm.value;
      const formatedJson = this.transformJsonData(formData);
      this.loader.show();
      this.pdaService.postPdaData(formatedJson).subscribe({
        next: (response) => {
          this.snackBar.showSuccess("PDA data saved successfully");
          sessionStorage.setItem("disbursement_seq", JSON.stringify(response.disbursement_seq));
          this.router.navigate(["/layout/pda/edit"]);
          this.loader.hide();
        },
        error: (error) => {
          const errMsg = error?.error?.error || "Failed to save PDA data";
          this.snackBar.showError(errMsg);
          this.disableProceedToPdabutton = false;
          this.loader.hide();
          this.loader.hide();
        }
      });
    } else {
      this.pdaCreateForm.markAllAsTouched();
      this.snackBar.showError("Please fill all the required fields");
    }
  }
  // method to format the form data to match the expected structure for the API
  transformJsonData(formData) {
    return {
      comp_id: getCompanyIdByName(this.companyList),
      client_id: formData.client_id,
      portagent_id: formData.portagent_id,
      country_id: formData.country_id,
      port_id: formData.port_id,
      vessel_id: formData.vessel_id,
      imo_number: formData.imo_number,
      vessel: {
        vsl_id: formData.vessel_id?.toString() || "",
        name: this.vesselList?.find((vessel) => vessel.vessel_id === formData.vessel_id)?.name || null,
        imo_number: formData.imo_number?.toString() || "",
        grt: formData.grt?.toString() || "",
        nrt: formData.nrt?.toString() || "",
        loa: formData.loa?.toString() || "",
        rgrt: formData.rgrt?.toString() || "",
        beam: formData.beam?.toString() || "",
        depth: formData.depth?.toString() || "",
        dwt: formData.dwt?.toString() || "",
        type: formData.type?.toString() || "",
        additional_properties: this.getAdditionalProperties(),
        additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.pdaCreateForm, this.fields)
      },
      cargo: {
        cargo_id: formData.cargo_id,
        type: this.cargoList.find((cargo) => cargo.cargo_id === formData.cargo_id)?.type || null
      },
      purpose: {
        purpose_id: formData.purpose_id,
        name: this.purposeList.find((purpose) => purpose.purpose_id === formData.purpose_id)?.name || null
      },
      eta: formData.eta ? formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? formatToLocalISOString(formData.etd) : null,
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      roe: +formData.pda_roe || null,
      voyage: formData.voyage,
      pda_currency_to: formData.pda_currency_to,
      pda_currency_from: formData.pda_currency_from,
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      port_tariff_rule: {
        items: this.serviceList.items
      }
    };
  }
  // method to get the drop down field value based on the field name
  formatFieldData(fields2) {
    fields2.forEach((field) => {
      switch (field.name.trim()) {
        case "Country":
          field.options = this.countryList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Port Agent":
          field.options = this.portAgentList.map((agent) => ({
            portagent_id: agent.company_id,
            name: agent.company_name
          }));
          this.filteredOptions[field.value] = field.options;
          break;
        case "Client":
          field.options = this.clientList.map((client) => ({
            client_id: client.company_id,
            name: client.company_name
          }));
          this.filteredOptions[field.value] = field.options;
          break;
        case "Cargo":
          field.options = this.cargoList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Port":
          field.options = this.portList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Vessel":
          field.options = this.vesselList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Purpose":
          field.options = this.purposeList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "FromCurrency":
        case "ToCurrency":
          field.options = this.currencyList;
          this.filteredOptions[field.value] = field.options;
          break;
        default:
      }
    });
  }
  // method to open the email dialog when the  send request button is clicked 
  openEmailDialog() {
    this.setValidationForSendRequest();
    this.pdaCreateForm.markAllAsTouched();
    if (this.pdaCreateForm.valid) {
      const portAgent = this.portAgentList.filter((agent) => {
        return agent.company_id === this.pdaCreateForm.get("portagent_id")?.value;
      });
      const clientEmail = this.clientList.filter((client) => {
        return client.company_id === this.pdaCreateForm.get("client_id")?.value;
      });
      const dialogRef = this.dialog.open(EmailDialogComponent, {
        disableClose: true,
        panelClass: "email-dialog-style",
        width: "800px",
        height: "500px",
        maxWidth: "90vw",
        maxHeight: "90vh",
        data: {
          to: portAgent[0]?.email || "",
          cc: clientEmail[0]?.email || ""
        }
      });
      dialogRef.afterClosed().subscribe((data) => {
        if (data) {
          this.loader.show();
          const formData = this.pdaCreateForm.value;
          const formatedJson = this.transformJsonData(formData);
          formatedJson.email_to = data.to;
          formatedJson.email_cc = data.cc;
          formatedJson.email_signature = data.email_signature;
          formatedJson.update_signature = data.update_signature;
          formatedJson.comp_id = getCompanyIdByName(this.companyList), this.disablesendRequestButton = true;
          this.pdaService.pdaCreateByPortAgent(formatedJson).subscribe({
            next: (response) => {
              this.loader.hide();
              const dialogRef2 = this.dialog.open(EmailSentNotificationComponent, {
                disableClose: true,
                panelClass: "email-dialog-style",
                width: "400px",
                height: "150px",
                data: {
                  email: data.to
                }
              });
              dialogRef2.afterClosed().subscribe((data2) => {
                if (data2) {
                  this.router.navigate(["/layout/disbursement"]);
                }
              });
            },
            error: (err) => {
              this.disablesendRequestButton = false;
              this.loader.hide();
              const errMsg = err?.error?.error || "Failed to send PDA data";
              this.snackBar.showError(errMsg);
            }
          });
        }
      });
    }
  }
  // method to get ports by country
  onSelect(fieldName, event) {
    if (fieldName === "Country") {
      const currency = getCurrencyFromCountry(this.countryList, event.value);
      this.pdaCreateForm.patchValue({
        pda_currency_from: currency
      });
      this.loader.show();
      this.portService.getPortsByCountryId(event.value).subscribe({
        next: (ports) => {
          this.portList = ports;
          this.filteredOptions["port_id"] = ports;
          this.formatFieldData(this.fields);
          this.loader.hide();
        },
        error: (error) => {
          this.portList = [];
          this.loader.hide();
          const errMsg = error?.error?.error;
          this.snackBar.showError(errMsg);
        }
      });
    } else if (fieldName === "Vessel") {
      const control = this.pdaCreateForm.get("vessel_id");
      const value = control?.value;
      const selectedVessel = this.vesselList.filter((vessel) => vessel.vessel_id === value);
      if (selectedVessel.length > 0) {
        const vessel = selectedVessel[0];
        this.pdaCreateForm.patchValue({
          imo_number: vessel.imo_number,
          nrt: vessel.nrt,
          grt: vessel.grt,
          rgrt: vessel.rgrt,
          depth: vessel.depth,
          loa: vessel.loa,
          beam: vessel.beam,
          type: vessel.type,
          dwt: vessel.dwt,
          vessel_id: vessel.vessel_id,
          vessel: vessel.name
        });
        control?.setErrors(null);
      }
    } else if (fieldName === "Client") {
      this.loader.show();
      const vslpayload = {
        company_id: this.pdaCreateForm.get("client_id")?.value,
        fields: ["assigned_unassigned"]
      };
      this.clientService.VslListFromDb(vslpayload).subscribe({
        next: (response) => {
          this.vesselList = response.assigned_vessels || [];
          this.formatFieldData(this.fields);
          this.loader.hide();
        },
        error: (error) => {
          this.vesselList = [];
          const errMsg = error?.error?.error || "Failed to fetch vessel details";
          this.snackBar.showError(errMsg);
          this.loader.hide();
        }
      });
    } else if (fieldName === "Port") {
      const port_id = this.pdaCreateForm.get("port_id")?.value;
      removeAddedFieldsAndControls(this.pdaCreateForm, this.addedFields, this.fields);
      this.addedFields = [];
      this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.pdaCreateForm, this.addedFields, this.filteredOptions, this.fb);
      this.tariffrulesByPort(port_id);
    } else if (fieldName === "Purpose") {
      const purpose_id = this.pdaCreateForm.get("purpose_id")?.value;
      const purpose = getPurposeName(this.purposeList, purpose_id);
      this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
    }
  }
  // method to clear the data on click of clear all button
  clearData() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: {
        header: "Clear Data",
        text: `Are You Sure, You want to clear the form?                                                                                                                    
        All entered information will be lost`
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.pdaCreateForm.reset();
        Object.keys(this.pdaCreateForm.controls).forEach((key) => {
          this.pdaCreateForm.get(key)?.clearValidators();
          this.pdaCreateForm.get(key)?.updateValueAndValidity();
        });
      }
    });
  }
  // set the additional properties field
  getAdditionalProperties() {
    const additionalProps = {};
    const dateFields = this.fields.filter((field) => field.type === "date").map((field) => field.name);
    this.addedFields.forEach(({ fieldName, controlName }) => {
      let value = this.pdaCreateForm.get(controlName)?.value ?? null;
      additionalProps[fieldName] = value;
      if (dateFields.includes(fieldName) && value) {
        additionalProps[fieldName] = formatToLocalISOString(value);
      }
    });
    return additionalProps;
  }
  onRemove(field) {
    if (field?.name === "Country" && !this.pdaCreateForm.get("country_id")?.value) {
      this.pdaCreateForm.get("port_id")?.setValue(null);
      this.portList = [];
      this.filteredOptions["port_id"] = [];
    } else if (field?.name === "Client" && !this.pdaCreateForm.get("client_id")?.value) {
      this.pdaCreateForm.get("vessel_id")?.setValue(null);
      this.vesselList = [];
      this.filteredOptions["vessel_id"] = [];
      clearVesselDetails(this.pdaCreateForm);
    } else if (field?.name === "Vessel" && !this.pdaCreateForm.get("vessel_id")?.value) {
      this.pdaCreateForm.get("vessel_id")?.setValue(null);
      clearVesselDetails(this.pdaCreateForm);
    }
  }
  tariffrulesByPort(port_id) {
    this.serviceList = new PA_Rules();
    const requestBody = {
      page: 1,
      page_size: 1,
      query_name: "",
      port_id
    };
    this.loader.show();
    this.portService.getTariffRules(requestBody).subscribe({
      next: (res) => {
        this.portServiceList = res?.data[0]?.rules;
        const purposeId = this.pdaCreateForm.get("purpose_id")?.value;
        const purpose = getPurposeName(this.purposeList, purposeId);
        this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
        const errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(errMsg);
      }
    });
  }
  static \u0275fac = function PdaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(PdaService), \u0275\u0275directiveInject(ClientService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdaComponent, selectors: [["app-pda"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 8, consts: [["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], [1, "port-agent-form-container", "theme-dark"], [3, "formGroup"], [1, "field-section"], [2, "margin-bottom", "1px", "font-weight", "500"], [2, "margin-bottom", "35px", "font-size", "15px", "color", "grey"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [1, "clear-submit-btn"], [1, "clear-btn", 3, "click"], ["type", "button", 1, "proceed-pda-btn", 3, "click", "disabled"], ["type", "button", 1, "submit-button", 3, "click", "disabled"], ["appearance", "outline", "class", "mat-field-small", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "mat-field-small"], ["matInput", "", "placeholder", "Please select", 3, "click", "blur", "formControlName", "placeholder", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], ["appearance", "outline"], ["matInput", "", 3, "dateChange", "matDatepicker", "formControlName", "placeholder"], ["matIconSuffix", "", 3, "for"], ["matInput", "", 3, "blur", "type", "formControlName", "placeholder", "readonly"]], template: function PdaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "form", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275text(4, " Port Disbursement Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7);
      \u0275\u0275text(6, " Fill all required fields to accurately capture vessel information, port details, voyage data and financial inputs for the PDA.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275template(8, PdaComponent_div_8_Template, 4, 3, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 10)(10, "button", 11);
      \u0275\u0275listener("click", function PdaComponent_Template_button_click_10_listener() {
        return ctx.clearData();
      });
      \u0275\u0275text(11, "Clear All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 12);
      \u0275\u0275listener("click", function PdaComponent_Template_button_click_12_listener() {
        return ctx.proceedToPda();
      });
      \u0275\u0275text(13, "Proceed to PDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function PdaComponent_Template_button_click_14_listener() {
        return ctx.openEmailDialog();
      });
      \u0275\u0275text(15, "Send Request ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.pdaCreateForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.fields);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("btn-disabled", ctx.disableProceedToPdabutton);
      \u0275\u0275property("disabled", ctx.disableProceedToPdabutton);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-disabled", ctx.disablesendRequestButton);
      \u0275\u0275property("disabled", ctx.disablesendRequestButton);
    }
  }, dependencies: [
    MatGridListModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    CommonModule,
    NgForOf,
    NgIf,
    MatSelectModule,
    MatOption,
    MatOptionModule,
    MatTableModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle
  ], styles: ['\n\n.port-agent-form-container[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10) !important;\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  padding: 0 10px;\n}\n.port-agent-form-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 19px;\n  color: var(--color-white) !important;\n}\n.port-agent-form-container[_ngcontent-%COMP%] {\n  color: var(--color-white) !important;\n}\n.port-agent-form-container[_ngcontent-%COMP%]   div[style*="color: grey"][_ngcontent-%COMP%], \n.port-agent-form-container[_ngcontent-%COMP%]   div[style*="color:grey"][_ngcontent-%COMP%] {\n  color: var(--color-text-light-1) !important;\n}\n.port-agent-form-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.port-agent-form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-white) !important;\n}\n  .mat-mdc-form-field-label, \n  .mat-mdc-floating-label {\n  color: var(--color-white) !important;\n}\n.field-section[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 6px;\n}\n.field-section[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 0 0 auto;\n}\n.field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 12.5%;\n  max-width: 230px;\n  max-height: 50px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100px;\n  max-width: 180px;\n  margin-bottom: 0px;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  position: relative;\n}\n  ngx-mat-timepicker .mat-mdc-form-field-infix {\n  min-width: 33px !important;\n  min-height: 36px !important;\n  padding: 4px 8px !important;\n  text-align: center;\n  box-sizing: border-box;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 35px;\n  overflow: hidden;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n.clear-submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n  margin-top: 20px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  border: 1px solid #ff5252;\n  background-color: #ff5252;\n  color: white;\n  font-weight: bold;\n  padding: 8px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 17px;\n  box-shadow: 0 4px 10px rgba(255, 82, 82, 0.3);\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ff1744;\n  border-color: #ff1744;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 15px rgba(255, 23, 68, 0.4);\n}\n.submit-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  background-color: #3C50E0;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n  border: none;\n  padding: 10px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(60, 80, 224, 0.4);\n  transition: all 0.2s ease;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #2f3ec9;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(60, 80, 224, 0.3);\n}\n.submit-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\nbutton[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.proceed-pda-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  border: 1px solid gray;\n  background-color: #686868;\n  color: var(--color-white);\n  font-weight: bold;\n  padding: 10px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 15px;\n}\n.proceed-pda-btn[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n  color: #fff;\n  border-color: #555;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n  mat-error {\n  font-size: 12px;\n  color: red;\n  margin-top: -5px;\n  margin-left: -18px;\n}\n@media (min-width: 1440px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media (min-width: 1024px) and (max-width: 1439px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (min-width: 768px) and (max-width: 1023px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .clear-submit-btn[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  button[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .clear-submit-btn[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  button[_ngcontent-%COMP%] {\n    max-width: 150px;\n    font-size: 14px;\n    padding: 8px;\n  }\n}\n@media (max-width: 575px) {\n  .port-agent-form-container[_ngcontent-%COMP%] {\n    padding: 0 5px;\n  }\n  .field-section[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n  }\n  .clear-submit-btn[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 100%;\n  }\n  .clear-btn[_ngcontent-%COMP%], \n   .proceed-pda-btn[_ngcontent-%COMP%], \n   .submit-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n  }\n}\n.table-outer[_ngcontent-%COMP%], \n.table-content[_ngcontent-%COMP%], \n.table-textarea[_ngcontent-%COMP%], \n.table-service[_ngcontent-%COMP%], \n.total-section[_ngcontent-%COMP%], \n.table-feedback[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10) !important;\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10) !important;\n}\n/*# sourceMappingURL=pda.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdaComponent, { className: "PdaComponent" });
})();
export {
  PdaComponent
};
//# sourceMappingURL=chunk-C32HZHVN.js.map
