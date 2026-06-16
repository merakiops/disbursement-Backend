import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/pages/fda/fda.component.service.ts
var FdaService = class _FdaService {
  http;
  constructor(http) {
    this.http = http;
  }
  fdaWithoutPda(data) {
    return this.http.post("fda_creation_without_pda", data).pipe(map((response) => {
      return response;
    }));
  }
  fdaWithPda(data) {
    return this.http.post("fda_creation_with_pda", data).pipe(map((response) => {
      return response;
    }));
  }
  fdaDisbursementList() {
    return this.http.get("list_of_disbursement_id", {}).pipe(map((response) => {
      return response;
    }));
  }
  getDisbursementDetails(disbursementSeq) {
    return this.http.get(`get_port_agent_data_by_disbursement_seq/${disbursementSeq}`, {}).pipe(map((response) => {
      return response;
    }));
  }
  fdaReCalculate(data) {
    return this.http.post(`calculation`, data).pipe(map((response) => {
      return response;
    }));
  }
  fdaSaveAndSubmit(data) {
    return this.http.post("fda_edit", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function FdaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FdaService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FdaService, factory: _FdaService.\u0275fac, providedIn: "root" });
};

export {
  FdaService
};
//# sourceMappingURL=chunk-PXQIIZAJ.js.map
