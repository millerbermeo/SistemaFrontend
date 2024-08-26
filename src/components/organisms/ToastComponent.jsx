import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

function ToastComponent({ title, description, status, duration = 9000, isClosable = true, trigger }) {
  const toast = useToast();

  useEffect(() => {
    if (trigger) {
      toast({
        title: title || 'Notification',
        description: description || '',
        status: status || 'info',
        duration: duration,
        isClosable: isClosable,
      });
    }
  }, [trigger, toast, title, description, status, duration, isClosable]);

  return null; // No necesitamos renderizar nada
}

export default ToastComponent;
