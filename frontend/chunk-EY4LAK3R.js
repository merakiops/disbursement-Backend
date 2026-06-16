import {
  Router
} from "./chunk-F2E3SSFC.js";
import {
  environment
} from "./chunk-2ZCMGA6L.js";
import {
  HttpClient
} from "./chunk-K7GFJLXC.js";
import {
  BehaviorSubject,
  firstValueFrom,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7YW2NURN.js";
import {
  __async
} from "./chunk-KBUIKKCC.js";

// src/app/auth/auth-session.service.ts
var LS_OWNER_KEY = "sessionOwner";
var CHANNEL_NAME = "auth";
var DISBURSEMENT_FLAG = "disbursement_mode";
var AuthSessionService = class _AuthSessionService {
  http;
  router;
  sessionValid$ = new BehaviorSubject(null);
  /** Stream of session validity. null = checking, true = active, false = none */
  sessionValid = this.sessionValid$.asObservable();
  userProfile$ = new BehaviorSubject(null);
  /** Stream of the current user profile (Name, Role, etc.) */
  userProfile = this.userProfile$.asObservable();
  authChannel = null;
  checkPromise = null;
  pendingInitPromise = null;
  /** Throttling for tab-focus validation (60-second cooldown) */
  lastCheckTime = 0;
  visibilityListener = null;
  storageListener = null;
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.initBroadcastChannel();
    this.initStorageListener();
    this.initVisibilityListener();
    this.refreshProfileFromStorage();
  }
  /**
   * Extracts Name and Role from storage to initialize the reactive stream.
   */
  refreshProfileFromStorage() {
    const user = {
      name: sessionStorage.getItem("name") || "",
      role_name: sessionStorage.getItem("role") || "",
      role_id: Number(sessionStorage.getItem("roleId")) || 0,
      uuid: sessionStorage.getItem("uuid") || "",
      username: sessionStorage.getItem("username") || "",
      company_id: Number(sessionStorage.getItem("companyId")) || 0,
      company_name: sessionStorage.getItem("companyName") || "",
      email_signature: sessionStorage.getItem("signature")
    };
    if (user.username || user.uuid || user.name) {
      this.userProfile$.next(user);
    } else {
      this.userProfile$.next(null);
    }
  }
  hasToken() {
    return !!sessionStorage.getItem("username");
  }
  // ─── Browser-Level Session Lock (localStorage) ──────────────────────────
  /**
   * Checks if a different user already owns the session in this browser.
   */
  isSessionLocked(incomingUserId) {
    const owner = this.getSessionOwner();
    if (owner && owner.userId !== incomingUserId) {
      return !this.hasToken();
    }
    return false;
  }
  /**
   * Async check used by LoginComponent before allowing submission.
   */
  verifyLockBeforeLogin(incomingUserId) {
    return __async(this, null, function* () {
      const owner = this.getSessionOwner();
      if (!owner)
        return "PROCEED";
      if (owner.userId === incomingUserId) {
        return "PROCEED";
      }
      return "LOCKED";
    });
  }
  getSessionOwner() {
    try {
      const owner = localStorage.getItem(LS_OWNER_KEY);
      return owner ? JSON.parse(owner) : null;
    } catch {
      return null;
    }
  }
  setSessionOwner(userId, signature, companyId, companyName, name, role, roleId) {
    const owner = { userId, signature, companyId, companyName, name, role, roleId };
    localStorage.setItem(LS_OWNER_KEY, JSON.stringify(owner));
  }
  clearSessionOwner() {
    localStorage.removeItem(LS_OWNER_KEY);
  }
  // ─── Application Initialization & Validation ─────────────────────────────
  // ─── Disbursement Mode Isolation ────────────────────────────────────────
  /**
   * Returns true if the current tab is in disbursement-only mode.
   * When true, normal session restore and /verify are bypassed.
   */
  isDisbursementMode() {
    return sessionStorage.getItem(DISBURSEMENT_FLAG) === "true";
  }
  /**
   * Enters disbursement mode for the current tab only.
   * Clears sessionStorage (tab-scoped) and raises the isolation flag.
   * Does NOT clear localStorage and does NOT broadcast to other tabs.
   */
  enterDisbursementMode() {
    const disbursementToken = sessionStorage.getItem("disbursementToken");
    sessionStorage.clear();
    sessionStorage.setItem(DISBURSEMENT_FLAG, "true");
    if (disbursementToken) {
      sessionStorage.setItem("disbursementToken", disbursementToken);
    }
    this.userProfile$.next(null);
    this.sessionValid$.next(false);
    this.checkPromise = null;
    this.pendingInitPromise = null;
  }
  /**
   * Call this when the disbursement flow ends cleanly (e.g. on success or logout).
   */
  exitDisbursementMode() {
    sessionStorage.removeItem(DISBURSEMENT_FLAG);
  }
  /**
   * Centralized Production-Ready Validator.
   */
  ensureSessionState() {
    return __async(this, null, function* () {
      if (this.isDisbursementMode()) {
        this.sessionValid$.next(false);
        return false;
      }
      const cached = this.currentState();
      if (cached !== null)
        return cached;
      if (this.pendingInitPromise)
        return this.pendingInitPromise;
      this.pendingInitPromise = (() => __async(this, null, function* () {
        try {
          const isValid = yield this.checkSession();
          if (isValid) {
            this.restoreFromLocalStorage();
            return true;
          }
          this.sessionValid$.next(false);
          return false;
        } finally {
          this.pendingInitPromise = null;
        }
      }))();
      return this.pendingInitPromise;
    });
  }
  initSessionCheck() {
    return __async(this, null, function* () {
      const isValid = yield this.ensureSessionState();
      return isValid;
    });
  }
  initVisibilityListener() {
    this.visibilityListener = () => {
      if (document.visibilityState === "visible") {
        this.validateOnFocus();
      }
    };
    document.addEventListener("visibilitychange", this.visibilityListener);
  }
  validateOnFocus() {
    return __async(this, null, function* () {
      if (this.isDisbursementMode())
        return;
      const initialOwner = this.getSessionOwner();
      if (!initialOwner)
        return;
      const now = Date.now();
      if (now - this.lastCheckTime < 6e4)
        return;
      const isValid = yield this.checkSession();
      if (!isValid) {
        console.warn("[AuthService] Focus check: Session is dead. Logging out.");
        this.clearSessionOwner();
        this.handleRemoteLogout();
        return;
      }
      const owner = this.getSessionOwner();
      const currentUsername = sessionStorage.getItem("username");
      const currentUuid = sessionStorage.getItem("uuid");
      const isMatch = owner && (currentUsername === owner.userId || currentUuid === owner.userId);
      if (!isMatch) {
        console.warn(`[AuthService] Focus check: Identity mismatch. Tab=${currentUsername}, Lock=${owner?.userId}. Logging out.`);
        this.handleRemoteLogout();
      }
    });
  }
  // ─── Cross-Tab Synchronization ───────────────────────────────────────────
  initBroadcastChannel() {
    if (typeof BroadcastChannel !== "undefined") {
      this.authChannel = new BroadcastChannel(CHANNEL_NAME);
      this.authChannel.onmessage = (event) => {
        const type = event.data?.type;
        if (type === "LOGOUT_ALL") {
          this.handleRemoteLogout();
        } else if (type === "LOGOUT_STALE") {
          this.handleStaleLogout();
        }
      };
    }
  }
  initStorageListener() {
    this.storageListener = (event) => {
      if (event.key === "sessionOwner") {
        this.handleStaleLogout();
      }
    };
    window.addEventListener("storage", this.storageListener);
  }
  handleStaleLogout() {
    let currentUser = null;
    currentUser = sessionStorage.getItem("username");
    const owner = this.getSessionOwner();
    if (currentUser && owner && currentUser !== owner.userId) {
      this.handleRemoteLogout();
    }
  }
  handleRemoteLogout() {
    this.clearLocalData();
    this.sessionValid$.next(false);
    const disbursementToken = sessionStorage.getItem("disbursementToken");
    if (disbursementToken) {
      this.router.navigate([`/pda-disburesement/${disbursementToken}`]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  manualLogout() {
    this.clearBrowserSession();
    this.sessionValid$.next(false);
    this.authChannel?.postMessage({ type: "LOGOUT_ALL" });
    this.router.navigate(["/login"]);
  }
  broadcastLogout(mode = "ALL") {
    if (mode === "ALL") {
      this.clearLocalData();
      this.sessionValid$.next(false);
      this.router.navigate(["/login"]);
    }
    this.authChannel?.postMessage({ type: mode === "ALL" ? "LOGOUT_ALL" : "LOGOUT_STALE" });
  }
  clearBrowserSession() {
    this.clearLocalData();
    this.clearSessionOwner();
    const keys = [
      "name",
      "role",
      "roleId",
      "uuid",
      "username",
      "companyId",
      "companyName",
      "signature"
    ];
    keys.forEach((key) => localStorage.removeItem(key));
    this.exitDisbursementMode();
    this.sessionValid$.next(false);
  }
  clearLocalData() {
    const keys = [
      "name",
      "role",
      "roleId",
      "uuid",
      "username",
      "companyId",
      "companyName",
      "signature"
    ];
    keys.forEach((key) => sessionStorage.removeItem(key));
    const isDisbursement = this.isDisbursementMode();
    const disbursementToken = sessionStorage.getItem("disbursementToken");
    sessionStorage.removeItem("disbursementUuid");
    sessionStorage.removeItem("pa-success-response");
    sessionStorage.removeItem("addressAndBankDetails");
    this.exitDisbursementMode();
    if (isDisbursement && disbursementToken) {
      sessionStorage.setItem("disbursementToken", disbursementToken);
    }
    this.checkPromise = null;
  }
  // ─── Session Validation ──────────────────────────────────────────────────
  checkSession() {
    if (this.isDisbursementMode()) {
      return Promise.resolve(false);
    }
    if (this.checkPromise !== null)
      return this.checkPromise;
    const url = `${environment.baseurl}/verify`;
    this.checkPromise = firstValueFrom(this.http.get(url, { withCredentials: true })).then((user) => {
      this.lastCheckTime = Date.now();
      const isValid = user?.valid === "success" || !!user?.uuid || !!user?.userId;
      const uid = user?.username || user?.uuid || user?.userId;
      if (isValid && uid) {
        const currentUsername = sessionStorage.getItem("username");
        const currentUuid = sessionStorage.getItem("uuid");
        const verifiedUsername = user?.username;
        const verifiedUuid = user?.uuid || user?.userId;
        const identityMismatch = currentUsername && verifiedUsername && currentUsername !== verifiedUsername || currentUuid && verifiedUuid && currentUuid !== verifiedUuid.toString();
        if (identityMismatch) {
          console.warn(`[AuthService] Session switched. Tab user=${currentUsername || currentUuid}, Verified user=${verifiedUsername || verifiedUuid}. Logging out stale tab.`);
          this.handleRemoteLogout();
          return false;
        }
        this.populateSessionStorage(user);
        const name = sessionStorage.getItem("name") || "";
        const role = sessionStorage.getItem("role") || "";
        const sig = sessionStorage.getItem("signature") || "";
        const cId = Number(sessionStorage.getItem("companyId"));
        const cName = sessionStorage.getItem("companyName") || "";
        const roleId = sessionStorage.getItem("roleId") || "";
        this.setSessionOwner(uid, sig, cId, cName, name, role, roleId);
        this.sessionValid$.next(true);
        return true;
      }
      console.warn("[AuthService] Server response invalid or unauthorized. Session invalid.");
      this.sessionValid$.next(false);
      return false;
    }).catch((err) => {
      this.lastCheckTime = Date.now();
      this.sessionValid$.next(false);
      return false;
    }).finally(() => {
      this.checkPromise = null;
    });
    return this.checkPromise;
  }
  setSession(userId, user) {
    this.populateSessionStorage(user);
    const keys = [
      "name",
      "role",
      "roleId",
      "uuid",
      "username",
      "companyId",
      "companyName",
      "signature"
    ];
    keys.forEach((key) => {
      const val = sessionStorage.getItem(key);
      if (val) {
        localStorage.setItem(key, val);
      }
    });
    const sig = user.email_signature || "";
    const cId = user.company_id || "";
    const cName = user.company_name || "";
    const name = user.name || "";
    const role = user.role_name || "";
    const roleId = user.role_id || "";
    this.setSessionOwner(userId, sig, cId, cName, name, role, roleId);
    this.sessionValid$.next(true);
    this.lastCheckTime = Date.now();
  }
  populateSessionStorage(user) {
    const isNumeric = (val) => /^\d+$/.test(String(val));
    const currentUsername = sessionStorage.getItem("username");
    const currentUuid = sessionStorage.getItem("uuid");
    const owner = this.getSessionOwner();
    if (user.name)
      sessionStorage.setItem("name", user.name);
    if (user.role_name)
      sessionStorage.setItem("role", user.role_name);
    if (user.role_id)
      sessionStorage.setItem("roleId", user.role_id.toString());
    const newUuid = user.uuid || user.userId;
    if (newUuid && !(currentUuid && !isNumeric(currentUuid) && isNumeric(newUuid))) {
      sessionStorage.setItem("uuid", newUuid.toString());
    } else if (newUuid) {
      sessionStorage.setItem("uuid", newUuid.toString());
    }
    const newUsername = user.username || user.userId;
    if (newUsername && !(currentUsername && !isNumeric(currentUsername) && isNumeric(newUsername))) {
      sessionStorage.setItem("username", newUsername.toString());
    } else if (newUsername) {
      sessionStorage.setItem("username", newUsername.toString());
    }
    const companyId = user.company_id || owner?.companyId;
    if (companyId)
      sessionStorage.setItem("companyId", companyId.toString());
    const companyName = user.company_name || owner?.companyName;
    if (companyName)
      sessionStorage.setItem("companyName", companyName);
    const signature = user.email_signature !== void 0 && user.email_signature !== null ? user.email_signature : owner?.signature;
    if (signature !== void 0 && signature !== null) {
      sessionStorage.setItem("signature", signature);
    }
    this.refreshProfileFromStorage();
  }
  currentState() {
    return this.sessionValid$.getValue();
  }
  restoreFromLocalStorage() {
    if (this.isDisbursementMode())
      return;
    const sessionUser = sessionStorage.getItem("username");
    const localUser = localStorage.getItem("username");
    if (sessionUser && localUser && sessionUser !== localUser) {
      console.warn("[AuthService] User mismatch (session vs local) \u2192 clearing session and redirecting to /login");
      this.userProfile$.next(null);
      this.sessionValid$.next(false);
      this.router.navigate(["/login"]);
      return;
    }
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");
    if (!username || !role) {
      const keys = [
        "name",
        "role",
        "companyId",
        "companyName",
        "signature"
      ];
      let hasData = false;
      keys.forEach((key) => {
        const val = localStorage.getItem(key);
        if (val) {
          sessionStorage.setItem(key, val);
          hasData = true;
        }
      });
      if (hasData) {
        this.refreshProfileFromStorage();
      }
    }
  }
  setDisbursementOwner(userId) {
    this.setSessionOwner(userId);
  }
  ngOnDestroy() {
    this.authChannel?.close();
    if (this.visibilityListener) {
      document.removeEventListener("visibilitychange", this.visibilityListener);
    }
    if (this.storageListener) {
      window.removeEventListener("storage", this.storageListener);
    }
  }
  static \u0275fac = function AuthSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthSessionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthSessionService, factory: _AuthSessionService.\u0275fac, providedIn: "root" });
};

export {
  AuthSessionService
};
//# sourceMappingURL=chunk-EY4LAK3R.js.map
