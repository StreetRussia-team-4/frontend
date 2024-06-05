import axios from 'axios';
import { API_URL } from '@/assets/mocks/constants';
import { Project } from '@/type/type';

export const fetchProjectById = async (id: number): Promise<Project> => {
  try {
    const response = await axios.get<Project>(`${API_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    throw error;
  }
};
