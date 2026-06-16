import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-A7N62EC5.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  CommonModule,
  NgIf,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-7YW2NURN.js";

// src/app/shared/loader/loader.component.ts
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
function LoaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
var LoaderComponent = class _LoaderComponent {
  loader = inject(LoaderService);
  showDialogLoader = computed(() => this.loader.dialogLoading());
  showGlobalLoader = computed(() => this.loader.loading() && !this.loader.dialogLoading());
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "overlay-dialog", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], [1, "overlay-dialog"], ["color", "primary", "diameter", "50"], [1, "overlay"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 2, 0, "div", 0)(1, LoaderComponent_div_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showDialogLoader());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showGlobalLoader());
    }
  }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, CommonModule, NgIf], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: rgba(0, 7, 44, 0.817);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 8000;\n  background: rgba(0, 7, 44, 0.774);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent" });
})();

export {
  LoaderComponent
};
//# sourceMappingURL=chunk-6FCA4LJN.js.map
