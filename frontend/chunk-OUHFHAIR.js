import {
  ApprovalRequestDialogComponent,
  AutoResizeInputDirective,
  CommHistoryComponent
} from "./chunk-4IJ5BGQL.js";
import {
  EmailDialogComponent
} from "./chunk-LG7TJWKL.js";
import {
  EmailSentNotificationComponent
} from "./chunk-SNZ4PAUJ.js";
import "./chunk-ETTDPF5T.js";
import {
  MatButtonToggleModule
} from "./chunk-TQVZRFDQ.js";
import "./chunk-4NIIGUZS.js";
import {
  PdaService
} from "./chunk-XQCSZ7IC.js";
import {
  ClientService
} from "./chunk-VYXKY3G4.js";
import {
  MatSlideToggle
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
  autoCompleteFilter,
  calculateVesselStay,
  clearVesselDetails,
  convertMinutesToDaysOrHours,
  convertVesselStayToMinutes,
  displayClientComment,
  displayFn,
  fields,
  filterServicesOnPurpose,
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
  restrictDecimal,
  validateVesselStay
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
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef
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
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
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
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Observable,
  ViewContainerRef,
  catchError,
  concatMap,
  finalize,
  inject,
  map,
  of,
  startWith,
  tap,
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

// src/app/pages/pda-edit/push-notification.component.ts
var _c0 = (a0) => ({ "background": a0 });
function NotificationDialogComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd()();
  }
}
var NotificationDialogComponent = class _NotificationDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onClose() {
    this.dialogRef.close();
  }
  static \u0275fac = function NotificationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationDialogComponent, selectors: [["app-notification-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 6, consts: [[1, "notification-container", 3, "ngStyle"], [1, "notification-header"], ["class", "warning-icon", 4, "ngIf"], [1, "notification-time"], [1, "notification-body"], [1, "close-btn", 3, "click"], [1, "warning-icon"]], template: function NotificationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "strong");
      \u0275\u0275template(3, NotificationDialogComponent_span_3_Template, 3, 0, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8);
      \u0275\u0275element(9, "br");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275listener("click", function NotificationDialogComponent_Template_span_click_10_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Close");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.data.color || "#FFEADF"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.data.header !== "Request Approved");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.header, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.data.text, " ");
    }
  }, dependencies: [CommonModule, NgIf, NgStyle, MatDialogModule, MatButtonModule, MatIcon], styles: ["\n\n.notification-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  width: 400px;\n  padding: 20px;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.notification-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n.notification-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #636363;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  color: #555;\n  margin-left: 330px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #d32f2f;\n}\n.notification-time[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: gray;\n  margin-right: 8px;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=push-notification.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationDialogComponent, { className: "NotificationDialogComponent" });
})();

// src/app/pages/pda-edit/pda-edit.component.ts
var _c02 = (a0) => ({ "disabled-input": a0 });
var _c1 = (a0) => ({ "changed-field": a0 });
function PdaEditComponent_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" , 1 ", (tmp_6_0 = ctx_r1.portAgentForm.get("converted_curr_from")) == null ? null : tmp_6_0.value, " ~= ", (tmp_6_0 = ctx_r1.portAgentForm.get("conversion_pda_rate")) == null ? null : tmp_6_0.value, " ", (tmp_6_0 = ctx_r1.portAgentForm.get("converted_curr_to")) == null ? null : tmp_6_0.value, " ");
  }
}
function PdaEditComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275template(3, PdaEditComponent_div_5_ng_container_3_Template, 2, 3, "ng-container", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Note: 1 ", (tmp_5_0 = ctx_r1.portAgentForm.get("pda_currency_from")) == null ? null : tmp_5_0.value, " ~= ", (tmp_5_0 = ctx_r1.portAgentForm.get("pda_roe")) == null ? null : tmp_5_0.value, " ", (tmp_5_0 = ctx_r1.portAgentForm.get("pda_currency_to")) == null ? null : tmp_5_0.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowConvertedCurrencyMarquee());
  }
}
function PdaEditComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function PdaEditComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendPdaRequest());
    });
    \u0275\u0275text(1, " Resend Link");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_28_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const field_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.getOptionValue(field_r6, opt_r7, ctx_r1.addedFields));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r6.name === "Cargo" ? opt_r7 == null ? null : opt_r7.type : field_r6.name === "ToCurrency" || field_r6.name === "FromCurrency" ? opt_r7 : opt_r7 == null ? null : opt_r7.name, " ");
  }
}
function PdaEditComponent_div_28_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Please select the ", field_r6.name, ". ");
  }
}
function PdaEditComponent_div_28_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 59)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 60, 4);
    \u0275\u0275listener("click", function PdaEditComponent_div_28_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const trigger_r5 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r5.openPanel());
    })("blur", function PdaEditComponent_div_28_mat_form_field_1_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r4);
      const field_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemove(field_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 61, 5);
    \u0275\u0275listener("optionSelected", function PdaEditComponent_div_28_mat_form_field_1_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const field_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelect(field_r6.name, $event.option));
    });
    \u0275\u0275template(7, PdaEditComponent_div_28_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PdaEditComponent_div_28_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const auto_r8 = \u0275\u0275reference(6);
    const field_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", field_r6.value)("matAutocomplete", auto_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r1.displayFn.bind(ctx_r1, field_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredOptions(field_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_15_0 = ctx_r1.portAgentForm.get(field_r6.value)) == null ? null : tmp_15_0.hasError("required"));
  }
}
function PdaEditComponent_div_28_mat_form_field_2_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" please select the ", field_r6.name, " ");
  }
}
function PdaEditComponent_div_28_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 27)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 63);
    \u0275\u0275listener("dateChange", function PdaEditComponent_div_28_mat_form_field_2_Template_input_dateChange_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 64)(5, "mat-datepicker", null, 6);
    \u0275\u0275template(7, PdaEditComponent_div_28_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const picker_r10 = \u0275\u0275reference(6);
    const field_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", picker_r10)("formControlName", field_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r1.portAgentForm.get(field_r6.value)) == null ? null : tmp_13_0.hasError("required"));
  }
}
function PdaEditComponent_div_28_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r6.name, " is required ");
  }
}
function PdaEditComponent_div_28_mat_form_field_3_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " valid format (e.g., 1D, 1H, 1D 1H,). ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_28_mat_form_field_3_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Enter Valid Format ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_28_mat_form_field_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, " \u{1F6A9} ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_28_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 65)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 66);
    \u0275\u0275listener("blur", function PdaEditComponent_div_28_mat_form_field_3_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r11);
      const field_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(field_r6.name === "Vessel Stay" ? ctx_r1.validateVesselStay(field_r6, ctx_r1.portAgentForm) : null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PdaEditComponent_div_28_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 39)(5, PdaEditComponent_div_28_mat_form_field_3_mat_error_5_Template, 2, 0, "mat-error", 39)(6, PdaEditComponent_div_28_mat_form_field_3_mat_error_6_Template, 2, 0, "mat-error", 39)(7, PdaEditComponent_div_28_mat_form_field_3_span_7_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const field_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx_r1.modifiedFields[field_r6.value] && !ctx_r1.isExcluded(field_r6.value)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r6.data_type || "text")("formControlName", field_r6.value)("readonly", ctx_r1.isFieldReadonly(field_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r1.portAgentForm.get(field_r6.value)) == null ? null : tmp_13_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r6.name === "Vessel Stay" && ((tmp_14_0 = ctx_r1.portAgentForm.get(field_r6.value)) == null ? null : tmp_14_0.hasError("invalidFormat")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r6.name === "Invoice Ref No" && ((tmp_15_0 = ctx_r1.portAgentForm.get(field_r6.value)) == null ? null : tmp_15_0.hasError("invalidData")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modifiedFields[field_r6.value] && !ctx_r1.isExcluded(field_r6.value));
  }
}
function PdaEditComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PdaEditComponent_div_28_mat_form_field_1_Template, 9, 6, "mat-form-field", 56)(2, PdaEditComponent_div_28_mat_form_field_2_Template, 8, 5, "mat-form-field", 57)(3, PdaEditComponent_div_28_mat_form_field_3_Template, 8, 11, "mat-form-field", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r6.type === "select" && field_r6.value && ctx_r1.portAgentForm.get(field_r6.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r6.type === "date" && field_r6.value && ctx_r1.portAgentForm.get(field_r6.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r6.type !== "date" && field_r6.type !== "select" && field_r6.value && ctx_r1.portAgentForm.get(field_r6.value));
  }
}
function PdaEditComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r12 = ctx.$implicit;
    \u0275\u0275property("value", currency_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r12, " ");
  }
}
function PdaEditComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r13 = ctx.$implicit;
    \u0275\u0275property("value", currency_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r13, " ");
  }
}
function PdaEditComponent_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r14);
  }
}
function PdaEditComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275template(2, PdaEditComponent_div_49_div_2_Template, 3, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.displayedColumns);
  }
}
function PdaEditComponent_ng_container_50_div_1_input_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 96);
  }
  if (rf & 2) {
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formControl", service_r16.get("service"));
  }
}
function PdaEditComponent_ng_container_50_div_1_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (tmp_12_0 = service_r16.get("service")) == null ? null : tmp_12_0.value, " ");
  }
}
function PdaEditComponent_ng_container_50_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrencyValue, ")");
  }
}
function PdaEditComponent_ng_container_50_div_1_input_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 83);
  }
  if (rf & 2) {
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r16, "system", "convertedToCurrency"));
  }
}
function PdaEditComponent_ng_container_50_div_1_input_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 83);
  }
  if (rf & 2) {
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r16, "agent", "convertedToCurrency"));
  }
}
function PdaEditComponent_ng_container_50_div_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6A9}");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_ng_container_50_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "mat-slide-toggle", 98);
    \u0275\u0275listener("change", function PdaEditComponent_ng_container_50_div_1_div_28_Template_mat_slide_toggle_change_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const service_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAgreedNegotiateToggle(service_r16, $event.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", ((tmp_12_0 = service_r16.get("negotiate")) == null ? null : tmp_12_0.value) === "Y")("ngClass", ((tmp_13_0 = service_r16.get("negotiate")) == null ? null : tmp_13_0.value) === "Y" ? "toggle-negotiate" : "toggle-agreed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_14_0 = service_r16.get("negotiate")) == null ? null : tmp_14_0.value) === "Y" ? "Negotiate" : "Agreed", " ");
  }
}
function PdaEditComponent_ng_container_50_div_1_mat_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 100);
    \u0275\u0275listener("click", function PdaEditComponent_ng_container_50_div_1_mat_icon_29_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const service_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitServiceName(service_r16));
    });
    \u0275\u0275text(1, " check ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_ng_container_50_div_1_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 101);
    \u0275\u0275listener("click", function PdaEditComponent_ng_container_50_div_1_mat_icon_30_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const service_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteService(service_r16));
    });
    \u0275\u0275text(1, " delete ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_ng_container_50_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "h6");
    \u0275\u0275text(2, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getServiceNoteClass(service_r16));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getServiceNoteMessage(service_r16));
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_div_3_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 112);
    \u0275\u0275listener("click", function PdaEditComponent_ng_container_50_div_1_div_35_div_3_mat_checkbox_1_Template_mat_checkbox_click_0_listener() {
      const ctx_r20 = \u0275\u0275restoreView(_r20);
      const subService_r22 = ctx_r20.$implicit;
      const i_r23 = ctx_r20.index;
      const service_r16 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCheckboxClick(service_r16, subService_r22, i_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const subService_r22 = ctx.$implicit;
    const service_r16 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275styleProp("display", subService_r22.hide === "Y" ? "none" : "flex");
    \u0275\u0275property("checked", !subService_r22.optional);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subService_r22.name || ((tmp_18_0 = service_r16.get("service")) == null ? null : tmp_18_0.value), " ");
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275template(1, PdaEditComponent_ng_container_50_div_1_div_35_div_3_mat_checkbox_1_Template, 2, 4, "mat-checkbox", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const service_r16 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_13_0 = service_r16.get("subService")) == null ? null : tmp_13_0.value);
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "textarea", 116);
    \u0275\u0275text(2, "                                                ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const subServiceControl_r24 = ctx.$implicit;
    const j_r25 = ctx.index;
    const service_r16 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275styleProp("display", ((tmp_16_0 = service_r16.get("subService")) == null ? null : tmp_16_0.value[j_r25] == null ? null : tmp_16_0.value[j_r25].hide) === "Y" ? "none" : "block");
    \u0275\u0275property("formGroup", subServiceControl_r24);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", subServiceControl_r24.get("formattedSystemMovement"))("minWidth", 150)("maxWidth", 280)("bufferSpace", 30);
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275template(1, PdaEditComponent_ng_container_50_div_1_div_35_div_5_div_1_Template, 3, 7, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const service_r16 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_13_0 = service_r16.get("subService")) == null ? null : tmp_13_0.controls);
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "h6");
    \u0275\u0275text(2, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r16 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getServiceNoteClass(service_r16));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getServiceNoteMessage(service_r16));
  }
}
function PdaEditComponent_ng_container_50_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "div", 104);
    \u0275\u0275elementStart(2, "div", 105);
    \u0275\u0275template(3, PdaEditComponent_ng_container_50_div_1_div_35_div_3_Template, 2, 1, "div", 106);
    \u0275\u0275elementStart(4, "div", 107);
    \u0275\u0275template(5, PdaEditComponent_ng_container_50_div_1_div_35_div_5_Template, 2, 1, "div", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PdaEditComponent_ng_container_50_div_1_div_35_div_6_Template, 5, 2, "div", 109);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const service_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_12_0 = service_r16.get("subService")) == null ? null : tmp_12_0.value.length) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_13_0 = service_r16.get("subService")) == null ? null : tmp_13_0.controls == null ? null : tmp_13_0.controls.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowServiceNote(service_r16));
  }
}
function PdaEditComponent_ng_container_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "div", 76)(5, "div")(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 77);
    \u0275\u0275template(9, PdaEditComponent_ng_container_50_div_1_input_9_Template, 1, 1, "input", 78)(10, PdaEditComponent_ng_container_50_div_1_h6_10_Template, 2, 1, "h6", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 79)(12, "div", 80)(13, "span", 81);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 82);
    \u0275\u0275listener("input", function PdaEditComponent_ng_container_50_div_1_Template_input_input_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateMerakiServicegrandTotal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 80)(17, "span", 81);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 80);
    \u0275\u0275template(21, PdaEditComponent_ng_container_50_div_1_span_21_Template, 2, 1, "span", 84)(22, PdaEditComponent_ng_container_50_div_1_input_22_Template, 1, 1, "input", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 79)(24, "input", 86);
    \u0275\u0275listener("input", function PdaEditComponent_ng_container_50_div_1_Template_input_input_24_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calculateAgentServiceGrandTotal());
    })("keydown", function PdaEditComponent_ng_container_50_div_1_Template_input_keydown_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restrictDecimal($event, 2));
    })("blur", function PdaEditComponent_ng_container_50_div_1_Template_input_blur_24_listener() {
      \u0275\u0275restoreView(_r15);
      const service_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTotalBlur(service_r16, null));
    })("focus", function PdaEditComponent_ng_container_50_div_1_Template_input_focus_24_listener() {
      \u0275\u0275restoreView(_r15);
      const service_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTotalFocus(service_r16, null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 83);
    \u0275\u0275template(26, PdaEditComponent_ng_container_50_div_1_input_26_Template, 1, 1, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, PdaEditComponent_ng_container_50_div_1_span_27_Template, 2, 0, "span", 39)(28, PdaEditComponent_ng_container_50_div_1_div_28_Template, 4, 3, "div", 87)(29, PdaEditComponent_ng_container_50_div_1_mat_icon_29_Template, 2, 0, "mat-icon", 88)(30, PdaEditComponent_ng_container_50_div_1_mat_icon_30_Template, 2, 0, "mat-icon", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "h6");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, PdaEditComponent_ng_container_50_div_1_div_34_Template, 5, 2, "div", 90)(35, PdaEditComponent_ng_container_50_div_1_div_35_Template, 7, 3, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 92);
    \u0275\u0275element(37, "textarea", 93, 7)(39, "textarea", 94, 7)(41, "textarea", 95, 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_21_0;
    let tmp_27_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    const ctx_r25 = \u0275\u0275nextContext();
    const service_r16 = ctx_r25.$implicit;
    const i_r27 = ctx_r25.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", service_r16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMainServiceIndex(i_r27, ctx_r1.datasource.data));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_13_0 = service_r16.get("isNew")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_14_0 = service_r16.get("isNew")) == null ? null : tmp_14_0.value));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", service_r16.get(((tmp_16_0 = service_r16.get("isSubService")) == null ? null : tmp_16_0.value) ? "systemSubTotal" : "systemTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r16, "system", "ToCurrency"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", service_r16.get(((tmp_21_0 = service_r16.get("isSubService")) == null ? null : tmp_21_0.value) ? "sub_total" : "total"))("readonly", (ctx_r1.pdaEditData == null ? null : ctx_r1.pdaEditData.pda.is_manual_entry) === "N");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calculateSystemAndAgentValueWithRoe(service_r16, "agent", "ToCurrency"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowFlag(service_r16));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayAgreedAndNegotiateColumn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_27_0 = service_r16.get("isNew")) == null ? null : tmp_27_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeleteSpecificService(service_r16));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_29_0 = service_r16.get("info_msg")) == null ? null : tmp_29_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowServiceNote(service_r16) && ((tmp_30_0 = service_r16.get("subService")) == null ? null : tmp_30_0.value == null ? null : tmp_30_0.value.length) === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_31_0 = service_r16.get("subService")) == null ? null : tmp_31_0.value == null ? null : tmp_31_0.value.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", service_r16);
  }
}
function PdaEditComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PdaEditComponent_ng_container_50_div_1_Template, 43, 22, "div", 71);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const service_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_7_0 = service_r16.get("isSubService")) == null ? null : tmp_7_0.value));
  }
}
function PdaEditComponent_div_51_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrency, ")");
  }
}
function PdaEditComponent_div_51_input_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 123);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("system", "convertedToCurrency"));
  }
}
function PdaEditComponent_div_51_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("IN(", ctx_r1.convertedToCurrency, ")");
  }
}
function PdaEditComponent_div_51_input_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 123);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("agent", "convertedToCurrency"));
  }
}
function PdaEditComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "label", 120);
    \u0275\u0275text(3, "System Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "div", 121)(6, "span", 122);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 121)(10, "span", 122);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 121);
    \u0275\u0275template(14, PdaEditComponent_div_51_span_14_Template, 2, 1, "span", 124)(15, PdaEditComponent_div_51_input_15_Template, 1, 1, "input", 125);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 119)(17, "label", 120);
    \u0275\u0275text(18, "Agent Value Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 79)(20, "div", 121)(21, "span", 122);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 121)(25, "span", 122);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 121);
    \u0275\u0275template(29, PdaEditComponent_div_51_span_29_Template, 2, 1, "span", 124)(30, PdaEditComponent_div_51_input_30_Template, 1, 1, "input", 125);
    \u0275\u0275elementEnd()()()();
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
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.fromCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.agentServiceGrandTotal != null ? ctx_r1.agentServiceGrandTotal.toFixed(2) : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IN(", ctx_r1.toCurrency, ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSystemAndAgentTotal("agent", "ToCurrency"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayConvertedToCurrency);
  }
}
function PdaEditComponent_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r28 = ctx.$implicit;
    \u0275\u0275property("value", currency_r28);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r28, " ");
  }
}
function PdaEditComponent_mat_option_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r29 = ctx.$implicit;
    \u0275\u0275property("value", currency_r29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r29, " ");
  }
}
function PdaEditComponent_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Conversion Rate is required ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Advance percentage is required ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Advance percentage cannot exceed 100 ");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
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
function PdaEditComponent_div_89_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 131);
    \u0275\u0275listener("click", function PdaEditComponent_div_89_mat_icon_4_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshRemittance());
    });
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function PdaEditComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "span", 129);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PdaEditComponent_div_89_mat_icon_4_Template, 2, 0, "mat-icon", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Note: Remittance mismatch detected (Calculated: ", \u0275\u0275pipeBind2(3, 3, ctx_r1.calculatedRemittance, "1.2-2"), ", Entered: ", ctx_r1.pdaRemittanceFromResponse, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pdaStatus !== 7);
  }
}
function PdaEditComponent_button_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function PdaEditComponent_button_96_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pdaEditSubmitAndSave("Request Approval"));
    });
    \u0275\u0275text(1, " Request Approval");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disableTableInputFields || ctx_r1.pdaState === "N");
  }
}
function PdaEditComponent_button_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 133);
    \u0275\u0275listener("click", function PdaEditComponent_button_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pdaEditSubmitAndSave("Re Request"));
    });
    \u0275\u0275text(1, "Re Request");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disableTableInputFields || ctx_r1.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(2, _c02, ctx_r1.disableTableInputFields || ctx_r1.pdaState === "N"));
  }
}
function PdaEditComponent_button_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function PdaEditComponent_button_102_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPdaSubmit("Submit"));
    });
    \u0275\u0275text(1, "Submit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disableTableInputFields || ctx_r1.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(2, _c02, ctx_r1.disableTableInputFields || ctx_r1.pdaState === "N"));
  }
}
var PdaEditComponent = class _PdaEditComponent {
  fb;
  dialog;
  portAgentFormService;
  snackBar;
  portService;
  pdaService;
  clientService;
  router;
  overlay;
  vcr;
  fileUploadService;
  cdr;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  displayedColumns = ["S.No", "Service", "System Value", "Agent Value"];
  hasInitializedExpansion = false;
  portAgentForm;
  datasource = new MatTableDataSource([]);
  countryList = [];
  portList = [];
  vesselList = [];
  allVesselList = [];
  purposeList = [];
  cargoList = [];
  clientList = [];
  currencyList = [];
  portAgentList = [];
  fields = fields.map((field) => {
    if (field.name === "Vessel") {
      return __spreadProps(__spreadValues({}, field), { value: "vessel_id" });
    }
    return field;
  });
  serviceList = new PA_Rules();
  pdaEditData = null;
  merakiServiceList = new PA_Rules();
  mergedServiceList = [];
  agentServiceGrandTotal = null;
  agentServiceTotal = 0;
  merakiServiceTotal = 0;
  merakiServiceGrandTotal = 0;
  addedFields = [];
  canDeleteService = {};
  disableTableInputFields = false;
  portAgentReturnStatus = null;
  portAgentReturnMessage = "";
  displayAgreedAndNegotiateColumn = false;
  isNegotiateSelected = false;
  dis_id = sessionStorage.getItem("disbursement_seq");
  copyOfMasterData = {};
  isManualCreation = null;
  excludedFields = ["vessel_stay", "pda_roe", "voyage", "imo_number", "invoice_ref_no"];
  errMsg = "";
  pdaApprovalRequest = "";
  serviceName = "";
  pdaStatus = 0;
  communicationHistory = [];
  pdaState = "Y";
  showRemittanceMismatchNote = false;
  pdaRemittanceFromResponse = null;
  showCurrencyConversionMismatchBanner = false;
  calculatedCurrencyConversion = null;
  responseCurrencyConversion = null;
  displayFn = displayFn;
  autoCompleteFilter = autoCompleteFilter;
  validateVesselStay = validateVesselStay;
  restrictDecimal = restrictDecimal;
  getOptionValue = getOptionValuefortheFields;
  onTotalFocus = onTotalFocus;
  onTotalBlur = onTotalBlur;
  portServiceList = new PA_Rules();
  ConvertedFromCurrencyList = [];
  pda_custom_calculation;
  tariffRules = new PA_Rules();
  filteredOptions = {};
  fileList = [];
  previousPurposeId = null;
  previousServiceData = null;
  displayConvertedToCurrency = false;
  filteredPaymentToCurrency = new Observable();
  filteredConvertedToCurrency = new Observable();
  convertedToCurrencyValue = "";
  PaymentFromCurrencyList = [];
  isPurposeChanged = false;
  previousPortId = null;
  previousCountryId = null;
  isPortChanged = false;
  calculatedRemittance = null;
  isInitialLoad = true;
  isRefreshingRules = false;
  // Flag to track refresh rules scenario
  rulesWereRefreshed = false;
  // Flag to track if rules were refreshed for API
  additionalFieldsFromRules = [];
  servicesNotInTariffRules = new PA_Rules();
  constructor(fb, dialog, portAgentFormService, snackBar, portService, pdaService, clientService, router, overlay, vcr, fileUploadService, cdr) {
    this.fb = fb;
    this.dialog = dialog;
    this.portAgentFormService = portAgentFormService;
    this.snackBar = snackBar;
    this.portService = portService;
    this.pdaService = pdaService;
    this.clientService = clientService;
    this.router = router;
    this.overlay = overlay;
    this.vcr = vcr;
    this.fileUploadService = fileUploadService;
    this.cdr = cdr;
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
      advance_percentage: [null, [Validators.required, Validators.max(100)]],
      conversion_rate: [null, Validators.required],
      currency_conversion: [null],
      Pda_remittance: [null],
      pda_custom_calculation: [false],
      invoice_ref_no: [null, Validators.required],
      converted_curr_from: [null],
      converted_curr_to: [null],
      conversion_pda_rate: [null],
      pmt_curr_from: [null],
      pmt_curr_to: [null]
    });
  }
  getMainServiceIndex = getMainServiceSerialNumber;
  // Returns the 'services' FormArray from the main form for easy access and manipulation
  get serviceListFormArray() {
    return this.portAgentForm.get("serviceList");
  }
  modifiedFields = {};
  getFilteredOptions(field) {
    return this.filteredOptions[field.value] || [];
  }
  ngOnInit() {
    this.pda_custom_calculation = this.portAgentForm.get("pda_custom_calculation");
    this.getAllMasterData();
    this.fields.forEach((field) => {
      if (field.type === "select") {
        this.autoCompleteFilter(field, this.portAgentForm, this.filteredOptions);
      }
    });
    this.trackModifiedFieldChanges();
    this.pda_custom_calculation.valueChanges.subscribe((value) => {
    });
    this.filteredConvertedToCurrency = this.setupFilteredCurrency("converted_curr_to");
    this.filteredPaymentToCurrency = this.setupFilteredCurrency("pmt_curr_to");
  }
  setupFilteredCurrency(controlName) {
    return this.portAgentForm.controls[controlName].valueChanges.pipe(
      startWith(""),
      // Start with an empty string to handle the initial case
      map((value) => _filterCurrency(this.currencyList, value))
      // Apply filter to currency list
    );
  }
  // method to display the notification banner if the pda is return to  meraki
  returnRequestNotificationBanner(response) {
    const handleResponse = (resp) => {
      this.communicationHistory = resp.communication_histories;
      this.copyOfMasterData = resp?.pda_vessel_details?.vsl_dtls || {};
      this.portAgentReturnStatus = resp.return_status;
      this.portAgentReturnMessage = resp.return_message;
      this.pdaApprovalRequest = resp.is_approved;
      this.tariffRules = resp?.port_tariff_rule;
      if (this.portAgentReturnStatus === "Y") {
        this.dialog.open(NotificationDialogComponent, {
          data: {
            header: "Request Returned",
            text: this.portAgentReturnMessage,
            color: "#FFEADF"
          },
          panelClass: "custom-dialog-container",
          hasBackdrop: true,
          disableClose: true
        });
      } else if (this.pdaApprovalRequest === "Y") {
        this.dialog.open(NotificationDialogComponent, {
          data: {
            header: "Request Approved",
            text: "You have requested approval for this PDA. Please wait for the client to respond.",
            color: "#00FF007F"
          },
          panelClass: "custom-dialog-container",
          hasBackdrop: true,
          disableClose: true
        });
      } else if (this.pdaApprovalRequest === "N") {
        this.dialog.open(NotificationDialogComponent, {
          data: {
            header: "Request Rejected",
            text: "You have requested approval for this PDA. Please wait for the client to respond.",
            color: "#FFEADF"
          },
          panelClass: "custom-dialog-container",
          hasBackdrop: true,
          disableClose: true
        });
      }
    };
    if (response) {
      handleResponse(response);
      return;
    }
    this.pdaService.pdaEditFormData(this.dis_id).subscribe({
      next: (resp) => {
        handleResponse(resp);
      },
      error: (err) => {
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  // method to highlight the modified fields
  trackModifiedFieldChanges() {
    Object.keys(this.portAgentForm.controls).forEach((field) => {
      this.portAgentForm.get(field)?.valueChanges.subscribe((value) => {
        let originalValue = this.copyOfMasterData[field];
        if (field === "country_id" && this.pdaEditData?.pda?.portagent_pda_data?.country) {
          originalValue = this.pdaEditData.pda.portagent_pda_data.country.country_id;
        } else if (field === "port_id" && this.pdaEditData?.pda?.portagent_pda_data?.port) {
          originalValue = this.pdaEditData.pda.portagent_pda_data.port.port_id;
        }
        const currentVal = value === null || value === void 0 ? "" : String(value).trim();
        const originalVal = originalValue === null || originalValue === void 0 ? "" : String(originalValue).trim();
        this.modifiedFields[field] = currentVal !== originalVal;
      });
    });
  }
  // method to get the modified fields
  getModifiedFields() {
    const details = this.pdaEditData?.pda?.pda_vessel_details;
    this.modifiedFields = {};
    if (details) {
      Object.keys(details).forEach((key) => {
        this.modifiedFields[key] = !!details[key]?.modified;
      });
    }
  }
  isExcluded(fieldName) {
    return this.excludedFields.includes(fieldName.toLowerCase());
  }
  // method to calculate the vessel stay on date change
  onDateChange() {
    const eta = this.portAgentForm.get("eta")?.value;
    const etd = this.portAgentForm.get("etd")?.value;
    const stay = calculateVesselStay(eta, etd);
    if (stay === "eta greater than etd") {
      this.portAgentForm.get("vessel_stay")?.setValue(null);
      this.portAgentForm.get("etd")?.setValue(null);
    } else {
      this.portAgentForm.get("vessel_stay")?.setValue(stay);
    }
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
  isFieldReadonly(field) {
    if (field.readOnly && this.pdaEditData?.pda.is_manual_entry === "N") {
      return true;
    }
    if (field.name === "FromCurrency") {
      return true;
    }
    return false;
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
          this.filteredOptions[field.value] = field.options;
          break;
        default:
      }
    });
    this.getPdaEditData();
  }
  // method to filter the ports based on country
  portByCountry(fieldName, value) {
    if (fieldName === "Country") {
      return this.portService.getPortsByCountryId(value).pipe(tap((ports) => {
        this.portList = ports;
        this.fields.forEach((field) => {
          if (field.name === "Port") {
            field.options = this.portList.map((port) => ({
              port_id: port.port_id,
              name: port.name
            }));
          }
          this.filteredOptions[field.value] = field.options;
          this.portAgentForm.get("port_id")?.setValue(this.pdaEditData.pda.portagent_pda_data.port.port_id);
        });
        const port_id = this.portAgentForm.get("port_id")?.value;
        this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
      }), catchError((error) => {
        this.portList = [];
        this.errMsg = error?.error?.error || "Something went wrong, please try again later.";
        this.snackBar.showError(this.errMsg);
        return of([]);
      }), finalize(() => {
        this.loader.hide();
      }));
    }
    return of(null);
  }
  // method to post the pda edit data
  onPdaSubmit(buttonName) {
    if (!this.portAgentForm.valid) {
      this.portAgentForm.markAllAsTouched();
      this.snackBar.showError("Please fill all required fields");
      return;
    }
    this.loader.show();
    this.getUploadedFiles().subscribe((files) => {
      if (this.fileList.length === 0) {
        this.snackBar.showError("Please upload files before submitting.");
        this.loader.hide();
        return;
      }
      if (!this.agentServiceGrandTotal || this.agentServiceGrandTotal === 0) {
        this.snackBar.showError("Please enter the agent value");
        return;
      }
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        disableClose: true,
        panelClass: "sweet-alert-style",
        data: {
          header: "Submit Data",
          text: "Once submitted, this PDA cannot be edited. If you do not wish to submit now, please click 'Save' to keep it in draft and modify it later.",
          button: "Save"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result === "save") {
          this.pdaEditSubmitAndSave("save").subscribe((result2) => {
            if (result2) {
              const dialogRefChild = this.dialog.open(ConfirmationDialogComponent, {
                data: {
                  header: "Confirm Navigation",
                  text: "Are you sure you want to navigate to the disbursement page?"
                }
              });
              dialogRefChild.afterClosed().subscribe((result3) => {
                if (result3) {
                  this.router.navigate(["/layout/disbursement"]);
                }
              });
            }
          });
        } else if (result) {
          this.pdaEditSubmitAndSave(buttonName).subscribe((result2) => {
          });
        }
      });
    });
  }
  pdaEditSubmitAndSave(buttonName) {
    if (buttonName === "Re Request") {
      if (this.portAgentReturnStatus === "Y") {
        this.openReRequestEmailDialog("Re Request");
      } else {
        const fieldsToExclude = [
          "advance_percentage",
          "conversion_rate",
          "currency_conversion",
          "pda_currency_from",
          "pda_currency_to",
          "pda_remittance"
        ];
        fieldsToExclude.forEach((field) => {
          const control = this.portAgentForm.get(field);
          if (control) {
            control.clearValidators();
            control.updateValueAndValidity();
          }
        });
        this.portAgentForm.markAllAsTouched();
        if (this.portAgentForm.valid) {
          const formData = this.portAgentForm.getRawValue();
          const submitData = this.transformJsonData(formData);
          this.loader.show();
          submitData.is_re_request = "Y", this.pdaService.pdaEditDataToDb(submitData).subscribe({
            next: (response) => {
              this.snackBar.showSuccess(response.message);
              this.router.navigate(["/layout/disbursement"]);
              this.loader.hide();
            },
            error: (err) => {
              this.loader.hide();
              this.errMsg = err?.error?.error || "Something went wrong please try again later.";
              this.snackBar.showError(this.errMsg);
            }
          });
        }
      }
    } else if (buttonName === "Request Approval") {
      if (this.portAgentForm.valid) {
        this.openReRequestEmailDialog("Request Approval");
      } else {
        this.portAgentForm.markAllAsTouched();
        this.snackBar.showError("Please fill all required fields");
      }
    } else {
      this.getUploadedFiles().subscribe({
        next: (files) => {
          const formData = this.portAgentForm.getRawValue();
          const submitData = this.transformJsonData(formData);
          submitData.pda_submit = buttonName === "Submit" ? "Y" : "N";
          submitData.pda_save = buttonName === "save" ? "Y" : "N";
          this.loader.show();
          this.pdaService.pdaEditDataToDb(submitData).pipe(map((response) => {
            this.snackBar.showSuccess(response.message);
            this.loader.hide();
            return true;
          }), catchError((err) => {
            this.loader.hide();
            this.errMsg = err?.error?.error || "Something went wrong, please try again later.";
            this.snackBar.showError(this.errMsg);
            return of(false);
          })).subscribe((result) => {
            if (buttonName === "Submit") {
              this.router.navigate(["/layout/disbursement"]);
            } else {
              this.getPdaEditData();
            }
          });
        },
        error: (err) => {
          this.loader.hide();
          this.errMsg = err?.error?.error || "Error fetching file data. Please try again later.";
          this.snackBar.showError(this.errMsg);
        }
      });
    }
    return of(false);
  }
  // method to open the email dialog  if the port agent return the request to meraki
  openReRequestEmailDialog(buttonName) {
    const portAgent = this.portAgentList.filter((agent) => agent.company_id === this.portAgentForm.get("portagent_id")?.value);
    const clientEmail = this.clientList.filter((client) => client.company_id === this.portAgentForm.get("client_id")?.value);
    let dialogRef;
    if (buttonName === "Re Request") {
      dialogRef = this.dialog.open(EmailDialogComponent, {
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
    } else if (buttonName === "Request Approval") {
      dialogRef = this.dialog.open(ApprovalRequestDialogComponent, {
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
            grand_Total: this.agentServiceGrandTotal !== null ? this.agentServiceGrandTotal.toFixed(2) : null
          }
        }
      });
    }
    if (!dialogRef) {
      return;
    }
    dialogRef.afterClosed().subscribe((data) => {
      if (!data)
        return;
      const submitData = this.transformJsonData(this.portAgentForm.getRawValue());
      if (buttonName === "Re Request") {
        submitData.email_to = data.to;
        submitData.email_cc = data.cc;
        submitData.email_signature = data.email_signature;
        submitData.update_signature = data.update_signature;
      } else if (buttonName === "Request Approval") {
        submitData.pda_save = "Y", submitData.portagent_pda_data.services = {
          items: data.services,
          grand_total: this.agentServiceGrandTotal
        };
      }
      this.loader.show();
      this.pdaService.pdaEditDataToDb(submitData).subscribe({
        next: (response) => {
          const payload = {
            disbursement_seq: response.disbursement_seq,
            email_to: data.to,
            email_cc: data.cc,
            meraki_cmt_to_client: data.meraki_comment_to_client,
            email_signature: data.email_signature,
            update_signature: data.update_signature
          };
          if (buttonName === "Request Approval") {
            this.pdaService.clientRequestPda(payload).subscribe({
              next: () => {
                this.loader.hide();
                this.showEmailSentNotification(data.to);
              },
              error: (err) => {
                this.loader.hide();
                this.handleError(err);
              }
            });
          } else {
            this.loader.hide();
            this.showEmailSentNotification(data.to);
          }
        },
        error: (err) => {
          this.loader.hide();
          this.handleError(err);
        }
      });
    });
  }
  // Method to show the Email Sent Notification dialog
  showEmailSentNotification(email) {
    const dialogRef = this.dialog.open(EmailSentNotificationComponent, {
      disableClose: true,
      panelClass: "email-dialog-style",
      width: "400px",
      height: "150px",
      data: { email }
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.router.navigate(["/layout/disbursement"]);
      }
    });
  }
  // Method to handle error and display a message
  handleError(err) {
    this.errMsg = err?.error?.error || "Something went wrong, please try again later.";
    this.snackBar.showError(this.errMsg);
  }
  // method to exclude some fields for validation
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
    if (this.isFormValidExcept(["advance_percentage", "conversion_rate", "serviceList"])) {
      this.pdaEditSubmitAndSave(buttonName).subscribe((result) => {
        if (result) {
          const dialogRefChild = this.dialog.open(ConfirmationDialogComponent, {
            data: {
              header: "Confirm Navigation",
              text: "Do you wish to navigate to the disbursement page?"
            }
          });
          dialogRefChild.afterClosed().subscribe((result2) => {
            if (result2) {
              this.router.navigate(["/layout/disbursement"]);
            } else {
              this.getPdaEditData();
            }
          });
        }
      });
    } else {
      Object.keys(this.portAgentForm.controls).forEach((key) => {
        if (["advance_percentage", "conversion_rate", "serviceList"].includes(key))
          return;
        const control = this.portAgentForm.get(key);
        control?.markAsTouched();
        control?.updateValueAndValidity();
      });
      this.snackBar.showError("Please fill all required fields");
    }
  }
  // method to process the serviceList
  populateServicesFromList() {
    this.serviceListFormArray.clear();
    this.datasource.data = [];
    if (this.mergedServiceList && Array.isArray(this.mergedServiceList)) {
      this.mergedServiceList.forEach((item) => {
        const subServiceArray = this.fb.array((item.subService || []).map((sub) => this.fb.group({
          SNO: [item.SNO],
          name: [sub.name],
          purpose: [sub.purpose],
          basic_value: [sub.basic_value],
          calculated_basic_value: [sub.calculated_basic_value],
          movement: [sub.movement],
          tariff_percent: [sub.tariff_percent],
          formula_result: [sub.formula_result],
          optional: [sub.optional === "Y"],
          operational_flag: [sub.operational_flag],
          sub_total: [{ value: 0, disabled: this.disableTableInputFields }],
          formula_inputs: [sub.formula_inputs],
          hide: [sub.hide || "N"],
          unique_key: [sub.unique_key],
          isSubService: [true],
          systemFormulaInputs: [sub.systemFormulaInputs || []],
          systemMovement: [sub.systemMovement || 0],
          formattedSystemMovement: [(() => {
            const movement = sub.systemMovement;
            if (typeof movement === "string" && movement.includes(":")) {
              const parts = movement.split(":");
              const result = parts[1] || 1;
              return result;
            }
            return movement || 1;
          })()],
          systemSubTotal: [{ value: sub.systemSubTotal, disabled: this.disableTableInputFields }]
        })));
        let initialAgreedOrNegotiate;
        if (item.negotiate === "N" && item.agreed === "N" && item.total > item.systemTotal) {
          initialAgreedOrNegotiate = "Negotiate";
        } else {
          if (this.isManualCreation === "N") {
            if (item.negotiate === "Y") {
              initialAgreedOrNegotiate = "Negotiate";
            } else if (item.agreed === "Y") {
              initialAgreedOrNegotiate = "Agreed";
            } else {
              initialAgreedOrNegotiate = "Agreed";
            }
          } else {
            initialAgreedOrNegotiate = item.negotiate === "Y" ? "Negotiate" : item.agreed === "Y" ? "Agreed" : "Agreed";
          }
        }
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
          meraki_feedback: [{ value: item.meraki_feedback || "", disabled: this.disableTableInputFields }],
          meraki_remark_client: [item.meraki_remark_client || ""],
          client_comment: [item.client_comment || ""],
          formated_client_comment: [displayClientComment(item.client_comment) || ""],
          client_option: [item.client_option || ""],
          info_msg: [item.info_msg || ""],
          negotiate: [initialAgreedOrNegotiate === "Negotiate" ? "Y" : "N"],
          agreed: [initialAgreedOrNegotiate === "Agreed" ? "Y" : "N"],
          subService: subServiceArray,
          isSubService: [false],
          expanded: [false],
          systemTotal: [typeof item.systemTotal === "string" ? 0 : item.systemTotal || 0],
          agreedOrNegotiate: [initialAgreedOrNegotiate, Validators.required],
          display_to_client: [item.display_to_client || "N"]
          //previous inclded the flag  to differentiate between manual check and automatic display of toggle button
          // manualAgreeOrNegotiate: ["N"]
        });
        this.serviceListFormArray.push(mainServiceGroup);
      });
    }
    this.updateDatasource();
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
    let isExpanded = false;
    this.hasInitializedExpansion = false;
    for (let service of this.serviceListFormArray.controls) {
      const subServices = service.get("subService")?.value || [];
      if (!this.hasInitializedExpansion && subServices.length > 0) {
        service.get("expanded")?.setValue(true);
        isExpanded = true;
      }
      this.datasource.data.push(service);
      if (service.get("expanded")?.value) {
        const subServiceFormArray = service.get("subService");
        subServiceFormArray.controls.forEach((subServiceCtrl) => {
          this.datasource.data.push(subServiceCtrl);
        });
      }
    }
    this.hasInitializedExpansion = true;
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
      formated_client_comment: [""],
      client_comment: [""],
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
      },
      error: (err) => {
        this.loader.hide();
        this.errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  buildVesselOptions(vessels) {
    this.allVesselList = vessels || [];
    this.vesselList = this.allVesselList;
    this.fields.forEach((field) => {
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
    this.clientService.VslListFromDb(vslpayload).subscribe({
      next: (response) => {
        const mergedList = mergeResponseVesselIntoList(response.assigned_vessels || [], this.pdaEditData?.pda?.pda_vessel_details);
        this.buildVesselOptions(mergedList);
        this.portAgentForm.get("vessel_id")?.setValue(this.pdaEditData?.pda?.pda_vessel_details?.vessel_id);
      },
      error: (error) => {
        this.vesselList = [];
        this.errMsg = error?.error?.error || "Failed to fetch vessel details";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  getPdaEditData() {
    this.loader.show();
    this.pdaService.pdaEditFormData(this.dis_id).pipe(concatMap((response) => {
      this.isManualCreation = response.pda.is_manual_entry;
      this.pdaEditData = response;
      this.portAgentReturnStatus = response.return_status;
      this.pdaState = response.pda.state || "Y";
      this.disableFields(response.pda.is_manual_entry, response.return_status);
      this.pdaStatus = response.pda.status;
      const countryId = response.country_id;
      if (countryId) {
        const currency = getCurrencyFromCountry(this.countryList, countryId);
        this.portAgentForm.patchValue({
          pda_currency_from: currency
        });
        return this.portByCountry("Country", countryId).pipe(map(() => response));
      } else {
        return of(response);
      }
    }), concatMap((response) => {
      if (response.pda.is_manual_entry === "Y") {
        const requestBody = {
          page: 1,
          page_size: 1,
          query_name: "",
          port_id: response.pda.portagent_pda_data.port.port_id
        };
        return this.portService.getTariffRules(requestBody).pipe(map((tariffResponse) => {
          this.serviceList = tariffResponse?.data[0]?.rules;
          this.merakiServiceList = response.pda.meraki_pda_data.services;
          const purpose = response.pda?.portagent_pda_data?.purpose.name;
          this.portServiceList = response.pda?.portagent_pda_data?.services;
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          if (this.serviceList.items.length > 0) {
            this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList);
            this.populateServicesFromList();
          }
          this.agentServiceGrandTotal = isNaN(Number(response.pda.portagent_pda_data.services?.grand_total)) ? null : Number(response.pda.portagent_pda_data.services?.grand_total);
          this.agentServiceTotal = response.pda.portagent_pda_data.services.service_total;
          this.merakiServiceGrandTotal = response.pda.meraki_pda_data.services.grand_total ?? 0;
          this.merakiServiceTotal = response.pda.meraki_pda_data.services.service_total ?? 0;
          return response;
        }));
      } else {
        if (response.pda.status === 1 && response.pda?.meraki_pda_data?.services?.items.length === 0) {
          this.serviceList = new PA_Rules();
          this.merakiServiceList = new PA_Rules();
          this.merakiServiceTotal = 0;
          this.agentServiceTotal = 0;
          this.agentServiceGrandTotal = null;
        } else {
          const columnsToAdd = ["Agreed / Negotiate"];
          const newColumns = columnsToAdd.filter((col) => !this.displayedColumns.includes(col));
          if (newColumns.length > 0) {
            this.displayedColumns.push(...newColumns);
            this.displayAgreedAndNegotiateColumn = true;
          }
          this.portServiceList = response.pda?.portagent_pda_data?.services;
          const purpose = response.pda?.portagent_pda_data?.purpose.name;
          if (purpose) {
            this.serviceList.items = response.pda?.portagent_pda_data?.services?.items?.filter((item) => item.purpose === purpose || item.purpose === null || item.purpose === "").map((item) => {
              item.total = typeof item.total === "string" ? 0 : item.total;
              return item;
            });
          }
          if (this.portAgentReturnStatus === "Y") {
            this.serviceList = response.pda?.portagent_pda_data?.services;
          }
          this.merakiServiceList = response.pda?.meraki_pda_data?.services;
          this.agentServiceGrandTotal = isNaN(Number(response.pda.portagent_pda_data?.services?.grand_total)) ? null : Number(response.pda.portagent_pda_data?.services?.grand_total);
          this.agentServiceTotal = response.pda.portagent_pda_data?.services.service_total;
          this.merakiServiceTotal = response.pda.meraki_pda_data?.services.service_total;
          this.merakiServiceGrandTotal = response.pda.meraki_pda_data?.services.grand_total ?? 0;
          this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList);
          this.populateServicesFromList();
        }
        return of(response);
      }
    }), concatMap((response) => {
      const purposeId = response.purpose_id;
      this.previousPurposeId = purposeId;
      this.previousPortId = response.port_id;
      this.previousCountryId = response.country_id;
      const portAgentFormData = response.pda.portagent_pda_data;
      const vesselDetails = response.pda.pda_vessel_details;
      const customCalcValue = response?.pda?.pda_custom_calculation === "Y";
      this.pda_custom_calculation = new FormControl(customCalcValue);
      this.portAgentForm.patchValue({
        client_id: response.client_id,
        portagent_id: response.portagent_id,
        cargo_id: portAgentFormData?.cargo?.cargo_id,
        country_id: portAgentFormData?.country?.country_id,
        port_id: portAgentFormData?.port?.port_id,
        imo_number: vesselDetails?.vessel_imo,
        vessel_id: vesselDetails?.vessel_id,
        vessel: vesselDetails?.vessel_name,
        nrt: vesselDetails?.nrt?.current || null,
        grt: vesselDetails?.grt?.current || null,
        rgrt: vesselDetails?.rgrt?.current || null,
        type: vesselDetails?.type?.current || null,
        loa: vesselDetails?.loa?.current || null,
        beam: vesselDetails?.beam?.current || null,
        depth: vesselDetails?.depth?.current || null,
        dwt: vesselDetails?.dwt?.current || null,
        purpose_id: portAgentFormData?.purpose?.purpose_id,
        eta: response?.eta,
        etd: response?.etd,
        vessel_stay: convertMinutesToDaysOrHours(response.vessel_stay),
        pda_roe: response?.pda.pda_roe,
        voyage: response?.voyage,
        advance_percentage: response?.pda?.advance_percentage,
        Pda_remittance: response?.pda?.pda_remittance?.toFixed(2),
        conversion_rate: response?.pda.conversion_rate,
        currency_conversion: response?.pda?.portagent_pda_amount,
        pda_currency_from: response?.pda.pda_currency_from,
        pda_currency_to: response?.pda.pda_currency_to,
        invoice_ref_no: response?.pda.invoice_ref_no,
        converted_curr_from: response?.pda.converted_curr_from || response?.pda.pda_currency_from,
        converted_curr_to: response?.pda.converted_curr_to || response?.pda.pda_currency_to,
        conversion_pda_rate: response?.pda.conversion_pda_rate || 1,
        pmt_curr_from: response?.pda.pmt_curr_from || response?.pda.pda_currency_from,
        pmt_curr_to: response?.pda.pmt_curr_to || response?.pda.pda_currency_to
      });
      this.copyOfMasterData = __spreadValues({}, this.portAgentForm.getRawValue());
      this.displayConvertedToCurrency = !!response?.pda?.converted_curr_to && response?.pda?.converted_curr_to !== response?.pda?.pda_currency_to && response?.pda?.converted_curr_to !== response?.pda?.pda_currency_from;
      this.convertedToCurrencyValue = response?.pda.converted_curr_to;
      this.ConvertedFromCurrencyList = [this.fromCurrency, this.toCurrency];
      this.PaymentFromCurrencyList = [this.fromCurrency, this.toCurrency];
      if (response?.port_tariff_rule) {
        this.tariffRules = response.port_tariff_rule;
        this.portServiceList = response.port_tariff_rule;
      } else {
        this.tariffRules = response?.port_tariff_rule;
      }
      this.pdaRemittanceFromResponse = response?.pda?.pda_remittance;
      this.responseCurrencyConversion = response?.pda?.portagent_pda_amount;
      this.handleAdditionalFields(response);
      const advancePercentage = response?.pda?.advance_percentage;
      const currencyConversion = response?.pda?.currency_conversion;
      if (advancePercentage !== null && currencyConversion !== null) {
        this.calculatedRemittance = Number(advancePercentage / 100 * currencyConversion).toFixed(2);
      }
      this.calculateCurrencyConversionForComparison();
      this.checkRemittanceMismatch();
      this.checkCurrencyConversionMismatch();
      this.getModifiedFields();
      if (response.pda.status === 7) {
        this.portAgentForm.disable();
        this.disableTableInputFields = true;
      }
      if (response.pda.status === 7) {
        const mergedList = mergeResponseVesselIntoList([], vesselDetails);
        this.buildVesselOptions(mergedList);
        return of(response);
      }
      const vslpayload = {
        company_id: response.client_id,
        fields: ["assigned_unassigned"]
      };
      return this.clientService.VslListFromDb(vslpayload).pipe(map((vesselResponse) => {
        const mergedList = mergeResponseVesselIntoList(vesselResponse.assigned_vessels || [], vesselDetails);
        this.buildVesselOptions(mergedList);
        this.portAgentForm.get("vessel_id")?.setValue(this.pdaEditData?.pda?.pda_vessel_details?.vessel_id);
        return response;
      }), catchError((error) => {
        this.vesselList = [];
        this.errMsg = error?.error?.error || "Failed to fetch vessel details";
        this.snackBar.showError(this.errMsg);
        return of(response);
      }));
    }), catchError((err) => {
      this.snackBar.showError("Something went wrong please try again later.");
      return of(null);
    }), finalize(() => {
      this.loader.hide();
      this.isInitialLoad = false;
    })).subscribe((response) => {
      if (response) {
        this.returnRequestNotificationBanner(this.pdaEditData);
      }
    });
  }
  mergeSystemValueFromMerakiJson(merakiItems, portAgentItems) {
    if (this.isRefreshingRules) {
      return this.mergeAllMerakiServicesWithPortAgent(merakiItems, portAgentItems);
    }
    return portAgentItems?.items?.map((portAgent) => {
      const matchedMerakiService = merakiItems?.items.find((meraki) => {
        const serviceMatch = meraki?.service === portAgent.service;
        const purposeMatch = (meraki?.purpose || "") === (portAgent.purpose || "");
        return serviceMatch && purposeMatch;
      });
      const systemTotal = matchedMerakiService ? matchedMerakiService.total || 0 : 0;
      const mergedSubServices = (matchedMerakiService?.subService || []).map((sub) => {
        return __spreadProps(__spreadValues({}, sub), {
          systemSubTotal: sub?.sub_total || 0,
          systemFormulaInputs: sub?.formula_inputs || [],
          systemMovement: sub?.movement || ""
        });
      });
      return __spreadProps(__spreadValues({}, portAgent), {
        systemTotal,
        subService: mergedSubServices,
        info_msg: matchedMerakiService?.info_msg || portAgent.info_msg || ""
      });
    });
  }
  mergeAllMerakiServicesWithPortAgent(merakiItems, portAgentItems) {
    return merakiItems?.items?.map((meraki) => {
      const matchedPortAgentService = portAgentItems?.items?.find((portAgent) => {
        const serviceMatch = meraki?.service === portAgent.service;
        const purposeMatch = (meraki?.purpose || "") === (portAgent.purpose || "");
        return serviceMatch && purposeMatch;
      });
      const mergedSubServices = (meraki?.subService || []).map((sub) => {
        return __spreadProps(__spreadValues({}, sub), {
          systemSubTotal: sub?.sub_total || 0,
          systemFormulaInputs: sub?.formula_inputs || [],
          systemMovement: sub?.movement || ""
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
        subService: mergedSubServices,
        info_msg: meraki?.info_msg || ""
      });
    });
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
          const currency = getCurrencyFromCountry(this.countryList, event.value);
          this.portAgentForm.patchValue({
            pda_currency_from: currency
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
          this.isPortChanged = true;
          this.addedFields = [];
          this.portAgentForm.patchValue({
            port_id: null,
            purpose_id: null,
            converted_curr_from: null,
            pmt_curr_from: null
          });
          this.PaymentFromCurrencyList = [], this.filteredConvertedToCurrency = new Observable();
          this.serviceList = new PA_Rules();
          this.merakiServiceList = new PA_Rules();
          this.agentServiceGrandTotal = 0;
          this.agentServiceTotal = 0;
          this.merakiServiceGrandTotal = 0;
          this.merakiServiceTotal = 0;
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
          dwt: vessel.dwt,
          vessel_id: vessel.vessel_id,
          vessel: vessel.name,
          type: vessel.type
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
          this.formatFieldData(this.fields);
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
          this.isPortChanged = true;
          this.previousPortId = port_id;
          this.tariffrulesByPort(port_id);
          this.addedFields = [];
          this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
          this.portAgentForm.get("purpose_id")?.setValue(null);
          this.serviceList = new PA_Rules();
          this.merakiServiceList = new PA_Rules();
          this.agentServiceGrandTotal = 0;
          this.agentServiceTotal = 0;
          this.merakiServiceGrandTotal = 0;
          this.merakiServiceTotal = 0;
          this.datasource.data = [];
          this.previousPurposeId = null;
          removeAddedFieldsAndControls(this.portAgentForm, this.addedFields, this.fields);
        } else {
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
    } else if (fieldName === "Purpose") {
      const purposeId = event.value;
      const portId = this.portAgentForm.get("port_id")?.value;
      this.isPurposeChanged = true;
      if (!this.previousPurposeId && portId) {
        this.previousPurposeId = purposeId;
        return;
      }
      if (this.previousPurposeId && purposeId !== this.previousPurposeId) {
        this.previousServiceData = {
          serviceList: JSON.parse(JSON.stringify(this.serviceList)),
          mergedServiceList: JSON.parse(JSON.stringify(this.mergedServiceList)),
          serviceFormArray: this.serviceListFormArray.getRawValue(),
          agentServiceGrandTotal: this.agentServiceGrandTotal !== null ? this.agentServiceGrandTotal.toFixed(2) : null
        };
        this.showDataLostWarning();
      } else {
        this.previousPurposeId = purposeId;
        const purpose = getPurposeName(this.purposeList, purposeId);
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
        }
        this.populateServicesFromList();
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
      this.calculatePercentage("Conversion Rate");
    }
  }
  transformJsonData(formData) {
    const merakiPdaData = this.pdaEditData.pda.meraki_pda_data;
    const portAgentPdaData = this.pdaEditData.pda.portagent_pda_data;
    return {
      disbursement_seq: this.pdaEditData.disbursement_seq,
      disbursement_id: this.pdaEditData.disbursement_id,
      port_tariff_rule: this.isPurposeChanged && this.isPortChanged ? this.tariffRules : this.tariffRules?.items?.length > 0 ? this.UpdateModifiedMovementToTariifRules() : null,
      client_id: formData.client_id,
      portagent_id: formData.portagent_id,
      country_id: formData.country_id,
      port_id: formData.port_id,
      pda_vsl_id: this.pdaEditData.vsl_id,
      purpose_id: formData.purpose_id,
      cargo_id: formData.cargo_id,
      voyage: formData.voyage,
      roe: formData.pda_roe,
      eta: formData.eta ? formatToLocalISOString(formData.eta) : null,
      etd: formData.etd ? formatToLocalISOString(formData.etd) : null,
      pda_currency_from: formData.pda_currency_from,
      pda_currency_to: formData.pda_currency_to,
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
      pda_custom_calculation: this.pdaEditData?.pda?.pda_custom_calculation || null,
      advance_percentage: formData.advance_percentage || null,
      conversion_rate: formData.conversion_rate || null,
      currency_conversion: formData.currency_conversion || null,
      pda_remittance: formData.Pda_remittance || null,
      meraki_pda_data: {
        disbursement_seq: merakiPdaData?.disbursement_seq || null,
        voyage: merakiPdaData?.voyage || null,
        eta: merakiPdaData?.eta || null,
        etd: merakiPdaData?.etd || null,
        pda_roe: merakiPdaData?.pda_roe || null,
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
          port_id: formData.port_id,
          name: this.portList.find((port) => port.port_id === formData.port_id)?.name || ""
        },
        country: {
          country_id: formData.country_id || "",
          name: this.countryList.find((country) => country.country_id === formData.country_id)?.name || ""
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
      portagent_pda_data: {
        disbursement_seq: portAgentPdaData?.disbursement_seq,
        voyage: formData.voyage,
        eta: formData.eta,
        etd: formData.etd,
        pda_roe: formData.pda_roe,
        vessel_stay: formData.vessel_stay,
        client: {
          client_id: formData.client_id,
          name: this.clientList.find((client) => client.company_id === formData.client_id)?.company_name || "",
          address: this.clientList.find((client) => client.company_id === formData.client_id)?.address || ""
        },
        port_agent: {
          name: this.portAgentList.find((agent) => agent.company_id === formData.port_agent_id)?.company_name || "",
          address: portAgentPdaData?.port_agent.address,
          bank_details: {
            country_name: portAgentPdaData?.port_agent.bank_details.company_name,
            beneficiary_acc_holder_name: portAgentPdaData?.port_agent.bank_details.beneficiary_acc_holder_name,
            bank_name: portAgentPdaData?.port_agent.bank_details.bank_name,
            correspondent_account_number: portAgentPdaData?.port_agent.bank_details.correspondent_account_number,
            current_account_number: portAgentPdaData?.port_agent.bank_details.current_account_number,
            ifsc_code: portAgentPdaData?.port_agent.bank_details.ifsc_code,
            bik_code: portAgentPdaData?.port_agent.bank_details.bik_code,
            swift_code: portAgentPdaData?.port_agent.bank_details.swift_code,
            currency: portAgentPdaData?.port_agent.bank_details.currency,
            inn_code: portAgentPdaData?.port_agent.bank_details.inn_code,
            iban_number: portAgentPdaData?.port_agent.bank_details.iban_number,
            bic_code: portAgentPdaData?.port_agent.bank_details.bic_code,
            branch_address: portAgentPdaData?.port_agent.bank_details.branch_address
          }
        },
        port: {
          port_id: formData.port_id,
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
        pda_custom_calculation: this.pdaEditData?.pda_custom_calculation || null,
        advance_percentage: formData.advance_percentage || null,
        conversion_rate: formData.conversion_rate || null,
        currency_conversion: formData.currency_conversion || null,
        pda_remittance: formData.pda_remittance || null,
        is_rules_refreshed: this.rulesWereRefreshed ? "Y" : "N",
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
          additional_properties: this.getAdditionalPropertiesFromForm(),
          additional_properties_object: this.getAdditionalPropertiesObjectFromForm()
        },
        services: this.isPurposeChanged ? this.serviceList : this.transFormServiceData(this.serviceList, "agentData")
      },
      email_to: this.pdaEditData.pda.email_to || null,
      email_cc: this.pdaEditData.pda.email_cc || null,
      pda_save: "N",
      pda_submit: "N",
      is_re_request: "N",
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      meraki_pda_amount: this.getMerakiPdaAmount(),
      portagent_pda_amount: formData.currency_conversion != null ? Number(formData.currency_conversion).toFixed(2) : null,
      file_list: this.fileList.filter((file) => file.sync === "N").map((file) => file.file_id) || [],
      converted_curr_from: formData.converted_curr_from || null,
      converted_curr_to: formData.converted_curr_to || null,
      conversion_pda_rate: formData.conversion_pda_rate || null,
      pmt_curr_from: formData.pmt_curr_from || null,
      pmt_curr_to: formData.pmt_curr_to || null
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
          pa_remark: value.pa_remark ?? null,
          meraki_feedback: value.meraki_feedback ?? null,
          meraki_remark_client: value.meraki_remark_client ?? null,
          client_comment: value.client_comment ?? null,
          client_option: value.client_option ?? null,
          info_msg: value.info_msg ?? null,
          negotiate: value.agreedOrNegotiate === "Negotiate" && serviceData === "agentData" ? "Y" : "N",
          agreed: value.agreedOrNegotiate === "Agreed" && serviceData === "agentData" ? "Y" : "N",
          display_to_client: value.display_to_client,
          subService: (value.subService || []).map((sub) => ({
            name: sub.name ?? null,
            purpose: sub.purpose ?? null,
            basic_value: sub.basic_value ?? null,
            calculated_basic_value: sub.calculated_basic_value ?? null,
            movement: serviceData === "merakiData" ? replaceMovementPart(sub.movement, 1, sub.formattedSystemMovement) || "1" : sub.movement,
            tariff_percent: sub.tariff_percent ?? 1,
            formula_result: sub.formula_result ?? "Basic Value * movement * Tariff %",
            optional: sub.optional ? "Y" : "N",
            operational_flag: sub.operational_flag ?? "+",
            sub_total: serviceData === "agentData" ? sub.sub_total ?? 0 : sub.systemSubTotal ?? 0,
            formula_inputs: sub.formula_inputs ?? null,
            hide: sub.hide ?? "N",
            unique_key: sub.unique_key ?? null
          }))
        };
      }).filter((item) => item !== null),
      grand_total: serviceData === "agentData" ? this.agentServiceGrandTotal !== null ? Number(this.agentServiceGrandTotal.toFixed(2)) : 0 : Number(this.merakiServiceGrandTotal.toFixed(2))
    };
  }
  // method to calculate the agentService total and grandTotal
  calculateAgentServiceGrandTotal() {
    this.agentServiceGrandTotal = this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const totalValue = value.total != null ? Number(value.total) : 0;
      return sum + totalValue;
    }, 0);
    if (this.portAgentForm.get("conversion_rate")?.value) {
      this.calculatePercentage("Conversion Rate");
    }
  }
  // Returns true if any agent total value exists (not null/empty)
  hasAgentValues() {
    return !!this.serviceListFormArray && this.serviceListFormArray.controls.some((ctrl) => {
      const val = ctrl.get("total")?.value;
      return val !== null && val !== void 0 && val !== "";
    });
  }
  // Method to handle agent value changes and auto-toggle negotiate
  onAgentValueChange(service) {
    this.calculateAgentServiceGrandTotal();
    if (this.isManualCreation === "Y") {
      const agentValue = Number(service.get("total")?.value || 0);
      const systemValue = Number(service.get("systemTotal")?.value || 0);
      if (agentValue > systemValue) {
        service.get("negotiate")?.setValue("Y");
        service.get("agreed")?.setValue("N");
        service.get("agreedOrNegotiate")?.setValue("Negotiate");
      } else {
        service.get("negotiate")?.setValue("N");
        service.get("agreed")?.setValue("Y");
        service.get("agreedOrNegotiate")?.setValue("Agreed");
      }
    }
  }
  // Method to update toggle status for all services (used after recalculation)
  updateAllToggleStatuses() {
    this.serviceListFormArray.controls.forEach((service) => {
      const serviceGroup = service;
      const agentValue = Number(serviceGroup.get("total")?.value || 0);
      const systemValue = Number(serviceGroup.get("systemTotal")?.value || 0);
      if (agentValue > systemValue) {
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
  // method to calculate the meraki grand total
  calculateMerakiServicegrandTotal() {
    this.merakiServiceGrandTotal = this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const totalValue = value.systemTotal != null ? Number(value.systemTotal) : 0;
      return sum + totalValue;
    }, 0);
    this.merakiServiceGrandTotal = parseFloat(this.merakiServiceGrandTotal.toFixed(2));
  }
  // method to push the additional properties to the addedFields from the portAgentForm
  getAdditionalPropertiesFromForm() {
    const additionalProps = {};
    const dateFields = this.fields.filter((field) => field.type === "date").map((field) => field.name);
    this.addedFields.forEach(({ fieldName, controlName }) => {
      let value = this.portAgentForm.get(controlName)?.value ?? null;
      additionalProps[fieldName] = value;
      if (dateFields.includes(fieldName) && value) {
        additionalProps[fieldName] = formatToLocalISOString(value);
      }
    });
    return additionalProps;
  }
  // method to get additional properties as an array of objects with field details
  getAdditionalPropertiesObjectFromForm() {
    return getAdditionalPropertiesObjectFromForm(this.addedFields, this.portAgentForm, this.fields);
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
          this.serviceList.items = (this.tariffRules.items || []).filter((tariffItem) => {
            return this.merakiServiceList?.items?.some((merakiService) => merakiService.service === tariffItem.service);
          });
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
  disableFields(is_manual_entry, portAgentReturnStatus) {
    if (is_manual_entry === "Y") {
      this.portAgentForm.get("portagent_id")?.disable();
      this.portAgentForm.get("client_id")?.disable();
    } else if (is_manual_entry === "N") {
      if (portAgentReturnStatus === null || portAgentReturnStatus === "N") {
        this.portAgentForm.get("portagent_id")?.disable();
      } else if (portAgentReturnStatus === "Y") {
        this.portAgentForm.get("portagent_id")?.enable();
      }
      this.portAgentForm.get("client_id")?.disable();
      this.portAgentForm.get("country_id")?.disable();
      this.portAgentForm.get("port_id")?.disable();
      this.portAgentForm.get("vessel_id")?.disable();
      this.portAgentForm.get("purpose_id")?.disable();
    }
  }
  // method to calculate the advance percentage and currency conversion rate
  calculatePercentage(name) {
    if (name === "Advance Percentage") {
      const advancePercentage = +this.portAgentForm.get("advance_percentage")?.value || null;
      const currencyConversion = this.portAgentForm.get("currency_conversion")?.value;
      const calculatedValue = advancePercentage !== null && currencyConversion !== null ? advancePercentage / 100 * currencyConversion : null;
      this.calculatedRemittance = calculatedValue !== null ? Number(calculatedValue).toFixed(2) : null;
      this.portAgentForm.get("Pda_remittance")?.setValue(calculatedValue !== null ? Number(calculatedValue).toFixed(2) : null);
    } else if (name === "Conversion Rate") {
      let calculatedValue = null;
      const pmtCurrFrom = this.portAgentForm.get("pmt_curr_from")?.value;
      const roe = this.portAgentForm.get("pda_roe")?.value;
      const pdaConversionRoe = this.portAgentForm.get("conversion_pda_rate")?.value;
      const convertionRate = +this.portAgentForm.get("conversion_rate")?.value || null;
      if (this.fromCurrency === pmtCurrFrom) {
        calculatedValue = this.agentServiceGrandTotal !== null && convertionRate !== null ? this.agentServiceGrandTotal * convertionRate : null;
      } else if (this.toCurrency === pmtCurrFrom) {
        calculatedValue = this.agentServiceGrandTotal !== null && convertionRate !== null ? this.agentServiceGrandTotal * roe * convertionRate : null;
      } else if (this.convertedToCurrency === pmtCurrFrom && this.convertedFromCurrency === this.toCurrency) {
        calculatedValue = this.agentServiceGrandTotal !== null && convertionRate !== null ? this.agentServiceGrandTotal * roe * pdaConversionRoe * convertionRate : null;
      } else if (this.convertedToCurrency === pmtCurrFrom) {
        calculatedValue = this.agentServiceGrandTotal !== null && convertionRate !== null ? this.agentServiceGrandTotal * pdaConversionRoe * convertionRate : null;
      }
      this.portAgentForm.get("currency_conversion")?.setValue(calculatedValue !== null ? Number(calculatedValue).toFixed(2) : null);
      const advancePercentage = +this.portAgentForm.get("advance_percentage")?.value || null;
      const currencyConversion = this.portAgentForm.get("currency_conversion")?.value;
      const calculatedValueForRemittance = advancePercentage !== null && currencyConversion !== null ? advancePercentage / 100 * currencyConversion : null;
      this.calculatedRemittance = calculatedValueForRemittance !== null ? Number(calculatedValueForRemittance).toFixed(2) : null;
      this.portAgentForm.get("Pda_remittance")?.setValue(calculatedValueForRemittance !== null ? Number(calculatedValueForRemittance).toFixed(2) : null);
    }
  }
  checkRemittanceMismatch() {
    if (!this.isInitialLoad) {
      return;
    }
    if (this.pdaRemittanceFromResponse !== null && this.calculatedRemittance !== null) {
      const calculated = parseFloat(this.calculatedRemittance);
      const fromResponse = parseFloat(this.pdaRemittanceFromResponse.toString());
      const hasMismatch = Math.abs(calculated - fromResponse) > 0.01;
      if (hasMismatch) {
        this.showRemittanceMismatchNote = true;
      }
    }
  }
  calculateCurrencyConversionForComparison() {
    const pmtCurrFrom = this.portAgentForm.get("pmt_curr_from")?.value;
    const roe = this.portAgentForm.get("pda_roe")?.value;
    const pdaConversionRoe = this.portAgentForm.get("conversion_pda_rate")?.value;
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
      calculatedValue = this.agentServiceGrandTotal * roe * pdaConversionRoe * conversionRate;
    } else if (this.convertedToCurrency === pmtCurrFrom) {
      calculatedValue = this.agentServiceGrandTotal * pdaConversionRoe * conversionRate;
    }
    this.calculatedCurrencyConversion = calculatedValue !== null ? Number(calculatedValue).toFixed(2) : null;
  }
  checkCurrencyConversionMismatch() {
    if (this.pdaStatus !== 7) {
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
  refreshRemittance() {
    this.showRemittanceMismatchNote = false;
    if (this.calculatedRemittance !== null) {
      this.portAgentForm.get("Pda_remittance")?.setValue(this.calculatedRemittance, { emitEvent: true });
      this.pdaRemittanceFromResponse = parseFloat(this.calculatedRemittance);
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
  // previous to set the flag Y if it the user manually setting the toggle.
  // agreeOrNegotiateManually(service: any) {
  //   service.get('manualAgreeOrNegotiate')?.setValue("Y")
  // }
  // method to get the service for the selected subservice
  getService(subserviceElement) {
    for (let service of this.serviceListFormArray.controls) {
      const subServices = service.get("subService")?.value || [];
      const subserviceFound = subServices.find((sub) => sub.name === subserviceElement.name);
      if (subserviceFound) {
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
  isDifferenceFlag(row) {
    if (Number(row.get("systemTotal")?.value) < Number(row.get("total")?.value) && (this.isManualCreation === "Y" || this.isManualCreation === "N" && row.get("agreedOrNegotiate")?.value !== "Agreed")) {
      return true;
    } else {
      return false;
    }
  }
  // Method to determine if flag should be shown
  shouldShowFlag(service) {
    const systemTotal = Number(service.get("systemTotal")?.value || 0);
    const agentTotal = Number(service.get("total")?.value || 0);
    if (this.isManualCreation === "Y") {
      return agentTotal > systemTotal;
    } else if (this.isManualCreation === "N") {
      return agentTotal > systemTotal;
    }
    return false;
  }
  onSubServiceCheckboxChange(service, subServiceIndex, isChecked) {
    const subServices = service.get("subService")?.value || [];
    if (subServices[subServiceIndex]) {
      subServices[subServiceIndex].optional = isChecked;
      service.get("subService")?.setValue(subServices);
    }
    this.calculateMerakiServicegrandTotal();
  }
  // Method to determine if service note should be shown
  shouldShowServiceNote(service) {
    const systemTotal = Number(service.get("systemTotal")?.value || 0);
    const agentTotal = Number(service.get("total")?.value || 0);
    if (this.isManualCreation === "Y") {
      return agentTotal > systemTotal;
    } else if (this.isManualCreation === "N") {
      return agentTotal > systemTotal;
    }
    return false;
  }
  // Method to get service note message
  getServiceNoteMessage(service) {
    const agreedOrNegotiate = service.get("agreedOrNegotiate")?.value;
    if (this.isManualCreation === "Y") {
      return "The agent value is greater than system value";
    } else if (this.isManualCreation === "N") {
      if (agreedOrNegotiate === "Agreed") {
        return "You're agreed to the agent value.";
      } else {
        return "The agent value is greater than system value.";
      }
    }
    return "";
  }
  // Method to get service note CSS class
  getServiceNoteClass(service) {
    const agreedOrNegotiate = service.get("agreedOrNegotiate")?.value;
    if (this.isManualCreation === "N" && agreedOrNegotiate === "Agreed") {
      return "success";
    }
    return "warning";
  }
  // Method to handle toggle change between Agreed/Negotiate
  onAgreedNegotiateToggle(service, isChecked) {
    const systemTotal = Number(service.get("systemTotal")?.value || 0);
    const agentTotal = Number(service.get("total")?.value || 0);
    if (isChecked) {
      service.get("negotiate")?.setValue("Y");
      service.get("agreedOrNegotiate")?.setValue("Negotiate");
    } else {
      service.get("negotiate")?.setValue("N");
      service.get("agreedOrNegotiate")?.setValue("Agreed");
    }
    this.onSelectionChange(null);
  }
  // method to recalculate the data
  recalculateData() {
    const formData = this.portAgentForm.getRawValue();
    const submitData = this.transformJsonData(formData);
    this.loader.show();
    submitData.pda_custom_calculation = this.pda_custom_calculation.value ? "Y" : "N";
    if (this.isRefreshingRules) {
      submitData.port_tariff_rule = this.tariffRules;
    } else {
      submitData.port_tariff_rule = this.isPurposeChanged && this.isPortChanged ? this.tariffRules : this.tariffRules?.items?.length > 0 ? this.UpdateModifiedMovementToTariifRules() : null;
    }
    delete submitData.pda_save;
    delete submitData.pda_submit;
    delete submitData.is_re_request;
    this.pdaService.pdaReCalculate(submitData).subscribe({
      next: (response) => {
        this.previousPurposeId = response?.pda?.portagent_pda_data?.purpose?.purpose_id;
        this.previousPortId = response?.pda?.portagent_pda_data?.port?.port_id;
        this.previousCountryId = response?.pda?.portagent_pda_data?.country?.country_id;
        this.pdaEditData = response;
        this.tariffRules = response?.port_tariff_rule;
        this.serviceList = response.pda?.portagent_pda_data?.services;
        this.merakiServiceList = response.pda?.meraki_pda_data?.services;
        this.agentServiceGrandTotal = response.pda.portagent_pda_data.services?.grand_total ?? null;
        this.agentServiceTotal = response.pda.portagent_pda_data.services.service_total;
        this.merakiServiceTotal = response.pda.meraki_pda_data.services.service_total;
        this.merakiServiceGrandTotal = response.pda.meraki_pda_data.services.grand_total ?? 0;
        if (this.isRefreshingRules) {
          this.mergedServiceList = this.mergeAllMerakiServicesWithPortAgent(this.merakiServiceList, this.serviceList);
          if (this.isManualCreation === "N" && this.servicesNotInTariffRules.items?.length > 0) {
            const preservedServices = this.servicesNotInTariffRules.items.map((service) => __spreadProps(__spreadValues({}, service), {
              systemTotal: 0,
              // Set system total to 0 for preserved services
              subService: service.subService || []
            }));
            this.mergedServiceList = [...this.mergedServiceList || [], ...preservedServices];
          }
          this.handleAdditionalFields(response);
          this.rulesWereRefreshed = true;
          this.isRefreshingRules = false;
        } else {
          this.mergedServiceList = this.mergeSystemValueFromMerakiJson(this.merakiServiceList, this.serviceList);
        }
        this.populateServicesFromList();
        this.isPurposeChanged = false;
        this.isPortChanged = false;
        if (this.isManualCreation !== "Y") {
          this.updateAllToggleStatuses();
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
    this.hasInitializedExpansion = false;
  }
  UpdateModifiedMovementToTariifRules() {
    const updatedTariffItems = this.tariffRules?.items?.map((tariffItem) => {
      const formService = this.serviceListFormArray.controls.map((c) => c.getRawValue()).find((s) => s.service === tariffItem.service);
      if (!formService) {
        return tariffItem;
      }
      const updatedSubServices = tariffItem.subService?.map((tariffSub) => {
        const formSub = formService.subService?.find((fs) => fs.name === tariffSub.name && !fs.unique_key?.includes("System"));
        if (!formSub) {
          return tariffSub;
        }
        const updatedSub = __spreadProps(__spreadValues({}, tariffSub), {
          optional: this.isRefreshingRules ? tariffSub?.optional === "Y" ? "Y" : "N" : formSub?.optional === true || formSub?.optional === "Y" ? "Y" : "N",
          movement: (() => {
            if (!tariffSub.movement) {
              return tariffSub.movement;
            }
            const parts = tariffSub.movement.split(":");
            while (parts.length < 4)
              parts.push("NA");
            if (formSub.formattedSystemMovement !== void 0 && formSub.formattedSystemMovement !== null) {
              parts[1] = formSub.formattedSystemMovement;
            }
            const finalMovement = parts.join(":");
            return finalMovement;
          })()
        });
        return updatedSub;
      }) || [];
      return __spreadProps(__spreadValues({}, tariffItem), {
        subService: updatedSubServices
      });
    }).filter(Boolean);
    return { items: updatedTariffItems };
  }
  // Method to get system grand total (sum of all system totals)
  getSystemGrandTotal() {
    return this.serviceListFormArray.controls.reduce((sum, ctrl) => {
      const value = ctrl.value;
      const systemTotal = value.systemTotal != null ? Number(value.systemTotal) : null;
      if (systemTotal === null) {
        return sum;
      }
      const result = sum + systemTotal;
      return Number(result.toFixed(2));
    }, 0);
  }
  /** Opens the file upload dialog. you can add a Upload button and call this function in which component it is required by Rahul*/
  upload() {
    const disbursementId = this.pdaEditData?.disbursement_id;
    const disbursementSeq = this.pdaEditData?.disbursement_seq;
    const pdaId = this.pdaEditData?.pda.pda_id;
    const data = {
      files: [],
      disbursementId,
      pdaId,
      pdaOrFda: "PDA",
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
  // method to download the report
  downloadReport() {
    const report_type = "PDA";
    const reportData = {
      disbursement_seq: this.pdaEditData.disbursement_seq,
      report_type
    };
    this.loader.show();
    this.fileUploadService.downloadReport(reportData, this.pdaEditData.disbursement_id).subscribe({
      next: () => {
        this.loader.hide();
      },
      error: (error) => {
        this.loader.hide();
        this.errMsg = error.message || "Something went wrong please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  handleAdditionalFields(response) {
    let additionalProperties;
    if (this.isRefreshingRules) {
      additionalProperties = (this.additionalFieldsFromRules || []).map((rule) => ({
        field_name: rule?.field_name,
        is_mandatory: rule?.is_mandatory,
        value: null
        // Set to null for refresh to ensure clean state
      }));
    } else {
      additionalProperties = response?.pda?.pda_vessel_details?.additional_property || [];
    }
    const currentFieldNames = additionalProperties.map((item) => item?.field_name?.trim()).filter(Boolean);
    const fieldsToRemove = this.addedFields.filter((field) => {
      const exists = currentFieldNames.includes(field.fieldName?.trim());
      return !exists;
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
    additionalProperties.forEach((item) => {
      const fieldName = item?.field_name?.trim();
      if (!fieldName)
        return;
      const existsInFields = this.fields.some((f) => f.value?.trim() === fieldName);
      if (!existsInFields) {
        this.fields.push({
          name: fieldName,
          // Add name property for display
          label: fieldName,
          value: fieldName,
          type: "input"
          // Add default type
        });
        if (!this.portAgentForm.contains(fieldName)) {
          const isMandatory = item?.is_mandatory === "Y";
          const value = item?.value ?? null;
          this.portAgentForm.addControl(fieldName, this.fb.control(value, isMandatory ? Validators.required : []));
        }
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
    this.cdr.detectChanges();
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
  onRemove(field) {
    if (field?.name === "Country" && !this.portAgentForm.get("country_id")?.value) {
      this.portList = [];
      this.portAgentForm.get("port_id")?.setValue(null);
      this.portAgentForm.get("purpose_id")?.setValue(null);
      this.filteredOptions["port_id"] = [];
      this.filteredOptions["purpose_id"] = [];
      this.serviceList.items = [];
      this.datasource.data = [];
    } else if (field?.name === "Port" && !this.portAgentForm.get("port_id")?.value) {
      this.portAgentForm.get("purpose_id")?.setValue(null);
      this.serviceList.items = [];
      this.datasource.data = [];
    } else if (field?.name === "Vessel" && !this.portAgentForm.get("vessel_id")?.value) {
      clearVesselDetails(this.portAgentForm);
    }
  }
  getUploadedFiles() {
    const data = {
      disbursement_seq: this.pdaEditData?.disbursement_seq,
      pda_fda_flag: "PDA"
    };
    this.loader.show();
    return this.fileUploadService.fileDataFromDb(data).pipe(map((res) => {
      this.fileList = res;
      this.loader.hide();
    }), catchError((err) => {
      this.loader.hide();
      this.errMsg = err?.error?.error || "Something went wrong. Please try again later.";
      this.snackBar.showError(this.errMsg);
      return of([]);
    }));
  }
  // method to refresh tariff rules with warning dialog
  refreshTariffRules() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: {
        header: "Replace Tariff Rules",
        text: "Are you sure you want to replace the current PDA tariff with the latest tariff from the repository? Please note this would also remove the additional vessel property data."
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
    if (this.isManualCreation === "N") {
      const servicesNotInTariffRules = this.serviceList?.items?.filter((existingService) => {
        return !this.tariffRules.items?.some((tariffService) => tariffService.service === existingService.service);
      }) || [];
      this.servicesNotInTariffRules.items = servicesNotInTariffRules;
    }
    this.isRefreshingRules = true;
    this.tariffrulesByPort(portId);
    this.snackBar.showSuccess("Tariff rules refreshed successfully.");
  }
  resendPdaRequest() {
    this.loader.show();
    const data = { disbursement_seq: this.pdaEditData?.disbursement_seq };
    this.pdaService.resendPdaLink(data).subscribe({
      next: (response) => {
        this.loader.hide();
        this.snackBar.showSuccess(response.message);
      },
      error: (error) => {
        this.loader.hide();
        this.errMsg = error?.error?.error || "Something went wrong. Please try again later.";
        this.snackBar.showError(this.errMsg);
      }
    });
  }
  // method to show the dialog when the purpose is changes
  showDataLostWarning() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: { header: "Data Loss Warning", text: "Are you sure you want to change the purpose? This will reset the services." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const purposeId = this.portAgentForm.get("purpose_id")?.value;
        const port_id = this.portAgentForm.get("port_id")?.value;
        this.tariffrulesByPort(port_id);
        this.agentServiceGrandTotal = null;
        this.portAgentForm.patchValue({
          advance_percentage: null,
          conversion_rate: null,
          currency_conversion: null,
          Pda_remittance: null
        });
        const purpose = getPurposeName(this.purposeList, purposeId);
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
        }
        this.populateServicesFromList();
        this.recalculateData();
      } else {
        this.portAgentForm.get("purpose_id")?.setValue(this.previousPurposeId);
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
              movement: [sub.movement],
              tariff_percent: [sub.tariff_percent],
              formula_result: [sub.formula_result],
              optional: [sub.optional],
              operational_flag: [sub.operational_flag],
              sub_total: [sub.sub_total],
              formula_inputs: [sub.formula_inputs],
              hide: [sub.hide],
              unique_key: [sub.unique_key],
              isSubService: [true],
              systemFormulaInputs: [sub.systemFormulaInputs],
              systemMovement: [sub.systemMovement],
              formattedSystemMovement: [sub.formattedSystemMovement],
              systemSubTotal: [sub.systemSubTotal]
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
              formated_client_comment: [serviceData.formated_client_comment],
              client_option: [serviceData.client_option],
              info_msg: [serviceData.info_msg],
              negotiate: [serviceData.negotiate],
              agreed: [serviceData.agreed],
              subService: subServiceArray,
              isSubService: [false],
              expanded: [serviceData.expanded],
              systemTotal: [serviceData.systemTotal],
              agreedOrNegotiate: [serviceData.agreedOrNegotiate],
              display_to_client: [serviceData.display_to_client]
            });
            this.serviceListFormArray.push(serviceGroup);
          });
          this.updateDatasource();
        }
      }
    });
  }
  get fromCurrency() {
    return this.portAgentForm?.get("pda_currency_from")?.value || "";
  }
  get toCurrency() {
    return this.portAgentForm?.get("pda_currency_to")?.value || "";
  }
  get convertedToCurrency() {
    return this.portAgentForm?.get("converted_curr_to")?.value || "";
  }
  get convertedFromCurrency() {
    return this.portAgentForm?.get("converted_curr_from")?.value || "";
  }
  calculateSystemAndAgentValueWithRoe(service, type, conversion_type) {
    const roe = Number(this.portAgentForm.get("pda_roe")?.value) || 1;
    const conversion_roe = Number(this.portAgentForm.get("conversion_pda_rate")?.value || 1);
    let baseValue = null;
    if (conversion_type === "ToCurrency") {
      if (type === "agent") {
        baseValue = Number(service.value?.total) || null;
      } else if (type === "system") {
        baseValue = Number(service.value?.systemTotal) || 0;
      }
      return baseValue !== null ? parseFloat((baseValue * roe).toFixed(2)) : null;
    } else if (conversion_type === "convertedToCurrency") {
      if (type === "agent") {
        baseValue = this.fromCurrency === this.convertedFromCurrency ? Number(service.value?.total) * conversion_roe || null : Number(service.value?.total) * roe * conversion_roe;
      } else if (type === "system") {
        baseValue = this.fromCurrency === this.convertedFromCurrency ? Number(service.value?.systemTotal) * conversion_roe || null : Number(service.value?.systemTotal) * roe * conversion_roe;
      }
      return baseValue !== null ? parseFloat(baseValue.toFixed(2)) : null;
    }
    return null;
  }
  // methos to calculte the system and agent totals in from and to currencies
  getSystemAndAgentTotal(type, conversion_type) {
    const pdaRoe = Number(this.portAgentForm.get("pda_roe")?.value) || 1;
    const conversionRate = Number(this.portAgentForm.get("conversion_pda_rate")?.value) || 1;
    let total = 0;
    if (conversion_type === "ToCurrency") {
      if (type === "system") {
        const systemTotal = this.getSystemGrandTotal() || null;
        if (systemTotal === null) {
          return null;
        }
        total = systemTotal * pdaRoe;
      } else if (type === "agent") {
        const agentTotal = this.agentServiceGrandTotal || null;
        if (agentTotal === null) {
          return null;
        }
        total = agentTotal * pdaRoe;
      }
    } else if (conversion_type === "convertedToCurrency") {
      if (type === "system") {
        const systemTotal = this.getSystemGrandTotal() || null;
        if (systemTotal === null) {
          return null;
        }
        if (this.convertedFromCurrency !== this.fromCurrency) {
          total = systemTotal * pdaRoe * conversionRate;
        } else {
          total = systemTotal * conversionRate;
        }
      } else if (type === "agent") {
        const agentTotal = this.agentServiceGrandTotal || null;
        if (agentTotal === null) {
          return null;
        }
        if (this.convertedFromCurrency !== this.fromCurrency) {
          total = agentTotal * pdaRoe * conversionRate;
        } else {
          total = agentTotal * conversionRate;
        }
      }
    }
    return parseFloat(total.toFixed(2));
  }
  // method to get the meraki total amount
  getMerakiPdaAmount() {
    const roe = Number(this.portAgentForm.get("pda_roe")?.value) || 1;
    const conversionRate = Number(this.portAgentForm.get("conversion_pda_rate")?.value) || 1;
    if (this.portAgentForm.get("pmt_curr_from")?.value === this.fromCurrency) {
      return this.merakiServiceGrandTotal;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.toCurrency) {
      return this.merakiServiceGrandTotal * roe;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.convertedToCurrency && this.convertedFromCurrency === this.fromCurrency) {
      return this.merakiServiceGrandTotal * conversionRate;
    } else if (this.portAgentForm.get("pmt_curr_from")?.value === this.convertedToCurrency && this.convertedFromCurrency === this.toCurrency) {
      return this.merakiServiceGrandTotal * roe * conversionRate;
    }
    return 0;
  }
  // method to show the converted currency marque
  shouldShowConvertedCurrencyMarquee() {
    const form = this.portAgentForm;
    return !!(form.get("converted_curr_from")?.value && form.get("converted_curr_to")?.value && form.get("conversion_pda_rate")?.value && (form.get("converted_curr_from")?.value !== form.get("pda_currency_from")?.value || form.get("converted_curr_to")?.value !== form.get("pda_currency_to")?.value));
  }
  static \u0275fac = function PdaEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdaEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(PdaService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(FileUploadService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdaEditComponent, selectors: [["app-port-agent-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 60, consts: [["fromCurrencyAutocomplete", "matAutocomplete"], ["portAgentAutocomplete", "matAutocomplete"], ["paymentAutocomplete", "matAutocomplete"], ["portAgentAutocompletebelowSection", "matAutocomplete"], ["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], ["autosize", "cdkTextareaAutosize"], [1, "port-agent-form-container"], [1, "top-section"], [1, "service-button-section"], ["class", "currency-marquee", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "gap", "8px"], ["type", "button", 1, "text-icon", "refresh-tariff-btn", 2, "height", "30px", "margin-top", "-8px", 3, "click", "disabled", "ngClass"], [2, "margin-left", "4px", "padding-top", "6px", "font-size", "18px"], ["type", "button", "style", "height: 30px;  margin-top: -8px;", "class", "text-icon", 3, "click", 4, "ngIf"], [2, "margin-top", "-8px"], [1, "small-toggle", 3, "formControl", "disabled", "ngClass"], [2, "font-size", "15px", "font-weight", "500", "width", "120px"], ["type", "button", 1, "text-icon", 2, "height", "30px", 3, "click", "ngClass", "disabled"], ["type", "button", 1, "text-icon", 2, "height", "30px", 3, "click", "disabled", "ngClass"], [1, "scrollable-section"], [3, "ngSubmit", "formGroup"], [1, "field-section"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [1, "converted-currency-section"], ["appearance", "outline"], ["matInput", "", "formControlName", "converted_curr_from", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "converted_curr_to", 3, "matAutocomplete"], [3, "optionSelected"], ["matInput", "", "formControlName", "conversion_pda_rate", "type", "number"], ["class", "common-table-header", 4, "ngIf"], ["class", "total-section", 4, "ngIf"], [1, "footer-section"], ["matInput", "", "formControlName", "pmt_curr_from", 3, "matAutocomplete"], ["matInput", "", "formControlName", "pmt_curr_to", 3, "matAutocomplete"], ["matInput", "", "formControlName", "conversion_rate", "type", "number", 3, "input"], [4, "ngIf"], ["readonly", "", "matInput", "", "formControlName", "currency_conversion"], ["matInput", "", "formControlName", "advance_percentage", "type", "number", 3, "input"], ["readonly", "", "matInput", "", "formControlName", "Pda_remittance"], [2, "display", "flex", "flex-direction", "row", "justify-content", "flex-end", "gap", "10px", "margin", "10px 20px"], ["class", "currency-conversion-mismatch-banner", 4, "ngIf"], ["class", "remittance-mismatch-note", 4, "ngIf"], [3, "data"], [1, "button-section"], [1, "text-icon", 2, "height", "30px", 3, "click", "disabled", "ngClass"], ["class", "warning-action-btn", 3, "disabled", "click", 4, "ngIf"], [3, "click", "disabled", "ngClass"], ["class", "warning-action-btn", 3, "disabled", "ngClass", "click", 4, "ngIf"], [3, "disabled", "ngClass", "click", 4, "ngIf"], [1, "currency-marquee"], [1, "marquee-text"], ["type", "button", 1, "text-icon", 2, "height", "30px", "margin-top", "-8px", 3, "click"], ["appearance", "outline", "class", "mat-field-small", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline", 3, "ngClass", 4, "ngIf"], ["appearance", "outline", 1, "mat-field-small"], ["matInput", "", "placeholder", "Please select", 3, "click", "blur", "formControlName", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value"], ["matInput", "", 3, "dateChange", "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["appearance", "outline", 3, "ngClass"], ["matInput", "", 3, "blur", "type", "formControlName", "readonly"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", "class", "flag-indicator", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "disabled", "", 1, "flag-indicator"], [1, "common-table-header"], [1, "table-header"], ["class", "table-outer", 4, "ngIf"], [1, "table-outer"], [1, "table-section"], [1, "table-inner"], [1, "table-content", 3, "formGroup"], [2, "display", "flex", "gap", "0"], [2, "display", "flex", "align-items", "center", "gap", "5px"], ["matInput", "", "type", "text", "placeholder", "Enter service name", "style", "width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 4px; font-size: 13px;::placeholder{font-size:12px;}", 3, "formControl", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "display", "flex", "flex-direction", "row", "gap", "5px"], [2, "font-size", "10px", "font-weight", "500", "line-height", "2.4", "color", "var(--app-text-primary)"], ["matInput", "", "type", "number", "readonly", "", 3, "input", "formControl"], ["matInput", "", "type", "number", "readonly", "", 3, "value"], ["style", "font-size: 10px;font-weight: 500;line-height: 2.4; color: var(--app-text-primary);", 4, "ngIf"], ["matInput", "", "type", "number", "readonly", "", 3, "value", 4, "ngIf"], ["matInput", "", "type", "number", 3, "input", "keydown", "blur", "focus", "formControl", "readonly"], ["style", "display: flex; align-items: center; justify-content: left; margin-left: -10px;", 4, "ngIf"], ["style", "margin-left: 20px; cursor: pointer; color: green; font-size: 20px;", "matTooltip", "Submit service name", 3, "click", 4, "ngIf"], ["style", "margin-left: 10px; color: red; cursor: pointer;", "matTooltip", "Delete service", 3, "click", 4, "ngIf"], ["class", "service-note-2", 3, "ngClass", 4, "ngIf"], ["class", "table-service", 4, "ngIf"], [1, "table-textarea", 3, "formGroup"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Port Agent Remark", "rows", "2", "formControlName", "pa_remark", 1, "textarea-1"], ["cdkTextareaAutosize", "", "placeholder", "Meraki Feedback", "rows", "2", "formControlName", "meraki_feedback", 1, "textarea-2"], ["cdkTextareaAutosize", "", "readonly", "", "placeholder", "Client Comment", "rows", "2", "formControlName", "formated_client_comment", 1, "textarea-3"], ["matInput", "", "type", "text", "placeholder", "Enter service name", 2, "width", "100%", "padding", "5px", "border", "1px solid #ccc", "border-radius", "4px", "font-size", "13px", ":", "placeholder{font-size:12px", 3, "formControl"], [2, "display", "flex", "align-items", "center", "justify-content", "left", "margin-left", "-10px"], ["color", "primary", 2, "transform", "scale(0.5)", 3, "change", "checked", "ngClass"], [2, "font-size", "14px", "font-weight", "500", "color", "var(--app-text-primary)"], ["matTooltip", "Submit service name", 2, "margin-left", "20px", "cursor", "pointer", "color", "green", "font-size", "20px", 3, "click"], ["matTooltip", "Delete service", 2, "margin-left", "10px", "color", "red", "cursor", "pointer", 3, "click"], [1, "service-note-2", 3, "ngClass"], [1, "table-service"], [1, "empty-space"], [1, "warning-section"], ["class", "table-checkbox", 4, "ngIf"], [1, "movement-section"], ["class", "movement-inputs", 4, "ngIf"], ["class", "service-note", 3, "ngClass", 4, "ngIf"], [1, "table-checkbox"], [3, "checked", "display", "click", 4, "ngFor", "ngForOf"], [3, "click", "checked"], [1, "movement-inputs"], ["class", "movement-item", 3, "formGroup", "display", 4, "ngFor", "ngForOf"], [1, "movement-item", 3, "formGroup"], ["rows", "2", "appAutoResizeInput", "", 1, "movement-textarea", 2, "color", "var(--app-input-text) !important", "-webkit-text-fill-color", "var(--app-input-text) !important", 3, "formControl", "minWidth", "maxWidth", "bufferSpace"], [1, "service-note", 3, "ngClass"], [1, "total-section"], [1, "total-item"], [2, "color", "var(--app-text-primary)"], [2, "display", "flex", "gap", "10px"], [1, "currency-text"], ["type", "number", "readonly", "", 3, "value"], ["class", "currency-text", 4, "ngIf"], ["type", "number", "readonly", "", 3, "value", 4, "ngIf"], [1, "currency-conversion-mismatch-banner"], [1, "banner-text"], [1, "remittance-mismatch-note"], [1, "note-text"], ["class", "refresh-icon", "matTooltip", "Set calculated Remittance", 3, "click", 4, "ngIf"], ["matTooltip", "Set calculated Remittance", 1, "refresh-icon", 3, "click"], [1, "warning-action-btn", 3, "click", "disabled"], [1, "warning-action-btn", 3, "click", "disabled", "ngClass"]], template: function PdaEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 10);
      \u0275\u0275template(5, PdaEditComponent_div_5_Template, 4, 4, "div", 11);
      \u0275\u0275elementStart(6, "div", 12)(7, "button", 13);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshTariffRules());
      });
      \u0275\u0275text(8, " Refresh Rules");
      \u0275\u0275elementStart(9, "mat-icon", 14);
      \u0275\u0275text(10, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, PdaEditComponent_button_11_Template, 2, 0, "button", 15);
      \u0275\u0275elementStart(12, "div", 16);
      \u0275\u0275element(13, "mat-slide-toggle", 17);
      \u0275\u0275elementStart(14, "span", 18);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "button", 19);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recalculateData());
      });
      \u0275\u0275text(17, " Calculate");
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "calculate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 20);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.downloadReport());
      });
      \u0275\u0275text(21, " PDA Report ");
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "download");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 21)(25, "form", 22);
      \u0275\u0275listener("ngSubmit", function PdaEditComponent_Template_form_ngSubmit_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPdaSubmit(""));
      });
      \u0275\u0275elementStart(26, "div", 23)(27, "div", 24);
      \u0275\u0275template(28, PdaEditComponent_div_28_Template, 4, 3, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 26)(30, "mat-form-field", 27)(31, "mat-label");
      \u0275\u0275text(32, "Converted Currency From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 28);
      \u0275\u0275elementStart(34, "mat-autocomplete", null, 0);
      \u0275\u0275template(36, PdaEditComponent_mat_option_36_Template, 2, 2, "mat-option", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "mat-form-field", 27)(38, "mat-label");
      \u0275\u0275text(39, "Converted Currency To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 30);
      \u0275\u0275elementStart(41, "mat-autocomplete", 31, 1);
      \u0275\u0275listener("optionSelected", function PdaEditComponent_Template_mat_autocomplete_optionSelected_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelect("Converted Currency To", $event.option));
      });
      \u0275\u0275template(43, PdaEditComponent_mat_option_43_Template, 2, 2, "mat-option", 29);
      \u0275\u0275pipe(44, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "mat-form-field", 27)(46, "mat-label");
      \u0275\u0275text(47, "Conversion Pda Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, PdaEditComponent_div_49_Template, 3, 1, "div", 33)(50, PdaEditComponent_ng_container_50_Template, 2, 1, "ng-container", 25)(51, PdaEditComponent_div_51_Template, 31, 12, "div", 34);
      \u0275\u0275elementStart(52, "div", 35)(53, "mat-form-field", 27)(54, "mat-label");
      \u0275\u0275text(55, "Payment Currency From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 36);
      \u0275\u0275elementStart(57, "mat-autocomplete", 31, 2);
      \u0275\u0275listener("optionSelected", function PdaEditComponent_Template_mat_autocomplete_optionSelected_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelect("Payment Currency From", $event.option));
      });
      \u0275\u0275template(59, PdaEditComponent_mat_option_59_Template, 2, 2, "mat-option", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "mat-form-field", 27)(61, "mat-label");
      \u0275\u0275text(62, "Payment Currency To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 37);
      \u0275\u0275elementStart(64, "mat-autocomplete", null, 3);
      \u0275\u0275template(66, PdaEditComponent_mat_option_66_Template, 2, 2, "mat-option", 29);
      \u0275\u0275pipe(67, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "mat-form-field", 27)(69, "mat-label");
      \u0275\u0275text(70, "Payment Currency Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "input", 38);
      \u0275\u0275listener("input", function PdaEditComponent_Template_input_input_71_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calculatePercentage("Conversion Rate"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, PdaEditComponent_mat_error_72_Template, 2, 0, "mat-error", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-form-field", 27)(74, "mat-label");
      \u0275\u0275text(75, " Currency Conversion");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-form-field", 27)(78, "mat-label");
      \u0275\u0275text(79, "Advance Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "input", 41);
      \u0275\u0275listener("input", function PdaEditComponent_Template_input_input_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calculatePercentage("Advance Percentage"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, PdaEditComponent_mat_error_81_Template, 2, 0, "mat-error", 39)(82, PdaEditComponent_mat_error_82_Template, 2, 0, "mat-error", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-form-field", 27)(84, "mat-label");
      \u0275\u0275text(85, "PDA Remittance");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 43);
      \u0275\u0275template(88, PdaEditComponent_div_88_Template, 5, 8, "div", 44)(89, PdaEditComponent_div_89_Template, 5, 6, "div", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "app-comm-history", 46);
      \u0275\u0275elementStart(91, "div", 47)(92, "button", 48);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.upload());
      });
      \u0275\u0275text(93, "Upload File ");
      \u0275\u0275elementStart(94, "mat-icon");
      \u0275\u0275text(95, "cloud_upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(96, PdaEditComponent_button_96_Template, 2, 1, "button", 49);
      \u0275\u0275elementStart(97, "button", 50);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateServiceDialog());
      });
      \u0275\u0275text(98, "Add Service");
      \u0275\u0275elementEnd();
      \u0275\u0275template(99, PdaEditComponent_button_99_Template, 2, 4, "button", 51);
      \u0275\u0275elementStart(100, "button", 50);
      \u0275\u0275listener("click", function PdaEditComponent_Template_button_click_100_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSave("save"));
      });
      \u0275\u0275text(101, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275template(102, PdaEditComponent_button_102_Template, 2, 4, "button", 52);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_30_0;
      let tmp_31_0;
      let tmp_32_0;
      const fromCurrencyAutocomplete_r34 = \u0275\u0275reference(35);
      const portAgentAutocomplete_r35 = \u0275\u0275reference(42);
      const paymentAutocomplete_r36 = \u0275\u0275reference(58);
      const portAgentAutocompletebelowSection_r37 = \u0275\u0275reference(65);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.pdaEditData == null ? null : ctx.pdaEditData.disbursement_id, " - ", ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status_name, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.portAgentForm.get("pda_currency_from")) == null ? null : tmp_5_0.value) && ((tmp_5_0 = ctx.portAgentForm.get("pda_currency_to")) == null ? null : tmp_5_0.value) && ((tmp_5_0 = ctx.portAgentForm.get("pda_roe")) == null ? null : tmp_5_0.value));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disableTableInputFields || (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5 || ctx.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(46, _c02, ctx.disableTableInputFields || (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5 || ctx.pdaState === "N"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.pdaStatus === 5 || ctx.pdaStatus === 6);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.pda_custom_calculation)("disabled", ctx.disableTableInputFields)("ngClass", \u0275\u0275pureFunction1(48, _c02, ctx.disableTableInputFields));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.pda_custom_calculation.value ? "User Defined" : "System Defined", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(50, _c02, ctx.disableTableInputFields || (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5 || ctx.pdaState === "N"))("disabled", ctx.disableTableInputFields || (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5 || ctx.pdaState === "N");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5)("ngClass", \u0275\u0275pureFunction1(52, _c02, (ctx.pdaEditData == null ? null : ctx.pdaEditData.pda == null ? null : ctx.pdaEditData.pda.status) === 5));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.portAgentForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.fields);
      \u0275\u0275advance(5);
      \u0275\u0275property("matAutocomplete", fromCurrencyAutocomplete_r34);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.ConvertedFromCurrencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", portAgentAutocomplete_r35);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(44, 42, ctx.filteredConvertedToCurrency));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.datasource.data && ctx.datasource.data.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.datasource.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.datasource.data && ctx.datasource.data.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("matAutocomplete", paymentAutocomplete_r36);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.PaymentFromCurrencyList);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", portAgentAutocompletebelowSection_r37);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(67, 44, ctx.filteredPaymentToCurrency));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_30_0 = ctx.portAgentForm.get("conversion_rate")) == null ? null : tmp_30_0.hasError("required"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", (tmp_31_0 = ctx.portAgentForm.get("advance_percentage")) == null ? null : tmp_31_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_32_0 = ctx.portAgentForm.get("advance_percentage")) == null ? null : tmp_32_0.hasError("max"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showCurrencyConversionMismatchBanner);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRemittanceMismatchNote);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.communicationHistory);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disableTableInputFields || ctx.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(54, _c02, ctx.disableTableInputFields || ctx.pdaState === "N"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isNegotiateSelected && (ctx.pdaStatus === 3 || ctx.pdaStatus === 4 || ctx.pdaStatus === 9));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disableTableInputFields || ctx.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(56, _c02, ctx.disableTableInputFields || ctx.pdaState === "N"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isNegotiateSelected && (ctx.pdaStatus === 3 || ctx.pdaStatus === 4 || ctx.pdaStatus === 9) || ctx.portAgentReturnStatus === "Y");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disableTableInputFields || ctx.pdaState === "N")("ngClass", \u0275\u0275pureFunction1(58, _c02, ctx.disableTableInputFields || ctx.pdaState === "N"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isNegotiateSelected || ctx.isManualCreation === "Y");
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
    CommHistoryComponent,
    MatSlideToggle,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    AutoResizeInputDirective
  ], styles: ["\n\n.port-agent-form-container[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n  color: var(--app-text-primary);\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  position: sticky;\n  top: 40px;\n  z-index: 99;\n  border-bottom: 1px solid var(--color-white);\n  margin-bottom: 10px !important;\n}\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  margin-right: 10px;\n  color: var(--app-text-primary);\n}\n.scrollable-section[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 20px;\n}\n.top-section[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.field-section[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-10);\n  border-radius: 6px;\n  padding: 16px 8px 8px 8px;\n  flex: 0 0 auto;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100px;\n  max-width: 180px;\n  margin-bottom: 0px;\n}\n.field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 12.5%;\n  max-width: 200px;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 25px;\n  position: sticky;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0 2px 5px var(--shadow-2);\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 1px solid #c6c7ca;\n}\n.mdc-text-field__input[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 100%;\n  min-width: 120px;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 20px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n  .mat-mdc-select-panel {\n  width: 100%;\n  min-width: 150px;\n  max-height: 275px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-form-field-subscript-text-line-height: 0;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 16px;\n  overflow: visible;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-error-text) !important;\n  margin-top: -5px;\n  margin-left: -18px;\n  line-height: 1.2;\n}\n  .mat-mdc-form-field-label, \n  .mat-mdc-floating-label {\n  color: var(--color-white) !important;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 35px;\n  overflow: hidden;\n}\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n  margin-left: -15px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 70px;\n  padding: 20px 20px 0 20px;\n  background-color: var(--color-bg-dark-10) !important;\n}\n.changed-field.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mdc-outlined-text-field-outline-color: orange !important;\n}\n.disabled-input[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.service-button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  position: sticky;\n  margin: 8px;\n  justify-content: flex-end;\n}\n.small-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.60);\n  transform-origin: start;\n}\n.service-button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n}\n.warning-action-btn[_ngcontent-%COMP%] {\n  background-color: #b45309 !important;\n  color: var(--color-white) !important;\n}\n.text-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.text-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 2px;\n}\n.warning-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  align-items: start;\n  gap: 14px;\n  box-sizing: border-box;\n}\n.table-outer[_ngcontent-%COMP%] {\n  width: 99.5%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: var(--color-bg-dark-10) !important;\n  border: 1px solid var(--app-border) !important;\n  border-top: none;\n  border-radius: 0;\n  margin-top: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-outer[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid var(--app-border);\n}\n.table-outer[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 0 0 8px 8px;\n}\n.table-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.table-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 55%;\n  max-width: 68%;\n  overflow: hidden;\n}\n.common-table-header[_ngcontent-%COMP%] {\n  width: 99.5%;\n  background-color: var(--app-table-header);\n  border: 1px solid var(--app-border);\n  border-radius: 8px 8px 0 0;\n  margin-top: 16px;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.common-table-header[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: var(--app-table-header);\n  border-bottom: 1px solid var(--app-border);\n  margin: 0;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 16px;\n  box-sizing: border-box;\n  color: var(--app-text-primary);\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n  align-items: center;\n  justify-content: center;\n}\n.table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--color-white);\n  line-height: 1.4;\n}\n.empty-space[_ngcontent-%COMP%] {\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n  background-color: var(--color-bg-dark-10);\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 45px;\n  min-width: 45px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 150px;\n  min-width: 150px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(3) {\n  flex: 0 0 180px;\n  min-width: 180px;\n  align-items: center;\n  justify-content: center;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(4) {\n  flex: 0 0 140px;\n  min-width: 140px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 0 0 120px;\n  min-width: 120px;\n}\n.table-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-white);\n  line-height: 1.4;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-top: 4px;\n}\n.table-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--color-text-light-1);\n  font-style: italic;\n  margin: 0;\n  margin-left: 70px;\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 85%;\n  max-width: 130px;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n}\n.table-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-action);\n  background-color: var(--color-bg-dark-10);\n  box-shadow: 0 0 0 2px rgba(74, 143, 244, 0.25);\n}\n.table-service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n  padding: 0 16px;\n  padding-right: 0;\n  box-sizing: border-box;\n}\n.table-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n.table-checkbox[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n  .table-checkbox .mat-mdc-checkbox .mdc-checkbox {\n  transform: scale(0.85);\n}\n  .table-checkbox .mat-mdc-checkbox label {\n  font-size: 13px;\n  color: var(--color-text-light-1);\n}\n.table-textarea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n  gap: 6px;\n  padding: 6px;\n  background-color: var(--color-bg-dark-10);\n  box-sizing: border-box;\n  min-width: 29%;\n  max-width: 70%;\n  margin-right: 10px;\n}\n.table-textarea[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.textarea-1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  color: var(--app-text-primary);\n  background-color: rgba(74, 143, 244, 0.42) !important;\n  border: 1px solid rgba(74, 143, 244, 0.75) !important;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n}\n.textarea-2[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n  color: var(--app-text-primary);\n  background-color: rgba(34, 197, 94, 0.42) !important;\n  border: 1px solid rgba(34, 197, 94, 0.75) !important;\n}\n.textarea-3[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  overflow: hidden;\n  min-height: 40px;\n  resize: none;\n  color: var(--app-text-primary);\n  background-color: rgba(245, 158, 11, 0.42) !important;\n  border: 1px solid rgba(245, 158, 11, 0.75) !important;\n}\n.table-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n.table-feedback[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 5px 16px;\n  background-color: var(--color-bg-dark-10);\n  border-top: 1px solid var(--app-border);\n  box-sizing: border-box;\n  width: 100%;\n}\n.table-radio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n}\n.table-feedback[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  width: 100%;\n}\n.service-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  background-color: #faebba;\n  border: 1px solid #ffb300;\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: #333;\n}\n.service-note.warning[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.36);\n  border-color: rgba(245, 158, 11, 0.75);\n  color: #fbbf24;\n}\n.service-note.success[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.36);\n  border-color: rgba(34, 197, 94, 0.75);\n  color: #22c55e;\n}\n.service-note[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: start;\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: inherit;\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80px;\n  max-height: 150px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  line-height: 1.6;\n  color: var(--app-text-primary);\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n}\n.table-feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(60, 80, 224, 0.1);\n}\n  .table-radio .mat-mdc-radio-button {\n  margin-right: 8px;\n}\n  .table-radio .mat-mdc-radio-button .mdc-radio {\n  transform: scale(0.85);\n}\n  .table-radio .mat-mdc-radio-button label {\n  font-size: 13px;\n  color: var(--color-text-light-1);\n  padding: 0 !important;\n  margin-left: -5px !important;\n}\n.total-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--app-border);\n  border-top: none;\n  padding: 12px 16px;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n}\n.total-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n}\n.total-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  letter-spacing: 0.5px;\n  margin: 0;\n  white-space: nowrap;\n  min-width: 100px;\n}\n.total-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  padding: 6px 8px;\n  background-color: var(--color-bg-dark-10);\n  border: 1px solid var(--color-border);\n  border-radius: 4px;\n  min-width: 100px;\n  width: 80px;\n  box-sizing: border-box;\n}\n.movement-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n}\n.movement-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.movement-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.movement-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.movement-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 4px 8px;\n  border: 1px solid var(--color-border);\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.service-note-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin: 8px 0;\n  margin-left: 346px;\n  font-size: 12px;\n  background-color: rgba(245, 158, 11, 0.16);\n  border: 1px solid rgba(245, 158, 11, 0.55);\n  color: #fbbf24;\n}\n.service-note-2.warning[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.16);\n  border-color: rgba(245, 158, 11, 0.55);\n  color: #fbbf24;\n}\n.service-note-2.success[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.16);\n  border-color: rgba(34, 197, 94, 0.55);\n  color: #22c55e;\n}\n.service-note-2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: start;\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: inherit;\n}\ntextarea.movement-textarea[_ngcontent-%COMP%] {\n  width: 110px;\n  padding: 5px 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--app-text-primary) !important;\n  -webkit-text-fill-color: var(--app-input-text) !important;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  resize: none;\n  height: 35px !important;\n}\n.currency-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--app-text-primary);\n  line-height: 2.4;\n}\n.converted-currency-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 70px;\n  padding: 16px 8px 0 8px;\n  background-color: var(--color-bg-dark-10);\n  justify-content: flex-end;\n}\n.currency-marquee[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 300px;\n  background-size: 200% 100%;\n  animation: gradientShift 3s ease infinite;\n  border-radius: 4px;\n  padding: 8px 12px;\n}\n.currency-marquee.converted[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.marquee-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #ff7835;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.remittance-mismatch-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background-color: rgba(245, 158, 11, 0.16);\n  border: 1px solid rgba(245, 158, 11, 0.55);\n  border-radius: 4px;\n  padding: 8px 12px;\n  width: fit-content;\n  min-width: 300px;\n  box-sizing: border-box;\n}\n.remittance-mismatch-note[_ngcontent-%COMP%]   .note-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #fbbf24;\n}\n.remittance-mismatch-note[_ngcontent-%COMP%]   .refresh-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fbbf24;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  transition: transform 0.3s ease;\n}\n.currency-conversion-mismatch-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(245, 158, 11, 0.16);\n  border: 1px solid rgba(245, 158, 11, 0.55);\n  border-radius: 4px;\n  padding: 12px 16px;\n  width: fit-content;\n  min-width: 300px;\n  box-sizing: border-box;\n}\n.currency-conversion-mismatch-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--app-status-warning);\n  text-align: center;\n}\n  .readonly-field .mat-mdc-text-field-wrapper {\n  background-color: var(--color-bg-dark-3) !important;\n  border: 1px solid var(--app-border) !important;\n  cursor: not-allowed !important;\n}\n  .readonly-field .mat-mdc-form-field-infix {\n  background: transparent !important;\n}\n  .readonly-field input, \n  .readonly-field .mat-mdc-input-element, \n  .readonly-field .mdc-text-field__input {\n  background: transparent !important;\n  background-color: transparent !important;\n  color: var(--color-white) !important;\n  -webkit-text-fill-color: var(--color-white) !important;\n  box-shadow: none !important;\n  cursor: not-allowed !important;\n  caret-color: transparent !important;\n  border: none !important;\n}\n  .readonly-field input:focus, \n  .readonly-field .mat-mdc-input-element:focus, \n  .readonly-field .mdc-text-field__input:focus {\n  background: transparent !important;\n  background-color: transparent !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n  .readonly-field .mdc-notched-outline__leading, \n  .readonly-field .mdc-notched-outline__notch, \n  .readonly-field .mdc-notched-outline__trailing {\n  border-color: var(--app-border) !important;\n}\n  .readonly-field {\n  --mdc-outlined-text-field-focus-outline-color: var(--app-border) !important;\n  --mdc-outlined-text-field-hover-outline-color: var(--app-border) !important;\n}\n  .readonly-field .mat-mdc-form-field-focus-overlay {\n  opacity: 0 !important;\n}\n.readonly-input[_ngcontent-%COMP%], \n.readonly-total-input[_ngcontent-%COMP%] {\n  background: transparent !important;\n  background-color: transparent !important;\n  color: var(--color-white) !important;\n  -webkit-text-fill-color: var(--color-white) !important;\n  box-shadow: none !important;\n  cursor: not-allowed !important;\n  caret-color: transparent !important;\n  border: 1px solid var(--app-border) !important;\n}\n.readonly-input[_ngcontent-%COMP%]:focus, \n.readonly-total-input[_ngcontent-%COMP%]:focus {\n  background: transparent !important;\n  background-color: transparent !important;\n  box-shadow: none !important;\n  outline: none !important;\n  border-color: var(--app-border) !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch__track {\n  opacity: 0.4 !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle.mdc-switch--selected .mdc-switch__track, \n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__track {\n  opacity: 0.9 !important;\n}\n  .toggle-agreed.mat-mdc-slide-toggle .mdc-switch__handle-track .mdc-switch__handle::after {\n}\n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch__track {\n  opacity: 0.4 !important;\n}\n  .toggle-negotiate.mat-mdc-slide-toggle.mdc-switch--selected .mdc-switch__track, \n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__track {\n  opacity: 0.9 !important;\n}\n  .toggle-negotiate.mat-mdc-slide-toggle .mdc-switch__handle-track .mdc-switch__handle::after {\n}\n  .toggle-agreed + span {\n}\n  .toggle-negotiate + span {\n}\ntextarea[_ngcontent-%COMP%] {\n  color: var(--app-text-primary);\n  -webkit-text-fill-color: var(--app-text-primary);\n}\n/*# sourceMappingURL=pda-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdaEditComponent, { className: "PdaEditComponent" });
})();
export {
  PdaEditComponent
};
//# sourceMappingURL=chunk-OUHFHAIR.js.map
