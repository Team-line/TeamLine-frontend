import axios from "axios";
import useAuthStore from "@/store/AuthStore"; 
import Cookies from 'js-cookie';


//https://undiluted-strict-dilation.ngrok-free.dev/
//https://teamline-backend.onrender.com/

const api = axios.create({
  baseURL: "https://teamline-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, //! For Cookeis   
  timeout:5000
});

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