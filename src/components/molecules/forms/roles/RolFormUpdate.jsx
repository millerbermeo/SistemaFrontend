import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../../../../context/ModalContext';
import useUpdateRole from '../../../../hooks/role_hooks/useUpdateRole';
import ToastComponent from '../../../organisms/ToastComponent';
import { Button, Input } from '@nextui-org/react';
import { clearFormInputs } from '../../../../utils/formUtils';

const RolFormUpdate = ({ rol, fetchData }) => {
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();
    const { closeModal } = useModal();
    const { updateRole, toastInfo, loading, error } = useUpdateRole();

    // Inicializa el valor del campo 'nombre' cuando el componente se monta
    useEffect(() => {
        if (rol) {
            setValue('nombre', rol.nombre); // Ajusta según la estructura del objeto rol
        }
    }, [rol, setValue]);

    const onSubmit = async (data) => {
        const processedName = data.nombre.trim().toLowerCase().replace(/\s+/g, '');

        try {
            await updateRole(rol.id, processedName); // Usa el ID del rol para la actualización
            fetchData();
            clearFormInputs();
            closeModal();
        } catch (err) {
            console.error('Error updating role:', err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    fullWidth
                    clearable
                    variant="bordered"
                    label="Nombre"
                    placeholder="Ingresa el nombre"
                    {...register('nombre', {
                        required: 'El nombre es requerido',
                        validate: {
                            isSingleWord: value => !/\s/.test(value) || 'El nombre debe ser una sola palabra'
                        }
                    })}
                    disabled={loading}
                    isInvalid={!!errors.nombre}
                    errorMessage={errors.nombre ? errors.nombre.message : ''}
                    value={watch('nombre')} // Asegúrate de que el valor sea controlado
                />
                <Button type="submit" color="primary" className="mt-4" disabled={loading}>
                    {loading ? 'Actualizando...' : 'Actualizar'}
                </Button>
                {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            </form>

            {toastInfo.title && toastInfo.description && (
                <ToastComponent
                    title={toastInfo.title}
                    description={toastInfo.description}
                    status={toastInfo.status}
                    trigger={toastInfo.trigger}
                />
            )}
        </>
    );
};

export default RolFormUpdate;
