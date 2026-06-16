import {
  formatDate
} from "./chunk-YH7BMAPD.js";
import {
  MatButtonToggleModule
} from "./chunk-TQVZRFDQ.js";
import "./chunk-Z6YUOPJY.js";
import {
  MatTooltip
} from "./chunk-NT4IUQ5M.js";
import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  LoaderService,
  OverlayModule
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  MatButton,
  MatButtonModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule
} from "./chunk-56DUDJD6.js";
import {
  Directionality,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  Platform,
  RippleState
} from "./chunk-BAX6ITZM.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DatePipe,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Optional,
  Output,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  forkJoin,
  forwardRef,
  inject,
  map,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/@angular/material/fesm2022/slider.mjs
var _c0 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275template(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  constructor(_cdr, _ngZone, _elementRef, _slider) {
    this._cdr = _cdr;
    this._ngZone = _ngZone;
    this._slider = _slider;
    this._isHovered = false;
    this._isActive = false;
    this._isValueIndicatorVisible = false;
    this._platform = inject(Platform);
    this._onPointerMove = (event) => {
      if (this._sliderInput._isFocused) {
        return;
      }
      const rect = this._hostElement.getBoundingClientRect();
      const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
      this._isHovered = isHovered;
      if (isHovered) {
        this._showHoverRipple();
      } else {
        this._hideRipple(this._hoverRippleRef);
      }
    };
    this._onMouseLeave = () => {
      this._isHovered = false;
      this._hideRipple(this._hoverRippleRef);
    };
    this._onFocus = () => {
      this._hideRipple(this._hoverRippleRef);
      this._showFocusRipple();
      this._hostElement.classList.add("mdc-slider__thumb--focused");
    };
    this._onBlur = () => {
      if (!this._isActive) {
        this._hideRipple(this._focusRippleRef);
      }
      if (this._isHovered) {
        this._showHoverRipple();
      }
      this._hostElement.classList.remove("mdc-slider__thumb--focused");
    };
    this._onDragStart = (event) => {
      if (event.button !== 0) {
        return;
      }
      this._isActive = true;
      this._showActiveRipple();
    };
    this._onDragEnd = () => {
      this._isActive = false;
      this._hideRipple(this._activeRippleRef);
      if (!this._sliderInput._isFocused) {
        this._hideRipple(this._focusRippleRef);
      }
      if (this._platform.SAFARI) {
        this._showHoverRipple();
      }
    };
    this._hostElement = _elementRef.nativeElement;
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      input.addEventListener("pointermove", this._onPointerMove);
      input.addEventListener("pointerdown", this._onDragStart);
      input.addEventListener("pointerup", this._onDragEnd);
      input.addEventListener("pointerleave", this._onMouseLeave);
      input.addEventListener("focus", this._onFocus);
      input.addEventListener("blur", this._onBlur);
    });
  }
  ngOnDestroy() {
    const input = this._sliderInputEl;
    if (input) {
      input.removeEventListener("pointermove", this._onPointerMove);
      input.removeEventListener("pointerdown", this._onDragStart);
      input.removeEventListener("pointerup", this._onDragEnd);
      input.removeEventListener("pointerleave", this._onMouseLeave);
      input.removeEventListener("focus", this._onFocus);
      input.removeEventListener("blur", this._onBlur);
    }
  }
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static {
    this.\u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderVisualThumb)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MAT_SLIDER));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSliderVisualThumb,
      selectors: [["mat-slider-visual-thumb"]],
      viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatRipple, 5);
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
        }
      },
      hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
      inputs: {
        discrete: "discrete",
        thumbPosition: "thumbPosition",
        valueIndicatorText: "valueIndicatorText"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: _MatSliderVisualThumb
      }]), \u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 2,
      consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-mdc-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
      template: function MatSliderVisualThumb_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
          \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.discrete ? 0 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleDisabled", true);
        }
      },
      dependencies: [MatRipple],
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      standalone: true,
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-mdc-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  constructor(_ngZone, _cdr, _elementRef, _dir, _globalRippleOptions, animationMode) {
    this._ngZone = _ngZone;
    this._cdr = _cdr;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._globalRippleOptions = _globalRippleOptions;
    this._disabled = false;
    this._discrete = false;
    this.showTickMarks = false;
    this._min = 0;
    this.disableRipple = false;
    this._max = 100;
    this._step = 1;
    this.displayWith = (value) => `${value}`;
    this._rippleRadius = 24;
    this.startValueIndicatorText = "";
    this.endValueIndicatorText = "";
    this._isRange = false;
    this._isRtl = false;
    this._hasViewInitialized = false;
    this._tickMarkTrackWidth = 0;
    this._hasAnimation = false;
    this._resizeTimer = null;
    this._platform = inject(Platform);
    this._knobRadius = 8;
    this._thumbsOverlap = false;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
    this._isRtl = this._dir.value === "rtl";
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const translateX = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = this._cachedWidth * percentage - 6;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
    if (this._isRtl) {
      this._tickMarks.reverse();
    }
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0);
    let numInactive = Math.max(Math.round((this.max - value) / step), 0);
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static {
    this.\u0275fac = function MatSlider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSlider)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSlider,
      selectors: [["mat-slider"]],
      contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
          \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
        }
      },
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c2, 5);
          \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
        }
      },
      hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
      hostVars: 12,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
          \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", booleanAttribute],
        discrete: [2, "discrete", "discrete", booleanAttribute],
        showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
        min: [2, "min", "min", numberAttribute],
        color: "color",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        max: [2, "max", "max", numberAttribute],
        step: [2, "step", "step", numberAttribute],
        displayWith: "displayWith"
      },
      exportAs: ["matSlider"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_SLIDER,
        useExisting: _MatSlider
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 5,
      consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
          \u0275\u0275elementStart(1, "div", 2);
          \u0275\u0275element(2, "div", 3);
          \u0275\u0275elementStart(3, "div", 4);
          \u0275\u0275element(4, "div", 5, 0);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275template(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
          \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
        }
        if (rf & 2) {
          \u0275\u0275advance(6);
          \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx._isRange ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
        }
      },
      dependencies: [MatSliderVisualThumb],
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-app-corner-full));height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-app-primary));border-top-width:var(--mdc-slider-active-track-height)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-app-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-app-surface-variant));height:var(--mdc-slider-inactive-track-height);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-app-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-app-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__track--inactive::before{border-color:CanvasText}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-app-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-app-on-primary));width:var(--mat-slider-value-indicator-width);height:var(--mat-slider-value-indicator-height);padding:var(--mat-slider-value-indicator-padding);opacity:var(--mat-slider-value-indicator-opacity);border-radius:var(--mat-slider-value-indicator-border-radius)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display);border-top-color:var(--mdc-slider-label-container-color, var(--mat-app-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__value-indicator::after{border-color:CanvasText}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width);transform:var(--mat-slider-value-indicator-text-transform);font-family:var(--mdc-slider-label-label-text-font, var(--mat-app-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-app-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-app-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-app-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-app-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-width:calc(var(--mdc-slider-handle-height)/2) calc(var(--mdc-slider-handle-width)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-app-level1));background-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-app-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-app-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size);height:var(--mdc-slider-with-tick-marks-container-size);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-app-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-app-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-app-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-app-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-app-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      standalone: true,
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-app-corner-full));height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-app-primary));border-top-width:var(--mdc-slider-active-track-height)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-app-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-app-surface-variant));height:var(--mdc-slider-inactive-track-height);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-app-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-app-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__track--inactive::before{border-color:CanvasText}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-app-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-app-on-primary));width:var(--mat-slider-value-indicator-width);height:var(--mat-slider-value-indicator-height);padding:var(--mat-slider-value-indicator-padding);opacity:var(--mat-slider-value-indicator-opacity);border-radius:var(--mat-slider-value-indicator-border-radius)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display);border-top-color:var(--mdc-slider-label-container-color, var(--mat-app-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__value-indicator::after{border-color:CanvasText}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width);transform:var(--mat-slider-value-indicator-text-transform);font-family:var(--mdc-slider-label-label-text-font, var(--mat-app-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-app-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-app-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-app-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-app-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-width:calc(var(--mdc-slider-handle-height)/2) calc(var(--mdc-slider-handle-width)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-app-level1));background-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-app-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-app-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size);height:var(--mdc-slider-with-tick-marks-container-size);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-app-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-app-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-app-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-app-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-app-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  constructor(_ngZone, _elementRef, _cdr, _slider) {
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._cdr = _cdr;
    this._slider = _slider;
    this.valueChange = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.thumbPosition = _MatThumb.END;
    this._valuetext = signal("");
    this._knobRadius = 8;
    this._tickMarkOffset = 3;
    this._isActive = false;
    this._isFocused = false;
    this._hasSetInitialValue = false;
    this._destroyed = new Subject();
    this._skipUIUpdate = false;
    this._onTouchedFn = () => {
    };
    this._isControlInitialized = false;
    this._platform = inject(Platform);
    this._hostElement = _elementRef.nativeElement;
    this._ngZone.runOutsideAngular(() => {
      this._hostElement.addEventListener("pointerdown", this._onPointerDown.bind(this));
      this._hostElement.addEventListener("pointermove", this._onPointerMove.bind(this));
      this._hostElement.addEventListener("pointerup", this._onPointerUp.bind(this));
    });
  }
  ngOnDestroy() {
    this._hostElement.removeEventListener("pointerdown", this._onPointerDown);
    this._hostElement.removeEventListener("pointermove", this._onPointerMove);
    this._hostElement.removeEventListener("pointerup", this._onPointerUp);
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static {
    this.\u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderThumb)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_SLIDER));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSliderThumb,
      selectors: [["input", "matSliderThumb", ""]],
      hostAttrs: ["type", "range", 1, "mdc-slider__input"],
      hostVars: 1,
      hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
            return ctx._onChange();
          })("input", function MatSliderThumb_input_HostBindingHandler() {
            return ctx._onInput();
          })("blur", function MatSliderThumb_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("focus", function MatSliderThumb_focus_HostBindingHandler() {
            return ctx._onFocus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
        }
      },
      inputs: {
        value: [2, "value", "value", numberAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        dragStart: "dragStart",
        dragEnd: "dragEnd"
      },
      exportAs: ["matSliderThumb"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: _MatSliderThumb
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  constructor(_ngZone, _slider, _elementRef, _cdr) {
    super(_ngZone, _elementRef, _cdr, _slider);
    this._cdr = _cdr;
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static {
    this.\u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderRangeThumb)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MAT_SLIDER), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSliderRangeThumb,
      selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
      exportAs: ["matSliderRangeThumb"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: _MatSliderRangeThumb
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var MatSliderModule = class _MatSliderModule {
  static {
    this.\u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSliderModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatRippleModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/pages/dashboard/dashboard.component.service.ts
var DashboardService = class _DashboardService {
  http;
  constructor(http) {
    this.http = http;
  }
  getDashboardData(request) {
    return this.http.post("dashboard", request).pipe(map((response) => {
      return response;
    }));
  }
  getDashboardTableData(request) {
    return this.http.post("dashboard-table", request).pipe(map((response) => {
      return response;
    }));
  }
  getVesselListData(clientId = null) {
    return this.http.post("dashboard-filter-data", { client_id: clientId }).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.sno;
var _c02 = (a0) => ({ "cursor": a0 });
function DashboardComponent_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "keyboard_arrow_down");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_template_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_12_For_9_Template_div_click_0_listener() {
      const client_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectClient(client_r5.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.isClientSelected(client_r5.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r5.name, " ");
  }
}
function DashboardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "mat-icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_ng_template_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.clientSearchText, $event) || (ctx_r2.clientSearchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 91)(6, "div", 92);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_12_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deselectClient());
    });
    \u0275\u0275text(7, " All Clients ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, DashboardComponent_ng_template_12_For_9_Template, 2, 3, "div", 93, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.clientSearchText);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", !ctx_r2.selectedClientName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getFilteredClients());
  }
}
function DashboardComponent_mat_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 95);
    \u0275\u0275listener("click", function DashboardComponent_mat_icon_20_Template_mat_icon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearDateRange($event));
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_template_21_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_1_div_11_Template_div_click_0_listener() {
      const year_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectYear(year_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r10, " ");
  }
}
function DashboardComponent_ng_template_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "button", 103);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevYearPage());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 103);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextYearPage());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 105);
    \u0275\u0275template(11, DashboardComponent_ng_template_21_div_1_div_11_Template, 2, 1, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getYearPageRange());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.displayedYears);
  }
}
function DashboardComponent_ng_template_21_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_2_div_11_Template_div_click_0_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectMonth(i_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r14, " ");
  }
}
function DashboardComponent_ng_template_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "button", 108)(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 109);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_2_Template_span_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.backToYearView());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 108)(8, "mat-icon");
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 110);
    \u0275\u0275template(11, DashboardComponent_ng_template_21_div_2_div_11_Template, 2, 1, "div", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedCalendarYear);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.monthNames);
  }
}
function DashboardComponent_ng_template_21_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r16);
  }
}
function DashboardComponent_ng_template_21_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_3_div_13_Template_div_click_0_listener() {
      const date_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDate(date_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("other-month", !ctx_r2.isCurrentMonth(date_r18))("in-range", ctx_r2.isDateInRange(date_r18))("start-date", ctx_r2.isStartDate(date_r18))("end-date", ctx_r2.isEndDate(date_r18));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", date_r18 == null ? null : date_r18.getDate(), " ");
  }
}
function DashboardComponent_ng_template_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "button", 103);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevMonth());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 109);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_3_Template_span_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.backToMonthView());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 103);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextMonth());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 113);
    \u0275\u0275template(11, DashboardComponent_ng_template_21_div_3_div_11_Template, 2, 1, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 115);
    \u0275\u0275template(13, DashboardComponent_ng_template_21_div_3_div_13_Template, 2, 9, "div", 116);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.monthNames[ctx_r2.selectedCalendarMonth], " ", ctx_r2.selectedCalendarYear, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.calendarDays);
  }
}
function DashboardComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, DashboardComponent_ng_template_21_div_1_Template, 12, 2, "div", 97)(2, DashboardComponent_ng_template_21_div_2_Template, 12, 2, "div", 97)(3, DashboardComponent_ng_template_21_div_3_Template, 14, 4, "div", 97);
    \u0275\u0275elementStart(4, "div", 98)(5, "button", 99);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDateSelection());
    });
    \u0275\u0275text(6, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 100);
    \u0275\u0275listener("click", function DashboardComponent_ng_template_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDateSelection());
    });
    \u0275\u0275text(8, "OK");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.calendarView === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.calendarView === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.calendarView === "date");
  }
}
function DashboardComponent_Conditional_220_th_11_ng_template_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_th_11_ng_template_7_For_7_Template_div_click_0_listener() {
      const value_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleSelection("vessel", value_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r2.isSelected("vessel", value_r23));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r23, " ");
  }
}
function DashboardComponent_Conditional_220_th_11_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "mat-icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_th_11_ng_template_7_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterSearchText["vessel"], $event) || (ctx_r2.filterSearchText["vessel"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 125);
    \u0275\u0275repeaterCreate(6, DashboardComponent_Conditional_220_th_11_ng_template_7_For_7_Template, 2, 3, "div", 126, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 127)(9, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_th_11_ng_template_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetFilter("vessel"));
    });
    \u0275\u0275text(10, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_th_11_ng_template_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.applyFilter("vessel"));
    });
    \u0275\u0275text(12, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterSearchText["vessel"]);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getFilteredValues("vessel"));
  }
}
function DashboardComponent_Conditional_220_th_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "div", 119)(2, "span");
    \u0275\u0275text(3, "Vessel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 120, 8);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_th_11_Template_mat_icon_click_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFilter("vessel", $event));
    });
    \u0275\u0275text(6, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DashboardComponent_Conditional_220_th_11_ng_template_7_Template, 13, 1, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_th_11_Template_ng_template_backdropClick_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["vessel"] = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vesselTrigger_r24 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("cdkConnectedOverlayOrigin", vesselTrigger_r24)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["vessel"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
  }
}
function DashboardComponent_Conditional_220_ng_template_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_19_For_7_Template_div_click_0_listener() {
      const value_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleSelection("country", value_r27));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r2.isSelected("country", value_r27));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r27, " ");
  }
}
function DashboardComponent_Conditional_220_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "mat-icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterSearchText["country"], $event) || (ctx_r2.filterSearchText["country"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 125);
    \u0275\u0275repeaterCreate(6, DashboardComponent_Conditional_220_ng_template_19_For_7_Template, 2, 3, "div", 126, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 127)(9, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("country"));
    });
    \u0275\u0275text(10, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("country"));
    });
    \u0275\u0275text(12, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterSearchText["country"]);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getFilteredValues("country"));
  }
}
function DashboardComponent_Conditional_220_ng_template_27_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_27_For_7_Template_div_click_0_listener() {
      const value_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleSelection("port", value_r30));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r30 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r2.isSelected("port", value_r30));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r30, " ");
  }
}
function DashboardComponent_Conditional_220_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "mat-icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_27_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.filterSearchText["port"], $event) || (ctx_r2.filterSearchText["port"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 125);
    \u0275\u0275repeaterCreate(6, DashboardComponent_Conditional_220_ng_template_27_For_7_Template, 2, 3, "div", 126, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 127)(9, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_27_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("port"));
    });
    \u0275\u0275text(10, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_27_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("port"));
    });
    \u0275\u0275text(12, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterSearchText["port"]);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getFilteredValues("port"));
  }
}
function DashboardComponent_Conditional_220_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133)(2, "span");
    \u0275\u0275text(3, "Filter by LOA Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 134)(5, "div", 135)(6, "mat-slider", 136)(7, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_35_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["loa"].from, $event) || (ctx_r2.rangeFilters["loa"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_35_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["loa"].to, $event) || (ctx_r2.rangeFilters["loa"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 139)(10, "div", 140)(11, "label");
    \u0275\u0275text(12, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_35_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["loa"].from, $event) || (ctx_r2.rangeFilters["loa"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 140)(15, "label");
    \u0275\u0275text(16, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_35_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["loa"].to, $event) || (ctx_r2.rangeFilters["loa"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_35_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("loa"));
    });
    \u0275\u0275text(20, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_35_Template_button_click_21_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("loa", $event));
    });
    \u0275\u0275text(22, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", ctx_r2.getMinValue("loa"))("max", ctx_r2.getMaxValue("loa"))("step", ctx_r2.getStepValue("loa"))("discrete", true)("showTickMarks", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["loa"].from);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["loa"].to);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["loa"].from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["loa"].to);
  }
}
function DashboardComponent_Conditional_220_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133)(2, "span");
    \u0275\u0275text(3, "Filter by GRT Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 134)(5, "div", 135)(6, "mat-slider", 136)(7, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_43_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["grt"].from, $event) || (ctx_r2.rangeFilters["grt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_43_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["grt"].to, $event) || (ctx_r2.rangeFilters["grt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 139)(10, "div", 140)(11, "label");
    \u0275\u0275text(12, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_43_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["grt"].from, $event) || (ctx_r2.rangeFilters["grt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 140)(15, "label");
    \u0275\u0275text(16, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_43_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["grt"].to, $event) || (ctx_r2.rangeFilters["grt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_43_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("grt"));
    });
    \u0275\u0275text(20, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_43_Template_button_click_21_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("grt", $event));
    });
    \u0275\u0275text(22, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", ctx_r2.getMinValue("grt"))("max", ctx_r2.getMaxValue("grt"))("step", ctx_r2.getStepValue("grt"))("discrete", true)("showTickMarks", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["grt"].from);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["grt"].to);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["grt"].from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["grt"].to);
  }
}
function DashboardComponent_Conditional_220_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133)(2, "span");
    \u0275\u0275text(3, "Filter by RGRT Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 134)(5, "div", 135)(6, "mat-slider", 136)(7, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_51_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["rgrt"].from, $event) || (ctx_r2.rangeFilters["rgrt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_51_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["rgrt"].to, $event) || (ctx_r2.rangeFilters["rgrt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 139)(10, "div", 140)(11, "label");
    \u0275\u0275text(12, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_51_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["rgrt"].from, $event) || (ctx_r2.rangeFilters["rgrt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 140)(15, "label");
    \u0275\u0275text(16, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_51_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["rgrt"].to, $event) || (ctx_r2.rangeFilters["rgrt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_51_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("rgrt"));
    });
    \u0275\u0275text(20, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_51_Template_button_click_21_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("rgrt", $event));
    });
    \u0275\u0275text(22, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", ctx_r2.getMinValue("rgrt"))("max", ctx_r2.getMaxValue("rgrt"))("step", ctx_r2.getStepValue("rgrt"))("discrete", true)("showTickMarks", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["rgrt"].from);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["rgrt"].to);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["rgrt"].from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["rgrt"].to);
  }
}
function DashboardComponent_Conditional_220_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133)(2, "span");
    \u0275\u0275text(3, "Filter by NRT Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 134)(5, "div", 135)(6, "mat-slider", 136)(7, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_59_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["nrt"].from, $event) || (ctx_r2.rangeFilters["nrt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_59_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["nrt"].to, $event) || (ctx_r2.rangeFilters["nrt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 139)(10, "div", 140)(11, "label");
    \u0275\u0275text(12, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_59_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["nrt"].from, $event) || (ctx_r2.rangeFilters["nrt"].from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 140)(15, "label");
    \u0275\u0275text(16, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_220_ng_template_59_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rangeFilters["nrt"].to, $event) || (ctx_r2.rangeFilters["nrt"].to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_59_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilter("nrt"));
    });
    \u0275\u0275text(20, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_ng_template_59_Template_button_click_21_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter("nrt", $event));
    });
    \u0275\u0275text(22, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", ctx_r2.getMinValue("nrt"))("max", ctx_r2.getMaxValue("nrt"))("step", ctx_r2.getStepValue("nrt"))("discrete", true)("showTickMarks", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["nrt"].from);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["nrt"].to);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["nrt"].from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rangeFilters["nrt"].to);
  }
}
function DashboardComponent_Conditional_220_For_78_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r35.vessel);
  }
}
function DashboardComponent_Conditional_220_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DashboardComponent_Conditional_220_For_78_td_6_Template, 2, 1, "td", 16);
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const \u0275$index_863_r36 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("even-row", \u0275$index_863_r36 % 2 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.sno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 23, row_r35.date, "dd-MM-yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.roleId !== 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.port);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.loa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.grt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.rgrt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r35.nrt);
    \u0275\u0275advance();
    \u0275\u0275classProp("centered-dash", row_r35.pdaAmount === null || row_r35.pdaAmount === 0 || row_r35.pdaAmount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r35.pdaAmount === null || row_r35.pdaAmount === 0 || row_r35.pdaAmount === 0 ? "-" : row_r35.pdaAmount, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("centered-dash", row_r35.fdaAmount === null || row_r35.fdaAmount === 0 || row_r35.fdaAmount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r35.fdaAmount === null || row_r35.fdaAmount === 0 || row_r35.fdaAmount === 0 ? "-" : row_r35.fdaAmount, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("centered-dash", row_r35.manualPdaAmount === null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r35.manualPdaAmount === null ? "-" : row_r35.manualPdaAmount);
    \u0275\u0275advance();
    \u0275\u0275classProp("centered-dash", row_r35.manualFdaAmount === null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r35.manualFdaAmount === null ? "-" : row_r35.manualFdaAmount);
  }
}
function DashboardComponent_Conditional_220_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th")(4, "div", 119)(5, "span");
    \u0275\u0275text(6, "SNO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "th")(8, "div", 119)(9, "span");
    \u0275\u0275text(10, "Date (ETD)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, DashboardComponent_Conditional_220_th_11_Template, 8, 4, "th", 16);
    \u0275\u0275elementStart(12, "th")(13, "div", 119)(14, "span");
    \u0275\u0275text(15, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-icon", 120, 2);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_16_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("country", $event));
    });
    \u0275\u0275text(18, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, DashboardComponent_Conditional_220_ng_template_19_Template, 13, 1, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_19_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["country"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th")(21, "div", 119)(22, "span");
    \u0275\u0275text(23, "Port");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-icon", 120, 3);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_24_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("port", $event));
    });
    \u0275\u0275text(26, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, DashboardComponent_Conditional_220_ng_template_27_Template, 13, 1, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_27_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["port"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th")(29, "div", 119)(30, "span");
    \u0275\u0275text(31, "LOA (meters)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-icon", 120, 4);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_32_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("loa", $event));
    });
    \u0275\u0275text(34, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, DashboardComponent_Conditional_220_ng_template_35_Template, 23, 9, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_35_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["loa"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th")(37, "div", 119)(38, "span");
    \u0275\u0275text(39, "GRT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-icon", 120, 5);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_40_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("grt", $event));
    });
    \u0275\u0275text(42, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, DashboardComponent_Conditional_220_ng_template_43_Template, 23, 9, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_43_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["grt"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th")(45, "div", 119)(46, "span");
    \u0275\u0275text(47, "RGRT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-icon", 120, 6);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_48_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("rgrt", $event));
    });
    \u0275\u0275text(50, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, DashboardComponent_Conditional_220_ng_template_51_Template, 23, 9, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_51_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["rgrt"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th")(53, "div", 119)(54, "span");
    \u0275\u0275text(55, "NRT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-icon", 120, 7);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_220_Template_mat_icon_click_56_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilter("nrt", $event));
    });
    \u0275\u0275text(58, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, DashboardComponent_Conditional_220_ng_template_59_Template, 23, 9, "ng-template", 17);
    \u0275\u0275listener("backdropClick", function DashboardComponent_Conditional_220_Template_ng_template_backdropClick_59_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterOpen["nrt"] = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th")(61, "div", 119)(62, "span");
    \u0275\u0275text(63, "PDA Amount $");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "th")(65, "div", 119)(66, "span");
    \u0275\u0275text(67, "FDA Amount $");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "th")(69, "div", 119)(70, "span");
    \u0275\u0275text(71, "PDA Agent Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "th")(73, "div", 119)(74, "span");
    \u0275\u0275text(75, "FDA Agent Amount");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(76, "tbody");
    \u0275\u0275repeaterCreate(77, DashboardComponent_Conditional_220_For_78_Template, 27, 26, "tr", 121, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const countryTrigger_r37 = \u0275\u0275reference(17);
    const portTrigger_r38 = \u0275\u0275reference(25);
    const loaTrigger_r39 = \u0275\u0275reference(33);
    const grtTrigger_r40 = \u0275\u0275reference(41);
    const rgrtTrigger_r41 = \u0275\u0275reference(49);
    const nrtTrigger_r42 = \u0275\u0275reference(57);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.roleId !== 3);
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", countryTrigger_r37)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["country"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", portTrigger_r38)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["port"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", loaTrigger_r39)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["loa"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", grtTrigger_r40)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["grt"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", rgrtTrigger_r41)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["rgrt"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkConnectedOverlayOrigin", nrtTrigger_r42)("cdkConnectedOverlayOpen", ctx_r2.isFilterOpen["nrt"])("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.filteredDataSource);
  }
}
function DashboardComponent_Conditional_221_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1, " No data found ");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  snackBar;
  loader = inject(LoaderService);
  dashboardService = inject(DashboardService);
  isLoading = computed(() => this.loader.loading());
  companyName = null;
  companyId = null;
  roleId = 0;
  hideClientDropDown = false;
  // Dashboard data
  dashboardData = null;
  dashboardTableData = null;
  // Summary Cards
  summaryCards = {
    countries: 0,
    ports: 0,
    vessels: 0,
    totalPDA: 0,
    totalFDA: 0
  };
  // FDA Cost Tracker Stats
  fdaStats = {
    lowestFDAAmount: 0,
    averageFDAAmount: 0,
    highestFDAAmount: 0
  };
  // Client control
  clientControl = new FormControl("");
  clients = [];
  // Custom client dropdown
  isClientDropdownOpen = false;
  clientSearchText = "";
  selectedClientName = "";
  // Master data for filters
  vesselList = [];
  countryList = [];
  portList = [];
  loaList = { min: 0, max: 0 };
  grtList = { min: 0, max: 0 };
  rgrtList = { min: 0, max: 0 };
  nrtList = { min: 0, max: 0 };
  // Toggle button
  selectedView = "month";
  //filters
  page = 1;
  pageSize = 100;
  totalRecords = 0;
  allDataLoaded = false;
  // Date range filters
  dateRange = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null)
  });
  isFilterOpen = {};
  filterSearchText = {};
  selectedFilters = {};
  rangeFilters = {
    loa: { from: null, to: null },
    grt: { from: null, to: null },
    rgrt: { from: null, to: null },
    nrt: { from: null, to: null }
  };
  filteredDataSource = [];
  // Overall Progress Data
  overallProgress = {
    pdaCompleted: {
      value: 0,
      total: 0
    },
    pdaUnderProcess: {
      value: 0,
      total: 0
    },
    fdaCompleted: {
      value: 0,
      total: 0
    },
    fdaUnderProcess: {
      value: 0,
      total: 0
    },
    fdaYetToReceive: {
      value: 0,
      total: 0
    }
  };
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  getProgressPercentage(value, total) {
    return value / total * 100 + (total === value ? 0 : 1);
  }
  getBalanceProgressPercentage(value, total) {
    return 100 - value / total * 100;
  }
  // Savings Data
  savingsData = {
    savingsPercentage: 0,
    overallSavings: { label: "Overall Savings", amount: 0, color: "#3C50E0" },
    pdaSavings: { label: "PDA Savings", amount: 0, color: "#7592FF" },
    fdaSavings: { label: "FDA Savings", amount: 0, color: "#DDE9FF" },
    pdaTotalAmount: 0,
    fdaTotalAmount: 0,
    pdaSavingsPercentage: 0,
    fdaSavingsPercentage: 0
  };
  totalSavings = 0;
  getSavingsPercentage(amount) {
    return amount / this.totalSavings * 100;
  }
  getPDAPercentage() {
    const total = this.overallProgress.pdaCompleted.total;
    const completed = this.overallProgress.pdaCompleted.value;
    return total > 0 ? Math.round(completed / total * 100) : 0;
  }
  getFDAPercentage() {
    const total = this.overallProgress.fdaCompleted.total;
    const completed = this.overallProgress.fdaCompleted.value;
    return total > 0 ? Math.round(completed / total * 100) : 0;
  }
  getPDASavingsStrokeDashArray() {
    const amount = this.savingsData.pdaSavings.amount;
    const circumference = 2 * Math.PI * 65;
    const strokeLength = amount / this.savingsData.pdaTotalAmount * circumference;
    return `${strokeLength} ${circumference}`;
  }
  getFDASavingsStrokeDashArray() {
    const amount = this.savingsData.fdaSavings.amount;
    const circumference = 2 * Math.PI * 65;
    const strokeLength = amount / this.savingsData.fdaTotalAmount * circumference;
    return `${strokeLength} ${circumference}`;
  }
  ngOnInit() {
    const storedRoleId = sessionStorage.getItem("roleId");
    this.roleId = storedRoleId ? +storedRoleId : 0;
    this.companyName = sessionStorage.getItem("companyName") || null;
    const companyId = sessionStorage.getItem("companyId");
    this.companyId = companyId ? parseInt(companyId, 10) : null;
    if (this.roleId === 3) {
      this.hideClientDropDown = true;
    } else {
      this.hideClientDropDown = false;
    }
    this.loadMasterData();
  }
  loadMasterData() {
    let selectedClient = null;
    if (this.roleId === 3) {
      selectedClient = this.companyId ? String(this.companyId) : null;
      this.selectedClientName = this.companyName || null;
    } else {
      const client = this.clients.find((client2) => client2.name === this.clientControl.value);
      selectedClient = client ? client.id : null;
    }
    this.loader.show();
    this.dashboardService.getVesselListData(selectedClient).subscribe({
      next: (response) => {
        if (response) {
          this.clients = response.clients?.map((client) => ({ id: String(client.id), name: client.name })) || [];
          this.vesselList = response.vessel_name || [];
          this.countryList = response.country_name || [];
          this.portList = response.port_name || [];
          this.loadDashboardData(true);
        }
      },
      error: (error) => {
        this.loader.hide();
        this.snackBar.showError("Error loading master data");
      }
    });
  }
  applyFilters() {
    this.loadMasterData();
  }
  clearTopFilters() {
    this.clientControl.setValue("");
    this.selectedClientName = "";
    this.clientSearchText = "";
    this.dateRange.patchValue({ start: null, end: null });
    this.loadDashboardData(true);
  }
  clearDateRange(event) {
    event.stopPropagation();
    this.dateRange.patchValue({ start: null, end: null });
    this.showDateCalendar = false;
  }
  onManualScroll() {
    const scrollContainer = document.querySelector(".tracker-table");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.loadDashboardData();
      }
    }
  }
  loadDashboardData(reset = false) {
    if (reset) {
      this.page = 1;
      this.totalRecords = 0;
      this.allDataLoaded = false;
      this.allDataSource = [];
      this.filteredDataSource = [];
    }
    let selectedClient;
    selectedClient = this.clients.find((client) => client.name === this.clientControl.value);
    const tableRequest = {
      clientId: selectedClient ? [String(selectedClient.id)] : null,
      tableFilter: {
        vessel: this.selectedFilters["vessel"] || [],
        country: this.selectedFilters["country"] || [],
        port: this.selectedFilters["port"] || [],
        loa: {
          min_value: this.rangeFilters["loa"].from !== null ? Number(this.rangeFilters["loa"].from) : null,
          max_value: this.rangeFilters["loa"].to !== null ? Number(this.rangeFilters["loa"].to) : null
        },
        grt: {
          min_value: this.rangeFilters["grt"].from !== null ? Number(this.rangeFilters["grt"].from) : null,
          max_value: this.rangeFilters["grt"].to !== null ? Number(this.rangeFilters["grt"].to) : null
        },
        rgrt: {
          min_value: this.rangeFilters["rgrt"].from !== null ? Number(this.rangeFilters["rgrt"].from) : null,
          max_value: this.rangeFilters["rgrt"].to !== null ? Number(this.rangeFilters["rgrt"].to) : null
        },
        nrt: {
          min_value: this.rangeFilters["nrt"].from !== null ? Number(this.rangeFilters["nrt"].from) : null,
          max_value: this.rangeFilters["nrt"].to !== null ? Number(this.rangeFilters["nrt"].to) : null
        }
      },
      page: this.page,
      pageSize: this.pageSize
    };
    const isMonthView = this.selectedView === "month";
    if (this.roleId === 3) {
      selectedClient = this.clients.find((client) => client.name === this.companyName);
      this.selectedClientName = this.companyName || null;
    } else {
      selectedClient = this.clients.find((client) => client.name === this.clientControl.value);
    }
    const dashboardRequest = {
      clientId: selectedClient ? [Number(selectedClient.id)] : null,
      monthRange: isMonthView ? {
        from_date: this.dateRange.value.start ? this.formatDateLocal(this.dateRange.value.start) : null,
        to_date: this.dateRange.value.end ? this.formatDateLocal(this.dateRange.value.end) : null
      } : { from_date: null, to_date: null },
      yearRange: !isMonthView ? {
        from_year: String(this.dateRange.value.start?.getFullYear()) || null,
        to_year: String(this.dateRange.value.end?.getFullYear()) || null
      } : { from_year: null, to_year: null }
    };
    this.loader.show();
    forkJoin({
      dashboard: this.dashboardService.getDashboardData(dashboardRequest),
      table: this.dashboardService.getDashboardTableData(tableRequest)
    }).subscribe({
      next: (response) => {
        if (response.dashboard) {
          this.dashboardData = response.dashboard;
          this.updateDashboardData(response.dashboard);
        }
        if (response.table) {
          this.totalRecords = response.table.fdaCostTracker.totalRecords;
          this.dashboardTableData = response.table;
          this.updateTableData(response.table, reset);
        }
        if (this.allDataSource.length >= this.totalRecords) {
          this.allDataLoaded = true;
        }
        this.loader.hide();
        this.page++;
      },
      error: (error) => {
        console.error("Error loading dashboard data:", error);
        this.loader.hide();
      }
    });
  }
  formatDateLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  updateDashboardData(data) {
    this.summaryCards = data.overallSummary.summaryCards;
    this.overallProgress = {
      pdaCompleted: {
        value: data.overallSummary.overallProgress.pda.Completed,
        total: data.overallSummary.overallProgress.pda.total
      },
      pdaUnderProcess: {
        value: data.overallSummary.overallProgress.pda.Underprogress,
        total: data.overallSummary.overallProgress.pda.total
      },
      fdaCompleted: {
        value: data.overallSummary.overallProgress.fda.Completed,
        total: data.overallSummary.overallProgress.fda.total
      },
      fdaUnderProcess: {
        value: data.overallSummary.overallProgress.fda.Underprogress,
        total: data.overallSummary.overallProgress.fda.total
      },
      fdaYetToReceive: {
        value: data.overallSummary.overallProgress.fda.yetToProcess,
        total: data.overallSummary.overallProgress.pda.pdaCompletedNoFda
      }
    };
    this.savingsData = {
      savingsPercentage: data.overallSummary.savings.savingsPercentage,
      overallSavings: { label: "Overall Savings", amount: data.overallSummary.savings.overallSavingsAmount, color: "#3C50E0" },
      pdaSavings: { label: "PDA Savings", amount: data.overallSummary.savings.pdaSavings, color: "#7592FF" },
      fdaSavings: { label: "FDA Savings", amount: data.overallSummary.savings.fdaSavings, color: "#DDE9FF" },
      pdaTotalAmount: data.overallSummary.savings.pda_total_amount || 0,
      fdaTotalAmount: data.overallSummary.savings.fda_total_amount || 0,
      pdaSavingsPercentage: data.overallSummary.savings.percentage_savings_pda || 0,
      fdaSavingsPercentage: data.overallSummary.savings.percentage_savings_fda || 0
    };
    this.totalSavings = this.savingsData.overallSavings.amount + this.savingsData.pdaSavings.amount + this.savingsData.fdaSavings.amount;
  }
  updateTableData(data, reset = false) {
    this.fdaStats = data.fdaCostTracker.stats;
    const startingSno = reset || this.page === 1 ? 1 : this.allDataSource.length + 1;
    const newData = (data.fdaCostTracker.tableData || []).map((item, index) => ({
      sno: startingSno + index,
      date: item.date,
      vessel: item.vessel,
      country: item.country,
      port: item.port,
      loa: item.loa || 0,
      grt: item.grt || 0,
      rgrt: item.rgrt || 0,
      nrt: item.nrt || 0,
      pdaAmount: parseFloat(String(item.pdaAmount)) || 0,
      fdaAmount: parseFloat(String(item.fdaAmount)) || 0,
      manualPdaAmount: item.manual_pda_amount,
      manualFdaAmount: item.manual_fda_amount
    }));
    if (reset || this.page === 1) {
      this.allDataSource = newData;
    } else {
      this.allDataSource = [...this.allDataSource, ...newData];
    }
    this.filteredDataSource = [...this.allDataSource];
  }
  // Custom calendar properties
  showDateCalendar = false;
  calendarView = "year";
  selectedCalendarYear = (/* @__PURE__ */ new Date()).getFullYear();
  selectedCalendarMonth = (/* @__PURE__ */ new Date()).getMonth();
  tempDateRange = { start: null, end: null };
  currentCalendarDate = /* @__PURE__ */ new Date();
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  calendarDays = [];
  years = [];
  displayedYears = [];
  currentYearPage = 0;
  yearsPerPage = 12;
  openDateCalendar() {
    this.showDateCalendar = !this.showDateCalendar;
    if (this.showDateCalendar) {
      const today = /* @__PURE__ */ new Date();
      this.selectedCalendarYear = today.getFullYear();
      this.selectedCalendarMonth = today.getMonth();
      this.currentCalendarDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.calendarView = "date";
      this.tempDateRange = { start: this.dateRange.value.start || null, end: this.dateRange.value.end || null };
      this.generateCalendarDays();
    }
  }
  selectYear(year) {
    this.selectedCalendarYear = year;
    this.calendarView = "month";
  }
  selectMonth(monthIndex) {
    this.selectedCalendarMonth = monthIndex;
    this.currentCalendarDate = new Date(this.selectedCalendarYear, monthIndex, 1);
    this.calendarView = "date";
    this.generateCalendarDays();
  }
  backToYearView() {
    this.calendarView = "year";
    this.generateYears();
  }
  backToMonthView() {
    this.calendarView = "month";
  }
  selectDate(date) {
    if (!date)
      return;
    const { start, end } = this.tempDateRange;
    if (!start || end) {
      this.tempDateRange = { start: date, end: null };
    } else if (date >= start) {
      this.tempDateRange = __spreadProps(__spreadValues({}, this.tempDateRange), { end: date });
    } else {
      this.tempDateRange = { start: date, end: null };
    }
  }
  confirmDateSelection() {
    this.dateRange.patchValue({
      start: this.tempDateRange.start,
      end: this.tempDateRange.end
    });
    this.showDateCalendar = false;
  }
  cancelDateSelection() {
    this.tempDateRange = { start: null, end: null };
    this.showDateCalendar = false;
  }
  isDateInRange(date) {
    const { start, end } = this.tempDateRange;
    if (!start || !date)
      return false;
    return end ? date >= start && date <= end : this.isSameDate(date, start);
  }
  isStartDate(date) {
    return date && this.tempDateRange.start ? this.isSameDate(date, this.tempDateRange.start) : false;
  }
  isEndDate(date) {
    return date && this.tempDateRange.end ? this.isSameDate(date, this.tempDateRange.end) : false;
  }
  generateCalendarDays() {
    const year = this.currentCalendarDate.getFullYear();
    const month = this.currentCalendarDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDayDate = new Date(year, month + 1, 0).getDate();
    const prevLastDayDate = new Date(year, month, 0).getDate();
    this.calendarDays = [
      ...Array.from({ length: firstDayIndex }, (_, i) => new Date(year, month - 1, prevLastDayDate - firstDayIndex + i + 1)),
      ...Array.from({ length: lastDayDate }, (_, i) => new Date(year, month, i + 1)),
      ...Array.from({ length: 42 - firstDayIndex - lastDayDate }, (_, i) => new Date(year, month + 1, i + 1))
    ];
  }
  generateYears() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.years = [];
    for (let i = currentYear - 25; i <= currentYear + 25; i++) {
      this.years.push(i);
    }
    const currentYearIndex = this.years.indexOf(currentYear);
    this.currentYearPage = Math.floor(currentYearIndex / this.yearsPerPage);
    this.updateDisplayedYears();
  }
  prevMonth() {
    this.navigateMonth(-1);
  }
  nextMonth() {
    this.navigateMonth(1);
  }
  prevYear() {
    this.selectedCalendarYear--;
  }
  nextYear() {
    this.selectedCalendarYear++;
  }
  navigateMonth(offset) {
    this.currentCalendarDate = new Date(this.currentCalendarDate.getFullYear(), this.currentCalendarDate.getMonth() + offset, 1);
    this.selectedCalendarYear = this.currentCalendarDate.getFullYear();
    this.selectedCalendarMonth = this.currentCalendarDate.getMonth();
    this.generateCalendarDays();
  }
  isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }
  isCurrentMonth(date) {
    if (!date)
      return true;
    return date.getMonth() === this.currentCalendarDate.getMonth();
  }
  closeCalendar() {
    this.showDateCalendar = false;
  }
  getYearPageRange() {
    return this.displayedYears.length ? `${this.displayedYears[0]} - ${this.displayedYears[this.displayedYears.length - 1]}` : "";
  }
  prevYearPage() {
    if (this.currentYearPage > 0)
      this.currentYearPage--;
    this.updateDisplayedYears();
  }
  nextYearPage() {
    this.currentYearPage++;
    const requiredYears = (this.currentYearPage + 1) * this.yearsPerPage;
    if (requiredYears > this.years.length) {
      const lastYear = this.years[this.years.length - 1];
      this.years.push(...Array.from({ length: requiredYears - this.years.length }, (_, i) => lastYear + i + 1));
    }
    this.updateDisplayedYears();
  }
  updateDisplayedYears() {
    const startIndex = this.currentYearPage * this.yearsPerPage;
    this.displayedYears = this.years.slice(startIndex, startIndex + this.yearsPerPage);
  }
  getYearLabel() {
    const start = this.dateRange.value.start;
    if (!start) {
      return "";
    }
    return start.getFullYear().toString();
  }
  getDateRangeLabel() {
    const { start, end } = this.dateRange.value;
    if (!start)
      return "Select date range";
    const startFormatted = formatDate(start);
    const endFormatted = end ? formatDate(end) : null;
    return endFormatted ? `${startFormatted} - ${endFormatted}` : startFormatted;
  }
  allDataSource = [];
  toggleClientDropdown() {
    if (this.roleId === 3) {
      this.isClientDropdownOpen = false;
    } else {
      this.isClientDropdownOpen = !this.isClientDropdownOpen;
    }
  }
  getFilteredClients() {
    const searchText = this.clientSearchText.toLowerCase();
    return searchText ? this.clients.filter((client) => client.name.toLowerCase().includes(searchText)) : this.clients;
  }
  isClientSelected(clientName) {
    return this.selectedClientName === clientName;
  }
  selectClient(clientName) {
    this.setClientState(clientName, false);
  }
  deselectClient() {
    this.setClientState("", false);
  }
  setClientState(clientName, dropdownOpen) {
    this.selectedClientName = clientName;
    this.clientControl.setValue(clientName);
    this.isClientDropdownOpen = dropdownOpen;
    this.clientSearchText = "";
  }
  getSelectedClientName() {
    return this.selectedClientName || "";
  }
  toggleFilter(column, event) {
    event.stopPropagation();
    Object.keys(this.isFilterOpen).forEach((key) => {
      if (key !== column)
        this.isFilterOpen[key] = false;
    });
    this.isFilterOpen[column] = !this.isFilterOpen[column];
  }
  getUniqueValues(column) {
    if (column === "vessel" && this.vesselList.length > 0) {
      return this.vesselList.sort();
    }
    if (column === "country" && this.countryList.length > 0) {
      return this.countryList.sort();
    }
    if (column === "port" && this.portList.length > 0) {
      return this.portList.sort();
    }
    const values = this.allDataSource.map((item) => String(item[column]));
    return [...new Set(values)].sort();
  }
  getFilteredValues(column) {
    const searchText = (this.filterSearchText[column] || "").toLowerCase();
    return this.getUniqueValues(column).filter((value) => value.toLowerCase().includes(searchText));
  }
  isSelected(column, value) {
    return this.selectedFilters[column]?.includes(value) || false;
  }
  toggleSelection(column, value) {
    if (!this.selectedFilters[column]) {
      this.selectedFilters[column] = [];
    }
    const index = this.selectedFilters[column].indexOf(value);
    if (index > -1) {
      this.selectedFilters[column].splice(index, 1);
    } else {
      this.selectedFilters[column].push(value);
    }
  }
  applyFilter(column, event) {
    event?.preventDefault();
    event?.stopPropagation();
    this.isFilterOpen[column] = false;
    this.isApiFilter(column) ? this.loadTableDataWithFilters() : this.applyLocalFilters();
  }
  resetFilter(column) {
    this.selectedFilters[column] = [];
    this.filterSearchText[column] = "";
    if (this.rangeFilters[column])
      this.rangeFilters[column] = { from: null, to: null };
    this.isFilterOpen[column] = false;
    this.isApiFilter(column) ? this.loadTableDataWithFilters() : this.applyLocalFilters();
  }
  isApiFilter(column) {
    return ["vessel", "country", "port", "loa", "grt", "rgrt", "nrt"].includes(column);
  }
  resetAllFilters() {
    this.selectedFilters = {};
    this.filterSearchText = {};
    this.rangeFilters = {
      loa: { from: null, to: null },
      grt: { from: null, to: null },
      rgrt: { from: null, to: null },
      nrt: { from: null, to: null }
    };
    this.page = 1;
    this.loadTableDataWithFilters();
  }
  loadTableDataWithFilters() {
    this.page = 1;
    let selectedClient;
    selectedClient = this.clients.find((client) => client.name === this.clientControl.value);
    const tableRequest = {
      clientId: selectedClient ? [String(selectedClient.id)] : null,
      tableFilter: {
        vessel: this.selectedFilters["vessel"] || [],
        country: this.selectedFilters["country"] || [],
        port: this.selectedFilters["port"] || [],
        loa: {
          min_value: this.rangeFilters["loa"].from !== null ? Number(this.rangeFilters["loa"].from) : null,
          max_value: this.rangeFilters["loa"].to !== null ? Number(this.rangeFilters["loa"].to) : null
        },
        grt: {
          min_value: this.rangeFilters["grt"].from !== null ? Number(this.rangeFilters["grt"].from) : null,
          max_value: this.rangeFilters["grt"].to !== null ? Number(this.rangeFilters["grt"].to) : null
        },
        rgrt: {
          min_value: this.rangeFilters["rgrt"].from !== null ? Number(this.rangeFilters["rgrt"].from) : null,
          max_value: this.rangeFilters["rgrt"].to !== null ? Number(this.rangeFilters["rgrt"].to) : null
        },
        nrt: {
          min_value: this.rangeFilters["nrt"].from !== null ? Number(this.rangeFilters["nrt"].from) : null,
          max_value: this.rangeFilters["nrt"].to !== null ? Number(this.rangeFilters["nrt"].to) : null
        }
      },
      page: this.page,
      pageSize: this.pageSize
    };
    this.loader.show();
    this.dashboardService.getDashboardTableData(tableRequest).subscribe({
      next: (response) => {
        if (response) {
          this.dashboardTableData = response;
          this.updateTableData(response, true);
        }
        this.loader.hide();
      },
      error: (error) => {
        console.error("Error loading table data with filters:", error);
        this.loader.hide();
      }
    });
  }
  applyLocalFilters() {
    this.filteredDataSource = this.allDataSource.filter((item) => {
      const rangeFilterPass = Object.keys(this.rangeFilters).every((column) => {
        const range = this.rangeFilters[column];
        if (range.from === null && range.to === null)
          return true;
        const value = Number(item[column]);
        if (range.from !== null && value < range.from)
          return false;
        if (range.to !== null && value > range.to)
          return false;
        return true;
      });
      return rangeFilterPass;
    });
  }
  isRangeColumn(column) {
    return ["loa", "grt", "rgrt", "nrt"].includes(column);
  }
  getStepValue(column) {
    return column === "loa" ? 0.1 : column === "rgrt" || column === "nrt" ? 1 : 100;
  }
  getMinValue(column) {
    return Math.floor(Math.min(...this.allDataSource.map((item) => Number(item[column]))));
  }
  getMaxValue(column) {
    return Math.ceil(Math.max(...this.allDataSource.map((item) => Number(item[column]))));
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 222, vars: 93, consts: [["clientTrigger", "cdkOverlayOrigin"], ["dateTrigger", "cdkOverlayOrigin"], ["countryTrigger", "cdkOverlayOrigin"], ["portTrigger", "cdkOverlayOrigin"], ["loaTrigger", "cdkOverlayOrigin"], ["grtTrigger", "cdkOverlayOrigin"], ["rgrtTrigger", "cdkOverlayOrigin"], ["nrtTrigger", "cdkOverlayOrigin"], ["vesselTrigger", "cdkOverlayOrigin"], [1, "dashboard-container", "theme-dark"], [1, "dashboard-header"], [1, "header-title"], [1, "header-actions"], [1, "custom-client-dropdown"], ["cdkOverlayOrigin", "", 1, "client-field", 3, "click", "ngStyle"], [1, "client-field-value"], [4, "ngIf"], ["cdkConnectedOverlay", "", 3, "backdropClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass"], [1, "date-field-wrapper"], ["cdkOverlayOrigin", "", 1, "custom-date-field", "filter-date-range"], [1, "date-field-icon-left", 3, "click"], [1, "date-field-value", 3, "click"], ["class", "date-fied-icon-close", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass"], ["mat-raised-button", "", "color", "primary", 1, "apply-btn", 3, "click"], [1, "scroll-section"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon-wrapper"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value", "stat-cyan"], [1, "charts-section"], [1, "chart-card", "chart-large"], [1, "chart-header"], [1, "progress-content"], [1, "progress-item"], [1, "progress-label-row"], [1, "progress-label"], [1, "progress-value"], [1, "custom-progress-bar"], [1, "progress-fill", "progress-animate", "progress-bar-pda-completed"], [1, "progress-fill", "progress-bar-pda-completed-balance"], [1, "progress-fill", "progress-animate", "progress-bar-pda-process"], [1, "progress-fill", "progress-bar-pda-process-balance"], [1, "progress-fill", "progress-animate", "progress-bar-fda-completed"], [1, "progress-fill", "progress-bar-fda-completed-balance"], [1, "progress-fill", "progress-animate", "progress-bar-fda-process"], [1, "progress-fill", "progress-bar-fda-process-balance"], [1, "progress-fill", "progress-animate", "progress-bar-fda-receive"], [1, "progress-fill", "progress-bar-fda-receive-balance"], [1, "chart-card", "chart-small"], [1, "savings-chart-content"], [1, "donut-charts-container"], [1, "donut-chart-section"], [1, "donut-chart"], ["width", "180", "height", "180", "viewBox", "0 0 180 180"], ["cx", "90", "cy", "90", "r", "65", "fill", "transparent", 1, "donut-ring"], ["cx", "90", "cy", "90", "r", "65", "fill", "transparent", 1, "donut-segment-pda"], [1, "donut-center"], [1, "donut-percentage"], [1, "donut-bottom-label"], [1, "donut-label-text"], [1, "middle-savings-section"], [1, "savings-item-row"], [1, "savings-label-with-dot"], [1, "savings-label"], [1, "savings-value"], [1, "savings-color-dot"], ["cx", "90", "cy", "90", "r", "65", "fill", "transparent", "stroke", "var(--color-action)", "stroke-width", "35", 1, "donut-ring"], ["cx", "90", "cy", "90", "r", "65", "fill", "transparent", 1, "donut-segment-fda"], [1, "tracker-section"], [1, "tracker-header"], [1, "tracker-title"], [1, "tracker-subtitle-row"], [1, "tracker-actions"], ["matTooltip", "Reset All Filters", "matTooltipPosition", "above", 1, "reset-all-btn", 3, "click"], [1, "tracker-stats"], [1, "tracker-stat-card-1"], [1, "tracker-stat-label"], [1, "tracker-stat-value-1"], [1, "tracker-stat-card-2"], [1, "tracker-stat-value-2"], [1, "tracker-stat-card-3"], [1, "tracker-stat-value-3"], [1, "tracker-table", 3, "scroll"], [2, "text-align", "center", "padding", "40px", "color", "#6c757d", "font-size", "16px"], [1, "client-panel"], [1, "client-search"], ["type", "text", "placeholder", "Search client...", 3, "ngModelChange", "ngModel"], [1, "client-list"], [1, "client-item", "all-clients", 3, "click"], [1, "client-item", 3, "selected"], [1, "client-item", 3, "click"], [1, "date-fied-icon-close", 3, "click"], [1, "custom-calendar"], ["class", "calendar-view", 4, "ngIf"], [1, "calendar-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "calendar-view"], [1, "calendar-header"], [1, "nav-btn", 3, "click"], [1, "calendar-title"], [1, "year-grid"], ["class", "year-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "year-item", 3, "click"], [1, "nav-btn", 2, "visibility", "hidden"], [1, "calendar-title", 2, "cursor", "pointer", 3, "click"], [1, "month-grid"], ["class", "month-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "month-item", 3, "click"], [1, "calendar-weekdays"], ["class", "weekday", 4, "ngFor", "ngForOf"], [1, "calendar-days"], ["class", "calendar-day", 3, "other-month", "in-range", "start-date", "end-date", "click", 4, "ngFor", "ngForOf"], [1, "weekday"], [1, "calendar-day", 3, "click"], [1, "header-content"], ["cdkOverlayOrigin", "", 3, "click"], [3, "even-row"], [1, "filter-panel"], [1, "filter-search"], ["type", "text", "placeholder", "Search vessels", 3, "ngModelChange", "ngModel"], [1, "filter-list"], [1, "filter-item", 3, "selected"], [1, "filter-actions"], [3, "click"], [1, "filter-item", 3, "click"], ["type", "text", "placeholder", "Search countries", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Search ports", 3, "ngModelChange", "ngModel"], [1, "filter-panel", "range-filter-panel"], [1, "range-filter-header"], [1, "range-inputs"], [1, "range-slider-wrapper"], [3, "min", "max", "step", "discrete", "showTickMarks"], ["matSliderStartThumb", "", 3, "ngModelChange", "ngModel"], ["matSliderEndThumb", "", 3, "ngModelChange", "ngModel"], [1, "range-values"], [1, "range-value-item"], ["type", "number", "placeholder", "Min", "step", "0.1", 1, "range-number-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Max", "step", "0.1", 1, "range-number-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Min", 1, "range-number-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Max", 1, "range-number-input", 3, "ngModelChange", "ngModel"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 9)(1, "div", 10)(2, "div", 11)(3, "h1");
      \u0275\u0275text(4, "Welcome Back!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "div", 14, 0);
      \u0275\u0275listener("click", function DashboardComponent_Template_div_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleClientDropdown());
      });
      \u0275\u0275elementStart(9, "span", 15);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, DashboardComponent_mat_icon_11_Template, 2, 0, "mat-icon", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, DashboardComponent_ng_template_12_Template, 10, 3, "ng-template", 17);
      \u0275\u0275listener("backdropClick", function DashboardComponent_Template_ng_template_backdropClick_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isClientDropdownOpen = false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 18)(14, "div", 19, 1)(16, "mat-icon", 20);
      \u0275\u0275listener("click", function DashboardComponent_Template_mat_icon_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openDateCalendar());
      });
      \u0275\u0275text(17, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 21);
      \u0275\u0275listener("click", function DashboardComponent_Template_span_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openDateCalendar());
      });
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, DashboardComponent_mat_icon_20_Template, 2, 0, "mat-icon", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, DashboardComponent_ng_template_21_Template, 9, 3, "ng-template", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 24);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275text(23, " Apply ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 25)(25, "div", 26)(26, "div", 27)(27, "div", 28)(28, "mat-icon", 29);
      \u0275\u0275text(29, "public");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 30)(31, "h6", 31);
      \u0275\u0275text(32, "Countries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h4", 32);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 27)(36, "div", 28)(37, "mat-icon", 29);
      \u0275\u0275text(38, "anchor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 30)(40, "h6", 31);
      \u0275\u0275text(41, "Ports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h4", 32);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 27)(45, "div", 28)(46, "mat-icon", 29);
      \u0275\u0275text(47, "directions_boat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 30)(49, "h6", 31);
      \u0275\u0275text(50, "Vessel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h4", 32);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 27)(54, "div", 28)(55, "mat-icon", 29);
      \u0275\u0275text(56, "account_balance_wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 30)(58, "h6", 31);
      \u0275\u0275text(59, "PDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h4", 32);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 27)(63, "div", 28)(64, "mat-icon", 29);
      \u0275\u0275text(65, "attach_money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 30)(67, "h6", 31);
      \u0275\u0275text(68, "FDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h4", 32);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 33)(72, "div", 34)(73, "div", 35)(74, "h5");
      \u0275\u0275text(75, "Overall PDA & FDA Progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "span", 39);
      \u0275\u0275text(80, "PDA Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 40);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 41);
      \u0275\u0275element(84, "div", 42)(85, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 37)(87, "div", 38)(88, "span", 39);
      \u0275\u0275text(89, "PDA Under Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span", 40);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 41);
      \u0275\u0275element(93, "div", 44)(94, "div", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 37)(96, "div", 38)(97, "span", 39);
      \u0275\u0275text(98, "FDA Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 40);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 41);
      \u0275\u0275element(102, "div", 46)(103, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 37)(105, "div", 38)(106, "span", 39);
      \u0275\u0275text(107, "FDA Under Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 40);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 41);
      \u0275\u0275element(111, "div", 48)(112, "div", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 37)(114, "div", 38)(115, "span", 39);
      \u0275\u0275text(116, " FDA Yet to be Receive (beyond 30 days) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span", 40);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 41);
      \u0275\u0275element(120, "div", 50)(121, "div", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "div", 52)(123, "div", 35)(124, "h5");
      \u0275\u0275text(125, "Savings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 53)(127, "div", 54)(128, "div", 55)(129, "div", 56);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(130, "svg", 57);
      \u0275\u0275element(131, "circle", 58)(132, "circle", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(133, "div", 60)(134, "div", 61);
      \u0275\u0275text(135);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 62)(137, "span", 63);
      \u0275\u0275text(138, "PDA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 64)(140, "div", 65)(141, "div", 66)(142, "span", 67);
      \u0275\u0275text(143, "Overall Savings:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "span", 68);
      \u0275\u0275text(145);
      \u0275\u0275pipe(146, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 65)(148, "div", 66);
      \u0275\u0275element(149, "div", 69);
      \u0275\u0275elementStart(150, "span", 67);
      \u0275\u0275text(151, "PDA Savings:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "span", 68);
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 65)(156, "div", 66);
      \u0275\u0275element(157, "div", 69);
      \u0275\u0275elementStart(158, "span", 67);
      \u0275\u0275text(159, "FDA Savings:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "span", 68);
      \u0275\u0275text(161);
      \u0275\u0275pipe(162, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 65);
      \u0275\u0275element(164, "div", 69);
      \u0275\u0275elementStart(165, "span", 67);
      \u0275\u0275text(166, "PDA Total:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "span", 68);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 65);
      \u0275\u0275element(171, "div", 69);
      \u0275\u0275elementStart(172, "span", 67);
      \u0275\u0275text(173, "FDA Total:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span", 68);
      \u0275\u0275text(175);
      \u0275\u0275pipe(176, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 55)(178, "div", 56);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(179, "svg", 57);
      \u0275\u0275element(180, "circle", 70)(181, "circle", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(182, "div", 60)(183, "div", 61);
      \u0275\u0275text(184);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "div", 62)(186, "span", 63);
      \u0275\u0275text(187, "FDA");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(188, "div", 72)(189, "div", 73)(190, "div", 74)(191, "h5");
      \u0275\u0275text(192, "Estimated Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 75)(194, "p");
      \u0275\u0275text(195, "View and compare amounts from previous similar voyages.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 76)(197, "button", 77);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_197_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetAllFilters());
      });
      \u0275\u0275elementStart(198, "mat-icon");
      \u0275\u0275text(199, "refresh");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(200, "div", 78)(201, "div", 79)(202, "p", 80);
      \u0275\u0275text(203, "Lowest FDA Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "h6", 81);
      \u0275\u0275text(205);
      \u0275\u0275pipe(206, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 82)(208, "p", 80);
      \u0275\u0275text(209, "Average FDA Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "h6", 83);
      \u0275\u0275text(211);
      \u0275\u0275pipe(212, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 84)(214, "p", 80);
      \u0275\u0275text(215, "Highest FDA Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "h6", 85);
      \u0275\u0275text(217);
      \u0275\u0275pipe(218, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(219, "div", 86);
      \u0275\u0275listener("scroll", function DashboardComponent_Template_div_scroll_219_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onManualScroll());
      });
      \u0275\u0275template(220, DashboardComponent_Conditional_220_Template, 79, 25, "table")(221, DashboardComponent_Conditional_221_Template, 2, 0, "div", 87);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const clientTrigger_r43 = \u0275\u0275reference(8);
      const dateTrigger_r44 = \u0275\u0275reference(15);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(91, _c02, ctx.roleId === 3 ? "default" : "auto"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getSelectedClientName() || "All Clients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hideClientDropDown);
      \u0275\u0275advance();
      \u0275\u0275property("cdkConnectedOverlayOrigin", clientTrigger_r43)("cdkConnectedOverlayOpen", ctx.isClientDropdownOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getDateRangeLabel() || "Select date range");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dateRange.value.start);
      \u0275\u0275advance();
      \u0275\u0275property("cdkConnectedOverlayOrigin", dateTrigger_r44)("cdkConnectedOverlayOpen", ctx.showDateCalendar)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.summaryCards.countries);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summaryCards.ports);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summaryCards.vessels);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summaryCards.totalPDA);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summaryCards.totalFDA);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate2("", ctx.overallProgress.pdaCompleted.value, " / ", ctx.overallProgress.pdaCompleted.total, "");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getProgressPercentage(ctx.overallProgress.pdaCompleted.value, ctx.overallProgress.pdaCompleted.total), "%");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.getBalanceProgressPercentage(ctx.overallProgress.pdaCompleted.value, ctx.overallProgress.pdaCompleted.total), "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.overallProgress.pdaUnderProcess.value, " / ", ctx.overallProgress.pdaUnderProcess.total, "");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getProgressPercentage(ctx.overallProgress.pdaUnderProcess.value, ctx.overallProgress.pdaUnderProcess.total), "%");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.getBalanceProgressPercentage(ctx.overallProgress.pdaUnderProcess.value, ctx.overallProgress.pdaUnderProcess.total), "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.overallProgress.fdaCompleted.value, " / ", ctx.overallProgress.fdaCompleted.total, " ");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getProgressPercentage(ctx.overallProgress.fdaCompleted.value, ctx.overallProgress.fdaCompleted.total), "%");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.getBalanceProgressPercentage(ctx.overallProgress.fdaCompleted.value, ctx.overallProgress.fdaCompleted.total), "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.overallProgress.fdaUnderProcess.value, " / ", ctx.overallProgress.fdaUnderProcess.total, "");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getProgressPercentage(ctx.overallProgress.fdaUnderProcess.value, ctx.overallProgress.fdaUnderProcess.total), "%");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.getBalanceProgressPercentage(ctx.overallProgress.fdaUnderProcess.value, ctx.overallProgress.fdaUnderProcess.total), "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.overallProgress.fdaYetToReceive.value, " / ", ctx.overallProgress.fdaYetToReceive.total, "");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getProgressPercentage(ctx.overallProgress.fdaYetToReceive.value, ctx.overallProgress.pdaCompleted.value), "%");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.getBalanceProgressPercentage(ctx.overallProgress.fdaYetToReceive.value, ctx.overallProgress.pdaCompleted.value), "%");
      \u0275\u0275advance(11);
      \u0275\u0275styleProp("stroke-dasharray", ctx.getPDASavingsStrokeDashArray())("stroke-dashoffset", 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.savingsData.pdaSavingsPercentage, "%");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(146, 67, ctx.savingsData.overallSavings.amount, "1.2-2"), "");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(154, 70, ctx.savingsData.pdaSavings.amount, "1.2-2"), "");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(162, 73, ctx.savingsData.fdaSavings.amount, "1.2-2"), "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(169, 76, ctx.savingsData.pdaTotalAmount, "1.2-2"), "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(176, 79, ctx.savingsData.fdaTotalAmount, "1.2-2"), "");
      \u0275\u0275advance(6);
      \u0275\u0275styleProp("stroke-dasharray", ctx.getFDASavingsStrokeDashArray())("stroke-dashoffset", 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.savingsData.fdaSavingsPercentage, "%");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(206, 82, ctx.fdaStats.lowestFDAAmount, "1.2-2"), "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(212, 85, ctx.fdaStats.averageFDAAmount, "1.2-2"), "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(218, 88, ctx.fdaStats.highestFDAAmount, "1.2-2"), "");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filteredDataSource.length > 0 ? 220 : 221);
    }
  }, dependencies: [
    MatIcon,
    CommonModule,
    NgForOf,
    NgIf,
    NgStyle,
    DecimalPipe,
    DatePipe,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgModel,
    ReactiveFormsModule,
    OverlayModule,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatSliderModule,
    MatSlider,
    MatSliderRangeThumb,
    MatButtonToggleModule,
    MatButtonModule,
    MatButton,
    MatTooltip
  ], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  padding: 0 12px;\n  background: var(--app-table-row-even);\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 41px;\n  z-index: 100;\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 32px;\n  margin: -8px 0 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  height: 60px;\n}\n.apply-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 6px;\n  font: 500 14px/1 inherit;\n  text-transform: none;\n  margin: -20px 0 0;\n  transition: all .3s;\n  cursor: pointer;\n  padding: 0 24px;\n  background: var(--color-action) !important;\n  color: var(--color-white) !important;\n  box-shadow: 0 4px 12px var(--shadow-blue-1) !important;\n  border: none;\n}\n.apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover) !important;\n  box-shadow: 0 6px 14px var(--shadow-blue-1) !important;\n  transform: translateY(-1px);\n}\n.apply-btn[_ngcontent-%COMP%]:active {\n  box-shadow: 0 2px 4px var(--shadow-blue-1) !important;\n}\n.custom-client-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 240px;\n}\n.client-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 16px;\n  background: var(--app-input-bg) !important;\n  border: 1px solid var(--color-border-4);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all .2s;\n  min-height: 20px;\n  margin-top: -20px;\n  color: black !important;\n}\n.client-field[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-action);\n  box-shadow: 0 2px 8px var(--shadow-blue-1);\n}\n.client-field-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: black !important;\n  flex: 1;\n}\n.client-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.nav-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.date-field-icon-left[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.client-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-gray-2) !important;\n}\n.client-dropdown-panel[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.client-panel[_ngcontent-%COMP%] {\n  background: var(--app-panel-bg);\n  border: 1px solid var(--app-card-border);\n  border-radius: 6px;\n  box-shadow: 0 8px 20px var(--shadow-4);\n  width: 240px;\n  max-height: 300px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.client-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n  background-color: #0f1f38;\n}\n.client-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-gray-3);\n}\n.client-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 13px;\n  color: var(--color-white) !important;\n  background: transparent;\n}\n.client-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-gray-2) !important;\n}\n.client-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 250px;\n}\n.client-item[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  color: var(--color-text-dark-5) !important;\n  cursor: pointer;\n  transition: background-color .2s;\n}\n.client-item[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--app-panel-bg);\n  color: var(--color-text-light-1) !important;\n}\n.client-item[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--app-table-row-even);\n  color: var(--color-text-light-1) !important;\n}\n.client-item.all-clients[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n  background-color: var(--app-table-header) !important;\n  color: var(--color-white) !important;\n}\n.client-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--app-table-hover) !important;\n  color: var(--color-white) !important;\n}\n.client-item.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-action) !important;\n  color: var(--color-white) !important;\n  font-weight: 600;\n}\n.client-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.year-grid[_ngcontent-%COMP%]::-webkit-scrollbar, \n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.client-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.year-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--color-border-4);\n  border-radius: 3px;\n}\n.client-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.year-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-text-gray-5);\n  border-radius: 3px;\n}\n.client-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.year-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-gray-4);\n}\n.filter-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--color-white);\n  border-radius: 6px;\n  box-shadow: 0 2px 4px var(--shadow-1);\n  border: 1px solid var(--color-border-4);\n  margin-top: -20px;\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle-group {\n  border: none;\n  box-shadow: none;\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle {\n  border: none !important;\n  border-left: none !important;\n  border-radius: 4px;\n  margin: 2px;\n  color: var(--color-text-light-1);\n  font-size: 12px;\n  font-weight: 500;\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle-button {\n  padding: 10px 6px !important;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  background-color: var(--color-action);\n  color: var(--color-white);\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle-checked .mat-icon {\n  color: var(--color-white);\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-light-1);\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle:hover:not(.mat-button-toggle-checked) {\n  background-color: var(--app-table-row-even);\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle .mat-pseudo-checkbox {\n  display: none !important;\n}\n.filter-toggle[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n  line-height: normal;\n}\n.filter-date-range[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.custom-date-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  gap: 2px;\n  background: var(--app-input-bg) !important;\n  border: 1px solid var(--color-border-4);\n  border-radius: 6px;\n  padding: 6px 8px;\n  min-height: 25px !important;\n  cursor: pointer;\n  position: relative;\n  transition: all .12s;\n  margin-top: -19px;\n  color: black !important;\n}\n.custom-date-field[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-action);\n  box-shadow: 0 1px 3px var(--shadow-blue-1);\n}\n.year-range-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n  align-items: flex-start;\n}\n.year-range-row[_ngcontent-%COMP%]   .date-field-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.year-field[_ngcontent-%COMP%] {\n  width: 120px;\n  min-width: 120px;\n}\n.date-field-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-light-1);\n  font-weight: 500;\n  line-height: 1;\n}\n.date-field-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black !important;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.date-field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-light-1);\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.date-field-icon-left[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n  margin-right: 8px;\n  cursor: pointer;\n  margin-top: -2px;\n}\n.date-field-icon-close[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-left: auto;\n  cursor: pointer;\n  transition: color 0.2s;\n  margin-top: -2px;\n}\n.date-field-icon-close[_ngcontent-%COMP%]:hover {\n  color: var(--color-error-muted);\n}\n.date-field-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-calendar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 8px;\n  background: var(--color-white);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px var(--shadow-1);\n  padding: 20px;\n  width: 320px;\n  transform: scale(.85);\n  transform-origin: top left;\n  z-index: 1000;\n}\n.calendar-view[_ngcontent-%COMP%] {\n  min-height: 280px;\n}\n.calendar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border-4);\n}\n.calendar-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: none;\n  outline: none;\n}\n.calendar-actions[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-text-light-1);\n  border: 1px solid var(--color-border-4);\n}\n.calendar-actions[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: transparent;\n  border-color: var(--color-border-3);\n}\n.calendar-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%] {\n  background: var(--color-action);\n  color: var(--color-white);\n  border: none;\n  box-shadow: 0 2px 4px var(--shadow-blue-1);\n}\n.calendar-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n  box-shadow: 0 3px 6px var(--shadow-blue-1);\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n.calendar-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-white);\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: 0 0;\n  border: 0;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background-color .2s;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.nav-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n}\n.calendar-weekdays[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-light-1);\n  padding: 8px 0;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: var(--color-white);\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all .2s;\n  position: relative;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  color: var(--color-text-gray-5);\n}\n.calendar-day.in-range[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  color: var(--color-action);\n}\n.calendar-day.start-date[_ngcontent-%COMP%], \n.calendar-day.end-date[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  font-weight: 600;\n}\n.calendar-day.start-date[_ngcontent-%COMP%]:hover, \n.calendar-day.end-date[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.month-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.month-item[_ngcontent-%COMP%], \n.year-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  font: 500 14px/1 inherit;\n  color: var(--color-white);\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all .2s;\n  background: transparent;\n}\n.month-item[_ngcontent-%COMP%]:hover, \n.year-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-border-4);\n  transform: translateY(-2px);\n  box-shadow: 0 2px 8px var(--shadow-1);\n}\n.month-item.in-range[_ngcontent-%COMP%], \n.year-item.in-range[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  color: var(--color-action);\n}\n.month-item.start-month[_ngcontent-%COMP%], \n.month-item.end-month[_ngcontent-%COMP%], \n.year-item.start-year[_ngcontent-%COMP%], \n.year-item.end-year[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n  color: var(--color-white);\n  font-weight: 600;\n}\n.month-item.start-month[_ngcontent-%COMP%]:hover, \n.month-item.end-month[_ngcontent-%COMP%]:hover, \n.year-item.start-year[_ngcontent-%COMP%]:hover, \n.year-item.end-year[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n.custom-year-calendar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 8px;\n  background: var(--color-white);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px var(--shadow-1);\n  padding: 20px;\n  width: 320px;\n  max-height: 400px;\n  transform: scale(0.85);\n  transform-origin: top left;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n}\n.year-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  overflow-y: auto;\n  max-height: 320px;\n  padding: 8px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 40px;\n  margin: 24px 14px;\n  padding: 5px 15px;\n}\n.stat-card[_ngcontent-%COMP%], \n.chart-card[_ngcontent-%COMP%], \n.tracker-section[_ngcontent-%COMP%] {\n  background: var(--app-card-bg) !important;\n  border-radius: 8px;\n  border: 1px solid var(--app-card-border) !important;\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08);\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--app-card-bg) !important;\n  border: 1px solid var(--app-card-border) !important;\n  border-radius: 16px;\n  padding: 10px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  box-shadow: var(--shadow-white-glow) !important;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  cursor: pointer;\n  min-height: 72px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.07) translateZ(0);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-value[_ngcontent-%COMP%] {\n  filter: brightness(1.15);\n}\n.date-year[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: var(--color-text-gray-3);\n  transition: color 0.3s ease;\n  flex-shrink: 0;\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-icon[_ngcontent-%COMP%] {\n  color: var(--color-action);\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 2px 0 0 0;\n  transition: filter 0.3s ease;\n}\n.stat-value.stat-blue[_ngcontent-%COMP%] {\n  color: var(--color-action) !important;\n  text-shadow: 0 0 12px rgba(149, 176, 219, 0.85) !important;\n}\n.stat-value.stat-green[_ngcontent-%COMP%] {\n  color: var(--color-success) !important;\n  text-shadow: 0 0 12px rgba(106, 203, 141, 0.85) !important;\n}\n.stat-value.stat-yellow[_ngcontent-%COMP%] {\n  color: #d97706 !important;\n  text-shadow: 0 0 12px rgba(217, 119, 6, 0.85) !important;\n}\n.stat-value.stat-cyan[_ngcontent-%COMP%] {\n  color: var(--color-scrollbar) !important;\n  text-shadow: 0 0 12px rgba(83, 211, 243, 0.85) !important;\n}\n.stat-value.stat-red[_ngcontent-%COMP%] {\n  color: var(--color-error-muted) !important;\n  text-shadow: 0 0 12px rgba(203, 69, 69, 0.85) !important;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n}\n.chart-large[_ngcontent-%COMP%] {\n  flex: 60;\n}\n.chart-small[_ngcontent-%COMP%] {\n  flex: 40;\n}\n.chart-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.chart-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-white);\n  margin: 0;\n}\n.chart-content[_ngcontent-%COMP%] {\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border-radius: 8px;\n  color: var(--color-text-light-1);\n  font-size: 14px;\n}\n.savings-chart-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 250px;\n  gap: 16px;\n}\n.overall-savings-section[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: var(--color-bg-light-5);\n  border-radius: 8px;\n  border-left: 4px solid var(--color-action);\n}\n.overall-savings-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.savings-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.savings-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text-dark-5);\n}\n.savings-color-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.donut-charts-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.donut-chart-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.middle-savings-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px 20px;\n  background: var(--app-panel-bg);\n  border: 1px solid var(--app-card-border);\n  border-radius: 8px;\n  min-width: 200px;\n  align-self: stretch;\n  justify-content: center;\n}\n.savings-item-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 12px;\n}\n.savings-label-with-dot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.savings-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background-color: var(--app-panel-bg);\n}\n.savings-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-light-1);\n  white-space: nowrap;\n}\n.savings-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--app-text-secondary);\n}\n.donut-label-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: 1px;\n}\n.savings-color-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.savings-item-row[_ngcontent-%COMP%]:nth-child(2)   .savings-color-dot[_ngcontent-%COMP%] {\n  background: var(--color-donut-stroke-pda);\n}\n.savings-item-row[_ngcontent-%COMP%]:nth-child(3)   .savings-color-dot[_ngcontent-%COMP%] {\n  background: var(--color-donut-stroke-fda);\n}\n.donut-chart[_ngcontent-%COMP%] {\n  position: relative;\n  width: 180px;\n  height: 180px;\n}\n.donut-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.donut-ring[_ngcontent-%COMP%] {\n  transition: stroke-dasharray 0.3s ease;\n  stroke: var(--color-bg-dark-7);\n  stroke-width: 35;\n}\n.donut-segment-pda[_ngcontent-%COMP%] {\n  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;\n  stroke: var(--color-donut-stroke-pda);\n  stroke-width: 35;\n}\n.donut-segment-fda[_ngcontent-%COMP%] {\n  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;\n  stroke: var(--color-donut-stroke-fda);\n  stroke-width: 35;\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.donut-overall-amount[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text-gray-2);\n  line-height: 1;\n}\n.donut-pda-amount[_ngcontent-%COMP%], \n.donut-fda-amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-action);\n  line-height: 1;\n}\n.donut-fda-amount[_ngcontent-%COMP%] {\n  color: var(--color-error-muted);\n}\n.donut-percentage[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--app-text-primary);\n  line-height: 1;\n  margin-top: 2px;\n}\n.donut-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-light-1);\n  margin-top: 4px;\n}\n.donut-bottom-label[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n}\n.donut-label-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text-light-1);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.overall-savings-center[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--color-bg-light-5);\n  border-radius: 8px;\n  border-left: 4px solid var(--color-action);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.overall-savings-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n.overall-savings-row[_ngcontent-%COMP%]   .savings-key[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text-dark-5);\n}\n.legend-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-white);\n  flex: 1;\n}\n.overall-savings-row[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--app-text-secondary);\n}\n.overall-savings-row[_ngcontent-%COMP%]   .savings-percentage[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-success);\n}\n.donut-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-gray-2);\n  margin-top: 2px;\n}\n.donut-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.savings-key-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--color-bg-light-5);\n  border-radius: 6px;\n  min-width: 180px;\n}\n.savings-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.savings-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.savings-key[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-gray-2);\n  white-space: nowrap;\n}\n.savings-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-white);\n}\n.progress-item[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.progress-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.progress-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-white);\n}\n.progress-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text-light-1);\n}\n.custom-progress-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  width: 100%;\n  height: 12px;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width .8s cubic-bezier(.4, 0, .2, 1);\n  border-radius: 9px;\n  position: relative;\n  overflow: hidden;\n}\n.progress-animate[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, .5),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.progress-bar-pda-completed[_ngcontent-%COMP%], \n.progress-bar-pda-process[_ngcontent-%COMP%], \n.progress-bar-fda-completed[_ngcontent-%COMP%], \n.progress-bar-fda-process[_ngcontent-%COMP%], \n.progress-bar-fda-receive[_ngcontent-%COMP%] {\n  background-color: var(--color-action);\n}\n.progress-bar-pda-completed-balance[_ngcontent-%COMP%], \n.progress-bar-pda-process-balance[_ngcontent-%COMP%], \n.progress-bar-fda-completed-balance[_ngcontent-%COMP%], \n.progress-bar-fda-process-balance[_ngcontent-%COMP%], \n.progress-bar-fda-receive-balance[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-3);\n}\n.progress-bar-pda-completed-balance[_ngcontent-%COMP%]::after, \n.progress-bar-pda-process-balance[_ngcontent-%COMP%]::after, \n.progress-bar-fda-completed-balance[_ngcontent-%COMP%]::after, \n.progress-bar-fda-process-balance[_ngcontent-%COMP%]::after, \n.progress-bar-fda-receive-balance[_ngcontent-%COMP%]::after {\n  content: "\\2022";\n  position: absolute;\n  right: 4px;\n  top: -8px;\n  font-size: 28px;\n  color: var(--color-action);\n}\n.tracker-section[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  margin-bottom: 24px;\n}\n.tracker-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.tracker-title[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n.tracker-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-white);\n  margin: 0 0 4px 0;\n}\n.tracker-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-light-1);\n  margin: 0;\n}\n.tracker-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.reset-all-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: none;\n  background: var(--color-white);\n  color: var(--color-error-muted);\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.reset-all-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.1);\n}\n.tracker-stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-light-1);\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.tracker-stat-value-1[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n}\n.tracker-stat-value-2[_ngcontent-%COMP%] {\n  color: var(--color-action);\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n}\n.tracker-stat-value-3[_ngcontent-%COMP%] {\n  color: var(--color-error);\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n}\n.tracker-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-card-border);\n  border-radius: 8px;\n  max-height: 450px;\n  overflow: auto;\n}\n.tracker-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--app-table-row-even);\n  border-collapse: collapse;\n}\n.tracker-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--app-table-header);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.tracker-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--app-table-header);\n  color: var(--color-white);\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  padding: 6px 8px;\n  text-align: left;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  border-right: 1px solid var(--color-bg-dark-2);\n}\n.tracker-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.tracker-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.tracker-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n  cursor: pointer;\n}\n.tracker-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.tracker-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.tracker-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--app-table-row-odd);\n}\n.tracker-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--app-table-row-even);\n}\n.tracker-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-popup-1) !important;\n}\n.tracker-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n  font-size: 12px;\n  padding: 4px 8px;\n  font-weight: 400;\n  text-align: left;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n}\n.tracker-table[_ngcontent-%COMP%]   td.centered-dash[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.date-picker-size[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n}\n@media (max-width: 1400px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .charts-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .chart-large[_ngcontent-%COMP%], \n   .chart-small[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .tracker-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tracker-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  background: var(--app-panel-bg);\n  border: 1px solid var(--app-card-border);\n  border-radius: 6px;\n  box-shadow: 0 3px 6px var(--shadow-1), 0 3px 6px var(--shadow-2);\n  width: 240px;\n  max-height: 250px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 8px 0 0 -60px;\n}\n.range-filter-panel[_ngcontent-%COMP%] {\n  width: 260px;\n  max-height: none;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.range-filter-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-white);\n}\n.range-inputs[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.range-slider-wrapper[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  margin-bottom: 8px;\n}\n.range-slider-wrapper[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.range-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n.range-value-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.range-value-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.range-input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-light-1);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.range-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.range-input-group[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.range-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.range-number-input[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid var(--color-border-4);\n  border-radius: 4px;\n  font-size: 13px;\n  color: var(--color-white);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.range-number-input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  min-width: 0;\n}\n.range-input-group[_ngcontent-%COMP%]   .range-number-input[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.range-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.range-number-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-action);\n}\n.range-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.range-number-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-gray-5);\n}\n.filter-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--color-bg-dark-2);\n}\n.filter-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--color-white);\n  background: transparent;\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-gray-5);\n}\n.filter-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.filter-item[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  font-size: 13px;\n  color: var(--color-white);\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.filter-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--app-table-row-even);\n}\n.filter-item.selected[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  color: var(--color-action);\n  font-weight: 500;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 8px 10px;\n  border-top: 1px solid var(--color-border-4);\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: capitalize;\n  outline: none;\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background: var(--color-white);\n  color: var(--color-action);\n  border: 1px solid var(--color-action);\n  font-weight: 600;\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover {\n  background: var(--color-text-blue-1);\n  border-color: var(--color-action);\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background: var(--color-action);\n  font-weight: 600;\n  color: var(--color-white);\n  box-shadow: 0 2px 4px var(--shadow-blue-1);\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:hover {\n  background: var(--color-primary-hover);\n  box-shadow: 0 3px 6px var(--shadow-blue-1);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.scroll-section[_ngcontent-%COMP%] {\n  height: calc(100vh - 115px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.tracker-subtitle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tracker-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n  gap: 16px;\n  margin-top: 10px;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important;\n  background: var(--app-card-bg);\n  padding: 12px 20px;\n  border-radius: 8px;\n  min-width: 160px;\n  flex: 1;\n}\n.tracker-stat-card-2[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-action) !important;\n  background: transparent !important;\n  padding: 12px 20px;\n  border-radius: 8px;\n  min-width: 160px;\n  flex: 1;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]   h6.tracker-stat-value-1[_ngcontent-%COMP%], \n.tracker-stat-card-2[_ngcontent-%COMP%]   h6.tracker-stat-value-2[_ngcontent-%COMP%], \n.tracker-stat-card-3[_ngcontent-%COMP%]   h6.tracker-stat-value-3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n.tracker-stat-card-3[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important;\n  background: transparent !important;\n  padding: 12px 20px;\n  border-radius: 8px;\n  min-width: 160px;\n  flex: 1;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%], \n.tracker-stat-card-2[_ngcontent-%COMP%], \n.tracker-stat-card-3[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  position: relative;\n  background: var(--app-card-bg);\n  border-radius: 10px;\n  padding: 14px 18px;\n  overflow: hidden;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]:hover, \n.tracker-stat-card-2[_ngcontent-%COMP%]:hover, \n.tracker-stat-card-3[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  z-index: 2;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4), 0 0 16px rgba(34, 197, 94, 0.35);\n}\n.tracker-stat-card-2[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4), 0 0 16px rgba(96, 165, 250, 0.35);\n}\n.tracker-stat-card-3[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4), 0 0 16px rgba(239, 68, 68, 0.35);\n}\n.tracker-stat-card-2[_ngcontent-%COMP%] {\n  border: 1px solid rgba(96, 165, 250, 0.4);\n  box-shadow: 0 0 12px rgba(96, 165, 250, 0.15);\n}\n.tracker-stat-card-2[_ngcontent-%COMP%]   .tracker-stat-value-2[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  text-shadow: 0 0 6px rgba(96, 165, 250, 0.5);\n}\n.tracker-stat-card-3[_ngcontent-%COMP%] {\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  box-shadow: 0 0 12px rgba(239, 68, 68, 0.15);\n}\n.tracker-stat-card-3[_ngcontent-%COMP%]   .tracker-stat-value-3[_ngcontent-%COMP%] {\n  color: #ef4444;\n  text-shadow: 0 0 6px rgba(239, 68, 68, 0.5);\n}\n.tracker-stat-label[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 12px;\n  font-weight: 500;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]::before, \n.tracker-stat-card-2[_ngcontent-%COMP%]::before, \n.tracker-stat-card-3[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #22c55e,\n      transparent);\n}\n.tracker-stat-card-2[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #60a5fa,\n      transparent);\n}\n.tracker-stat-card-3[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #ef4444,\n      transparent);\n}\n.tracker-stat-card-1[_ngcontent-%COMP%]:hover   .tracker-stat-value-1[_ngcontent-%COMP%], \n.tracker-stat-card-2[_ngcontent-%COMP%]:hover   .tracker-stat-value-2[_ngcontent-%COMP%], \n.tracker-stat-card-3[_ngcontent-%COMP%]:hover   .tracker-stat-value-3[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px currentColor;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-PWGFXAX3.js.map
