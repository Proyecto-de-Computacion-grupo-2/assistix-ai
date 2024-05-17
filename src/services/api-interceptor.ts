import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Adjust this based on your environment setup
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
