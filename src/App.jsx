import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Layout from "./Components/Layout/Layout";
// import LocationProvider from "./providers/LocationProvider";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <HeaderProvider setMode={setMode}> */}
      {/* <LocationProvider> */}
      <Layout>
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
