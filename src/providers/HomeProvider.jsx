import React, { useEffect, useState } from "react";
import HomeContext from "../context/HomeContext";
import axios from "axios";

const HomeProvider = ({ children }) => {
  const [participant, setParticipant] = useState(null);
  const [participantScore, setParticipantScore] = useState([]);
  const [othersParticipants, setOthersParticipants] = useState([]);

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

  useEffect(() => {
    if (participant) {
      getScores();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participant]);

  return (
    <HomeContext.Provider
      value={{
        participantScore,
        othersParticipants,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
