import { useState } from "react";
import axiosClient from "../../services/axiosClient";

const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });

    const updateUser = async (userId, formData) => {
        setLoading(true);
        try {
            console.log('Actualizando usuario con FormData:', formData);
            
            const response = await axiosClient.post(`/users/${userId}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('User updated:', response.data);

            setLoading(false);

            setToastInfo({
                status: 'success',
                title: 'Actualización exitosa',
                description: 'El usuario ha sido actualizado correctamente.'
            });

            return response.data;
        } catch (err) {
            setToastInfo({
                status: 'error',
                title: 'Error en la actualización',
                description: 'Ocurrió un error al actualizar el usuario.'
            });
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return { updateUser, toastInfo, loading, error };
};

export default useUpdateUser;
