import {
  CreatePortAgentComponent,
  PortAgentService
} from "./chunk-PZGYRYI3.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import "./chunk-REH2YONL.js";
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
  MatGridListModule
} from "./chunk-65SYLNKY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NT4IUQ5M.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogContent,
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

// src/app/components/create-port-agent/view-emails/view-emails.component.ts
function ViewEmailsComponent_mat_chip_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mail_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mail_r1, " ");
  }
}
var ViewEmailsComponent = class _ViewEmailsComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function ViewEmailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewEmailsComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEmailsComponent, selectors: [["app-view-emails"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 16, consts: [[1, "dialog-header"], ["color", "warn", 3, "click"], [1, "field"], [1, "field-label1", 2, "color", "black"], [1, "field-label1"], [1, "email-chip"], ["color", "primary", "selected", "", 4, "ngFor", "ngForOf"], [1, "address-field"], [1, "address"], [1, "field-label"], ["color", "primary", "selected", ""]], template: function ViewEmailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h6");
      \u0275\u0275text(2, "Port Agent Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-icon", 1);
      \u0275\u0275listener("click", function ViewEmailsComponent_Template_mat_icon_click_3_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275text(4, "close");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-dialog-content")(6, "div", 2)(7, "span", 3);
      \u0275\u0275text(8, "Port Agent Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 4);
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-chip-set", 5);
      \u0275\u0275template(14, ViewEmailsComponent_mat_chip_14_Template, 2, 1, "mat-chip", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "span", 3);
      \u0275\u0275text(17, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "br");
      \u0275\u0275elementStart(21, "span", 4);
      \u0275\u0275text(22, "Enter Bank Details & Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "hr");
      \u0275\u0275elementStart(24, "div")(25, "div", 2)(26, "span", 9);
      \u0275\u0275text(27, "Beneficiary account Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 2)(31, "span", 9);
      \u0275\u0275text(32, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 2)(36, "span", 9);
      \u0275\u0275text(37, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 2)(41, "span", 9);
      \u0275\u0275text(42, "Correspondent Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 2)(46, "span", 9);
      \u0275\u0275text(47, "IBAN Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 2)(51, "span", 9);
      \u0275\u0275text(52, "SWIFT Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 2)(56, "span", 9);
      \u0275\u0275text(57, " BIC Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 2)(61, "span", 9);
      \u0275\u0275text(62, "INN Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 2)(66, "span", 9);
      \u0275\u0275text(67, "BIK Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span");
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 2)(71, "span", 9);
      \u0275\u0275text(72, "IFSC Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 2)(76, "span", 9);
      \u0275\u0275text(77, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 2)(81, "span", 9);
      \u0275\u0275text(82, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 7)(86, "span", 9);
      \u0275\u0275text(87, "Bank Branch with Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 8);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.data.company_name);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.data.email);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.address);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.beneficiary_acc_holder_name);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.bank_name);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.current_account_number);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.correspondent_account_number);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.iban_number);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.swift_code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.bic_code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.inn_code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.bik_code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.ifsc_code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.country_name);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.currency);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.bank_details == null ? null : ctx.data.bank_details.branch_address);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    MatDialogModule,
    MatDialogContent,
    MatButtonModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatIconModule,
    MatIcon,
    MatGridListModule
  ], styles: ["\n\n.header-title[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  text-align: center;\n}\nmat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 8px;\n  font-size: 22px;\n  gap: 10px;\n}\n.modalContainer[_ngcontent-%COMP%] {\n  padding: 5px 8px !important;\n}\n.bankDtlsHeader[_ngcontent-%COMP%] {\n  align-content: center;\n  font-size: 14px;\n  color: #7e8188;\n  font-weight: 500;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  text-align: left;\n  margin: 2px;\n  justify-content: space-between;\n  span {\n    color: #444;\n  }\n  strong {\n    color: #000;\n  }\n}\n.field-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #000;\n}\n.field-label1[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #000;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n.address[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=view-emails.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEmailsComponent, { className: "ViewEmailsComponent" });
})();

// src/app/pages/master/port-agent/port-agent.component.ts
function PortAgentComponent_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275listener("click", function PortAgentComponent_mat_icon_7_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function PortAgentComponent_div_10_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function PortAgentComponent_div_10_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
function PortAgentComponent_div_10_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Port Agent");
    \u0275\u0275elementEnd();
  }
}
function PortAgentComponent_div_10_ng_container_1_td_8_Template(rf, ctx) {
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
function PortAgentComponent_div_10_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function PortAgentComponent_div_10_ng_container_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function PortAgentComponent_div_10_ng_container_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 27);
    \u0275\u0275listener("click", function PortAgentComponent_div_10_ng_container_1_td_13_Template_button_click_1_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDialog(element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 28);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function PortAgentComponent_div_10_ng_container_1_td_13_Template_button_click_4_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditPortAgentDialog(element_r8));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function PortAgentComponent_div_10_ng_container_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function PortAgentComponent_div_10_ng_container_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function PortAgentComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275listener("scroll", function PortAgentComponent_div_10_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 12);
    \u0275\u0275elementContainerStart(3, 13);
    \u0275\u0275template(4, PortAgentComponent_div_10_ng_container_1_th_4_Template, 2, 0, "th", 14)(5, PortAgentComponent_div_10_ng_container_1_td_5_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 16);
    \u0275\u0275template(7, PortAgentComponent_div_10_ng_container_1_th_7_Template, 2, 0, "th", 14)(8, PortAgentComponent_div_10_ng_container_1_td_8_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 18);
    \u0275\u0275template(10, PortAgentComponent_div_10_ng_container_1_th_10_Template, 2, 0, "th", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 19);
    \u0275\u0275template(12, PortAgentComponent_div_10_ng_container_1_th_12_Template, 2, 0, "th", 14)(13, PortAgentComponent_div_10_ng_container_1_td_13_Template, 7, 0, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, PortAgentComponent_div_10_ng_container_1_tr_14_Template, 1, 0, "tr", 21)(15, PortAgentComponent_div_10_ng_container_1_tr_15_Template, 1, 0, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(12);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function PortAgentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PortAgentComponent_div_10_ng_container_1_Template, 16, 4, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r10 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r9.length > 0)("ngIfElse", noData_r10);
  }
}
function PortAgentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var PortAgentComponent = class _PortAgentComponent {
  loaderService;
  portAgentService;
  snackBar;
  dialog;
  constructor(loaderService, portAgentService, snackBar, dialog) {
    this.loaderService = loaderService;
    this.portAgentService = portAgentService;
    this.snackBar = snackBar;
    this.dialog = dialog;
  }
  isLoading = computed(() => this.loaderService.loading());
  searchTerm = "";
  displayedColumns = ["Sl.No", "company_name", "Action"];
  dataSource = new MatTableDataSource();
  currentPage = 1;
  pageSize = 50;
  allDataLoaded = false;
  totalCount = 0;
  searchSubject = new Subject();
  ngOnInit() {
    this.getMaPortAgentDataFromDb(true);
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
  //method to filter the records from db
  onSearch() {
    this.getMaPortAgentDataFromDb(true);
  }
  //method to clear the searchTerm
  clearSearch() {
    this.searchTerm = "";
    this.getMaPortAgentDataFromDb(true);
    this.dataSource.filter = "";
  }
  //method to call an api on scroll
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loaderService.loading() && !this.allDataLoaded) {
        this.getMaPortAgentDataFromDb();
      }
      if (this.totalCount && this.dataSource.data.length >= this.totalCount) {
        this.allDataLoaded = true;
        return;
      }
    }
  }
  // method to fetch the port-agent list from db
  getMaPortAgentDataFromDb(reset = false) {
    if (reset) {
      this.currentPage = 1;
      this.allDataLoaded = false;
      this.dataSource.data = [];
      this.totalCount = 0;
    }
    const body = {
      page: this.currentPage,
      page_size: this.pageSize,
      query: this.searchTerm.trim(),
      status: "Y"
    };
    this.loaderService.show();
    this.portAgentService.portAgentDataFromDb(body).subscribe({
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
      error: (error) => {
        const errorMsg = error?.detail;
        this.snackBar.showError(errorMsg || "Something went wrong. Please try again later.");
        this.loaderService.hide();
      }
    });
  }
  // method to open the portagent add diaolg
  openAddPortAgentDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "66vw";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreatePortAgentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh")
        this.getMaPortAgentDataFromDb(true);
    });
  }
  openEditPortAgentDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.width = "66vw";
    dialogConfig.data = { rowData };
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreatePortAgentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh")
        this.getMaPortAgentDataFromDb(true);
    });
  }
  openDialog(rowData) {
    this.dialog.open(ViewEmailsComponent, {
      data: rowData,
      width: "500px",
      height: "80vh"
    });
  }
  static \u0275fac = function PortAgentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortAgentComponent)(\u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(PortAgentService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortAgentComponent, selectors: [["app-port-agent"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [["noData", ""], [1, "theme-dark", "page-container"], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "company_name"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "Action"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "View more", 1, "edit-icon-button", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", "matTooltip", "Edit", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function PortAgentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-form-field", 4)(4, "mat-label");
      \u0275\u0275text(5, "Port Agent Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function PortAgentComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function PortAgentComponent_Template_input_input_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, PortAgentComponent_mat_icon_7_Template, 2, 0, "mat-icon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function PortAgentComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddPortAgentDialog());
      });
      \u0275\u0275text(9, " Add PortAgent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, PortAgentComponent_div_10_Template, 2, 2, "div", 8)(11, PortAgentComponent_ng_template_11_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltipModule, MatTooltip], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  background-color: var(--app-page-bg);\n  min-height: 100vh;\n  padding: 10px 20px;\n}\n.theme-dark[_ngcontent-%COMP%] {\n  background-color: var(--app-page-bg);\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.scroll-anchor[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n}\n.email-outer-layer[_ngcontent-%COMP%] {\n  width: 220px !important;\n  max-width: 220px !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.close-icon[_ngcontent-%COMP%]:hover {\n  color: lightcoral;\n}\n  .mat-mdc-form-field {\n  --mdc-outlined-text-field-outline-color: var(--app-input-border) !important;\n  --mdc-outlined-text-field-focus-outline-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-label-text-color: var(--app-input-label) !important;\n  --mdc-outlined-text-field-focus-label-text-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-outline-width: 0.50px;\n  --mdc-outlined-text-field-focus-outline-width: 0.50px;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n}\n  .mat-mdc-form-field-infix {\n  padding: 0 8px !important;\n  min-height: 36px !important;\n  display: flex;\n  align-items: center;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error) !important;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=port-agent.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortAgentComponent, { className: "PortAgentComponent" });
})();
export {
  PortAgentComponent
};
//# sourceMappingURL=chunk-NHFWFDTJ.js.map
