import {
  CreateCargoComponent
} from "./chunk-X6PCRKUH.js";
import {
  CreatePurposeComponent
} from "./chunk-XMRFA5KW.js";
import {
  CreatePortAgentComponent
} from "./chunk-PZGYRYI3.js";
import {
  CreatePortTariffComponent
} from "./chunk-NPP2JCRL.js";
import {
  CreateUserComponent
} from "./chunk-YJWVWTAZ.js";
import {
  MasterSignalService
} from "./chunk-A6TEDHIL.js";
import {
  CreateClientComponent
} from "./chunk-GTJ5IF63.js";
import "./chunk-4NIIGUZS.js";
import {
  CreateVesselComponent
} from "./chunk-2GFKUVAP.js";
import "./chunk-REH2YONL.js";
import "./chunk-VYXKY3G4.js";
import "./chunk-R2NPM7IG.js";
import {
  tabs
} from "./chunk-A6CJVYKT.js";
import "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import "./chunk-62FFZ6RH.js";
import "./chunk-HAXYAMEC.js";
import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-65SYLNKY.js";
import "./chunk-7SVTSSNI.js";
import "./chunk-2LYLMMA2.js";
import "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
import "./chunk-NT4IUQ5M.js";
import {
  MatDialog,
  MatDialogConfig
} from "./chunk-EDA7LVKI.js";
import "./chunk-ZEOMT33W.js";
import "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import "./chunk-UXPMPTRZ.js";
import "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵtextInterpolate
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/master/master.component.ts
function MasterComponent_mat_grid_tile_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-tile")(1, "div", 3);
    \u0275\u0275listener("click", function MasterComponent_mat_grid_tile_2_Template_div_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigate(item_r2.route, item_r2.title));
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 6)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function MasterComponent_mat_grid_tile_2_Template_button_click_11_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openDialog(item_r2.title);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(12, "+ Add");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.description);
  }
}
var MasterComponent = class _MasterComponent {
  dialog;
  router;
  masterservice;
  constructor(dialog, router, masterservice) {
    this.dialog = dialog;
    this.router = router;
    this.masterservice = masterservice;
  }
  // Array of icons, titles, description  and route to display in the master screen
  roleId = Number(sessionStorage.getItem("roleId"));
  tiles = this.roleId === 1 ? tabs : tabs.filter((tab) => tab.title != "User Management");
  navigate(route, title) {
    this.masterservice.setMasterTabName(title);
    sessionStorage.setItem("masterTab", title);
    this.router.navigate(["layout/master/mastertabs"]);
  }
  // method to pen the dialog of the respective tabs from the master screen
  openDialog(name) {
    if (name === "Client") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreateClientComponent, dialogConfig);
    } else if (name === "Vessel") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreateVesselComponent, dialogConfig);
    } else if (name === "Cargo") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreateCargoComponent, dialogConfig);
    } else if (name === "Purpose") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreatePurposeComponent, dialogConfig);
    } else if (name === "Port Agent") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreatePortAgentComponent, dialogConfig);
    } else if (name === "Port & Tariff") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.width = "96vw";
      dialogConfig.maxWidth = "100vw";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreatePortTariffComponent, dialogConfig);
    } else if (name === "User Management") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = { right: "0" };
      dialogConfig.height = "100%";
      dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
      this.dialog.open(CreateUserComponent, dialogConfig);
    } else if (name === "Tariff Fees") {
      this.navigate("layout/master/tariff-fees", "Tariff Fees");
    }
  }
  static \u0275fac = function MasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MasterComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MasterSignalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasterComponent, selectors: [["app-master"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "container", "theme-dark"], ["cols", "3", "rowHeight", "20vh", "gutterSize", "13px"], [4, "ngFor", "ngForOf"], [1, "tile-content", 3, "click"], [1, "left"], ["fontSet", "material-symbols-outlined", 1, "material-symbols-outlined"], [1, "right"], [1, "button-container"], ["mat-stroked-button", "", 1, "add-button", 3, "click"]], template: function MasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-grid-list", 1);
      \u0275\u0275template(2, MasterComponent_mat_grid_tile_2_Template, 13, 3, "mat-grid-tile", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tiles);
    }
  }, dependencies: [MatGridListModule, MatGridList, MatGridTile, MatIcon, CommonModule, NgForOf, MatIconModule], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\nmat-grid-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 1025px) {\n  .button-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 20px;\n    margin-right: 20px;\n  }\n  .right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-white);\n  margin: 0;\n  margin-top: 5px;\n  word-spacing: 0px;\n  line-height: 1.2;\n  flex-grow: 1;\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  mat-grid-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n}\n@media (max-width: 767px) {\n  mat-grid-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\nmat-grid-tile[_ngcontent-%COMP%] {\n  display: flex !important;\n  border: 1px solid var(--color-bg-dark-2);\n  border-radius: 8px;\n  background-color: var(--color-bg-dark-1);\n  box-sizing: border-box;\n  padding: 10px;\n  box-shadow: var(--shadow-white-glow) !important;\n}\n.tile-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.left[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  color: var(--color-white);\n}\n.right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5px 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--color-white);\n  line-height: 1.2;\n  word-spacing: 0px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-white);\n  margin: 0;\n  word-spacing: 0px;\n  line-height: 1.2;\n  flex-grow: 1;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n@media (max-width: 767px) {\n  .tile-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .left[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    justify-content: flex-start;\n  }\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .button-container[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=master.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasterComponent, { className: "MasterComponent" });
})();
export {
  MasterComponent
};
//# sourceMappingURL=chunk-SKZ2MHE2.js.map
