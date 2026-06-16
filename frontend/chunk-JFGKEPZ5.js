import {
  CreatePurposeComponent,
  PurposeService
} from "./chunk-XMRFA5KW.js";
import "./chunk-R2NPM7IG.js";
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
import {
  MatDialog,
  MatDialogConfig
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
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/master/purpose/purpose.component.ts
function PurposeComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275listener("click", function PurposeComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function PurposeComponent_div_9_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function PurposeComponent_div_9_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
function PurposeComponent_div_9_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Purpose");
    \u0275\u0275elementEnd();
  }
}
function PurposeComponent_div_9_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.name);
  }
}
function PurposeComponent_div_9_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function PurposeComponent_div_9_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "button", 25);
    \u0275\u0275listener("click", function PurposeComponent_div_9_ng_container_1_td_11_Template_button_click_1_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditPurposeDialog(element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function PurposeComponent_div_9_ng_container_1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function PurposeComponent_div_9_ng_container_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function PurposeComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("scroll", function PurposeComponent_div_9_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, PurposeComponent_div_9_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, PurposeComponent_div_9_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, PurposeComponent_div_9_ng_container_1_th_7_Template, 2, 0, "th", 13)(8, PurposeComponent_div_9_ng_container_1_td_8_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 17);
    \u0275\u0275template(10, PurposeComponent_div_9_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, PurposeComponent_div_9_ng_container_1_td_11_Template, 4, 0, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(12, PurposeComponent_div_9_ng_container_1_tr_12_Template, 1, 0, "tr", 19)(13, PurposeComponent_div_9_ng_container_1_tr_13_Template, 1, 0, "tr", 20);
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
function PurposeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PurposeComponent_div_9_ng_container_1_Template, 14, 4, "ng-container", 9);
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
function PurposeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var PurposeComponent = class _PurposeComponent {
  dialog;
  purposeService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  searchTerm = "";
  displayedColumns = ["Sl.No", "name", "Action"];
  dataSource = new MatTableDataSource();
  currentPage = 1;
  pageSize = 50;
  totalCount = 0;
  allDataLoaded = false;
  searchSubject = new Subject();
  constructor(dialog, purposeService, snackBar) {
    this.dialog = dialog;
    this.purposeService = purposeService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.getMaPurposeDataFromDb(true);
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
  onSearch() {
    this.getMaPurposeDataFromDb(true);
  }
  clearSearch() {
    this.searchTerm = "";
    this.getMaPurposeDataFromDb(true);
  }
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.getMaPurposeDataFromDb();
      }
    }
  }
  getMaPurposeDataFromDb(reset = false) {
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
    this.loader.show();
    this.purposeService.purposeDataFromDb(body).subscribe({
      next: (response) => {
        const newData = response.data;
        this.totalCount = response.total_count;
        this.dataSource.data = [...this.dataSource.data, ...newData];
        if (this.dataSource.data.length >= this.totalCount) {
          this.allDataLoaded = true;
        }
        this.currentPage++;
        this.loader.hide();
      },
      error: () => {
        this.snackBar.showError("Something went wrong. Please try again later.");
        this.loader.hide();
      }
    });
  }
  openAddPurposeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreatePurposeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaPurposeDataFromDb(true);
      }
    });
  }
  openEditPurposeDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.data = { rowData };
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreatePurposeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaPurposeDataFromDb(true);
      }
    });
  }
  static \u0275fac = function PurposeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurposeComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PurposeService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurposeComponent, selectors: [["app-purpose"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], ["mat-icon-button", "", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function PurposeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function PurposeComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function PurposeComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, PurposeComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function PurposeComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddPurposeDialog());
      });
      \u0275\u0275text(8, " Add Purpose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, PurposeComponent_div_9_Template, 2, 2, "div", 7)(10, PurposeComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, CommonModule, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=purpose.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurposeComponent, { className: "PurposeComponent" });
})();
export {
  PurposeComponent
};
//# sourceMappingURL=chunk-JFGKEPZ5.js.map
