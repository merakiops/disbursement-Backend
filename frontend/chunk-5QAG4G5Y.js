import {
  AuthSessionService
} from "./chunk-EY4LAK3R.js";
import {
  SuccessMessageService
} from "./chunk-BQRNQXXM.js";
import "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/components/port-agent-form/pa-form-submit-success-page/pa-form-submit-success-page.component.ts
var PaFormSubmitSuccessPageComponent = class _PaFormSubmitSuccessPageComponent {
  successMessageService;
  authSessionService;
  successMessage = "";
  constructor(successMessageService, authSessionService) {
    this.successMessageService = successMessageService;
    this.authSessionService = authSessionService;
  }
  ngOnInit() {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.successMessage = message || "Thank you for your submission. We have received your information and will process it shortly.";
    });
    this.authSessionService.clearSessionOwner();
    window.addEventListener("popstate", this.handleBackNavigation);
  }
  handleBackNavigation = () => {
    this.authSessionService.exitDisbursementMode();
    this.authSessionService.clearSessionOwner();
    location.replace("/login");
  };
  ngOnDestroy() {
    window.removeEventListener("popstate", this.handleBackNavigation);
  }
  static \u0275fac = function PaFormSubmitSuccessPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaFormSubmitSuccessPageComponent)(\u0275\u0275directiveInject(SuccessMessageService), \u0275\u0275directiveInject(AuthSessionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaFormSubmitSuccessPageComponent, selectors: [["app-pa-form-submit-success-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "centered-dialog"], [1, "dialog-box"], [1, "checkmark"]], template: function PaFormSubmitSuccessPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "h2");
      \u0275\u0275text(4, "Submission Successful!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.successMessage);
    }
  }, styles: ['\n\n.centered-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.dialog-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background-color: var(--color-bg-dark-1);\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 10px var(--shadow-1);\n  text-align: center;\n}\n.dialog-box[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-color: var(--color-success);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n}\n.dialog-box[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:before {\n  content: "\\2714";\n  font-size: 30px;\n  color: white;\n}\n.dialog-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--color-white);\n  margin: 0 0 15px;\n}\n.dialog-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-light-1);\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.dialog-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background-color: var(--color-action);\n  color: white;\n  border: none;\n  border-radius: 25px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.dialog-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n/*# sourceMappingURL=pa-form-submit-success-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaFormSubmitSuccessPageComponent, { className: "PaFormSubmitSuccessPageComponent" });
})();
export {
  PaFormSubmitSuccessPageComponent
};
//# sourceMappingURL=chunk-5QAG4G5Y.js.map
