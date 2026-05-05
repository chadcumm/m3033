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
  _selectedGroupId = signal(null, ...ngDevMode ? [{ debugName: "_selectedGroupId" }] : (
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
  userGroups = computed(() => {
    const position = this.userPosition();
    if (!position)
      return [];
    const groups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    return groups.filter((g) => g.positions.includes(position));
  }, ...ngDevMode ? [{ debugName: "userGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  hasScheduleAccess = computed(() => this.isSuperuser() || this.userGroups().length > 0, ...ngDevMode ? [{ debugName: "hasScheduleAccess" }] : (
    /* istanbul ignore next */
    []
  ));
  availablePickerGroups = computed(() => {
    if (this.isSuperuser()) {
      return this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    }
    return this.userGroups();
  }, ...ngDevMode ? [{ debugName: "availablePickerGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  canPickAllGroups = computed(() => this.isSuperuser(), ...ngDevMode ? [{ debugName: "canPickAllGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  shouldShowGroupPicker = computed(() => this.isSuperuser() || this.userGroups().length > 1, ...ngDevMode ? [{ debugName: "shouldShowGroupPicker" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGroupId = this._selectedGroupId.asReadonly();
  effectiveGroupId = computed(() => {
    const sel = this._selectedGroupId();
    const userGrps = this.userGroups();
    const allGroups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    if (this.isSuperuser()) {
      if (sel === SUPERUSER_OVERRIDE_ALL)
        return SUPERUSER_OVERRIDE_ALL;
      if (sel && allGroups.find((g) => g.id === sel))
        return sel;
      return userGrps[0]?.id ?? SUPERUSER_OVERRIDE_ALL;
    }
    if (userGrps.length === 0)
      return "";
    if (sel && sel !== SUPERUSER_OVERRIDE_ALL && userGrps.find((g) => g.id === sel))
      return sel;
    return userGrps[0].id;
  }, ...ngDevMode ? [{ debugName: "effectiveGroupId" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvedAppointmentTypes = computed(() => {
    if (!this.hasScheduleAccess())
      return [];
    const eff = this.effectiveGroupId();
    if (eff === SUPERUSER_OVERRIDE_ALL)
      return this.unionOfAllGroups();
    if (!eff)
      return [];
    const groups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    return groups.find((g) => g.id === eff)?.appointment_types ?? [];
  }, ...ngDevMode ? [{ debugName: "resolvedAppointmentTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  activeGroupLabel = computed(() => {
    const eff = this.effectiveGroupId();
    if (eff === SUPERUSER_OVERRIDE_ALL)
      return "All groups";
    if (!eff)
      return "";
    const groups = this.configService.configuration()?.APPOINTMENT_TYPE_GROUPS ?? [];
    return groups.find((g) => g.id === eff)?.label ?? "";
  }, ...ngDevMode ? [{ debugName: "activeGroupLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvePosition() {
    this._positionReady.set(true);
  }
  setSelectedGroupId(value) {
    this._selectedGroupId.set(value);
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
//# sourceMappingURL=chunk-IUMO36CF.js.map
