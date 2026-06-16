import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/pages/master/port/port.service.ts
var PortService = class _PortService {
  http;
  constructor(http) {
    this.http = http;
  }
  // method to get the data from db
  portDataFromDb(params) {
    return this.http.post("portlist", params).pipe(map((response) => ({
      total_count: response.total_count,
      data: response.data
    })));
  }
  // method to send the data to db
  saveTariffRulesDataToDB(data) {
    return this.http.post("tariff_rule/save", data).pipe(map((response) => {
      return response;
    }));
  }
  portsByCountry(countryId) {
    return this.http.get(`ports/for-country/${countryId}`, null, void 0);
  }
  getPortsByCountryId(countryId) {
    return this.http.get(`ports/by-country/${countryId}`, {}).pipe(map((response) => {
      if (Array.isArray(response)) {
        return response;
      } else if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // method to get the data from db
  getPortService(params) {
    return this.http.post("getmaster-data", params).pipe(map((response) => response.port_services ?? []));
  }
  // Method to get master data for ports screen
  getMasterData(params) {
    return this.http.post("getmaster-data", params).pipe(map((response) => response));
  }
  // Method to get tariff rules
  getTariffRules(params) {
    const requestBody = {
      page: params.page || 0,
      page_size: params.page_size || 0,
      query_name: params.query_name || "",
      port_id: params.port_id || null
    };
    return this.http.post(`tariff_rules`, requestBody).pipe(map((response) => ({
      status: response.status,
      total: response.total,
      page: response.page,
      page_size: response.page_size,
      data: response.data || []
    })));
  }
  getFilterMasterData(params) {
    return this.http.post("filter-getmaster-data", params).pipe(map((response) => response));
  }
  static \u0275fac = function PortService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortService, factory: _PortService.\u0275fac, providedIn: "root" });
};

export {
  PortService
};
//# sourceMappingURL=chunk-62FFZ6RH.js.map
