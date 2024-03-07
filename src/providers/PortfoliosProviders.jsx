import React, { useEffect, useState } from "react";
import PortfoliosContext from "../context/PortfoliosContext";
import axios from "axios";

const PortfoliosProviders = ({ children }) => {
  const [portfoliosObtained, setPortfoliosObtained] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);

  const getPortfolios = () => {
    setIsLoading(true);
    const urlGetPortfolios =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios?api-key=TESTAPIKEY&participant-id=1";

    axios
      .get(urlGetPortfolios, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setPortfoliosObtained(response?.data?.data?.portfolios);
          setTimeout(() => setIsLoading(false), 1200);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTeams = () => {
    setIsLoading(true);
    const urlGetTeams =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/teams?api-key=TESTAPIKEY";

    axios
      .get(urlGetTeams, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setTeams(response?.data?.data?.teams);
          setTimeout(() => setIsLoading(false), 1200);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postNewPortfolio = (portfolio) => {
    const urlLogin =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios/register?api-key=TESTAPIKEY&participant-id=1";
    const postPortfolio = {
      championshipPoints: Number(portfolio?.championshipPoints),
      teams: portfolio?.teamsId,
    };
    axios
      .post(urlLogin, JSON.stringify(postPortfolio), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response);
        getPortfolios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeportfolio = (portId) => {
    const urlRemovePortfolio = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios/remove?api-key=TESTAPIKEY&portfolio-id=${portId}&participant-id=1`;
    const newData = [...portfoliosObtained];

    newData.filter((el) => el?.id !== portId);
    const postPortfolio = {
      championshipPoints: 123,
      teams: [
        {
          id: 1,
        },
        {
          id: 12,
        },
        {
          id: 13,
        },
        {
          id: 14,
        },
        {
          id: 15,
        },
        {
          id: 16,
        },
        {
          id: 17,
        },
        {
          id: 18,
        },
      ],
    };
    axios
      .post(urlRemovePortfolio, JSON.stringify(postPortfolio), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response);
        // setPortfoliosObtained(newData);
        // getPortfolios();
        // setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPortfolios();
    getTeams();
  }, []);

  // console.log(portfoliosObtained);

  return (
    <PortfoliosContext.Provider
      value={{
        portfoliosObtained,
        isLoading,
        teams,
        postNewPortfolio,
        removeportfolio,
      }}
    >
      {children}
    </PortfoliosContext.Provider>
  );
};

export default PortfoliosProviders;
