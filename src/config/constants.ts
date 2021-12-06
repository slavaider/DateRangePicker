export const dateOptions: Record<string, unknown> = {
  year: "numeric",
  month: "short",
  day: "numeric",
} as const;

export const lifeTimeDate: Date = new Date(2017, 3, 4);

export const listPicker: string[] = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "This Month",
  "Last Month",
  "This Year",
  "Lifetime",
];
