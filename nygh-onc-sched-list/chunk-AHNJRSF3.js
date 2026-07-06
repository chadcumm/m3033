import {
  buildVersion
} from "./chunk-S2B3FWLN.js";
import {
  COLUMN_DEFINITIONS,
  DEFAULT_APPT_STATE_MEANINGS,
  DEFAULT_LAB_LOOKBACK_HOURS,
  DEFAULT_REFRESH_INTERVAL_SECONDS,
  KNOWN_APPT_STATE_MEANINGS,
  MAX_LAB_LOOKBACK_HOURS,
  MAX_REFRESH_INTERVAL_SECONDS,
  MIN_LAB_LOOKBACK_HOURS,
  MIN_REFRESH_INTERVAL_SECONDS
} from "./chunk-AQNK5JSS.js";
import {
  CodeValueService,
  ConfigurationService,
  MPageService
} from "./chunk-UOIJNSGV.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-VK25UXFS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/components/config/appt-type-group-editor/appt-type-group-editor.ts
var _forTrack0 = ($index, $item) => $item.display;
var _forTrack1 = ($index, $item) => $item.codeValue;
function ApptTypeGroupEditorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.labelError());
  }
}
function ApptTypeGroupEditorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275domElementEnd();
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_For_10_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const owners_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("also in ", owners_r5.join(", "));
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApptTypeGroupEditorComponent_Conditional_12_For_10_Conditional_4_Conditional_0_Template, 2, 1, "span", 22);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : -1);
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 19)(1, "input", 20);
    \u0275\u0275domListener("change", function ApptTypeGroupEditorComponent_Conditional_12_For_10_Template_input_change_1_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePosition(p_r4.display));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, ApptTypeGroupEditorComponent_Conditional_12_For_10_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const p_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isPositionSelected(p_r4.display));
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.isPositionSelected(p_r4.display));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.display);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = ctx_r0.positionsOtherOwners(p_r4.display)) ? 4 : -1, tmp_14_0);
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 13);
    \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Conditional_12_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPositionSearchInput($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(1, "div", 14)(2, "button", 15);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkAllFilteredPositions());
    });
    \u0275\u0275text(3, "Check All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 15);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uncheckAllFilteredPositions());
    });
    \u0275\u0275text(5, "Uncheck All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 16);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleShowSelectedPositions());
    });
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 17);
    \u0275\u0275repeaterCreate(9, ApptTypeGroupEditorComponent_Conditional_12_For_10_Template, 5, 5, "label", 18, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r0.positionSearch());
    \u0275\u0275advance(6);
    \u0275\u0275classProp("fusion-outline", !ctx_r0.showSelectedPositionsOnly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showSelectedPositionsOnly() ? "Show All" : "Show Selected", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredPositions());
  }
}
function ApptTypeGroupEditorComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading appointment types...");
    \u0275\u0275domElementEnd();
  }
}
function ApptTypeGroupEditorComponent_Conditional_33_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 19)(1, "input", 20);
    \u0275\u0275domListener("change", function ApptTypeGroupEditorComponent_Conditional_33_For_11_Template_input_change_1_listener() {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleApptType(a_r8.codeValue));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isApptTypeSelected(a_r8.codeValue));
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.isApptTypeSelected(a_r8.codeValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.display);
  }
}
function ApptTypeGroupEditorComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 23)(1, "input", 24);
    \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Conditional_33_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onApptTypeSearchInput($event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(2, "div", 14)(3, "button", 15);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_33_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkAllFilteredApptTypes());
    });
    \u0275\u0275text(4, "Check All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 15);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uncheckAllFilteredApptTypes());
    });
    \u0275\u0275text(6, "Uncheck All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 16);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleShowSelectedApptTypes());
    });
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 17);
    \u0275\u0275repeaterCreate(10, ApptTypeGroupEditorComponent_Conditional_33_For_11_Template, 4, 4, "label", 18, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r0.apptTypeSearch());
    \u0275\u0275advance(6);
    \u0275\u0275classProp("fusion-outline", !ctx_r0.showSelectedApptTypesOnly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showSelectedApptTypesOnly() ? "Show All" : "Show Selected", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredApptTypes());
  }
}
var ApptTypeGroupEditorComponent = class _ApptTypeGroupEditorComponent {
  group;
  otherGroups = [];
  allPositions = [];
  allApptTypes = [];
  apptTypesLoaded = false;
  positionsLoaded = false;
  groupChange = new EventEmitter();
  positionSearch = signal("", ...ngDevMode ? [{ debugName: "positionSearch" }] : (
    /* istanbul ignore next */
    []
  ));
  showSelectedPositionsOnly = signal(false, ...ngDevMode ? [{ debugName: "showSelectedPositionsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  apptTypeSearch = signal("", ...ngDevMode ? [{ debugName: "apptTypeSearch" }] : (
    /* istanbul ignore next */
    []
  ));
  showSelectedApptTypesOnly = signal(false, ...ngDevMode ? [{ debugName: "showSelectedApptTypesOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredPositions = computed(() => {
    const search = this.positionSearch().toLowerCase();
    const showSelected = this.showSelectedPositionsOnly();
    const selected = this.group?.positions ?? [];
    let list = this.allPositions;
    if (showSelected)
      list = list.filter((p) => selected.includes(p.display));
    if (search)
      list = list.filter((p) => p.display.toLowerCase().includes(search));
    return list;
  }, ...ngDevMode ? [{ debugName: "filteredPositions" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredApptTypes = computed(() => {
    const search = this.apptTypeSearch().toLowerCase();
    const showSelected = this.showSelectedApptTypesOnly();
    const selected = this.group?.appointment_types ?? [];
    let list = this.allApptTypes;
    if (showSelected)
      list = list.filter((a) => selected.includes(a.codeValue));
    if (search)
      list = list.filter((a) => a.display.toLowerCase().includes(search));
    return list;
  }, ...ngDevMode ? [{ debugName: "filteredApptTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  labelError() {
    const label = this.group?.label?.trim() ?? "";
    if (!label)
      return "Label is required.";
    const dup = this.otherGroups.some((g) => g.id !== this.group.id && g.label.trim().toLowerCase() === label.toLowerCase());
    if (dup)
      return "A group with this label already exists.";
    return null;
  }
  onLabelInput(event) {
    const value = event.target.value;
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { label: value }));
  }
  isPositionSelected(position) {
    return this.group?.positions.includes(position) ?? false;
  }
  positionsOtherOwners(position) {
    return this.otherGroups.filter((g) => g.positions.includes(position)).map((g) => g.label);
  }
  togglePosition(position) {
    const positions = new Set(this.group.positions);
    if (positions.has(position)) {
      positions.delete(position);
    } else {
      positions.add(position);
    }
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { positions: [...positions] }));
  }
  checkAllFilteredPositions() {
    const filtered = this.filteredPositions().map((p) => p.display);
    const set = new Set(this.group.positions);
    for (const display of filtered)
      set.add(display);
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { positions: [...set] }));
  }
  uncheckAllFilteredPositions() {
    const filtered = new Set(this.filteredPositions().map((p) => p.display));
    const next = this.group.positions.filter((p) => !filtered.has(p));
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { positions: next }));
  }
  toggleShowSelectedPositions() {
    this.showSelectedPositionsOnly.update((v) => !v);
  }
  isApptTypeSelected(codeValue) {
    return this.group?.appointment_types.includes(codeValue) ?? false;
  }
  toggleApptType(codeValue) {
    const types = new Set(this.group.appointment_types);
    if (types.has(codeValue)) {
      types.delete(codeValue);
    } else {
      types.add(codeValue);
    }
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { appointment_types: [...types] }));
  }
  checkAllFilteredApptTypes() {
    const filtered = this.filteredApptTypes().map((a) => a.codeValue);
    const set = new Set(this.group.appointment_types);
    for (const code of filtered)
      set.add(code);
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { appointment_types: [...set] }));
  }
  uncheckAllFilteredApptTypes() {
    const filtered = new Set(this.filteredApptTypes().map((a) => a.codeValue));
    const next = this.group.appointment_types.filter((v) => !filtered.has(v));
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { appointment_types: next }));
  }
  toggleShowSelectedApptTypes() {
    this.showSelectedApptTypesOnly.update((v) => !v);
  }
  defaultLabLookback = DEFAULT_LAB_LOOKBACK_HOURS;
  minLabLookback = MIN_LAB_LOOKBACK_HOURS;
  maxLabLookback = MAX_LAB_LOOKBACK_HOURS;
  onLabEventSetInput(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), {
      lab_event_set_cd: Number.isFinite(parsed) && parsed > 0 ? parsed : void 0
    }));
  }
  onLabLookbackInput(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { lab_lookback_hours: void 0 }));
      return;
    }
    const clamped = Math.min(MAX_LAB_LOOKBACK_HOURS, Math.max(MIN_LAB_LOOKBACK_HOURS, parsed));
    this.groupChange.emit(__spreadProps(__spreadValues({}, this.group), { lab_lookback_hours: clamped }));
  }
  onPositionSearchInput(event) {
    this.positionSearch.set(event.target.value);
  }
  onApptTypeSearchInput(event) {
    this.apptTypeSearch.set(event.target.value);
  }
  static \u0275fac = function ApptTypeGroupEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApptTypeGroupEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApptTypeGroupEditorComponent, selectors: [["app-appt-type-group-editor"]], inputs: { group: "group", otherGroups: "otherGroups", allPositions: "allPositions", allApptTypes: "allApptTypes", apptTypesLoaded: "apptTypesLoaded", positionsLoaded: "positionsLoaded" }, outputs: { groupChange: "groupChange" }, decls: 34, vars: 14, consts: [[1, "editor-section"], ["for", "groupLabel", 1, "editor-label"], ["id", "groupLabel", "type", "text", "placeholder", "e.g. MD, Nurses, Pharmacy", "maxlength", "50", 1, "fusion-input", 3, "input", "value"], [1, "editor-error"], [1, "editor-section-header"], [1, "editor-hint"], [1, "loading-msg"], [1, "labs-row"], ["for", "labEventSetCd", 1, "labs-label"], ["id", "labEventSetCd", "type", "number", "min", "0", "step", "1", 1, "fusion-input", "labs-input", 3, "input", "value"], ["for", "labLookback", 1, "labs-label"], ["id", "labLookback", "type", "number", "step", "1", 1, "fusion-input", "labs-input", 3, "input", "min", "max", "placeholder", "value"], [1, "labs-hint"], ["type", "text", "placeholder", "Search positions...", 1, "fusion-input", "search-input", 3, "input", "value"], [1, "bulk-actions"], ["type", "button", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], ["type", "button", 1, "fusion-button", "fusion-small", 3, "click"], [1, "checklist"], [1, "checklist-item", 3, "selected"], [1, "checklist-item"], ["type", "checkbox", 3, "change", "checked"], [1, "checklist-item-label"], [1, "checklist-item-note"], [1, "appt-type-controls"], ["type", "text", "placeholder", "Search appointment types...", 1, "fusion-input", "search-input", 3, "input", "value"]], template: function ApptTypeGroupEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2, "Label");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "input", 2);
      \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Template_input_input_3_listener($event) {
        return ctx.onLabelInput($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, ApptTypeGroupEditorComponent_Conditional_4_Template, 2, 1, "div", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 0)(6, "div", 4)(7, "h4");
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 5);
      \u0275\u0275text(10, "A position can belong to multiple groups; users in multiple groups get a group picker on the schedule.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(11, ApptTypeGroupEditorComponent_Conditional_11_Template, 2, 0, "div", 6)(12, ApptTypeGroupEditorComponent_Conditional_12_Template, 11, 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 0)(14, "div", 4)(15, "h4");
      \u0275\u0275text(16, "Labs");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "span", 5);
      \u0275\u0275text(18, "Tied to a FirstNet tracking event set. Leave Event set CD blank to disable labs for this group.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 7)(20, "label", 8);
      \u0275\u0275text(21, "Event set CD");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "input", 9);
      \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Template_input_input_22_listener($event) {
        return ctx.onLabEventSetInput($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "label", 10);
      \u0275\u0275text(24, "Lookback (hours)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "input", 11);
      \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Template_input_input_25_listener($event) {
        return ctx.onLabLookbackInput($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "span", 12);
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(28, "div", 0)(29, "div", 4)(30, "h4");
      \u0275\u0275text(31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(32, ApptTypeGroupEditorComponent_Conditional_32_Template, 2, 0, "div", 6)(33, ApptTypeGroupEditorComponent_Conditional_33_Template, 12, 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("value", ctx.group.label);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.labelError() ? 4 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Positions (", ctx.group.positions.length, ")");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.positionsLoaded ? 11 : 12);
      \u0275\u0275advance(11);
      \u0275\u0275domProperty("value", ctx.group.lab_event_set_cd ?? "");
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("min", ctx.minLabLookback)("max", ctx.maxLabLookback)("placeholder", ctx.defaultLabLookback)("value", ctx.group.lab_lookback_hours ?? "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3("", ctx.minLabLookback, "\u2013", ctx.maxLabLookback, "h \xB7 default ", ctx.defaultLabLookback, "h");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Appointment Types (", ctx.group.appointment_types.length, ")");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.apptTypesLoaded ? 32 : 33);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.editor-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.editor-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.editor-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  margin-bottom: 0.25rem;\n}\n.editor-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-danger-text, #b00020);\n  margin-top: 0.25rem;\n}\n.editor-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.editor-section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--fusion-text);\n}\n.editor-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.checklist[_ngcontent-%COMP%] {\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.checklist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.checklist-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.checklist-item.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n}\n.checklist-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.checklist-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.checklist-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.checklist-item-note[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n  font-style: italic;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.labs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.labs-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.labs-input[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.labs-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n/*# sourceMappingURL=appt-type-group-editor.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApptTypeGroupEditorComponent, [{
    type: Component,
    args: [{ selector: "app-appt-type-group-editor", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="editor-section">
  <label class="editor-label" for="groupLabel">Label</label>
  <input
    id="groupLabel"
    type="text"
    class="fusion-input"
    [value]="group.label"
    (input)="onLabelInput($event)"
    placeholder="e.g. MD, Nurses, Pharmacy"
    maxlength="50"
  />
  @if (labelError()) {
    <div class="editor-error">{{ labelError() }}</div>
  }
</div>

<div class="editor-section">
  <div class="editor-section-header">
    <h4>Positions ({{ group.positions.length }})</h4>
    <span class="editor-hint">A position can belong to multiple groups; users in multiple groups get a group picker on the schedule.</span>
  </div>
  @if (!positionsLoaded) {
    <div class="loading-msg">Loading positions...</div>
  } @else {
    <input
      type="text"
      class="fusion-input search-input"
      placeholder="Search positions..."
      [value]="positionSearch()"
      (input)="onPositionSearchInput($event)"
    />
    <div class="bulk-actions">
      <button class="fusion-button fusion-outline fusion-small" type="button" (click)="checkAllFilteredPositions()">Check All</button>
      <button class="fusion-button fusion-outline fusion-small" type="button" (click)="uncheckAllFilteredPositions()">Uncheck All</button>
      <button
        class="fusion-button fusion-small"
        type="button"
        [class.fusion-outline]="!showSelectedPositionsOnly()"
        (click)="toggleShowSelectedPositions()"
      >
        {{ showSelectedPositionsOnly() ? 'Show All' : 'Show Selected' }}
      </button>
    </div>
    <div class="checklist">
      @for (p of filteredPositions(); track p.display) {
        <label class="checklist-item" [class.selected]="isPositionSelected(p.display)">
          <input
            type="checkbox"
            [checked]="isPositionSelected(p.display)"
            (change)="togglePosition(p.display)"
          />
          <span class="checklist-item-label">{{ p.display }}</span>
          @if (positionsOtherOwners(p.display); as owners) {
            @if (owners.length > 0) {
              <span class="checklist-item-note">also in {{ owners.join(', ') }}</span>
            }
          }
        </label>
      }
    </div>
  }
</div>

<div class="editor-section">
  <div class="editor-section-header">
    <h4>Labs</h4>
    <span class="editor-hint">Tied to a FirstNet tracking event set. Leave Event set CD blank to disable labs for this group.</span>
  </div>
  <div class="labs-row">
    <label class="labs-label" for="labEventSetCd">Event set CD</label>
    <input
      id="labEventSetCd"
      type="number"
      class="fusion-input labs-input"
      min="0"
      step="1"
      [value]="group.lab_event_set_cd ?? ''"
      (input)="onLabEventSetInput($event)"
    />
    <label class="labs-label" for="labLookback">Lookback (hours)</label>
    <input
      id="labLookback"
      type="number"
      class="fusion-input labs-input"
      [min]="minLabLookback"
      [max]="maxLabLookback"
      step="1"
      [placeholder]="defaultLabLookback"
      [value]="group.lab_lookback_hours ?? ''"
      (input)="onLabLookbackInput($event)"
    />
    <span class="labs-hint">{{ minLabLookback }}\u2013{{ maxLabLookback }}h \xB7 default {{ defaultLabLookback }}h</span>
  </div>
</div>

<div class="editor-section">
  <div class="editor-section-header">
    <h4>Appointment Types ({{ group.appointment_types.length }})</h4>
  </div>
  @if (!apptTypesLoaded) {
    <div class="loading-msg">Loading appointment types...</div>
  } @else {
    <div class="appt-type-controls">
      <input
        type="text"
        class="fusion-input search-input"
        placeholder="Search appointment types..."
        [value]="apptTypeSearch()"
        (input)="onApptTypeSearchInput($event)"
      />
    </div>
    <div class="bulk-actions">
      <button class="fusion-button fusion-outline fusion-small" type="button" (click)="checkAllFilteredApptTypes()">Check All</button>
      <button class="fusion-button fusion-outline fusion-small" type="button" (click)="uncheckAllFilteredApptTypes()">Uncheck All</button>
      <button
        class="fusion-button fusion-small"
        type="button"
        [class.fusion-outline]="!showSelectedApptTypesOnly()"
        (click)="toggleShowSelectedApptTypes()"
      >
        {{ showSelectedApptTypesOnly() ? 'Show All' : 'Show Selected' }}
      </button>
    </div>
    <div class="checklist">
      @for (a of filteredApptTypes(); track a.codeValue) {
        <label class="checklist-item" [class.selected]="isApptTypeSelected(a.codeValue)">
          <input
            type="checkbox"
            [checked]="isApptTypeSelected(a.codeValue)"
            (change)="toggleApptType(a.codeValue)"
          />
          <span class="checklist-item-label">{{ a.display }}</span>
        </label>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/components/config/appt-type-group-editor/appt-type-group-editor.scss */\n:host {\n  display: block;\n}\n.editor-section {\n  margin-bottom: 1.25rem;\n}\n.editor-section:last-child {\n  margin-bottom: 0;\n}\n.editor-label {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  margin-bottom: 0.25rem;\n}\n.editor-error {\n  font-size: 0.75rem;\n  color: var(--fusion-danger-text, #b00020);\n  margin-top: 0.25rem;\n}\n.editor-section-header {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.editor-section-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--fusion-text);\n}\n.editor-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.search-input {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.checklist {\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.checklist-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.checklist-item:hover {\n  background: var(--fusion-bg-header);\n}\n.checklist-item.selected {\n  background: var(--fusion-bg-selected);\n}\n.checklist-item:last-child {\n  border-bottom: none;\n}\n.checklist-item input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.checklist-item-label {\n  flex: 1;\n}\n.checklist-item-note {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n  font-style: italic;\n}\n.loading-msg {\n  padding: 1rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.labs-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.labs-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.labs-input {\n  width: 8rem;\n}\n.labs-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n/*# sourceMappingURL=appt-type-group-editor.css.map */\n"] }]
  }], null, { group: [{
    type: Input,
    args: [{ required: true }]
  }], otherGroups: [{
    type: Input
  }], allPositions: [{
    type: Input
  }], allApptTypes: [{
    type: Input
  }], apptTypesLoaded: [{
    type: Input
  }], positionsLoaded: [{
    type: Input
  }], groupChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApptTypeGroupEditorComponent, { className: "ApptTypeGroupEditorComponent", filePath: "src/app/components/config/appt-type-group-editor/appt-type-group-editor.ts", lineNumber: 33 });
})();

// src/app/components/config/config.ts
var _forTrack02 = ($index, $item) => $item.codeValue;
var _forTrack12 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.display;
var _forTrack3 = ($index, $item) => $item.key;
function ConfigComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "No groups yet.");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_11_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Conditional_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const g_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(g_r2.id));
    });
    \u0275\u0275text(2, "Confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function ConfigComponent_Conditional_11_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const g_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.requestDelete(g_r2.id));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Template_div_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGroup(g_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ConfigComponent_Conditional_11_For_1_Conditional_6_Template, 5, 0, "div", 32)(7, ConfigComponent_Conditional_11_For_1_Conditional_7_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedGroupId() === g_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r2.label || "(unnamed)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", g_r2.positions.length, " position", g_r2.positions.length === 1 ? "" : "s", " \xB7 ", g_r2.appointment_types.length, " appt type", g_r2.appointment_types.length === 1 ? "" : "s", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pendingDeleteId() === g_r2.id ? 6 : 7);
  }
}
function ConfigComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfigComponent_Conditional_11_For_1_Template, 8, 8, "div", 27, _forTrack12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.groups());
  }
}
function ConfigComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-appt-type-group-editor", 37);
    \u0275\u0275listener("groupChange", function ConfigComponent_Conditional_15_Template_app_appt_type_group_editor_groupChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGroupChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("group", ctx)("otherGroups", ctx_r2.otherGroups())("allPositions", ctx_r2.allPositions())("allApptTypes", ctx_r2.allApptTypes())("apptTypesLoaded", ctx_r2.apptTypesLoaded())("positionsLoaded", ctx_r2.positionsLoaded());
  }
}
function ConfigComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Select a group to edit, or create a new one.");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Auto-refresh disabled ");
  }
}
function ConfigComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" Allowed: ", ctx_r2.minRefreshInterval, "\u2013", ctx_r2.maxRefreshInterval, "s ");
  }
}
function ConfigComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Loading encounter types...");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_41_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const et_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", et_r8.codeValue)("selected", ctx_r2.chartLinkEncntrTypeCd() === et_r8.codeValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(et_r8.display);
  }
}
function ConfigComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 38);
    \u0275\u0275text(2, "Encounter type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 39);
    \u0275\u0275listener("change", function ConfigComponent_Conditional_41_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChartLinkEncntrTypeChange($event));
    });
    \u0275\u0275elementStart(4, "option", 40);
    \u0275\u0275text(5, "\u2014 No fallback (link uses person only) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ConfigComponent_Conditional_41_For_7_Template, 2, 3, "option", 40, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", 0)("selected", ctx_r2.chartLinkEncntrTypeCd() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.allEncntrTypes());
  }
}
function ConfigComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "No rules yet.");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_52_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_52_For_1_Conditional_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_52_For_1_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const rule_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteRule(rule_r10.id));
    });
    \u0275\u0275text(2, "Confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_52_For_1_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelDeleteRule());
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function ConfigComponent_Conditional_52_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_52_For_1_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const rule_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.requestDeleteRule(rule_r10.id));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_Conditional_52_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_52_For_1_Template_div_click_0_listener() {
      const rule_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRule(rule_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ConfigComponent_Conditional_52_For_1_Conditional_6_Template, 5, 0, "div", 32)(7, ConfigComponent_Conditional_52_For_1_Conditional_7_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r10 = ctx.$implicit;
    const \u0275$index_140_r13 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedRuleId() === rule_r10.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.ruleDisplayLabel(rule_r10, \u0275$index_140_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.ruleSummary(rule_r10));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pendingDeleteRuleId() === rule_r10.id ? 6 : 7);
  }
}
function ConfigComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfigComponent_Conditional_52_For_1_Template, 8, 5, "div", 27, _forTrack12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.columnRoleDefaults());
  }
}
function ConfigComponent_Conditional_56_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.allPositions().length, " positions (", ctx_r2.filteredPositions().length, " shown) ");
  }
}
function ConfigComponent_Conditional_56_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 50);
    \u0275\u0275listener("change", function ConfigComponent_Conditional_56_For_12_Template_input_change_1_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRulePosition(p_r16.display));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const rule_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", rule_r17.positions.includes(p_r16.display));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r16.display, " ");
  }
}
function ConfigComponent_Conditional_56_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 50);
    \u0275\u0275listener("change", function ConfigComponent_Conditional_56_For_18_Template_input_change_1_listener() {
      const col_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRuleColumn(col_r19.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    const rule_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", rule_r17.hidden_columns.includes(col_r19.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r19.header, " ");
  }
}
function ConfigComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "label", 44);
    \u0275\u0275text(2, "Rule name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 45);
    \u0275\u0275listener("input", function ConfigComponent_Conditional_56_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRuleLabelInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 46)(5, "strong");
    \u0275\u0275text(6, "Positions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47)(8, "input", 48);
    \u0275\u0275listener("input", function ConfigComponent_Conditional_56_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRuleFilterInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ConfigComponent_Conditional_56_Conditional_9_Template, 2, 2, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275repeaterCreate(11, ConfigComponent_Conditional_56_For_12_Template, 3, 2, "label", null, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 46)(14, "strong");
    \u0275\u0275text(15, "Hidden columns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 19);
    \u0275\u0275repeaterCreate(17, ConfigComponent_Conditional_56_For_18_Template, 3, 2, "label", null, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.label ?? "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.ruleFilter());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ruleFilter().trim() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filteredPositions());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.allColumnDefs);
  }
}
function ConfigComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Select a rule to edit, or create a new one.");
    \u0275\u0275elementEnd();
  }
}
function ConfigComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 51);
    \u0275\u0275listener("change", function ConfigComponent_For_67_Template_input_change_1_listener() {
      const m_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStateMeaning(m_r21));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.apptStateMeanings().includes(m_r21))("disabled", ctx_r2.apptStateMeanings().length === 1 && ctx_r2.apptStateMeanings().includes(m_r21));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r21, " ");
  }
}
function ConfigComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 50);
    \u0275\u0275listener("change", function ConfigComponent_For_85_Template_input_change_1_listener() {
      const t_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleActiveEncntrType(t_r23.codeValue));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.activeEncntrTypeCds().includes(t_r23.codeValue));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r23.display, " ");
  }
}
function ConfigComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusMessage());
  }
}
function ConfigComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "One or more groups have errors. Fix them to save.");
    \u0275\u0275elementEnd();
  }
}
var ConfigComponent = class _ConfigComponent {
  codeValueService = inject(CodeValueService);
  configService = inject(ConfigurationService);
  mPage = inject(MPageService);
  buildVersion = buildVersion;
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  apptTypesLoaded = signal(false, ...ngDevMode ? [{ debugName: "apptTypesLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  positionsLoaded = signal(false, ...ngDevMode ? [{ debugName: "positionsLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  encntrTypesLoaded = signal(false, ...ngDevMode ? [{ debugName: "encntrTypesLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  statusMessage = signal(null, ...ngDevMode ? [{ debugName: "statusMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  statusTimer = null;
  allApptTypes = signal([], ...ngDevMode ? [{ debugName: "allApptTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  allPositions = signal([], ...ngDevMode ? [{ debugName: "allPositions" }] : (
    /* istanbul ignore next */
    []
  ));
  allEncntrTypes = signal([], ...ngDevMode ? [{ debugName: "allEncntrTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  groups = signal([], ...ngDevMode ? [{ debugName: "groups" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGroupId = signal(null, ...ngDevMode ? [{ debugName: "selectedGroupId" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingDeleteId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteId" }] : (
    /* istanbul ignore next */
    []
  ));
  refreshIntervalSeconds = signal(DEFAULT_REFRESH_INTERVAL_SECONDS, ...ngDevMode ? [{ debugName: "refreshIntervalSeconds" }] : (
    /* istanbul ignore next */
    []
  ));
  minRefreshInterval = MIN_REFRESH_INTERVAL_SECONDS;
  maxRefreshInterval = MAX_REFRESH_INTERVAL_SECONDS;
  chartLinkEncntrTypeCd = signal(0, ...ngDevMode ? [{ debugName: "chartLinkEncntrTypeCd" }] : (
    /* istanbul ignore next */
    []
  ));
  columnRoleDefaults = signal([], ...ngDevMode ? [{ debugName: "columnRoleDefaults" }] : (
    /* istanbul ignore next */
    []
  ));
  allColumnDefs = COLUMN_DEFINITIONS.filter((c) => c.key !== "actions");
  apptStateMeanings = signal([...DEFAULT_APPT_STATE_MEANINGS], ...ngDevMode ? [{ debugName: "apptStateMeanings" }] : (
    /* istanbul ignore next */
    []
  ));
  chairResourceNamePattern = signal("", ...ngDevMode ? [{ debugName: "chairResourceNamePattern" }] : (
    /* istanbul ignore next */
    []
  ));
  activeEncntrTypeCds = signal([], ...ngDevMode ? [{ debugName: "activeEncntrTypeCds" }] : (
    /* istanbul ignore next */
    []
  ));
  knownStateMeanings = KNOWN_APPT_STATE_MEANINGS;
  selectedRuleId = signal(null, ...ngDevMode ? [{ debugName: "selectedRuleId" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingDeleteRuleId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteRuleId" }] : (
    /* istanbul ignore next */
    []
  ));
  ruleFilter = signal("", ...ngDevMode ? [{ debugName: "ruleFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  configEffect = effect(() => {
    const config = this.configService.configuration();
    if (!config)
      return;
    untracked(() => {
      const next = (config.APPOINTMENT_TYPE_GROUPS ?? []).map((g) => this.cloneGroup(g));
      this.groups.set(next);
      const ids = next.map((g) => g.id);
      const currentSelection = this.selectedGroupId();
      if (currentSelection === null && ids.length > 0) {
        this.selectedGroupId.set(ids[0]);
      } else if (currentSelection && !ids.includes(currentSelection)) {
        this.selectedGroupId.set(ids[0] ?? null);
      }
      const stored = config.REFRESH_INTERVAL_SECONDS;
      this.refreshIntervalSeconds.set(typeof stored === "number" && Number.isFinite(stored) ? stored : DEFAULT_REFRESH_INTERVAL_SECONDS);
      this.chartLinkEncntrTypeCd.set(config.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0);
      const rules = (config.COLUMN_ROLE_DEFAULTS ?? []).map((r) => this.cloneRule(r));
      this.columnRoleDefaults.set(rules);
      const ruleIds = rules.map((r) => r.id);
      const currentRuleSelection = this.selectedRuleId();
      if (currentRuleSelection === null && ruleIds.length > 0) {
        this.selectedRuleId.set(ruleIds[0]);
      } else if (currentRuleSelection && !ruleIds.includes(currentRuleSelection)) {
        this.selectedRuleId.set(ruleIds[0] ?? null);
      }
      this.apptStateMeanings.set(config.APPT_STATE_MEANINGS?.length ? [...config.APPT_STATE_MEANINGS] : [...DEFAULT_APPT_STATE_MEANINGS]);
      this.chairResourceNamePattern.set(config.CHAIR_RESOURCE_NAME_PATTERN ?? "");
      this.activeEncntrTypeCds.set([...config.ACTIVE_ENCNTR_TYPE_CDS ?? []]);
    });
  }, ...ngDevMode ? [{ debugName: "configEffect" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGroup = computed(() => {
    const id = this.selectedGroupId();
    if (!id)
      return null;
    return this.groups().find((g) => g.id === id) ?? null;
  }, ...ngDevMode ? [{ debugName: "selectedGroup" }] : (
    /* istanbul ignore next */
    []
  ));
  otherGroups = computed(() => {
    const id = this.selectedGroupId();
    return this.groups().filter((g) => g.id !== id);
  }, ...ngDevMode ? [{ debugName: "otherGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedRule = computed(() => {
    const id = this.selectedRuleId();
    if (!id)
      return null;
    return this.columnRoleDefaults().find((r) => r.id === id) ?? null;
  }, ...ngDevMode ? [{ debugName: "selectedRule" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredPositions = computed(() => {
    const filter = this.ruleFilter().trim().toLowerCase();
    const positions = this.allPositions();
    if (!filter)
      return positions;
    return positions.filter((p) => p.display.toLowerCase().includes(filter));
  }, ...ngDevMode ? [{ debugName: "filteredPositions" }] : (
    /* istanbul ignore next */
    []
  ));
  hasUnsavedChanges = computed(() => {
    const config = this.configService.configuration();
    const persisted = config?.APPOINTMENT_TYPE_GROUPS ?? [];
    if (!this.groupsEqual(persisted, this.groups()))
      return true;
    const storedInterval = typeof config?.REFRESH_INTERVAL_SECONDS === "number" ? config.REFRESH_INTERVAL_SECONDS : DEFAULT_REFRESH_INTERVAL_SECONDS;
    if (storedInterval !== this.refreshIntervalSeconds())
      return true;
    const storedEncntrTypeCd = config?.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0;
    if (storedEncntrTypeCd !== this.chartLinkEncntrTypeCd())
      return true;
    const storedRules = config?.COLUMN_ROLE_DEFAULTS ?? [];
    if (!this.columnRuleDefaultsEqual(storedRules, this.columnRoleDefaults()))
      return true;
    const storedStates = config?.APPT_STATE_MEANINGS?.length ? config.APPT_STATE_MEANINGS : DEFAULT_APPT_STATE_MEANINGS;
    if (!this.arraysEqual(storedStates, this.apptStateMeanings()))
      return true;
    if ((config?.CHAIR_RESOURCE_NAME_PATTERN ?? "") !== this.chairResourceNamePattern().trim())
      return true;
    if (!this.numbersEqual(config?.ACTIVE_ENCNTR_TYPE_CDS ?? [], this.activeEncntrTypeCds()))
      return true;
    return false;
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  hasGroupErrors = computed(() => {
    const all = this.groups();
    return all.some((g) => {
      const label = g.label.trim();
      if (!label)
        return true;
      return all.some((other) => other.id !== g.id && other.label.trim().toLowerCase() === label.toLowerCase());
    });
  }, ...ngDevMode ? [{ debugName: "hasGroupErrors" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const existingAppt = this.codeValueService.getCodeSet(14230);
    if (existingAppt?.length)
      this.applyApptTypes(existingAppt);
    this.codeValueService.load(14230, 0, "", "", "", false, () => {
      this.applyApptTypes(this.codeValueService.getCodeSet(14230));
    });
    const existingPositions = this.codeValueService.getCodeSet(88);
    if (existingPositions?.length)
      this.applyPositions(existingPositions);
    this.codeValueService.load(88, 0, "", "", "", false, () => {
      this.applyPositions(this.codeValueService.getCodeSet(88));
    });
    const existingEncntr = this.codeValueService.getCodeSet(71);
    if (existingEncntr?.length)
      this.applyEncntrTypes(existingEncntr);
    this.codeValueService.load(71, 0, "", "", "", false, () => {
      this.applyEncntrTypes(this.codeValueService.getCodeSet(71));
    });
  }
  applyApptTypes(codeValues) {
    const values = codeValues.map((cv) => ({ codeValue: cv.codeValue, display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allApptTypes.set(values);
    this.apptTypesLoaded.set(true);
  }
  applyPositions(codeValues) {
    const values = codeValues.map((cv) => ({ display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allPositions.set(values);
    this.positionsLoaded.set(true);
  }
  applyEncntrTypes(codeValues) {
    const values = codeValues.map((cv) => ({ codeValue: cv.codeValue, display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allEncntrTypes.set(values);
    this.encntrTypesLoaded.set(true);
  }
  selectGroup(id) {
    this.selectedGroupId.set(id);
    this.pendingDeleteId.set(null);
  }
  newGroup() {
    const baseLabel = "New group";
    const existing = new Set(this.groups().map((g) => g.label.trim().toLowerCase()));
    let label = baseLabel;
    let n = 2;
    while (existing.has(label.toLowerCase())) {
      label = `${baseLabel} (${n})`;
      n += 1;
    }
    const id = this.makeId();
    const group = { id, label, positions: [], appointment_types: [] };
    this.groups.update((list) => [...list, group]);
    this.selectedGroupId.set(id);
  }
  requestDelete(id) {
    this.pendingDeleteId.set(id);
  }
  cancelDelete() {
    this.pendingDeleteId.set(null);
  }
  confirmDelete(id) {
    this.groups.update((list) => list.filter((g) => g.id !== id));
    if (this.selectedGroupId() === id) {
      this.selectedGroupId.set(this.groups()[0]?.id ?? null);
    }
    this.pendingDeleteId.set(null);
  }
  onGroupChange(updated) {
    this.groups.update((list) => list.map((g) => g.id === updated.id ? updated : g));
  }
  save() {
    if (this.hasGroupErrors()) {
      this.showStatus("Fix group errors before saving.");
      return;
    }
    this.saving.set(true);
    const config = this.configService.configuration();
    const updated = __spreadProps(__spreadValues({}, config ?? { UPDT_DT_TM: "", APPOINTMENT_TYPE_GROUPS: [] }), {
      APPOINTMENT_TYPE_GROUPS: this.groups().map((g) => __spreadProps(__spreadValues({}, g), {
        label: g.label.trim()
      })),
      REFRESH_INTERVAL_SECONDS: this.refreshIntervalSeconds(),
      CHART_LINK_ENCOUNTER_TYPE_CD: this.chartLinkEncntrTypeCd(),
      COLUMN_ROLE_DEFAULTS: this.columnRoleDefaults().map((r) => __spreadProps(__spreadValues({}, r), { label: (r.label ?? "").trim() })),
      APPT_STATE_MEANINGS: this.apptStateMeanings(),
      CHAIR_RESOURCE_NAME_PATTERN: this.chairResourceNamePattern().trim(),
      ACTIVE_ENCNTR_TYPE_CDS: this.activeEncntrTypeCds()
    });
    this.configService.saveConfiguration(updated);
    this.saving.set(false);
    this.showStatus("Configuration saved.");
  }
  discard() {
    const config = this.configService.configuration();
    this.groups.set([...(config?.APPOINTMENT_TYPE_GROUPS ?? []).map((g) => this.cloneGroup(g))]);
    if (!this.groups().find((g) => g.id === this.selectedGroupId())) {
      this.selectedGroupId.set(this.groups()[0]?.id ?? null);
    }
    const stored = config?.REFRESH_INTERVAL_SECONDS;
    this.refreshIntervalSeconds.set(typeof stored === "number" && Number.isFinite(stored) ? stored : DEFAULT_REFRESH_INTERVAL_SECONDS);
    this.chartLinkEncntrTypeCd.set(config?.CHART_LINK_ENCOUNTER_TYPE_CD ?? 0);
    this.columnRoleDefaults.set((config?.COLUMN_ROLE_DEFAULTS ?? []).map((r) => this.cloneRule(r)));
    if (!this.columnRoleDefaults().find((r) => r.id === this.selectedRuleId())) {
      this.selectedRuleId.set(this.columnRoleDefaults()[0]?.id ?? null);
    }
    this.apptStateMeanings.set(config?.APPT_STATE_MEANINGS?.length ? [...config.APPT_STATE_MEANINGS] : [...DEFAULT_APPT_STATE_MEANINGS]);
    this.chairResourceNamePattern.set(config?.CHAIR_RESOURCE_NAME_PATTERN ?? "");
    this.activeEncntrTypeCds.set([...config?.ACTIVE_ENCNTR_TYPE_CDS ?? []]);
    this.pendingDeleteId.set(null);
    this.pendingDeleteRuleId.set(null);
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
  ruleDisplayLabel(rule, index) {
    const label = (rule.label ?? "").trim();
    if (label)
      return label;
    if (rule.positions.length > 0) {
      const extra = rule.positions.length - 1;
      return extra > 0 ? `${rule.positions[0]} (+${extra} more)` : rule.positions[0];
    }
    return `Rule ${index + 1}`;
  }
  ruleSummary(rule) {
    return `${rule.positions.length} position${rule.positions.length === 1 ? "" : "s"} \xB7 ${rule.hidden_columns.length} hidden column${rule.hidden_columns.length === 1 ? "" : "s"}`;
  }
  selectRule(id) {
    this.selectedRuleId.set(id);
    this.pendingDeleteRuleId.set(null);
    this.ruleFilter.set("");
  }
  newRule() {
    const baseLabel = "New rule";
    const existing = new Set(this.columnRoleDefaults().map((r) => (r.label ?? "").trim().toLowerCase()));
    let label = baseLabel;
    let n = 2;
    while (existing.has(label.toLowerCase())) {
      label = `${baseLabel} (${n})`;
      n += 1;
    }
    const id = this.makeId();
    const rule = { id, label, positions: [], hidden_columns: [] };
    this.columnRoleDefaults.update((rules) => [...rules, rule]);
    this.selectedRuleId.set(id);
    this.pendingDeleteRuleId.set(null);
    this.ruleFilter.set("");
  }
  requestDeleteRule(id) {
    this.pendingDeleteRuleId.set(id);
  }
  cancelDeleteRule() {
    this.pendingDeleteRuleId.set(null);
  }
  confirmDeleteRule(id) {
    this.columnRoleDefaults.update((rules) => rules.filter((r) => r.id !== id));
    if (this.selectedRuleId() === id) {
      this.selectedRuleId.set(this.columnRoleDefaults()[0]?.id ?? null);
    }
    this.pendingDeleteRuleId.set(null);
  }
  onRuleLabelInput(event) {
    const id = this.selectedRuleId();
    if (!id)
      return;
    const value = event.target.value;
    this.columnRoleDefaults.update((rules) => rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { label: value }) : r));
  }
  onRuleFilterInput(event) {
    const value = event.target.value;
    this.ruleFilter.set(value);
  }
  toggleRulePosition(position) {
    const id = this.selectedRuleId();
    if (!id)
      return;
    this.columnRoleDefaults.update((rules) => rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { positions: r.positions.includes(position) ? r.positions.filter((p) => p !== position) : [...r.positions, position] }) : r));
  }
  toggleRuleColumn(key) {
    const id = this.selectedRuleId();
    if (!id)
      return;
    this.columnRoleDefaults.update((rules) => rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { hidden_columns: r.hidden_columns.includes(key) ? r.hidden_columns.filter((c) => c !== key) : [...r.hidden_columns, key] }) : r));
  }
  showStatus(message) {
    if (this.statusTimer)
      clearTimeout(this.statusTimer);
    this.statusMessage.set(message);
    this.statusTimer = setTimeout(() => this.statusMessage.set(null), 4e3);
  }
  clampInterval(value) {
    if (value <= 0)
      return 0;
    return Math.min(MAX_REFRESH_INTERVAL_SECONDS, Math.max(MIN_REFRESH_INTERVAL_SECONDS, Math.floor(value)));
  }
  cloneGroup(g) {
    return {
      id: g.id,
      label: g.label,
      positions: [...g.positions],
      appointment_types: [...g.appointment_types],
      lab_event_set_cd: g.lab_event_set_cd,
      lab_lookback_hours: g.lab_lookback_hours
    };
  }
  groupsEqual(a, b) {
    if (a.length !== b.length)
      return false;
    const byId = new Map(b.map((g) => [g.id, g]));
    for (const ag of a) {
      const bg = byId.get(ag.id);
      if (!bg)
        return false;
      if (ag.label !== bg.label)
        return false;
      if (!this.arraysEqual(ag.positions, bg.positions))
        return false;
      if (!this.arraysEqual(ag.appointment_types.map(String), bg.appointment_types.map(String))) {
        return false;
      }
      if ((ag.lab_event_set_cd ?? 0) !== (bg.lab_event_set_cd ?? 0))
        return false;
      if ((ag.lab_lookback_hours ?? 0) !== (bg.lab_lookback_hours ?? 0))
        return false;
    }
    return true;
  }
  columnRuleDefaultsEqual(a, b) {
    if (a.length !== b.length)
      return false;
    return a.every((rule, i) => (rule.label ?? "").trim() === (b[i].label ?? "").trim() && this.arraysEqual(rule.positions, b[i].positions) && this.arraysEqual(rule.hidden_columns, b[i].hidden_columns));
  }
  cloneRule(r) {
    return {
      id: r.id ?? this.makeId(),
      label: r.label ?? "",
      positions: [...r.positions],
      hidden_columns: [...r.hidden_columns]
    };
  }
  arraysEqual(a, b) {
    if (a.length !== b.length)
      return false;
    const sa = [...a].sort();
    const sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }
  numbersEqual(a, b) {
    if (a.length !== b.length)
      return false;
    const sa = [...a].sort((x, y) => x - y);
    const sb = [...b].sort((x, y) => x - y);
    return sa.every((v, i) => v === sb[i]);
  }
  toggleStateMeaning(meaning) {
    this.apptStateMeanings.update((list) => list.includes(meaning) ? list.filter((m) => m !== meaning) : [...list, meaning]);
  }
  toggleActiveEncntrType(codeValue) {
    this.activeEncntrTypeCds.update((list) => list.includes(codeValue) ? list.filter((c) => c !== codeValue) : [...list, codeValue]);
  }
  onChairPatternInput(event) {
    this.chairResourceNamePattern.set(event.target.value);
  }
  makeId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `grp-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
  static \u0275fac = function ConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigComponent, selectors: [["app-config"]], decls: 95, vars: 17, consts: [[1, "config-container"], [1, "fusion-panel"], [1, "fusion-panel-header"], [1, "fusion-panel-body"], [1, "groups-master-detail"], [1, "groups-list"], [1, "groups-list-empty"], ["type", "button", 1, "fusion-button", "fusion-outline", "new-group-btn", 3, "click"], [1, "group-editor"], [3, "group", "otherGroups", "allPositions", "allApptTypes", "apptTypesLoaded", "positionsLoaded"], [1, "group-editor-empty"], [1, "refresh-interval-row"], ["for", "refreshIntervalInput", 1, "refresh-interval-label"], ["id", "refreshIntervalInput", "type", "number", "step", "1", 1, "fusion-input", "refresh-interval-input", 3, "input", "min", "max", "value", "disabled"], ["type", "button", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "refresh-interval-hint"], [1, "loading-msg"], [1, "encntr-type-row"], [1, "panel-help"], [1, "checkbox-grid"], ["type", "text", "placeholder", "Chair", 1, "fusion-input", 3, "input", "value"], [1, "config-actions"], ["type", "button", 1, "fusion-button", 3, "click", "disabled"], ["type", "button", 1, "fusion-button", "fusion-outline", 3, "click", "disabled"], [1, "status-message"], [1, "status-message", "status-error"], [1, "config-version"], [1, "group-row", 3, "selected"], [1, "group-row", 3, "click"], [1, "group-row-main"], [1, "group-row-label"], [1, "group-row-meta"], [1, "group-row-delete-confirm"], ["type", "button", "aria-label", "Delete group", "title", "Delete group", 1, "group-row-delete"], [1, "group-row-delete-confirm", 3, "click"], ["type", "button", 1, "fusion-button", "fusion-danger", "fusion-small", 3, "click"], ["type", "button", "aria-label", "Delete group", "title", "Delete group", 1, "group-row-delete", 3, "click"], [3, "groupChange", "group", "otherGroups", "allPositions", "allApptTypes", "apptTypesLoaded", "positionsLoaded"], ["for", "chartLinkEncntrType", 1, "encntr-type-label"], ["id", "chartLinkEncntrType", 1, "fusion-input", "encntr-type-select", 3, "change"], [3, "value", "selected"], ["type", "button", "aria-label", "Delete rule", "title", "Delete rule", 1, "group-row-delete"], ["type", "button", "aria-label", "Delete rule", "title", "Delete rule", 1, "group-row-delete", 3, "click"], [1, "rule-name-row"], ["for", "ruleLabelInput", 1, "rule-name-label"], ["id", "ruleLabelInput", "type", "text", 1, "fusion-input", "rule-name-input", 3, "input", "value"], [1, "column-rule-section"], [1, "rule-filter-row"], ["type", "text", "placeholder", "Filter positions...", 1, "fusion-input", "rule-filter-input", 3, "input", "value"], [1, "selected-count"], ["type", "checkbox", 3, "change", "checked"], ["type", "checkbox", 3, "change", "checked", "disabled"]], template: function ConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Appointment Type Groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Each group binds a set of positions to the appointment types that show on the schedule. A position can belong to multiple groups; users in multiple groups get a group picker on the schedule. Users whose position is not in any group cannot load the schedule.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275conditionalCreate(10, ConfigComponent_Conditional_10_Template, 2, 0, "div", 6)(11, ConfigComponent_Conditional_11_Template, 2, 0);
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_12_listener() {
        return ctx.newGroup();
      });
      \u0275\u0275text(13, "+ New group");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275conditionalCreate(15, ConfigComponent_Conditional_15_Template, 1, 6, "app-appt-type-group-editor", 9)(16, ConfigComponent_Conditional_16_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 1)(18, "div", 2)(19, "h3");
      \u0275\u0275text(20, "Auto-Refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "How often the schedule reloads automatically when the window has focus. Set to 0 (or use the toggle) to disable.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 3)(24, "div", 11)(25, "label", 12);
      \u0275\u0275text(26, "Interval (seconds)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 13);
      \u0275\u0275listener("input", function ConfigComponent_Template_input_input_27_listener($event) {
        return ctx.onRefreshIntervalInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 14);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_28_listener() {
        return ctx.toggleAutoRefresh();
      });
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 15);
      \u0275\u0275conditionalCreate(31, ConfigComponent_Conditional_31_Template, 1, 0)(32, ConfigComponent_Conditional_32_Template, 1, 2);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 1)(34, "div", 2)(35, "h3");
      \u0275\u0275text(36, "Chart Link Default Encounter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "When an appointment has no encounter attached yet, the chart-open link falls back to the patient's most recent active encounter of this type. The appointment's encounter and encounter type stay blank \u2014 this only affects the chart link's target.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 3);
      \u0275\u0275conditionalCreate(40, ConfigComponent_Conditional_40_Template, 2, 0, "div", 16)(41, ConfigComponent_Conditional_41_Template, 8, 2, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 1)(43, "div", 2)(44, "h3");
      \u0275\u0275text(45, "Default Hidden Columns by Position");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 3)(47, "p", 18);
      \u0275\u0275text(48, " Columns listed in a rule start hidden for users whose position matches. Users can still show/hide columns themselves from the schedule's Columns menu; their own choice always wins. Select a rule on the left to edit it. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 4)(50, "div", 5);
      \u0275\u0275conditionalCreate(51, ConfigComponent_Conditional_51_Template, 2, 0, "div", 6)(52, ConfigComponent_Conditional_52_Template, 2, 0);
      \u0275\u0275elementStart(53, "button", 7);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_53_listener() {
        return ctx.newRule();
      });
      \u0275\u0275text(54, "+ New rule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 8);
      \u0275\u0275conditionalCreate(56, ConfigComponent_Conditional_56_Template, 19, 3)(57, ConfigComponent_Conditional_57_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 1)(59, "div", 2)(60, "h3");
      \u0275\u0275text(61, "Appointment States Shown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 3)(63, "p", 18);
      \u0275\u0275text(64, " Only appointments in these scheduling states appear on the list. The default (Confirmed, Checked In, Checked Out, Scheduled, Rescheduled) excludes canceled and no-show entries. At least one state must be selected. Each appointment is one row: with Rescheduled selected, a moved appointment shows in its most recent vacated slot with a Rescheduled badge; unselect Rescheduled to show the live booking instead. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 19);
      \u0275\u0275repeaterCreate(66, ConfigComponent_For_67_Template, 3, 3, "label", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 1)(69, "div", 2)(70, "h3");
      \u0275\u0275text(71, "Chair Resource Name Pattern");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 3)(73, "p", 18);
      \u0275\u0275text(74, ' Resources whose name contains this text (case-insensitive, spaces ignored) are treated as chairs and shown beside the appointment type. Leave blank to use the default pattern "Chair". NYGH chairs have no resource typing, so matching is by name (see scripts/ccl/diagnostics). ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 20);
      \u0275\u0275listener("input", function ConfigComponent_Template_input_input_75_listener($event) {
        return ctx.onChairPatternInput($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 1)(77, "div", 2)(78, "h3");
      \u0275\u0275text(79, "Inpatient/ED Indicator Encounter Types");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 3)(81, "p", 18);
      \u0275\u0275text(82, " Patients with an active (not discharged) encounter of one of these types show an indicator beside their name. Leave all unchecked to use the Cerner defaults (Inpatient and Emergency). ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 19);
      \u0275\u0275repeaterCreate(84, ConfigComponent_For_85_Template, 3, 2, "label", null, _forTrack02);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 21)(87, "button", 22);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_87_listener() {
        return ctx.save();
      });
      \u0275\u0275text(88, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 23);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_89_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(90, "Discard");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(91, ConfigComponent_Conditional_91_Template, 2, 1, "span", 24);
      \u0275\u0275conditionalCreate(92, ConfigComponent_Conditional_92_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 26);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_10_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.groups().length === 0 ? 10 : 11);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_1_0 = ctx.selectedGroup()) ? 15 : 16, tmp_1_0);
      \u0275\u0275advance(12);
      \u0275\u0275property("min", ctx.minRefreshInterval)("max", ctx.maxRefreshInterval)("value", ctx.refreshIntervalSeconds())("disabled", ctx.refreshIntervalSeconds() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.refreshIntervalSeconds() === 0 ? "Enable" : "Disable", " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.refreshIntervalSeconds() === 0 ? 31 : 32);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.encntrTypesLoaded() ? 40 : 41);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.columnRoleDefaults().length === 0 ? 51 : 52);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_10_0 = ctx.selectedRule()) ? 56 : 57, tmp_10_0);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.knownStateMeanings);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.chairResourceNamePattern());
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.allEncntrTypes());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges() || ctx.saving() || ctx.hasGroupErrors());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 91 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasGroupErrors() ? 92 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buildVersion);
    }
  }, dependencies: [ApptTypeGroupEditorComponent], styles: ["\n\n.config-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.status-error[_ngcontent-%COMP%] {\n  color: var(--fusion-danger-text, #b00020);\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.appt-type-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.refresh-interval-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select[_ngcontent-%COMP%] {\n  min-width: 18rem;\n}\n.column-rule-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 4px 12px;\n  margin-top: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 8px;\n}\n.checkbox-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  min-width: 0;\n  overflow-wrap: break-word;\n}\n.rule-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 4px;\n}\n.rule-filter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 320px;\n}\n.rule-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 10px;\n}\n.rule-name-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.rule-name-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 320px;\n}\n.panel-help[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--fusion-text-light);\n  font-size: 0.9em;\n}\n.config-version[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  text-align: center;\n}\n/*# sourceMappingURL=config.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigComponent, [{
    type: Component,
    args: [{ selector: "app-config", standalone: true, imports: [ApptTypeGroupEditorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-container">
  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Appointment Type Groups</h3>
      <p>Each group binds a set of positions to the appointment types that show on the schedule. A position can belong to multiple groups; users in multiple groups get a group picker on the schedule. Users whose position is not in any group cannot load the schedule.</p>
    </div>
    <div class="fusion-panel-body">
      <div class="groups-master-detail">
        <div class="groups-list">
          @if (groups().length === 0) {
            <div class="groups-list-empty">No groups yet.</div>
          } @else {
            @for (g of groups(); track g.id) {
              <div
                class="group-row"
                [class.selected]="selectedGroupId() === g.id"
                (click)="selectGroup(g.id)"
              >
                <div class="group-row-main">
                  <div class="group-row-label">{{ g.label || '(unnamed)' }}</div>
                  <div class="group-row-meta">
                    {{ g.positions.length }} position{{ g.positions.length === 1 ? '' : 's' }}
                    \xB7 {{ g.appointment_types.length }} appt type{{ g.appointment_types.length === 1 ? '' : 's' }}
                  </div>
                </div>
                @if (pendingDeleteId() === g.id) {
                  <div class="group-row-delete-confirm" (click)="$event.stopPropagation()">
                    <button class="fusion-button fusion-danger fusion-small" type="button" (click)="confirmDelete(g.id)">Confirm</button>
                    <button class="fusion-button fusion-outline fusion-small" type="button" (click)="cancelDelete()">Cancel</button>
                  </div>
                } @else {
                  <button
                    class="group-row-delete"
                    type="button"
                    aria-label="Delete group"
                    title="Delete group"
                    (click)="$event.stopPropagation(); requestDelete(g.id)"
                  >&times;</button>
                }
              </div>
            }
          }
          <button class="fusion-button fusion-outline new-group-btn" type="button" (click)="newGroup()">+ New group</button>
        </div>
        <div class="group-editor">
          @if (selectedGroup(); as g) {
            <app-appt-type-group-editor
              [group]="g"
              [otherGroups]="otherGroups()"
              [allPositions]="allPositions()"
              [allApptTypes]="allApptTypes()"
              [apptTypesLoaded]="apptTypesLoaded()"
              [positionsLoaded]="positionsLoaded()"
              (groupChange)="onGroupChange($event)"
            ></app-appt-type-group-editor>
          } @else {
            <div class="group-editor-empty">Select a group to edit, or create a new one.</div>
          }
        </div>
      </div>
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
        <button class="fusion-button fusion-outline fusion-small" type="button" (click)="toggleAutoRefresh()">
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
            (change)="onChartLinkEncntrTypeChange($event)"
          >
            <option [value]="0" [selected]="chartLinkEncntrTypeCd() === 0">\u2014 No fallback (link uses person only) \u2014</option>
            @for (et of allEncntrTypes(); track et.codeValue) {
              <option [value]="et.codeValue" [selected]="chartLinkEncntrTypeCd() === et.codeValue">{{ et.display }}</option>
            }
          </select>
        </div>
      }
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Default Hidden Columns by Position</h3>
    </div>
    <div class="fusion-panel-body">
      <p class="panel-help">
        Columns listed in a rule start hidden for users whose position matches.
        Users can still show/hide columns themselves from the schedule's Columns menu;
        their own choice always wins. Select a rule on the left to edit it.
      </p>
      <div class="groups-master-detail">
        <div class="groups-list">
          @if (columnRoleDefaults().length === 0) {
            <div class="groups-list-empty">No rules yet.</div>
          } @else {
            @for (rule of columnRoleDefaults(); track rule.id; let ri = $index) {
              <div
                class="group-row"
                [class.selected]="selectedRuleId() === rule.id"
                (click)="selectRule(rule.id!)"
              >
                <div class="group-row-main">
                  <div class="group-row-label">{{ ruleDisplayLabel(rule, ri) }}</div>
                  <div class="group-row-meta">{{ ruleSummary(rule) }}</div>
                </div>
                @if (pendingDeleteRuleId() === rule.id) {
                  <div class="group-row-delete-confirm" (click)="$event.stopPropagation()">
                    <button class="fusion-button fusion-danger fusion-small" type="button" (click)="confirmDeleteRule(rule.id!)">Confirm</button>
                    <button class="fusion-button fusion-outline fusion-small" type="button" (click)="cancelDeleteRule()">Cancel</button>
                  </div>
                } @else {
                  <button
                    class="group-row-delete"
                    type="button"
                    aria-label="Delete rule"
                    title="Delete rule"
                    (click)="$event.stopPropagation(); requestDeleteRule(rule.id!)"
                  >&times;</button>
                }
              </div>
            }
          }
          <button class="fusion-button fusion-outline new-group-btn" type="button" (click)="newRule()">+ New rule</button>
        </div>
        <div class="group-editor">
          @if (selectedRule(); as rule) {
            <div class="rule-name-row">
              <label class="rule-name-label" for="ruleLabelInput">Rule name</label>
              <input id="ruleLabelInput" class="fusion-input rule-name-input" type="text"
                [value]="rule.label ?? ''" (input)="onRuleLabelInput($event)" />
            </div>
            <div class="column-rule-section">
              <strong>Positions</strong>
              <div class="rule-filter-row">
                <input class="fusion-input rule-filter-input" type="text" placeholder="Filter positions..."
                  [value]="ruleFilter()" (input)="onRuleFilterInput($event)" />
                @if (ruleFilter().trim()) {
                  <span class="selected-count">
                    {{ allPositions().length }} positions ({{ filteredPositions().length }} shown)
                  </span>
                }
              </div>
              <div class="checkbox-grid">
                @for (p of filteredPositions(); track p.display) {
                  <label>
                    <input type="checkbox" [checked]="rule.positions.includes(p.display)"
                      (change)="toggleRulePosition(p.display)" />
                    {{ p.display }}
                  </label>
                }
              </div>
            </div>
            <div class="column-rule-section">
              <strong>Hidden columns</strong>
              <div class="checkbox-grid">
                @for (col of allColumnDefs; track col.key) {
                  <label>
                    <input type="checkbox" [checked]="rule.hidden_columns.includes(col.key)"
                      (change)="toggleRuleColumn(col.key)" />
                    {{ col.header }}
                  </label>
                }
              </div>
            </div>
          } @else {
            <div class="group-editor-empty">Select a rule to edit, or create a new one.</div>
          }
        </div>
      </div>
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header"><h3>Appointment States Shown</h3></div>
    <div class="fusion-panel-body">
      <p class="panel-help">
        Only appointments in these scheduling states appear on the list. The default
        (Confirmed, Checked In, Checked Out, Scheduled, Rescheduled) excludes canceled
        and no-show entries. At least one state must be selected. Each appointment is
        one row: with Rescheduled selected, a moved appointment shows in its most recent
        vacated slot with a Rescheduled badge; unselect Rescheduled to show the live
        booking instead.
      </p>
      <div class="checkbox-grid">
        @for (m of knownStateMeanings; track m) {
          <label>
            <input type="checkbox" [checked]="apptStateMeanings().includes(m)"
              [disabled]="apptStateMeanings().length === 1 && apptStateMeanings().includes(m)"
              (change)="toggleStateMeaning(m)" />
            {{ m }}
          </label>
        }
      </div>
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header"><h3>Chair Resource Name Pattern</h3></div>
    <div class="fusion-panel-body">
      <p class="panel-help">
        Resources whose name contains this text (case-insensitive, spaces ignored) are treated as chairs
        and shown beside the appointment type. Leave blank to use the default pattern "Chair".
        NYGH chairs have no resource typing, so matching is by name (see scripts/ccl/diagnostics).
      </p>
      <input class="fusion-input" type="text" placeholder="Chair"
        [value]="chairResourceNamePattern()" (input)="onChairPatternInput($event)" />
    </div>
  </div>

  <div class="fusion-panel">
    <div class="fusion-panel-header"><h3>Inpatient/ED Indicator Encounter Types</h3></div>
    <div class="fusion-panel-body">
      <p class="panel-help">
        Patients with an active (not discharged) encounter of one of these types show an
        indicator beside their name. Leave all unchecked to use the Cerner defaults
        (Inpatient and Emergency).
      </p>
      <div class="checkbox-grid">
        @for (t of allEncntrTypes(); track t.codeValue) {
          <label>
            <input type="checkbox" [checked]="activeEncntrTypeCds().includes(t.codeValue)"
              (change)="toggleActiveEncntrType(t.codeValue)" />
            {{ t.display }}
          </label>
        }
      </div>
    </div>
  </div>

  <div class="config-actions">
    <button class="fusion-button" type="button" [disabled]="!hasUnsavedChanges() || saving() || hasGroupErrors()" (click)="save()">Save</button>
    <button class="fusion-button fusion-outline" type="button" [disabled]="!hasUnsavedChanges()" (click)="discard()">Discard</button>
    @if (statusMessage()) {
      <span class="status-message">{{ statusMessage() }}</span>
    }
    @if (hasGroupErrors()) {
      <span class="status-message status-error">One or more groups have errors. Fix them to save.</span>
    }
  </div>

  <div class="config-version">{{ buildVersion }}</div>
</div>
`, styles: ["/* src/app/components/config/config.scss */\n.config-container {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.status-error {\n  color: var(--fusion-danger-text, #b00020);\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input {\n  flex: 1;\n}\n.selected-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item:last-child {\n  border-bottom: none;\n}\n.appt-type-item input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input {\n  width: 6rem;\n}\n.refresh-interval-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select {\n  min-width: 18rem;\n}\n.column-rule-section {\n  margin-bottom: 8px;\n}\n.checkbox-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 4px 12px;\n  margin-top: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 8px;\n}\n.checkbox-grid label {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  min-width: 0;\n  overflow-wrap: break-word;\n}\n.rule-filter-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 4px;\n}\n.rule-filter-input {\n  flex: 1;\n  max-width: 320px;\n}\n.rule-name-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 10px;\n}\n.rule-name-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.rule-name-input {\n  flex: 1;\n  max-width: 320px;\n}\n.panel-help {\n  margin: 0 0 10px;\n  color: var(--fusion-text-light);\n  font-size: 0.9em;\n}\n.config-version {\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  text-align: center;\n}\n/*# sourceMappingURL=config.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigComponent, { className: "ConfigComponent", filePath: "src/app/components/config/config.ts", lineNumber: 26 });
})();
export {
  ConfigComponent
};
//# sourceMappingURL=chunk-AHNJRSF3.js.map
