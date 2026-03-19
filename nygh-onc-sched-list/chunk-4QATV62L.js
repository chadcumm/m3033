import {
  DEFAULT_PREFERENCES
} from "./chunk-IOVDRASK.js";
import {
  ConfigurationService,
  CustomService,
  MPageService
} from "./chunk-B6EEE5SK.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-372MDVVW.js";

// src/app/services/preferences.service.ts
var DMINFO_DOMAIN = "ONC_SCHED";
var DMINFO_NAME = "USER_PREFS";
var LS_KEY_PREFIX = "onc_sched_prefs_";
var PreferencesService = class _PreferencesService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  _preferences = signal(__spreadValues({}, DEFAULT_PREFERENCES), ...ngDevMode ? [{ debugName: "_preferences" }] : (
    /* istanbul ignore next */
    []
  ));
  _loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : (
    /* istanbul ignore next */
    []
  ));
  prsnlId = 0;
  preferences = this._preferences.asReadonly();
  loaded = this._loaded.asReadonly();
  selectedPhysicianId = computed(() => this._preferences().physician_id, ...ngDevMode ? [{ debugName: "selectedPhysicianId" }] : (
    /* istanbul ignore next */
    []
  ));
  sortColumn = computed(() => this._preferences().sort_column, ...ngDevMode ? [{ debugName: "sortColumn" }] : (
    /* istanbul ignore next */
    []
  ));
  sortDirection = computed(() => this._preferences().sort_direction, ...ngDevMode ? [{ debugName: "sortDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  columnOrder = computed(() => this._preferences().column_order, ...ngDevMode ? [{ debugName: "columnOrder" }] : (
    /* istanbul ignore next */
    []
  ));
  columnVisibility = computed(() => this._preferences().column_visibility, ...ngDevMode ? [{ debugName: "columnVisibility" }] : (
    /* istanbul ignore next */
    []
  ));
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

// src/app/services/schedule.service.ts
var ScheduleService = class _ScheduleService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  configService = inject(ConfigurationService);
  preferencesService = inject(PreferencesService);
  refreshIntervalId = null;
  REFRESH_INTERVAL = 6e4;
  _appointments = signal([], ...ngDevMode ? [{ debugName: "_appointments" }] : (
    /* istanbul ignore next */
    []
  ));
  _loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : (
    /* istanbul ignore next */
    []
  ));
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : (
    /* istanbul ignore next */
    []
  ));
  _startDate = signal(this.formatDateForDisplay(/* @__PURE__ */ new Date()), ...ngDevMode ? [{ debugName: "_startDate" }] : (
    /* istanbul ignore next */
    []
  ));
  _endDate = signal(this.formatDateForDisplay(/* @__PURE__ */ new Date()), ...ngDevMode ? [{ debugName: "_endDate" }] : (
    /* istanbul ignore next */
    []
  ));
  _lastUpdated = signal(null, ...ngDevMode ? [{ debugName: "_lastUpdated" }] : (
    /* istanbul ignore next */
    []
  ));
  _physicians = signal([], ...ngDevMode ? [{ debugName: "_physicians" }] : (
    /* istanbul ignore next */
    []
  ));
  appointments = this._appointments.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();
  startDate = this._startDate.asReadonly();
  endDate = this._endDate.asReadonly();
  lastUpdated = this._lastUpdated.asReadonly();
  physicians = this._physicians.asReadonly();
  filteredAppointments = computed(() => {
    const all = this._appointments();
    const physicianId = this.preferencesService.selectedPhysicianId();
    if (physicianId === null)
      return all;
    return all.filter((a) => a.attending_physician_id === physicianId || a.ordering_provider_id === physicianId || a.scheduling_resource_id === physicianId);
  }, ...ngDevMode ? [{ debugName: "filteredAppointments" }] : (
    /* istanbul ignore next */
    []
  ));
  appointmentCount = computed(() => this.filteredAppointments().length, ...ngDevMode ? [{ debugName: "appointmentCount" }] : (
    /* istanbul ignore next */
    []
  ));
  isToday = computed(() => {
    const today = this.formatDateForDisplay(/* @__PURE__ */ new Date());
    return this._startDate() === today && this._endDate() === today;
  }, ...ngDevMode ? [{ debugName: "isToday" }] : (
    /* istanbul ignore next */
    []
  ));
  isSingleDay = computed(() => this._startDate() === this._endDate(), ...ngDevMode ? [{ debugName: "isSingleDay" }] : (
    /* istanbul ignore next */
    []
  ));
  dateDisplay = computed(() => {
    if (this.isSingleDay())
      return this._startDate();
    return `${this._startDate()} \u2014 ${this._endDate()}`;
  }, ...ngDevMode ? [{ debugName: "dateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  loadAppointments() {
    const config = this.configService.configuration();
    const apptTypeCds = config?.APPOINTMENT_TYPES ?? [];
    this._loading.set(true);
    this._error.set(null);
    this.customService.load({
      customScript: {
        script: [{
          name: "nygh_onc_sched_service:group1",
          run: "pre",
          id: "getSchedule",
          parameters: {
            requestType: "getSchedule",
            scheduleStartDate: this.formatDateForCCL(this._startDate()),
            scheduleEndDate: this.formatDateForCCL(this._endDate()),
            apptTypeCds: apptTypeCds.join(",")
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.customService.get("getSchedule");
        if ((response?.statusData?.status ?? response?.statusdata?.status) === "S") {
          const appointments = (response.data?.appointments ?? []).map((a) => ({
            person_id: a.personId ?? a.person_id ?? 0,
            encntr_id: a.encntrId ?? a.encntr_id ?? 0,
            sch_event_id: a.schEventId ?? a.sch_event_id ?? 0,
            appt_time: a.apptTime ?? a.appt_time ?? "",
            patient_name: a.patientName ?? a.patient_name ?? "",
            patient_location: a.patientLocation ?? a.patient_location ?? "",
            encounter_type: a.encounterType ?? a.encounter_type ?? "",
            attending_physician: a.attendingPhysician ?? a.attending_physician ?? "",
            attending_physician_id: a.attendingPhysicianId ?? a.attending_physician_id ?? 0,
            ordering_provider: a.orderingProvider ?? a.ordering_provider ?? "",
            ordering_provider_id: a.orderingProviderId ?? a.ordering_provider_id ?? 0,
            scheduling_resource: a.schedulingResource ?? a.scheduling_resource ?? "",
            scheduling_resource_id: a.schedulingResourceId ?? a.scheduling_resource_id ?? 0,
            appt_type: a.apptType ?? a.appt_type ?? "",
            appt_status: a.apptStatus ?? a.appt_status ?? "",
            reason_for_visit: a.reasonForVisit ?? a.reason_for_visit ?? "",
            requested_date: a.requestedDate ?? a.requested_date ?? "",
            day_of_treatment: a.dayOfTreatment ?? a.day_of_treatment ?? "",
            ordered_treatment: a.orderedTreatment ?? a.ordered_treatment ?? "",
            special_instructions: a.specialInstructions ?? a.special_instructions ?? "",
            order_id: a.orderId ?? a.order_id ?? 0
          }));
          this._appointments.set(appointments);
          this.extractPhysicians(appointments);
          this._lastUpdated.set((/* @__PURE__ */ new Date()).toLocaleTimeString());
        } else {
          this._error.set(response?.text ?? "Failed to load schedule");
        }
      } catch {
        this._error.set("Failed to parse schedule response");
      }
      this._loading.set(false);
    });
  }
  nextDay() {
    this.shiftRange(1);
  }
  prevDay() {
    this.shiftRange(-1);
  }
  goToToday() {
    const today = this.formatDateForDisplay(/* @__PURE__ */ new Date());
    this._startDate.set(today);
    this._endDate.set(today);
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  setDateRange(start, end) {
    this._startDate.set(start);
    this._endDate.set(end);
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  setStartDate(date) {
    this._startDate.set(date);
    if (this.parseDateFromDisplay(date) > this.parseDateFromDisplay(this._endDate())) {
      this._endDate.set(date);
    }
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  setEndDate(date) {
    this._endDate.set(date);
    if (this.parseDateFromDisplay(date) < this.parseDateFromDisplay(this._startDate())) {
      this._startDate.set(date);
    }
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  refresh() {
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  startAutoRefresh() {
    this.stopAutoRefresh();
    this.refreshIntervalId = setInterval(() => {
      if (document.hasFocus()) {
        this.loadAppointments();
      }
    }, this.REFRESH_INTERVAL);
  }
  stopAutoRefresh() {
    if (this.refreshIntervalId !== null) {
      clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = null;
    }
  }
  ngOnDestroy() {
    this.stopAutoRefresh();
  }
  shiftRange(days) {
    const start = this.parseDateFromDisplay(this._startDate());
    const end = this.parseDateFromDisplay(this._endDate());
    start.setDate(start.getDate() + days);
    end.setDate(end.getDate() + days);
    this._startDate.set(this.formatDateForDisplay(start));
    this._endDate.set(this.formatDateForDisplay(end));
    this.loadAppointments();
    this.resetAutoRefresh();
  }
  resetAutoRefresh() {
    if (this.refreshIntervalId !== null) {
      this.startAutoRefresh();
    }
  }
  extractPhysicians(appointments) {
    const seen = /* @__PURE__ */ new Map();
    for (const a of appointments) {
      if (a.attending_physician_id && !seen.has(a.attending_physician_id)) {
        seen.set(a.attending_physician_id, a.attending_physician);
      }
      if (a.ordering_provider_id && !seen.has(a.ordering_provider_id)) {
        seen.set(a.ordering_provider_id, a.ordering_provider);
      }
      if (a.scheduling_resource_id && !seen.has(a.scheduling_resource_id)) {
        seen.set(a.scheduling_resource_id, a.scheduling_resource);
      }
    }
    const physicians = Array.from(seen.entries()).map(([id, name]) => ({ physician_id: id, physician_name: name })).sort((a, b) => a.physician_name.localeCompare(b.physician_name));
    this._physicians.set(physicians);
  }
  formatDateForDisplay(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const dd = String(date.getDate()).padStart(2, "0");
    return `${dd}-${months[date.getMonth()]}-${date.getFullYear()}`;
  }
  formatDateForCCL(displayDate) {
    return displayDate.toUpperCase();
  }
  parseDateFromDisplay(displayDate) {
    const parts = displayDate.split("-");
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11
    };
    return new Date(parseInt(parts[2]), months[parts[1]], parseInt(parts[0]));
  }
  static \u0275fac = function ScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleService, factory: _ScheduleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PreferencesService,
  ScheduleService
};
//# sourceMappingURL=chunk-4QATV62L.js.map
