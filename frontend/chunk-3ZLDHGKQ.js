import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-7LZOSO4L.js";
import {
  PortAgentFormService
} from "./chunk-5NR6WTQB.js";
import {
  ConfirmationDialogComponent
} from "./chunk-SOPE5OMF.js";
import "./chunk-K64LDRY5.js";
import {
  MatDialog
} from "./chunk-EDA7LVKI.js";
import "./chunk-ZEOMT33W.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
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
  FormControl,
  FormControlDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import "./chunk-BAX6ITZM.js";
import {
  SuccessMessageService
} from "./chunk-BQRNQXXM.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import "./chunk-V427WR54.js";
import "./chunk-K7GFJLXC.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-7YW2NURN.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/return-pda/return-pda.component.ts
function ReturnPdaComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter the remarks ");
    \u0275\u0275elementEnd();
  }
}
var ReturnPdaComponent = class _ReturnPdaComponent {
  routes;
  portAgentFormService;
  router;
  dialog;
  successMessageService;
  snackbar;
  loader = inject(LoaderService);
  isLoading = computed(() => this.loader.loading());
  constructor(routes, portAgentFormService, router, dialog, successMessageService, snackbar) {
    this.routes = routes;
    this.portAgentFormService = portAgentFormService;
    this.router = router;
    this.dialog = dialog;
    this.successMessageService = successMessageService;
    this.snackbar = snackbar;
  }
  remarkControl = new FormControl("", Validators.required);
  goToBankForm = () => {
    this.routes.navigate(["/pdfa/bankForm"]);
  };
  returnToMeraki() {
    if (!this.remarkControl.value) {
      this.remarkControl.markAllAsTouched();
      return;
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: "Confirm Send",
        text: "Are you sure you want to return the request?"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        const dis_seq = sessionStorage.getItem("pa-success-response");
        if (dis_seq) {
          const parser = JSON.parse(dis_seq);
          const data = {
            disbursement_seq: parser.disbursement_seq,
            return_message: this.remarkControl.value,
            return_status: "Y"
          };
          this.loader.show();
          this.portAgentFormService.returnToMeraki(data).subscribe({
            next: (res) => {
              this.loader.hide();
              const successMessage = "Request has been returned. The link is no longer valid.";
              this.successMessageService.setSuccessMessage(successMessage);
              this.router.navigate(["/submit/success"]);
            },
            error: (err) => {
              this.loader.hide();
              const errMsg = err?.error?.error || "Something went wrong please try again later.";
              this.snackbar.showError(errMsg);
            }
          });
        }
      }
    });
  }
  static \u0275fac = function ReturnPdaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReturnPdaComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PortAgentFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SuccessMessageService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnPdaComponent, selectors: [["app-return-pda"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 2, consts: [["action", "", 1, "form"], ["appearance", "outlined", 1, "example-card"], [1, "subtitle"], [2, "font-size", "xx-small", "color", "gray"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "6", 3, "formControl"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "button_click", 3, "click"]], template: function ReturnPdaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Return PDA to Meraki");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 2);
      \u0275\u0275text(7, "If this PDA was not intended for you, please provide your remarks below.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Remark ");
      \u0275\u0275elementStart(10, "span", 3);
      \u0275\u0275text(11, "Please explain why you're returning this PDA (minimum 10 characters)...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "mat-form-field", 4);
      \u0275\u0275element(13, "textarea", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ReturnPdaComponent_mat_error_14_Template, 2, 0, "mat-error", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function ReturnPdaComponent_Template_button_click_15_listener() {
        return ctx.goToBankForm();
      });
      \u0275\u0275text(16, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function ReturnPdaComponent_Template_button_click_17_listener() {
        return ctx.returnToMeraki();
      });
      \u0275\u0275text(18, " Send ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("formControl", ctx.remarkControl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.remarkControl.hasError("required") && ctx.remarkControl.touched);
    }
  }, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, CommonModule, NgIf], styles: ["\n\n.subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #555;\n  font-size: 14px;\n}\n.form[_ngcontent-%COMP%] {\n  padding: 5px 300px 0px 300px;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.button_click[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 160px;\n  margin: 5px 5px 0px 0px;\n  background-color: #3C50E0 !important;\n  border: none;\n  height: 33px;\n  border-radius: 4px;\n  color: white !important;\n  align-items: center;\n  transition: margin-top 0.3s ease;\n}\n/*# sourceMappingURL=return-pda.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnPdaComponent, { className: "ReturnPdaComponent" });
})();
export {
  ReturnPdaComponent
};
//# sourceMappingURL=chunk-3ZLDHGKQ.js.map
