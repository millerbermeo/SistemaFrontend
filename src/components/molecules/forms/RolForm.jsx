import React from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../../../context/ModalContext';
import useRegisterRole from '../../../hooks/role_hooks/useRegisterRole';
import ToastComponent from '../../organisms/ToastComponent';
import { Button, Input } from '@nextui-org/react';
import { clearFormInputs } from '../../../utils/formUtils';

const RolForm = ({ fetchData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { closeModal } = useModal();
    const { registerRole, toastInfo, loading, error } = useRegisterRole();

    const onSubmit = async (data) => {
        const processedName = data.nombre.trim().toLowerCase().replace(/\s+/g, '');

        try {
            await registerRole(processedName);
            fetchData();
            clearFormInputs();
            closeModal();
        } catch (err) {
            console.error('Error registering role:', err);
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
                    placeholder="Ingresa tu nombre"
                    {...register('nombre', {
                        required: 'El nombre es requerido',
                        validate: {
                            isSingleWord: value => !/\s/.test(value) || 'El nombre debe ser una sola palabra'
                        }
                    })}
                    disabled={loading}
                    isInvalid={!!errors.nombre}
                    errorMessage={errors.nombre ? errors.nombre.message : ''}
                />
                <Button type="submit" color="primary" className="mt-4" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
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
}

export default RolForm;
