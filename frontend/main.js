import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-OAV4YTDQ.js";
import {
  require_moment
} from "./chunk-Z6YUOPJY.js";
import {
  LoaderComponent
} from "./chunk-6FCA4LJN.js";
import "./chunk-A7N62EC5.js";
import {
  NGX_MAT_DATE_FORMATS,
  NGX_MAT_NATIVE_DATE_FORMATS,
  NgxMatDateAdapter,
  NgxMatNativeDateAdapter
} from "./chunk-P7DPZ3OU.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import "./chunk-ECWSDFUO.js";
import "./chunk-FV4PHKPE.js";
import "./chunk-7AWYGOUC.js";
import {
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import "./chunk-3T2C4MET.js";
import "./chunk-6WCQ44KD.js";
import "./chunk-KQHVW7GO.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-56DUDJD6.js";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "./chunk-BAX6ITZM.js";
import {
  AuthSessionService
} from "./chunk-EY4LAK3R.js";
import {
  Router,
  RouterOutlet,
  provideRouter,
  withComponentInputBinding
} from "./chunk-F2E3SSFC.js";
import "./chunk-2ZCMGA6L.js";
import {
  BrowserModule,
  DomRendererFactory2,
  HTTP_INTERCEPTORS,
  bootstrapApplication,
  provideHttpClient,
  withInterceptorsFromDi
} from "./chunk-K7GFJLXC.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  CommonModule,
  DOCUMENT,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  Optional,
  RendererFactory2,
  RuntimeError,
  catchError,
  firstValueFrom,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-7YW2NURN.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  authSessionService;
  constructor(authSessionService) {
    this.authSessionService = authSessionService;
    const path = window.location.pathname;
    if (path.includes("/pda-disburesement/")) {
      this.authSessionService.enterDisbursementMode();
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const path = window.location.pathname;
      const isPublicAuthPage = path.includes("/login") || path.includes("/forgot-password") || path.includes("/reset-password") || path.includes("/otp");
      if (!isPublicAuthPage) {
        yield this.authSessionService.initSessionCheck();
      }
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthSessionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-loader")(1, "router-outlet");
    }
  }, dependencies: [RouterOutlet, LoaderComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/app/auth/guards/auth.guard.ts
var AuthGuard = () => __async(void 0, null, function* () {
  const authSessionService = inject(AuthSessionService);
  const router = inject(Router);
  const isValid = yield authSessionService.ensureSessionState();
  if (isValid) {
    const roleId = Number(sessionStorage.getItem("roleId"));
    if (roleId === 4) {
      return router.createUrlTree(["/login"]);
    }
    return true;
  }
  return router.createUrlTree(["/login"]);
});

// src/app/auth/guards/no-auth.guard.ts
var NoAuthGuard = (route) => __async(void 0, null, function* () {
  if (route.routeConfig?.path?.includes("pda-disburesement")) {
    return true;
  }
  const authSessionService = inject(AuthSessionService);
  const router = inject(Router);
  const isValid = yield authSessionService.ensureSessionState();
  if (isValid) {
    return router.createUrlTree(["/layout"]);
  }
  return true;
});

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  // ── Auth-page public routes (NoAuthGuard) ──────────────────────────────
  {
    path: "login",
    canActivate: [NoAuthGuard],
    loadComponent: () => import("./chunk-373OZ7VF.js").then((m) => m.LoginComponent)
  },
  {
    path: "otp",
    canActivate: [NoAuthGuard],
    loadComponent: () => import("./chunk-UCM6FL2X.js").then((m) => m.OtpComponent)
  },
  {
    path: "forgot-password",
    loadComponent: () => import("./chunk-QIKCFEBX.js").then((m) => m.ForgetPswdComponent)
  },
  {
    path: "reset-password/:token",
    loadComponent: () => import("./chunk-72IBK5LM.js").then((m) => m.ResetPasswordComponent)
  },
  // ── Truly public routes (NO guard) ─────────────────────────────────────
  // These routes are accessible by anyone regardless of session state.
  // Do NOT add NoAuthGuard here — that guard calls ensureSessionState() which
  // sets sessionValid$ = false, and that false state can leak into other guards.
  {
    path: "pda-disburesement/approval/:token",
    loadComponent: () => import("./chunk-DEVH5KQD.js").then((m) => m.ClientApprovalFormComponent)
  },
  {
    path: "pda-disburesement/:token",
    loadComponent: () => import("./chunk-373OZ7VF.js").then((m) => m.LoginComponent),
    data: { isDisbursement: true }
  },
  {
    path: "port-agent-form",
    loadComponent: () => import("./chunk-3BPYEHWQ.js").then((m) => m.PortAgentFormComponent)
  },
  {
    path: "submit/success",
    loadComponent: () => import("./chunk-5QAG4G5Y.js").then((m) => m.PaFormSubmitSuccessPageComponent)
  },
  {
    path: "pdfa",
    loadChildren: () => import("./chunk-CEH2PUAY.js").then((m) => m.PdfaRoutes)
  },
  // ── Protected routes (AuthGuard) ────────────────────────────────────────
  {
    path: "layout",
    canActivate: [AuthGuard],
    loadChildren: () => import("./chunk-WW2LBYYQ.js").then((m) => m.LayoutRoutes)
  }
];

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
    this.loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-I254UBHN.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static {
    this.\u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AsyncAnimationRendererFactory,
      factory: _AsyncAnimationRendererFactory.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@angular/material-moment-adapter/fesm2022/material-moment-adapter.mjs
var _rollupMoment = __toESM(require_moment(), 1);
var import_moment = __toESM(require_moment(), 1);
var moment = import_moment.default || _rollupMoment;
var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new InjectionToken("MAT_MOMENT_DATE_ADAPTER_OPTIONS", {
  providedIn: "root",
  factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
  return {
    useUtc: false
  };
}
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var MomentDateAdapter = class _MomentDateAdapter extends DateAdapter {
  constructor(dateLocale, _options) {
    super();
    this._options = _options;
    this.setLocale(dateLocale || moment.locale());
  }
  setLocale(locale) {
    super.setLocale(locale);
    let momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, (i) => this.createDate(2017, 0, i + 1).format("D")),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin()
    };
  }
  getYear(date) {
    return this.clone(date).year();
  }
  getMonth(date) {
    return this.clone(date).month();
  }
  getDate(date) {
    return this.clone(date).date();
  }
  getDayOfWeek(date) {
    return this.clone(date).day();
  }
  getMonthNames(style) {
    return style == "long" ? this._localeData.longMonths : this._localeData.shortMonths;
  }
  getDateNames() {
    return this._localeData.dates;
  }
  getDayOfWeekNames(style) {
    if (style == "long") {
      return this._localeData.longDaysOfWeek;
    }
    if (style == "short") {
      return this._localeData.shortDaysOfWeek;
    }
    return this._localeData.narrowDaysOfWeek;
  }
  getYearName(date) {
    return this.clone(date).format("YYYY");
  }
  getFirstDayOfWeek() {
    return this._localeData.firstDayOfWeek;
  }
  getNumDaysInMonth(date) {
    return this.clone(date).daysInMonth();
  }
  clone(date) {
    return date.clone().locale(this.locale);
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    const result = this._createMoment({
      year,
      month,
      date
    }).locale(this.locale);
    if (!result.isValid() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return this._createMoment().locale(this.locale);
  }
  parse(value, parseFormat) {
    if (value && typeof value == "string") {
      return this._createMoment(value, parseFormat, this.locale);
    }
    return value ? this._createMoment(value).locale(this.locale) : null;
  }
  format(date, displayFormat) {
    date = this.clone(date);
    if (!this.isValid(date) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("MomentDateAdapter: Cannot format invalid date.");
    }
    return date.format(displayFormat);
  }
  addCalendarYears(date, years) {
    return this.clone(date).add({
      years
    });
  }
  addCalendarMonths(date, months) {
    return this.clone(date).add({
      months
    });
  }
  addCalendarDays(date, days) {
    return this.clone(date).add({
      days
    });
  }
  toIso8601(date) {
    return this.clone(date).format();
  }
  /**
   * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
   * string into null. Returns an invalid date for all other values.
   */
  deserialize(value) {
    let date;
    if (value instanceof Date) {
      date = this._createMoment(value).locale(this.locale);
    } else if (this.isDateInstance(value)) {
      return this.clone(value);
    }
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
    }
    if (date && this.isValid(date)) {
      return this._createMoment(date).locale(this.locale);
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return moment.isMoment(obj);
  }
  isValid(date) {
    return this.clone(date).isValid();
  }
  invalid() {
    return moment.invalid();
  }
  /** Creates a Moment instance while respecting the current UTC settings. */
  _createMoment(date, format, locale) {
    const {
      strict,
      useUtc
    } = this._options || {};
    return useUtc ? moment.utc(date, format, locale, strict) : moment(date, format, locale, strict);
  }
  static {
    this.\u0275fac = function MomentDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MomentDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8), \u0275\u0275inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MomentDateAdapter,
      factory: _MomentDateAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }]
  }], null);
})();
var MAT_MOMENT_DATE_FORMATS = {
  parse: {
    dateInput: "l"
  },
  display: {
    dateInput: "l",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
var MomentDateModule = class _MomentDateModule {
  static {
    this.\u0275fac = function MomentDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MomentDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MomentDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }]
    }]
  }], null, null);
})();
var MatMomentDateModule = class _MatMomentDateModule {
  static {
    this.\u0275fac = function MatMomentDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMomentDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatMomentDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [provideMomentDateAdapter()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMomentDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideMomentDateAdapter()]
    }]
  }], null, null);
})();
function provideMomentDateAdapter(formats = MAT_MOMENT_DATE_FORMATS, options) {
  const providers = [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
  if (options) {
    providers.push({
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: options
    });
  }
  return providers;
}

// src/app/shared/utils/custom-date.adapter.ts
var CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: "DD-MM-YYYY"
  },
  display: {
    dateInput: "DD-MM-YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "DD-MM-YYYY",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

// src/app/components/session.dialog.component.ts
var SessionExpiredDialogComponent = class _SessionExpiredDialogComponent {
  dialogRef;
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function SessionExpiredDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionExpiredDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionExpiredDialogComponent, selectors: [["app-session-expired-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "dialog-container"], [1, "title"], [1, "message"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function SessionExpiredDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Session Expired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Your session has expired. Please log in again.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function SessionExpiredDialogComponent_Template_button_click_5_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(6, "OK");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton], styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  min-width: 300px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #d32f2f;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=session.dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionExpiredDialogComponent, { className: "SessionExpiredDialogComponent" });
})();

// src/app/auth/auth.interceptor.ts
var isDialogOpen = false;
var AuthInterceptor = class _AuthInterceptor {
  dialog = inject(MatDialog);
  router = inject(Router);
  authSessionService = inject(AuthSessionService);
  intercept(req, next) {
    const modifiedReq = req.clone({ withCredentials: true });
    return next.handle(modifiedReq).pipe(catchError((error) => {
      if (error.status === 401) {
        const isCheckSession = req.url.includes("/verify");
        const isLoginPage = this.router.url.includes("/login");
        const isLogoutApi = req.url.includes("/auth/logout");
        const isPasswordResetApi = req.url.includes("/auth/forgot-password") || req.url.includes("/auth/reset-password");
        const isLoginApi = req.url.includes("/auth/token") || req.url.includes("/login");
        if (isCheckSession && !isLoginPage) {
          this.authSessionService.handleRemoteLogout();
          return throwError(() => error);
        }
        if (isLoginPage || isLogoutApi || isLoginApi || isCheckSession || isPasswordResetApi) {
          return throwError(() => error);
        }
        if (!isDialogOpen) {
          isDialogOpen = true;
          this.authSessionService.broadcastLogout("ALL");
          firstValueFrom(this.dialog.open(SessionExpiredDialogComponent, {
            disableClose: true,
            panelClass: "sweet-alert-style"
          }).afterClosed()).then(() => {
            isDialogOpen = false;
            this.dialog.closeAll();
          });
        }
      }
      return throwError(() => error);
    }));
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideAnimationsAsync(),
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } },
    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
    { provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_NATIVE_DATE_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};

// src/app/shared/internet-connectivity.interceptor.ts
var InternetConnectivityInterceptor = class _InternetConnectivityInterceptor {
  snackbarService = inject(SnackbarService);
  intercept(req, next) {
    if (!navigator.onLine) {
      this.snackbarService.showError("\u26A0\uFE0F No internet connection");
      return throwError(() => new Error("No internet connection"));
    }
    return next.handle(req).pipe(catchError((error) => {
      if (error.status === 0) {
        this.snackbarService.showError("Connection lost");
      }
      return throwError(() => error);
    }));
  }
  static \u0275fac = function InternetConnectivityInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternetConnectivityInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InternetConnectivityInterceptor, factory: _InternetConnectivityInterceptor.\u0275fac });
};

// src/main.ts
bootstrapApplication(AppComponent, __spreadProps(__spreadValues({}, appConfig), {
  providers: [
    ...appConfig.providers || [],
    { provide: HTTP_INTERCEPTORS, useClass: InternetConnectivityInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
