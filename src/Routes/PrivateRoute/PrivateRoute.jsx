import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import Backdrop from "../../components/UI/Backdrop/Backdrop";
// import Spinner from "../../components/UI/Spinner/SpinnerPlenna";
// import LocationContext from "../../context/LocationContext";
// import { useLocation } from "react-router-dom";

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
