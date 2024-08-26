import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/tienda/HomePage';
import LoginPage from '../pages/LoginPage';
import SidebarProvider from '../../context/SidebarContext';
import DashboardPage from '../pages/dashboard/DashboardPage';
import UsersPage from '../pages/dashboard/UsersPage';
import { AuthProvider } from '../../context/AuthContext';


const AppRoutes = () => {
  return (
    <Router>
      {/* <MainLayout> */}
      <SidebarProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </AuthProvider>
      </SidebarProvider>
      {/* </MainLayout> */}
    </Router>
  );
};

export default AppRoutes;
