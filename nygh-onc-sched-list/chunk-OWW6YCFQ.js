// src/app/models/schedule.model.ts
function resolveEncntrIndicatorCategory(typeCd, typeDisplay, categories) {
  const mapped = categories?.[String(typeCd)];
  if (mapped)
    return mapped;
  return /emerg/i.test(typeDisplay) ? "emergency" : "inpatient";
}
function cellDisplayValue(appt, key) {
  if (key === "attending_physician") {
    return appt.attending_physician || "\u2014";
  }
  return appt[key] ?? "\u2014";
}
var DEFAULT_PREFERENCES = {
  physician_id: null,
  sort_column: null,
  sort_direction: null,
  column_order: [
    "actions",
    "appt_time",
    "patient_location",
    "patient_name",
    "encounter_type",
    "attending_physician",
    "appt_type",
    "appt_status",
    "reason_for_visit",
    "requested_date",
    "day_of_treatment",
    "ordered_treatment",
    "special_instructions",
    "labs"
  ],
  column_visibility: {},
  column_widths: {}
};
var DEFAULT_LAB_LOOKBACK_HOURS = 72;
var MIN_LAB_LOOKBACK_HOURS = 1;
var MAX_LAB_LOOKBACK_HOURS = 720;
var DEFAULT_APPT_STATE_MEANINGS = ["CONFIRMED", "CHECKED IN", "CHECKED OUT", "SCHEDULED", "RESCHEDULED"];
var KNOWN_APPT_STATE_MEANINGS = [
  "CONFIRMED",
  "CHECKED IN",
  "CHECKED OUT",
  "SCHEDULED",
  "PENDING",
  "HOLD",
  "RESCHEDULED"
];
var DEFAULT_APPT_VIEW_ACTION = "view";
var SUPERUSER_OVERRIDE_ALL = "__ALL__";
var DEFAULT_REFRESH_INTERVAL_SECONDS = 60;
var MIN_REFRESH_INTERVAL_SECONDS = 10;
var MAX_REFRESH_INTERVAL_SECONDS = 3600;
var ALL_TABS = [
  { key: "schedule", label: "Schedule" },
  { key: "config", label: "Configuration" },
  { key: "security", label: "Security" },
  { key: "help-editor", label: "Help Editor" },
  { key: "advanced", label: "Advanced", superuserOnly: true }
];
var COLUMN_DEFINITIONS = [
  { key: "actions", header: "Actions", sortable: false },
  { key: "appt_time", header: "Time" },
  { key: "patient_location", header: "Location" },
  { key: "patient_name", header: "Patient Name" },
  { key: "encounter_type", header: "Enc Type" },
  { key: "attending_physician", header: "Attending" },
  { key: "appt_type", header: "Appt Type" },
  { key: "appt_status", header: "Status" },
  { key: "reason_for_visit", header: "Reason" },
  { key: "requested_date", header: "Requested Date" },
  { key: "day_of_treatment", header: "Day of Tx" },
  { key: "ordered_treatment", header: "Ordered Treatment" },
  { key: "special_instructions", header: "Special Instructions" },
  { key: "labs", header: "Labs", sortable: false }
];

export {
  resolveEncntrIndicatorCategory,
  cellDisplayValue,
  DEFAULT_PREFERENCES,
  DEFAULT_LAB_LOOKBACK_HOURS,
  MIN_LAB_LOOKBACK_HOURS,
  MAX_LAB_LOOKBACK_HOURS,
  DEFAULT_APPT_STATE_MEANINGS,
  KNOWN_APPT_STATE_MEANINGS,
  DEFAULT_APPT_VIEW_ACTION,
  SUPERUSER_OVERRIDE_ALL,
  DEFAULT_REFRESH_INTERVAL_SECONDS,
  MIN_REFRESH_INTERVAL_SECONDS,
  MAX_REFRESH_INTERVAL_SECONDS,
  ALL_TABS,
  COLUMN_DEFINITIONS
};
//# sourceMappingURL=chunk-OWW6YCFQ.js.map
