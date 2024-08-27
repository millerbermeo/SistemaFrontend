import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import TableRoles from '../../organisms/tables/TableRoles';
import UserForm from '../../molecules/forms/users/UserForm';
import { useModal } from '../../../context/ModalContext';
import { Button } from '@nextui-org/react';
import TableUsers from '../../organisms/tables/TableUsers';


const UsersPage = () => {

  const { openModal, setTitle } = useModal();

  const handleOpenModal = () => {
    setTitle('Registrar Rol')
    openModal(<UserForm />);
  };

  return (
    <MainLayout>
       <TableUsers/>

      <TableRoles />

 
    </MainLayout>
  );
}

export default UsersPage;
