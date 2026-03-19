import {
  PreferencesService,
  ScheduleService
} from "./chunk-Y6AQ3NNX.js";
import {
  COLUMN_DEFINITIONS
} from "./chunk-YU6WF6BO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ConfigurationService,
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
} from "./chunk-RVGYGEA5.js";

// src/app/components/schedule-list/schedule-list.ts
var _forTrack0 = ($index, $item) => $item.physician_id;
var _forTrack1 = ($index, $item) => $item.key;
function ScheduleListComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 10);
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
function ScheduleListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "button", 19);
    \u0275\u0275domListener("click", function ScheduleListComponent_Conditional_23_Template_button_click_2_listener() {
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
function ScheduleListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275domElement(1, "div", 20);
    \u0275\u0275domElementEnd();
  }
}
function ScheduleListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No oncology appointments scheduled for ", ctx_r1.scheduleService.selectedDate());
  }
}
function ScheduleListComponent_Conditional_27_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "th", 22);
    \u0275\u0275domListener("dragstart", function ScheduleListComponent_Conditional_27_For_4_Template_th_dragstart_0_listener($event) {
      const \u0275$index_64_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, \u0275$index_64_r5));
    })("dragover", function ScheduleListComponent_Conditional_27_For_4_Template_th_dragover_0_listener($event) {
      const \u0275$index_64_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, \u0275$index_64_r5));
    })("dragleave", function ScheduleListComponent_Conditional_27_For_4_Template_th_dragleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function ScheduleListComponent_Conditional_27_For_4_Template_th_drop_0_listener($event) {
      const \u0275$index_64_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, \u0275$index_64_r5));
    })("dragend", function ScheduleListComponent_Conditional_27_For_4_Template_th_dragend_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("click", function ScheduleListComponent_Conditional_27_For_4_Template_th_click_0_listener() {
      const col_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSortColumn(col_r6.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const \u0275$index_64_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("drag-over", ctx_r1.dropTargetIndex() === \u0275$index_64_r5)("dragging", ctx_r1.dragColumnIndex() === \u0275$index_64_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", col_r6.header, "", ctx_r1.getSortIndicator(col_r6.key), " ");
  }
}
function ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td")(1, "span", 25);
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
function ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 23);
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
function ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 24);
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
function ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_3_Template(rf, ctx) {
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
function ScheduleListComponent_Conditional_27_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_0_Template, 3, 3, "td")(1, ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_1_Template, 2, 2, "td", 23)(2, ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_2_Template, 2, 1, "td", 24)(3, ScheduleListComponent_Conditional_27_For_7_For_2_Conditional_3_Template, 2, 1, "td");
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    \u0275\u0275conditional(col_r8.key === "appt_status" ? 0 : col_r8.key === "special_instructions" ? 1 : col_r8.key === "patient_name" ? 2 : 3);
  }
}
function ScheduleListComponent_Conditional_27_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ScheduleListComponent_Conditional_27_For_7_For_2_Template, 4, 1, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderedColumns());
  }
}
function ScheduleListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr");
    \u0275\u0275repeaterCreate(3, ScheduleListComponent_Conditional_27_For_4_Template, 2, 6, "th", 21, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "tbody");
    \u0275\u0275repeaterCreate(6, ScheduleListComponent_Conditional_27_For_7_Template, 3, 0, "tr", null, \u0275\u0275componentInstance().trackBySchEventId, true);
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
function ScheduleListComponent_Conditional_31_Template(rf, ctx) {
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
      return "status-confirmed";
    if (s.includes("checked") || s.includes("check"))
      return "status-checked-in";
    if (s.includes("pending"))
      return "status-pending";
    if (s.includes("cancel"))
      return "status-cancelled";
    if (s.includes("no show") || s.includes("noshow"))
      return "status-no-show";
    return "status-unknown";
  }
  getCellValue(appointment, key) {
    return appointment[key] ?? "\u2014";
  }
  trackBySchEventId(_index, appointment) {
    return appointment.sch_event_id;
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListComponent, selectors: [["app-schedule-list"]], decls: 32, vars: 9, consts: [[1, "schedule-container"], [1, "schedule-header"], [1, "date-nav"], [1, "nav-btn", 3, "click"], [1, "current-date"], [1, "today-btn", 3, "click", "disabled"], [1, "header-controls"], [1, "physician-filter"], [3, "change"], ["value", ""], [3, "value", "selected"], [1, "appt-count"], ["title", "Refresh", 1, "refresh-btn", 3, "click"], [1, "error-banner"], [1, "loading-overlay"], [1, "table-container"], [1, "empty-state"], [1, "schedule-table"], [1, "schedule-footer"], [3, "click"], [1, "spinner"], ["draggable", "true", 1, "sortable", 3, "drag-over", "dragging"], ["draggable", "true", 1, "sortable", 3, "dragstart", "dragover", "dragleave", "drop", "dragend", "click"], [1, "truncate", 3, "title"], [1, "patient-name"], [1, "status-badge"]], template: function ScheduleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_3_listener() {
        return ctx.scheduleService.prevDay();
      });
      \u0275\u0275text(4, "\xAB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 3);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_7_listener() {
        return ctx.scheduleService.nextDay();
      });
      \u0275\u0275text(8, "\xBB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 5);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_9_listener() {
        return ctx.scheduleService.goToToday();
      });
      \u0275\u0275text(10, "Today");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 6)(12, "label", 7);
      \u0275\u0275text(13, " Physician: ");
      \u0275\u0275domElementStart(14, "select", 8);
      \u0275\u0275domListener("change", function ScheduleListComponent_Template_select_change_14_listener($event) {
        return ctx.onPhysicianChange($event);
      });
      \u0275\u0275domElementStart(15, "option", 9);
      \u0275\u0275text(16, "All Physicians");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(17, ScheduleListComponent_For_18_Template, 2, 3, "option", 10, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "span", 11);
      \u0275\u0275text(20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "button", 12);
      \u0275\u0275domListener("click", function ScheduleListComponent_Template_button_click_21_listener() {
        return ctx.scheduleService.refresh();
      });
      \u0275\u0275text(22, "\u21BB");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(23, ScheduleListComponent_Conditional_23_Template, 4, 1, "div", 13);
      \u0275\u0275conditionalCreate(24, ScheduleListComponent_Conditional_24_Template, 2, 0, "div", 14);
      \u0275\u0275domElementStart(25, "div", 15);
      \u0275\u0275conditionalCreate(26, ScheduleListComponent_Conditional_26_Template, 2, 1, "div", 16)(27, ScheduleListComponent_Conditional_27_Template, 8, 0, "table", 17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 18)(29, "span");
      \u0275\u0275text(30, "Auto-refreshes every 60s");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(31, ScheduleListComponent_Conditional_31_Template, 2, 1, "span");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.scheduleService.selectedDate());
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("disabled", ctx.scheduleService.isToday());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.scheduleService.physicians());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Showing ", ctx.scheduleService.appointmentCount(), " appointments");
      \u0275\u0275advance();
      \u0275\u0275classProp("spinning", ctx.scheduleService.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.scheduleService.error() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.scheduleService.loading() && ctx.sortedAppointments().length === 0 ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sortedAppointments().length === 0 && !ctx.scheduleService.loading() && !ctx.scheduleService.error() ? 26 : 27);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.scheduleService.lastUpdated() ? 31 : -1);
    }
  }, styles: ["\n\n.schedule-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-shrink: 0;\n}\n.date-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  padding: 4px 10px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.current-date[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  min-width: 130px;\n  text-align: center;\n}\n.today-btn[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: #fff;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  margin-left: 4px;\n}\n.today-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.physician-filter[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.physician-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 3px 8px;\n  font-size: 13px;\n  margin-left: 4px;\n}\n.appt-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: transform 0.3s;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.refresh-btn.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.error-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #721c24;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.table-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.schedule-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.schedule-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n  background: #e9ecef;\n  border-bottom: 2px solid #dee2e6;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.schedule-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #dde1e5;\n}\n.schedule-table[_ngcontent-%COMP%]   th.dragging[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.schedule-table[_ngcontent-%COMP%]   th.drag-over[_ngcontent-%COMP%] {\n  border-left: 2px solid #2563eb;\n}\n.schedule-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid #eee;\n}\n.schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fafafa;\n}\n.schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.truncate[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n}\n.status-badge.status-confirmed[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-badge.status-checked-in[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.status-badge.status-no-show[_ngcontent-%COMP%] {\n  background: #6b7280;\n}\n.status-badge.status-unknown[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6b7280;\n  border: 1px solid #ccc;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  color: #888;\n  font-size: 14px;\n}\n.schedule-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 11px;\n  color: #888;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=schedule-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleListComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="schedule-container">
  <!-- Header Bar -->
  <div class="schedule-header">
    <div class="date-nav">
      <button class="nav-btn" (click)="scheduleService.prevDay()">&laquo;</button>
      <span class="current-date">{{ scheduleService.selectedDate() }}</span>
      <button class="nav-btn" (click)="scheduleService.nextDay()">&raquo;</button>
      <button class="today-btn" [disabled]="scheduleService.isToday()" (click)="scheduleService.goToToday()">Today</button>
    </div>
    <div class="header-controls">
      <label class="physician-filter">
        Physician:
        <select (change)="onPhysicianChange($event)">
          <option value="">All Physicians</option>
          @for (p of scheduleService.physicians(); track p.physician_id) {
            <option [value]="p.physician_id" [selected]="preferencesService.selectedPhysicianId() === p.physician_id">{{ p.physician_name }}</option>
          }
        </select>
      </label>
      <span class="appt-count">Showing {{ scheduleService.appointmentCount() }} appointments</span>
      <button class="refresh-btn" (click)="scheduleService.refresh()" [class.spinning]="scheduleService.loading()" title="Refresh">&#8635;</button>
    </div>
  </div>

  <!-- Error Banner -->
  @if (scheduleService.error()) {
    <div class="error-banner">
      {{ scheduleService.error() }}
      <button (click)="scheduleService.refresh()">Retry</button>
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
      <div class="empty-state">No oncology appointments scheduled for {{ scheduleService.selectedDate() }}</div>
    } @else {
      <table class="schedule-table">
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
                  <td><span class="status-badge" [class]="getStatusClass(appt.appt_status)">{{ appt.appt_status || '\\u2014' }}</span></td>
                } @else if (col.key === 'special_instructions') {
                  <td class="truncate" [title]="appt.special_instructions || ''">{{ getCellValue(appt, col.key) }}</td>
                } @else if (col.key === 'patient_name') {
                  <td class="patient-name">{{ getCellValue(appt, col.key) }}</td>
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
`, styles: ["/* src/app/components/schedule-list/schedule-list.scss */\n.schedule-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.schedule-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-shrink: 0;\n}\n.date-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.nav-btn {\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  padding: 4px 10px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.nav-btn:hover {\n  background: #e9ecef;\n}\n.current-date {\n  font-size: 16px;\n  font-weight: 600;\n  min-width: 130px;\n  text-align: center;\n}\n.today-btn {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: #fff;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  margin-left: 4px;\n}\n.today-btn:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.header-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.physician-filter {\n  font-size: 13px;\n  color: #555;\n}\n.physician-filter select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 3px 8px;\n  font-size: 13px;\n  margin-left: 4px;\n}\n.appt-count {\n  font-size: 12px;\n  color: #888;\n}\n.refresh-btn {\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: transform 0.3s;\n}\n.refresh-btn:hover {\n  background: #e9ecef;\n}\n.refresh-btn.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.error-banner button {\n  background: #721c24;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 4px 12px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.table-container {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.schedule-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.schedule-table thead {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.schedule-table th {\n  padding: 8px 10px;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n  background: #e9ecef;\n  border-bottom: 2px solid #dee2e6;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.schedule-table th.sortable:hover {\n  background: #dde1e5;\n}\n.schedule-table th.dragging {\n  opacity: 0.4;\n}\n.schedule-table th.drag-over {\n  border-left: 2px solid #2563eb;\n}\n.schedule-table td {\n  padding: 7px 10px;\n  border-bottom: 1px solid #eee;\n}\n.schedule-table tbody tr:nth-child(even) {\n  background: #fafafa;\n}\n.schedule-table tbody tr:hover {\n  background: #f1f5f9;\n}\n.patient-name {\n  font-weight: 500;\n}\n.truncate {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n}\n.status-badge.status-confirmed {\n  background: #16a34a;\n}\n.status-badge.status-checked-in {\n  background: #2563eb;\n}\n.status-badge.status-pending {\n  background: #d97706;\n}\n.status-badge.status-cancelled {\n  background: #dc2626;\n}\n.status-badge.status-no-show {\n  background: #6b7280;\n}\n.status-badge.status-unknown {\n  background: transparent;\n  color: #6b7280;\n  border: 1px solid #ccc;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  color: #888;\n  font-size: 14px;\n}\n.schedule-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 11px;\n  color: #888;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=schedule-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListComponent, { className: "ScheduleListComponent", filePath: "src/app/components/schedule-list/schedule-list.ts", lineNumber: 14 });
})();
export {
  ScheduleListComponent
};
//# sourceMappingURL=chunk-5QS4G4ND.js.map
