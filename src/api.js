import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
//import { logout } from './store/features/user/userSlice';

const API_URL = import.meta.env.VITE_API_URL 

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');

    if (token) {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now && refresh) {
        try {
          const response = await axios.post(`${API_URL}token/refresh/`, { refresh });
          token = response.data.access;
          localStorage.setItem('access', token);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
