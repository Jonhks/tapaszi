import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Layout from "./Components/Layout/Layout";
import "../src/";
// import LocationProvider from "./providers/LocationProvider";
// import "sweetalert2/src/sweetalert2.scss";

const App = () => {
  // ?! Quitar true en login
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <HeaderProvider setMode={setMode}> */}
      {/* <LocationProvider> */}
      <Layout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      >
        <Routes
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          // isLoading={false}
        />
      </Layout>
      {/* </LocationProvider> */}
      {/* </HeaderProvider> */}
    </BrowserRouter>
    // </ThemeProvider>
  );
};

export default App;
