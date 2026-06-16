import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-7YW2NURN.js";

// src/app/auth/login/login.signal.service.ts
var LoginSignalService = class _LoginSignalService {
  // Private signals
  _userName = signal("");
  _role = signal("");
  _uuid = signal("");
  _otpNreset = signal(false);
  // Public readonly signals (getters)
  userName = this._userName;
  role = this._role;
  uuid = this._uuid;
  otpNreset = this._otpNreset;
  // Setters
  setUserName(name) {
    this._userName.set(name);
  }
  setRole(role) {
    this._role.set(role);
  }
  setuuid(uuid) {
    this._uuid.set(uuid);
  }
  setOtpNReset(flag) {
    this._otpNreset.set(flag);
  }
  static \u0275fac = function LoginSignalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginSignalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoginSignalService, factory: _LoginSignalService.\u0275fac, providedIn: "root" });
};

export {
  LoginSignalService
};
//# sourceMappingURL=chunk-4ZLE6GIL.js.map
