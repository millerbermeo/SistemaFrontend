import axios from "axios";
import Cookies from 'js-cookie';


const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

axiosClient.interceptors.request.use((config) => {
    // Token estático

    const token = Cookies.get('token');
    const staticToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjQ3ODc5NTMsImV4cCI6MTcyNDc5MTU1MywibmJmIjoxNzI0Nzg3OTUzLCJqdGkiOiJ4ZVRlMTQ3M2xTTzBsd1U3Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.A-tMIpbdpft4DYqDBr3XNBq6GM_1cWvA86_y94lYMxY";
    
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    

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
