import {
  CreateUserComponent,
  UseManagementService
} from "./chunk-YJWVWTAZ.js";
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
import "./chunk-2LYLMMA2.js";
import {
  ConfirmationDialogComponent
} from "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
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
  NgClass,
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

// src/app/pages/master/user-management/user-management.component.ts
function UserManagementComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275listener("click", function UserManagementComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.name);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "User Name");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.username);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.role_name);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Company");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.company_name);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "MFA Enabled");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.is_mfa_enabled);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Email Address");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.email);
  }
}
function UserManagementComponent_div_9_ng_container_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, " status ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", element_r12.status === "Y" ? "status-active" : element_r12.status === "B" ? "status-blocked" : "status-inactive");
  }
}
function UserManagementComponent_div_9_ng_container_1_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, " Reset button ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 33);
    \u0275\u0275listener("click", function UserManagementComponent_div_9_ng_container_1_td_29_Template_button_click_1_listener() {
      const element_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetPassword(element_r14.username));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "lock_reset");
    \u0275\u0275elementEnd()()();
  }
}
function UserManagementComponent_div_9_ng_container_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_ng_container_1_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 35);
    \u0275\u0275listener("click", function UserManagementComponent_div_9_ng_container_1_td_32_Template_button_click_1_listener() {
      const element_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditCargoDialog(element_r16));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function UserManagementComponent_div_9_ng_container_1_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function UserManagementComponent_div_9_ng_container_1_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function UserManagementComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("scroll", function UserManagementComponent_div_9_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, UserManagementComponent_div_9_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, UserManagementComponent_div_9_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, UserManagementComponent_div_9_ng_container_1_th_7_Template, 2, 0, "th", 13)(8, UserManagementComponent_div_9_ng_container_1_td_8_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 17);
    \u0275\u0275template(10, UserManagementComponent_div_9_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, UserManagementComponent_div_9_ng_container_1_td_11_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 18);
    \u0275\u0275template(13, UserManagementComponent_div_9_ng_container_1_th_13_Template, 2, 0, "th", 13)(14, UserManagementComponent_div_9_ng_container_1_td_14_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 19);
    \u0275\u0275template(16, UserManagementComponent_div_9_ng_container_1_th_16_Template, 2, 0, "th", 13)(17, UserManagementComponent_div_9_ng_container_1_td_17_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 20);
    \u0275\u0275template(19, UserManagementComponent_div_9_ng_container_1_th_19_Template, 2, 0, "th", 13)(20, UserManagementComponent_div_9_ng_container_1_td_20_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 21);
    \u0275\u0275template(22, UserManagementComponent_div_9_ng_container_1_th_22_Template, 2, 0, "th", 13)(23, UserManagementComponent_div_9_ng_container_1_td_23_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 22);
    \u0275\u0275template(25, UserManagementComponent_div_9_ng_container_1_th_25_Template, 2, 0, "th", 13)(26, UserManagementComponent_div_9_ng_container_1_td_26_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 24);
    \u0275\u0275template(28, UserManagementComponent_div_9_ng_container_1_th_28_Template, 2, 0, "th", 13)(29, UserManagementComponent_div_9_ng_container_1_td_29_Template, 4, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 25);
    \u0275\u0275template(31, UserManagementComponent_div_9_ng_container_1_th_31_Template, 2, 0, "th", 13)(32, UserManagementComponent_div_9_ng_container_1_td_32_Template, 4, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(33, UserManagementComponent_div_9_ng_container_1_tr_33_Template, 1, 0, "tr", 26)(34, UserManagementComponent_div_9_ng_container_1_tr_34_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function UserManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UserManagementComponent_div_9_ng_container_1_Template, 35, 4, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r18 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r17.length > 0)("ngIfElse", noData_r18);
  }
}
function UserManagementComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var UserManagementComponent = class _UserManagementComponent {
  dialog;
  userService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  searchTerm = "";
  displayedColumns = ["Sl.No", "Full Name", "User Name", "Role", "Company", "Email Address", "MFA Enabled", "status", "Reset button", "Action"];
  dataSource = new MatTableDataSource();
  currentPage = 1;
  pageSize = 20;
  totalCount = 0;
  allDataLoaded = false;
  searchSubject = new Subject();
  constructor(dialog, userService, snackBar) {
    this.dialog = dialog;
    this.userService = userService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.getMaUserDataFromDb(true);
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
  // method to search the record globally
  onSearch() {
    this.getMaUserDataFromDb(true);
  }
  // method to  clear the search term
  clearSearch() {
    this.searchTerm = "";
    this.getMaUserDataFromDb(true);
  }
  // method to call the api on scroll
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.getMaUserDataFromDb();
      }
    }
  }
  getMaUserDataFromDb(reset = false) {
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
    this.userService.userDataFromDb(body).subscribe({
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
  openAddCargoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaUserDataFromDb(true);
      }
    });
  }
  openEditCargoDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.data = { rowData };
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaUserDataFromDb(true);
      }
    });
  }
  resetPassword(username) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: "Confirm Password Reset",
        text: `Are you sure you want to reset the password for user "${username}"?`
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.loader.show();
        this.userService.resetUserPassword(username).subscribe({
          next: (response) => {
            this.loader.hide();
            this.snackBar.showSuccess(response.message || "Password reset successfully");
          },
          error: (error) => {
            this.loader.hide();
            const errmsg = error.error?.detail || "Failed to reset password. Please try again.";
            this.snackBar.showError(errmsg);
          }
        });
      }
    });
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UseManagementService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "Full Name"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "User Name"], ["matColumnDef", "Role"], ["matColumnDef", "Company"], ["matColumnDef", "MFA Enabled"], ["matColumnDef", "Email Address"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Reset button"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], [3, "ngClass"], ["mat-icon-button", "", 1, "reset-icon-button", 3, "click"], [1, "reset-icon"], ["mat-icon-button", "", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "User Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function UserManagementComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, UserManagementComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddCargoDialog());
      });
      \u0275\u0275text(8, " Add User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, UserManagementComponent_div_9_Template, 2, 2, "div", 7)(10, UserManagementComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, CommonModule, NgClass, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.reset-icon[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.reset-icon-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  margin-top: 2px;\n  background-color: var(--color-action) !important;\n  color: var(--app-text-primary) !important;\n}\n.reset-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n  color: var(--color-error-muted) !important;\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent" });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-22RZ76YV.js.map
