import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-FRJ5GC76.js";
import {
  CreateVesselComponent,
  VesseService
} from "./chunk-ONRFCEP6.js";
import "./chunk-REH2YONL.js";
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
import "./chunk-NT4IUQ5M.js";
import {
  MatDialog,
  MatDialogConfig
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
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
  NgControlStatus,
  NgModel
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import "./chunk-2ZCMGA6L.js";
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/master/vessel/vessel.component.ts
function VesselComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275listener("click", function VesselComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Sl.No ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r5 + 1, "");
  }
}
function VesselComponent_div_9_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Vessel Name ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r6.name, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " GRT ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r7.grt, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " RGRT ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r8.rgrt, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " NRT ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r9.nrt, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "LOA ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r10.loa, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Beam(Mrts) ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r11.beam, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Depth(Mrts) ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.depth, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Type of Vessel ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r13.type, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "IMO Number ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r14.imo_number, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Dead weight ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r15.dwt, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Email ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r16.email, " ");
  }
}
function VesselComponent_div_9_ng_container_1_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function VesselComponent_div_9_ng_container_1_td_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 38)(1, "button", 39);
    \u0275\u0275listener("click", function VesselComponent_div_9_ng_container_1_td_41_Template_button_click_1_listener() {
      const element_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditVesselDialog(element_r18));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function VesselComponent_div_9_ng_container_1_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function VesselComponent_div_9_ng_container_1_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function VesselComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("scroll", function VesselComponent_div_9_ng_container_1_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onManualScroll());
    });
    \u0275\u0275elementStart(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, VesselComponent_div_9_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, VesselComponent_div_9_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, VesselComponent_div_9_ng_container_1_th_7_Template, 2, 0, "th", 16)(8, VesselComponent_div_9_ng_container_1_td_8_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 18);
    \u0275\u0275template(10, VesselComponent_div_9_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, VesselComponent_div_9_ng_container_1_td_11_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 20);
    \u0275\u0275template(13, VesselComponent_div_9_ng_container_1_th_13_Template, 2, 0, "th", 13)(14, VesselComponent_div_9_ng_container_1_td_14_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 21);
    \u0275\u0275template(16, VesselComponent_div_9_ng_container_1_th_16_Template, 2, 0, "th", 13)(17, VesselComponent_div_9_ng_container_1_td_17_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 22);
    \u0275\u0275template(19, VesselComponent_div_9_ng_container_1_th_19_Template, 2, 0, "th", 13)(20, VesselComponent_div_9_ng_container_1_td_20_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 23);
    \u0275\u0275template(22, VesselComponent_div_9_ng_container_1_th_22_Template, 2, 0, "th", 13)(23, VesselComponent_div_9_ng_container_1_td_23_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 24);
    \u0275\u0275template(25, VesselComponent_div_9_ng_container_1_th_25_Template, 2, 0, "th", 13)(26, VesselComponent_div_9_ng_container_1_td_26_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 25);
    \u0275\u0275template(28, VesselComponent_div_9_ng_container_1_th_28_Template, 2, 0, "th", 13)(29, VesselComponent_div_9_ng_container_1_td_29_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 26);
    \u0275\u0275template(31, VesselComponent_div_9_ng_container_1_th_31_Template, 2, 0, "th", 13)(32, VesselComponent_div_9_ng_container_1_td_32_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33, 27);
    \u0275\u0275template(34, VesselComponent_div_9_ng_container_1_th_34_Template, 2, 0, "th", 13)(35, VesselComponent_div_9_ng_container_1_td_35_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36, 28);
    \u0275\u0275template(37, VesselComponent_div_9_ng_container_1_th_37_Template, 2, 0, "th", 13)(38, VesselComponent_div_9_ng_container_1_td_38_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(39, 29);
    \u0275\u0275template(40, VesselComponent_div_9_ng_container_1_th_40_Template, 2, 0, "th", 13)(41, VesselComponent_div_9_ng_container_1_td_41_Template, 4, 0, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(42, VesselComponent_div_9_ng_container_1_tr_42_Template, 1, 0, "tr", 31)(43, VesselComponent_div_9_ng_container_1_tr_43_Template, 1, 0, "tr", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(40);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function VesselComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, VesselComponent_div_9_ng_container_1_Template, 44, 3, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r20 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r19.length > 0)("ngIfElse", noData_r20);
  }
}
function VesselComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var VesselComponent = class _VesselComponent {
  dialog;
  vesselService;
  displayedColumns = ["Sl.No", "name", "grt", "rgrt", "nrt", "loa", "beam", "depth", "type", "imo_number", "dwt", "email", "Action"];
  currentPage = 1;
  pageSize = 50;
  totalCount = 0;
  allDataLoaded = false;
  searchSubject = new Subject();
  constructor(dialog, vesselService) {
    this.dialog = dialog;
    this.vesselService = vesselService;
  }
  dataSource = new MatTableDataSource();
  paginator;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  searchTerm = "";
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.getVesselDataFromDb();
    this.searchSubject.pipe(debounceTime(1e3)).subscribe(() => {
      this.onSearch();
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  onSearch() {
    this.getVesselDataFromDb(true);
  }
  clearSearch() {
    this.searchTerm = "";
    this.getVesselDataFromDb(true);
  }
  // Method to open dialog in create mode
  openAddVesselDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateVesselComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getVesselDataFromDb();
      }
    });
  }
  // Method to open dialog in edit mode
  openEditVesselDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    dialogConfig.data = { rowData };
    const dialogRef = this.dialog.open(CreateVesselComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getVesselDataFromDb();
      }
    });
  }
  getVesselDataFromDb(reset = false) {
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
    this.vesselService.VesselDataFromDb(body).subscribe({
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
      error: (err) => {
        console.error("Error fetching data:", err);
        this.loader.hide();
      }
    });
  }
  inputSearch() {
    if (this.searchTerm.trim() === "") {
      this.onSearch();
    } else {
      this.searchSubject.next(this.searchTerm);
    }
  }
  onManualScroll() {
    const scrollContainer = document.querySelector(".table-container");
    if (scrollContainer) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      if (scrollPosition >= scrollHeight - 10 && !this.loader.loading() && !this.allDataLoaded) {
        this.getVesselDataFromDb();
      }
    }
  }
  static \u0275fac = function VesselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VesselComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(VesseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VesselComponent, selectors: [["app-vessel"]], viewQuery: function VesselComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["noData", ""], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", "", "style", "cursor: pointer; margin-top: 3px;", "class", "close-icon", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf"], ["matSuffix", "", 1, "close-icon", 2, "cursor", "pointer", "margin-top", "3px", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "style", "width: 150px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "grt"], ["mat-cell", "", "style", "text-align: right;", 4, "matCellDef"], ["matColumnDef", "rgrt"], ["matColumnDef", "nrt"], ["matColumnDef", "loa"], ["matColumnDef", "beam"], ["matColumnDef", "depth"], ["matColumnDef", "type"], ["matColumnDef", "imo_number"], ["matColumnDef", "dwt"], ["matColumnDef", "email"], ["matColumnDef", "Action"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-cell", "", 2, "width", "150px"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", "", 2, "text-align", "right"], ["mat-cell", ""], ["mat-icon-button", "", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function VesselComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Vessel Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function VesselComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function VesselComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, VesselComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function VesselComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddVesselDialog());
      });
      \u0275\u0275text(8, " Add Vessel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, VesselComponent_div_9_Template, 2, 2, "div", 7)(10, VesselComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatSuffix, MatFormFieldModule, MatPaginatorModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.main-section[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=vessel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VesselComponent, { className: "VesselComponent" });
})();
export {
  VesselComponent
};
//# sourceMappingURL=chunk-YRIJLLW3.js.map
