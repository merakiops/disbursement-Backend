import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-7YW2NURN.js";

// src/app/components/port-agent-form/pa-form-submit-success-page/succuss-response-shared.component.service.ts
var SuccessMessageService = class _SuccessMessageService {
  successMessageSubject = new BehaviorSubject("");
  successMessage$ = this.successMessageSubject.asObservable();
  setSuccessMessage(message) {
    this.successMessageSubject.next(message);
  }
  static \u0275fac = function SuccessMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuccessMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuccessMessageService, factory: _SuccessMessageService.\u0275fac, providedIn: "root" });
};

export {
  SuccessMessageService
};
//# sourceMappingURL=chunk-BQRNQXXM.js.map
