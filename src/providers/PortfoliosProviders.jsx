import React, { useEffect, useState } from "react";
import PortfoliosContext from "../context/PortfoliosContext";
import axios from "axios";

const PortfoliosProviders = ({ children }) => {
  const [portfoliosObtained, setPortfoliosObtained] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [participant, setParticipant] = useState(null);
  const [errorSavePortfolio, setErrorSavePortfolio] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userTapaszi")) !== null) {
      setParticipant(JSON.parse(localStorage.getItem("userTapaszi")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPortfolios = () => {
    setIsLoading(true);
    const urlGetPortfolios = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios?api-key=TESTAPIKEY&participant-id=${participant?.id}`;

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
    console.log(portfoliosObtained?.length);
    if (portfoliosObtained?.length + 1 >= 8) return;
    console.log("se guarda");
    const urlLogin = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios/register?api-key=TESTAPIKEY&participant-id=${participant?.id}`;
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
        if (
          !response?.data.success &&
          response?.data?.error?.description ===
            "Can't register portfolio, tournament already started."
        ) {
          setIsLoading(false);
          setErrorSavePortfolio(true);
          return;
        }
        getPortfolios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeportfolio = (portId) => {
    const urlRemovePortfolio = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios/remove?api-key=TESTAPIKEY&portfolio-id=${portId}&participant-id=${participant?.id}`;
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (participant) {
      getPortfolios();
      getTeams();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participant]);

  // console.log(portfoliosObtained);

  return (
    <PortfoliosContext.Provider
      value={{
        portfoliosObtained,
        isLoading,
        teams,
        postNewPortfolio,
        removeportfolio,
        errorSavePortfolio,
        setErrorSavePortfolio,
      }}
    >
      {children}
    </PortfoliosContext.Provider>
  );
};

export default PortfoliosProviders;
