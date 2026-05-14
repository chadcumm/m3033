import {
  PreferencesService,
  ScheduleService
} from "./chunk-T5JDAADX.js";
import {
  AccessControlService
} from "./chunk-HKPZ6QWA.js";
import {
  COLUMN_DEFINITIONS,
  ConfigurationService,
  MPageService,
  SUPERUSER_OVERRIDE_ALL,
  openChart
} from "./chunk-3XCD2TKZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VLNXRP3P.js";

// src/app/components/labs-modal/labs-modal.ts
var _forTrack0 = ($index, $item) => $item.event_id;
function LabsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Showing results from the last ", ctx_r0.lookbackHours, " hours");
  }
}
function LabsModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1, "No results in the configured window.");
    \u0275\u0275domElementEnd();
  }
}
function LabsModalComponent_Conditional_11_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const lab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lab_r2.result_units);
  }
}
function LabsModalComponent_Conditional_11_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td")(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, LabsModalComponent_Conditional_11_For_15_Conditional_8_Template, 2, 1, "span", 10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const lab_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r2.event_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r2.event_dt_tm);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.normalcyClass(lab_r2.normalcy));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lab_r2.result_value);
    \u0275\u0275advance();
    \u0275\u0275conditional(lab_r2.result_units ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r2.result_status || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r2.performed_by || "\u2014");
  }
}
function LabsModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 8)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Result");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "User");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, LabsModalComponent_Conditional_11_For_15_Template, 13, 8, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.labs);
  }
}
var LabsModalComponent = class _LabsModalComponent {
  patientName;
  labs = [];
  lookbackHours = null;
  close = new EventEmitter();
  onBackdropClick() {
    this.close.emit();
  }
  onDialogClick(event) {
    event.stopPropagation();
  }
  onEscape() {
    this.close.emit();
  }
  normalcyClass(normalcy) {
    const n = (normalcy ?? "").toLowerCase();
    if (n.includes("critical"))
      return "normalcy-critical";
    if (n.includes("abnormal") || n.includes("high") || n.includes("low"))
      return "normalcy-abnormal";
    return "";
  }
  static \u0275fac = function LabsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabsModalComponent, selectors: [["app-labs-modal"]], hostBindings: function LabsModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function LabsModalComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { patientName: "patientName", labs: "labs", lookbackHours: "lookbackHours" }, outputs: { close: "close" }, decls: 12, vars: 3, consts: [[1, "labs-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "labsModalTitle", 1, "labs-modal-dialog", 3, "click"], [1, "labs-modal-header"], ["id", "labsModalTitle"], [1, "labs-modal-subtitle"], ["type", "button", "aria-label", "Close", 1, "labs-modal-close", 3, "click"], [1, "labs-modal-body"], [1, "labs-modal-empty"], [1, "fusion-grid", "labs-table"], [1, "result-value"], [1, "result-units"]], template: function LabsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function LabsModalComponent_Template_div_click_0_listener() {
        return ctx.onBackdropClick();
      });
      \u0275\u0275domElementStart(1, "div", 1);
      \u0275\u0275domListener("click", function LabsModalComponent_Template_div_click_1_listener($event) {
        return ctx.onDialogClick($event);
      });
      \u0275\u0275domElementStart(2, "header", 2)(3, "div")(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, LabsModalComponent_Conditional_6_Template, 2, 1, "p", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 5);
      \u0275\u0275domListener("click", function LabsModalComponent_Template_button_click_7_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275text(8, "\xD7");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 6);
      \u0275\u0275conditionalCreate(10, LabsModalComponent_Conditional_10_Template, 2, 0, "div", 7)(11, LabsModalComponent_Conditional_11_Template, 16, 0, "table", 8);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Labs \u2014 ", ctx.patientName);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lookbackHours ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.labs.length === 0 ? 10 : 11);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.labs-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.labs-modal-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--fusion-radius, 6px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);\n  width: min(960px, 100%);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.labs-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--fusion-text);\n}\n.labs-modal-subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n}\n.labs-modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 2px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.labs-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-text);\n}\n.labs-modal-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 0;\n}\n.labs-modal-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.labs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.labs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.labs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-header);\n  font-weight: 600;\n  color: var(--fusion-text);\n  position: sticky;\n  top: 0;\n}\n.labs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n}\n.result-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-text);\n}\n.result-value.normalcy-abnormal[_ngcontent-%COMP%] {\n  color: #b45309;\n  background: #fef3c7;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-value.normalcy-critical[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-units[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  font-weight: 400;\n  color: var(--fusion-text-light);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=labs-modal.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabsModalComponent, [{
    type: Component,
    args: [{ selector: "app-labs-modal", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="labs-modal-backdrop" (click)="onBackdropClick()">
  <div class="labs-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="labsModalTitle" (click)="onDialogClick($event)">
    <header class="labs-modal-header">
      <div>
        <h2 id="labsModalTitle">Labs \u2014 {{ patientName }}</h2>
        @if (lookbackHours) {
          <p class="labs-modal-subtitle">Showing results from the last {{ lookbackHours }} hours</p>
        }
      </div>
      <button class="labs-modal-close" type="button" aria-label="Close" (click)="close.emit()">\xD7</button>
    </header>

    <div class="labs-modal-body">
      @if (labs.length === 0) {
        <div class="labs-modal-empty">No results in the configured window.</div>
      } @else {
        <table class="fusion-grid labs-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Result</th>
              <th>Status</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            @for (lab of labs; track lab.event_id) {
              <tr>
                <td>{{ lab.event_name }}</td>
                <td>{{ lab.event_dt_tm }}</td>
                <td>
                  <span class="result-value" [class]="normalcyClass(lab.normalcy)">
                    {{ lab.result_value }}@if (lab.result_units) { <span class="result-units">{{ lab.result_units }}</span> }
                  </span>
                </td>
                <td>{{ lab.result_status || '\u2014' }}</td>
                <td>{{ lab.performed_by || '\u2014' }}</td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/labs-modal/labs-modal.scss */\n:host {\n  display: contents;\n}\n.labs-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.labs-modal-dialog {\n  background: #fff;\n  border-radius: var(--fusion-radius, 6px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);\n  width: min(960px, 100%);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.labs-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-modal-header h2 {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--fusion-text);\n}\n.labs-modal-subtitle {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n}\n.labs-modal-close {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 2px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.labs-modal-close:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-text);\n}\n.labs-modal-body {\n  overflow: auto;\n  padding: 0;\n}\n.labs-modal-empty {\n  padding: 2rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.labs-table th,\n.labs-table td {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.labs-table th {\n  background: var(--fusion-bg-header);\n  font-weight: 600;\n  color: var(--fusion-text);\n  position: sticky;\n  top: 0;\n}\n.labs-table tbody tr:hover {\n  background: var(--fusion-bg-selected);\n}\n.result-value {\n  font-weight: 600;\n  color: var(--fusion-text);\n}\n.result-value.normalcy-abnormal {\n  color: #b45309;\n  background: #fef3c7;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-value.normalcy-critical {\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-units {\n  margin-left: 0.25rem;\n  font-weight: 400;\n  color: var(--fusion-text-light);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=labs-modal.css.map */\n"] }]
  }], null, { patientName: [{
    type: Input,
    args: [{ required: true }]
  }], labs: [{
    type: Input,
    args: [{ required: true }]
  }], lookbackHours: [{
    type: Input
  }], close: [{
    type: Output
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabsModalComponent, { className: "LabsModalComponent", filePath: "src/app/components/labs-modal/labs-modal.ts", lineNumber: 18 });
})();

// src/app/components/schedule-list/schedule-list.ts
var _forTrack02 = ($index, $item) => $item.physician_id;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.key;
function ScheduleListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2, "Schedule unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Your position is not configured for the schedule. Ask an administrator to assign your position to a group on the Configuration tab.");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1, "All groups");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r1.accessControlService.effectiveGroupId() === "__ALL__");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", g_r4.id)("selected", ctx_r1.accessControlService.effectiveGroupId() === g_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r4.label);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 10);
    \u0275\u0275text(1, " Group: ");
    \u0275\u0275elementStart(2, "select", 13);
    \u0275\u0275listener("change", function ScheduleListComponent_Conditional_2_Conditional_13_Template_select_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onGroupPickerChange($event));
    });
    \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_2_Conditional_13_Conditional_3_Template, 2, 1, "option", 24);
    \u0275\u0275repeaterCreate(4, ScheduleListComponent_Conditional_2_Conditional_13_For_5_Template, 2, 3, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.accessControlService.canPickAllGroups() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.accessControlService.availablePickerGroups());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.accessControlService.activeGroupLabel(), " group");
  }
}
function ScheduleListComponent_Conditional_2_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", p_r5.physician_id)("selected", ctx_r1.preferencesService.selectedPhysicianId() === p_r5.physician_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.physician_name);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 25);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scheduleService.refresh());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scheduleService.error(), " ");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No oncology appointments scheduled for ", ctx_r1.scheduleService.dateDisplay());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275listener("dragstart", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_dragstart_0_listener($event) {
      const \u0275$index_98_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, \u0275$index_98_r8));
    })("dragover", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_dragover_0_listener($event) {
      const \u0275$index_98_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, \u0275$index_98_r8));
    })("dragleave", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_dragleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_drop_0_listener($event) {
      const \u0275$index_98_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, \u0275$index_98_r8));
    })("dragend", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_dragend_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("click", function ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template_th_click_0_listener() {
      const col_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSortColumn(col_r9.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const \u0275$index_98_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("drag-over", ctx_r1.dropTargetIndex() === \u0275$index_98_r8)("dragging", ctx_r1.dragColumnIndex() === \u0275$index_98_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", col_r9.header, "", ctx_r1.getSortIndicator(col_r9.key), " ");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const appt_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenChart(appt_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appt_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("row-action-muted", !appt_r12.encntr_id && !appt_r12.chart_link_encntr_id);
    \u0275\u0275property("title", appt_r12.encntr_id || appt_r12.chart_link_encntr_id ? "Open patient chart" : "Open patient chart (no encounter context \u2014 person only)");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const appt_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenOrderInfo(appt_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd()();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appt_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(appt_r12.appt_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r12.appt_status || "\u2014");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r14 = \u0275\u0275nextContext().$implicit;
    const appt_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", appt_r12.special_instructions || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r12, col_r14.key));
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r14 = \u0275\u0275nextContext().$implicit;
    const appt_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("has-encounter", !!appt_r12.encntr_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r12, col_r14.key));
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r12 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r12.labs.length);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const appt_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenLabs(appt_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_1_Conditional_3_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r12 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classProp("row-action-muted", appt_r12.labs.length === 0);
    \u0275\u0275property("title", appt_r12.labs.length === 0 ? "No labs in window" : "View labs (" + appt_r12.labs.length + ")");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(appt_r12.labs.length > 0 ? 3 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_1_Template, 4, 4, "button", 45)(2, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Conditional_2_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.accessControlService.resolvedLabConfig() || appt_r12.labs.length > 0 ? 1 : 2);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r14 = \u0275\u0275nextContext().$implicit;
    const appt_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r12, col_r14.key));
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_0_Template, 3, 3, "td")(1, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_1_Template, 2, 2, "td", 40)(2, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_2_Template, 2, 3, "td", 41)(3, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_3_Template, 3, 1, "td", 42)(4, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Conditional_4_Template, 2, 1, "td");
  }
  if (rf & 2) {
    const col_r14 = ctx.$implicit;
    \u0275\u0275conditional(col_r14.key === "appt_status" ? 0 : col_r14.key === "special_instructions" ? 1 : col_r14.key === "patient_name" ? 2 : col_r14.key === "labs" ? 3 : 4);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275conditionalCreate(2, ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_2_Template, 3, 3, "button", 31);
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_30_For_8_Template_button_click_3_listener() {
      const appt_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenApptView(appt_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 33);
    \u0275\u0275element(5, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ScheduleListComponent_Conditional_2_Conditional_30_For_8_Conditional_6_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ScheduleListComponent_Conditional_2_Conditional_30_For_8_For_8_Template, 5, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(appt_r12.person_id ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(appt_r12.order_id ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderedColumns());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr");
    \u0275\u0275element(3, "th", 27);
    \u0275\u0275repeaterCreate(4, ScheduleListComponent_Conditional_2_Conditional_30_For_5_Template, 2, 6, "th", 28, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275repeaterCreate(7, ScheduleListComponent_Conditional_2_Conditional_30_For_8_Template, 9, 2, "tr", null, \u0275\u0275componentInstance().trackBySchEventId, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.orderedColumns());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sortedAppointments());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Auto-refreshes every ", ctx_r1.scheduleService.refreshIntervalSeconds(), "s");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Auto-refresh disabled");
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last updated: ", ctx_r1.scheduleService.lastUpdated());
  }
}
function ScheduleListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.prevDay());
    });
    \u0275\u0275text(3, "\xAB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 6);
    \u0275\u0275listener("change", function ScheduleListComponent_Conditional_2_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartDateChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("change", function ScheduleListComponent_Conditional_2_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEndDateChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.nextDay());
    });
    \u0275\u0275text(9, "\xBB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.goToToday());
    });
    \u0275\u0275text(11, "Today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275conditionalCreate(13, ScheduleListComponent_Conditional_2_Conditional_13_Template, 6, 1, "label", 10)(14, ScheduleListComponent_Conditional_2_Conditional_14_Template, 2, 1, "span", 11);
    \u0275\u0275elementStart(15, "label", 12);
    \u0275\u0275text(16, " Physician: ");
    \u0275\u0275elementStart(17, "select", 13);
    \u0275\u0275listener("change", function ScheduleListComponent_Conditional_2_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhysicianChange($event));
    });
    \u0275\u0275elementStart(18, "option", 14);
    \u0275\u0275text(19, "All Physicians");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, ScheduleListComponent_Conditional_2_For_21_Template, 2, 3, "option", 15, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 17);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.refresh());
    });
    \u0275\u0275text(25, "\u21BB");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, ScheduleListComponent_Conditional_2_Conditional_26_Template, 4, 1, "div", 18);
    \u0275\u0275conditionalCreate(27, ScheduleListComponent_Conditional_2_Conditional_27_Template, 2, 0, "div", 19);
    \u0275\u0275elementStart(28, "div", 20);
    \u0275\u0275conditionalCreate(29, ScheduleListComponent_Conditional_2_Conditional_29_Template, 2, 1, "div", 21)(30, ScheduleListComponent_Conditional_2_Conditional_30_Template, 9, 0, "table", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 23);
    \u0275\u0275conditionalCreate(32, ScheduleListComponent_Conditional_2_Conditional_32_Template, 2, 1, "span")(33, ScheduleListComponent_Conditional_2_Conditional_33_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(34, ScheduleListComponent_Conditional_2_Conditional_34_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.toIsoDate(ctx_r1.scheduleService.startDate()));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.toIsoDate(ctx_r1.scheduleService.endDate()));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.scheduleService.isToday());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.accessControlService.shouldShowGroupPicker() ? 13 : ctx_r1.accessControlService.activeGroupLabel() ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.scheduleService.physicians());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Showing ", ctx_r1.scheduleService.appointmentCount(), " appointments");
    \u0275\u0275advance();
    \u0275\u0275classProp("spinning", ctx_r1.scheduleService.loading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scheduleService.error() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scheduleService.loading() && ctx_r1.sortedAppointments().length === 0 ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sortedAppointments().length === 0 && !ctx_r1.scheduleService.loading() && !ctx_r1.scheduleService.error() ? 29 : 30);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.scheduleService.refreshIntervalSeconds() > 0 ? 32 : 33);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scheduleService.lastUpdated() ? 34 : -1);
  }
}
function ScheduleListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-labs-modal", 50);
    \u0275\u0275listener("close", function ScheduleListComponent_Conditional_3_Template_app_labs_modal_close_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseLabs());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const appt_r17 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("patientName", appt_r17.patient_name)("labs", appt_r17.labs)("lookbackHours", ((tmp_4_0 = ctx_r1.accessControlService.resolvedLabConfig()) == null ? null : tmp_4_0.lookback_hours) ?? null);
  }
}
var ScheduleListComponent = class _ScheduleListComponent {
  scheduleService = inject(ScheduleService);
  configService = inject(ConfigurationService);
  preferencesService = inject(PreferencesService);
  accessControlService = inject(AccessControlService);
  mPage = inject(MPageService);
  dragColumnIndex = signal(null, ...ngDevMode ? [{ debugName: "dragColumnIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  dropTargetIndex = signal(null, ...ngDevMode ? [{ debugName: "dropTargetIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  labsModalAppt = signal(null, ...ngDevMode ? [{ debugName: "labsModalAppt" }] : (
    /* istanbul ignore next */
    []
  ));
  orderedColumns = computed(() => {
    const order = this.preferencesService.columnOrder();
    return order.map((key) => COLUMN_DEFINITIONS.find((c) => c.key === key)).filter((c) => c !== void 0);
  }, ...ngDevMode ? [{ debugName: "orderedColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  sortedAppointments = computed(() => {
    const appointments = this.scheduleService.filteredAppointments();
    const sortCol = this.preferencesService.sortColumn();
    const sortDir = this.preferencesService.sortDirection();
    if (!sortCol || !sortDir)
      return appointments;
    return [...appointments].sort((a, b) => {
      const aVal = a[sortCol] ?? "";
      const bVal = b[sortCol] ?? "";
      const cmp = String(aVal).localeCompare(String(bVal));
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, ...ngDevMode ? [{ debugName: "sortedAppointments" }] : (
    /* istanbul ignore next */
    []
  ));
  initialLoadDone = false;
  configEffect = effect(() => {
    const loaded = this.configService.isLoaded();
    if (loaded && !this.initialLoadDone) {
      this.initialLoadDone = true;
      untracked(() => {
        if (this.accessControlService.hasScheduleAccess()) {
          this.scheduleService.loadAppointments();
          this.scheduleService.startAutoRefresh();
        }
      });
    }
  }, ...ngDevMode ? [{ debugName: "configEffect" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
  }
  ngOnDestroy() {
    this.scheduleService.stopAutoRefresh();
  }
  onStartDateChange(event) {
    const iso = event.target.value;
    if (iso) {
      const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
      this.scheduleService.setStartDate(this.scheduleService.formatDateForDisplay(d));
    }
  }
  onEndDateChange(event) {
    const iso = event.target.value;
    if (iso) {
      const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
      this.scheduleService.setEndDate(this.scheduleService.formatDateForDisplay(d));
    }
  }
  toIsoDate(displayDate) {
    const d = this.scheduleService.parseDateFromDisplay(displayDate);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  onPhysicianChange(event) {
    const value = event.target.value;
    this.preferencesService.setPhysicianFilter(value ? Number(value) : null);
  }
  onGroupPickerChange(event) {
    const value = event.target.value;
    const next = value === SUPERUSER_OVERRIDE_ALL ? SUPERUSER_OVERRIDE_ALL : value;
    this.accessControlService.setSelectedGroupId(next);
    this.scheduleService.refresh();
  }
  onSortColumn(columnKey) {
    const currentCol = this.preferencesService.sortColumn();
    const currentDir = this.preferencesService.sortDirection();
    if (currentCol !== columnKey) {
      this.preferencesService.setSortColumn(columnKey, "asc");
    } else if (currentDir === "asc") {
      this.preferencesService.setSortColumn(columnKey, "desc");
    } else {
      this.preferencesService.setSortColumn(null, null);
    }
  }
  getSortIndicator(columnKey) {
    if (this.preferencesService.sortColumn() !== columnKey)
      return "";
    return this.preferencesService.sortDirection() === "asc" ? " \u25B2" : " \u25BC";
  }
  getStatusClass(status) {
    const s = status?.toLowerCase() ?? "";
    if (s.includes("confirm"))
      return "badge-confirmed";
    if (s.includes("checked") || s.includes("check"))
      return "badge-checked-in";
    if (s.includes("pending"))
      return "badge-pending";
    if (s.includes("cancel"))
      return "badge-cancelled";
    if (s.includes("no show") || s.includes("noshow"))
      return "badge-no-show";
    return "badge-muted";
  }
  getCellValue(appointment, key) {
    if (key === "attending_physician") {
      return appointment.attending_physician || appointment.ordering_provider || appointment.scheduling_resource || "\u2014";
    }
    return appointment[key] ?? "\u2014";
  }
  trackBySchEventId(_index, appointment) {
    return appointment.sch_event_id;
  }
  onOpenChart(appt) {
    if (!appt.person_id)
      return;
    const encntrId = appt.encntr_id || appt.chart_link_encntr_id || 0;
    if (encntrId) {
      const fallback = !appt.encntr_id && appt.chart_link_encntr_id ? " (recurring master fallback)" : "";
      this.mPage.putLog("Opening chart for " + appt.patient_name + fallback);
      openChart(appt.person_id, encntrId);
    } else {
      this.mPage.putLog("Opening chart for " + appt.patient_name + " (person only, no encounter)");
      const applink = window.APPLINK;
      if (typeof applink === "function") {
        applink(0, "Powerchart.exe", "/PERSONID=" + appt.person_id);
      } else {
        this.mPage.putLog("APPLINK not available (outside Cerner context)");
      }
    }
  }
  async onOpenApptView(appt) {
    if (!appt.sch_event_id)
      return;
    this.mPage.putLog("Opening appointment view for sch_event_id: " + appt.sch_event_id);
    try {
      const schedulingActions = await window.external.DiscernObjectFactory("PEXSCHEDULINGACTIONS");
      schedulingActions.ShowView(appt.sch_event_id, 0);
    } catch (e) {
      this.mPage.putLog("Appointment view not available (outside Cerner context)");
    }
  }
  onOpenLabs(appt) {
    this.labsModalAppt.set(appt);
  }
  onCloseLabs() {
    this.labsModalAppt.set(null);
  }
  async onOpenOrderInfo(appt) {
    if (!appt.order_id)
      return;
    this.mPage.putLog("Opening order info viewer for order_id: " + appt.order_id);
    try {
      const orderInfoViewer = await window.external.DiscernObjectFactory("PVVIEWERMPAGE");
      await orderInfoViewer.LaunchOrderInfoViewer(appt.order_id, 1);
    } catch (e) {
      this.mPage.putLog("Order info viewer not available (outside Cerner context)");
    }
  }
  onDragStart(event, index) {
    this.dragColumnIndex.set(index);
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  }
  onDragOver(event, index) {
    event.preventDefault();
    this.dropTargetIndex.set(index);
  }
  onDragLeave() {
    this.dropTargetIndex.set(null);
  }
  onDrop(event, dropIndex) {
    event.preventDefault();
    const dragIndex = this.dragColumnIndex();
    if (dragIndex === null || dragIndex === dropIndex)
      return;
    const order = [...this.preferencesService.columnOrder()];
    const [moved] = order.splice(dragIndex, 1);
    order.splice(dropIndex, 0, moved);
    this.preferencesService.setColumnOrder(order);
    this.dragColumnIndex.set(null);
    this.dropTargetIndex.set(null);
  }
  onDragEnd() {
    this.dragColumnIndex.set(null);
    this.dropTargetIndex.set(null);
  }
  static \u0275fac = function ScheduleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListComponent, selectors: [["app-schedule-list"]], decls: 4, vars: 2, consts: [[1, "schedule-container"], [1, "schedule-blocked"], [3, "patientName", "labs", "lookbackHours"], [1, "schedule-header"], [1, "date-nav"], [1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], ["type", "date", 1, "fusion-input", "date-input", 3, "change", "value"], [1, "date-separator"], [1, "fusion-button", "fusion-small", 3, "click", "disabled"], [1, "header-controls"], [1, "group-filter"], [1, "group-badge"], [1, "physician-filter"], [1, "fusion-input", 3, "change"], ["value", ""], [3, "value", "selected"], [1, "appt-count"], ["title", "Refresh", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "error-banner"], [1, "loading-overlay"], [1, "table-container"], [1, "empty-state"], [1, "fusion-grid"], [1, "schedule-footer"], ["value", "__ALL__", 3, "selected"], [1, "fusion-button", "fusion-danger", "fusion-small", 3, "click"], [1, "spinner"], ["aria-label", "Actions", 1, "actions-col"], ["draggable", "true", 1, "sortable", 3, "drag-over", "dragging"], ["draggable", "true", 1, "sortable", 3, "dragstart", "dragover", "dragleave", "drop", "dragend", "click"], [1, "actions-col"], ["type", "button", "aria-label", "Open patient chart", 1, "row-action", 3, "row-action-muted", "title"], ["type", "button", "title", "Open appointment view", "aria-label", "Open appointment view", 1, "row-action", 3, "click"], ["viewBox", "0 0 16 16", "width", "14", "height", "14", "aria-hidden", "true"], ["fill", "currentColor", "d", "M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 15 3.5v10A1.5 1.5 0 0 1 13.5 15h-11A1.5 1.5 0 0 1 1 13.5v-10A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5zM2 6v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6H2zm2 2h2v2H4V8zm3 0h2v2H7V8zm3 0h2v2h-2V8zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2z"], ["type", "button", "title", "Open order details", "aria-label", "Open order details", 1, "row-action"], ["type", "button", "aria-label", "Open patient chart", 1, "row-action", 3, "click", "title"], ["fill", "currentColor", "d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1c-2.7 0-8 1.34-8 4v2h16v-2c0-2.66-5.3-4-8-4z"], ["type", "button", "title", "Open order details", "aria-label", "Open order details", 1, "row-action", 3, "click"], ["fill", "currentColor", "d", "M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5V2h2.5A1.5 1.5 0 0 1 15 3.5v11A1.5 1.5 0 0 1 13.5 16h-11A1.5 1.5 0 0 1 1 14.5v-11A1.5 1.5 0 0 1 2.5 2H5v-.5zm1 0V3h4V1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM4 6h8v1H4V6zm0 3h8v1H4V9zm0 3h5v1H4v-1z"], [1, "truncate", 3, "title"], [1, "patient-name", 3, "has-encounter"], [1, "labs-cell"], [1, "fusion-badge"], [1, "patient-name"], ["type", "button", "aria-label", "View labs", 1, "row-action", 3, "row-action-muted", "title"], [1, "labs-empty"], ["type", "button", "aria-label", "View labs", 1, "row-action", 3, "click", "title"], ["fill", "currentColor", "d", "M6 0a.5.5 0 0 0 0 1H7v4.04L3.06 12.18A1.5 1.5 0 0 0 4.36 14.5h7.28a1.5 1.5 0 0 0 1.3-2.32L9 5.04V1h1a.5.5 0 0 0 0-1H6zm2 1.5V5.2a.5.5 0 0 0 .08.27L10.4 9H5.6l2.32-3.53A.5.5 0 0 0 8 5.2V1.5z"], [1, "labs-count"], [3, "close", "patientName", "labs", "lookbackHours"]], template: function ScheduleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_1_Template, 5, 0, "div", 1)(2, ScheduleListComponent_Conditional_2_Template, 35, 12);
      \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_3_Template, 1, 3, "app-labs-modal", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.accessControlService.hasScheduleAccess() ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.labsModalAppt()) ? 3 : -1, tmp_1_0);
    }
  }, dependencies: [LabsModalComponent], styles: ["\n\n.schedule-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.appt-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.table-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #edf0f3;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.dragging[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.drag-over[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--fusion-primary);\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.patient-name.has-encounter[_ngcontent-%COMP%] {\n  color: var(--fusion-primary);\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.actions-col[_ngcontent-%COMP%] {\n  width: 1%;\n  white-space: nowrap;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  cursor: default;\n}\nth.actions-col[_ngcontent-%COMP%] {\n  cursor: default;\n}\nth.actions-col[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n}\n.row-action[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 2px 4px;\n  margin-right: 2px;\n  border-radius: 3px;\n  color: var(--fusion-primary);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n.row-action[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-border);\n}\n.row-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n  outline-offset: 1px;\n}\n.row-action.row-action-muted[_ngcontent-%COMP%] {\n  color: var(--fusion-text-light);\n}\n.truncate[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n.schedule-blocked[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: var(--fusion-text);\n}\n.schedule-blocked[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n}\n.schedule-blocked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n}\n.group-filter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.group-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.labs-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.labs-count[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.labs-empty[_ngcontent-%COMP%] {\n  color: var(--fusion-text-light);\n  font-size: 0.8rem;\n}\n.group-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 2px 8px;\n  border: 1px solid var(--fusion-border);\n  border-radius: 999px;\n  color: var(--fusion-text-muted);\n  background: var(--fusion-bg-header);\n}\n/*# sourceMappingURL=schedule-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleListComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-list", standalone: true, imports: [LabsModalComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="schedule-container">
  @if (!accessControlService.hasScheduleAccess()) {
    <div class="schedule-blocked">
      <h3>Schedule unavailable</h3>
      <p>Your position is not configured for the schedule. Ask an administrator to assign your position to a group on the Configuration tab.</p>
    </div>
  } @else {
  <!-- Header Bar -->
  <div class="schedule-header">
    <div class="date-nav">
      <button class="fusion-button fusion-outline fusion-small" (click)="scheduleService.prevDay()">&laquo;</button>
      <input type="date" class="fusion-input date-input" [value]="toIsoDate(scheduleService.startDate())" (change)="onStartDateChange($event)" />
      <span class="date-separator">to</span>
      <input type="date" class="fusion-input date-input" [value]="toIsoDate(scheduleService.endDate())" (change)="onEndDateChange($event)" />
      <button class="fusion-button fusion-outline fusion-small" (click)="scheduleService.nextDay()">&raquo;</button>
      <button class="fusion-button fusion-small" [disabled]="scheduleService.isToday()" (click)="scheduleService.goToToday()">Today</button>
    </div>
    <div class="header-controls">
      @if (accessControlService.shouldShowGroupPicker()) {
        <label class="group-filter">
          Group:
          <select class="fusion-input" (change)="onGroupPickerChange($event)">
            @if (accessControlService.canPickAllGroups()) {
              <option value="__ALL__" [selected]="accessControlService.effectiveGroupId() === '__ALL__'">All groups</option>
            }
            @for (g of accessControlService.availablePickerGroups(); track g.id) {
              <option [value]="g.id" [selected]="accessControlService.effectiveGroupId() === g.id">{{ g.label }}</option>
            }
          </select>
        </label>
      } @else if (accessControlService.activeGroupLabel()) {
        <span class="group-badge">{{ accessControlService.activeGroupLabel() }} group</span>
      }
      <label class="physician-filter">
        Physician:
        <select class="fusion-input" (change)="onPhysicianChange($event)">
          <option value="">All Physicians</option>
          @for (p of scheduleService.physicians(); track p.physician_id) {
            <option [value]="p.physician_id" [selected]="preferencesService.selectedPhysicianId() === p.physician_id">{{ p.physician_name }}</option>
          }
        </select>
      </label>
      <span class="appt-count">Showing {{ scheduleService.appointmentCount() }} appointments</span>
      <button class="fusion-button fusion-outline fusion-small" (click)="scheduleService.refresh()" [class.spinning]="scheduleService.loading()" title="Refresh">&#8635;</button>
    </div>
  </div>

  <!-- Error Banner -->
  @if (scheduleService.error()) {
    <div class="error-banner">
      {{ scheduleService.error() }}
      <button class="fusion-button fusion-danger fusion-small" (click)="scheduleService.refresh()">Retry</button>
    </div>
  }

  <!-- Loading Overlay -->
  @if (scheduleService.loading() && sortedAppointments().length === 0) {
    <div class="loading-overlay">
      <div class="spinner"></div>
    </div>
  }

  <!-- Table -->
  <div class="table-container">
    @if (sortedAppointments().length === 0 && !scheduleService.loading() && !scheduleService.error()) {
      <div class="empty-state">No oncology appointments scheduled for {{ scheduleService.dateDisplay() }}</div>
    } @else {
      <table class="fusion-grid">
        <thead>
          <tr>
            <th class="actions-col" aria-label="Actions"></th>
            @for (col of orderedColumns(); track col.key; let i = $index) {
              <th
                draggable="true"
                (dragstart)="onDragStart($event, i)"
                (dragover)="onDragOver($event, i)"
                (dragleave)="onDragLeave()"
                (drop)="onDrop($event, i)"
                (dragend)="onDragEnd()"
                (click)="onSortColumn(col.key)"
                [class.drag-over]="dropTargetIndex() === i"
                [class.dragging]="dragColumnIndex() === i"
                class="sortable"
              >
                {{ col.header }}{{ getSortIndicator(col.key) }}
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (appt of sortedAppointments(); track trackBySchEventId($index, appt)) {
            <tr>
              <td class="actions-col">
                @if (appt.person_id) {
                  <button
                    class="row-action"
                    [class.row-action-muted]="!appt.encntr_id && !appt.chart_link_encntr_id"
                    type="button"
                    [title]="(appt.encntr_id || appt.chart_link_encntr_id) ? 'Open patient chart' : 'Open patient chart (no encounter context \u2014 person only)'"
                    aria-label="Open patient chart"
                    (click)="onOpenChart(appt)"
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                      <path fill="currentColor" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1c-2.7 0-8 1.34-8 4v2h16v-2c0-2.66-5.3-4-8-4z"/>
                    </svg>
                  </button>
                }
                <button
                  class="row-action"
                  type="button"
                  title="Open appointment view"
                  aria-label="Open appointment view"
                  (click)="onOpenApptView(appt)"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                    <path fill="currentColor" d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 15 3.5v10A1.5 1.5 0 0 1 13.5 15h-11A1.5 1.5 0 0 1 1 13.5v-10A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5zM2 6v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6H2zm2 2h2v2H4V8zm3 0h2v2H7V8zm3 0h2v2h-2V8zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2z"/>
                  </svg>
                </button>
                @if (appt.order_id) {
                  <button
                    class="row-action"
                    type="button"
                    title="Open order details"
                    aria-label="Open order details"
                    (click)="onOpenOrderInfo(appt)"
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                      <path fill="currentColor" d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5V2h2.5A1.5 1.5 0 0 1 15 3.5v11A1.5 1.5 0 0 1 13.5 16h-11A1.5 1.5 0 0 1 1 14.5v-11A1.5 1.5 0 0 1 2.5 2H5v-.5zm1 0V3h4V1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM4 6h8v1H4V6zm0 3h8v1H4V9zm0 3h5v1H4v-1z"/>
                    </svg>
                  </button>
                }
              </td>
              @for (col of orderedColumns(); track col.key) {
                @if (col.key === 'appt_status') {
                  <td><span class="fusion-badge" [class]="getStatusClass(appt.appt_status)">{{ appt.appt_status || '\\u2014' }}</span></td>
                } @else if (col.key === 'special_instructions') {
                  <td class="truncate" [title]="appt.special_instructions || ''">{{ getCellValue(appt, col.key) }}</td>
                } @else if (col.key === 'patient_name') {
                  <td class="patient-name" [class.has-encounter]="!!appt.encntr_id">{{ getCellValue(appt, col.key) }}</td>
                } @else if (col.key === 'labs') {
                  <td class="labs-cell">
                    @if (accessControlService.resolvedLabConfig() || appt.labs.length > 0) {
                      <button
                        class="row-action"
                        [class.row-action-muted]="appt.labs.length === 0"
                        type="button"
                        [title]="appt.labs.length === 0 ? 'No labs in window' : 'View labs (' + appt.labs.length + ')'"
                        aria-label="View labs"
                        (click)="onOpenLabs(appt)"
                      >
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                          <path fill="currentColor" d="M6 0a.5.5 0 0 0 0 1H7v4.04L3.06 12.18A1.5 1.5 0 0 0 4.36 14.5h7.28a1.5 1.5 0 0 0 1.3-2.32L9 5.04V1h1a.5.5 0 0 0 0-1H6zm2 1.5V5.2a.5.5 0 0 0 .08.27L10.4 9H5.6l2.32-3.53A.5.5 0 0 0 8 5.2V1.5z"/>
                        </svg>
                        @if (appt.labs.length > 0) {
                          <span class="labs-count">{{ appt.labs.length }}</span>
                        }
                      </button>
                    } @else {
                      <span class="labs-empty">\u2014</span>
                    }
                  </td>
                } @else {
                  <td>{{ getCellValue(appt, col.key) }}</td>
                }
              }
            </tr>
          }
        </tbody>
      </table>
    }
  </div>

  <!-- Footer -->
  <div class="schedule-footer">
    @if (scheduleService.refreshIntervalSeconds() > 0) {
      <span>Auto-refreshes every {{ scheduleService.refreshIntervalSeconds() }}s</span>
    } @else {
      <span>Auto-refresh disabled</span>
    }
    @if (scheduleService.lastUpdated()) {
      <span>Last updated: {{ scheduleService.lastUpdated() }}</span>
    }
  </div>
  }

  @if (labsModalAppt(); as appt) {
    <app-labs-modal
      [patientName]="appt.patient_name"
      [labs]="appt.labs"
      [lookbackHours]="accessControlService.resolvedLabConfig()?.lookback_hours ?? null"
      (close)="onCloseLabs()"
    ></app-labs-modal>
  }
</div>
`, styles: ["/* src/app/components/schedule-list/schedule-list.scss */\n.schedule-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter select {\n  margin-left: 4px;\n}\n.appt-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.table-container {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid th {\n  cursor: pointer;\n}\n.fusion-grid th.sortable:hover {\n  background: #edf0f3;\n}\n.fusion-grid th.dragging {\n  opacity: 0.4;\n}\n.fusion-grid th.drag-over {\n  border-left: 2px solid var(--fusion-primary);\n}\n.patient-name {\n  font-weight: 600;\n}\n.patient-name.has-encounter {\n  color: var(--fusion-primary);\n}\ntd a {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd a:hover {\n  text-decoration: underline;\n}\n.actions-col {\n  width: 1%;\n  white-space: nowrap;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  cursor: default;\n}\nth.actions-col {\n  cursor: default;\n}\nth.actions-col:hover {\n  background: var(--fusion-bg-header);\n}\n.row-action {\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 2px 4px;\n  margin-right: 2px;\n  border-radius: 3px;\n  color: var(--fusion-primary);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n.row-action:hover {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-border);\n}\n.row-action:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n  outline-offset: 1px;\n}\n.row-action.row-action-muted {\n  color: var(--fusion-text-light);\n}\n.truncate {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n.schedule-blocked {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: var(--fusion-text);\n}\n.schedule-blocked h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n}\n.schedule-blocked p {\n  margin: 0;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n}\n.group-filter {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.group-filter select {\n  margin-left: 4px;\n}\n.labs-cell {\n  text-align: center;\n}\n.labs-count {\n  margin-left: 4px;\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.labs-empty {\n  color: var(--fusion-text-light);\n  font-size: 0.8rem;\n}\n.group-badge {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 2px 8px;\n  border: 1px solid var(--fusion-border);\n  border-radius: 999px;\n  color: var(--fusion-text-muted);\n  background: var(--fusion-bg-header);\n}\n/*# sourceMappingURL=schedule-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListComponent, { className: "ScheduleListComponent", filePath: "src/app/components/schedule-list/schedule-list.ts", lineNumber: 24 });
})();
export {
  ScheduleListComponent
};
//# sourceMappingURL=chunk-7JT5MN4O.js.map
