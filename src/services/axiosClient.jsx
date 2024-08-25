import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

axiosClient.interceptors.request.use((config) => {
    // Token estático
    const staticToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjQ0NTg1ODMsImV4cCI6MTcyNDQ2MjE4MywibmJmIjoxNzI0NDU4NTgzLCJqdGkiOiJ1UWlTb3hmbnJRd01QRkxVIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.rB2e-H5tEe1TexbfcOZY-cq3esaccsk7F1XBmzoYlZ8";
    
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
