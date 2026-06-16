import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/pages/pda/pda.component.service.ts
var PdaService = class _PdaService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to post the PDA data to DB
  postPdaData(data) {
    return this.http.post("initiate_disbursement_manual", data).pipe(map((response) => {
      return response;
    }));
  }
  // method to get PDA data from DB
  getPdaData(data) {
    return this.http.post("pdadata", data).pipe(map((response) => {
      return response.data;
    }));
  }
  pdaCreateByPortAgent(data) {
    return this.http.post("initiate_disbursement", data).pipe(map((response) => {
      return response;
    }));
  }
  pdaEditFormData(data) {
    return this.http.get(`disbursement_detail/${data}`, {}).pipe(map((response) => {
      return response;
    }));
  }
  pdaEditDataToDb(data) {
    return this.http.post("pda_edit", data).pipe(map((response) => {
      return response;
    }));
  }
  reRequestPda(data) {
    return this.http.post("re_request", data).pipe(map((response) => {
      return response;
    }));
  }
  clientRequestPda(data) {
    return this.http.post("client_approval_request", data).pipe(map((response) => {
      return response;
    }));
  }
  pdaReCalculate(data) {
    return this.http.post("recalculate_disbursement", data).pipe(map((response) => {
      return response;
    }));
  }
  clientRequestfda(data) {
    return this.http.post("FDA_client_approval_request", data).pipe(map((response) => {
      return response;
    }));
  }
  resendPdaLink(data) {
    return this.http.post("resend_pda_link", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function PdaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdaService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdaService, factory: _PdaService.\u0275fac, providedIn: "root" });
};

export {
  PdaService
};
//# sourceMappingURL=chunk-GUPQORLI.js.map
