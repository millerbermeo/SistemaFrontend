import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosClient from '../services/axiosClient';
import useNavigation from '../utils/useNavigation';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });
    const { goTo } = useNavigation();

    const login = async (data) => {
        setLoading(true);
        setToastInfo('')
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        try {
            const response = await axiosClient.post("/auth/login", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("auth",response.data);

            setLoading(false);

            const { token, user } = response.data;

            setUser(user);
            setToastInfo({
                status: 'success',
                title: 'Operación exitosa',
                description: 'La operación se completó con éxito.'
            });

            // Delay redirection to allow the toast to be shown
            setTimeout(() => {
                goTo('/');
            }, 500); // Delay in milliseconds

        } catch (err) {
            setError(err);
            setLoading(false);
            setToastInfo({
                status: 'error',
                title: 'Error',
                description: 'Ocurrió un error al realizar la operación.'
            });

            
    
        }
    };

    const logout = () => {
        setUser(null);
        goTo('/login');
    };

    const value = {
        user,
        login,
        logout,
        loading,
        error,
        toastInfo,
        goTo,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
