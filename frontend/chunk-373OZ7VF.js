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
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
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
  MatIcon
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
  AuthSessionService
} from "./chunk-EY4LAK3R.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __async
} from "./chunk-KBUIKKCC.js";

// src/app/components/stale-session-dialog.component.ts
var StaleSessionDialogComponent = class _StaleSessionDialogComponent {
  dialogRef;
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static \u0275fac = function StaleSessionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaleSessionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaleSessionDialogComponent, selectors: [["app-stale-session-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "dialog-container"], [1, "title"], [1, "message"], [1, "actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function StaleSessionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Session Conflict");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Another user session is active in this browser. Click OK to sign out the previous session and continue. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function StaleSessionDialogComponent_Template_button_click_6_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(7, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function StaleSessionDialogComponent_Template_button_click_8_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(9, "OK");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton], styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  min-width: 300px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #d32f2f;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=stale-session-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaleSessionDialogComponent, { className: "StaleSessionDialogComponent" });
})();

// src/app/auth/login/login.component.ts
var _c0 = (a0) => ({ "disabled-button": a0 });
function LoginComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function LoginComponent_mat_card_2_form_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDisbursementMode ? "Email is required" : "UserName is required", ". ");
  }
}
function LoginComponent_mat_card_2_form_9_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password min length is 8 ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password max length is 12 ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_2_form_9_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 17)(1, "mat-label");
    \u0275\u0275text(2, "PASSWORD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 18);
    \u0275\u0275elementStart(4, "mat-icon", 19);
    \u0275\u0275listener("click", function LoginComponent_mat_card_2_form_9_mat_form_field_7_Template_mat_icon_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hide = !ctx_r1.hide);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_6_Template, 2, 0, "mat-error", 0)(7, LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_7_Template, 2, 0, "mat-error", 0)(8, LoginComponent_mat_card_2_form_9_mat_form_field_7_mat_error_8_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.hide ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hide ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_7_0.hasError("maxlength"));
  }
}
function LoginComponent_mat_card_2_form_9_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, "Forgot Password?");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_2_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function LoginComponent_mat_card_2_form_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 12)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 13);
    \u0275\u0275template(5, LoginComponent_mat_card_2_form_9_mat_error_5_Template, 2, 1, "mat-error", 0)(6, LoginComponent_mat_card_2_form_9_mat_error_6_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LoginComponent_mat_card_2_form_9_mat_form_field_7_Template, 9, 5, "mat-form-field", 14)(8, LoginComponent_mat_card_2_form_9_a_8_Template, 2, 0, "a", 15);
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isDisbursementMode ? "EMAIL" : "USERNAME");
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.isDisbursementMode ? "email" : "text")("placeholder", ctx_r1.isDisbursementMode ? "Enter your email" : "Enter your username");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.loginForm.get("username")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.loginForm.get("username")) == null ? null : tmp_7_0.hasError("email")) && ctx_r1.isDisbursementMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDisbursementMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDisbursementMode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loginForm.invalid)("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx_r1.loginForm.invalid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDisbursementMode ? "Access Disbursement" : "Sign in", " ");
  }
}
function LoginComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LoginComponent_mat_card_2_form_9_Template, 11, 13, "form", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275element(11, "img", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isDisbursementMode ? "PDA Disbursement Access" : "Login");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isDisbursementMode ? "Enter your email address to access disbursement details" : "Enter your username and password to access your account");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginForm);
  }
}
function LoginComponent_mat_card_3_form_10_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " New password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_3_form_10_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_3_form_10_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_3_form_10_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please confirm your new password. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_3_form_10_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_card_3_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function LoginComponent_mat_card_3_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPasswordChange());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 24)(2, "mat-label");
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 25);
    \u0275\u0275elementStart(5, "mat-icon", 19);
    \u0275\u0275listener("click", function LoginComponent_mat_card_3_form_10_Template_mat_icon_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideNew = !ctx_r1.hideNew);
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LoginComponent_mat_card_3_form_10_mat_error_7_Template, 2, 0, "mat-error", 0)(8, LoginComponent_mat_card_3_form_10_mat_error_8_Template, 2, 0, "mat-error", 0)(9, LoginComponent_mat_card_3_form_10_mat_error_9_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 24)(11, "mat-label");
    \u0275\u0275text(12, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 26);
    \u0275\u0275elementStart(14, "mat-icon", 19);
    \u0275\u0275listener("click", function LoginComponent_mat_card_3_form_10_Template_mat_icon_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideConfirm = !ctx_r1.hideConfirm);
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LoginComponent_mat_card_3_form_10_mat_error_16_Template, 2, 0, "mat-error", 0)(17, LoginComponent_mat_card_3_form_10_mat_error_17_Template, 2, 0, "mat-error", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 16);
    \u0275\u0275text(19, " Change Password ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.passwordChangeForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hideNew ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hideNew ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.passwordChangeForm.get("newPassword")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.passwordChangeForm.get("newPassword")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.passwordChangeForm.get("newPassword")) == null ? null : tmp_7_0.hasError("weakPassword"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hideConfirm ? "password" : "text");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hideConfirm ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r1.passwordChangeForm.get("confirmPassword")) == null ? null : tmp_10_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordChangeForm.hasError("passwordMismatch") && ((tmp_11_0 = ctx_r1.passwordChangeForm.get("confirmPassword")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.passwordChangeForm.invalid)("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx_r1.passwordChangeForm.invalid));
  }
}
function LoginComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "div", 4)(2, "div", 21)(3, "mat-icon", 22);
    \u0275\u0275listener("click", function LoginComponent_mat_card_3_Template_mat_icon_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 1);
    });
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "h3");
    \u0275\u0275text(7, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "You are required to change your password before continuing");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, LoginComponent_mat_card_3_form_10_Template, 20, 14, "form", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "img", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.passwordChangeForm);
  }
}
var LoginComponent = class _LoginComponent {
  authservice;
  router;
  snackBar;
  loginSignal;
  route;
  authSessionService;
  dialog;
  hide = true;
  hideNew = true;
  hideConfirm = true;
  loginForm;
  passwordChangeForm;
  disbursementToken = null;
  isDisbursementMode = false;
  currentStep = 1;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  constructor(authservice, router, snackBar, loginSignal, route, authSessionService, dialog) {
    this.authservice = authservice;
    this.router = router;
    this.snackBar = snackBar;
    this.loginSignal = loginSignal;
    this.route = route;
    this.authSessionService = authSessionService;
    this.dialog = dialog;
    this.loader.hide();
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)])
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.disbursementToken = params["token"] || null;
      this.isDisbursementMode = !!this.disbursementToken;
      if (this.isDisbursementMode && this.disbursementToken) {
        sessionStorage.setItem("disbursementToken", this.disbursementToken);
      }
      this.buildForm();
    });
  }
  buildForm() {
    if (this.isDisbursementMode) {
      this.loginForm = new FormGroup({
        username: new FormControl("", [Validators.required, Validators.email])
      });
    } else {
      this.loginForm = new FormGroup({
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)])
      });
    }
    this.passwordChangeForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required, Validators.minLength(8), passwordStrengthValidator]),
      confirmPassword: new FormControl("", [Validators.required])
    }, { validators: passwordsMatchValidator });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.loginForm.valid) {
        if (this.isDisbursementMode && this.disbursementToken) {
          this.executeDisbursementLogin();
        } else {
          const { username, password } = this.loginForm.value;
          this.loader.show();
          const lockStatus = yield this.authSessionService.verifyLockBeforeLogin(username);
          if (lockStatus === "LOCKED") {
            const dialogRef = this.dialog.open(StaleSessionDialogComponent, {
              disableClose: true
            });
            dialogRef.afterClosed().subscribe((confirmed) => {
              if (confirmed) {
                this.authservice.logout().subscribe({
                  next: () => {
                    this.authSessionService.clearBrowserSession();
                    this.continueNormalLogin(username, password);
                  },
                  error: () => {
                    this.authSessionService.clearBrowserSession();
                    this.continueNormalLogin(username, password);
                  }
                });
              } else {
                this.loader.hide();
              }
            });
            return;
          }
          this.continueNormalLogin(username, password);
        }
      }
    });
  }
  executeDisbursementLogin() {
    return __async(this, null, function* () {
      const { username } = this.loginForm.value;
      this.loader.show();
      const lockStatus = yield this.authSessionService.verifyLockBeforeLogin(username);
      if (lockStatus === "LOCKED") {
        const dialogRef = this.dialog.open(StaleSessionDialogComponent, {
          disableClose: true
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
          if (confirmed) {
            this.authservice.logout().subscribe({
              next: () => {
                this.authSessionService.clearBrowserSession();
                this.continueDisbursementLogin(username);
              },
              error: () => {
                this.authSessionService.clearBrowserSession();
                this.continueDisbursementLogin(username);
              }
            });
          } else {
            this.loader.hide();
          }
        });
        return;
      }
      this.continueDisbursementLogin(username);
    });
  }
  continueDisbursementLogin(username) {
    this.authSessionService.enterDisbursementMode();
    const loginData = {
      email: username,
      pda_token: this.disbursementToken
    };
    this.authservice.disbursementLogin(loginData).subscribe({
      next: (res) => {
        this.loader.hide();
        if (res.status === "success" && res.user_uuid) {
          sessionStorage.setItem("disbursementUuid", res.user_uuid);
          sessionStorage.setItem("username", username);
          this.authSessionService.setDisbursementOwner(username);
          this.snackBar.showSuccess(res.message);
          this.router.navigate(["/otp"], { queryParams: { type: "disbursement" } });
        } else {
          this.snackBar.showError("Unexpected response format");
        }
      },
      error: (error) => {
        this.loader.hide();
        const errmsg = error.error?.error || "Invalid email or token expired";
        this.snackBar.showError(errmsg);
      }
    });
  }
  onPasswordChange() {
    if (this.passwordChangeForm.valid) {
      this.loader.show();
      const { newPassword } = this.passwordChangeForm.value;
      const { username, password } = this.loginForm.value;
      this.authservice.passwordExpired(username, password, newPassword).subscribe({
        next: (res) => {
          this.loader.hide();
          this.snackBar.showSuccess("Password changed successfully. Please login with your new password.");
          this.currentStep = 1;
          this.loginForm.reset();
          this.passwordChangeForm.reset();
        },
        error: (error) => {
          this.loader.hide();
          const errmsg = error.error?.error || error.error?.detail || "Failed to change password. Please try again.";
          this.snackBar.showError(errmsg);
        }
      });
    } else {
      this.passwordChangeForm.markAllAsTouched();
    }
  }
  continueNormalLogin(username, password) {
    this.authservice.login(username, password).subscribe({
      next: (res) => {
        this.loader.hide();
        const userProfile = {
          name: res.name,
          role_name: res.role_name,
          role_id: res.role_id,
          uuid: res.uuid,
          username,
          company_id: res.company_id,
          company_name: res.company_name,
          email_signature: res.email_signature
        };
        this.authSessionService.setSession(username, userProfile);
        this.authSessionService.broadcastLogout("STALE");
        this.loginSignal.setuuid(res.uuid);
        if (res.is_mfa_enabled == "Y") {
          this.router.navigate(["otp"]);
        } else {
          this.snackBar.showSuccess("Welcome back! You have signed in successfully");
          this.router.navigate(["layout"]);
        }
      },
      error: (error) => {
        this.loader.hide();
        if (error.error.error === "Password has expired. Please reset your password.") {
          this.currentStep = 2;
        }
        const errmsg = error.error?.error || "Something went wrong. Please try again.";
        this.snackBar.showError(errmsg);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(LoginSignalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthSessionService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[4, "ngIf"], [1, "container"], ["class", "theme-dark", 4, "ngIf"], [1, "theme-dark"], [1, "form-section"], [1, "logo"], ["src", "https://meraki-disbursement.s3.us-east-1.amazonaws.com/static_objects/meraki_logo.jpeg", "alt", "logo"], [1, "form"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "image-section"], ["src", "./assets/Slid.jpg", "alt", "Login Image"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "compact-form-field"], ["matInput", "", "formControlName", "username", 3, "type", "placeholder"], ["appearance", "outline", "class", "password-field", 4, "ngIf"], ["routerLink", "/forgot-password", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "ngClass"], ["appearance", "outline", 1, "password-field"], ["matInput", "", "placeholder", "Enter your password", "formControlName", "password", "appearence", "outline", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "fontSet", "material-symbols-outlined", 1, "eye-icon", 3, "click"], ["routerLink", "/forgot-password"], [2, "width", "100%"], [2, "cursor", "pointer", "display", "flex", "justify-content", "start", "margin-left", "13px", 3, "click"], ["src", "./assets/forgotpassword.svg", "alt", "Reset Password Image"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter new password", "formControlName", "newPassword", 3, "type"], ["matInput", "", "placeholder", "Confirm new password", "formControlName", "confirmPassword", 3, "type"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoginComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, LoginComponent_mat_card_2_Template, 12, 3, "mat-card", 2)(3, LoginComponent_mat_card_3_Template, 13, 1, "mat-card", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 2);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgClass, NgIf, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatCardModule, MatCard, LoaderComponent, RouterModule, RouterLink], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/assets/background-image.png);\n  width: 100%;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n  align-items: center !important;\n  justify-content: space-evenly !important;\n  background: var(--color-bg-dark-1);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 18px;\n  box-shadow: 0 4px 20px var(--shadow-1);\n  width: 100%;\n  max-width: 700px;\n  flex-wrap: wrap;\n}\n.form-section[_ngcontent-%COMP%], \n.image-section[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  min-width: 260px;\n}\n.image-section[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  max-width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  object-fit: cover;\n}\n.form-section[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 20px;\n}\n.form[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 15px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  height: auto;\n}\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 18px;\n  color: var(--color-white);\n  font-weight: 600;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n  margin-bottom: 20px;\n}\na[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 156px;\n  margin-top: 0px;\n  text-decoration: none;\n  color: var(--app-link-color);\n}\na[_ngcontent-%COMP%]:hover {\n  color: var(--app-link-hover-color);\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 40px;\n  background-color: hsl(216, 85%, 60%);\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  color: white;\n  font-size: 14px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  margin-bottom: 8px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n.disabled-button.mat-raised-button[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.password-field[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-373OZ7VF.js.map
