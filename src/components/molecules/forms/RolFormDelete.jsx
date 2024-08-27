import React from 'react';
import { useModal } from '../../../context/ModalContext';
import useDeleteRole from '../../../hooks/role_hooks/useDeleteRole';
import ToastComponent from '../../organisms/ToastComponent';
import { Button } from '@nextui-org/react';

const RolFormDelete = ({ rol, fetchData }) => {
    const { closeModal } = useModal();
    const { deleteRole, toastInfo, loading, error } = useDeleteRole();

    const handleDelete = async () => {
        try {
            await deleteRole(rol.id); // Suponiendo que rol tiene una propiedad id
            fetchData(); // Refresca la data después de la eliminación
            closeModal(); // Cierra el modal
        } catch (err) {
            console.error('Error deleting role:', err);
        }
    };

    return (
        <>
            <div className="p-4">
                <p>¿Estás seguro de que deseas eliminar el rol "{rol.nombre}"?</p>
                <div className="flex gap-2 mt-4">
                    <Button color="danger" onPress={handleDelete} disabled={loading}>
                        {loading ? 'Eliminando...' : 'Eliminar'}
                    </Button>
                    <Button onPress={closeModal}>Cancelar</Button>
                </div>
                {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            </div>

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

export default RolFormDelete;
