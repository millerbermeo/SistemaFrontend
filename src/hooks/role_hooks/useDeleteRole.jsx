import { useState } from 'react';
import axiosClient from '../../services/axiosClient';


const useDeleteRole = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toastInfo, setToastInfo] = useState({ status: '', title: '', description: '' });

  const deleteRole = async (id) => {
    setLoading(true);
    try {
      const response = await axiosClient.delete(`/dynamic/Role/${id}`);

      setToastInfo({
        status: 'success',
        title: 'Rol Eliminado',
        description: 'El rol se eliminó con éxito.'
      });
      return response.data;
    } catch (err) {
      setToastInfo({
        status: 'error',
        title: 'Error',
        description: 'Ocurrió un error al eliminar el rol.'
      });
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteRole, toastInfo, loading, error };
};

export default useDeleteRole;
