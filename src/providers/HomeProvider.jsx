import React, { useEffect, useState } from "react";
import HomeContext from "../context/HomeContext";
import axios from "axios";

const HomeProvider = ({ children }) => {
  const [participant, setParticipant] = useState(null);
  const [participantScore, setParticipantScore] = useState([]);
  const [othersParticipants, setOthersParticipants] = useState([]);
  const [popona, setPopona] = useState("");
  const [portfFoliosCount, setPortfoliosCount] = useState(0);
  const [participantsCount, setParticipantsCount] = useState(null);
  const [arrPayout, setArrPayout] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userTapaszi")) !== null) {
      setParticipant(JSON.parse(localStorage.getItem("userTapaszi")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScores = () => {
    // setIsLoading(true);
    const urlGetPortfolios = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/score/home?api-key=TESTAPIKEY&participant-id=${participant?.id}`;

    axios
      .get(urlGetPortfolios, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setOthersParticipants(response?.data?.data?.others);
          setParticipantScore(response?.data?.data?.participant);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getParameters = () => {
    const urlGetParameters = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/parameters?api-key=TESTAPIKEY&parameter-key=POPONA`;

    axios
      .get(urlGetParameters, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setPopona(response?.data?.data?.value);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPortfoliosCount = () => {
    const urlGetPortFoliosCount = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/portfolios/count?api-key=TESTAPIKEY`;

    axios
      .get(urlGetPortFoliosCount, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (
          response?.data?.success === false &&
          response?.data?.error?.description === "No records found."
        ) {
          setIsLoading(false);
        }
        if (response?.data?.data) {
          setPortfoliosCount(response?.data?.data?.count);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getParticipantsCount = () => {
    const urlGetParticipantsCount = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/participants/count?api-key=TESTAPIKEY`;

    axios
      .get(urlGetParticipantsCount, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setParticipantsCount(response?.data?.data?.count);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPayout = () => {
    const urlGetPayout = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/payout?api-key=TESTAPIKEY&portfolios=${portfFoliosCount}`;

    axios
      .get(urlGetPayout, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setArrPayout(response?.data?.data?.payout);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (participant) {
      getScores();
      getParameters();
      getPortfoliosCount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participant]);

  useEffect(() => {
    setIsLoading(true);
    if (portfFoliosCount) {
      getParticipantsCount();
      getPayout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfFoliosCount]);

  return (
    <HomeContext.Provider
      value={{
        participantScore,
        othersParticipants,
        popona,
        portfFoliosCount,
        participantsCount,
        arrPayout,
        isLoading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
