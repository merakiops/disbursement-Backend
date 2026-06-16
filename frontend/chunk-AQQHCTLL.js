import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-Y7YG6PR5.js";
import {
  MasterSignalService
} from "./chunk-A6TEDHIL.js";
import {
  tabs
} from "./chunk-A6CJVYKT.js";
import "./chunk-FV4PHKPE.js";
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import "./chunk-BAX6ITZM.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet
} from "./chunk-F2E3SSFC.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
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
  ɵɵtextInterpolate
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/master/master-tabs/master-tabs.component.ts
var _c0 = (a0) => ({ "active-tab": a0 });
var _c1 = (a0) => ({ "active-icon": a0 });
var _c2 = (a0) => ({ "active-label": a0 });
function MasterTabsComponent_mat_tab_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const tab_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r4.selectedTabIndex === i_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx_r4.selectedTabIndex === i_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c2, ctx_r4.selectedTabIndex === i_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r3.title);
  }
}
function MasterTabsComponent_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab");
    \u0275\u0275template(1, MasterTabsComponent_mat_tab_3_ng_template_1_Template, 5, 11, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
}
var MasterTabsComponent = class _MasterTabsComponent {
  router;
  route;
  mastersignal;
  selectedTabIndex = sessionStorage.getItem("masterTabIndex") || 0;
  constructor(router, route, mastersignal) {
    this.router = router;
    this.route = route;
    this.mastersignal = mastersignal;
    this.externalTabClick();
  }
  roleId = Number(sessionStorage.getItem("roleId"));
  tabs = this.roleId === 1 ? tabs : tabs.filter((tab) => tab.title != "User Management");
  // Method to route to the selected tab
  onTabChange = (index) => {
    console.log("roleId", Number(this.roleId) === 1);
    this.selectedTabIndex = index;
    const selectedRoute = tabs[index].route;
    sessionStorage.setItem("masterTabIndex", String(index));
    sessionStorage.setItem("masterTab", tabs[index].title);
    this.router.navigate([selectedRoute]);
  };
  externalTabClick = () => {
    const indexOfTab = tabs.findIndex((item) => item.title == sessionStorage.getItem("masterTab"));
    this.onTabChange(indexOfTab);
  };
  static \u0275fac = function MasterTabsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MasterTabsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MasterSignalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasterTabsComponent, selectors: [["app-master-tabs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [["tabsRef", ""], [1, "tab-container"], ["mat-stretch-tabs", "false", 3, "selectedIndexChange", "selectedIndex"], [4, "ngFor", "ngForOf"], [1, "container"], ["mat-tab-label", ""], [1, "tab-label", 3, "ngClass"], [3, "ngClass"]], template: function MasterTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0)(2, "mat-tab-group", 2);
      \u0275\u0275listener("selectedIndexChange", function MasterTabsComponent_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange($event));
      });
      \u0275\u0275template(3, MasterTabsComponent_mat_tab_3_Template, 2, 0, "mat-tab", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("selectedIndex", ctx.selectedTabIndex);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.tabs);
    }
  }, dependencies: [MatTabsModule, MatTabLabel, MatTab, MatTabGroup, RouterOutlet, MatIcon, CommonModule, NgClass, NgForOf], styles: ["\n\n.tab-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  overflow-x: auto;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--icon-color);\n  margin-bottom: 10px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 4px;\n  display: block;\n}\n  .mdc-tab-indicator__content--underline {\n  max-width: 30px;\n  height: 3px;\n  background-color: #3f51b5;\n  margin-top: 10px;\n}\n  .mat-mdc-tab-label-container {\n  border-bottom: none !important;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: calc(100vh - 0);\n  overflow-y: hidden;\n}\n.active-tab[_ngcontent-%COMP%] {\n  color: var(--active-icon-color);\n}\n.active-icon[_ngcontent-%COMP%] {\n  color: var(--active-icon-color);\n}\n.active-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--active-icon-color);\n}\n/*# sourceMappingURL=master-tabs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasterTabsComponent, { className: "MasterTabsComponent" });
})();
export {
  MasterTabsComponent
};
//# sourceMappingURL=chunk-AQQHCTLL.js.map
