import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-7YW2NURN.js";

// src/app/pages/master/master.signal.service.ts
var MasterSignalService = class _MasterSignalService {
  _masterTabName = signal("");
  // private signal
  // Getter for signal
  masterTabName = this._masterTabName;
  // Setter
  setMasterTabName(name) {
    this._masterTabName.set(name);
  }
  static \u0275fac = function MasterSignalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MasterSignalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MasterSignalService, factory: _MasterSignalService.\u0275fac, providedIn: "root" });
};

export {
  MasterSignalService
};
//# sourceMappingURL=chunk-A6TEDHIL.js.map
