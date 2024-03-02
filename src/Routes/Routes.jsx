import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Backdrop from "../Components/UI/Backdrop/Backdrop";
import UserProvider from "../providers/UserProvider";

const Login = React.lazy(() => import("../Components/Containers/Login/Login"));
const SignUp = React.lazy(() =>
  import("../Components/Containers/Login/SignUp")
);
const Splash = React.lazy(() =>
  import("../Components/Containers/Splash/Splash")
);
const Home = React.lazy(() => import("../Components/Containers/Home/Home"));
const MyPortfolio = React.lazy(() =>
  import("../Components/Containers/MyPortfolio/MyPortfolio")
);
const Instructions = React.lazy(() =>
  import("../Components/Containers/Instructions/Instructions")
);
const History = React.lazy(() =>
  import("../Components/Containers/History/History")
);
const LogOut = React.lazy(() =>
  import("../Components/Containers/LogOut/LogOut")
);

const routes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        exact
        path="/"
        element={
          <Suspense fallback={<Backdrop show />}>
            <Splash />
          </Suspense>
        }
      />
      <Route
        exact
        path="/login"
        element={
          <UserProvider>
            <Suspense fallback={<Backdrop show />}>
              <Login />
            </Suspense>
          </UserProvider>
        }
      />
      <Route
        exact
        path="/signup"
        element={
          <UserProvider>
            <Suspense fallback={<Backdrop show />}>
              <SignUp />
            </Suspense>
          </UserProvider>
        }
      />
      <Route
        exact
        path="/home"
        element={
          <Suspense fallback={<Backdrop show />}>
            <Home></Home>
          </Suspense>
        }
      />
      <Route
        exact
        path="/myPorfolio"
        element={
          <Suspense fallback={<Backdrop show />}>
            <MyPortfolio />
          </Suspense>
        }
      />
      <Route
        exact
        path="/instructions"
        element={
          <Suspense fallback={<Backdrop show />}>
            <Instructions />
          </Suspense>
        }
      />
      <Route
        exact
        path="/history"
        element={
          <Suspense fallback={<Backdrop show />}>
            <History />
          </Suspense>
        }
      />
      <Route
        exact
        path="/logOut"
        element={
          <Suspense fallback={<Backdrop show />}>
            <LogOut />
          </Suspense>
        }
      />
      {/* Private Routes */}
      {/* <Route element={<PrivateRoute />}> */}
      {/* <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<Backdrop show />}>
              <Home></Home>
            </Suspense>
          }
        /> */}
      {/* <Route
          exact
          path="maternidad/sintoma/:id"
          element={
            <Suspense fallback={<Backdrop show />}>
              <SymptomsProvider>
                <SymptomDetail></SymptomDetail>
              </SymptomsProvider>
            </Suspense>
          }
        /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default routes;
