import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-7LZOSO4L.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-K64LDRY5.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-K7GFJLXC.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/review-continue/review-continue.component.ts
var ReviewContinueComponent = class _ReviewContinueComponent {
  routes;
  receivedBankDetails = null;
  constructor(routes) {
    this.routes = routes;
  }
  ngOnInit() {
    this.receivedBankDetails = JSON.parse(sessionStorage.getItem("addressAndBankDetails") || "{}");
  }
  checked = false;
  changeChecked = () => {
    if (this.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  };
  goToBankForm = () => {
    this.routes.navigate(["/pdfa/bankForm"]);
  };
  save() {
    this.routes.navigate(["/port-agent-form"]);
  }
  static \u0275fac = function ReviewContinueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewContinueComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewContinueComponent, selectors: [["app-review-continue"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 15, consts: [[1, "review-container"], [1, "form-container"], ["appearance", "outlined"], [2, "padding", "5px 0px 0px 15px"], [2, "font-size", "large"], [1, "subtitle"], [2, "width", "100%"], [2, "height", "30px"], ["appearance", "outlined", 1, "address-card"], [2, "width", "70%"], ["appearance", "outlined", 1, "note-card"], [2, "font-size", "small", "color", "gray"], [1, "check-box-section"], [1, "example-margin", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "button_click", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "button_click", 3, "click", "disabled"]], template: function ReviewContinueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1)(2, "mat-card", 2)(3, "mat-card-header", 3)(4, "mat-card-title", 4);
      \u0275\u0275text(5, "Review and Continue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-card-content")(7, "p", 5);
      \u0275\u0275text(8, " Please review all details before submitting. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "table", 6)(10, "tr")(11, "td", 7)(12, "mat-card", 8)(13, "mat-card-header");
      \u0275\u0275text(14, " Address details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-card-content");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "tr")(18, "td", 9)(19, "mat-card", 10)(20, "mat-card-header");
      \u0275\u0275text(21, " Bank Details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-card-content")(23, "table", 6)(24, "tr")(25, "td", 11);
      \u0275\u0275text(26, " Beneficiary Account Holder Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "td", 11);
      \u0275\u0275text(28, " Bank Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "td", 11);
      \u0275\u0275text(30, " Account Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "td", 11);
      \u0275\u0275text(32, " Correspondent Account Number ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "tr")(34, "td");
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "td");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "td");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "td");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "tr")(43, "td", 11);
      \u0275\u0275text(44, " IBAN Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "td", 11);
      \u0275\u0275text(46, " Swift Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "td", 11);
      \u0275\u0275text(48, " BIC Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "td", 11);
      \u0275\u0275text(50, " INN Code ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "tr")(52, "td");
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "td");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "td");
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "td");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "tr")(61, "td", 11);
      \u0275\u0275text(62, " BIK Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td", 11);
      \u0275\u0275text(64, " IFSC Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "td", 11);
      \u0275\u0275text(66, " Country ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td", 11);
      \u0275\u0275text(68, " Currency ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "tr")(70, "td");
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "td");
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "td");
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "td");
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "tr")(79, "td", 11);
      \u0275\u0275text(80, " Bank Branch with Address ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "tr")(82, "td");
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(84, "mat-card-actions")(85, "section", 12)(86, "mat-checkbox", 13);
      \u0275\u0275listener("click", function ReviewContinueComponent_Template_mat_checkbox_click_86_listener() {
        return ctx.changeChecked();
      });
      \u0275\u0275text(87, "I confirm that the details I've entered above are correct.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "button", 14);
      \u0275\u0275listener("click", function ReviewContinueComponent_Template_button_click_88_listener() {
        return ctx.goToBankForm();
      });
      \u0275\u0275text(89, " Edit ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 15);
      \u0275\u0275listener("click", function ReviewContinueComponent_Template_button_click_90_listener() {
        return ctx.save();
      });
      \u0275\u0275text(91, " Continue to PDA Form ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails == null ? null : ctx.receivedBankDetails.address, " ");
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails == null ? null : ctx.receivedBankDetails.bankDetails == null ? null : ctx.receivedBankDetails.bankDetails.beneficiary_acc_holder_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails == null ? null : ctx.receivedBankDetails.bankDetails.bank_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.current_account_number, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.correspondent_account_number, " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.iban_number, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.swift_code, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.bic_code, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.inn_code, " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.bik_code, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.ifsc_code, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.country_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.currency, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.receivedBankDetails.bankDetails.branch_address, " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", !ctx.checked);
    }
  }, dependencies: [MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton], styles: ["\n\n.subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: var(--color-text-light-1) !important;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 2px 295px 0px 295px;\n}\n.review-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.note-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: var(--color-bg-dark-2) !important;\n}\n.address-card[_ngcontent-%COMP%] {\n  background: var(--color-bg-dark-2) !important;\n  min-height: 80px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1) !important;\n}\n.button_click[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 180px;\n  margin: 5px 5px 0px 0px;\n  background-color: var(--color-action) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n  font-size: 13px;\n  white-space: nowrap !important;\n}\n.button_click[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.button_click[_ngcontent-%COMP%]:disabled, \n.button_click[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.mat-mdc-card-header[_ngcontent-%COMP%] {\n  padding: 3px 16px 0;\n}\n.check-box-section[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.button_click[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc !important;\n  color: #555 !important;\n}\nmat-card[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-1) !important;\n  border: 1px solid var(--color-bg-dark-2) !important;\n  color: var(--color-white) !important;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  color: var(--color-white) !important;\n}\n/*# sourceMappingURL=review-continue.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewContinueComponent, { className: "ReviewContinueComponent" });
})();
export {
  ReviewContinueComponent
};
//# sourceMappingURL=chunk-OGLL37VH.js.map
