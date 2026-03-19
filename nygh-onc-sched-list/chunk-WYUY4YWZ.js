import {
  CodeValueService,
  ConfigurationService,
  MPageService
} from "./chunk-B6EEE5SK.js";
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
  ɵɵtextInterpolate1
} from "./chunk-372MDVVW.js";

// src/app/components/config/config.ts
var _forTrack0 = ($index, $item) => $item.codeValue;
function ConfigComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading appointment types...");
    \u0275\u0275domElementEnd();
  }
}
function ConfigComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
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
    \u0275\u0275domElementStart(0, "label", 15)(1, "input", 16);
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
    \u0275\u0275domElementStart(0, "div", 7)(1, "input", 8);
    \u0275\u0275domListener("input", function ConfigComponent_Conditional_9_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 10)(5, "button", 11);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkAllFiltered());
    });
    \u0275\u0275text(6, "Check All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 11);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uncheckAllFiltered());
    });
    \u0275\u0275text(8, "Uncheck All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 11);
    \u0275\u0275domListener("click", function ConfigComponent_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowSelected());
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ConfigComponent_Conditional_9_Conditional_11_Template, 2, 1, "span", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 13);
    \u0275\u0275repeaterCreate(13, ConfigComponent_Conditional_9_For_14_Template, 3, 4, "label", 14, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r1.searchText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedApptTypes().length, " selected");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.showSelectedOnly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showSelectedOnly() ? "Show All" : "Show Selected", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchText() || ctx_r1.showSelectedOnly() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredApptTypes());
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
  configEffect = effect(() => {
    const config = this.configService.configuration();
    if (config?.APPOINTMENT_TYPES) {
      this.selectedApptTypes.set([...config.APPOINTMENT_TYPES]);
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
    const current = this.configService.configuration()?.APPOINTMENT_TYPES ?? [];
    const edited = this.selectedApptTypes();
    if (current.length !== edited.length)
      return true;
    return !current.every((v) => edited.includes(v));
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const existing = this.codeValueService.getCodeSet(14230);
    if (existing?.length) {
      this.applyApptTypes(existing);
    }
    this.codeValueService.load(14230, 0, "", "", "", false, () => {
      this.applyApptTypes(this.codeValueService.getCodeSet(14230));
    });
  }
  applyApptTypes(codeValues) {
    const values = codeValues.map((cv) => ({ codeValue: cv.codeValue, display: cv.display }));
    values.sort((a, b) => a.display.localeCompare(b.display));
    this.allApptTypes.set(values);
    this.codeSetLoaded.set(true);
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
      APPOINTMENT_TYPES: this.selectedApptTypes()
    });
    this.configService.saveConfiguration(updated);
    this.saving.set(false);
    this.mPage.notifyUser("Configuration saved.", 3, "bottom", "20em", "primary");
  }
  discard() {
    const config = this.configService.configuration();
    this.selectedApptTypes.set([...config?.APPOINTMENT_TYPES ?? []]);
  }
  onSearchInput(event) {
    this.searchText.set(event.target.value);
  }
  static \u0275fac = function ConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigComponent, selectors: [["app-config"]], decls: 15, vars: 3, consts: [[1, "config-container"], [1, "config-section"], [1, "section-desc"], [1, "loading-msg"], [1, "config-actions"], [1, "save-btn", 3, "click", "disabled"], [1, "discard-btn", 3, "click", "disabled"], [1, "appt-type-controls"], ["type", "text", "placeholder", "Search appointment types...", 1, "search-input", 3, "input", "value"], [1, "selected-count"], [1, "bulk-actions"], [1, "bulk-btn", 3, "click"], [1, "bulk-hint"], [1, "appt-type-list"], [1, "appt-type-item", 3, "selected"], [1, "appt-type-item"], ["type", "checkbox", 3, "change", "checked"]], template: function ConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Configuration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "section", 1)(4, "h3");
      \u0275\u0275text(5, "Appointment Types");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 2);
      \u0275\u0275text(7, "Select which appointment types appear in the schedule. These come from code set 14230 (APPT_TYPE_CD).");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(8, ConfigComponent_Conditional_8_Template, 2, 0, "div", 3)(9, ConfigComponent_Conditional_9_Template, 15, 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 4)(11, "button", 5);
      \u0275\u0275domListener("click", function ConfigComponent_Template_button_click_11_listener() {
        return ctx.save();
      });
      \u0275\u0275text(12, "Save");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 6);
      \u0275\u0275domListener("click", function ConfigComponent_Template_button_click_13_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(14, "Discard");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.codeSetLoaded() ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges());
    }
  }, styles: ["\n\n.config-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n}\n.config-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 18px;\n}\n.config-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 15px;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 12px;\n}\n.config-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.appt-type-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  white-space: nowrap;\n}\n.bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.bulk-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #333;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.bulk-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.bulk-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.bulk-btn.active[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.bulk-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.appt-type-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n}\n.appt-type-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  font-size: 13px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.appt-type-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.appt-type-item.selected[_ngcontent-%COMP%] {\n  background: #e7f3ff;\n}\n.appt-type-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.appt-type-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #dee2e6;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.discard-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #555;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.discard-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #888;\n  font-size: 13px;\n}\n/*# sourceMappingURL=config.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigComponent, [{
    type: Component,
    args: [{ selector: "app-config", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-container">
  <h2>Configuration</h2>

  <section class="config-section">
    <h3>Appointment Types</h3>
    <p class="section-desc">Select which appointment types appear in the schedule. These come from code set 14230 (APPT_TYPE_CD).</p>

    @if (!codeSetLoaded()) {
      <div class="loading-msg">Loading appointment types...</div>
    } @else {
      <div class="appt-type-controls">
        <input type="text" class="search-input" placeholder="Search appointment types..." [value]="searchText()" (input)="onSearchInput($event)" />
        <span class="selected-count">{{ selectedApptTypes().length }} selected</span>
      </div>

      <div class="bulk-actions">
        <button class="bulk-btn" (click)="checkAllFiltered()">Check All</button>
        <button class="bulk-btn" (click)="uncheckAllFiltered()">Uncheck All</button>
        <button class="bulk-btn" [class.active]="showSelectedOnly()" (click)="toggleShowSelected()">
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
  </section>

  <div class="config-actions">
    <button class="save-btn" [disabled]="!hasUnsavedChanges() || saving()" (click)="save()">Save</button>
    <button class="discard-btn" [disabled]="!hasUnsavedChanges()" (click)="discard()">Discard</button>
  </div>
</div>
`, styles: ["/* src/app/components/config/config.scss */\n.config-container {\n  padding: 24px;\n  max-width: 800px;\n}\n.config-container h2 {\n  margin: 0 0 16px;\n  font-size: 18px;\n}\n.config-container h3 {\n  margin: 0 0 8px;\n  font-size: 15px;\n}\n.section-desc {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 12px;\n}\n.config-section {\n  margin-bottom: 24px;\n}\n.appt-type-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.search-input {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.selected-count {\n  font-size: 12px;\n  color: #888;\n  white-space: nowrap;\n}\n.bulk-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.bulk-btn {\n  background: #fff;\n  color: #333;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.bulk-btn:hover {\n  background: #f0f0f0;\n}\n.bulk-btn.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.bulk-btn.active:hover {\n  background: #1d4ed8;\n}\n.bulk-hint {\n  font-size: 12px;\n  color: #888;\n}\n.appt-type-list {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n}\n.appt-type-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  font-size: 13px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.appt-type-item:hover {\n  background: #f8f9fa;\n}\n.appt-type-item.selected {\n  background: #e7f3ff;\n}\n.appt-type-item:last-child {\n  border-bottom: none;\n}\n.appt-type-item input[type=checkbox] {\n  cursor: pointer;\n}\n.config-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #dee2e6;\n}\n.save-btn {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.save-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.save-btn:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.discard-btn {\n  background: #fff;\n  color: #555;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 16px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.discard-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.loading-msg {\n  padding: 20px;\n  color: #888;\n  font-size: 13px;\n}\n/*# sourceMappingURL=config.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigComponent, { className: "ConfigComponent", filePath: "src/app/components/config/config.ts", lineNumber: 13 });
})();
export {
  ConfigComponent
};
//# sourceMappingURL=chunk-WYUY4YWZ.js.map
