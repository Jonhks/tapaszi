import React, { useState } from "react";
import { Grid, Button, Zoom } from "@mui/material";
import classes from "./Home.module.css";
import Table from "../../UI/Table/Table";

const Home = () => {
  const [selected, setSelected] = useState("first");
  const [showTable, setShowTable] = useState(false);
  return (
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
          xs={5}
          m={1}
          className={`${classes.boxHome} ${
            selected === "first" && classes.active
          }`}
          id="first"
          onClick={() => setSelected("first")}
        >
          <p className={classes.titleBox}>
            The 20th annual Portfolio Pool is here!!!
          </p>
          <div className={classes.subBox}>
            <p>
              This is limited to 150 e-mail addresses.  There are about 30 open
              spots, so please take time to sign up early.  I ask that you limit
              sending this to 1 additional person if you know of someone who
              would like to join, as I don’t want to shut prior participants
              out.
            </p>

            <p>Please use the menu to the left and select: My Portfolios to</p>
            <p>make your portfolio entries.</p>
            <p>Rules are in the Instructions window.</p>

            <p>
              Stats and History will update for the current year once the
              deadline for entries has passed.
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={3.5}
          m={1}
          className={`${classes.boxHome} ${
            selected === "second" && classes.active
          }`}
          id="second"
          onClick={() => setSelected("second")}
        >
          <p className={classes.titleBox}>Payouts</p>
          <div className={classes.subBoxTwo}>
            <p>total Constestans:</p>
            <p>Total Entries</p>
            <br />
            <p>
              1st Place: <span>47.50%</span>
            </p>
            <p>
              2nd Place: <span>28.00%</span>
            </p>
            <p>
              3rd Place: <span>15.0%</span>
            </p>
            <p>
              4th Place: <span>9.50%</span>
            </p>
            <p>of Total Prize Money</p>
          </div>
        </Grid>
        <Grid
          item
          xs={3.5}
          m={1}
          className={`${classes.boxHome} ${
            selected === "third" && classes.active
          }`}
          id="third"
          onClick={() => setSelected("third")}
        >
          <p className={classes.titleBox}>Payment Methods </p>
          <div className={classes.subBoxTwo}>
            <p>Paypal</p>
            <p>adingo8yourbaby@gmail.com</p>
            <p>Paypal Website</p>
            <p>Venmo name:</p>
            <p>Paul-Tapaszi</p>
          </div>
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
        >
          <Button
            variant="contained"
            onClick={() => setShowTable((showTable) => !showTable)}
          >
            {!showTable ? "Show table" : "Hide table"}
          </Button>
        </Grid>
        <Zoom in={showTable}>
          <Grid
            item
            xs={12}
          >
            <Table />
          </Grid>
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Home;
