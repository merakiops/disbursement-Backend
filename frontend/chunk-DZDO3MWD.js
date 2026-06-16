import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/master/client/client.service.ts
var ClientService = class _ClientService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to send the data from db
  ClientDataToDB(data) {
    const transformedData = __spreadProps(__spreadValues({}, data), {
      status: data.status === true ? "Y" : "N"
    });
    return this.http.post("clients", transformedData).pipe(map((response) => {
      return response;
    }));
  }
  ClientDataFromDb(body) {
    return this.http.post("clientlist", body).pipe(map((response) => {
      return response;
    }));
  }
  VslListFromDb(body) {
    return this.http.post("vessels-by-assignment", body).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function ClientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
};

export {
  ClientService
};
//# sourceMappingURL=chunk-DZDO3MWD.js.map
