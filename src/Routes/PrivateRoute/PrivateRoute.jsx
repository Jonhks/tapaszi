import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (isAuthenticated) {
    return children ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
