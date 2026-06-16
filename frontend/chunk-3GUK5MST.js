import {
  CountryService
} from "./chunk-PPRKLZEI.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-FRJ5GC76.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-R2NPM7IG.js";
import {
  allowOnlyLetters
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
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
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-RW2EUPUP.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import {
  MatSnackBarModule,
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  computed,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/components/create-country/create-country.component.ts
function CreateCountryComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateCountryComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Country Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateCountryComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Max length is 50 ");
    \u0275\u0275elementEnd();
  }
}
function CreateCountryComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Currency is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateCountryComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-label", 8);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-slide-toggle", 11);
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "Active");
    \u0275\u0275elementEnd()()();
  }
}
var CreateCountryComponent = class _CreateCountryComponent {
  fb;
  dialogRef;
  existingdata;
  countryService;
  snackBar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  disallowNumericData = allowOnlyLetters;
  countryForm;
  isEditMode = false;
  constructor(fb, dialogRef, existingdata, countryService, snackBar) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.existingdata = existingdata;
    this.countryService = countryService;
    this.snackBar = snackBar;
    const data = existingdata?.rowData;
    this.isEditMode = !!data;
    this.countryForm = this.fb.group({
      country_id: [data?.country_id || 0],
      name: [data?.name || "", [Validators.required, Validators.maxLength(50), Validators.pattern("^[A-Za-z\\s]+$")]],
      currency: [data?.currency || "", Validators.required],
      status: [data?.status === "Inactive" ? false : true]
    });
  }
  onSubmit() {
    if (this.countryForm.valid) {
      this.loader.show();
      this.countryService.CountryDataToDB(this.countryForm.value).subscribe({
        next: (res) => {
          this.loader.hide();
          this.snackBar.showSuccess(res.message);
          this.dialogRef.close("refresh");
        },
        error: (error) => {
          this.loader.hide();
          const errorMsg = error.error?.detail || "Something went wrong. Please try again.";
          this.snackBar.showError(errorMsg);
        }
      });
    }
  }
  allowSpecialCharacters(event) {
    const pattern = /^[A-Za-z\s@._$!#%^&*-]+$/;
    const char = String.fromCharCode(event.keyCode || event.which);
    return pattern.test(char);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreateCountryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateCountryComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateCountryComponent, selectors: [["app-create-country"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 8, consts: [[4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "keypress"], ["matInput", "", "formControlName", "currency", 3, "keypress"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-country"], [1, "status-label"], [1, "toggle-wrapper"], [1, "options"], ["formControlName", "status", "color", "primary", 1, "custom-toggle"]], template: function CreateCountryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateCountryComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CreateCountryComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreateCountryComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275listener("keypress", function CreateCountryComponent_Template_input_keypress_11_listener($event) {
        return ctx.disallowNumericData($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreateCountryComponent_mat_error_12_Template, 2, 0, "mat-error", 0)(13, CreateCountryComponent_mat_error_13_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-label");
      \u0275\u0275text(16, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 6);
      \u0275\u0275listener("keypress", function CreateCountryComponent_Template_input_keypress_17_listener($event) {
        return ctx.allowSpecialCharacters($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, CreateCountryComponent_mat_error_18_Template, 2, 0, "mat-error", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, CreateCountryComponent_div_19_Template, 9, 0, "div", 0);
      \u0275\u0275elementStart(20, "div")(21, "button", 7);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Country" : "Add Country");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.countryForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.countryForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.countryForm.get("name")) == null ? null : tmp_4_0.hasError("maxength"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.countryForm.get("currency")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Country" : "Add Country", "");
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, MatSlideToggleModule, MatSlideToggle, MatSnackBarModule, LoaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  max-width: 280px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-country[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  background-color: #3C50E0;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 105px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid var(--app-input-border);\n}\n/*# sourceMappingURL=create-country.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateCountryComponent, { className: "CreateCountryComponent" });
})();

// src/app/pages/master/country/country.component.ts
function CountryComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CountryComponent_div_12_ng_container_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Sl.No");
    \u0275\u0275elementEnd();
  }
}
function CountryComponent_div_12_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r2 + 1);
  }
}
function CountryComponent_div_12_ng_container_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Country Name");
    \u0275\u0275elementEnd();
  }
}
function CountryComponent_div_12_ng_container_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.name);
  }
}
function CountryComponent_div_12_ng_container_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Currency");
    \u0275\u0275elementEnd();
  }
}
function CountryComponent_div_12_ng_container_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.currency);
  }
}
function CountryComponent_div_12_ng_container_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function CountryComponent_div_12_ng_container_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", element_r5.status === "Active" ? "status-active" : "status-inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r5.status, " ");
  }
}
function CountryComponent_div_12_ng_container_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function CountryComponent_div_12_ng_container_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 28);
    \u0275\u0275listener("click", function CountryComponent_div_12_ng_container_1_td_17_Template_button_click_1_listener() {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r7.openEditCountryDialog(element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function CountryComponent_div_12_ng_container_1_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function CountryComponent_div_12_ng_container_1_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function CountryComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "table", 11);
    \u0275\u0275elementContainerStart(3, 12);
    \u0275\u0275template(4, CountryComponent_div_12_ng_container_1_th_4_Template, 2, 0, "th", 13)(5, CountryComponent_div_12_ng_container_1_td_5_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 15);
    \u0275\u0275template(7, CountryComponent_div_12_ng_container_1_th_7_Template, 2, 0, "th", 13)(8, CountryComponent_div_12_ng_container_1_td_8_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 17);
    \u0275\u0275template(10, CountryComponent_div_12_ng_container_1_th_10_Template, 2, 0, "th", 13)(11, CountryComponent_div_12_ng_container_1_td_11_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 18);
    \u0275\u0275template(13, CountryComponent_div_12_ng_container_1_th_13_Template, 2, 0, "th", 13)(14, CountryComponent_div_12_ng_container_1_td_14_Template, 3, 2, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 20);
    \u0275\u0275template(16, CountryComponent_div_12_ng_container_1_th_16_Template, 2, 0, "th", 13)(17, CountryComponent_div_12_ng_container_1_td_17_Template, 4, 0, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(18, CountryComponent_div_12_ng_container_1_tr_18_Template, 1, 0, "tr", 21)(19, CountryComponent_div_12_ng_container_1_tr_19_Template, 1, 0, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r7.dataSource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r7.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r7.displayedColumns);
  }
}
function CountryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CountryComponent_div_12_ng_container_1_Template, 20, 3, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noData_r10 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r9.length > 0)("ngIfElse", noData_r10);
  }
}
function CountryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No data found. ");
    \u0275\u0275elementEnd();
  }
}
var CountryComponent = class _CountryComponent {
  dialog;
  countryService;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  isEditMode = false;
  pageSize = 100;
  currentPage = 0;
  totalItems = 0;
  searchTerm = "";
  displayedColumns = ["Sl.No", "name", "currency", "status", "Action"];
  dataSource = new MatTableDataSource();
  paginator;
  constructor(dialog, countryService) {
    this.dialog = dialog;
    this.countryService = countryService;
  }
  ngOnInit() {
    this.getMaCountryDataFromDb();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onSearch() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // method to open the dialog in add mode
  openAddCountryDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateCountryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaCountryDataFromDb();
      }
    });
  }
  // method to open the dialog in edit mode
  openEditCountryDialog(rowData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: "0" };
    dialogConfig.height = "100%";
    dialogConfig.data = { rowData };
    dialogConfig.panelClass = ["animate__animated", "animate__slideInRight"];
    const dialogRef = this.dialog.open(CreateCountryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "refresh") {
        this.getMaCountryDataFromDb();
      }
    });
  }
  //   onPaginateChange(event: any) {
  //     console.log("event.pageSize", event.pageSize, "event.pageIndex",event.pageIndex);
  //   this.pageSize = event.pageSize;
  //   this.currentPage = event.pageIndex;
  //   this.getMaCountryDataFromDb();
  // }
  getMaCountryDataFromDb() {
    const body = {
      page: 1,
      page_size: 100,
      query: "",
      status: "Y"
    };
    this.loader.show();
    this.countryService.CountryDataFromDb(body).subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.name ?? "").toLowerCase().includes(filter);
        };
        this.dataSource.paginator = this.paginator;
        this.loader.hide();
      },
      error: (err) => {
        console.error("Error fetching countries:", err);
        this.loader.hide();
      }
    });
  }
  static \u0275fac = function CountryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountryComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(CountryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryComponent, selectors: [["app-country"]], viewQuery: function CountryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 3, consts: [["noData", ""], [4, "ngIf"], [1, "topbar"], [1, "search-section"], ["appearance", "outline", 1, "search-bar"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["mat-icon-button", "", 1, "search-icon", 3, "click"], [1, "search"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "table-container"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Sl.No"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "currency"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", ""], [3, "ngClass"], ["mat-icon-button", "", 1, "edit-icon-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data-text"]], template: function CountryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, CountryComponent_app_loader_0_Template, 1, 0, "app-loader", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "mat-form-field", 4)(4, "mat-label");
      \u0275\u0275text(5, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function CountryComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function CountryComponent_Template_input_input_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function CountryComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementStart(8, "mat-icon", 7);
      \u0275\u0275text(9, "search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function CountryComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddCountryDialog());
      });
      \u0275\u0275text(11, " Add Country ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CountryComponent_div_12_Template, 2, 2, "div", 1)(13, CountryComponent_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatIconModule, MatIcon, CommonModule, NgClass, NgIf, MatPaginatorModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LoaderComponent], styles: ["\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n/*# sourceMappingURL=country.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryComponent, { className: "CountryComponent" });
})();
export {
  CountryComponent
};
//# sourceMappingURL=chunk-3GUK5MST.js.map
