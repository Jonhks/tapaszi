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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import classes from "./Login.module.css";

const Login = () => {
  const [stateSelected, setStateSelected] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const { getSignUp, states } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setStateSelected(event.target.value);
  };

  const getUserData = (e) => {
    setUserData({
      ...userData,
      [e?.target?.name]: e?.target.value,
    });
  };

  const validateForm = () => {
    setError(true);
    const { name, surname, email, stateId, username, password } = userData;
    if (
      !name ||
      !surname ||
      !email ||
      !stateId ||
      !username ||
      !password ||
      name?.length <= 2 ||
      surname?.length <= 2 ||
      (email?.length <= 2 && !email?.includes("@")) ||
      !stateId ||
      username?.length <= 2 ||
      password?.length <= 2
    ) {
      setError(true);
      alertify.error("All fields are mandatory!!");
      setTimeout(() => setError(false), 2000);
    } else {
      setError(false);
      console.log(userData);
      alertify.success("send login request");
      getSignUp(userData);
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
                <p className={classes.title}>Sign up to</p>
                <p className={classes.titleTwo}>The Portfolio Pool</p>
                <p className={classes.subtitle}>Create your account</p>
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
                    type={"text"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="name"
                    placeholder="First Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
                  <Input
                    required
                    type={"text"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="surname"
                    placeholder="Last Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
                  <Input
                    required
                    type={"e-mail"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="email"
                    placeholder="E-mail"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "80%" }}
                  >
                    <InputLabel
                      id="demo-multiple-name-label"
                      className={classes.selectClass}
                    >
                      <FlagIcon color="white" />
                      State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={stateSelected}
                      onChange={(e) => {
                        handleChange(e);
                        getUserData(e);
                      }}
                      name="stateId"
                      label="State"
                      placeholder="State"
                      className={classes.selectClass}
                    >
                      {states &&
                        states?.map((state) => {
                          return (
                            <MenuItem
                              key={state?.id}
                              id={state?.id}
                              value={state?.id}
                            >
                              {state?.name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                  <Input
                    required
                    type={"e-mail"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="username"
                    placeholder="Username"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
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
                  <Input
                    required
                    type={"password"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="code"
                    placeholder="Code"
                    startAdornment={
                      <InputAdornment position="start">
                        <SecurityIcon color="white" />
                      </InputAdornment>
                    }
                    onChange={(e) => getUserData(e)}
                  />
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
                      Sign Up
                    </Button>
                    {error && (
                      <div>
                        <p className={classes.error}>
                          All fields are mandatory
                        </p>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
              <div className={classes.containerSignUp}>
                <p>Already have an account?</p>
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
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
