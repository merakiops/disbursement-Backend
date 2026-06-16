import {
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-7YW2NURN.js";

// src/app/pages/pda/email-sent-notification/email-sent-notification.component.ts
var EmailSentNotificationComponent = class _EmailSentNotificationComponent {
  dialogRef;
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  closeDialog() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function EmailSentNotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailSentNotificationComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailSentNotificationComponent, selectors: [["app-email-sent-notification"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "email-dialog", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "padding", "30px", "gap", "20px", "text-align", "center"], [2, "display", "flex", "align-items", "center", "gap", "10px", "font-size", "18px"], [2, "font-size", "30px", "color", "green"], [1, "button-section", 2, "display", "flex", "justify-content", "center"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function EmailSentNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u2714");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Email has been successfully sent to the specified recipients.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function EmailSentNotificationComponent_Template_button_click_7_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275text(8, "Ok");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n  .email-dialog-style .mat-mdc-dialog-surface {\n  border-radius: 20px !important;\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-radius: 6px;\n  height: 27px;\n  width: 50px;\n  color: white;\n  border: none;\n}\n/*# sourceMappingURL=email-sent-notification.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailSentNotificationComponent, { className: "EmailSentNotificationComponent" });
})();

export {
  EmailSentNotificationComponent
};
//# sourceMappingURL=chunk-SNZ4PAUJ.js.map
