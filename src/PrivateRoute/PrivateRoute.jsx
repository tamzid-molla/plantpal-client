import React, { useContext } from 'react';
import { AuthContext } from '../Context/FirebaseContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return <Loader></Loader>
  }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
    return (
      children
    );
};

export default PrivateRoute;