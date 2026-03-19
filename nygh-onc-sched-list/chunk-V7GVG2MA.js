import {
  PreferencesService,
  ScheduleService
} from "./chunk-4QATV62L.js";
import {
  COLUMN_DEFINITIONS
} from "./chunk-IOVDRASK.js";
import {
  ConfigurationService,
  MPageService,
  openChart
} from "./chunk-B6EEE5SK.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵdomElement,
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
} from "./chunk-372MDVVW.js";

// src/app/components/schedule-list/schedule-list.ts
var _forTrack0 = ($index, $item) => $item.physician_id;
var _forTrack1 = ($index, $item) => $item.key;
function ScheduleListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", p_r1.physician_id)("selected", ctx_r1.preferencesService.selectedPhysicianId() === p_r1.physician_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.physician_name);
  }
}
function ScheduleListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "button", 20);
    \u0275\u0275domListener("click", function ScheduleListComponent_Conditional_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scheduleService.refresh());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scheduleService.error(), " ");
  }
}
function ScheduleListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275domElement(1, "div", 21);
    \u0275\u0275domElementEnd();
  }
}
function ScheduleListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No oncology appointments scheduled for ", ctx_r1.scheduleService.dateDisplay());
  }
}
function ScheduleListComponent_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "th", 23);
    \u0275\u0275domListener("dragstart", function ScheduleListComponent_Conditional_29_For_4_Template_th_dragstart_0_listener($event) {
      const \u0275$index_68_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, \u0275$index_68_r5));
    })("dragover", function ScheduleListComponent_Conditional_29_For_4_Template_th_dragover_0_listener($event) {
      const \u0275$index_68_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, \u0275$index_68_r5));
    })("dragleave", function ScheduleListComponent_Conditional_29_For_4_Template_th_dragleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function ScheduleListComponent_Conditional_29_For_4_Template_th_drop_0_listener($event) {
      const \u0275$index_68_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, \u0275$index_68_r5));
    })("dragend", function ScheduleListComponent_Conditional_29_For_4_Template_th_dragend_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("click", function ScheduleListComponent_Conditional_29_For_4_Template_th_click_0_listener() {
      const col_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSortColumn(col_r6.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const \u0275$index_68_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("drag-over", ctx_r1.dropTargetIndex() === \u0275$index_68_r5)("dragging", ctx_r1.dragColumnIndex() === \u0275$index_68_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", col_r6.header, "", ctx_r1.getSortIndicator(col_r6.key), " ");
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td")(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const appt_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(appt_r7.appt_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appt_r7.appt_status || "\u2014");
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const appt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("title", appt_r7.special_instructions || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r7, col_r8.key));
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 28);
    \u0275\u0275domListener("click", function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const appt_r7 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOpenChart(appt_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext(2).$implicit;
    const appt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r7, col_r8.key));
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext(2).$implicit;
    const appt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCellValue(appt_r7, col_r8.key), " ");
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 25);
    \u0275\u0275conditionalCreate(1, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Conditional_1_Template, 2, 1, "a", 27)(2, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Conditional_2_Template, 1, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const appt_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(appt_r7.encntr_id ? 1 : 2);
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "a", 28);
    \u0275\u0275domListener("click", function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const appt_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOpenApptView(appt_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const appt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r7, col_r8.key));
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const appt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCellValue(appt_r7, col_r8.key));
  }
}
function ScheduleListComponent_Conditional_29_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_0_Template, 3, 3, "td")(1, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_1_Template, 2, 2, "td", 24)(2, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_2_Template, 3, 1, "td", 25)(3, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_3_Template, 3, 1, "td")(4, ScheduleListComponent_Conditional_29_For_7_For_2_Conditional_4_Template, 2, 1, "td");
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    \u0275\u0275conditional(col_r8.key === "appt_status" ? 0 : col_r8.key === "special_instructions" ? 1 : col_r8.key === "patient_name" ? 2 : col_r8.key === "appt_type" ? 3 : 4);
  }
}
function ScheduleListComponent_Conditional_29_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ScheduleListComponent_Conditional_29_For_7_For_2_Template, 5, 1, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderedColumns());
  }
}
function ScheduleListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 18)(1, "thead")(2, "tr");
    \u0275\u0275repeaterCreate(3, ScheduleListComponent_Conditional_29_For_4_Template, 2, 6, "th", 22, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "tbody");
    \u0275\u0275repeaterCreate(6, ScheduleListComponent_Conditional_29_For_7_Template, 3, 0, "tr", null, \u0275\u0275componentInstance().trackBySchEventId, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.orderedColumns());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sortedAppointments());
  }
}
function ScheduleListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last updated: ", ctx_r1.scheduleService.lastUpdated());
  }
}
var ScheduleListComponent = class _ScheduleListComponent {
  scheduleService = inject(ScheduleService);
  configService = inject(ConfigurationService);
  preferencesService = inject(PreferencesService);
  mPage = inject(MPageService);
  dragColumnIndex = signal(null, ...ngDevMode ? [{ debugName: "dragColumnIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  dropTargetIndex = signal(null, ...ngDevMode ? [{ debugName: "dropTargetIndex" }] : (
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
        this.scheduleService.loadAppointments();
        this.scheduleService.startAutoRefresh();
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
    if (appt.person_id && appt.encntr_id) {
      this.mPage.putLog("Opening chart for " + appt.patient_name);
      openChart(appt.person_id, appt.encntr_id);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListComponent, selectors: [["app-schedule-list"]], decls: 34, vars: 10, consts: [[1, "schedule-container"], [1, "schedule-header"], [1, "date-nav"], [1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], ["type", "date", 1, "fusion-input", "date-input", 3, "change", "value"], [1, "date-separator"], [1, "fusion-button", "fusion-small", 3, "click", "disabled"], [1, "header-controls"], [1, "physician-filter"], [1, "fusion-input", 3, "change"], ["value", ""], [3, "value", "selected"], [1, "appt-count"], ["title", "Refresh", 1, "fusion-button", "fusion-outline", "fusion-small", 3, "click"], [1, "error-banner"], [1, "loading-overlay"], [1, "table-container"], [1, "empty-state"], [1, "fusion-grid"], [1, "schedule-footer"], [1, "fusion-button", "fusion-danger", "fusion-small", 3, "click"], [1, "spinner"], ["draggable", "true", 1, "sortable", 3, "drag-over", "dragging"], ["draggable", "true", 1, "sortable", 3, "dragstart", "dragover", "dragleave", "drop", "dragend", "click"], [1, "truncate", 3, "title"], [1, "patient-name"], [1, "fusion-badge"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 3, "click"]], template: function ScheduleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_3_listener() {
        return ctx.scheduleService.prevDay();
      });
      \u0275\u0275text(4, "\xAB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "input", 4);
      \u0275\u0275domListener("change", function ScheduleListComponent_Template_input_change_5_listener($event) {
        return ctx.onStartDateChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "span", 5);
      \u0275\u0275text(7, "to");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "input", 4);
      \u0275\u0275domListener("change", function ScheduleListComponent_Template_input_change_8_listener($event) {
        return ctx.onEndDateChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 3);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_9_listener() {
        return ctx.scheduleService.nextDay();
      });
      \u0275\u0275text(10, "\xBB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "button", 6);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_11_listener() {
        return ctx.scheduleService.goToToday();
      });
      \u0275\u0275text(12, "Today");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 7)(14, "label", 8);
      \u0275\u0275text(15, " Physician: ");
      \u0275\u0275domElementStart(16, "select", 9);
      \u0275\u0275domListener("change", function ScheduleListComponent_Template_select_change_16_listener($event) {
        return ctx.onPhysicianChange($event);
      });
      \u0275\u0275domElementStart(17, "option", 10);
      \u0275\u0275text(18, "All Physicians");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(19, ScheduleListComponent_For_20_Template, 2, 3, "option", 11, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "span", 12);
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "button", 13);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_23_listener() {
        return ctx.scheduleService.refresh();
      });
      \u0275\u0275text(24, "\u21BB");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(25, ScheduleListComponent_Conditional_25_Template, 4, 1, "div", 14);
      \u0275\u0275conditionalCreate(26, ScheduleListComponent_Conditional_26_Template, 2, 0, "div", 15);
      \u0275\u0275domElementStart(27, "div", 16);
      \u0275\u0275conditionalCreate(28, ScheduleListComponent_Conditional_28_Template, 2, 1, "div", 17)(29, ScheduleListComponent_Conditional_29_Template, 8, 0, "table", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "div", 19)(31, "span");
      \u0275\u0275text(32, "Auto-refreshes every 60s");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(33, ScheduleListComponent_Conditional_33_Template, 2, 1, "span");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.toIsoDate(ctx.scheduleService.startDate()));
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("value", ctx.toIsoDate(ctx.scheduleService.endDate()));
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("disabled", ctx.scheduleService.isToday());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.scheduleService.physicians());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Showing ", ctx.scheduleService.appointmentCount(), " appointments");
      \u0275\u0275advance();
      \u0275\u0275classProp("spinning", ctx.scheduleService.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.scheduleService.error() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.scheduleService.loading() && ctx.sortedAppointments().length === 0 ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sortedAppointments().length === 0 && !ctx.scheduleService.loading() && !ctx.scheduleService.error() ? 28 : 29);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.scheduleService.lastUpdated() ? 33 : -1);
    }
  }, styles: ["\n\n.schedule-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.appt-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.table-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #edf0f3;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.dragging[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.fusion-grid[_ngcontent-%COMP%]   th.drag-over[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--fusion-primary);\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.truncate[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=schedule-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleListComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="schedule-container">
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
              @for (col of orderedColumns(); track col.key) {
                @if (col.key === 'appt_status') {
                  <td><span class="fusion-badge" [class]="getStatusClass(appt.appt_status)">{{ appt.appt_status || '\\u2014' }}</span></td>
                } @else if (col.key === 'special_instructions') {
                  <td class="truncate" [title]="appt.special_instructions || ''">{{ getCellValue(appt, col.key) }}</td>
                } @else if (col.key === 'patient_name') {
                  <td class="patient-name">@if (appt.encntr_id) { <a href="javascript:void(0)" (click)="onOpenChart(appt)">{{ getCellValue(appt, col.key) }}</a> } @else { {{ getCellValue(appt, col.key) }} }</td>
                } @else if (col.key === 'appt_type') {
                  <td><a href="javascript:void(0)" (click)="onOpenApptView(appt)">{{ getCellValue(appt, col.key) }}</a></td>
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
    <span>Auto-refreshes every 60s</span>
    @if (scheduleService.lastUpdated()) {
      <span>Last updated: {{ scheduleService.lastUpdated() }}</span>
    }
  </div>
</div>
`, styles: ["/* src/app/components/schedule-list/schedule-list.scss */\n.schedule-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 1rem;\n  background: var(--fusion-bg-header);\n  border-bottom: 1px solid var(--fusion-border);\n  flex-shrink: 0;\n}\n.date-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input {\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.date-separator {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.header-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.physician-filter {\n  font-size: 0.8rem;\n  color: var(--fusion-text-muted);\n}\n.physician-filter select {\n  margin-left: 4px;\n}\n.appt-count {\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n}\n.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: var(--fusion-danger-bg);\n  color: var(--fusion-danger-text);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.8rem;\n}\n.loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--fusion-border);\n  border-top-color: var(--fusion-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.table-container {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.fusion-grid th {\n  cursor: pointer;\n}\n.fusion-grid th.sortable:hover {\n  background: #edf0f3;\n}\n.fusion-grid th.dragging {\n  opacity: 0.4;\n}\n.fusion-grid th.drag-over {\n  border-left: 2px solid var(--fusion-primary);\n}\n.patient-name {\n  font-weight: 600;\n}\ntd a {\n  color: var(--fusion-primary);\n  text-decoration: none;\n}\ntd a:hover {\n  text-decoration: underline;\n}\n.truncate {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3.75rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.schedule-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background: var(--fusion-bg-header);\n  border-top: 1px solid var(--fusion-border);\n  font-size: 0.75rem;\n  color: var(--fusion-text-light);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=schedule-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListComponent, { className: "ScheduleListComponent", filePath: "src/app/components/schedule-list/schedule-list.ts", lineNumber: 15 });
})();
export {
  ScheduleListComponent
};
//# sourceMappingURL=chunk-V7GVG2MA.js.map
