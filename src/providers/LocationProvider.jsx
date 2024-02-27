import React, { useEffect, useState } from "react";
import LocationContext from "../context/LocationContext";
import { useLocation } from "react-router-dom";
import tabTitles from "../assets/tabTitles";

const LocationProvider = ({ children }) => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState({});
  const [currentLocation, setCurrentLocation] = useState({
    pathname: location.pathname,
    search: location.search,
  });
  const defaultTitle = "Salud de la Mujer en México | Plenna";

  const [customBackTitle, setCustomBackTitle] = useState("Regresar");
  const [tabTitle, setTabTitle] = useState("");

  useEffect(() => {
    setPreviousLocation(currentLocation);
    setCurrentLocation({
      pathname: location.pathname,
      search: location.search,
    });
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);

  useEffect(() => {
    tabTitles.some((title) => {
      if (
        `${currentLocation.pathname}${currentLocation.search}` === title.route
      ) {
        setTabTitle(title.title);
        return true;
      } else {
        setTabTitle(defaultTitle);
      }
      return false;
    });
  }, [currentLocation]);

  return (
    <LocationContext.Provider
      value={{
        previousLocation,
        currentLocation,
        setCurrentLocation,
        customBackTitle,
        setCustomBackTitle,
        tabTitle,
        setTabTitle,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
