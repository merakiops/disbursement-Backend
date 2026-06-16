import {
  CommonHttpModule
} from "./chunk-ZEOMT33W.js";
import {
  Router
} from "./chunk-F2E3SSFC.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";

// src/app/auth/auth.service.ts
var AuthService = class _AuthService {
  httpService;
  router;
  constructor(httpService, router) {
    this.httpService = httpService;
    this.router = router;
  }
  login(username, password) {
    return this.httpService.post(`auth/token`, { username, password }).pipe(map((response) => {
      sessionStorage.setItem("name", response.name);
      sessionStorage.setItem("role", response.role_name);
      sessionStorage.setItem("roleId", response.role_id);
      return response;
    }));
  }
  sendOtp(otp, uuid) {
    return this.httpService.post(`otp/validate`, { otp, uuid }).pipe(map((response) => {
      return response;
    }));
  }
  reSendOtp() {
    return this.httpService.post(`otp/resend`, null).pipe(map((response) => {
      return response;
    }));
  }
  sendOtpfromforget(username, otp, uuid, new_password) {
    return this.httpService.post(`password-reset/validate-otp`, { username, otp, uuid, new_password }).pipe(map((response) => {
      return response;
    }));
  }
  validateLink(passwordreset_token) {
    return this.httpService.post(`validate-link`, { passwordreset_token }).pipe(map((response) => {
      return response;
    }));
  }
  getResetOtp(token) {
    return this.httpService.post(`password-reset/get-otp`, { token }).pipe(map((response) => {
      return response;
    }));
  }
  updateOtpfromforget(username, passwordreset_token, new_password) {
    return this.httpService.post(`password-reset`, { username, new_password, passwordreset_token }).pipe(map((response) => {
      return response;
    }));
  }
  forgotpassword(username) {
    return this.httpService.post("request-password-reset", { username }).pipe(map((response) => {
      return response;
    }));
  }
  disbursementLogin(loginData) {
    return this.httpService.post("validate_pda_link", loginData).pipe(map((response) => {
      return response;
    }));
  }
  validateDisbursementOtp(otpData) {
    return this.httpService.post("validate_pda_link_otp", otpData).pipe(map((response) => {
      return response;
    }));
  }
  requestPasswordResetOTP(token) {
    return this.httpService.post("password-reset/send-otp", { token }).pipe(map((response) => {
      return response;
    }));
  }
  resetPasswordWithOTP(payload) {
    return this.httpService.post("password-reset/verify-otp", payload).pipe(map((response) => {
      return response;
    }));
  }
  changePassword(username, currentPassword, newPassword) {
    return this.httpService.post("change-password", {
      username,
      old_password: currentPassword,
      new_password: newPassword
    }).pipe(map((response) => {
      return response;
    }));
  }
  passwordExpired(username, currentPassword, newPassword) {
    return this.httpService.post("expired-password-reset", {
      username,
      old_password: currentPassword,
      new_password: newPassword
    }).pipe(map((response) => {
      return response;
    }));
  }
  logout() {
    return this.httpService.post("auth/logout", {}).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(CommonHttpModule), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-VHI7YX5H.js.map
