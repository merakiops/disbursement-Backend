import {
  LoginSignalService
} from "./chunk-4ZLE6GIL.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/auth/forget-pswd/forget-pswd.component.ts
var _c0 = (a0) => ({ "disabled-button": a0 });
function ForgetPswdComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function ForgetPswdComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username is required. ");
    \u0275\u0275elementEnd();
  }
}
var ForgetPswdComponent = class _ForgetPswdComponent {
  authservice;
  router;
  snackBar;
  loginSignal;
  route;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  currentStep = 1;
  username = "";
  uuid = "";
  hide = true;
  hideConfirm = true;
  passwordreset_token = "";
  hasEmail = true;
  statusMessage = "";
  disbursementToken = null;
  isDisbursementMode = false;
  forgotForm = new FormGroup({
    username: new FormControl("", [Validators.required])
  });
  otpForm = new FormGroup({
    otp: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  });
  passwordForm = new FormGroup({
    newPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required])
  }, { validators: this.passwordMatchValidator() });
  constructor(authservice, router, snackBar, loginSignal, route) {
    this.authservice = authservice;
    this.router = router;
    this.snackBar = snackBar;
    this.loginSignal = loginSignal;
    this.route = route;
  }
  ngOnInit() {
  }
  passwordMatchValidator() {
    return (control) => {
      const newPassword = control.get("newPassword");
      const confirmPassword = control.get("confirmPassword");
      if (!newPassword || !confirmPassword) {
        return null;
      }
      return newPassword.value === confirmPassword.value ? null : { passwordMismatch: true };
    };
  }
  onSubmitUsername() {
    if (this.forgotForm.valid) {
      const { username } = this.forgotForm.value;
      this.username = username;
      this.loader.show();
      this.authservice.forgotpassword(username).subscribe({
        next: (res) => {
          this.loader.hide();
          if (res.screen == "Check Your Email") {
            this.snackBar.showSuccess(res.message);
            this.router.navigate(["login"]);
          } else {
            this.snackBar.showError(res.message);
            this.router.navigate(["login"]);
          }
        },
        error: (err) => {
          this.loader.hide();
          const errmsg = err.error?.error || "Something went wrong. Please try again.";
          this.snackBar.showError(errmsg);
        }
      });
    }
  }
  backToLogin() {
    this.router.navigate(["login"]);
  }
  static \u0275fac = function ForgetPswdComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgetPswdComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(LoginSignalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgetPswdComponent, selectors: [["app-forget-pswd"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 7, consts: [[4, "ngIf"], [1, "container"], [1, "form-section"], ["src", "./assets/forgotpassword.svg", "alt", "Forgot Password Image"], [1, "image-section"], [1, "form"], [2, "text-align", "center"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "compact-form-field"], ["matInput", "", "type", "text", "placeholder", "Enter your username", "formControlName", "username"], ["mat-raised-button", "", "type", "submit", 1, "request-button", 3, "disabled", "ngClass"], ["routerLink", "/login", 1, "backToLogin"]], template: function ForgetPswdComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ForgetPswdComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "mat-card")(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div")(8, "div", 6)(9, "h3");
      \u0275\u0275text(10, "Forgot password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "No worries, we'll send you reset password link to your email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "form", 7);
      \u0275\u0275listener("ngSubmit", function ForgetPswdComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmitUsername();
      });
      \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-label");
      \u0275\u0275text(16, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 9);
      \u0275\u0275template(18, ForgetPswdComponent_mat_error_18_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275text(20, " Request Link ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 11);
      \u0275\u0275text(22, "Back to login");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(13);
      \u0275\u0275property("formGroup", ctx.forgotForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.forgotForm.get("username")) == null ? null : tmp_2_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.forgotForm.invalid)("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx.forgotForm.invalid));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgClass, NgIf, MatIconModule, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatCardModule, MatCard, RouterModule, RouterLink, MatButtonModule, MatButton, LoaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/assets/background-image.png);\n  width: 100%;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  justify-content: space-evenly !important;\n  background: var(--color-bg-dark-1);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 18px;\n  box-shadow: 0 4px 20px var(--shadow-1);\n  width: 100%;\n  max-width: 700px;\n  flex-wrap: wrap;\n}\n.form-section[_ngcontent-%COMP%], \n.image-section[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  min-width: 260px;\n}\n.image-section[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  object-fit: cover;\n}\n.form-section[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 20px;\n}\n.form[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 15px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  height: auto;\n}\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 18px;\n  color: var(--color-white);\n  font-weight: 600;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  margin-bottom: 20px;\n}\na[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 156px;\n  margin-top: 0px;\n  text-decoration: none;\n  color: var(--app-link-color);\n}\na[_ngcontent-%COMP%]:hover {\n  color: var(--app-link-hover-color);\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 40px;\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.request-button[_ngcontent-%COMP%] {\n  background-color: #3C50E0 !important;\n  color: white !important;\n}\n.request-button[_ngcontent-%COMP%]:disabled {\n  background-color: #555 !important;\n  color: #888 !important;\n  cursor: not-allowed !important;\n}\n  .mat-mdc-form-field-infix {\n  padding: 0 8px !important;\n  min-height: 36px !important;\n  display: flex;\n  align-items: center;\n}\n  .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border) !important;\n}\n  .mat-mdc-input-element {\n  color: var(--app-input-text) !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error) !important;\n  margin-top: -5px;\n}\n  .mat-mdc-form-field {\n  --mdc-outlined-text-field-outline-color: var(--app-input-border) !important;\n  --mdc-outlined-text-field-focus-outline-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-focus-label-text-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-outline-width: 0.50px;\n  --mdc-outlined-text-field-focus-outline-width: 0.50px;\n}\n.disabled-button.mat-raised-button[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n  .otp-input {\n  width: 30px !important;\n  height: 30px !important;\n  border-radius: 4px !important;\n  border: solid 1px #c5c5c5 !important;\n  text-align: center !important;\n  font-size: 32px !important;\n}\n  .n-o-c {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n.backToLogin[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  text-align: center;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=forget-pswd.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgetPswdComponent, { className: "ForgetPswdComponent" });
})();
export {
  ForgetPswdComponent
};
//# sourceMappingURL=chunk-QIKCFEBX.js.map
