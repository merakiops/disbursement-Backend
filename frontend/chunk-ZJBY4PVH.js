import {
  CreateClientComponent
} from "./chunk-GTJ5IF63.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import "./chunk-REH2YONL.js";
import {
  ClientService
} from "./chunk-VYXKY3G4.js";
import "./chunk-A6CJVYKT.js";
import "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
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
import "./chunk-K64LDRY5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-ZEOMT33W.js";
import {
  MatFormField,
  MatFormFieldModule,
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
import "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButtonModule,
  NgControlStatus,
  NgModel
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Subject,
  computed,
  debounceTime,
  inject,
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

// src/app/components/create-client/view-more/view-more.component.ts
function ViewMoreDialogComponent_mat_chip_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mail_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mail_r2, " ");
  }
}
function ViewMoreDialogComponent_div_18_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vsl_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vsl_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vsl_r3.imo_number);
  }
}
function ViewMoreDialogComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th", 14);
    \u0275\u0275text(5, "Vessel Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "IMO Number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275template(9, ViewMoreDialogComponent_div_18_tr_9_Template, 5, 2, "tr", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.data.vslList);
  }
}
function ViewMoreDialogComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "No Active Vessels Found");
    \u0275\u0275elementEnd();
  }
}
function ViewMoreDialogComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "No Active Vessels Found");
    \u0275\u0275elementEnd();
  }
}
var ViewMoreDialogComponent = class _ViewMoreDialogComponent {
  data;
  dialogRef;
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function ViewMoreDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMoreDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewMoreDialogComponent, selectors: [["app-view-more-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 4, consts: [["noData", ""], [1, "dialog-header"], ["color", "warn", 3, "click"], [1, "modalContainer"], [1, "client-section"], [1, "client-info"], [1, "label"], [1, "value", 2, "word-wrap", "break-word", "flex", "shrink", "margin-left", "5px"], [1, "email-chip"], ["color", "primary", "selected", "", 4, "ngFor", "ngForOf"], ["class", "table-container", 4, "ngIf", "ngIfElse"], ["color", "primary", "selected", ""], [1, "table-container"], [1, "vessel-table"], [2, "text-align", "left"], [4, "ngFor", "ngForOf"], [1, "no-vessel"]], template: function ViewMoreDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h6");
      \u0275\u0275text(2, "Vessel Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-icon", 2);
      \u0275\u0275listener("click", function ViewMoreDialogComponent_Template_mat_icon_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275text(4, "close");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
      \u0275\u0275text(9, "Client Name : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "Email : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-chip-set", 8);
      \u0275\u0275template(15, ViewMoreDialogComponent_mat_chip_15_Template, 2, 1, "mat-chip", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6);
      \u0275\u0275text(17, "Vessel List ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ViewMoreDialogComponent_div_18_Template, 10, 1, "div", 10)(19, ViewMoreDialogComponent_ng_template_19_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, ViewMoreDialogComponent_ng_template_21_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noData_r5 = \u0275\u0275reference(20);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.data.clientName, "");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.data.email);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (ctx.data.vslList == null ? null : ctx.data.vslList.length) > 0)("ngIfElse", noData_r5);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatDialogModule, MatIconModule, MatIcon, MatButtonModule, MatChipsModule, MatChip, MatChipSet], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 12px;\n  padding-top: 12px;\n  padding-bottom: 0px;\n  font-size: 22px;\n  gap: 10px;\n}\n.client-section[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: space-between;\n  padding: 8px 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #777a7c;\n}\n.table-container[_ngcontent-%COMP%] {\n  max-height: 80%;\n  overflow-y: auto;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n.vessel-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  border: none;\n}\n.vessel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  border-bottom: none !important;\n}\n.vessel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.vessel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  word-break: break-word;\n}\n.vessel-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #EBEDFB;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  border-bottom: none !important;\n}\n.modalContainer[_ngcontent-%COMP%] {\n  padding: 4px 16px !important;\n}\n.no-vessel[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=view-more.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewMoreDialogComponent, { className: "ViewMoreDialogComponent" });
})();

// src/app/pages/master/client/client.component.ts
function ClientComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275listener("click", function ClientComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function ClientComponent_div_9_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function ClientComponent_div_9_ng_container_1_td_5_Template(rf, ctx) {
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
function ClientComponent_div_9_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Client Name");
    \u0275\u0275elementEnd();
  }
}
function ClientComponent_div_9_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.company_name);
  }
}
function ClientComponent_div_9_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function ClientComponent_div_9_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 27);
    \u0275\u0275listener("click", function ClientComponent_div_9_ng_container_1_td_11_Template_button_click_1_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDialog(element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 28);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function ClientComponent_div_9_ng_container_1_td_11_Template_button_click_4_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditClientDialog(element_r8));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function ClientComponent_div_9_ng_container_1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function ClientComponent_div_9_ng_container_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function ClientComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("scroll", function ClientComponent_div_9_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, ClientComponent_div_9_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, ClientComponent_div_9_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, ClientComponent_div_9_ng_container_1_th_7_Template, 2, 0, "th", 16)(8, ClientComponent_div_9_ng_container_1_td_8_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 18);
    \u0275\u0275template(10, ClientComponent_div_9_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, ClientComponent_div_9_ng_container_1_td_11_Template, 7, 0, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(12, ClientComponent_div_9_ng_container_1_tr_12_Template, 1, 0, "tr", 20)(13, ClientComponent_div_9_ng_container_1_tr_13_Template, 1, 0, "tr", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function ClientComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ClientComponent_div_9_ng_container_1_Template, 14, 4, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r10 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r9.length > 0)("ngIfElse", noData_r10);
  }
}
function ClientComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var ClientComponent = class _ClientComponent {
  dialog;
  clientService;
  displayedColumns = ["Sl.No", "client", "Action"];
  dataSource = new MatTableDataSource();
  searchTerm = "";
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  searchSubject = new Subject();
  currentPage = 1;
  pageSize = 50;
  totalCount = 0;
  allDataLoaded = false;
  constructor(dialog, clientService) {
    this.dialog = dialog;
    this.clientService = clientService;
  }
  ngOnInit() {
    this.getMaClientDataFromDb(true);
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
  // Scroll handler
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.getMaClientDataFromDb();
      }
    }
  }
  onSearch() {
    this.getMaClientDataFromDb(true);
  }
  clearSearch() {
    this.searchTerm = "";
    this.getMaClientDataFromDb(true);
  }
  getMaClientDataFromDb(reset = false) {
    if (reset) {
      this.currentPage = 1;
      this.dataSource.data = [];
      this.totalCount = 0;
      this.allDataLoaded = false;
    }
    const body = {
      page: this.currentPage,
      page_size: this.pageSize,
      query: this.searchTerm.trim(),
      status: "Y"
    };
    this.loader.show();
    this.clientService.ClientDataFromDb(body).subscribe({
      next: (response) => {
        this.totalCount = response.total_count;
        this.dataSource.data = [...this.dataSource.data, ...response.data];
        if (this.dataSource.data.length >= this.totalCount) {
          this.allDataLoaded = true;
        }
        this.currentPage++;
        this.loader.hide();
      },
      error: () => {
        this.loader.hide();
      }
    });
  }
  openAddClientDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateClientComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaClientDataFromDb(true);
      }
    });
  }
  openEditClientDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.data = { rowData };
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateClientComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaClientDataFromDb(true);
      }
    });
  }
  openDialog(vslPayLoad) {
    this.loader.show();
    const body = {
      company_id: vslPayLoad.company_id,
      fields: ["assigned_unassigned"]
    };
    this.clientService.VslListFromDb(body).subscribe({
      next: (response) => {
        this.loader.hide();
        const data = {
          clientName: vslPayLoad.company_name,
          clientStatus: vslPayLoad.status === "Y" ? "Active" : "Inactive",
          vslList: response.assigned_vessels,
          email: vslPayLoad.email || []
        };
        this.dialog.open(ViewMoreDialogComponent, {
          data,
          // panelClass: 'custom-dialog-panel',
          width: "450px",
          height: "90vh"
        });
      },
      error: (err) => {
        this.loader.hide();
      }
    });
  }
  static \u0275fac = function ClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ClientService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientComponent, selectors: [["app-client"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "style", "cursor: pointer; margin-top: 3px;", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 2, "cursor", "pointer", "margin-top", "3px", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", "style", "width:70px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", 4, "matCellDef"], ["matColumnDef", "client"], ["mat-header-cell", "", "style", "width:250px; word-wrap: break-word;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "70px"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-cell", "", 2, "width", "250px", "word-wrap", "break-word"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "view more", "matTooltipPosition", "above", 1, "edit-icon-button", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", "matTooltip", "Edit", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function ClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Client Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ClientComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ClientComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, ClientComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddClientDialog());
      });
      \u0275\u0275text(8, " Add Client ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ClientComponent_div_9_Template, 2, 2, "div", 7)(10, ClientComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatSuffix, MatFormFieldModule, CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTooltipModule, MatTooltip], styles: ["\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.search[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.vessel-outer-layer[_ngcontent-%COMP%] {\n  width: 250px !important;\n  max-width: 250px !important;\n}\n.vessel-column[_ngcontent-%COMP%] {\n  width: 220px !important;\n  max-width: 220px !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=client.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientComponent, { className: "ClientComponent" });
})();
export {
  ClientComponent
};
//# sourceMappingURL=chunk-ZJBY4PVH.js.map
