import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/nasa',
});

export const getAPOD = () => api.get('/apod');
export const getMarsPhotos = (rover = 'curiosity', sol = 1000) => api.get(`/rovers?rover=${rover}&sol=${sol}`);
