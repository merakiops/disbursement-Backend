import {
  FdaService
} from "./chunk-QC6JSDCJ.js";
import {
  ClientService
} from "./chunk-DZDO3MWD.js";
import {
  MatDividerModule
} from "./chunk-GWDTIECY.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  PA_Rules,
  Rules,
  addAdditionalFieldsToFieldsArray,
  clearVesselDetails,
  displayFn,
  fdaFields,
  filterServicesOnPurpose,
  formatToLocalISOString,
  getAdditionalPropertiesObjectFromForm,
  getCompanyIdByName,
  getCurrencyFromCountry,
  getMainServiceSerialNumber,
  getOptionValuefortheFields,
  getPurposeName,
  mergeResponseVesselIntoList,
  removeAddedFieldsAndControls,
  replaceMovementPart,
  restrictDecimal
} from "./chunk-4B5JIWQW.js";
import {
  PortAgentFormService
} from "./chunk-YF5NCWIB.js";
import {
  PortService
} from "./chunk-JRUZ2QQS.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-HAXYAMEC.js";
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
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-K64LDRY5.js";
import {
  MatDialog
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
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
  MatIconModule
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
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  MatNativeDateModule,
  MatOption,
  MatOptionModule
} from "./chunk-BAX6ITZM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/fda/fda.component.ts
var _c0 = (a0) => ({ "subservice-row": a0 });
function FdaComponent_form_4_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dis_r4 = ctx.$implicit;
    \u0275\u0275property("value", dis_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dis_r4, " ");
  }
}
function FdaComponent_form_4_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Disbursement is required ");
    \u0275\u0275elementEnd();
  }
}
function FdaComponent_form_4_div_14_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const field_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.getOptionValue(field_r7, opt_r8, ctx_r2.addedFields));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r7.name === "Cargo" ? opt_r8 == null ? null : opt_r8.type : field_r7.name === "ToCurrency" || field_r7.name === "FromCurrency" ? opt_r8 : opt_r8 == null ? null : opt_r8.name, " ");
  }
}
function FdaComponent_form_4_div_14_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Please select the ", field_r7.name, " ");
  }
}
function FdaComponent_form_4_div_14_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 42)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43, 0);
    \u0275\u0275listener("click", function FdaComponent_form_4_div_14_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const trigger_r6 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r6.openPanel());
    })("blur", function FdaComponent_form_4_div_14_mat_form_field_1_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r5);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRemove(field_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 44, 1);
    \u0275\u0275listener("optionSelected", function FdaComponent_form_4_div_14_mat_form_field_1_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelect(field_r7.name, $event.option));
    });
    \u0275\u0275template(7, FdaComponent_form_4_div_14_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FdaComponent_form_4_div_14_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const auto_r9 = \u0275\u0275reference(6);
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r7.name, "");
    \u0275\u0275property("formControlName", field_r7 == null ? null : field_r7.value)("matAutocomplete", auto_r9);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r2.displayFn.bind(ctx_r2, field_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getFilteredOptions(field_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_15_0 = ctx_r2.fdaCreateForm.get(field_r7.value)) == null ? null : tmp_15_0.hasError("required"));
  }
}
function FdaComponent_form_4_div_14_mat_form_field_2_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" please select the ", field_r7.name, " ");
  }
}
function FdaComponent_form_4_div_14_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 42)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 45);
    \u0275\u0275listener("dateChange", function FdaComponent_form_4_div_14_mat_form_field_2_Template_input_dateChange_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 46)(5, "mat-datepicker", null, 2);
    \u0275\u0275template(7, FdaComponent_form_4_div_14_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const picker_r11 = \u0275\u0275reference(6);
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r7.name, "");
    \u0275\u0275property("matDatepicker", picker_r11)("formControlName", field_r7.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r11);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r2.fdaCreateForm.get(field_r7.value)) == null ? null : tmp_13_0.hasError("required"));
  }
}
function FdaComponent_form_4_div_14_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r7.name, " is required ");
  }
}
function FdaComponent_form_4_div_14_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 42)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 47);
    \u0275\u0275template(4, FdaComponent_form_4_div_14_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Enter ", field_r7.name, "");
    \u0275\u0275property("type", field_r7.data_type || "text")("formControlName", field_r7.value)("readonly", field_r7.pdareadOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_12_0 = ctx_r2.fdaCreateForm.get(field_r7.value)) == null ? null : tmp_12_0.hasError("required"));
  }
}
function FdaComponent_form_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FdaComponent_form_4_div_14_mat_form_field_1_Template, 9, 8, "mat-form-field", 41)(2, FdaComponent_form_4_div_14_mat_form_field_2_Template, 8, 7, "mat-form-field", 41)(3, FdaComponent_form_4_div_14_mat_form_field_3_Template, 5, 7, "mat-form-field", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r7.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r7.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r7.type !== "date" && field_r7.type !== "select");
  }
}
function FdaComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 30)(1, "div", 31)(2, "mat-checkbox", 32);
    \u0275\u0275text(3, " Do you want to create FDA from PDA for a selected Disbursement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 33)(5, "mat-label");
    \u0275\u0275text(6, "Select Disbursement ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 34, 0);
    \u0275\u0275listener("click", function FdaComponent_form_4_Template_input_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const trigger_r2 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(trigger_r2.openPanel());
    })("blur", function FdaComponent_form_4_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRemove("disbursementId"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", 35, 1);
    \u0275\u0275listener("optionSelected", function FdaComponent_form_4_Template_mat_autocomplete_optionSelected_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDisbursementSelected($event.option.value));
    });
    \u0275\u0275template(11, FdaComponent_form_4_mat_option_11_Template, 2, 2, "mat-option", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FdaComponent_form_4_mat_error_12_Template, 2, 0, "mat-error", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38);
    \u0275\u0275template(14, FdaComponent_form_4_div_14_Template, 4, 3, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const auto_r12 = \u0275\u0275reference(10);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.fdaCreateForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("matAutocomplete", auto_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.filteredDisbursementId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.fdaCreateForm.get("disbursementId")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.fields);
  }
}
function FdaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "button", 49);
    \u0275\u0275listener("click", function FdaComponent_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCalculate());
    });
    \u0275\u0275text(2, "Calculate");
    \u0275\u0275elementEnd()();
  }
}
function FdaComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, " Sl.No ");
    \u0275\u0275elementEnd();
  }
}
function FdaComponent_td_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r14 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getMainServiceIndex(i_r14, ctx_r2.datasource));
  }
}
function FdaComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275template(1, FdaComponent_td_14_ng_container_1_Template, 3, 1, "ng-container", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_3_0 = row_r15.get("isSubService")) == null ? null : tmp_3_0.value));
  }
}
function FdaComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 52);
  }
}
function FdaComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Service ");
    \u0275\u0275elementEnd();
  }
}
function FdaComponent_td_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const element_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = element_r16.get("service")) == null ? null : tmp_3_0.value, " ");
  }
}
function FdaComponent_td_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const element_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = element_r16.get("name")) == null ? null : tmp_3_0.value, " ");
  }
}
function FdaComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275template(1, FdaComponent_td_18_ng_container_1_Template, 2, 1, "ng-container", 37)(2, FdaComponent_td_18_ng_container_2_Template, 2, 1, "ng-container", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const element_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = element_r16.get("isSubService")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = element_r16.get("isSubService")) == null ? null : tmp_3_0.value);
  }
}
function FdaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55)(1, "strong");
    \u0275\u0275text(2, "Total");
    \u0275\u0275elementEnd()();
  }
}
function FdaComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, " Formula");
    \u0275\u0275elementEnd();
  }
}
function FdaComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br")(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const row_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = row_r17.get("formula_result")) == null ? null : tmp_2_0.value, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = row_r17.get("formula_inputs")) == null ? null : tmp_3_0.value, " ");
  }
}
function FdaComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 52);
  }
}
function FdaComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, " Value");
    \u0275\u0275elementEnd();
  }
}
function FdaComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const row_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = row_r18.get("isSubService")) == null ? null : tmp_2_0.value) ? (tmp_2_0 = row_r18.get("sub_total")) == null ? null : tmp_2_0.value : (tmp_2_0 = row_r18.get("total")) == null ? null : tmp_2_0.value, " ");
  }
}
function FdaComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.merakiGrandTotal, " ");
  }
}
function FdaComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 58);
  }
}
function FdaComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 59);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const row_r19 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, (tmp_2_0 = row_r19.get("isSubService")) == null ? null : tmp_2_0.value))("hidden", ((tmp_3_0 = row_r19.get("isSubService")) == null ? null : tmp_3_0.value) && ((tmp_3_0 = row_r19.get("optional")) == null ? null : tmp_3_0.value) === "Y");
  }
}
function FdaComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 60);
  }
}
var FdaComponent = class _FdaComponent {
  fb;
  portService;
  clientService;
  snackBar;
  portAgentFormService;
  router;
  route;
  fdaService;
  dialog;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  fdaCreateForm;
  countryList = [];
  portList = [];
  vesselList = [];
  purposeList = [];
  portAgentList = [];
  cargoList = [];
  clientList = [];
  currencyList = [];
  serviceList = new PA_Rules();
  columnsToDisplayWithExpand = ["sno", "service", "formula", "value"];
  disableTableInputFields = false;
  merakiGrandTotal = 0;
  fields = fdaFields.map((field) => {
    if (field.name === "Vessel") {
      return __spreadProps(__spreadValues({}, field), { value: "vessel_id" });
    }
    if (field.name === "FromCurrency") {
      return __spreadProps(__spreadValues({}, field), { pdareadOnly: true });
    }
    return field;
  }).filter((field) => field.createPdaForm === true);
  addedFields = [];
  companyList = [];
  filteredOptions = {};
  disbursementIdList = [];
  disbursementId = [];
  allDataLoaded = false;
  searchTerm = "";
  datasource = [];
  disbursementCtrl = new FormControl("");
  filteredDisbursementId = [];
  errMsg = "";
  disbursementSeq = [];
  submitButtonForAPI = false;
  selectedDisbursementSeq = 0;
  displayedColumns = ["Sl.No", "service", "formula", "value"];
  disableSubmitButton = false;
  previousFormData = {};
  portServiceList = new PA_Rules();
  previousPurposeId = 0;
  isServiceCalculated = false;
  tariffRules = new PA_Rules();
  port_tariff_rule_calculate = new PA_Rules();
  constructor(fb, portService, clientService, snackBar, portAgentFormService, router, route, fdaService, dialog) {
    this.fb = fb;
    this.portService = portService;
    this.clientService = clientService;
    this.snackBar = snackBar;
    this.portAgentFormService = portAgentFormService;
    this.router = router;
    this.route = route;
    this.fdaService = fdaService;
    this.dialog = dialog;
    this.buildPortAgentForm();
  }
  get serviceListFormArray() {
    return this.fdaCreateForm.get("serviceList");
  }
  buildPortAgentForm() {
    this.fdaCreateForm = this.fb.group({
      fdaFromPDA: [false],
      disbursementId: [{ value: "", disabled: true }, Validators.required],
      disbursementSeq: [{ value: "", disabled: true }, Validators.required],
      country_id: [null, Validators.required],
      client_id: [null, Validators.required],
      portagent_id: [null, Validators.required],
      cargo_id: [null, Validators.required],
      port_id: [null, Validators.required],
      imo_number: [null, [Validators.required, Validators.maxLength(7)]],
      vessel_id: [null, Validators.required],
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
      voyage: [null, Validators.required],
      fda_currency_from: [null, Validators.required],
      fda_currency_to: [null, Validators.required],
      invoice_ref_no: [null, Validators.required]
    });
  }
  getMainServiceIndex = getMainServiceSerialNumber;
  restrictDecimal = restrictDecimal;
  getOptionValue = getOptionValuefortheFields;
  displayFn = displayFn;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") || null;
    this.getDisbursmentDataFromDb(id);
    this.initForm();
    this.getAllMasterData();
    this.disbursementAutocomplete();
  }
  disbursementAutocomplete() {
    this.filteredDisbursementId = [...this.disbursementId];
    this.fdaCreateForm.get("disbursementId")?.valueChanges.subscribe((value) => {
      this.filteredDisbursementId = this.filterDisbursement(value || "");
    });
  }
  onDisbursementSelected(selectedValue) {
    removeAddedFieldsAndControls(this.fdaCreateForm, this.addedFields, this.fields);
    const disbursementId = selectedValue.split(" - ")[0];
    const selected = this.disbursementIdList.find((d) => d.disbursement_id === disbursementId);
    if (selected) {
      this.selectedDisbursementSeq = selected.disbursement_seq;
      this.fdaCreateForm.patchValue({ disbursementSeq: this.selectedDisbursementSeq });
      this.loader.show();
      this.fdaService.getDisbursementDetails(this.selectedDisbursementSeq).subscribe({
        next: (response) => __async(this, null, function* () {
          this.tariffRules = response.port_tariff_rule;
          yield this.updateFieldData(response);
          this.getAdditionalFieldData(response);
          const countryId = response?.portagent_pda_data?.country?.country_id;
          if (countryId) {
            yield this.portByCountry("Country", countryId, response);
          }
          this.merakiGrandTotal = response?.portagent_pda_data?.services?.grand_total;
          const purpose = getPurposeName(this.purposeList, response?.portagent_pda_data?.purpose?.purpose_id);
          this.portServiceList = response?.portagent_pda_data?.services;
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          this.fdaCreateForm.addControl("serviceList", this.fb.array([]));
          this.snackBar.showSuccess("The data has been initiated from PDA");
          yield this.vesselListByClientId(response?.portagent_pda_data?.client?.client_id, {
            vessel_id: response?.portagent_pda_data?.vessel?.vsl_id,
            vessel_name: response?.portagent_pda_data?.vessel?.name,
            imo_number: response?.portagent_pda_data?.vessel?.imo_number,
            grt: response?.portagent_pda_data?.vessel?.grt,
            rgrt: response?.portagent_pda_data?.vessel?.rgrt,
            nrt: response?.portagent_pda_data?.vessel?.nrt,
            loa: response?.portagent_pda_data?.vessel?.loa,
            beam: response?.portagent_pda_data?.vessel?.beam,
            depth: response?.portagent_pda_data?.vessel?.depth,
            dwt: response?.portagent_pda_data?.vessel?.dwt,
            type: response?.portagent_pda_data?.vessel?.type
          });
          this.populateServicesFromList();
          this.disableFields();
          this.loader.hide();
        }),
        error: (err) => {
          this.loader.hide();
          this.errMsg = err?.error?.error || "Something went wrong please try again later.";
          this.snackBar.showError(this.errMsg);
        }
      });
    }
  }
  disableFields() {
    const controlsToDisable = ["portagent_id", "client_id", "port_id", "country_id", "vessel_id", "imo_number", "purpose_id"];
    controlsToDisable.forEach((controlName) => {
      const ctrl = this.fdaCreateForm.get(controlName);
      const disbursementId = this.fdaCreateForm.get("disbursementId")?.value;
      const currentValue = ctrl?.value;
      if (ctrl && disbursementId) {
        ctrl.disable({ emitEvent: false });
        ctrl.setValue(currentValue, { emitEvent: false });
      } else {
        ctrl?.enable({ emitEvent: false });
        ctrl?.setValue(currentValue, { emitEvent: false });
      }
    });
  }
  getAdditionalFieldData(response) {
    const additionalProperties = response?.pda_vessel_details?.additional_property || [];
    this.addedFields = additionalProperties.map((item) => ({
      fieldName: item?.field_name,
      controlName: item?.field_name,
      is_mandatory: item?.is_mandatory
    }));
    additionalProperties.forEach((item) => {
      const fieldName = item?.field_name?.trim();
      if (!fieldName)
        return;
      const existsInFields = this.fields.some((f) => f.value?.trim() === fieldName);
      if (!existsInFields) {
        this.fields.push({
          name: fieldName,
          label: fieldName,
          value: fieldName,
          type: "input"
        });
      }
    });
    this.addedFields?.forEach((field) => {
      const matchingProp = additionalProperties?.find((prop) => {
        return prop?.field_name === field.fieldName;
      });
      const isMandatory = field.is_mandatory === "Y";
      const value = matchingProp?.value ?? null;
      if (!this.fdaCreateForm.contains(field.controlName)) {
        this.fdaCreateForm.addControl(field.controlName, this.fb.control(value, isMandatory ? Validators.required : []));
      } else {
        this.fdaCreateForm.get(field.controlName)?.patchValue(value);
      }
    });
  }
  updateFieldData(response) {
    return new Promise((resolve) => {
      this.fdaCreateForm.patchValue({
        country_id: response?.portagent_pda_data?.country?.country_id,
        client_id: response?.portagent_pda_data?.client?.client_id,
        portagent_id: response?.portagent_id,
        cargo_id: response?.portagent_pda_data?.cargo?.cargo_id,
        port_id: response?.portagent_pda_data?.port?.port_id,
        imo_number: response?.portagent_pda_data?.vessel?.imo_number,
        vessel_id: response?.portagent_pda_data?.vessel?.vsl_id,
        vessel: response?.portagent_pda_data?.vessel?.name,
        nrt: response?.portagent_pda_data?.vessel?.nrt,
        grt: response?.portagent_pda_data?.vessel?.grt,
        rgrt: response?.portagent_pda_data?.vessel?.rgrt,
        loa: response?.portagent_pda_data?.vessel?.loa,
        beam: response?.portagent_pda_data?.vessel?.beam,
        depth: response?.portagent_pda_data?.vessel?.depth,
        type: response?.portagent_pda_data?.vessel?.type,
        dwt: response?.portagent_pda_data?.vessel?.dwt,
        purpose_id: response?.portagent_pda_data?.purpose?.purpose_id,
        eta: response?.portagent_pda_data?.eta,
        etd: response?.portagent_pda_data?.etd,
        vessel_stay: response?.portagent_pda_data?.vessel_stay || "0D 0h",
        fda_roe: response?.pda_roe,
        voyage: response?.portagent_pda_data?.voyage,
        fda_currency_from: response?.pda_currency_from,
        fda_currency_to: response?.pda_currency_to,
        invoice_ref_no: response?.invoice_ref_no || null
      });
      resolve();
    });
  }
  portByCountry(fieldName, value, response) {
    return new Promise((resolve, reject) => {
      if (fieldName === "Country") {
        this.loader.show();
        this.portService.getPortsByCountryId(value).subscribe({
          next: (ports) => {
            this.portList = ports;
            this.fields.map((field) => {
              if (field.name === "Port") {
                field.options = this.portList.map((port) => ({
                  port_id: port.port_id,
                  name: port.name
                }));
                this.filteredOptions[field.value] = field.options;
                const currentPortValue = this.fdaCreateForm.get(field.value)?.value;
                if (currentPortValue !== null && currentPortValue !== void 0) {
                  this.fdaCreateForm.get(field.value)?.setValue(currentPortValue, { emitEvent: false });
                }
              }
            });
            const port_id = this.fdaCreateForm.get("port_id")?.value;
            this.addAdditionalFieldsToFieldsArray(port_id);
            this.loader.hide();
            resolve(ports);
          },
          error: (error) => {
            this.portList = [];
            this.loader.hide();
            this.errMsg = error?.error?.error || "Something went wrong please try again later.";
            this.snackBar.showError(this.errMsg);
            reject(error);
          }
        });
      } else {
        resolve(null);
      }
    });
  }
  vesselListByClientId(clientId, vesselDetails) {
    return new Promise((resolve, reject) => {
      this.loader.show();
      const vslpayload = {
        company_id: clientId,
        fields: ["assigned_unassigned"]
      };
      this.clientService.VslListFromDb(vslpayload).subscribe({
        next: (response) => {
          this.vesselList = mergeResponseVesselIntoList(response.assigned_vessels || [], vesselDetails || this.getCurrentVesselDetails());
          this.fields.map((field) => {
            if (field.name === "Vessel") {
              field.options = this.vesselList.map((vessel) => ({
                vessel_id: vessel.vessel_id,
                name: vessel.name
              }));
              this.filteredOptions[field.value] = field.options;
              const currentVessel = this.fdaCreateForm.get(field.value)?.value;
              if (currentVessel !== null && currentVessel !== void 0) {
                this.fdaCreateForm.get(field.value)?.setValue(currentVessel, { emitEvent: false });
              }
            }
          });
          this.loader.hide();
          resolve(response);
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
  getCurrentVesselDetails() {
    const vesselId = this.fdaCreateForm.get("vessel_id")?.value;
    if (!vesselId) {
      return null;
    }
    return {
      vessel_id: vesselId,
      vessel_name: this.fdaCreateForm.get("vessel")?.value,
      imo_number: this.fdaCreateForm.get("imo_number")?.value,
      grt: this.fdaCreateForm.get("grt")?.value,
      rgrt: this.fdaCreateForm.get("rgrt")?.value,
      nrt: this.fdaCreateForm.get("nrt")?.value,
      loa: this.fdaCreateForm.get("loa")?.value,
      beam: this.fdaCreateForm.get("beam")?.value,
      depth: this.fdaCreateForm.get("depth")?.value,
      dwt: this.fdaCreateForm.get("dwt")?.value,
      type: this.fdaCreateForm.get("type")?.value
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
          type: vf.data_type === "date" ? "date" : "input",
          data_type: vf.data_type ?? "",
          options: []
        };
      });
      addVslFields.forEach((field) => {
        const alreadyExists = this.fields.some((f) => f.value === field.value);
        if (!alreadyExists) {
          this.fields.push(field);
          this.fdaCreateForm.addControl(field.value, this.fb.control(null, Validators.required));
        }
      });
    }
    return this.addedFields;
  }
  convertMinutesToDaysHoursShort(minutes) {
    if (!minutes || isNaN(minutes) || minutes <= 0) {
      return "0D 0h";
    }
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor(minutes % 1440 / 60);
    return `${days}D ${hours}h`;
  }
  filterDisbursement(value) {
    if (!value) {
      return this.disbursementId;
    }
    const filterValue = value?.toLowerCase();
    return this.disbursementId.filter((dis) => dis.toLowerCase().includes(filterValue));
  }
  setupAutocomplete() {
    this.fields.forEach((field) => {
      if (field.type === "select") {
        this.filteredOptions[field.value] = field.options || [];
        this.fdaCreateForm.get(field.value)?.valueChanges.subscribe((value) => {
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
        this.setupAutocomplete();
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
      }
    });
  }
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
  setValidationForSubmit() {
    const excludedFields = ["rgrt", "type", "invoice_ref_no", "serviceList", "fdaFromPDA"];
    Object.keys(this.fdaCreateForm.controls).forEach((key) => {
      this.fdaCreateForm.get(key)?.clearValidators();
      this.fdaCreateForm.get(key)?.updateValueAndValidity({ emitEvent: false });
    });
    Object.keys(this.fdaCreateForm.controls).forEach((key) => {
      if (excludedFields.includes(key)) {
        return;
      }
      const field = this.addedFields.find((f) => f.controlName === key);
      if (field && field.is_mandatory === "N") {
        return;
      }
      this.fdaCreateForm.get(key)?.setValidators([Validators.required]);
      this.fdaCreateForm.get(key)?.updateValueAndValidity();
    });
  }
  onCalculate() {
    this.setValidationForSubmit();
    this.fdaCreateForm.markAllAsTouched();
    if (this.fdaCreateForm.valid) {
      this.loader.show();
      const formData = this.fdaCreateForm.getRawValue();
      const formatedJson = this.transformJsonDataToCalculate(formData);
      this.fdaService.fdaWithoutPda(formatedJson).subscribe({
        next: (response) => {
          this.tariffRules = response.port_tariff_rule;
          this.merakiGrandTotal = response?.meraki_pda_data?.services?.grand_total;
          this.portServiceList = response?.meraki_pda_data.services;
          this.port_tariff_rule_calculate = response.port_tariff_rule;
          const purposeId = formData.purpose_id;
          const purpose = this.purposeList.find((p) => p.purpose_id === purposeId)?.name;
          if (purpose) {
            this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          }
          this.fdaCreateForm.addControl("serviceList", this.fb.array([]));
          this.snackBar.showSuccess("The data has been calculated");
          this.populateServicesFromList();
          this.loader.hide();
          this.isServiceCalculated = true;
        },
        error: (error) => {
          this.loader.hide();
          const errMsg = error?.error?.error || "Failed to calculate FDA data";
          this.snackBar.showError(errMsg);
        }
      });
    }
  }
  populateServicesFromList() {
    this.serviceListFormArray?.clear();
    this.datasource = [];
    this.serviceList.items.forEach((item) => {
      const subServiceArray = this.fb.array((item.subService || []).map((sub) => this.fb.group({
        name: [sub.name],
        purpose: [sub.purpose],
        basic_value: [sub.basic_value],
        calculated_basic_value: [sub.calculated_basic_value],
        movement: [sub.movement],
        tariff_percent: [sub.tariff_percent],
        formula_result: [sub.formula_result],
        optional: [sub.optional === "Y" || sub.optional === true],
        hide: [sub.hide],
        operational_flag: [sub.operational_flag],
        sub_total: [{ value: sub.sub_total, disabled: this.disableTableInputFields }],
        formula_inputs: [sub.formula_inputs],
        reference: [sub.reference],
        isSubService: [true],
        systemSubTotal: [{ value: sub.systemSubTotal, disabled: this.disableTableInputFields }],
        formattedSystemMovement: [sub.movement?.split(":")[1] || 1]
      })));
      const mainServiceGroup = this.fb.group({
        SNO: [item.SNO],
        code: [item.code],
        service: [item.service || ""],
        /* ** Needs to be reviewed with Team - PDA comments to be displayed in FDA -- Surjit
         * feedback: [item.feedback || this.getPdaFeedback(item.service) || ''],
         * pa_remark: [{ value: item.pa_remark || this.getPdaRemark(item.service) || '', disabled: this.disableTableInputFields }],
         */
        feedback: [item.feedback || ""],
        pa_remark: [{ value: item.pa_remark || "", disabled: this.disableTableInputFields }],
        negotiate: [item.negotiate || "N"],
        agreed: [item.agreed || "N"],
        total: [{ value: item.total || 0, disabled: this.disableTableInputFields }],
        subService: subServiceArray,
        isSubService: [false],
        systemTotal: [{ value: item.systemTotal, disabled: this.disableTableInputFields }]
      });
      this.serviceListFormArray.push(mainServiceGroup);
    });
    this.updateDatasource();
    this.updateFormattedSystemMovement();
  }
  updateDatasource() {
    this.datasource = [];
    for (let service of this.serviceListFormArray.controls) {
      this.datasource.push(service);
      const subServiceFormArray = service.get("subService");
      subServiceFormArray.controls.forEach((subServiceCtrl) => {
        this.datasource.push(subServiceCtrl);
      });
    }
  }
  onSubmit() {
    if (!this.submitButtonForAPI) {
      this.setValidationForSubmit();
      this.fdaCreateForm.markAllAsTouched();
      if (this.fdaCreateForm.valid) {
        this.loader.show();
        const formData = this.fdaCreateForm.getRawValue();
        const formatedJson = this.transformJsonDataToSubmit(formData);
        this.disableSubmitButton = true;
        this.fdaService.fdaWithoutPda(formatedJson).subscribe({
          next: (response) => {
            this.snackBar.showSuccess(response.message);
            sessionStorage.setItem("disbursement_seq", JSON.stringify(response?.disbursement_seq));
            this.router.navigate(["/layout/fda/edit"]);
            this.loader.hide();
          },
          error: (error) => {
            this.disableSubmitButton = false;
            this.loader.hide();
            const errMsg = error?.error?.error || "Failed to submit FDA data";
            this.snackBar.showError(errMsg);
          }
        });
      }
    } else if (this.submitButtonForAPI) {
      this.setValidationForSubmit();
      this.fdaCreateForm.markAllAsTouched();
      if (this.fdaCreateForm.valid) {
        this.loader.show();
        const formData = this.fdaCreateForm.getRawValue();
        const formatedJson = this.transformJsonDataForFDAWithPDA(formData);
        this.disableSubmitButton = true;
        this.fdaService.fdaWithPda(formatedJson).subscribe({
          next: (response) => {
            this.snackBar.showSuccess(response.message);
            sessionStorage.setItem("disbursement_seq", JSON.stringify(response?.disbursement_seq));
            this.router.navigate(["/layout/fda/edit"]);
            this.loader.hide();
          },
          error: (error) => {
            this.disableSubmitButton = false;
            const errMsg = error?.error?.error || "Failed to submit FDA data";
            this.snackBar.showError(errMsg);
            this.loader.hide();
          }
        });
      }
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
  onDateChange() {
    const eta = this.fdaCreateForm.get("eta")?.value;
    const etd = this.fdaCreateForm.get("etd")?.value;
    const stay = this.calculateVesselStayInFda(eta, etd);
    if (stay === "eta greater than etd") {
      this.fdaCreateForm.get("vessel_stay")?.setValue(null);
      this.fdaCreateForm.get("etd")?.setValue(null);
    } else {
      this.fdaCreateForm.get("vessel_stay")?.setValue(stay);
    }
  }
  transformJsonDataToCalculate(formData) {
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
        imo_number: formData.imo_number?.toString() || "",
        name: formData.vessel?.toString() || "",
        grt: formData.grt?.toString() || "",
        nrt: formData.nrt?.toString() || "",
        loa: formData.loa?.toString() || "",
        rgrt: formData.rgrt?.toString() || "",
        beam: formData.beam?.toString() || "",
        depth: formData.depth?.toString() || "",
        dwt: formData.dwt?.toString() || "",
        type: formData.type?.toString() || "",
        additional_properties: this.getAdditionalProperties()
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
      vessel_stay: this.convertVesselStayToMinutes(formData.vessel_stay),
      roe: +formData.fda_roe || null,
      voyage: formData.voyage,
      fda_currency_to: formData.fda_currency_to,
      fda_currency_from: formData.fda_currency_from,
      fda_custom_calculation: "",
      fda_submit: "N",
      port_tariff_rule: {
        items: this.port_tariff_rule_calculate.items.length > 0 ? this.updateMovementInTariffRules(this.port_tariff_rule_calculate.items) : this.updateMovementInTariffRules(this.serviceList.items.map((service) => __spreadProps(__spreadValues({}, service), {
          total: 0
        })))
      }
    };
  }
  transformJsonDataToSubmit(formData) {
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
        imo_number: formData.imo_number?.toString() || "",
        name: formData.vessel?.toString() || "",
        grt: formData.grt?.toString() || "",
        nrt: formData.nrt?.toString() || "",
        loa: formData.loa?.toString() || "",
        rgrt: formData.rgrt?.toString() || "",
        beam: formData.beam?.toString() || "",
        depth: formData.depth?.toString() || "",
        dwt: formData.dwt?.toString() || "",
        type: formData.type?.toString() || "",
        additional_properties: this.getAdditionalProperties(),
        additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.fdaCreateForm, this.fields)
      },
      cargo: {
        cargo_id: formData.cargo_id,
        type: this.cargoList.find((cargo) => cargo.cargo_id === formData.cargo_id)?.type || null
      },
      purpose: {
        purpose_id: formData.purpose_id,
        name: this.purposeList.find((purpose) => purpose.purpose_id === formData.purpose_id)?.name || null
      },
      eta: formData.eta ? this.formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? this.formatToLocalISOString(formData.etd) : null,
      vessel_stay: this.convertVesselStayToMinutes(formData.vessel_stay),
      roe: +formData.fda_roe || null,
      voyage: formData.voyage,
      fda_currency_to: formData.fda_currency_to,
      fda_currency_from: formData.fda_currency_from,
      fda_custom_calculation: "",
      fda_submit: "Y",
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      port_tariff_rule: {
        items: this.updateMovementInTariffRules(this.tariffRules.items)
      }
    };
  }
  transformJsonDataForFDAWithPDA(formData) {
    const mergedItems = [...this.tariffRules.items];
    if (this.portServiceList?.items) {
      this.portServiceList.items.forEach((pdaService) => {
        const existsInTariff = mergedItems.some((tariffService) => tariffService.service === pdaService.service);
        if (!existsInTariff) {
          if (pdaService) {
            pdaService.total = "";
          }
          mergedItems.push(pdaService);
        }
      });
    }
    return {
      disbursement_seq: this.selectedDisbursementSeq,
      comp_id: getCompanyIdByName(this.companyList),
      client_id: formData.client_id,
      portagent_id: formData.portagent_id,
      country_id: formData.country_id,
      port_id: formData.port_id,
      vessel_id: formData.vessel_id,
      imo_number: formData.imo_number,
      vessel: {
        vsl_id: formData.vessel_id?.toString() || "",
        imo_number: formData.imo_number?.toString() || "",
        name: formData.vessel?.toString() || "",
        grt: formData.grt?.toString() || "",
        nrt: formData.nrt?.toString() || "",
        loa: formData.loa?.toString() || "",
        rgrt: formData.rgrt?.toString() || "",
        beam: formData.beam?.toString() || "",
        depth: formData.depth?.toString() || "",
        dwt: formData.dwt?.toString() || "",
        type: formData.type?.toString() || "",
        additional_properties: this.getAdditionalProperties(),
        additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.fdaCreateForm, this.fields)
      },
      cargo: {
        cargo_id: formData.cargo_id,
        type: this.cargoList.find((cargo) => cargo.cargo_id === formData.cargo_id)?.type || null
      },
      purpose: {
        purpose_id: formData.purpose_id,
        name: this.purposeList.find((purpose) => purpose.purpose_id === formData.purpose_id)?.name || null
      },
      eta: formData.eta ? this.formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? this.formatToLocalISOString(formData.etd) : null,
      vessel_stay: this.convertVesselStayToMinutes(formData.vessel_stay),
      roe: +formData.fda_roe || null,
      voyage: formData.voyage,
      fda_currency_to: formData.fda_currency_to,
      fda_currency_from: formData.fda_currency_from,
      fda_custom_calculation: "",
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      port_tariff_rule: {
        items: this.updateMovementInTariffRules(mergedItems)
      }
    };
  }
  // Method to handle movement value changes
  onMovementValueChange() {
    this.updateFormattedSystemMovement();
  }
  // Method to update formattedSystemMovement from systemMovement
  updateFormattedSystemMovement() {
    if (!this.serviceListFormArray)
      return;
    this.serviceListFormArray.controls.forEach((service) => {
      const subServiceArray = service.get("subService");
      if (subServiceArray) {
        subServiceArray.controls.forEach((subCtrl) => {
          const movement = subCtrl.get("movement")?.value;
          if (movement && typeof movement === "string") {
            const movementParts = movement.split(":");
            if (movementParts.length > 1) {
              subCtrl.get("formattedSystemMovement")?.setValue(movementParts[1]);
            }
          }
        });
      }
    });
  }
  // Method to update movement values in tariff rules from form data
  updateMovementInTariffRules(tariffItems) {
    if (!this.serviceListFormArray || this.serviceListFormArray.length === 0) {
      return tariffItems;
    }
    return tariffItems.map((tariffItem) => {
      const formService = this.serviceListFormArray.controls.map((c) => c.getRawValue()).find((s) => s.service === tariffItem.service);
      if (!formService)
        return tariffItem;
      const updatedSubServices = tariffItem.subService?.map((tariffSub) => {
        const formSub = formService.subService?.find((fs) => fs.name === tariffSub.name);
        if (!formSub)
          return tariffSub;
        return __spreadProps(__spreadValues({}, tariffSub), {
          optional: formSub.optional === true || formSub.optional === "Y" ? "Y" : "N",
          movement: (() => {
            if (!tariffSub.movement)
              return tariffSub.movement;
            const currentMovement = formSub.formattedSystemMovement || tariffSub.movement.split(":")[1];
            return replaceMovementPart(tariffSub.movement, 1, currentMovement);
          })()
        });
      }) || [];
      return __spreadProps(__spreadValues({}, tariffItem), {
        subService: updatedSubServices
      });
    });
  }
  getAdditionalProperties() {
    const additionalProps = {};
    const dateFields = this.fields.filter((field) => field.type === "date").map((field) => field.name);
    this.addedFields.forEach(({ fieldName, controlName }) => {
      let value = this.fdaCreateForm.get(controlName)?.value ?? null;
      additionalProps[fieldName] = value;
      if (dateFields.includes(fieldName) && value) {
        additionalProps[fieldName] = formatToLocalISOString(value);
      }
    });
    return additionalProps;
  }
  formatToLocalISOString(dateInput) {
    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
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
        case "FromCurrency":
        case "ToCurrency":
          field.options = this.currencyList;
          this.filteredOptions[field.value] = field.options;
          break;
        default:
      }
    });
  }
  convertVesselStayToMinutes = (vesselStay) => {
    if (!vesselStay)
      return 0;
    const dayMatch = vesselStay.match(/(\d+)D/);
    const hourMatch = vesselStay.match(/(\d+)H/);
    const days = dayMatch ? parseInt(dayMatch[1], 10) : 0;
    const hours = hourMatch ? parseInt(hourMatch[1], 10) : 0;
    return days * 24 * 60 + hours * 60;
  };
  onSelect(fieldName, event) {
    if (fieldName === "Country") {
      const currency = getCurrencyFromCountry(this.countryList, event.value);
      this.fdaCreateForm.patchValue({
        fda_currency_from: currency
      });
      this.loader.show();
      this.portService.getPortsByCountryId(event.value).subscribe({
        next: (ports) => {
          this.portList = ports;
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
      const control = this.fdaCreateForm.get("vessel_id");
      const value = control?.value;
      const selectedVessel = this.vesselList.filter((vessel) => vessel.vessel_id === value);
      if (selectedVessel.length > 0) {
        const vessel = selectedVessel[0];
        this.fdaCreateForm.patchValue({
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
        company_id: this.fdaCreateForm.get("client_id")?.value,
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
      const port_id = this.fdaCreateForm.get("port_id")?.value;
      removeAddedFieldsAndControls(this.fdaCreateForm, this.addedFields, this.fields);
      this.addedFields = [];
      this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.fdaCreateForm, this.addedFields, this.filteredOptions, this.fb);
      this.tariffrulesByPort(port_id);
    } else if (fieldName === "Purpose") {
      const purposeId = this.fdaCreateForm.get("purpose_id")?.value;
      this.port_tariff_rule_calculate = new PA_Rules();
      if (this.previousPurposeId && purposeId !== this.previousPurposeId && this.isServiceCalculated) {
        this.showDataLostWarning();
      } else {
        this.previousPurposeId = purposeId;
        const purpose = getPurposeName(this.purposeList, purposeId);
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
        }
      }
    }
  }
  storePreviousFormData() {
    this.previousFormData = __spreadProps(__spreadValues({}, this.fdaCreateForm.getRawValue()), {
      serviceList: this.serviceList,
      merakiGrandTotal: this.merakiGrandTotal,
      datasource: [...this.datasource]
    });
  }
  restorePreviousFormData() {
    if (this.previousFormData) {
      this.fdaCreateForm.patchValue(this.previousFormData);
      this.serviceList = this.previousFormData.serviceList || new Rules();
      this.merakiGrandTotal = this.previousFormData.merakiGrandTotal || 0;
      this.datasource = this.previousFormData.datasource || [];
      this.populateServicesFromList();
    }
  }
  tariffrulesByPort(port_id) {
    const requestBody = {
      page: 1,
      page_size: 1,
      query_name: "",
      port_id
    };
    this.loader.show();
    this.portService.getTariffRules(requestBody).subscribe({
      next: (res) => {
        this.serviceList.items = [];
        this.portServiceList = res?.data[0]?.rules;
        this.tariffRules = res?.data[0]?.rules;
        this.port_tariff_rule_calculate = new PA_Rules();
        const purposeId = this.fdaCreateForm.get("purpose_id")?.value;
        const purpose = this.purposeList.find((p) => p.purpose_id === purposeId)?.name;
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
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
  initForm() {
    this.fdaCreateForm.get("fdaFromPDA")?.valueChanges.subscribe((checked) => {
      const disbursementControl = this.fdaCreateForm.get("disbursementId");
      if (checked) {
        disbursementControl?.enable();
        this.submitButtonForAPI = true;
      } else {
        this.submitButtonForAPI = false;
        Object.keys(this.fdaCreateForm.controls).forEach((key) => {
          if (key !== "fdaFromPDA") {
            this.fdaCreateForm.get(key)?.reset();
          }
        });
        disbursementControl?.disable({ emitEvent: false });
        this.disableFields();
        this.datasource = [];
        this.merakiGrandTotal = 0;
      }
    });
  }
  getDisbursmentDataFromDb(routeId) {
    this.loader.show();
    this.fdaService.fdaDisbursementList().subscribe({
      next: (response) => {
        const disbursements = Array.isArray(response.data) ? response.data : Array.isArray(response) ? response : [];
        this.disbursementIdList = [...this.disbursementIdList, ...disbursements];
        this.disbursementId = disbursements.map((item) => `${item.disbursement_id} - ${item.created_by || "NA"}`);
        this.disbursementSeq = disbursements.map((item) => item.disbursement_seq);
        this.filteredDisbursementId = [...this.filteredDisbursementId, ...this.disbursementId];
        this.loader.hide();
        if (routeId) {
          this.fdaCreateForm.get("fdaFromPDA")?.setValue(true);
          const matchingDisbursement = this.disbursementId.find((d) => d.startsWith(routeId));
          if (matchingDisbursement) {
            this.fdaCreateForm.patchValue({ disbursementId: matchingDisbursement });
            this.onDisbursementSelected(matchingDisbursement);
          }
        }
      },
      error: (error) => {
        this.loader.hide();
      }
    });
  }
  onRemove(field) {
    if (typeof field === "string") {
      const disbursementId = this.fdaCreateForm.get("disbursementId")?.value;
      if (field === "disbursementId" && !disbursementId) {
        const fdaFromPDAValue = this.fdaCreateForm.get("fdaFromPDA")?.value;
        this.fdaCreateForm.reset();
        if (fdaFromPDAValue) {
          this.fdaCreateForm.get("fdaFromPDA")?.setValue(fdaFromPDAValue);
        }
        this.disableFields();
        this.datasource = [];
        this.merakiGrandTotal = 0;
      }
    } else {
      if (field?.name === "Country" && !this.fdaCreateForm.get("country_id")?.value) {
        this.fdaCreateForm.get("port_id")?.setValue(null);
        this.portList = [];
        this.filteredOptions["port_id"] = [];
      } else if (field?.name === "Client" && !this.fdaCreateForm.get("client_id")?.value) {
        this.fdaCreateForm.get("vessel_id")?.setValue(null);
        this.filteredOptions["vessel_id"] = [];
        this.vesselList = [];
        clearVesselDetails(this.fdaCreateForm);
      } else if (field?.name === "Vessel" && !this.fdaCreateForm.get("vessel_id")?.value) {
        this.fdaCreateForm.get("vessel_id")?.setValue(null);
        clearVesselDetails(this.fdaCreateForm);
      } else if (field?.name === "Vessel" && !this.fdaCreateForm.get("vessel_id")?.value) {
      }
    }
  }
  /* ** Needs to be reviewed with Team - PDA comments to be displayed in FDA -- Surjit
    // Helper methods to get PDA data as fallback during FDA creation
    getPdaRemark(serviceName: string): string {
      // Check if we have PDA data from disbursement selection
      if (this.selectedDisbursementSeq && this.portServiceList?.items) {
        const pdaService = this.portServiceList.items.find(item => item.service === serviceName);
        return pdaService?.pa_remark || '';
      }
      return '';
    }
  
    getPdaFeedback(serviceName: string): string {
      // Check if we have PDA data from disbursement selection
      if (this.selectedDisbursementSeq && this.portServiceList?.items) {
        const pdaService = this.portServiceList.items.find(item => item.service === serviceName);
        return pdaService?.meraki_feedback || '';
      }
      return '';
    }
    */
  showDataLostWarning() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: { header: "Data Loss Warning", text: "Are you sure you want to change the purpose? This will reset the services." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const port_id = this.fdaCreateForm.get("port_id")?.value;
        this.tariffrulesByPort(port_id);
        this.serviceList.items = [];
        this.datasource = [];
        this.merakiGrandTotal = 0;
      } else {
        this.fdaCreateForm.get("purpose_id")?.setValue(this.previousPurposeId);
      }
    });
  }
  static \u0275fac = function FdaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FdaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FdaService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FdaComponent, selectors: [["app-fda"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 11, consts: [["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], [1, "main-container", "theme-dark"], [1, "dashboard-wrapper"], [1, "dashboard-container"], [1, "form-section", "custom-border"], [3, "formGroup", 4, "ngIf"], ["class", "calculate-container", 4, "ngIf"], [1, "section-title"], [1, "service-section"], [1, "table-container"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", "style", "width: 30px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "service"], ["mat-header-cell", "", "style", "width: 180px;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-left", 4, "matCellDef"], ["mat-footer-cell", "", "class", "total-agent-value", 4, "matFooterCellDef"], ["matColumnDef", "formula"], ["mat-header-cell", "", "style", "width: 170px;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-right", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "hidden", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "footer-row", 4, "matFooterRowDef", "matFooterRowDefSticky"], [1, "submit-container"], [1, "sub-btn", 3, "click", "disabled"], [3, "formGroup"], [1, "section-disbursement"], ["formControlName", "fdaFromPDA", 1, "checkbox-text"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "disbursementId", "placeholder", "Enter Disbursement ID", "required", "", 3, "click", "blur", "matAutocomplete"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["type", "text", "matInput", "", 3, "click", "blur", "formControlName", "matAutocomplete", "placeholder"], [3, "optionSelected", "displayWith"], ["matInput", "", 3, "dateChange", "matDatepicker", "formControlName", "placeholder"], ["matIconSuffix", "", 3, "for"], ["matInput", "", 3, "type", "formControlName", "placeholder", "readonly"], [1, "calculate-container"], [1, "cal-btn", 3, "click"], ["mat-header-cell", "", 2, "width", "30px"], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-cell", "", 2, "width", "180px"], ["mat-cell", "", 1, "align-left"], ["mat-footer-cell", "", 1, "total-agent-value"], ["mat-header-cell", "", 2, "width", "170px"], ["mat-cell", "", 1, "align-right"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "hidden"], ["mat-footer-row", "", 1, "footer-row"]], template: function FdaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275template(4, FdaComponent_form_4_Template, 15, 5, "form", 7)(5, FdaComponent_div_5_Template, 3, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "h1", 9);
      \u0275\u0275text(8, "Service Charges");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "table", 12);
      \u0275\u0275elementContainerStart(12, 13);
      \u0275\u0275template(13, FdaComponent_th_13_Template, 2, 0, "th", 14)(14, FdaComponent_td_14_Template, 2, 1, "td", 15)(15, FdaComponent_td_15_Template, 1, 0, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(16, 17);
      \u0275\u0275template(17, FdaComponent_th_17_Template, 2, 0, "th", 18)(18, FdaComponent_td_18_Template, 3, 2, "td", 19)(19, FdaComponent_td_19_Template, 3, 0, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(20, 21);
      \u0275\u0275template(21, FdaComponent_th_21_Template, 2, 0, "th", 22)(22, FdaComponent_td_22_Template, 5, 2, "td", 23)(23, FdaComponent_td_23_Template, 1, 0, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(24, 24);
      \u0275\u0275template(25, FdaComponent_th_25_Template, 2, 0, "th", 22)(26, FdaComponent_td_26_Template, 2, 1, "td", 23)(27, FdaComponent_td_27_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(28, FdaComponent_tr_28_Template, 1, 0, "tr", 25)(29, FdaComponent_tr_29_Template, 1, 4, "tr", 26)(30, FdaComponent_tr_30_Template, 1, 0, "tr", 27);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(31, "div", 28)(32, "button", 29);
      \u0275\u0275listener("click", function FdaComponent_Template_button_click_32_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(33, " Submit ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.fdaCreateForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !((tmp_1_0 = ctx.fdaCreateForm.get("fdaFromPDA")) == null ? null : tmp_1_0.value));
      \u0275\u0275advance(6);
      \u0275\u0275property("dataSource", ctx.datasource);
      \u0275\u0275advance(17);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-disabled", ctx.disableSubmitButton);
      \u0275\u0275property("disabled", ctx.disableSubmitButton);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatOption,
    MatOptionModule,
    MatCheckboxModule,
    MatCheckbox,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ], styles: ['\n\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: grid;\n  background-color: var(--color-bg-dark-10) !important;\n  grid-template-columns: 3fr 2fr;\n  gap: 2rem;\n  padding: 0.1rem;\n  min-width: 1024px;\n}\n.main-container[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 100%;\n  overflow-y: auto;\n  background-color: var(--color-bg-dark-10) !important;\n  color: var(--color-white) !important;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--color-bg-dark-10) !important;\n  border-radius: 8px;\n  padding: 1rem;\n  gap: 0.5 rem;\n  padding: 10px;\n  flex: 0 0 auto;\n}\n  .mat-mdc-checkbox .mdc-checkbox {\n  transform: scale(0.8);\n  background-color: #ffffff00 !important;\n}\n  .mat-mdc-checkbox .mdc-label {\n  font-size: 0.85rem;\n  color: var(--color-text-light-2);\n}\n  .mdc-checkbox__background {\n  background-color: #ffffff !important;\n  border-color: #c6c7ca !important;\n}\n  .mdc-checkbox--selected .mdc-checkbox__background {\n  background-color: #4a8ff4 !important;\n  border-color: #4a8ff4 !important;\n}\n  .mat-mdc-checkbox-checked .mdc-checkbox__background {\n  background-color: #4a8ff4 !important;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-white);\n  line-height: normal;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 0.9rem;\n  color: var(--color-text-light-1);\n  padding: 0;\n  margin: 0;\n}\n.checkbox-text[_ngcontent-%COMP%] {\n  color: aliceblue;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.section-disbursement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: self-start;\n  align-items: center;\n  margin-left: -10px;\n}\n.field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 12.5%;\n  max-width: 200px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 2fr);\n  gap: 10px;\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100px;\n  max-width: 180px;\n  margin-bottom: 24px;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  position: relative;\n}\n.form-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\n.section-disbursement[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 20px;\n}\n.submit-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-top: 20px;\n  font-size: 15px;\n}\n.sub-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  font-weight: bold;\n  font-size: 15px;\n  border: none;\n  padding: 12px 0;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(114, 114, 114, 0.2);\n  transition: all 0.2s ease;\n}\n.sub-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent !important;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--color-bg-dark-2);\n}\n.expanded-table[_ngcontent-%COMP%] {\n  border: none;\n}\nth[_ngcontent-%COMP%] {\n  background: var(--color-bg-dark-1);\n  color: var(--color-white);\n  font-weight: 500;\n  padding: 0.75rem;\n  text-align: left;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n}\ntr.mat-row[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-popup);\n  transition: background 0.3s ease;\n}\n.row-element[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.expanded-content-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border: none !important;\n}\n.expanded-row.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  border-top-width: 1px;\n  border-color: #bebebe;\n}\n.expand-cell[_ngcontent-%COMP%]:empty {\n  height: 40px;\n}\n.custom-border[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 8px;\n  background-color: var(--color-bg-dark-10) !important;\n}\n.table-name[_ngcontent-%COMP%] {\n  width: 85px;\n}\n.calculate-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  gap: 20px;\n  margin-top: 20px;\n  font-size: 15px;\n}\n.cal-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  font-weight: bold;\n  font-size: 15px;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(114, 114, 114, 0.2);\n  transition: all 0.2s ease;\n}\n.cal-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dashboard-wrapper[_ngcontent-%COMP%]     .mat-mdc-footer-cell {\n  background-color: var(--color-bg-dark-1) !important;\n  color: var(--app-text-primary) !important;\n  border-top: 1px solid var(--app-border) !important;\n}\n.total-agent-value[_ngcontent-%COMP%] {\n  color: var(--app-text-primary) !important;\n  text-align: center;\n  font-weight: bold;\n}\n.scroll-section[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n  padding: 10px;\n}\n.subservice-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2);\n}\n.subservice-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2);\n}\n.subservice-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2);\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #ccc !important;\n  cursor: not-allowed !important;\n}\n  .mat-mdc-form-field-label, \n  .mat-mdc-floating-label {\n  color: var(--color-white) !important;\n}\n.main-container[_ngcontent-%COMP%]   div[style*="color: grey"][_ngcontent-%COMP%], \n.main-container[_ngcontent-%COMP%]   div[style*="color:grey"][_ngcontent-%COMP%] {\n  color: var(--color-text-light-1) !important;\n}\n/*# sourceMappingURL=fda.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FdaComponent, { className: "FdaComponent" });
})();
export {
  FdaComponent
};
//# sourceMappingURL=chunk-3247UFCA.js.map
