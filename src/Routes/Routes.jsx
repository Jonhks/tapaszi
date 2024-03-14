import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Backdrop from "../Components/UI/Backdrop/Backdrop";
import UserProvider from "../providers/UserProvider";
import PortfoliosProvider from "../providers/PortfoliosProviders";
import HomeProvider from "../providers/HomeProvider";
import HistoryProvider from "../providers/HistoryProvider";

const Login = React.lazy(() => import("../Components/Containers/Login/Login"));
const Forgot = React.lazy(() =>
  import("../Components/Containers/Login/Forgot")
);
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

const routes = ({ isAuthenticated, setIsAuthenticated }) => {
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
          <UserProvider
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          >
            <Suspense fallback={<Backdrop show />}>
              <Login />
            </Suspense>
          </UserProvider>
        }
      />
      <Route
        exact
        path="/forgot"
        element={
          <UserProvider
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          >
            <Suspense fallback={<Backdrop show />}>
              <Forgot />
            </Suspense>
          </UserProvider>
        }
      />
      <Route
        exact
        path="/signup"
        element={
          <UserProvider
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          >
            <Suspense fallback={<Backdrop show />}>
              <SignUp />
            </Suspense>
          </UserProvider>
        }
      />
      {/* Private Routes */}
      {/* <Route element={<PrivateRoute > </PrivateRoute>}> */}
      <Route
        exact
        path="/home"
        element={
          <HomeProvider>
            <Suspense fallback={<Backdrop show />}>
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home></Home>
              </PrivateRoute>
            </Suspense>
          </HomeProvider>
        }
      />
      <Route
        exact
        path="/myPorfolio"
        element={
          <PortfoliosProvider>
            <Suspense fallback={<Backdrop show />}>
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MyPortfolio />
              </PrivateRoute>
            </Suspense>
          </PortfoliosProvider>
        }
      />
      <Route
        exact
        path="/instructions"
        element={
          <Suspense fallback={<Backdrop show />}>
            <HomeProvider>
              <Instructions />
            </HomeProvider>
          </Suspense>
        }
      />
      <Route
        exact
        path="/history"
        element={
          <Suspense fallback={<Backdrop show />}>
            <HistoryProvider>
              <History />
            </HistoryProvider>
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
      <Route
        exact
        path="/home"
        element={
          <Suspense fallback={<Backdrop show />}>
            <Home></Home>
          </Suspense>
        }
      />
      {/* </Route> */}
    </Routes>
  );
};

export default routes;
