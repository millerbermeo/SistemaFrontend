import { useState } from 'react';
import axiosClient from '../services/axiosClient';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toastInfo, setToastInfo] = useState({ trigger: false, status: '', title: '', description: '' });

  const iniciarSession = async (data) => {
    setLoading(true);
    
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

      console.log(response.data);
      setToastInfo({
        trigger: true,
        status: 'success',
        title: 'Operación exitosa',
        description: 'La operación se completó con éxito.'
      });

      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      setToastInfo({
        trigger: true,
        status: 'error',
        title: 'Error',
        description: 'Ocurrió un error al realizar la operación.'
      });
      throw err;
    }
  };

  return { iniciarSession, loading, error, toastInfo };
}

export default useLogin;
