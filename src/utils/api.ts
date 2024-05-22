import axios from 'axios';
import { API_URL } from '@/utils/constants';
import { Project } from '../type/type';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchEvents = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${API_URL}/regional-offices/events/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
