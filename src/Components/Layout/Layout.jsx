import React, { Fragment } from "react";
import Header from "../Containers/Header/Header";
import Menu from "../UI/Menu/Menu";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        {/* <Menu /> */}
        <Menu className={classes.Content}>{props.children}</Menu>
      </div>
    </Fragment>
  );
};

export default layout;
