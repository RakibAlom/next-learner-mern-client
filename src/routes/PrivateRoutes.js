import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  return (
    <div>

    </div>
  );
};

export default PrivateRoutes;