import axios from 'axios';

export const api = axios.create({
  baseURL: "http://172.29.15.235:3001"
});
