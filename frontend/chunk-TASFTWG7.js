import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-53ONB4HP.js";
import {
  FdaService
} from "./chunk-PXQIIZAJ.js";
import {
  PdaService
} from "./chunk-XQCSZ7IC.js";
import {
  ClientService
} from "./chunk-VYXKY3G4.js";
import {
  MatSlideToggleModule
} from "./chunk-R2NPM7IG.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  Rules,
  convertMinutesToDaysOrHours,
  convertVesselStayToMinutes,
  fields,
  getMainServiceSerialNumber,
  invoiceReferenceValidation,
  mergeResponseVesselIntoList
} from "./chunk-4B5JIWQW.js";
import {
  PortAgentFormService
} from "./chunk-5NR6WTQB.js";
import {
  PortService
} from "./chunk-62FFZ6RH.js";
import {
  MatTableDataSource,
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
import "./chunk-SOPE5OMF.js";
import {
  MatCheckbox
} from "./chunk-K64LDRY5.js";
import {
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  NgxMatNativeDateModule
} from "./chunk-P7DPZ3OU.js";
import "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  CdkTextareaAutosize,
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import "./chunk-7AWYGOUC.js";
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
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/components/client-approval-form/client-approval-form.service.ts
var ClientApprovalService = class _ClientApprovalService {
  http;
  constructor(http) {
    this.http = http;
  }
  getClientData(params) {
    return this.http.post("client-list", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to get the disbursementDtl from db
  getClentDataDtls(params) {
    return this.http.get(`disbursement_tracker_detail/${params}`, {}).pipe(map((response) => {
      return response;
    }));
  }
  pdaClientApprovalDataToDb(data) {
    return this.http.post("pda_client_form_submit", data).pipe(map((response) => {
      return response;
    }));
  }
  fdaClientApprovalDataToDb(data) {
    return this.http.post("FDA_client_form_submit", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function ClientApprovalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientApprovalService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientApprovalService, factory: _ClientApprovalService.\u0275fac, providedIn: "root" });
};

// src/app/components/client-approval-form/client-approval-form.component.ts
var _c0 = (a0) => ({ "changed-field": a0 });
var _c1 = (a0) => ({ "with-pda": a0 });
var _c2 = (a0, a1) => ({ "option-fields": a0, "option-fields-second-part": a1 });
var _c3 = (a0) => ({ "disabled-input": a0 });
function ClientApprovalFormComponent_ng_container_8_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const field_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r5.getOptionValue(field_r5, opt_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r5.name === "Cargo" ? opt_r4 == null ? null : opt_r4.type : field_r5.name === "ToCurrency" || field_r5.name === "FromCurrency" ? opt_r4 : opt_r4 == null ? null : opt_r4.name, " ");
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Please select the ", field_r5.name, " ");
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26, 2);
    \u0275\u0275listener("click", function ClientApprovalFormComponent_ng_container_8_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const trigger_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r3.openPanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 27, 3);
    \u0275\u0275template(7, ClientApprovalFormComponent_ng_container_8_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClientApprovalFormComponent_ng_container_8_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const auto_r7 = \u0275\u0275reference(6);
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", field_r5 == null ? null : field_r5.value)("matAutocomplete", auto_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r5.displayFn.bind(ctx_r5, field_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.getFilteredOptions(field_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r5.portAgentForm.get(field_r5.value)) == null ? null : tmp_13_0.hasError("required"));
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_2_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" please select the ", field_r5.name, " ");
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 30)(4, "mat-datepicker-toggle", 31)(5, "mat-datepicker", null, 4);
    \u0275\u0275template(7, ClientApprovalFormComponent_ng_container_8_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const picker_r8 = \u0275\u0275reference(6);
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", picker_r8)("formControlName", field_r5.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r5.portAgentForm.get(field_r5.value)) == null ? null : tmp_11_0.hasError("required"));
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r5.name, " is required ");
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " \u{1F6A9} ");
    \u0275\u0275elementEnd();
  }
}
function ClientApprovalFormComponent_ng_container_8_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 32)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 33);
    \u0275\u0275template(4, ClientApprovalFormComponent_ng_container_8_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 28)(5, ClientApprovalFormComponent_ng_container_8_mat_form_field_3_span_5_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx_r5.modifiedFields[field_r5.value] && !ctx_r5.isExcludedFlag(field_r5.value)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r5.data_type || "text")("formControlName", field_r5.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r5.portAgentForm.get(field_r5.value)) == null ? null : tmp_10_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.modifiedFields[field_r5.value] && !ctx_r5.isExcludedFlag(field_r5.value));
  }
}
function ClientApprovalFormComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClientApprovalFormComponent_ng_container_8_mat_form_field_1_Template, 9, 6, "mat-form-field", 24)(2, ClientApprovalFormComponent_ng_container_8_mat_form_field_2_Template, 8, 5, "mat-form-field", 24)(3, ClientApprovalFormComponent_ng_container_8_mat_form_field_3_Template, 6, 8, "mat-form-field", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type !== "date" && field_r5.type !== "select" && !ctx_r5.isExcludedField(field_r5.value));
  }
}
function ClientApprovalFormComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r9 = ctx.$implicit;
    \u0275\u0275property("value", currency_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r9, " ");
  }
}
function ClientApprovalFormComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r10 = ctx.$implicit;
    \u0275\u0275property("value", currency_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r10, " ");
  }
}
function ClientApprovalFormComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r11);
  }
}
function ClientApprovalFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275template(2, ClientApprovalFormComponent_div_28_div_2_Template, 3, 1, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.displayedColumns);
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("IN(", ctx_r5.convertedToCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "system", "convertedToCurrency"));
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 49);
  }
  if (rf & 2) {
    const service_r13 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "pda-approved", "convertedToCurrency"));
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275template(6, ClientApprovalFormComponent_ng_container_29_div_1_div_21_input_6_Template, 1, 1, "input", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "pda-approved", "ToCurrency"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r5.displayConvertedToCurrency);
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_input_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 49);
  }
  if (rf & 2) {
    const service_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "agent", "convertedToCurrency"));
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const service_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = service_r13.get("info_msg")) == null ? null : tmp_10_0.value);
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_30_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subService_r14 = ctx.$implicit;
    \u0275\u0275styleProp("display", subService_r14.hide === "Y" ? "none" : "flex");
    \u0275\u0275property("checked", subService_r14.optional)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subService_r14.name, " ");
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "h6");
    \u0275\u0275text(2, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The agent value is greater than the system value.");
    \u0275\u0275elementEnd()();
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71);
    \u0275\u0275template(4, ClientApprovalFormComponent_ng_container_29_div_1_div_30_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ClientApprovalFormComponent_ng_container_29_div_1_div_30_div_5_Template, 5, 0, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const service_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", (tmp_10_0 = service_r13.get("subService")) == null ? null : tmp_10_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = service_r13.get("display_note")) == null ? null : tmp_11_0.value);
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "mat-radio-group", 77)(2, "mat-radio-button", 78);
    \u0275\u0275text(3, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-button", 79);
    \u0275\u0275text(5, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-radio-button", 80);
    \u0275\u0275text(7, "Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-radio-button", 81);
    \u0275\u0275text(9, "Other");
    \u0275\u0275elementEnd()()();
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1, " Please enter the remark ");
    \u0275\u0275elementEnd();
  }
}
function ClientApprovalFormComponent_ng_container_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "div", 43)(5, "div")(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 45)(12, "div", 46)(13, "span", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 46)(17, "span", 47);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ClientApprovalFormComponent_ng_container_29_div_1_div_20_Template, 4, 2, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ClientApprovalFormComponent_ng_container_29_div_1_div_21_Template, 7, 2, "div", 51);
    \u0275\u0275elementStart(22, "div", 45);
    \u0275\u0275element(23, "input", 52)(24, "input", 49);
    \u0275\u0275template(25, ClientApprovalFormComponent_ng_container_29_div_1_input_25_Template, 1, 1, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "h6");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, ClientApprovalFormComponent_ng_container_29_div_1_div_29_Template, 3, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ClientApprovalFormComponent_ng_container_29_div_1_div_30_Template, 6, 2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 55);
    \u0275\u0275element(32, "textarea", 56, 5)(34, "textarea", 57, 5)(36, "textarea", 58, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 59)(39, "div", 60);
    \u0275\u0275template(40, ClientApprovalFormComponent_ng_container_29_div_1_div_40_Template, 10, 0, "div", 61);
    \u0275\u0275elementStart(41, "div", 62)(42, "mat-checkbox", 63);
    \u0275\u0275listener("change", function ClientApprovalFormComponent_ng_container_29_div_1_Template_mat_checkbox_change_42_listener() {
      \u0275\u0275restoreView(_r12);
      const service_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onCheckBoxClick(service_r13, "Approve"));
    });
    \u0275\u0275text(43, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-checkbox", 64);
    \u0275\u0275listener("change", function ClientApprovalFormComponent_ng_container_29_div_1_Template_mat_checkbox_change_44_listener() {
      \u0275\u0275restoreView(_r12);
      const service_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onCheckBoxClick(service_r13, "Reject"));
    });
    \u0275\u0275text(45, "Reject");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 65);
    \u0275\u0275template(47, ClientApprovalFormComponent_ng_container_29_div_1_div_47_Template, 2, 0, "div", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    const ctx_r14 = \u0275\u0275nextContext();
    const service_r13 = ctx_r14.$implicit;
    const i_r16 = ctx_r14.index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx_r5.withPda));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", service_r13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r5.getMainServiceIndex(i_r16, ctx_r5.datasource.data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = service_r13.get("service")) == null ? null : tmp_12_0.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("IN(", ctx_r5.fromCurrency, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("IN(", ctx_r5.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "system", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.withPda);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r5.calculateSystemAndAgentValueWithRoe(service_r13, "agent", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.displayConvertedToCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_20_0 = service_r13.get("agreedOrNegotiate")) == null ? null : tmp_20_0.value) || "Agreed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_21_0 = service_r13.get("info_msg")) == null ? null : tmp_21_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_22_0 = service_r13.get("subService")) == null ? null : tmp_22_0.value == null ? null : tmp_22_0.value.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx_r5.withPda))("formGroup", service_r13);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", service_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c2, ((tmp_26_0 = service_r13.get("client_option")) == null ? null : tmp_26_0.value) === "Y", ((tmp_26_0 = service_r13.get("client_option")) == null ? null : tmp_26_0.value) !== "Y"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_27_0 = service_r13.get("client_option")) == null ? null : tmp_27_0.value) === "Y");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_28_0 = service_r13.get("reject")) == null ? null : tmp_28_0.value) && ((tmp_28_0 = service_r13.get("client_comment")) == null ? null : tmp_28_0.hasError("required")));
  }
}
function ClientApprovalFormComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClientApprovalFormComponent_ng_container_29_div_1_Template, 48, 27, "div", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const service_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_5_0 = service_r13.get("isSubService")) == null ? null : tmp_5_0.value));
  }
}
function ClientApprovalFormComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function ClientApprovalFormComponent_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onSubmit());
    });
    \u0275\u0275text(1, "Submit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r5.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(2, _c3, ctx_r5.disableTableInputFields));
  }
}
var ClientApprovalFormComponent = class _ClientApprovalFormComponent {
  fb;
  portAgentFormService;
  snackBar;
  portService;
  pdaService;
  fdaService;
  clientService;
  router;
  clientApprovalService;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  displayedColumns = [];
  canDeleteService = {};
  hasInitializedExpansion = false;
  portAgentForm;
  datasource = new MatTableDataSource([]);
  PDAdataSource = [];
  countryList = [];
  portList = [];
  vesselList = [];
  purposeList = [];
  cargoList = [];
  clientList = [];
  currencyList = [];
  portAgentList = [];
  filteredOptions = {};
  fields = fields.map((field) => {
    if (field.name === "Vessel") {
      return __spreadProps(__spreadValues({}, field), { value: "vessel_id" });
    }
    return field;
  });
  modFields = this.fields;
  serviceList = new Rules();
  clientData = null;
  merakiServiceList = new Rules();
  mergedServiceList = [];
  agentServiceGrandTotal = 0;
  agentCurrencyCoversion = 0;
  agentServiceTotal = 0;
  merakiServiceTotal = 0;
  merakiServiceGrandTotal = 0;
  pdaRemittance = 0;
  addedFields = [];
  disableTableInputFields = false;
  portAgentReturnStatus = null;
  portAgentReturnMessage = "";
  displayAgreedAndNegotiateColumn = false;
  isNegotiateSelected = false;
  dis_id = sessionStorage.getItem("disbursement_seq");
  copyOfMasterData = {};
  isManualCreation = null;
  excludedFieldsFlag = ["vessel_stay", "fda_roe", "voyage", "imo_number", "invoice_ref_no"];
  isExcluded = ["type"];
  errMsg = "";
  withPda = false;
  fdaStatus = 0;
  originalFeedback = null;
  re_calculate;
  tariffRules = new Rules();
  portChange = "N";
  portIdValue = 0;
  PDAapprovedValue = new Rules();
  PDAapprovedGrandTotal = 0;
  serviceName = "";
  pdaForm;
  fdaForm;
  pdaOrFda = "";
  clientForm;
  displayConvertedToCurrency = false;
  constructor(fb, portAgentFormService, snackBar, portService, pdaService, fdaService, clientService, router, clientApprovalService) {
    this.fb = fb;
    this.portAgentFormService = portAgentFormService;
    this.snackBar = snackBar;
    this.portService = portService;
    this.pdaService = pdaService;
    this.fdaService = fdaService;
    this.clientService = clientService;
    this.router = router;
    this.clientApprovalService = clientApprovalService;
    this.pdaOrFda = sessionStorage.getItem("pdaOrFda");
    if (this.pdaOrFda === "FDA") {
      this.buildfdaForm();
    } else {
      this.buildpdaForm();
    }
    this.clientForm = new FormGroup({
      clientType: new FormControl(null),
      approve: new FormControl(false),
      reject: new FormControl(false)
    });
  }
  // method to build the port agent form
  buildfdaForm() {
    this.modFields = this.fields;
    this.replacePdaWithFda(this.fields, "FDA");
    this.portAgentForm = this.fb.group({
      client_id: [null, Validators.required],
      portagent_id: [null, Validators.required],
      cargo_id: [null, Validators.required],
      country_id: [null, Validators.required],
      port_id: [null, Validators.required],
      imo_number: [null, [Validators.required, Validators.maxLength(7)]],
      vessel_id: [null],
      vessel: [null, Validators.required],
      nrt: [null, Validators.required],
      grt: [null, Validators.required],
      rgrt: [null],
      loa: [null, Validators.required],
      beam: [null, Validators.required],
      depth: [null, Validators.required],
      type: ["", Validators.required],
      dwt: [null, Validators.required],
      purpose_id: [null, Validators.required],
      eta: [null, [Validators.required]],
      etd: [null, [Validators.required]],
      vessel_stay: [null, Validators.required],
      fda_roe: [null, Validators.required],
      fda_currency_from: [null, Validators.required],
      fda_currency_to: [null, Validators.required],
      voyage: [null, Validators.required],
      serviceList: this.fb.array([]),
      fda_amount: [null],
      invoice_ref_no: [null, [invoiceReferenceValidation, Validators.required]],
      pic_approval: [],
      converted_curr_from: [null],
      converted_curr_to: [null],
      conversion_fda_rate: [null]
    });
  }
  buildpdaForm() {
    this.portAgentForm = this.fb.group({
      client_id: [null, Validators.required],
      portagent_id: [null, Validators.required],
      cargo_id: [null, Validators.required],
      country_id: [null, Validators.required],
      port_id: [null, Validators.required],
      imo_number: [null, [Validators.required, Validators.maxLength(7)]],
      vessel_id: [null],
      vessel: [null, Validators.required],
      nrt: [null, Validators.required],
      grt: [null, Validators.required],
      rgrt: [null],
      type: [null],
      loa: [null, Validators.required],
      beam: [null, Validators.required],
      depth: [null, Validators.required],
      dwt: [null, Validators.required],
      purpose_id: [null, Validators.required],
      eta: [null, [Validators.required]],
      etd: [null, [Validators.required]],
      vessel_stay: [null, Validators.required],
      pda_roe: [null, Validators.required],
      pda_currency_from: [null, Validators.required],
      pda_currency_to: [null, Validators.required],
      voyage: [null, Validators.required],
      serviceList: this.fb.array([]),
      invoice_ref_no: [null, invoiceReferenceValidation],
      pic_approval: [],
      converted_curr_from: [null],
      converted_curr_to: [null],
      conversion_pda_rate: [null]
    });
  }
  getMainServiceIndex = getMainServiceSerialNumber;
  // Returns the 'services' FormArray from the main form for easy access and manipulation
  get serviceListFormArray() {
    return this.portAgentForm.get("serviceList");
  }
  get PDAapprovedValueFormArray() {
    return this.portAgentForm.get("PDAapprovedValue");
  }
  modifiedFields = {};
  ngOnInit() {
    this.re_calculate = new FormControl(false);
    this.setDisplayedColumns();
    this.getAllMasterData();
    this.setupAutocomplete();
    this.replacePdaWithFda(this.modFields, this.pdaOrFda);
    this.setupCalculationSubscriptions();
  }
  setDisplayedColumns() {
    this.displayedColumns = ["S.No", "Service", "System Value"];
    if (this.withPda) {
      this.displayedColumns.push("Pda Approved Value");
    }
    this.displayedColumns.push("Agent Value", "Agreed / Negotiate");
  }
  // Setup subscriptions to watch for changes in relevant form controls
  setupCalculationSubscriptions() {
    const form = this.portAgentForm;
    if (!form)
      return;
  }
  //replace pda with fda in fields list
  replacePdaWithFda(data, type) {
    data.forEach((field) => {
      if (field.value && typeof field.value === "string" && field.value.includes("pda") && type === "FDA") {
        field.value = field.value.replace(/pda/g, "fda");
      } else if (field.value && typeof field.value === "string" && field.value.includes("fda") && type === "PDA") {
        field.value = field.value.replace(/fda/g, "pda");
      }
    });
  }
  setupAutocomplete() {
    this.fields.forEach((field) => {
      if (field.type === "select") {
        this.filteredOptions[field.value] = field.options || [];
        this.portAgentForm.get(field.value)?.valueChanges.subscribe((value) => {
          this.filteredOptions[field.value] = this.autoCompleteFilter(field, value);
        });
      }
    });
  }
  autoCompleteFilter(field, value) {
    const filterValue = (value || "").toString().toLowerCase();
    return (field.options || []).filter((opt) => {
      const label = field.name === "Cargo" ? opt?.type : field.name === "ToCurrency" || field.name === "FromCurrency" ? opt : opt?.name;
      return label?.toLowerCase().includes(filterValue);
    });
  }
  getFilteredOptions(field) {
    return this.filteredOptions[field.value] || [];
  }
  displayFn(field, value) {
    if (!value)
      return "";
    if (field.name === "Cargo") {
      const cargo = (field.options || []).find((c) => c.cargo_id === value);
      return cargo ? cargo.type : "";
    } else if (field.name === "ToCurrency" || field.name === "FromCurrency") {
      return value;
    } else {
      const option = (field.options || []).find((opt) => {
        const key = `${field.name.trim().toLowerCase().replace(/\s+/g, "")}_id`;
        return opt[key] === value;
      });
      return option ? option.name : "";
    }
  }
  // method to get the modified fields
  getModifiedFields() {
    const vesselData = this.pdaOrFda === "PDA" ? this.clientData?.pda?.pda_vessel_details : this.clientData?.fda?.fda_vessel_details;
    this.modifiedFields = {};
    Object.keys(vesselData).forEach((key) => {
      this.modifiedFields[key] = !!vesselData[key]?.modified;
    });
  }
  isExcludedFlag(fieldName) {
    return this.excludedFieldsFlag.includes(fieldName.toLowerCase());
  }
  isExcludedField(fieldName) {
    return this.isExcluded.includes(fieldName.toLowerCase());
  }
  // methos to swap the fields for IMO Number and Vessel
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
  // method to set the data for the dropdown
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
          field.type = "select";
          this.filteredOptions[field.value] = field.options;
          break;
        default:
      }
    });
    this.getclientFormEditData();
  }
  // method to format the fieldValue for the select field
  getOptionValue(field, opt) {
    if (field.name === "ToCurrency" || field.name === "FromCurrency") {
      return opt;
    } else {
      const key = `${field.name.trim().toLowerCase().replace(/\s+/g, "")}_id`;
      return opt[key];
    }
  }
  portByCountry(fieldName, value) {
    if (fieldName === "Country") {
      this.loader.show();
      return new Promise((resolve, reject) => {
        this.portService.getPortsByCountryId(value).subscribe({
          next: (ports) => {
            this.portList = ports;
            this.fields.map((field) => {
              if (field.name === "Port") {
                field.options = this.portList.map((port) => ({
                  id: port.port_id,
                  port_id: port.port_id,
                  name: port.name
                }));
              }
              this.filteredOptions[field.value] = field.options ?? [];
            });
            this.addAdditionalFieldsToFieldsArray(this.clientData.port_id);
            this.loader.hide();
            resolve();
          },
          error: (error) => {
            this.portList = [];
            this.loader.hide();
            this.errMsg = error?.error?.error || "Something went wrong, please try again later.";
            this.snackBar.showError(this.errMsg);
            reject(error);
          }
        });
      });
    }
    return Promise.resolve();
  }
  // method to process the serviceList
  populateServicesFromList() {
    this.serviceListFormArray.clear();
    this.datasource.data = [];
    this.PDAdataSource = [];
    if (this.mergedServiceList && Array.isArray(this.mergedServiceList)) {
      this.mergedServiceList.forEach((item) => {
        const subServiceArray = this.fb.array((item.subService || []).map((sub) => this.fb.group({
          SNO: [item.SNO],
          name: [sub.name],
          basic_value: [sub.basic_value],
          calculated_basic_value: [sub.calculated_basic_value],
          movement: [sub.movement],
          tariff_percent: [sub.tariff_percent],
          formula_result: [sub.formula_result],
          optional: [sub.optional === "N"],
          operational_flag: [sub.operational_flag],
          sub_total: [{ value: 0, disabled: this.disableTableInputFields }],
          formula_inputs: [sub.formula_inputs],
          isSubService: [true],
          systemMovement: [sub.systemMovement || 0],
          systemSubTotal: [sub.systemSubTotal || 0],
          systemFormulaInputs: [sub.systemFormulaInputs || []],
          pdaApprovedSubTotalValue: [sub.pdaApprovedSubTotalValue || 0],
          hide: [sub.hide || "N"]
        })));
        const parts = item?.client_comment?.split(" -> ").filter(Boolean);
        const hasSubServices = (item.subService || []).length > 0;
        const mainServiceGroup = this.fb.group({
          SNO: [item.SNO],
          code: [item.code],
          service: [item.service || ""],
          meraki_feedback: [item.meraki_feedback || ""],
          pa_remark: [{ value: item.pa_remark || "", disabled: this.disableTableInputFields }],
          negotiate: [item.negotiate || "N"],
          agreed: [item.agreed || "N"],
          total: [{ value: item.total || 0, disabled: this.disableTableInputFields }],
          subService: subServiceArray,
          isSubService: [false],
          expanded: [!this.hasInitializedExpansion && hasSubServices],
          systemTotal: [item.systemTotal || 0],
          pdaApprovedValue: [item.pdaApprovedValue || 0],
          agreedOrNegotiate: [
            item.negotiate === "Y" ? "Negotiate" : item.agreed === "Y" ? "Agreed" : item.systemTotal < item.total ? "Negotiate" : "Agreed",
            Validators.required
          ],
          meraki_remark_client: [item.meraki_remark_client || ""],
          purpose: [item.purpose],
          client_option: [item.client_option || "N"],
          display_to_client: [item.display_to_client || "N"],
          client_comment: [parts[2] === "null" ? "" : parts[2], item.reject ? Validators.required : ""],
          clientType: [parts[0] || null],
          approve: [parts[1] === "Approved" ? true : false, Validators.required],
          reject: [parts[1] === "Rejected" ? true : false, Validators.required],
          display_note: [item.total > item.systemTotal]
        });
        if (mainServiceGroup.get("display_to_client")?.value === "Y") {
          this.serviceListFormArray.push(mainServiceGroup);
        }
      });
    }
    this.updateDatasource();
    this.hasInitializedExpansion = true;
  }
  // method  to update the data source to display the subservices in the table
  updateDatasource() {
    this.datasource.data = [];
    this.PDAdataSource = [];
    for (let service of this.serviceListFormArray.controls) {
      this.datasource.data.push(service);
      if (service.get("expanded")?.value) {
        const subServiceFormArray = service.get("subService");
        subServiceFormArray.controls.forEach((subServiceCtrl) => {
          this.datasource.data.push(subServiceCtrl);
        });
      }
    }
  }
  // method to get the all master data
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
        this.currencyList = response.currency;
        this.formatFieldData(this.fields);
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  // method to get the vessel based on the client
  vesselListByClientId(clientId) {
    return new Promise((resolve, reject) => {
      this.loader.show();
      const vslpayload = {
        company_id: clientId,
        fields: ["assigned_unassigned"]
      };
      this.clientService.VslListFromDb(vslpayload).subscribe({
        next: (response) => {
          const vesselDetails = this.pdaOrFda === "PDA" ? this.clientData?.pda?.pda_vessel_details : this.clientData?.fda?.fda_vessel_details;
          this.vesselList = mergeResponseVesselIntoList(response.assigned_vessels || [], vesselDetails);
          this.fields.map((field) => {
            if (field.name === "Vessel") {
              field.options = this.vesselList.map((vessel) => ({
                vessel_id: vessel.vessel_id,
                name: vessel.name
              }));
            }
            this.filteredOptions[field.value] = field.options;
          });
          this.loader.hide();
          resolve();
        },
        error: (error) => {
          this.vesselList = [];
          this.errMsg = error?.error?.error || "Failed to fetch vessel details";
          this.snackBar.showError(this.errMsg);
          this.loader.hide();
          reject(error);
        }
      });
    });
  }
  // method to get the pda edit data
  getclientFormEditData() {
    this.pdaService.pdaEditFormData(this.dis_id).subscribe({
      next: (response) => {
        this.loader.show();
        this.clientData = response;
        const countryId = response.country_id;
        if (this.pdaOrFda === "PDA") {
          this.portByCountry("Country", countryId).then(() => {
            this.vesselListByClientId(response.client_id).then(() => {
              this.handleAdditionalFields(response);
              this.populatePdadata(response);
            }).catch((error) => {
            });
          }).catch((error) => {
          });
        } else {
          this.portByCountry("Country", countryId).then(() => {
            this.vesselListByClientId(response.client_id).then(() => {
              this.handleAdditionalFields(response);
              this.withPda = response.pda !== null;
              this.setDisplayedColumns();
              this.populatefdadata(response);
            }).catch((error) => {
              console.log("errMsg", error);
            });
          }).catch((error) => {
            const errMsg = error?.error?.error;
          });
        }
      }
    });
  }
  mergeSystemValueFromMerakiJson(merakiItems, portAgentItems) {
    return portAgentItems?.items.map((portAgent) => {
      const matchedMerakiService = merakiItems?.items.find((meraki) => meraki?.service === portAgent.service);
      const systemTotal = matchedMerakiService ? matchedMerakiService.total || 0 : 0;
      const matchedPdaService = this.PDAapprovedValue?.items.find((pda) => pda?.service === portAgent.service);
      const pdaTotal = matchedPdaService ? matchedPdaService.total || 0 : 0;
      let pdaApprovedTotalValue = 0;
      const mergedSubServices = [
        ...(matchedMerakiService && matchedMerakiService.subService ? matchedMerakiService.subService : []).map((sub) => {
          const matchedPdaService2 = this.PDAapprovedValue?.items.find((pda) => pda?.service === portAgent.service);
          pdaApprovedTotalValue = matchedPdaService2?.total || 0;
          const matchedPdaSubService = this.withPda ? this.PDAapprovedValue?.items.flatMap((item) => item.subService || []).find((pdaSub) => pdaSub.name === sub.name) : null;
          return __spreadProps(__spreadValues({}, sub), {
            systemSubTotal: sub ? sub.sub_total || 0 : 0,
            systemFormulaInputs: sub ? sub.formula_inputs || [] : [],
            systemMovement: sub ? sub.movement : 0,
            pdaApprovedSubTotalValue: matchedPdaSubService?.sub_total || 0
          });
        })
      ];
      return __spreadProps(__spreadValues({}, portAgent), {
        systemTotal,
        pdaTotal,
        subService: mergedSubServices,
        pdaApprovedValue: pdaApprovedTotalValue,
        clientType: null
      });
    });
  }
  transformfdaJsonData(formData) {
    const loggedInUser = sessionStorage.getItem("name") || "";
    const portAgentFormData = this.clientData.fda.portagent_fda_data;
    return {
      disbursement_seq: this.clientData.disbursement_seq,
      disbursement_id: this.clientData.disbursement_id,
      voyage: formData.voyage,
      eta: formData.eta,
      etd: formData.etd,
      roe: formData.fda_roe,
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      client: {
        client_id: portAgentFormData?.client.client_id || null,
        name: portAgentFormData?.client.name || ""
      },
      port_agent: {
        name: portAgentFormData?.port_agent?.name || "",
        address: portAgentFormData?.port_agent.address || "",
        bank_details: portAgentFormData?.port_agent.bank_details || ""
      },
      port: {
        port_id: portAgentFormData?.port.port_id || null,
        name: portAgentFormData?.port.name || ""
      },
      country: {
        country_id: portAgentFormData?.country.country_id || "",
        name: portAgentFormData?.country.name || ""
      },
      purpose: {
        purpose_id: portAgentFormData?.purpose.purpose_id || "",
        name: portAgentFormData?.purpose.name || ""
      },
      cargo: {
        cargo_id: portAgentFormData?.cargo.cargo_id || "",
        type: portAgentFormData?.cargo.type || ""
      },
      vessel: {
        vsl_id: formData.vessel_id,
        imo_number: formData.imo_number,
        name: formData.vessel,
        grt: formData.grt,
        rgrt: formData.rgrt,
        nrt: formData.nrt,
        loa: formData.loa,
        beam: formData.beam,
        depth: formData.depth,
        additional_properties: this.getAdditionalPropertiesFromForm()
      },
      fda_currency_from: formData.fda_currency_from,
      fda_currency_to: formData.fda_currency_to,
      services: this.transFormServiceData(this.serviceList, "agentData"),
      approved_by: loggedInUser,
      pic_approval: this.portAgentForm.get("pic_approval")?.value || loggedInUser
    };
  }
  transformPdaJsonData(formData) {
    const loggedInUser = sessionStorage.getItem("name") || "";
    const portAgentFormData = this.clientData.pda.portagent_pda_data;
    return {
      disbursement_seq: this.clientData.disbursement_seq,
      disbursement_id: this.clientData.disbursement_id,
      voyage: formData.voyage,
      eta: formData.eta,
      etd: formData.etd,
      roe: formData.pda_roe,
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      client: {
        client_id: portAgentFormData?.client.client_id || null,
        name: portAgentFormData?.client.name || ""
      },
      port_agent: {
        name: portAgentFormData?.port_agent?.name || "",
        address: portAgentFormData?.port_agent.address || "",
        bank_details: portAgentFormData?.port_agent?.bank_details
      },
      port: {
        port_id: portAgentFormData?.port.port_id || null,
        name: portAgentFormData?.port.name || ""
      },
      country: {
        country_id: portAgentFormData?.country.country_id || "",
        name: portAgentFormData?.country.name || ""
      },
      purpose: {
        purpose_id: portAgentFormData?.purpose.purpose_id || "",
        name: portAgentFormData?.purpose.name || ""
      },
      cargo: {
        cargo_id: portAgentFormData?.cargo.cargo_id || "",
        type: portAgentFormData?.cargo.type || ""
      },
      vessel: {
        vsl_id: formData.vessel_id,
        imo_number: formData.imo_number,
        name: formData.vessel,
        grt: formData.grt,
        rgrt: formData.rgrt,
        type: formData.type,
        nrt: formData.nrt,
        loa: formData.loa,
        beam: formData.beam,
        depth: formData.depth,
        dwt: formData.dwt,
        additional_properties: this.getAdditionalPropertiesFromForm()
      },
      pda_currency_to: formData.pda_currency_to,
      pda_currency_from: formData.pda_currency_from,
      services: this.transFormServiceData(this.serviceList, "agentData"),
      approved_by: loggedInUser,
      pic_approval: this.portAgentForm.get("pic_approval")?.value || loggedInUser
    };
  }
  transFormServiceData(formData, serviceData) {
    const serviceList = this.serviceList;
    const items = (serviceList?.items || []).map((serviceItem) => {
      const matchingFormItem = this.serviceListFormArray?.controls.map((ctrl) => ctrl.getRawValue()).find((formItem) => formItem.SNO === serviceItem.SNO && formItem.service === serviceItem.service);
      if (matchingFormItem) {
        const value = matchingFormItem;
        return {
          SNO: value.SNO ?? 0,
          code: value.code ?? null,
          service: value.service ?? null,
          meraki_feedback: serviceData === "agentData" ? value.meraki_feedback : null,
          pa_remark: value.pa_remark ?? null,
          /*
          * @Venkatalakshmi please review -- Surjit  - 785 to 788
          * If the service not rejected and not approved, then keep the existing value from serviceItem
          * Total value is set to zero instead of the actual value from FDA/Meraki. That should not be changed here.
          * */
          negotiate: value.reject && serviceData === "agentData" ? "Y" : value.approve && serviceData === "agentData" ? "N" : serviceItem.negotiate ?? "N",
          agreed: value.approve && serviceData === "agentData" ? "Y" : value.reject && serviceData === "agentData" ? "N" : serviceItem.agreed ?? "N",
          is_auto_calculate: value.is_auto_calculate ?? "N",
          total: serviceData === "agentData" ? value.total ?? serviceItem.total ?? 0 : value.systemTotal ?? 0,
          purpose: value.purpose ?? null,
          meraki_remark_client: value.meraki_remark_client ?? null,
          client_comment: `${value.clientType} -> ${value.approve ? "Approved" : "Rejected"} -> ${value.client_comment === "" ? null : value.client_comment}` || null,
          info_msg: value.info_msg ?? null,
          display_to_client: "N",
          client_option: "N",
          subService: (value.subService || []).map((sub) => ({
            name: sub.name ?? null,
            basic_value: sub.basic_value ?? null,
            calculated_basic_value: serviceData === "merakiData" ? sub.calculated_basic_value : null,
            movement: serviceData === "merakiData" ? sub.systemMovement : sub.movement,
            tariff_percent: serviceData === "merakiData" ? sub.tariff_percent : "",
            formula_result: sub.formula_result ?? "Basic Value * movement * Tariff %",
            optional: sub.optional ? "Y" : "N",
            operational_flag: sub.operational_flag ?? "+",
            sub_total: serviceData === "agentData" ? sub.sub_total ?? 0 : sub.systemSubTotal ?? 0,
            formula_inputs: sub.formula_inputs ?? null,
            display: sub.display ?? "N",
            unique_key: sub.unique_key ?? null
          }))
        };
      }
      return serviceItem;
    });
    return {
      items,
      grand_total: serviceData === "agentData" ? this.agentServiceGrandTotal : this.merakiServiceGrandTotal
    };
  }
  addAdditionalFieldsToFieldsArray(port_id) {
    const selectedPort = this.portList.find((port) => port.port_id === port_id);
    if (selectedPort) {
      const addVslFields = selectedPort.vessel_fields.filter((vf) => !!vf.field_name).map((vf) => {
        const controlName = vf.field_name;
        return {
          name: vf.field_name,
          value: controlName,
          type: "input",
          data_type: vf.data_type ?? "",
          options: []
        };
      });
      addVslFields.forEach((field) => {
        const alreadyExists = this.fields.some((f) => f.value === field.value);
        if (!alreadyExists) {
          this.fields.push(field);
          this.portAgentForm.addControl(field.value, this.fb.control(null));
          this.addedFields.push({
            fieldName: field.name,
            controlName: field.value
          });
        }
      });
    }
    return this.addedFields;
  }
  handleAdditionalFields(response) {
    const additionalProperties = this.pdaOrFda === "PDA" ? response?.pda?.portagent_pda_data?.vessel.additional_properties || {} : response?.fda?.portagent_fda_data?.vessel.additional_properties || {};
    this.addedFields = Object.keys(additionalProperties).map((key) => ({
      fieldName: key,
      controlName: key
    }));
    this.addedFields?.forEach((field) => {
      const value = additionalProperties[field.fieldName] ?? null;
      if (!this.portAgentForm.contains(field.controlName)) {
        this.portAgentForm.addControl(field.controlName, this.fb.control(value));
      } else {
        this.portAgentForm.get(field.controlName)?.patchValue(value);
      }
    });
  }
  // method to push the additional properties to the addedFields from the portAgentForm
  getAdditionalPropertiesFromForm() {
    const additionalProps = {};
    this.addedFields.forEach((field) => {
      const control = this.portAgentForm.get(field.controlName);
      if (control) {
        additionalProps[field.fieldName] = control.value;
      }
    });
    return additionalProps;
  }
  onCheckBoxClick(element, selectOption) {
    if (selectOption === "Approve") {
      const rejectControl = element.get("reject");
      if (rejectControl) {
        rejectControl.setValue(false);
      }
    } else if (selectOption === "Reject") {
      const approveControl = element.get("approve");
      if (approveControl) {
        approveControl.setValue(false);
      }
    }
  }
  // method to get the service for the selected subservice
  getService(subserviceElement) {
    for (let service of this.serviceListFormArray.controls) {
      const subServices = service.get("subService")?.value || [];
      const subserviceFound = subServices.find((sub) => sub.SNO === subserviceElement.get("SNO")?.value && sub.name === subserviceElement.get("name")?.value);
      if (subserviceFound) {
        return service;
      }
      if (subServices.length === 0) {
        return service;
      }
    }
    return null;
  }
  isDifferenceFlag(row) {
    if (Number(row.get("systemTotal")?.value) < Number(row.get("total")?.value) && (!this.withPda || this.withPda && row.get("agreedOrNegotiate")?.value !== "Agreed")) {
      return true;
    } else {
      return false;
    }
  }
  populatePdadata(response) {
    const vesselDetails = response.pda.pda_vessel_details;
    this.portAgentForm.patchValue({
      client_id: response.client_id,
      portagent_id: response.portagent_id,
      cargo_id: response?.pda?.portagent_pda_data?.cargo?.cargo_id,
      country_id: response?.country_id,
      port_id: response?.port_id,
      imo_number: vesselDetails?.vessel_imo,
      vessel_id: vesselDetails?.vessel_id,
      vessel: vesselDetails?.vessel_name,
      nrt: vesselDetails?.nrt.current,
      grt: vesselDetails?.grt.current,
      rgrt: vesselDetails?.rgrt.current,
      type: vesselDetails?.type.current,
      loa: vesselDetails?.loa.current,
      beam: vesselDetails?.beam.current,
      depth: vesselDetails?.depth.current,
      dwt: vesselDetails?.dwt.current,
      purpose_id: response?.pda?.portagent_pda_data?.purpose?.purpose_id,
      eta: response?.eta,
      etd: response?.etd,
      vessel_stay: convertMinutesToDaysOrHours(response.vessel_stay),
      pda_roe: response?.pda.pda_roe,
      voyage: response?.voyage,
      advance_percentage: response?.pda?.advance_percentage,
      Pda_remittance: response?.pda?.pda_remittance?.toFixed(2),
      conversion_rate: response?.pda.conversion_rate,
      currency_conversion: response?.pda.currency_conversion?.toFixed(2),
      pda_currency_from: response?.pda.pda_currency_from,
      pda_currency_to: response?.pda.pda_currency_to,
      invoice_ref_no: response?.pda.invoice_ref_no,
      converted_curr_from: response?.pda.converted_curr_from,
      converted_curr_to: response?.pda.converted_curr_to,
      conversion_pda_rate: response?.pda.conversion_pda_rate
    });
    this.getModifiedFields();
    if (response?.pda?.converted_curr_to) {
      this.displayConvertedToCurrency = response?.pda?.converted_curr_to !== response?.pda?.pda_currency_to && response?.pda?.converted_curr_to !== response?.pda?.pda_currency_from;
    }
    this.serviceList = response.pda?.portagent_pda_data?.services;
    this.merakiServiceList = response.pda?.meraki_pda_data?.services;
    this.PDAapprovedValue = response.pda?.portagent_pda_data?.services;
    this.agentServiceGrandTotal = response.pda.portagent_pda_data?.services?.grand_total ?? 0;
    this.agentServiceTotal = response.pda.portagent_pda_data?.services.service_total;
    this.merakiServiceTotal = response.pda.meraki_pda_data?.services.service_total;
    this.merakiServiceGrandTotal = response.pda.meraki_pda_data?.services.grand_total ?? 0;
    this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList);
    this.populateServicesFromList();
  }
  populatefdadata(response) {
    const portAgentFormData = response.fda.portagent_fda_data;
    const vesselDetails = response.fda.fda_vessel_details;
    this.portAgentForm.patchValue({
      client_id: response.client_id,
      portagent_id: response.portagent_id,
      cargo_id: portAgentFormData?.cargo?.cargo_id,
      country_id: portAgentFormData?.country?.country_id,
      port_id: portAgentFormData?.port?.port_id,
      imo_number: vesselDetails?.vessel_imo,
      vessel_id: vesselDetails?.vessel_id,
      vessel: vesselDetails?.vessel_name,
      nrt: vesselDetails?.nrt.current,
      grt: vesselDetails?.grt.current,
      rgrt: vesselDetails?.rgrt.current,
      loa: vesselDetails?.loa.current,
      beam: vesselDetails?.beam.current,
      depth: vesselDetails?.depth.current,
      dwt: vesselDetails?.dwt.current,
      type: vesselDetails?.type.current,
      purpose_id: portAgentFormData?.purpose?.purpose_id,
      eta: response?.fda.fda_eta,
      etd: response?.fda.fda_etd,
      vessel_stay: convertMinutesToDaysOrHours(response.fda.fda_vessel_stay),
      fda_roe: response?.fda.fda_roe,
      voyage: response?.voyage,
      fda_currency_from: response?.fda.fda_currency_from,
      fda_currency_to: response?.fda.fda_currency_to,
      currency_conversion: response?.fda.currency_conversion,
      fda_amount: response?.fda.fda_amount,
      conversion_rate: response?.fda.conversion_rate,
      balance_due: response?.fda.balance_due,
      credit_note: response?.fda.credit_note ?? 0,
      invoice_ref_no: response?.fda.invoice_ref_no,
      pda_remittance: this.pdaRemittance?.toFixed(2),
      converted_curr_from: response?.fda?.converted_curr_from,
      converted_curr_to: response?.fda?.converted_curr_to,
      conversion_fda_rate: response?.fda?.conversion_fda_rate
    });
    this.getModifiedFields();
    if (response?.fda?.converted_curr_to) {
      this.displayConvertedToCurrency = response?.fda?.converted_curr_to !== response?.fda?.fda_currency_to && response?.fda?.converted_curr_to !== response?.fda?.fda_currency_from;
    }
    this.serviceList = response.fda?.portagent_fda_data?.services;
    this.merakiServiceList = response.fda?.meraki_pda_data?.services;
    this.PDAapprovedValue = response.pda?.portagent_pda_data?.services;
    this.agentServiceGrandTotal = response.fda.portagent_fda_data?.services?.grand_total ?? 0;
    this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList);
    this.populateServicesFromList();
  }
  onSubmit() {
    const services = this.portAgentForm.get("serviceList");
    let isValid = true;
    let invalidServices = [];
    let missingRemarks = [];
    services.controls.forEach((serviceCtrl) => {
      const approve = serviceCtrl.get("approve")?.value;
      const reject = serviceCtrl.get("reject")?.value;
      const SNO = serviceCtrl.get("SNO")?.value;
      const clientRemark = serviceCtrl.get("client_comment")?.value;
      if (!approve && !reject) {
        isValid = false;
        invalidServices.push(SNO);
        serviceCtrl.get("approve")?.setErrors({ selectionRequired: true });
        serviceCtrl.get("reject")?.setErrors({ selectionRequired: true });
      }
      if (reject && !clientRemark) {
        isValid = false;
        missingRemarks.push(SNO);
        serviceCtrl.get("client_comment")?.setErrors({ clientRemarkRequired: true });
      } else {
        serviceCtrl.get("approve")?.setErrors(null);
        serviceCtrl.get("reject")?.setErrors(null);
        serviceCtrl.get("client_comment")?.setErrors(null);
      }
    });
    if (!isValid) {
      if (invalidServices.length > 0) {
        this.snackBar.showError(`Please select either 'Approve' or 'Reject'`);
      }
      if (missingRemarks.length > 0) {
        this.snackBar.showError(`Please enter remark for the following services: ${missingRemarks.join(", ")}`);
      }
      return;
    }
    if (this.pdaOrFda === "PDA") {
      this.loader.show();
      const data = this.transformPdaJsonData(this.portAgentForm.getRawValue());
      this.clientApprovalService.pdaClientApprovalDataToDb(data).subscribe({
        next: (res) => {
          this.snackBar.showSuccess(res?.message);
          this.loader.hide();
          this.router.navigate(["layout/client-approval-list"]);
        },
        error: (error) => {
          this.errMsg = error?.error?.error || "Something went wrong, please try again later.";
          this.snackBar.showError(this.errMsg);
          this.loader.hide();
        }
      });
    } else if (this.pdaOrFda === "FDA") {
      this.loader.show();
      const data = this.transformfdaJsonData(this.portAgentForm.value);
      this.clientApprovalService.fdaClientApprovalDataToDb(data).subscribe({
        next: (res) => {
          this.snackBar.showSuccess(res?.message);
          this.loader.hide();
          this.router.navigate(["layout/client-approval-list"]);
        },
        error: (error) => {
          this.errMsg = error?.error?.error || "Something went wrong, please try again later.";
          this.snackBar.showError(this.errMsg);
          this.loader.hide();
        }
      });
    }
  }
  get fromCurrency() {
    if (this.pdaOrFda === "PDA") {
      return this.portAgentForm?.get("pda_currency_from")?.value || "";
    } else if (this.pdaOrFda === "FDA") {
      return this.portAgentForm?.get("fda_currency_from")?.value || "";
    }
    return "";
  }
  get toCurrency() {
    if (this.pdaOrFda === "PDA") {
      return this.portAgentForm?.get("pda_currency_to")?.value || "";
    } else if (this.pdaOrFda === "FDA") {
      return this.portAgentForm?.get("fda_currency_to")?.value || "";
    }
    return "";
  }
  get convertedToCurrency() {
    if (this.pdaOrFda === "PDA") {
      return this.portAgentForm?.get("converted_curr_to")?.value || "";
    } else if (this.pdaOrFda === "FDA") {
      return this.portAgentForm?.get("converted_curr_to")?.value || "";
    }
    return "";
  }
  get convertedFromCurrency() {
    if (this.pdaOrFda === "PDA") {
      return this.portAgentForm?.get("converted_curr_from")?.value || "";
    } else if (this.pdaOrFda === "FDA") {
      return this.portAgentForm?.get("converted_curr_from")?.value || "";
    }
    return "";
  }
  calculateSystemAndAgentValueWithRoe(service, type, conversion_type) {
    const roe = Number(this.pdaOrFda === "PDA" ? this.portAgentForm.get("pda_roe")?.value : this.portAgentForm.get("fda_roe")?.value) || 0;
    const conversion_roe = Number(this.pdaOrFda === "PDA" ? this.portAgentForm.get("conversion_pda_rate")?.value : this.portAgentForm.get("conversion_fda_rate")?.value) || 0;
    let baseValue = 0;
    if (conversion_type === "ToCurrency") {
      if (type === "agent") {
        baseValue = Number(service.value?.total) || 0;
      } else if (type === "system") {
        baseValue = Number(service.value?.systemTotal) || 0;
      } else if (type === "pda-approved") {
        baseValue = Number(service.value?.pdaApprovedValue) || 0;
      }
      return Number((baseValue * roe).toFixed(2));
    } else if (conversion_type === "convertedToCurrency") {
      if (type === "agent") {
        if (this.fromCurrency === this.convertedFromCurrency) {
          baseValue = Number(service.value?.total) * conversion_roe || 0;
        } else {
          baseValue = Number(service.value?.total) * roe * conversion_roe;
        }
      } else if (type === "system") {
        if (this.fromCurrency === this.convertedFromCurrency) {
          baseValue = Number(service.value?.systemTotal) * conversion_roe || 0;
        } else {
          baseValue = Number(service.value?.systemTotal) * roe * conversion_roe;
        }
      } else if (type === "pda-approved") {
        if (this.fromCurrency === this.convertedFromCurrency) {
          baseValue = Number(service.value?.pdaApprovedValue) * conversion_roe || 0;
        } else {
          baseValue = Number(service.value?.pdaApprovedValue) * roe * conversion_roe;
        }
      }
      return Number(baseValue.toFixed(2));
    }
    return 0;
  }
  static \u0275fac = function ClientApprovalFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientApprovalFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(PdaService), \u0275\u0275directiveInject(FdaService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientApprovalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientApprovalFormComponent, selectors: [["app-port-agent-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 12, consts: [["countryAutocomplete", "matAutocomplete"], ["portAgentAutocomplete", "matAutocomplete"], ["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], ["autosize", "cdkTextareaAutosize"], [1, "port-agent-form-container"], [1, "top-section"], [1, "scrollable-section"], [3, "ngSubmit", "formGroup"], [1, "field-section"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [1, "converted-currency-section"], ["appearance", "outline"], ["matInput", "", "formControlName", "converted_curr_from", "readonly", "true", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "converted_curr_to", "readonly", "true", 3, "matAutocomplete"], ["matInput", "", "type", "number", "readonly", "true", 3, "formControlName"], ["class", "common-table-header", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-between", "gap", "20px", "margin-top", "20px"], ["type", "text", "formControlName", "pic_approval", "placeholder", "Person in charge", 1, "poc"], [1, "button-section"], ["type", "button", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline", 3, "ngClass", 4, "ngIf"], ["type", "text", "matInput", "", "readonly", "true", 3, "click", "formControlName", "matAutocomplete"], [3, "displayWith"], [4, "ngIf"], [3, "value"], ["matInput", "", "readonly", "true", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["appearance", "outline", 3, "ngClass"], ["matInput", "", "readonly", "true", 3, "type", "formControlName"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", "class", "flag-indicator", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", 1, "flag-indicator"], [1, "common-table-header"], [1, "table-header"], ["class", "table-outer", 4, "ngIf"], [1, "table-outer"], [1, "table-section"], [1, "table-inner", 3, "ngClass"], [1, "table-content", 3, "formGroup"], [2, "display", "flex", "gap", "0"], [2, "display", "flex", "align-items", "center", "gap", "5px"], [2, "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "display", "flex", "flex-direction", "row", "gap", "5px"], [2, "font-size", "10px", "font-weight", "500", "line-height", "2.4"], ["matInput", "", "type", "text", "formControlName", "systemTotal", "readonly", ""], ["matInput", "", "type", "text", "readonly", "", 3, "value"], ["style", "display: flex; flex-direction: row; gap: 5px;", 4, "ngIf"], ["style", "display: flex; flex-direction: column; gap: 10px;", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "total", "readonly", ""], ["matInput", "", "type", "text", "readonly", "", 3, "value", 4, "ngIf"], ["class", "table-service", 4, "ngIf"], [1, "table-textarea", 3, "ngClass", "formGroup"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Port Agent Remark", "rows", "2", "formControlName", "pa_remark", 1, "textarea-1"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Meraki Feedback", "rows", "2", "formControlName", "meraki_remark_client", 1, "textarea-2"], ["cdkTextareaAutosize", "", "placeholder", "Remarks", "rows", "2", "formControlName", "client_comment", 1, "textarea-3"], [1, "table-feedback", 3, "formGroup"], [3, "ngClass"], ["class", "table-radio", 4, "ngIf"], [1, "answer-section"], ["formControlName", "approve", 3, "change"], ["formControlName", "reject", 3, "change"], [1, "feedback-textarea"], ["style", "color: var(--app-error-text); font-size: 11px; margin-top: 5px;", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "pdaApprovedValue", "readonly", ""], [1, "table-service"], [1, "empty-space"], [1, "warning-section"], [1, "table-checkbox"], [3, "checked", "disabled", "display", 4, "ngFor", "ngForOf"], ["class", "service-note", 4, "ngIf"], [3, "checked", "disabled"], [1, "service-note"], [1, "table-radio"], ["formControlName", "clientType"], ["value", "Client"], ["value", "Owner"], ["value", "Charter"], ["value", "Other"], [2, "color", "var(--app-error-text)", "font-size", "11px", "margin-top", "5px"], ["type", "button", 3, "click", "disabled", "ngClass"]], template: function ClientApprovalFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 8)(5, "form", 9);
      \u0275\u0275listener("ngSubmit", function ClientApprovalFormComponent_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(6, "div", 10)(7, "div", 11);
      \u0275\u0275template(8, ClientApprovalFormComponent_ng_container_8_Template, 4, 3, "ng-container", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 13)(10, "mat-form-field", 14)(11, "mat-label");
      \u0275\u0275text(12, "Converted Currency From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 15);
      \u0275\u0275elementStart(14, "mat-autocomplete", null, 0);
      \u0275\u0275template(16, ClientApprovalFormComponent_mat_option_16_Template, 2, 2, "mat-option", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-form-field", 14)(18, "mat-label");
      \u0275\u0275text(19, "Converted Currency To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 17);
      \u0275\u0275elementStart(21, "mat-autocomplete", null, 1);
      \u0275\u0275template(23, ClientApprovalFormComponent_mat_option_23_Template, 2, 2, "mat-option", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "mat-form-field", 14)(25, "mat-label");
      \u0275\u0275text(26, "Conversion Pda Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, ClientApprovalFormComponent_div_28_Template, 3, 1, "div", 19)(29, ClientApprovalFormComponent_ng_container_29_Template, 2, 1, "ng-container", 12);
      \u0275\u0275elementStart(30, "div", 20)(31, "div");
      \u0275\u0275element(32, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 7)(34, "div", 22);
      \u0275\u0275template(35, ClientApprovalFormComponent_button_35_Template, 2, 4, "button", 23);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const countryAutocomplete_r18 = \u0275\u0275reference(15);
      const portAgentAutocomplete_r19 = \u0275\u0275reference(22);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.clientData == null ? null : ctx.clientData.disbursement_id, " - ", ctx.pdaOrFda, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.portAgentForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.fields);
      \u0275\u0275advance(5);
      \u0275\u0275property("matAutocomplete", countryAutocomplete_r18);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.currencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", portAgentAutocomplete_r19);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.currencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControlName", ctx.pdaOrFda === "PDA" ? "conversion_pda_rate" : "conversion_fda_rate");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.datasource.data && ctx.datasource.data.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.datasource.data);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.isNegotiateSelected);
    }
  }, dependencies: [
    MatGridListModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    CdkTextareaAutosize,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    MatSelectModule,
    MatOption,
    MatOptionModule,
    MatTableModule,
    MatCheckbox,
    MatTooltipModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatNativeDateModule,
    NgxMatNativeDateModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButtonModule,
    MatRadioModule,
    MatRadioGroup,
    MatRadioButton
  ], styles: ["\n\n.port-agent-form-container[_ngcontent-%COMP%] {\n  background-color: var(--app-page-bg);\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  color: var(--app-text-primary);\n}\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  margin-right: 10px;\n  background-color: var(--app-page-bg);\n  color: var(--app-text-primary);\n}\n.scrollable-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 83vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.top-section[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.field-section[_ngcontent-%COMP%] {\n  background-color: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 15px;\n  row-gap: 5px;\n  padding: 10px 5px;\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 120px;\n  max-width: 200px;\n  margin-bottom: 0px;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  position: sticky;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  border: none;\n  padding: 15px 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px var(--shadow-2);\n  transition: background-color 0.3s;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid var(--color-action);\n}\ntextarea[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  -webkit-text-fill-color: #ffffff !important;\n}\ntextarea[_ngcontent-%COMP%]:disabled, \ntextarea[readonly][_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  -webkit-text-fill-color: #ffffff !important;\n  opacity: 1 !important;\n}\ninput[_ngcontent-%COMP%]::placeholder, \ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-input-placeholder) !important;\n  opacity: 1;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid var(--color-bg-dark-3);\n}\n.mdc-text-field__input[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 100%;\n  min-width: 120px;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 20px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n  .mat-mdc-select-panel {\n  width: 100%;\n  min-width: 150px;\n  max-height: 275px;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error);\n  margin-top: -5px;\n  margin-left: -18px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 35px;\n  overflow: hidden;\n}\n  .port-agent-form-container .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n}\n  .port-agent-form-container .mat-mdc-form-field-flex {\n  background-color: var(--app-input-bg) !important;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-form-field-subscript-text-line-height: 0;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 16px;\n  overflow: visible;\n}\n.footer-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 70px;\n  margin-top: 20px;\n  background-color: var(--app-page-bg);\n}\n.changed-field.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mdc-outlined-text-field-outline-color: orange !important;\n}\n.disabled-input[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-5) !important;\n  border: 1px solid var(--app-border);\n}\n.disabled-input[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.service-button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  position: sticky;\n  margin: 8px;\n  justify-content: flex-end;\n}\n.small-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.60);\n  transform-origin: center;\n}\n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px var(--shadow-2);\n  transition: background-color 0.3s;\n}\n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.text-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.text-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 2px;\n}\n.warning-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: start;\n  gap: 14px;\n  box-sizing: border-box;\n}\n.common-table-header[_ngcontent-%COMP%] {\n  width: 99.5%;\n  background-color: var(--app-table-header);\n  border: 1px solid var(--app-border);\n  border-radius: 8px 8px 0 0;\n  margin-top: 16px;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.common-table-header[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: var(--app-table-header);\n  border-bottom: 1px solid var(--app-border);\n  margin: 0;\n}\n.table-outer[_ngcontent-%COMP%] {\n  width: 99.5%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: var(--app-page-bg) !important;\n  border: 1px solid var(--app-border) !important;\n  border-top: none;\n  border-radius: 0;\n  margin-top: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  padding: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 55%;\n  max-width: 60%;\n  overflow-x: hidden;\n}\n.table-inner.with-pda[_ngcontent-%COMP%] {\n  min-width: 65%;\n  max-width: 70%;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 16px;\n  box-sizing: border-box;\n  color: var(--app-text-primary);\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--app-text-primary);\n  line-height: 1.4;\n}\n.empty-space[_ngcontent-%COMP%] {\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n  background-color: var(--app-page-bg);\n  box-sizing: border-box;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--app-text-primary);\n  line-height: 1.4;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-top: 4px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--app-text-muted);\n  font-style: italic;\n  margin: 0;\n  margin-left: 70px;\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 85%;\n  max-width: 130px;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--app-border);\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-action);\n  background-color: var(--color-bg-dark-2);\n  box-shadow: 0 0 0 2px rgba(74, 143, 244, 0.25);\n}\n.table-service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n  padding: 0 16px;\n  padding-right: 0;\n  box-sizing: border-box;\n}\n.table-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.table-checkbox[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n  .table-checkbox .mat-mdc-checkbox .mdc-checkbox {\n  transform: scale(0.85);\n}\n  .table-checkbox .mat-mdc-checkbox label {\n  font-size: 13px;\n  color: var(--color-white);\n}\n.table-textarea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n  gap: 6px;\n  padding: 6px;\n  background-color: var(--color-bg-dark-2);\n  box-sizing: border-box;\n  min-width: 29%;\n  max-width: 70%;\n  margin-right: 10px;\n}\n.table-textarea[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.textarea-1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  color: var(--app-text-primary);\n  background-color: rgba(74, 143, 244, 0.12) !important;\n  border: 1px solid rgba(74, 143, 244, 0.45) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n}\n.textarea-2[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n  color: var(--app-text-primary);\n  background-color: rgba(34, 197, 94, 0.12) !important;\n  border: 1px solid rgba(34, 197, 94, 0.45) !important;\n}\n.textarea-3[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n  color: var(--app-text-primary);\n  background-color: rgba(245, 158, 11, 0.12) !important;\n  border: 1px solid rgba(245, 158, 11, 0.45) !important;\n}\n.table-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n.table-feedback[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 5px 16px;\n  background-color: var(--color-bg-dark-2);\n  border-top: 1px solid var(--app-border);\n  box-sizing: border-box;\n  width: 100%;\n}\n.table-radio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n}\n.table-feedback[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  width: 100%;\n}\n.service-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  background-color: rgba(255, 179, 0, 0.15);\n  border: 1px solid #ffb300;\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin-top: 8px;\n  font-size: 12px;\n  color: var(--color-white);\n}\n.service-note[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: start;\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #ffb300;\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80px;\n  max-height: 150px;\n  padding: 10px 12px;\n  border: 1px solid var(--app-border) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-2) !important;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-action);\n  background-color: var(--color-bg-dark-2);\n  box-shadow: 0 0 0 3px rgba(74, 143, 244, 0.1);\n}\n  .table-radio .mat-mdc-radio-button {\n  margin-right: 8px;\n}\n  .table-radio .mat-mdc-radio-button .mdc-radio {\n  transform: scale(0.85);\n}\n  .table-radio .mat-mdc-radio-button label {\n  font-size: 13px;\n  color: var(--color-white);\n  padding: 0 !important;\n  margin-left: -5px !important;\n}\n.option-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.poc[_ngcontent-%COMP%] {\n  width: 150%;\n  height: 50px;\n  margin-top: 7px;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-radius: 4px;\n  font-size: 13px;\n  background-color: rgba(255, 255, 255, 0.05) !important;\n  color: var(--color-white);\n  padding: 0 10px;\n}\n.poc[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-input-placeholder) !important;\n}\n.feedback-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  padding: 12px;\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--color-bg-dark-3);\n  border-radius: 6px;\n  color: var(--color-white);\n  font-family: inherit;\n  font-size: 13px;\n  box-sizing: border-box;\n}\n.feedback-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-input-placeholder) !important;\n}\n.answer-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.option-fields-second-part[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.currency-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-white);\n  line-height: 2.4;\n}\n.converted-currency-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  padding: 15px 20px 0 20px;\n  background-color: var(--app-page-bg);\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=client-approval-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientApprovalFormComponent, { className: "ClientApprovalFormComponent" });
})();
export {
  ClientApprovalFormComponent
};
//# sourceMappingURL=chunk-TASFTWG7.js.map
