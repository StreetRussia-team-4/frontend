import axios from 'axios';

const baseURL = process.env.baseURL;

export const host = axios.create({
  baseURL,
});
