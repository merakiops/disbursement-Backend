import {
  FileUploadComponent,
  FileUploadService
} from "./chunk-PHWOHFCM.js";
import {
  MatDivider
} from "./chunk-GWDTIECY.js";
import {
  allowLimitedInput,
  allowOnlyLetters,
  handlePasteText,
  trimInput
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  PA_Rules,
  Rules,
  addAdditionalFieldsToFieldsArray,
  autoCompleteFilter,
  calculateVesselStay,
  clearVesselDetails,
  convertMinutesToDaysOrHours,
  convertVesselStayToMinutes,
  displayFn,
  fields,
  filterServicesOnPurpose,
  formatToLocalISOString,
  getAdditionalPropertiesObjectFromForm,
  getCurrencyFromCountry,
  getOptionValuefortheFields,
  getPurposeName,
  onTotalBlur,
  onTotalFocus,
  removeAddedFieldsAndControls,
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
import "./chunk-K64LDRY5.js";
import {
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  NgxMatNativeDateModule
} from "./chunk-P7DPZ3OU.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
import {
  CdkTextareaAutosize,
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
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
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
  SuccessMessageService
} from "./chunk-BQRNQXXM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  NgStyle,
  ViewContainerRef,
  computed,
  inject,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/components/port-agent-form/create-service/create-service.component.ts
function CreateServiceComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateServiceComponent_div_13_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Service Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateServiceComponent_div_13_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Amount is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateServiceComponent_div_13_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CreateServiceComponent_div_13_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r3 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeService(i_r3));
    });
    \u0275\u0275elementStart(1, "mat-icon", 19);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CreateServiceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "mat-form-field", 11)(3, "mat-label");
    \u0275\u0275text(4, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 12);
    \u0275\u0275listener("keypress", function CreateServiceComponent_div_13_Template_input_keypress_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.disallowNumericData($event);
      return \u0275\u0275resetView(ctx_r1.allowLimitedInput($event, 50));
    })("paste", function CreateServiceComponent_div_13_Template_input_paste_5_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaste($event, i_r3, "name"));
    })("blur", function CreateServiceComponent_div_13_Template_input_blur_5_listener() {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputTrim(i_r3, "name"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateServiceComponent_div_13_mat_error_6_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-label");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 13);
    \u0275\u0275listener("blur", function CreateServiceComponent_div_13_Template_input_blur_10_listener() {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputTrim(i_r3, "agentValueFromCurrency"));
    })("input", function CreateServiceComponent_div_13_Template_input_input_10_listener() {
      const service_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.convertCurrency(service_r4, "fromCurrency"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CreateServiceComponent_div_13_mat_error_11_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 11)(13, "mat-label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("blur", function CreateServiceComponent_div_13_Template_input_blur_15_listener() {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputTrim(i_r3, "agentValueToCurrency"));
    })("input", function CreateServiceComponent_div_13_Template_input_input_15_listener() {
      const service_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.convertCurrency(service_r4, "toCurrency"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CreateServiceComponent_div_13_button_16_Template, 3, 0, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 16)(18, "mat-label");
    \u0275\u0275text(19, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 17);
    \u0275\u0275listener("blur", function CreateServiceComponent_div_13_Template_textarea_blur_20_listener() {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputTrim(i_r3, "agentValue"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const service_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_4_0 = service_r4.get("name")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Amount(", ctx_r1.data.fromCurrency, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_6_0 = service_r4.get("agentValueFromCurrency")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Amount(", ctx_r1.data.toCurrency, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.serviceForm.length > 1);
  }
}
var CreateServiceComponent = class _CreateServiceComponent {
  fb;
  dialogRef;
  data;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  serviceFormGroup;
  existingServices = [];
  constructor(fb, dialogRef, data, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.existingServices = this.data.services;
    this.serviceFormGroup = this.fb.group({
      services: this.fb.array([])
    });
    this.addService();
  }
  get serviceForm() {
    return this.serviceFormGroup.get("services");
  }
  // getter for casting to FormGroup
  get serviceFormGroups() {
    return this.serviceForm.controls;
  }
  // method to get the field name
  getServiceControl(index, controlName) {
    return this.serviceForm.at(index)?.get(controlName);
  }
  // method to trim the input value
  onInputTrim(index, controlName) {
    const control = this.getServiceControl(index, controlName);
    if (control)
      trimInput(control);
  }
  // method to handle the paste event
  onPaste(event, index, controlName) {
    const value = handlePasteText(event);
    this.getServiceControl(index, controlName)?.setValue(value);
  }
  // method to add the multiple services
  addService() {
    const group = this.fb.group({
      name: ["", Validators.required],
      agentValueFromCurrency: ["", Validators.required],
      agentValueToCurrency: ["", Validators.required],
      remark: [""],
      subServices: [[]]
    });
    this.serviceForm.push(group);
  }
  // method to remove the servi ce at the particular index
  removeService(index) {
    this.serviceForm.removeAt(index);
  }
  // Check if the service is a duplicate (either existing or within the current form)
  isDuplicateService(serviceName, currentServiceIndex) {
    const isDuplicateInExisting = this.existingServices.some((service) => {
      const existingServiceName = service.get("service")?.value;
      return existingServiceName?.toLowerCase() === serviceName?.toLowerCase();
    });
    const isDuplicateInForm = this.serviceForm.value.some((service, index) => {
      if (index === currentServiceIndex)
        return false;
      return service.name?.toLowerCase() === serviceName?.toLowerCase();
    });
    return isDuplicateInExisting || isDuplicateInForm;
  }
  onSubmit() {
    if (this.serviceForm.valid) {
      const servicesToAdd = this.serviceForm.value;
      const duplicateService = servicesToAdd.find((service, index) => this.isDuplicateService(service.name, index));
      if (duplicateService) {
        this.snackBar.showError("Duplicate services are not allowed");
        return;
      }
      this.dialogRef.close(this.serviceForm.value);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  convertCurrency(row, sourceField) {
    const roe = this.data.roe || 1;
    if (sourceField === "fromCurrency") {
      const fromValue = Number(row.get("agentValueFromCurrency")?.value);
      if (!isNaN(fromValue)) {
        const usdValue = fromValue * roe;
        row.get("agentValueToCurrency")?.setValue(usdValue.toFixed(2), { emitEvent: false });
      }
    } else if (sourceField === "toCurrency") {
      const usdValue = Number(row.get("agentValueToCurrency")?.value);
      if (!isNaN(usdValue)) {
        const fromValue = usdValue / roe;
        row.get("agentValueFromCurrency")?.setValue(fromValue.toFixed(2), { emitEvent: false });
      }
    }
  }
  static \u0275fac = function CreateServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateServiceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateServiceComponent, selectors: [["app-create-service"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 3, consts: [[4, "ngIf"], [1, "dialog-header"], [1, "add-multiple-service", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["formArrayName", "services", 1, "services-scroll"], ["class", "service", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-service"], [1, "service", 3, "formGroupName"], [1, "input-fields"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "keypress", "paste", "blur"], ["type", "number", "matInput", "", "formControlName", "agentValueFromCurrency", 3, "blur", "input"], ["type", "number", "matInput", "", "formControlName", "agentValueToCurrency", 3, "blur", "input"], ["mat-icon-button", "", "type", "button", "class", "delete-button", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "remark-field"], ["matInput", "", "rows", "2", "formControlName", "remark", 3, "blur"], ["mat-icon-button", "", "type", "button", 1, "delete-button", 3, "click"], ["fontSet", "material-symbols-outlined", 1, "delete-icon"]], template: function CreateServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateServiceComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3, "Add Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreateServiceComponent_Template_button_click_4_listener() {
        return ctx.addService();
      });
      \u0275\u0275text(5, " Add Service Row ");
      \u0275\u0275elementStart(6, "mat-icon", 3);
      \u0275\u0275text(7, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function CreateServiceComponent_Template_button_click_8_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "form", 5);
      \u0275\u0275listener("ngSubmit", function CreateServiceComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275template(13, CreateServiceComponent_div_13_Template, 21, 6, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "button", 8);
      \u0275\u0275text(16, " Save Service ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.serviceFormGroup);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.serviceForm.controls);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgForOf, NgIf, LoaderComponent, MatTooltipModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.dialog-container[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n  margin-bottom: 10px !important;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n}\n.add-service[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  background-color: #3C50E0;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  justify-content: space-around;\n  margin-left: 100px;\n  transition: margin-top 0.3s ease;\n  margin-top: 15px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  max-width: 500px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.service[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 10px;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #bcbec5;\n  margin-bottom: 8px;\n  margin-top: 5px;\n  padding: 8px;\n  border-radius: 8px;\n}\n.delete-button[_ngcontent-%COMP%] {\n  background-color: white;\n  border: none;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: red;\n  margin-bottom: 23px;\n  font-size: 27px;\n  margin-top: -17px;\n  margin-right: -12px;\n}\n.add-multiple-service[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: inline-flex;\n  align-items: center;\n  background-color: #3C50E0;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  height: 30px;\n}\n.remark-field[_ngcontent-%COMP%]     .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 40% !important;\n  line-height: 3 !important;\n}\n.remark-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.field-section[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.input-fields[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n}\n.services-scroll[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=create-service.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateServiceComponent, { className: "CreateServiceComponent" });
})();

// src/app/components/port-agent-form/port-agent-form.component.ts
var _c0 = (a0, a1) => ({ "width": a0, "max-width": a1 });
function PortAgentFormComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Note: 1 ", (tmp_1_0 = ctx_r0.portAgentForm.get("pda_currency_from")) == null ? null : tmp_1_0.value, " ~= ", (tmp_1_0 = ctx_r0.portAgentForm.get("pda_roe")) == null ? null : tmp_1_0.value, " ", (tmp_1_0 = ctx_r0.portAgentForm.get("pda_currency_to")) == null ? null : tmp_1_0.value, " ");
  }
}
function PortAgentFormComponent_div_15_mat_form_field_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const field_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.getOptionValue(field_r4, opt_r5, ctx_r0.addedFields));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r4.name === "Cargo" ? opt_r5 == null ? null : opt_r5.type : field_r4.name === "ToCurrency" || field_r4.name === "FromCurrency" ? opt_r5 : opt_r5 == null ? null : opt_r5.name, " ");
  }
}
function PortAgentFormComponent_div_15_mat_form_field_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Please select the ", field_r4.name, ". ");
  }
}
function PortAgentFormComponent_div_15_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 50)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 51, 0);
    \u0275\u0275listener("click", function PortAgentFormComponent_div_15_mat_form_field_1_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const trigger_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(trigger_r3.openPanel());
    })("blur", function PortAgentFormComponent_div_15_mat_form_field_1_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r2);
      const field_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRemove(field_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 52, 1);
    \u0275\u0275listener("optionSelected", function PortAgentFormComponent_div_15_mat_form_field_1_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const field_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelect(field_r4.name, $event.option));
    });
    \u0275\u0275template(7, PortAgentFormComponent_div_15_mat_form_field_1_mat_option_7_Template, 2, 2, "mat-option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PortAgentFormComponent_div_15_mat_form_field_1_mat_error_8_Template, 2, 1, "mat-error", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const auto_r6 = \u0275\u0275reference(6);
    const field_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", field_r4.value)("matAutocomplete", auto_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r0.displayFn.bind(ctx_r0, field_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getFilteredOptions(field_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_11_0.hasError("required"));
  }
}
function PortAgentFormComponent_div_15_mat_form_field_2_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" please select the ", field_r4.name, " ");
  }
}
function PortAgentFormComponent_div_15_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 56)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 57);
    \u0275\u0275listener("dateChange", function PortAgentFormComponent_div_15_mat_form_field_2_Template_input_dateChange_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 58)(5, "mat-datepicker", null, 2);
    \u0275\u0275template(7, PortAgentFormComponent_div_15_mat_form_field_2_mat_error_7_Template, 2, 1, "mat-error", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const picker_r8 = \u0275\u0275reference(6);
    const field_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", picker_r8)("formControlName", field_r4.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_9_0.hasError("required"));
  }
}
function PortAgentFormComponent_div_15_mat_form_field_3_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r4.name, " is required");
  }
}
function PortAgentFormComponent_div_15_mat_form_field_3_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " IMO number not found ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_div_15_mat_form_field_3_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Enter Valid Format(eg : PDA-123) ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_div_15_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 50)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 59);
    \u0275\u0275listener("blur", function PortAgentFormComponent_div_15_mat_form_field_3_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r9);
      const field_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validateIMONumber(field_r4.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PortAgentFormComponent_div_15_mat_form_field_3_mat_error_4_Template, 2, 1, "mat-error", 54)(5, PortAgentFormComponent_div_15_mat_form_field_3_mat_error_5_Template, 2, 0, "mat-error", 54)(6, PortAgentFormComponent_div_15_mat_form_field_3_mat_error_6_Template, 2, 0, "mat-error", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const field_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r4.data_type || "text")("formControlName", field_r4.value)("readonly", field_r4.pdareadOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_8_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.name === "IMO Number" && ((tmp_9_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_9_0.hasError("imoNotFound")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.name === "Invoice Ref No" && ((tmp_10_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_10_0.hasError("invalidData")) && !((tmp_10_0 = ctx_r0.portAgentForm.get(field_r4.value)) == null ? null : tmp_10_0.hasError("required")));
  }
}
function PortAgentFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PortAgentFormComponent_div_15_mat_form_field_1_Template, 9, 6, "mat-form-field", 48)(2, PortAgentFormComponent_div_15_mat_form_field_2_Template, 8, 5, "mat-form-field", 49)(3, PortAgentFormComponent_div_15_mat_form_field_3_Template, 7, 7, "mat-form-field", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.type !== "date" && field_r4.type !== "select");
  }
}
function PortAgentFormComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1, " Sl.No ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r10 + 1, " ");
  }
}
function PortAgentFormComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 62);
  }
}
function PortAgentFormComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, " Service ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = row_r11.get("service")) == null ? null : tmp_2_0.value, " ");
  }
}
function PortAgentFormComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65)(1, "strong");
    \u0275\u0275text(2, "Total");
    \u0275\u0275elementEnd()();
  }
}
function PortAgentFormComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 66)(1, "div", 67);
    \u0275\u0275text(2, "Agent Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68)(4, "div", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 70);
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fromCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.toCurrency);
  }
}
function PortAgentFormComponent_td_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " \u{1F6A9} ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 71)(1, "div", 72);
    \u0275\u0275template(2, PortAgentFormComponent_td_29_span_2_Template, 2, 0, "span", 73);
    \u0275\u0275elementStart(3, "input", 74);
    \u0275\u0275listener("keydown", function PortAgentFormComponent_td_29_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.restrictDecimal($event, 2));
    })("input", function PortAgentFormComponent_td_29_Template_input_input_3_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.convertCurrency(row_r13, "fromCurrency"));
    })("focus", function PortAgentFormComponent_td_29_Template_input_focus_3_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTotalFocus(row_r13, "total"));
    })("blur", function PortAgentFormComponent_td_29_Template_input_blur_3_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTotalBlur(row_r13, "total"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 75);
    \u0275\u0275elementStart(5, "input", 76);
    \u0275\u0275listener("keydown", function PortAgentFormComponent_td_29_Template_input_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.restrictDecimal($event, 2));
    })("input", function PortAgentFormComponent_td_29_Template_input_input_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.convertCurrency(row_r13, "toCurrency"));
    })("focus", function PortAgentFormComponent_td_29_Template_input_focus_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTotalFocus(row_r13, "totalUsd"));
    })("blur", function PortAgentFormComponent_td_29_Template_input_blur_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTotalBlur(row_r13, "totalUsd"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const row_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", row_r13);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_3_0 = row_r13.get("negotiate")) == null ? null : tmp_3_0.value) === "Y" && !((tmp_3_0 = row_r13.get("total")) == null ? null : tmp_3_0.dirty));
    \u0275\u0275advance();
    \u0275\u0275property("readonly", ctx_r0.isRerequest && ((tmp_4_0 = row_r13.get("negotiate")) == null ? null : tmp_4_0.value) === "N");
    \u0275\u0275advance(2);
    \u0275\u0275property("readonly", ctx_r0.isRerequest && ((tmp_5_0 = row_r13.get("negotiate")) == null ? null : tmp_5_0.value) === "N");
  }
}
function PortAgentFormComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "div", 79)(2, "div", 80);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 81);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fromCurrency, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r0.grandTotal, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.toCurrency, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, ctx_r0.grandTotalUsd, "1.2-2"), " ");
  }
}
function PortAgentFormComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, " Remark ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(1, _c0, ctx_r0.isRerequest ? "500px" : "700px", ctx_r0.isRerequest ? "500px" : "700px"));
  }
}
function PortAgentFormComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275element(1, "textarea", 84, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const row_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", row_r14);
    \u0275\u0275advance();
    \u0275\u0275property("readonly", ctx_r0.isRerequest && ((tmp_4_0 = row_r14.get("negotiate")) == null ? null : tmp_4_0.value) === "N");
  }
}
function PortAgentFormComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 85);
  }
}
function PortAgentFormComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1, " FeedBack ");
    \u0275\u0275elementEnd();
  }
}
function PortAgentFormComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275element(1, "textarea", 87, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", row_r15);
    \u0275\u0275advance();
    \u0275\u0275property("readonly", ctx_r0.isRerequest);
  }
}
function PortAgentFormComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 85);
  }
}
function PortAgentFormComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 88);
  }
}
function PortAgentFormComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 89);
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    \u0275\u0275property("formGroup", row_r16);
  }
}
function PortAgentFormComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 90);
  }
}
function PortAgentFormComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function PortAgentFormComponent_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearData());
    });
    \u0275\u0275text(1, "Clear All");
    \u0275\u0275elementEnd();
  }
}
var PortAgentFormComponent = class _PortAgentFormComponent {
  fb;
  dialog;
  portAgentFormService;
  snackBar;
  portService;
  router;
  successMessageService;
  overlay;
  vcr;
  fileUploadService;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  displayedColumns = ["Sl.No", "service", "total", "pa_remark"];
  hasInitializedExpansion = false;
  portAgentForm;
  datasource = new MatTableDataSource([]);
  countryList = [];
  portList = [];
  vesselList = [];
  purposeList = [];
  currencyList = [];
  cargoList = [];
  grandTotal = 0;
  serviceTotal = 0;
  hasInitialized = false;
  fields = fields.filter((field) => field.PAForm === true).map((field) => {
    if (field.name === "FromCurrency") {
      return __spreadProps(__spreadValues({}, field), { pdareadOnly: true });
    }
    return field;
  });
  addedFields = [];
  serviceList = new Rules();
  filteredOptions = {};
  bankDetails = null;
  storedData = sessionStorage.getItem("pa-success-response");
  responseData = this.storedData ? JSON.parse(this.storedData) : null;
  addressAndBankDetails = sessionStorage.getItem("addressAndBankDetails");
  bankInformation = this.addressAndBankDetails ? JSON.parse(this.addressAndBankDetails) : null;
  isRerequest = this.responseData?.pda?.is_re_request === "Y" ? true : false;
  autoCompleteFilter = autoCompleteFilter;
  displayFn = displayFn;
  getOptionValue = getOptionValuefortheFields;
  onTotalFocus = onTotalFocus;
  onTotalBlur = onTotalBlur;
  restrictDecimal = restrictDecimal;
  originalFeedback = null;
  portServiceList = new PA_Rules();
  fileList = [];
  previousPurposeId = null;
  savedServiceData = [];
  tariffRules = new PA_Rules();
  grandTotalUsd = 0;
  constructor(fb, dialog, portAgentFormService, snackBar, portService, router, successMessageService, overlay, vcr, fileUploadService) {
    this.fb = fb;
    this.dialog = dialog;
    this.portAgentFormService = portAgentFormService;
    this.snackBar = snackBar;
    this.portService = portService;
    this.router = router;
    this.successMessageService = successMessageService;
    this.overlay = overlay;
    this.vcr = vcr;
    this.fileUploadService = fileUploadService;
    this.buildPortAgentForm();
  }
  // method to build the port agent form
  buildPortAgentForm() {
    this.portAgentForm = this.fb.group({
      country_id: [{ value: null, disabled: this.isRerequest }, Validators.required],
      port_id: [{ value: null, disabled: this.isRerequest }, Validators.required],
      cargo_id: [null],
      imo_number: [{ value: null, disabled: this.isRerequest }, [Validators.required, Validators.maxLength(7)]],
      vessel_id: [null],
      vessel: [{ value: "", disabled: true }, Validators.required],
      nrt: [null, Validators.required],
      grt: [null, Validators.required],
      rgrt: [null],
      type: [null],
      loa: [null, Validators.required],
      beam: [null, Validators.required],
      depth: [null, Validators.required],
      dwt: [null, Validators.required],
      purpose_id: [{ value: null, disabled: this.isRerequest }, Validators.required],
      eta: [null, [Validators.required]],
      etd: [null, [Validators.required]],
      vessel_stay: [{ value: "", disabled: true }, Validators.required],
      pda_roe: [null, Validators.required],
      voyage: [null, Validators.required],
      pda_currency_from: [null, Validators.required],
      pda_currency_to: [null, Validators.required],
      services: this.fb.array([]),
      invoice_ref_no: [null, [Validators.required]]
    });
  }
  // Returns the 'services' FormArray from the main form for easy access and manipulation
  get servicesFormArray() {
    const services = this.portAgentForm.get("services");
    return services;
  }
  getFilteredOptions(field) {
    return this.filteredOptions[field.value] || [];
  }
  ngOnInit() {
    this.getAllMasterData();
    this.fields.forEach((field) => {
      if (field.type === "select") {
        this.autoCompleteFilter(field, this.portAgentForm, this.filteredOptions);
      }
    });
    this.portAgentForm.get("pda_roe")?.valueChanges.subscribe((newRoe) => {
      if (newRoe) {
        this.servicesFormArray.controls.forEach((row) => {
          this.convertCurrency(row, "fromCurrency");
        });
      }
    });
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
  onSelect(fieldName, event) {
    if (fieldName === "Country") {
      const currency = getCurrencyFromCountry(this.countryList, event.value);
      this.portAgentForm.patchValue({
        pda_currency_from: currency
      });
      const country_id = this.portAgentForm.get("country_id")?.value;
      this.loader.show();
      this.portByCountry(country_id);
    } else if (fieldName === "Port") {
      const port_id = this.portAgentForm.get("port_id")?.value;
      removeAddedFieldsAndControls(this.portAgentForm, this.addedFields, this.fields);
      this.addedFields = [];
      this.addedFields = addAdditionalFieldsToFieldsArray(port_id, this.portList, this.fields, this.portAgentForm, this.addedFields, this.filteredOptions, this.fb);
      const requestBody = {
        page: 1,
        page_size: 1,
        query_name: "",
        port_id
      };
      this.loader.show();
      this.portService.getTariffRules(requestBody).subscribe({
        next: (res) => {
          this.tariffRules = res?.data?.[0]?.rules;
          this.portServiceList = res?.data?.[0]?.rules;
          this.loader.hide();
        },
        error: (error) => {
          this.portServiceList = new PA_Rules();
          const errMsg = error?.error?.error || "Failed to load tariff rules";
          this.snackBar.showError(errMsg);
          this.loader.hide();
        }
      });
    } else if (fieldName === "Purpose") {
      this.hasInitialized = false;
      const purposeId = event.value;
      if (this.previousPurposeId && purposeId !== this.previousPurposeId) {
        this.savedServiceData = this.servicesFormArray.getRawValue();
        this.showDataLostWarning();
      } else {
        this.previousPurposeId = purposeId;
        const purpose = getPurposeName(this.purposeList, purposeId);
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          const controlsToAdd = this.servicesFormArray.controls;
          controlsToAdd.forEach((control) => {
            const serviceName = control.value.service?.toLowerCase();
            const exists = this.serviceList.items.some((item) => item.service?.toLowerCase() === serviceName);
            if (!exists) {
              this.serviceList.items.push(control.value);
            } else {
              const total = parseFloat(control?.value?.total) || 0;
              const totalUsd = parseFloat(control?.value?.totalUsd) || 0;
              this.grandTotal -= total;
              this.grandTotalUsd -= totalUsd;
            }
          });
          this.populateServicesFromList();
        }
      }
    }
  }
  // Method to handle clearing/removing the selected purpose or option
  onRemove(field) {
    if (field?.name === "Country" && !this.portAgentForm.get("country_id")?.value) {
      this.portList = [];
      this.filteredOptions["port_id"] = [];
      this.filteredOptions["purpose_id"] = [];
      this.portAgentForm.get("port_id")?.setValue(null);
      this.portAgentForm.get("purpose_id")?.setValue(null);
      this.serviceList.items = [];
      this.datasource.data = [];
    } else if (field?.name === "Port" && !this.portAgentForm.get("port_id")?.value) {
      this.portAgentForm.get("purpose_id")?.setValue(null);
      this.portServiceList.items = [];
      this.serviceList.items = [];
      this.datasource.data = [];
    }
  }
  // method to validate the imo number and auto populate the vessel field
  validateIMONumber(fieldKey) {
    if (fieldKey === "imo_number") {
      const control = this.portAgentForm.get(fieldKey);
      const value = control?.value;
      const payload = {
        imo_number: value,
        client_id: this.responseData.client_id
      };
      if (value.length === 7) {
        this.portAgentFormService.getVesselDetailByIMONumber(payload).subscribe({
          next: (selectedVessel) => {
            if (!selectedVessel?.data) {
              control?.setErrors({ imoNotFound: true });
              return;
            }
            const vessel = selectedVessel.data;
            this.portAgentForm.patchValue({
              nrt: vessel.nrt,
              grt: vessel.grt,
              rgrt: vessel.rgrt,
              depth: vessel.depth,
              loa: vessel.loa,
              beam: vessel.beam,
              dwt: vessel.dwt,
              vessel_id: vessel.vessel_id,
              vessel: vessel.name
            });
            control?.setErrors(null);
          },
          error: () => {
            control?.setErrors({ imoNotFound: true });
          }
        });
      } else {
        clearVesselDetails(this.portAgentForm);
        control?.setErrors({ imoNotFound: true });
      }
    }
  }
  // method to set the data for the dropdown
  formatFieldData(fields2) {
    fields2?.forEach((field) => {
      switch (field.name.trim()) {
        case "Country":
          field.options = this.countryList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Port":
          field.options = this.portList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Purpose":
          field.options = this.purposeList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "ToCurrency":
          field.options = this.currencyList;
          this.filteredOptions[field.value] = field.options;
          break;
        case "Cargo":
          field.options = this.cargoList;
          this.filteredOptions[field.value] = field.options;
          break;
      }
      this.populateFormData(this.responseData);
    });
  }
  // method to construct the payload
  transformJsonData(formData) {
    const dateFields = this.fields.filter((field) => field.type === "date").map((field) => field.name);
    this.bankDetails = this.isRerequest ? this.responseData?.bank_details : this.bankInformation.bankDetails;
    return {
      disbursement_seq: this.responseData?.disbursement_seq,
      client: {
        clinet_id: this.responseData?.pda?.portagent_pda_data?.client?.client_id,
        name: this.responseData?.pda?.portagent_pda_data?.client?.name || "",
        address: this.responseData?.pda?.portagent_pda_data?.client?.address || ""
      },
      port_agent: {
        name: "",
        address: this.isRerequest ? this.responseData?.billing_address : this.bankInformation?.address || "",
        bank_details: {
          bank_details_id: this.bankDetails?.bank_details_id,
          country_name: this.bankDetails?.country_name || "",
          beneficiary_acc_holder_name: this.bankDetails?.beneficiary_acc_holder_name || "",
          bank_name: this.bankDetails?.bank_name || "",
          correspondent_account_number: this.bankDetails?.correspondent_account_number || "",
          current_account_number: String(this.bankDetails?.current_account_number) || "",
          ifsc_code: this.bankDetails?.ifsc_code || "",
          bik_code: this.bankDetails?.bik_code || "",
          swift_code: this.bankDetails?.swift_code || "",
          currency: this.bankDetails?.currency || "",
          inn_code: this.bankDetails?.inn_code || "",
          iban_number: this.bankDetails?.iban_number || "",
          branch_address: this.bankDetails?.branch_address || "",
          bic_code: this.bankDetails?.bic_code || ""
        }
      },
      port: {
        port_id: formData.port_id,
        name: this.portList.find((port) => port.port_id === formData.port_id)?.name
      },
      country_id: formData.country_id,
      country: {
        country_id: formData.country_id,
        name: this.countryList.find((country) => country.country_id === formData.country_id)?.name
      },
      purpose: {
        purpose_id: formData.purpose_id,
        name: this.purposeList.find((p) => p.purpose_id === formData.purpose_id)?.name
      },
      cargo: {
        cargo_id: formData.cargo_id || 0,
        type: this.cargoList.find((c) => c.cargo_id === formData.cargo_id)?.type || ""
      },
      vessel: {
        vsl_id: formData.vessel_id?.toString() || "",
        imo_number: this.portAgentForm.contains("imo_number") ? formData.imo_number?.toString() : this.responseData?.pda?.portagent_pda_data?.vessel?.imo_number || "",
        name: formData.vessel,
        grt: formData.grt?.toString() || "",
        rgrt: formData.rgrt?.toString() || "",
        type: formData.type?.toString() || "",
        nrt: formData.nrt?.toString() || "",
        loa: formData.loa?.toString() || "",
        beam: formData.beam?.toString() || "",
        depth: formData.depth?.toString() || "",
        dwt: formData.dwt?.toString() || "",
        additional_properties: Object.fromEntries(this.addedFields.map(({ fieldName, controlName }) => {
          let value = this.portAgentForm.get(controlName)?.value ?? null;
          if (dateFields.includes(fieldName) && value) {
            value = formatToLocalISOString(value);
          }
          return [fieldName, value];
        })),
        additional_properties_object: getAdditionalPropertiesObjectFromForm(this.addedFields, this.portAgentForm, this.fields)
      },
      services: {
        items: this.servicesFormArray.controls.map((ctrl) => {
          const value = ctrl.getRawValue();
          return {
            SNO: value.SNO ?? 0,
            code: value.code ?? "",
            service: value.service ?? null,
            meraki_feedback: value.meraki_feedback ?? null,
            pa_remark: value.pa_remark ?? null,
            /*
             * @Venkatalakshmi please review -- Surjit
             * Using nullish coalescing operator to preserve the same value
             */
            negotiate: value.negotiate ?? "N",
            agreed: value.agreed ?? "N",
            purpose: value.purpose ?? null,
            meraki_remark_client: value.meraki_remark_client ?? null,
            client_comment: value.client_comment ?? null,
            info_msg: value.info_msg ?? null,
            client_option: value.client_option ?? "N",
            display_to_client: value.display_to_client ?? "N",
            total: value.total === "undefined" || value.total === void 0 || value.total === null || value.total === "" || isNaN(Number(value.total)) ? null : Number(value.total),
            subService: (value.subService || []).map((sub) => ({
              name: sub.name ?? null,
              basic_value: sub.basic_value ?? null,
              calculated_basic_value: sub.calculated_basic_value ?? null,
              movement: sub.movement ?? 0,
              tariff_percent: sub.tariff_percent ?? 1,
              formula_result: sub.formula_result ?? "Basic Value * movement * Tariff %",
              optional: sub.optional ?? "Y",
              operational_flag: sub.operational_flag ?? "+",
              sub_total: sub.sub_total ?? 0,
              formula_inputs: sub.formula_inputs ?? null,
              unique_key: sub.unique_key ?? null,
              hide: sub.hide ?? "N"
            }))
          };
        }),
        grand_total: (isNaN(Number(this.grandTotal ?? 0)) ? 0 : Number(this.grandTotal ?? 0)).toFixed(2)
      },
      eta: formData.eta ? formatToLocalISOString(new Date(formData.eta)) : null,
      etd: formData.etd ? formatToLocalISOString(new Date(formData.etd)) : null,
      vessel_stay: convertVesselStayToMinutes(formData.vessel_stay),
      roe: +formData.pda_roe || null,
      voyage: formData.voyage,
      pda_currency_to: formData.pda_currency_to,
      pda_currency_from: formData.pda_currency_from,
      invoice_ref_no: formData.invoice_ref_no?.trim() || null,
      file_list: this.fileList.filter((file) => file.sync === "N").map((file) => file.file_id) || [],
      port_id: formData.port_id,
      port_tariff_rule: {
        items: this.filteredTariffRule()
      }
    };
  }
  // method to format the data
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // method to submit the form
  onSubmit() {
    if (this.portAgentForm.valid) {
      const data = {
        disbursement_seq: this.responseData?.disbursement_seq,
        pda_fda_flag: "PDA"
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
          if (!this.grandTotal || this.grandTotal === 0) {
            this.snackBar.showError("Please enter the agent value ");
            this.loader.hide();
            return;
          }
          this.bankDetails = this.isRerequest ? this.responseData?.bank_details : this.bankInformation.bankDetails;
          const formData = this.transformJsonData(this.portAgentForm.getRawValue());
          this.portAgentFormService.submitPortAgentFormData(formData).subscribe({
            next: (response) => {
              this.loader.hide();
              const successMessage = "Thank you for your submission. We have received your information and will process it shortly.";
              this.successMessageService.setSuccessMessage(successMessage);
              this.router.navigate(["/submit/success"], { replaceUrl: true });
            },
            error: (err) => {
              this.loader.hide();
              const errMsg = err?.error?.error || "Submission failed. Please try again.";
              this.snackBar.showError(errMsg);
            }
          });
        },
        error: (err) => {
          this.loader.hide();
          const errMsg = err?.error?.error || "Submission failed. Please try again.";
          this.snackBar.showError(errMsg);
        }
      });
    } else {
      this.portAgentForm.markAllAsTouched();
      this.snackBar.showError("Please fill all required fields");
    }
  }
  // method to open the add service dialog
  openCreateServiceDialog() {
    const data = {
      fromCurrency: this.portAgentForm.get("pda_currency_from")?.value,
      toCurrency: this.portAgentForm.get("pda_currency_to")?.value,
      roe: this.portAgentForm.get("pda_roe")?.value,
      services: this.servicesFormArray.controls
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "60%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(CreateServiceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || !Array.isArray(result))
        return;
      result.forEach((row) => {
        const subServiceArray = this.fb.array((row.subService || []).map((sub) => this.fb.group({
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
          unique_key: [sub.unique_key],
          hide: [sub.hide]
        })));
        const newSNO = this.servicesFormArray.length + 1;
        const control = this.fb.group({
          SNO: [newSNO],
          code: [row.code],
          service: [row.name],
          meraki_feedback: [row.meraki_feedback],
          pa_remark: [row.remark || ""],
          negotiate: [row.negotiate || "N"],
          agreed: [row.agreed || "N"],
          purpose: [row.purpose || ""],
          meraki_remark_client: [row.meraki_remark_client || ""],
          client_comment: [row.client_comment || ""],
          display_to_client: [row.display_to_client || "N"],
          client_option: [row.client_option || "N"],
          info_msg: [row.info_msg || ""],
          total: [row.agentValueFromCurrency ?? null, Validators.required],
          totalUsd: [row.agentValueToCurrency ?? null],
          subService: subServiceArray
        });
        this.servicesFormArray.push(control);
        this.calculategrandTotal();
      });
      this.datasource.data = [...this.servicesFormArray.controls];
    });
  }
  // method to get the all master data
  getAllMasterData() {
    this.loader.show();
    const params = {
      fields: ["all"]
    };
    this.portAgentFormService.getMasterData(params).subscribe({
      next: (response) => {
        this.countryList = response.country;
        this.purposeList = response.purpose;
        this.currencyList = response.currency;
        this.cargoList = response.cargo;
        this.formatFieldData(fields);
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
      }
    });
  }
  // method to clear the data on click of clear all button
  clearData() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: { header: "Clear Data", text: "You want to clear the form? All entered information will be lost" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.grandTotal = 0;
        this.datasource.data = [];
        this.servicesFormArray.clear();
        this.portAgentForm.reset();
        this.hasInitialized = false;
        const additionalFields = this.addedFields.map((field) => field.fieldName);
        this.fields = this.fields.filter((f) => !additionalFields.includes(f.name));
        this.populateFormData(this.responseData);
      }
    });
  }
  populateServicesFromList() {
    if (this.servicesFormArray.length > 0 && this.hasInitialized) {
      return;
    }
    this.servicesFormArray.clear();
    if (this.serviceList && Array.isArray(this.serviceList.items)) {
      this.serviceList.items.forEach((item) => {
        const subServiceArray = this.fb.array((item.subService || []).map((sub) => this.fb.group({
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
          unique_key: [sub.unique_key],
          hide: [sub.hide]
        })));
        const control = this.fb.group({
          SNO: [item.SNO],
          code: [item.code || ""],
          service: [item.service || ""],
          pa_remark: [item.pa_remark || ""],
          meraki_feedback: [item.meraki_feedback || ""],
          negotiate: [item.negotiate || "N"],
          agreed: [item.agreed || "N"],
          purpose: [item.purpose || ""],
          meraki_remark_client: [item.meraki_remark_client || ""],
          client_comment: [item.client_comment || ""],
          display_to_client: [item.display_to_client || "N"],
          client_option: [item.client_option || "N"],
          info_msg: [item.info_msg || ""],
          total: [item.total !== null && item.total !== void 0 && item.total !== "" ? item.total : null],
          totalUsd: [item.totalUsd !== null && item.totalUsd !== void 0 && item.totalUsd !== "" ? item.totalUsd : null],
          subService: subServiceArray,
          previousTotalValue: null
        });
        this.servicesFormArray.push(control);
        if (item.total) {
          this.convertCurrency(control, "fromCurrency");
        }
        this.datasource.data = this.servicesFormArray.controls;
      });
    }
  }
  // method to populate the form data if is re request
  populateFormData(data) {
    if (!this.hasInitialized) {
      const vesselData = data.pda.portagent_pda_data?.vessel;
      const countryId = data.pda.portagent_pda_data?.country.country_id || null;
      const portId = data.pda.portagent_pda_data?.port.port_id || null;
      countryId ? this.portAgentForm.get("country_id")?.disable() : this.portAgentForm.get("country_id")?.enable();
      if (countryId) {
        const currency = getCurrencyFromCountry(this.countryList, countryId);
        this.portAgentForm.patchValue({
          pda_currency_from: currency
        });
      }
      portId ? this.portAgentForm.get("port_id")?.disable() : this.portAgentForm.get("port_id")?.enable();
      if (countryId) {
        this.portByCountry(countryId).then(() => {
          if (this.portList?.length) {
            this.portAgentForm.get("port_id")?.setValue(portId || null);
          }
        });
      }
      if (vesselData?.vsl_id) {
        this.portAgentForm.get("vessel")?.setValue(vesselData.name);
        this.fields = this.fields.filter((field) => field.name !== "IMO Number");
        if (this.portAgentForm.contains("imo_number")) {
          this.portAgentForm.removeControl("imo_number");
        }
      }
      if (portId) {
        this.tariffrulesByPort(portId);
      }
      this.portAgentForm.patchValue({
        country_id: data.pda.portagent_pda_data?.country.country_id || null,
        cargo_id: data.pda.portagent_pda_data?.cargo.cargo_id || null,
        vessel_id: vesselData?.vsl_id || null,
        vessel: vesselData?.name || "",
        nrt: vesselData?.nrt || null,
        grt: vesselData?.grt || null,
        rgrt: vesselData?.rgrt || null,
        type: vesselData?.type || null,
        loa: vesselData?.loa || null,
        beam: vesselData?.beam || null,
        depth: vesselData?.depth || null,
        dwt: vesselData?.dwt || null,
        purpose_id: data.pda.portagent_pda_data?.purpose.purpose_id || null,
        eta: this.isRerequest ? data.pda.portagent_pda_data?.eta || null : data.pda?.pda_eta || null,
        etd: this.isRerequest ? data.pda.portagent_pda_data?.etd || null : data.pda?.pda_etd || null,
        pda_roe: data.pda?.pda_roe || null,
        voyage: this.isRerequest ? data.pda.portagent_pda_data?.voyage || null : data?.voyage || null,
        pda_currency_from: data.pda.pda_currency_from || null,
        pda_currency_to: data.pda?.pda_currency_to || null,
        vessel_stay: this.isRerequest ? data.pda.portagent_pda_data?.vessel_stay || null : convertMinutesToDaysOrHours(data.pda?.pda_vessel_stay) || null,
        invoice_ref_no: data.pda?.invoice_ref_no || null
      });
      if (this.portAgentForm.contains("imo_number")) {
        this.portAgentForm.get("imo_number")?.setValue(vesselData?.imo_number || "");
      }
      const additionalProperties = data?.pda?.pda_vessel_details?.additional_property || [];
      if (additionalProperties) {
        this.addedFields = additionalProperties.map((item) => {
          return {
            fieldName: item?.field_name,
            controlName: item?.field_name,
            is_mandatory: item?.is_mandatory,
            data_type: item?.data_type
          };
        });
        this.fields.push(...this.addedFields.map((f) => {
          const [splitType, splitData] = f?.data_type?.split(":") || [];
          const options = splitData ? splitData.split(",").map((option) => ({
            name: option.trim(),
            value: option.trim()
          })) : [];
          return {
            name: f.fieldName,
            value: f.controlName,
            type: splitType === "date" ? "date" : splitType === "select" ? "select" : "input",
            data_type: splitType === "select" ? "string" : splitType,
            options: options || []
          };
        }));
        this.addedFields.forEach((f) => {
          const matchingProp = additionalProperties.find((prop) => prop.field_name === f.fieldName);
          const isMandatory = f.is_mandatory === "Y";
          const [splitType, splitData] = f?.data_type?.split(":") || [];
          const options = splitData ? splitData.split(",") : [];
          const value = matchingProp ? matchingProp.value : null;
          if (this.portAgentForm) {
            this.portAgentForm.addControl(f.controlName, this.fb.control(value, isMandatory ? Validators.required : []));
            this.filteredOptions[f.controlName] = options;
          }
        });
      }
      this.isRerequest ? this.displayedColumns.push("feedback") : "";
      if (data.pda.portagent_pda_data?.services) {
        this.portServiceList = data.pda.portagent_pda_data.services;
        this.grandTotal = data.pda.portagent_pda_data.services.grand_total || "";
      }
      this.previousPurposeId = data.pda.portagent_pda_data?.purpose.purpose_id;
      const purposeId = data.pda.portagent_pda_data?.purpose.purpose_id;
      if (purposeId) {
        const purpose = this.purposeList.find((purpose2) => purpose2.purpose_id === purposeId)?.name || "";
        this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
        this.populateServicesFromList();
      }
    }
    this.hasInitialized = true;
  }
  // method to get the port by country
  portByCountry(value) {
    return new Promise((resolve, reject) => {
      this.loader.show();
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
          this.loader.hide();
          resolve();
        },
        error: (error) => {
          this.portList = [];
          this.loader.hide();
          const errMsg = error?.error?.error;
          this.snackBar.showError(errMsg);
          reject();
        }
      });
    });
  }
  // method to open the file upload component
  upload() {
    const disbursementId = this.responseData?.disbursement_id;
    const disbursementSeq = this.responseData?.disbursement_seq;
    const pdaId = this.responseData?.pda?.pda_id;
    const data = {
      files: [],
      disbursementId,
      pdaId,
      pdaOrFda: "PDA",
      disbursement_seq: disbursementSeq,
      isDisbursement: false,
      source_type: "Port Agent"
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
  showDataLostWarning() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      panelClass: "sweet-alert-style",
      data: {
        header: "Data Loss Warning",
        text: "Are you sure you want to change the purpose? This will reset the services."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const purposeId = this.portAgentForm.get("purpose_id")?.value;
        this.previousPurposeId = purposeId;
        const portId = this.portAgentForm.get("port_id")?.value;
        if (purposeId) {
          this.tariffrulesByPort(portId);
        }
        this.grandTotal = 0;
        this.grandTotalUsd = 0;
      } else {
        this.restoreServiceData();
      }
    });
  }
  tariffrulesByPort(port_id) {
    this.serviceList = new Rules();
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
        this.serviceList = res?.data[0]?.rules;
        const purposeId = this.portAgentForm.get("purpose_id")?.value;
        const purpose = getPurposeName(this.purposeList, purposeId);
        this.tariffRules = res?.data[0]?.rules;
        if (purpose) {
          this.serviceList.items = filterServicesOnPurpose(purpose, this.portServiceList.items);
          this.populateServicesFromList();
        }
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
        const errMsg = err?.error?.error || "Something went wrong please try again later.";
        this.snackBar.showError(errMsg);
      }
    });
  }
  restoreServiceData() {
    this.servicesFormArray.clear();
    this.savedServiceData.forEach((serviceData) => {
      const subServiceArray = this.fb.array((serviceData.subService || []).map((sub) => this.fb.group({
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
        unique_key: [sub.unique_key],
        hide: [sub.hide]
      })));
      const control = this.fb.group({
        SNO: [serviceData.SNO],
        code: [serviceData.code],
        service: [serviceData.service],
        pa_remark: [serviceData.pa_remark],
        meraki_feedback: [serviceData.meraki_feedback],
        negotiate: [serviceData.negotiate],
        agreed: [serviceData.agreed],
        purpose: [serviceData.purpose],
        meraki_remark_client: [serviceData.meraki_remark_client],
        client_comment: [serviceData.client_comment],
        display_to_client: [serviceData.display_to_client],
        client_option: [serviceData.client_option],
        info_msg: [serviceData.info_msg],
        total: [serviceData.total],
        subService: subServiceArray
      });
      this.servicesFormArray.push(control);
    });
    this.datasource.data = this.servicesFormArray.controls;
    this.calculategrandTotal();
  }
  filteredTariffRule() {
    return this.tariffRules.items.filter((item) => this.serviceList.items.some((service) => service.service === item.service));
  }
  get fromCurrency() {
    return this.portAgentForm?.get("pda_currency_from")?.value || "";
  }
  get toCurrency() {
    return this.portAgentForm?.get("pda_currency_to")?.value || "";
  }
  shouldShowAgentCurrency(row) {
    const value = row.get("total")?.value;
    return value !== null && value !== "" && Number(value) > 0;
  }
  // Exchange rate: CNY -> USD
  // Replace this with your form value for dynamic ROE
  get roe() {
    return this.portAgentForm.get("pda_roe")?.value || 1;
  }
  convertCurrency(row, sourceField) {
    const roe = this.roe;
    if (sourceField === "fromCurrency") {
      const totalValue = row.get("total")?.value;
      if (totalValue === null || totalValue === "") {
        row.get("totalUsd")?.setValue("", { emitEvent: false });
        return;
      }
      const usdValue = Number(totalValue);
      if (isNaN(usdValue))
        return;
      row.get("totalUsd")?.setValue((usdValue * roe)?.toFixed(2), { emitEvent: false });
    } else if (sourceField === "toCurrency") {
      const usdValue = row.get("totalUsd")?.value;
      if (usdValue === null || usdValue === "") {
        row.get("total")?.setValue("", { emitEvent: false });
        return;
      }
      const numericUsd = Number(usdValue);
      if (isNaN(numericUsd))
        return;
      row.get("total")?.setValue((numericUsd / roe)?.toFixed(2), { emitEvent: false });
    }
    this.calculategrandTotal();
  }
  calculategrandTotal() {
    const rows = this.servicesFormArray.controls;
    this.grandTotal = rows.reduce((sum, ctrl) => {
      const value = ctrl.getRawValue();
      const total = value.total != null ? Number(value.total) : 0;
      return sum + total;
    }, 0);
    this.grandTotalUsd = rows.reduce((sum, ctrl) => {
      const value = ctrl.getRawValue();
      const totalUsd = value.totalUsd != null ? Number(value.totalUsd) : 0;
      return sum + totalUsd;
    }, 0);
  }
  static \u0275fac = function PortAgentFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortAgentFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SuccessMessageService), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(FileUploadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortAgentFormComponent, selectors: [["app-port-agent-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 11, consts: [["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["picker", ""], ["autoSize", "cdkTextareaAutosize"], [1, "port-agent-form-container"], [1, "header-section"], [2, "margin", "10px auto", "font-size", "23px", "font-weight", "500", "color", "#5b5454"], [2, "margin-top", "5px", "height", "3px", "background-color", "#e0e4e7", "border", "none"], [1, "top-section"], [1, "currency-marquee-section"], ["class", "currency-marquee", 4, "ngIf"], [1, "port-agent-info"], [1, "form-section", 3, "ngSubmit", "formGroup"], [1, "field-section"], [1, "field-grid"], [4, "ngFor", "ngForOf"], [1, "service-section"], [1, "top-service-section"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", "style", "width: 60px; max-width: 60px; min-width: 60px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 60px; max-width: 60px; min-width: 60px;", 4, "matCellDef"], ["mat-footer-cell", "", "style", "width: 60px; max-width: 60px; min-width: 60px;", 4, "matFooterCellDef"], ["matColumnDef", "service"], ["mat-header-cell", "", "style", "width: 250px;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-left", 4, "matCellDef"], ["mat-footer-cell", "", "class", "footer-label", 4, "matFooterCellDef"], ["matColumnDef", "total"], ["mat-header-cell", "", "style", "width: 60px; max-width: 160px; min-width: 160px; padding-bottom: 8px; padding-left: 30px !important;", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "formGroup", 4, "matCellDef"], ["mat-footer-cell", "", "class", "total-agent-value", "style", "width: 160px; max-width: 160px; min-width: 160px; white-space: nowrap;", 4, "matFooterCellDef"], ["matColumnDef", "pa_remark"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-left", 3, "formGroup", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "feedback"], ["mat-header-cell", "", "style", "width: 350;", 4, "matHeaderCellDef"], ["mat-header-row", "", "style", "position: sticky; top: 0;", 4, "matHeaderRowDef"], ["mat-row", "", 3, "formGroup", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "footer-row", 4, "matFooterRowDef", "matFooterRowDefSticky"], [1, "button-section"], ["type", "button", 1, "upload-btn", 3, "click"], [2, "font-size", "20px"], ["type", "button", 3, "click"], ["class", "clear-btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "submit-button", 3, "click"], [1, "currency-marquee"], [1, "marquee-text"], ["appearance", "outline", "class", "mat-field-small", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "mat-field-small"], ["matInput", "", "placeholder", "Please select", 3, "click", "blur", "formControlName", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], ["appearance", "outline"], ["matInput", "", 3, "dateChange", "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["matInput", "", 3, "blur", "type", "formControlName", "readonly"], ["mat-header-cell", "", 2, "width", "60px", "max-width", "60px", "min-width", "60px"], ["mat-cell", "", 2, "width", "60px", "max-width", "60px", "min-width", "60px"], ["mat-footer-cell", "", 2, "width", "60px", "max-width", "60px", "min-width", "60px"], ["mat-header-cell", "", 2, "width", "250px"], ["mat-cell", "", 1, "align-left"], ["mat-footer-cell", "", 1, "footer-label"], ["mat-header-cell", "", 2, "width", "60px", "max-width", "160px", "min-width", "160px", "padding-bottom", "8px", "padding-left", "30px !important"], [1, "agent-value-header-main"], [1, "agent-value-header-sub"], [1, "currency-label"], [1, "vertical-line"], ["mat-cell", "", 3, "formGroup"], [1, "agent-value-grid"], ["class", "flag-indicator", 4, "ngIf"], ["matInput", "", "formControlName", "total", "type", "number", 1, "input-field", 3, "keydown", "input", "focus", "blur", "readonly"], [1, "vertical-line-cell"], ["matInput", "", "formControlName", "totalUsd", "type", "number", 1, "input-field", 3, "keydown", "input", "focus", "blur", "readonly"], [1, "flag-indicator"], ["mat-footer-cell", "", 1, "total-agent-value", 2, "width", "160px", "max-width", "160px", "min-width", "160px", "white-space", "nowrap"], [2, "display", "flex", "justify-content", "center", "gap", "4px", "width", "100%", "margin-left", "4px"], [2, "text-align", "center", "border-right", "2px solid #ccc", "padding-right", "4px"], [2, "text-align", "center"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 1, "align-left", 3, "formGroup"], ["rows", "2", "formControlName", "pa_remark", "cdkTextareaAutosize", "", 1, "remark-input-field", 3, "readonly"], ["mat-footer-cell", ""], ["mat-header-cell", "", 2, "width", "350"], ["rows", "2", "formControlName", "meraki_feedback", "cdkTextareaAutosize", "", 1, "remark-input-field", 3, "readonly"], ["mat-header-row", "", 2, "position", "sticky", "top", "0"], ["mat-row", "", 3, "formGroup"], ["mat-footer-row", "", 1, "footer-row"], ["type", "button", 1, "clear-btn", 3, "click"]], template: function PortAgentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h6", 6);
      \u0275\u0275text(3, " Port Agent Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(4, "mat-divider", 7);
      \u0275\u0275elementStart(5, "div", 8)(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 9);
      \u0275\u0275template(9, PortAgentFormComponent_div_9_Template, 3, 3, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 11);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 12);
      \u0275\u0275listener("ngSubmit", function PortAgentFormComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
      \u0275\u0275template(15, PortAgentFormComponent_div_15_Template, 4, 3, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 16);
      \u0275\u0275element(17, "div", 17);
      \u0275\u0275elementStart(18, "table", 18);
      \u0275\u0275elementContainerStart(19, 19);
      \u0275\u0275template(20, PortAgentFormComponent_th_20_Template, 2, 0, "th", 20)(21, PortAgentFormComponent_td_21_Template, 2, 1, "td", 21)(22, PortAgentFormComponent_td_22_Template, 1, 0, "td", 22);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(23, 23);
      \u0275\u0275template(24, PortAgentFormComponent_th_24_Template, 2, 0, "th", 24)(25, PortAgentFormComponent_td_25_Template, 2, 1, "td", 25)(26, PortAgentFormComponent_td_26_Template, 3, 0, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(27, 27);
      \u0275\u0275template(28, PortAgentFormComponent_th_28_Template, 9, 2, "th", 28)(29, PortAgentFormComponent_td_29_Template, 6, 4, "td", 29)(30, PortAgentFormComponent_td_30_Template, 12, 10, "td", 30);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(31, 31);
      \u0275\u0275template(32, PortAgentFormComponent_th_32_Template, 2, 4, "th", 32)(33, PortAgentFormComponent_td_33_Template, 3, 2, "td", 33)(34, PortAgentFormComponent_td_34_Template, 1, 0, "td", 34);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(35, 35);
      \u0275\u0275template(36, PortAgentFormComponent_th_36_Template, 2, 0, "th", 36)(37, PortAgentFormComponent_td_37_Template, 3, 2, "td", 33)(38, PortAgentFormComponent_td_38_Template, 1, 0, "td", 34);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(39, PortAgentFormComponent_tr_39_Template, 1, 0, "tr", 37)(40, PortAgentFormComponent_tr_40_Template, 1, 1, "tr", 38)(41, PortAgentFormComponent_tr_41_Template, 1, 0, "tr", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 40)(43, "button", 41);
      \u0275\u0275listener("click", function PortAgentFormComponent_Template_button_click_43_listener() {
        return ctx.upload();
      });
      \u0275\u0275text(44, " Upload File ");
      \u0275\u0275elementStart(45, "mat-icon", 42);
      \u0275\u0275text(46, "cloud_upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "button", 43);
      \u0275\u0275listener("click", function PortAgentFormComponent_Template_button_click_47_listener() {
        return ctx.openCreateServiceDialog();
      });
      \u0275\u0275text(48, "Add Service");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, PortAgentFormComponent_button_49_Template, 2, 0, "button", 44);
      \u0275\u0275elementStart(50, "button", 45);
      \u0275\u0275listener("click", function PortAgentFormComponent_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(51, "Submit ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Client : ", ctx.responseData.client_name, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.portAgentForm.get("pda_currency_from")) == null ? null : tmp_1_0.value) && ((tmp_1_0 = ctx.portAgentForm.get("pda_currency_to")) == null ? null : tmp_1_0.value) && ((tmp_1_0 = ctx.portAgentForm.get("pda_roe")) == null ? null : tmp_1_0.value));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Port Agent: ", ctx.responseData == null ? null : ctx.responseData.port_agent_name, " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.portAgentForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.fields);
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.datasource);
      \u0275\u0275advance(21);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.isRerequest);
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
    NgForOf,
    NgIf,
    NgStyle,
    DecimalPipe,
    MatSelectModule,
    MatOption,
    MatOptionModule,
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
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatDivider,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatIcon
  ], styles: ["\n\n.port-agent-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow-y: hidden;\n}\n.header-section[_ngcontent-%COMP%] {\n  height: 30px;\n  text-align: center;\n}\n.field-section[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 0 0 auto;\n}\n.service-section[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-top: 3px;\n}\n.table-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  width: 100%;\n  height: 240px;\n  overflow-y: auto;\n}\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.align-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(150px, 1fr));\n  gap: 8px;\n  width: 100%;\n  overflow-y: auto;\n}\n.field-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.field-grid[_ngcontent-%COMP%], \n.field-section[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  position: relative;\n}\n.top-service-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n.top-service-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  padding: 5px 10px 5px 20px;\n}\n.button-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  justify-content: flex-end;\n  margin: 10px;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.3s ease;\n}\n.button-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.clear-submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-top: 10px;\n}\n.align-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n  .mat-mdc-table {\n  background-color: var(--app-page-bg) !important;\n  border: 1px solid var(--app-border) !important;\n}\n  .mat-mdc-header-row {\n  background-color: var(--app-table-header) !important;\n  height: 32px !important;\n}\n  .mat-mdc-header-cell {\n  color: var(--color-white) !important;\n  font-weight: 600 !important;\n  border-bottom: 1px solid var(--app-border) !important;\n  border-right: 1px solid var(--app-border) !important;\n}\n  .mat-mdc-row {\n  background-color: var(--app-page-bg) !important;\n  height: 32px !important;\n}\n  .mat-mdc-cell {\n  color: var(--app-text-primary) !important;\n  border-bottom: 1px solid var(--app-border) !important;\n  border-right: 1px solid var(--app-border) !important;\n  font-size: 13px !important;\n}\n  .mat-mdc-footer-row {\n  background-color: var(--color-bg-dark-2) !important;\n  height: 36px !important;\n}\n  .mat-mdc-footer-cell {\n  color: var(--app-text-primary) !important;\n  border-top: 2px solid var(--app-border) !important;\n}\n.input-field[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 4px;\n  background-color: var(--app-input-bg) !important;\n  color: var(--app-input-text) !important;\n  border: 1px solid var(--app-border) !important;\n  width: 60%;\n  padding: 0 8px;\n  transition: all 0.2s ease;\n}\n.remark-input-field[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: var(--app-input-bg) !important;\n  color: var(--app-input-text) !important;\n  border: 1px solid var(--app-border) !important;\n  min-height: 24px;\n  width: 100%;\n  padding: 4px 8px;\n  transition: all 0.2s ease;\n}\ninput[_ngcontent-%COMP%]:focus, \n.input-field[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: var(--color-action) !important;\n  background-color: var(--app-input-bg) !important;\n  box-shadow: none !important;\n}\ntextarea[_ngcontent-%COMP%]:focus, \n.remark-input-field[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: var(--color-action) !important;\n  background-color: var(--app-input-bg) !important;\n  box-shadow: none !important;\n}\n.total-agent-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  overflow: visible;\n  white-space: nowrap;\n  padding: 0 !important;\n}\n  .mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  bottom: 6px;\n}\n  .mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  display: none;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n  margin-left: -18px;\n}\n.mdc-text-field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 120px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 35px;\n  overflow: hidden;\n}\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n  margin-left: -15px;\n}\n  ngx-mat-timepicker .mat-mdc-form-field-infix {\n  min-width: 33px !important;\n  min-height: 36px !important;\n  padding: 4px 8px !important;\n  text-align: center;\n  box-sizing: border-box;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: 14px;\n}\n.field-grid[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100px;\n  max-width: 180px;\n  margin-bottom: 0px;\n}\n.form-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: auto;\n  padding-top: 20px;\n}\n.input-error[_ngcontent-%COMP%] {\n  border-bottom: 1px solid red;\n}\n.top-section[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 5px 10px;\n}\n.port-agent-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feedback-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.feedback-popover[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  padding: 8px;\n  border-radius: 4px;\n  width: 250px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.save-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #09c748;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  margin: 0;\n  transition: background-color 0.2s ease;\n}\n.save-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-bg-light-6);\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #ff3333;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  margin: 0;\n  transition: background-color 0.2s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-bg-light-6);\n}\n.upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.cell-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.row-inline-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n  width: 100%;\n}\n.input-field[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n}\n.row-currency[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 2.4;\n}\n.flag-indicator[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.row-inline-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.small-select[_ngcontent-%COMP%] {\n  width: 70px !important;\n  min-width: 70px !important;\n  height: 32px;\n  font-size: 12px;\n}\n.small-select[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  height: 32px;\n}\n.flag-indicator[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-mdc-option.small-option[_ngcontent-%COMP%] {\n  min-height: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 10px;\n}\n.small-select-panel[_ngcontent-%COMP%]   .mat-mdc-select-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 72px;\n  outline: 0;\n  overflow: auto;\n  padding: 8px 0;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.agent-value-header-main[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.agent-value-header-sub[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n.currency-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0 8px;\n}\n.vertical-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background-color: #ccc;\n}\n.agent-value-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.input-field[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: right;\n  overflow: visible;\n}\n.vertical-line-cell[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background-color: #ccc;\n  margin: 0 8px;\n}\n.currency-marquee[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 250px;\n  background-size: 200% 100%;\n  animation: gradientShift 3s ease infinite;\n  border-radius: 4px;\n  padding: 8px 12px;\n}\n.marquee-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #ff7835;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.currency-marquee-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n}\n  .mat-mdc-form-field:has(textarea) .mat-mdc-text-field-wrapper {\n  background-color: var(--app-textarea-bg) !important;\n}\n  textarea.mat-mdc-input-element {\n  background-color: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n/*# sourceMappingURL=port-agent-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortAgentFormComponent, { className: "PortAgentFormComponent" });
})();
export {
  PortAgentFormComponent
};
//# sourceMappingURL=chunk-3BPYEHWQ.js.map
