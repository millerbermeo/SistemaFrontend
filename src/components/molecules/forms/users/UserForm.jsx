import React from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../../../../context/ModalContext';
import useRegisterUser from '../../../../hooks/user_hooks/useRegisterUser';
import ToastComponent from '../../../organisms/ToastComponent';
import { Button, Input } from '@nextui-org/react';
import { clearFormInputs } from '../../../../utils/formUtils';

const UserForm = ({fetchData}) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { closeModal } = useModal();
    const { registerUser, toastInfo, loading, error } = useRegisterUser();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('apellido', data.apellido);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('identificacion', data.identificacion);
        formData.append('telefono', data.telefono);
        if (data.foto[0]) {
            formData.append('foto', data.foto[0]); // Assuming 'foto' is a file
        }
        formData.append('password', data.password);
        formData.append('c_password', data.c_password);

        try {
            await registerUser(formData);
            clearFormInputs();
            fetchData()
            closeModal();
        } catch (err) {
            console.error('Error registering user:', err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Nombre"
                        placeholder="Ingresa tu nombre"
                        {...register('nombre', {
                            required: 'El nombre es requerido',
                        })}
                        disabled={loading}
                        isInvalid={!!errors.nombre}
                        errorMessage={errors.nombre ? errors.nombre.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Apellido"
                        placeholder="Ingresa tu apellido"
                        {...register('apellido', {
                            required: 'El apellido es requerido',
                        })}
                        disabled={loading}
                        isInvalid={!!errors.apellido}
                        errorMessage={errors.apellido ? errors.apellido.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Username"
                        placeholder="Ingresa tu username"
                        {...register('username', {
                            required: 'El username es requerido',
                        })}
                        disabled={loading}
                        isInvalid={!!errors.username}
                        errorMessage={errors.username ? errors.username.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Email"
                        placeholder="Ingresa tu email"
                        type="email"
                        {...register('email', {
                            required: 'El email es requerido',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'El email no es válido'
                            }
                        })}
                        disabled={loading}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email ? errors.email.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Identificación"
                        placeholder="Ingresa tu identificación"
                        {...register('identificacion', {
                            required: 'La identificación es requerida',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'La identificación debe ser un número'
                            }
                        })}
                        disabled={loading}
                        isInvalid={!!errors.identificacion}
                        errorMessage={errors.identificacion ? errors.identificacion.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Teléfono"
                        placeholder="Ingresa tu teléfono"
                        {...register('telefono', {
                            required: 'El teléfono es requerido',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'El teléfono debe tener exactamente 10 dígitos'
                            }
                        })}
                        disabled={loading}
                        isInvalid={!!errors.telefono}
                        errorMessage={errors.telefono ? errors.telefono.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="file"
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Foto"
                        placeholder="Selecciona una foto"
                        {...register('foto')}
                        disabled={loading}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Password"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        {...register('password', {
                            required: 'La contraseña es requerida',
                        })}
                        disabled={loading}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password ? errors.password.message : ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        clearable
                        variant="bordered"
                        label="Confirmar Password"
                        placeholder="Confirma tu contraseña"
                        type="password"
                        {...register('c_password', {
                            required: 'La confirmación de la contraseña es requerida',
                            validate: value => value === watch('password') || 'Las contraseñas no coinciden'
                        })}
                        disabled={loading}
                        isInvalid={!!errors.c_password}
                        errorMessage={errors.c_password ? errors.c_password.message : ''}
                    />
                </div>
                <Button type="submit" color="primary" className="mt-4" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </Button>
                {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
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

export default UserForm;
