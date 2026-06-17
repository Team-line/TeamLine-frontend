import axios from 'axios';

//https://undiluted-strict-dilation.ngrok-free.dev


const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});


//? Request interceptore
api.interceptors.request.use((config) => {
    // You can add authentication tokens here if needed
    //! config.headers['Authorization'] = 'Bearer your_token_here'; 
    
    return config;
}, (error) => {
    return Promise.reject(error);
});


//? Response interceptore
api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
});

export default api;