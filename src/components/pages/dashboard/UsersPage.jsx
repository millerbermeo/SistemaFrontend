import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import useFetchData from '../../../hooks/useFetchData';
import PaginatedTable from '../../organisms/PaginatedTable';



const UsersPage = () => {

  const { data: usersData, loading } = useFetchData("/dynamic/Role");

  // if (loading) return <p>Loading...</p>;

  // console.log(usersData);
  const columns = ["CODIGO", "NOMBRE", "CODIGO", "NOMBRE"];
  return (
    <MainLayout>
      <PaginatedTable data={usersData} columns={columns} />
    </MainLayout>
  )
}

export default UsersPage