import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/components/port-agent-form/port-agent-form.service.ts
var PortAgentFormService = class _PortAgentFormService {
  http;
  constructor(http) {
    this.http = http;
  }
  getMasterData(params) {
    return this.http.post("getmaster-data", params).pipe(map((response) => response));
  }
  getVesselDetailByIMONumber(body) {
    return this.http.post(`vessel-info-by-imo`, body).pipe(map((response) => response));
  }
  submitPortAgentFormData(data) {
    return this.http.post("pda_pa_form_submit", data).pipe(map((response) => response));
  }
  returnToMeraki(data) {
    return this.http.post("return_to_pda", data).pipe(map((response) => response));
  }
  static \u0275fac = function PortAgentFormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortAgentFormService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortAgentFormService, factory: _PortAgentFormService.\u0275fac, providedIn: "root" });
};

export {
  PortAgentFormService
};
//# sourceMappingURL=chunk-5NR6WTQB.js.map
