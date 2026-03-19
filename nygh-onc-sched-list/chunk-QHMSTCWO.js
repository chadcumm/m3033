import {
  ALL_TABS
} from "./chunk-YU6WF6BO.js";
import {
  ConfigurationService,
  Injectable,
  MPageService,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-AJ3JIOTX.js";

// src/app/services/access-control.service.ts
var AccessControlService = class _AccessControlService {
  mPage = inject(MPageService);
  configService = inject(ConfigurationService);
  _positionReady = signal(false, ...ngDevMode ? [{ debugName: "_positionReady" }] : []);
  userPosition = computed(() => {
    this._positionReady();
    return this.mPage.position ?? "";
  }, ...ngDevMode ? [{ debugName: "userPosition" }] : []);
  isConfigLoaded = computed(() => this.configService.isLoaded(), ...ngDevMode ? [{ debugName: "isConfigLoaded" }] : []);
  isSuperuser = computed(() => {
    const accessControl = this.configService.configuration()?.ACCESS_CONTROL;
    if (!accessControl)
      return this.isConfigLoaded();
    return accessControl.superusers.includes(this.userPosition());
  }, ...ngDevMode ? [{ debugName: "isSuperuser" }] : []);
  allowedTabs = computed(() => {
    const accessControl = this.configService.configuration()?.ACCESS_CONTROL;
    if (!accessControl)
      return this.isConfigLoaded() ? ALL_TABS : [];
    if (this.isSuperuser())
      return ALL_TABS;
    const position = this.userPosition();
    return ALL_TABS.filter((tab) => {
      const tabConfig = accessControl.tabs[tab.key];
      return tabConfig?.positions.includes(position) ?? false;
    });
  }, ...ngDevMode ? [{ debugName: "allowedTabs" }] : []);
  resolvePosition() {
    this._positionReady.set(true);
  }
  canAccessTab(tabKey) {
    const accessControl = this.configService.configuration()?.ACCESS_CONTROL;
    if (!accessControl)
      return this.isConfigLoaded();
    if (this.isSuperuser())
      return true;
    const tabConfig = accessControl.tabs[tabKey];
    return tabConfig?.positions.includes(this.userPosition()) ?? false;
  }
  static \u0275fac = function AccessControlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessControlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccessControlService, factory: _AccessControlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessControlService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AccessControlService
};
//# sourceMappingURL=chunk-QHMSTCWO.js.map
