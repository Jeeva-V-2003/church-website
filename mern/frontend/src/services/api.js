import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dailyMannaAPI = {
  getToday: () => api.get('/daily-manna/today'),
  getAll: () => api.get('/daily-manna/all'),
  getByDate: (date) => api.get(`/daily-manna/${date}`),
  create: (data) => api.post('/daily-manna', data),
};

export const magazineAPI = {
  getAll: () => api.get('/magazines'),
  getLatest: () => api.get('/magazines/latest'),
  getById: (id) => api.get(`/magazines/${id}`),
  create: (data) => api.post('/magazines', data),
};

export const eventsAPI = {
  getAll: () => api.get('/events'),
  getUpcoming: () => api.get('/events/upcoming'),
  getPast: () => api.get('/events/past'),
  getById: (id) => api.get(`/events/${id}`),
  create: (data) => api.post('/events', data),
};

export default api;
