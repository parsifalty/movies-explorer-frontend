import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return props.logged ? <Component {...props} /> : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;
