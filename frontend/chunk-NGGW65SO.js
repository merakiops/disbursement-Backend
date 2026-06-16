import {
  MatTabsModule
} from "./chunk-Y7YG6PR5.js";
import {
  CountryService
} from "./chunk-3ZVHPZIA.js";
import {
  allowLimitedInput,
  allowOnlyLetters
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import {
  PortService
} from "./chunk-62FFZ6RH.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-HAXYAMEC.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-7SVTSSNI.js";
import {
  MatSelect
} from "./chunk-2LYLMMA2.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
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
  MatLabel,
  MatSuffix
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
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
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  MatOption
} from "./chunk-BAX6ITZM.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  Subject,
  computed,
  debounceTime,
  inject,
  map,
  of,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/master/tariff-services/tariff-service.model.ts
var atLeastOneFieldRequiredValidator = (control) => {
  const fieldsArray = control;
  if (fieldsArray.length === 0) {
    return { atLeastOneFieldRequired: true };
  }
  return null;
};
var formatColumnName = (input) => {
  if (!input)
    return "";
  return input.trim().toLowerCase().replace(/\s+/g, "_");
};
var fieldKeyResolver = (field) => {
  const normalized = field.trim().toLowerCase();
  switch (normalized) {
    case "country":
      return "country_name";
    case "port":
      return "port_name";
    default:
      return formatColumnName(field);
  }
};
var rangeValidator = (formArray) => {
  if (!formArray || !(formArray instanceof FormArray))
    return null;
  let minValue = null;
  let maxValue = null;
  formArray.controls.forEach((control) => {
    const { field_name, value } = control.value;
    const lowerField = field_name?.toLowerCase()?.trim();
    if (lowerField === "min range") {
      minValue = value !== "" && value !== null ? Number(value) : null;
    } else if (lowerField === "max range") {
      maxValue = value !== "" && value !== null ? Number(value) : null;
    }
  });
  if (minValue !== null && maxValue !== null && maxValue <= minValue) {
    return { rangeInvalid: true };
  }
  return null;
};

// src/app/pages/master/tariff-services/tariff-services.service.ts
var TariffService = class _TariffService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get all the service data from db
  serviceDataFromDb() {
    return this.http.get("tariff-service", null, void 0);
  }
  // method to send the data to db
  ServiceDataToDB(data) {
    return this.http.post("create-tariff-table", data).pipe(map((response) => {
      return response;
    }));
  }
  // method to get the particular service data
  serviceDataByServiceName(serviceName) {
    const formattedService = serviceName.replace(/\s+/g, "").toLowerCase();
    return this.http.get(`tariff_service/${serviceName}`, null, void 0).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  createOrUpdateServiceData(serviceName, payloads) {
    const formattedService = serviceName.replace(/\s+/g, "").toLowerCase();
    console.log("service name", serviceName);
    return this.http.post(`tariff_service/${serviceName}`, { data: payloads }).pipe(map((response) => response));
  }
  static \u0275fac = function TariffService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TariffService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TariffService, factory: _TariffService.\u0275fac, providedIn: "root" });
};

// src/app/components/create-tariff-service/create-service-data/create-service-data.component.ts
function CreateServiceDataComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateServiceDataComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CreateServiceDataComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRow());
    });
    \u0275\u0275text(1, "+ Add Row");
    \u0275\u0275elementEnd();
  }
}
function CreateServiceDataComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function CreateServiceDataComponent_div_14_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const rowIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeRow(rowIndex_r4));
    });
    \u0275\u0275elementStart(4, "mat-icon", 20);
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rowIndex_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Row ", rowIndex_r4 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.rowsArray.length === 1);
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275listener("onSelectionChange", function CreateServiceDataComponent_div_14_div_4_mat_form_field_1_mat_option_6_Template_mat_option_onSelectionChange_0_listener() {
      const country_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onCountrySelect(country_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r8 = ctx.$implicit;
    \u0275\u0275property("value", country_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r8.name, " ");
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const fieldGroup_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_9_0.value, " is required. ");
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275listener("focus", function CreateServiceDataComponent_div_14_div_4_mat_form_field_1_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const rowIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCountryFocus(rowIndex_r4, i_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 26, 0);
    \u0275\u0275template(6, CreateServiceDataComponent_div_14_div_4_mat_form_field_1_mat_option_6_Template, 2, 2, "mat-option", 27);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CreateServiceDataComponent_div_14_div_4_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_12_0;
    const countryAuto_r10 = \u0275\u0275reference(5);
    const ctx_r10 = \u0275\u0275nextContext();
    const fieldGroup_r9 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const rowIndex_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("matAutocomplete", countryAuto_r10);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx_r1.displayCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 5, ctx_r1.getCountryOptions(rowIndex_r4, i_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_12_0 = fieldGroup_r9.get("value")) == null ? null : tmp_12_0.hasError("required")) && (((tmp_12_0 = fieldGroup_r9.get("value")) == null ? null : tmp_12_0.touched) || ctx_r1.isSubmitted));
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_2_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const port_r13 = ctx.$implicit;
    \u0275\u0275property("value", port_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", port_r13.name, " ");
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_2_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const fieldGroup_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_9_0.value, " is required. ");
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275listener("focus", function CreateServiceDataComponent_div_14_div_4_mat_form_field_2_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r12);
      const i_r6 = \u0275\u0275nextContext().index;
      const rowIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPortFocus(rowIndex_r4, i_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 26, 1);
    \u0275\u0275template(6, CreateServiceDataComponent_div_14_div_4_mat_form_field_2_mat_option_6_Template, 2, 2, "mat-option", 29);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CreateServiceDataComponent_div_14_div_4_mat_form_field_2_mat_error_8_Template, 2, 1, "mat-error", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_12_0;
    const portAuto_r14 = \u0275\u0275reference(5);
    const ctx_r10 = \u0275\u0275nextContext();
    const fieldGroup_r9 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const rowIndex_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("matAutocomplete", portAuto_r14);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx_r1.displayPort);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 5, ctx_r1.getPortOptions(rowIndex_r4, i_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_12_0 = fieldGroup_r9.get("value")) == null ? null : tmp_12_0.hasError("required")) && (((tmp_12_0 = fieldGroup_r9.get("value")) == null ? null : tmp_12_0.touched) || ctx_r1.isSubmitted));
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const fieldGroup_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_8_0.value, " is required. ");
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 31);
    \u0275\u0275template(4, CreateServiceDataComponent_div_14_div_4_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const fieldGroup_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.isNumericField((tmp_8_0 = fieldGroup_r9.get("data_type")) == null ? null : tmp_8_0.value) ? "number" : "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = fieldGroup_r9.get("value")) == null ? null : tmp_9_0.hasError("required")) && (((tmp_9_0 = fieldGroup_r9.get("value")) == null ? null : tmp_9_0.touched) || ctx_r1.isSubmitted));
  }
}
function CreateServiceDataComponent_div_14_div_4_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32);
    \u0275\u0275text(1, " Max Range must be greater than Min Range. ");
    \u0275\u0275elementEnd();
  }
}
function CreateServiceDataComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, CreateServiceDataComponent_div_14_div_4_mat_form_field_1_Template, 9, 7, "mat-form-field", 22)(2, CreateServiceDataComponent_div_14_div_4_mat_form_field_2_Template, 9, 7, "mat-form-field", 22)(3, CreateServiceDataComponent_div_14_div_4_mat_form_field_3_Template, 5, 3, "mat-form-field", 22)(4, CreateServiceDataComponent_div_14_div_4_mat_error_4_Template, 2, 0, "mat-error", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const fieldGroup_r9 = ctx.$implicit;
    const i_r6 = ctx.index;
    const rowGroup_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_7_0.value == null ? null : tmp_7_0.value.toLowerCase()) === "country");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_8_0.value == null ? null : tmp_8_0.value.toLowerCase()) === "port");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.toLowerCase()) !== "country" && ((tmp_9_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.toLowerCase()) !== "port");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = rowGroup_r15.get("fields")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["rangeInvalid"]) && ((tmp_10_0 = fieldGroup_r9.get("field_name")) == null ? null : tmp_10_0.value) === "Max Range");
  }
}
function CreateServiceDataComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, CreateServiceDataComponent_div_14_div_1_Template, 6, 2, "div", 14);
    \u0275\u0275elementContainerStart(2, 15);
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275template(4, CreateServiceDataComponent_div_14_div_4_Template, 5, 5, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowIndex_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", rowIndex_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getFields(rowIndex_r4).controls);
  }
}
var CreateServiceDataComponent = class _CreateServiceDataComponent {
  fb;
  dialogRef;
  existingdata;
  countryService;
  portService;
  snackBar;
  tariffService;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  formatColumnName = formatColumnName;
  serviceForm;
  isEditMode = false;
  countryData = [];
  portData = [];
  isSubmitted = false;
  rows = [];
  filteredCountries = {};
  filteredPorts = {};
  constructor(fb, dialogRef, existingdata, countryService, portService, snackBar, tariffService) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.countryService = countryService;
    this.portService = portService;
    this.snackBar = snackBar;
    this.tariffService = tariffService;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.getMaCountryDataFromDb();
    this.buildForm();
  }
  buildForm() {
    const data = this.existingdata?.rowData;
    this.serviceForm = this.fb.group({
      rows: this.fb.array([])
    });
    if (this.isEditMode) {
      this.addRow(data);
    } else {
      this.addRow();
    }
  }
  get rowsArray() {
    return this.serviceForm.get("rows");
  }
  addRow(data) {
    if (!this.isEditMode && this.rowsArray.length > 0 && !this.isLastRowValid()) {
      this.snackBar.showError("Please fill all required fields in the current row before adding a new row.");
      return;
    }
    const rowGroup = this.fb.group({
      seq: [data?.seq || null],
      fields: this.fb.array([], rangeValidator)
    });
    if (this.existingdata?.fields?.length) {
      const previousRowValues = !this.isEditMode && !data ? this.getPreviousRowValues() : null;
      this.existingdata.fields.forEach((field, fieldIndex) => {
        const actualFieldKey = formatColumnName(field.field_name);
        let dynamicValue = data?.[actualFieldKey] ?? "";
        if (this.isEditMode && data && dynamicValue) {
          if (field.field_name.toLowerCase() === "country") {
            const country = this.countryData.find((c) => c.country_id === dynamicValue);
            dynamicValue = country || dynamicValue;
            if (country?.country_id)
              this.loadPortsForCountry(country.country_id);
          } else if (field.field_name.toLowerCase() === "port") {
            const port = this.portData.find((p) => p.port_id === dynamicValue);
            dynamicValue = port || dynamicValue;
          }
        }
        if (!this.isEditMode && !data && previousRowValues) {
          if (field.field_name.toLowerCase() === "country" && previousRowValues.country) {
            dynamicValue = previousRowValues.country;
          } else if (field.field_name.toLowerCase() === "port" && previousRowValues.port) {
            dynamicValue = previousRowValues.port;
          }
        }
        const fieldsArray = rowGroup.get("fields");
        const fieldGroup = this.fb.group({
          field_name: [field.field_name],
          data_type: [field.data_type],
          value: [
            dynamicValue,
            field.is_mandatory === "Y" ? Validators.required : []
          ]
        });
        fieldsArray.push(fieldGroup);
        if (field.field_name.toLowerCase() === "country") {
          this.setupCountryAutocomplete(fieldGroup.get("value"), `${this.rowsArray.length}-${fieldIndex}`);
        } else if (field.field_name.toLowerCase() === "port") {
          this.setupPortAutocomplete(fieldGroup.get("value"), `${this.rowsArray.length}-${fieldIndex}`);
        }
      });
    }
    this.rowsArray.push(rowGroup);
  }
  loadPortsForCountry(countryId) {
    this.portService.portsByCountry(countryId).subscribe({
      next: (ports) => {
        this.portData = ports;
      },
      error: (error) => {
        this.portData = [];
      }
    });
  }
  isLastRowValid() {
    const lastRowIndex = this.rowsArray.length - 1;
    const lastRow = this.rowsArray.at(lastRowIndex);
    const fields = lastRow.get("fields");
    for (let i = 0; i < fields.length; i++) {
      const fieldGroup = fields.at(i);
      const fieldName = fieldGroup.get("field_name")?.value;
      const isRequired = this.existingdata?.fields?.find((f) => f.field_name === fieldName)?.is_mandatory === "Y";
      const value = fieldGroup.get("value")?.value;
      if (isRequired && (!value || value === "")) {
        return false;
      }
    }
    return true;
  }
  getPreviousRowValues() {
    if (this.rowsArray.length === 0)
      return null;
    const lastRowIndex = this.rowsArray.length - 1;
    const lastRow = this.rowsArray.at(lastRowIndex);
    const fields = lastRow.get("fields");
    let country = null;
    let port = null;
    for (let i = 0; i < fields.length; i++) {
      const fieldGroup = fields.at(i);
      const fieldName = fieldGroup.get("field_name")?.value;
      const value = fieldGroup.get("value")?.value;
      if (fieldName === "Country" && value) {
        country = value;
      } else if (fieldName === "Port" && value) {
        port = value;
      }
    }
    return { country, port };
  }
  removeRow(index) {
    if (this.rowsArray.length > 1) {
      this.rowsArray.removeAt(index);
    }
  }
  getFields(rowIndex) {
    return this.rowsArray.at(rowIndex).get("fields");
  }
  // method to set the number type
  isNumericField(dataType) {
    return ["decimal", "number", "float"].includes(dataType?.toLowerCase());
  }
  ngOnInit() {
    this.getMaCountryDataFromDb();
  }
  getCountryControl(fieldIndex) {
    for (let rowIndex = 0; rowIndex < this.rowsArray.length; rowIndex++) {
      const fields = this.getFields(rowIndex);
      let currentFieldIndex = 0;
      for (let i = 0; i < fields.length; i++) {
        const fieldGroup = fields.at(i);
        const fieldName = fieldGroup.get("field_name")?.value;
        if (fieldName === "Country") {
          if (currentFieldIndex === fieldIndex) {
            return fieldGroup.get("value");
          }
          currentFieldIndex++;
        }
      }
    }
    return null;
  }
  getPortControl(fieldIndex) {
    for (let rowIndex = 0; rowIndex < this.rowsArray.length; rowIndex++) {
      const fields = this.getFields(rowIndex);
      let currentFieldIndex = 0;
      for (let i = 0; i < fields.length; i++) {
        const fieldGroup = fields.at(i);
        const fieldName = fieldGroup.get("field_name")?.value;
        if (fieldName === "Port") {
          if (currentFieldIndex === fieldIndex) {
            return fieldGroup.get("value");
          }
          currentFieldIndex++;
        }
      }
    }
    return null;
  }
  setupCountryAutocomplete(control, index) {
    this.filteredCountries[index] = control.valueChanges.pipe(startWith(control.value || ""), map((value) => this._filterCountries(value)));
  }
  setupPortAutocomplete(control, index) {
    this.filteredPorts[index] = control.valueChanges.pipe(startWith(control.value || ""), map((value) => this._filterPorts(value)));
  }
  _filterCountries(value) {
    if (!this.countryData.length)
      return [];
    const filterValue = typeof value === "string" ? value.toLowerCase() : (value?.name || "").toLowerCase();
    if (!filterValue) {
      return this.countryData.slice(0, 50);
    }
    return this.countryData.filter((country) => country.name?.toLowerCase().includes(filterValue));
  }
  _filterPorts(value) {
    if (!this.portData.length)
      return [];
    const filterValue = typeof value === "string" ? value.toLowerCase() : (value?.name || "").toLowerCase();
    if (!filterValue) {
      return this.portData.slice(0, 50);
    }
    return this.portData.filter((port) => port.name?.toLowerCase().includes(filterValue));
  }
  onCountrySelect(country) {
    if (!country?.country_id)
      return;
    if (!this.isLoading()) {
      this.loader.showDialogLoader();
    }
    this.portService.portsByCountry(country.country_id).subscribe({
      next: (ports) => {
        this.portData = ports;
        this.loader.hideDialogLoader();
      },
      error: (error) => {
        this.portData = [];
        this.loader.hideDialogLoader();
        const errMsg = error?.error?.error;
        this.snackBar.showError(errMsg);
      }
    });
  }
  displayCountry(country) {
    return country?.name || "";
  }
  displayPort(port) {
    return port?.name || "";
  }
  onCountryFocus(rowIndex, fieldIndex) {
    const key = `${rowIndex}-${fieldIndex}`;
    if (!this.filteredCountries[key]) {
      const control = this.getFieldControl(rowIndex, fieldIndex, "Country");
      if (control) {
        this.setupCountryAutocomplete(control, key);
      }
    }
  }
  onPortFocus(rowIndex, fieldIndex) {
    const key = `${rowIndex}-${fieldIndex}`;
    if (!this.filteredPorts[key]) {
      const control = this.getFieldControl(rowIndex, fieldIndex, "Port");
      if (control) {
        this.setupPortAutocomplete(control, key);
      }
    }
  }
  getCountryOptions(rowIndex, fieldIndex) {
    const key = `${rowIndex}-${fieldIndex}`;
    return this.filteredCountries[key] || of([]);
  }
  getPortOptions(rowIndex, fieldIndex) {
    const key = `${rowIndex}-${fieldIndex}`;
    return this.filteredPorts[key] || of([]);
  }
  getFieldControl(rowIndex, fieldIndex, fieldName) {
    const fields = this.getFields(rowIndex);
    const fieldGroup = fields.at(fieldIndex);
    if (fieldGroup?.get("field_name")?.value === fieldName) {
      return fieldGroup.get("value");
    }
    return null;
  }
  // method to format the payload to create or edit the service
  formatPayload(rowValue) {
    const payload = {};
    rowValue.fields.forEach((field) => {
      if (field.field_name && field.value !== void 0) {
        const key = formatColumnName(field.field_name);
        const isNumeric = ["number", "decimal"].includes(field.data_type?.toLowerCase());
        if (field.value === "") {
          payload[key] = null;
        } else if (field.field_name.toLowerCase() === "country" && typeof field.value === "object") {
          payload[key] = field.value.country_id;
        } else if (field.field_name.toLowerCase() === "port" && typeof field.value === "object") {
          payload[key] = field.value.port_id;
        } else {
          payload[key] = isNumeric ? Number(field.value) : field.value;
        }
      }
    });
    if (rowValue.seq !== null && rowValue.seq !== void 0) {
      payload["seq"] = rowValue.seq || null;
    }
    return payload;
  }
  // onSubmit method will trigger when the Add or Edit  button clicks
  onSubmit() {
    this.isSubmitted = true;
    const formValue = this.serviceForm.value;
    if (this.serviceForm.valid) {
      this.loader.showDialogLoader();
      const payloads = formValue.rows.map((row) => this.formatPayload(row));
      console.log("payloads", payloads);
      this.tariffService.createOrUpdateServiceData(this.existingdata.serviceName, payloads).subscribe({
        next: (res) => {
          this.loader.hideDialogLoader();
          const message = this.isEditMode ? "Record updated successfully" : `${payloads.length} records added successfully`;
          this.snackBar.showSuccess(message);
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
  // method to get the country list
  getMaCountryDataFromDb() {
    const body = {
      fields: [
        "country"
      ]
    };
    this.loader.showDialogLoader();
    this.countryService.MaCountryDataFromDb(body).subscribe({
      next: (response) => {
        this.countryData = response;
        this.loader.hideDialogLoader();
        if (this.isEditMode && this.rowsArray.length > 0) {
          this.updateEditModeValues();
        }
      },
      error: (error) => {
        this.loader.hideDialogLoader();
        const errorMsg = error.error?.error || "Something went wrong. Please try again.";
        this.snackBar.showError(errorMsg);
      }
    });
  }
  updateEditModeValues() {
    const fields = this.getFields(0);
    let countryId = null;
    let portId = null;
    for (let i = 0; i < fields.length; i++) {
      const fieldGroup = fields.at(i);
      const fieldName = fieldGroup.get("field_name")?.value;
      const currentValue = fieldGroup.get("value")?.value;
      if (fieldName.toLowerCase() === "country" && typeof currentValue === "number") {
        countryId = currentValue;
      } else if (fieldName.toLowerCase() === "port" && typeof currentValue === "number") {
        portId = currentValue;
      }
    }
    for (let i = 0; i < fields.length; i++) {
      const fieldGroup = fields.at(i);
      const fieldName = fieldGroup.get("field_name")?.value;
      const currentValue = fieldGroup.get("value")?.value;
      if (fieldName.toLowerCase() === "country" && typeof currentValue === "number") {
        const country = this.countryData.find((c) => c.country_id === currentValue);
        if (country && country.country_id) {
          fieldGroup.get("value")?.setValue(country);
          if (portId) {
            this.loadPortsForCountryAndSetPort(country.country_id, portId);
          } else {
            this.loadPortsForCountry(country.country_id);
          }
        }
      }
    }
  }
  loadPortsForCountryAndSetPort(countryId, portId) {
    this.portService.portsByCountry(countryId).subscribe({
      next: (ports) => {
        this.portData = ports;
        const fields = this.getFields(0);
        for (let i = 0; i < fields.length; i++) {
          const fieldGroup = fields.at(i);
          const fieldName = fieldGroup.get("field_name")?.value;
          const currentValue = fieldGroup.get("value")?.value;
          if (fieldName.toLowerCase() === "port" && typeof currentValue === "number") {
            const port = this.portData.find((p) => p.port_id === portId);
            if (port) {
              fieldGroup.get("value")?.setValue(port);
            }
          }
        }
      },
      error: (error) => {
        this.portData = [];
      }
    });
  }
  // method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreateServiceDataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateServiceDataComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(TariffService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateServiceDataComponent, selectors: [["app-create-tab"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 6, consts: [["countryAuto", "matAutocomplete"], ["portAuto", "matAutocomplete"], [4, "ngIf"], [1, "dialog-header"], [1, "header-buttons"], ["class", "add-row-btn", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", "form", "serviceForm", 1, "add-tariff-service"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], ["id", "serviceForm", 3, "ngSubmit", "formGroup"], [1, "form-container"], ["formArrayName", "rows"], ["class", "row-container", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "add-row-btn", 3, "click"], [1, "row-container", 3, "formGroupName"], ["class", "row-header", 4, "ngIf"], ["formArrayName", "fields"], [1, "fields-horizontal"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row-header"], ["mat-icon-button", "", "type", "button", 1, "delete-btn", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined", 1, "delete-icon"], [3, "formGroupName"], ["appearance", "outline", 4, "ngIf"], ["class", "field-error-outside", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "formControlName", "value", 3, "focus", "matAutocomplete"], [3, "displayWith"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "onSelectionChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "value", 3, "type"], [1, "field-error-outside"]], template: function CreateServiceDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateServiceDataComponent_app_loader_0_Template, 1, 0, "app-loader", 2);
      \u0275\u0275elementStart(1, "div", 3)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, CreateServiceDataComponent_button_5_Template, 2, 0, "button", 5);
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function CreateServiceDataComponent_Template_button_click_8_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function CreateServiceDataComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275elementContainerStart(13, 10);
      \u0275\u0275template(14, CreateServiceDataComponent_div_14_Template, 5, 3, "div", 11);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit " + ctx.existingdata.serviceName : "Add " + ctx.existingdata.serviceName);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isEditMode);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update " + ctx.existingdata.serviceName : "Save " + ctx.existingdata.serviceName, " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.serviceForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rowsArray.controls);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgForOf, NgIf, AsyncPipe, MatSnackBarModule, LoaderComponent, MatOption, MatAutocompleteModule, MatAutocomplete, MatAutocompleteTrigger], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 10px 15px;\n  max-width: 85vw;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  background: var(--app-page-bg);\n  color: var(--app-text-primary);\n}\n.fields-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 5px;\n}\n.fields-horizontal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 240px;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: var(--app-text-muted) !important;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n.form-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 160px);\n  padding-bottom: 10px;\n}\n.fixed-button-container[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background-color: var(--app-card-bg);\n  border-top: 1px solid var(--app-border);\n  padding: 10px;\n  padding-left: 3px;\n  z-index: 1;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: 10px;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: clamp(14px, 2vw, 18px);\n  font-weight: 500;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.close-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: red;\n  height: 30px;\n  width: 30px;\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n.row-container[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  padding-top: 24px;\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n}\n.row-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: var(--app-text-secondary);\n  padding: 0 5px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--color-error-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-error-muted);\n  transition: color 0.2s ease, transform 0.2s ease;\n}\n.delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(220, 38, 38, 0.14);\n  border-color: rgba(220, 38, 38, 0.35);\n}\n.delete-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .delete-icon[_ngcontent-%COMP%] {\n  color: var(--color-error);\n  transform: scale(1.08);\n}\n.delete-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.96);\n}\n.delete-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.delete-btn[_ngcontent-%COMP%]:disabled   .delete-icon[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n}\n.header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.add-tariff-service[_ngcontent-%COMP%], \n.add-row-btn[_ngcontent-%COMP%] {\n  max-width: 260px;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-tariff-service[_ngcontent-%COMP%]:hover, \n.add-row-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-form-field-subscript-text-line-height: 0;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 16px;\n  overflow: visible;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-error-muted);\n  line-height: 1.2;\n  margin-top: 0px;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.field-error-outside[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--app-error-text) !important;\n  font-size: 11px;\n  line-height: 1.2;\n  margin-top: -20px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=create-service-data.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateServiceDataComponent, { className: "CreateServiceDataComponent" });
})();

// src/app/components/create-tariff-service/create-tariff-service.component.ts
function CreateTariffServiceComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateTariffServiceComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "mat-form-field", 14)(3, "mat-label");
    \u0275\u0275text(4, "Field Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-label");
    \u0275\u0275text(8, "Data Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-select", 16)(10, "mat-option", 17);
    \u0275\u0275text(11, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 18);
    \u0275\u0275text(13, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 19);
    \u0275\u0275text(15, "Decimal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-form-field", 14)(17, "mat-label");
    \u0275\u0275text(18, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 20)(20, "mat-option", 21);
    \u0275\u0275text(21, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-option", 21);
    \u0275\u0275text(23, "Optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 22);
    \u0275\u0275listener("click", function CreateTariffServiceComponent_div_21_Template_button_click_24_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeField(i_r2));
    });
    \u0275\u0275elementStart(25, "mat-icon", 23);
    \u0275\u0275text(26, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    \u0275\u0275property("formGroupName", i_r2);
    \u0275\u0275advance(20);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", true);
  }
}
var CreateTariffServiceComponent = class _CreateTariffServiceComponent {
  fb;
  dialogRef;
  existingdata;
  tariffService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  serviceForm;
  isEditMode = false;
  countryData = [];
  constructor(fb, dialogRef, existingdata, tariffService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.tariffService = tariffService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.serviceForm = this.fb.group({
      service_id: [data?.service_id ?? null],
      service_name: [data?.service_name || "", Validators.required],
      fields: this.fb.array((data?.fields ?? []).map((field) => this.fb.group({
        name: [field.name || ""],
        data_type: [field.data_type || ""],
        nullable: [field.nullable || "Optional"]
      })), [atLeastOneFieldRequiredValidator])
    });
  }
  // onPaste(event: ClipboardEvent): void {
  //   const value = handlePasteText(event);
  //   this.serviceForm.get('type')?.setValue(value);
  // }
  ngOnInit() {
  }
  get fields() {
    return this.serviceForm.get("fields");
  }
  // method to add the additional fields
  addField() {
    this.fields.push(this.fb.group({
      name: ["", Validators.required],
      data_type: ["", Validators.required],
      nullable: [""]
    }));
  }
  removeField(index) {
    if (index >= 0) {
      this.fields.removeAt(index);
    }
  }
  // onSubmit method will trigger when the Add or Edit  button clicks
  onSubmit() {
    if (atLeastOneFieldRequiredValidator(this.fields)) {
      this.snackBar.showError("At least one field is required.");
      return;
    }
    if (this.fields.invalid) {
      this.fields.markAsTouched();
      this.snackBar.showError("Please fill the required fields");
      return;
    }
    if (this.serviceForm.valid) {
      this.loader.show();
      this.tariffService.ServiceDataToDB(this.serviceForm.value).subscribe({
        next: (res) => {
          this.loader.hide();
          this.snackBar.showSuccess(res.message);
          this.dialogRef.close("refresh");
        },
        error: (error) => {
          this.loader.hide();
          const errorMsg = error.error?.error || "Something went wrong. Please try again.";
          this.snackBar.showError(errorMsg);
        }
      });
    }
  }
  // method to get the countrylist
  // getMaCountryDataFromDb() {
  //   const body = {
  //     fields: [
  //       "country"
  //     ]
  //   }
  //   this.loader.show();
  //   this.countryService.MaCountryDataFromDb(body).subscribe({
  //     next: (response: any) => {
  //       this.countryData = response;
  //       this.loader.hide();
  //     },
  //     error: (err) => {
  //       console.error('Error fetching countries:', err);
  //       this.loader.hide();
  //     }
  //   });
  // }
  closeDialog() {
    this.dialogRef.close("");
  }
  static \u0275fac = function CreateTariffServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateTariffServiceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(TariffService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateTariffServiceComponent, selectors: [["app-create-tariff-service"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 5, consts: [[4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "service-section"], ["appearance", "outline", 1, "service-field"], ["matInput", "", "formControlName", "service_name"], ["mat-raised-button", "", "type", "button", 1, "add-column-btn", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "save-service-btn"], ["formArrayName", "fields", 1, "scroll-vessel-fields"], ["class", "vessel-card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "vessel-card", 3, "formGroupName"], [1, "vessel-card-content"], ["appearance", "outline", 1, "field-input"], ["matInput", "", "placeholder", "Enter field name", "formControlName", "name"], ["formControlName", "data_type"], ["value", "string"], ["value", "number"], ["value", "decimal"], ["formControlName", "nullable"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "delete-button", 3, "click"], ["fontSet", "material-symbols-outlined", 1, "delete-icon"]], template: function CreateTariffServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateTariffServiceComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreateTariffServiceComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreateTariffServiceComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "mat-form-field", 5)(10, "mat-label");
      \u0275\u0275text(11, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function CreateTariffServiceComponent_Template_button_click_13_listener() {
        return ctx.addField();
      });
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Add Columns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-icon", 8);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 9);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10);
      \u0275\u0275template(21, CreateTariffServiceComponent_div_21_Template, 27, 3, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Service" : "Add Service");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.serviceForm);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Service" : "Add Service", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.fields.controls);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgForOf, NgIf, MatSnackBarModule, LoaderComponent, MatOption, MatSelect], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 25px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n.scroll-vessel-fields[_ngcontent-%COMP%] {\n  max-height: 470px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 15px;\n}\n.vessel-fields-footer[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.vessel-card[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n.add-icon[_ngcontent-%COMP%] {\n  margin-left: 80px;\n}\n  .mat-mdc-tab-group .mdc-tab-indicator {\n  display: none !important;\n}\n.service-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  gap: 50px;\n}\n.service-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.add-column-btn[_ngcontent-%COMP%], \n.save-service-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 33px;\n  width: 200px;\n  border-radius: 3px;\n  background: none;\n  border: none;\n  align-items: center;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n}\n.add-column-btn[_ngcontent-%COMP%]:hover, \n.save-service-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.vessel-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 30px;\n  padding: 16px 8px 0px;\n}\n.field-input[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 0;\n}\n.field-input[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.delete-button[_ngcontent-%COMP%] {\n  border: none;\n  height: 0px;\n  border-top-color: none;\n  color: red;\n  flex: 0 0 42px;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1;\n  height: 43px;\n}\n/*# sourceMappingURL=create-tariff-service.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateTariffServiceComponent, { className: "CreateTariffServiceComponent" });
})();

// src/app/pages/master/tariff-services/tariff-services.component.ts
function TariffServicesComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 13);
    \u0275\u0275listener("click", function TariffServicesComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearTabSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function TariffServicesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function TariffServicesComponent_div_11_Template_div_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange(i_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedTabIndex === i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r6, " ");
  }
}
function TariffServicesComponent_mat_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 13);
    \u0275\u0275listener("click", function TariffServicesComponent_mat_icon_19_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function TariffServicesComponent_div_22_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, " SNO ");
    \u0275\u0275elementEnd();
  }
}
function TariffServicesComponent_div_22_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r8 + 1);
  }
}
function TariffServicesComponent_div_22_ng_container_1_ng_container_6_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r9, " ");
  }
}
function TariffServicesComponent_div_22_ng_container_1_ng_container_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const field_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r10[ctx_r2.fieldKeyResolver(field_r9)], " ");
  }
}
function TariffServicesComponent_div_22_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 27);
    \u0275\u0275template(1, TariffServicesComponent_div_22_ng_container_1_ng_container_6_th_1_Template, 2, 1, "th", 19)(2, TariffServicesComponent_div_22_ng_container_1_ng_container_6_td_2_Template, 2, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    \u0275\u0275property("matColumnDef", field_r9);
  }
}
function TariffServicesComponent_div_22_ng_container_1_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function TariffServicesComponent_div_22_ng_container_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 28);
    \u0275\u0275listener("click", function TariffServicesComponent_div_22_ng_container_1_td_9_Template_button_click_1_listener() {
      const element_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openAddTabDialog(element_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function TariffServicesComponent_div_22_ng_container_1_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function TariffServicesComponent_div_22_ng_container_1_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function TariffServicesComponent_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "table", 17);
    \u0275\u0275elementContainerStart(3, 18);
    \u0275\u0275template(4, TariffServicesComponent_div_22_ng_container_1_th_4_Template, 2, 0, "th", 19)(5, TariffServicesComponent_div_22_ng_container_1_td_5_Template, 2, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(6, TariffServicesComponent_div_22_ng_container_1_ng_container_6_Template, 3, 1, "ng-container", 21);
    \u0275\u0275elementContainerStart(7, 22);
    \u0275\u0275template(8, TariffServicesComponent_div_22_ng_container_1_th_8_Template, 2, 0, "th", 19)(9, TariffServicesComponent_div_22_ng_container_1_td_9_Template, 4, 0, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(10, TariffServicesComponent_div_22_ng_container_1_tr_10_Template, 1, 0, "tr", 23)(11, TariffServicesComponent_div_22_ng_container_1_tr_11_Template, 1, 0, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.dynamicColumns);
    \u0275\u0275advance(4);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function TariffServicesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TariffServicesComponent_div_22_ng_container_1_Template, 12, 5, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r14 = \u0275\u0275reference(24);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r13.length > 0)("ngIfElse", noData_r14);
  }
}
function TariffServicesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var TariffServicesComponent = class _TariffServicesComponent {
  dialog;
  tariffService;
  snackbar;
  constructor(dialog, tariffService, snackbar) {
    this.dialog = dialog;
    this.tariffService = tariffService;
    this.snackbar = snackbar;
  }
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  displayedColumns = [];
  dynamicColumns = [];
  serviceData = [];
  selectedTabIndex = 0;
  selectedTabName = "";
  dataSource = new MatTableDataSource([]);
  searchTerm = "";
  tableSearchTerm = "";
  tabs = [];
  originalTabs = [];
  selectedServiceData = [];
  fieldKeyResolver = fieldKeyResolver;
  tabSearchSubject = new Subject();
  tableSearchSubject = new Subject();
  onTabChange(index) {
    this.selectedTabIndex = index;
    this.selectedTabName = this.tabs[index];
    this.dynamicColumns = [];
    this.dataSource.data = [];
    const selectedService = this.serviceData.find((service) => service.service_name?.toLowerCase() === this.selectedTabName.toLowerCase());
    if (selectedService?.fields?.length) {
      this.dynamicColumns = selectedService.fields.map((f) => f.field_name).filter((name) => typeof name === "string");
    }
    this.displayedColumns = ["Sl.No", ...this.dynamicColumns, "action"];
    this.getSelectedServiceData(this.selectedTabName);
  }
  ngOnInit() {
    this.getServiceDataFromDb();
    this.tabSearchSubject.pipe(debounceTime(1e3)).subscribe(() => {
      this.onSearch();
    });
    this.tableSearchSubject.pipe(debounceTime(1e3)).subscribe(() => {
      this.onSearchTableData();
    });
  }
  ngOnDestroy() {
    this.tabSearchSubject.complete();
    this.tableSearchSubject.complete();
  }
  inputTabSearch() {
    if (this.searchTerm.trim() === "") {
      this.onSearch();
    } else {
      this.tabSearchSubject.next(this.searchTerm);
    }
  }
  inputTableSearch() {
    if (this.tableSearchTerm.trim() === "") {
      this.onSearchTableData();
    } else {
      this.tableSearchSubject.next(this.tableSearchTerm);
    }
  }
  //method to handle the search functionality for the tabs
  onSearch() {
    const filterValue = this.searchTerm.trim().toLowerCase();
    this.tabs = this.originalTabs.filter((tab) => tab.toLowerCase().includes(filterValue));
    if (this.tabs.length > 0) {
      this.selectedTabIndex = 0;
      this.onTabChange(0);
    } else {
      this.displayedColumns = [];
      this.dataSource.data = [];
    }
  }
  //method to handle the search functionality for the table data
  onSearchTableData() {
    const filteredValue = this.tableSearchTerm.trim().toLowerCase();
    if (filteredValue === "") {
      this.dataSource.data = this.selectedServiceData;
      this.dataSource.filter = "";
    } else {
      this.dataSource.data = this.selectedServiceData;
      this.dataSource.filter = filteredValue;
    }
  }
  //method to clear the searchTerm and reset the filter for the table data
  clearSearch() {
    this.tableSearchTerm = "";
    this.dataSource.filter = "";
    this.dataSource.data = this.selectedServiceData;
  }
  //method to clear the searchTerm and reset the filter for the tabs
  clearTabSearch() {
    this.searchTerm = "";
    this.tabs = [...this.originalTabs];
    this.selectedTabIndex = 0;
    this.onTabChange(0);
  }
  // method to open the Add Service dialog
  openAddServiceDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "90vw";
    dialogConfig.maxWidth = "90vw";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(CreateTariffServiceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getServiceDataFromDb();
      }
    });
  }
  openAddTabDialog(rowData) {
    const selectedService = this.serviceData.find((service) => service.service_name?.toLowerCase() === this.selectedTabName.toLowerCase());
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "85vw";
    dialogConfig.maxWidth = "90vw";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.disableClose = true;
    const data = {
      serviceName: this.selectedTabName,
      fields: selectedService?.fields || []
    };
    if (rowData != null) {
      data.rowData = rowData;
    }
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(CreateServiceDataComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getSelectedServiceData(this.selectedTabName);
      }
    });
  }
  // methos to get all the services from db
  getServiceDataFromDb() {
    this.loader.show();
    this.tariffService.serviceDataFromDb().subscribe({
      next: (response) => {
        this.tabs = response.map((service) => service.service_name);
        this.originalTabs = [...this.tabs];
        this.serviceData = response;
        this.loader.hide();
        this.onTabChange(0);
      },
      error: (err) => {
        const errMsg = err?.error?.error || "Something went wrong. Please try again later.";
        this.snackbar.showError(errMsg);
        this.loader.hide();
      }
    });
  }
  // method to get the selected servicedata
  getSelectedServiceData(serviceName) {
    this.loader.show();
    const formatedService = serviceName.replace(/\s+/g, "_").toLowerCase();
    this.tariffService.serviceDataByServiceName(formatedService).subscribe({
      next: (response) => {
        this.selectedServiceData = response.data;
        this.dataSource.data = this.selectedServiceData;
        this.loader.hide();
      },
      error: (err) => {
        const errMsg = err?.error?.error || "Something went wrong. Please try again later.";
        this.snackbar.showError(errMsg);
        this.loader.hide();
      }
    });
  }
  static \u0275fac = function TariffServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TariffServicesComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(TariffService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TariffServicesComponent, selectors: [["app-tariff-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 7, consts: [["noData", ""], [1, "topbar", 2, "border-bottom", "1px solid #e0e0e0"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [1, "tariff-services-container"], [1, "sidebar-panel"], ["class", "service-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "show-table"], [1, "topbar"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 3, "click"], [1, "service-item", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container-data"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-icon-button", "", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function TariffServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Search Services...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function TariffServicesComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function TariffServicesComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputTabSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, TariffServicesComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function TariffServicesComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddServiceDialog());
      });
      \u0275\u0275text(8, " Add Services ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275template(11, TariffServicesComponent_div_11_Template, 2, 3, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 2)(15, "mat-form-field", 3)(16, "mat-label");
      \u0275\u0275text(17, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function TariffServicesComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.tableSearchTerm, $event) || (ctx.tableSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function TariffServicesComponent_Template_input_input_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputTableSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, TariffServicesComponent_mat_icon_19_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 6);
      \u0275\u0275listener("click", function TariffServicesComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddTabDialog(null));
      });
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, TariffServicesComponent_div_22_Template, 2, 2, "div", 12)(23, TariffServicesComponent_ng_template_23_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.tableSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tableSearchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Add ", ctx.selectedTabName, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, CommonModule, NgForOf, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTabsModule], styles: ["\n\n.tariff-services-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--color-bg-dark-6);\n}\n.sidebar-panel[_ngcontent-%COMP%] {\n  width: 220px;\n  min-width: 220px;\n  max-width: 220px;\n  overflow-y: auto;\n  background-color: var(--color-bg-dark-6);\n  padding: 12px 0;\n  border-right: 1px solid var(--color-bg-dark-7);\n  max-height: calc(100vh - 180px);\n}\n.service-item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 14px;\n  color: var(--color-text-light-2);\n  cursor: pointer;\n  border-left: 3px solid transparent;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  white-space: nowrap;\n}\n.service-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.service-item.active[_ngcontent-%COMP%] {\n  background-color: var(--app-input-bg);\n  border-left: 5px solid #2678fa;\n  border-radius: 8px 0px 0px 8px;\n  color: black;\n  font-weight: 500;\n}\n.show-table[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  overflow: hidden;\n}\n.top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.add-button[_ngcontent-%COMP%] {\n  background-color: #3C50E0;\n  color: white;\n  font-weight: 500;\n  padding: 8px 16px;\n}\n.table-container-data[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n@media (min-width: 1440px) {\n  .table-container-data[_ngcontent-%COMP%] {\n    max-height: calc(104vh - 250px);\n  }\n}\n@media (min-width: 1920px) {\n  .table-container-data[_ngcontent-%COMP%] {\n    max-height: calc(90vh - 130px);\n  }\n}\n.no-data-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  font-size: 16px;\n  padding: 20px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.service-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.service-field[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n.service-field[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=tariff-services.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TariffServicesComponent, { className: "TariffServicesComponent" });
})();
export {
  TariffServicesComponent
};
//# sourceMappingURL=chunk-NGGW65SO.js.map
