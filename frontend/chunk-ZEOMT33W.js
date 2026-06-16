import {
  environment
} from "./chunk-V427WR54.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-K7GFJLXC.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/providers/commonHttpModule.ts
var CommonHttpModule = class _CommonHttpModule {
  http;
  baseUrl = environment.baseurl;
  constructor(http) {
    this.http = http;
  }
  // commonHttp get method 
  get(endpoint, params, headers) {
    const finalHeaders = headers ?? new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.get(`${this.baseUrl}/${endpoint}`, {
      params,
      headers: finalHeaders,
      observe: "response"
    }).pipe(map((response) => response.body));
  }
  // commonHttp post method 
  post(endpoint, body, headers) {
    const finalHeaders = headers ?? new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, {
      headers: finalHeaders,
      observe: "response"
    }).pipe(map((response) => response.body));
  }
  postForReport(endpoint, body, headers) {
    const finalHeaders = headers ?? new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, {
      headers: finalHeaders,
      observe: "response",
      responseType: "blob"
    }).pipe(map((response) => response.body));
  }
  // commonHttp put method 
  put(endpoint, body, headers) {
    const finalHeaders = headers ?? new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put(`${this.baseUrl}/${endpoint}`, body, {
      headers: finalHeaders,
      observe: "response"
    }).pipe(map((response) => response.body));
  }
  // commonHttp  method 
  delete(endpoint, params, headers) {
    const finalHeaders = headers ?? new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.delete(`${this.baseUrl}/${endpoint}`, {
      params,
      headers: finalHeaders,
      observe: "response"
    }).pipe(map((response) => response.body));
  }
  static \u0275fac = function CommonHttpModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonHttpModule)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonHttpModule, factory: _CommonHttpModule.\u0275fac, providedIn: "root" });
};

export {
  CommonHttpModule
};
//# sourceMappingURL=chunk-ZEOMT33W.js.map
