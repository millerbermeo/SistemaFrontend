import React from 'react'
import useFetchData from '../../../hooks/useFetchData';
import PaginatedTable from '../PaginatedTable';
import UserForm from '../../molecules/forms/users/UserForm';
import { Button } from '@nextui-org/react';
import { useModal } from '../../../context/ModalContext';
import UserFormUpdate from '../../molecules/forms/users/UserFormUpdate';

const TableUsers = () => {
    const { openModal, setTitle } = useModal();
    const { data: userData, fetchData } = useFetchData("/dynamic/User");
  
    const handleOpenModal = () => {
      setTitle('Registrar Usuario')
      openModal(<UserForm fetchData={fetchData} />);
    };
  
    const handleOpenUpdateModal = (row) => {
      setTitle('Actualizar Usuario')
      openModal(<UserFormUpdate user={row} fetchData={fetchData}/>);
    };
  
    // const handleOpenDeleteModal = (row) => {
    //   setTitle('Eliminar Rol')
    //   openModal(<RolFormDelete rol={row} fetchData={fetchData} />);
    // };
  
    const columns = ["ID", "NOMBRE", "APELLIDO", "USERNAME",  "EMAIL", "IDENTIFICACIÓN", "TELEFONO", "FOTO", "ESTADO", "ACCIONES"];

    
  return (
    <>
     <div className='my-2 w-full flex justify-end'>
        <Button onPress={handleOpenModal}>Registrar Usuario</Button>
      </div>

      <PaginatedTable
        columns={columns}

        // data={userData}
        data={userData.map(row => ({
          ...row,
          acciones: (
            <div className="flex gap-2">

                <img className='rounded-full w-10' src={`http://localhost:8000/storage/${row.foto}`} alt="" />
              <Button size="sm" onPress={() => handleOpenUpdateModal(row)}>
                Editar
              </Button>
              {/* <Button size="sm" color="danger" onPress={() => handleOpenDeleteModal(row)}>
                Eliminar
              </Button> */}
            </div>
          )
        }))}

        searchProperty="nombre" />
    </>
  )
}

export default TableUsers


