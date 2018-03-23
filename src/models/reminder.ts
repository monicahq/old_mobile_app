export interface IReminder {
  id: number;
  title: string;
  description: string;
  next_expected_date: string;
  frequency_type: 'one_time' | 'year' | 'month' | 'day';
}
