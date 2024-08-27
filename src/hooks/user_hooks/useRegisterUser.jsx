import { useState } from "react";
import axiosClient from "../../services/axiosClient";

const useRegisterUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });

    const registerUser = async (formData) => {
        setLoading(true);
        try {
            console.log('Registrando usuario con FormData:', formData);
            
            const response = await axiosClient.post("/auth/register/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('User registered:', response.data);

            setLoading(false);

            setToastInfo({
                status: 'success',
                title: 'Registro exitoso',
                description: 'El usuario ha sido registrado correctamente.'
            });

            return response.data;
        } catch (err) {
            setToastInfo({
                status: 'error',
                title: 'Error en el registro',
                description: 'Ocurrió un error al registrar el usuario.'
            });
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return { registerUser, toastInfo, loading, error };
};

export default useRegisterUser;
