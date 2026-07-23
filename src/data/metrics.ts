export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "4×", label: "SDR of the Week" },
  { value: "80", label: "Sales Conversations / Day" },
  { value: "75", label: "Personalized Emails / Day" },
  { value: "2–3", label: "Qualified Opportunities / Day" },
  { value: "250", label: "Customer Interactions / Day" },
  { value: "60–70%", label: "Lease Renewal Rate" },
];
