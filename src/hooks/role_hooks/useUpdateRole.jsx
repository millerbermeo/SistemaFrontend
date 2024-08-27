import { useState } from 'react';
import axiosClient from "../../services/axiosClient";

const useUpdateRole = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });

  const updateRole = async (id, nombre) => {
    setLoading(true);
    try {
      console.log('ID:', id);
      console.log('Nombre:', nombre);

      const formData = new FormData();
      formData.append('nombre', nombre);

      const response = await axiosClient.post(`/dynamic/Role/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);

      setLoading(false);

      setToastInfo({
        status: 'success',
        title: 'Actualización exitosa',
        description: 'El rol se actualizó correctamente.',
      });
      return response.data;
    } catch (err) {
      setToastInfo({
        status: 'error',
        title: 'Error',
        description: 'Ocurrió un error al actualizar el rol.',
      });
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { updateRole, toastInfo, loading, error };
};

export default useUpdateRole;
