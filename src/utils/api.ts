import axios from 'axios';
import { API_URL } from '@/assets/mocks/constants';
import { Project, Event, Article, Film, Interview, News } from '@/type/type';

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  return fetchData<Project[]>(`${API_URL}/projects`);
};

export const fetchProjectById = async (id: number): Promise<Project> => {
  return fetchData<Project>(`${API_URL}/projects/${id}`);
};

export const fetchEvents = async (): Promise<Event[]> => {
  return fetchData<Event[]>(`${API_URL}/regional-offices/events/`);
};

export const fetchArticles = async (): Promise<Article[]> => {
  return fetchData<Article[]>(`${API_URL}/blog/articles/`);
};

export const fetchFilms = async (): Promise<Film[]> => {
  return fetchData<Film[]>(`${API_URL}/blog/films/`);
};

export const fetchInterviews = async (): Promise<Interview[]> => {
  return fetchData<Interview[]>(`${API_URL}/blog/interviews/`);
};

export const fetchNews = async (): Promise<News[]> => {
  return fetchData<News[]>(`${API_URL}/blog/news/`);
};
