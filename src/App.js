import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <HeaderProvider setMode={setMode}> */}
        {/* <LocationProvider> */}
          <Layout>
            <Routes
              // isAuthenticated={true}
              // isLoading={false}
            />
          </Layout>
        {/* </LocationProvider> */}
      {/* </HeaderProvider> */}
    </BrowserRouter>
  // </ThemeProvider>
  );
}

export default App;
