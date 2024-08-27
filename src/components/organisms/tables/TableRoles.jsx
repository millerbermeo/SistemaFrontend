import React, { useState } from 'react'
import useFetchData from '../../../hooks/useFetchData';
import PaginatedTable from '../PaginatedTable';
import RolForm from '../../molecules/forms/roles/RolForm';
import { useModal } from '../../../context/ModalContext';
import { Button } from '@nextui-org/react';
import RolFormUpdate from '../../molecules/forms/roles/RolFormUpdate';
import RolFormDelete from '../../molecules/forms/roles/RolFormDelete';


const TableRoles = () => {
  const { openModal, setTitle } = useModal();
  const { data: roleData, fetchData } = useFetchData("/dynamic/Role");

  const handleOpenModal = () => {
    setTitle('Registrar Rol')
    openModal(<RolForm fetchData={fetchData} />);
  };

  const handleOpenUpdateModal = (row) => {
    setTitle('Actualizar Rol')
    openModal(<RolFormUpdate rol={row} fetchData={fetchData}/>);
  };

  const handleOpenDeleteModal = (row) => {
    setTitle('Eliminar Rol')
    openModal(<RolFormDelete rol={row} fetchData={fetchData} />);
  };

  const columns = ["ID", "ROL", "ACCIONES"];

  return (
    <>
     <div className='my-2 w-full flex justify-end'>
        <Button onPress={handleOpenModal}>Registrar Rol</Button>
      </div>

      <PaginatedTable
        columns={columns}
        data={roleData.map(row => ({
          ...row,
          acciones: (
            <div className="flex gap-2">
              <Button size="sm" onPress={() => handleOpenUpdateModal(row)}>
                Editar
              </Button>
              <Button size="sm" color="danger" onPress={() => handleOpenDeleteModal(row)}>
                Eliminar
              </Button>
            </div>
          )
        }))}

        searchProperty="nombre" />
    </>
  )
}

export default TableRoles