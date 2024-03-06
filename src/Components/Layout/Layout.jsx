import React, { Fragment } from "react";
import Menu from "../UI/Menu/Menu";
import classes from "./Layout.module.css";

const layout = (props) => {
  const { isAuthenticated, setIsAuthenticated } = props;
  return (
    <Fragment>
      <div className={classes.container}>
        <Menu
          className={classes.Content}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        >
          {props.children}
        </Menu>
      </div>
    </Fragment>
  );
};

export default layout;
