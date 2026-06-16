import {
  CreatePortTariffComponent
} from "./chunk-WN7UPNUV.js";
import {
  MatChip,
  MatChipGrid,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import "./chunk-A6CJVYKT.js";
import "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import {
  PortService
} from "./chunk-JRUZ2QQS.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-HAXYAMEC.js";
import "./chunk-7SVTSSNI.js";
import "./chunk-2LYLMMA2.js";
import "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
import {
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import {
  MatIcon,
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Subject,
  computed,
  debounceTime,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/components/create-port/view-fields/view-fields.component.ts
function ViewFieldsComponent_mat_chip_grid_6_mat_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.field_name, " ");
  }
}
function ViewFieldsComponent_mat_chip_grid_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-grid");
    \u0275\u0275template(1, ViewFieldsComponent_mat_chip_grid_6_mat_chip_1_Template, 2, 1, "mat-chip", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.data.vessel_fields);
  }
}
function ViewFieldsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No Additional field found");
    \u0275\u0275elementEnd();
  }
}
var ViewFieldsComponent = class _ViewFieldsComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function ViewFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewFieldsComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewFieldsComponent, selectors: [["app-view-fields"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [["noData", ""], [1, "dialog-header"], ["color", "warn", 3, "click"], [1, "modalContainer"], [4, "ngIf", "ngIfElse"], ["color", "primary", "selected", "", 4, "ngFor", "ngForOf"], ["color", "primary", "selected", ""], [2, "text-align", "center"]], template: function ViewFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h6");
      \u0275\u0275text(2, "Additional Vessel Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-icon", 2);
      \u0275\u0275listener("click", function ViewFieldsComponent_Template_mat_icon_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275text(4, "close");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, ViewFieldsComponent_mat_chip_grid_6_Template, 2, 1, "mat-chip-grid", 4)(7, ViewFieldsComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noData_r4 = \u0275\u0275reference(8);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (ctx.data.vessel_fields == null ? null : ctx.data.vessel_fields.length) > 0)("ngIfElse", noData_r4);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatChipsModule, MatChip, MatChipGrid, MatIconModule, MatIcon], styles: ["\n\n.header-title[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  text-align: center;\n}\nmat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\nmat-button[_ngcontent-%COMP%] {\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 8px;\n  font-size: 22px;\n  gap: 10px;\n}\n.modalContainer[_ngcontent-%COMP%] {\n  padding: 5px 8px !important;\n}\n/*# sourceMappingURL=view-fields.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewFieldsComponent, { className: "ViewFieldsComponent" });
})();

// src/app/pages/master/port/port.component.ts
function PortComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275listener("click", function PortComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function PortComponent_div_9_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function PortComponent_div_9_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
function PortComponent_div_9_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function PortComponent_div_9_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.country_name);
  }
}
function PortComponent_div_9_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Port Name");
    \u0275\u0275elementEnd();
  }
}
function PortComponent_div_9_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.port_name);
  }
}
function PortComponent_div_9_ng_container_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function PortComponent_div_9_ng_container_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 25)(1, "button", 26);
    \u0275\u0275listener("click", function PortComponent_div_9_ng_container_1_td_14_Template_button_click_1_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openViewFieldsDialog(element_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon", 27);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function PortComponent_div_9_ng_container_1_td_14_Template_button_click_4_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditPortDialog(element_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function PortComponent_div_9_ng_container_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function PortComponent_div_9_ng_container_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function PortComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("scroll", function PortComponent_div_9_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, PortComponent_div_9_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, PortComponent_div_9_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, PortComponent_div_9_ng_container_1_th_7_Template, 2, 0, "th", 13)(8, PortComponent_div_9_ng_container_1_td_8_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 17);
    \u0275\u0275template(10, PortComponent_div_9_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, PortComponent_div_9_ng_container_1_td_11_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 18);
    \u0275\u0275template(13, PortComponent_div_9_ng_container_1_th_13_Template, 2, 0, "th", 13)(14, PortComponent_div_9_ng_container_1_td_14_Template, 7, 0, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(15, PortComponent_div_9_ng_container_1_tr_15_Template, 1, 0, "tr", 20)(16, PortComponent_div_9_ng_container_1_tr_16_Template, 1, 0, "tr", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function PortComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PortComponent_div_9_ng_container_1_Template, 17, 4, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r10 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r11 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r10.length > 0)("ngIfElse", noData_r11);
  }
}
function PortComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var PortComponent = class _PortComponent {
  loaderService;
  portService;
  snackBar;
  dialog;
  constructor(loaderService, portService, snackBar, dialog) {
    this.loaderService = loaderService;
    this.portService = portService;
    this.snackBar = snackBar;
    this.dialog = dialog;
  }
  isLoading = computed(() => this.loaderService.loading());
  searchTerm = "";
  displayedColumns = ["Sl.No", "country", "name", "Action"];
  dataSource = new MatTableDataSource();
  currentPage = 1;
  pageSize = 50;
  allDataLoaded = false;
  totalCount = 0;
  searchSubject = new Subject();
  ngOnInit() {
    this.getMaPortTariffRules(true);
    this.searchSubject.pipe(debounceTime(1e3)).subscribe(() => {
      this.onSearch();
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  inputSearch() {
    if (this.searchTerm.trim() === "") {
      this.onSearch();
    } else {
      this.searchSubject.next(this.searchTerm);
    }
  }
  //method to filter the records in db
  onSearch() {
    this.getMaPortTariffRules(true);
  }
  // method to clear the searchterm
  clearSearch() {
    this.searchTerm = "";
    this.getMaPortTariffRules(true);
  }
  // method to fetch the tariff rules from db
  getMaPortDataFromDb(reset = false) {
    if (reset) {
      this.currentPage = 1;
      this.allDataLoaded = false;
      this.dataSource.data = [];
      this.totalCount = 0;
    }
    const body = {
      page: this.currentPage,
      page_size: this.pageSize,
      query: this.searchTerm.trim()
    };
    this.loaderService.show();
    this.portService.portDataFromDb(body).subscribe({
      next: (response) => {
        const newData = response.data;
        this.totalCount = response.total_count;
        this.dataSource.data = [...this.dataSource.data, ...newData];
        if (this.dataSource.data.length >= this.totalCount) {
          this.allDataLoaded = true;
        }
        this.currentPage++;
        this.loaderService.hide();
      },
      error: (err) => {
        console.error("Error fetching tariff rules:", err);
        this.snackBar.showError("Something went wrong. Please try again later.");
        this.loaderService.hide();
      }
    });
  }
  getMaPortTariffRules(reset = false) {
    if (reset) {
      this.currentPage = 1;
      this.allDataLoaded = false;
      this.dataSource.data = [];
      this.totalCount = 0;
    }
    const body = {
      page: this.currentPage,
      page_size: this.pageSize,
      query_name: this.searchTerm.trim()
    };
    this.loaderService.show();
    this.portService.getTariffRules(body).subscribe({
      next: (response) => {
        const newData = response.data;
        this.totalCount = response.total;
        this.dataSource.data = [...this.dataSource.data, ...newData];
        if (this.dataSource.data.length >= this.totalCount) {
          this.allDataLoaded = true;
        }
        this.currentPage++;
        this.loaderService.hide();
      },
      error: (err) => {
        console.error("Error fetching tariff rules:", err);
        this.snackBar.showError("Something went wrong. Please try again later.");
        this.loaderService.hide();
      }
    });
  }
  //calling the portlist api on scroll 
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loaderService.loading() && !this.allDataLoaded) {
        this.getMaPortTariffRules();
      }
    }
  }
  // method to open AddPortDialog
  openAddPortDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "96vw";
    dialogConfig.maxWidth = "100vw";
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreatePortTariffComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaPortTariffRules(true);
      } else if (result && result.data) {
        this.snackBar.showSuccess("Tariffs saved successfully");
      }
    });
  }
  // method to open EditPortDialog
  openEditPortDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "96vw";
    dialogConfig.maxWidth = "100vw";
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.data = { rowData };
    const dialogRef = this.dialog.open(CreatePortTariffComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaPortTariffRules(true);
      } else if (result && result.data) {
        this.snackBar.showSuccess("Tariffs updated successfully");
      }
    });
  }
  // method to open dialog to add the additional vessel fields
  openViewFieldsDialog(vessel_fields) {
    const data = {
      vessel_fields: vessel_fields.vessel_fields
    };
    this.dialog.open(ViewFieldsComponent, {
      data,
      width: "450px",
      disableClose: true
    });
  }
  static \u0275fac = function PortComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortComponent)(\u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(PortService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortComponent, selectors: [["app-port"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "country"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "Action"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "View more", 1, "edit-icon-button", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", "matTooltip", "Edit", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function PortComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Port Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function PortComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function PortComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, PortComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function PortComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddPortDialog());
      });
      \u0275\u0275text(8, " Add Port ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, PortComponent_div_9_Template, 2, 2, "div", 7)(10, PortComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    MatIcon,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatFormField,
    MatLabel,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatInputModule,
    MatInput,
    MatSuffix,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.close-icon[_ngcontent-%COMP%]:hover {\n  color: lightcoral;\n}\n/*# sourceMappingURL=port.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortComponent, { className: "PortComponent" });
})();
export {
  PortComponent
};
//# sourceMappingURL=chunk-7DTR7XFL.js.map
