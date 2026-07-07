import {
  CustomService,
  MPageService
} from "./chunk-UOIJNSGV.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VK25UXFS.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/content/view-help.content.ts
var HELP_SECTIONS = [
  {
    id: "overview",
    title: "Overview \u2014 how the list is built",
    body: [
      "This view lists the oncology appointments for the selected date range. It refreshes automatically, and each row is one scheduled patient visit. What you can see is governed by your position (job role) and the appointment-type group(s) it belongs to.",
      'The list includes every patient appointment whose type is in your group and whose status is one of the configured "states shown". Cancelled and deleted appointments are always excluded. Each appointment appears as exactly one row: the live booking shows whenever its date falls inside the selected range. When a moved appointment\u2019s new date is outside the range and the Rescheduled state is enabled (it is by default), its most recent vacated slot shows with a Rescheduled badge instead.'
    ],
    items: [
      {
        term: "Data source",
        description: "Appointments come directly from the Cerner scheduling system.",
        technical: "CCL nygh_onc_sched_service Q1: SCH_APPT (role PATIENT, active, current version) joined to SCH_EVENT (canceled/deleted excluded) and PERSON, filtered by beg_dt_tm range, appt_type_cd group membership, and the state_meaning whitelist. One row per sch_event_id \u2014 the live (non-RESCHEDULED) instance wins when in range; otherwise the latest vacated instance shows with its Rescheduled state (Mod 029)."
      }
    ]
  },
  {
    id: "filters",
    title: "Filters & top controls",
    items: [
      {
        term: "Date range / \xAB \xBB / Today",
        description: "Pick the start and end date; the arrows step one day at a time and Today returns to the current date.",
        technical: "Drives the scheduleStartDate/scheduleEndDate parameters of the CCL query."
      },
      {
        term: "Group",
        description: 'Shown only if you belong to more than one appointment-type group (superusers also get "All groups"). Choosing a group changes which appointment types \u2014 and which lab set \u2014 the list uses.',
        technical: "AccessControlService.resolvedAppointmentTypes(); groups are configured on the Configuration tab and matched to your position (code set 88)."
      },
      {
        term: "Physician",
        description: "Narrows the list to one provider. The choices are the attending, ordering provider, and scheduling resource names present in the currently loaded rows.",
        technical: "Client-side filter; not part of the CCL query."
      },
      {
        term: "Showing N appointments",
        description: "The number of rows after the physician filter is applied."
      },
      {
        term: "Columns \u25BE",
        description: "Show or hide columns, or reset to your role\u2019s defaults (see Personalization below)."
      },
      {
        term: "Refresh \u21BB",
        description: "Reloads the list immediately; the icon spins while loading."
      }
    ]
  },
  {
    id: "columns",
    title: "Columns \u2014 what each one shows and where it comes from",
    items: [
      {
        term: "Actions",
        description: "Row buttons for opening the chart, the appointment view, and order details (see Row actions below)."
      },
      {
        term: "Time",
        description: "The appointment\u2019s scheduled start time.",
        technical: "SCH_APPT.beg_dt_tm (Q1)."
      },
      {
        term: "Location",
        description: "Where the patient is expected. Defaults to the appointment\u2019s booked location, but switches to the encounter\u2019s nursing unit once a visit has an attached encounter.",
        technical: "SCH_APPT.appt_location_cd (Q1), overridden by ENCOUNTER.loc_nurse_unit_cd (Q2)."
      },
      {
        term: "Patient Name",
        description: "The patient\u2019s name. A small bed icon appears when the patient currently has an active inpatient or emergency encounter (see Badges & indicators).",
        technical: "PERSON.name_full_formatted (Q1); indicator from Q9."
      },
      {
        term: "Enc Type",
        description: "The encounter type for the visit \u2014 shown only when an encounter is actually attached to the appointment.",
        technical: "ENCOUNTER.encntr_type_cd (Q2). Blank for rows that only have a chart-link fallback encounter, by design."
      },
      {
        term: "Attending",
        description: "The encounter\u2019s attending physician \u2014 and nothing else. If the visit has no attending relationship the cell shows a dash; no other name is substituted.",
        technical: "ENCNTR_PRSNL_RELTN with relation ATTENDDOC (code set 333), active and currently effective (Q3c). An experimental fallback (Q5b, getChartLinkAttending) fills it from the chart-link encounter when no encounter is attached."
      },
      {
        term: "Appt Type",
        description: "The scheduled appointment type. A chair chip appears beside it when a treatment chair is booked on the visit (see Badges & indicators).",
        technical: "SCH_EVENT.appt_type_cd display (Q1)."
      },
      {
        term: "Status",
        description: "The appointment\u2019s scheduling state, shown as a coloured badge. A rescheduled-away instance reports its own Rescheduled state.",
        technical: "SCH_APPT.sch_state_cd display (Q1), taken from the row itself rather than the event so moved instances label correctly."
      },
      {
        term: "Reason",
        description: "The reason for the visit.",
        technical: '"Reason for Exam" order-entry field from SCH_EVENT_DETAIL (Q4), falling back to the attached order\u2019s ORDER_DETAIL (Q4c).'
      },
      {
        term: "Requested Date",
        description: "The requested start date for the visit.",
        technical: '"Requested Start Date/Time" OE field from SCH_EVENT_DETAIL (Q4), falling back to ORDER_DETAIL (Q4c), then the order\u2019s current_start_dt_tm (Q4b).'
      },
      {
        term: "Day of Tx",
        description: 'The treatment day or phase label from the ordered protocol (e.g. "Day 8").',
        technical: '"PowerPlan Scheduled Phase" OE field from the attached order\u2019s ORDER_DETAIL (Q4c); not stored on the scheduling event at this site.'
      },
      {
        term: "Ordered Treatment",
        description: "The ordered treatment or protocol activity for the visit.",
        technical: '"PowerPlan Activity" OE field from ORDER_DETAIL (Q4c).'
      },
      {
        term: "Special Instructions",
        description: "Free-text scheduling instructions. Long text is truncated \u2014 hover to see the full note.",
        technical: '"Special Instructions" OE field from SCH_EVENT_DETAIL (Q4) or ORDER_DETAIL (Q4c).'
      },
      {
        term: "Labs",
        description: "A flask button that opens the labs panel for the patient (see Labs below)."
      }
    ]
  },
  {
    id: "enrichment",
    title: "How data gets attached to a row (for administrators)",
    body: [
      "The appointment row is loaded first, then enriched step by step. If a cell is blank, the step that fills it found nothing for that visit.",
      "Order of enrichment: the appointment itself (Q1) \u2192 attached encounter (Q2) \u2192 scheduling resource (Q3) \u2192 chair (Q3d) \u2192 attached order (Q3b) \u2192 ordering provider (Q3b2) \u2192 attending (Q3c) \u2192 order-entry fields such as reason and instructions (Q4/Q4b/Q4c) \u2192 chart-link fallback encounter (Q5) \u2192 attending fallback via chart-link (Q5b, experimental) \u2192 labs (Q6\u2013Q8b) \u2192 inpatient/ED indicator (Q9)."
    ]
  },
  {
    id: "actions",
    title: "Row actions",
    items: [
      {
        term: "Open patient chart (person icon)",
        description: "Opens PowerChart for the patient. Uses the visit\u2019s attached encounter when there is one; otherwise the chart-link fallback encounter; otherwise the chart opens person-only (the button appears dimmed).",
        technical: "openChart(person_id, encntr_id or chart_link_encntr_id); person-only launches APPLINK Powerchart.exe /PERSONID."
      },
      {
        term: "Open appointment view (calendar icon)",
        description: "Opens the Cerner scheduling appointment view for the visit, including its booking and action history.",
        technical: 'DiscernObjectFactory("PEXSCHEDULINGACTIONS").ShowView(sch_event_id).'
      },
      {
        term: "Open order details (clipboard icon)",
        description: "Shown only when an order is attached to the appointment; opens the order information viewer.",
        technical: 'DiscernObjectFactory("PVVIEWERMPAGE").LaunchOrderInfoViewer(order_id); order linked via SCH_EVENT_ATTACH (Q3b).'
      }
    ]
  },
  {
    id: "indicators",
    title: "Badges, chips & indicators",
    items: [
      {
        term: "Status badge",
        description: "Colour-coded appointment status: Confirmed, Checked-in, Pending, Rescheduled, Cancelled, and No-show each have a distinct colour; anything else is neutral grey."
      },
      {
        term: "Chair chip (beside Appt Type)",
        description: "The treatment chair booked for the visit. Hover shows the full resource name.",
        technical: 'Resource-role SCH_APPT rows whose CODE_VALUE display key contains the configured chair name pattern (default "Chair") \u2014 NYGH chairs carry no resource typing, so matching is by naming convention (Q3d).'
      },
      {
        term: "Inpatient/ED indicator (bed icon by the patient name)",
        description: "The patient currently has an active, not-yet-discharged encounter of a watched type (typically Inpatient or Emergency). Hover shows which type.",
        technical: "ENCOUNTER rows that are active with no discharge date and a type in the configured indicator list (code set 71), currently effective (Q9)."
      }
    ]
  },
  {
    id: "labs",
    title: "Labs",
    body: [
      "The flask button opens a panel with two sections covering the group\u2019s configured lookback window (72 hours unless configured otherwise)."
    ],
    items: [
      {
        term: "Results",
        description: "Verified results for the group\u2019s lab set within the window: name, time, value with units, status, and who verified it. Abnormal and critical values are highlighted.",
        technical: "The configured event set is expanded via V500_EVENT_SET_EXPLODE (Q6); matching CLINICAL_EVENT rows must be active, published, and still valid (Q7/Q7b)."
      },
      {
        term: "Lab Orders",
        description: "Outstanding lab orders in the window \u2014 order name, time, order and department status, and the ordering user.",
        technical: "ORDERS with lab activity type, excluding completed/deleted/cancelled (Q8); ordering provider resolved via ORDER_ACTION (Q8b)."
      },
      {
        term: "Whether the flask appears",
        description: "Governed by the group\u2019s lab configuration on the Configuration tab; groups without a lab event set show no lab data."
      }
    ]
  },
  {
    id: "footer",
    title: "Footer bar",
    items: [
      {
        term: "Auto-refresh",
        description: "How often the list reloads (or that auto-refresh is disabled). Configured on the Configuration tab."
      },
      {
        term: "Group & Labs summary",
        description: "The active group and the lab set name with its lookback window."
      },
      {
        term: '"N appointment types \u25B2" popover',
        description: "Click to see exactly which appointment types are included, the appointment states shown, the inpatient/ED indicator types, the chair pattern, and any active physician filter \u2014 the live values behind the current list."
      },
      {
        term: "Last updated",
        description: "The time of the most recent successful load."
      }
    ]
  },
  {
    id: "personalization",
    title: "Personalization \u2014 columns, sorting, and saved preferences",
    items: [
      {
        term: "Columns menu",
        description: 'Check or uncheck columns to show or hide them; "Reset to defaults" returns to your role\u2019s default set.'
      },
      {
        term: "Sorting",
        description: "Click a column header to sort ascending, again for descending, and a third time to clear. Some columns (Actions, Labs) are not sortable."
      },
      {
        term: "Reorder & resize",
        description: "Drag a column header to move the column; drag its right edge to resize it."
      },
      {
        term: "Saved per user",
        description: "Your column order, visibility, widths, sort, and physician filter are saved to your profile and restored the next time you open the page.",
        technical: "Persisted per user via Clinical Office DM_INFO (domain ONC_SCHED / USER_PREFS) with a localStorage fast path."
      },
      {
        term: "Role defaults",
        description: "Administrators can hide specific columns by default for specific positions. Your own show/hide choices always win over the role default.",
        technical: "COLUMN_ROLE_DEFAULTS in the app configuration, editable on the Configuration tab."
      }
    ]
  }
];

// src/app/models/help-content.model.ts
function toEditableSection(shipped) {
  return {
    id: shipped.id,
    title: shipped.title,
    bodyHtml: (shipped.body ?? []).map((p) => `<p>${p}</p>`).join(""),
    items: (shipped.items ?? []).map((i) => __spreadValues({}, i)),
    media: []
  };
}
function mergeHelpSections(stored, shipped) {
  const storedIds = new Set(stored.map((s) => s.id));
  const appended = shipped.filter((s) => !storedIds.has(s.id)).map(toEditableSection);
  return [...stored, ...appended];
}
function mergeEditableSections(local, effective) {
  const localIds = new Set(local.map((s) => s.id));
  const appended = effective.filter((s) => !localIds.has(s.id));
  return [...local, ...appended];
}
function hasUnsavedHelpChanges(loaded, current, baseline) {
  if (!loaded || current.length === 0)
    return false;
  return JSON.stringify(current) !== JSON.stringify(baseline);
}

// src/app/services/help-content.service.ts
var DMINFO_DOMAIN = "ONC_SCHED";
var CONTENT_NAME = "HELP_CONTENT";
var IMAGE_NAME = "HELP_IMAGE";
function readLongText(result) {
  return result?.dmInfo?.[0]?.longText ?? result?.longText ?? result?.infoLongText;
}
var HelpContentService = class _HelpContentService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  _storedSections = signal(null, ...ngDevMode ? [{ debugName: "_storedSections" }] : (
    /* istanbul ignore next */
    []
  ));
  _loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = false;
  /** Monotonic request token — bumped on each load and on save; stale read callbacks are discarded. */
  loadToken = 0;
  images = /* @__PURE__ */ new Map();
  storedSections = this._storedSections.asReadonly();
  loaded = this._loaded.asReadonly();
  /** Stored sections (when present) merged with shipped defaults; shipped-only until loaded. */
  effectiveSections = computed(() => mergeHelpSections(this._storedSections() ?? [], HELP_SECTIONS), ...ngDevMode ? [{ debugName: "effectiveSections" }] : (
    /* istanbul ignore next */
    []
  ));
  loadContent() {
    if (this._loaded() || this.loading)
      return;
    this.loading = true;
    const token = ++this.loadToken;
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = CONTENT_NAME;
    dmInfo.infoDomainId = 0;
    this.customService.executeDmInfoAction("loadHelpContent", "r", [dmInfo], () => {
      if (token !== this.loadToken) {
        this.mPage.putLog("Stale help content response ignored");
        return;
      }
      try {
        const result = this.customService.get("loadHelpContent");
        const longText = readLongText(result);
        if (longText) {
          const parsed = JSON.parse(longText);
          if (Array.isArray(parsed.sections)) {
            this._storedSections.set(parsed.sections);
          }
        }
      } catch {
        this.mPage.putLog("Help content record unreadable - using built-in help");
      }
      this.loading = false;
      this._loaded.set(true);
    });
  }
  /**
   * Re-invoke loadContent() after a stalled attempt (e.g. the dm_info
   * callback never fired). Resets the in-flight `loading` guard so
   * loadContent() doesn't just no-op; `_loaded` is left as-is since a prior
   * attempt may have already succeeded by the time retry is requested.
   */
  retryLoad() {
    this.loading = false;
    this.loadContent();
  }
  saveContent(sections) {
    this.loadToken++;
    const payload = {
      UPDT_DT_TM: (/* @__PURE__ */ new Date()).toISOString(),
      sections
    };
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = CONTENT_NAME;
    dmInfo.infoDomainId = 0;
    dmInfo.infoLongText = JSON.stringify(payload);
    this.customService.executeDmInfoAction("saveHelpContent", "w", [dmInfo], () => {
      this.mPage.putLog("Help content saved");
    });
    this._storedSections.set(sections);
    this._loaded.set(true);
  }
  isShippedId(id) {
    return HELP_SECTIONS.some((s) => s.id === id);
  }
  defaultFor(id) {
    const shipped = HELP_SECTIONS.find((s) => s.id === id);
    return shipped ? toEditableSection(shipped) : null;
  }
  getCachedImage(imageId) {
    return this.images.get(imageId);
  }
  loadImage(imageId, cb) {
    const cached = this.images.get(imageId);
    if (cached) {
      cb(cached);
      return;
    }
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = IMAGE_NAME;
    dmInfo.infoDomainId = imageId;
    this.customService.executeDmInfoAction(`loadHelpImage${imageId}`, "r", [dmInfo], () => {
      try {
        const result = this.customService.get(`loadHelpImage${imageId}`);
        const longText = readLongText(result);
        if (longText) {
          const img = JSON.parse(longText);
          this.images.set(imageId, img);
          cb(img);
          return;
        }
      } catch {
        this.mPage.putLog(`Help image ${imageId} unreadable`);
      }
      cb(null);
    });
  }
  saveImage(image, cb) {
    const imageId = Date.now();
    const dmInfo = this.customService.emptyDmInfo;
    dmInfo.infoDomain = DMINFO_DOMAIN;
    dmInfo.infoName = IMAGE_NAME;
    dmInfo.infoDomainId = imageId;
    dmInfo.infoLongText = JSON.stringify(image);
    this.customService.executeDmInfoAction(`saveHelpImage${imageId}`, "w", [dmInfo], () => {
      this.mPage.putLog(`Help image ${imageId} saved`);
    });
    this.images.set(imageId, image);
    cb(imageId);
  }
  static \u0275fac = function HelpContentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HelpContentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HelpContentService, factory: _HelpContentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpContentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HELP_SECTIONS,
  mergeHelpSections,
  mergeEditableSections,
  hasUnsavedHelpChanges,
  HelpContentService
};
//# sourceMappingURL=chunk-7BOPBRD7.js.map
