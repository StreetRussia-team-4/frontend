export interface CardData {
  id: number;
  image: string | HTMLImageElement;
  current_status: string;
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  fundsRaised?: number;
  goal?: number;
}

export interface Partner {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  logo: string;
  website: string;
}

export interface Region {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  current_status: string;
  name: string;
  description: string;
  region: Region;
  partners: Partner[];
  preview: string;
  start_date: string;
  end_date: string;
  funds_raised: number;
  goal: number;
}

export interface Event {
  id: number;
  status: string;
  name: string;
  description: string;
  region: Region;
  partners: Partner[];
  preview: string;
  start_date: string;
  end_date: string;
  direction: string;
}
