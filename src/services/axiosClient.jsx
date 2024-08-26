import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

axiosClient.interceptors.request.use((config) => {
    // Token estático
    const staticToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDEvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjQ2MzA0MzYsImV4cCI6MTcyNDYzNDAzNiwibmJmIjoxNzI0NjMwNDM2LCJqdGkiOiJZY3B2Z29jNkJwM1hTOG9XIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.dyQRv-HqEO7kbsvN_R3vEWruoEB7V4uLQ5QvyQeY0_k";
    
    // Establece el encabezado Authorization con el token
    config.headers.Authorization = `Bearer ${staticToken}`;
    
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Manejo de errores
    return Promise.reject(error);
});

export default axiosClient;
