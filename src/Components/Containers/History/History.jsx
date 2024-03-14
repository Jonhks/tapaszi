import React, { useContext, useEffect } from "react";
import classes from "./History.module.css";
import { Grid, Zoom, Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { PodiumIcon } from "../../../assets/icons/icons";
import TimerIcon from "@mui/icons-material/Timer";
import BallLoader from "../../UI/BallLoader/BallLoader";
import DropDownHistory from "../../UI/Inputs/DropdDownHistory";
import RadioButtonHistory from "../../UI/Inputs/RadioButtonHistory";
import HistoryContext from "../../../context/HistoryContext";
import TableHistory from "../../UI/Table/TableHistory";

const History = () => {
  const {
    tournaments,
    isLoading,
    setSelectedTournament,
    pointsPerRound,
    selectedOrderBy,
    setSelectedScore,
    setSelectedOrderBy,
    arrHistory,
    getScoreHistory,
    getScorePPR,
    selectedTournament,
  } = useContext(HistoryContext);

  const [tournament, setTournament] = React.useState("");
  const [score, setScore] = React.useState("");

  useEffect(() => {
    const current = tournaments.filter((el) => el?.current)[0];
    setTournament(current?.name);
    setScore("CURRENT SCORE");
    setSelectedTournament(current);

    setTimeout(() => {
      if (selectedTournament?.id) {
        getScorePPR();
        getScoreHistory();
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tournaments]);

  const handleChange = (e) => {
    if (e?.target?.name === "tournament") {
      const optionSelect = tournaments.filter(
        (el) => el?.name === e?.target?.value
      )[0];
      setTournament(e?.target?.value);
      setSelectedTournament(optionSelect);
    } else if (e?.target?.name === "score") {
      const optionSelect = pointsPerRound.filter(
        (el) => el?.name === e?.target?.value
      )[0];
      setScore(e?.target?.value);
      setSelectedScore(optionSelect);
    }
  };

  return (
    <>
      {isLoading ? (
        <BallLoader />
      ) : (
        <Grid
          item
          xs={12}
          className={classes.containerHome}
        >
          <Grid
            container
            spacing={1}
            flexWrap={"nowrap"}
          >
            <Grid
              item
              xs={8}
              m={1}
              className={`${classes.boxHistory} ${classes.active}`}
              id="first"
            >
              <div className={classes.containerHeadHistory}>
                <p className={classes.titleBox}>
                  <HistoryIcon /> Stats & history
                </p>
                <Button
                  variant="contained"
                  // color="success"
                  style={{
                    width: "35%",
                    textTransform: "capitalize",
                    backgroundColor: "#238b94",
                  }}
                  className={classes.btnSubmit}
                  onClick={() => getScoreHistory()}
                >
                  Send
                </Button>
              </div>
              <Grid
                container
                className={classes.subBoxHistory}
                flexWrap={"nowrap"}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                  >
                    <span>Tournament:</span>
                    <div className={classes.containerDrop}>
                      <PodiumIcon />
                      <DropDownHistory
                        name={"tournament"}
                        label={"Tournament"}
                        className={classes.DropDownHistory}
                        value={tournament}
                        handleChange={handleChange}
                        options={tournaments}
                      />
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <span>Scrore:</span>
                    <div className={classes.containerDrop}>
                      <TimerIcon />
                      <DropDownHistory
                        name={"score"}
                        label={"Score"}
                        className={classes.DropDownHistory}
                        value={score}
                        handleChange={handleChange}
                        options={pointsPerRound}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Grid
                    item
                    xs={4}
                  ></Grid>
                  <Grid
                    item
                    xs={8}
                  >
                    <span>Order by:</span>
                    <div style={{ paddingLeft: "16px" }}>
                      <RadioButtonHistory
                        setSelectedOrderBy={setSelectedOrderBy}
                        selectedOrderBy={selectedOrderBy}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              className={classes.containerBtn}
            ></Grid>
            <Zoom in={true}>
              <Grid
                item
                xs={12}
              >
                <TableHistory
                  arrHistory={arrHistory}
                  score={score}
                />
              </Grid>
            </Zoom>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default History;
