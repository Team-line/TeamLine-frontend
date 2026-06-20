import axios from "axios";



const api = axios.create({
  baseURL: "https://teamline-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // مهم جداً للكوكيز
  timeout: 5000,
});


// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export default api;