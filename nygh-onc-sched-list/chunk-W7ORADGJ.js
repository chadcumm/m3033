import {
  DEFAULT_PREFERENCES
} from "./chunk-YU6WF6BO.js";
import {
  CustomService,
  Injectable,
  MPageService,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ENBRBLXP.js";

// src/app/services/preferences.service.ts
var DMINFO_DOMAIN = "ONC_SCHED";
var DMINFO_NAME = "USER_PREFS";
var LS_KEY_PREFIX = "onc_sched_prefs_";
var PreferencesService = class _PreferencesService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  _preferences = signal(__spreadValues({}, DEFAULT_PREFERENCES), ...ngDevMode ? [{ debugName: "_preferences" }] : []);
  _loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : []);
  prsnlId = 0;
  preferences = this._preferences.asReadonly();
  loaded = this._loaded.asReadonly();
  selectedPhysicianId = computed(() => this._preferences().physician_id, ...ngDevMode ? [{ debugName: "selectedPhysicianId" }] : []);
  sortColumn = computed(() => this._preferences().sort_column, ...ngDevMode ? [{ debugName: "sortColumn" }] : []);
  sortDirection = computed(() => this._preferences().sort_direction, ...ngDevMode ? [{ debugName: "sortDirection" }] : []);
  columnOrder = computed(() => this._preferences().column_order, ...ngDevMode ? [{ debugName: "columnOrder" }] : []);
  columnVisibility = computed(() => this._preferences().column_visibility, ...ngDevMode ? [{ debugName: "columnVisibility" }] : []);
  loadPreferences(prsnlId) {
    this.prsnlId = prsnlId;
    try {
      const cached = localStorage.getItem(LS_KEY_PREFIX + prsnlId);
      if (cached) {
        const parsed = JSON.parse(cached);
        this._preferences.set(__spreadValues(__spreadValues({}, DEFAULT_PREFERENCES), parsed));
      }
    } catch {
    }
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = DMINFO_NAME;
    dmInfo.infoDomainId = prsnlId;
    this.customService.executeDmInfoAction("loadUserPrefs", "r", [dmInfo], () => {
      try {
        const result = this.customService.get("loadUserPrefs");
        if (result?.infoLongText) {
          const prefs = JSON.parse(result.infoLongText);
          this._preferences.set(__spreadValues(__spreadValues({}, DEFAULT_PREFERENCES), prefs));
          this.updateLocalStorage();
        }
      } catch {
        this.mPage.putLog("Failed to parse user preferences");
      }
      this._loaded.set(true);
    });
  }
  setPhysicianFilter(physicianId) {
    this._preferences.update((p) => __spreadProps(__spreadValues({}, p), { physician_id: physicianId }));
    this.savePreferences();
  }
  setSortColumn(column, direction) {
    this._preferences.update((p) => __spreadProps(__spreadValues({}, p), { sort_column: column, sort_direction: direction }));
    this.savePreferences();
  }
  setColumnOrder(columns) {
    this._preferences.update((p) => __spreadProps(__spreadValues({}, p), { column_order: columns }));
    this.savePreferences();
  }
  savePreferences() {
    this.updateLocalStorage();
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = DMINFO_NAME;
    dmInfo.infoDomainId = this.prsnlId;
    dmInfo.infoLongText = JSON.stringify(this._preferences());
    this.customService.executeDmInfoAction("saveUserPrefs", "w", [dmInfo], () => {
      this.mPage.putLog("User preferences saved");
    });
  }
  updateLocalStorage() {
    try {
      localStorage.setItem(LS_KEY_PREFIX + this.prsnlId, JSON.stringify(this._preferences()));
    } catch {
    }
  }
  static \u0275fac = function PreferencesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreferencesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PreferencesService, factory: _PreferencesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferencesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PreferencesService
};
//# sourceMappingURL=chunk-W7ORADGJ.js.map
