import {
  passwordStrengthValidator,
  passwordsMatchValidator
} from "./chunk-OGLTOXBS.js";
import {
  AuthService
} from "./chunk-VHI7YX5H.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-7LZOSO4L.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import "./chunk-ZEOMT33W.js";
import {
  MatError,
  MatFormField,
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
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/auth/reset-password/reset-password.component.ts
var _c0 = (a0) => ({ "disabled-button": a0 });
function ResetPasswordComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function ResetPasswordComponent_mat_form_field_13_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " OTP is required. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_13_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " OTP must be 6 digits. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-label");
    \u0275\u0275text(2, "OTP Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 12);
    \u0275\u0275template(4, ResetPasswordComponent_mat_form_field_13_mat_error_4_Template, 2, 0, "mat-error", 0)(5, ResetPasswordComponent_mat_form_field_13_mat_error_5_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.resetForm.get("otp")) == null ? null : tmp_1_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.resetForm.get("otp")) == null ? null : tmp_2_0.hasError("minlength")) || ((tmp_2_0 = ctx_r0.resetForm.get("otp")) == null ? null : tmp_2_0.hasError("maxlength")));
  }
}
function ResetPasswordComponent_mat_form_field_14_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " New Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_14_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 8 characters. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_14_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Must contain upper, lower, number, special character, and be at least 8 characters. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-label");
    \u0275\u0275text(2, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 13);
    \u0275\u0275elementStart(4, "mat-icon", 14);
    \u0275\u0275listener("click", function ResetPasswordComponent_mat_form_field_14_Template_mat_icon_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hide = !ctx_r0.hide);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ResetPasswordComponent_mat_form_field_14_mat_error_6_Template, 2, 0, "mat-error", 0)(7, ResetPasswordComponent_mat_form_field_14_mat_error_7_Template, 2, 0, "mat-error", 0)(8, ResetPasswordComponent_mat_form_field_14_mat_error_8_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.hide ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hide ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.resetForm.get("newPassword")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.resetForm.get("newPassword")) == null ? null : tmp_4_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r0.resetForm.get("newPassword")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["weakPassword"]);
  }
}
function ResetPasswordComponent_mat_form_field_15_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Confirm Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-label");
    \u0275\u0275text(2, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 15);
    \u0275\u0275elementStart(4, "mat-icon", 14);
    \u0275\u0275listener("click", function ResetPasswordComponent_mat_form_field_15_Template_mat_icon_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hideConfirm = !ctx_r0.hideConfirm);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ResetPasswordComponent_mat_form_field_15_mat_error_6_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.hideConfirm ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hideConfirm ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.resetForm.get("confirmPassword")) == null ? null : tmp_3_0.hasError("required"));
  }
}
function ResetPasswordComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275text(1, " Submit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.resetForm.invalid || !ctx_r0.otpSent)("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r0.resetForm.invalid || !ctx_r0.otpSent));
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  route;
  router;
  authService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  resetToken = null;
  uuid = null;
  otpSent = false;
  linkValidated = false;
  hide = true;
  hideConfirm = true;
  username = "";
  resetForm;
  constructor(route, router, authService, snackBar) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.snackBar = snackBar;
    this.resetForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required, Validators.minLength(8), passwordStrengthValidator]),
      confirmPassword: new FormControl("", [Validators.required]),
      otp: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    }, { validators: passwordsMatchValidator });
  }
  ngOnInit() {
    this.storeToken();
    this.uuid = sessionStorage.getItem("uuid");
  }
  storeToken() {
    this.route.params.subscribe((params) => {
      this.resetToken = params["token"] || null;
      if (this.resetToken) {
        sessionStorage.setItem("resetToken", this.resetToken);
        this.validateLink();
      }
    });
  }
  validateLink() {
    if (!this.resetToken)
      return;
    this.loader.show();
    this.authService.validateLink(this.resetToken).subscribe({
      next: (res) => {
        this.username = res.username;
        this.loader.hide();
        this.linkValidated = true;
        this.otpSent = true;
        this.uuid = res.uuid;
        this.snackBar.showSuccess("Link validated successfully. OTP has been sent to your email.");
      },
      error: (error) => {
        this.loader.hide();
        const errmsg = error.error?.detail || "Invalid or expired link";
        this.snackBar.showError(errmsg);
        setTimeout(() => {
          this.router.navigate(["login"]);
        }, 2e3);
      }
    });
  }
  get isPasswordValid() {
    const newPassword = this.resetForm.get("newPassword");
    const confirmPassword = this.resetForm.get("confirmPassword");
    return !!(newPassword?.valid && confirmPassword?.valid && !this.resetForm.hasError("passwordMismatch"));
  }
  onSubmit() {
    if (this.resetForm.valid && this.otpSent && this.resetToken && this.uuid) {
      const { newPassword, otp } = this.resetForm.value;
      this.loader.show();
      this.authService.sendOtpfromforget(this.username, Number(otp), this.uuid, newPassword).subscribe({
        next: (res) => {
          this.loader.hide();
          this.snackBar.showSuccess("Password reset successfully. Please login with your new password.");
          this.router.navigate(["login"]);
        },
        error: (error) => {
          this.loader.hide();
          const errmsg = error.error?.details || "Error resetting password. Please try again.";
          this.snackBar.showError(errmsg);
        }
      });
    } else if (!this.otpSent) {
      this.snackBar.showError("Please request OTP first");
    } else {
      this.resetForm.markAllAsTouched();
    }
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 7, consts: [[4, "ngIf"], [1, "container"], [1, "form-section"], ["src", "./assets/forgotpassword.svg", "alt", "Reset Password Image"], [1, "image-section"], [1, "form"], [2, "text-align", "center"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", "class", "compact-form-field", 4, "ngIf"], ["class", "error-text-password", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "ngClass", 4, "ngIf"], ["appearance", "outline", 1, "compact-form-field"], ["matInput", "", "type", "text", "placeholder", "Enter 6-digit OTP", "formControlName", "otp", "maxlength", "6"], ["matInput", "", "placeholder", "Enter your new password", "formControlName", "newPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "fontSet", "material-symbols-outlined", 1, "eye-icon", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "placeholder", "Confirm your new password", "formControlName", "confirmPassword", 3, "type"], [1, "error-text-password"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "ngClass"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ResetPasswordComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "mat-card")(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h3");
      \u0275\u0275text(9, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Enter your new password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 7);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(13, ResetPasswordComponent_mat_form_field_13_Template, 6, 2, "mat-form-field", 8)(14, ResetPasswordComponent_mat_form_field_14_Template, 9, 5, "mat-form-field", 8)(15, ResetPasswordComponent_mat_form_field_15_Template, 7, 3, "mat-form-field", 8)(16, ResetPasswordComponent_div_16_Template, 2, 0, "div", 9)(17, ResetPasswordComponent_button_17_Template, 2, 4, "button", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(12);
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.linkValidated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.linkValidated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.linkValidated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.linkValidated && ctx.resetForm.hasError("passwordMismatch") && (((tmp_5_0 = ctx.resetForm.get("confirmPassword")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.resetForm.get("newPassword")) == null ? null : tmp_5_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.linkValidated);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, NgIf, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatCardModule, MatCard, MatButtonModule, MatButton, LoaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/assets/background-image.png);\n  width: 100%;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n  align-items: center !important;\n  justify-content: space-evenly !important;\n  background: var(--color-bg-dark-1);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 18px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 700px;\n  flex-wrap: wrap;\n}\n.form-section[_ngcontent-%COMP%], \n.image-section[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  min-width: 260px;\n}\n.image-section[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  object-fit: cover;\n}\n.form-section[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 20px;\n}\n.form[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 15px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  height: auto;\n}\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 18px;\n  color: var(--color-white);\n  font-weight: 600;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  margin-bottom: 20px;\n}\na[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 156px;\n  margin-top: 0px;\n  text-decoration: none;\n}\nbutton[mat-raised-button][color=primary][_ngcontent-%COMP%] {\n  background-color: #3C50E0 !important;\n  color: white !important;\n  width: 100%;\n  max-width: 250px;\n  height: 40px;\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  font-size: 14px;\n}\nbutton[mat-raised-button][color=primary][_ngcontent-%COMP%]:disabled {\n  background-color: #555 !important;\n  color: #888 !important;\n  cursor: not-allowed !important;\n}\n  .mat-mdc-form-field-infix {\n  padding: 0 8px !important;\n  min-height: 36px !important;\n  display: flex;\n  align-items: center;\n}\n  .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border) !important;\n}\n  .mat-mdc-input-element {\n  color: var(--app-input-text) !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .mat-mdc-form-field {\n  --mdc-outlined-text-field-outline-color: #c6c7ca !important;\n  --mdc-outlined-text-field-focus-outline-color: #c6c7ca !important;\n  --mdc-outlined-text-field-label-text-color: #64748B !important;\n  --mdc-outlined-text-field-focus-label-text-color: #64748B !important;\n  --mdc-outlined-text-field-outline-width: 0.50px;\n  --mdc-outlined-text-field-focus-outline-width: 0.50px;\n}\n.disabled-button.mat-raised-button[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.resend-button[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #4288f0;\n  color: #4288f0;\n  margin: 10px;\n}\n.verify-button[_ngcontent-%COMP%] {\n  background: #5f7078;\n  margin: 10px;\n  color: white;\n}\n.otpClass[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n}\n  .otp-input {\n  width: 30px !important;\n  height: 30px !important;\n  border-radius: 4px !important;\n  border: solid 1px #c5c5c5 !important;\n  text-align: center !important;\n  font-size: 32px !important;\n}\n  .n-o-c {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: -15px;\n  margin-left: 23px;\n}\n.error-text-password[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 11px;\n  margin-top: -18px;\n  margin-left: 17px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 328px;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent" });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-O45BTYCQ.js.map
