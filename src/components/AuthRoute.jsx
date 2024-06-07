// AuthRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AuthRoute = ({ element, isAuthenticated, redirectTo }) => {
    return isAuthenticated ? (
        <Route element={element} />
    ) : (
        <Navigate to={redirectTo} replace />
    );
};

export default AuthRoute;
