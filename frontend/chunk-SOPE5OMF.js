import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-K64LDRY5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgModel
} from "./chunk-56DUDJD6.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7YW2NURN.js";

// src/app/components/confirmation-dialog.component.ts
function ConfirmationDialogComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-checkbox", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmationDialogComponent_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isConfirmed, $event) || (ctx_r1.isConfirmed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isConfirmed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.checkboxText || "confirm the action", " ");
  }
}
function ConfirmationDialogComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ConfirmationDialogComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.button);
  }
}
var ConfirmationDialogComponent = class _ConfirmationDialogComponent {
  dialogRef;
  data;
  isConfirmed = false;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onSave() {
    this.dialogRef.close("save");
  }
  static \u0275fac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "dialog-container"], [1, "title"], [1, "message"], ["style", "text-align: left;", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], ["mat-flat-button", "", "class", "green-button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", 3, "click"], [2, "text-align", "left"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", 1, "green-button", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ConfirmationDialogComponent_div_5_Template, 3, 2, "div", 3);
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function ConfirmationDialogComponent_Template_button_click_6_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(7, "Yes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ConfirmationDialogComponent_button_8_Template, 2, 1, "button", 5);
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function ConfirmationDialogComponent_Template_button_click_9_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(10, "No");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.header);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.text);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.showCheckbox);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.data.showCheckbox && !ctx.isConfirmed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.button) != null);
    }
  }, dependencies: [CommonModule, NgIf, MatDialogModule, MatButtonModule, MatButton, MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  min-width: 300px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #d32f2f;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=confirmation-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationDialogComponent, { className: "ConfirmationDialogComponent" });
})();

export {
  ConfirmationDialogComponent
};
//# sourceMappingURL=chunk-SOPE5OMF.js.map
