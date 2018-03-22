export interface IActivity {
  id: number;
  /** The name of the activity */
  summary: string;
  date_it_happened: string;
  /** An optional comment */
  description: string;
}
