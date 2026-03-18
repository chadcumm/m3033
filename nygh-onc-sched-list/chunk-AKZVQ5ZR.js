import {
  AccessControlService
} from "./chunk-ECQ5FKLM.js";
import {
  ALL_TABS
} from "./chunk-JVTJN3IF.js";
import {
  ChangeDetectionStrategy,
  CodeValueService,
  Component,
  ConfigurationService,
  MPageService,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KCAQQI63.js";

// src/app/components/security/security.ts
var _forTrack0 = ($index, $item) => $item.codeValue;
var _forTrack1 = ($index, $item) => $item.key;
function SecurityComponent_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pos_r3 = ctx.$implicit;
    \u0275\u0275domProperty("value", pos_r3.display);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r3.display);
  }
}
function SecurityComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "select", 9);
    \u0275\u0275domListener("change", function SecurityComponent_Conditional_7_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPositionSelect($event));
    });
    \u0275\u0275domElementStart(1, "option", 10);
    \u0275\u0275text(2, "Select position...");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, SecurityComponent_Conditional_7_For_4_Template, 2, 2, "option", 11, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 12);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPosition());
    });
    \u0275\u0275text(6, "Add");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.allPositions());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", !ctx_r1.newPosition());
  }
}
function SecurityComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1, "No positions configured. Add a position above to get started.");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_13_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r4.label);
  }
}
function SecurityComponent_Conditional_13_For_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 15)(1, "input", 18);
    \u0275\u0275domListener("change", function SecurityComponent_Conditional_13_For_13_For_6_Template_input_change_1_listener() {
      const tab_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const position_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTabAccess(position_r6, tab_r8.key));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const position_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r1.isSuperuser(position_r6) || ctx_r1.hasTabAccess(position_r6, tab_r8.key))("disabled", ctx_r1.isSuperuser(position_r6));
  }
}
function SecurityComponent_Conditional_13_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 15)(4, "input", 16);
    \u0275\u0275domListener("change", function SecurityComponent_Conditional_13_For_13_Template_input_change_4_listener() {
      const position_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSuperuser(position_r6));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(5, SecurityComponent_Conditional_13_For_13_For_6_Template, 2, 2, "td", 15, _forTrack1);
    \u0275\u0275domElementStart(7, "td")(8, "button", 17);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_13_For_13_Template_button_click_8_listener() {
      const position_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePosition(position_r6));
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const position_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(position_r6);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", ctx_r1.isSuperuser(position_r6));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tabs);
  }
}
function SecurityComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Position");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Superuser");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(8, SecurityComponent_Conditional_13_For_9_Template, 2, 1, "th", null, _forTrack1);
    \u0275\u0275domElement(10, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, SecurityComponent_Conditional_13_For_13_Template, 10, 2, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configuredPositions());
  }
}
var SecurityComponent = class _SecurityComponent {
  codeValueService = inject(CodeValueService);
  configService = inject(ConfigurationService);
  accessControl = inject(AccessControlService);
  mPage = inject(MPageService);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  positionsLoaded = signal(false, ...ngDevMode ? [{ debugName: "positionsLoaded" }] : []);
  newPosition = signal("", ...ngDevMode ? [{ debugName: "newPosition" }] : []);
  allPositions = signal([], ...ngDevMode ? [{ debugName: "allPositions" }] : []);
  editableConfig = signal(null, ...ngDevMode ? [{ debugName: "editableConfig" }] : []);
  tabs = ALL_TABS;
  configEffect = effect(() => {
    const config = this.configService.configuration()?.ACCESS_CONTROL;
    if (config) {
      this.editableConfig.set(JSON.parse(JSON.stringify(config)));
    }
  }, ...ngDevMode ? [{ debugName: "configEffect" }] : []);
  configuredPositions = computed(() => {
    const config = this.editableConfig();
    if (!config)
      return [];
    const positions = new Set(config.superusers);
    for (const tab of Object.values(config.tabs)) {
      for (const pos of tab.positions) {
        positions.add(pos);
      }
    }
    return Array.from(positions).sort();
  }, ...ngDevMode ? [{ debugName: "configuredPositions" }] : []);
  hasUnsavedChanges = computed(() => {
    const editable = this.editableConfig();
    const saved = this.configService.configuration()?.ACCESS_CONTROL;
    if (!editable || !saved)
      return editable !== null;
    return JSON.stringify(editable) !== JSON.stringify(saved);
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : []);
  ngOnInit() {
    const existing = this.codeValueService.getCodeSet(88);
    if (existing?.length) {
      this.applyPositions(existing);
    }
    this.codeValueService.load(88, 0, "", "", "", false, () => {
      this.applyPositions(this.codeValueService.getCodeSet(88));
    });
  }
  applyPositions(cvs) {
    const values = cvs.map((cv) => ({ codeValue: cv.codeValue, display: cv.display })).sort((a, b) => a.display.localeCompare(b.display));
    this.allPositions.set(values);
    this.positionsLoaded.set(true);
  }
  isSuperuser(position) {
    return this.editableConfig()?.superusers.includes(position) ?? false;
  }
  toggleSuperuser(position) {
    this.editableConfig.update((config) => {
      if (!config)
        return config;
      const updated = __spreadProps(__spreadValues({}, config), { superusers: [...config.superusers] });
      if (updated.superusers.includes(position)) {
        updated.superusers = updated.superusers.filter((p) => p !== position);
      } else {
        updated.superusers.push(position);
      }
      return updated;
    });
  }
  hasTabAccess(position, tabKey) {
    const config = this.editableConfig();
    return config?.tabs[tabKey]?.positions.includes(position) ?? false;
  }
  toggleTabAccess(position, tabKey) {
    this.editableConfig.update((config) => {
      if (!config)
        return config;
      const updated = __spreadProps(__spreadValues({}, config), { tabs: __spreadValues({}, config.tabs) });
      if (!updated.tabs[tabKey]) {
        const tabDef = ALL_TABS.find((t) => t.key === tabKey);
        updated.tabs[tabKey] = { label: tabDef?.label ?? tabKey, positions: [] };
      }
      const tab = __spreadProps(__spreadValues({}, updated.tabs[tabKey]), { positions: [...updated.tabs[tabKey].positions] });
      if (tab.positions.includes(position)) {
        tab.positions = tab.positions.filter((p) => p !== position);
      } else {
        tab.positions.push(position);
      }
      updated.tabs[tabKey] = tab;
      return updated;
    });
  }
  addPosition() {
    const pos = this.newPosition().trim();
    if (!pos)
      return;
    if (this.configuredPositions().includes(pos))
      return;
    this.editableConfig.update((config) => {
      if (!config)
        return config;
      const updated = __spreadProps(__spreadValues({}, config), { tabs: __spreadValues({}, config.tabs) });
      if (!updated.tabs["schedule"]) {
        updated.tabs["schedule"] = { label: "Schedule", positions: [pos] };
      } else {
        const tab = __spreadProps(__spreadValues({}, updated.tabs["schedule"]), { positions: [...updated.tabs["schedule"].positions, pos] });
        updated.tabs["schedule"] = tab;
      }
      return updated;
    });
    this.newPosition.set("");
  }
  removePosition(position) {
    this.editableConfig.update((config) => {
      if (!config)
        return config;
      const updated = {
        superusers: config.superusers.filter((p) => p !== position),
        tabs: __spreadValues({}, config.tabs)
      };
      for (const [key, tab] of Object.entries(updated.tabs)) {
        updated.tabs[key] = __spreadProps(__spreadValues({}, tab), { positions: tab.positions.filter((p) => p !== position) });
      }
      return updated;
    });
  }
  onPositionSelect(event) {
    this.newPosition.set(event.target.value);
  }
  save() {
    this.saving.set(true);
    const config = this.configService.configuration();
    const updated = __spreadProps(__spreadValues({}, config ?? { UPDT_DT_TM: "", APPOINTMENT_TYPES: [] }), {
      ACCESS_CONTROL: this.editableConfig() ?? void 0
    });
    this.configService.saveConfiguration(updated);
    this.saving.set(false);
    this.mPage.notifyUser("Security settings saved.", 3, "bottom", "20em", "primary");
  }
  discard() {
    const config = this.configService.configuration()?.ACCESS_CONTROL;
    this.editableConfig.set(config ? JSON.parse(JSON.stringify(config)) : { superusers: [], tabs: {} });
  }
  static \u0275fac = function SecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityComponent, selectors: [["app-security"]], decls: 19, vars: 4, consts: [[1, "security-container"], [1, "security-section"], [1, "add-position"], [1, "loading-msg"], [1, "empty-msg"], [1, "matrix-container"], [1, "security-actions"], [1, "save-btn", 3, "click", "disabled"], [1, "discard-btn", 3, "click", "disabled"], [3, "change"], ["value", ""], [3, "value"], [1, "add-btn", 3, "click", "disabled"], [1, "matrix-table"], [1, "position-name"], [1, "checkbox-cell"], ["type", "checkbox", 3, "change", "checked"], ["title", "Remove position", 1, "remove-btn", 3, "click"], ["type", "checkbox", 3, "change", "checked", "disabled"]], template: function SecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Security");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "section", 1)(4, "h3");
      \u0275\u0275text(5, "Add Position");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 2);
      \u0275\u0275conditionalCreate(7, SecurityComponent_Conditional_7_Template, 7, 1)(8, SecurityComponent_Conditional_8_Template, 2, 0, "span", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "section", 1)(10, "h3");
      \u0275\u0275text(11, "Position Access Matrix");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(12, SecurityComponent_Conditional_12_Template, 2, 0, "p", 4)(13, SecurityComponent_Conditional_13_Template, 14, 0, "div", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 6)(15, "button", 7);
      \u0275\u0275domListener("click", function SecurityComponent_Template_button_click_15_listener() {
        return ctx.save();
      });
      \u0275\u0275text(16, "Save");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 8);
      \u0275\u0275domListener("click", function SecurityComponent_Template_button_click_17_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(18, "Discard");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.positionsLoaded() ? 7 : 8);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.configuredPositions().length === 0 ? 12 : 13);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges());
    }
  }, styles: ["\n\n.security-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 900px;\n}\n.security-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 18px;\n}\n.security-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 15px;\n}\n.security-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.add-position[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.add-position[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 250px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.matrix-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.matrix-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  font-size: 13px;\n  width: 100%;\n}\n.matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  text-align: center;\n}\n.matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.matrix-table[_ngcontent-%COMP%]   .position-name[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.matrix-table[_ngcontent-%COMP%]   .checkbox-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc2626;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 2px 6px;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-radius: 4px;\n}\n.security-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #dee2e6;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.discard-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #555;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.discard-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.status-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.status-msg.success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.status-msg.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n}\n.empty-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  padding: 12px 0;\n}\n/*# sourceMappingURL=security.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityComponent, [{
    type: Component,
    args: [{ selector: "app-security", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="security-container">\n  <h2>Security</h2>\n\n  <section class="security-section">\n    <h3>Add Position</h3>\n    <div class="add-position">\n      @if (positionsLoaded()) {\n        <select (change)="onPositionSelect($event)">\n          <option value="">Select position...</option>\n          @for (pos of allPositions(); track pos.codeValue) {\n            <option [value]="pos.display">{{ pos.display }}</option>\n          }\n        </select>\n        <button class="add-btn" [disabled]="!newPosition()" (click)="addPosition()">Add</button>\n      } @else {\n        <span class="loading-msg">Loading positions...</span>\n      }\n    </div>\n  </section>\n\n  <section class="security-section">\n    <h3>Position Access Matrix</h3>\n    @if (configuredPositions().length === 0) {\n      <p class="empty-msg">No positions configured. Add a position above to get started.</p>\n    } @else {\n      <div class="matrix-container">\n        <table class="matrix-table">\n          <thead>\n            <tr>\n              <th>Position</th>\n              <th>Superuser</th>\n              @for (tab of tabs; track tab.key) {\n                <th>{{ tab.label }}</th>\n              }\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (position of configuredPositions(); track position) {\n              <tr>\n                <td class="position-name">{{ position }}</td>\n                <td class="checkbox-cell"><input type="checkbox" [checked]="isSuperuser(position)" (change)="toggleSuperuser(position)" /></td>\n                @for (tab of tabs; track tab.key) {\n                  <td class="checkbox-cell"><input type="checkbox" [checked]="isSuperuser(position) || hasTabAccess(position, tab.key)" [disabled]="isSuperuser(position)" (change)="toggleTabAccess(position, tab.key)" /></td>\n                }\n                <td><button class="remove-btn" (click)="removePosition(position)" title="Remove position">&times;</button></td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    }\n  </section>\n\n  <div class="security-actions">\n    <button class="save-btn" [disabled]="!hasUnsavedChanges() || saving()" (click)="save()">Save</button>\n    <button class="discard-btn" [disabled]="!hasUnsavedChanges()" (click)="discard()">Discard</button>\n  </div>\n</div>\n', styles: ["/* src/app/components/security/security.scss */\n.security-container {\n  padding: 24px;\n  max-width: 900px;\n}\n.security-container h2 {\n  margin: 0 0 16px;\n  font-size: 18px;\n}\n.security-container h3 {\n  margin: 0 0 8px;\n  font-size: 15px;\n}\n.security-section {\n  margin-bottom: 24px;\n}\n.add-position {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.add-position select {\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 250px;\n}\n.add-btn {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.matrix-container {\n  overflow-x: auto;\n}\n.matrix-table {\n  border-collapse: collapse;\n  font-size: 13px;\n  width: 100%;\n}\n.matrix-table th,\n.matrix-table td {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  text-align: center;\n}\n.matrix-table th {\n  background: #e9ecef;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.matrix-table .position-name {\n  text-align: left;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.matrix-table .checkbox-cell input {\n  cursor: pointer;\n}\n.matrix-table tbody tr:hover {\n  background: #f8f9fa;\n}\n.remove-btn {\n  background: none;\n  border: none;\n  color: #dc2626;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 2px 6px;\n}\n.remove-btn:hover {\n  background: #fee2e2;\n  border-radius: 4px;\n}\n.security-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #dee2e6;\n}\n.save-btn {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.save-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.save-btn:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.discard-btn {\n  background: #fff;\n  color: #555;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.discard-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.status-msg {\n  font-size: 12px;\n}\n.status-msg.success {\n  color: #16a34a;\n}\n.status-msg.error {\n  color: #dc2626;\n}\n.loading-msg {\n  font-size: 13px;\n  color: #888;\n}\n.empty-msg {\n  font-size: 13px;\n  color: #888;\n  padding: 12px 0;\n}\n/*# sourceMappingURL=security.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityComponent, { className: "SecurityComponent", filePath: "src/app/components/security/security.ts", lineNumber: 14 });
})();
export {
  SecurityComponent
};
//# sourceMappingURL=chunk-AKZVQ5ZR.js.map
