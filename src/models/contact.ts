interface IContactFamily {
  kids: {
    total: number;
    kids: IContact[];
  };
  progenitors: {
    total: number;
    progenitors: IContact[];
  };
  partners: {
    total: number;
    partners: IContact[];
  };
}

interface IAgeDate {
  is_age_based?: boolean;
  is_year_unknown?: boolean;
  date: string;
}

interface IContactInformation {
  avatar: {
    default_avatar_color: string;
    url: string;
    source: 'external' | 'internal';
  };
  family: IContactFamily;
  dates: {
    birthdate: IAgeDate;
    deceased_date: IAgeDate;
  };
}

export interface IContact {
  id: number;
  first_name: string;
  last_name?: string;
  information: IContactInformation;
  updated_at: string;
  statistics: {
    number_of_calls: number;
    number_of_notes: number;
    number_of_activities: number;
    number_of_reminders: number;
    number_of_tasks: number;
    number_of_gifts: number;
    number_of_debts: number;
  };

  reminders?: number[];
  gifts?: number[];
  activities?: number[];
  tasks?: number[];
  calls?: number[];
  debts?: number[];
  notes?: number[];
}
