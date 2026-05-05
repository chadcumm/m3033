import {
  CodeValueService,
  ConfigurationService,
  DEFAULT_REFRESH_INTERVAL_SECONDS,
  MAX_REFRESH_INTERVAL_SECONDS,
  MIN_REFRESH_INTERVAL_SECONDS,
  MPageService
} from "./chunk-LFPAF37O.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-VLNXRP3P.js";

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
function ApptTypeGroupEditorComponent_Conditional_12_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("currently in ", ctx);
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 10)(1, "input", 11);
    \u0275\u0275domListener("change", function ApptTypeGroupEditorComponent_Conditional_12_For_3_Template_input_change_1_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePosition(p_r4.display));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, ApptTypeGroupEditorComponent_Conditional_12_For_3_Conditional_4_Template, 2, 1, "span", 13);
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
    \u0275\u0275conditional((tmp_14_0 = ctx_r0.positionOwnedByOtherGroup(p_r4.display)) ? 4 : -1, tmp_14_0);
  }
}
function ApptTypeGroupEditorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 7);
    \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Conditional_12_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPositionSearchInput($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(1, "div", 8);
    \u0275\u0275repeaterCreate(2, ApptTypeGroupEditorComponent_Conditional_12_For_3_Template, 5, 5, "label", 9, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r0.positionSearch());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredPositions());
  }
}
function ApptTypeGroupEditorComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading appointment types...");
    \u0275\u0275domElementEnd();
  }
}
function ApptTypeGroupEditorComponent_Conditional_18_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 10)(1, "input", 11);
    \u0275\u0275domListener("change", function ApptTypeGroupEditorComponent_Conditional_18_For_11_Template_input_change_1_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleApptType(a_r7.codeValue));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isApptTypeSelected(a_r7.codeValue));
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.isApptTypeSelected(a_r7.codeValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.display);
  }
}
function ApptTypeGroupEditorComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14)(1, "input", 15);
    \u0275\u0275domListener("input", function ApptTypeGroupEditorComponent_Conditional_18_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onApptTypeSearchInput($event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(2, "div", 16)(3, "button", 17);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkAllFilteredApptTypes());
    });
    \u0275\u0275text(4, "Check All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 17);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uncheckAllFilteredApptTypes());
    });
    \u0275\u0275text(6, "Uncheck All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 18);
    \u0275\u0275domListener("click", function ApptTypeGroupEditorComponent_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleShowSelectedApptTypes());
    });
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 8);
    \u0275\u0275repeaterCreate(10, ApptTypeGroupEditorComponent_Conditional_18_For_11_Template, 4, 4, "label", 9, _forTrack1);
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
    let list = this.allPositions;
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
  positionOwnedByOtherGroup(position) {
    const owner = this.otherGroups.find((g) => g.positions.includes(position));
    return owner ? owner.label : null;
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
  onPositionSearchInput(event) {
    this.positionSearch.set(event.target.value);
  }
  onApptTypeSearchInput(event) {
    this.apptTypeSearch.set(event.target.value);
  }
  static \u0275fac = function ApptTypeGroupEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApptTypeGroupEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApptTypeGroupEditorComponent, selectors: [["app-appt-type-group-editor"]], inputs: { group: "group", otherGroups: "otherGroups", allPositions: "allPositions", allApptTypes: "allApptTypes", apptTypesLoaded: "apptTypesLoaded", positionsLoaded: "positionsLoaded" }, outputs: { groupChange: "groupChange" }, decls: 19, vars: 6, consts: [[1, "editor-section"], ["for", "groupLabel", 1, "editor-label"], ["id", "groupLabel", "type", "text", "placeholder", "e.g. MD, Nurses, Pharmacy", "maxlength", "50", 1, "fusion-input", 3, "input", "value"], [1, "editor-error"], [1, "editor-section-header"], [1, "editor-hint"], [1, "loading-msg"], ["type", "text", "placeholder", "Search positions...", 1, "fusion-input", "search-input", 3, "input", "value"], [1, "checklist"], [1, "checklist-item", 3, "selected"], [1, "checklist-item"], ["type", "checkbox", 3, "change", "checked"], [1, "checklist-item-label"], [1, "checklist-item-note"], [1, "appt-type-controls"], ["type", "text", "placeholder", "Search appointment types...", 1, "fusion-input", "search-input", 3, "input", "value"], [1, "bulk-actions"], ["type", "button", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], ["type", "button", 1, "fusion-button", "fusion-small", 3, "click"]], template: function ApptTypeGroupEditorComponent_Template(rf, ctx) {
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
      \u0275\u0275text(10, "Adding a position here removes it from any other group it was in.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(11, ApptTypeGroupEditorComponent_Conditional_11_Template, 2, 0, "div", 6)(12, ApptTypeGroupEditorComponent_Conditional_12_Template, 4, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 0)(14, "div", 4)(15, "h4");
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(17, ApptTypeGroupEditorComponent_Conditional_17_Template, 2, 0, "div", 6)(18, ApptTypeGroupEditorComponent_Conditional_18_Template, 12, 4);
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
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Appointment Types (", ctx.group.appointment_types.length, ")");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.apptTypesLoaded ? 17 : 18);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.editor-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.editor-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.editor-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  margin-bottom: 0.25rem;\n}\n.editor-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-danger-text, #b00020);\n  margin-top: 0.25rem;\n}\n.editor-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.editor-section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--fusion-text);\n}\n.editor-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.checklist[_ngcontent-%COMP%] {\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.checklist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.checklist-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.checklist-item.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n}\n.checklist-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.checklist-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.checklist-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.checklist-item-note[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n  font-style: italic;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=appt-type-group-editor.css.map */"], changeDetection: 0 });
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
    <span class="editor-hint">Adding a position here removes it from any other group it was in.</span>
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
    <div class="checklist">
      @for (p of filteredPositions(); track p.display) {
        <label class="checklist-item" [class.selected]="isPositionSelected(p.display)">
          <input
            type="checkbox"
            [checked]="isPositionSelected(p.display)"
            (change)="togglePosition(p.display)"
          />
          <span class="checklist-item-label">{{ p.display }}</span>
          @if (positionOwnedByOtherGroup(p.display); as owner) {
            <span class="checklist-item-note">currently in {{ owner }}</span>
          }
        </label>
      }
    </div>
  }
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
`, styles: ["/* src/app/components/config/appt-type-group-editor/appt-type-group-editor.scss */\n:host {\n  display: block;\n}\n.editor-section {\n  margin-bottom: 1.25rem;\n}\n.editor-section:last-child {\n  margin-bottom: 0;\n}\n.editor-label {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  margin-bottom: 0.25rem;\n}\n.editor-error {\n  font-size: 0.75rem;\n  color: var(--fusion-danger-text, #b00020);\n  margin-top: 0.25rem;\n}\n.editor-section-header {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.editor-section-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--fusion-text);\n}\n.editor-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.search-input {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.checklist {\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.checklist-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.checklist-item:hover {\n  background: var(--fusion-bg-header);\n}\n.checklist-item.selected {\n  background: var(--fusion-bg-selected);\n}\n.checklist-item:last-child {\n  border-bottom: none;\n}\n.checklist-item input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.checklist-item-label {\n  flex: 1;\n}\n.checklist-item-note {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n  font-style: italic;\n}\n.loading-msg {\n  padding: 1rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=appt-type-group-editor.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApptTypeGroupEditorComponent, { className: "ApptTypeGroupEditorComponent", filePath: "src/app/components/config/appt-type-group-editor/appt-type-group-editor.ts", lineNumber: 28 });
})();

// src/app/components/config/config.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.codeValue;
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
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Conditional_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 31);
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
    \u0275\u0275elementStart(0, "button", 32);
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
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ConfigComponent_Conditional_11_For_1_Template_div_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGroup(g_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ConfigComponent_Conditional_11_For_1_Conditional_6_Template, 5, 0, "div", 28)(7, ConfigComponent_Conditional_11_For_1_Conditional_7_Template, 2, 0, "button", 29);
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
    \u0275\u0275repeaterCreate(0, ConfigComponent_Conditional_11_For_1_Template, 8, 8, "div", 23, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.groups());
  }
}
function ConfigComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-appt-type-group-editor", 33);
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
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const et_r8 = ctx.$implicit;
    \u0275\u0275property("value", et_r8.codeValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(et_r8.display);
  }
}
function ConfigComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 34);
    \u0275\u0275text(2, "Encounter type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 35);
    \u0275\u0275listener("change", function ConfigComponent_Conditional_41_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChartLinkEncntrTypeChange($event));
    });
    \u0275\u0275elementStart(4, "option", 36);
    \u0275\u0275text(5, "\u2014 No fallback (link uses person only) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ConfigComponent_Conditional_41_For_7_Template, 2, 2, "option", 36, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.chartLinkEncntrTypeCd());
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.allEncntrTypes());
  }
}
function ConfigComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusMessage());
  }
}
function ConfigComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "One or more groups have errors. Fix them to save.");
    \u0275\u0275elementEnd();
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
  hasUnsavedChanges = computed(() => {
    const config = this.configService.configuration();
    const persisted = config?.APPOINTMENT_TYPE_GROUPS ?? [];
    if (!this.groupsEqual(persisted, this.groups()))
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
    const persistedPositions = new Set(this.groups().find((g) => g.id === updated.id)?.positions ?? []);
    const addedPositions = updated.positions.filter((p) => !persistedPositions.has(p));
    this.groups.update((list) => list.map((g) => {
      if (g.id === updated.id)
        return updated;
      if (addedPositions.length === 0)
        return g;
      const stripped = g.positions.filter((p) => !addedPositions.includes(p));
      return stripped.length === g.positions.length ? g : __spreadProps(__spreadValues({}, g), { positions: stripped });
    }));
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
      CHART_LINK_ENCOUNTER_TYPE_CD: this.chartLinkEncntrTypeCd()
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
    this.pendingDeleteId.set(null);
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
      appointment_types: [...g.appointment_types]
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
    }
    return true;
  }
  arraysEqual(a, b) {
    if (a.length !== b.length)
      return false;
    const sa = [...a].sort();
    const sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigComponent, selectors: [["app-config"]], decls: 49, vars: 13, consts: [[1, "config-container"], [1, "fusion-panel"], [1, "fusion-panel-header"], [1, "fusion-panel-body"], [1, "groups-master-detail"], [1, "groups-list"], [1, "groups-list-empty"], ["type", "button", 1, "fusion-button", "fusion-outline", "new-group-btn", 3, "click"], [1, "group-editor"], [3, "group", "otherGroups", "allPositions", "allApptTypes", "apptTypesLoaded", "positionsLoaded"], [1, "group-editor-empty"], [1, "refresh-interval-row"], ["for", "refreshIntervalInput", 1, "refresh-interval-label"], ["id", "refreshIntervalInput", "type", "number", "step", "1", 1, "fusion-input", "refresh-interval-input", 3, "input", "min", "max", "value", "disabled"], ["type", "button", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "refresh-interval-hint"], [1, "loading-msg"], [1, "encntr-type-row"], [1, "config-actions"], ["type", "button", 1, "fusion-button", 3, "click", "disabled"], ["type", "button", 1, "fusion-button", "fusion-outline", 3, "click", "disabled"], [1, "status-message"], [1, "status-message", "status-error"], [1, "group-row", 3, "selected"], [1, "group-row", 3, "click"], [1, "group-row-main"], [1, "group-row-label"], [1, "group-row-meta"], [1, "group-row-delete-confirm"], ["type", "button", "aria-label", "Delete group", "title", "Delete group", 1, "group-row-delete"], [1, "group-row-delete-confirm", 3, "click"], ["type", "button", 1, "fusion-button", "fusion-danger", "fusion-small", 3, "click"], ["type", "button", "aria-label", "Delete group", "title", "Delete group", 1, "group-row-delete", 3, "click"], [3, "groupChange", "group", "otherGroups", "allPositions", "allApptTypes", "apptTypesLoaded", "positionsLoaded"], ["for", "chartLinkEncntrType", 1, "encntr-type-label"], ["id", "chartLinkEncntrType", 1, "fusion-input", "encntr-type-select", 3, "change", "value"], [3, "value"]], template: function ConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Appointment Type Groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Each group binds a set of positions to the appointment types that show on the schedule. A position can belong to one group at a time. Users whose position is not in any group cannot load the schedule.");
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
      \u0275\u0275elementStart(42, "div", 18)(43, "button", 19);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_43_listener() {
        return ctx.save();
      });
      \u0275\u0275text(44, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 20);
      \u0275\u0275listener("click", function ConfigComponent_Template_button_click_45_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(46, "Discard");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(47, ConfigComponent_Conditional_47_Template, 2, 1, "span", 21);
      \u0275\u0275conditionalCreate(48, ConfigComponent_Conditional_48_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
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
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges() || ctx.saving() || ctx.hasGroupErrors());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasGroupErrors() ? 48 : -1);
    }
  }, dependencies: [ApptTypeGroupEditorComponent], styles: ["\n\n.config-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.groups-master-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, 280px) 1fr;\n  gap: 1rem;\n  align-items: stretch;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 0.5rem;\n  background: var(--fusion-bg-header);\n  max-height: 540px;\n  overflow-y: auto;\n}\n.groups-list-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n  text-align: center;\n}\n.group-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 4px;\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid transparent;\n}\n.group-row[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n}\n.group-row.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-primary);\n}\n.group-row-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.group-row-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.group-row-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.group-row-delete[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1rem;\n  line-height: 1;\n  padding: 2px 6px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.group-row-delete[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-danger-text, #b00020);\n}\n.group-row-delete-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.new-group-btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  align-self: stretch;\n}\n.group-editor[_ngcontent-%COMP%] {\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 1rem;\n  min-height: 200px;\n}\n.group-editor-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  min-height: 180px;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.status-error[_ngcontent-%COMP%] {\n  color: var(--fusion-danger-text, #b00020);\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.appt-type-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.refresh-interval-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select[_ngcontent-%COMP%] {\n  min-width: 18rem;\n}\n/*# sourceMappingURL=config.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigComponent, [{
    type: Component,
    args: [{ selector: "app-config", standalone: true, imports: [ApptTypeGroupEditorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-container">
  <div class="fusion-panel">
    <div class="fusion-panel-header">
      <h3>Appointment Type Groups</h3>
      <p>Each group binds a set of positions to the appointment types that show on the schedule. A position can belong to one group at a time. Users whose position is not in any group cannot load the schedule.</p>
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
    <button class="fusion-button" type="button" [disabled]="!hasUnsavedChanges() || saving() || hasGroupErrors()" (click)="save()">Save</button>
    <button class="fusion-button fusion-outline" type="button" [disabled]="!hasUnsavedChanges()" (click)="discard()">Discard</button>
    @if (statusMessage()) {
      <span class="status-message">{{ statusMessage() }}</span>
    }
    @if (hasGroupErrors()) {
      <span class="status-message status-error">One or more groups have errors. Fix them to save.</span>
    }
  </div>
</div>
`, styles: ["/* src/app/components/config/config.scss */\n.config-container {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.groups-master-detail {\n  display: grid;\n  grid-template-columns: minmax(220px, 280px) 1fr;\n  gap: 1rem;\n  align-items: stretch;\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 0.5rem;\n  background: var(--fusion-bg-header);\n  max-height: 540px;\n  overflow-y: auto;\n}\n.groups-list-empty {\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n  text-align: center;\n}\n.group-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 4px;\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid transparent;\n}\n.group-row:hover {\n  background: var(--fusion-bg-selected);\n}\n.group-row.selected {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-primary);\n}\n.group-row-main {\n  flex: 1;\n  min-width: 0;\n}\n.group-row-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.group-row-meta {\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.group-row-delete {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1rem;\n  line-height: 1;\n  padding: 2px 6px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.group-row-delete:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-danger-text, #b00020);\n}\n.group-row-delete-confirm {\n  display: flex;\n  gap: 4px;\n}\n.new-group-btn {\n  margin-top: 0.5rem;\n  align-self: stretch;\n}\n.group-editor {\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n  padding: 1rem;\n  min-height: 200px;\n}\n.group-editor-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  min-height: 180px;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.status-error {\n  color: var(--fusion-danger-text, #b00020);\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.search-input {\n  flex: 1;\n}\n.selected-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  white-space: nowrap;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.bulk-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.appt-type-list {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid var(--fusion-border);\n  border-radius: var(--fusion-radius);\n}\n.appt-type-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: var(--fusion-text);\n}\n.appt-type-item:hover {\n  background: var(--fusion-bg-header);\n}\n.appt-type-item.selected {\n  background: var(--fusion-bg-selected);\n}\n.appt-type-item:last-child {\n  border-bottom: none;\n}\n.appt-type-item input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--fusion-primary);\n}\n.config-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--fusion-border);\n}\n.status-message {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n.loading-msg {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.refresh-interval-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.refresh-interval-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.refresh-interval-input {\n  width: 6rem;\n}\n.refresh-interval-hint {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.encntr-type-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.encntr-type-label {\n  font-size: 0.875rem;\n  color: var(--fusion-text);\n}\n.encntr-type-select {\n  min-width: 18rem;\n}\n/*# sourceMappingURL=config.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigComponent, { className: "ConfigComponent", filePath: "src/app/components/config/config.ts", lineNumber: 21 });
})();
export {
  ConfigComponent
};
//# sourceMappingURL=chunk-QRKEIUAT.js.map
