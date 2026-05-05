import {
  ALL_TABS,
  ConfigurationService,
  MPageService,
  SUPERUSER_OVERRIDE_ALL
} from "./chunk-LFPAF37O.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VLNXRP3P.js";

// src/app/services/access-control.service.ts
var AccessControlService = class _AccessControlService {
  mPage = inject(MPageService);
  configService = inject(ConfigurationService);
  _positionReady = signal(false, ...ngDevMode ? [{ debugName: "_positionReady" }] : (
    /* istanbul ignore next */
    []
  ));
  _superuserGroupOverride = signal(null, ...ngDevMode ? [{ debugName: "_superuserGroupOverride" }] : (
    /* istanbul ignore next */
    []
  ));
  userPosition = computed(() => {
    this._positionReady();
    return this.mPage.position ?? "";
  }, ...ngDevMode ? [{ debugName: "userPosition" }] : (
    /* istanbul ignore next */
    []
  ));
  isConfigLoaded = computed(() => this.configService.isLoaded(), ...ngDevMode ? [{ debugName: "isConfigLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  isSuperuser = computed(() => {
    const accessControl = this.configService.configuration()?.ACCESS_CONTROL;
    if (!accessControl)
      return this.isConfigLoaded();
    return accessControl.superusers.includes(this.userPosition());
  }, ...ngDevMode ? [{ debugName: "isSuperuser" }] : (
    /* istanbul ignore next */
    []
  ));
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
  }, ...ngDevMode ? [{ debugName: "allowedTabs" }] : (
    /* istanbul ignore next */
    []
  ));
  userGroup = computed(() => {
    const position = this.userPosition();
    if (!position)
      return null;
    const groups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    return groups.find((g) => g.positions.includes(position)) ?? null;
  }, ...ngDevMode ? [{ debugName: "userGroup" }] : (
    /* istanbul ignore next */
    []
  ));
  hasScheduleAccess = computed(() => this.isSuperuser() || this.userGroup() !== null, ...ngDevMode ? [{ debugName: "hasScheduleAccess" }] : (
    /* istanbul ignore next */
    []
  ));
  superuserGroupOverride = this._superuserGroupOverride.asReadonly();
  resolvedAppointmentTypes = computed(() => {
    if (this.isSuperuser()) {
      const override = this._superuserGroupOverride();
      if (override === SUPERUSER_OVERRIDE_ALL)
        return this.unionOfAllGroups();
      if (override) {
        const grp = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS?.find((g) => g.id === override);
        if (grp)
          return grp.appointment_types;
      }
      return this.userGroup()?.appointment_types ?? this.unionOfAllGroups();
    }
    return this.userGroup()?.appointment_types ?? [];
  }, ...ngDevMode ? [{ debugName: "resolvedAppointmentTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  activeGroupLabel = computed(() => {
    if (this.isSuperuser()) {
      const override = this._superuserGroupOverride();
      if (override === SUPERUSER_OVERRIDE_ALL)
        return "All groups";
      if (override) {
        const grp = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS?.find((g) => g.id === override);
        if (grp)
          return grp.label;
      }
      return this.userGroup()?.label ?? "All groups";
    }
    return this.userGroup()?.label ?? "";
  }, ...ngDevMode ? [{ debugName: "activeGroupLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvePosition() {
    this._positionReady.set(true);
  }
  setSuperuserGroupOverride(value) {
    this._superuserGroupOverride.set(value);
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
  unionOfAllGroups() {
    const groups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    return Array.from(new Set(groups.flatMap((g) => g.appointment_types)));
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
//# sourceMappingURL=chunk-ERPHN4IU.js.map
