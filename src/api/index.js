import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchGroups = () => API.get('/groups');
export const createGroups = (newGroup) => API.post('/groups', newGroup);
export const updateGroups = (id, updatedGroup) => API.patch(`/groups/${id}`, updatedGroup);
export const deleteGroups = (id) => API.delete(`/groups/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
