import {
  LoginSignalService
} from "./chunk-4ZLE6GIL.js";
import {
  passwordStrengthValidator,
  passwordsMatchValidator
} from "./chunk-OGLTOXBS.js";
import {
  AuthService
} from "./chunk-M5H6RBVW.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-7LZOSO4L.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import "./chunk-RW2EUPUP.js";
import {
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel
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
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  AuthSessionService
} from "./chunk-EY4LAK3R.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  Component,
  DOCUMENT,
  Inject,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  Subject,
  computed,
  forwardRef,
  inject,
  interval,
  setClassMetadata,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs
var _c0 = (a0) => ({
  "error-input": a0
});
function NgOtpInputComponent_div_0_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.separator, " ");
  }
}
function NgOtpInputComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 5, 0);
    \u0275\u0275listener("paste", function NgOtpInputComponent_div_0_ng_container_2_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keyup_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyUp($event, i_r4));
    })("input", function NgOtpInputComponent_div_0_ng_container_2_Template_input_input_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInput($event, i_r4));
    })("keydown", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keydown_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event, i_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgOtpInputComponent_div_0_ng_container_2_span_3_Template, 2, 1, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r6 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("otp-input ", ctx_r1.config.inputClass, "");
    \u0275\u0275property("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r5])("id", ctx_r1.getBoxId(i_r4))("ngClass", \u0275\u0275pureFunction1(12, _c0, (ctx_r1.config == null ? null : ctx_r1.config.showError) && (ctx_r1.formControl == null ? null : ctx_r1.formControl.invalid) && ((ctx_r1.formControl == null ? null : ctx_r1.formControl.dirty) || (ctx_r1.formControl == null ? null : ctx_r1.formControl.touched))));
    \u0275\u0275attribute("inputmode", ctx_r1.config.allowNumbersOnly ? "numeric" : ctx_r1.config.inputMode || "text");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.separator && !last_r6);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("focusin", function NgOtpInputComponent_div_0_Template_div_focusin_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusIn());
    })("focusout", function NgOtpInputComponent_div_0_Template_div_focusout_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusOut());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, NgOtpInputComponent_div_0_ng_container_2_Template, 4, 14, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass, "");
    \u0275\u0275propertyInterpolate1("id", "c_", ctx_r1.componentKey, "");
    \u0275\u0275property("ngStyle", ctx_r1.config.containerStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.controlKeys);
  }
}
var KeyboardUtil = class {
  static ifTab(event) {
    return this.ifKey(event, "Tab");
  }
  static ifDelete(event) {
    return this.ifKey(event, "Delete;Del");
  }
  static ifBackspace(event) {
    return this.ifKey(event, "Backspace");
  }
  static ifRightArrow(event) {
    return this.ifKey(event, "ArrowRight;Right");
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, "ArrowLeft;Left");
  }
  static ifSpacebar(event) {
    return this.ifKey(event, "Spacebar; ");
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(";");
    return keysToCheck.some((k) => k === event.key);
  }
};
var ObjectUtil = class {
  static keys(obj) {
    if (!obj) return [];
    return Object.keys(obj);
  }
};
var NgOtpInputComponent = class _NgOtpInputComponent {
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get inputType() {
    return this.config?.isPasswordInput ? "password" : this.config?.allowNumbersOnly ? "tel" : "text";
  }
  get controlKeys() {
    return ObjectUtil.keys(this.otpForm?.controls);
  }
  get formControl() {
    return this.formCtrl ?? this.inj?.get(NgControl);
  }
  constructor(document, inj) {
    this.document = document;
    this.inj = inj;
    this.config = {
      length: 4
    };
    this.onBlur = new Subject();
    this.onInputChange = new Subject();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + (/* @__PURE__ */ new Date()).getTime().toString(36);
    this.destroy$ = new Subject();
    this.activeFocusCount = 0;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this._isDisabled = false;
  }
  ngOnInit() {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl());
    }
    this.otpForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  setDisabledState(isDisabled) {
    this._isDisabled = isDisabled;
    if (this.otpForm) {
      if (isDisabled) {
        this.otpForm.disable({
          emitEvent: false
        });
      } else {
        this.otpForm.enable({
          emitEvent: false
        });
      }
    }
  }
  writeValue(value) {
    this.currentVal = !this.hasVal(value) ? null : value;
    this.setValue(this.currentVal);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onFocusIn() {
    this.onTouched();
    this.activeFocusCount++;
  }
  onFocusOut() {
    setTimeout(() => {
      this.activeFocusCount--;
      if (this.activeFocusCount === 0) {
        this.onTouched();
        this.onBlur.next();
      }
    }, 0);
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName("otp-input")[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifKey($event, "Enter")) {
      let inp = this.document.getElementById(currentInputId);
      const form = inp?.closest("form");
      if (form) {
        $event.preventDefault();
        const submitEvent = new Event("submit", {
          bubbles: true,
          cancelable: true
        });
        form.dispatchEvent(submitEvent);
        return;
      }
    }
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
    if (KeyboardUtil.ifBackspace($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
    if (KeyboardUtil.ifDelete($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
  }
  hasVal(val) {
    return val != null && val != void 0 && (!val?.trim || val.trim() != "");
  }
  onInput($event, inputIdx) {
    let newVal = this.hasVal(this.currentVal) ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = null;
      $event.stopPropagation();
      $event.preventDefault();
      this.clearInput(null, inputIdx);
      return;
    }
    if (this.ifValidKeyCode(null, $event.target.value)) {
      const nextInputId = this.getBoxId(inputIdx + 1);
      this.setSelected(nextInputId);
      this.rebuildValue();
    } else {
      $event.target.value = null;
      let ctrlName = this.getControlName(inputIdx);
      this.otpForm.controls[ctrlName]?.setValue(null);
      this.rebuildValue();
    }
  }
  onKeyUp($event, inputIdx) {
    if (KeyboardUtil.ifTab($event)) {
      inputIdx -= 1;
    }
    const nextInputId = this.getBoxId(inputIdx + 1);
    const prevInputId = this.getBoxId(inputIdx - 1);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
  }
  validateNumber(val) {
    return val && /^[0-9]+$/.test(val);
  }
  getBoxId(idx) {
    return `otp_${idx}_${this.componentKey}`;
  }
  clearInput(eleId, inputIdx) {
    let ctrlName = this.getControlName(inputIdx);
    this.otpForm.controls[ctrlName]?.setValue(null);
    if (eleId) {
      const ele = this.document.getElementById(eleId);
      if (ele && ele instanceof HTMLInputElement) {
        ele.value = null;
      }
    }
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = this.document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event, val) {
    const inp = val ?? event.key;
    if (this.config?.allowNumbersOnly) {
      return this.validateNumber(inp);
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /^[a-zA-Z0-9%*_\-@#$!]$/.test(inp) && inp.length == 1;
  }
  focusTo(eleId) {
    const ele = this.document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm?.reset();
    if (!this.hasVal(value)) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, "");
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      setTimeout(() => {
        const containerItem = this.document.getElementById(`c_${this.componentKey}`);
        var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
        let ele = containerItem.getElementsByClassName("otp-input")[indexOfElementToFocus];
        if (ele && ele.focus) {
          setTimeout(() => {
            ele.focus();
          }, 1);
        }
      }, 0);
    }
    this.rebuildValue();
  }
  rebuildValue() {
    let val = null;
    ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
      let ctrlVal = this.otpForm.controls[k].value;
      if (ctrlVal) {
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == "upper" || this.config.letterCase.toLocaleLowerCase() == "lower");
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == "upper" ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        if (val == null) {
          val = ctrlVal;
        } else {
          val += ctrlVal;
        }
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if (this.currentVal != val) {
      this.currentVal = val;
      this.onChange(val);
      if (this.formCtrl?.setValue) {
        this.formCtrl.setValue(val);
      }
      this.onInputChange.next(val);
    }
  }
  handlePaste(e) {
    let clipboardData = e.clipboardData || window["clipboardData"];
    if (clipboardData) {
      var pastedData = clipboardData.getData("Text");
    }
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgOtpInputComponent,
      selectors: [["ng-otp-input"], ["ngx-otp-input"]],
      inputs: {
        config: "config",
        formCtrl: "formCtrl",
        disabled: "disabled"
      },
      outputs: {
        onBlur: "onBlur",
        onInputChange: "onInputChange"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgOtpInputComponent),
        multi: true
      }]), \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["inp", ""], ["tabindex", "0", 3, "class", "id", "ngStyle", "focusin", "focusout", 4, "ngIf"], ["tabindex", "0", 3, "focusin", "focusout", "id", "ngStyle"], [1, "n-o-c"], [4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "ngClass"], [4, "ngIf"]],
      template: function NgOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgOtpInputComponent_div_0_Template, 3, 7, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
        }
      },
      dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, PatternValidator, FormControlDirective, NgIf, NgForOf, NgStyle, NgClass],
      styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputComponent, [{
    type: Component,
    args: [{
      selector: "ng-otp-input, ngx-otp-input",
      imports: [ReactiveFormsModule, NgIf, NgForOf, NgStyle, NgClass],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgOtpInputComponent),
        multi: true
      }],
      template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
  [ngStyle]="config.containerStyles" tabindex="0" \r
  (focusin)="onFocusIn()" \r
  (focusout)="onFocusOut()">\r
  <div class="n-o-c">\r
    <ng-container *ngFor="let item of controlKeys;let i=index;let last=last">\r
      <input (paste)="handlePaste($event)" [pattern]="config.allowNumbersOnly ? '\\\\d*' : ''" \r
      [type]="inputType"  [placeholder]="config?.placeholder || ''"\r
      [attr.inputmode]="config.allowNumbersOnly ? 'numeric' : (config.inputMode ||'text')"\r
      [ngStyle]="config.inputStyles" \r
      class="otp-input {{config.inputClass}}" autocomplete="one-time-code" \r
      [formControl]="otpForm.controls[item]" #inp [id]="getBoxId(i)" \r
      (keyup)="onKeyUp($event,i)" (input)="onInput($event,i)" (keydown)="onKeyDown($event,i)" [ngClass]="{'error-input': (config?.showError && formControl?.invalid && (formControl?.dirty || formControl?.touched))}">\r
      <span *ngIf="config.separator && !last">\r
        {{config.separator}}\r
      </span>\r
    </ng-container>\r
  </div>  \r
</div>`,
      styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Injector
  }], {
    config: [{
      type: Input
    }],
    formCtrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onBlur: [{
      type: Output
    }],
    onInputChange: [{
      type: Output
    }]
  });
})();
var NgOtpInputModule = class _NgOtpInputModule {
  static {
    this.\u0275fac = function NgOtpInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgOtpInputModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [NgOtpInputComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputModule, [{
    type: NgModule,
    args: [{
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    }]
  }], null, null);
})();

// src/app/auth/otp/otp.component.ts
var _c02 = (a0) => ({ "disabled-button": a0 });
function OtpComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function OtpComponent_Conditional_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2, "Confirm it's you");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Enter the code sent to your email to your saved information ");
    \u0275\u0275elementEnd()();
  }
}
function OtpComponent_Conditional_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Enter the code sent to your email to your saved information ");
    \u0275\u0275elementEnd()();
  }
}
function OtpComponent_Conditional_6_div_4_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Old Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_Conditional_6_div_4_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " New Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_Conditional_6_div_4_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Must contain upper, lower, number, special character, and be at least 8 characters. ");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_Conditional_6_div_4_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Confirm Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_Conditional_6_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_Conditional_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 15)(2, "mat-label");
    \u0275\u0275text(3, "Old Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275template(5, OtpComponent_Conditional_6_div_4_mat_error_5_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 15)(7, "mat-label");
    \u0275\u0275text(8, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 17);
    \u0275\u0275template(10, OtpComponent_Conditional_6_div_4_mat_error_10_Template, 2, 0, "mat-error", 0)(11, OtpComponent_Conditional_6_div_4_mat_error_11_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 15)(13, "mat-label");
    \u0275\u0275text(14, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 18);
    \u0275\u0275template(16, OtpComponent_Conditional_6_div_4_mat_error_16_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OtpComponent_Conditional_6_div_4_div_17_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.otpForm.get("oldPassword")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.otpForm.get("newPassword")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.otpForm.get("newPassword")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["weakPassword"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.otpForm.get("confirmPassword")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.otpForm.hasError("passwordMismatch") && (((tmp_6_0 = ctx_r1.otpForm.get("confirmPassword")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx_r1.otpForm.get("newPassword")) == null ? null : tmp_6_0.touched)));
  }
}
function OtpComponent_Conditional_6_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21)(1, "mat-icon", 22);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.errmsg, " ");
  }
}
function OtpComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, OtpComponent_Conditional_6_div_1_Template, 5, 0, "div", 7)(2, OtpComponent_Conditional_6_div_2_Template, 5, 0, "div", 7);
    \u0275\u0275elementStart(3, "form", 8);
    \u0275\u0275template(4, OtpComponent_Conditional_6_div_4_Template, 18, 5, "div", 0);
    \u0275\u0275element(5, "ng-otp-input", 9);
    \u0275\u0275template(6, OtpComponent_Conditional_6_p_6_Template, 4, 1, "p", 10);
    \u0275\u0275elementStart(7, "div", 6)(8, "p");
    \u0275\u0275text(9, "Code expires in ");
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "button", 13);
    \u0275\u0275listener("click", function OtpComponent_Conditional_6_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendOtp());
    });
    \u0275\u0275text(14, "Resend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275listener("click", function OtpComponent_Conditional_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyOtp());
    });
    \u0275\u0275text(16, "Verify");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1._otpNReset);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._otpNReset);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._otpNReset);
    \u0275\u0275advance();
    \u0275\u0275property("config", ctx_r1.otpConfig);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errmsg);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.countdown));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c02, ctx_r1.countdown > 0))("disabled", ctx_r1.countdown > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c02, ctx_r1.otpForm.invalid))("disabled", ctx_r1.otpForm.invalid);
  }
}
function OtpComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2, "OTP verified successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Please Reset Password from the Link Shared through Email and Login");
    \u0275\u0275elementEnd()();
  }
}
var OtpComponent = class _OtpComponent {
  authservice;
  router;
  snackBar;
  loginSignal;
  route;
  authSessionService;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  countdown = 900;
  errmsg = "";
  timerSubscription;
  otpForm;
  resend = false;
  frgtRspnsFlag = false;
  _otpNReset = false;
  isDisbursementOtp = false;
  otpConfig = {
    length: 6,
    allowNumbersOnly: true,
    showError: true,
    isPasswordInput: true
  };
  constructor(authservice, router, snackBar, loginSignal, route, authSessionService) {
    this.authservice = authservice;
    this.router = router;
    this.snackBar = snackBar;
    this.loginSignal = loginSignal;
    this.route = route;
    this.authSessionService = authSessionService;
    this.loader.hide();
    this._otpNReset = this.loginSignal.otpNreset();
    if (this._otpNReset) {
      this.otpForm = new FormGroup({
        otp: new FormControl("", [Validators.required, Validators.minLength(6)]),
        oldPassword: new FormControl("", [Validators.required]),
        newPassword: new FormControl("", [Validators.required, passwordStrengthValidator]),
        confirmPassword: new FormControl("", [Validators.required])
      }, { validators: passwordsMatchValidator });
    } else {
      this.otpForm = new FormGroup({
        otp: new FormControl("", [Validators.required, Validators.minLength(6)])
      });
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.isDisbursementOtp = params["type"] === "disbursement";
    });
    this.startCountdown();
    this.otpForm.get("confirmPassword")?.valueChanges.subscribe(() => {
      this.otpForm.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
    this.otpForm.get("newPassword")?.valueChanges.subscribe(() => {
      this.otpForm.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
  }
  startCountdown() {
    this.countdown = 900;
    this.timerSubscription = interval(1e3).pipe(take(this.countdown)).subscribe(() => {
      this.countdown--;
    });
  }
  formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }
  pad(value) {
    return value < 10 ? "0" + value : value.toString();
  }
  resendOtp() {
    this.startCountdown();
    this.authservice.reSendOtp().subscribe({
      next: (res) => {
        this.snackBar.showSuccess("OTP Resent successfully");
      },
      error: (error) => {
        this.snackBar.showError(this.errmsg);
      }
    });
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  // Refer this function when you are having first time user & And the MFA together and add in verify otp By Rahul
  // firstTimeLoginPasswordReset() {
  //   if (!this.otpForm.invalid) {
  //     const { oldPassword, newPassword } = this.otpForm.value;
  //   }
  //   else {
  //     this.otpForm.markAllAsTouched();
  //     return;
  //   }
  //   // Proceed if valid
  // }
  verifyOtp() {
    this.loader.show();
    if (this._otpNReset) {
      if (!this.otpForm.invalid) {
        const { otp } = this.otpForm.value;
        const uuid = this.loginSignal.uuid();
        this.authservice.sendOtp(otp, uuid).subscribe({
          next: (res) => {
            this.snackBar.showSuccess("Otp Verified successfully");
            this.router.navigate(["layout"]);
          },
          error: (error) => {
            this.loader.hide();
            this.snackBar.showError(error.error?.error || "Something went wrong. Please try again.");
          }
        });
      }
    } else {
      if (!this.otpForm.invalid) {
        const { otp } = this.otpForm.value;
        const uuid = sessionStorage.getItem("uuid") || this.loginSignal.uuid();
        if (this.isDisbursementOtp) {
          const disbursementUuid = sessionStorage.getItem("disbursementUuid");
          if (disbursementUuid) {
            this.loader.show();
            this.authservice.validateDisbursementOtp({ uuid: disbursementUuid, otp: parseInt(otp) }).subscribe({
              next: (res) => {
                sessionStorage.setItem("pa-success-response", JSON.stringify(res));
                this.loader.hide();
                this.snackBar.showSuccess("Disbursement access granted successfully");
                const disbursementUuid2 = sessionStorage.getItem("disbursementUuid");
                const username = sessionStorage.getItem("username");
                if (disbursementUuid2 && username) {
                  this.authSessionService.setDisbursementOwner(username);
                  this.authSessionService.broadcastLogout("STALE");
                }
                window.history.pushState(null, "", window.location.href);
                if (res.pda.is_re_request === "Y") {
                  this.router.navigate(["/port-agent-form"]);
                } else {
                  this.router.navigate(["/pdfa"]);
                }
              },
              error: (error) => {
                this.loader.hide();
                this.snackBar.showError(error.error?.error || "Invalid OTP. Please try again.");
              }
            });
          } else {
            this.loader.hide();
            this.snackBar.showError("Session expired. Please try again.");
            this.router.navigate(["/login"]);
          }
        } else {
          this.authservice.sendOtp(otp, uuid).subscribe({
            next: (res) => {
              this.snackBar.showSuccess("Otp Verified successfully");
              this.router.navigate(["layout"]);
            },
            error: (error) => {
              this.loader.hide();
              this.snackBar.showError(error.error?.error || "Something went wrong. Please try again.");
            }
          });
        }
      }
    }
  }
  static \u0275fac = function OtpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(LoginSignalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthSessionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[4, "ngIf"], [1, "container"], [1, "form-section"], ["src", "./assets/otp.svg", "alt", "Otp Image"], [1, "image-section"], [1, "form"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngIf"], [3, "formGroup"], ["formControlName", "otp", "containerClass", "otpClass", 3, "config"], ["class", "error-msg", 4, "ngIf"], [2, "color", "red"], [2, "display", "flex"], [1, "resend-button", 3, "click", "ngClass", "disabled"], [1, "verify-button", 3, "click", "ngClass", "disabled"], ["appearance", "outline", 1, "compact-form-field"], ["matInput", "", "type", "text", "placeholder", "Enter your Old Password", "formControlName", "oldPassword"], ["matInput", "", "type", "password", "placeholder", "Enter your New Password", "formControlName", "newPassword"], ["matInput", "", "type", "text", "placeholder", "Enter your Confirm Password", "formControlName", "confirmPassword"], ["class", "error-text-password", 4, "ngIf"], [1, "error-text-password"], [1, "error-msg"], ["fontSet", "material-symbols-outlined", 2, "margin-bottom", "-12px"]], template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OtpComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "mat-card")(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, OtpComponent_Conditional_6_Template, 17, 15, "div", 5)(7, OtpComponent_Conditional_7_Template, 5, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.frgtRspnsFlag ? 6 : 7);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgClass, NgIf, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatCardModule, MatCard, LoaderComponent, NgOtpInputComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/assets/background-image.png);\n  width: 100%;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n  align-items: center !important;\n  justify-content: space-evenly !important;\n  background: var(--color-bg-dark-1);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 18px;\n  box-shadow: 0 4px 20px var(--shadow-1);\n  width: 100%;\n  max-width: 700px;\n  flex-wrap: wrap;\n}\n.form-section[_ngcontent-%COMP%], \n.image-section[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  min-width: 260px;\n}\n.image-section[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  object-fit: cover;\n}\n.form-section[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 20px;\n}\n.form[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 15px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  height: auto;\n}\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 18px;\n  color: var(--color-white);\n  font-weight: 600;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  margin-bottom: 20px;\n}\na[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 156px;\n  margin-top: 0px;\n  text-decoration: none;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 40px;\n  background-color: var(--color-action);\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--color-primary-hover);\n}\n  .mat-mdc-form-field-infix {\n  padding: 0 8px !important;\n  min-height: 36px !important;\n  display: flex;\n  align-items: center;\n}\n  .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border) !important;\n}\n  .mat-mdc-input-element {\n  color: var(--app-input-text) !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error) !important;\n  margin-top: -5px;\n}\n  .mat-mdc-form-field {\n  --mdc-outlined-text-field-outline-color: var(--app-input-border) !important;\n  --mdc-outlined-text-field-focus-outline-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-label-text-color: var(--app-input-label) !important;\n  --mdc-outlined-text-field-focus-label-text-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-outline-width: 0.50px;\n  --mdc-outlined-text-field-focus-outline-width: 0.50px;\n}\n.disabled-button[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.disabled-button.mat-raised-button[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.resend-button[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--color-link);\n  color: var(--color-link);\n  margin: 10px;\n}\n.verify-button[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  margin: 10px;\n  color: white;\n}\n.otpClass[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n}\n  .otp-input {\n  width: 30px !important;\n  height: 30px !important;\n  border-radius: 4px !important;\n  border: solid 1px var(--app-border) !important;\n  text-align: center !important;\n  font-size: 24px !important;\n  background-color: var(--color-bg-dark-2) !important;\n  color: var(--app-text-primary) !important;\n}\n  .n-o-c {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: var(--app-status-error);\n  margin-top: -15px;\n  margin-left: 23px;\n}\n.error-text-password[_ngcontent-%COMP%] {\n  color: var(--app-status-error);\n  font-size: 11px;\n  margin-top: -18px;\n  margin-left: 17px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 328px;\n}\n/*# sourceMappingURL=otp.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent" });
})();
export {
  OtpComponent
};
//# sourceMappingURL=chunk-UCM6FL2X.js.map
