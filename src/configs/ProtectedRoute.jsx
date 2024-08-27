import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles: allowedRoles, ...rest }) => {
    const { token, roles } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                if (!token) {
                    // No autenticado, redirigir al login
                    return <Redirect to="/login" />;
                }

                if (allowedRoles && allowedRoles.length > 0 && !roles.some(role => allowedRoles.includes(role.nombre))) {
                    // No autorizado, redirigir a una página 403 o inicio
                    return <Redirect to="/403" />;
                }

                // Autenticado y autorizado, renderizar el componente
                return <Component {...props} />;
            }}
        />
    );
};

export default ProtectedRoute;
