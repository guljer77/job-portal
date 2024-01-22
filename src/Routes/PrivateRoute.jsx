import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({children}) {
  const location = useLocation()
  const { user, loading } = useContext(AuthContext);
  if(loading){
    return <h4>Loading.....</h4>
  }
  if(user){
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace/>;
}

export default PrivateRoute;
