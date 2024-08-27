import { useState } from "react";
import axiosClient from "../../services/axiosClient";

const useRegisterRole = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });

    const registerRole = async (nombre) => {
        setLoading(true);
        try {
            
            console.log('Nombre:', nombre);
            const formData = new FormData();
            formData.append('nombre', nombre);

            const response = await axiosClient.post("/dynamic/Role", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setLoading(false);

            setToastInfo({
                status: 'success',
                title: 'Operación exitosa',
                description: 'La operación se completó con éxito.'
            });
            return response.data;
        } catch (err) {
            setToastInfo({
                status: 'error',
                title: 'Error',
                description: 'Ocurrió un error al realizar la operación.'
            });
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return { registerRole, toastInfo, loading, error };
};

export default useRegisterRole;
