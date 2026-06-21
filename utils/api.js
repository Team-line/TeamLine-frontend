import axios from "axios";
import useAuthStore from "@/store/AuthStore"; // استيراد الـ store الخاص بك

const api = axios.create({
  baseURL: "https://teamline-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, //! For Cookeis   
  timeout:5000
});


//! Request interceptor
api.interceptors.request.use(
  (config) => {
    // جلب التوكن الحالي من الـ Zustand Store ديناميكياً
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//! Response interceptor
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