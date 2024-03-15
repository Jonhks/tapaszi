import React from "react";
import classes from "./Splash.module.css";
import { Slide } from "@mui/material";

const Splash = () => {
  if (window.location.pathname === "/") {
    setTimeout(() => (window.location.pathname = "/login"), 3000);
  }
  return (
    <Slide
      direction={"down"}
      in
    >
      {/* <div>
        <div className={classes.ball}>
          <div className={classes.inner}>
            <div className={classes.line}></div>
            <div className={`${classes.line} ${classes.lineTwo}`}></div>
            <div className={classes.oval}></div>
            <div className={`${classes.oval} ${classes.ovalTwo}`}></div>
          </div>
        </div>
        <div className={classes.shadow}></div>
      </div> */}
      <div className={classes.container}>
        <div className={classes.shadow}></div>
        <div className={classes.ball}></div>
      </div>
    </Slide>
  );
};

export default Splash;
