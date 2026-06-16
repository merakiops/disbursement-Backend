import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule
} from "./chunk-4NIIGUZS.js";
import {
  mailRegex
} from "./chunk-REH2YONL.js";
import {
  ClientService
} from "./chunk-VYXKY3G4.js";
import {
  allowLimitedInput,
  allowOnlyLetters,
  formatAddressForDisplay,
  formatAddressForStorage,
  handlePasteText,
  trimInput
} from "./chunk-A6CJVYKT.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import {
  MatAutocompleteModule
} from "./chunk-7SVTSSNI.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-K64LDRY5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  MatError,
  MatFormField,
  MatInput,
  MatLabel
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon
} from "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
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
import {
  ENTER
} from "./chunk-BAX6ITZM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/pages/master/client/client.model.ts
var MaClient = class {
  company_id = null;
  company_name = null;
  company_type_id = null;
  email = null;
  phone_number = null;
  vsl_ids = null;
  address = null;
  status;
  constructor(maClient) {
    Object.assign(this, maClient);
    this.status = true;
    this.address = maClient?.address ? maClient.address : "";
    this.vsl_ids = maClient?.vsl_ids ? maClient.vsl_ids : null;
    this.phone_number = maClient?.phone_number ? maClient.phone_number : null;
    this.email = maClient?.email ? maClient.email : null;
    this.company_id = maClient?.company_id ? maClient.company_id : null;
    this.company_name = maClient?.company_name ? maClient.company_name : null;
    this.company_type_id = maClient?.company_type_id ? maClient.company_type_id : null;
  }
};

// src/app/components/create-client/create-client.component.ts
var _c0 = () => ({ standalone: true });
function CreateClientComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function CreateClientComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Client is required. ");
    \u0275\u0275elementEnd();
  }
}
function CreateClientComponent_mat_chip_16_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 21);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function CreateClientComponent_mat_chip_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 19);
    \u0275\u0275listener("removed", function CreateClientComponent_mat_chip_16_Template_mat_chip_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeEmail(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, CreateClientComponent_mat_chip_16_mat_icon_2_Template, 2, 0, "mat-icon", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("removable", ctx_r3.removable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.removable);
  }
}
function CreateClientComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-checkbox", 23);
    \u0275\u0275listener("change", function CreateClientComponent_div_24_Template_mat_checkbox_change_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSelectAll());
    });
    \u0275\u0275text(2, " Select All ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isAllSelected)("indeterminate", ctx_r3.isIndeterminate);
  }
}
function CreateClientComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-checkbox", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientComponent_div_25_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const vessel_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(vessel_r7.selected, $event) || (vessel_r7.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CreateClientComponent_div_25_Template_mat_checkbox_change_1_listener() {
      const vessel_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onVesselChange(vessel_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vessel_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", vessel_r7.selected);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vessel_r7.name, " ");
  }
}
function CreateClientComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "No matching vessels found");
    \u0275\u0275elementEnd()();
  }
}
function CreateClientComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "No vessels available");
    \u0275\u0275elementEnd()();
  }
}
var CreateClientComponent = class _CreateClientComponent {
  fb;
  existingdata;
  dialogRef;
  clientService;
  snackBar;
  clientForm;
  isEditMode = false;
  vesselData = [];
  filteredVessels = [];
  selectedVessels = [];
  vesselList = [];
  vesselSearchText = "";
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.dialogLoading());
  vslpayload;
  disallowNumericData = allowOnlyLetters;
  allowLimitedInput = allowLimitedInput;
  emailList = [];
  separatorKeysCodes = [ENTER];
  removable = true;
  addOnBlur = true;
  clientClass = new MaClient();
  constructor(fb, existingdata, dialogRef, clientService, snackBar) {
    this.fb = fb;
    this.existingdata = existingdata;
    this.dialogRef = dialogRef;
    this.clientService = clientService;
    this.snackBar = snackBar;
    this.isEditMode = !!existingdata;
    const data = existingdata?.rowData || {};
    this.clientForm = this.fb.group({
      company_id: [data?.company_id || null],
      //Added Company_Id by Rahul
      company_name: [data?.company_name || "", Validators.required],
      email: [],
      vsl_ids: [data?.vsl_ids || [], Validators.required],
      vesselSearch: [""],
      address: [formatAddressForDisplay(data?.address || ""), Validators.required]
      // Added the client Address by Rahul
    });
    if (this.isEditMode) {
      this.vslpayload = {
        company_id: data.company_id,
        fields: ["assigned_unassigned"]
      };
    } else {
      this.vslpayload = {
        company_id: null,
        fields: ["assigned_unassigned"]
      };
    }
    if (data?.email) {
      if (typeof data.email === "string") {
        this.emailList = data.email.split(",").map((e) => e.trim()).filter(Boolean);
      } else if (Array.isArray(data.email)) {
        this.emailList = data.email.map((e) => e.trim()).filter(Boolean);
      } else {
        this.emailList = [];
      }
    }
    this.clientForm.get("vesselSearch")?.valueChanges.subscribe((value) => {
      if (typeof value === "string") {
        this.vesselSearchText = value;
        this.filterVessels();
      }
    });
  }
  ngOnInit() {
    this.getVesselDetailsFromDb();
  }
  filterVessels() {
    if (!this.vesselSearchText) {
      this.filteredVessels = [...this.vesselList];
    } else {
      this.filteredVessels = this.vesselList.filter((vessel) => vessel.name?.toLowerCase().includes(this.vesselSearchText.toLowerCase()));
    }
  }
  onVesselChange(vessel) {
    this.updateFormControl();
  }
  toggleVessel(vessel) {
    const index = this.selectedVessels.findIndex((v) => v.vessel_id === vessel.vessel_id);
    if (index > -1) {
      this.selectedVessels.splice(index, 1);
    } else {
      this.selectedVessels.push(vessel);
    }
    this.updateFormControl();
    this.updateSearchField();
  }
  toggleSelectAll() {
    const selectAll = !this.isAllSelected;
    this.filteredVessels.forEach((vessel) => {
      vessel.selected = selectAll;
    });
    this.updateFormControl();
  }
  isVesselSelected(vessel) {
    return this.selectedVessels.some((v) => v.vessel_id === vessel.vessel_id);
  }
  get isAllSelected() {
    return this.filteredVessels.length > 0 && this.filteredVessels.every((vessel) => vessel.selected);
  }
  get isIndeterminate() {
    const selectedCount = this.filteredVessels.filter((vessel) => vessel.selected).length;
    return selectedCount > 0 && selectedCount < this.filteredVessels.length;
  }
  displayVessel(vessel) {
    return vessel ? vessel.name || "" : "";
  }
  updateFormControl() {
    const selectedVessels = this.filteredVessels.filter((v) => v.selected);
    const vesselIds = selectedVessels.map((v) => v.vessel_id);
    this.clientForm.get("vsl_ids")?.setValue(vesselIds);
  }
  updateSearchField() {
    const selectedNames = this.selectedVessels.map((v) => v.name).join(", ");
    this.clientForm.get("vesselSearch")?.setValue(selectedNames, { emitEvent: false });
  }
  //method to trim the input
  onInputTrim(controlName) {
    const control = this.clientForm.get(controlName);
    trimInput(control);
  }
  onPaste(event) {
    const value = handlePasteText(event);
    this.clientForm.get("company_name")?.setValue(value);
  }
  // method to create the vessel when the add client button is clicked
  onSubmit() {
    if (this.clientForm.valid) {
      this.loader.showDialogLoader();
      const formValue = __spreadProps(__spreadValues({}, this.clientForm.value), {
        company_name: this.clientForm.value.company_name.trim(),
        email: this.emailList,
        status: this.clientClass.status,
        address: formatAddressForStorage(this.clientForm.value.address.trim())
      });
      this.clientService.ClientDataToDB(formValue).subscribe({
        next: (res) => {
          this.loader.hideDialogLoader();
          this.snackBar.showSuccess(res.message);
          this.dialogRef.close("refresh");
        },
        error: (err) => {
          this.loader.hideDialogLoader();
          const errmsg = err?.error?.error || "something went wrong";
          this.snackBar.showError(errmsg);
        }
      });
    } else {
      this.snackBar.showError("please fill all the required fields");
    }
  }
  // onPaste it will take only 50 characters
  limitPaste(event) {
    event.preventDefault();
    const pastedText = event.clipboardData?.getData("text") ?? "";
    const limitedText = pastedText.slice(0, 49);
    const input = event.target;
    input.value = limitedText.trim();
  }
  getVesselDetailsFromDb() {
    this.loader.showDialogLoader();
    this.clientService.VslListFromDb(this.vslpayload).subscribe({
      next: (response) => {
        if (this.isEditMode) {
          const mergedArr = [...response.assigned_vessels, ...response.unassigned_vessels];
          this.vesselList = mergedArr.map((v) => __spreadProps(__spreadValues({}, v), { selected: false }));
          const selectedIds = this.clientForm.get("vsl_ids")?.value || [];
          this.vesselList.forEach((v) => {
            v.selected = selectedIds.includes(v.vessel_id);
          });
        } else {
          this.vesselList = response.unassigned_vessels.map((v) => __spreadProps(__spreadValues({}, v), { selected: false }));
        }
        this.filteredVessels = [...this.vesselList];
        this.loader.hideDialogLoader();
      }
    });
  }
  // method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  // Method to handle chip input: validate and add email to emailList, update form control
  addEmail(event) {
    const input = event.input;
    const value = (event.value || "").trim();
    if (value && this.isValidEmail(value)) {
      this.emailList.push(value);
      if (this.emailList.length > 0) {
        input.value = "";
      }
    } else if (value) {
      this.snackBar.showError("Invalid email format.");
    }
  }
  // Method to remove the given email from emailList, update form control value,
  removeEmail(email) {
    const index = this.emailList.indexOf(email);
    if (index >= 0) {
      this.emailList.splice(index, 1);
    }
  }
  // method to validate the email
  isValidEmail(email) {
    return mailRegex.test(email);
  }
  // add email to chip on typing of valid email
  checkAndAutoAddEmail(event) {
    const input = event.target;
    const value = input.value.trim();
    if (this.isValidEmail(value)) {
      if (!this.emailList.includes(value)) {
        this.emailList.push(value);
        this.clientForm.get("email")?.setErrors(null);
        input.value = "";
      } else {
        this.clientForm.get("email")?.setErrors({ customEmailError: true });
        input.value = "";
      }
    }
  }
  static \u0275fac = function CreateClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateClientComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateClientComponent, selectors: [["app-create-client"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 15, consts: [["chipGrid", ""], [4, "ngIf"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-icon", 3, "click"], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "company_name", 3, "keypress", "paste", "blur"], ["appearance", "outline", 1, "inputWidthForWindowFill"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add email, press enter or comma", 1, "inputTextArea", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes"], [1, "vessel-filter-section"], ["matInput", "", "placeholder", "Search vessels...", 3, "ngModelChange", "input", "ngModel", "ngModelOptions"], ["matSuffix", ""], [1, "vessel-checkbox-list"], ["class", "vessel-checkbox-item select-all", 4, "ngIf"], ["class", "vessel-checkbox-item", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], ["matInput", "", "rows", "3", "formControlName", "address"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-country"], [3, "removed", "removable"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "vessel-checkbox-item", "select-all"], ["color", "primary", 3, "change", "checked", "indeterminate"], [1, "vessel-checkbox-item"], ["color", "primary", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "no-data"]], template: function CreateClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, CreateClientComponent_app_loader_0_Template, 1, 0, "app-loader", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function CreateClientComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function CreateClientComponent_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(8, "mat-form-field", 5)(9, "mat-label");
      \u0275\u0275text(10, "Client Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275listener("keypress", function CreateClientComponent_Template_input_keypress_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.disallowNumericData($event);
        return \u0275\u0275resetView(ctx.allowLimitedInput($event, 50));
      })("paste", function CreateClientComponent_Template_input_paste_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPaste($event));
      })("blur", function CreateClientComponent_Template_input_blur_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputTrim("company_name"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CreateClientComponent_mat_error_12_Template, 2, 0, "mat-error", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-chip-grid", null, 0);
      \u0275\u0275template(16, CreateClientComponent_mat_chip_16_Template, 3, 3, "mat-chip", 8);
      \u0275\u0275elementStart(17, "input", 9);
      \u0275\u0275listener("matChipInputTokenEnd", function CreateClientComponent_Template_input_matChipInputTokenEnd_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addEmail($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "mat-form-field", 5)(20, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function CreateClientComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.vesselSearchText, $event) || (ctx.vesselSearchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function CreateClientComponent_Template_input_input_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterVessels());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-icon", 12);
      \u0275\u0275text(22, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 13);
      \u0275\u0275template(24, CreateClientComponent_div_24_Template, 3, 2, "div", 14)(25, CreateClientComponent_div_25_Template, 3, 4, "div", 15)(26, CreateClientComponent_div_26_Template, 3, 0, "div", 16)(27, CreateClientComponent_div_27_Template, 3, 0, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-form-field", 5)(29, "mat-label");
      \u0275\u0275text(30, "Client Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "textarea", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "button", 18);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      const chipGrid_r8 = \u0275\u0275reference(15);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Client" : "Add Client");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.clientForm.get("company_name")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.emailList);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r8)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.vesselSearchText);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.filteredVessels.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredVessels);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredVessels.length === 0 && ctx.vesselList.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vesselList.length === 0);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Client" : "Add Client", "");
    }
  }, dependencies: [MatInput, MatLabel, MatFormField, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, CommonModule, NgForOf, NgIf, MatIcon, MatError, MatCheckboxModule, MatCheckbox, MatChipsModule, MatChip, MatChipGrid, MatChipInput, MatChipRemove, LoaderComponent, MatAutocompleteModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 25px;\n  max-width: 450px;\n  box-sizing: border-box;\n}\n.status-label[_ngcontent-%COMP%], \n.options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.custom-toggle[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  transform-origin: center;\n}\n.add-country[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n  background-color: #3C50E0;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  height: 35px;\n  border: none;\n  margin-left: 275px;\n  background: none;\n  color: red;\n  height: 30px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n}\n.vessel-filter-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.vessel-checkbox-list[_ngcontent-%COMP%] {\n  max-height: calc(60vh - 200px);\n  overflow-y: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 8px;\n  background-color: var(--color-bg-dark-4);\n}\n.vessel-checkbox-item[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.vessel-checkbox-item[_ngcontent-%COMP%]:not(.select-all) {\n  margin-left: 16px;\n}\n.vessel-checkbox-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n  font-style: italic;\n  padding: 16px;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n  input::placeholder {\n  font-size: 12px;\n  color: #888 !important;\n}\n  mat-error {\n  font-size: 11px;\n  color: red;\n  margin-top: -5px;\n}\n  .custom-dialog-container .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n  height: 33px;\n}\n  .custom-dialog-container .mat-mdc-floating-label {\n  font-size: 12px !important;\n  top: 50% !important;\n  line-height: 4 !important;\n}\n  .mat-mdc-text-field-wrapper {\n  background-color: var(--app-input-bg) !important;\n  border: 1px solid #c6c7ca;\n}\n  .mat-mdc-form-field textarea.mat-mdc-input-element {\n  background-color: var(--app-textarea-bg) !important;\n}\n  textarea {\n  background-color: var(--app-textarea-bg) !important;\n  color: #333 !important;\n}\n  .mat-mdc-select-panel {\n  max-height: 300px;\n  background-color: var(--color-bg-dark-4);\n}\n  mat-form-field:has(textarea) .mat-mdc-floating-label {\n  top: 20px !important;\n  line-height: 1 !important;\n}\n  .select-all-option {\n  margin-left: -16px;\n}\n  .mat-mdc-checkbox .mdc-checkbox__background {\n  background-color: var(--color-bg-light-1);\n}\n/*# sourceMappingURL=create-client.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateClientComponent, { className: "CreateClientComponent" });
})();

export {
  CreateClientComponent
};
//# sourceMappingURL=chunk-GTJ5IF63.js.map
