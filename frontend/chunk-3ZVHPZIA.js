import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/master/country/country.service.ts
var CountryService = class _CountryService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to send the data to db
  CountryDataToDB(data) {
    const transformedData = __spreadProps(__spreadValues({}, data), {
      status: data.status === true ? "Y" : "N"
    });
    return this.http.post("create-updateCountry", transformedData).pipe(map((response) => {
      return response;
    }));
  }
  // method to get the data from db
  CountryDataFromDb(params) {
    return this.http.post("countrylist ", params).pipe(map((response) => {
      return response.data.map((country) => __spreadProps(__spreadValues({}, country), {
        status: country.status === "Y" ? "Active" : "Inactive"
      }));
    }));
  }
  //method to get the country list from the db by lakshmi
  MaCountryDataFromDb(params) {
    return this.http.post("getmaster-data", params).pipe(map((response) => response.country ?? []));
  }
  static \u0275fac = function CountryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountryService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountryService, factory: _CountryService.\u0275fac, providedIn: "root" });
};

export {
  CountryService
};
//# sourceMappingURL=chunk-3ZVHPZIA.js.map
