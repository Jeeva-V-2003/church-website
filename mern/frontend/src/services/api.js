import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const bibleStudyAPI = {
  getAll: () => api.get('/bible-study'),
  getLatest: () => api.get('/bible-study/latest'),
  create: (data) => api.post('/bible-study', data),
};

export const publicationAPI = {
  getAll: () => api.get('/publications'),
  getMagazines: () => api.get('/publications/magazines'),
  getLatest: () => api.get('/publications/latest'),
  create: (data) => api.post('/publications', data),
};

export const conventionAPI = {
  getAll: () => api.get('/conventions'),
  getUpcoming: () => api.get('/conventions/upcoming'),
  create: (data) => api.post('/conventions', data),
};

export default api;
