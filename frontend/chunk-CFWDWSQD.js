import {
  ApprovalRequestDialogComponent,
  AutoResizeInputDirective,
  CommHistoryComponent
} from "./chunk-4IJ5BGQL.js";
import {
  EmailSentNotificationComponent
} from "./chunk-SNZ4PAUJ.js";
import "./chunk-ETTDPF5T.js";
import "./chunk-4NIIGUZS.js";
import {
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
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-R2NPM7IG.js";
import {
  FileUploadComponent,
  FileUploadService
} from "./chunk-3TJ2XT7F.js";
import "./chunk-GWDTIECY.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  PA_Rules,
  _filterCurrency,
  addAdditionalFieldsToFieldsArray,
  convertVesselStayToMinutes,
  displayClientComment,
  displayFn,
  fdaFields,
  filterServicesOnPurpose,
  formatServices,
  formatToLocalISOString,
  getAdditionalPropertiesObjectFromForm,
  getCurrencyFromCountry,
  getMainServiceSerialNumber,
  getOptionValuefortheFields,
  getPurposeName,
  mergeResponseVesselIntoList,
  onTotalBlur,
  onTotalFocus,
  removeAddedFieldsAndControls,
  replaceMovementPart,
  restrictDecimal
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
import {
  ConfirmationDialogComponent
} from "./chunk-SOPE5OMF.js";
import {
  MatCheckbox
} from "./chunk-K64LDRY5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  NgxMatNativeDateModule
} from "./chunk-P7DPZ3OU.js";
import {
  MatDialog,
  MatDialogConfig
} from "./chunk-EDA7LVKI.js";
import "./chunk-ZEOMT33W.js";
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
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService,
  Overlay
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormControlDirective,
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
  NavigationStart,
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  ViewContainerRef,
  catchError,
  concatMap,
  forkJoin,
  inject,
  map,
  of,
  startWith,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/fda-edit/fda-edit.component.ts
var _c0 = (a0) => ({ "disabled-input": a0 });
var _c1 = (a0) => ({ "changed-field": a0 });
function FdaEditComponent_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" , 1 ", (tmp_6_0 = ctx_r1.portAgentForm.get("converted_curr_from")) == null ? null : tmp_6_0.value, " ~= ", (tmp_6_0 = ctx_r1.portAgentForm.get("conversion_fda_rate")) == null ? null : tmp_6_0.value, " ", (tmp_6_0 = ctx_r1.portAgentForm.get("converted_curr_to")) == null ? null : tmp_6_0.value, " ");
  }
}
function FdaEditComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275template(3, FdaEditComponent_div_5_ng_container_3_Template, 2, 3, "ng-container", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Note: 1 ", (tmp_5_0 = ctx_r1.portAgentForm.get("fda_currency_from")) == null ? null : tmp_5_0.value, " ~= ", (tmp_5_0 = ctx_r1.portAgentForm.get("fda_roe")) == null ? null : tmp_5_0.value, " ", (tmp_5_0 = ctx_r1.portAgentForm.get("fda_currency_to")) == null ? null : tmp_5_0.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowConvertedCurrencyMarquee());
  }
}
function FdaEditComponent_div_26_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const field_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.getOptionValue(field_r5, opt_r6, ctx_r1.addedFields));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r5.name === "Cargo" ? opt_r6 == null ? null : opt_r6.type : field_r5.name === "ToCurrency" || field_r5.name === "FromCurrency" ? opt_r6 : opt_r6 == null ? null : opt_r6.name, " ");
  }
}
function FdaEditComponent_div_26_mat_form_field_1_mat_error_8_Template(rf, ctx) {
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
function FdaEditComponent_div_26_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 53, 4);
    \u0275\u0275listener("click", function FdaEditComponent_div_26_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const trigger_r4 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r4.openPanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 54, 5);
    \u0275\u0275listener("optionSelected", function FdaEditComponent_div_26_mat_form_field_1_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const field_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelect(field_r5.name, $event.option));
    });
    \u0275\u0275template(7, FdaEditComponent_div_26_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FdaEditComponent_div_26_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const auto_r7 = \u0275\u0275reference(6);
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", field_r5 == null ? null : field_r5.value)("matAutocomplete", auto_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r1.displayFn.bind(ctx_r1, field_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredOptions(field_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_15_0 = ctx_r1.portAgentForm.get(field_r5.value)) == null ? null : tmp_15_0.hasError("required"));
  }
}
function FdaEditComponent_div_26_mat_form_field_2_mat_error_7_Template(rf, ctx) {
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
function FdaEditComponent_div_26_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 56);
    \u0275\u0275listener("dateChange", function FdaEditComponent_div_26_mat_form_field_2_Template_input_dateChange_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 57)(5, "mat-datepicker", null, 6);
    \u0275\u0275template(7, FdaEditComponent_div_26_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const picker_r9 = \u0275\u0275reference(6);
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", picker_r9)("formControlName", field_r5.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r1.portAgentForm.get(field_r5.value)) == null ? null : tmp_13_0.hasError("required"));
  }
}
function FdaEditComponent_div_26_mat_form_field_3_mat_error_4_Template(rf, ctx) {
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
function FdaEditComponent_div_26_mat_form_field_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, " \u{1F6A9} ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_div_26_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 58)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 59);
    \u0275\u0275template(4, FdaEditComponent_div_26_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 34)(5, FdaEditComponent_div_26_mat_form_field_3_span_5_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const field_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx_r1.modifiedFields[field_r5.value] && !ctx_r1.isExcludedFlag(field_r5.value)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r5.data_type || "text")("formControlName", field_r5.value)("readonly", ctx_r1.isFieldReadonly(field_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r1.portAgentForm.get(field_r5.value)) == null ? null : tmp_13_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modifiedFields[field_r5.value] && !ctx_r1.isExcludedFlag(field_r5.value));
  }
}
function FdaEditComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FdaEditComponent_div_26_mat_form_field_1_Template, 9, 6, "mat-form-field", 40)(2, FdaEditComponent_div_26_mat_form_field_2_Template, 8, 5, "mat-form-field", 40)(3, FdaEditComponent_div_26_mat_form_field_3_Template, 6, 9, "mat-form-field", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type === "select" && field_r5.value && ctx_r1.portAgentForm.get(field_r5.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type === "date" && field_r5.value && ctx_r1.portAgentForm.get(field_r5.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.type !== "date" && field_r5.type !== "select" && !ctx_r1.isExcludedField(field_r5.value) && field_r5.value && ctx_r1.portAgentForm.get(field_r5.value));
  }
}
function FdaEditComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
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
function FdaEditComponent_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r11 = ctx.$implicit;
    \u0275\u0275property("value", currency_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r11, " ");
  }
}
function FdaEditComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r12);
  }
}
function FdaEditComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275template(2, FdaEditComponent_div_47_div_2_Template, 3, 1, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.displayedColumns);
  }
}
function FdaEditComponent_ng_container_48_div_1_input_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 94);
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formControl", service_r14.get("service"));
  }
}
function FdaEditComponent_ng_container_48_div_1_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = service_r14.get("service")) == null ? null : tmp_12_0.value);
  }
}
function FdaEditComponent_ng_container_48_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" IN(", ctx_r1.convertedToCurrencyValue, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "system", "convertedToCurrency"));
  }
}
function FdaEditComponent_ng_container_48_div_1_div_23_input_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 95);
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "pda-approved", "convertedToCurrency"));
  }
}
function FdaEditComponent_ng_container_48_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "input", 95)(2, "input", 95);
    \u0275\u0275template(3, FdaEditComponent_ng_container_48_div_1_div_23_input_3_Template, 1, 1, "input", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_12_0 = service_r14.get("pdaApprovedTotalValue")) == null ? null : tmp_12_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "pda-approved", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
  }
}
function FdaEditComponent_ng_container_48_div_1_input_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 77);
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "agent", "convertedToCurrency"));
  }
}
function FdaEditComponent_ng_container_48_div_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "\u{1F6A9}");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_ng_container_48_div_1_mat_icon_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 98);
    \u0275\u0275listener("click", function FdaEditComponent_ng_container_48_div_1_mat_icon_33_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const service_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitServiceName(service_r14));
    });
    \u0275\u0275text(1, " check ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_ng_container_48_div_1_mat_icon_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 99);
    \u0275\u0275listener("click", function FdaEditComponent_ng_container_48_div_1_mat_icon_34_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const service_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteService(service_r14));
    });
    \u0275\u0275text(1, " delete ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_ng_container_48_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "h6");
    \u0275\u0275text(2, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getServiceNoteClass(service_r14));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getServiceNoteMessage(service_r14));
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_div_3_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 110);
    \u0275\u0275listener("click", function FdaEditComponent_ng_container_48_div_1_div_39_div_3_mat_checkbox_1_Template_mat_checkbox_click_0_listener() {
      const ctx_r17 = \u0275\u0275restoreView(_r17);
      const subService_r19 = ctx_r17.$implicit;
      const i_r20 = ctx_r17.index;
      const service_r14 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCheckboxClick(service_r14, subService_r19, i_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const subService_r19 = ctx.$implicit;
    const service_r14 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275styleProp("display", subService_r19.hide === "Y" ? "none" : "flex");
    \u0275\u0275property("checked", !subService_r19.optional);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subService_r19.name || ((tmp_18_0 = service_r14.get("service")) == null ? null : tmp_18_0.value), " ");
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275template(1, FdaEditComponent_ng_container_48_div_1_div_39_div_3_mat_checkbox_1_Template, 2, 4, "mat-checkbox", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const service_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_13_0 = service_r14.get("subService")) == null ? null : tmp_13_0.value);
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "textarea", 114);
    \u0275\u0275text(2, "                                                  ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const subServiceControl_r21 = ctx.$implicit;
    const j_r22 = ctx.index;
    const service_r14 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275styleProp("display", ((tmp_16_0 = service_r14.get("subService")) == null ? null : tmp_16_0.value[j_r22] == null ? null : tmp_16_0.value[j_r22].hide) === "Y" ? "none" : "block");
    \u0275\u0275property("formGroup", subServiceControl_r21);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", subServiceControl_r21.get("formattedSystemMovement"))("minWidth", 150)("maxWidth", 280)("bufferSpace", 30);
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, FdaEditComponent_ng_container_48_div_1_div_39_div_5_div_1_Template, 3, 7, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const service_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_13_0 = service_r14.get("subService")) == null ? null : tmp_13_0.controls);
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "h6");
    \u0275\u0275text(2, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r14 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getServiceNoteClass(service_r14));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getServiceNoteMessage(service_r14));
  }
}
function FdaEditComponent_ng_container_48_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "div", 102);
    \u0275\u0275elementStart(2, "div", 103);
    \u0275\u0275template(3, FdaEditComponent_ng_container_48_div_1_div_39_div_3_Template, 2, 1, "div", 104);
    \u0275\u0275elementStart(4, "div", 105);
    \u0275\u0275template(5, FdaEditComponent_ng_container_48_div_1_div_39_div_5_Template, 2, 1, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FdaEditComponent_ng_container_48_div_1_div_39_div_6_Template, 5, 2, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const service_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_12_0 = service_r14.get("subService")) == null ? null : tmp_12_0.value.length) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_13_0 = service_r14.get("subService")) == null ? null : tmp_13_0.value.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowServiceNote(service_r14));
  }
}
function FdaEditComponent_ng_container_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68)(4, "div", 69)(5, "div")(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 70);
    \u0275\u0275template(9, FdaEditComponent_ng_container_48_div_1_input_9_Template, 1, 1, "input", 71)(10, FdaEditComponent_ng_container_48_div_1_h6_10_Template, 2, 1, "h6", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 72)(12, "div", 73)(13, "div", 74)(14, "span", 75);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 76);
    \u0275\u0275listener("input", function FdaEditComponent_ng_container_48_div_1_Template_input_input_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateMerakiServicegrandTotal());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 73)(18, "div", 74)(19, "span", 75);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, FdaEditComponent_ng_container_48_div_1_div_22_Template, 5, 2, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, FdaEditComponent_ng_container_48_div_1_div_23_Template, 4, 3, "div", 79);
    \u0275\u0275elementStart(24, "div", 72)(25, "input", 80);
    \u0275\u0275listener("input", function FdaEditComponent_ng_container_48_div_1_Template_input_input_25_listener() {
      \u0275\u0275restoreView(_r13);
      const service_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAgentValueChange(service_r14));
    })("keydown", function FdaEditComponent_ng_container_48_div_1_Template_input_keydown_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restrictDecimal($event, 2));
    })("focus", function FdaEditComponent_ng_container_48_div_1_Template_input_focus_25_listener() {
      \u0275\u0275restoreView(_r13);
      const service_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTotalFocus(service_r14, null));
    })("blur", function FdaEditComponent_ng_container_48_div_1_Template_input_blur_25_listener() {
      \u0275\u0275restoreView(_r13);
      const service_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTotalBlur(service_r14, null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 77);
    \u0275\u0275template(27, FdaEditComponent_ng_container_48_div_1_input_27_Template, 1, 1, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, FdaEditComponent_ng_container_48_div_1_span_28_Template, 2, 0, "span", 82);
    \u0275\u0275elementStart(29, "div", 83)(30, "mat-slide-toggle", 84);
    \u0275\u0275listener("change", function FdaEditComponent_ng_container_48_div_1_Template_mat_slide_toggle_change_30_listener($event) {
      \u0275\u0275restoreView(_r13);
      const service_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAgreedNegotiateToggle(service_r14, $event.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 85);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, FdaEditComponent_ng_container_48_div_1_mat_icon_33_Template, 2, 0, "mat-icon", 86)(34, FdaEditComponent_ng_container_48_div_1_mat_icon_34_Template, 2, 0, "mat-icon", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "h6");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, FdaEditComponent_ng_container_48_div_1_div_38_Template, 5, 2, "div", 88)(39, FdaEditComponent_ng_container_48_div_1_div_39_Template, 7, 3, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 90)(41, "div");
    \u0275\u0275element(42, "textarea", 91, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275element(45, "textarea", 92, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275element(48, "textarea", 93, 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_21_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    const ctx_r22 = \u0275\u0275nextContext();
    const service_r14 = ctx_r22.$implicit;
    const i_r24 = ctx_r22.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", service_r14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMainServiceIndex(i_r24, ctx_r1.datasource.data));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_13_0 = service_r14.get("isNew")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_14_0 = service_r14.get("isNew")) == null ? null : tmp_14_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", service_r14.get(((tmp_16_0 = service_r14.get("isSubService")) == null ? null : tmp_16_0.value) ? "systemSubTotal" : "systemTotal"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "system", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.withPda);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", service_r14.get(((tmp_21_0 = service_r14.get("isSubService")) == null ? null : tmp_21_0.value) ? "sub_total" : "total"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r14, "agent", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowFlag(service_r14));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ((tmp_25_0 = service_r14.get("negotiate")) == null ? null : tmp_25_0.value) === "Y")("ngClass", ((tmp_26_0 = service_r14.get("negotiate")) == null ? null : tmp_26_0.value) === "Y" ? "toggle-negotiate" : "toggle-agreed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_27_0 = service_r14.get("negotiate")) == null ? null : tmp_27_0.value) === "Y" ? "Negotiate" : "Agreed", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_28_0 = service_r14.get("isNew")) == null ? null : tmp_28_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeleteSpecificService(service_r14));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_30_0 = service_r14.get("info_msg")) == null ? null : tmp_30_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowServiceNote(service_r14) && ((tmp_31_0 = service_r14.get("subService")) == null ? null : tmp_31_0.value == null ? null : tmp_31_0.value.length) === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_32_0 = service_r14.get("subService")) == null ? null : tmp_32_0.value == null ? null : tmp_32_0.value.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", service_r14);
  }
}
function FdaEditComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FdaEditComponent_ng_container_48_div_1_Template, 50, 23, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const service_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_7_0 = service_r14.get("isSubService")) == null ? null : tmp_7_0.value));
  }
}
function FdaEditComponent_div_49_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("system", "convertedToCurrency"));
  }
}
function FdaEditComponent_div_49_div_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("pda-approved", "convertedToCurrency"));
  }
}
function FdaEditComponent_div_49_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "label", 118);
    \u0275\u0275text(2, "PDA Approved Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 119)(4, "div", 120)(5, "span", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 120)(9, "span", 121);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FdaEditComponent_div_49_div_14_div_12_Template, 4, 2, "div", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getPdaGrandTotal());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("pda-approved", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
  }
}
function FdaEditComponent_div_49_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("agent", "convertedToCurrency"));
  }
}
function FdaEditComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117)(2, "label", 118);
    \u0275\u0275text(3, "System Total :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 119)(5, "div", 120)(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 120)(10, "span", 121);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FdaEditComponent_div_49_div_13_Template, 4, 2, "div", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, FdaEditComponent_div_49_div_14_Template, 13, 5, "div", 123);
    \u0275\u0275elementStart(15, "div", 117)(16, "label", 118);
    \u0275\u0275text(17, "Agent Value Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 119)(19, "div", 120)(20, "span", 121);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 120)(24, "span", 121);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, FdaEditComponent_div_49_div_27_Template, 4, 2, "div", 122);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemGrandTotal());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("system", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.withPda);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.agentServiceGrandTotal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("agent", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
  }
}
function FdaEditComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Credit note is required ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Credit note cannot exceed Grand Total ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_mat_error_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Grand total is required ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r25 = ctx.$implicit;
    \u0275\u0275property("value", currency_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r25, " ");
  }
}
function FdaEditComponent_mat_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r26 = ctx.$implicit;
    \u0275\u0275property("value", currency_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r26, " ");
  }
}
function FdaEditComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Conversion Rate is required ");
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_mat_form_field_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2, "PDA Remittance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 124);
    \u0275\u0275elementEnd();
  }
}
function FdaEditComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Currency Conversion Mismatch: Calculated value (", \u0275\u0275pipeBind2(3, 2, ctx_r1.calculatedCurrencyConversion, "1.2-2"), ") Entered (", \u0275\u0275pipeBind2(4, 5, ctx_r1.responseCurrencyConversion, "1.2-2"), ")");
  }
}
function FdaEditComponent_button_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function FdaEditComponent_button_101_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fdaEditSubmitAndSave("Request Approval"));
    });
    \u0275\u0275text(1, " Request Approval");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disableTableInputFields);
  }
}
function FdaEditComponent_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FdaEditComponent_button_106_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit("Submit"));
    });
    \u0275\u0275text(1, "Submit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r1.disableTableInputFields));
  }
}
var FdaEditComponent = class _FdaEditComponent {
  fb;
  dialog;
  portAgentFormService;
  snackBar;
  portService;
  pdaService;
  fdaService;
  clientService;
  router;
  overlay;
  vcr;
  fileUploadService;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  displayedColumns = ["S.No", "Service", "System Value", "Agent Value", "Agreed / Negotiate"];
  canDeleteService = {};
  hasInitializedExpansion = false;
  portAgentForm;
  datasource = new MatTableDataSource([]);
  PDAdataSource = [];
  countryList = [];
  portList = [];
  vesselList = [];
  allVesselList = [];
  purposeList = [];
  cargoList = [];
  clientList = [];
  currencyList = [];
  portAgentList = [];
  filteredOptions = {};
  fields = fdaFields.map((field) => {
    if (field.name === "Vessel") {
      return __spreadProps(__spreadValues({}, field), { value: "vessel_id" });
    }
    return field;
  });
  modFields = this.fields;
  serviceList = new PA_Rules();
  fdaEditData = null;
  merakiServiceList = new PA_Rules();
  mergedServiceList = [];
  agentServiceGrandTotal = null;
  agentCurrencyCoversion = 0;
  agentServiceTotal = 0;
  merakiServiceTotal = 0;
  merakiServiceGrandTotal = null;
  pdaRemittance = null;
  addedFields = [];
  disableTableInputFields = false;
  portAgentReturnMessage = "";
  displayAgreedAndNegotiateColumn = false;
  isNegotiateSelected = false;
  dis_id = sessionStorage.getItem("disbursement_seq");
  copyOfMasterData = {};
  isManualCreation = null;
  excludedFieldsFlag = ["vessel_stay", "fda_roe", "voyage", "imo_number", "invoice_ref_no", "fda_currency_from"];
  isExcluded = ["type"];
  errMsg = "";
  withPda = false;
  originalFeedback = null;
  fda_custom_calculation;
  tariffRules = new PA_Rules();
  portChange = "N";
  portIdValue = 0;
  PDAapprovedValue = new PA_Rules();
  PDAapprovedGrandTotal = 0;
  serviceName = "";
  fdaStatus = 0;
  showFlag = false;
  portServiceList = new PA_Rules();
  fileList = [];
  communicationHistory = [];
  previousPurposeId = null;
  isPurposeInternalChange = false;
  previousServiceData = null;
  ConvertedFromCurrencyList = [];
  PaymentFromCurrencyList = [];
  displayConvertedToCurrency = false;
  filteredPaymentToCurrency = new Observable();
  filteredConvertedToCurrency = new Observable();
  convertedToCurrencyValue = "";
  isPurposeChanged = false;
  previousPortId = null;
  previousCountryId = null;
  isPortChanged = false;
  showCurrencyConversionMismatchBanner = false;
  calculatedCurrencyConversion = null;
  responseCurrencyConversion = null;
  isInitialLoad = true;
  isRefreshingRules = false;
  // Flag to track refresh rules scenario
  rulesWereRefreshed = false;
  // Flag to track if rules were refreshed for API
  additionalFieldsFromRules = [];
  // To store additional fields from rules for comparison
  constructor(fb, dialog, portAgentFormService, snackBar, portService, pdaService, fdaService, clientService, router, overlay, vcr, fileUploadService) {
    this.fb = fb;
    this.dialog = dialog;
    this.portAgentFormService = portAgentFormService;
    this.snackBar = snackBar;
    this.portService = portService;
    this.pdaService = pdaService;
    this.fdaService = fdaService;
    this.clientService = clientService;
    this.router = router;
    this.overlay = overlay;
    this.vcr = vcr;
    this.fileUploadService = fileUploadService;
    this.buildPortAgentForm();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.dialog.closeAll();
      }
    });
  }
  // method to build the port agent form
  buildPortAgentForm() {
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
      type: [""],
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
      conversion_rate: [null, Validators.required],
      currency_conversion: [null],
      credit_note: [null],
      balance_due: [null],
      fda_amount: [null],
      fda_custom_calculation: [false],
      invoice_ref_no: [null, [Validators.required]],
      PDAapprovedValue: this.fb.array([]),
      pda_remittance: [null],
      converted_curr_from: [null],
      converted_curr_to: [null],
      conversion_fda_rate: [null],
      pmt_curr_from: [null],
      pmt_curr_to: [null]
    });
  }
  getMainServiceIndex = getMainServiceSerialNumber;
  restrictDecimal = restrictDecimal;
  getOptionValue = getOptionValuefortheFields;
  displayFn = displayFn;
  onTotalFocus = onTotalFocus;
  onTotalBlur = onTotalBlur;
  // Returns the 'services' FormArray from the main form for easy access and manipulation
  get serviceListFormArray() {
    return this.portAgentForm.get("serviceList");
  }
  get PDAapprovedValueFormArray() {
    return this.portAgentForm.get("PDAapprovedValue");
  }
  modifiedFields = {};
  ngOnInit() {
    this.fda_custom_calculation = this.portAgentForm.get("fda_custom_calculation");
    this.getAllMasterData();
    this.trackModifiedFieldChanges();
    this.setupAutocomplete();
    this.setupCalculationSubscriptions();
    this.fda_custom_calculation.valueChanges.subscribe((value) => {
    });
    this.filteredConvertedToCurrency = this.setupFilteredCurrency("converted_curr_to");
    this.filteredPaymentToCurrency = this.setupFilteredCurrency("pmt_curr_to");
  }
  setupFilteredCurrency(controlName) {
    return this.portAgentForm.controls[controlName].valueChanges.pipe(startWith(""), map((value) => _filterCurrency(this.currencyList, value)));
  }
  isFieldReadonly(field) {
    if (field.name === "FromCurrency") {
      return true;
    }
    return false;
  }
  // Setup subscriptions to watch for changes in relevant form controls
  setupCalculationSubscriptions() {
    const form = this.portAgentForm;
    if (!form)
      return;
    form.get("credit_note")?.valueChanges.subscribe(() => {
      if (this.fdaStatus !== 7) {
        this.recalculateTotals();
      }
    });
    form.get("conversion_rate")?.valueChanges.subscribe(() => {
      if (this.fdaStatus !== 7) {
        this.recalculateTotals();
      }
    });
  }
  // method to highlight the modified fields
  trackModifiedFieldChanges() {
    Object.keys(this.portAgentForm.controls).forEach((field) => {
      this.portAgentForm.get(field)?.valueChanges.subscribe((value) => {
        let originalValue = this.copyOfMasterData[field];
        const currentVal = value === null || value === void 0 ? "" : String(value).trim();
        const originalVal = originalValue === null || originalValue === void 0 ? "" : String(originalValue).trim();
        this.modifiedFields[field] = currentVal !== originalVal;
      });
    });
  }
  setupAutocomplete() {
    this.modFields.forEach((field) => {
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
  // method to get the modified fields
  getModifiedFields() {
    const details = this.fdaEditData?.fda?.fda_vessel_details;
    this.modifiedFields = {};
    if (details) {
      Object.keys(details).forEach((key) => {
        this.modifiedFields[key] = !!details[key]?.modified;
      });
    }
  }
  isExcludedFlag(fieldName) {
    return this.excludedFieldsFlag.includes(fieldName.toLowerCase());
  }
  isExcludedField(fieldName) {
    return this.isExcluded.includes(fieldName.toLowerCase());
  }
  recalculateData() {
    this.merakiServiceList = this.transFormServiceData(this.merakiServiceList, "merakiData");
    const formData = this.portAgentForm.getRawValue();
    const submitData = this.transformJsonData(formData);
    this.populateServicesFromList();
    this.loader.show();
    submitData.fda_custom_calculation = this.fda_custom_calculation.value ? "Y" : "N", delete submitData.fda_save;
    delete submitData.fda_submit;
    const savedPreviousPurposeId = this.previousPurposeId;
    this.fdaService.fdaReCalculate(submitData).subscribe({
      next: (response) => {
        this.fdaEditData.fda.fda_custom_calculation = response?.fda_custom_calculation === "Y";
        if (!savedPreviousPurposeId) {
          this.previousPurposeId = response?.purpose_id;
        }
        this.previousPortId = response?.portagent_fda_data?.port?.port_id;
        this.previousCountryId = response?.portagent_fda_data?.country?.country_id;
        if (response?.port_tariff_rule) {
          this.tariffRules = response.port_tariff_rule;
          this.portServiceList = response.port_tariff_rule;
        } else {
          this.tariffRules = response?.port_tariff_rule;
        }
        const responsePdaServices = response?.pda?.portagent_pda_data?.services;
        if (responsePdaServices) {
          this.PDAapprovedValue = responsePdaServices;
          this.PDAapprovedGrandTotal = responsePdaServices?.grand_total ?? this.PDAapprovedGrandTotal;
        }
        const responseAgentServices = response?.portagent_fda_data?.services;
        if (responseAgentServices) {
          this.serviceList = responseAgentServices;
          this.agentServiceGrandTotal = responseAgentServices?.grand_total ?? 0;
          this.agentServiceTotal = responseAgentServices?.service_total ?? 0;
        }
        const responseMerakiServices = response?.meraki_pda_data?.services;
        if (responseMerakiServices) {
          this.merakiServiceList = responseMerakiServices;
          this.merakiServiceTotal = responseMerakiServices?.service_total ?? 0;
          this.merakiServiceGrandTotal = responseMerakiServices?.grand_total ?? 0;
        }
        if (this.isRefreshingRules) {
          this.mergedServiceList = this.mergeAllMerakiServicesWithPortAgent(this.merakiServiceList, this.serviceList, this.PDAapprovedValue);
          this.rulesWereRefreshed = true;
          this.isRefreshingRules = false;
        } else {
          this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList, this.PDAapprovedValue);
        }
        this.hasInitializedExpansion = false;
        this.populateServicesFromList();
        this.updateAllToggleStatuses();
        this.isPurposeChanged = false;
        this.isPortChanged = false;
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  UpdateModifiedMovementToTariifRules() {
    const updatedTariffItems = this.tariffRules?.items?.map((tariffItem) => {
      const formService = this.serviceListFormArray.controls.map((c) => c.getRawValue()).find((s) => s.service === tariffItem.service);
      const updatedSubServices = tariffItem.subService?.map((tariffSub) => {
        const formSub = formService?.subService?.find((fs) => fs.name === tariffSub.name && !fs.unique_key?.includes("System"));
        return __spreadProps(__spreadValues({}, tariffSub), {
          optional: this.isRefreshingRules ? tariffSub?.optional === "Y" ? "Y" : "N" : formSub?.optional === true || formSub?.optional === "Y" ? "Y" : "N",
          movement: formSub ? (() => {
            if (!tariffSub.movement)
              return tariffSub.movement;
            const parts = tariffSub.movement.split(":");
            while (parts.length < 4)
              parts.push("NA");
            parts[1] = formSub.formattedSystemMovement || parts[1];
            return parts.join(":");
          })() : tariffSub.movement
        });
      });
      return __spreadProps(__spreadValues({}, tariffItem), {
        subService: updatedSubServices
      });
    });
    const formattedData = formatServices(updatedTariffItems);
    return { items: formattedData };
  }
  // method to calculate the vessel stay on date change
  onDateChange() {
    const eta = this.portAgentForm.get("eta")?.value;
    const etd = this.portAgentForm.get("etd")?.value;
    const stay = this.calculateVesselStayInFda(eta, etd);
    if (stay === "eta greater than etd") {
      this.portAgentForm.get("vessel_stay")?.setValue(null);
      this.portAgentForm.get("etd")?.setValue(null);
    } else {
      this.portAgentForm.get("vessel_stay")?.setValue(stay);
    }
  }
  calculateVesselStayInFda = (eta, etd) => {
    if (!eta || !etd)
      return null;
    const etaDate = new Date(eta);
    let etdDate = new Date(etd);
    if (etdDate.getHours() === 0 && etdDate.getMinutes() === 0 && etdDate.getSeconds() === 0) {
      etdDate.setHours(23, 59, 59, 999);
    }
    const etaOnly = new Date(etaDate.getFullYear(), etaDate.getMonth(), etaDate.getDate());
    const etdOnly = new Date(etdDate.getFullYear(), etdDate.getMonth(), etdDate.getDate());
    if (etdOnly.getTime() < etaOnly.getTime()) {
      return "eta greater than etd";
    }
    const diffInMs = etdOnly.getTime() - etaOnly.getTime();
    const diffDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
    if (diffInMs === 0) {
      return "1D";
    }
    return `${diffDays + 1}D`;
  };
  // methos to swap the fields for IMO Number and Vessel
  swapFields() {
    const imoIndex = this.modFields.findIndex((f) => f.name?.trim() === "IMO Number");
    const vesselIndex = this.modFields.findIndex((f) => f.name?.trim() === "Vessel");
    if (imoIndex !== -1 && vesselIndex !== -1) {
      const temp = this.modFields[imoIndex];
      this.modFields[imoIndex] = this.modFields[vesselIndex];
      this.modFields[vesselIndex] = temp;
      this.modFields[imoIndex].type = "select";
      this.modFields[vesselIndex].type = "input";
    }
  }
  // method to set the data for the dropdown
  formatFieldData(fields) {
    fields.forEach((field) => {
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
        case "ToCurrency":
          field.options = this.currencyList;
          field.type = "select";
          this.filteredOptions[field.value] = field.options;
          break;
        default:
      }
    });
  }
  // method to filter the ports based on country
  portByCountry(fieldName, value) {
    if (fieldName === "Country") {
      this.loader.show();
      this.portService.getPortsByCountryId(value).subscribe({
        next: (ports) => {
          this.portList = ports;
          this.modFields.map((field) => {
            if (field.name === "Port") {
              field.options = this.portList.map((port) => ({
                port_id: port.port_id,
                name: port.name
              }));
            }
            this.filteredOptions[field.value] = field.options;
            this.portAgentForm.get("port_id")?.setValue(this.fdaEditData.fda.portagent_fda_data.port.port_id);
          });
          const port_id = this.portAgentForm.get("port_id")?.value;
          this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
          this.loader.hide();
        },
        error: (error) => {
          this.portList = [];
          this.loader.hide();
          this.errMsg = error?.error?.error || "Something went wrong please try again later.";
          this.snackBar.showError(this.errMsg);
        }
      });
    }
  }
  onSubmit(buttonName) {
    if (!this.portAgentForm.valid) {
      this.markRequiredTouched(this.portAgentForm);
      this.focusFirstRequiredInvalid(this.portAgentForm);
      this.snackBar.showError("Please fill all required fields");
      return;
    }
    const data = {
      disbursement_seq: this.fdaEditData.disbursement_seq,
      pda_fda_flag: "FDA"
    };
    this.loader.show();
    this.fileUploadService.fileDataFromDb(data).subscribe({
      next: (res) => {
        this.fileList = res;
        if (this.fileList.length === 0) {
          this.snackBar.showError("Please upload files before submitting.");
          this.loader.hide();
          return;
        }
        this.loader.hide();
        this.checkAgentValue(buttonName);
      },
      error: (err) => {
        this.loader.hide();
        this.snackBar.showError("Error fetching file data.");
      }
    });
  }
  checkAgentValue(buttonName) {
    if (!this.agentServiceGrandTotal || this.agentServiceGrandTotal === 0) {
      if (this.withPda) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          disableClose: true,
          panelClass: "sweet-alert-style",
          data: {
            header: "Warning data",
            text: "Agent value is not entered. Do you want to use the PDA-approved value as the agent value?"
          }
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.serviceListFormArray.controls.forEach((service) => {
              const pdaValue = service.get("pdaApprovedTotalValue")?.value;
              service.get("total")?.setValue(pdaValue);
            });
            this.calculateAgentServiceGrandTotal();
            this.proceedWithSubmitDialog(buttonName);
          }
        });
        return;
      } else {
        this.snackBar.showError("Please enter the agent value");
        return;
      }
    }
    this.proceedWithSubmitDialog(buttonName);
  }
  proceedWithSubmitDialog(buttonName) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: {
        header: "Submit Data",
        text: "Once submitted, this FDA cannot be edited. If you do not wish to submit now, please click 'Save' to keep it in draft and modify it later.",
        button: "Save"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "save") {
        this.fdaEditSubmitAndSave("save");
      } else if (result) {
        this.fdaEditSubmitAndSave(buttonName);
      }
    });
  }
  openReRequestEmailDialog(buttonName) {
    const clientEmail = this.clientList.filter((client) => {
      return client.company_id === this.portAgentForm.get("client_id")?.value;
    });
    const dialogRef = this.dialog.open(ApprovalRequestDialogComponent, {
      disableClose: true,
      position: { right: "0" },
      panelClass: ["animate__animated", "animate__slideInRight"],
      width: "95%",
      height: "100%",
      maxWidth: "95vw",
      maxHeight: "100vh",
      data: {
        to: clientEmail[0]?.email || "",
        cc: clientEmail[0]?.email || "",
        services: {
          items: this.mergedServiceList,
          grand_Total: this.agentServiceGrandTotal
        }
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        const submitData = this.transformJsonData(this.portAgentForm.getRawValue());
        submitData.portagent_fda_data.services = {
          items: data.services,
          grand_total: this.agentServiceGrandTotal
        };
        this.loader.show();
        this.fdaService.fdaSaveAndSubmit(submitData).subscribe({
          next: (response) => {
            const payload = {
              disbursement_seq: this.fdaEditData.disbursement_seq,
              email_to: data.to,
              email_cc: data.cc,
              meraki_cmt_to_client: data.meraki_comment_to_client,
              email_signature: data.email_signature,
              update_signature: data.update_signature
            };
            if (buttonName === "Request Approval") {
              this.pdaService.clientRequestfda(payload).subscribe({
                next: (response2) => {
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
                }
              });
            }
            this.loader.hide();
          },
          error: (err) => {
            this.loader.hide();
            this.errMsg = err?.error?.error || "Something went wrong please try again later.";
            this.snackBar.showError(this.errMsg);
          }
        });
      }
    });
  }
  // method to post the pda edit data
  fdaEditSubmitAndSave(buttonName) {
    const newRow = this.serviceListFormArray.controls.find((row) => row.get("isNew")?.value);
    if (newRow) {
      const serviceControl = newRow.get("service");
      const serviceValue = serviceControl?.value;
      if (!serviceValue || serviceValue.trim() === "") {
        serviceControl?.markAsTouched();
        serviceControl?.markAsDirty();
        setTimeout(() => {
          const inputElement = document.querySelector(".service-name.input-error");
          if (inputElement) {
            inputElement.focus();
          }
        }, 0);
        this.snackBar.showError("Please fill the newly added row or remove it before saving");
        return;
      }
    } else if (buttonName === "Request Approval") {
      if (this.portAgentForm.valid) {
        const formData = this.portAgentForm.getRawValue();
        const submitData = this.transformJsonData(formData);
        submitData.pda_save = "Y";
        this.loader.show();
        this.fdaService.fdaSaveAndSubmit(submitData).pipe(concatMap(() => this.getFdaEditData())).subscribe({
          next: () => {
            this.openReRequestEmailDialog("Request Approval");
            this.loader.hide();
          },
          error: (error) => {
            this.errMsg = error?.error?.error || "Something went wrong, please try again later.";
            this.snackBar.showError(this.errMsg);
            this.loader.hide();
          }
        });
      } else {
        this.portAgentForm.markAllAsTouched();
        this.snackBar.showError("Please fill all required fields");
      }
    } else {
      this.loader.show();
      this.getUploadedFiles().pipe(concatMap((files) => {
        const formData = this.portAgentForm.getRawValue();
        const submitData = this.transformJsonDataToFdaSave(formData);
        submitData.fda_submit = buttonName === "Submit" ? "Y" : "N";
        submitData.fda_save = buttonName === "save" ? "Y" : "N";
        return this.fdaService.fdaSaveAndSubmit(submitData).pipe(concatMap((response) => {
          this.snackBar.showSuccess(response.message);
          if (buttonName === "Submit") {
            this.router.navigate(["/layout/disbursement"]);
            return of(response);
          } else {
            return forkJoin([
              this.getFdaEditData(),
              this.getUploadedFiles()
            ]).pipe(map(() => response));
          }
        }));
      })).subscribe({
        next: () => {
          this.loader.hide();
          this.rulesWereRefreshed = false;
        },
        error: (err) => {
          this.loader.hide();
          this.errMsg = err?.error?.error || "Something went wrong, please try again later.";
          this.snackBar.showError(this.errMsg);
        }
      });
    }
  }
  onSave(buttonName) {
    const newRow = this.serviceListFormArray.controls.find((row) => row.get("isNew")?.value);
    if (newRow) {
      const serviceControl = newRow.get("service");
      const serviceValue = serviceControl?.value;
      if (!serviceValue || serviceValue.trim() === "") {
        serviceControl?.markAsTouched();
        serviceControl?.markAsDirty();
        setTimeout(() => {
          const inputElement = document.querySelector(".service-name.input-error");
          if (inputElement) {
            inputElement.focus();
          }
        }, 0);
        this.snackBar.showError("Please submit the newly added service or remove it before saving");
        return;
      } else {
        this.snackBar.showError("Please submit the newly added service before saving");
        return;
      }
    }
    if (this.isFormValidExcept(["conversion_rate", "serviceList"])) {
      this.fdaEditSubmitAndSave(buttonName);
    } else {
      Object.keys(this.portAgentForm.controls).forEach((key) => {
        if (["conversion_rate", "serviceList"].includes(key))
          return;
        const control = this.portAgentForm.get(key);
        control?.markAsTouched();
        control?.updateValueAndValidity();
      });
      this.snackBar.showError("Please fill all required fields");
    }
  }
  // Recursively mark only required controls as touched
  markRequiredTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markRequiredTouched(control);
      } else if (control.hasValidator(Validators.required)) {
        control.markAsTouched();
      }
    });
  }
  // Focus first invalid required input
  focusFirstRequiredInvalid(formGroup) {
    const firstInvalidControl = document.querySelector("form .ng-invalid[required]");
    if (firstInvalidControl) {
      firstInvalidControl.focus();
    }
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
          purpose: [sub.purpose],
          basic_value: [sub.basic_value],
          calculated_basic_value: [sub.calculated_basic_value],
          hide: [sub.hide],
          unique_key: [sub.unique_key],
          movement: [sub.movement],
          tariff_percent: [sub.tariff_percent],
          formula_result: [sub.formula_result],
          optional: [sub.optional === "Y" || sub.optional === true],
          operational_flag: [sub.operational_flag],
          sub_total: [{ value: 0, disabled: this.disableTableInputFields }],
          formula_inputs: [sub.formula_inputs],
          isSubService: [true],
          systemMovement: [sub.systemMovement || 0],
          systemSubTotal: [sub.systemSubTotal || 0],
          systemFormulaInputs: [sub.systemFormulaInputs || []],
          pdaApprovedSubTotalValue: [sub.pdaApprovedSubTotalValue || 0],
          formattedSystemMovement: [sub.systemMovement?.split(":")[1] || 1]
        })));
        const serviceIndex = this.serviceListFormArray.length;
        const hasSubServices = (item.subService || []).length > 0;
        const mainServiceGroup = this.fb.group({
          SNO: [item.SNO],
          code: [item.code],
          total: [{
            value: item.total !== null && item.total !== void 0 && item.total !== "" && !isNaN(Number(item.total)) ? Number(item.total) : null,
            disabled: this.disableTableInputFields
          }],
          service: [item.service || ""],
          purpose: [item.purpose || ""],
          pa_remark: [item.pa_remark || ""],
          /* ** Needs to be reviewed with Team - PDA comments to be displayed in FDA -- Surjit
           * pa_remark: [item.pa_remark || this.getPdaRemark(item.service) || ''],
           * meraki_feedback: [{ value: item.meraki_feedback || this.getPdaFeedback(item.service) || '', disabled: this.disableTableInputFields }],
           * meraki_remark_client: [item.meraki_remark_client || this.getPdaMerakiRemarkClient(item.service) || ''],
           * client_comment: [item.client_comment || this.getPdaClientComment(item.service) || ''],
           */
          meraki_feedback: [{ value: item.meraki_feedback || "", disabled: this.disableTableInputFields }],
          meraki_remark_client: [item.meraki_remark_client || ""],
          client_comment: [item.client_comment || ""],
          client_option: [item.client_option || ""],
          info_msg: [item.info_msg || ""],
          negotiate: [item.negotiate || "N"],
          agreed: [item.agreed || "N"],
          display_to_client: [item.display_to_client || "N"],
          subService: subServiceArray,
          isSubService: [false],
          expanded: [!this.hasInitializedExpansion && hasSubServices],
          agreedOrNegotiate: [
            item.negotiate === "Y" ? "Negotiate" : "Agreed",
            Validators.required
          ],
          systemTotal: [typeof item.systemTotal === "string" ? 0 : item.systemTotal || 0],
          pdaApprovedTotalValue: [item.pdaApprovedTotalValue || 0],
          serviceIndex: [serviceIndex],
          formated_client_comment: [displayClientComment(item.client_comment) || ""]
        });
        this.serviceListFormArray.push(mainServiceGroup);
      });
    }
    this.updateDatasource();
    this.hasInitializedExpansion = true;
  }
  // method to toggle the services
  toggleRow(service) {
    const isExpanded = service.get("expanded")?.value;
    service.get("expanded")?.setValue(!isExpanded);
    this.updateDatasource();
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
    for (let pdaService of this.PDAapprovedValueFormArray.controls) {
      this.PDAdataSource.push(pdaService);
      if (pdaService.get("expanded")?.value) {
        const pdaSubServiceFormArray = pdaService.get("subService");
        pdaSubServiceFormArray.controls.forEach((subServiceCtrl) => {
          this.PDAdataSource.push(subServiceCtrl);
        });
      }
    }
    this.onSelectionChange(null);
  }
  // method to open the add service dialog
  openCreateServiceDialog() {
    const newSNO = this.serviceListFormArray.length + 1;
    const serviceIndex = this.serviceListFormArray.length;
    const control = this.fb.group({
      SNO: [newSNO, { validators: Validators.required }],
      code: ["", { validators: Validators.required }],
      total: [0, { validators: Validators.required }],
      service: ["", { validators: Validators.required }],
      purpose: [""],
      pa_remark: [""],
      meraki_feedback: ["", { validators: Validators.required }],
      meraki_remark_client: [""],
      client_comment: [""],
      formated_client_comment: [""],
      client_option: [""],
      info_msg: [""],
      negotiate: ["N", { validators: Validators.required }],
      agreed: ["N", { validators: Validators.required }],
      subService: this.fb.array([]),
      systemTotal: [0],
      systemSubTotal: [0],
      expanded: [false],
      isNew: [true],
      isSubService: [false],
      pdaTotal: [0],
      agreedOrNegotiate: ["Agreed", Validators.required],
      serviceIndex: [serviceIndex]
    });
    Object.keys(control.controls).forEach((key) => {
      const ctrl = control.get(key);
      if (ctrl) {
        ctrl.name = key;
      }
    });
    control.get("service")?.valueChanges.subscribe(() => {
      this.checkDeletePermission();
      this.updateDatasource();
    });
    this.serviceListFormArray.push(control);
    this.updateDatasource();
    this.checkDeletePermission();
  }
  deleteService(service) {
    const index = this.serviceListFormArray.controls.indexOf(service);
    if (index === -1)
      return;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: { header: "Delete", text: "Do you want to delete the service?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.serviceListFormArray.removeAt(index);
        this.updateDatasource();
        this.checkDeletePermission();
        this.calculateAgentServiceGrandTotal();
      }
    });
  }
  submitServiceName(service) {
    const serviceNameControl = service.get("service");
    if (!serviceNameControl || !serviceNameControl.value || serviceNameControl.value.trim() === "") {
      this.snackBar.showError("Please enter a service name");
      return;
    }
    const serviceName = serviceNameControl.value.trim();
    const isDuplicate = this.serviceListFormArray.controls.some((ctrl, idx) => {
      const currentIndex = this.serviceListFormArray.controls.indexOf(service);
      if (idx === currentIndex)
        return false;
      const existingServiceName = ctrl.get("service")?.value;
      return existingServiceName && existingServiceName.trim().toLowerCase() === serviceName.toLowerCase();
    });
    if (isDuplicate) {
      this.snackBar.showError("A service with this name already exists. Please use a different name.");
      return;
    }
    service.get("isNew")?.setValue(false);
    service.markAsPristine();
    service.updateValueAndValidity();
    this.snackBar.showSuccess("Service name saved");
    this.updateDatasource();
    this.checkDeletePermission();
  }
  closeNewRow(element) {
    const index = this.serviceListFormArray.controls.indexOf(element);
    if (index !== -1) {
      this.serviceListFormArray.removeAt(index);
      this.updateDatasource();
    }
  }
  // method to get the all master data
  getAllMasterData() {
    this.swapFields();
    this.loader.show();
    const params = {
      fields: ["all"]
    };
    this.portAgentFormService.getMasterData(params).pipe(concatMap((response) => {
      this.countryList = response.country;
      this.purposeList = response.purpose;
      this.portAgentList = response.port_agent;
      this.clientList = response.client;
      this.cargoList = response.cargo;
      this.currencyList = response.currency;
      this.formatFieldData(this.modFields);
      return this.getFdaEditData();
    })).subscribe({
      next: () => {
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  buildFdaVesselOptions(vessels) {
    this.allVesselList = vessels || [];
    this.vesselList = this.allVesselList;
    this.modFields.forEach((field) => {
      if (field.name === "Vessel") {
        field.options = this.allVesselList.map((vessel) => ({
          vessel_id: vessel.vessel_id,
          name: vessel.name
        }));
      }
      this.filteredOptions[field.value] = field.options;
    });
  }
  // method to get the vessel based on the client
  vesselListByClientId(clientId) {
    const vslpayload = {
      company_id: clientId,
      fields: ["assigned_unassigned"]
    };
    return this.clientService.VslListFromDb(vslpayload).pipe(map((response) => {
      const mergedList = mergeResponseVesselIntoList(response.assigned_vessels || [], this.fdaEditData?.fda?.fda_vessel_details);
      this.buildFdaVesselOptions(mergedList);
      this.portAgentForm.get("vessel_id")?.setValue(this.fdaEditData.fda.fda_vessel_details.vessel_id);
      return response;
    }), catchError((error) => {
      this.vesselList = [];
      this.errMsg = error?.error?.error || "Failed to fetch vessel details";
      this.snackBar.showError(this.errMsg);
      return of(null);
    }));
  }
  // method to get the pda edit data
  getFdaEditData() {
    return this.pdaService.pdaEditFormData(this.dis_id).pipe(concatMap((response) => {
      this.communicationHistory = response?.communication_histories;
      this.fdaStatus = response?.fda?.status;
      this.fdaEditData = response;
      this.pdaRemittance = response?.pda?.pda_remittance;
      this.PDAapprovedGrandTotal = response?.pda?.portagent_pda_data?.services?.grand_total ?? 0;
      this.portIdValue = response.fda.portagent_fda_data.port?.port_id;
      this.tariffRules = response.port_tariff_rule;
      this.withPda = response.pda !== null;
      const purposeId = response.purpose_id;
      this.previousPurposeId = purposeId;
      this.previousPortId = response.port_id;
      this.previousCountryId = response.country_id;
      this.disableFields(this.withPda, response.return_status);
      if (response?.fda?.state === "N") {
        this.portAgentForm.disable();
        this.disableTableInputFields = true;
      }
      const countryId = response.country_id;
      if (countryId) {
        const currency = getCurrencyFromCountry(this.countryList, countryId);
        this.portAgentForm.patchValue({
          fda_currency_from: currency
        });
      }
      if (this.withPda) {
        if (!this.displayedColumns.includes("PDA Approved Value")) {
          const agentValueIndex = this.displayedColumns.indexOf("Agent Value");
          if (agentValueIndex !== -1) {
            this.displayedColumns.splice(agentValueIndex, 0, "PDA Approved Value");
          }
        }
      } else {
        this.displayedColumns = this.displayedColumns.filter((col) => col !== "PDA Approved Value");
      }
      const observables = [];
      if (countryId) {
        observables.push(this.portByCountryObservable(countryId));
      }
      if (response.fda.status !== 7) {
        observables.push(this.vesselListByClientId(response.client_id));
      }
      this.setServiceData(response);
      this.checkDeletePermission();
      this.patchFormValues(response);
      this.getModifiedFields();
      this.calculateCurrencyConversionForComparison();
      this.checkCurrencyConversionMismatch();
      if (response.fda.status === 7 || response?.fda?.state === "N") {
        this.portAgentForm.disable();
        this.disableTableInputFields = true;
        const vesselDetails = response.fda.fda_vessel_details;
        const mergedList = mergeResponseVesselIntoList([], vesselDetails);
        this.buildFdaVesselOptions(mergedList);
      } else {
      }
      return observables.length > 0 ? forkJoin(observables).pipe(map(() => {
        this.handleAdditionalFields(response);
        return response;
      })) : of(response).pipe(map(() => {
        this.handleAdditionalFields(response);
        return response;
      }));
    }), catchError((err) => {
      this.errMsg = err?.error?.error || "Something went wrong please try again later.";
      this.snackBar.showError(this.errMsg);
      return throwError(() => err);
    }));
  }
  // Helper method for port by country as observable
  portByCountryObservable(countryId) {
    return this.portService.getPortsByCountryId(countryId).pipe(map((ports) => {
      this.portList = ports;
      this.modFields.map((field) => {
        if (field.name === "Port") {
          field.options = this.portList.map((port) => ({
            port_id: port.port_id,
            name: port.name
          }));
        }
        this.filteredOptions[field.value] = field.options;
        this.portAgentForm.get("port_id")?.setValue(this.fdaEditData.fda.portagent_fda_data.port.port_id);
      });
      const port_id = this.portAgentForm.get("port_id")?.value;
      this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
      return ports;
    }), catchError((error) => {
      this.portList = [];
      this.errMsg = error?.error?.error || "Something went wrong please try again later.";
      this.snackBar.showError(this.errMsg);
      return of([]);
    }));
  }
  // Check if a service exists in port tariff rules
  checkDeletePermission() {
    this.canDeleteService = {};
    if (!this.tariffRules?.items) {
      this.serviceListFormArray.controls.forEach((_, index) => {
        this.canDeleteService[index] = true;
      });
      return;
    }
    const portTariffServicesMap = new Map((this.tariffRules.items || []).filter((rule) => rule && typeof rule.service === "string" && rule.service !== null).map((rule) => [rule.service.trim().toLowerCase(), true]));
    this.serviceListFormArray.controls.forEach((control, index) => {
      this.serviceName = control.get("service")?.value;
      if (!this.serviceName) {
        this.canDeleteService[index] = true;
        return;
      }
      const normalizedServiceName = this.serviceName.trim().toLowerCase();
      const existsInTariffRules = portTariffServicesMap.has(normalizedServiceName);
      this.canDeleteService[index] = !existsInTariffRules;
    });
  }
  // Method to check if a specific service can be deleted (not in tariff rules)
  canDeleteSpecificService(service) {
    if (!service) {
      return true;
    }
    const code = service.get("code")?.value;
    if (!code || code === "" || code === null) {
      return true;
    }
    const serviceName = service.get("service")?.value;
    if (!serviceName || serviceName.trim() === "") {
      return true;
    }
    if (!this.tariffRules?.items || this.tariffRules.items.length === 0) {
      return true;
    }
    const normalizedServiceName = serviceName.trim().toLowerCase();
    const existsInTariffRules = this.tariffRules.items.some((rule) => rule && typeof rule.service === "string" && rule.service !== null && rule.service.trim().toLowerCase() === normalizedServiceName);
    return !existsInTariffRules;
  }
  setServiceData(response) {
    this.tariffRules = response.port_tariff_rule;
    this.merakiServiceList = response.fda?.meraki_pda_data?.services;
    this.PDAapprovedValue = response.pda?.portagent_pda_data?.services;
    const purpose = response.fda?.portagent_fda_data?.purpose.name;
    this.portServiceList = response.fda?.portagent_fda_data?.services;
    this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
    this.serviceList.grand_total = response.fda?.portagent_fda_data?.services?.grand_total ?? 0;
    this.agentServiceGrandTotal = response.fda?.portagent_fda_data?.services?.grand_total ?? 0;
    this.merakiServiceGrandTotal = this.merakiServiceList?.grand_total ?? 0;
    this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList, this.PDAapprovedValue);
    this.populateServicesFromList();
    setTimeout(() => {
      this.checkDeletePermission();
    }, 0);
  }
  patchFormValues(response) {
    const portAgentFormData = response.fda.portagent_fda_data;
    const vesselDetails = response.fda.fda_vessel_details;
    const customCalcValue = response?.fda?.fda_custom_calculation === "Y";
    this.fda_custom_calculation = new FormControl(customCalcValue);
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
      vessel_stay: this.convertMinutesToDaysHoursShort(response.fda.fda_vessel_stay),
      fda_roe: response?.fda.fda_roe,
      voyage: response?.voyage,
      fda_currency_from: response?.fda.fda_currency_from,
      fda_currency_to: response?.fda.fda_currency_to,
      currency_conversion: response?.fda?.portagent_fda_amount,
      fda_amount: response?.fda.fda_amount,
      conversion_rate: response?.fda.conversion_rate,
      balance_due: response?.fda.balance_due,
      credit_note: response?.fda.credit_note ?? null,
      invoice_ref_no: response?.fda.invoice_ref_no,
      pda_remittance: this.pdaRemittance?.toFixed(2),
      converted_curr_from: response?.fda.converted_curr_from || response?.fda.fda_currency_from,
      converted_curr_to: response?.fda.converted_curr_to || response?.fda.fda_currency_to,
      conversion_fda_rate: response?.fda.conversion_fda_rate || 1,
      pmt_curr_from: response?.fda.pmt_curr_from || response?.fda.fda_currency_from,
      pmt_curr_to: response?.fda.pmt_curr_to || response?.fda.fda_currency_to
    });
    this.copyOfMasterData = __spreadValues({}, this.portAgentForm.getRawValue());
    this.ConvertedFromCurrencyList = [this.fromCurrency, this.toCurrency];
    this.PaymentFromCurrencyList = [this.fromCurrency, this.toCurrency];
    this.responseCurrencyConversion = response?.fda?.portagent_fda_amount;
    if (response?.port_tariff_rule) {
      this.tariffRules = response.port_tariff_rule;
      this.portServiceList = response.port_tariff_rule;
    }
    if (response?.fda?.converted_curr_to) {
      this.displayConvertedToCurrency = response?.fda?.converted_curr_to !== response?.fda?.fda_currency_to && response?.fda?.converted_curr_to !== response?.fda?.fda_currency_from;
    } else {
      this.displayConvertedToCurrency = false;
    }
    this.convertedToCurrencyValue = response?.fda.converted_curr_to;
    this.recalculateTotals();
  }
  handleAdditionalFields(response) {
    let additionalProperties = response?.fda?.fda_vessel_details?.additional_property || [];
    if (this.isRefreshingRules) {
      additionalProperties = (this.additionalFieldsFromRules || []).map((rule) => ({
        field_name: rule?.field_name,
        is_mandatory: rule?.is_mandatory,
        value: null
        // Set to null for refresh to ensure clean state
      }));
    }
    const currentFieldNames = additionalProperties.map((item) => item?.field_name?.trim()).filter(Boolean);
    const fieldsToRemove = this.addedFields.filter((field) => {
      const exists = currentFieldNames.includes(field.fieldName?.trim());
      return !exists;
    });
    additionalProperties.forEach((item) => {
      const fieldName = item?.field_name?.trim();
      if (!fieldName)
        return;
      const existsInFields = this.fields.some((f) => f.value?.trim() === fieldName);
      if (!existsInFields) {
        this.fields.push({
          name: fieldName,
          // Add this for display
          label: fieldName,
          value: fieldName,
          type: "input"
          // Add default type
        });
        const isMandatory = item?.is_mandatory === "Y";
        const value = item?.value ?? null;
        if (!this.portAgentForm.contains(fieldName)) {
          this.portAgentForm.addControl(fieldName, this.fb.control(value, isMandatory ? Validators.required : []));
        }
      }
    });
    fieldsToRemove.forEach((field) => {
      if (this.portAgentForm.contains(field.controlName)) {
        this.portAgentForm.removeControl(field.controlName);
      }
      const fieldIndex = this.fields.findIndex((f) => f.value === field.controlName);
      if (fieldIndex > -1) {
        this.fields.splice(fieldIndex, 1);
      }
    });
    this.addedFields = additionalProperties?.map((item) => ({
      fieldName: item?.field_name,
      controlName: item?.field_name,
      is_mandatory: item?.is_mandatory
    }));
    this.addedFields?.forEach((field) => {
      const matchingProp = additionalProperties?.find((prop) => {
        return prop?.field_name === field.fieldName;
      });
      const isMandatory = field.is_mandatory === "Y";
      const value = matchingProp?.value ?? null;
      if (!this.portAgentForm.contains(field.controlName)) {
        this.portAgentForm.addControl(field.controlName, this.fb.control(value, isMandatory ? Validators.required : []));
      } else {
        this.portAgentForm.get(field.controlName)?.patchValue(value);
      }
    });
  }
  currencyConversion(rate, total) {
    const result = rate * total;
    return result.toFixed(2);
  }
  convertMinutesToDaysHoursShort(minutes) {
    if (!minutes || minutes <= 0) {
      return "0D";
    }
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor(minutes % 1440 / 60);
    return `${days}D `;
  }
  mergeSystemValueFromMerakiJson(merakiItems, portAgentItems, pdaApprovedValue) {
    if (this.isRefreshingRules) {
      return this.mergeAllMerakiServicesWithPortAgent(merakiItems, portAgentItems, pdaApprovedValue);
    }
    return portAgentItems?.items.map((portAgent) => {
      const matchedMerakiService = merakiItems?.items.find((meraki) => {
        const serviceMatch = meraki?.service === portAgent.service;
        const purposeMatch = (meraki?.purpose || "") === (portAgent.purpose || "");
        return serviceMatch && purposeMatch;
      });
      const systemTotal = matchedMerakiService ? matchedMerakiService.total || 0 : 0;
      const matchedPdaService = pdaApprovedValue?.items.find((pda) => pda?.service === portAgent.service);
      const pdaTotal = matchedPdaService ? matchedPdaService.total || 0 : 0;
      let pdaApprovedTotalValue = pdaTotal;
      const mergedSubServices = [
        ...(matchedMerakiService && matchedMerakiService.subService ? matchedMerakiService.subService : []).map((sub) => {
          const matchedPdaService2 = pdaApprovedValue?.items.find((pda) => pda?.service === portAgent.service);
          pdaApprovedTotalValue = matchedPdaService2?.total || 0;
          const matchedPdaSubService = this.withPda ? pdaApprovedValue?.items.flatMap((item) => item.subService || []).find((pdaSub) => pdaSub.name === sub.name) : null;
          return __spreadProps(__spreadValues({}, sub), {
            optional: sub.optional ?? matchedPdaSubService?.optional,
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
        pdaApprovedTotalValue,
        info_msg: matchedMerakiService?.info_msg || portAgent.info_msg || ""
      });
    });
  }
  mergeAllMerakiServicesWithPortAgent(merakiItems, portAgentItems, pdaApprovedValue) {
    const mergedServices = merakiItems?.items?.map((meraki) => {
      const matchedPortAgentService = portAgentItems?.items?.find((portAgent) => {
        const serviceMatch = meraki?.service === portAgent.service;
        const purposeMatch = (meraki?.purpose || "") === (portAgent.purpose || "");
        return serviceMatch && purposeMatch;
      });
      const matchedPdaService = pdaApprovedValue?.items?.find((pda) => pda?.service === meraki.service);
      const pdaTotal = matchedPdaService ? matchedPdaService.total || 0 : 0;
      const mergedSubServices = (meraki?.subService || []).map((sub) => {
        const matchedPdaSubService = this.withPda ? pdaApprovedValue?.items.flatMap((item) => item.subService || []).find((pdaSub) => pdaSub.name === sub.name) : null;
        return __spreadProps(__spreadValues({}, sub), {
          optional: sub.optional ?? matchedPdaSubService?.optional,
          systemSubTotal: sub?.sub_total || 0,
          systemFormulaInputs: sub?.formula_inputs || [],
          systemMovement: sub?.movement || "",
          pdaApprovedSubTotalValue: matchedPdaSubService?.sub_total || 0
        });
      });
      return __spreadProps(__spreadValues({}, meraki), {
        systemTotal: meraki.total || 0,
        total: matchedPortAgentService?.total || 0,
        pa_remark: matchedPortAgentService?.pa_remark || "",
        meraki_feedback: matchedPortAgentService?.meraki_feedback || "",
        meraki_remark_client: matchedPortAgentService?.meraki_remark_client || "",
        client_comment: matchedPortAgentService?.client_comment || "",
        client_option: matchedPortAgentService?.client_option || "",
        negotiate: matchedPortAgentService?.negotiate || "N",
        agreed: matchedPortAgentService?.agreed || "Y",
        display_to_client: matchedPortAgentService?.display_to_client || "N",
        pdaTotal,
        pdaApprovedTotalValue: pdaTotal,
        subService: mergedSubServices,
        info_msg: meraki?.info_msg || ""
      });
    }) || [];
    if (this.withPda && pdaApprovedValue?.items) {
      const pdaOnlyServices = pdaApprovedValue.items.filter((pdaService) => {
        return !mergedServices.some((mergedService) => mergedService.service === pdaService.service);
      });
      pdaOnlyServices.forEach((pdaService) => {
        const mergedSubServices = (pdaService?.subService || []).map((sub) => __spreadProps(__spreadValues({}, sub), {
          systemSubTotal: 0,
          // No system value for PDA-only services
          systemFormulaInputs: [],
          systemMovement: "",
          pdaApprovedSubTotalValue: sub?.sub_total || 0
        }));
        mergedServices.push(__spreadProps(__spreadValues({}, pdaService), {
          systemTotal: 0,
          // No system value for PDA-only services
          total: 0,
          // No agent value initially
          pa_remark: "",
          meraki_feedback: "",
          meraki_remark_client: "",
          client_comment: "",
          client_option: "",
          negotiate: "N",
          agreed: "Y",
          display_to_client: "N",
          pdaTotal: pdaService.total || 0,
          pdaApprovedTotalValue: pdaService.total || 0,
          subService: mergedSubServices,
          info_msg: ""
        }));
      });
    }
    return mergedServices;
  }
  onSelect(fieldName, event) {
    if (fieldName === "Country") {
      if (event.value === this.previousCountryId) {
        return;
      }
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        disableClose: true,
        panelClass: "sweet-alert-style",
        data: {
          header: "Country Change Warning",
          text: "Changing the country will reset the services. Do you want to continue?"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.previousCountryId = event.value;
          this.isPortChanged = true;
          const currency = getCurrencyFromCountry(this.countryList, event.value);
          this.portAgentForm.patchValue({
            fda_currency_from: currency
          });
          this.loader.show();
          this.portService.getPortsByCountryId(event.value).subscribe({
            next: (ports) => {
              this.portList = ports;
              this.fields.forEach((field) => {
                if (field.name === "Port") {
                  field.options = this.portList.map((port) => ({
                    port_id: port.port_id,
                    name: port.name
                  }));
                }
              });
              this.filteredOptions["port_id"] = this.portList.map((port) => ({
                port_id: port.port_id,
                name: port.name
              }));
              this.loader.hide();
            },
            error: (err) => {
              this.portList = [];
              this.filteredOptions["port_id"] = [];
              this.fields.forEach((field) => {
                if (field.name === "Port") {
                  field.options = this.portList.map((port) => ({
                    port_id: port.port_id,
                    name: port.name
                  }));
                }
              });
              this.loader.hide();
              this.errMsg = err?.error?.error || "Something went wrong please try again later.";
              this.snackBar.showError(this.errMsg);
            }
          });
          this.addedFields = [];
          this.portAgentForm.patchValue({
            port_id: null,
            purpose_id: null,
            converted_curr_from: null,
            pmt_curr_from: null
          });
          this.serviceList = new PA_Rules();
          this.merakiServiceList = new PA_Rules();
          this.agentServiceGrandTotal = 0;
          this.merakiServiceGrandTotal = 0;
          this.datasource.data = [];
          this.previousPurposeId = null;
          this.previousPortId = null;
          removeAddedFieldsAndControls(this.portAgentForm, this.addedFields, this.fields);
        } else {
          this.portAgentForm.get("country_id")?.setValue(this.previousCountryId, { emitEvent: false });
          this.portAgentForm.get("port_id")?.setValue(this.previousPortId, { emitEvent: false });
          this.portAgentForm.get("purpose_id")?.setValue(this.previousPurposeId, { emitEvent: false });
          const purposeId = this.portAgentForm.get("purpose_id")?.value;
          const purpose = getPurposeName(this.purposeList, purposeId);
          if (purpose) {
            this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          }
          this.populateServicesFromList();
        }
      });
    } else if (fieldName === "Vessel") {
      const control = this.portAgentForm.get("vessel_id");
      const value = control?.value;
      const selectedVessel = this.vesselList.filter((vessel) => vessel.vessel_id === value);
      if (selectedVessel.length > 0) {
        const vessel = selectedVessel[0];
        this.portAgentForm.patchValue({
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
        company_id: this.portAgentForm.get("client_id")?.value,
        fields: ["assigned_unassigned"]
      };
      this.clientService.VslListFromDb(vslpayload).subscribe({
        next: (response) => {
          this.vesselList = response.assigned_vessels || [];
          this.formatFieldData(this.modFields);
          this.loader.hide();
        },
        error: (error) => {
          this.vesselList = [];
          this.errMsg = error?.error?.error || "Failed to fetch vessel details";
          this.snackBar.showError(this.errMsg);
          this.loader.hide();
        }
      });
    } else if (fieldName === "Port") {
      const port_id = event.value;
      if (!this.previousPortId) {
        this.previousPortId = port_id;
        this.tariffrulesByPort(port_id);
        this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
        if (this.portIdValue === port_id) {
          this.portChange = "N";
        } else {
          this.portChange = "Y";
        }
        return;
      }
      if (port_id === this.previousPortId) {
        return;
      }
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        disableClose: true,
        panelClass: "sweet-alert-style",
        data: {
          header: "Port Change Warning",
          text: "Changing the port will reset the services. Do you want to continue?"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.previousPortId = port_id;
          this.isPortChanged = true;
          this.addedFields = [];
          this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
          this.tariffrulesByPort(port_id);
          if (this.portIdValue === port_id) {
            this.portChange = "N";
          } else {
            this.portChange = "Y";
          }
          this.portAgentForm.get("purpose_id")?.setValue(null);
          this.serviceList = new PA_Rules();
          this.merakiServiceList = new PA_Rules();
          this.agentServiceGrandTotal = 0;
          this.merakiServiceGrandTotal = 0;
          this.datasource.data = [];
          this.previousPurposeId = null;
          removeAddedFieldsAndControls(this.portAgentForm, this.addedFields, this.fields);
        } else {
          this.portAgentForm.patchValue({
            port_id: this.previousPortId
          }, { emitEvent: false });
          this.portAgentForm.get("purpose_id")?.setValue(this.previousPurposeId, { emitEvent: false });
          const purposeId = this.portAgentForm.get("purpose_id")?.value;
          const purpose = getPurposeName(this.purposeList, purposeId);
          if (purpose) {
            this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          }
          this.populateServicesFromList();
        }
      });
    } else if (fieldName === "Purpose") {
      this.isPurposeChanged = true;
      const purposeId = event.value;
      const portId = this.portAgentForm.get("port_id")?.value;
      if (!this.previousPurposeId && portId) {
        this.previousPurposeId = purposeId;
        return;
      }
      if (this.previousPurposeId && purposeId !== this.previousPurposeId) {
        this.previousServiceData = {
          serviceList: JSON.parse(JSON.stringify(this.serviceList)),
          mergedServiceList: JSON.parse(JSON.stringify(this.mergedServiceList)),
          serviceFormArray: this.serviceListFormArray.getRawValue(),
          agentServiceGrandTotal: this.agentServiceGrandTotal
        };
        this.showDataLostWarning(purposeId);
      } else {
        this.previousPurposeId = purposeId;
        if (portId && this.isPortChanged) {
          this.tariffrulesByPort(portId);
          this.isPortChanged = false;
        } else {
          const purpose = getPurposeName(this.purposeList, purposeId);
          if (purpose) {
            this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
            if (this.serviceList.items.length > 0) {
              this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList, this.PDAapprovedValue);
              this.populateServicesFromList();
            } else {
              this.snackBar.showError("No Services found for the selected purpose");
              this.datasource.data = [];
            }
          }
        }
      }
    } else if (fieldName === "Converted Currency To") {
      const value = event.value;
      this.displayConvertedToCurrency = this.fromCurrency !== value && this.toCurrency !== value;
      this.convertedToCurrencyValue = value;
      this.PaymentFromCurrencyList = [];
      this.PaymentFromCurrencyList = [this.fromCurrency, this.toCurrency];
      if (!this.PaymentFromCurrencyList.includes(value)) {
        this.PaymentFromCurrencyList.push(value);
      }
    } else if (fieldName === "Payment Currency From") {
      this.recalculateTotals();
    }
  }
  showDataLostWarning(newPurposeId) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: { header: "Data Loss Warning", text: "Are you sure you want to change the purpose? This will reset the services." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.previousPurposeId = newPurposeId;
        const port_id = this.portAgentForm.get("port_id")?.value;
        this.isPurposeChanged = true;
        this.tariffrulesByPort(port_id);
        this.serviceList = new PA_Rules();
        this.mergedServiceList = [];
        this.serviceListFormArray.clear();
        this.datasource.data = [];
        this.agentServiceGrandTotal = 0;
        this.merakiServiceGrandTotal = 0;
        this.portAgentForm.patchValue({
          conversion_rate: null,
          currency_conversion: null,
          fda_amount: null,
          balance_due: null
        });
        this.agentServiceGrandTotal = 0;
        const purpose = getPurposeName(this.purposeList, newPurposeId);
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          if (this.serviceList.items.length > 0) {
            this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList, this.PDAapprovedValue);
            this.populateServicesFromList();
          }
        }
      } else {
        this.isPurposeInternalChange = true;
        this.portAgentForm.get("purpose_id")?.setValue(this.previousPurposeId, { emitEvent: false });
        if (this.previousServiceData) {
          this.serviceList = this.previousServiceData.serviceList;
          this.mergedServiceList = this.previousServiceData.mergedServiceList;
          this.agentServiceGrandTotal = this.previousServiceData.agentServiceGrandTotal;
          this.serviceListFormArray.clear();
          this.previousServiceData.serviceFormArray.forEach((serviceData) => {
            const subServiceArray = this.fb.array((serviceData.subService || []).map((sub) => this.fb.group({
              SNO: [serviceData.SNO],
              name: [sub.name],
              purpose: [sub.purpose],
              basic_value: [sub.basic_value],
              calculated_basic_value: [sub.calculated_basic_value],
              hide: [sub.hide],
              unique_key: [sub.unique_key],
              movement: [sub.movement],
              tariff_percent: [sub.tariff_percent],
              formula_result: [sub.formula_result],
              optional: [sub.optional === "Y" || sub.optional === true],
              operational_flag: [sub.operational_flag],
              sub_total: [sub.sub_total],
              formula_inputs: [sub.formula_inputs],
              isSubService: [true],
              systemMovement: [sub.systemMovement],
              systemSubTotal: [sub.systemSubTotal],
              systemFormulaInputs: [sub.systemFormulaInputs],
              pdaApprovedSubTotalValue: [sub.pdaApprovedSubTotalValue],
              formattedSystemMovement: [sub.formattedSystemMovement]
            })));
            const serviceGroup = this.fb.group({
              SNO: [serviceData.SNO],
              code: [serviceData.code],
              total: [serviceData.total],
              service: [serviceData.service],
              purpose: [serviceData.purpose],
              pa_remark: [serviceData.pa_remark],
              meraki_feedback: [serviceData.meraki_feedback],
              meraki_remark_client: [serviceData.meraki_remark_client],
              client_comment: [serviceData.client_comment],
              client_option: [serviceData.client_option],
              info_msg: [serviceData.info_msg],
              negotiate: [serviceData.negotiate],
              agreed: [serviceData.agreed],
              display_to_client: [serviceData.display_to_client],
              subService: subServiceArray,
              isSubService: [false],
              expanded: [serviceData.expanded],
              agreedOrNegotiate: [serviceData.agreedOrNegotiate],
              systemTotal: [serviceData.systemTotal],
              pdaApprovedTotalValue: [serviceData.pdaApprovedTotalValue],
              serviceIndex: [serviceData.serviceIndex],
              formated_client_comment: [serviceData.formated_client_comment]
            });
            this.serviceListFormArray.push(serviceGroup);
          });
          this.updateDatasource();
        }
        this.isPurposeInternalChange = false;
      }
    });
  }
  transformJsonData(formData) {
    const merakiPdaData = this.fdaEditData.fda.meraki_pda_data;
    const portAgentFdaData = this.fdaEditData.fda.portagent_fda_data;
    return {
      disbursement_seq: this.fdaEditData.disbursement_seq,
      disbursement_id: this.fdaEditData.disbursement_id,
      port_tariff_rule: this.isPurposeChanged && this.isPortChanged ? this.tariffRules : this.tariffRules?.items?.length > 0 ? this.UpdateModifiedMovementToTariifRules() : null,
      client_id: formData.client_id,
      portChange: this.portChange,
      portagent_id: formData.portagent_id,
      country_id: this.fdaEditData.country_id,
      port_id: this.fdaEditData.port_id,
      pda_vsl_id: this.fdaEditData.vsl_id,
      cargo_id: formData.cargo_id,
      voyage: formData.voyage,
      roe: formData.fda_roe,
      eta: formData.eta ? formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? formatToLocalISOString(formData.etd) : null,
      fda_currency_from: formData.fda_currency_from,
      fda_currency_to: formData.fda_currency_to,
      credit_note: formData.credit_note,
      grand_total: formData.fda_amount,
      conversion_rate: formData.conversion_rate,
      currency_conversion: formData.currency_conversion,
      balance_due: formData.balance_due,
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
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
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      fda_custom_calculation: this.fdaEditData?.fda?.fda_custom_calculation ? "Y" : "N",
      meraki_pda_data: {
        disbursement_seq: merakiPdaData?.disbursement_seq || null,
        voyage: merakiPdaData?.voyage || null,
        eta: merakiPdaData?.eta || null,
        etd: merakiPdaData?.etd || null,
        fda_roe: merakiPdaData?.fda_roe || null,
        vessel_stay: merakiPdaData?.vessel_stay || null,
        client: {
          client_id: merakiPdaData?.client.client_id || null,
          name: merakiPdaData?.client.name || "",
          address: merakiPdaData?.client.address || ""
        },
        port_agent: {
          name: merakiPdaData?.port_agent?.name || "",
          address: merakiPdaData?.port_agent.address || "",
          bank_details: {
            country_name: merakiPdaData?.port_agent.bank_details.company_name || "",
            beneficiary_acc_holder_name: merakiPdaData?.port_agent.bank_details.beneficiary_acc_holder_name || "",
            bank_name: merakiPdaData?.port_agent.bank_details.bank_name,
            correspondent_account_number: merakiPdaData?.port_agent.bank_details.correspondent_account_number || "",
            current_account_number: merakiPdaData?.port_agent.bank_details.current_account_number || "",
            ifsc_code: merakiPdaData?.port_agent.bank_details.ifsc_code || "",
            bik_code: merakiPdaData?.port_agent.bank_details.bik_code || "",
            swift_code: merakiPdaData?.port_agent.bank_details.swift_code || "",
            currency: merakiPdaData?.port_agent.bank_details.currency || "",
            inn_code: merakiPdaData?.port_agent.bank_details.inn_code || "",
            iban_number: merakiPdaData?.port_agent.bank_details.iban_number || "",
            bic_code: merakiPdaData?.port_agent.bank_details.bic_code || "",
            branch_address: merakiPdaData?.port_agent.bank_details.branch_address || ""
          }
        },
        port: {
          port_id: merakiPdaData?.port.potr_id || null,
          name: merakiPdaData?.port.name || ""
        },
        country: {
          country_id: merakiPdaData?.country.country_id || "",
          name: merakiPdaData?.country.name || ""
        },
        purpose: {
          purpose_id: merakiPdaData?.purpose.purpose_id || "",
          name: merakiPdaData?.purpose.name || ""
        },
        cargo: {
          cargo_id: merakiPdaData?.cargo.cargo_id || "",
          type: merakiPdaData?.cargo.type || ""
        },
        services: this.transFormServiceData(this.merakiServiceList, "merakiData")
      },
      portagent_fda_data: {
        disbursement_seq: portAgentFdaData?.disbursement_seq,
        voyage: formData.voyage,
        eta: formData.eta,
        etd: formData.etd,
        fda_roe: formData.fda_roe,
        vessel_stay: formData.vessel_stay,
        client: {
          client_id: formData.client_id,
          name: this.clientList.find((client) => client.company_id === formData.client_id)?.company_name || "",
          address: this.clientList.find((client) => client.company_id === formData.client_id)?.address || ""
        },
        port_agent: {
          name: portAgentFdaData?.port_agent.name,
          address: portAgentFdaData?.port_agent.address,
          bank_details: {
            country_name: portAgentFdaData?.port_agent.bank_details.company_name,
            beneficiary_acc_holder_name: portAgentFdaData?.port_agent.bank_details.beneficiary_acc_holder_name,
            bank_name: portAgentFdaData?.port_agent.bank_details.bank_name,
            correspondent_account_number: portAgentFdaData?.port_agent.bank_details.correspondent_account_number,
            current_account_number: portAgentFdaData?.port_agent.bank_details.current_account_number,
            ifsc_code: portAgentFdaData?.port_agent.bank_details.ifsc_code,
            bik_code: portAgentFdaData?.port_agent.bank_details.bik_code,
            swift_code: portAgentFdaData?.port_agent.bank_details.swift_code,
            currency: portAgentFdaData?.port_agent.bank_details.currency,
            inn_code: portAgentFdaData?.port_agent.bank_details.inn_code,
            iban_number: portAgentFdaData?.port_agent.bank_details.iban_number,
            bic_code: portAgentFdaData?.port_agent.bank_details.bic_code,
            branch_address: portAgentFdaData?.port_agent.bank_details.branch_address
          }
        },
        port: {
          port_id: this.fdaEditData.port_id,
          name: this.portList.find((port) => port.port_id === formData.port_id)?.name || ""
        },
        country: {
          country_id: formData.country_id,
          name: this.countryList.find((country) => country.country_id === formData.country_id)?.name || ""
        },
        purpose: {
          purpose_id: formData.purpose_id,
          name: this.purposeList.find((purpose) => purpose.purpose_id === formData.purpose_id)?.name || ""
        },
        cargo: {
          cargo_id: formData.cargo_id,
          type: this.cargoList.find((cargo) => cargo.cargo_id === formData.cargo_id)?.type || ""
        },
        fda_custom_calculation: this.fdaEditData?.fda?.fda_custom_calculation ? "Y" : "N",
        conversion_rate: formData.conversion_rate || null,
        currency_conversion: formData.currency_conversion || null,
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
          dwt: formData.dwt,
          type: formData.type,
          additional_properties: this.getAdditionalPropertiesFromForm(),
          additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.portAgentForm, this.fields)
        },
        services: this.isPurposeChanged ? this.serviceList : this.transFormServiceData(this.serviceList, "agentData")
      },
      email_to: this.fdaEditData.fda.email_to || null,
      email_cc: this.fdaEditData.fda.email_cc || null,
      file_list: this.fileList.filter((file) => file.sync === "N").map((file) => file.file_id) || [],
      converted_curr_from: formData.converted_curr_from || null,
      converted_curr_to: formData.converted_curr_to || null,
      conversion_fda_rate: formData.conversion_fda_rate || null,
      pmt_curr_from: formData.pmt_curr_from || null,
      pmt_curr_to: formData.pmt_curr_to || null,
      is_rules_refreshed: this.rulesWereRefreshed ? "Y" : "N"
    };
  }
  transformJsonDataToFdaSave(formData) {
    const merakiPdaData = this.fdaEditData?.fda?.meraki_pda_data;
    const portAgentFdaData = this.fdaEditData.fda.portagent_fda_data;
    return {
      disbursement_seq: this.fdaEditData.disbursement_seq,
      disbursement_id: this.fdaEditData.disbursement_id,
      port_tariff_rule: this.isPurposeChanged && this.isPortChanged ? this.tariffRules : this.tariffRules?.items?.length > 0 ? this.UpdateModifiedMovementToTariifRules() : null,
      cargo_id: formData?.cargo_id || "",
      purpose_id: formData?.purpose_id || "",
      client_id: formData.client_id,
      portagent_id: formData.portagent_id,
      country_id: this.fdaEditData.country_id,
      port_id: this.fdaEditData.port_id,
      pda_vsl_id: this.fdaEditData.vsl_id,
      voyage: formData.voyage,
      roe: formData.fda_roe,
      eta: formData.eta ? formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? formatToLocalISOString(formData.etd) : null,
      fda_currency_from: formData.fda_currency_from,
      fda_currency_to: formData.fda_currency_to,
      credit_note: formData.credit_note,
      fda_amount: formData.fda_amount,
      conversion_rate: formData.conversion_rate,
      currency_conversion: formData.currency_conversion,
      balance_due: formData.balance_due,
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      meraki_pda_amount: this.getMerakiPdaAmount() || 0,
      // portagent_fda_amount: this.getConvertedSystemAndAgentTotal('agent') || 0,
      portagent_fda_amount: formData.currency_conversion != null ? Number(formData.currency_conversion).toFixed(2) : null,
      vessel: {
        vsl_id: String(formData.vessel_id),
        imo_number: formData.imo_number,
        name: formData.vessel,
        grt: String(formData.grt),
        rgrt: String(formData.rgrt),
        nrt: String(formData.nrt),
        loa: String(formData.loa),
        beam: String(formData.beam),
        depth: String(formData.depth),
        dwt: String(formData.dwt),
        type: formData.type,
        additional_properties: this.getAdditionalPropertiesFromForm()
      },
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      fda_custom_calculation: this.fdaEditData?.fda?.fda_custom_calculation ? "Y" : "N",
      meraki_pda_data: {
        disbursement_seq: merakiPdaData?.disbursement_seq || null,
        voyage: merakiPdaData?.voyage || null,
        eta: merakiPdaData?.eta || null,
        etd: merakiPdaData?.etd || null,
        fda_roe: merakiPdaData?.fda_roe || null,
        vessel_stay: merakiPdaData?.vessel_stay || null,
        client: {
          client_id: merakiPdaData?.client.client_id || null,
          name: merakiPdaData?.client.name || "",
          address: merakiPdaData?.client.address || ""
        },
        port_agent: {
          name: merakiPdaData?.port_agent.name || "",
          address: merakiPdaData?.port_agent.address || "",
          bank_details: {
            country_name: merakiPdaData?.port_agent.bank_details.company_name || "",
            beneficiary_acc_holder_name: merakiPdaData?.port_agent.bank_details.beneficiary_acc_holder_name || "",
            bank_name: merakiPdaData?.port_agent.bank_details.bank_name,
            correspondent_account_number: merakiPdaData?.port_agent.bank_details.correspondent_account_number || "",
            current_account_number: merakiPdaData?.port_agent.bank_details.current_account_number || "",
            ifsc_code: merakiPdaData?.port_agent.bank_details.ifsc_code || "",
            bik_code: merakiPdaData?.port_agent.bank_details.bik_code || "",
            swift_code: merakiPdaData?.port_agent.bank_details.swift_code || "",
            currency: merakiPdaData?.port_agent.bank_details.currency || "",
            inn_code: merakiPdaData?.port_agent.bank_details.inn_code || "",
            iban_number: merakiPdaData?.port_agent.bank_details.iban_number || "",
            bic_code: merakiPdaData?.port_agent.bank_details.bic_code || "",
            branch_address: merakiPdaData?.port_agent.bank_details.branch_address || ""
          }
        },
        port: {
          port_id: merakiPdaData?.port.potr_id || null,
          name: merakiPdaData?.port.name || ""
        },
        country: {
          country_id: merakiPdaData?.country.country_id || "",
          name: merakiPdaData?.country.name || ""
        },
        purpose: {
          purpose_id: merakiPdaData?.purpose.purpose_id || "",
          name: merakiPdaData?.purpose.name || ""
        },
        cargo: {
          cargo_id: merakiPdaData?.cargo.cargo_id || "",
          type: merakiPdaData?.cargo.type || ""
        },
        services: this.transFormServiceData(this.merakiServiceList, "merakiData")
      },
      portagent_fda_data: {
        disbursement_seq: portAgentFdaData?.disbursement_seq,
        voyage: formData.voyage,
        eta: formData.eta,
        etd: formData.etd,
        fda_roe: formData.fda_roe,
        vessel_stay: formData.vessel_stay,
        client: {
          client_id: formData.client_id,
          name: this.clientList.find((client) => client.company_id === formData.client_id)?.company_name || "",
          address: this.clientList.find((client) => client.company_id === formData.client_id)?.address || ""
        },
        port_agent: {
          name: portAgentFdaData?.port_agent.name,
          address: portAgentFdaData?.port_agent.address,
          bank_details: {
            country_name: portAgentFdaData?.port_agent.bank_details.company_name,
            beneficiary_acc_holder_name: portAgentFdaData?.port_agent.bank_details.beneficiary_acc_holder_name,
            bank_name: portAgentFdaData?.port_agent.bank_details.bank_name,
            correspondent_account_number: portAgentFdaData?.port_agent.bank_details.correspondent_account_number,
            current_account_number: portAgentFdaData?.port_agent.bank_details.current_account_number,
            ifsc_code: portAgentFdaData?.port_agent.bank_details.ifsc_code,
            bik_code: portAgentFdaData?.port_agent.bank_details.bik_code,
            swift_code: portAgentFdaData?.port_agent.bank_details.swift_code,
            currency: portAgentFdaData?.port_agent.bank_details.currency,
            inn_code: portAgentFdaData?.port_agent.bank_details.inn_code,
            iban_number: portAgentFdaData?.port_agent.bank_details.iban_number,
            bic_code: portAgentFdaData?.port_agent.bank_details.bic_code,
            branch_address: portAgentFdaData?.port_agent.bank_details.branch_address
          }
        },
        port: {
          port_id: this.fdaEditData.port_id,
          name: this.portList.find((port) => port.port_id === formData.port_id)?.name || ""
        },
        country: {
          country_id: formData.country_id,
          name: this.countryList.find((country) => country.country_id === formData.country_id)?.name || ""
        },
        purpose: {
          purpose_id: formData.purpose_id,
          name: this.purposeList.find((purpose) => purpose.purpose_id === formData.purpose_id)?.name || ""
        },
        cargo: {
          cargo_id: formData.cargo_id,
          type: this.cargoList.find((cargo) => cargo.cargo_id === formData.cargo_id)?.type || ""
        },
        fda_custom_calculation: this.fdaEditData?.fda?.fda_custom_calculation ? "Y" : "N",
        conversion_rate: formData.conversion_rate || null,
        currency_conversion: formData.currency_conversion || null,
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
          dwt: formData.dwt,
          type: formData.type,
          additional_properties: this.getAdditionalPropertiesFromForm(),
          additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.portAgentForm, this.fields)
        },
        services: this.transFormServiceData(this.serviceList, "agentData")
      },
      email_to: this.fdaEditData.fda.email_to || null,
      email_cc: this.fdaEditData.fda.email_cc || null,
      file_list: this.fileList.filter((file) => file.sync === "N").map((file) => file.file_id) || [],
      converted_curr_from: formData.converted_curr_from || null,
      converted_curr_to: formData.converted_curr_to || null,
      conversion_fda_rate: formData.conversion_fda_rate || null,
      pmt_curr_from: formData.pmt_curr_from || null,
      pmt_curr_to: formData.pmt_curr_to || null,
      is_rules_refreshed: this.rulesWereRefreshed ? "Y" : "N"
    };
  }
  transFormServiceData(formData, serviceData) {
    return {
      items: this.serviceListFormArray.controls.map((ctrl) => {
        let value = ctrl.getRawValue();
        if (value.code === null && serviceData === "merakiData") {
          return null;
        }
        return {
          SNO: value.SNO ?? 0,
          code: value.code ?? null,
          total: serviceData === "agentData" ? value.total ?? null : value.systemTotal ?? null,
          service: value.service ?? null,
          purpose: value.purpose ?? null,
          pa_remark: serviceData === "agentData" ? value.pa_remark : null,
          meraki_feedback: serviceData === "agentData" ? value.meraki_feedback : null,
          meraki_remark_client: serviceData === "agentData" ? value.meraki_remark_client : null,
          client_comment: serviceData === "agentData" ? value.client_comment : null,
          client_option: serviceData === "agentData" ? value.client_option : null,
          info_msg: serviceData === "agentData" ? value.info_msg : null,
          negotiate: value.agreedOrNegotiate === "Negotiate" && serviceData === "agentData" ? "Y" : "N",
          agreed: value.agreedOrNegotiate === "Agreed" && serviceData === "agentData" ? "Y" : "N",
          display_to_client: serviceData === "agentData" ? value.display_to_client : null,
          subService: (value.subService || []).map((sub) => ({
            name: sub.name ?? null,
            purpose: sub.purpose ?? null,
            basic_value: sub.basic_value ?? null,
            calculated_basic_value: serviceData === "merakiData" ? sub.calculated_basic_value : null,
            hide: sub.hide ?? "N",
            unique_key: sub.unique_key ?? null,
            movement: serviceData === "merakiData" ? replaceMovementPart(sub.movement, 1, sub.formattedSystemMovement) || "1" : sub.movement,
            tariff_percent: sub.tariff_percent ?? 1,
            formula_result: sub.formula_result ?? "Basic Value * movement * Tariff %",
            optional: sub.optional ? "Y" : "N",
            operational_flag: sub.operational_flag ?? "+",
            sub_total: serviceData === "agentData" ? sub.sub_total ?? 0 : sub.systemSubTotal ?? 0,
            formula_inputs: sub.formula_inputs ?? null,
            reference: sub.reference ?? "N"
          }))
        };
      }).filter((item) => item !== null),
      grand_total: serviceData === "agentData" ? this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal.toFixed(2)) : null : this.merakiServiceGrandTotal !== null ? Number(this.merakiServiceGrandTotal.toFixed(2)) : null
    };
  }
  // method to calculate the agentService total and grandTotal
  calculateAgentServiceGrandTotal() {
    this.agentServiceGrandTotal = this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const totalValue = value.total != null ? Number(value.total) : 0;
      const total = sum + totalValue;
      return total;
    }, 0);
    if (this.fdaStatus !== 7) {
      this.recalculateTotals();
    }
  }
  // Method to handle agent value changes and update grand total dynamically
  onAgentValueChange(service) {
    if (service) {
      this.checkAndUpdateToggleStatus(service);
    }
    this.calculateAgentServiceGrandTotal();
    this.getSystemAndAgentTotal("agent", "ToCurrency");
    this.getSystemAndAgentTotal("agent", "convertedToCurrency");
    this.calculateSystemAndAgentValueWithRoe(service, "agent", "ToCurrency");
    this.calculateSystemAndAgentValueWithRoe(service, "agent", "convertedToCurrency");
  }
  // Method to automatically set toggle to negotiate if agent value is greater than other values
  checkAndUpdateToggleStatus(service) {
    const agentValue = Number(service.get("total")?.value || 0);
    const systemValue = Number(service.get("systemTotal")?.value || 0);
    const pdaApprovedValue = Number(service.get("pdaApprovedTotalValue")?.value || 0);
    let shouldNegotiate = false;
    if (this.withPda) {
      shouldNegotiate = agentValue > systemValue || agentValue > pdaApprovedValue;
    } else {
      shouldNegotiate = agentValue > systemValue;
    }
    if (shouldNegotiate) {
      service.get("negotiate")?.setValue("Y");
      service.get("agreed")?.setValue("N");
      service.get("agreedOrNegotiate")?.setValue("Negotiate");
    } else {
      service.get("negotiate")?.setValue("N");
      service.get("agreed")?.setValue("Y");
      service.get("agreedOrNegotiate")?.setValue("Agreed");
    }
    this.isNegotiateSelected = this.datasource.data.some((serviceItem) => serviceItem.get("negotiate")?.value === "Y");
    this.updateDatasource();
  }
  // Method to update toggle status for all services (used after recalculation)
  updateAllToggleStatuses() {
    this.serviceListFormArray.controls.forEach((service) => {
      const serviceGroup = service;
      const agentValue = Number(serviceGroup.get("total")?.value || 0);
      const systemValue = Number(serviceGroup.get("systemTotal")?.value || 0);
      const pdaApprovedValue = Number(serviceGroup.get("pdaApprovedTotalValue")?.value || 0);
      let shouldNegotiate = false;
      if (this.withPda) {
        shouldNegotiate = agentValue > systemValue || agentValue > pdaApprovedValue;
      } else {
        shouldNegotiate = agentValue > systemValue;
      }
      if (shouldNegotiate) {
        serviceGroup.get("negotiate")?.setValue("Y");
        serviceGroup.get("agreed")?.setValue("N");
        serviceGroup.get("agreedOrNegotiate")?.setValue("Negotiate");
      } else {
        serviceGroup.get("negotiate")?.setValue("N");
        serviceGroup.get("agreed")?.setValue("Y");
        serviceGroup.get("agreedOrNegotiate")?.setValue("Agreed");
      }
    });
    this.isNegotiateSelected = this.serviceListFormArray.controls.some((serviceItem) => serviceItem.get("negotiate")?.value === "Y");
    this.updateDatasource();
  }
  recalculateTotals() {
    if (this.fdaStatus === 7) {
      return;
    }
    const fdaRoe = Number(this.portAgentForm.get("fda_roe")?.value) || 1;
    const conversionRoe = Number(this.portAgentForm.get("conversion_fda_rate")?.value) || 1;
    const pmtCurrFrom = this.portAgentForm.get("pmt_curr_from")?.value;
    let grandTotal = null;
    if (this.fromCurrency === pmtCurrFrom) {
      grandTotal = this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal) : null;
    } else if (this.toCurrency === pmtCurrFrom) {
      grandTotal = this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal * fdaRoe) : null;
    } else if (this.convertedToCurrency === pmtCurrFrom && this.convertedFromCurrency === this.toCurrency) {
      grandTotal = this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal * fdaRoe * conversionRoe) : null;
    } else if (this.convertedToCurrency === pmtCurrFrom) {
      grandTotal = this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal * conversionRoe) : null;
    }
    const creditNote = Number(this.portAgentForm.get("credit_note")?.value || null);
    const conversionRate = Number(this.portAgentForm.get("conversion_rate")?.value || null);
    const pdaRemittance = Number(this.pdaRemittance || null);
    const adjustedTotal = grandTotal !== null ? grandTotal - creditNote : null;
    const currencyConversion = adjustedTotal !== null ? adjustedTotal * conversionRate : null;
    const balanceDue = currencyConversion !== null ? currencyConversion - pdaRemittance : null;
    this.portAgentForm.patchValue({
      fda_amount: adjustedTotal !== null ? adjustedTotal.toFixed(2) : null,
      currency_conversion: currencyConversion !== null ? currencyConversion.toFixed(2) : null,
      balance_due: balanceDue !== null ? balanceDue.toFixed(2) : null
    }, { emitEvent: false });
  }
  // method to calculate the meraki grand total
  calculateMerakiServicegrandTotal() {
    this.merakiServiceGrandTotal = this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const totalValue = value.systemTotal != null ? Number(value.systemTotal) : null;
      return totalValue !== null ? sum + totalValue : sum;
    }, 0);
    this.merakiServiceGrandTotal = this.merakiServiceGrandTotal !== null ? parseFloat(this.merakiServiceGrandTotal.toFixed(2)) : null;
  }
  // method to push the additional properties to the addedFields from the portAgentForm
  getAdditionalPropertiesFromForm() {
    const additionalProps = {};
    const dateFields = this.modFields.filter((field) => field.type === "date").map((field) => field.name);
    this.addedFields.forEach(({ fieldName, controlName }) => {
      let value = this.portAgentForm.get(controlName)?.value ?? null;
      additionalProps[fieldName] = value;
      if (dateFields.includes(fieldName) && value) {
        additionalProps[fieldName] = formatToLocalISOString(value);
      }
    });
    return additionalProps;
  }
  // method to get the port tariff rule based on port id
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
        this.tariffRules = res?.data[0]?.rules;
        this.additionalFieldsFromRules = res?.data[0]?.vessel_fields || [];
        const purposeId = this.portAgentForm.get("purpose_id")?.value;
        const purpose = getPurposeName(this.purposeList, purposeId);
        if (this.isRefreshingRules) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          const port_id2 = this.portAgentForm.get("port_id")?.value;
          this.addedFields = addAdditionalFieldsToFieldsArray(port_id2, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
          this.recalculateData();
        } else {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          if (this.isPurposeChanged) {
            this.recalculateData();
          }
        }
        this.loader.hide();
      },
      error: (err) => {
        this.isRefreshingRules = false;
        this.loader.hide();
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  // method to enable and disable the fileds based on requirement
  disableFields(withPda, portAgentReturnStatus) {
    if (!withPda) {
      this.portAgentForm.get("portagent_id")?.disable();
      this.portAgentForm.get("client_id")?.disable();
    } else if (withPda) {
      this.portAgentForm.get("client_id")?.disable();
      this.portAgentForm.get("portagent_id")?.disable();
      this.portAgentForm.get("country_id")?.disable();
      this.portAgentForm.get("port_id")?.disable();
      this.portAgentForm.get("vessel_id")?.disable();
      this.portAgentForm.get("purpose_id")?.disable();
    }
  }
  onCheckboxClick(service, subServiceElement, subServiceIndex) {
    if (!service)
      return;
    const subServiceArray = service.get("subService");
    const subServiceControl = subServiceArray.at(subServiceIndex);
    if (!subServiceControl)
      return;
    const currentOptional = subServiceControl.get("optional")?.value;
    subServiceControl.get("optional")?.setValue(!currentOptional);
    let newSystemTotal = 0;
    subServiceArray.controls.forEach((subCtrl) => {
      const isOptional = subCtrl.get("optional")?.value;
      let subTotal = 0;
      if (!isOptional) {
        subTotal = Number(subCtrl.get("systemSubTotal")?.value || 0);
        newSystemTotal += subTotal;
      }
    });
    newSystemTotal = Math.max(0, newSystemTotal);
    service.get("systemTotal")?.setValue(parseFloat(newSystemTotal.toFixed(2)));
    this.calculateMerakiServicegrandTotal();
  }
  // Method to recalculate system total based on subservice optional status
  recalculateSystemTotal(service) {
    const subServiceArray = service.get("subService");
    let newSystemTotal = 0;
    subServiceArray.controls.forEach((subCtrl) => {
      const isOptional = subCtrl.get("optional")?.value;
      const subTotal = Number(subCtrl.get("systemSubTotal")?.value || 0);
      if (!isOptional) {
        newSystemTotal += subTotal;
      }
    });
    newSystemTotal = Math.max(0, newSystemTotal);
    service.patchValue({ systemTotal: newSystemTotal.toFixed(2) });
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
  // Method to handle the change in selection ('Negotiate' or 'Agreed')
  onSelectionChange(event) {
    const services = this.serviceListFormArray.value;
    const isAnyServiceNegotiate = services.some((service) => service.agreedOrNegotiate === "Negotiate");
    if (isAnyServiceNegotiate) {
      this.isNegotiateSelected = true;
    } else {
      this.isNegotiateSelected = false;
    }
  }
  updateAgreedOrNegotiate(element) {
    const isSub = element.get("isSubService")?.value;
    const agentValue = isSub ? element.get("sub_total")?.value : element.get("total")?.value;
    const systemValue = isSub ? element.get("systemSubTotal")?.value : element.get("systemTotal")?.value;
    if (agentValue > systemValue) {
      element.get("agreedOrNegotiate")?.setValue("Negotiate");
    } else {
      element.get("agreedOrNegotiate")?.setValue("Agreed");
    }
  }
  onAgreedNegotiateToggle(serviceFormGroup, isNegotiate) {
    serviceFormGroup.get("negotiate")?.setValue(isNegotiate ? "Y" : "N");
    serviceFormGroup.get("agreed")?.setValue(isNegotiate ? "N" : "Y");
    serviceFormGroup.get("agreedOrNegotiate")?.setValue(isNegotiate ? "Negotiate" : "Agreed");
    this.isNegotiateSelected = this.datasource.data.some((service) => service.get("negotiate")?.value === "Y");
    this.updateDatasource();
  }
  // Method to get service note message based on value comparison
  getServiceNoteMessage(service) {
    const agentValue = Number(service.get("total")?.value || 0);
    const systemValue = Number(service.get("systemTotal")?.value || 0);
    const pdaApprovedValue = Number(service.get("pdaApprovedTotalValue")?.value || 0);
    const isNegotiate = service.get("negotiate")?.value === "Y";
    let isAgentValueHigher = false;
    if (this.withPda) {
      isAgentValueHigher = agentValue > systemValue || agentValue > pdaApprovedValue;
    } else {
      isAgentValueHigher = agentValue > systemValue;
    }
    if (!isAgentValueHigher) {
      return "";
    }
    if (isNegotiate) {
      if (this.withPda) {
        if (agentValue > pdaApprovedValue && agentValue > systemValue) {
          return "The agent value is greater than PDA approved value and system value.";
        } else if (agentValue > pdaApprovedValue) {
          return "The agent value is greater than PDA approved value.";
        } else if (agentValue > systemValue) {
          return "The agent value is greater than system value.";
        }
      } else {
        if (agentValue > systemValue) {
          return "The agent value is greater than system value.";
        }
      }
    } else {
      return `You're agreed to the agent value.`;
    }
    return "";
  }
  // Method to get service note CSS class based on state
  getServiceNoteClass(service) {
    const agentValue = Number(service.get("total")?.value || 0);
    const systemValue = Number(service.get("systemTotal")?.value || 0);
    const pdaApprovedValue = Number(service.get("pdaApprovedTotalValue")?.value || 0);
    const isNegotiate = service.get("negotiate")?.value === "Y";
    let isAgentValueHigher = false;
    if (this.withPda) {
      isAgentValueHigher = agentValue > systemValue || agentValue > pdaApprovedValue;
    } else {
      isAgentValueHigher = agentValue > systemValue;
    }
    if (!isAgentValueHigher) {
      return "";
    }
    return isNegotiate ? "warning" : "success";
  }
  // Method to check if service note should be displayed
  shouldShowServiceNote(service) {
    return this.getServiceNoteMessage(service) !== "";
  }
  // Method to check if flag should be displayed
  shouldShowFlag(service) {
    const agentValue = Number(service.get("total")?.value || 0);
    const systemValue = Number(service.get("systemTotal")?.value || 0);
    const pdaApprovedValue = Number(service.get("pdaApprovedTotalValue")?.value || 0);
    const isAgreed = service.get("negotiate")?.value === "N";
    let isAgentValueHigher = false;
    if (this.withPda) {
      isAgentValueHigher = agentValue > systemValue || agentValue > pdaApprovedValue;
    } else {
      isAgentValueHigher = agentValue > systemValue;
    }
    return isAgentValueHigher;
  }
  // Method to get system grand total (sum of all system totals)
  getSystemGrandTotal() {
    return this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const systemTotal = value.systemTotal != null ? Number(value.systemTotal) : 0;
      const result = sum + systemTotal;
      return Number(result.toFixed(2));
    }, 0);
  }
  // Method to get PDA grand total (sum of all PDA approved values)
  getPdaGrandTotal() {
    return this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const pdaTotal = value.pdaApprovedTotalValue != null ? Number(value.pdaApprovedTotalValue) : 0;
      const result = sum + pdaTotal;
      return Number(result.toFixed(2));
    }, 0);
  }
  /* ** Needs to be reviewed with Team - PDA comments to be displayed in FDA -- Surjit
  getPdaRemark(serviceName: string): string {
    if (!this.PDAapprovedValue?.items) return '';
    const pdaService = this.PDAapprovedValue.items.find(item => item.service === serviceName);
    return pdaService?.pa_remark || '';
  }
   
  getPdaFeedback(serviceName: string): string {
    if (!this.PDAapprovedValue?.items) return '';
    const pdaService = this.PDAapprovedValue.items.find(item => item.service === serviceName);
    return pdaService?.meraki_feedback || '';
  }
   
  getPdaMerakiRemarkClient(serviceName: string): string {
    if (!this.PDAapprovedValue?.items) return '';
    const pdaService = this.PDAapprovedValue.items.find(item => item.service === serviceName);
    return pdaService?.meraki_remark_client || '';
  }
   
  getPdaClientComment(serviceName: string): string {
    if (!this.PDAapprovedValue?.items) return '';
    const pdaService = this.PDAapprovedValue.items.find(item => item.service === serviceName);
    return pdaService?.client_comment || '';
  }
  */
  isDifferenceFlag(row) {
    if (Number(row.get("systemTotal")?.value) < Number(row.get("total")?.value) && (!this.withPda || this.withPda && row.get("agreedOrNegotiate")?.value !== "Agreed")) {
      return true;
    } else {
      return false;
    }
  }
  upload() {
    const disbursementId = this.fdaEditData?.disbursement_id;
    const disbursementSeq = this.fdaEditData?.disbursement_seq;
    const fdaId = this.fdaEditData?.fda.fda_id;
    const data = {
      files: [],
      disbursementId,
      fdaId,
      pdaOrFda: "FDA",
      disbursement_seq: disbursementSeq,
      isDisbursement: false,
      source_type: "Meraki"
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "96vw";
    dialogConfig.maxWidth = "100vw";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(FileUploadComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
      }
    });
  }
  downloadReport() {
    const report_type = "FDA";
    const reportData = {
      disbursement_seq: this.fdaEditData.disbursement_seq,
      report_type
    };
    this.loader.show();
    this.fileUploadService.downloadReport(reportData, this.fdaEditData?.disbursement_id).subscribe({
      next: (res) => {
        this.loader.hide();
      },
      error: (error) => {
        this.loader.hide();
        this.errMsg = error.message || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  getUploadedFiles() {
    const data = {
      disbursement_seq: this.fdaEditData?.disbursement_seq,
      pda_fda_flag: "FDA"
    };
    return this.fileUploadService.fileDataFromDb(data).pipe(map((res) => {
      this.fileList = res;
      return res;
    }), catchError((err) => {
      this.errMsg = err?.error?.error || "Something went wrong. Please try again later.";
      this.snackBar.showError(this.errMsg);
      return of([]);
    }));
  }
  isFormValidExcept(fieldsToIgnore) {
    return Object.keys(this.portAgentForm.controls).every((key) => {
      if (fieldsToIgnore.includes(key))
        return true;
      const control = this.portAgentForm.get(key);
      if (!control)
        return true;
      if (control.disabled)
        return true;
      return control.valid;
    });
  }
  // Getter for fromCurrency
  get fromCurrency() {
    return this.portAgentForm?.get("fda_currency_from")?.value || "";
  }
  // Getter for toCurrency
  get toCurrency() {
    return this.portAgentForm?.get("fda_currency_to")?.value || "";
  }
  get convertedToCurrency() {
    return this.portAgentForm?.get("converted_curr_to")?.value || "";
  }
  get convertedFromCurrency() {
    return this.portAgentForm?.get("converted_curr_from")?.value || "";
  }
  // method to calculatr the service total in from and to currencies
  calculateSystemAndAgentValueWithRoe(service, type, conversion_type) {
    const fdaRoe = Number(this.portAgentForm.get("fda_roe")?.value) || 1;
    const pdaRoe = Number(this.fdaEditData?.pda?.pda_roe) || Number(this.fdaEditData?.fda?.meraki_pda_data?.pda_roe) || fdaRoe;
    const roe = type === "pda-approved" ? pdaRoe : fdaRoe;
    const conversion_roe = Number(this.portAgentForm.get("conversion_fda_rate")?.value || 1);
    let baseValue = null;
    if (conversion_type === "ToCurrency") {
      if (type === "agent") {
        baseValue = Number(service.value?.total) || null;
      } else if (type === "system") {
        baseValue = Number(service.value?.systemTotal) || null;
      } else if (type === "pda-approved") {
        baseValue = Number(service.value?.pdaApprovedTotalValue) || null;
      }
      return baseValue !== null ? parseFloat((baseValue * roe).toFixed(2)) : null;
    } else if (conversion_type === "convertedToCurrency") {
      if (type === "agent") {
        baseValue = this.fromCurrency === this.convertedFromCurrency ? Number(service.value?.total) * conversion_roe || null : Number(service.value?.total) * roe * conversion_roe;
      } else if (type === "system") {
        baseValue = this.fromCurrency === this.convertedFromCurrency ? Number(service.value?.systemTotal) * conversion_roe || null : Number(service.value?.systemTotal) * roe * conversion_roe;
      } else if (type === "pda-approved") {
        baseValue = this.fromCurrency === this.convertedFromCurrency ? Number(service.value?.pdaApprovedTotalValue) * conversion_roe || null : Number(service.value?.pdaApprovedTotalValue) * roe * conversion_roe;
      }
      return baseValue !== null ? parseFloat(baseValue.toFixed(2)) : null;
    }
    return null;
  }
  getSystemAndAgentTotal(type, conversion_type) {
    const fdaRoe = Number(this.portAgentForm.get("fda_roe")?.value) || 1;
    const pdaRoe = Number(this.fdaEditData?.pda?.pda_roe) || Number(this.fdaEditData?.fda?.meraki_pda_data?.pda_roe) || fdaRoe;
    const conversionRate = Number(this.portAgentForm.get("conversion_fda_rate")?.value) || 1;
    let total = null;
    if (conversion_type === "ToCurrency") {
      if (type === "system") {
        const systemTotal = this.getSystemGrandTotal() || null;
        total = systemTotal !== null ? systemTotal * fdaRoe : null;
      } else if (type === "agent") {
        const agentTotal = this.agentServiceGrandTotal || null;
        total = agentTotal !== null ? agentTotal * fdaRoe : null;
      } else if (type === "pda-approved") {
        const pdaTotal = this.getPdaGrandTotal() || null;
        total = pdaTotal !== null ? pdaTotal * pdaRoe : null;
      }
    } else if (conversion_type === "convertedToCurrency") {
      if (type === "system") {
        const systemTotal = this.getSystemGrandTotal() || null;
        if (this.convertedFromCurrency !== this.fromCurrency) {
          total = systemTotal !== null ? systemTotal * fdaRoe * conversionRate : null;
        } else {
          total = systemTotal !== null ? systemTotal * conversionRate : null;
        }
      } else if (type === "agent") {
        const agentTotal = this.agentServiceGrandTotal || null;
        if (this.convertedFromCurrency !== this.fromCurrency) {
          total = agentTotal !== null ? agentTotal * fdaRoe * conversionRate : null;
        } else {
          total = agentTotal !== null ? agentTotal * conversionRate : null;
        }
      } else if (type === "pda-approved") {
        const pdaTotal = this.getPdaGrandTotal() || null;
        if (this.convertedFromCurrency !== this.fromCurrency) {
          total = pdaTotal !== null ? pdaTotal * pdaRoe * conversionRate : null;
        } else {
          total = pdaTotal !== null ? pdaTotal * conversionRate : null;
        }
      }
    }
    return total !== null ? parseFloat(total.toFixed(2)) : null;
  }
  // method to get the meraki total amount
  getMerakiPdaAmount() {
    const roe = Number(this.portAgentForm.get("pda_roe")?.value) || 1;
    const conversionRate = Number(this.portAgentForm.get("conversion_pda_rate")?.value) || 1;
    if (this.portAgentForm.get("pmt_curr_from")?.value === this.fromCurrency) {
      return this.merakiServiceGrandTotal;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.toCurrency) {
      return this.merakiServiceGrandTotal !== null ? this.merakiServiceGrandTotal * roe : null;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.convertedToCurrency && this.convertedFromCurrency === this.fromCurrency) {
      return this.merakiServiceGrandTotal !== null ? this.merakiServiceGrandTotal * conversionRate : null;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.convertedToCurrency && this.convertedFromCurrency === this.toCurrency) {
      return this.merakiServiceGrandTotal !== null ? this.merakiServiceGrandTotal * roe * conversionRate : null;
    }
    return null;
  }
  shouldShowConvertedCurrencyMarquee() {
    const form = this.portAgentForm;
    return !!(form.get("converted_curr_from")?.value && form.get("converted_curr_to")?.value && form.get("conversion_fda_rate")?.value && (form.get("converted_curr_from")?.value !== form.get("fda_currency_from")?.value || form.get("converted_curr_to")?.value !== form.get("fda_currency_to")?.value));
  }
  calculateCurrencyConversionForComparison() {
    const pmtCurrFrom = this.portAgentForm.get("pmt_curr_from")?.value;
    const roe = this.portAgentForm.get("fda_roe")?.value;
    const fdaConversionRoe = this.portAgentForm.get("conversion_fda_rate")?.value;
    const conversionRate = +this.portAgentForm.get("conversion_rate")?.value || null;
    if (this.agentServiceGrandTotal === null || conversionRate === null) {
      this.calculatedCurrencyConversion = null;
      return;
    }
    let calculatedValue = null;
    if (this.fromCurrency === pmtCurrFrom) {
      calculatedValue = this.agentServiceGrandTotal * conversionRate;
    } else if (this.toCurrency === pmtCurrFrom) {
      calculatedValue = this.agentServiceGrandTotal * roe * conversionRate;
    } else if (this.convertedToCurrency === pmtCurrFrom && this.convertedFromCurrency === this.toCurrency) {
      calculatedValue = this.agentServiceGrandTotal * roe * fdaConversionRoe * conversionRate;
    } else if (this.convertedToCurrency === pmtCurrFrom) {
      calculatedValue = this.agentServiceGrandTotal * fdaConversionRoe * conversionRate;
    }
    this.calculatedCurrencyConversion = calculatedValue !== null ? Number(calculatedValue).toFixed(2) : null;
  }
  checkCurrencyConversionMismatch() {
    if (this.fdaStatus !== 7) {
      this.showCurrencyConversionMismatchBanner = false;
      return;
    }
    if (!this.isInitialLoad) {
      return;
    }
    if (this.responseCurrencyConversion !== null && this.calculatedCurrencyConversion !== null) {
      const calculated = parseFloat(this.calculatedCurrencyConversion);
      const fromResponse = parseFloat(this.responseCurrencyConversion.toString());
      const hasMismatch = Math.abs(calculated - fromResponse) > 0.01;
      if (hasMismatch) {
        this.showCurrencyConversionMismatchBanner = true;
      }
    }
  }
  // method to refresh tariff rules with warning dialog
  refreshTariffRules() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: {
        header: "Replace Tariff Rules",
        text: "Are you sure you want to replace the current FDA tariff with the latest tariff from the repository? Please note this would also remove the additional vessel property data."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchPortTariffRulesAndRecalculate();
      }
    });
  }
  // method to fetch port tariff rules and recalculate
  fetchPortTariffRulesAndRecalculate() {
    const portId = this.portAgentForm.get("port_id")?.value;
    if (!portId) {
      this.snackBar.showError("Port is required to fetch tariff rules");
      return;
    }
    this.isRefreshingRules = true;
    this.tariffrulesByPort(portId);
    this.snackBar.showSuccess("Tariff rules refreshed successfully");
  }
  static \u0275fac = function FdaEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FdaEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(PdaService), \u0275\u0275directiveInject(FdaService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(FileUploadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FdaEditComponent, selectors: [["app-port-agent-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 55, consts: [["convertedCurrencyAutocomplete", "matAutocomplete"], ["portAgentAutocomplete", "matAutocomplete"], ["PaymentAutocomplete", "matAutocomplete"], ["portAgentAutocompletebelowSection", "matAutocomplete"], ["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], ["autosize", "cdkTextareaAutosize"], [1, "port-agent-form-container"], [1, "top-section"], [1, "dis_id"], [1, "service-button-section"], ["class", "currency-marquee", 4, "ngIf"], ["type", "button", "matTooltip", "Refresh tariff rules with master data", 1, "text-icon", 2, "height", "30px", 3, "click", "disabled", "ngClass"], [2, "display", "flex", "align-items", "center", "margin-top", "-8px"], [1, "small-toggle", 3, "formControl"], [2, "font-size", "15px", "font-weight", "500", "width", "120px", "color", "var(--color-white)"], ["type", "button", 1, "text-icon", 2, "height", "30px", 3, "click", "disabled", "ngClass"], [1, "scrollable-section"], [3, "ngSubmit", "formGroup"], [1, "field-section"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [1, "converted-currency-section"], ["appearance", "outline"], ["matInput", "", "formControlName", "converted_curr_from", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "converted_curr_to", 3, "matAutocomplete"], [3, "optionSelected"], ["matInput", "", "formControlName", "conversion_fda_rate", "type", "number"], ["class", "common-table-header", 4, "ngIf"], ["class", "total-section", 4, "ngIf"], [1, "footer-section"], ["matInput", "", "formControlName", "credit_note", "type", "number", 3, "input"], [4, "ngIf"], ["readonly", "", "matInput", "", "formControlName", "fda_amount", 3, "input"], ["matInput", "", "formControlName", "pmt_curr_from", 3, "matAutocomplete"], ["matInput", "", "formControlName", "pmt_curr_to", 3, "matAutocomplete"], ["matInput", "", "formControlName", "conversion_rate", "type", "number", 3, "input"], ["readonly", "", "matInput", "", "formControlName", "currency_conversion"], ["appearance", "outline", 4, "ngIf"], ["readonly", "", "matInput", "", "formControlName", "balance_due"], [2, "display", "flex", "flex-direction", "row", "justify-content", "flex-end", "gap", "10px", "margin", "10px 20px"], ["class", "currency-conversion-mismatch-banner", 4, "ngIf"], [3, "data"], [1, "button-section"], [1, "text-icon", 2, "height", "30px", 3, "click", "disabled", "ngClass"], ["class", "warning-action-btn", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 3, "click", "disabled", "ngClass"], ["type", "button", 3, "disabled", "ngClass", "click", 4, "ngIf"], [1, "currency-marquee"], [1, "marquee-text"], ["appearance", "outline", 3, "ngClass", 4, "ngIf"], ["type", "text", "matInput", "", 3, "click", "formControlName", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value"], ["matInput", "", 3, "dateChange", "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["appearance", "outline", 3, "ngClass"], ["matInput", "", 3, "type", "formControlName", "readonly"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", "class", "flag-indicator", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", 1, "flag-indicator"], [1, "common-table-header"], [1, "table-header"], ["class", "table-outer", 4, "ngIf"], [1, "table-outer"], [1, "table-section"], [1, "table-inner"], [1, "table-content", 3, "formGroup"], [2, "display", "flex", "gap", "0"], [2, "display", "flex", "align-items", "center", "gap", "5px"], ["matInput", "", "type", "text", "class", "service-name", "placeholder", "Enter service name", "style", "width: 100%; padding: 5px; border: 1px solid var(--app-border); border-radius: 4px; font-size: 13px;::placeholder{font-size:12px;}", 3, "formControl", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "15px"], [2, "display", "flex", "flex-direction", "column", "gap", "5px"], [2, "display", "flex", "flex-direction", "row", "gap", "5px"], [2, "font-size", "10px", "font-weight", "500", "color", "var(--app-text-primary)"], ["matInput", "", "type", "number", "readonly", "", 3, "input", "formControl"], ["matInput", "", "type", "number", "readonly", "", 3, "value"], ["style", "display: flex; flex-direction: column; gap: 5px;", 4, "ngIf"], ["style", " display: flex; flex-direction: column; gap: 15px;", 4, "ngIf"], ["matInput", "", "type", "number", 3, "input", "keydown", "focus", "blur", "formControl"], ["matInput", "", "type", "number", "readonly", "", 3, "value", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "left", "margin-left", "-10px"], ["color", "primary", 2, "transform", "scale(0.5)", 3, "change", "checked", "ngClass"], [2, "font-size", "14px", "font-weight", "500", "color", "var(--color-white)"], ["style", "margin-left: 20px; cursor: pointer; color: var(--color-success); font-size: 24px;", "matTooltip", "Submit service name", 3, "click", 4, "ngIf"], ["style", "margin-left: 10px; color: var(--app-status-error); cursor: pointer;", "matTooltip", "Delete service", 3, "click", 4, "ngIf"], ["class", "service-note-2", 3, "ngClass", 4, "ngIf"], ["class", "table-service", 4, "ngIf"], [1, "table-textarea", 3, "formGroup"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Port Agent Remark", "rows", "2", "formControlName", "pa_remark", 1, "textarea-1"], ["cdkTextareaAutosize", "", "placeholder", "Meraki Feedback", "rows", "2", "formControlName", "meraki_feedback", 1, "textarea-2"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Client Comment", "rows", "2", "formControlName", "formated_client_comment", 1, "textarea-3"], ["matInput", "", "type", "text", "placeholder", "Enter service name", 1, "service-name", 2, "width", "100%", "padding", "5px", "border", "1px solid var(--app-border)", "border-radius", "4px", "font-size", "13px", ":", "placeholder{font-size:12px", 3, "formControl"], ["type", "number", "readonly", "", 3, "value"], ["type", "number", "readonly", "", 3, "value", 4, "ngIf"], [2, "text-align", "center"], ["matTooltip", "Submit service name", 2, "margin-left", "20px", "cursor", "pointer", "color", "var(--color-success)", "font-size", "24px", 3, "click"], ["matTooltip", "Delete service", 2, "margin-left", "10px", "color", "var(--app-status-error)", "cursor", "pointer", 3, "click"], [1, "service-note-2", 3, "ngClass"], [1, "table-service"], [1, "empty-space"], [1, "warning-section"], ["class", "table-checkbox", 4, "ngIf"], [1, "movement-section"], ["class", "movement-inputs", 4, "ngIf"], ["class", "service-note", 3, "ngClass", 4, "ngIf"], [1, "table-checkbox"], [3, "checked", "display", "click", 4, "ngFor", "ngForOf"], [3, "click", "checked"], [1, "movement-inputs"], ["class", "movement-item", 3, "formGroup", "display", 4, "ngFor", "ngForOf"], [1, "movement-item", 3, "formGroup"], ["rows", "2", "appAutoResizeInput", "", 1, "movement-textarea", 3, "formControl", "minWidth", "maxWidth", "bufferSpace"], [1, "service-note", 3, "ngClass"], [1, "total-section"], [1, "total-item"], [2, "color", "var(--app-text-primary)"], [2, "display", "flex", "flex-direction", "column", "row-gap", "10px"], [2, "display", "flex", "align-items", "center", "column-gap", "12px"], [1, "currency-text"], ["style", "display: flex; align-items: center; column-gap: 12px;", 4, "ngIf"], ["class", "total-item", 4, "ngIf"], ["readonly", "", "matInput", "", "formControlName", "pda_remittance"], [1, "currency-conversion-mismatch-banner"], [1, "banner-text"], [1, "warning-action-btn", 3, "click", "disabled"]], template: function FdaEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 11);
      \u0275\u0275template(5, FdaEditComponent_div_5_Template, 4, 4, "div", 12);
      \u0275\u0275elementStart(6, "button", 13);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshTariffRules());
      });
      \u0275\u0275text(7, "Reload Tariff ");
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 14);
      \u0275\u0275element(11, "mat-slide-toggle", 15);
      \u0275\u0275elementStart(12, "span", 16);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 17);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recalculateData());
      });
      \u0275\u0275text(15, "Calculate ");
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17, "calculate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 17);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.downloadReport());
      });
      \u0275\u0275text(19, " FDA Report ");
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "download");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 18)(23, "form", 19);
      \u0275\u0275listener("ngSubmit", function FdaEditComponent_Template_form_ngSubmit_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit(""));
      });
      \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
      \u0275\u0275template(26, FdaEditComponent_div_26_Template, 4, 3, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 23)(28, "mat-form-field", 24)(29, "mat-label");
      \u0275\u0275text(30, "Converted Currency From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 25);
      \u0275\u0275elementStart(32, "mat-autocomplete", null, 0);
      \u0275\u0275template(34, FdaEditComponent_mat_option_34_Template, 2, 2, "mat-option", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-form-field", 24)(36, "mat-label");
      \u0275\u0275text(37, "Converted Currency To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 27);
      \u0275\u0275elementStart(39, "mat-autocomplete", 28, 1);
      \u0275\u0275listener("optionSelected", function FdaEditComponent_Template_mat_autocomplete_optionSelected_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelect("Converted Currency To", $event.option));
      });
      \u0275\u0275template(41, FdaEditComponent_mat_option_41_Template, 2, 2, "mat-option", 26);
      \u0275\u0275pipe(42, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "mat-form-field", 24)(44, "mat-label");
      \u0275\u0275text(45, "Conversion FDA Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, FdaEditComponent_div_47_Template, 3, 1, "div", 30)(48, FdaEditComponent_ng_container_48_Template, 2, 1, "ng-container", 22)(49, FdaEditComponent_div_49_Template, 28, 11, "div", 31);
      \u0275\u0275elementStart(50, "div", 32)(51, "mat-form-field", 24)(52, "mat-label");
      \u0275\u0275text(53, "Credit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 33);
      \u0275\u0275listener("input", function FdaEditComponent_Template_input_input_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recalculateTotals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, FdaEditComponent_mat_error_55_Template, 2, 0, "mat-error", 34)(56, FdaEditComponent_mat_error_56_Template, 2, 0, "mat-error", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-form-field", 24)(58, "mat-label");
      \u0275\u0275text(59, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 35);
      \u0275\u0275listener("input", function FdaEditComponent_Template_input_input_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recalculateTotals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, FdaEditComponent_mat_error_61_Template, 2, 0, "mat-error", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-form-field", 24)(63, "mat-label");
      \u0275\u0275text(64, "Payment Currency From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 36);
      \u0275\u0275elementStart(66, "mat-autocomplete", 28, 2);
      \u0275\u0275listener("optionSelected", function FdaEditComponent_Template_mat_autocomplete_optionSelected_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelect("Payment Currency From", $event.option));
      });
      \u0275\u0275template(68, FdaEditComponent_mat_option_68_Template, 2, 2, "mat-option", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "mat-form-field", 24)(70, "mat-label");
      \u0275\u0275text(71, "Payment Currency To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 37);
      \u0275\u0275elementStart(73, "mat-autocomplete", null, 3);
      \u0275\u0275template(75, FdaEditComponent_mat_option_75_Template, 2, 2, "mat-option", 26);
      \u0275\u0275pipe(76, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "mat-form-field", 24)(78, "mat-label");
      \u0275\u0275text(79, "Payment Currency Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "input", 38);
      \u0275\u0275listener("input", function FdaEditComponent_Template_input_input_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recalculateTotals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, FdaEditComponent_mat_error_81_Template, 2, 0, "mat-error", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-form-field", 24)(83, "mat-label");
      \u0275\u0275text(84, " Currency Conversion");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, FdaEditComponent_mat_form_field_86_Template, 4, 0, "mat-form-field", 40);
      \u0275\u0275elementStart(87, "mat-form-field", 24)(88, "mat-label");
      \u0275\u0275text(89, "Balance Due");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 42);
      \u0275\u0275template(92, FdaEditComponent_div_92_Template, 5, 8, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(93, "app-comm-history", 44);
      \u0275\u0275elementStart(94, "div", 9);
      \u0275\u0275element(95, "span");
      \u0275\u0275elementStart(96, "div", 45)(97, "button", 46);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.upload());
      });
      \u0275\u0275text(98, "Upload File ");
      \u0275\u0275elementStart(99, "mat-icon");
      \u0275\u0275text(100, "cloud_upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(101, FdaEditComponent_button_101_Template, 2, 1, "button", 47);
      \u0275\u0275elementStart(102, "button", 48);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_102_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateServiceDialog());
      });
      \u0275\u0275text(103, "Add Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "button", 48);
      \u0275\u0275listener("click", function FdaEditComponent_Template_button_click_104_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSave("save"));
      });
      \u0275\u0275text(105, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275template(106, FdaEditComponent_button_106_Template, 2, 4, "button", 49);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_23_0;
      let tmp_24_0;
      let tmp_25_0;
      let tmp_30_0;
      const convertedCurrencyAutocomplete_r29 = \u0275\u0275reference(33);
      const portAgentAutocomplete_r30 = \u0275\u0275reference(40);
      const PaymentAutocomplete_r31 = \u0275\u0275reference(67);
      const portAgentAutocompletebelowSection_r32 = \u0275\u0275reference(74);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.fdaEditData == null ? null : ctx.fdaEditData.disbursement_id, " - ", ctx.fdaEditData == null ? null : ctx.fdaEditData.fda == null ? null : ctx.fdaEditData.fda.status_name, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.portAgentForm.get("fda_currency_from")) == null ? null : tmp_5_0.value) && ((tmp_5_0 = ctx.portAgentForm.get("fda_currency_to")) == null ? null : tmp_5_0.value) && ((tmp_5_0 = ctx.portAgentForm.get("fda_roe")) == null ? null : tmp_5_0.value));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(43, _c0, ctx.disableTableInputFields));
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.fda_custom_calculation);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.fda_custom_calculation.value ? "User Defined" : "System Defined", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(45, _c0, ctx.disableTableInputFields));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", (ctx.fdaEditData == null ? null : ctx.fdaEditData.pda == null ? null : ctx.fdaEditData.pda.status) === 5)("ngClass", \u0275\u0275pureFunction1(47, _c0, (ctx.fdaEditData == null ? null : ctx.fdaEditData.pda == null ? null : ctx.fdaEditData.pda.status) === 5));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.portAgentForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.fields);
      \u0275\u0275advance(5);
      \u0275\u0275property("matAutocomplete", convertedCurrencyAutocomplete_r29);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.ConvertedFromCurrencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", portAgentAutocomplete_r30);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(42, 39, ctx.filteredConvertedToCurrency));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.datasource.data && ctx.datasource.data.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.datasource.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.datasource.data && ctx.datasource.data.length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_23_0 = ctx.portAgentForm.get("credit_note")) == null ? null : tmp_23_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_24_0 = ctx.portAgentForm.get("credit_note")) == null ? null : tmp_24_0.hasError("maxCreditExceeded"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_25_0 = ctx.portAgentForm.get("fda_amount")) == null ? null : tmp_25_0.hasError("required"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", PaymentAutocomplete_r31);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.PaymentFromCurrencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", portAgentAutocompletebelowSection_r32);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(76, 41, ctx.filteredPaymentToCurrency));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_30_0 = ctx.portAgentForm.get("conversion_rate")) == null ? null : tmp_30_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.withPda);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showCurrencyConversionMismatchBanner);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.communicationHistory);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(49, _c0, ctx.disableTableInputFields));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isNegotiateSelected && (ctx.fdaStatus === 1 || ctx.fdaStatus === 9));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(51, _c0, ctx.disableTableInputFields));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(53, _c0, ctx.disableTableInputFields));
      \u0275\u0275advance(2);
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
    AsyncPipe,
    DecimalPipe,
    MatSelectModule,
    MatOption,
    MatOptionModule,
    MatTableModule,
    MatCheckbox,
    MatIcon,
    MatTooltipModule,
    MatTooltip,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormControlDirective,
    FormGroupDirective,
    FormControlName,
    MatNativeDateModule,
    NgxMatNativeDateModule,
    MatSlideToggleModule,
    MatSlideToggle,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButtonModule,
    MatRadioModule,
    CommHistoryComponent,
    AutoResizeInputDirective
  ], styles: ["\n\n.port-agent-form-container[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n  color: var(--app-text-primary);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: sticky;\n  top: 40px;\n  z-index: 99;\n  border-bottom: 1px solid var(--color-white);\n  margin-bottom: 10px;\n}\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  margin-right: 10px;\n  color: var(--app-text-primary);\n}\n.scrollable-section[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.top-section[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.field-section[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n  padding: 20px 10px;\n  flex: 0 0 auto;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100px;\n  max-width: 180px;\n  margin-bottom: 0px;\n}\n.field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 12.5%;\n  max-width: 200px;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  position: sticky;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px var(--shadow-1);\n  transition: background-color 0.3s ease;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid #c6c7ca;\n}\n.mdc-text-field__input[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 100%;\n  min-width: 120px;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 20px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n  .mat-mdc-select-panel {\n  width: 100%;\n  min-width: 150px;\n  max-height: 275px;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error);\n  margin-top: -5px;\n  margin-left: -18px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 35px;\n  overflow: hidden;\n}\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n  margin-left: -15px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px 20px 0 20px;\n  background-color: var(--color-bg-dark-10) !important;\n}\n.changed-field.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mdc-outlined-text-field-outline-color: orange !important;\n}\n.disabled-input[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-5) !important;\n}\n.disabled-input[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.service-button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  position: sticky;\n  margin: 8px;\n  justify-content: flex-end;\n}\n.small-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.60);\n  transform-origin: center;\n}\n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px var(--shadow-1);\n  transition: background-color 0.3s ease;\n}\n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.warning-action-btn[_ngcontent-%COMP%] {\n  background-color: #b45309 !important;\n  color: var(--color-white) !important;\n}\n.text-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.text-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 2px;\n}\n.warning-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  align-items: start;\n  gap: 14px;\n  box-sizing: border-box;\n}\n.table-outer[_ngcontent-%COMP%] {\n  width: 99.5%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: var(--color-bg-dark-10) !important;\n  border: 1px solid var(--app-border) !important;\n  border-top: none;\n  border-radius: 0;\n  margin-top: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-outer[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid #e0e0e0;\n}\n.table-outer[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 0 0 8px 8px;\n}\n.table-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 55%;\n  max-width: 68%;\n  overflow: hidden;\n}\n.common-table-header[_ngcontent-%COMP%] {\n  width: 99.5%;\n  background-color: var(--app-table-header);\n  border: 1px solid var(--app-border);\n  border-radius: 8px 8px 0 0;\n  margin-top: 16px;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.common-table-header[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: var(--app-table-header);\n  border-bottom: 1px solid var(--app-border);\n  margin: 0;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 16px;\n  box-sizing: border-box;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--color-white);\n  line-height: 1.4;\n}\n.empty-space[_ngcontent-%COMP%] {\n  align-items: start;\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n  background-color: var(--color-bg-dark-10);\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-white);\n  line-height: 1.4;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-top: 4px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--color-text-light-1);\n  font-style: italic;\n  margin: 0;\n  margin-left: 70px;\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 85%;\n  max-width: 130px;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3C50E0;\n  background-color: #fff;\n  box-shadow: 0 0 0 2px rgba(60, 80, 224, 0.1);\n}\n.table-service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  padding: 0 16px;\n  padding-right: 0;\n  box-sizing: border-box;\n}\n.table-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n.table-checkbox[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n  .table-checkbox .mat-mdc-checkbox .mdc-checkbox {\n  transform: scale(0.85);\n}\n  .table-checkbox .mat-mdc-checkbox label {\n  font-size: 13px;\n  color: var(--color-text-light-1);\n}\n.table-textarea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n  gap: 6px;\n  padding: 6px;\n  background-color: var(--color-bg-dark-10);\n  box-sizing: border-box;\n  min-width: 29%;\n  max-width: 70%;\n  margin-right: 10px;\n}\n.table-textarea[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.textarea-1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  color: var(--app-text-primary);\n  background-color: rgba(74, 143, 244, 0.42) !important;\n  border: 1px solid rgba(74, 143, 244, 0.75) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n}\n.textarea-2[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  color: var(--app-text-primary);\n  background-color: rgba(34, 197, 94, 0.42) !important;\n  border: 1px solid rgba(34, 197, 94, 0.75) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n}\n.textarea-3[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  color: var(--app-text-primary);\n  background-color: rgba(245, 158, 11, 0.42) !important;\n  border: 1px solid rgba(245, 158, 11, 0.75) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n}\n.table-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n.table-feedback[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 5px 16px;\n  background-color: var(--color-bg-dark-10);\n  border-top: 1px solid var(--app-border);\n  box-sizing: border-box;\n  width: 100%;\n}\n.table-radio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n}\n.table-feedback[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  width: 100%;\n}\n.service-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--app-status-warning);\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: var(--color-white);\n}\n.service-note.warning[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.36);\n  border-color: rgba(245, 158, 11, 0.75);\n  color: #fbbf24;\n}\n.service-note.success[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.36);\n  border-color: rgba(34, 197, 94, 0.75);\n  color: #22c55e;\n}\n.service-note[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: start;\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-white);\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80px;\n  max-height: 150px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n  .table-radio .mat-mdc-radio-button {\n  margin-right: 8px;\n}\n  .table-radio .mat-mdc-radio-button .mdc-radio {\n  transform: scale(0.85);\n}\n  .table-radio .mat-mdc-radio-button label {\n  font-size: 13px;\n  color: var(--color-text-light-1);\n  padding: 0 !important;\n  margin-left: -5px !important;\n}\n.total-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n  border-top: none;\n  padding: 12px 16px;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n}\n.total-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n}\n.total-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  letter-spacing: 0.5px;\n  margin: 0;\n  white-space: nowrap;\n  min-width: 100px;\n}\n.total-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  padding: 6px 8px;\n  background-color: var(--color-bg-dark-5);\n  border: 1px solid var(--color-text-gray-1);\n  border-radius: 4px;\n  min-width: 100px;\n  width: 80px;\n  box-sizing: border-box;\n}\n.movement-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n}\n.movement-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.movement-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.movement-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.movement-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-2);\n}\n.service-note-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--app-status-warning);\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin: 8px 0;\n  margin-left: 346px;\n  font-size: 12px;\n  color: var(--color-white);\n}\n.service-note-2.warning[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--app-status-warning);\n  color: var(--app-status-warning);\n}\n.service-note-2.success[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--color-success);\n  color: var(--color-success);\n}\n.service-note-2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: start;\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-white);\n}\n.movement-textarea[_ngcontent-%COMP%] {\n  width: 110px;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--app-input-text) !important;\n  -webkit-text-fill-color: var(--app-input-text) !important;\n  background-color: var(--color-bg-dark-2);\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  resize: none;\n  height: 35px !important;\n}\n.currency-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--color-white);\n  line-height: 2.4;\n}\n.dis_id[_ngcontent-%COMP%] {\n  color: var(--color-white);\n}\n.converted-currency-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 70px;\n  padding: 20px 10px 0 10px;\n  background-color: var(--color-bg-dark-10);\n  justify-content: flex-end;\n}\n.currency-marquee[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 300px;\n  background-size: 200% 100%;\n  animation: gradientShift 3s ease infinite;\n  border-radius: 4px;\n  padding: 8px 12px;\n}\n.currency-marquee.converted[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.marquee-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #ff7835;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.currency-conversion-mismatch-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-bg-dark-2);\n  border: 1px solid var(--app-status-warning);\n  border-radius: 4px;\n  padding: 12px 16px;\n  width: fit-content;\n  min-width: 300px;\n  box-sizing: border-box;\n}\n.currency-conversion-mismatch-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--app-status-warning);\n  text-align: center;\n}\n.readonly-cursor[_ngcontent-%COMP%], \n.readonly-cursor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.readonly-cursor[_ngcontent-%COMP%]   .mat-mdc-input-element[_ngcontent-%COMP%], \n.readonly-cursor[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], \ninput[readonly][_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch__track {\n  opacity: 0.4 !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle.mdc-switch--selected .mdc-switch__track, \n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__track {\n  opacity: 0.9 !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch__handle-track .mdc-switch__handle::after {\n}\n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch__track {\n  opacity: 0.4 !important;\n}\n  .toggle-negotiate.mat-mdc-slide-toggle.mdc-switch--selected .mdc-switch__track, \n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__track {\n  opacity: 0.9 !important;\n}\n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch__handle-track .mdc-switch__handle::after {\n}\n  .toggle-agreed + span {\n}\n  .toggle-negotiate + span {\n}\ntextarea[_ngcontent-%COMP%] {\n  color: var(--app-text-primary);\n  -webkit-text-fill-color: var(--app-text-primary);\n}\n/*# sourceMappingURL=fda-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FdaEditComponent, { className: "FdaEditComponent" });
})();
export {
  FdaEditComponent
};
//# sourceMappingURL=chunk-CFWDWSQD.js.map
