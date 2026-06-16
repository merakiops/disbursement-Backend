import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-ETTDPF5T.js";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-7LZOSO4L.js";
import {
  PortAgentFormService
} from "./chunk-YF5NCWIB.js";
import {
  MatGridListModule
} from "./chunk-65SYLNKY.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-7SVTSSNI.js";
import {
  MatSelectModule
} from "./chunk-2LYLMMA2.js";
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
  LoaderService
} from "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  MatOption
} from "./chunk-BAX6ITZM.js";
import {
  Router,
  RouterModule
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import "./chunk-K7GFJLXC.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  map,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/bank-form/bank-form.model.ts
var BankFormModel = class {
  bank_details_id = null;
  country_name = null;
  beneficiary_acc_holder_name = null;
  bank_name = null;
  correspondent_account_number = null;
  current_account_number = null;
  ifsc_code = null;
  bik_code = null;
  swift_code = null;
  currency = null;
  inn_code = null;
  bic_code = null;
  iban_number = null;
  branch_address = null;
  constructor(bankForm) {
    Object.assign(this, bankForm);
  }
};

// src/app/pages/pdfa/shared-service-bankForm-review-continue.ts
var SharedService = class _SharedService {
  dataSource = new BehaviorSubject(null);
  sharedData$ = this.dataSource.asObservable();
  sendBankDetails(data) {
    console.log("data", data);
    this.dataSource.next(data);
  }
  static \u0275fac = function SharedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedService, factory: _SharedService.\u0275fac, providedIn: "root" });
};

// src/app/pages/pdfa/bank-form/bank-form.component.ts
function BankFormComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Billing address is required ");
    \u0275\u0275elementEnd();
  }
}
function BankFormComponent_mat_option_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275property("value", country_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r2.name, " ");
  }
}
var BankFormComponent = class _BankFormComponent {
  routes;
  fb;
  sharedService;
  portAgentFormService;
  loader = inject(LoaderService);
  isLoading = this.loader.loading;
  bankDetails;
  countryList = [];
  data = new BankFormModel();
  response = JSON.parse(sessionStorage.getItem("pa-success-response") || "{}");
  billing_address = new FormControl(this.response?.billing_address, Validators.required);
  constructor(routes, fb, sharedService, portAgentFormService) {
    this.routes = routes;
    this.fb = fb;
    this.sharedService = sharedService;
    this.portAgentFormService = portAgentFormService;
    this.data = this.response?.bank_details;
    this.bankDetails = this.fb.group({
      bank_details_id: [this.data?.bank_details_id || null],
      beneficiary_acc_holder_name: [this.data?.beneficiary_acc_holder_name || "", Validators.required],
      current_account_number: [this.data?.current_account_number?.toString() || "", [
        Validators.required,
        Validators.pattern(/^\d+$/)
      ]],
      bank_name: [this.data?.bank_name || ""],
      correspondent_account_number: [this.data?.correspondent_account_number || ""],
      swift_code: [this.data?.swift_code || ""],
      branch_address: [this.data?.branch_address || ""],
      country_name: [this.data?.country_name || null],
      currency: [this.data?.currency || ""],
      inn_code: [this.data?.inn_code || ""],
      bik_code: [this.data?.bik_code || ""],
      ifsc_code: [this.data?.ifsc_code || ""],
      bic_code: [this.data?.bic_code || ""],
      iban_number: [this.data?.iban_number || ""]
    });
  }
  onSubmit() {
  }
  disableSaveButton = () => {
    return !this.bankDetails.valid;
  };
  filteredCountries;
  ngOnInit() {
    this.getAllMasterData();
    this.filteredCountries = this.bankDetails.get("country_name").valueChanges.pipe(startWith(""), map((value) => this._filter(value || "")));
  }
  // method to get the master country data
  getAllMasterData() {
    this.loader.show();
    const params = {
      fields: ["country"]
    };
    this.portAgentFormService.getMasterData(params).subscribe({
      next: (response) => {
        this.countryList = response.country;
        this.loader.hide();
      },
      error: (err) => {
        this.loader.hide();
      }
    });
  }
  // method to filter the countries
  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.countryList.filter((country) => country?.name && country.name.toLowerCase().includes(filterValue));
  }
  step = signal(0);
  setStep(index) {
    this.step.set(index);
  }
  nextStep() {
    if (this.billing_address.valid) {
      this.step.update((i) => i + 1);
    } else {
      this.billing_address.markAllAsTouched();
    }
  }
  prevStep() {
    this.step.update((i) => i - 1);
  }
  returnPda = () => {
    this.routes.navigate(["/pdfa/returnPda"]);
  };
  save = () => {
    const addressAndBankDetails = {
      address: this.billing_address.value,
      bankDetails: this.bankDetails.value
    };
    sessionStorage.setItem("addressAndBankDetails", JSON.stringify(addressAndBankDetails));
    this.routes.navigate(["/pdfa/reviewContinue"]);
  };
  static \u0275fac = function BankFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SharedService), \u0275\u0275directiveInject(PortAgentFormService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankFormComponent, selectors: [["app-bank-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 108, vars: 10, consts: [["auto", "matAutocomplete"], [1, "card-container", 2, "padding", "5px 300px 0px 300px"], ["appearance", "outlined", 1, "notYourPda"], [2, "padding", "7px 13px 0"], [2, "color", "var(--app-status-warning)"], [1, "subtitle"], [1, "example-card-footer"], ["mat-flat-button", "", 1, "buttons_click_return", 3, "click"], [1, "form-container"], [1, "bank-form", 3, "ngSubmit", "formGroup"], [1, "example-headers-align"], ["hideToggle", "", 3, "opened", "expanded"], [2, "font-size", "small", "color", "var(--color-text-light-1)"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Billing Address", "rows", "4", 3, "formControl"], [4, "ngIf"], ["appearance", "outlined", 1, "note-card"], [1, "note"], ["mat-flat-button", "", "type", "button", 1, "buttons_click", 3, "click"], [1, "expansion_panel_description", 2, "font-size", "small", "color", "var(--color-text-light-1)"], ["appearance", "outline", 1, "bank_form_fields"], ["matInput", "", "formControlName", "beneficiary_acc_holder_name", "placeholder", " Account holder name"], ["matInput", "", "type", "number", "formControlName", "current_account_number"], ["appearance", "outline"], ["matInput", "", "formControlName", "bank_name"], ["matInput", "", "formControlName", "correspondent_account_number"], ["matInput", "", "formControlName", "iban_number"], ["matInput", "", "formControlName", "swift_code"], ["matInput", "", "formControlName", "bic_code"], ["matInput", "", "formControlName", "inn_code"], ["matInput", "", "formControlName", "bik_code"], ["matInput", "", "formControlName", "ifsc_code"], ["type", "text", "matInput", "", "formControlName", "country_name", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "currency"], ["appearance", "outline", 2, "max-width", "58%"], ["matInput", "", "formControlName", "branch_address"], ["mat-flat-button", "", 1, "buttons_click", 3, "click"], ["mat-flat-button", "", 1, "buttons_click", 3, "click", "disabled"], [3, "value"]], template: function BankFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-header", 3)(3, "mat-card-title", 4);
      \u0275\u0275text(4, "Not your PDA?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 5);
      \u0275\u0275text(7, "If this PDA was not intended for you, you may return it to the sender.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-card-footer", 6)(9, "button", 7);
      \u0275\u0275listener("click", function BankFormComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.returnPda());
      });
      \u0275\u0275text(10, "Return to meraki");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 8)(12, "form", 9);
      \u0275\u0275listener("ngSubmit", function BankFormComponent_Template_form_ngSubmit_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(13, "mat-accordion", 10)(14, "mat-expansion-panel", 11);
      \u0275\u0275listener("opened", function BankFormComponent_Template_mat_expansion_panel_opened_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setStep(0));
      });
      \u0275\u0275elementStart(15, "mat-expansion-panel-header")(16, "mat-panel-title");
      \u0275\u0275text(17, " Address Information ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-panel-description", 12);
      \u0275\u0275text(19, " Please ensure this address is complete and accurate purposes. ");
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "map");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "mat-form-field", 13);
      \u0275\u0275element(23, "textarea", 14);
      \u0275\u0275template(24, BankFormComponent_mat_error_24_Template, 2, 0, "mat-error", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-card", 16)(26, "small", 17)(27, "strong");
      \u0275\u0275text(28, "Note:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " This address will be used for all billing, invoicing, and official correspondence related to this Port Disbursement Account (PDA). Please ensure it is complete and accurate. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "mat-action-row")(31, "button", 18);
      \u0275\u0275listener("click", function BankFormComponent_Template_button_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextStep());
      });
      \u0275\u0275text(32, "Next");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "mat-expansion-panel", 11);
      \u0275\u0275listener("opened", function BankFormComponent_Template_mat_expansion_panel_opened_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setStep(1));
      });
      \u0275\u0275elementStart(34, "mat-expansion-panel-header")(35, "mat-panel-title");
      \u0275\u0275text(36, "Enter Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-panel-description", 19);
      \u0275\u0275text(38, " Please ensure this address is complete and accurate for invoice purposes. ");
      \u0275\u0275elementStart(39, "mat-icon");
      \u0275\u0275text(40, "account_circle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "mat-form-field", 20)(42, "mat-label");
      \u0275\u0275text(43, "Beneficiary AC. Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 21);
      \u0275\u0275elementStart(45, "mat-error");
      \u0275\u0275text(46, "Please enter your name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-error");
      \u0275\u0275text(48, "Name is required");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "mat-form-field", 20)(50, "mat-label");
      \u0275\u0275text(51, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 22);
      \u0275\u0275elementStart(53, "mat-error");
      \u0275\u0275text(54, "Please enter your account number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "mat-form-field", 23)(56, "mat-label");
      \u0275\u0275text(57, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-form-field", 20)(60, "mat-label");
      \u0275\u0275text(61, "Correspondent AC. Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-form-field", 20)(64, "mat-label");
      \u0275\u0275text(65, "IBAN Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-form-field", 20)(68, "mat-label");
      \u0275\u0275text(69, "Swift Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-form-field", 20)(72, "mat-label");
      \u0275\u0275text(73, "BIC Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-form-field", 20)(76, "mat-label");
      \u0275\u0275text(77, "INN Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-form-field", 20)(80, "mat-label");
      \u0275\u0275text(81, "BIK");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-form-field", 20)(84, "mat-label");
      \u0275\u0275text(85, "IFSC Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "mat-form-field", 20)(88, "mat-label");
      \u0275\u0275text(89, "Country ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 32);
      \u0275\u0275elementStart(91, "mat-autocomplete", null, 0);
      \u0275\u0275template(93, BankFormComponent_mat_option_93_Template, 2, 2, "mat-option", 33);
      \u0275\u0275pipe(94, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "mat-form-field", 20)(96, "mat-label");
      \u0275\u0275text(97, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-form-field", 35)(100, "mat-label");
      \u0275\u0275text(101, "Bank Branch with Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-action-row")(104, "button", 37);
      \u0275\u0275listener("click", function BankFormComponent_Template_button_click_104_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.prevStep());
      });
      \u0275\u0275text(105, "Previous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 38);
      \u0275\u0275listener("click", function BankFormComponent_Template_button_click_106_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275text(107, "Review and continue");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const auto_r3 = \u0275\u0275reference(92);
      \u0275\u0275advance(12);
      \u0275\u0275property("formGroup", ctx.bankDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("expanded", ctx.step() === 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("formControl", ctx.billing_address);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.billing_address.hasError("required"));
      \u0275\u0275advance(9);
      \u0275\u0275property("expanded", ctx.step() === 1);
      \u0275\u0275advance(57);
      \u0275\u0275property("matAutocomplete", auto_r3);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(94, 8, ctx.filteredCountries));
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.disableSaveButton());
    }
  }, dependencies: [
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatGridListModule,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormControlDirective,
    FormGroupDirective,
    FormControlName,
    MatSelectModule,
    MatOption,
    RouterModule,
    MatExpansionModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIconModule,
    MatIcon,
    CommonModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger
  ], styles: ["\n\n.subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: var(--color-text-light-1);\n  font-size: 14px;\n}\n.full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.notYourPda[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-1);\n  border: 1px solid var(--app-status-warning);\n}\n.address-card[_ngcontent-%COMP%] {\n  background: var(--color-bg-dark-1);\n  min-height: 422px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bank_form_fields[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 8px 300px 0px 300px;\n}\n.note-card[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: var(--color-bg-dark-2);\n  padding: 5px;\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-light-1);\n}\n.buttons_click[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 180px;\n  background-color: var(--color-action) !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n  padding-bottom: 0px;\n  white-space: nowrap !important;\n  transition: background-color 0.2s ease;\n}\n.buttons_click[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover) !important;\n}\n.buttons_click_return[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 100%;\n  max-width: 160px;\n  background-color: #f97316 !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n}\n.buttons_click_return[_ngcontent-%COMP%]:hover {\n  background-color: #e8630a !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 230px;\n}\n  .mat-mdc-form-field {\n  --mdc-outlined-text-field-outline-color: var(--app-input-border) !important;\n  --mdc-outlined-text-field-focus-outline-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-label-text-color: var(--app-input-label) !important;\n  --mdc-outlined-text-field-focus-label-text-color: var(--app-focus-border) !important;\n  --mdc-outlined-text-field-outline-width: 0.50px;\n  --mdc-outlined-text-field-focus-outline-width: 0.50px;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n}\n  .mat-mdc-form-field-infix {\n  padding: 0 8px !important;\n  min-height: 36px !important;\n  display: flex;\n  align-items: center;\n}\n  mat-error {\n  font-size: 11px;\n  color: var(--app-status-error) !important;\n  margin-top: -5px;\n}\nmat-action-row[_ngcontent-%COMP%] {\n  padding: 5px 8px 3px 24px;\n  background-color: var(--color-bg-dark-1) !important;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-1) !important;\n  color: var(--color-white) !important;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark-2) !important;\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  color: var(--color-white) !important;\n}\nmat-panel-description[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1) !important;\n}\n  .mat-expansion-panel-body {\n  background-color: var(--color-bg-dark-1) !important;\n  color: var(--color-text-light-1) !important;\n}\n/*# sourceMappingURL=bank-form.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankFormComponent, { className: "BankFormComponent" });
})();
export {
  BankFormComponent
};
//# sourceMappingURL=chunk-AHGCH6TV.js.map
