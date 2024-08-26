import React, { useEffect, useRef } from 'react';
import { useToast } from '@chakra-ui/react';

const ToastComponent = ({ title, description, status, duration = 2000, isClosable = true }) => {
  const toast = useToast();
  const toastRef = useRef();

  useEffect(() => {
    if (title && description) {
      // Cancela el toast anterior si existe
      if (toastRef.current) {
        toast.close(toastRef.current);
      }

      // Muestra el nuevo toast y guarda su ID
      toastRef.current = toast({
        title,
        description,
        status,
        duration,
        isClosable,
      });
    }
  }, [title, description, status, duration, isClosable, toast]);

  return null; // No necesitamos renderizar nada
}

export default ToastComponent;
