import {
  PreferencesService,
  ScheduleService
} from "./chunk-XRDYLTAF.js";
import {
  AccessControlService
} from "./chunk-B2ZDSSBQ.js";
import {
  COLUMN_DEFINITIONS,
  DEFAULT_APPT_STATE_MEANINGS,
  SUPERUSER_OVERRIDE_ALL,
  cellDisplayValue
} from "./chunk-EX4JLDUC.js";
import {
  CodeValueService,
  ConfigurationService,
  MPageService,
  openChart
} from "./chunk-UYA6F2GL.js";
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6SA5OQCO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/components/labs-modal/labs-modal.ts
var _forTrack0 = ($index, $item) => $item.order_id;
var _forTrack1 = ($index, $item) => $item.event_id;
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
function LabsModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 15);
    \u0275\u0275domListener("input", function LabsModalComponent_Conditional_19_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onOrderSearch($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r0.orderSearch());
  }
}
function LabsModalComponent_Conditional_20_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No outstanding lab orders. ");
  }
}
function LabsModalComponent_Conditional_20_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No orders match your search. ");
  }
}
function LabsModalComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, LabsModalComponent_Conditional_20_Conditional_0_Conditional_1_Template, 1, 0)(2, LabsModalComponent_Conditional_20_Conditional_0_Conditional_2_Template, 1, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.labOrders.length === 0 ? 1 : 2);
  }
}
function LabsModalComponent_Conditional_20_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.order_mnemonic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.order_dt_tm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.order_status || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.dept_status || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.performed_by || "\u2014");
  }
}
function LabsModalComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Order");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Order Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Dept Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "User");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, LabsModalComponent_Conditional_20_Conditional_1_For_15_Template, 11, 5, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.filteredOrders());
  }
}
function LabsModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LabsModalComponent_Conditional_20_Conditional_0_Template, 3, 1, "div", 16)(1, LabsModalComponent_Conditional_20_Conditional_1_Template, 16, 0, "table", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.filteredOrders().length === 0 ? 0 : 1);
  }
}
function LabsModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 18);
    \u0275\u0275domListener("input", function LabsModalComponent_Conditional_30_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onResultSearch($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r0.resultSearch());
  }
}
function LabsModalComponent_Conditional_31_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No results in the configured window. ");
  }
}
function LabsModalComponent_Conditional_31_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No results match your search. ");
  }
}
function LabsModalComponent_Conditional_31_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, LabsModalComponent_Conditional_31_Conditional_0_Conditional_1_Template, 1, 0)(2, LabsModalComponent_Conditional_31_Conditional_0_Conditional_2_Template, 1, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.labs.length === 0 ? 1 : 2);
  }
}
function LabsModalComponent_Conditional_31_Conditional_1_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const lab_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lab_r5.result_units);
  }
}
function LabsModalComponent_Conditional_31_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td")(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, LabsModalComponent_Conditional_31_Conditional_1_For_15_Conditional_8_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const lab_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r5.event_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r5.event_dt_tm);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.normalcyClass(lab_r5.normalcy));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lab_r5.result_value);
    \u0275\u0275advance();
    \u0275\u0275conditional(lab_r5.result_units ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r5.result_status || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r5.performed_by || "\u2014");
  }
}
function LabsModalComponent_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275repeaterCreate(14, LabsModalComponent_Conditional_31_Conditional_1_For_15_Template, 13, 8, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.filteredLabs());
  }
}
function LabsModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LabsModalComponent_Conditional_31_Conditional_0_Template, 3, 1, "div", 16)(1, LabsModalComponent_Conditional_31_Conditional_1_Template, 16, 0, "table", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.filteredLabs().length === 0 ? 0 : 1);
  }
}
var LabsModalComponent = class _LabsModalComponent {
  patientName;
  labs = [];
  labOrders = [];
  lookbackHours = null;
  close = new EventEmitter();
  ordersExpanded = signal(true, ...ngDevMode ? [{ debugName: "ordersExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  resultsExpanded = signal(true, ...ngDevMode ? [{ debugName: "resultsExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  orderSearch = signal("", ...ngDevMode ? [{ debugName: "orderSearch" }] : (
    /* istanbul ignore next */
    []
  ));
  resultSearch = signal("", ...ngDevMode ? [{ debugName: "resultSearch" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredOrders = computed(() => {
    const q = this.orderSearch().toLowerCase().trim();
    if (!q)
      return this.labOrders;
    return this.labOrders.filter((o) => o.order_mnemonic.toLowerCase().includes(q) || o.order_status.toLowerCase().includes(q) || o.dept_status.toLowerCase().includes(q) || o.order_dt_tm.toLowerCase().includes(q) || o.performed_by.toLowerCase().includes(q));
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredLabs = computed(() => {
    const q = this.resultSearch().toLowerCase().trim();
    if (!q)
      return this.labs;
    return this.labs.filter((l) => l.event_name.toLowerCase().includes(q) || l.result_value.toLowerCase().includes(q) || l.result_units.toLowerCase().includes(q) || l.result_status.toLowerCase().includes(q) || l.normalcy.toLowerCase().includes(q) || l.performed_by.toLowerCase().includes(q) || l.event_dt_tm.toLowerCase().includes(q));
  }, ...ngDevMode ? [{ debugName: "filteredLabs" }] : (
    /* istanbul ignore next */
    []
  ));
  onBackdropClick() {
    this.close.emit();
  }
  onDialogClick(event) {
    event.stopPropagation();
  }
  onEscape() {
    this.close.emit();
  }
  toggleOrders() {
    this.ordersExpanded.update((v) => !v);
  }
  toggleResults() {
    this.resultsExpanded.update((v) => !v);
  }
  onOrderSearch(event) {
    this.orderSearch.set(event.target.value);
  }
  onResultSearch(event) {
    this.resultSearch.set(event.target.value);
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
  }, inputs: { patientName: "patientName", labs: "labs", labOrders: "labOrders", lookbackHours: "lookbackHours" }, outputs: { close: "close" }, decls: 32, vars: 16, consts: [[1, "labs-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "labsModalTitle", 1, "labs-modal-dialog", 3, "click"], [1, "labs-modal-header"], ["id", "labsModalTitle"], [1, "labs-modal-subtitle"], ["type", "button", "aria-label", "Close", 1, "labs-modal-close", 3, "click"], [1, "labs-modal-body"], [1, "labs-section"], [1, "labs-section-header"], ["type", "button", 1, "labs-section-toggle", 3, "click"], [1, "chevron"], [1, "labs-section-title"], [1, "labs-section-count"], ["type", "text", "placeholder", "Search orders...", 1, "fusion-input", "labs-search", 3, "value"], ["type", "text", "placeholder", "Search results...", 1, "fusion-input", "labs-search", 3, "value"], ["type", "text", "placeholder", "Search orders...", 1, "fusion-input", "labs-search", 3, "input", "value"], [1, "labs-section-empty"], [1, "fusion-grid", "labs-table"], ["type", "text", "placeholder", "Search results...", 1, "fusion-input", "labs-search", 3, "input", "value"], [1, "result-value"], [1, "result-units"]], template: function LabsModalComponent_Template(rf, ctx) {
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
      \u0275\u0275domElementStart(9, "div", 6)(10, "section", 7)(11, "header", 8)(12, "button", 9);
      \u0275\u0275domListener("click", function LabsModalComponent_Template_button_click_12_listener() {
        return ctx.toggleOrders();
      });
      \u0275\u0275domElementStart(13, "span", 10);
      \u0275\u0275text(14, "\u25B6");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 11);
      \u0275\u0275text(16, "Lab Orders");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "span", 12);
      \u0275\u0275text(18);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(19, LabsModalComponent_Conditional_19_Template, 1, 1, "input", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(20, LabsModalComponent_Conditional_20_Template, 2, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "section", 7)(22, "header", 8)(23, "button", 9);
      \u0275\u0275domListener("click", function LabsModalComponent_Template_button_click_23_listener() {
        return ctx.toggleResults();
      });
      \u0275\u0275domElementStart(24, "span", 10);
      \u0275\u0275text(25, "\u25B6");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "span", 11);
      \u0275\u0275text(27, "Results");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "span", 12);
      \u0275\u0275text(29);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(30, LabsModalComponent_Conditional_30_Template, 1, 1, "input", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(31, LabsModalComponent_Conditional_31_Template, 2, 1);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Labs \u2014 ", ctx.patientName);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lookbackHours ? 6 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-expanded", ctx.ordersExpanded());
      \u0275\u0275advance();
      \u0275\u0275classProp("expanded", ctx.ordersExpanded());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.filteredOrders().length, " of ", ctx.labOrders.length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.ordersExpanded() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.ordersExpanded() ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-expanded", ctx.resultsExpanded());
      \u0275\u0275advance();
      \u0275\u0275classProp("expanded", ctx.resultsExpanded());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.filteredLabs().length, " of ", ctx.labs.length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resultsExpanded() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resultsExpanded() ? 31 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.labs-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.labs-modal-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--fusion-radius, 6px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);\n  width: min(960px, 100%);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.labs-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--fusion-text);\n}\n.labs-modal-subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n}\n.labs-modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 2px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.labs-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-text);\n}\n.labs-modal-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 0;\n}\n.labs-modal-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.labs-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-section-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--fusion-text);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.labs-section-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n}\n.labs-section-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n}\n.chevron[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7rem;\n  transition: transform 0.15s ease;\n}\n.chevron.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.labs-section-count[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.labs-search[_ngcontent-%COMP%] {\n  margin-left: auto;\n  max-width: 240px;\n}\n.labs-section-empty[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.labs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.labs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.labs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--fusion-bg-header);\n  font-weight: 600;\n  color: var(--fusion-text);\n  position: sticky;\n  top: 0;\n}\n.labs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n}\n.result-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-text);\n}\n.result-value.normalcy-abnormal[_ngcontent-%COMP%] {\n  color: #b45309;\n  background: #fef3c7;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-value.normalcy-critical[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-units[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  font-weight: 400;\n  color: var(--fusion-text-light);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=labs-modal.css.map */"], changeDetection: 0 });
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
      <!-- Orders section -->
      <section class="labs-section">
        <header class="labs-section-header">
          <button class="labs-section-toggle" type="button" (click)="toggleOrders()" [attr.aria-expanded]="ordersExpanded()">
            <span class="chevron" [class.expanded]="ordersExpanded()">\u25B6</span>
            <span class="labs-section-title">Lab Orders</span>
            <span class="labs-section-count">{{ filteredOrders().length }} of {{ labOrders.length }}</span>
          </button>
          @if (ordersExpanded()) {
            <input
              type="text"
              class="fusion-input labs-search"
              placeholder="Search orders..."
              [value]="orderSearch()"
              (input)="onOrderSearch($event)"
            />
          }
        </header>
        @if (ordersExpanded()) {
          @if (filteredOrders().length === 0) {
            <div class="labs-section-empty">
              @if (labOrders.length === 0) {
                No outstanding lab orders.
              } @else {
                No orders match your search.
              }
            </div>
          } @else {
            <table class="fusion-grid labs-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Time</th>
                  <th>Order Status</th>
                  <th>Dept Status</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                @for (o of filteredOrders(); track o.order_id) {
                  <tr>
                    <td>{{ o.order_mnemonic }}</td>
                    <td>{{ o.order_dt_tm }}</td>
                    <td>{{ o.order_status || '\u2014' }}</td>
                    <td>{{ o.dept_status || '\u2014' }}</td>
                    <td>{{ o.performed_by || '\u2014' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          }
        }
      </section>

      <!-- Results section -->
      <section class="labs-section">
        <header class="labs-section-header">
          <button class="labs-section-toggle" type="button" (click)="toggleResults()" [attr.aria-expanded]="resultsExpanded()">
            <span class="chevron" [class.expanded]="resultsExpanded()">\u25B6</span>
            <span class="labs-section-title">Results</span>
            <span class="labs-section-count">{{ filteredLabs().length }} of {{ labs.length }}</span>
          </button>
          @if (resultsExpanded()) {
            <input
              type="text"
              class="fusion-input labs-search"
              placeholder="Search results..."
              [value]="resultSearch()"
              (input)="onResultSearch($event)"
            />
          }
        </header>
        @if (resultsExpanded()) {
          @if (filteredLabs().length === 0) {
            <div class="labs-section-empty">
              @if (labs.length === 0) {
                No results in the configured window.
              } @else {
                No results match your search.
              }
            </div>
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
                @for (lab of filteredLabs(); track lab.event_id) {
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
        }
      </section>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/labs-modal/labs-modal.scss */\n:host {\n  display: contents;\n}\n.labs-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.labs-modal-dialog {\n  background: #fff;\n  border-radius: var(--fusion-radius, 6px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);\n  width: min(960px, 100%);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.labs-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-modal-header h2 {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--fusion-text);\n}\n.labs-modal-subtitle {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.8rem;\n  color: var(--fusion-text-light);\n}\n.labs-modal-close {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--fusion-text-light);\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 2px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.labs-modal-close:hover {\n  background: var(--fusion-bg-header);\n  color: var(--fusion-text);\n}\n.labs-modal-body {\n  overflow: auto;\n  padding: 0;\n}\n.labs-modal-empty {\n  padding: 2rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-section {\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-section:last-child {\n  border-bottom: none;\n}\n.labs-section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n}\n.labs-section-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--fusion-text);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.labs-section-toggle:hover {\n  background: var(--fusion-bg-selected);\n}\n.labs-section-toggle:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n}\n.chevron {\n  display: inline-block;\n  font-size: 0.7rem;\n  transition: transform 0.15s ease;\n}\n.chevron.expanded {\n  transform: rotate(90deg);\n}\n.labs-section-count {\n  font-weight: 400;\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.labs-search {\n  margin-left: auto;\n  max-width: 240px;\n}\n.labs-section-empty {\n  padding: 1.5rem;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.labs-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.labs-table th,\n.labs-table td {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.labs-table th {\n  background: var(--fusion-bg-header);\n  font-weight: 600;\n  color: var(--fusion-text);\n  position: sticky;\n  top: 0;\n}\n.labs-table tbody tr:hover {\n  background: var(--fusion-bg-selected);\n}\n.result-value {\n  font-weight: 600;\n  color: var(--fusion-text);\n}\n.result-value.normalcy-abnormal {\n  color: #b45309;\n  background: #fef3c7;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-value.normalcy-critical {\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 1px 6px;\n  border-radius: 999px;\n}\n.result-units {\n  margin-left: 0.25rem;\n  font-weight: 400;\n  color: var(--fusion-text-light);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=labs-modal.css.map */\n"] }]
  }], null, { patientName: [{
    type: Input,
    args: [{ required: true }]
  }], labs: [{
    type: Input
  }], labOrders: [{
    type: Input
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabsModalComponent, { className: "LabsModalComponent", filePath: "src/app/components/labs-modal/labs-modal.ts", lineNumber: 23 });
})();

// src/app/components/schedule-list/schedule-list.ts
var _forTrack02 = ($index, $item) => $item.physician_id;
var _forTrack12 = ($index, $item) => $item.id;
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
    \u0275\u0275elementStart(0, "option", 32);
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
    \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_2_Conditional_13_Conditional_3_Template, 2, 1, "option", 32);
    \u0275\u0275repeaterCreate(4, ScheduleListComponent_Conditional_2_Conditional_13_For_5_Template, 2, 3, "option", 15, _forTrack12);
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
function ScheduleListComponent_Conditional_2_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 33)(1, "input", 35);
    \u0275\u0275listener("change", function ScheduleListComponent_Conditional_2_Conditional_27_For_2_Template_input_change_1_listener() {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleColumn(col_r8.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isColumnVisible(col_r8.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r8.header, " ");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ScheduleListComponent_Conditional_2_Conditional_27_For_2_Template, 3, 2, "label", 33, _forTrack2);
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetColumns());
    });
    \u0275\u0275text(4, "Reset to defaults");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderedColumns());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_30_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
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
function ScheduleListComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No oncology appointments scheduled for ", ctx_r1.scheduleService.dateDisplay());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275listener("dragstart", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_dragstart_0_listener($event) {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, col_r11.key));
    })("dragover", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_dragover_0_listener($event) {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, col_r11.key));
    })("dragleave", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_dragleave_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_drop_0_listener($event) {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, col_r11.key));
    })("dragend", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_dragend_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_th_click_0_listener() {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSortColumn(col_r11.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275listener("mousedown", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_span_mousedown_2_listener($event) {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onResizeStart($event, col_r11.key));
    })("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template_span_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("width", ctx_r1.columnWidth(col_r11.key), "px")("min-width", ctx_r1.columnWidth(col_r11.key), "px");
    \u0275\u0275classProp("drag-over", ctx_r1.dropTargetKey() === col_r11.key)("dragging", ctx_r1.dragColumnKey() === col_r11.key)("sortable", ctx_r1.isSortable(col_r11.key))("actions-col", col_r11.key === "actions");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", col_r11.header, "", ctx_r1.getSortIndicator(col_r11.key), " ");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const appt_r14 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenChart(appt_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classProp("row-action-muted", !appt_r14.encntr_id && !appt_r14.chart_link_encntr_id);
    \u0275\u0275property("title", appt_r14.encntr_id || appt_r14.chart_link_encntr_id ? "Open patient chart" : "Open patient chart (no encounter context \u2014 person only)");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const appt_r14 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenOrderInfo(appt_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 53);
    \u0275\u0275elementEnd()();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_1_Template, 3, 3, "button", 45);
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const appt_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenApptView(appt_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 47);
    \u0275\u0275element(4, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Conditional_5_Template, 3, 0, "button", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(appt_r14.person_id ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(appt_r14.order_id ? 5 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(appt_r14.appt_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r14.appt_status || "\u2014");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r16 = \u0275\u0275nextContext().$implicit;
    const appt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", appt_r14.special_instructions || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r14, col_r16.key));
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "path", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", "Active " + (appt_r14.active_encntr_type || "inpatient/ED") + " encounter");
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_3_Conditional_2_Template, 3, 1, "span", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r16 = \u0275\u0275nextContext().$implicit;
    const appt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("has-encounter", !!appt_r14.encntr_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCellValue(appt_r14, col_r16.key), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(appt_r14.active_encntr_ind ? 2 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r14.labs.length + appt_r14.lab_orders.length);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const appt_r14 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOpenLabs(appt_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_1_Conditional_3_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classProp("row-action-muted", appt_r14.labs.length === 0 && appt_r14.lab_orders.length === 0);
    \u0275\u0275property("title", appt_r14.labs.length === 0 && appt_r14.lab_orders.length === 0 ? "No labs in window" : "View labs (" + appt_r14.lab_orders.length + " orders, " + appt_r14.labs.length + " results)");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(appt_r14.labs.length + appt_r14.lab_orders.length > 0 ? 3 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_1_Template, 4, 4, "button", 59)(2, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Conditional_2_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.accessControlService.resolvedLabConfig() || appt_r14.labs.length > 0 || appt_r14.lab_orders.length > 0 ? 1 : 2);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", "Resource: " + appt_r14.chair_resource);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r14.chair_resource);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_5_Conditional_2_Template, 2, 2, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appt_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appt_r14.appt_type || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(appt_r14.chair_resource ? 2 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r16 = \u0275\u0275nextContext().$implicit;
    const appt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r14, col_r16.key));
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_0_Template, 6, 2, "td", 41)(1, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_1_Template, 3, 3, "td")(2, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_2_Template, 2, 2, "td", 42)(3, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_3_Template, 3, 4, "td", 43)(4, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_4_Template, 3, 1, "td", 44)(5, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_5_Template, 3, 2, "td")(6, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Conditional_6_Template, 2, 1, "td");
  }
  if (rf & 2) {
    const col_r16 = ctx.$implicit;
    \u0275\u0275conditional(col_r16.key === "actions" ? 0 : col_r16.key === "appt_status" ? 1 : col_r16.key === "special_instructions" ? 2 : col_r16.key === "patient_name" ? 3 : col_r16.key === "labs" ? 4 : col_r16.key === "appt_type" ? 5 : 6);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ScheduleListComponent_Conditional_2_Conditional_34_For_7_For_2_Template, 7, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleColumns());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr");
    \u0275\u0275repeaterCreate(3, ScheduleListComponent_Conditional_2_Conditional_34_For_4_Template, 3, 14, "th", 38, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody");
    \u0275\u0275repeaterCreate(6, ScheduleListComponent_Conditional_2_Conditional_34_For_7_Template, 3, 0, "tr", null, \u0275\u0275componentInstance().trackBySchEventId, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.visibleColumns());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sortedAppointments());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_37_Template(rf, ctx) {
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
function ScheduleListComponent_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Auto-refresh disabled");
    \u0275\u0275elementEnd();
  }
}
function ScheduleListComponent_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Group: ", ctx_r1.accessControlService.activeGroupLabel());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Labs: ", ctx_r1.labSummary());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_46_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(name_r18);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_46_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "strong");
    \u0275\u0275text(2, "Physician filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.physicianFilterName());
  }
}
function ScheduleListComponent_Conditional_2_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 65)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275repeaterCreate(5, ScheduleListComponent_Conditional_2_Conditional_46_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "strong");
    \u0275\u0275text(9, "States shown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 65)(13, "strong");
    \u0275\u0275text(14, "Inpatient/ED indicator types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 65)(18, "strong");
    \u0275\u0275text(19, "Chair pattern");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, ScheduleListComponent_Conditional_2_Conditional_46_Conditional_22_Template, 5, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Appointment types (", ctx_r1.apptTypeNames().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.apptTypeNames());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stateMeaningsDisplay());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.activeEncntrTypeNames());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.chairPatternDisplay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.physicianFilterName() ? 22 : -1);
  }
}
function ScheduleListComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
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
    \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.columnsMenuOpen.set(!ctx_r1.columnsMenuOpen()));
    });
    \u0275\u0275text(26, "Columns \u25BE");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ScheduleListComponent_Conditional_2_Conditional_27_Template, 5, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 20);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.refresh());
    });
    \u0275\u0275text(29, "\u21BB");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(30, ScheduleListComponent_Conditional_2_Conditional_30_Template, 4, 1, "div", 21);
    \u0275\u0275conditionalCreate(31, ScheduleListComponent_Conditional_2_Conditional_31_Template, 2, 0, "div", 22);
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275conditionalCreate(33, ScheduleListComponent_Conditional_2_Conditional_33_Template, 2, 1, "div", 24)(34, ScheduleListComponent_Conditional_2_Conditional_34_Template, 8, 0, "table", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26)(36, "div", 27);
    \u0275\u0275conditionalCreate(37, ScheduleListComponent_Conditional_2_Conditional_37_Template, 2, 1, "span")(38, ScheduleListComponent_Conditional_2_Conditional_38_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(39, ScheduleListComponent_Conditional_2_Conditional_39_Template, 4, 1);
    \u0275\u0275conditionalCreate(40, ScheduleListComponent_Conditional_2_Conditional_40_Template, 4, 1);
    \u0275\u0275elementStart(41, "span", 28);
    \u0275\u0275text(42, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 29)(44, "button", 30);
    \u0275\u0275listener("click", function ScheduleListComponent_Conditional_2_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paramsMenuOpen.set(!ctx_r1.paramsMenuOpen()));
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, ScheduleListComponent_Conditional_2_Conditional_46_Template, 23, 5, "div", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, ScheduleListComponent_Conditional_2_Conditional_47_Template, 2, 1, "span");
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
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.columnsMenuOpen() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("spinning", ctx_r1.scheduleService.loading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scheduleService.error() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scheduleService.loading() && ctx_r1.sortedAppointments().length === 0 ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sortedAppointments().length === 0 && !ctx_r1.scheduleService.loading() && !ctx_r1.scheduleService.error() ? 33 : 34);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.scheduleService.refreshIntervalSeconds() > 0 ? 37 : 38);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.accessControlService.activeGroupLabel() ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labSummary() ? 40 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.apptTypeNames().length, " appointment types \u25B4 ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paramsMenuOpen() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scheduleService.lastUpdated() ? 47 : -1);
  }
}
function ScheduleListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-labs-modal", 66);
    \u0275\u0275listener("close", function ScheduleListComponent_Conditional_3_Template_app_labs_modal_close_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseLabs());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const appt_r20 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("patientName", appt_r20.patient_name)("labs", appt_r20.labs)("labOrders", appt_r20.lab_orders)("lookbackHours", ((tmp_5_0 = ctx_r1.accessControlService.resolvedLabConfig()) == null ? null : tmp_5_0.lookback_hours) ?? null);
  }
}
var ScheduleListComponent = class _ScheduleListComponent {
  scheduleService = inject(ScheduleService);
  configService = inject(ConfigurationService);
  preferencesService = inject(PreferencesService);
  accessControlService = inject(AccessControlService);
  mPage = inject(MPageService);
  codeValueService = inject(CodeValueService);
  codeSetsVersion = signal(0, ...ngDevMode ? [{ debugName: "codeSetsVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  dragColumnKey = signal(null, ...ngDevMode ? [{ debugName: "dragColumnKey" }] : (
    /* istanbul ignore next */
    []
  ));
  dropTargetKey = signal(null, ...ngDevMode ? [{ debugName: "dropTargetKey" }] : (
    /* istanbul ignore next */
    []
  ));
  labsModalAppt = signal(null, ...ngDevMode ? [{ debugName: "labsModalAppt" }] : (
    /* istanbul ignore next */
    []
  ));
  columnsMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "columnsMenuOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  paramsMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "paramsMenuOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  resizingKey = null;
  resizeStartX = 0;
  resizeStartWidth = 0;
  resizeMoved = false;
  suppressNextSortClick = false;
  transientWidths = signal({}, ...ngDevMode ? [{ debugName: "transientWidths" }] : (
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
  visibleColumns = computed(() => {
    const visibility = this.preferencesService.columnVisibility();
    const roleHidden = this.accessControlService.roleHiddenColumns();
    return this.orderedColumns().filter((col) => {
      const explicit = visibility[col.key];
      if (explicit !== void 0)
        return explicit;
      return !roleHidden.has(col.key);
    });
  }, ...ngDevMode ? [{ debugName: "visibleColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  isColumnVisible(key) {
    return this.visibleColumns().some((c) => c.key === key);
  }
  toggleColumn(key) {
    this.preferencesService.setColumnVisibility(key, !this.isColumnVisible(key));
  }
  resetColumns() {
    this.preferencesService.resetColumnVisibility();
  }
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
  apptTypeNames = computed(() => {
    this.codeSetsVersion();
    const byCode = new Map((this.codeValueService.getCodeSet(14230) ?? []).map((cv) => [cv.codeValue, cv.display]));
    return this.accessControlService.resolvedAppointmentTypes().map((cd) => byCode.get(cd) ?? String(cd)).sort((a, b) => a.localeCompare(b));
  }, ...ngDevMode ? [{ debugName: "apptTypeNames" }] : (
    /* istanbul ignore next */
    []
  ));
  stateMeaningsDisplay = computed(() => {
    const states = this.configService.configuration()?.APPT_STATE_MEANINGS;
    return (states?.length ? states : DEFAULT_APPT_STATE_MEANINGS).join(", ");
  }, ...ngDevMode ? [{ debugName: "stateMeaningsDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  chairPatternDisplay = computed(() => {
    const p = this.configService.configuration()?.CHAIR_RESOURCE_NAME_PATTERN?.trim();
    return p ? p : "Chair (default)";
  }, ...ngDevMode ? [{ debugName: "chairPatternDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  activeEncntrTypeNames = computed(() => {
    this.codeSetsVersion();
    const cds = this.configService.configuration()?.ACTIVE_ENCNTR_TYPE_CDS ?? [];
    if (cds.length === 0)
      return "Inpatient, Emergency (defaults)";
    const byCode = new Map((this.codeValueService.getCodeSet(71) ?? []).map((cv) => [cv.codeValue, cv.display]));
    return cds.map((cd) => byCode.get(cd) ?? String(cd)).join(", ");
  }, ...ngDevMode ? [{ debugName: "activeEncntrTypeNames" }] : (
    /* istanbul ignore next */
    []
  ));
  physicianFilterName = computed(() => {
    const id = this.preferencesService.selectedPhysicianId();
    if (id === null)
      return "";
    return this.scheduleService.physicians().find((p) => p.physician_id === id)?.physician_name ?? String(id);
  }, ...ngDevMode ? [{ debugName: "physicianFilterName" }] : (
    /* istanbul ignore next */
    []
  ));
  labSummary = computed(() => {
    const cfg = this.accessControlService.resolvedLabConfig();
    if (!cfg)
      return "";
    const name = this.scheduleService.labEventSetName();
    return name ? name + " \xB7 " + cfg.lookback_hours + "h" : cfg.lookback_hours + "h lookback";
  }, ...ngDevMode ? [{ debugName: "labSummary" }] : (
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
    this.codeValueService.load(14230, 0, "", "", "", false, () => {
      this.codeSetsVersion.update((v) => v + 1);
    });
    this.codeValueService.load(71, 0, "", "", "", false, () => {
      this.codeSetsVersion.update((v) => v + 1);
    });
  }
  ngOnDestroy() {
    this.scheduleService.stopAutoRefresh();
    document.removeEventListener("mousemove", this.onResizeMove);
    document.removeEventListener("mouseup", this.onResizeEnd);
  }
  columnWidth(key) {
    const transient = this.transientWidths()[key];
    if (transient !== void 0)
      return transient;
    const saved = this.preferencesService.columnWidths()[key];
    return saved !== void 0 ? saved : null;
  }
  onResizeStart(event, key) {
    event.preventDefault();
    event.stopPropagation();
    const th = event.target.closest("th");
    if (!th)
      return;
    this.resizingKey = key;
    this.resizeStartX = event.clientX;
    this.resizeStartWidth = th.offsetWidth;
    this.resizeMoved = false;
    document.addEventListener("mousemove", this.onResizeMove);
    document.addEventListener("mouseup", this.onResizeEnd);
  }
  onResizeMove = (event) => {
    if (!this.resizingKey)
      return;
    this.resizeMoved = true;
    const width = Math.max(40, this.resizeStartWidth + event.clientX - this.resizeStartX);
    this.transientWidths.update((w) => __spreadProps(__spreadValues({}, w), { [this.resizingKey]: width }));
  };
  onResizeEnd = () => {
    if (this.resizingKey && this.resizeMoved) {
      const width = this.transientWidths()[this.resizingKey];
      if (width !== void 0) {
        this.preferencesService.setColumnWidth(this.resizingKey, width);
      }
      this.suppressNextSortClick = true;
    }
    this.resizingKey = null;
    this.transientWidths.set({});
    document.removeEventListener("mousemove", this.onResizeMove);
    document.removeEventListener("mouseup", this.onResizeEnd);
  };
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
    if (this.suppressNextSortClick) {
      this.suppressNextSortClick = false;
      return;
    }
    const def = COLUMN_DEFINITIONS.find((c) => c.key === columnKey);
    if (def?.sortable === false)
      return;
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
  isSortable(columnKey) {
    return COLUMN_DEFINITIONS.find((c) => c.key === columnKey)?.sortable !== false;
  }
  getSortIndicator(columnKey) {
    if (!this.isSortable(columnKey))
      return "";
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
    if (s.includes("reschedul"))
      return "badge-rescheduled";
    if (s.includes("cancel"))
      return "badge-cancelled";
    if (s.includes("no show") || s.includes("noshow"))
      return "badge-no-show";
    return "badge-muted";
  }
  getCellValue(appointment, key) {
    return cellDisplayValue(appointment, key);
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
  onDragStart(event, key) {
    this.dragColumnKey.set(key);
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  }
  onDragOver(event, key) {
    event.preventDefault();
    this.dropTargetKey.set(key);
  }
  onDragLeave() {
    this.dropTargetKey.set(null);
  }
  onDrop(event, targetKey) {
    event.preventDefault();
    const dragKey = this.dragColumnKey();
    if (!dragKey || dragKey === targetKey) {
      this.onDragEnd();
      return;
    }
    const order = [...this.preferencesService.columnOrder()];
    const from = order.indexOf(dragKey);
    const to = order.indexOf(targetKey);
    if (from >= 0 && to >= 0) {
      order.splice(from, 1);
      order.splice(to, 0, dragKey);
      this.preferencesService.setColumnOrder(order);
    }
    this.onDragEnd();
  }
  onDragEnd() {
    this.dragColumnKey.set(null);
    this.dropTargetKey.set(null);
  }
  static \u0275fac = function ScheduleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListComponent, selectors: [["app-schedule-list"]], decls: 4, vars: 2, consts: [[1, "schedule-container"], [1, "schedule-blocked"], [3, "patientName", "labs", "labOrders", "lookbackHours"], [1, "schedule-header"], [1, "date-nav"], [1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], ["type", "date", 1, "fusion-input", "date-input", 3, "change", "value"], [1, "date-separator"], [1, "fusion-button", "fusion-small", 3, "click", "disabled"], [1, "header-controls"], [1, "group-filter"], [1, "group-badge"], [1, "physician-filter"], [1, "fusion-input", 3, "change"], ["value", ""], [3, "value", "selected"], [1, "appt-count"], [1, "columns-menu-wrap"], ["type", "button", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "columns-menu"], ["title", "Refresh", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "error-banner"], [1, "loading-overlay"], [1, "table-container"], [1, "empty-state"], [1, "fusion-grid"], [1, "schedule-footer"], [1, "footer-left"], [1, "footer-sep"], [1, "params-menu-wrap"], ["type", "button", 1, "footer-params-toggle", 3, "click"], [1, "params-menu"], ["value", "__ALL__", 3, "selected"], [1, "columns-menu-item"], ["type", "button", 1, "fusion-button", "fusion-small", "columns-menu-reset", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "fusion-button", "fusion-danger", "fusion-small", 3, "click"], [1, "spinner"], ["draggable", "true", 3, "drag-over", "dragging", "sortable", "actions-col", "width", "min-width"], ["draggable", "true", 3, "dragstart", "dragover", "dragleave", "drop", "dragend", "click"], ["aria-hidden", "true", 1, "col-resize", 3, "mousedown", "click"], [1, "actions-col"], [1, "truncate", 3, "title"], [1, "patient-name", 3, "has-encounter"], [1, "labs-cell"], ["type", "button", "aria-label", "Open patient chart", 1, "row-action", 3, "row-action-muted", "title"], ["type", "button", "title", "Open appointment view", "aria-label", "Open appointment view", 1, "row-action", 3, "click"], ["viewBox", "0 0 16 16", "width", "14", "height", "14", "aria-hidden", "true"], ["fill", "currentColor", "d", "M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 15 3.5v10A1.5 1.5 0 0 1 13.5 15h-11A1.5 1.5 0 0 1 1 13.5v-10A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5zM2 6v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6H2zm2 2h2v2H4V8zm3 0h2v2H7V8zm3 0h2v2h-2V8zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2z"], ["type", "button", "title", "Open order details", "aria-label", "Open order details", 1, "row-action"], ["type", "button", "aria-label", "Open patient chart", 1, "row-action", 3, "click", "title"], ["fill", "currentColor", "d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1c-2.7 0-8 1.34-8 4v2h16v-2c0-2.66-5.3-4-8-4z"], ["type", "button", "title", "Open order details", "aria-label", "Open order details", 1, "row-action", 3, "click"], ["fill", "currentColor", "d", "M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5V2h2.5A1.5 1.5 0 0 1 15 3.5v11A1.5 1.5 0 0 1 13.5 16h-11A1.5 1.5 0 0 1 1 14.5v-11A1.5 1.5 0 0 1 2.5 2H5v-.5zm1 0V3h4V1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM4 6h8v1H4V6zm0 3h8v1H4V9zm0 3h5v1H4v-1z"], [1, "fusion-badge"], [1, "patient-name"], ["aria-label", "Active inpatient or emergency encounter", "role", "img", 1, "encntr-indicator", 3, "title"], ["viewBox", "0 0 16 16", "width", "13", "height", "13", "aria-hidden", "true"], ["fill", "currentColor", "d", "M1 4a.5.5 0 0 1 1 0v5h6V6.5A1.5 1.5 0 0 1 9.5 5H13a3 3 0 0 1 3 3v4a.5.5 0 0 1-1 0v-1.5H2V12a.5.5 0 0 1-1 0V4zm3.5 3.5A1.5 1.5 0 1 0 4.5 4a1.5 1.5 0 0 0 0 3.5z"], ["type", "button", "aria-label", "View labs", 1, "row-action", 3, "row-action-muted", "title"], [1, "labs-empty"], ["type", "button", "aria-label", "View labs", 1, "row-action", 3, "click", "title"], ["fill", "currentColor", "d", "M6 0a.5.5 0 0 0 0 1H7v4.04L3.06 12.18A1.5 1.5 0 0 0 4.36 14.5h7.28a1.5 1.5 0 0 0 1.3-2.32L9 5.04V1h1a.5.5 0 0 0 0-1H6zm2 1.5V5.2a.5.5 0 0 0 .08.27L10.4 9H5.6l2.32-3.53A.5.5 0 0 0 8 5.2V1.5z"], [1, "labs-count"], [1, "chair-chip", 3, "title"], [1, "params-menu-section"], [3, "close", "patientName", "labs", "labOrders", "lookbackHours"]], template: function ScheduleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_1_Template, 5, 0, "div", 1)(2, ScheduleListComponent_Conditional_2_Template, 48, 17);
      \u0275\u0275conditionalCreate(3, ScheduleListComponent_Conditional_3_Template, 1, 4, "app-labs-modal", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.accessControlService.hasScheduleAccess() ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.labsModalAppt()) ? 3 : -1, tmp_1_0);
    }
  }, dependencies: [LabsModalComponent], styles: ["\n\n.schedule-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.appt-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.table-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #edf0f3;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.dragging[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.drag-over[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--fusion-primary);\n}\n.col-resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -3px;\n  width: 7px;\n  height: 100%;\n  cursor: col-resize;\n  z-index: 5;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.patient-name.has-encounter[_ngcontent-%COMP%] {\n  color: var(--fusion-primary);\n}\n.encntr-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  color: var(--fusion-danger, #c0392b);\n  vertical-align: text-bottom;\n  cursor: help;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.actions-col[_ngcontent-%COMP%] {\n  width: 1%;\n  white-space: nowrap;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.row-action[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 2px 4px;\n  margin-right: 2px;\n  border-radius: 3px;\n  color: var(--fusion-primary);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n.row-action[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-border);\n}\n.row-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n  outline-offset: 1px;\n}\n.row-action.row-action-muted[_ngcontent-%COMP%] {\n  color: var(--fusion-text-light);\n}\n.truncate[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n.footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  flex-wrap: wrap;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: var(--fusion-text-light, #8a949e);\n}\n.footer-params-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n.footer-params-toggle[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.params-menu-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.params-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: calc(100% + 4px);\n  z-index: 30;\n  min-width: 260px;\n  max-width: 380px;\n  max-height: 50vh;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--fusion-surface, #fff);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.params-menu-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.params-menu-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  padding-left: 18px;\n}\n.schedule-blocked[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: var(--fusion-text);\n}\n.schedule-blocked[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n}\n.schedule-blocked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n}\n.group-filter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.group-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.labs-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.labs-count[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.chair-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  border-radius: 8px;\n  font-size: 0.85em;\n  background: var(--fusion-surface-alt, #eef2f6);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  white-space: nowrap;\n}\n.labs-empty[_ngcontent-%COMP%] {\n  color: var(--fusion-text-light);\n  font-size: 0.8rem;\n}\n.group-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 2px 8px;\n  border: 1px solid var(--fusion-border);\n  border-radius: 999px;\n  color: var(--fusion-text-muted);\n  background: var(--fusion-bg-header);\n}\n.columns-menu-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.columns-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 4px);\n  z-index: 30;\n  min-width: 200px;\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--fusion-surface, #fff);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.columns-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 2px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.columns-menu-reset[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule-list.css.map */"], changeDetection: 0 });
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
      <div class="columns-menu-wrap">
        <button class="fusion-button fusion-outline fusion-small" type="button"
          (click)="columnsMenuOpen.set(!columnsMenuOpen())">Columns &#9662;</button>
        @if (columnsMenuOpen()) {
          <div class="columns-menu">
            @for (col of orderedColumns(); track col.key) {
              <label class="columns-menu-item">
                <input type="checkbox" [checked]="isColumnVisible(col.key)" (change)="toggleColumn(col.key)" />
                {{ col.header }}
              </label>
            }
            <button class="fusion-button fusion-small columns-menu-reset" type="button"
              (click)="resetColumns()">Reset to defaults</button>
          </div>
        }
      </div>
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
            @for (col of visibleColumns(); track col.key) {
              <th
                draggable="true"
                (dragstart)="onDragStart($event, col.key)"
                (dragover)="onDragOver($event, col.key)"
                (dragleave)="onDragLeave()"
                (drop)="onDrop($event, col.key)"
                (dragend)="onDragEnd()"
                (click)="onSortColumn(col.key)"
                [class.drag-over]="dropTargetKey() === col.key"
                [class.dragging]="dragColumnKey() === col.key"
                [class.sortable]="isSortable(col.key)"
                [class.actions-col]="col.key === 'actions'"
                [style.width.px]="columnWidth(col.key)"
                [style.min-width.px]="columnWidth(col.key)"
              >
                {{ col.header }}{{ getSortIndicator(col.key) }}
                <span class="col-resize" (mousedown)="onResizeStart($event, col.key)"
                  (click)="$event.stopPropagation()" aria-hidden="true"></span>
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (appt of sortedAppointments(); track trackBySchEventId($index, appt)) {
            <tr>
              @for (col of visibleColumns(); track col.key) {
                @if (col.key === 'actions') {
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
                } @else if (col.key === 'appt_status') {
                  <td><span class="fusion-badge" [class]="getStatusClass(appt.appt_status)">{{ appt.appt_status || '\\u2014' }}</span></td>
                } @else if (col.key === 'special_instructions') {
                  <td class="truncate" [title]="appt.special_instructions || ''">{{ getCellValue(appt, col.key) }}</td>
                } @else if (col.key === 'patient_name') {
                  <td class="patient-name" [class.has-encounter]="!!appt.encntr_id">
                    {{ getCellValue(appt, col.key) }}
                    @if (appt.active_encntr_ind) {
                      <span
                        class="encntr-indicator"
                        [title]="'Active ' + (appt.active_encntr_type || 'inpatient/ED') + ' encounter'"
                        aria-label="Active inpatient or emergency encounter"
                        role="img"
                      >
                        <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                          <path fill="currentColor" d="M1 4a.5.5 0 0 1 1 0v5h6V6.5A1.5 1.5 0 0 1 9.5 5H13a3 3 0 0 1 3 3v4a.5.5 0 0 1-1 0v-1.5H2V12a.5.5 0 0 1-1 0V4zm3.5 3.5A1.5 1.5 0 1 0 4.5 4a1.5 1.5 0 0 0 0 3.5z"/>
                        </svg>
                      </span>
                    }
                  </td>
                } @else if (col.key === 'labs') {
                  <td class="labs-cell">
                    @if (accessControlService.resolvedLabConfig() || appt.labs.length > 0 || appt.lab_orders.length > 0) {
                      <button
                        class="row-action"
                        [class.row-action-muted]="appt.labs.length === 0 && appt.lab_orders.length === 0"
                        type="button"
                        [title]="(appt.labs.length === 0 && appt.lab_orders.length === 0)
                          ? 'No labs in window'
                          : 'View labs (' + appt.lab_orders.length + ' orders, ' + appt.labs.length + ' results)'"
                        aria-label="View labs"
                        (click)="onOpenLabs(appt)"
                      >
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                          <path fill="currentColor" d="M6 0a.5.5 0 0 0 0 1H7v4.04L3.06 12.18A1.5 1.5 0 0 0 4.36 14.5h7.28a1.5 1.5 0 0 0 1.3-2.32L9 5.04V1h1a.5.5 0 0 0 0-1H6zm2 1.5V5.2a.5.5 0 0 0 .08.27L10.4 9H5.6l2.32-3.53A.5.5 0 0 0 8 5.2V1.5z"/>
                        </svg>
                        @if (appt.labs.length + appt.lab_orders.length > 0) {
                          <span class="labs-count">{{ appt.labs.length + appt.lab_orders.length }}</span>
                        }
                      </button>
                    } @else {
                      <span class="labs-empty">\u2014</span>
                    }
                  </td>
                } @else if (col.key === 'appt_type') {
                  <td>
                    {{ appt.appt_type || '\u2014' }}
                    @if (appt.chair_resource) {
                      <span class="chair-chip" [title]="'Resource: ' + appt.chair_resource">{{ appt.chair_resource }}</span>
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
    <div class="footer-left">
      @if (scheduleService.refreshIntervalSeconds() > 0) {
        <span>Auto-refreshes every {{ scheduleService.refreshIntervalSeconds() }}s</span>
      } @else {
        <span>Auto-refresh disabled</span>
      }
      @if (accessControlService.activeGroupLabel()) {
        <span class="footer-sep">&#183;</span>
        <span>Group: {{ accessControlService.activeGroupLabel() }}</span>
      }
      @if (labSummary()) {
        <span class="footer-sep">&#183;</span>
        <span>Labs: {{ labSummary() }}</span>
      }
      <span class="footer-sep">&#183;</span>
      <div class="params-menu-wrap">
        <button class="footer-params-toggle" type="button"
          (click)="paramsMenuOpen.set(!paramsMenuOpen())">
          {{ apptTypeNames().length }} appointment types &#9652;
        </button>
        @if (paramsMenuOpen()) {
          <div class="params-menu">
            <div class="params-menu-section">
              <strong>Appointment types ({{ apptTypeNames().length }})</strong>
              <ul>
                @for (name of apptTypeNames(); track name) {
                  <li>{{ name }}</li>
                }
              </ul>
            </div>
            <div class="params-menu-section">
              <strong>States shown</strong>
              <div>{{ stateMeaningsDisplay() }}</div>
            </div>
            <div class="params-menu-section">
              <strong>Inpatient/ED indicator types</strong>
              <div>{{ activeEncntrTypeNames() }}</div>
            </div>
            <div class="params-menu-section">
              <strong>Chair pattern</strong>
              <div>{{ chairPatternDisplay() }}</div>
            </div>
            @if (physicianFilterName()) {
              <div class="params-menu-section">
                <strong>Physician filter</strong>
                <div>{{ physicianFilterName() }}</div>
              </div>
            }
          </div>
        }
      </div>
    </div>
    @if (scheduleService.lastUpdated()) {
      <span>Last updated: {{ scheduleService.lastUpdated() }}</span>
    }
  </div>
  }

  @if (labsModalAppt(); as appt) {
    <app-labs-modal
      [patientName]="appt.patient_name"
      [labs]="appt.labs"
      [labOrders]="appt.lab_orders"
      [lookbackHours]="accessControlService.resolvedLabConfig()?.lookback_hours ?? null"
      (close)="onCloseLabs()"
    ></app-labs-modal>
  }
</div>
`, styles: ["/* src/app/components/schedule-list/schedule-list.scss */\n.schedule-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter select {\n  margin-left: 4px;\n}\n.appt-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.table-container {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid th {\n  cursor: pointer;\n  position: relative;\n}\n.fusion-grid th.sortable:hover {\n  background: #edf0f3;\n}\n.fusion-grid th.dragging {\n  opacity: 0.4;\n}\n.fusion-grid th.drag-over {\n  border-left: 2px solid var(--fusion-primary);\n}\n.col-resize {\n  position: absolute;\n  top: 0;\n  right: -3px;\n  width: 7px;\n  height: 100%;\n  cursor: col-resize;\n  z-index: 5;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patient-name {\n  font-weight: 600;\n}\n.patient-name.has-encounter {\n  color: var(--fusion-primary);\n}\n.encntr-indicator {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  color: var(--fusion-danger, #c0392b);\n  vertical-align: text-bottom;\n  cursor: help;\n}\ntd a {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd a:hover {\n  text-decoration: underline;\n}\n.actions-col {\n  width: 1%;\n  white-space: nowrap;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.row-action {\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 2px 4px;\n  margin-right: 2px;\n  border-radius: 3px;\n  color: var(--fusion-primary);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n.row-action:hover {\n  background: var(--fusion-bg-selected);\n  border-color: var(--fusion-border);\n}\n.row-action:focus-visible {\n  outline: 2px solid var(--fusion-primary);\n  outline-offset: 1px;\n}\n.row-action.row-action-muted {\n  color: var(--fusion-text-light);\n}\n.truncate {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n.footer-left {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  flex-wrap: wrap;\n}\n.footer-sep {\n  color: var(--fusion-text-light, #8a949e);\n}\n.footer-params-toggle {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n.footer-params-toggle:hover {\n  text-decoration: underline;\n}\n.params-menu-wrap {\n  position: relative;\n}\n.params-menu {\n  position: absolute;\n  left: 0;\n  bottom: calc(100% + 4px);\n  z-index: 30;\n  min-width: 260px;\n  max-width: 380px;\n  max-height: 50vh;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--fusion-surface, #fff);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.params-menu-section {\n  margin-bottom: 8px;\n}\n.params-menu-section ul {\n  margin: 4px 0 0;\n  padding-left: 18px;\n}\n.schedule-blocked {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: var(--fusion-text);\n}\n.schedule-blocked h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n}\n.schedule-blocked p {\n  margin: 0;\n  color: var(--fusion-text-light);\n  font-size: 0.9rem;\n}\n.group-filter {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.group-filter select {\n  margin-left: 4px;\n}\n.labs-cell {\n  text-align: center;\n}\n.labs-count {\n  margin-left: 4px;\n  font-size: 0.7rem;\n  color: var(--fusion-text-light);\n}\n.chair-chip {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  border-radius: 8px;\n  font-size: 0.85em;\n  background: var(--fusion-surface-alt, #eef2f6);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  white-space: nowrap;\n}\n.labs-empty {\n  color: var(--fusion-text-light);\n  font-size: 0.8rem;\n}\n.group-badge {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 2px 8px;\n  border: 1px solid var(--fusion-border);\n  border-radius: 999px;\n  color: var(--fusion-text-muted);\n  background: var(--fusion-bg-header);\n}\n.columns-menu-wrap {\n  position: relative;\n}\n.columns-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 4px);\n  z-index: 30;\n  min-width: 200px;\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--fusion-surface, #fff);\n  border: 1px solid var(--fusion-border, #cfd8e0);\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.columns-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 2px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.columns-menu-reset {\n  margin-top: 6px;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListComponent, { className: "ScheduleListComponent", filePath: "src/app/components/schedule-list/schedule-list.ts", lineNumber: 26 });
})();
export {
  ScheduleListComponent
};
//# sourceMappingURL=chunk-EF2QNQVH.js.map
