import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MagnifyingGlass } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor = '#c0efff'
    color = '#e15b64'
  />

  }
  
  if(user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
export default PrivateRoute;
