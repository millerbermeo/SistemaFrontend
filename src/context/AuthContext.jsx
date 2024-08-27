import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import axiosClient from '../services/axiosClient';
import useNavigation from '../utils/useNavigation';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });
    const { goTo } = useNavigation();

    const login = async (data) => {
        setLoading(true);
        setToastInfo('');
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        try {
            const response = await axiosClient.post("/auth/login", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setLoading(false);

            const { access_token, user: userData } = response.data.data;

            if (response.data.data) {
                // Almacenar el token en una cookie
                Cookies.set('token', access_token, { secure: true, sameSite: 'Strict' });

                // Almacenar user y roles en cookies
                Cookies.set('user', JSON.stringify(userData), { secure: true, sameSite: 'Strict' });
                Cookies.set('roles', JSON.stringify(userData.roles), { secure: true, sameSite: 'Strict' });


                const token = Cookies.get('token');
                const user = JSON.parse(Cookies.get('user') || '{}'); // Parsear la cadena JSON a objeto
                const roles = JSON.parse(Cookies.get('roles') || '[]'); // Parsear la cadena JSON a array
                
                console.log('Token:', token);
                console.log('User ID:', user);
       
                console.log('User Roles:', roles);
       
                setUser(user);
                setRoles(roles);
                setToken(token);
            } else {
                // Manejar casos en que userData o roles no están definidos
                setError(new Error('Datos de usuario inválidos'));
                setToastInfo({
                    status: 'error',
                    title: 'Error',
                    description: 'La estructura de los datos del usuario es inválida.'
                });
            }

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
        // Eliminar cookies y limpiar estado
        Cookies.remove('token');
        Cookies.remove('user');
        Cookies.remove('roles');
        setUser(null);
        setRoles([]);
        setToken(null);
        goTo('/login');
    };

    const value = {
        user,
        token,
        roles,
        login,
        logout,
        loading,
        error,
        toastInfo,
        goTo,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
