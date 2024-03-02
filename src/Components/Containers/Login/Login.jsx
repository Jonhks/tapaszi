import React, { useState, useContext } from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";

import {
  Container,
  Grid,
  Slide,
  Box,
  Button,
  Input,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const getUserData = (e) => {
    setUserData({
      ...userData,
      [e?.target?.name]: e?.target.value,
    });
  };

  const validateForm = () => {
    setError(true);
    const { user, password } = userData;
    if (
      user &&
      password &&
      user?.length >= 2 &&
      user?.includes("@") &&
      password?.length >= 2
    ) {
      setError(false);
      setUser(userData);
      alertify.success("send login request");
    } else {
      setError(true);
      alertify.error("All fields are oligatory!!");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      className={classes.background}
    >
      <Slide
        direction={"up"}
        in
      >
        <Grid
          container
          spacing={2}
          className={classes.container}
        >
          <Container maxWidth="sm">
            <Box className={classes.box}>
              <div className={classes.head}>
                <p className={classes.title}>Welcome to</p>
                <p className={classes.titleTwo}>The Portfolio Pool</p>
                <p className={classes.subtitle}>
                  Enter your credential to login
                </p>
              </div>
              <div className={classes.containerForm}>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  className={classes.form}
                >
                  <Input
                    required
                    type={"e-mail"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="user"
                    placeholder="E-mail"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
                  <Input
                    required
                    type={"password"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="password"
                    placeholder="Password"
                    startAdornment={
                      <InputAdornment position="start">
                        <HttpsIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
                  <div className={classes.containerCheckBox}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                    />
                    <span
                      onClick={() =>
                        alertify.success("requests password change")
                      }
                    >
                      Forgot password?
                    </span>
                  </div>
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    className={classes.containerBtnLogin}
                  >
                    <Button
                      variant="contained"
                      onClick={() => validateForm()}
                      sx={{ m: 2 }}
                    >
                      Login
                    </Button>
                    {error && (
                      <div>
                        <p className={classes.error}>
                          All fields are oligatory
                        </p>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
              <div className={classes.containerSignUp}>
                <p>Don't have an account ?</p>
                <div
                  onClick={() => {
                    alertify.success("send signUp request");
                    navigate("/signup");
                  }}
                >
                  Sign up
                </div>
              </div>
            </Box>
          </Container>
        </Grid>
      </Slide>
    </Grid>
  );
};

export default Login;
