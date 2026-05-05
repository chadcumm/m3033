import {
  CodeValueService,
  ConfigurationService,
  DEFAULT_REFRESH_INTERVAL_SECONDS,
  MAX_REFRESH_INTERVAL_SECONDS,
  MIN_REFRESH_INTERVAL_SECONDS,
  MPageService
} from "./chunk-G6VFW7GC.js";
import {
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UFO6LCQJ.js";

// src/app/components/config/config.ts
var _forTrack0 = ($index, $item) => $item.codeValue;
function ConfigComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading appointment types...");
    \u0275\u0275domElementEnd();
  }
}
function ConfigComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.filteredApptTypes().length, " shown");
  }
}
function ConfigComponent_Conditional_9_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 23)(1, "input", 24);
    \u0275\u0275domListener("change", function ConfigComponent_Conditional_9_For_14_Template_input_change_1_listener() {
      const appt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleApptType(appt_r4.codeValue));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const appt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isSelected(appt_r4.codeValue));
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r1.isSelected(appt_r4.codeValue));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appt_r4.display, " ");
  }
}
function ConfigComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 15)(1, "input", 16);
    \u0275\u0275domListener("input", function ConfigComponent_Conditional_9_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 18)(5, "button", 8);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkAllFiltered());
    });
    \u0275\u0275text(6, "Check All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 8);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uncheckAllFiltered());
    });
    \u0275\u0275text(8, "Uncheck All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 19);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowSelected());
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ConfigComponent_Conditional_9_Conditional_11_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 21);
    \u0275\u0275repeaterCreate(13, ConfigComponent_Conditional_9_For_14_Template, 3, 4, "label", 22, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r1.searchText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedApptTypes().length, " selected");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("fusion-outline", !ctx_r1.showSelectedOnly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showSelectedOnly() ? "Show All" : "Show Selected", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchText() || ctx_r1.showSelectedOnly() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredApptTypes());
  }
}
function ConfigComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Auto-refresh disabled ");
  }
}
function ConfigComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" Allowed: ", ctx_r1.minRefreshInterval, "\u2013", ctx_r1.maxRefreshInterval, "s ");
  }
}
function ConfigComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading encounter types...");
    \u0275\u0275domElementEnd();
  }
}
function ConfigComponent_Conditional_34_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const et_r6 = ctx.$implicit;
    \u0275\u0275domProperty("value", et_r6.codeValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(et_r6.display);
  }
}
function ConfigComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "label", 25);
    \u0275\u0275text(2, "Encounter type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "select", 26);
    \u0275\u0275domListener("change", function ConfigComponent_Conditional_34_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChartLinkEncntrTypeChange($event));
    });
    \u0275\u0275domElementStart(4, "option", 27);
    \u0275\u0275text(5, "\u2014 No fallback (link uses person only) \u2014");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(6, ConfigComponent_Conditional_34_For_7_Template, 2, 2, "option", 27, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("value", ctx_r1.chartLinkEncntrTypeCd());
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.allEncntrTypes());
  }
}
function ConfigComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusMessage());
  }
}
var ConfigComponent = class _ConfigComponent {
  codeValueService = inject(CodeValueService);
  configService = inject(ConfigurationService);
  mPage = inject(MPageService);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  codeSetLoaded = signal(false, ...ngDevMode ? [{ debugName: "codeSetLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  statusMessage = signal(null, ...ngDevMode ? [{ debugName: "statusMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  statusTimer = null;
  searchText = signal("", ...ngDevMode ? [{ debugName: "searchText" }] : (
    /* istanbul ignore next */
    []
  ));
  showSelectedOnly = signal(false, ...ngDevMode ? [{ debugName: "showSelectedOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedApptTypes = signal([], ...ngDevMode ? [{ debugName: "selectedApptTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  allApptTypes = signal([], ...ngDevMode ? [{ debugName: "allApptTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  encntrTypesLoaded = signal(false, ...ngDevMode ? [{ debugName: "encntrTypesLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  allEncntrTypes = signal([], ...ngDevMode ? [{ debugName: "allEncntrTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  chartLinkEncntrTypeCd = signal(0, ...ngDevMode ? [{ debugName: "chartLinkEncntrTypeCd" }] : (
    /* istanbul ignore next */
    []
  ));
  refreshIntervalSeconds = signal(DEFAULT_REFRESH_INTERVAL_SECONDS, ...ngDevMode ? [{ debugName: "refreshIntervalSeconds" }] : (
    /* istanbul ignore next */
    []
  ));
  minRefreshInterval = MIN_REFRESH_INTERVAL_SECONDS;
  maxRefreshInterval = MAX_REFRESH_INTERVAL_SECONDS;
  configEffect = effect(() => {
    const config = this.configService.configuration();
    if (config?.APPOINTMENT_TYPES) {
      this.selectedApptTypes.set([...config.APPOINTMENT_TYPES]);
    }
    if (config) {
      const stored = config.REFRESH_INTERVAL_SECONDS;
      this.refreshIntervalSeconds.set(typeof stored === "number" && Number.isFinite(stored) ? stored : DEFAULT_REFRESH_INTERVAL_SECONDS);
      this.chartLinkEncntrTypeCd.set(config.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0);
    }
  }, ...ngDevMode ? [{ debugName: "configEffect" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredApptTypes = computed(() => {
    const search = this.searchText().toLowerCase();
    const showSelected = this.showSelectedOnly();
    const selected = this.selectedApptTypes();
    let list = this.allApptTypes();
    if (showSelected) {
      list = list.filter((a) => selected.includes(a.codeValue));
    }
    if (search) {
      list = list.filter((a) => a.display.toLowerCase().includes(search));
    }
    return list;
  }, ...ngDevMode ? [{ debugName: "filteredApptTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  hasUnsavedChanges = computed(() => {
    const config = this.configService.configuration();
    const current = config?.APPOINTMENT_TYPES ?? [];
    const edited = this.selectedApptTypes();
    if (current.length !== edited.length)
      return true;
    if (!current.every((v) => edited.includes(v)))
      return true;
    const storedInterval = typeof config?.REFRESH_INTERVAL_SECONDS === "number" ? config.REFRESH_INTERVAL_SECONDS : DEFAULT_REFRESH_INTERVAL_SECONDS;
    if (storedInterval !== this.refreshIntervalSeconds())
      return true;
    const storedEncntrTypeCd = config?.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0;
    return storedEncntrTypeCd !== this.chartLinkEncntrTypeCd();
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const existingAppt = this.codeValueService.getCodeSet(14230);
    if (existingAppt?.length) {
      this.applyApptTypes(existingAppt);
    }
    this.codeValueService.load(14230, 0, "", "", "", false, () => {
      this.applyApptTypes(this.codeValueService.getCodeSet(14230));
    });
    const existingEncntr = this.codeValueService.getCodeSet(71);
    if (existingEncntr?.length) {
      this.applyEncntrTypes(existingEncntr);
    }
    this.codeValueService.load(71, 0, "", "", "", false, () => {
      this.applyEncntrTypes(this.codeValueService.getCodeSet(71));
    });
  }
  applyApptTypes(codeValues) {
    const values = codeValues.map((cv) => ({ codeValue: cv.codeValue, display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allApptTypes.set(values);
    this.codeSetLoaded.set(true);
  }
  applyEncntrTypes(codeValues) {
    const values = codeValues.map((cv) => ({ codeValue: cv.codeValue, display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allEncntrTypes.set(values);
    this.encntrTypesLoaded.set(true);
  }
  checkAllFiltered() {
    const filteredCodes = this.filteredApptTypes().map((a) => a.codeValue);
    this.selectedApptTypes.update((current) => {
      const set = new Set(current);
      for (const code of filteredCodes)
        set.add(code);
      return [...set];
    });
  }
  uncheckAllFiltered() {
    const filteredCodes = new Set(this.filteredApptTypes().map((a) => a.codeValue));
    this.selectedApptTypes.update((current) => current.filter((v) => !filteredCodes.has(v)));
  }
  toggleApptType(codeValue) {
    this.selectedApptTypes.update((current) => {
      if (current.includes(codeValue)) {
        return current.filter((v) => v !== codeValue);
      }
      return [...current, codeValue];
    });
  }
  isSelected(codeValue) {
    return this.selectedApptTypes().includes(codeValue);
  }
  toggleShowSelected() {
    this.showSelectedOnly.update((v) => !v);
  }
  save() {
    this.saving.set(true);
    const config = this.configService.configuration();
    const updated = __spreadProps(__spreadValues({}, config ?? { UPDT_DT_TM: "", APPOINTMENT_TYPES: [] }), {
      APPOINTMENT_TYPES: this.selectedApptTypes(),
      REFRESH_INTERVAL_SECONDS: this.refreshIntervalSeconds(),
      CHART_LINK_ENCOUNTER_TYPE_CD: this.chartLinkEncntrTypeCd()
    });
    this.configService.saveConfiguration(updated);
    this.saving.set(false);
    this.showStatus("Configuration saved.");
  }
  showStatus(message) {
    if (this.statusTimer)
      clearTimeout(this.statusTimer);
    this.statusMessage.set(message);
    this.statusTimer = setTimeout(() => this.statusMessage.set(null), 4e3);
  }
  discard() {
    const config = this.configService.configuration();
    this.selectedApptTypes.set([...config?.APPOINTMENT_TYPES ?? []]);
    const stored = config?.REFRESH_INTERVAL_SECONDS;
    this.refreshIntervalSeconds.set(typeof stored === "number" && Number.isFinite(stored) ? stored : DEFAULT_REFRESH_INTERVAL_SECONDS);
    this.chartLinkEncntrTypeCd.set(config?.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0);
  }
  onSearchInput(event) {
    this.searchText.set(event.target.value);
  }
  onRefreshIntervalInput(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    if (!Number.isFinite(parsed))
      return;
    this.refreshIntervalSeconds.set(this.clampInterval(parsed));
  }
  toggleAutoRefresh() {
    this.refreshIntervalSeconds.update((v) => v === 0 ? DEFAULT_REFRESH_INTERVAL_SECONDS : 0);
  }
  onChartLinkEncntrTypeChange(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    this.chartLinkEncntrTypeCd.set(Number.isFinite(parsed) ? parsed : 0);
  }
  clampInterval(value) {
    if (value <= 0)
      return 0;
    return Math.min(MAX_REFRESH_INTERVAL_SECONDS, Math.max(MIN_REFRESH_INTERVAL_SECONDS, Math.floor(value)));
  }
  static \u0275fac = function ConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigComponent, selectors: [["app-config"]], decls: 41, vars: 11, consts: [[1, "config-container"], [1, "fusion-panel"], [1, "fusion-panel-header"], [1, "fusion-panel-body"], [1, "loading-msg"], [1, "refresh-interval-row"], ["for", "refreshIntervalInput", 1, "refresh-interval-label"], ["id", "refreshIntervalInput", "type", "number", "step", "1", 1, "fusion-input", "refresh-interval-input", 3, "input", "min", "max", "value", "disabled"], [1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "refresh-interval-hint"], [1, "encntr-type-row"], [1, "config-actions"], [1, "fusion-button", 3, "click", "disabled"], [1, "fusion-button", "fusion-outline", 3, "click", "disabled"], [1, "status-message"], [1, "appt-type-controls"], ["type", "text", "placeholder", "Search appointment types...", 1, "fusion-input", "search-input", 3, "input", "value"], [1, "selected-count"], [1, "bulk-actions"], [1, "fusion-button", "fusion-small", 3, "click"], [1, "bulk-hint"], [1, "appt-type-list"], [1, "appt-type-item", 3, "selected"], [1, "appt-type-item"], ["type", "checkbox", 3, "change", "checked"], ["for", "chartLinkEncntrType", 1, "encntr-type-label"], ["id", "chartLinkEncntrType", 1, "fusion-input", "encntr-type-select", 3, "change", "value"], [3, "value"]], template: function ConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Appointment Types");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p");
      \u0275\u0275text(6, "Select which appointment types appear in the schedule. These come from code set 14230 (APPT_TYPE_CD).");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 3);
      \u0275\u0275conditionalCreate(8, ConfigComponent_Conditional_8_Template, 2, 0, "div", 4)(9, ConfigComponent_Conditional_9_Template, 15, 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 1)(11, "div", 2)(12, "h3");
      \u0275\u0275text(13, "Auto-Refresh");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p");
      \u0275\u0275text(15, "How often the schedule reloads automatically when the window has focus. Set to 0 (or use the toggle) to disable.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 3)(17, "div", 5)(18, "label", 6);
      \u0275\u0275text(19, "Interval (seconds)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "input", 7);
      \u0275\u0275domListener("input", function ConfigComponent_Template_input_input_20_listener($event) {
        return ctx.onRefreshIntervalInput($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "button", 8);
      \u0275\u0275domListener("click", function ConfigComponent_Template_button_click_21_listener() {
        return ctx.toggleAutoRefresh();
      });
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "span", 9);
      \u0275\u0275conditionalCreate(24, ConfigComponent_Conditional_24_Template, 1, 0)(25, ConfigComponent_Conditional_25_Template, 1, 2);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(26, "div", 1)(27, "div", 2)(28, "h3");
      \u0275\u0275text(29, "Chart Link Default Encounter");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "p");
      \u0275\u0275text(31, "When an appointment has no encounter attached yet, the chart-open link falls back to the patient's most recent active encounter of this type. The appointment's encounter and encounter type stay blank \u2014 this only affects the chart link's target.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 3);
      \u0275\u0275conditionalCreate(33, ConfigComponent_Conditional_33_Template, 2, 0, "div", 4)(34, ConfigComponent_Conditional_34_Template, 8, 2, "div", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "div", 11)(36, "button", 12);
      \u0275\u0275domListener("click", function ConfigComponent_Template_button_click_36_listener() {
        return ctx.save();
      });
      \u0275\u0275text(37, "Save");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "button", 13);
      \u0275\u0275domListener("click", function ConfigComponent_Template_button_click_38_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(39, "Discard");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(40, ConfigComponent_Conditional_40_Template, 2, 1, "span", 14);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.codeSetLoaded() ? 8 : 9);
      \u0275\u0275advance(12);
      \u0275\u0275domProperty("min", ctx.minRefreshInterval)("max", ctx.maxRefreshInterval)("value", ctx.refreshIntervalSeconds())("disabled", ctx.refreshIntervalSeconds() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.refreshIntervalSeconds() === 0 ? "Enable" : "Disable", " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.refreshIntervalSeconds() === 0 ? 24 : 25);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.encntrTypesLoaded() ? 33 : 34);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 40 : -1);
    }
  }, styles: ["\n\n.config-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 800px;\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.appt-type-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.refresh-interval-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select[_ngcontent-%COMP%] {\n  min-width: 18rem;\n}\n/*# sourceMappingURL=config.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigComponent, [{
    type: Component,
    args: [{ selector: "app-config", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-container">
  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Appointment Types</h3>
      <p>Select which appointment types appear in the schedule. These come from code set 14230 (APPT_TYPE_CD).</p>
    </div>
    <div class="fusion-panel-body">
      @if (!codeSetLoaded()) {
        <div class="loading-msg">Loading appointment types...</div>
      } @else {
        <div class="appt-type-controls">
          <input type="text" class="fusion-input search-input" placeholder="Search appointment types..." [value]="searchText()" (input)="onSearchInput($event)" />
          <span class="selected-count">{{ selectedApptTypes().length }} selected</span>
        </div>

        <div class="bulk-actions">
          <button class="fusion-button fusion-outline fusion-small" (click)="checkAllFiltered()">Check All</button>
          <button class="fusion-button fusion-outline fusion-small" (click)="uncheckAllFiltered()">Uncheck All</button>
          <button class="fusion-button fusion-small" [class.fusion-outline]="!showSelectedOnly()" (click)="toggleShowSelected()">
            {{ showSelectedOnly() ? 'Show All' : 'Show Selected' }}
          </button>
          @if (searchText() || showSelectedOnly()) {
            <span class="bulk-hint">{{ filteredApptTypes().length }} shown</span>
          }
        </div>

        <div class="appt-type-list">
          @for (appt of filteredApptTypes(); track appt.codeValue) {
            <label class="appt-type-item" [class.selected]="isSelected(appt.codeValue)">
              <input type="checkbox" [checked]="isSelected(appt.codeValue)" (change)="toggleApptType(appt.codeValue)" />
              {{ appt.display }}
            </label>
          }
        </div>
      }
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Auto-Refresh</h3>
      <p>How often the schedule reloads automatically when the window has focus. Set to 0 (or use the toggle) to disable.</p>
    </div>
    <div class="fusion-panel-body">
      <div class="refresh-interval-row">
        <label class="refresh-interval-label" for="refreshIntervalInput">Interval (seconds)</label>
        <input
          id="refreshIntervalInput"
          type="number"
          class="fusion-input refresh-interval-input"
          [min]="minRefreshInterval"
          [max]="maxRefreshInterval"
          step="1"
          [value]="refreshIntervalSeconds()"
          [disabled]="refreshIntervalSeconds() === 0"
          (input)="onRefreshIntervalInput($event)" />
        <button class="fusion-button fusion-outline fusion-small" (click)="toggleAutoRefresh()">
          {{ refreshIntervalSeconds() === 0 ? 'Enable' : 'Disable' }}
        </button>
        <span class="refresh-interval-hint">
          @if (refreshIntervalSeconds() === 0) {
            Auto-refresh disabled
          } @else {
            Allowed: {{ minRefreshInterval }}\u2013{{ maxRefreshInterval }}s
          }
        </span>
      </div>
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Chart Link Default Encounter</h3>
      <p>When an appointment has no encounter attached yet, the chart-open link falls back to the patient's most recent active encounter of this type. The appointment's encounter and encounter type stay blank \u2014 this only affects the chart link's target.</p>
    </div>
    <div class="fusion-panel-body">
      @if (!encntrTypesLoaded()) {
        <div class="loading-msg">Loading encounter types...</div>
      } @else {
        <div class="encntr-type-row">
          <label class="encntr-type-label" for="chartLinkEncntrType">Encounter type</label>
          <select
            id="chartLinkEncntrType"
            class="fusion-input encntr-type-select"
            [value]="chartLinkEncntrTypeCd()"
            (change)="onChartLinkEncntrTypeChange($event)"
          >
            <option [value]="0">\u2014 No fallback (link uses person only) \u2014</option>
            @for (et of allEncntrTypes(); track et.codeValue) {
              <option [value]="et.codeValue">{{ et.display }}</option>
            }
          </select>
        </div>
      }
    </div>
  </div>

  <div class="config-actions">
    <button class="fusion-button" [disabled]="!hasUnsavedChanges() || saving()" (click)="save()">Save</button>
    <button class="fusion-button fusion-outline" [disabled]="!hasUnsavedChanges()" (click)="discard()">Discard</button>
    @if (statusMessage()) {
      <span class="status-message">{{ statusMessage() }}</span>
    }
  </div>
</div>
`, styles: ["/* src/app/components/config/config.scss */\n.config-container {\n  padding: 1.5rem;\n  max-width: 800px;\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input {\n  flex: 1;\n}\n.selected-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item:last-child {\n  border-bottom: none;\n}\n.appt-type-item input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input {\n  width: 6rem;\n}\n.refresh-interval-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select {\n  min-width: 18rem;\n}\n/*# sourceMappingURL=config.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigComponent, { className: "ConfigComponent", filePath: "src/app/components/config/config.ts", lineNumber: 18 });
})();
export {
  ConfigComponent
};
//# sourceMappingURL=chunk-CB6D27RT.js.map
