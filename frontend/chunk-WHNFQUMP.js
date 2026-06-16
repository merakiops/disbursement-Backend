import "./chunk-46CMN5TU.js";
import "./chunk-SNZ4PAUJ.js";
import "./chunk-7ATAFLL6.js";
import "./chunk-YH7BMAPD.js";
import "./chunk-TQVZRFDQ.js";
import "./chunk-4NIIGUZS.js";
import "./chunk-Z6YUOPJY.js";
import "./chunk-7LZOSO4L.js";
import "./chunk-XQCSZ7IC.js";
import "./chunk-3TJ2XT7F.js";
import "./chunk-GWDTIECY.js";
import "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import "./chunk-4B5JIWQW.js";
import "./chunk-5NR6WTQB.js";
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
import "./chunk-65SYLNKY.js";
import "./chunk-7SVTSSNI.js";
import "./chunk-2LYLMMA2.js";
import "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
import {
  MatDialog
} from "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule
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
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  Subject,
  debounceTime,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/client-approval-list/client-approval-list.component.modal.ts
var DisbursmentDetails = class {
  disbursement_seq;
  disbursement_id;
  client_name;
  port_agent_name;
  pic;
  ops_pic;
  agency_nomination_date;
  invoice_number;
  pda_id;
  pda_received_ops_agent;
  pda_processing_date;
  pda_status;
  portagent_pda_amount;
  pda_remittance;
  pda_remark;
  fda_id;
  fda_received_ops_agent;
  fda_processing_date;
  portagent_fda_amount;
  fda_status;
  fda_remark;
  days_outstanding;
  vessel_name;
  voyage;
  port;
  country;
  purpose;
  cargo;
  eta;
  etd;
  sm_estimated_amount;
  sm_detailed_entry;
  sm_ws_chart_ac;
  owners_item_rejected;
  towage_agency_agrement;
  roe_agent;
  roe_actual_oanda;
  roe_loss;
  loss_prevention_pda;
  loss_prevention_fda;
  total_loss_prevented;
  loss_prevented_reason;
  final_status;
  constructor(details) {
    this.disbursement_seq = details.disbursement_seq || null;
    this.disbursement_id = details.disbursement_id || null;
    this.client_name = details.client_name || null;
    this.port_agent_name = details.port_agent_name || null;
    this.pic = details.pic || null;
    this.ops_pic = details.ops_pic || null;
    this.agency_nomination_date = details.agency_nomination_date || null;
    this.invoice_number = details.invoice_number || null;
    this.pda_id = details.pda_id || null;
    this.pda_received_ops_agent = details.pda_received_ops_agent || null;
    this.pda_processing_date = details.pda_processing_date || null;
    this.pda_status = details.pda_status || null;
    this.portagent_pda_amount = details.portagent_pda_amount || null;
    this.pda_remittance = details.pda_remittance || null;
    this.pda_remark = details.pda_remark || null;
    this.fda_id = details.fda_id || null;
    this.fda_received_ops_agent = details.fda_received_ops_agent || null;
    this.fda_processing_date = details.fda_processing_date || null;
    this.portagent_fda_amount = details.portagent_fda_amount || null;
    this.fda_status = details.fda_status || null;
    this.fda_remark = details.fda_remark || null;
    this.days_outstanding = details.days_outstanding || null;
    this.vessel_name = details.vessel_name || null;
    this.voyage = details.voyage || null;
    this.port = details.port || null;
    this.country = details.country || null;
    this.purpose = details.purpose || null;
    this.cargo = details.cargo || null;
    this.eta = details.eta || null;
    this.etd = details.etd || null;
    this.sm_estimated_amount = details.sm_estimated_amount || null;
    this.sm_detailed_entry = details.sm_detailed_entry || null;
    this.sm_ws_chart_ac = details.sm_ws_chart_ac || null;
    this.owners_item_rejected = details.owners_item_rejected || null;
    this.towage_agency_agrement = details.towage_agency_agrement || null;
    this.roe_agent = details.roe_agent || null;
    this.roe_actual_oanda = details.roe_actual_oanda || null;
    this.roe_loss = details.roe_loss || null;
    this.loss_prevention_pda = details.loss_prevention_pda || null;
    this.loss_prevention_fda = details.loss_prevention_fda || null;
    this.total_loss_prevented = details.total_loss_prevented || null;
    this.loss_prevented_reason = details.loss_prevented_reason || null;
    this.final_status = details.final_status || null;
  }
};
var columnsToDisplay = [
  { name: "Disbursement ID", property: "disbursement_id" },
  { name: "Client", property: "client_name" },
  { name: "Vessel", property: "vessel_name" },
  { name: "Port Agent", property: "port_agent" },
  { name: "Port", property: "port" },
  { name: "Country", property: "country" },
  { name: "ETA", property: "eta" },
  { name: "ETD", property: "etd" },
  { name: "Status", property: "status" }
];

// src/app/pages/client-approval-list/client-approval-list.component.service.ts
var ClientService = class _ClientService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get the data from db
  getDisbursementData(params) {
    return this.http.post("client_disbursement_tracker_approval_pending", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  static \u0275fac = function ClientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
};

// src/app/pages/client-approval-list/client-approval-list.component.ts
var _c0 = () => ["expandedDetail"];
var _c1 = (a0, a1) => ({ "color": a0, "font-weight": a1 });
var _c2 = (a0, a1) => ({ "background": a0, "color": a1 });
function ClientApprovalListComponent_div_9_For_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r4.name);
  }
}
function ClientApprovalListComponent_div_9_For_4_Conditional_2_td_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23);
    \u0275\u0275listener("click", function ClientApprovalListComponent_div_9_For_4_Conditional_2_td_0_Template_td_click_0_listener($event) {
      const element_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.onClick(element_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const column_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(2, _c1, column_r4.property == "pda_amount" ? "#007AFF" : "inherit", column_r4.property == "pda_amount" ? "500" : "inherit"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r6[column_r4.property], "");
  }
}
function ClientApprovalListComponent_div_9_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientApprovalListComponent_div_9_For_4_Conditional_2_td_0_Template, 2, 5, "td", 22);
  }
}
function ClientApprovalListComponent_div_9_For_4_Conditional_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275listener("click", function ClientApprovalListComponent_div_9_For_4_Conditional_3_td_0_Template_td_click_0_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.onClick(element_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const column_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(2, _c2, element_r8.status_background_color, element_r8.status_text_color));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8[column_r4.property]);
  }
}
function ClientApprovalListComponent_div_9_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientApprovalListComponent_div_9_For_4_Conditional_3_td_0_Template, 3, 5, "td", 24);
  }
}
function ClientApprovalListComponent_div_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 12);
    \u0275\u0275template(1, ClientApprovalListComponent_div_9_For_4_th_1_Template, 2, 1, "th", 18)(2, ClientApprovalListComponent_div_9_For_4_Conditional_2_Template, 1, 0, "td", 19)(3, ClientApprovalListComponent_div_9_For_4_Conditional_3_Template, 1, 0, "td", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("matColumnDef", column_r4.property);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(column_r4.property != "status" ? 2 : 3);
  }
}
function ClientApprovalListComponent_div_9_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275element(3, "div", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("colspan", ctx_r2.columnsToDisplayOnly.length);
  }
}
function ClientApprovalListComponent_div_9_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function ClientApprovalListComponent_div_9_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function ClientApprovalListComponent_div_9_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ClientApprovalListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275listener("scroll", function ClientApprovalListComponent_div_9_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275repeaterCreate(3, ClientApprovalListComponent_div_9_For_4_Template, 4, 2, "ng-container", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementContainerStart(5, 13);
    \u0275\u0275template(6, ClientApprovalListComponent_div_9_td_6_Template, 4, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(7, ClientApprovalListComponent_div_9_tr_7_Template, 1, 0, "tr", 15)(8, ClientApprovalListComponent_div_9_tr_8_Template, 1, 0, "tr", 16)(9, ClientApprovalListComponent_div_9_tr_9_Template, 1, 0, "tr", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.datasource);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.columnsToDisplay);
    \u0275\u0275advance(4);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.columnsToDisplayOnly)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.columnsToDisplayOnly);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(5, _c0));
  }
}
function ClientApprovalListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " No disbursement found. ");
    \u0275\u0275elementEnd();
  }
}
var ClientApprovalListComponent = class _ClientApprovalListComponent {
  clientService;
  snackbar;
  dialog;
  router;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  searchTerm = "";
  allDataLoaded = false;
  datasource = new MatTableDataSource([]);
  columnsToDisplay = columnsToDisplay;
  columnsToDisplayOnly = this.columnsToDisplay.map((col) => col.property);
  expandedElement = null;
  disbursementdetails = new DisbursmentDetails({});
  isExpandedVal = false;
  currentPage = 1;
  pageSize = 30;
  totalCount = 0;
  searchSubject = new Subject();
  constructor(clientService, snackbar, dialog, router) {
    this.clientService = clientService;
    this.snackbar = snackbar;
    this.dialog = dialog;
    this.router = router;
    this.searchSubject.pipe(debounceTime(1e3)).subscribe(() => {
      this.onSearch();
    });
  }
  ngOnInit() {
    this.getDisbursmentDataFromDb(true);
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  inputSearch() {
    this.searchSubject.next(this.searchTerm);
  }
  /** Fetches disbursement data from the database. */
  getDisbursmentDataFromDb(reset) {
    if (reset) {
      this.currentPage = 1;
      this.datasource.data = [];
      this.totalCount = 0;
      this.allDataLoaded = false;
    }
    const body = {
      query: this.searchTerm.trim(),
      page: this.currentPage,
      page_size: this.pageSize
    };
    this.loader.show();
    this.clientService.getDisbursementData(body).subscribe({
      next: (response) => {
        this.totalCount = response.total_count;
        this.datasource.data = [
          ...this.datasource.data,
          ...response.data.map((item) => __spreadProps(__spreadValues({}, item), {
            eta: item.eta ? item.eta.split("T")[0] : "",
            etd: item.etd ? item.etd.split("T")[0] : ""
          }))
        ];
        if (this.datasource.data.length >= this.totalCount) {
          this.allDataLoaded = true;
        }
        this.currentPage++;
        this.loader.hide();
      },
      error: (error) => {
        console.error("Error fetching disbursement data:", error);
        this.loader.hide();
      }
    });
  }
  onClick(element) {
    sessionStorage.setItem("disbursement_seq", element.disbursement_seq);
    const pdaOrFda = element.status?.slice(0, 3);
    sessionStorage.setItem("pdaOrFda", pdaOrFda);
    this.router.navigate(["/layout/client-approval-form"], {});
  }
  // method to search the record globally
  onSearch() {
    this.getDisbursmentDataFromDb(true);
  }
  // method to  clear the search term
  clearSearch() {
    this.searchTerm = "";
    this.getDisbursmentDataFromDb(true);
  }
  // method to call the api on scroll
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer && !this.isExpandedVal) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.getDisbursmentDataFromDb(false);
      }
    }
  }
  static \u0275fac = function ClientApprovalListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientApprovalListComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientApprovalListComponent, selectors: [["app-disbursment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "theme-dark", 2, "overflow-x", "hidden"], [1, "topbar", "topbar-margin"], [1, "search-section", 2, "margin-left", "-10px"], ["appearance", "outline", 1, "search-bar", 2, "margin-bottom", "0px"], ["matInput", "", "placeholder", "Search disbursement ...", 3, "ngModelChange", "input", "ngModel"], ["mat-icon-button", "", 1, "search-icon", 3, "click"], [1, "search"], ["style", "overflow-x: auto;", 4, "ngIf", "ngIfElse"], [2, "overflow-x", "auto"], [1, "table-container", 2, "max-height", "86vh!important", 3, "scroll"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", "class", "expanded-content-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 2, "text-align", "center", 3, "ngStyle"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-cell", ""], ["mat-cell", "", "style", "text-align: center;", 3, "ngStyle", "click", 4, "matCellDef"], ["mat-cell", "", 2, "text-align", "center", 3, "click", "ngStyle"], ["mat-cell", "", "style", "text-align: center;", 3, "click", 4, "matCellDef"], ["mat-cell", "", 2, "text-align", "center", 3, "click"], [1, "statusColumn", 3, "ngStyle"], ["mat-cell", "", 1, "expanded-content-cell"], [1, "example-element-detail-wrapper"], [1, "example-element-detail"], [1, "expanded-wrapper"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"], ["mat-row", "", 1, "example-detail-row"], [1, "no-data-text"]], template: function ClientApprovalListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-form-field", 4)(4, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ClientApprovalListComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ClientApprovalListComponent_Template_input_input_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "button", 6);
      \u0275\u0275listener("click", function ClientApprovalListComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementStart(6, "mat-icon", 7);
      \u0275\u0275text(7, "search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(8, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ClientApprovalListComponent_div_9_Template, 10, 6, "div", 8)(10, ClientApprovalListComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noData_r9 = \u0275\u0275reference(11);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.datasource.data.length > 0)("ngIfElse", noData_r9);
    }
  }, dependencies: [MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, CommonModule, NgIf, NgStyle, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.table-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0 !important;\n}\ntr.example-element-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: var(--color-bg-dark-2);\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: var(--color-bg-dark-3);\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: 0fr;\n  grid-template-columns: 100%;\n  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.example-element-detail-wrapper-expanded[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.example-toggle-button[_ngcontent-%COMP%] {\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.example-toggle-button-expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.statusColumn[_ngcontent-%COMP%] {\n  padding: 1px 5px;\n  border-radius: 50px;\n  font-size: 13px;\n  width: 54px;\n  text-align: center;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: var(--color-action);\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 200;\n  font-size: 18px;\n  margin: -5px;\n}\n.filter-button[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-1);\n  margin-right: -20px;\n  border: 0 0 2 5;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  width: 50px;\n  right: -11px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  height: 30px;\n}\n.button-margin[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: 5px;\n  max-width: auto !important;\n  padding: 5px;\n  margin-top: 0px !important;\n}\n.topbar-margin[_ngcontent-%COMP%] {\n  margin-top: -3px !important;\n  margin-bottom: -3px !important;\n}\n.expanded-content-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n}\n.expanded-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  padding: 16px;\n  background-color: var(--color-bg-dark-1);\n}\nmat-grid-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=client-approval-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientApprovalListComponent, { className: "ClientApprovalListComponent" });
})();
export {
  ClientApprovalListComponent
};
//# sourceMappingURL=chunk-WHNFQUMP.js.map
