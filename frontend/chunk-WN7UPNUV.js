import {
  allowLimitedInput,
  allowOnlyLetters
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import {
  PortService
} from "./chunk-JRUZ2QQS.js";
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
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
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
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler
} from "./chunk-6WCQ44KD.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MatButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  Directionality,
  MatOption,
  _getEventTarget,
  _getShadowRoot,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions
} from "./chunk-BAX6ITZM.js";
import {
  ApplicationRef,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  animationFrameScheduler,
  booleanAttribute,
  computed,
  createComponent,
  inject,
  interval,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/components/create-tariff/create-tariff.model.ts
var TariffSubService = class {
  name = null;
  unique_key = null;
  basic_value = null;
  movement = null;
  tariff_percent = null;
  calculated_basic_value = null;
  formula_result = null;
  formula_inputs = null;
  optional = null;
  operational_flag = null;
  hide = null;
  sub_total = null;
  constructor(data) {
    if (data) {
      this.name = data.name ?? null;
      this.unique_key = data.unique_key ?? null;
      this.basic_value = data.basic_value ?? null;
      this.movement = data.movement ?? null;
      this.tariff_percent = data.tariff_percent ?? null;
      this.calculated_basic_value = data.calculated_basic_value ?? null;
      this.formula_result = data.formula_result ?? null;
      this.formula_inputs = data.formula_inputs ?? null;
      this.optional = data.optional ?? null;
      this.hide = data.hide ?? null;
      this.operational_flag = data.operational_flag ?? null;
      this.sub_total = data.sub_total ?? null;
    }
  }
};
var TariffService = class {
  SNO = null;
  code = null;
  total = null;
  service = null;
  purpose = null;
  pa_remark = null;
  meraki_feedback = null;
  meraki_remark_client = null;
  client_comment = null;
  info_msg = null;
  negotiate = null;
  agreed = null;
  client_option = null;
  display_to_client = null;
  subService = [];
  constructor(data) {
    if (data) {
      this.SNO = data.SNO ?? null;
      this.code = data.code ?? null;
      this.total = data.total ?? null;
      this.service = data.service ?? null;
      this.purpose = data.purpose ?? null;
      this.pa_remark = data.pa_remark ?? null;
      this.meraki_feedback = data.meraki_feedback ?? null;
      this.meraki_remark_client = data.meraki_remark_client ?? null;
      this.client_comment = data.client_comment ?? null;
      this.info_msg = data.info_msg ?? null;
      this.negotiate = data.negotiate ?? null;
      this.agreed = data.agreed ?? null;
      this.client_option = data.client_option ?? null;
      this.display_to_client = data.display_to_client ?? null;
      this.subService = data.subService?.map((s) => new TariffSubService(s)) ?? [];
    }
  }
};
var TariffRequest = class {
  items = [];
  grand_total = 0;
  constructor(data) {
    if (data) {
      this.items = data.items?.map((i) => new TariffService(i)) ?? [];
      this.grand_total = data.grand_total ?? 0;
    }
  }
};

// src/app/components/create-tariff/typeahead-service.ts
var TypeaheadService = class {
  buildAutocompleteOptions(vesselProperties, services, tariffServices, columns) {
    const options = [];
    vesselProperties.forEach((prop) => {
      options.push({
        value: prop,
        label: prop,
        type: "vessel"
      });
    });
    services.forEach((service) => {
      options.push({
        value: service.name,
        label: service.name,
        type: "service"
      });
    });
    services.forEach((service) => {
      service.sub_services?.forEach((sub) => {
        options.push({
          value: `${service.name} -> ${sub.name}`,
          label: `${service.name} -> ${sub.name}`,
          type: "subservice"
        });
      });
    });
    tariffServices.forEach((tariff) => {
      options.push({
        value: tariff.name,
        label: tariff.name,
        type: "tariff"
      });
    });
    columns.forEach((column) => {
      options.push({
        value: column,
        label: column,
        type: "column"
      });
    });
    return options;
  }
  buildConditionalAutocompleteOptions(vesselProperties, createdServices, createdSubServices, selectedServiceName, existingSubServiceNames) {
    const options = [];
    vesselProperties.forEach((prop) => {
      options.push({
        value: prop,
        label: prop,
        type: "vessel"
      });
    });
    createdServices.forEach((service) => {
      options.push({
        value: service.service,
        label: service.service,
        type: "service"
      });
    });
    createdSubServices.forEach((subService) => {
      options.push({
        value: subService.fullName,
        label: subService.fullName,
        type: "subservice"
      });
    });
    existingSubServiceNames.forEach((name) => options.push({
      value: name,
      label: name,
      type: "createdSubservice"
    }));
    existingSubServiceNames?.forEach((sub) => {
      options.push({
        value: `${selectedServiceName} -> ${sub}`,
        label: `${selectedServiceName} -> ${sub}`,
        type: "subservice"
      });
    });
    return options;
  }
  filterOptions(options, query) {
    if (!query)
      return options;
    return options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));
  }
  getWordLevelSuggestions(input, options) {
    if (!input)
      return options;
    const words = input.split(/\s+/);
    const currentWord = words[words.length - 1] || "";
    if (!currentWord.trim()) {
      return options;
    }
    return options.filter((option) => {
      const optionWords = option.label.toLowerCase().split(/\s+/);
      return optionWords.some((word) => word.startsWith(currentWord.toLowerCase())) || option.label.toLowerCase().includes(currentWord.toLowerCase());
    });
  }
  getContextualSuggestions(input, options) {
    const trimmedInput = input.trim();
    if (input.endsWith(" ")) {
      return options;
    }
    return this.getWordLevelSuggestions(trimmedInput, options);
  }
  getCurrentWordAtCursor(text, cursorPosition) {
    const separators = /[,()\[\]{}+\*=<!|]/;
    if (cursorPosition > 0 && separators.test(text[cursorPosition - 1])) {
      return {
        word: "",
        startPos: cursorPosition,
        endPos: cursorPosition
      };
    }
    let startPos = cursorPosition;
    let endPos = cursorPosition;
    while (startPos > 0 && !separators.test(text[startPos - 1])) {
      startPos--;
    }
    while (endPos < text.length && !separators.test(text[endPos])) {
      endPos++;
    }
    return {
      word: text.substring(startPos, endPos),
      startPos,
      endPos
    };
  }
  filterOptionsByCursor(options, text, cursorPosition) {
    const { word } = this.getCurrentWordAtCursor(text, cursorPosition);
    if (!word.trim()) {
      return options;
    }
    return options.filter((option) => option.label.toLowerCase().startsWith(word.toLowerCase()) || option.label.toLowerCase().includes(word.toLowerCase()));
  }
  insertTextAtCursor(originalText, cursorPosition, newText) {
    const { startPos, endPos } = this.getCurrentWordAtCursor(originalText, cursorPosition);
    const before = originalText.substring(0, startPos);
    const after = originalText.substring(endPos);
    const newValue = before + newText + after;
    const newCursorPos = startPos + newText.length;
    return { newValue, newCursorPos };
  }
};

// src/app/constants/tariff-creation.constants.ts
var TariffFunctions = [
  { value: "Sum", label: "Sum", type: "function" },
  { value: "Multiply", label: "Multiply", type: "function" },
  { value: "Subtract", label: "Subtract", type: "function" },
  { value: "Range", label: "Range", type: "function" },
  { value: "Bracket", label: "Bracket", type: "function" },
  { value: "Service Reference", label: "Service Reference", type: "function" },
  { value: "SubService Reference", label: "SubService Reference", type: "function" },
  { value: "Fixed", label: "Fixed", type: "function" },
  { value: "Round", label: "Round", type: "function" },
  { value: "Slab", label: "Slab", type: "function" },
  { value: "DataSet", label: "DataSet", type: "function" },
  { value: "Round Off", label: "Round Off", type: "function" }
];

// src/app/components/create-tariff/create-tariff.component.ts
function CreateTariffComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateTariffComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    \u0275\u0275property("value", service_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r2.name, " ");
  }
}
function CreateTariffComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const purpose_r3 = ctx.$implicit;
    \u0275\u0275property("value", purpose_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", purpose_r3, " ");
  }
}
function CreateTariffComponent_div_40_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subService_r7 = ctx.$implicit;
    \u0275\u0275property("value", subService_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subService_r7.name, " ");
  }
}
function CreateTariffComponent_div_40_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Only Basic Value, Tariff %, Movement terms and arithmetic operators allowed ");
    \u0275\u0275elementEnd();
  }
}
function CreateTariffComponent_div_40_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please check the open and close brackets ");
    \u0275\u0275elementEnd();
  }
}
function CreateTariffComponent_div_40_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Operators should be used in between the text ");
    \u0275\u0275elementEnd();
  }
}
function CreateTariffComponent_div_40_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r9.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_43_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Service Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 63);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_43_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "basic_value_tariff_service"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_43_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "basic_value_tariff_service"));
    })("blur", function CreateTariffComponent_div_40_mat_form_field_43_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.validateBasicValue(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 10);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_43_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "basic_value_tariff_service", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_43_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoBasicValueTariffService_r12 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoBasicValueTariffService_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompletebasicValueTariffService);
  }
}
function CreateTariffComponent_div_40_mat_form_field_44_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    \u0275\u0275property("value", option_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r14.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Result Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 64);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_44_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "basic_value_result_column"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_44_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "basic_value_result_column"));
    })("blur", function CreateTariffComponent_div_40_mat_form_field_44_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r13);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.validateBasicValue(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 11);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_44_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "basic_value_result_column", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_44_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoBasicValueResult_r15 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoBasicValueResult_r15);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteResultColumns);
  }
}
function CreateTariffComponent_div_40_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275property("value", option_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r16.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275property("value", option_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r17.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_60_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275property("value", option_r19.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r19.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Service Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 65);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_60_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "movement_tariff_service"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_60_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "movement_tariff_service"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 12);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_60_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "movement_tariff_service", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_60_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoMovementTariffService_r20 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoMovementTariffService_r20);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteTariffServicesForMovement);
  }
}
function CreateTariffComponent_div_40_mat_form_field_61_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r22 = ctx.$implicit;
    \u0275\u0275property("value", option_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r22.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Result Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 66);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_61_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "movement_result_column"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_61_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "movement_result_column"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 13);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_61_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "movement_result_column", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_61_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoMovementResult_r23 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoMovementResult_r23);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteResultColumnsForMovement);
  }
}
function CreateTariffComponent_div_40_mat_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r24 = ctx.$implicit;
    \u0275\u0275property("value", option_r24.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r24.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_option_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r25 = ctx.$implicit;
    \u0275\u0275property("value", option_r25.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r25.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_77_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    \u0275\u0275property("value", option_r27.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r27.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Service Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 67);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_77_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "tariff_service"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_77_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "tariff_service"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 14);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_77_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "tariff_service", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_77_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoTariffService_r28 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoTariffService_r28);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteTariffServicesForTariff);
  }
}
function CreateTariffComponent_div_40_mat_form_field_78_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r30 = ctx.$implicit;
    \u0275\u0275property("value", option_r30.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r30.label, " ");
  }
}
function CreateTariffComponent_div_40_mat_form_field_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-label");
    \u0275\u0275text(2, "Result Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 68);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_mat_form_field_78_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "tariff_result_column"));
    })("keydown", function CreateTariffComponent_div_40_mat_form_field_78_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "tariff_result_column"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-autocomplete", 24, 15);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_mat_form_field_78_Template_mat_autocomplete_optionSelected_4_listener($event) {
      \u0275\u0275restoreView(_r29);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "tariff_result_column", i_r5));
    });
    \u0275\u0275template(6, CreateTariffComponent_div_40_mat_form_field_78_mat_option_6_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const autoTariffResult_r31 = \u0275\u0275reference(5);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("matAutocomplete", autoTariffResult_r31);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteResultColumnsForTariff);
  }
}
function CreateTariffComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "mat-form-field", 42)(4, "mat-label");
    \u0275\u0275text(5, "Sub-Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 43);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_6_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.filterSubServices(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", null, 3);
    \u0275\u0275template(9, CreateTariffComponent_div_40_mat_option_9_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "mat-form-field", 45)(12, "mat-label");
    \u0275\u0275text(13, "Formula Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 46);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_14_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.validateFormulaInput($event, i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CreateTariffComponent_div_40_mat_error_15_Template, 2, 0, "mat-error", 16)(16, CreateTariffComponent_div_40_mat_error_16_Template, 2, 0, "mat-error", 16)(17, CreateTariffComponent_div_40_mat_error_17_Template, 2, 0, "mat-error", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "mat-checkbox", 49);
    \u0275\u0275text(21, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 48)(23, "mat-checkbox", 50);
    \u0275\u0275text(24, "Hide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 51);
    \u0275\u0275listener("click", function CreateTariffComponent_div_40_Template_button_click_25_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeSubService(i_r5));
    });
    \u0275\u0275elementStart(26, "mat-icon", 52);
    \u0275\u0275text(27, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 53)(29, "mat-form-field", 54)(30, "mat-label");
    \u0275\u0275text(31, "Base value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 55);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "basic_value"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "basic_value"));
    })("blur", function CreateTariffComponent_div_40_Template_input_blur_32_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.validateBasicValue(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-autocomplete", 24, 4);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_33_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "basic_value", i_r5));
    });
    \u0275\u0275template(35, CreateTariffComponent_div_40_mat_option_35_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 54)(37, "mat-label");
    \u0275\u0275text(38, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 56);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "basic_value_function"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "basic_value_function"));
    })("blur", function CreateTariffComponent_div_40_Template_input_blur_39_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.validateBasicValue(i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-autocomplete", 24, 5);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_40_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "basic_value_function", i_r5));
    });
    \u0275\u0275template(42, CreateTariffComponent_div_40_mat_option_42_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, CreateTariffComponent_div_40_mat_form_field_43_Template, 7, 2, "mat-form-field", 57)(44, CreateTariffComponent_div_40_mat_form_field_44_Template, 7, 2, "mat-form-field", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 58)(46, "mat-form-field", 54)(47, "mat-label");
    \u0275\u0275text(48, "Movement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 59);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_49_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "movement"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_49_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "movement"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-autocomplete", 24, 6);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_50_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "movement", i_r5));
    });
    \u0275\u0275template(52, CreateTariffComponent_div_40_mat_option_52_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 54)(54, "mat-label");
    \u0275\u0275text(55, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 60);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_56_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "movement_function"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_56_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "movement_function"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-autocomplete", 24, 7);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_57_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "movement_function", i_r5));
    });
    \u0275\u0275template(59, CreateTariffComponent_div_40_mat_option_59_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, CreateTariffComponent_div_40_mat_form_field_60_Template, 7, 2, "mat-form-field", 57)(61, CreateTariffComponent_div_40_mat_form_field_61_Template, 7, 2, "mat-form-field", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 53)(63, "mat-form-field", 54)(64, "mat-label");
    \u0275\u0275text(65, "Tariff %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 61);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_66_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "tariff"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_66_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "tariff"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-autocomplete", 24, 8);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_67_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "tariff", i_r5));
    });
    \u0275\u0275template(69, CreateTariffComponent_div_40_mat_option_69_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "mat-form-field", 54)(71, "mat-label");
    \u0275\u0275text(72, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 62);
    \u0275\u0275listener("input", function CreateTariffComponent_div_40_Template_input_input_73_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadInput($event, "tariff_function"));
    })("keydown", function CreateTariffComponent_div_40_Template_input_keydown_73_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onTypeaheadKeydown($event, "tariff_function"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-autocomplete", 24, 9);
    \u0275\u0275listener("optionSelected", function CreateTariffComponent_div_40_Template_mat_autocomplete_optionSelected_74_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onAutocompleteSelected($event.option.value, "tariff_function", i_r5));
    });
    \u0275\u0275template(76, CreateTariffComponent_div_40_mat_option_76_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, CreateTariffComponent_div_40_mat_form_field_77_Template, 7, 2, "mat-form-field", 57)(78, CreateTariffComponent_div_40_mat_form_field_78_Template, 7, 2, "mat-form-field", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_24_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_31_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_38_0;
    let tmp_42_0;
    let tmp_43_0;
    const group_r32 = ctx.$implicit;
    const i_r5 = ctx.index;
    const autoSubService_r33 = \u0275\u0275reference(8);
    const autoBasicValue_r34 = \u0275\u0275reference(34);
    const autoBasicValueFunction_r35 = \u0275\u0275reference(41);
    const autoMovement_r36 = \u0275\u0275reference(51);
    const autoMovementFunction_r37 = \u0275\u0275reference(58);
    const autoTariff_r38 = \u0275\u0275reference(68);
    const autoFunction_r39 = \u0275\u0275reference(75);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", autoSubService_r33)("matTooltip", ((tmp_15_0 = group_r32.get("sub_service")) == null ? null : tmp_15_0.value) || "No data");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredSubServices);
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", ((tmp_17_0 = group_r32.get("formula_result")) == null ? null : tmp_17_0.value) || "No data");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_18_0 = ctx_r5.subServices.at(i_r5).get("formula_result")) == null ? null : tmp_18_0.hasError("invalidFormula"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_19_0 = ctx_r5.subServices.at(i_r5).get("formula_result")) == null ? null : tmp_19_0.hasError("unbalancedBrackets"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_20_0 = ctx_r5.subServices.at(i_r5).get("formula_result")) == null ? null : tmp_20_0.hasError("invalidOperatorPlacement"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r5.subServices.length <= 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r5.subServices.length <= 1);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", autoBasicValue_r34)("matTooltip", ((tmp_24_0 = group_r32.get("basic_value")) == null ? null : tmp_24_0.value) || "No data");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("matAutocomplete", autoBasicValueFunction_r35);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteFunctions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_28_0 = group_r32.get("showBaseValueResultColumn")) == null ? null : tmp_28_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_29_0 = group_r32.get("showBaseValueResultColumn")) == null ? null : tmp_29_0.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("matAutocomplete", autoMovement_r36)("matTooltip", ((tmp_31_0 = group_r32.get("movement")) == null ? null : tmp_31_0.value) || "No data");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.fileteredAutocompleteOptionsForMovement);
    \u0275\u0275advance(4);
    \u0275\u0275property("matAutocomplete", autoMovementFunction_r37);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteFunctionsForMovement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_35_0 = group_r32.get("showMovementResultColumn")) == null ? null : tmp_35_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_36_0 = group_r32.get("showMovementResultColumn")) == null ? null : tmp_36_0.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("matAutocomplete", autoTariff_r38)("matTooltip", ((tmp_38_0 = group_r32.get("tariff")) == null ? null : tmp_38_0.value) || "No data");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteOptionsForTariff);
    \u0275\u0275advance(4);
    \u0275\u0275property("matAutocomplete", autoFunction_r39);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.filteredAutocompleteFunctionsForTariff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_42_0 = group_r32.get("showTariffResultColumn")) == null ? null : tmp_42_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_43_0 = group_r32.get("showTariffResultColumn")) == null ? null : tmp_43_0.value);
  }
}
var TypeaheadServiceProvider = class _TypeaheadServiceProvider extends TypeaheadService {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TypeaheadServiceProvider_BaseFactory;
    return function TypeaheadServiceProvider_Factory(__ngFactoryType__) {
      return (\u0275TypeaheadServiceProvider_BaseFactory || (\u0275TypeaheadServiceProvider_BaseFactory = \u0275\u0275getInheritedFactory(_TypeaheadServiceProvider)))(__ngFactoryType__ || _TypeaheadServiceProvider);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TypeaheadServiceProvider, factory: _TypeaheadServiceProvider.\u0275fac, providedIn: "root" });
};
var CreateTariffComponent = class _CreateTariffComponent {
  fb;
  dialogRef;
  snackBar;
  portService;
  data;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  tariffForm;
  isEditMode = false;
  editIndex = null;
  // Shared help text for input fields
  inputHelpText = "Valid formats:\n\u2022 Vessel property (GRT, LOA, DWT, NRT)\n\u2022 Arithmetic expressions (NRT*1.5, NRT+2, NRT-3, NRT/2)\n\u2022 Numeric values (1000)\n\u2022 Property/Number with tariff service (NRT:Pilotage, 1000:Towage)";
  // Help text for basic value field
  basicValueHelpText = "Valid formats:\n\u2022 Vessel property (GRT, LOA, DWT, NRT)\n\u2022 Reference subservice\n\u2022 Arithmetic expressions (NRT*1.5, NRT+2, NRT-3, NRT/2)\n\u2022 Numeric values (1000)\n\u2022 Property/Number with tariff service (NRT:Pilotage, 1000:Towage)";
  movementHelpText = "Day and Hour and numeric values are accepted.\nExamples:\n\u2022 1 (for 1 day)\n\u2022 0.5 (for half day)\n\u2022 12 (for 12 hours)\n\u2022 0.25 (for quarter day)";
  // Options for vessel properties (basic value)
  vslProperties = [];
  filteredVslProperties = [];
  // Options for tariff services
  tariffServiceOptions = [];
  filteredTariffServiceOptions = [];
  // Options for reference subservices
  filteredReferenceSubServices = [];
  // Typeahead autocomplete options
  allAutocompleteOptions = [];
  filteredAutocompleteOptions = [];
  filteredAutocompleteFunctions = [];
  filteredAutocompletebasicValueTariffService = [];
  filteredAutocompleteResultColumns = [];
  filteredAutocompleteOptionsForTariff = [];
  filteredAutocompleteFunctionsForTariff = [];
  filteredAutocompleteTariffServicesForTariff = [];
  filteredAutocompleteResultColumnsForTariff = [];
  fileteredAutocompleteOptionsForMovement = [];
  filteredAutocompleteFunctionsForMovement = [];
  filteredAutocompleteTariffServicesForMovement = [];
  filteredAutocompleteResultColumnsForMovement = [];
  resultColumns = [];
  // Help text for tariff percentage field
  tariffHelpText = this.inputHelpText;
  // Help text for formula result field
  formulaHelpText = "You can:\n\u2022 Use any of these terms: Basic Value, Tariff %, Movement\n\u2022 Remove any of these terms\n\u2022 Change arithmetic operators (+, -, *, /)\n\u2022 No other text is allowed";
  purposes = [];
  // Service and subservice data
  portServices = [];
  filteredPortServices = [];
  selectedService = null;
  filteredSubServices = [];
  showTariffServiceColumn = false;
  typeaheadService = new TypeaheadService();
  constructor(fb, dialogRef, snackBar, portService, data) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.portService = portService;
    this.data = data;
    this.isEditMode = !!data && (data.index !== void 0 || data.tableData || data.serviceObj);
    this.editIndex = data?.index ?? null;
    this.tariffForm = this.fb.group({
      code: [data?.serviceObj?.code || "", Validators.required],
      service: [data?.serviceObj?.service || "", Validators.required],
      purpose: [data?.serviceObj?.purpose || ""],
      info_msg: [data?.serviceObj?.info_msg || ""],
      total: [data?.serviceObj?.total],
      sub_services: this.fb.array([])
    });
    if (this.isEditMode) {
      this.populateForm(data);
    } else {
      this.addSubService();
      this.buildAutocompleteOptions();
    }
  }
  ngOnInit() {
    if (this.data?.serviceObj) {
      this.tariffForm.patchValue({
        purpose: this.data.serviceObj.purpose || "",
        total: this.data.serviceObj.total || ""
      });
    }
    if (this.data?.masterData) {
      const { vslProperties = [], portServices = [], purposes = [] } = this.data.masterData;
      const vesselFieldNames = Array.isArray(this.data?.vessel_fields) ? this.data.vessel_fields.map((item) => item.field_name || "") : [];
      this.vslProperties = [...vslProperties.map((item) => item.name || ""), ...vesselFieldNames];
      this.filteredVslProperties = [...this.vslProperties];
      this.portServices = portServices;
      this.filteredPortServices = [...this.portServices];
      this.purposes = purposes.map((item) => item.name || "");
      this.tariffServiceOptions = this.data.masterData.tariffServices;
      this.buildAutocompleteOptions();
    } else {
      this.loadMasterData();
    }
    if (this.isEditMode) {
      const dialogTitle = document.querySelector(".dialog-header h6");
      if (dialogTitle) {
        dialogTitle.textContent = "Edit Tariff";
      }
    }
  }
  loadMasterData() {
    this.loader.showDialogLoader();
    const allowedFields = ["vessel_properties", "port_services", "purpose"];
    const body = { fields: allowedFields };
    this.portService.getMasterData(body).subscribe({
      next: (response) => {
        this.portServices = response.port_services;
        this.filteredPortServices = [...this.portServices];
        this.vslProperties = response.vessel_properties.map((item) => item.name || "");
        const vesselFields = Array.isArray(this.data?.vessel_fields) ? this.data.vessel_fields.map((item) => item.field_name || "") : [];
        this.filteredVslProperties = [...this.vslProperties, ...vesselFields];
        this.purposes = response.purpose.map((item) => item.name || "");
        this.loader.hideDialogLoader();
      },
      error: (error) => {
        this.loader.hideDialogLoader();
        const errorMsg = error.error?.error || "Something went wrong, Unable to load Suggestions. Please try again.";
        this.snackBar.showError(errorMsg);
      }
    });
  }
  //method to filter the services based on the input
  filterServices() {
    const input = this.tariffForm.get("service")?.value?.toLowerCase() || "";
    this.filteredPortServices = this.portServices.filter((service) => service.name?.toLowerCase().includes(input) || service.code?.toLowerCase().includes(input));
  }
  onServiceSelected(serviceName) {
    if (!serviceName || typeof serviceName !== "string")
      return;
    const sanitizedServiceName = serviceName.trim();
    const matched = this.portServices.find((s) => s.name === sanitizedServiceName);
    if (matched) {
      this.selectedService = matched;
      this.tariffForm.get("code")?.setValue(matched.code);
      this.filteredSubServices = [...matched.sub_services];
      this.tariffForm.patchValue({
        code: matched.code,
        service: matched.name
      });
      this.buildAutocompleteOptions();
    } else {
      this.selectedService = null;
      this.filteredSubServices = [];
      this.tariffForm.patchValue({
        service: sanitizedServiceName,
        code: "0"
      });
      this.buildAutocompleteOptions();
    }
  }
  // Handle service field blur - map free entry data
  onServiceBlur() {
    const serviceName = this.tariffForm.get("service")?.value;
    if (serviceName) {
      this.onServiceSelected(serviceName);
    }
  }
  buildAutocompleteOptions() {
    const createdServices = this.getTariffRuleServices();
    const createdSubServices = this.getCreatedSubServices();
    const columns = [];
    this.selectedService?.tariff_services?.forEach((ts) => {
      if (ts.columns && Array.isArray(ts.columns)) {
        columns.push(...ts.columns);
      }
    });
    const existingSubServiceNames = this.subServices.controls.map((control) => control.value.sub_service).filter((subService) => subService);
    this.filteredTariffServiceOptions = this.insertFormatedData(this.tariffServiceOptions?.map((item) => item.name || "") || [], "tariff_column");
    const selectedService = this.selectedService ? this.selectedService.name : this.tariffForm.get("service")?.value || "";
    this.allAutocompleteOptions = this.typeaheadService.buildConditionalAutocompleteOptions(this.vslProperties, createdServices, createdSubServices, selectedService || "", existingSubServiceNames);
    this.filteredAutocompleteOptions = [...this.allAutocompleteOptions];
    this.filteredAutocompleteOptionsForTariff = [...this.allAutocompleteOptions];
    this.filteredAutocompleteFunctions = TariffFunctions;
    this.filteredAutocompleteFunctionsForTariff = TariffFunctions;
    this.filteredAutocompletebasicValueTariffService = this.filteredTariffServiceOptions;
    this.filteredAutocompleteTariffServicesForTariff = this.filteredTariffServiceOptions;
    this.filteredAutocompleteFunctionsForMovement = TariffFunctions;
    this.filteredAutocompleteTariffServicesForMovement = this.filteredTariffServiceOptions;
    this.fileteredAutocompleteOptionsForMovement = this.insertFormatedData(this.vslProperties, "vessel_property");
  }
  // method to get the created service for the port
  getTariffRuleServices() {
    if (this.data?.existingServices?.length) {
      const services = this.data.existingServices.map((item) => item?.serviceObj).filter((serviceObj) => serviceObj);
      return services.filter((serviceObj, index, self) => {
        return index === self.findIndex((s) => s.service === serviceObj.service);
      });
    }
    return [];
  }
  getCreatedSubServices() {
    const createdSubServices = [];
    const currentServiceName = this.selectedService?.name || "";
    if (this.data?.existingServices) {
      this.data.existingServices.forEach((item) => {
        if (item.serviceObj?.sub_services && item.serviceObj.service !== currentServiceName) {
          item.serviceObj.sub_services.forEach((subService) => {
            if (subService.name && subService.name.trim()) {
              createdSubServices.push({
                serviceName: item.serviceObj.service,
                subServiceName: subService.name,
                fullName: `${item.serviceObj.service} -> ${subService.name}`
              });
            }
          });
        }
      });
    }
    const currentFormServices = this.getCurrentFormServices();
    currentFormServices.forEach((service) => {
      if (service.serviceName !== currentServiceName) {
        service.subServices.forEach((subService) => {
          if (subService.trim()) {
            createdSubServices.push({
              serviceName: service.serviceName,
              subServiceName: subService,
              fullName: `${service.serviceName} -> ${subService}`
            });
          }
        });
      }
    });
    return createdSubServices;
  }
  getServiceSpecificTariffServices(serviceName) {
    const service = this.portServices.find((s) => s.name === serviceName);
    return service?.tariff_services || [];
  }
  getCurrentFormServices() {
    const services = [];
    const formServices = /* @__PURE__ */ new Map();
    for (let i = 0; i < this.subServices.length; i++) {
      const subServiceGroup = this.subServices.at(i);
      const serviceName = this.selectedService?.name || "";
      const subServiceName = subServiceGroup.get("sub_service")?.value || "";
      if (serviceName && subServiceName.trim()) {
        if (!formServices.has(serviceName)) {
          formServices.set(serviceName, []);
        }
        formServices.get(serviceName)?.push(subServiceName);
      }
    }
    formServices.forEach((subServices, serviceName) => {
      services.push({
        serviceName,
        subServices
      });
    });
    return services;
  }
  onTypeaheadKeydown(event, fieldType) {
    if (event.key === ":") {
      event.preventDefault();
    }
    if (event.code === "Space" || event.key === "(" || event.key === "," || event.key === "+") {
      setTimeout(() => {
        switch (fieldType) {
          case "basic_value":
            this.filteredAutocompleteOptions = [...this.allAutocompleteOptions];
            break;
          case "basic_value_function":
            this.filteredAutocompleteFunctions = [...TariffFunctions];
            break;
          case "basic_value_tariff_service":
            this.filteredAutocompletebasicValueTariffService = [...this.filteredTariffServiceOptions];
            break;
          case "basic_value_result_column":
            this.filteredAutocompleteResultColumns = this.resultColumns;
            break;
          case "tariff":
            this.filteredAutocompleteOptionsForTariff = [...this.allAutocompleteOptions];
            break;
          case "tariff_function":
            this.filteredAutocompleteFunctionsForTariff = [...TariffFunctions];
            break;
          case "tariff_service":
            this.filteredAutocompleteTariffServicesForTariff = [...this.filteredTariffServiceOptions];
            break;
          case "tariff_result_column":
            this.filteredAutocompleteResultColumnsForTariff = this.resultColumns;
            break;
          case "movement":
            this.fileteredAutocompleteOptionsForMovement = this.insertFormatedData(this.vslProperties, "vessel_property");
            break;
          case "movement_function":
            this.filteredAutocompleteFunctionsForMovement = [...TariffFunctions];
            break;
          case "movement_tariff_service":
            this.filteredAutocompleteTariffServicesForMovement = [...this.filteredTariffServiceOptions];
            break;
          case "movement_result_column":
            this.filteredAutocompleteResultColumnsForMovement = this.resultColumns;
            break;
        }
      }, 10);
    }
  }
  // Store original values before autocomplete overwrites them
  originalValues = {};
  // method to filter the option based on fieldtype and lastword
  onTypeaheadInput(event, fieldType) {
    const target = event.target;
    const text = target.value;
    const fieldIndex = this.getFieldIndex(target);
    const fieldKey = `${fieldType}_${fieldIndex}_${Date.now()}`;
    this.originalValues[fieldKey] = text;
    target.setAttribute("data-field-key", fieldKey);
    this.buildAutocompleteOptions();
    const lastWords = this.extractLastWords(text);
    const fieldValues = {
      basic_value: "",
      basic_value_function: "",
      basic_value_tariff_service: "",
      basic_value_result_column: "",
      tariff: "",
      tariff_function: "",
      tariff_service: "",
      tariff_result_column: "",
      movement: "",
      movement_function: "",
      movement_tariff_service: "",
      movement_result_column: ""
    };
    const lastWord = lastWords[lastWords.length - 1] || "";
    if (fieldValues?.hasOwnProperty(fieldType)) {
      fieldValues[fieldType] = lastWord;
    }
    if (this.hasEmptyLastWords(lastWords)) {
      this.resetAutocompleteOptions();
    } else {
      this.filterOptionsByFieldType(fieldType, fieldValues[fieldType]);
    }
  }
  // method to filter and assign the option based on field type
  filterOptionsByFieldType(fieldType, lastWord) {
    switch (fieldType) {
      case "basic_value":
        this.filteredAutocompleteOptions = this.filterByLabel(this.allAutocompleteOptions, lastWord);
        break;
      case "basic_value_function":
        this.filteredAutocompleteFunctions = this.filterByLabel(TariffFunctions, lastWord);
        break;
      case "basic_value_tariff_service":
        this.filteredAutocompletebasicValueTariffService = this.filterByLabel(this.filteredTariffServiceOptions, lastWord);
        break;
      case "basic_value_result_column":
        this.filteredAutocompleteResultColumns = this.filterByLabel(this.resultColumns, lastWord);
        break;
      case "tariff":
        this.filteredAutocompleteOptionsForTariff = this.filterByLabel(this.allAutocompleteOptions, lastWord);
        break;
      case "tariff_function":
        this.filteredAutocompleteFunctionsForTariff = this.filterByLabel(TariffFunctions, lastWord);
        break;
      case "tariff_service":
        this.filteredAutocompleteTariffServicesForTariff = this.filterByLabel(this.filteredTariffServiceOptions, lastWord);
        break;
      case "tariff_result_column":
        this.filteredAutocompleteResultColumnsForTariff = this.filterByLabel(this.resultColumns, lastWord);
        break;
      case "movement":
        this.fileteredAutocompleteOptionsForMovement = this.filterByLabel(this.insertFormatedData(this.vslProperties, "vsl properties"), lastWord);
        break;
      case "movement_function":
        this.filteredAutocompleteFunctionsForMovement = this.filterByLabel(TariffFunctions, lastWord);
        break;
      case "movement_tariff_service":
        this.filteredAutocompleteTariffServicesForMovement = this.filterByLabel(this.filteredTariffServiceOptions, lastWord);
        break;
      case "movement_result_column":
        this.filteredAutocompleteResultColumnsForMovement = this.filterByLabel(this.resultColumns, lastWord);
        break;
    }
  }
  // method to check whether the last field is empty or not
  hasEmptyLastWords(lastWords) {
    if (lastWords.length === 0) {
      return true;
    }
    return lastWords.some((word) => !word.trim());
  }
  // method to extract the lastword
  extractLastWords(text) {
    const words = text.split(/[\s,()\+]+/);
    return words.map((word) => word?.trim()).filter((word) => word?.length > 0);
  }
  // Reset autocomplete options to show all if no valid filter is applied
  resetAutocompleteOptions() {
    this.filteredAutocompleteOptions = [...this.allAutocompleteOptions];
    this.filteredAutocompleteFunctions = [...TariffFunctions];
    this.filteredAutocompleteResultColumns = this.resultColumns;
    this.filteredAutocompleteOptionsForTariff = [...this.allAutocompleteOptions];
    this.filteredAutocompleteFunctionsForTariff = [...TariffFunctions];
    this.filteredAutocompleteResultColumnsForTariff = this.resultColumns;
    this.fileteredAutocompleteOptionsForMovement = this.insertFormatedData(this.vslProperties, "vessel_property");
    this.filteredAutocompleteFunctionsForMovement = [...TariffFunctions];
    this.filteredAutocompleteResultColumnsForMovement = this.resultColumns;
  }
  // Method to filter the options based on the field type
  filterByLabel(options, lastWord) {
    return options.filter((option) => option.label?.toLowerCase().includes(lastWord.toLowerCase()));
  }
  getFieldIndex(element) {
    const formGroup = element.closest("[formGroupName]");
    return formGroup ? parseInt(formGroup.getAttribute("formGroupName") || "0") : 0;
  }
  onAutocompleteSelected(selectedValue, fieldName, index) {
    const subServiceGroup = this.tariffForm.get("sub_services").at(index);
    this.rangeTypeFunctionality(selectedValue, fieldName, subServiceGroup);
    const inputSelector = `input[formControlName="${fieldName}"]`;
    const inputs = document.querySelectorAll(inputSelector);
    const input = inputs[index];
    let originalValue = "";
    if (input) {
      const fieldKey = input.getAttribute("data-field-key");
      originalValue = fieldKey ? this.originalValues[fieldKey] || "" : "";
      if (fieldKey) {
        delete this.originalValues[fieldKey];
        input.removeAttribute("data-field-key");
      }
    }
    if (!originalValue) {
      originalValue = subServiceGroup.get(fieldName)?.value || "";
    }
    const cursorPosition = originalValue.length;
    const result = this.typeaheadService.insertTextAtCursor(originalValue, cursorPosition, selectedValue);
    subServiceGroup.get(fieldName)?.setValue(result.newValue);
    if (fieldName === "basic_value_tariff_service") {
      subServiceGroup.get("basic_value_result_column")?.setValue("");
      this.setSelectedTariffServiceColumns(selectedValue, "filteredAutocompleteResultColumns");
    } else if (fieldName === "tariff_service") {
      subServiceGroup.get("tariff_result_column")?.setValue("");
      this.setSelectedTariffServiceColumns(selectedValue, "filteredAutocompleteResultColumnsForTariff");
    } else if (fieldName === "movement_tariff_service") {
      subServiceGroup.get("movement_result_column")?.setValue("");
      this.setSelectedTariffServiceColumns(selectedValue, "filteredAutocompleteResultColumnsForMovement");
    }
  }
  filterSubServices(index) {
    if (!this.selectedService)
      return;
    const subServiceGroup = this.tariffForm.get("sub_services").at(index);
    const input = subServiceGroup.get("sub_service")?.value?.toLowerCase() || "";
    this.filteredSubServices = this.selectedService.sub_services.filter((subService) => subService.name?.toLowerCase().includes(input));
  }
  isNumeric(value) {
    return !isNaN(Number(value)) && value.trim() !== "";
  }
  validateBasicValue(index) {
    const subServiceGroup = this.tariffForm.get("sub_services").at(index);
    subServiceGroup.get("basic_value")?.setErrors(null);
  }
  get subServices() {
    return this.tariffForm.get("sub_services");
  }
  // Allowed formula text parts
  allowedFormulaTerms = ["Basic Value", "Movement", "Tariff %", "ROE", "1"];
  defaultFormula = "Basic Value * Movement * Tariff %";
  getValidFormulaTerms() {
    const customFields = Array.isArray(this.data?.vessel_fields) ? this.data.vessel_fields.map((item) => item.field_name || "") : [];
    return [...this.allowedFormulaTerms, ...customFields];
  }
  validateFormulaInput(event, index) {
    const value = event.target.value || "";
    const subServiceGroup = this.tariffForm.get("sub_services").at(index);
    let remainingText = value;
    const validTerms = [
      ...this.getValidFormulaTerms(),
      ...this.vslProperties
    ];
    remainingText = this.removeValidTerms(remainingText, validTerms);
    remainingText = remainingText.replace(/[\+\-\*\/\s\{\}\(\)]/g, "");
    const openBraces = (value.match(/\{/g) || []).length;
    const closeBraces = (value.match(/\}/g) || []).length;
    const openParentheses = (value.match(/\(/g) || []).length;
    const closeParentheses = (value.match(/\)/g) || []).length;
    if (openBraces !== closeBraces || openParentheses !== closeParentheses) {
      subServiceGroup.get("formula_result")?.setErrors({ unbalancedBrackets: true });
      return;
    }
    const invalidOperatorPlacement = /(^[\+\-\*\/])|([\+\-\*\/]$)|([\+\-\*\/]{2,})/;
    if (invalidOperatorPlacement.test(value)) {
      subServiceGroup.get("formula_result")?.setErrors({ invalidOperatorPlacement: true });
      return;
    }
    if (remainingText.trim().length > 0) {
      subServiceGroup.get("formula_result")?.setErrors({ invalidFormula: true });
    } else {
      subServiceGroup.get("formula_result")?.setErrors(null);
    }
  }
  removeValidTerms(text, terms) {
    let result = text;
    const sortedTerms = [...terms].filter((t) => t && t.trim().length > 0).sort((a, b) => b.length - a.length);
    sortedTerms.forEach((term) => {
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(?<!\\w)${escapedTerm}(?!\\w)`, "gi");
      result = result.replace(regex, "");
    });
    return result;
  }
  // method to initialize the new subservice
  newSubService() {
    return this.fb.group({
      sub_service: [""],
      // Not mandatory
      basic_value: ["", Validators.required],
      basic_value_function: [""],
      basic_value_tariff_service: [""],
      basic_value_result_column: [""],
      tariff: ["", Validators.required],
      tariff_function: [""],
      tariff_service: [""],
      tariff_result_column: [""],
      movement: ["", Validators.required],
      movement_function: [""],
      movement_tariff_service: [""],
      movement_result_column: [""],
      formula_result: [this.defaultFormula],
      optional: [false],
      hide: [false],
      showBaseValueResultColumn: [false],
      showTariffResultColumn: [false],
      showMovementResultColumn: [false],
      showBaseValuTariffServiceColumn: [false],
      showTariffServiceColumn: [false]
    });
  }
  // method to add the new subservice
  addSubService() {
    const newSubService = this.newSubService();
    const hasReference = this.subServices.controls.some((control) => control.get("reference")?.value);
    if (hasReference) {
      newSubService.get("reference")?.disable();
    }
    this.subServices.push(newSubService);
    this.buildAutocompleteOptions();
  }
  // method to delete the subservice at the particular index
  removeSubService(index) {
    this.subServices.removeAt(index);
  }
  // method to submit the for based 
  onSubmit() {
    if (this.tariffForm.invalid) {
      this.tariffForm.markAllAsTouched();
      this.snackBar.showError("Please fill all required fields");
      return;
    }
    const formData = this.tariffForm.getRawValue();
    const serviceName = formData.service;
    const serviceCode = formData.code;
    if (!formData.sub_services || formData.sub_services.length === 0) {
      this.snackBar.showError("A service must have at least one subservice");
      return;
    }
    const newSubServices = formData.sub_services;
    if (this.data && !this.isEditMode) {
      const existingServices = this.data.existingServices || [];
      const existingUniqueKeys = [];
      existingServices.forEach((item) => {
        if (item.serviceObj?.sub_services) {
          item.serviceObj.sub_services.forEach((existingSub) => {
            if (existingSub.unique_key) {
              existingUniqueKeys.push(existingSub.unique_key);
            }
          });
        }
      });
      for (const subService of newSubServices) {
        const currentUniqueKey = this.generateUniqueKey(serviceName, subService);
        if (existingUniqueKeys.includes(currentUniqueKey)) {
          const subServiceName = subService.sub_service || "Unnamed";
          this.snackBar.showError(`Duplicate subservice detected: '${subServiceName}' already exists`);
          return;
        }
      }
    }
    const tariffSubServices = formData.sub_services.map((subService) => {
      let movement = `${subService.movement_function || "NA"}:${subService.movement}:${subService.movement_tariff_service || "NA"}:${subService.movement_result_column || "NA"}`;
      let basicValue = `${subService.basic_value_function || "NA"}:${subService.basic_value || "NA"}:${subService.basic_value_tariff_service || "NA"}:${subService.basic_value_result_column || "NA"}`;
      let tariffPercent = `${subService.tariff_function || "NA"}:${subService.tariff || "NA"}:${subService.tariff_service || "NA"}:${subService.tariff_result_column || "NA"}`;
      return new TariffSubService({
        name: subService.sub_service || "",
        basic_value: basicValue,
        tariff_percent: tariffPercent || "1",
        movement: movement || "1",
        formula_result: subService.formula_result,
        optional: subService.optional ? "Y" : "N",
        hide: subService.hide ? "Y" : "N",
        unique_key: subService.unique_key || this.generateUniqueKey(serviceName, subService)
      });
    });
    const existingServicesCount = this.data?.existingServices ? this.data.existingServices.length : 0;
    const tariffService = new TariffService({
      SNO: existingServicesCount + 1,
      code: serviceCode,
      service: serviceName,
      subService: tariffSubServices,
      purpose: formData.purpose,
      total: formData.total || "",
      info_msg: formData.info_msg
    });
    const tariffRequest = new TariffRequest({
      items: [tariffService]
    });
    const result = {
      tariffRequest,
      isEdit: this.isEditMode,
      index: this.editIndex,
      service: serviceName,
      code: serviceCode,
      sno: existingServicesCount + 1,
      originalServiceIndex: this.data?.originalServiceIndex
    };
    this.dialogRef.close({ data: result });
  }
  populateForm(data) {
    this.tariffForm.patchValue({
      code: data.code,
      service: data.service,
      purpose: data.purpose,
      total: data.total
    });
    if (data.serviceObj && data.serviceObj.sub_services && Array.isArray(data.serviceObj.sub_services)) {
      while (this.subServices.length) {
        this.subServices.removeAt(0);
      }
      data.serviceObj.sub_services.forEach((subService) => {
        this.tariffServiceOptions = this.data.masterData.tariffServices || [];
        const [basicValueFunction, extractedBasicValue, basicValueTariffService, basicValueResultColumn] = this.splitAndExtractValuesToDisplay(subService.basic_value);
        const [tariff_function, tariff, tariff_service, tariff_result_column] = this.splitAndExtractValuesToDisplay(subService.tariff_percent);
        const [movementFunction, movement, movementTariffService, movementResultColumn] = this.splitAndExtractValuesToDisplay(subService.movement);
        const subServiceGroup = this.fb.group({
          sub_service: [subService.name || ""],
          basic_value: [extractedBasicValue, Validators.required],
          basic_value_tariff_service: [basicValueTariffService === "NA" ? "" : basicValueTariffService],
          basic_value_function: [basicValueFunction === "NA" ? "" : basicValueFunction],
          basic_value_result_column: [basicValueResultColumn === "NA" ? "" : basicValueResultColumn],
          tariff: [tariff || "", Validators.required],
          tariff_function: [tariff_function === "NA" ? "" : tariff_function],
          tariff_service: [tariff_service === "NA" ? "" : tariff_service],
          tariff_result_column: [tariff_result_column === "NA" ? "" : tariff_result_column],
          movement: [movement || "", Validators.required],
          movement_function: [movementFunction === "NA" ? "" : movementFunction],
          movement_tariff_service: [movementTariffService === "NA" ? "" : movementTariffService],
          movement_result_column: [movementResultColumn === "NA" ? "" : movementResultColumn],
          formula_result: [subService.formula_result || this.defaultFormula],
          optional: [subService.optional === "Y" || subService.optional === true],
          hide: [subService.hide === "Y" || subService.hide === true],
          showBaseValueResultColumn: [basicValueFunction === "Range" ? true : false],
          showTariffResultColumn: [tariff_function === "Range" ? true : false],
          showMovementResultColumn: [movementFunction === "Range" ? true : false]
        });
        this.subServices.push(subServiceGroup);
        this.rangeTypeFunctionality(basicValueFunction, "basic_value_function", subServiceGroup);
        this.rangeTypeFunctionality(basicValueTariffService, "basic_value_tariff_service", subServiceGroup);
        this.rangeTypeFunctionality(tariff_function, "tariff_function", subServiceGroup);
        this.rangeTypeFunctionality(tariff_service, "tariff_service", subServiceGroup);
        this.rangeTypeFunctionality(movementFunction, "movement_function", subServiceGroup);
        this.rangeTypeFunctionality(movementTariffService, "movement_tariff_service", subServiceGroup);
        this.setSelectedTariffServiceColumns(basicValueTariffService, "filteredAutocompleteResultColumns");
        this.setSelectedTariffServiceColumns(tariff_service, "filteredAutocompleteResultColumnsForTariff");
        this.setSelectedTariffServiceColumns(movementTariffService, "filteredAutocompleteResultColumnsForMovement");
      });
    } else {
      this.tariffServiceOptions = this.data.masterData.tariffServices || [];
      const [basicValueFunction, extractedBasicValue, basicValueTariffService, basicValueResultColumn] = this.splitAndExtractValuesToDisplay(data.basic_value);
      const [tariff_function, tariff, tariff_service, tariff_result_column] = this.splitAndExtractValuesToDisplay(data.tariff_percent);
      const [movementFunction, movement, movementTariffService, movementResultColumn] = this.splitAndExtractValuesToDisplay(data.movement);
      const subServiceGroup = this.fb.group({
        sub_service: [data.name || data.subservice || ""],
        basic_value: [extractedBasicValue, Validators.required],
        basic_value_function: [basicValueFunction === "NA" ? "" : basicValueFunction],
        basic_value_tariff_service: [basicValueTariffService === "NA" ? "" : basicValueTariffService],
        basic_value_result_column: [basicValueResultColumn === "NA" ? "" : basicValueResultColumn],
        tariff: [tariff || "", Validators.required],
        tariff_function: [tariff_function === "NA" ? "" : tariff_function],
        tariff_service: [tariff_service === "NA" ? "" : tariff_service],
        tariff_result_column: [tariff_result_column === "NA" ? "" : tariff_result_column],
        movement: [movement || "", Validators.required],
        movement_function: [movementFunction === "NA" ? "" : movementFunction],
        movement_tariff_service: [movementTariffService === "NA" ? "" : movementTariffService],
        movement_result_column: [movementResultColumn === "NA" ? "" : movementResultColumn],
        formula_result: [data.formula_result || data.resultformula || data.result_formula || this.defaultFormula],
        optional: [data.optional === "Y" || data.optional === true],
        hide: [data.hide === "Y" || data.hide === true],
        showBaseValueResultColumn: [basicValueFunction === "Range" ? true : false],
        showTariffResultColumn: [tariff_function === "Range" ? true : false],
        showMovementResultColumn: [movementFunction === "Range" ? true : false]
      });
      this.subServices.push(subServiceGroup);
      this.rangeTypeFunctionality(basicValueFunction, "basic_value_function", subServiceGroup);
      this.rangeTypeFunctionality(basicValueTariffService, "basic_value_tariff_service", subServiceGroup);
      this.rangeTypeFunctionality(tariff_function, "tariff_function", subServiceGroup);
      this.rangeTypeFunctionality(tariff_service, "tariff_service", subServiceGroup);
      this.rangeTypeFunctionality(movementFunction, "movement_function", subServiceGroup);
      this.rangeTypeFunctionality(movementTariffService, "movement_tariff_service", subServiceGroup);
      this.setSelectedTariffServiceColumns(basicValueTariffService, "filteredAutocompleteResultColumns");
      this.setSelectedTariffServiceColumns(tariff_service, "filteredAutocompleteResultColumnsForTariff");
      this.setSelectedTariffServiceColumns(movementTariffService, "filteredAutocompleteResultColumnsForMovement");
    }
    const checkDependencies = () => {
      if (this.vslProperties.length > 0 && this.portServices.length > 0) {
        const serviceName = data.service || (data.serviceObj ? data.serviceObj.service : "");
        if (serviceName) {
          this.tariffForm.patchValue({ service: serviceName });
          this.onServiceSelected(serviceName);
          setTimeout(() => {
            if (this.selectedService) {
              this.filteredSubServices = [...this.selectedService.sub_services];
            }
          }, 100);
        }
      } else {
        setTimeout(checkDependencies, 100);
      }
    };
    setTimeout(checkDependencies, 0);
  }
  closeDialog() {
    this.dialogRef.close({ cancelled: true });
  }
  // method to generate the unique
  generateUniqueKey(serviceName, subService) {
    const parts = [
      this.tariffForm.get("purpose")?.value || "",
      serviceName,
      subService.sub_service || ""
    ];
    return parts.filter((part) => !!part && part.trim() !== "").join("|");
  }
  // method to handle the range type
  rangeTypeFunctionality(selectedValue, fieldName, subServiceGroup) {
    const basicValueControl = subServiceGroup.get("basic_value_result_column");
    const basicValueTraiffServiceControl = subServiceGroup.get("basic_value_tariff_service");
    const tariffControl = subServiceGroup.get("tariff_result_column");
    const tariffServiceControl = subServiceGroup.get("tariff_service");
    const movementControl = subServiceGroup.get("movement_result_column");
    const movementTariffServiceControl = subServiceGroup.get("movement_tariff_service");
    if (fieldName === "basic_value_function") {
      if (selectedValue === "Range" || selectedValue === "Bracket" || selectedValue === "DataSet") {
        subServiceGroup.get("showBaseValueResultColumn")?.setValue(true);
        if (basicValueControl) {
          basicValueControl.setValidators([Validators.required]);
          basicValueControl.updateValueAndValidity();
        }
        if (basicValueTraiffServiceControl) {
          basicValueTraiffServiceControl.setValidators([Validators.required]);
          basicValueTraiffServiceControl.updateValueAndValidity();
        }
      } else {
        subServiceGroup.get("showBaseValueResultColumn")?.setValue(false);
        basicValueControl?.clearValidators();
        basicValueControl.updateValueAndValidity();
        basicValueTraiffServiceControl.clearValidators();
        basicValueTraiffServiceControl.updateValueAndValidity();
      }
    }
    if (fieldName === "tariff_function") {
      if (selectedValue === "Range" || selectedValue === "Bracket" || selectedValue === "DataSet") {
        subServiceGroup.get("showTariffResultColumn")?.setValue(true);
        if (tariffControl) {
          tariffControl.setValidators([Validators.required]);
          tariffControl.updateValueAndValidity();
        }
        if (tariffServiceControl) {
          tariffServiceControl.setValidators([Validators.required]);
          tariffServiceControl.updateValueAndValidity();
        }
      } else {
        subServiceGroup.get("showTariffResultColumn")?.setValue(false);
        tariffControl?.clearValidators();
        tariffControl.updateValueAndValidity();
        tariffServiceControl.clearValidators();
        tariffServiceControl.updateValueAndValidity();
      }
    }
    if (fieldName === "movement_function") {
      if (selectedValue === "Range" || selectedValue === "Bracket" || selectedValue === "DataSet") {
        subServiceGroup.get("showMovementResultColumn")?.setValue(true);
        if (movementControl) {
          movementControl.setValidators([Validators.required]);
          movementControl.updateValueAndValidity();
        }
        if (movementTariffServiceControl) {
          movementTariffServiceControl.setValidators([Validators.required]);
          movementTariffServiceControl.updateValueAndValidity();
        }
      } else {
        subServiceGroup.get("showMovementResultColumn")?.setValue(false);
        movementControl?.clearValidators();
        movementControl.updateValueAndValidity();
        movementTariffServiceControl.clearValidators();
        movementTariffServiceControl.updateValueAndValidity();
      }
    }
  }
  // method to insert the data in format
  insertFormatedData(data, type) {
    return data?.map((item) => ({
      value: item,
      label: item,
      type
    })) || [];
  }
  splitAndExtractValuesToDisplay(value, defaultValue = "") {
    const parts = value.split(":");
    return [
      parts[0] || defaultValue,
      parts[1] || defaultValue,
      parts[2] || defaultValue,
      parts[3] || defaultValue
    ];
  }
  // method to set the result columns based on tariff service selected
  setSelectedTariffServiceColumns(selectedValue, targetField) {
    const selectedTariffService = this.tariffServiceOptions.find((tariffService) => tariffService?.name === selectedValue);
    if (!selectedTariffService) {
      this[targetField] = [];
      return;
    }
    this.resultColumns = this.insertFormatedData(selectedTariffService.columns, "tariff_column");
    this[targetField] = this.insertFormatedData(selectedTariffService.columns, "tariff_column");
  }
  static \u0275fac = function CreateTariffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateTariffComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateTariffComponent, selectors: [["app-create-tariff"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 12, consts: [["autoService", "matAutocomplete"], ["autoPurpose", "matAutocomplete"], ["autoSize", "cdkTextareaAutosize"], ["autoSubService", "matAutocomplete"], ["autoBasicValue", "matAutocomplete"], ["autoBasicValueFunction", "matAutocomplete"], ["autoMovement", "matAutocomplete"], ["autoMovementFunction", "matAutocomplete"], ["autoTariff", "matAutocomplete"], ["autoFunction", "matAutocomplete"], ["autoBasicValueTariffService", "matAutocomplete"], ["autoBasicValueResult", "matAutocomplete"], ["autoMovementTariffService", "matAutocomplete"], ["autoMovementResult", "matAutocomplete"], ["autoTariffService", "matAutocomplete"], ["autoTariffResult", "matAutocomplete"], [4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], [2, "display", "flex", "justify-content", "space-between"], [2, "display", "flex", "gap", "10px"], ["appearance", "outline", 2, "width", "220px"], ["type", "text", "placeholder", "Select Service", "matInput", "", "formControlName", "service", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "input", "blur", "matAutocomplete", "readonly", "matTooltip"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "purpose-field"], ["type", "text", "matInput", "", "formControlName", "purpose", 3, "matAutocomplete"], ["appearance", "outline", 1, "total-field"], ["type", "text", "matInput", "", "formControlName", "total", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "matTooltip"], [2, "margin-top", "-5px", "display", "flex", "gap", "10px"], ["mat-flat-button", "", "color", "primary", 1, "add-subservice", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-Tariff"], [2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["appearance", "outline", 1, "input-text"], ["type", "text", "cdkTextareaAutosize", "", "placeholder", "Enter info message", "rows", "2", "matInput", "", "formControlName", "info_msg"], ["formArrayName", "sub_services", 1, "scroll-subservices"], ["class", "sub-service-section", 3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], [1, "sub-service-section", 3, "formGroupName"], [1, "sub-service-title", 2, "display", "flex", "gap", "5px", "align-items", "flex-start"], [2, "margin-top", "10px", "width", "200px"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "sub_service", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "input", "matAutocomplete", "matTooltip"], [2, "margin-top", "10px", "width", "600px"], ["appearance", "outline", 1, "formula-input", 2, "width", "600px"], ["matInput", "", "formControlName", "formula_result", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 1, "formula-input", 3, "input", "matTooltip"], [2, "display", "flex", "align-items", "center", "gap", "3px", "margin-top", "5px", "margin-left", "5px"], [1, "checkbox-row"], ["formControlName", "optional"], ["formControlName", "hide"], ["mat-icon-button", "", "type", "button", 1, "delete-btn", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined", 1, "delete-icon"], [1, "basic-value"], ["appearance", "outline", 1, "movement-field"], ["type", "text", "matInput", "", "formControlName", "basic_value", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "input", "keydown", "blur", "matAutocomplete", "matTooltip"], ["type", "text", "matInput", "", "formControlName", "basic_value_function", 3, "input", "keydown", "blur", "matAutocomplete"], ["appearance", "outline", "class", "movement-field", 4, "ngIf"], [1, "sub-service-container"], ["type", "text", "matInput", "", "formControlName", "movement", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "input", "keydown", "matAutocomplete", "matTooltip"], ["type", "text", "matInput", "", "formControlName", "movement_function", 3, "input", "keydown", "matAutocomplete"], ["type", "text", "placeholder", "Tariff %", "rows", "2", "matInput", "", "formControlName", "tariff", "matTooltipPosition", "right", "matTooltipShowDelay", "300", 3, "input", "keydown", "matAutocomplete", "matTooltip"], ["type", "text", "rows", "2", "matInput", "", "formControlName", "tariff_function", 3, "input", "keydown", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "basic_value_tariff_service", 3, "input", "keydown", "blur", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "basic_value_result_column", 3, "input", "keydown", "blur", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "movement_tariff_service", 3, "input", "keydown", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "movement_result_column", 3, "input", "keydown", "matAutocomplete"], ["type", "text", "placeholder", "Service Fee", "rows", "2", "matInput", "", "formControlName", "tariff_service", 3, "input", "keydown", "matAutocomplete"], ["type", "text", "placeholder", "Result Column", "rows", "2", "matInput", "", "formControlName", "tariff_result_column", 3, "input", "keydown", "matAutocomplete"]], template: function CreateTariffComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, CreateTariffComponent_app_loader_0_Template, 1, 0, "app-loader", 16);
      \u0275\u0275elementStart(1, "div", 17)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 18);
      \u0275\u0275listener("click", function CreateTariffComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 19);
      \u0275\u0275listener("ngSubmit", function CreateTariffComponent_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "mat-form-field", 22)(11, "mat-label");
      \u0275\u0275text(12, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 23);
      \u0275\u0275listener("input", function CreateTariffComponent_Template_input_input_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterServices());
      })("blur", function CreateTariffComponent_Template_input_blur_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onServiceBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-autocomplete", 24, 0);
      \u0275\u0275listener("optionSelected", function CreateTariffComponent_Template_mat_autocomplete_optionSelected_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onServiceSelected($event.option.value));
      });
      \u0275\u0275template(16, CreateTariffComponent_mat_option_16_Template, 2, 2, "mat-option", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-form-field", 26)(18, "mat-label");
      \u0275\u0275text(19, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 27);
      \u0275\u0275elementStart(21, "mat-autocomplete", null, 1);
      \u0275\u0275template(23, CreateTariffComponent_mat_option_23_Template, 2, 2, "mat-option", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "mat-form-field", 28)(25, "mat-label");
      \u0275\u0275text(26, "Service Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 30)(29, "button", 31);
      \u0275\u0275listener("click", function CreateTariffComponent_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSubService());
      });
      \u0275\u0275elementStart(30, "mat-icon");
      \u0275\u0275text(31, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Add Subservice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 32);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 33)(36, "mat-form-field", 34);
      \u0275\u0275element(37, "textarea", 35, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 36);
      \u0275\u0275template(40, CreateTariffComponent_div_40_Template, 79, 32, "div", 37);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_12_0;
      const autoService_r40 = \u0275\u0275reference(15);
      const autoPurpose_r41 = \u0275\u0275reference(22);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Tariff" : "Add Tariff");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.tariffForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("matAutocomplete", autoService_r40)("readonly", ctx.isEditMode)("matTooltip", ((tmp_8_0 = ctx.tariffForm.get("service")) == null ? null : tmp_8_0.value) || "No data");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredPortServices);
      \u0275\u0275advance(4);
      \u0275\u0275property("matAutocomplete", autoPurpose_r41);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.purposes);
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", ((tmp_12_0 = ctx.tariffForm.get("total")) == null ? null : tmp_12_0.value) || "No data");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Tariff" : "Add Tariff", " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.subServices.controls);
    }
  }, dependencies: [
    MatLabel,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatFormField,
    MatError,
    CdkTextareaAutosize,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    CommonModule,
    NgForOf,
    NgIf,
    LoaderComponent,
    MatCheckbox,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  padding: 0 10px;\n  height: 100vh;\n  overflow-y: hidden;\n  background: var(--app-page-bg);\n  color: var(--app-text-primary);\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-Tariff[_ngcontent-%COMP%], \n.add-subservice[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 140px;\n  font-size: 12px;\n  cursor: pointer;\n  background-color: var(--color-action);\n  border: none;\n  font-size: smaller;\n  white-space: nowrap;\n  height: 35px;\n  border-radius: 5px;\n  color: var(--app-text-primary);\n  align-items: center;\n  margin: 5px 2px;\n  font-weight: 600;\n  align-items: center;\n}\n.add-Tariff[_ngcontent-%COMP%]:hover, \n.add-subservice[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--app-text-primary);\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: auto;\n  background: none;\n  color: var(--color-error-muted);\n  height: 30px;\n}\n  input::placeholder {\n  font-size: 10px;\n  color: var(--app-text-muted) !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--color-error-muted);\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n.sub-service-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sub-service-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  font-weight: 500;\n  font-size: 16px;\n  color: var(--app-text-primary);\n}\n.scroll-subservices[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n  overflow-y: auto;\n}\n.sub-service-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n.sub-service-section[_ngcontent-%COMP%] {\n  background-color: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  padding: 5px 15px;\n  width: 96.7%;\n  border-radius: 8px;\n  position: relative;\n  box-shadow: 0 4px 12px var(--shadow-1);\n  margin-bottom: 5px;\n}\n.sub-service-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  display: block;\n}\n.sub-service-section[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-action);\n  box-shadow: 0 0 12px rgba(74, 143, 244, 0.15);\n}\n.mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border) !important;\n  border-radius: 6px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%]:has(textarea)   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--app-textarea-bg) !important;\n}\ninput[_ngcontent-%COMP%] {\n  color: black !important;\n}\ntextarea[_ngcontent-%COMP%] {\n  color: #333 !important;\n  background-color: var(--app-textarea-bg) !important;\n}\ninput[_ngcontent-%COMP%]::placeholder, \ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-text-muted) !important;\n}\n.basic-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  align-items: center;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-error-muted);\n  cursor: pointer;\n  padding: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 4px;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-error-muted);\n}\n.delete-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.5);\n}\n.delete-btn[_ngcontent-%COMP%]:disabled   .delete-icon[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  cursor: not-allowed;\n}\n.info-icon[_ngcontent-%COMP%] {\n  color: var(--color-action);\n  font-size: 20px;\n  position: relative;\n  top: 2px;\n  left: 15px;\n  cursor: pointer;\n}\n  .mat-tooltip {\n  white-space: pre-line;\n  font-size: 12px;\n  max-width: 250px !important;\n  background-color: var(--app-panel-bg);\n  color: var(--app-text-primary);\n  padding: 8px;\n}\n.formula-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.input-text[_ngcontent-%COMP%] {\n  max-width: 100vw !important;\n}\n.purpose-field[_ngcontent-%COMP%] {\n  width: 220px !important;\n}\n.total-field[_ngcontent-%COMP%] {\n  width: 220px !important;\n}\n.movement-field[_ngcontent-%COMP%] {\n  max-width: 90% !important;\n}\n.info-icon-textarea[_ngcontent-%COMP%] {\n  color: var(--color-action);\n  font-size: 20px;\n  position: absolute;\n  top: 2px;\n  right: -15px;\n  cursor: pointer;\n}\n.movement-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  color: var(--app-text-secondary);\n}\n.basic-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n  .formula-input .mat-mdc-text-field-wrapper {\n  width: 200%;\n  z-index: 0;\n}\n/*# sourceMappingURL=create-tariff.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateTariffComponent, { className: "CreateTariffComponent" });
})();

// src/app/components/create-port-tariff/create-vessel-field/multiple-vessel-creation/multiple-vessel-creation.component.ts
function MultipleVesselCreationComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function MultipleVesselCreationComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addVesselRow());
    });
    \u0275\u0275text(1, " Add Field ");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "No");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275property("formGroupName", element_r3.index);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r3.index + 1, " ");
  }
}
function MultipleVesselCreationComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Field Name");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_18_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "mat-form-field", 33);
    \u0275\u0275element(2, "input", 34);
    \u0275\u0275template(3, MultipleVesselCreationComponent_td_18_mat_error_3_Template, 2, 0, "mat-error", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const element_r4 = ctx.$implicit;
    \u0275\u0275property("formGroupName", element_r4.index);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_3_0 = element_r4.control.get("field_name")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = element_r4.control.get("field_name")) == null ? null : tmp_3_0.touched));
  }
}
function MultipleVesselCreationComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_21_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_21_mat_form_field_12_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_21_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 33);
    \u0275\u0275element(1, "textarea", 44, 0);
    \u0275\u0275template(3, MultipleVesselCreationComponent_td_21_mat_form_field_12_mat_error_3_Template, 2, 0, "mat-error", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const element_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_4_0 = element_r6.control.get("dropdown_input")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = element_r6.control.get("dropdown_input")) == null ? null : tmp_4_0.touched));
  }
}
function MultipleVesselCreationComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37)(1, "mat-form-field", 33)(2, "mat-select", 38);
    \u0275\u0275listener("selectionChange", function MultipleVesselCreationComponent_td_21_Template_mat_select_selectionChange_2_listener($event) {
      const element_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDataTypeSelect($event, element_r6));
    });
    \u0275\u0275elementStart(3, "mat-option", 39);
    \u0275\u0275text(4, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-option", 40);
    \u0275\u0275text(6, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 41);
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 42);
    \u0275\u0275text(10, "Select");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, MultipleVesselCreationComponent_td_21_mat_error_11_Template, 2, 0, "mat-error", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MultipleVesselCreationComponent_td_21_mat_form_field_12_Template, 4, 1, "mat-form-field", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const element_r6 = ctx.$implicit;
    \u0275\u0275property("formGroupName", element_r6.index);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_3_0 = element_r6.control.get("data_type")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = element_r6.control.get("data_type")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = element_r6.control.get("showDropDownField")) == null ? null : tmp_4_0.value);
  }
}
function MultipleVesselCreationComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_24_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "mat-form-field", 33)(2, "mat-select", 47)(3, "mat-option", 48);
    \u0275\u0275text(4, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-option", 49);
    \u0275\u0275text(6, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, MultipleVesselCreationComponent_td_24_mat_error_7_Template, 2, 0, "mat-error", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const element_r7 = ctx.$implicit;
    \u0275\u0275property("formGroupName", element_r7.index);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = element_r7.control.get("is_mandatory")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = element_r7.control.get("is_mandatory")) == null ? null : tmp_3_0.touched));
  }
}
function MultipleVesselCreationComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function MultipleVesselCreationComponent_td_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function MultipleVesselCreationComponent_td_27_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const element_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeVesselRow(element_r9.index));
    });
    \u0275\u0275elementStart(1, "mat-icon", 54);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function MultipleVesselCreationComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275template(1, MultipleVesselCreationComponent_td_27_button_1_Template, 3, 0, "button", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vesselsArray.length > 1);
  }
}
function MultipleVesselCreationComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function MultipleVesselCreationComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
var MultipleVesselCreationComponent = class _MultipleVesselCreationComponent {
  fb;
  dialogRef;
  existingdata;
  vesselCreationForm;
  isEditMode = false;
  displayedColumns = ["sno", "field_name", "data_type", "is_mandatory", "action"];
  dataSource = new MatTableDataSource([]);
  displayDropDownDataColumn = false;
  constructor(fb, dialogRef, existingdata) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.isEditMode = !!existingdata?.isEditMode;
    const initialData = existingdata?.vessels || [existingdata].filter(Boolean);
    this.vesselCreationForm = this.fb.group({
      vessels: this.fb.array(initialData.length > 0 ? initialData.map((vessel) => this.createVesselGroup(vessel)) : [this.createVesselGroup()])
    });
    this.updateDataSource();
  }
  get vesselsArray() {
    return this.vesselCreationForm.get("vessels");
  }
  createVesselGroup(vessel) {
    return this.fb.group({
      field_name: [vessel?.field_name || "", Validators.required],
      data_type: [vessel?.data_type || "", Validators.required],
      is_mandatory: [vessel?.is_mandatory, Validators.required],
      showDropDownField: [vessel?.data_type === "select" || false],
      dropdown_input: [vessel?.dropdown_input || "", vessel?.data_type === "select" ? Validators.required : []]
    });
  }
  updateDataSource() {
    this.dataSource.data = this.vesselsArray.controls.map((control, index) => ({ index, control }));
  }
  addVesselRow() {
    this.vesselsArray.push(this.createVesselGroup());
    this.updateDataSource();
  }
  removeVesselRow(index) {
    if (this.vesselsArray.length > 1) {
      this.vesselsArray.removeAt(index);
      this.updateDataSource();
    }
  }
  saveVessels() {
    if (this.vesselCreationForm.valid) {
      this.dialogRef.close(this.vesselsArray.value);
    } else {
      this.vesselCreationForm.markAllAsTouched();
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  onDataTypeSelect(event, element) {
    const control = element.control;
    if (event.value === "select") {
      control.get("showDropDownField")?.setValue(true);
    } else {
      control.get("showDropDownField")?.setValue(false);
    }
  }
  static \u0275fac = function MultipleVesselCreationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultipleVesselCreationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultipleVesselCreationComponent, selectors: [["app-multiple-vessel-creation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 8, consts: [["autoSize", "cdkTextareaAutosize"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [1, "dialog-content"], [3, "formGroup"], [1, "topbar"], ["mat-raised-button", "", "color", "primary", "class", "add-button", 3, "click", 4, "ngIf"], ["formArrayName", "vessels", 1, "table-container"], ["mat-table", "", 1, "mat-elevation-z2", "compact-table", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", "class", "sno-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "sno-column", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "field_name"], ["mat-header-cell", "", "class", "field-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "field-column", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "data_type"], ["mat-header-cell", "", "class", "type-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "type-column", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "is_mandatory"], ["mat-header-cell", "", "class", "mandatory-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "mandatory-column", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", "class", "action-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "action-column", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "dialog-footer"], ["mat-raised-button", "", "color", "primary", 1, "save-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], ["mat-header-cell", "", 1, "sno-column"], ["mat-cell", "", 1, "sno-column", 3, "formGroupName"], ["mat-header-cell", "", 1, "field-column"], ["mat-cell", "", 1, "field-column", 3, "formGroupName"], ["appearance", "outline", 1, "compact-field"], ["matInput", "", "formControlName", "field_name"], [4, "ngIf"], ["mat-header-cell", "", 1, "type-column"], ["mat-cell", "", 1, "type-column", 3, "formGroupName"], ["formControlName", "data_type", 3, "selectionChange"], ["value", "string"], ["value", "number"], ["value", "date"], ["value", "select"], ["appearance", "outline", "class", "compact-field", 4, "ngIf"], ["rows", "1", "cdkTextareaAutosize", "", "matInput", "", "formControlName", "dropdown_input", "placeholder", "Enter value"], ["mat-header-cell", "", 1, "mandatory-column"], ["mat-cell", "", 1, "mandatory-column", 3, "formGroupName"], ["formControlName", "is_mandatory"], ["value", "Y"], ["value", "N"], ["mat-header-cell", "", 1, "action-column"], ["mat-cell", "", 1, "action-column"], ["mat-icon-button", "", "class", "delete-btn", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "delete-btn", 3, "click"], [1, "delete-icon"], ["mat-header-row", ""], ["mat-row", ""]], template: function MultipleVesselCreationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h6");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function MultipleVesselCreationComponent_Template_button_click_3_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 3)(7, "form", 4)(8, "div", 5);
      \u0275\u0275element(9, "div");
      \u0275\u0275template(10, MultipleVesselCreationComponent_button_10_Template, 2, 0, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "table", 8);
      \u0275\u0275elementContainerStart(13, 9);
      \u0275\u0275template(14, MultipleVesselCreationComponent_th_14_Template, 2, 0, "th", 10)(15, MultipleVesselCreationComponent_td_15_Template, 2, 2, "td", 11);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(16, 12);
      \u0275\u0275template(17, MultipleVesselCreationComponent_th_17_Template, 2, 0, "th", 13)(18, MultipleVesselCreationComponent_td_18_Template, 4, 2, "td", 14);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(19, 15);
      \u0275\u0275template(20, MultipleVesselCreationComponent_th_20_Template, 2, 0, "th", 16)(21, MultipleVesselCreationComponent_td_21_Template, 13, 3, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(22, 18);
      \u0275\u0275template(23, MultipleVesselCreationComponent_th_23_Template, 2, 0, "th", 19)(24, MultipleVesselCreationComponent_td_24_Template, 8, 2, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(25, 21);
      \u0275\u0275template(26, MultipleVesselCreationComponent_th_26_Template, 2, 0, "th", 22)(27, MultipleVesselCreationComponent_td_27_Template, 2, 1, "td", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(28, MultipleVesselCreationComponent_tr_28_Template, 1, 0, "tr", 24)(29, MultipleVesselCreationComponent_tr_29_Template, 1, 0, "tr", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 26)(31, "button", 27);
      \u0275\u0275listener("click", function MultipleVesselCreationComponent_Template_button_click_31_listener() {
        return ctx.saveVessels();
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Vessel Field" : "Multiple Vessel Creation");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.vesselCreationForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isEditMode);
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.dataSource);
      \u0275\u0275advance(16);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update" : "Save", " Vessels ");
    }
  }, dependencies: [MatFormField, MatInput, MatSelect, MatOption, MatIcon, MatButton, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatError, CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CdkTextareaAutosize], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: var(--app-border);\n  background-color: var(--app-card-bg);\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--app-text-primary);\n}\n.close-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-error-muted);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  flex: 1;\n  overflow: hidden;\n  background: var(--app-page-bg);\n  color: var(--app-text-primary);\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: var(--app-border);\n  background-color: var(--app-card-bg);\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  height: 280px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--app-border);\n  border-radius: 4px;\n  width: 100%;\n}\n.compact-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1100px;\n}\n.sno-column[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n  padding: 4px 2px;\n}\n.field-column[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 4px;\n}\n.type-column[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 4px;\n}\n.mandatory-column[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 4px;\n}\n.action-column[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n  padding: 4px 2px;\n}\n.compact-field[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n.save-button[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n  width: 100%;\n  height: 32px;\n  font-size: 12px;\n  border-radius: 0;\n  border: none;\n}\n.save-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-error-muted);\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.delete-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.3);\n}\n  .mat-mdc-header-cell {\n  background-color: var(--app-table-header);\n  color: var(--app-text-primary);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--app-text-primary);\n  padding: 6px 4px;\n  height: 36px;\n}\n  .mat-mdc-cell {\n  font-size: 12px;\n  padding: 2px;\n}\n  .mat-mdc-row {\n  height: 60px;\n}\n  .compact-field .mat-mdc-form-field-wrapper {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n  .compact-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n  .compact-field .mat-mdc-form-field-infix {\n  padding: 8px 0;\n  min-height: 32px;\n}\n  mat-error {\n  font-size: 10px;\n  color: var(--color-error-muted);\n}\n/*# sourceMappingURL=multiple-vessel-creation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultipleVesselCreationComponent, { className: "MultipleVesselCreationComponent" });
})();

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  constructor(_document) {
    this._document = _document;
    this.positions = /* @__PURE__ */ new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var PreviewRef = class {
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    this._preview.addEventListener(name, handler);
  }
  removeEventListener(name, handler) {
    this._preview.removeEventListener(name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var activeEventListenerOptions = normalizePassiveListenerOptions({
  passive: false
});
var activeCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var MOUSE_EVENT_IGNORE_TIME = 800;
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._hasStartedDragging = signal(false);
    this._moveEvents = new Subject();
    this._pointerMoveSubscription = Subscription.EMPTY;
    this._pointerUpSubscription = Subscription.EMPTY;
    this._scrollSubscription = Subscription.EMPTY;
    this._resizeSubscription = Subscription.EMPTY;
    this._boundaryElement = null;
    this._nativeInteractionsEnabled = true;
    this._handles = [];
    this._disabledHandles = /* @__PURE__ */ new Set();
    this._direction = "ltr";
    this.dragStartDelay = 0;
    this.scale = 1;
    this._disabled = false;
    this.beforeStarted = new Subject();
    this.started = new Subject();
    this.released = new Subject();
    this.ended = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.moved = this._moveEvents;
    this._pointerDown = (event) => {
      this.beforeStarted.next();
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    this._pointerMove = (event) => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging()) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          if (!container || !container.isDragging() && !container.isReceiving()) {
            if (event.cancelable) {
              event.preventDefault();
            }
            this._hasStartedDragging.set(true);
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    this._pointerUp = (event) => {
      this._endDragSequence(event);
    };
    this._nativeDragStart = (event) => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
        element.addEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
        element.addEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._getShadowRoot()?.removeEventListener("selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        shadowRoot.addEventListener("selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-anchor" : "");
      parent.insertBefore(anchor, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            this._preview?.removeEventListener("transitionend", handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add("cdk-drag-placeholder");
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
    element.removeEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
    this._itemPositions = [];
    this.orientation = "vertical";
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex((currentItem) => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
    this._previousSwap = {
      drag: null,
      deltaX: 0,
      deltaY: 0,
      overlaps: false
    };
    this._relatedNodes = [];
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this.disabled = false;
    this.sortingDisabled = false;
    this.autoScrollDisabled = false;
    this.autoScrollStep = 2;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.beforeStarted = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.sorted = new Subject();
    this.receivingStarted = new Subject();
    this.receivingStopped = new Subject();
    this._isDragging = false;
    this._draggables = [];
    this._siblings = [];
    this._activeSiblings = /* @__PURE__ */ new Set();
    this._viewportScrollSubscription = Subscription.EMPTY;
    this._verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    this._horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._stopScrollTimers = new Subject();
    this._cachedShadowRoot = null;
    this._scrollableElements = [];
    this._direction = "ltr";
    this._startScrollInterval = () => {
      this._stopScrolling();
      interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var activeApps = /* @__PURE__ */ new Set();
var _ResetsLoader = class __ResetsLoader {
  static {
    this.\u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __ResetsLoader)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: __ResetsLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-drag-resets-container", ""],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function _ResetsLoader_Template(rf, ctx) {
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    this._appRef = inject(ApplicationRef);
    this._environmentInjector = inject(EnvironmentInjector);
    this._dropInstances = /* @__PURE__ */ new Set();
    this._dragInstances = /* @__PURE__ */ new Set();
    this._activeDragInstances = signal([]);
    this._globalListeners = /* @__PURE__ */ new Map();
    this._draggingPredicate = (item) => item.isDragging();
    this.pointerMove = new Subject();
    this.pointerUp = new Subject();
    this.scroll = new Subject();
    this._preventDefaultWhileDragging = (event) => {
      if (this._activeDragInstances().length > 0) {
        event.preventDefault();
      }
    };
    this._persistentTouchmoveListener = (event) => {
      if (this._activeDragInstances().length > 0) {
        if (this._activeDragInstances().some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    this._document = _document;
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._document.addEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._loadResets();
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      this._globalListeners.set(isTouchEvent2 ? "touchend" : "mouseup", {
        handler: (e) => this.pointerUp.next(e),
        options: true
      }).set("scroll", {
        handler: (e) => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      }).set("selectstart", {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      if (!isTouchEvent2) {
        this._globalListeners.set("mousemove", {
          handler: (e) => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;
          const callback = (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          };
          shadowRoot.addEventListener("scroll", callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener("scroll", callback, eventOptions);
          };
        });
      }));
    }
    return merge(...streams);
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
  // TODO(crisbeto): abstract this away into something reusable.
  /** Loads the CSS resets needed for the module to work correctly. */
  _loadResets() {
    if (!activeApps.has(this._appRef)) {
      activeApps.add(this._appRef);
      const componentRef = createComponent(_ResetsLoader, {
        environmentInjector: this._environmentInjector
      });
      this._appRef.onDestroy(() => {
        activeApps.delete(this._appRef);
        if (activeApps.size === 0) {
          componentRef.destroy();
        }
      });
    }
  }
  static {
    this.\u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDropRegistry)(\u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DragDropRegistry,
      factory: _DragDropRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var DragDrop = class _DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
  static {
    this.\u0275fac = function DragDrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDrop)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone), \u0275\u0275inject(ViewportRuler), \u0275\u0275inject(DragDropRegistry));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DragDrop,
      factory: _DragDrop.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewportRuler
  }, {
    type: DragDropRegistry
  }], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  constructor(element, _parentDrag) {
    this.element = element;
    this._parentDrag = _parentDrag;
    this._stateChanges = new Subject();
    this._disabled = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDragHandle");
    }
    _parentDrag?._addHandle(this);
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static {
    this.\u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDragHandle)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(CDK_DRAG_PARENT, 12));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CDK_DRAG_HANDLE,
        useExisting: _CdkDragHandle
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      standalone: true,
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var DRAG_HOST_CLASS = "cdk-drag";
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  static {
    this._dragInstances = [];
  }
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new Subject();
    this._handles = new BehaviorSubject([]);
    this.scale = 1;
    this.started = new EventEmitter();
    this.released = new EventEmitter();
    this.ended = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.dropped = new EventEmitter();
    this.moved = new Observable((observer) => {
      const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    this._injector = inject(Injector);
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    _CdkDrag._dragInstances.push(this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    const index = _CdkDrag._dragInstances.indexOf(this);
    if (index > -1) {
      _CdkDrag._dragInstances.splice(index, 1);
    }
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(_CdkDrag._dragInstances.find((drag) => {
            return drag.element.nativeElement === parent;
          })?._dragRef || null);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.pipe(
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const handleElements = handles.map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static {
    this.\u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDrag)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(CDK_DROP_LIST, 12), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(CDK_DRAG_CONFIG, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(DragDrop), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(CDK_DRAG_HANDLE, 10), \u0275\u0275directiveInject(CDK_DRAG_PARENT, 12));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        data: [0, "cdkDragData", "data"],
        lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
        rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
        boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
        dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
        freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
        disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
        constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
        previewClass: [0, "cdkDragPreviewClass", "previewClass"],
        previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
        scale: [2, "cdkDragScale", "scale", numberAttribute]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CDK_DRAG_PARENT,
        useExisting: _CdkDrag
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      standalone: true,
      host: {
        "class": DRAG_HOST_CLASS,
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DROP_LIST]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: CdkDragHandle,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [CDK_DRAG_HANDLE]
    }]
  }, {
    type: CdkDrag,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }]
  }], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  constructor() {
    this._items = /* @__PURE__ */ new Set();
    this.disabled = false;
  }
  ngOnDestroy() {
    this._items.clear();
  }
  static {
    this.\u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDropListGroup)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
      },
      exportAs: ["cdkDropListGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: _CdkDropListGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      standalone: true,
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var CdkDropList = class _CdkDropList {
  static {
    this._dropLists = [];
  }
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  constructor(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    this._destroyed = new Subject();
    this.connectedTo = [];
    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.dropped = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.sorted = new EventEmitter();
    this._unsortedItems = /* @__PURE__ */ new Set();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map((item) => item._dragRef));
  }
  static {
    this.\u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDropList)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DragDrop), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(CDK_DROP_LIST_GROUP, 12), \u0275\u0275directiveInject(CDK_DRAG_CONFIG, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id);
          \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
        data: [0, "cdkDropListData", "data"],
        orientation: [0, "cdkDropListOrientation", "orientation"],
        id: "id",
        lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
        disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
        sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
        enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
        sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
        autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
        autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
        elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: _CdkDropList
        }
      ]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      standalone: true,
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: ScrollDispatcher
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: CdkDropListGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DROP_LIST_GROUP]
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._drag = inject(CDK_DRAG_PARENT, {
      optional: true
    });
    this.matchSize = false;
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static {
    this.\u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDragPreview)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        data: "data",
        matchSize: [2, "matchSize", "matchSize", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CDK_DRAG_PREVIEW,
        useExisting: _CdkDragPreview
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._drag = inject(CDK_DRAG_PARENT, {
      optional: true
    });
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static {
    this.\u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDragPlaceholder)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: _CdkDragPlaceholder
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static {
    this.\u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDropModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _DragDropModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [DragDrop],
      imports: [CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/components/create-port-tariff/create-port-tariff.component.ts
function CreatePortTariffComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275property("value", country_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r2.name, " ");
  }
}
function CreatePortTariffComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select the country name ");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const port_r3 = ctx.$implicit;
    \u0275\u0275property("value", port_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", port_r3.name, " ");
  }
}
function CreatePortTariffComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select the port name ");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-checkbox", 28);
    \u0275\u0275listener("change", function CreatePortTariffComponent_div_27_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toCopyRule($event));
    });
    \u0275\u0275text(2, "Select to copy rule");
    \u0275\u0275elementEnd()();
  }
}
function CreatePortTariffComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36)(14, "button", 37);
    \u0275\u0275listener("click", function CreatePortTariffComponent_div_29_Template_button_click_14_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const field_r8 = ctx_r6.$implicit;
      const i_r9 = ctx_r6.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditSingleVesselField(field_r8.value, i_r9));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 38);
    \u0275\u0275listener("click", function CreatePortTariffComponent_div_29_Template_button_click_17_listener() {
      const i_r9 = \u0275\u0275restoreView(_r6).index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeVesselField(i_r9));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const field_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = field_r8.get("field_name")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.splitDataType((tmp_8_0 = field_r8.get("data_type")) == null ? null : tmp_8_0.value).type);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("required-yes", ((tmp_9_0 = field_r8.get("is_mandatory")) == null ? null : tmp_9_0.value) == "Y")("required-no", ((tmp_10_0 = field_r8.get("is_mandatory")) == null ? null : tmp_10_0.value) == "N");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = field_r8.get("is_mandatory")) == null ? null : tmp_11_0.value) == "Y" ? "Required" : "Optional", " ");
  }
}
function CreatePortTariffComponent_mat_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 39);
    \u0275\u0275listener("click", function CreatePortTariffComponent_mat_icon_36_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "SNO");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("display", ctx_r4.shouldShowSNOCell(element_r12, i_r13) ? "table-cell" : "none");
    \u0275\u0275attribute("rowspan", ctx_r4.getSNORowSpan(element_r12, i_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.sno, " ");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Service");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", element_r14.purpose, ")");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CreatePortTariffComponent_div_43_ng_container_1_td_8_p_2_Template, 2, 1, "p", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("display", ctx_r4.shouldShowServiceCell(element_r14, i_r15) ? "table-cell" : "none");
    \u0275\u0275attribute("rowspan", ctx_r4.getServiceRowSpan(element_r14, i_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r14.service, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r14.purpose);
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Remarks");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("display", ctx_r4.shouldShowInfoCell(element_r16, i_r17) ? "table-cell" : "none");
    \u0275\u0275attribute("rowspan", ctx_r4.getInfoRowSpan(element_r16, i_r17));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r16.info_msg || "\u2014", " ");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 77);
    \u0275\u0275text(1, "Subservice");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r18.name);
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Base value");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r19.basic_value ? element_r19.basic_value.split(":")[1] : "", " ");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 80);
    \u0275\u0275text(1, "Movement");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r20.movement ? element_r20.movement.split(":")[1] : "", "");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, "Tariff %");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r21.tariff_percent ? element_r21.tariff_percent.split(":")[1] : "", " ");
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "Result Formula");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r22.formula_result);
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 83);
    \u0275\u0275text(1, "Optional");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275element(1, "mat-checkbox", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", element_r23.optional);
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 85)(1, "button", 86);
    \u0275\u0275listener("click", function CreatePortTariffComponent_div_43_ng_container_1_td_32_Template_button_click_1_listener() {
      const ctx_r24 = \u0275\u0275restoreView(_r24);
      const element_r26 = ctx_r24.$implicit;
      const i_r27 = ctx_r24.index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.openAddOrEditTariffDialog(element_r26, i_r27));
    });
    \u0275\u0275elementStart(2, "mat-icon", 87);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 88);
    \u0275\u0275listener("click", function CreatePortTariffComponent_div_43_ng_container_1_td_32_Template_button_click_4_listener() {
      const ctx_r27 = \u0275\u0275restoreView(_r24);
      const element_r26 = ctx_r27.$implicit;
      const i_r27 = ctx_r27.index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.deleteService(element_r26, i_r27));
    });
    \u0275\u0275elementStart(5, "mat-icon", 89);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("display", ctx_r4.shouldShowActionCell(element_r26, i_r27) ? "table-cell" : "none");
    \u0275\u0275attribute("rowspan", ctx_r4.getActionRowSpan(element_r26, i_r27));
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 90);
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 91);
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", row_r29.groupClass)("cdkDragDisabled", !ctx_r4.shouldShowDragHandleCell(row_r29, i_r30));
    \u0275\u0275attribute("data-service-group", "service-" + row_r29.service + "-" + (row_r29.purpose || "no-purpose"));
  }
}
function CreatePortTariffComponent_div_43_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("scroll", function CreatePortTariffComponent_div_43_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 42);
    \u0275\u0275listener("cdkDropListDropped", function CreatePortTariffComponent_div_43_ng_container_1_Template_table_cdkDropListDropped_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.drop($event));
    });
    \u0275\u0275elementContainerStart(3, 43);
    \u0275\u0275template(4, CreatePortTariffComponent_div_43_ng_container_1_th_4_Template, 2, 0, "th", 44)(5, CreatePortTariffComponent_div_43_ng_container_1_td_5_Template, 2, 4, "td", 45);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 46);
    \u0275\u0275template(7, CreatePortTariffComponent_div_43_ng_container_1_th_7_Template, 2, 0, "th", 47)(8, CreatePortTariffComponent_div_43_ng_container_1_td_8_Template, 3, 5, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 49);
    \u0275\u0275template(10, CreatePortTariffComponent_div_43_ng_container_1_th_10_Template, 2, 0, "th", 50)(11, CreatePortTariffComponent_div_43_ng_container_1_td_11_Template, 2, 4, "td", 51);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 52);
    \u0275\u0275template(13, CreatePortTariffComponent_div_43_ng_container_1_th_13_Template, 2, 0, "th", 53)(14, CreatePortTariffComponent_div_43_ng_container_1_td_14_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 55);
    \u0275\u0275template(16, CreatePortTariffComponent_div_43_ng_container_1_th_16_Template, 2, 0, "th", 56)(17, CreatePortTariffComponent_div_43_ng_container_1_td_17_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 57);
    \u0275\u0275template(19, CreatePortTariffComponent_div_43_ng_container_1_th_19_Template, 2, 0, "th", 58)(20, CreatePortTariffComponent_div_43_ng_container_1_td_20_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 59);
    \u0275\u0275template(22, CreatePortTariffComponent_div_43_ng_container_1_th_22_Template, 2, 0, "th", 60)(23, CreatePortTariffComponent_div_43_ng_container_1_td_23_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 61);
    \u0275\u0275template(25, CreatePortTariffComponent_div_43_ng_container_1_th_25_Template, 2, 0, "th", 62)(26, CreatePortTariffComponent_div_43_ng_container_1_td_26_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 63);
    \u0275\u0275template(28, CreatePortTariffComponent_div_43_ng_container_1_th_28_Template, 2, 0, "th", 64)(29, CreatePortTariffComponent_div_43_ng_container_1_td_29_Template, 2, 1, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 65);
    \u0275\u0275template(31, CreatePortTariffComponent_div_43_ng_container_1_th_31_Template, 2, 0, "th", 60)(32, CreatePortTariffComponent_div_43_ng_container_1_td_32_Template, 7, 3, "td", 66);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(33, CreatePortTariffComponent_div_43_ng_container_1_tr_33_Template, 1, 0, "tr", 67)(34, CreatePortTariffComponent_div_43_ng_container_1_tr_34_Template, 1, 3, "tr", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r4.tableDataSource);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx_r4.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r4.displayedColumns);
  }
}
function CreatePortTariffComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CreatePortTariffComponent_div_43_ng_container_1_Template, 35, 4, "ng-container", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r31 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r32 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r31.length > 0)("ngIfElse", noData_r32);
  }
}
function CreatePortTariffComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var CreatePortTariffComponent = class _CreatePortTariffComponent {
  fb;
  dialog;
  existingdata;
  portService;
  snackBar;
  dialogRef;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  portForm;
  isEditMode = false;
  isDropdownOpen = false;
  portChecked = false;
  countries = [];
  filteredCountries$;
  ports = [];
  filteredPorts$;
  get countryControl() {
    return this.portForm.get("country_id");
  }
  displayedColumns = [
    // 'dragHandle',
    "sno",
    "service",
    "info_msg",
    "subservice",
    // 'purpose',
    "basic_value",
    "movement",
    "tariff_percent",
    "formula_result",
    "optional",
    "action"
  ];
  infoRowColumns = ["info_msg"];
  dataSource = new MatTableDataSource();
  tableDataSource = new MatTableDataSource();
  searchTerm = "";
  selectedCountryId = null;
  // Master data for create-tariff component
  masterData = {
    vslProperties: [],
    portServices: [],
    purposes: []
  };
  constructor(fb, dialog, existingdata, portService, snackBar, dialogRef) {
    this.fb = fb;
    this.dialog = dialog;
    this.existingdata = existingdata;
    this.portService = portService;
    this.snackBar = snackBar;
    this.dialogRef = dialogRef;
    const rowData = existingdata?.rowData;
    if (rowData && rowData.rules) {
      this.dataSource.data = rowData.rules.items.map((rule, index) => {
        const serviceObj = {
          SNO: index + 1,
          // Generate SNO dynamically based on position
          code: rule.code,
          service: rule.service,
          purpose: rule.purpose,
          info_msg: rule.info_msg,
          sub_services: rule.subService.map((sub) => {
            return __spreadProps(__spreadValues({}, sub), {
              optional: sub.optional === "Y" || sub.optional === true,
              hide: sub.hide === "Y" || sub.hide === true
            });
          }),
          total: rule.total || 0
        };
        return { serviceObj };
      });
      this.updateTable();
    }
    this.isEditMode = !!rowData;
    const vesselFieldsArray = (rowData?.vessel_fields || []).map((vf) => this.fb.group({
      field_name: [vf?.field_name || "", Validators.required],
      data_type: [vf?.data_type || "", Validators.required],
      is_mandatory: [vf?.is_mandatory || false, Validators.required]
    }));
    this.portForm = this.fb.group({
      country_id: [rowData?.country_id || 0, Validators.required],
      port_id: [rowData?.port_id || "", Validators.required],
      vessel_fields: this.fb.array(vesselFieldsArray)
    });
  }
  ngOnInit() {
    this.loadMasterData();
    this.filteredCountries$ = this.portForm.get("country_id").valueChanges.pipe(startWith(""), map((value) => this._filterCountries(value || "")));
    this.filteredPorts$ = this.portForm.get("port_id").valueChanges.pipe(startWith(""), map((value) => this._filterPorts(value || "")));
  }
  toCopyRule(event) {
    this.portChecked = event.checked;
  }
  // Helper method to regenerate SNO dynamically based on array position
  regenerateSNOs() {
    this.dataSource.data.forEach((item, index) => {
      if (item.serviceObj) {
        item.serviceObj.SNO = index + 1;
      }
    });
  }
  isFirstSubserviceRow = (_, row) => {
    const data = this.tableDataSource.data;
    const index = data.indexOf(row);
    if (index === -1) {
      return false;
    }
    const currentKey = `${row.service}|${row.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  };
  tarifdataManupulation(rowData) {
    if (!rowData || !rowData.rules || !rowData.rules.items) {
      return [];
    }
    return rowData.rules.items.reduce((acc, item) => {
      const enriched = item.subService.map((sub) => {
        return __spreadProps(__spreadValues({}, sub), {
          code: item.code,
          service: item.service,
          sno: item.SNO,
          formula_result: sub.resultformula || sub.formula_result,
          optional: sub.optional === "Y" || sub.optional === true,
          hide: sub.hide === "Y" || sub.hide === true,
          purpose: item?.purpose || null,
          basic_value: sub.basic_value || "",
          tariff_percent: sub.tariff_percent || ""
        });
      });
      return acc.concat(enriched);
    }, []);
  }
  _filterCountries(value) {
    if (typeof value === "number") {
      return this.countries.filter((country) => country.country_id === value);
    }
    const filterValue = value.toString().toLowerCase();
    return this.countries.filter((country) => (country.name ?? "").toLowerCase().includes(filterValue));
  }
  _filterPorts(value) {
    if (typeof value === "number") {
      return this.ports.filter((port) => port.port_id === value);
    }
    const filterValue = value.toString().toLowerCase();
    const result = this.ports.filter((port) => (port.name ?? "").toLowerCase().includes(filterValue));
    return result;
  }
  onPortSelected(name) {
    let selectedPortId = 0;
    const selected = this.ports.find((p) => p.name === name);
    selectedPortId = selected?.port_id || 0;
    this.portForm.get("port_id")?.setValue(selectedPortId);
  }
  onCountrySelected(name) {
    let selectedCountryId = 0;
    const selected = this.countries.find((c) => c.name === name);
    selectedCountryId = selected?.country_id || 0;
    this.portForm.get("country_id")?.setValue(selectedCountryId);
    if (selectedCountryId != 0) {
      this.loadPortsByCountryId(selectedCountryId);
    }
  }
  onCountryInput(event) {
    const value = event.target.value;
    if (!value) {
      this.portForm.get("country_id")?.setValue("");
    }
  }
  onPortInput(event) {
    const value = event.target.value;
    if (!value) {
      this.portForm.get("port_id")?.setValue("");
    }
  }
  loadPortsByCountryId(id) {
    this.portService.portsByCountry(id).subscribe({
      next: (data) => {
        this.ports = data;
        this.portForm.get("port_id")?.setValue("");
        this.filteredPorts$ = this.portForm.get("port_id").valueChanges.pipe(startWith(""), map((value) => this._filterPorts(value || "")));
        const existingId = this.existingdata?.rowData.port_id;
        if (existingId) {
          this.portForm.patchValue({ port_id: existingId });
        }
      },
      error: (err) => {
        console.error("Error fetching ports:", err);
      }
    });
  }
  displayCountryFn = (countryId) => {
    if (!countryId || this.countries.length === 0)
      return "";
    const country = this.countries.find((c) => c.country_id === countryId);
    return country && country.name ? country.name : "";
  };
  displayPortFn = (id) => {
    if (!id || this.ports.length === 0)
      return "";
    const port = this.ports.find((c) => c.port_id === id);
    return port && port.name ? port.name : "";
  };
  // onPaste method removed as name field is no longer needed
  get vesselFields() {
    return this.portForm.get("vessel_fields");
  }
  // method to add the additional vessel fields
  addVesselField() {
    this.vesselFields.push(this.fb.group({
      field_name: ["", Validators.required],
      data_type: ["", Validators.required],
      is_mandatory: [false, Validators.required]
    }));
  }
  // method to remove the additional vessel fields
  removeVesselField(index) {
    this.vesselFields.removeAt(index);
  }
  // Load master data for create-tariff component
  loadMasterData() {
    this.loader.showDialogLoader();
    const body = { fields: ["country", "vessel_properties", "port_services", "purpose", "tariff_services"] };
    this.portService.getMasterData(body).subscribe({
      next: (response) => {
        this.countries = response.country || [];
        this.filteredCountries$ = this.portForm.get("country_id").valueChanges.pipe(startWith(""), map((value) => this._filterCountries(value || "")));
        const existingId = this.existingdata?.rowData.country_id;
        if (existingId) {
          this.portForm.patchValue({ country_id: existingId });
          this.loadPortsByCountryId(existingId);
        }
        this.masterData.vslProperties = response.vessel_properties || [];
        this.masterData.portServices = response.port_services || [];
        this.masterData.purposes = response.purpose || [];
        this.masterData.tariffServices = response.tariff_services || [];
        this.loader.hideDialogLoader();
      },
      error: (error) => {
        this.loader.hideDialogLoader();
        const errorMsg = error.error?.error || "Something went wrong, Unable to load Suggestions. Please try again.";
        this.snackBar.showError(errorMsg);
      }
    });
  }
  // Port Tariff Submit
  onSubmitPortTariff() {
    Object.keys(this.portForm.controls).forEach((key) => {
      const control = this.portForm.get(key);
    });
    const countryIdValid = this.portForm.get("country_id")?.valid;
    const portIdValid = this.portForm.get("port_id")?.valid;
    if (!countryIdValid || !portIdValid) {
      this.portForm.markAllAsTouched();
      this.snackBar.showError("Please select country and port");
      return;
    }
    const formData = this.portForm.value;
    const serviceMap = /* @__PURE__ */ new Map();
    this.dataSource.data.forEach((item) => {
      if (item.serviceObj) {
        const key = `${item.serviceObj.service || item.serviceObj.code}|${item.serviceObj.purpose || ""}`;
        serviceMap.set(key, item.serviceObj);
      }
    });
    const rules = Array.from(serviceMap.values());
    if (rules.length === 0) {
      this.snackBar.showError("Please add at least one tariff");
      return;
    }
    const selectedPort = this.ports.find((p) => p.port_id === formData.port_id);
    let portName = selectedPort?.name || "";
    if (selectedPort == void 0) {
      portName = formData.port_id;
    }
    const allTariffServices = rules.map((rule, index) => new TariffService({
      SNO: index + 1,
      // Generate SNO dynamically based on position
      code: rule.code || null,
      total: rule.total || "",
      service: rule.service || null,
      purpose: rule.purpose || null,
      pa_remark: rule.pa_remark || null,
      meraki_feedback: rule.meraki_feedback || null,
      meraki_remark_client: rule.meraki_remark_client || null,
      client_comment: rule.client_comment || null,
      info_msg: rule.info_msg || null,
      negotiate: rule.negotiate || "N",
      agreed: rule.agreed || "N",
      client_option: rule.client_option || "N",
      display_to_client: rule.display_to_client || "N",
      subService: (rule.sub_services || rule.subService || []).map((sub) => new TariffSubService({
        name: sub.name || null,
        unique_key: rule.purpose != null ? `${rule.service || ""}${rule.purpose ? `|${rule.purpose}` : ""}${sub.name ? `|${sub.name}` : ""}` : `${rule.service || ""}${sub.name ? `|${sub.name}` : ""}`,
        basic_value: sub.basic_value || null,
        movement: sub.movement || null,
        tariff_percent: sub.tariff_percent || null,
        calculated_basic_value: null,
        formula_result: sub.formula_result || null,
        formula_inputs: null,
        optional: sub.optional ? "Y" : "N",
        hide: sub.hide ? "Y" : "N",
        operational_flag: "+",
        sub_total: 0
      }))
    }));
    const tariffRequest = new TariffRequest({
      items: allTariffServices
    });
    const portData = {
      port_tariff_rule_id: formData.port_tariff_rule_id || null,
      port_id: formData.port_id,
      name: portName,
      country_id: formData.country_id,
      rules: tariffRequest,
      status: "Y",
      vessel_fields: formData.vessel_fields || []
    };
    if (this.portChecked) {
      portData.port_tariff_rule_id = 0;
    }
    if (selectedPort == void 0) {
      portData.port_id = 0;
    }
    this.loader.show();
    this.portService.saveTariffRulesDataToDB(portData).subscribe({
      next: (res) => {
        this.loader.hide();
        this.snackBar.showSuccess(res.message || "Port tariff saved successfully");
        this.dialogRef.close("refresh");
      },
      error: (error) => {
        this.loader.hide();
        const errorMsg = error.error?.error || "Something went wrong. Please try again.";
        this.snackBar.showError(errorMsg);
      }
    });
  }
  // method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  onSearch() {
  }
  clearSearch() {
    this.searchTerm = "";
  }
  // Method to open Multiple Vessel Creation Dialog
  openMultipleVesselCreationDialog() {
    const vesselData = this.vesselFields.value?.map((vessel) => {
      const dataType = this.splitDataType(vessel.data_type);
      return {
        field_name: vessel.field_name,
        data_type: dataType?.type,
        is_mandatory: vessel.is_mandatory,
        dropdown_input: dataType?.data
      };
    });
    const dialogConfig = {
      width: "1200px",
      minWidth: "1200px",
      height: "450px",
      disableClose: true,
      data: {
        vessels: vesselData,
        isEditMode: false
      }
    };
    const dialogRef = this.dialog.open(MultipleVesselCreationComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result && Array.isArray(result)) {
        while (this.vesselFields.length !== 0) {
          this.vesselFields.removeAt(0);
        }
        result.forEach((vessel) => {
          const vesselGroup = this.fb.group({
            field_name: [vessel.field_name?.trim(), Validators.required],
            data_type: `${vessel.data_type}:${vessel.dropdown_input}`,
            is_mandatory: [vessel.is_mandatory || "N", Validators.required]
          });
          this.vesselFields.push(vesselGroup);
        });
      }
    });
  }
  // Method to edit single vessel field using multiple vessel creation component
  openEditSingleVesselField(fieldData, index) {
    const dataType = this.splitDataType(fieldData.data_type);
    const formattedData = {
      field_name: fieldData.field_name,
      data_type: dataType?.type,
      is_mandatory: fieldData.is_mandatory,
      dropdown_input: dataType?.data
    };
    const dialogConfig = {
      width: "1200px",
      minWidth: "1200px",
      height: "450px",
      disableClose: true,
      data: {
        vessels: [formattedData],
        isEditMode: true
      }
    };
    const dialogRef = this.dialog.open(MultipleVesselCreationComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result && Array.isArray(result) && result.length > 0) {
        const updatedField = result[0];
        this.vesselFields.at(index).patchValue({
          field_name: updatedField.field_name?.trim(),
          data_type: `${updatedField.data_type}:${updatedField.dropdown_input}`,
          is_mandatory: updatedField.is_mandatory || "N"
        });
      }
    });
  }
  // Method to open Add or Edit Tariff Dialog
  openAddOrEditTariffDialog(rowData, index) {
    const screenWidth = window.innerWidth;
    const minWidthPx = screenWidth * 0.73;
    const maxWidthPx = screenWidth * 0.92;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.minWidth = `${minWidthPx}px`;
    dialogConfig.maxWidth = `${maxWidthPx}px`;
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    if (rowData) {
      const serviceCode = rowData.code;
      const serviceName = rowData.service;
      const purpose = rowData.purpose;
      const serviceData = this.dataSource.data.find((item) => item.serviceObj && item.serviceObj.code === serviceCode && item.serviceObj.service === serviceName && item.serviceObj.purpose === purpose);
      if (serviceData) {
        const formValue = this.portForm.value;
        dialogConfig.data = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, serviceData), {
          index,
          masterData: this.masterData
        }), formValue), {
          vessel_fields: Array.isArray(formValue.vessel_fields) ? formValue.vessel_fields : [],
          existingServices: this.dataSource.data,
          originalServiceIndex: this.dataSource.data.findIndex((item) => item.serviceObj && item.serviceObj.code === serviceCode && item.serviceObj.service === serviceName && item.serviceObj.purpose === purpose)
          // Pass index for edit identification
        });
      } else {
        const formValue = this.portForm.value;
        dialogConfig.data = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, rowData), {
          index,
          masterData: this.masterData
        }), formValue), {
          vessel_fields: Array.isArray(formValue.vessel_fields) ? formValue.vessel_fields : [],
          existingServices: this.dataSource.data,
          originalServiceIndex: this.dataSource.data.findIndex((item) => item.serviceObj && item.serviceObj.code === serviceCode && item.serviceObj.service === serviceName && item.serviceObj.purpose === purpose)
          // Pass index for edit identification
        });
      }
    } else {
      const formValue = this.portForm.value;
      dialogConfig.data = __spreadProps(__spreadValues({
        masterData: this.masterData
      }, formValue), {
        vessel_fields: Array.isArray(formValue.vessel_fields) ? formValue.vessel_fields : [],
        existingServices: this.dataSource.data
      });
    }
    const dialogRef = this.dialog.open(CreateTariffComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data && result.data.tariffRequest) {
        const tariffService = result.data.tariffRequest.items[0];
        const serviceCode = result.data.tariffRequest.items[0].code;
        const serviceName = result.data.tariffRequest.items[0].service;
        const purpose = result.data.tariffRequest.items[0].purpose;
        const total = result.data.tariffRequest.items[0].total;
        const existingServiceIndex = this.dataSource.data.findIndex((item) => item.serviceObj && item.serviceObj.service === serviceName && item.serviceObj.purpose === purpose);
        if (existingServiceIndex !== -1 && !result.data.isEdit) {
          const existingSubServices = this.dataSource.data[existingServiceIndex].serviceObj.sub_services;
          const newSubServices = tariffService.subService;
          const duplicates = newSubServices.filter((newSub) => existingSubServices.some((existingSub) => existingSub.unique_key === newSub.unique_key));
          if (duplicates.length > 0) {
            this.snackBar.showError(`Subservice '${duplicates[0].name}' already exists in ${serviceName}`);
            return;
          }
          const mergedSubServices = [...existingSubServices, ...newSubServices.map((sub) => ({
            name: sub.name || "",
            basic_value: sub.basic_value,
            tariff_percent: sub.tariff_percent,
            movement: sub.movement,
            formula_result: sub.formula_result,
            optional: sub.optional === "Y",
            hide: sub.hide === "Y",
            sub_total: 0,
            operational_flag: "+"
          }))];
          const updatedServiceObj = __spreadProps(__spreadValues({}, this.dataSource.data[existingServiceIndex].serviceObj), {
            sub_services: mergedSubServices
          });
          const updatedData = [...this.dataSource.data];
          updatedData[existingServiceIndex] = { serviceObj: updatedServiceObj };
          this.dataSource.data = updatedData;
          this.regenerateSNOs();
          this.updateTable();
          this.snackBar.showSuccess("Subservice added to existing service successfully");
          return;
        }
        let sno;
        if (result.data.isEdit) {
          const existingServiceIndex2 = this.dataSource.data.findIndex((item) => item.serviceObj && item.serviceObj.code === serviceCode && item.serviceObj.service === serviceName && item.serviceObj.purpose === purpose);
          sno = existingServiceIndex2 !== -1 ? existingServiceIndex2 + 1 : this.dataSource.data.length + 1;
        } else {
          sno = this.dataSource.data.length + 1;
        }
        const serviceObj = {
          SNO: sno,
          code: serviceCode,
          total: String(total),
          service: serviceName,
          purpose: purpose || null,
          pa_remark: tariffService.pa_remark || null,
          meraki_feedback: tariffService.meraki_feedback || null,
          meraki_remark_client: tariffService.meraki_remark_client || null,
          client_comment: tariffService.client_comment || null,
          client_option: tariffService.client_option || null,
          info_msg: tariffService.info_msg || null,
          negotiate: tariffService.negotiate || "N",
          agreed: tariffService.agreed || "N",
          sub_services: tariffService.subService.map((sub) => ({
            name: sub.name || null,
            unique_key: sub.unique_key || null,
            basic_value: sub.basic_value || null,
            movement: sub.movement || null,
            tariff_percent: sub.tariff_percent || null,
            calculated_basic_value: null,
            formula_result: sub.formula_result || null,
            formula_inputs: null,
            optional: sub.optional === "Y",
            hide: sub.hide === "Y",
            operational_flag: sub.operational_flag || "+",
            sub_total: 0
          }))
        };
        if (result.data.isEdit) {
          const serviceIndex = result.data.originalServiceIndex;
          if (serviceIndex !== void 0 && serviceIndex !== -1 && serviceIndex < this.dataSource.data.length) {
            const updatedData = [...this.dataSource.data];
            updatedData[serviceIndex] = { serviceObj };
            this.dataSource.data = updatedData;
            this.regenerateSNOs();
            this.updateTable();
          }
          this.snackBar.showSuccess("Tariff updated successfully");
        } else {
          const newData = [...this.dataSource.data, { serviceObj }];
          this.dataSource.data = newData;
          this.regenerateSNOs();
          this.updateTable();
          this.snackBar.showSuccess("Tariff added successfully");
        }
      }
    });
  }
  onManualScroll() {
  }
  getServiceRowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  getCodeRowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  shouldShowServiceCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  shouldShowCodeCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  getActionRowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  shouldShowActionCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  getInfoRowSpan(element, index) {
    return this.getServiceRowSpan(element, index);
  }
  shouldShowInfoCell(element, index) {
    return this.shouldShowServiceCell(element, index);
  }
  dropRow(event) {
    if (!event || !this.tableDataSource?.data || this.tableDataSource.data.length === 0) {
      return;
    }
    const reordered = [...this.tableDataSource.data];
    moveItemInArray(reordered, event.previousIndex, event.currentIndex);
    this.tableDataSource.data = reordered;
    this.regenerateSNOs();
    this.tableDataSource._updateChangeSubscription();
  }
  getSNORowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  shouldShowSNOCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  getDragHandleRowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  shouldShowDragHandleCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  getPurposeRowSpan(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    if (index === 0 || prevKey !== currentKey) {
      let count = 1;
      for (let i = index + 1; i < data.length; i++) {
        const nextKey = `${data[i].service}|${data[i].purpose || ""}`;
        if (nextKey === currentKey) {
          count++;
        } else {
          break;
        }
      }
      return count;
    }
    return 0;
  }
  shouldShowPurposeCell(element, index) {
    const data = this.tableDataSource.data;
    const currentKey = `${element.service}|${element.purpose || ""}`;
    const prevKey = index > 0 ? `${data[index - 1].service}|${data[index - 1].purpose || ""}` : null;
    return index === 0 || prevKey !== currentKey;
  }
  deleteService(element, index) {
    const serviceName = element.service;
    const serviceCode = element.code;
    const purpose = element.purpose;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: "Delete Service",
        text: `Are you sure you want to delete the service '${serviceName}'${purpose ? ` with purpose '${purpose}'` : ""}? This will remove all its subservices.`
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const serviceIndex = this.dataSource.data.findIndex((item) => item.serviceObj && item.serviceObj.code === serviceCode && item.serviceObj.service === serviceName && item.serviceObj.purpose === (purpose || null));
        if (serviceIndex !== -1) {
          const updatedData = [...this.dataSource.data];
          updatedData.splice(serviceIndex, 1);
          this.dataSource.data = updatedData;
          this.regenerateSNOs();
          this.updateTable();
          this.snackBar.showSuccess(`Service '${serviceName}' deleted successfully`);
        }
      }
    });
  }
  drop(event) {
    const draggedRow = this.tableDataSource.data[event.previousIndex];
    const draggedKey = `${draggedRow.service}|${draggedRow.purpose || ""}`;
    const draggedIndex = this.dataSource.data.findIndex((s) => `${s.serviceObj.service}|${s.serviceObj.purpose || ""}` === draggedKey);
    let targetIndex;
    if (event.currentIndex >= this.tableDataSource.data.length) {
      targetIndex = this.dataSource.data.length;
    } else {
      const targetRow = this.tableDataSource.data[event.currentIndex];
      const targetKey = `${targetRow.service}|${targetRow.purpose || ""}`;
      targetIndex = this.dataSource.data.findIndex((s) => `${s.serviceObj.service}|${s.serviceObj.purpose || ""}` === targetKey);
    }
    const [draggedService] = this.dataSource.data.splice(draggedIndex, 1);
    this.dataSource.data.splice(targetIndex, 0, draggedService);
    this.updateTable();
  }
  updateTable() {
    this.tableDataSource.data = this.dataSource.data.flatMap((item, groupIndex) => {
      const subServices = item.serviceObj.sub_services || item.serviceObj.subService || [];
      return subServices.map((sub) => __spreadProps(__spreadValues({}, sub), {
        groupClass: groupIndex % 2 === 0 ? "service-group-even" : "service-group-odd",
        code: item.serviceObj.code,
        service: item.serviceObj.service,
        sno: item.serviceObj.SNO,
        optional: sub.optional === "Y" || sub.optional === true,
        formula_result: sub.resultformula || sub.formula_result,
        hide: sub.hide === "Y" || sub.hide === true,
        purpose: item.serviceObj.purpose,
        info_msg: item.serviceObj.info_msg
      }));
    });
  }
  splitDataType(data) {
    if (data.includes(":")) {
      const [type, dataValue] = data?.split(":");
      return {
        type: type.trim(),
        data: dataValue.trim()
      };
    }
    return {
      type: data,
      data: ""
    };
  }
  static \u0275fac = function CreatePortTariffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePortTariffComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePortTariffComponent, selectors: [["app-create-port-tariff"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 21, consts: [["autoCountry", "matAutocomplete"], ["autoPort", "matAutocomplete"], ["noData", ""], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "formGroup"], [1, "vessel-card-container"], [2, "display", "flex", "gap", "20px"], ["appearance", "outline"], ["type", "text", "matInput", "", "placeholder", "Select Country", "formControlName", "country_id", 3, "input", "matAutocomplete", "readonly"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Select Port", "formControlName", "port_id", 3, "input", "matAutocomplete", "readonly"], ["mat-button", "", "type", "button", 1, "add-vessel-field", 3, "click"], ["formArrayName", "vessel_fields", 1, "scroll-vessel-fields"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", ""], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "search-icon", 3, "click"], [1, "search"], [2, "display", "flex", "gap", "10px"], ["mat-raised-button", "", "color", "primary", "name", "add-tariff", "type", "button", 1, "add-button", 3, "click"], [1, "add-port-tariff", 3, "click"], [3, "value"], [3, "change"], [3, "formGroupName"], [1, "vessel-card-compact"], [1, "card-content"], [1, "field-name"], [1, "field-separator"], [1, "field-type"], [1, "field-required"], [1, "card-actions"], ["mat-icon-button", "", "type", "button", 1, "edit-btn", 3, "click"], ["mat-icon-button", "", 1, "delete-btn", 3, "click"], ["matSuffix", "", 1, "close-icon", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", "cdkDropList", "", 1, "mat-elevation-z8", "full-width-table", "tariff-rules-table", 3, "cdkDropListDropped", "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", "style", "width: 40px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "vertical-align: middle; text-align: center; border-right: 1px solid #e0e0e0;", 3, "display", 4, "matCellDef"], ["matColumnDef", "service"], ["mat-header-cell", "", "style", "min-width: 100px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "vertical-align: middle; border-right: 1px solid #e0e0e0;", 3, "display", 4, "matCellDef"], ["matColumnDef", "info_msg"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "vertical-align: middle; border-left: 1px solid #e0e0e0; min-width: 160px;", 3, "display", 4, "matCellDef"], ["matColumnDef", "subservice"], ["mat-header-cell", "", "style", "min-width: 200px;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "basic_value"], ["mat-header-cell", "", "style", "min-width: 150px;", 4, "matHeaderCellDef"], ["matColumnDef", "movement"], ["mat-header-cell", "", "style", "width: 70px;", 4, "matHeaderCellDef"], ["matColumnDef", "tariff_percent"], ["mat-header-cell", "", "style", "width: 100px;", 4, "matHeaderCellDef"], ["matColumnDef", "formula_result"], ["mat-header-cell", "", "style", "min-width: 250px;", 4, "matHeaderCellDef"], ["matColumnDef", "optional"], ["mat-header-cell", "", "style", "width: 50px;", 4, "matHeaderCellDef"], ["matColumnDef", "action"], ["mat-cell", "", "style", "vertical-align: middle; text-align: center;", 3, "display", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "cdkDrag", "", "cdkDragLockAxis", "y", 3, "ngClass", "cdkDragDisabled", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", "", 2, "vertical-align", "middle", "text-align", "center", "border-right", "1px solid #e0e0e0"], ["mat-header-cell", "", 2, "min-width", "100px"], ["mat-cell", "", 2, "vertical-align", "middle", "border-right", "1px solid #e0e0e0"], ["style", "font-size: 10px; color: #666; margin-top: 6px;", 4, "ngIf"], [2, "font-size", "10px", "color", "#666", "margin-top", "6px"], ["mat-header-cell", ""], ["mat-cell", "", 2, "vertical-align", "middle", "border-left", "1px solid #e0e0e0", "min-width", "160px"], ["mat-header-cell", "", 2, "min-width", "200px"], ["mat-cell", ""], ["mat-header-cell", "", 2, "min-width", "150px"], ["mat-header-cell", "", 2, "width", "70px"], ["mat-header-cell", "", 2, "width", "100px"], ["mat-header-cell", "", 2, "min-width", "250px"], ["mat-header-cell", "", 2, "width", "50px"], ["disabled", "", 3, "checked"], ["mat-cell", "", 2, "vertical-align", "middle", "text-align", "center"], ["mat-icon-button", "", "type", "button", 1, "edit-icon-button", 3, "click"], [2, "font-size", "17px"], ["mat-icon-button", "", "type", "button", 1, "delete-btn", 3, "click"], ["fontSet", "material-symbols-outlined", 1, "delete-icon"], ["mat-header-row", ""], ["mat-row", "", "cdkDrag", "", "cdkDragLockAxis", "y", 3, "ngClass", "cdkDragDisabled"], [1, "no-data-text"]], template: function CreatePortTariffComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "h6");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 4);
      \u0275\u0275listener("click", function CreatePortTariffComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 7)(10, "mat-form-field", 8)(11, "input", 9);
      \u0275\u0275listener("input", function CreatePortTariffComponent_Template_input_input_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryInput($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-autocomplete", 10, 0);
      \u0275\u0275listener("optionSelected", function CreatePortTariffComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountrySelected($event.option.value));
      });
      \u0275\u0275template(14, CreatePortTariffComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, CreatePortTariffComponent_mat_error_16_Template, 2, 0, "mat-error", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 8)(18, "input", 13);
      \u0275\u0275listener("input", function CreatePortTariffComponent_Template_input_input_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPortInput($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-autocomplete", 10, 1);
      \u0275\u0275listener("optionSelected", function CreatePortTariffComponent_Template_mat_autocomplete_optionSelected_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPortSelected($event.option.value));
      });
      \u0275\u0275template(21, CreatePortTariffComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
      \u0275\u0275pipe(22, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, CreatePortTariffComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function CreatePortTariffComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openMultipleVesselCreationDialog());
      });
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Add Vessel Field");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, CreatePortTariffComponent_div_27_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15);
      \u0275\u0275template(29, CreatePortTariffComponent_div_29_Template, 20, 8, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "mat-form-field", 19)(33, "mat-label");
      \u0275\u0275text(34, "Tariff");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 20);
      \u0275\u0275template(36, CreatePortTariffComponent_mat_icon_36_Template, 2, 0, "mat-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 22);
      \u0275\u0275listener("click", function CreatePortTariffComponent_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementStart(38, "mat-icon", 23);
      \u0275\u0275text(39, "search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 24)(41, "button", 25);
      \u0275\u0275listener("click", function CreatePortTariffComponent_Template_button_click_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddOrEditTariffDialog());
      });
      \u0275\u0275text(42, " Add Tariff ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, CreatePortTariffComponent_div_43_Template, 2, 2, "div", 12)(44, CreatePortTariffComponent_ng_template_44_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(46, "button", 26);
      \u0275\u0275listener("click", function CreatePortTariffComponent_Template_button_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitPortTariff());
      });
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_14_0;
      const autoCountry_r33 = \u0275\u0275reference(13);
      const autoPort_r34 = \u0275\u0275reference(20);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Port" : "Add Port");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.portForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("matAutocomplete", autoCountry_r33)("readonly", ctx.isEditMode);
      \u0275\u0275advance();
      \u0275\u0275property("displayWith", ctx.displayCountryFn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(15, 17, ctx.filteredCountries$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.portForm.get("country_id")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.portForm.get("country_id")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("matAutocomplete", autoPort_r34)("readonly", ctx.isEditMode && !ctx.portChecked);
      \u0275\u0275advance();
      \u0275\u0275property("displayWith", ctx.displayPortFn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(22, 19, ctx.filteredPorts$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.portForm.get("port_id")) == null ? null : tmp_14_0.hasError("required")) && ((tmp_14_0 = ctx.portForm.get("port_id")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditMode == true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.vesselFields.controls);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.tableDataSource == null ? null : ctx.tableDataSource.data);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update Port & Tariff" : "Save Port & Tariff");
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatIconModule,
    MatIcon,
    MatCheckbox,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    AsyncPipe,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    DragDropModule,
    CdkDropList,
    CdkDrag
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 20px;\n  margin-bottom: 0;\n  box-sizing: border-box;\n}\n.add-vessel-field[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 260px;\n  background-color: var(--color-action) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: var(--app-text-primary) !important;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.add-vessel-field[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 35px;\n  justify-content: space-between;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n.vessel-card[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin: 0px 4px 4px 0px;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  min-width: 200px;\n  flex: 0 0 auto;\n  gap: 9px;\n}\n.vessel-card-compact[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  margin: 2px;\n  background-color: #fafafa;\n  min-width: 200px;\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 8px;\n  font-size: 12px;\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n}\n.field-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  word-break: break-word;\n}\n.field-separator[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-weight: 300;\n}\n.field-type[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n}\n.field-required[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 4px;\n  border-radius: 2px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.edit-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: none;\n  border: none;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  color: #3C50E0;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.required-yes[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.required-no[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.vessel-card-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cecaca;\n}\n.scroll-vessel-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  max-width: 100%;\n  overflow: visible;\n}\n.add-port-tariff[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  align-items: center;\n  color: var(--app-text-primary) !important;\n  padding: 10px 24px;\n  border: none;\n  border-radius: 6px;\n  width: 100%;\n  height: 29px;\n  margin-left: 10px;\n  margin-top: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n  padding-top: 7px;\n}\n.add-port-tariff[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.table-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 280px);\n  overflow-y: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.no-data-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: var(--app-text-primary);\n  font-style: italic;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-error-muted);\n  cursor: pointer;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-error-muted);\n}\n  .cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  border: 2px solid var(--color-action);\n  opacity: 0.9;\n  z-index: 1000;\n}\n  .cdk-drag-placeholder {\n  opacity: 0.4;\n  background-color: var(--app-panel-bg);\n  border: 2px dashed var(--color-action);\n  border-radius: 4px;\n  min-height: 40px;\n}\n  .mat-icon[cdkdraghandle] {\n  cursor: grab;\n  color: #666;\n  transition: color 0.2s ease;\n}\n  .mat-icon[cdkdraghandle]:hover {\n  color: #3C50E0;\n}\n  .mat-icon[cdkdraghandle]:active {\n  cursor: grabbing;\n}\n  .cdk-drag-preview * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n  .cdk-drop-list-dragging tr[data-service-group] {\n  opacity: 0.3;\n  transition: opacity 0.2s ease;\n}\n  .cdk-drag-dragging {\n  opacity: 1 !important;\n  background-color: #e3f2fd !important;\n  border: 2px solid #3C50E0 !important;\n  box-shadow: 0 2px 8px rgba(60, 80, 224, 0.3) !important;\n}\n  .mat-column-empty-field {\n  width: 120px;\n  min-width: 120px;\n  padding: 8px;\n  text-align: center;\n  border-right: 1px solid #e0e0e0;\n}\n  .empty-field-cell {\n  background-color: #fafafa;\n  border: 1px dashed #ccc;\n  min-height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #999;\n  font-style: italic;\n}\n  .tariff-rules-table .mat-mdc-row td {\n  background-color: var(--color-bg-dark-2) !important;\n}\n  .tariff-rules-table .mat-mdc-row:hover td {\n  background-color: var(--app-panel-hover-bg) !important;\n}\n/*# sourceMappingURL=create-port-tariff.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePortTariffComponent, { className: "CreatePortTariffComponent" });
})();

export {
  CreatePortTariffComponent
};
//# sourceMappingURL=chunk-WN7UPNUV.js.map
