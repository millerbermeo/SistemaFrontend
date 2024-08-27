export const clearFormInputs = (formRef) => {
    if (formRef && formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, select, textarea');
  
      inputs.forEach((input) => {
        switch (input.type) {
          case 'checkbox':
          case 'radio':
            input.checked = false;
            break;
          default:
            input.value = '';
            break;
        }
      });
    }
  };
  