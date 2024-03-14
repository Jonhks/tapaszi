import React, { useEffect, useState } from "react";
import HomeContext from "../context/HomeContext";
import HistoryContext from "../context/HistoryContext";
import axios from "axios";

const HistoryProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tournaments, setTournaments] = useState([]);
  const [pointsPerRound, setPointsPerRound] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState({ id: 1 });
  const [selectedScore, setSelectedScore] = useState({});
  const [selectedOrderBy, setSelectedOrderBy] = useState(1);
  const [arrHistory, setArrHistory] = useState([]);

  const getTournaments = () => {
    setIsLoading(true);
    const urlGetTournaments = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/tournaments?api-key=TESTAPIKEY`;
    axios
      .get(urlGetTournaments, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data) {
          setTournaments(response?.data?.data?.tournaments);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getScorePPR = () => {
    if (selectedTournament?.id) {
      const urlGetScorePPR = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/points-per-round?api-key=TESTAPIKEY&tournament-id=${selectedTournament?.id}`;

      axios
        .get(urlGetScorePPR, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        })
        .then((response) => {
          if (response?.data) {
            setPointsPerRound(response?.data?.data?.pointsPerRound);
            // setTimeout(() => setIsLoading(false), 1000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getScoreHistory = () => {
    setIsLoading(true);
    const urlGetScoreHistory = `https://ercom-b.dev:8443/com.tapaszi.ws/rest/score/history?api-key=TESTAPIKEY&tournament-id=${
      selectedTournament?.id
    }&round=${
      selectedScore?.consecutive ? selectedScore?.consecutive : 8
    }&order=${selectedOrderBy}`;

    axios
      .get(urlGetScoreHistory, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data) {
          setArrHistory(response?.data?.data?.history);
          setTimeout(() => setIsLoading(false), 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTournaments();
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        tournaments,
        isLoading,
        setSelectedTournament,
        pointsPerRound,
        setSelectedScore,
        selectedOrderBy,
        setSelectedOrderBy,
        arrHistory,
        getScoreHistory,
        getScorePPR,
        selectedTournament,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
