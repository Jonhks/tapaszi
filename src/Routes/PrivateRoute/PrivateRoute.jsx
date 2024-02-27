import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import Backdrop from "../../components/UI/Backdrop/Backdrop";
// import Spinner from "../../components/UI/Spinner/SpinnerPlenna";
import LocationContext from "../../context/LocationContext";

const PrivateRoute = (props) => {
  const { currentLocation } = useContext(LocationContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const pregnancy = searchParams.get("pregnancy");
  // const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   if (
  //     currentLocation.search.includes("utm") &&
  //     sessionStorage.getItem("utm") === null
  //   ) {
  //     sessionStorage.setItem("utm", currentLocation.search);
  //   }

  //   if (
  //     sessionStorage.getItem("utm") &&
  //     currentLocation.pathname !== "/auth" &&
  //     currentLocation.pathname !== "/confirmacionAgendar"
  //   ) {
  //     setSearchParams(sessionStorage.getItem("utm"));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchParams, setSearchParams]);

  //Handles route to redirect
  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     const routeToRedirect = currentLocation;
  //     if (routeToRedirect) {
  //       localStorage.setItem(
  //         "routeToRedirect",
  //         JSON.stringify(routeToRedirect)
  //       );
  //     }
  //   }
  // }, [isAuthenticated, isLoading, currentLocation]);

  //Handles Pregnancy flowExeption
  // useEffect(() => {
  //   if (pregnancy) {
  //     localStorage.setItem("pregnancy", JSON.stringify(pregnancy));
  //   }
  // }, [pregnancy, isAuthenticated]);

  // if (isLoading) {
  //   return (
  //     <Backdrop show={true}>
  //       <Spinner detailSpinner={false} />
  //     </Backdrop>
  //   );
  // // }
  // if (!isAuthenticated && pregnancy) {
  //   const routeToRedirect = currentLocation;
  //   if (routeToRedirect) {
  //     localStorage.setItem("routeToRedirect", JSON.stringify(routeToRedirect));
  //   }

  //   loginWithRedirect({
  //     screen_hint: "signup",
  //     appState: {
  //       returnTo: "/auth",
  //     },
  //   });
  //   return null;
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <Navigate
  //       to="/login"
  //       replace
  //     />
  //   );
  // }
  // if (isAuthenticated) {
  //   return props.children ? props.children : <Outlet />;
  // }
};

export default PrivateRoute;
