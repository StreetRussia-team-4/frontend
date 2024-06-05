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
  partnerLogo?: string | HTMLImageElement;
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

export interface CardEventData {
  id: number;
  image: string | HTMLImageElement; //почему?
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate?: string;
  direction: string;
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

export interface CardTeamData {
  id: number;
  image: string | HTMLImageElement;
  name: string;
  description: string;
  location?: string;
  link: string;
}

export interface CardBlogData {
  id: number;
  image: string | HTMLImageElement;
  title: string;
  author: string;
}

export type DocumentType = 'официальные' | 'внутренние' | 'внешние';

export interface Document {
  title: string;
  type: DocumentType;
  date: string;
  downloadLink: string;
}

export interface Direction {
  title: string;
  subtitle: string;
  paragraphs: string[];
  images: string[];
  videoUrl: string;
}

export interface CardAddressPlaygroundData {
  id: number;
  region: string;
  address: string;
}

// Определение общего типа Discipline
interface Discipline {
  id: number;
  name: string;
}

interface Content {
  id: number;
  name: string;
  description: string;
  pub_date: string;
  source_link: string;
  discipline: Discipline;
}
export type Article = Content;
export type Film = Content;
export type Interview = Content;
export type News = Content;
