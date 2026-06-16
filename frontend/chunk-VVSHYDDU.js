import {
  MatCard,
  MatCardFooter,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-7LZOSO4L.js";
import "./chunk-BAX6ITZM.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-F2E3SSFC.js";
import "./chunk-K7GFJLXC.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/pdfa.component.ts
var PdfaComponent = class _PdfaComponent {
  data = JSON.parse(sessionStorage.getItem("pa-success-response") || "{}");
  leftLongText = `Client: ${this.data?.client_name ?? ""}`;
  rightLongText = `Portagent: ${this.data?.port_agent_name ?? ""} `;
  static \u0275fac = function PdfaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdfaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfaComponent, selectors: [["app-pdfa"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "card-container", 2, "padding", "5px 300px 0px 300px", "max-width", "100%"], ["appearance", "outlined"], [2, "padding", "5px 0px 0px 15px"], [2, "font-size", "large"], [1, "example-card-footer"], [2, "width", "100%", "padding", "5px 13px 5px 13px"], [1, "subtitle"], ["align", "end", 1, "subtitle"], [1, "container"]], template: function PdfaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header", 2)(3, "mat-card-title", 3);
      \u0275\u0275text(4, "Port Disbursement Account Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-footer", 4)(6, "table", 5)(7, "tr")(8, "td", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "td", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.leftLongText, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.rightLongText, " ");
    }
  }, dependencies: [MatCardModule, MatCard, MatCardFooter, MatCardHeader, MatCardTitle, RouterModule, RouterOutlet], styles: ["\n\nmat-card[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-1) !important;\n  border: 1px solid var(--color-bg-dark-2) !important;\n  color: var(--color-white) !important;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: var(--color-text-light-1) !important;\n  font-size: 14px;\n}\n/*# sourceMappingURL=pdfa.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfaComponent, { className: "PdfaComponent" });
})();
export {
  PdfaComponent
};
//# sourceMappingURL=chunk-VVSHYDDU.js.map
