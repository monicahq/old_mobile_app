interface IContactRelationships {
  family: {
    total: number;
    contacts: IRelationship[];
  };
  friend: {
    total: number;
    contacts: IRelationship[];
  };
  love: {
    total: number;
    contacts: IRelationship[];
  };
  work: {
    total: number;
    contacts: IRelationship[];
  };
}

interface IRelationship {
  contact: IContact;
  relationship: {
    id: string;
    name: string;
  };
}

interface IContactField {
  content: string;
  contact_field_type: {
    fontawesome_icon: string;
    name: string;
    protocol: string;
    type: string;
  };
}

interface IAgeDate {
  is_age_based?: boolean;
  is_year_unknown?: boolean;
  date: string;
}

interface IContactInformation {
  career: {
    job?: string;
    company?: string;
    linkedin_profile_url?: string;
  };
  avatar: {
    default_avatar_color: string;
    url: string;
    source: 'external' | 'internal';
  };
  relationships: IContactRelationships;
  dates: {
    birthdate: IAgeDate;
    deceased_date: IAgeDate;
  };
  how_you_met: {
    first_met_date: IAgeDate;
    first_met_through_contact: IContact;
    general_information: string;
  };
}

export interface IAddress {
  city?: string;
  country?: {
    id: string;
    name: string;
  };
  name?: string;
  postal_code?: string;
  province?: string;
  street?: string;
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

  addresses: IAddress[];
  contactFields: IContactField[];

  reminders?: number[];
  gifts?: number[];
  activities?: number[];
  tasks?: number[];
  calls?: number[];
  debts?: number[];
  notes?: number[];
}
