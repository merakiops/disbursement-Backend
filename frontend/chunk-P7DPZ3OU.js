import {
  MAT_FORM_FIELD,
  MAT_INPUT_VALUE_ACCESSOR,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig
} from "./chunk-3T2C4MET.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal
} from "./chunk-6WCQ44KD.js";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-KQHVW7GO.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MaxLengthValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  BACKSPACE,
  CdkMonitorFocus,
  CdkTrapFocus,
  DOWN_ARROW,
  DateAdapter,
  Directionality,
  END,
  ENTER,
  ESCAPE,
  ErrorStateMatcher,
  HOME,
  LEFT_ARROW,
  MAT_DATE_LOCALE,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  PlatformModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _getFocusedElementPierceShadowDom,
  coerceBooleanProperty,
  coerceStringArray,
  hasModifierKey,
  mixinColor,
  mixinErrorState
} from "./chunk-BAX6ITZM.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgModule,
  NgZone,
  Optional,
  Output,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  debounceTime,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  merge,
  of,
  output,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  untracked,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/@ngxmc/datetime-picker/fesm2022/ngxmc-datetime-picker.mjs
var _c0 = ["ngx-mat-calendar-body", ""];
function NgxMatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 0)(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding())("padding-bottom", ctx_r0._cellPadding());
    \u0275\u0275attribute("colspan", ctx_r0.numCols());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
function NgxMatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding())("padding-bottom", ctx_r0._cellPadding());
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset() >= ctx_r0.labelMinRequiredCells() ? ctx_r0.label() : "", " ");
  }
}
function NgxMatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 6)(1, "button", 7);
    \u0275\u0275listener("click", function NgxMatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r3, $event));
    })("focus", function NgxMatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_14_r4 = ctx.$index;
    const \u0275$index_7_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth())("padding-top", ctx_r0._cellPadding())("padding-bottom", ctx_r0._cellPadding());
    \u0275\u0275attribute("data-mat-row", \u0275$index_7_r5)("data-mat-col", \u0275$index_14_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    \u0275\u0275property("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue() === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue() === item_r3.compareValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.displayValue, " ");
  }
}
function NgxMatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 1);
    \u0275\u0275template(1, NgxMatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    \u0275\u0275repeaterCreate(2, NgxMatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const \u0275$index_7_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_7_r5 === 0 && ctx_r0._firstRowOffset() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6);
  }
}
function NgxMatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.long);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var _c1 = ["*"];
function NgxMatCalendar_ng_template_0_Template(rf, ctx) {
}
function NgxMatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-month-view", 4);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_Case_2_Template_ngx_mat_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("_userSelection", function NgxMatCalendar_Case_2_Template_ngx_mat_month_view__userSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dateSelected($event));
    })("dragStarted", function NgxMatCalendar_Case_2_Template_ngx_mat_month_view_dragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragStarted($event));
    })("dragEnded", function NgxMatCalendar_Case_2_Template_ngx_mat_month_view_dragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragEnded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter())("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass())("comparisonStart", ctx_r1.comparisonStart())("comparisonEnd", ctx_r1.comparisonEnd())("startDateAccessibleName", ctx_r1.startDateAccessibleName())("endDateAccessibleName", ctx_r1.endDateAccessibleName())("activeDrag", ctx_r1._activeDrag);
  }
}
function NgxMatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-year-view", 5);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_Case_3_Template_ngx_mat_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("monthSelected", function NgxMatCalendar_Case_3_Template_ngx_mat_year_view_monthSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function NgxMatCalendar_Case_3_Template_ngx_mat_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "month"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter())("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass());
  }
}
function NgxMatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-multi-year-view", 6);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_Case_4_Template_ngx_mat_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("yearSelected", function NgxMatCalendar_Case_4_Template_ngx_mat_multi_year_view_yearSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function NgxMatCalendar_Case_4_Template_ngx_mat_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "year"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter())("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass());
  }
}
var _c2 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c3 = ["input[matStartDate]", "input[matEndDate]"];
function NgxMatTimepickerComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 7);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_3_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.change("second", true));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "path", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.disableMinute());
  }
}
function NgxMatTimepickerComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 5)(1, "td");
  }
}
function NgxMatTimepickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 7);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("hour", true));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 8);
    \u0275\u0275element(5, "path", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementStart(7, "td")(8, "button", 7);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("minute", true));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "path", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(12, "td");
    \u0275\u0275template(13, NgxMatTimepickerComponent_Conditional_3_Conditional_13_Template, 5, 1, "td")(14, NgxMatTimepickerComponent_Conditional_3_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.disableMinute());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.showSeconds() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.enableMeridian() ? 14 : -1);
  }
}
function NgxMatTimepickerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 5);
    \u0275\u0275text(1, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td")(3, "mat-form-field", 3)(4, "input", 10);
    \u0275\u0275listener("input", function NgxMatTimepickerComponent_Conditional_13_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgxMatTimepickerComponent_Conditional_13_Template_input_keydown_ArrowUp_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.change("second", true);
      return \u0275\u0275resetView($event.preventDefault());
    })("keydown.ArrowDown", function NgxMatTimepickerComponent_Conditional_13_Template_input_keydown_ArrowDown_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.change("second", false);
      return \u0275\u0275resetView($event.preventDefault());
    })("blur", function NgxMatTimepickerComponent_Conditional_13_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("second"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx_r1.color());
  }
}
function NgxMatTimepickerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "td", 5);
    \u0275\u0275elementStart(1, "td", 11)(2, "button", 12);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridian());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r1.color())("disabled", ctx_r1.disabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.meridian, " ");
  }
}
function NgxMatTimepickerComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "td");
    \u0275\u0275elementStart(1, "td")(2, "button", 13);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_15_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.change("second", false));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 8);
    \u0275\u0275element(5, "path", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.disableMinute());
  }
}
function NgxMatTimepickerComponent_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 5)(1, "td");
  }
}
function NgxMatTimepickerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 13);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("hour", false));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 8);
    \u0275\u0275element(5, "path", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementStart(7, "td")(8, "button", 13);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_Conditional_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("minute", false));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "path", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, NgxMatTimepickerComponent_Conditional_15_Conditional_12_Template, 6, 1)(13, NgxMatTimepickerComponent_Conditional_15_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.disableMinute());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showSeconds() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.enableMeridian() ? 13 : -1);
  }
}
function NgxMatDatepickerContent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "ngx-mat-timepicker", 6);
    \u0275\u0275twoWayListener("ngModelChange", function NgxMatDatepickerContent_Conditional_2_Conditional_0_Template_ngx_mat_timepicker_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1._modelTime, $event) || (ctx_r1._modelTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NgxMatDatepickerContent_Conditional_2_Conditional_0_Template_ngx_mat_timepicker_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimeChanged($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("disable-seconds", !ctx_r1.datepicker._showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("showSpinners", ctx_r1.datepicker._showSpinners)("showSeconds", ctx_r1.datepicker._showSeconds)("disabled", ctx_r1.datepicker._disabled || !ctx_r1._modelTime)("stepHour", ctx_r1.datepicker._stepHour)("stepMinute", ctx_r1.datepicker._stepMinute)("stepSecond", ctx_r1.datepicker._stepSecond);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1._modelTime);
    \u0275\u0275property("color", ctx_r1.datepicker._color)("enableMeridian", ctx_r1.datepicker._enableMeridian)("disableMinute", ctx_r1.datepicker._disableMinute);
  }
}
function NgxMatDatepickerContent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxMatDatepickerContent_Conditional_2_Conditional_0_Template, 2, 12, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.datepicker._hideTime ? 0 : -1);
  }
}
function NgxMatDatepickerContent_ng_template_3_Template(rf, ctx) {
}
function NgxMatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _c4 = ["button"];
var _c5 = [[["", "ngxMatDatepickerToggleIcon", ""]]];
var _c6 = ["[ngxMatDatepickerToggleIcon]"];
function NgxMatDatepickerToggle_ProjectionFallback_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 3);
    \u0275\u0275elementEnd();
  }
}
var NGX_MAT_DATE_FORMATS = new InjectionToken("ngx-mat-date-formats");
var NgxMatDateAdapter = class extends DateAdapter {
  /**
   * Check if two date have same time
   * @param a Date 1
   * @param b Date 2
   */
  isSameTime(a, b) {
    if (a == null || b == null) return true;
    return this.getHour(a) === this.getHour(b) && this.getMinute(a) === this.getMinute(b) && this.getSecond(a) === this.getSecond(b);
  }
  /**
   * Copy time from a date to a another date
   * @param toDate
   * @param fromDate
   */
  copyTime(toDate, fromDate) {
    this.setHour(toDate, this.getHour(fromDate));
    this.setMinute(toDate, this.getMinute(fromDate));
    this.setSecond(toDate, this.getSecond(fromDate));
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDateWithTime(first, second, showSeconds) {
    let res = super.compareDate(first, second) || this.getHour(first) - this.getHour(second) || this.getMinute(first) - this.getMinute(second);
    if (showSeconds) {
      res = res || this.getSecond(first) - this.getSecond(second);
    }
    return res;
  }
  /**
   * Set time by using default values
   * @param defaultTime List default values [hour, minute, second]
   */
  setTimeByDefaultValues(date, defaultTime) {
    if (!Array.isArray(defaultTime)) {
      throw Error("@Input DefaultTime should be an array");
    }
    this.setHour(date, defaultTime[0] || 0);
    this.setMinute(date, defaultTime[1] || 0);
    this.setSecond(date, defaultTime[2] || 0);
  }
};
var NgxDateRange = class {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var NgxMatDateSelectionModel = class _NgxMatDateSelectionModel {
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new Subject();
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
  static {
    this.\u0275fac = function NgxMatDateSelectionModel_Factory(__ngFactoryType__) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxMatDateSelectionModel,
      factory: _NgxMatDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: NgxMatDateAdapter
  }], null);
})();
var NgxMatSingleDateSelectionModel = class _NgxMatSingleDateSelectionModel extends NgxMatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _NgxMatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static {
    this.\u0275fac = function NgxMatSingleDateSelectionModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatSingleDateSelectionModel)(\u0275\u0275inject(NgxMatDateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxMatSingleDateSelectionModel,
      factory: _NgxMatSingleDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: NgxMatDateAdapter
  }], null);
})();
var NgxMatRangeDateSelectionModel = class _NgxMatRangeDateSelectionModel extends NgxMatDateSelectionModel {
  constructor(adapter) {
    super(new NgxDateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new NgxDateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _NgxMatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static {
    this.\u0275fac = function NgxMatRangeDateSelectionModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatRangeDateSelectionModel)(\u0275\u0275inject(NgxMatDateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxMatRangeDateSelectionModel,
      factory: _NgxMatRangeDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: NgxMatDateAdapter
  }], null);
})();
function NGX_MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new NgxMatSingleDateSelectionModel(adapter);
}
var NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: NgxMatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), NgxMatDateSelectionModel], NgxMatDateAdapter],
  useFactory: NGX_MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function NGX_MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new NgxMatRangeDateSelectionModel(adapter);
}
var NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: NgxMatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), NgxMatDateSelectionModel], NgxMatDateAdapter],
  useFactory: NGX_MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
function createMissingDateImplError$1(provider) {
  return Error(`NgxMatDatetimePicker: No provider found for ${provider}. You must import one of the following modules at your application root: NgxMatNativeDateModule, NgxMatMomentDateModule, or provide a custom implementation.`);
}
var NgxMatCalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var calendarBodyId = 1;
var NgxMatCalendarBody = class _NgxMatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = inject(Platform);
    this._focusActiveCellAfterViewChecked = false;
    this.label = input();
    this.rows = input();
    this.todayValue = input();
    this.startValue = input();
    this.endValue = input();
    this.labelMinRequiredCells = input();
    this.numCols = input(7);
    this.activeCell = input(0);
    this.isRange = input(false);
    this.cellAspectRatio = input(1);
    this.comparisonStart = input();
    this.comparisonEnd = input();
    this.previewStart = input(null);
    this.previewEnd = input(null);
    this.startDateAccessibleName = input();
    this.endDateAccessibleName = input();
    this.selectedValueChange = output();
    this.previewChange = output();
    this.activeDateChange = output();
    this.dragStarted = output();
    this.dragEnded = output();
    this._firstRowOffset = computed(() => {
      const rows = this.rows();
      const numCols = this.numCols();
      return rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    });
    this._cellPadding = computed(() => {
      const numCols = this.numCols();
      const cellAspectRatio = this.cellAspectRatio();
      return `${50 * cellAspectRatio / numCols}%`;
    });
    this._cellWidth = computed(() => {
      return `${100 / this.numCols()}%`;
    });
    this._didDragSinceMouseDown = false;
    this._enterHandler = (event) => {
      if (this._skipNextFocus && event.type === "focus") {
        this._skipNextFocus = false;
        return;
      }
      if (event.target && this.isRange()) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({
            value: cell.enabled ? cell : null,
            event
          }));
        }
      }
    };
    this._touchmoveHandler = (event) => {
      if (!this.isRange()) return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({
        value: cell?.enabled ? cell : null,
        event
      }));
    };
    this._leaveHandler = (event) => {
      if (this.previewEnd() !== null && this.isRange()) {
        if (event.type !== "blur") {
          this._didDragSinceMouseDown = true;
        }
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({
            value: null,
            event
          }));
        }
      }
    };
    this._mousedownHandler = (event) => {
      if (!this.isRange()) return;
      this._didDragSinceMouseDown = false;
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.rawValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    this._mouseupHandler = (event) => {
      if (!this.isRange()) return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        this._ngZone.run(() => {
          this.dragEnded.emit({
            value: null,
            event
          });
        });
        return;
      }
      if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
        return;
      }
      this._ngZone.run(() => {
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({
          value: cell?.rawValue ?? null,
          event
        });
      });
    };
    this._touchendHandler = (event) => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({
          target
        });
      }
    };
    this._id = `mat-calendar-body-${calendarBodyId++}`;
    this._startDateLabelId = `${this._id}-start-date`;
    this._endDateLabelId = `${this._id}-end-date`;
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      element.addEventListener("mouseenter", this._enterHandler, true);
      element.addEventListener("touchmove", this._touchmoveHandler, true);
      element.addEventListener("focus", this._enterHandler, true);
      element.addEventListener("mouseleave", this._leaveHandler, true);
      element.addEventListener("blur", this._leaveHandler, true);
      element.addEventListener("mousedown", this._mousedownHandler);
      element.addEventListener("touchstart", this._mousedownHandler);
      if (this._platform.isBrowser) {
        window.addEventListener("mouseup", this._mouseupHandler);
        window.addEventListener("touchend", this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue() === value || this.endValue() === value;
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener("mouseenter", this._enterHandler, true);
    element.removeEventListener("touchmove", this._touchmoveHandler, true);
    element.removeEventListener("focus", this._enterHandler, true);
    element.removeEventListener("mouseleave", this._leaveHandler, true);
    element.removeEventListener("blur", this._leaveHandler, true);
    element.removeEventListener("mousedown", this._mousedownHandler);
    element.removeEventListener("touchstart", this._mousedownHandler);
    if (this._platform.isBrowser) {
      window.removeEventListener("mouseup", this._mouseupHandler);
      window.removeEventListener("touchend", this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols() + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset();
    }
    return cellNumber == this.activeCell();
  }
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue(), this.endValue());
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue(), this.endValue());
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue(), this.endValue(), this.isRange());
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart(), this.comparisonEnd());
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows()[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows()[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows()[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows()[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart(), this.comparisonEnd());
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart(), this.comparisonEnd(), this.isRange());
  }
  _isComparisonIdentical(value) {
    return this.comparisonStart() === this.comparisonEnd() && value === this.comparisonStart();
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart(), this.previewEnd());
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart(), this.previewEnd());
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart(), this.previewEnd(), this.isRange());
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange()) {
      return null;
    }
    if (this.startValue() === value && this.endValue() === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue() === value) {
      return this._startDateLabelId;
    } else if (this.endValue() === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows()[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
  static {
    this.\u0275fac = function NgxMatCalendarBody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatCalendarBody)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatCalendarBody,
      selectors: [["", "ngx-mat-calendar-body", ""]],
      hostAttrs: [1, "ngx-mat-calendar-body"],
      inputs: {
        label: [1, "label"],
        rows: [1, "rows"],
        todayValue: [1, "todayValue"],
        startValue: [1, "startValue"],
        endValue: [1, "endValue"],
        labelMinRequiredCells: [1, "labelMinRequiredCells"],
        numCols: [1, "numCols"],
        activeCell: [1, "activeCell"],
        isRange: [1, "isRange"],
        cellAspectRatio: [1, "cellAspectRatio"],
        comparisonStart: [1, "comparisonStart"],
        comparisonEnd: [1, "comparisonEnd"],
        previewStart: [1, "previewStart"],
        previewEnd: [1, "previewEnd"],
        startDateAccessibleName: [1, "startDateAccessibleName"],
        endDateAccessibleName: [1, "endDateAccessibleName"]
      },
      outputs: {
        selectedValueChange: "selectedValueChange",
        previewChange: "previewChange",
        activeDateChange: "activeDateChange",
        dragStarted: "dragStarted",
        dragEnded: "dragEnded"
      },
      exportAs: ["matCalendarBody"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      attrs: _c0,
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
      template: function NgxMatCalendarBody_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgxMatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
          \u0275\u0275repeaterCreate(1, NgxMatCalendarBody_For_2_Template, 4, 1, "tr", 1, \u0275\u0275repeaterTrackByIndex);
          \u0275\u0275elementStart(3, "label", 2);
          \u0275\u0275text(4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "label", 2);
          \u0275\u0275text(6);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx._firstRowOffset() < ctx.labelMinRequiredCells() ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.rows());
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx._startDateLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.startDateAccessibleName(), "\n");
          \u0275\u0275advance();
          \u0275\u0275property("id", ctx._endDateLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.endDateAccessibleName(), "\n");
        }
      },
      dependencies: [NgClass],
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:start;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell-container .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;border:none;-webkit-tap-highlight-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell:before,.mat-calendar-body-cell:after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-comparison-start:after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0 999px 999px 0}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-comparison-end:after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:999px 0 0 999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-cell-content.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell:before,.cdk-high-contrast-active .mat-calendar-body-cell:after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range:before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start:before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end:before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start:before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start:before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end:before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end:before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range:before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start:before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start:before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end:before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end:before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendarBody, [{
    type: Component,
    args: [{
      selector: "[ngx-mat-calendar-body]",
      host: {
        class: "ngx-mat-calendar-body"
      },
      exportAs: "matCalendarBody",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgClass],
      template: `<!--
If there's not enough space in the first row, create a separate label row. We mark this row as
aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
@if (_firstRowOffset() < labelMinRequiredCells()) {
  <tr aria-hidden="true">
    <td
      class="mat-calendar-body-label"
      [attr.colspan]="numCols()"
      [style.paddingTop]="_cellPadding()"
      [style.paddingBottom]="_cellPadding()">
      {{ label() }}
    </td>
  </tr>
}

<!-- Create the first row separately so we can include a special spacer cell. -->
@for (row of rows(); track rowIndex; let rowIndex = $index) {
  <tr role="row">
    <!--
    This cell is purely decorative, but we can't put \`aria-hidden\` or \`role="presentation"\` on it,
    because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the
    table cells is maintained by setting the top and bottom padding as a percentage of the width
    (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).
    -->
    @if (rowIndex === 0 && _firstRowOffset()) {
      <td
        class="mat-calendar-body-label"
        [attr.colspan]="_firstRowOffset()"
        [style.paddingTop]="_cellPadding()"
        [style.paddingBottom]="_cellPadding()">
        {{ _firstRowOffset() >= labelMinRequiredCells() ? label() : '' }}
      </td>
    }
    <!--
    Each gridcell in the calendar contains a button, which signals to assistive technology that the
    cell is interactable, as well as the selection state via \`aria-pressed\`. See #23476 for
    background.
    -->
    @for (item of row; track colIndex; let colIndex = $index) {
      <td
        role="gridcell"
        class="mat-calendar-body-cell-container"
        [style.width]="_cellWidth()"
        [style.paddingTop]="_cellPadding()"
        [style.paddingBottom]="_cellPadding()"
        [attr.data-mat-row]="rowIndex"
        [attr.data-mat-col]="colIndex">
        <button
          type="button"
          class="mat-calendar-body-cell"
          [ngClass]="item.cssClasses"
          [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"
          [class.mat-calendar-body-disabled]="!item.enabled"
          [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
          [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"
          [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"
          [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"
          [class.mat-calendar-body-comparison-bridge-start]="
            _isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)
          "
          [class.mat-calendar-body-comparison-bridge-end]="
            _isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)
          "
          [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"
          [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"
          [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"
          [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"
          [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"
          [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"
          [attr.aria-label]="item.ariaLabel"
          [attr.aria-disabled]="!item.enabled || null"
          [attr.aria-pressed]="_isSelected(item.compareValue)"
          [attr.aria-current]="todayValue() === item.compareValue ? 'date' : null"
          [attr.aria-describedby]="_getDescribedby(item.compareValue)"
          (click)="_cellClicked(item, $event)"
          (focus)="_emitActiveDateChange(item, $event)">
          <span
            class="mat-calendar-body-cell-content mat-focus-indicator"
            [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"
            [class.mat-calendar-body-comparison-identical]="
              _isComparisonIdentical(item.compareValue)
            "
            [class.mat-calendar-body-today]="todayValue() === item.compareValue">
            {{ item.displayValue }}
          </span>
          <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>
        </button>
      </td>
    }
  </tr>
}

<label [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">
  {{ startDateAccessibleName() }}
</label>
<label [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">
  {{ endDateAccessibleName() }}
</label>
`,
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:start;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell-container .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;border:none;-webkit-tap-highlight-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell:before,.mat-calendar-body-cell:after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-comparison-start:after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0 999px 999px 0}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-comparison-end:after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:999px 0 0 999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-cell-content.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell:before,.cdk-high-contrast-active .mat-calendar-body-cell:after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range:before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start:before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end:before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start:before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start:before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end:before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end:before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range:before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start:before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start:before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end:before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end:before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
function isTableCell(node) {
  return node?.nodeName === "TD";
}
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute("data-mat-row") != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}
var NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("NGX_MAT_DATE_RANGE_SELECTION_STRATEGY");
var DefaultNgxMatCalendarRangeStrategy = class _DefaultNgxMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new NgxDateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new NgxDateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new NgxDateRange(start, end);
  }
  static {
    this.\u0275fac = function DefaultNgxMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultNgxMatCalendarRangeStrategy)(\u0275\u0275inject(NgxMatDateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultNgxMatCalendarRangeStrategy,
      factory: _DefaultNgxMatCalendarRangeStrategy.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultNgxMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{
    type: NgxMatDateAdapter
  }], null);
})();
function NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultNgxMatCalendarRangeStrategy(adapter);
}
var NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), NGX_MAT_DATE_RANGE_SELECTION_STRATEGY], NgxMatDateAdapter],
  useFactory: NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
var DAYS_PER_WEEK = 7;
var NgxMatMonthView = class _NgxMatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = Subscription.EMPTY;
    this.dateFilter = input();
    this.dateClass = input();
    this.comparisonStart = input();
    this.comparisonEnd = input();
    this.startDateAccessibleName = input();
    this.endDateAccessibleName = input();
    this.activeDrag = input(null);
    this.selectedChange = output();
    this._userSelection = output();
    this.dragStarted = output();
    this.dragEnded = output();
    this.activeDateChange = output();
    this._matCalendarBody = viewChild(NgxMatCalendarBody);
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError$1("NGX_MAT_DATE_FORMATS");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag()) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof NgxDateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag()) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody()._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag() && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag().value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag()) return;
    if (event.value) {
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag().value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass() ? this.dateClass()(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new NgxMatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter() || this.dateFilter()(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof NgxDateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart());
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd());
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter() || this.dateFilter()(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
  static {
    this.\u0275fac = function NgxMatMonthView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatMonthView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatMonthView,
      selectors: [["ngx-mat-month-view"]],
      viewQuery: function NgxMatMonthView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._matCalendarBody, NgxMatCalendarBody, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: [1, "dateFilter"],
        dateClass: [1, "dateClass"],
        comparisonStart: [1, "comparisonStart"],
        comparisonEnd: [1, "comparisonEnd"],
        startDateAccessibleName: [1, "startDateAccessibleName"],
        endDateAccessibleName: [1, "endDateAccessibleName"],
        activeDrag: [1, "activeDrag"]
      },
      outputs: {
        selectedChange: "selectedChange",
        _userSelection: "_userSelection",
        dragStarted: "dragStarted",
        dragEnded: "dragEnded",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["ngxMatMonthView"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 8,
      vars: 14,
      consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"], ["aria-hidden", "true"]],
      template: function NgxMatMonthView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275repeaterCreate(3, NgxMatMonthView_For_4_Template, 5, 2, "th", 2, \u0275\u0275repeaterTrackByIndex);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "tr");
          \u0275\u0275element(6, "th", 3);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "tbody", 4);
          \u0275\u0275listener("selectedValueChange", function NgxMatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
            return ctx._dateSelected($event);
          })("activeDateChange", function NgxMatMonthView_Template_tbody_activeDateChange_7_listener($event) {
            return ctx._updateActiveDate($event);
          })("previewChange", function NgxMatMonthView_Template_tbody_previewChange_7_listener($event) {
            return ctx._previewChanged($event);
          })("dragStarted", function NgxMatMonthView_Template_tbody_dragStarted_7_listener($event) {
            return ctx.dragStarted.emit($event);
          })("dragEnded", function NgxMatMonthView_Template_tbody_dragEnded_7_listener($event) {
            return ctx._dragEnded($event);
          })("keyup", function NgxMatMonthView_Template_tbody_keyup_7_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function NgxMatMonthView_Template_tbody_keydown_7_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx._weekdays);
          \u0275\u0275advance(4);
          \u0275\u0275property("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName())("endDateAccessibleName", ctx.endDateAccessibleName());
        }
      },
      dependencies: [NgxMatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatMonthView, [{
    type: Component,
    args: [{
      selector: "ngx-mat-month-view",
      exportAs: "ngxMatMonthView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead class="mat-calendar-table-header">\n    <tr>\n      @for (day of _weekdays; track $index) {\n        <th scope="col">\n          <span class="cdk-visually-hidden">{{ day.long }}</span>\n          <span aria-hidden="true">{{ day.narrow }}</span>\n        </th>\n      }\n    </tr>\n    <tr>\n      <th\n        aria-hidden="true"\n        class="mat-calendar-table-header-divider"\n        colspan="7"\n      ></th>\n    </tr>\n  </thead>\n  <tbody\n    ngx-mat-calendar-body\n    [label]="_monthLabel"\n    [rows]="_weeks"\n    [todayValue]="_todayDate!"\n    [startValue]="_rangeStart!"\n    [endValue]="_rangeEnd!"\n    [comparisonStart]="_comparisonRangeStart"\n    [comparisonEnd]="_comparisonRangeEnd"\n    [previewStart]="_previewStart"\n    [previewEnd]="_previewEnd"\n    [isRange]="_isRange"\n    [labelMinRequiredCells]="3"\n    [activeCell]="_dateAdapter.getDate(activeDate) - 1"\n    [startDateAccessibleName]="startDateAccessibleName()"\n    [endDateAccessibleName]="endDateAccessibleName()"\n    (selectedValueChange)="_dateSelected($event)"\n    (activeDateChange)="_updateActiveDate($event)"\n    (previewChange)="_previewChanged($event)"\n    (dragStarted)="dragStarted.emit($event)"\n    (dragEnded)="_dragEnded($event)"\n    (keyup)="_handleCalendarBodyKeyup($event)"\n    (keydown)="_handleCalendarBodyKeydown($event)"\n  ></tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY]
    }, {
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var NgxMatMultiYearView = class _NgxMatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.dateFilter = input();
    this.dateClass = input();
    this.selectedChange = output();
    this.yearSelected = output();
    this.activeDateChange = output();
    this._matCalendarBody = viewChild(NgxMatCalendarBody);
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody()._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass() ? this.dateClass()(date, "multi-year") : void 0;
    return new NgxMatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter()) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter()(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof NgxDateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
  static {
    this.\u0275fac = function NgxMatMultiYearView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatMultiYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatMultiYearView,
      selectors: [["ngx-mat-multi-year-view"]],
      viewQuery: function NgxMatMultiYearView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._matCalendarBody, NgxMatCalendarBody, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: [1, "dateFilter"],
        dateClass: [1, "dateClass"]
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["ngxMatMultiYearView"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 7,
      consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
      template: function NgxMatMultiYearView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275element(3, "th", 2);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "tbody", 3);
          \u0275\u0275listener("selectedValueChange", function NgxMatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._yearSelected($event);
          })("activeDateChange", function NgxMatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
            return ctx._updateActiveDate($event);
          })("keyup", function NgxMatMultiYearView_Template_tbody_keyup_4_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function NgxMatMultiYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
        }
      },
      dependencies: [NgxMatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatMultiYearView, [{
    type: Component,
    args: [{
      selector: "ngx-mat-multi-year-view",
      exportAs: "ngxMatMultiYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr>\n      <th class="mat-calendar-table-header-divider" colspan="4"></th>\n    </tr>\n  </thead>\n  <tbody\n    ngx-mat-calendar-body\n    [rows]="_years"\n    [todayValue]="_todayYear"\n    [startValue]="_selectedYear!"\n    [endValue]="_selectedYear!"\n    [numCols]="4"\n    [cellAspectRatio]="4 / 7"\n    [activeCell]="_getActiveCell()"\n    (selectedValueChange)="_yearSelected($event)"\n    (activeDateChange)="_updateActiveDate($event)"\n    (keyup)="_handleCalendarBodyKeyup($event)"\n    (keydown)="_handleCalendarBodyKeydown($event)"\n  ></tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var NgxMatYearView = class _NgxMatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.dateFilter = input();
    this.dateClass = input();
    this.selectedChange = output();
    this.monthSelected = output();
    this.activeDateChange = output();
    this._matCalendarBody = viewChild(NgxMatCalendarBody);
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError$1("NGX_MAT_DATE_FORMATS");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody()._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass() ? this.dateClass()(date, "year") : void 0;
    return new NgxMatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter()) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter()(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof NgxDateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
  static {
    this.\u0275fac = function NgxMatYearView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatYearView,
      selectors: [["ngx-mat-year-view"]],
      viewQuery: function NgxMatYearView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._matCalendarBody, NgxMatCalendarBody, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: [1, "dateFilter"],
        dateClass: [1, "dateClass"]
      },
      outputs: {
        selectedChange: "selectedChange",
        monthSelected: "monthSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["ngxMatYearView"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 9,
      consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
      template: function NgxMatYearView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275element(3, "th", 2);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "tbody", 3);
          \u0275\u0275listener("selectedValueChange", function NgxMatYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._monthSelected($event);
          })("activeDateChange", function NgxMatYearView_Template_tbody_activeDateChange_4_listener($event) {
            return ctx._updateActiveDate($event);
          })("keyup", function NgxMatYearView_Template_tbody_keyup_4_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function NgxMatYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
        }
      },
      dependencies: [NgxMatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatYearView, [{
    type: Component,
    args: [{
      selector: "ngx-mat-year-view",
      exportAs: "ngxMatYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr>\n      <th class="mat-calendar-table-header-divider" colspan="4"></th>\n    </tr>\n  </thead>\n  <tbody\n    ngx-mat-calendar-body\n    [label]="_yearLabel"\n    [rows]="_months"\n    [todayValue]="_todayMonth!"\n    [startValue]="_selectedMonth!"\n    [endValue]="_selectedMonth!"\n    [labelMinRequiredCells]="2"\n    [numCols]="4"\n    [cellAspectRatio]="4 / 7"\n    [activeCell]="_dateAdapter.getMonth(activeDate)"\n    (selectedValueChange)="_monthSelected($event)"\n    (activeDateChange)="_updateActiveDate($event)"\n    (keyup)="_handleCalendarBodyKeyup($event)"\n    (keydown)="_handleCalendarBodyKeydown($event)"></tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
var NgxMatDatepickerIntl = class _NgxMatDatepickerIntl {
  constructor() {
    this.changes = new Subject();
    this.calendarLabel = "Calendar";
    this.openCalendarLabel = "Open calendar";
    this.closeCalendarLabel = "Close calendar";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 24 years";
    this.nextMultiYearLabel = "Next 24 years";
    this.switchToMonthViewLabel = "Choose date";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.startDateLabel = "Start date";
    this.endDateLabel = "End date";
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
  static {
    this.\u0275fac = function NgxMatDatepickerIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxMatDatepickerIntl,
      factory: _NgxMatDatepickerIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var calendarHeaderId = 1;
var NgxMatCalendarHeader = class _NgxMatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = `mat-calendar-header-${calendarHeaderId++}`;
    this._periodButtonLabelId = `${this._id}-period-label`;
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == "month" ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      month: this._intl.prevMonthLabel,
      year: this._intl.prevYearLabel,
      "multi-year": this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      month: this._intl.nextMonthLabel,
      year: this._intl.nextYearLabel,
      "multi-year": this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
  static {
    this.\u0275fac = function NgxMatCalendarHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatCalendarHeader)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(forwardRef(() => NgxMatCalendar)), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatCalendarHeader,
      selectors: [["ngx-mat-calendar-header"]],
      exportAs: ["ngxMatCalendarHeader"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 13,
      vars: 11,
      consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"], [1, "mat-calendar-hidden-label", 3, "id"]],
      template: function NgxMatCalendarHeader_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
          \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_2_listener() {
            return ctx.currentPeriodClicked();
          });
          \u0275\u0275elementStart(3, "span", 3);
          \u0275\u0275text(4);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(5, "svg", 4);
          \u0275\u0275element(6, "polygon", 5);
          \u0275\u0275elementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(7, "div", 6);
          \u0275\u0275projection(8);
          \u0275\u0275elementStart(9, "button", 7);
          \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_9_listener() {
            return ctx.previousClicked();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(10, "button", 8);
          \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_10_listener() {
            return ctx.nextClicked();
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(11, "label", 9);
          \u0275\u0275text(12);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275attribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.periodButtonText);
          \u0275\u0275advance();
          \u0275\u0275classProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", !ctx.previousEnabled());
          \u0275\u0275attribute("aria-label", ctx.prevButtonLabel);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", !ctx.nextEnabled());
          \u0275\u0275attribute("aria-label", ctx.nextButtonLabel);
          \u0275\u0275advance();
          \u0275\u0275property("id", ctx._periodButtonLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate(ctx.periodButtonDescription);
        }
      },
      dependencies: [MatButton, MatIconButton],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendarHeader, [{
    type: Component,
    args: [{
      selector: "ngx-mat-calendar-header",
      exportAs: "ngxMatCalendarHeader",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatButton, MatIconButton],
      template: `<div class="mat-calendar-header">
  <div class="mat-calendar-controls">
    <button
      mat-button
      type="button"
      class="mat-calendar-period-button"
      (click)="currentPeriodClicked()"
      [attr.aria-label]="periodButtonLabel"
      [attr.aria-describedby]="_periodButtonLabelId"
      aria-live="polite"
    >
      <span aria-hidden="true">{{ periodButtonText }}</span>
      <svg
        class="mat-calendar-arrow"
        [class.mat-calendar-invert]="calendar.currentView !== 'month'"
        viewBox="0 0 10 5"
        focusable="false"
        aria-hidden="true"
      >
        <polygon points="0,0 5,5 10,0" />
      </svg>
    </button>

    <div class="mat-calendar-spacer"></div>

    <ng-content></ng-content>

    <button
      mat-icon-button
      type="button"
      class="mat-calendar-previous-button"
      [disabled]="!previousEnabled()"
      (click)="previousClicked()"
      [attr.aria-label]="prevButtonLabel"
    ></button>

    <button
      mat-icon-button
      type="button"
      class="mat-calendar-next-button"
      [disabled]="!nextEnabled()"
      (click)="nextClicked()"
      [attr.aria-label]="nextButtonLabel"
    ></button>
  </div>
</div>
<label [id]="_periodButtonLabelId" class="mat-calendar-hidden-label">{{
  periodButtonDescription
}}</label>
`
    }]
  }], () => [{
    type: NgxMatDatepickerIntl
  }, {
    type: NgxMatCalendar,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => NgxMatCalendar)]
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var NgxMatCalendar = class _NgxMatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    this.headerComponent = input();
    this._moveFocusOnNextTick = false;
    this.startView = input("month");
    this.dateFilter = input();
    this.dateClass = input();
    this.comparisonStart = input();
    this.comparisonEnd = input();
    this.startDateAccessibleName = input();
    this.endDateAccessibleName = input();
    this.selectedChange = output();
    this.yearSelected = output();
    this.monthSelected = output();
    this.viewChanged = output();
    this._userSelection = output();
    this._userDragDrop = output();
    this.monthView = viewChild(NgxMatMonthView);
    this.yearView = viewChild(NgxMatYearView);
    this.multiYearView = viewChild(NgxMatMultiYearView);
    this._activeDrag = null;
    this.stateChanges = new Subject();
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError$1("NGX_MAT_DATE_FORMATS");
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent() || NgxMatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView();
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const change = minDateChange || maxDateChange || changes["dateFilter"];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    const view = this._getCurrentViewComponent();
    view._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    if (event.value && this.selected) {
      this._dateAdapter.copyTime(event.value, this.selected);
    }
    const date = event.value;
    if (this.selected instanceof NgxDateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag) return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView() || this.yearView() || this.multiYearView();
  }
  static {
    this.\u0275fac = function NgxMatCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatCalendar)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatCalendar,
      selectors: [["ngx-mat-calendar"]],
      viewQuery: function NgxMatCalendar_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.monthView, NgxMatMonthView, 5);
          \u0275\u0275viewQuerySignal(ctx.yearView, NgxMatYearView, 5);
          \u0275\u0275viewQuerySignal(ctx.multiYearView, NgxMatMultiYearView, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(3);
        }
      },
      hostAttrs: [1, "mat-calendar"],
      inputs: {
        headerComponent: [1, "headerComponent"],
        startAt: "startAt",
        startView: [1, "startView"],
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: [1, "dateFilter"],
        dateClass: [1, "dateClass"],
        comparisonStart: [1, "comparisonStart"],
        comparisonEnd: [1, "comparisonEnd"],
        startDateAccessibleName: [1, "startDateAccessibleName"],
        endDateAccessibleName: [1, "endDateAccessibleName"]
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        viewChanged: "viewChanged",
        _userSelection: "_userSelection",
        _userDragDrop: "_userDragDrop"
      },
      exportAs: ["ngxMatCalendar"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 2,
      consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
      template: function NgxMatCalendar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgxMatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275template(2, NgxMatCalendar_Case_2_Template, 1, 11, "ngx-mat-month-view", 2)(3, NgxMatCalendar_Case_3_Template, 1, 6, "ngx-mat-year-view", 3)(4, NgxMatCalendar_Case_4_Template, 1, 6, "ngx-mat-multi-year-view", 3);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          \u0275\u0275property("cdkPortalOutlet", ctx._calendarHeaderPortal);
          \u0275\u0275advance(2);
          \u0275\u0275conditional((tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
        }
      },
      dependencies: [CdkPortalOutlet, CdkMonitorFocus, NgxMatMonthView, NgxMatYearView, NgxMatMultiYearView],
      styles: ['.mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{padding:0 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button:after,.mat-calendar-next-button:after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translate(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translate(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider:after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-body-cell-content:before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.mat-calendar-body-cell:focus .mat-focus-indicator:before{content:""}.mat-calendar-hidden-label{display:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendar, [{
    type: Component,
    args: [{
      selector: "ngx-mat-calendar",
      host: {
        class: "mat-calendar"
      },
      exportAs: "ngxMatCalendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      standalone: true,
      imports: [CdkPortalOutlet, CdkMonitorFocus, NgxMatMonthView, NgxMatYearView, NgxMatMultiYearView],
      template: `<ng-template [cdkPortalOutlet]="_calendarHeaderPortal" />

<div class="mat-calendar-content" cdkMonitorSubtreeFocus tabindex="-1">
  @switch (currentView) {
    @case ("month") {
      <ngx-mat-month-view
        [(activeDate)]="activeDate"
        [selected]="selected"
        [dateFilter]="dateFilter()"
        [maxDate]="maxDate"
        [minDate]="minDate"
        [dateClass]="dateClass()"
        [comparisonStart]="comparisonStart()"
        [comparisonEnd]="comparisonEnd()"
        [startDateAccessibleName]="startDateAccessibleName()"
        [endDateAccessibleName]="endDateAccessibleName()"
        (_userSelection)="_dateSelected($event)"
        (dragStarted)="_dragStarted($event)"
        (dragEnded)="_dragEnded($event)"
        [activeDrag]="_activeDrag"
      />
    }
    @case ("year") {
      <ngx-mat-year-view
        [(activeDate)]="activeDate"
        [selected]="selected"
        [dateFilter]="dateFilter()"
        [maxDate]="maxDate"
        [minDate]="minDate"
        [dateClass]="dateClass()"
        (monthSelected)="_monthSelectedInYearView($event)"
        (selectedChange)="_goToDateInView($event, 'month')"
      />
    }
    @case ("multi-year") {
      <ngx-mat-multi-year-view
        [(activeDate)]="activeDate"
        [selected]="selected"
        [dateFilter]="dateFilter()"
        [maxDate]="maxDate"
        [minDate]="minDate"
        [dateClass]="dateClass()"
        (yearSelected)="_yearSelectedInMultiYearView($event)"
        (selectedChange)="_goToDateInView($event, 'year')"
      />
    }
  }
</div>
`,
      styles: ['.mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{padding:0 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button:after,.mat-calendar-next-button:after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translate(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translate(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider:after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-body-cell-content:before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.mat-calendar-body-cell:focus .mat-focus-indicator:before{content:""}.mat-calendar-hidden-label{display:none}\n']
    }]
  }], () => [{
    type: NgxMatDatepickerIntl
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    startAt: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
var SUPPORTS_INTL_API;
try {
  SUPPORTS_INTL_API = typeof Intl != "undefined";
} catch {
  SUPPORTS_INTL_API = false;
}
var DEFAULT_MONTH_NAMES = {
  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
};
var DEFAULT_DATE_NAMES = range(31, (i) => String(i + 1));
var DEFAULT_DAY_OF_WEEK_NAMES = {
  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  narrow: ["S", "M", "T", "W", "T", "F", "S"]
};
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NgxMatNativeDateAdapter = class _NgxMatNativeDateAdapter extends NgxMatDateAdapter {
  constructor(matDateLocale, platform) {
    super();
    this.useUtcForDisplay = true;
    super.setLocale(matDateLocale);
    this.useUtcForDisplay = !platform.TRIDENT;
    this._clampDate = platform.TRIDENT || platform.EDGE;
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        month: style2,
        timeZone: "utc"
      });
      return range(12, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
    }
    return DEFAULT_MONTH_NAMES[style2];
  }
  getDateNames() {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        day: "numeric",
        timeZone: "utc"
      });
      return range(31, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DATE_NAMES;
  }
  getDayOfWeekNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        weekday: style2,
        timeZone: "utc"
      });
      return range(7, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DAY_OF_WEEK_NAMES[style2];
  }
  getYearName(date) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        year: "numeric",
        timeZone: "utc"
      });
      return this._stripDirectionalityCharacters(this._format(dtf, date));
    }
    return String(this.getYear(date));
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    if (SUPPORTS_INTL_API) {
      if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
        date = this.clone(date);
        date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
      }
      displayFormat = __spreadProps(__spreadValues({}, displayFormat), {
        timeZone: "utc"
      });
      const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
      return this._stripDirectionalityCharacters(this._format(dtf, date));
    }
    return this._stripDirectionalityCharacters(date.toDateString());
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  getHour(date) {
    return date.getHours();
  }
  getMinute(date) {
    return date.getMinutes();
  }
  getSecond(date) {
    return date.getSeconds();
  }
  setHour(date, value) {
    date.setHours(value);
  }
  setMinute(date, value) {
    date.setMinutes(value);
  }
  setSecond(date, value) {
    date.setSeconds(value);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const result = new Date(year, month, date);
    if (year >= 0 && year < 100) {
      result.setFullYear(this.getYear(result) - 1900);
    }
    return result;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
   * other browsers do not. We remove them to make output consistent and because they interfere with
   * date parsing.
   * @param str The string to strip direction characters from.
   * @returns The stripped string.
   */
  _stripDirectionalityCharacters(str) {
    return str.replace(/[\u200e\u200f]/g, "");
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  static {
    this.\u0275fac = function NgxMatNativeDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatNativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8), \u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxMatNativeDateAdapter,
      factory: _NgxMatNativeDateAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatNativeDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }, {
    type: Platform
  }], null);
})();
var DEFAULT_DATE_INPUT = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
var NGX_MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: DEFAULT_DATE_INPUT
  },
  display: {
    dateInput: DEFAULT_DATE_INPUT,
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var NgxNativeDateModule = class _NgxNativeDateModule {
  static {
    this.\u0275fac = function NgxNativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxNativeDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxNativeDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: NgxMatDateAdapter,
        useClass: NgxMatNativeDateAdapter
      }],
      imports: [PlatformModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxNativeDateModule, [{
    type: NgModule,
    args: [{
      imports: [PlatformModule],
      providers: [{
        provide: NgxMatDateAdapter,
        useClass: NgxMatNativeDateAdapter
      }]
    }]
  }], null, null);
})();
var NgxMatNativeDateModule = class _NgxMatNativeDateModule {
  static {
    this.\u0275fac = function NgxMatNativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatNativeDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxMatNativeDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: NGX_MAT_DATE_FORMATS,
        useValue: NGX_MAT_NATIVE_DATE_FORMATS
      }],
      imports: [NgxNativeDateModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatNativeDateModule, [{
    type: NgModule,
    args: [{
      imports: [NgxNativeDateModule],
      providers: [{
        provide: NGX_MAT_DATE_FORMATS,
        useValue: NGX_MAT_NATIVE_DATE_FORMATS
      }]
    }]
  }], null, null);
})();
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.("aria-labelledby")?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute("aria-label")?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = currentNode.getAttribute("placeholder")?.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = currentNode.getAttribute("title")?.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}
var NgxMatDatepickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var NgxMatDatepickerInputBase = class _NgxMatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this.dateChange = output();
    this.dateInput = output();
    this.stateChanges = new Subject();
    this._onTouched = () => {
    };
    this._validatorOnChange = () => {
    };
    this._cvaOnChange = () => {
    };
    this._valueChangesSubscription = Subscription.EMPTY;
    this._localeSubscription = Subscription.EMPTY;
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        matDatepickerParse: {
          text: this._elementRef.nativeElement.value
        }
      };
    };
    this._filterValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : {
        matDatepickerFilter: true
      };
    };
    this._minValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDateWithTime(min, controlValue) <= 0 ? null : {
        matDatetimePickerMin: {
          min,
          actual: controlValue
        }
      };
    };
    this._maxValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDateWithTime(max, controlValue) >= 0 ? null : {
        matDatetimePickerMax: {
          max,
          actual: controlValue
        }
      };
    };
    this._lastValueValid = false;
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError$1("NGX_MAT_DATE_FORMATS");
    }
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const isSameTime = this._dateAdapter.isSameTime(date, this.value);
    const isSameDate = this._dateAdapter.sameDate(date, this.value);
    const isSame = isSameDate && isSameTime;
    const hasChanged = !isSame;
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
  static {
    this.\u0275fac = function NgxMatDatepickerInputBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerInputBase)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerInputBase,
      inputs: {
        value: "value",
        disabled: "disabled"
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerInputBase, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
var NGX_MAT_DATE_RANGE_INPUT_PARENT = new InjectionToken("NGX_MAT_DATE_RANGE_INPUT_PARENT");
var NgxMatDateRangeInputPartBase = class _NgxMatDateRangeInputPartBase extends NgxMatDatepickerInputBase {
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    super(_elementRef, dateAdapter, dateFormats);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = inject(Directionality, {
      optional: true
    });
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
  static {
    this.\u0275fac = function NgxMatDateRangeInputPartBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDateRangeInputPartBase)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDateRangeInputPartBase,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangeInputPartBase, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }], null);
})();
var _NgxMatDateRangeInputBase = mixinErrorState(NgxMatDateRangeInputPartBase);
var NgxMatStartDate = class _NgxMatStartDate extends _NgxMatDateRangeInputBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._startValidator = (control) => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
        matStartDateInvalid: {
          end,
          actual: start
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._startValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new NgxDateRange(value, this._model.selection.end);
      this._model.updateSelection(range2, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static {
    this.\u0275fac = function NgxMatStartDate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatStartDate)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatStartDate,
      selectors: [["input", "ngxMatStartDate", ""]],
      hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
      hostVars: 5,
      hostBindings: function NgxMatStartDate_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NgxMatStartDate_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function NgxMatStartDate_change_HostBindingHandler() {
            return ctx._onChange();
          })("keydown", function NgxMatStartDate_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("blur", function NgxMatStartDate_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
        }
      },
      inputs: {
        errorStateMatcher: "errorStateMatcher"
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: _NgxMatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: _NgxMatStartDate,
        multi: true
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatStartDate]",
      host: {
        class: "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        type: "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: NgxMatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      inputs: ["errorStateMatcher"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }], null);
})();
var NgxMatEndDate = class _NgxMatEndDate extends _NgxMatDateRangeInputBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._endValidator = (control) => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
        matEndDateInvalid: {
          start,
          actual: end
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._endValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new NgxDateRange(this._model.selection.start, value);
      this._model.updateSelection(range2, this);
    }
  }
  _onKeydown(event) {
    const startInput = this._rangeInput._startInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      startInput.focus();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      const endPosition = startInput._elementRef.nativeElement.value.length;
      startInput._elementRef.nativeElement.setSelectionRange(endPosition, endPosition);
      startInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static {
    this.\u0275fac = function NgxMatEndDate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatEndDate)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatEndDate,
      selectors: [["input", "ngxMatEndDate", ""]],
      hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
      hostVars: 5,
      hostBindings: function NgxMatEndDate_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NgxMatEndDate_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function NgxMatEndDate_change_HostBindingHandler() {
            return ctx._onChange();
          })("keydown", function NgxMatEndDate_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("blur", function NgxMatEndDate_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
        }
      },
      inputs: {
        errorStateMatcher: "errorStateMatcher"
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: _NgxMatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: _NgxMatEndDate,
        multi: true
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatEndDate]",
      host: {
        class: "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        type: "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: NgxMatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      inputs: ["errorStateMatcher"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }], null);
})();
var nextUniqueId = 0;
var NgxMatDateRangeInput = class _NgxMatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || "";
    const end = this._endInput?._getPlaceholder() || "";
    return start || end ? `${start} ${this.separator} ${end}` : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._groupDisabled) {
      this._groupDisabled = newValue;
      this.stateChanges.next(void 0);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this.id = `mat-date-range-input-${nextUniqueId++}`;
    this.focused = false;
    this.controlType = "mat-date-range-input";
    this._groupDisabled = false;
    this._ariaDescribedBy = null;
    this.separator = "\u2013";
    this.comparisonStart = null;
    this.comparisonEnd = null;
    this.stateChanges = new Subject();
    if (!_dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    if (_formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      _elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (!this._startInput) {
      throw Error("mat-date-range-input must contain a matStartDate input");
    }
    if (!this._endInput) {
      throw Error("mat-date-range-input must contain a matEndDate input");
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input2 = part === "start" ? this._startInput : this._endInput;
    return input2 ? input2.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(Validators.required);
  }
  static {
    this.\u0275fac = function NgxMatDateRangeInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDateRangeInput)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ControlContainer, 10), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDateRangeInput,
      selectors: [["ngx-mat-date-range-input"]],
      contentQueries: function NgxMatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgxMatStartDate, 5);
          \u0275\u0275contentQuery(dirIndex, NgxMatEndDate, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._startInput = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._endInput = _t.first);
        }
      },
      hostAttrs: ["role", "group", 1, "mat-date-range-input"],
      hostVars: 8,
      hostBindings: function NgxMatDateRangeInput_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
          \u0275\u0275classProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
        }
      },
      inputs: {
        rangePicker: "rangePicker",
        required: "required",
        dateFilter: "dateFilter",
        min: "min",
        max: "max",
        disabled: "disabled",
        separator: "separator",
        comparisonStart: "comparisonStart",
        comparisonEnd: "comparisonEnd"
      },
      exportAs: ["ngxMatDateRangeInput"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MatFormFieldControl,
        useExisting: _NgxMatDateRangeInput
      }, {
        provide: NGX_MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: _NgxMatDateRangeInput
      }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c3,
      decls: 11,
      vars: 5,
      consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
      template: function NgxMatDateRangeInput_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c2);
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275listener("cdkFocusChange", function NgxMatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
            return ctx._updateFocus($event);
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementStart(3, "span", 2);
          \u0275\u0275text(4);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(5, "span", 3);
          \u0275\u0275text(6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "div", 4);
          \u0275\u0275projection(8, 1);
          \u0275\u0275elementStart(9, "span", 2);
          \u0275\u0275text(10);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate(ctx._getInputMirrorValue("start"));
          \u0275\u0275advance();
          \u0275\u0275classProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate(ctx.separator);
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate(ctx._getInputMirrorValue("end"));
        }
      },
      dependencies: [CdkMonitorFocus],
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity .4s .1333333333333s cubic-bezier(.25,.8,.25,1);margin:0 4px}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangeInput, [{
    type: Component,
    args: [{
      selector: "ngx-mat-date-range-input",
      exportAs: "ngxMatDateRangeInput",
      host: {
        class: "mat-date-range-input",
        "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
        "[class.mat-date-range-input-required]": "required",
        "[attr.id]": "id",
        role: "group",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedBy",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: NgxMatDateRangeInput
      }, {
        provide: NGX_MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: NgxMatDateRangeInput
      }],
      standalone: true,
      imports: [CdkMonitorFocus],
      template: '<div\n  class="mat-date-range-input-container"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)="_updateFocus($event)"\n>\n  <div class="mat-date-range-input-wrapper">\n    <ng-content select="input[matStartDate]"></ng-content>\n    <span class="mat-date-range-input-mirror" aria-hidden="true">{{\n      _getInputMirrorValue("start")\n    }}</span>\n  </div>\n\n  <span\n    class="mat-date-range-input-separator"\n    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()"\n    >{{ separator }}</span\n  >\n\n  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">\n    <ng-content select="input[matEndDate]"></ng-content>\n    <span class="mat-date-range-input-mirror" aria-hidden="true">{{\n      _getInputMirrorValue("end")\n    }}</span>\n  </div>\n</div>\n',
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity .4s .1333333333333s cubic-bezier(.25,.8,.25,1);margin:0 4px}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    rangePicker: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    separator: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    _startInput: [{
      type: ContentChild,
      args: [NgxMatStartDate]
    }],
    _endInput: [{
      type: ContentChild,
      args: [NgxMatEndDate]
    }]
  });
})();
var ngxMatDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: trigger("transformPanel", [transition("void => enter-dropdown", animate("120ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(1, 0.8)"
  }), style({
    opacity: 1,
    transform: "scale(1, 1)"
  })]))), transition("void => enter-dialog", animate("150ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(0.7)"
  }), style({
    transform: "none",
    opacity: 1
  })]))), transition("* => void", animate("100ms linear", style({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: trigger("fadeInCalendar", [
    state("void", style({
      opacity: 0
    })),
    state("enter", style({
      opacity: 1
    })),
    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition("void => *", animate("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))
  ])
};
var LIMIT_TIMES = {
  minHour: 0,
  maxHour: 24,
  minMinute: 0,
  maxMinute: 60,
  minSecond: 0,
  maxSecond: 60,
  meridian: 12
};
var MERIDIANS = {
  AM: "AM",
  PM: "PM"
};
var DEFAULT_STEP = 1;
var NUMERIC_REGEX = /[^0-9]/g;
var PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
var PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
var PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
function formatTwoDigitTimeValue(val) {
  const txt = val.toString();
  return txt.length > 1 ? txt : `0${txt}`;
}
function createMissingDateImplError(provider) {
  return Error(`NgxMatDatetimePicker: No provider found for ${provider}. You must import one of the following modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a custom implementation.`);
}
var NgxMatTimepickerComponent = class _NgxMatTimepickerComponent {
  /** Hour */
  get hour() {
    let val = Number(this.form.controls["hour"].value);
    return Number.isNaN(val) ? 0 : val;
  }
  get minute() {
    let val = Number(this.form.controls["minute"].value);
    return Number.isNaN(val) ? 0 : val;
  }
  get second() {
    let val = Number(this.form.controls["second"].value);
    return Number.isNaN(val) ? 0 : val;
  }
  /** Whether or not the form is valid */
  get valid() {
    return this.form.valid;
  }
  constructor(_dateAdapter, cd, formBuilder) {
    this._dateAdapter = _dateAdapter;
    this.cd = cd;
    this.formBuilder = formBuilder;
    this.disabled = input(false);
    this.showSpinners = input(true);
    this.stepHour = input(DEFAULT_STEP);
    this.stepMinute = input(DEFAULT_STEP);
    this.stepSecond = input(DEFAULT_STEP);
    this.showSeconds = input(false);
    this.disableMinute = input(false);
    this.enableMeridian = input(false);
    this.defaultTime = input();
    this.color = input("primary");
    this.meridian = MERIDIANS.AM;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._destroyed = new Subject();
    this.pattern = PATTERN_INPUT_HOUR;
    if (!this._dateAdapter) {
      throw createMissingDateImplError("NgxMatDateAdapter");
    }
    this.form = this.formBuilder.group({
      hour: [{
        value: null,
        disabled: this.disabled()
      }, [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)]],
      minute: [{
        value: null,
        disabled: this.disabled()
      }, [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)]],
      second: [{
        value: null,
        disabled: this.disabled()
      }, [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)]]
    });
  }
  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((val) => {
      this._updateModel();
    });
  }
  ngOnChanges(changes) {
    if (changes.disabled || changes.disableMinute) {
      this._setDisableStates();
    }
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Writes a new value to the element.
   * @param obj
   */
  writeValue(val) {
    if (val != null) {
      this._model = val;
      this._updateHourMinuteSecond();
    }
  }
  /** Registers a callback function that is called when the control's value changes in the UI. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Enables or disables the appropriate DOM element */
  setDisabledState(isDisabled) {
    this._disabled = isDisabled;
    this.cd.markForCheck();
  }
  /**
   * Format input
   * @param input
   */
  formatInput(input2) {
    input2.value = input2.value.replace(NUMERIC_REGEX, "");
  }
  /** Toggle meridian */
  toggleMeridian() {
    this.meridian = this.meridian === MERIDIANS.AM ? MERIDIANS.PM : MERIDIANS.AM;
    this.change("hour");
  }
  /** Change property of time */
  change(prop, up) {
    const next = this._getNextValueByProp(prop, up);
    this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), {
      onlySelf: false,
      emitEvent: false
    });
    this._updateModel();
  }
  /** Update controls of form by model */
  _updateHourMinuteSecond() {
    let _hour = this._dateAdapter.getHour(this._model);
    const _minute = this._dateAdapter.getMinute(this._model);
    const _second = this._dateAdapter.getSecond(this._model);
    if (this.enableMeridian()) {
      if (_hour >= LIMIT_TIMES.meridian) {
        _hour = _hour - LIMIT_TIMES.meridian;
        this.meridian = MERIDIANS.PM;
      } else {
        this.meridian = MERIDIANS.AM;
      }
      if (_hour === 0) {
        _hour = LIMIT_TIMES.meridian;
      }
    }
    this.form.patchValue({
      hour: formatTwoDigitTimeValue(_hour),
      minute: formatTwoDigitTimeValue(_minute),
      second: formatTwoDigitTimeValue(_second)
    }, {
      emitEvent: false
    });
  }
  /** Update model */
  _updateModel() {
    let _hour = this.hour;
    if (this.enableMeridian()) {
      if (this.meridian === MERIDIANS.AM && _hour === LIMIT_TIMES.meridian) {
        _hour = 0;
      } else if (this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
        _hour = _hour + LIMIT_TIMES.meridian;
      }
    }
    if (this._model) {
      const clonedModel = this._dateAdapter.clone(this._model);
      this._dateAdapter.setHour(clonedModel, _hour);
      this._dateAdapter.setMinute(clonedModel, this.minute);
      this._dateAdapter.setSecond(clonedModel, this.second);
      this._onChange(clonedModel);
    }
  }
  /**
   * Get next value by property
   * @param prop
   * @param up
   */
  _getNextValueByProp(prop, up) {
    const keyProp = prop[0].toUpperCase() + prop.slice(1);
    const min = LIMIT_TIMES[`min${keyProp}`];
    let max = LIMIT_TIMES[`max${keyProp}`];
    if (prop === "hour" && this.enableMeridian()) {
      max = LIMIT_TIMES.meridian;
    }
    let next;
    if (up == null) {
      next = this[prop] % max;
      if (prop === "hour" && this.enableMeridian()) {
        if (next === 0) next = max;
      }
    } else {
      next = up ? this[prop] + this[`step${keyProp}`]() : this[prop] - this[`step${keyProp}`]();
      if (prop === "hour" && this.enableMeridian()) {
        next = next % (max + 1);
        if (next === 0) next = up ? 1 : max;
      } else {
        next = next % max;
      }
      if (up) {
        next = next > max ? next - max + min : next;
      } else {
        next = next < min ? next - min + max : next;
      }
    }
    return next;
  }
  /**
   * Set disable states
   */
  _setDisableStates() {
    if (this.disabled()) {
      this.form.disable();
    } else {
      this.form.enable();
      if (this.disableMinute()) {
        this.form.get("minute").disable();
        if (this.showSeconds()) {
          this.form.get("second").disable();
        }
      }
    }
  }
  static {
    this.\u0275fac = function NgxMatTimepickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatTimepickerComponent)(\u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatTimepickerComponent,
      selectors: [["ngx-mat-timepicker"]],
      hostAttrs: [1, "ngx-mat-timepicker"],
      inputs: {
        disabled: [1, "disabled"],
        showSpinners: [1, "showSpinners"],
        stepHour: [1, "stepHour"],
        stepMinute: [1, "stepMinute"],
        stepSecond: [1, "stepSecond"],
        showSeconds: [1, "showSeconds"],
        disableMinute: [1, "disableMinute"],
        enableMeridian: [1, "enableMeridian"],
        defaultTime: [1, "defaultTime"],
        color: [1, "color"]
      },
      exportAs: ["ngxMatTimepicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgxMatTimepickerComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 16,
      vars: 7,
      consts: [[3, "formGroup"], [1, "ngx-mat-timepicker-table"], [1, "ngx-mat-timepicker-tbody"], ["appearance", "fill", 3, "color"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "hour", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-spacer"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "minute", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_less icon", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18 15l-6-6-6 6"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "second", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-meridian"], ["mat-button", "", "mat-stroked-button", "", 3, "click", "color", "disabled"], ["type", "button", "mat-icon-button", "", "aria-label", "keyboard_arrow_down icon", 3, "click", "disabled"], ["d", "M6 9l6 6 6-6"]],
      template: function NgxMatTimepickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "form", 0)(1, "table", 1)(2, "tbody", 2);
          \u0275\u0275template(3, NgxMatTimepickerComponent_Conditional_3_Template, 15, 4, "tr");
          \u0275\u0275elementStart(4, "tr")(5, "td")(6, "mat-form-field", 3)(7, "input", 4);
          \u0275\u0275listener("input", function NgxMatTimepickerComponent_Template_input_input_7_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_7_listener($event) {
            ctx.change("hour", true);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_7_listener($event) {
            ctx.change("hour", false);
            return $event.preventDefault();
          })("blur", function NgxMatTimepickerComponent_Template_input_blur_7_listener() {
            return ctx.change("hour");
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(8, "td", 5);
          \u0275\u0275text(9, ":");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(10, "td")(11, "mat-form-field", 3)(12, "input", 6);
          \u0275\u0275listener("input", function NgxMatTimepickerComponent_Template_input_input_12_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_12_listener($event) {
            ctx.change("minute", true);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_12_listener($event) {
            ctx.change("minute", false);
            return $event.preventDefault();
          })("blur", function NgxMatTimepickerComponent_Template_input_blur_12_listener() {
            return ctx.change("minute");
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275template(13, NgxMatTimepickerComponent_Conditional_13_Template, 5, 1)(14, NgxMatTimepickerComponent_Conditional_14_Template, 4, 3);
          \u0275\u0275elementEnd();
          \u0275\u0275template(15, NgxMatTimepickerComponent_Conditional_15_Template, 14, 4, "tr");
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.showSpinners() ? 3 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("color", ctx.color());
          \u0275\u0275advance(5);
          \u0275\u0275property("color", ctx.color());
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showSeconds() ? 13 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.enableMeridian() ? 14 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSpinners() ? 15 : -1);
        }
      },
      dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon],
      styles: [".ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button{min-width:64px;line-height:36px;min-width:0;border-radius:50%;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button{height:24px;width:24px;line-height:24px;padding:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button:disabled svg{stroke:var(--mdc-icon-button-disabled-icon-color)}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field{width:24px;max-width:24px;text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay{background-color:transparent}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled{background-color:transparent!important;padding:0!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix{padding:4px 0;min-height:1px!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input{text-align:center;font-size:14px}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker",
      host: {
        class: "ngx-mat-timepicker"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxMatTimepickerComponent),
        multi: true
      }],
      exportAs: "ngxMatTimepicker",
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
      template: `<form [formGroup]="form">
  <table class="ngx-mat-timepicker-table">
    <tbody class="ngx-mat-timepicker-tbody">
      @if (showSpinners()) {
        <tr>
          <td>
            <button
              type="button"
              mat-icon-button
              aria-label="expand_less icon"
              (click)="change('hour', true)"
              [disabled]="disabled()">
              <mat-icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </mat-icon>
            </button>
          </td>
          <td></td>
          <td>
            <button
              type="button"
              mat-icon-button
              aria-label="expand_less icon"
              (click)="change('minute', true)"
              [disabled]="disabled() || disableMinute()">
              <mat-icon
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 15l-6-6-6 6" /></svg
              ></mat-icon>
            </button>
          </td>
          <td></td>
          @if (showSeconds()) {
            <td>
              <button
                type="button"
                mat-icon-button
                aria-label="expand_less icon"
                (click)="change('second', true)"
                [disabled]="disabled() || disableMinute()">
                <mat-icon
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M18 15l-6-6-6 6" /></svg
                ></mat-icon>
              </button>
            </td>
          }
          @if (enableMeridian()) {
            <td class="ngx-mat-timepicker-spacer"></td>
            <td></td>
          }
        </tr>
      }

      <tr>
        <td>
          <mat-form-field appearance="fill" [color]="color()">
            <input
              type="text"
              matInput
              (input)="formatInput($any($event).target)"
              maxlength="2"
              formControlName="hour"
              (keydown.ArrowUp)="change('hour', true); $event.preventDefault()"
              (keydown.ArrowDown)="change('hour', false); $event.preventDefault()"
              (blur)="change('hour')" />
          </mat-form-field>
        </td>
        <td class="ngx-mat-timepicker-spacer">&#58;</td>
        <td>
          <mat-form-field appearance="fill" [color]="color()">
            <input
              type="text"
              matInput
              (input)="formatInput($any($event).target)"
              maxlength="2"
              formControlName="minute"
              (keydown.ArrowUp)="change('minute', true); $event.preventDefault()"
              (keydown.ArrowDown)="change('minute', false); $event.preventDefault()"
              (blur)="change('minute')" />
          </mat-form-field>
        </td>
        @if (showSeconds()) {
          <td class="ngx-mat-timepicker-spacer">&#58;</td>
          <td>
            <mat-form-field appearance="fill" [color]="color()">
              <input
                type="text"
                matInput
                (input)="formatInput($any($event).target)"
                maxlength="2"
                formControlName="second"
                (keydown.ArrowUp)="change('second', true); $event.preventDefault()"
                (keydown.ArrowDown)="change('second', false); $event.preventDefault()"
                (blur)="change('second')" />
            </mat-form-field>
          </td>
        }

        @if (enableMeridian()) {
          <td class="ngx-mat-timepicker-spacer"></td>

          <td class="ngx-mat-timepicker-meridian">
            <button
              mat-button
              (click)="toggleMeridian()"
              mat-stroked-button
              [color]="color()"
              [disabled]="disabled()">
              {{ meridian }}
            </button>
          </td>
        }
      </tr>

      @if (showSpinners()) {
        <tr>
          <td>
            <button
              type="button"
              mat-icon-button
              aria-label="keyboard_arrow_down icon"
              (click)="change('hour', false)"
              [disabled]="disabled()">
              <mat-icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </mat-icon>
            </button>
          </td>
          <td></td>
          <td>
            <button
              type="button"
              mat-icon-button
              aria-label="keyboard_arrow_down icon"
              (click)="change('minute', false)"
              [disabled]="disabled() || disableMinute()">
              <mat-icon
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" /></svg
              ></mat-icon>
            </button>
          </td>
          @if (showSeconds()) {
            <td></td>

            <td>
              <button
                type="button"
                mat-icon-button
                aria-label="keyboard_arrow_down icon"
                (click)="change('second', false)"
                [disabled]="disabled() || disableMinute()">
                <mat-icon
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M6 9l6 6 6-6" /></svg
                ></mat-icon>
              </button>
            </td>
          }

          @if (enableMeridian()) {
            <td class="ngx-mat-timepicker-spacer"></td>
            <td></td>
          }
        </tr>
      }
    </tbody>
  </table>
</form>
`,
      styles: [".ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button{min-width:64px;line-height:36px;min-width:0;border-radius:50%;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button{height:24px;width:24px;line-height:24px;padding:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button:disabled svg{stroke:var(--mdc-icon-button-disabled-icon-color)}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field{width:24px;max-width:24px;text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay{background-color:transparent}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled{background-color:transparent!important;padding:0!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix{padding:4px 0;min-height:1px!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input{text-align:center;font-size:14px}\n"]
    }]
  }], () => [{
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: FormBuilder
  }], null);
})();
var datepickerUid = 0;
var NGX_MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("ngx-mat-datepicker-scroll-strategy");
function NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: NGX_MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var _NgxMatDatepickerContentBase = mixinColor(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
});
var NgxMatDatepickerContent = class _NgxMatDatepickerContent extends _NgxMatDatepickerContentBase {
  get isViewMonth() {
    if (!this._calendar() || this._calendar().currentView == null) return true;
    return this._calendar().currentView == "month";
  }
  constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new Subscription();
    this._calendar = viewChild.required(NgxMatCalendar);
    this._animationDone = new Subject();
    this._isAnimating = false;
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
    effect(() => {
      const calendar = this._calendar();
      if (calendar) {
        calendar.focusActiveCell();
      }
    });
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? "enter-dialog" : "enter-dropdown";
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  onTimeChanged(selectedDateWithTime) {
    const userEvent = {
      value: selectedDateWithTime,
      event: null
    };
    this._updateUserSelectionWithCalendarUserEvent(userEvent);
  }
  _handleUserSelection(event) {
    this._updateUserSelectionWithCalendarUserEvent(event);
    if (this.datepicker.hideTime) {
      if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
        this.datepicker.close();
      }
    }
  }
  _updateUserSelectionWithCalendarUserEvent(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof NgxDateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else {
      const isSameTime = this._dateAdapter.isSameTime(selection, value);
      const isSameDate = this._dateAdapter.sameDate(value, selection);
      const isSame = isSameDate && isSameTime;
      if (value && (isRange || !isSame)) {
        this._model.add(value);
      }
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = "void";
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === "start";
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    this._modelTime = this._model.selection;
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  _clearSelection() {
    this._globalModel.updateSelection(null, this);
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
  static {
    this.\u0275fac = function NgxMatDatepickerContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerContent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxMatDateSelectionModel), \u0275\u0275directiveInject(NgxMatDateAdapter), \u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, 8), \u0275\u0275directiveInject(NgxMatDatepickerIntl));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDatepickerContent,
      selectors: [["ngx-mat-datepicker-content"]],
      viewQuery: function NgxMatDatepickerContent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._calendar, NgxMatCalendar, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      hostAttrs: [1, "mat-datepicker-content"],
      hostVars: 5,
      hostBindings: function NgxMatDatepickerContent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275syntheticHostListener("@transformPanel.start", function NgxMatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
            return ctx._handleAnimationEvent($event);
          })("@transformPanel.done", function NgxMatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
            return ctx._handleAnimationEvent($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275syntheticHostProperty("@transformPanel", ctx._animationState);
          \u0275\u0275classProp("mat-datepicker-content-touch", ctx.datepicker.touchUi)("mat-datepicker-content-touch-with-time", !ctx.datepicker.hideTime);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["ngxMatDatepickerContent"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 6,
      vars: 29,
      consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"], [1, "time-container", 3, "disable-seconds"], [1, "time-container"], [3, "ngModelChange", "showSpinners", "showSeconds", "disabled", "stepHour", "stepMinute", "stepSecond", "ngModel", "color", "enableMeridian", "disableMinute"]],
      template: function NgxMatDatepickerContent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "ngx-mat-calendar", 1);
          \u0275\u0275listener("yearSelected", function NgxMatDatepickerContent_Template_ngx_mat_calendar_yearSelected_1_listener($event) {
            return ctx.datepicker._selectYear($event);
          })("monthSelected", function NgxMatDatepickerContent_Template_ngx_mat_calendar_monthSelected_1_listener($event) {
            return ctx.datepicker._selectMonth($event);
          })("viewChanged", function NgxMatDatepickerContent_Template_ngx_mat_calendar_viewChanged_1_listener($event) {
            return ctx.datepicker._viewChanged($event);
          })("_userSelection", function NgxMatDatepickerContent_Template_ngx_mat_calendar__userSelection_1_listener($event) {
            return ctx._handleUserSelection($event);
          })("_userDragDrop", function NgxMatDatepickerContent_Template_ngx_mat_calendar__userDragDrop_1_listener($event) {
            return ctx._handleUserDragDrop($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(2, NgxMatDatepickerContent_Conditional_2_Template, 1, 1)(3, NgxMatDatepickerContent_ng_template_3_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementStart(4, "button", 3);
          \u0275\u0275listener("focus", function NgxMatDatepickerContent_Template_button_focus_4_listener() {
            return ctx._closeButtonFocused = true;
          })("blur", function NgxMatDatepickerContent_Template_button_blur_4_listener() {
            return ctx._closeButtonFocused = false;
          })("click", function NgxMatDatepickerContent_Template_button_click_4_listener() {
            return ctx.datepicker.close();
          });
          \u0275\u0275text(5);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          let tmp_4_0;
          \u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent())("mat-datepicker-content-container-with-actions", ctx._actionsPortal)("mat-datepicker-content-container-with-time", !ctx.datepicker._hideTime);
          \u0275\u0275attribute("aria-modal", true)("aria-labelledby", (tmp_4_0 = ctx._dialogLabelId) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : void 0);
          \u0275\u0275advance();
          \u0275\u0275property("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView())("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent())("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass())("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isViewMonth ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
          \u0275\u0275advance();
          \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
          \u0275\u0275property("color", ctx.color || "primary");
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx._closeButtonText, " ");
        }
      },
      dependencies: [CdkTrapFocus, NgxMatCalendar, NgClass, NgxMatTimepickerComponent, ReactiveFormsModule, NgControlStatus, FormsModule, NgModel, CdkPortalOutlet, MatButton],
      styles: ['.mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size);width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.time-container{display:flex;position:relative;padding-top:5px;justify-content:center}.time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.time-container:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background-color:#0000001f}.mat-datepicker-content-touch{display:block;max-height:90vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:815px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:90vh}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:none}}@media all and (orientation: portrait){.mat-datepicker-content-touch{max-height:100vh}.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:870px}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time.mat-datepicker-content-container-with-actions{max-height:none!important}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n'],
      encapsulation: 2,
      data: {
        animation: [ngxMatDatepickerAnimations.transformPanel, ngxMatDatepickerAnimations.fadeInCalendar]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerContent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-datepicker-content",
      host: {
        class: "mat-datepicker-content",
        "[@transformPanel]": "_animationState",
        "(@transformPanel.start)": "_handleAnimationEvent($event)",
        "(@transformPanel.done)": "_handleAnimationEvent($event)",
        "[class.mat-datepicker-content-touch]": "datepicker.touchUi",
        "[class.mat-datepicker-content-touch-with-time]": "!datepicker.hideTime"
      },
      animations: [ngxMatDatepickerAnimations.transformPanel, ngxMatDatepickerAnimations.fadeInCalendar],
      exportAs: "ngxMatDatepickerContent",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: ["color"],
      standalone: true,
      imports: [CdkTrapFocus, NgxMatCalendar, NgClass, NgxMatTimepickerComponent, ReactiveFormsModule, FormsModule, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  class="mat-datepicker-content-container"
  [class.mat-datepicker-content-container-with-custom-header]="
    datepicker.calendarHeaderComponent()
  "
  [class.mat-datepicker-content-container-with-actions]="_actionsPortal"
  [class.mat-datepicker-content-container-with-time]="!datepicker._hideTime"
>
  <ngx-mat-calendar
    [id]="datepicker.id"
    [ngClass]="datepicker.panelClass"
    [startAt]="datepicker.startAt"
    [startView]="datepicker.startView()"
    [minDate]="datepicker._getMinDate()"
    [maxDate]="datepicker._getMaxDate()"
    [dateFilter]="datepicker._getDateFilter()"
    [headerComponent]="datepicker.calendarHeaderComponent()"
    [selected]="_getSelected()"
    [dateClass]="datepicker.dateClass()"
    [comparisonStart]="comparisonStart"
    [comparisonEnd]="comparisonEnd"
    [@fadeInCalendar]="'enter'"
    [startDateAccessibleName]="startDateAccessibleName"
    [endDateAccessibleName]="endDateAccessibleName"
    (yearSelected)="datepicker._selectYear($event)"
    (monthSelected)="datepicker._selectMonth($event)"
    (viewChanged)="datepicker._viewChanged($event)"
    (_userSelection)="_handleUserSelection($event)"
    (_userDragDrop)="_handleUserDragDrop($event)"
  />

  @if (isViewMonth) {
    @if (!datepicker._hideTime) {
      <div
        class="time-container"
        [class.disable-seconds]="!datepicker._showSeconds"
      >
        <ngx-mat-timepicker
          [showSpinners]="datepicker._showSpinners"
          [showSeconds]="datepicker._showSeconds"
          [disabled]="datepicker._disabled || !_modelTime"
          [stepHour]="datepicker._stepHour"
          [stepMinute]="datepicker._stepMinute"
          [stepSecond]="datepicker._stepSecond"
          [(ngModel)]="_modelTime"
          [color]="datepicker._color"
          [enableMeridian]="datepicker._enableMeridian"
          [disableMinute]="datepicker._disableMinute"
          (ngModelChange)="onTimeChanged($event)"
        />
      </div>
    }
  }

  <ng-template [cdkPortalOutlet]="_actionsPortal" />

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    mat-raised-button
    [color]="color || 'primary'"
    class="mat-datepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datepicker.close()"
  >
    {{ _closeButtonText }}
  </button>
</div>
`,
      styles: ['.mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size);width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.time-container{display:flex;position:relative;padding-top:5px;justify-content:center}.time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.time-container:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background-color:#0000001f}.mat-datepicker-content-touch{display:block;max-height:90vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:815px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:90vh}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:none}}@media all and (orientation: portrait){.mat-datepicker-content-touch{max-height:100vh}.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:870px}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time.mat-datepicker-content-container-with-actions{max-height:none!important}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgxMatDateSelectionModel
  }, {
    type: NgxMatDateAdapter
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY]
    }]
  }, {
    type: NgxMatDatepickerIntl
  }], null);
})();
var NgxMatDatepickerBase = class _NgxMatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a dropdown and elements have more padding to allow for bigger touch targets.
   */
  get touchUi() {
    return this._touchUi;
  }
  set touchUi(value) {
    this._touchUi = coerceBooleanProperty(value);
  }
  get hideTime() {
    return this._hideTime;
  }
  set hideTime(value) {
    this._hideTime = coerceBooleanProperty(value);
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
  }
  /**
   * Whether to restore focus to the previously-focused element when the calendar is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  get restoreFocus() {
    return this._restoreFocus;
  }
  set restoreFocus(value) {
    this._restoreFocus = coerceBooleanProperty(value);
  }
  /**
   * Classes to be passed to the date picker panel.
   * Supports string and string array values, similar to `ngClass`.
   */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    coerceBooleanProperty(value) ? this.open() : this.close();
  }
  /** Whether the timepicker'spinners is shown. */
  get showSpinners() {
    return this._showSpinners;
  }
  set showSpinners(value) {
    this._showSpinners = value;
  }
  /** Whether the second part is disabled. */
  get showSeconds() {
    return this._showSeconds;
  }
  set showSeconds(value) {
    this._showSeconds = value;
  }
  /** Step hour */
  get stepHour() {
    return this._stepHour;
  }
  set stepHour(value) {
    this._stepHour = value;
  }
  /** Step minute */
  get stepMinute() {
    return this._stepMinute;
  }
  set stepMinute(value) {
    this._stepMinute = value;
  }
  /** Step second */
  get stepSecond() {
    return this._stepSecond;
  }
  set stepSecond(value) {
    this._stepSecond = value;
  }
  /** Enable meridian */
  get enableMeridian() {
    return this._enableMeridian;
  }
  set enableMeridian(value) {
    this._enableMeridian = value;
  }
  /** disable minute */
  get disableMinute() {
    return this._disableMinute;
  }
  set disableMinute(value) {
    this._disableMinute = value;
  }
  /** Step second */
  get defaultTime() {
    return this._defaultTime;
  }
  set defaultTime(value) {
    this._defaultTime = value;
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = Subscription.EMPTY;
    this._document = inject(DOCUMENT);
    this.calendarHeaderComponent = input();
    this.startView = input("month");
    this._touchUi = false;
    this._hideTime = false;
    this.xPosition = input("start");
    this.yPosition = input("below");
    this._restoreFocus = true;
    this.yearSelected = output();
    this.monthSelected = output();
    this.viewChanged = output();
    this.dateClass = input();
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this._opened = false;
    this._showSpinners = true;
    this._showSeconds = false;
    this._stepHour = DEFAULT_STEP;
    this._stepMinute = DEFAULT_STEP;
    this._stepSecond = DEFAULT_STEP;
    this._enableMeridian = false;
    this.id = `mat-datepicker-${datepickerUid++}`;
    this._focusedElementBeforeOpen = null;
    this._backdropHarnessClass = `${this.id}-backdrop`;
    this.stateChanges = new Subject();
    if (!this._dateAdapter) {
      throw createMissingDateImplError$1("NgxMatDateAdapter");
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input2) {
    if (this.datepickerInput) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input2;
    this._inputStateChanges = input2.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this._restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  _clearSelection() {
    this._componentRef?.instance?._clearSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(NgxMatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? "dialog" : "popup"}`
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition() === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition() === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
  static {
    this.\u0275fac = function NgxMatDatepickerBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerBase)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(NGX_MAT_DATEPICKER_SCROLL_STRATEGY), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgxMatDateSelectionModel));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerBase,
      inputs: {
        calendarHeaderComponent: [1, "calendarHeaderComponent"],
        startAt: "startAt",
        startView: [1, "startView"],
        color: "color",
        touchUi: "touchUi",
        hideTime: "hideTime",
        disabled: "disabled",
        xPosition: [1, "xPosition"],
        yPosition: [1, "yPosition"],
        restoreFocus: "restoreFocus",
        dateClass: [1, "dateClass"],
        panelClass: "panelClass",
        opened: "opened",
        showSpinners: "showSpinners",
        showSeconds: "showSeconds",
        stepHour: "stepHour",
        stepMinute: "stepMinute",
        stepSecond: "stepSecond",
        enableMeridian: "enableMeridian",
        disableMinute: "disableMinute",
        defaultTime: "defaultTime"
      },
      outputs: {
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        viewChanged: "viewChanged",
        openedStream: "opened",
        closedStream: "closed"
      },
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerBase, [{
    type: Directive
  }], () => [{
    type: Overlay
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_DATEPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgxMatDateSelectionModel
  }], {
    startAt: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    touchUi: [{
      type: Input
    }],
    hideTime: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    showSpinners: [{
      type: Input
    }],
    showSeconds: [{
      type: Input
    }],
    stepHour: [{
      type: Input
    }],
    stepMinute: [{
      type: Input
    }],
    stepSecond: [{
      type: Input
    }],
    enableMeridian: [{
      type: Input
    }],
    disableMinute: [{
      type: Input
    }],
    defaultTime: [{
      type: Input
    }]
  });
})();
var NgxMatDateRangePicker = class _NgxMatDateRangePicker extends NgxMatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input2 = this.datepickerInput;
    if (input2) {
      instance.comparisonStart = input2.comparisonStart;
      instance.comparisonEnd = input2.comparisonEnd;
      instance.startDateAccessibleName = input2._getStartDateAccessibleName();
      instance.endDateAccessibleName = input2._getEndDateAccessibleName();
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgxMatDateRangePicker_BaseFactory;
      return function NgxMatDateRangePicker_Factory(__ngFactoryType__) {
        return (\u0275NgxMatDateRangePicker_BaseFactory || (\u0275NgxMatDateRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_NgxMatDateRangePicker)))(__ngFactoryType__ || _NgxMatDateRangePicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDateRangePicker,
      selectors: [["ngx-mat-date-range-picker"]],
      exportAs: ["ngxMatDateRangePicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: NgxMatDatepickerBase,
        useExisting: _NgxMatDateRangePicker
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NgxMatDateRangePicker_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "ngx-mat-date-range-picker",
      template: "",
      exportAs: "ngxMatDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: NgxMatDatepickerBase,
        useExisting: NgxMatDateRangePicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var NgxMatDatetimepicker = class _NgxMatDatetimepicker extends NgxMatDatepickerBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgxMatDatetimepicker_BaseFactory;
      return function NgxMatDatetimepicker_Factory(__ngFactoryType__) {
        return (\u0275NgxMatDatetimepicker_BaseFactory || (\u0275NgxMatDatetimepicker_BaseFactory = \u0275\u0275getInheritedFactory(_NgxMatDatetimepicker)))(__ngFactoryType__ || _NgxMatDatetimepicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDatetimepicker,
      selectors: [["ngx-mat-datetime-picker"]],
      exportAs: ["ngxMatDatetimePicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
        provide: NgxMatDatepickerBase,
        useExisting: _NgxMatDatetimepicker
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NgxMatDatetimepicker_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatetimepicker, [{
    type: Component,
    args: [{
      selector: "ngx-mat-datetime-picker",
      template: "",
      exportAs: "ngxMatDatetimePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
        provide: NgxMatDatepickerBase,
        useExisting: NgxMatDatetimepicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var NgxMatDatepickerApply = class _NgxMatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
  static {
    this.\u0275fac = function NgxMatDatepickerApply_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerApply)(\u0275\u0275directiveInject(NgxMatDatepickerBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerApply,
      selectors: [["", "ngxMatDatepickerApply", ""], ["", "ngxMatDateRangePickerApply", ""]],
      hostBindings: function NgxMatDatepickerApply_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgxMatDatepickerApply_click_HostBindingHandler() {
            return ctx._applySelection();
          });
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerApply], [ngxMatDateRangePickerApply]",
      host: {
        "(click)": "_applySelection()"
      },
      standalone: true
    }]
  }], () => [{
    type: NgxMatDatepickerBase
  }], null);
})();
var NgxMatDatepickerClear = class _NgxMatDatepickerClear {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
    this.close = false;
  }
  _clearSelection() {
    this._datepicker._clearSelection();
    if (this.close) {
      this._datepicker.close();
    }
  }
  static {
    this.\u0275fac = function NgxMatDatepickerClear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerClear)(\u0275\u0275directiveInject(NgxMatDatepickerBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerClear,
      selectors: [["", "ngxMatDatepickerClear", ""], ["", "ngxMatDateRangePickerClear", ""]],
      hostBindings: function NgxMatDatepickerClear_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgxMatDatepickerClear_click_HostBindingHandler() {
            return ctx._clearSelection();
          });
        }
      },
      inputs: {
        close: [2, "close", "close", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerClear, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerClear], [ngxMatDateRangePickerClear]",
      host: {
        "(click)": "_clearSelection()"
      },
      standalone: true
    }]
  }], () => [{
    type: NgxMatDatepickerBase
  }], {
    close: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NgxMatDatepickerCancel = class _NgxMatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  static {
    this.\u0275fac = function NgxMatDatepickerCancel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerCancel)(\u0275\u0275directiveInject(NgxMatDatepickerBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerCancel,
      selectors: [["", "ngxMatDatepickerCancel", ""], ["", "ngxMatDateRangePickerCancel", ""]],
      hostBindings: function NgxMatDatepickerCancel_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgxMatDatepickerCancel_click_HostBindingHandler() {
            return ctx._datepicker.close();
          });
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerCancel], [ngxMatDateRangePickerCancel]",
      host: {
        "(click)": "_datepicker.close()"
      },
      standalone: true
    }]
  }], () => [{
    type: NgxMatDatepickerBase
  }], null);
})();
var NgxMatDatepickerActions = class _NgxMatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
    this._template = viewChild(TemplateRef);
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template(), this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
  static {
    this.\u0275fac = function NgxMatDatepickerActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerActions)(\u0275\u0275directiveInject(NgxMatDatepickerBase), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDatepickerActions,
      selectors: [["ngx-mat-datepicker-actions"], ["ngx-mat-date-range-picker-actions"]],
      viewQuery: function NgxMatDatepickerActions_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._template, TemplateRef, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [[1, "mat-datepicker-actions"]],
      template: function NgxMatDatepickerActions_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgxMatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
        }
      },
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerActions, [{
    type: Component,
    args: [{
      selector: "ngx-mat-datepicker-actions, ngx-mat-date-range-picker-actions",
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [{
    type: NgxMatDatepickerBase
  }, {
    type: ViewContainerRef
  }], null);
})();
var NGX_MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMatDatepickerInput),
  multi: true
};
var NGX_MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgxMatDatepickerInput),
  multi: true
};
var NgxMatDatepickerInput = class _NgxMatDatepickerInput extends NgxMatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set ngxMatDatetimePicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats, _formField) {
    super(elementRef, dateAdapter, dateFormats);
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
  static {
    this.\u0275fac = function NgxMatDatepickerInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerInput)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerInput,
      selectors: [["input", "ngxMatDatetimePicker", ""]],
      hostAttrs: [1, "mat-datepicker-input"],
      hostVars: 6,
      hostBindings: function NgxMatDatepickerInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NgxMatDatepickerInput_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function NgxMatDatepickerInput_change_HostBindingHandler() {
            return ctx._onChange();
          })("blur", function NgxMatDatepickerInput_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function NgxMatDatepickerInput_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
        }
      },
      inputs: {
        ngxMatDatetimePicker: "ngxMatDatetimePicker",
        min: "min",
        max: "max",
        dateFilter: [0, "matDatepickerFilter", "dateFilter"]
      },
      exportAs: ["ngxMatDatepickerInput"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([NGX_MAT_DATEPICKER_VALUE_ACCESSOR, NGX_MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: _NgxMatDatepickerInput
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatDatetimePicker]",
      providers: [NGX_MAT_DATEPICKER_VALUE_ACCESSOR, NGX_MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: NgxMatDatepickerInput
      }],
      host: {
        class: "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "ngxMatDatepickerInput",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgxMatDateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_MAT_DATE_FORMATS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    ngxMatDatetimePicker: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    dateFilter: [{
      type: Input,
      args: ["matDatepickerFilter"]
    }]
  });
})();
var NgxMatDatepickerToggleIcon = class _NgxMatDatepickerToggleIcon {
  static {
    this.\u0275fac = function NgxMatDatepickerToggleIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerToggleIcon)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxMatDatepickerToggleIcon,
      selectors: [["", "ngxMatDatepickerToggleIcon", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerToggleIcon]",
      standalone: true
    }]
  }], null, null);
})();
var NgxMatDatepickerToggle = class _NgxMatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker()) {
      return this.datepicker().disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = Subscription.EMPTY;
    this.datepicker = input(void 0, {
      alias: "for"
    });
    this.tabIndex = null;
    this.ariaLabel = input(void 0, {
      alias: "aria-label"
    });
    this.disableRipple = input();
    this._button = viewChild("button");
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    effect(() => {
      this.datepicker();
      untracked(() => this._watchStateChanges());
    });
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker() && !this.disabled) {
      this.datepicker().open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker() ? this.datepicker().stateChanges : of();
    const inputStateChanged = this.datepicker() && this.datepicker().datepickerInput ? this.datepicker().datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker() ? merge(this.datepicker().openedStream, this.datepicker().closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  static {
    this.\u0275fac = function NgxMatDatepickerToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxMatDatepickerToggle)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxMatDatepickerToggle,
      selectors: [["ngx-mat-datepicker-toggle"]],
      viewQuery: function NgxMatDatepickerToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx._button, _c4, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      hostAttrs: [1, "mat-datepicker-toggle"],
      hostVars: 8,
      hostBindings: function NgxMatDatepickerToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgxMatDatepickerToggle_click_HostBindingHandler($event) {
            return ctx._open($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
          \u0275\u0275classProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
        }
      },
      inputs: {
        datepicker: [1, "for", "datepicker"],
        tabIndex: "tabIndex",
        ariaLabel: [1, "aria-label", "ariaLabel"],
        disabled: "disabled",
        disableRipple: [1, "disableRipple"]
      },
      exportAs: ["ngxMatDatepickerToggle"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c6,
      decls: 4,
      vars: 5,
      consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
      template: function NgxMatDatepickerToggle_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c5);
          \u0275\u0275elementStart(0, "button", 1, 0);
          \u0275\u0275projection(2, 0, null, NgxMatDatepickerToggle_ProjectionFallback_2_Template, 2, 0);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("disabled", ctx.disabled)("disableRipple", ctx.disableRipple());
          \u0275\u0275attribute("aria-haspopup", ctx.datepicker() ? "dialog" : null)("aria-label", ctx.ariaLabel() || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        }
      },
      dependencies: [MatIconButton],
      styles: [".mat-datepicker-toggle{pointer-events:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerToggle, [{
    type: Component,
    args: [{
      selector: "ngx-mat-datepicker-toggle",
      host: {
        class: "mat-datepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
        "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
        "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "ngxMatDatepickerToggle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatIconButton],
      template: `<button
  #button
  mat-icon-button
  type="button"
  [attr.aria-haspopup]="datepicker() ? 'dialog' : null"
  [attr.aria-label]="ariaLabel() || _intl.openCalendarLabel"
  [attr.tabindex]="disabled ? -1 : tabIndex"
  [disabled]="disabled"
  [disableRipple]="disableRipple()"
>
  <ng-content select="[ngxMatDatepickerToggleIcon]">
    <svg
      class="mat-datepicker-toggle-default-icon"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="currentColor"
      focusable="false"
    >
      <path
        d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
      />
    </svg>
  </ng-content>
</button>
`,
      styles: [".mat-datepicker-toggle{pointer-events:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"]
    }]
  }], () => [{
    type: NgxMatDatepickerIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    /** Tabindex for the toggle. */
    tabIndex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();

export {
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
  NgxMatNativeDateAdapter,
  NGX_MAT_NATIVE_DATE_FORMATS,
  NgxMatNativeDateModule,
  NgxMatDatetimepicker,
  NgxMatDatepickerInput,
  NgxMatDatepickerToggle
};
//# sourceMappingURL=chunk-P7DPZ3OU.js.map
