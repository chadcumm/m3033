// src/app/models/schedule.model.ts
var DEFAULT_PREFERENCES = {
  physician_id: null,
  sort_column: null,
  sort_direction: null,
  column_order: [
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
    "special_instructions"
  ],
  column_visibility: {}
};
var ALL_TABS = [
  { key: "schedule", label: "Schedule" },
  { key: "config", label: "Configuration" },
  { key: "security", label: "Security" }
];
var COLUMN_DEFINITIONS = [
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
  { key: "special_instructions", header: "Special Instructions" }
];

export {
  DEFAULT_PREFERENCES,
  ALL_TABS,
  COLUMN_DEFINITIONS
};
//# sourceMappingURL=chunk-IOVDRASK.js.map
