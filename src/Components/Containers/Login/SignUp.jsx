import React, { useState } from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useNavigate } from "react-router-dom";
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
import classes from "./Login.module.css";

const Login = () => {
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
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
                    placeholder="Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
                      </InputAdornment>
                    }
                  />
                  <Input
                    required
                    type={"text"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="lastName"
                    placeholder="Last Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
                      </InputAdornment>
                    }
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
                      value={age}
                      onChange={handleChange}
                      name="state"
                      label="State"
                      placeholder="State"
                      className={classes.selectClass}
                    >
                      <MenuItem value="State">
                        <em>State</em>
                      </MenuItem>
                      <MenuItem value={"mex"}>Mex</MenuItem>
                      <MenuItem value={"usa"}>USA</MenuItem>
                      <MenuItem value={"japan"}>Japan</MenuItem>
                    </Select>
                  </FormControl>
                  <Input
                    required
                    type={"e-mail"}
                    sx={{ width: "80%", m: 2 }}
                    id="input-with-icon-adornment"
                    name="userName"
                    placeholder="User name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="white" />
                      </InputAdornment>
                    }
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
                  />
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    className={classes.containerBtnLogin}
                  >
                    <Button
                      variant="contained"
                      onClick={() => alertify.success("send login request")}
                      sx={{ m: 2 }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.containerSignUp}>
                <p>Already have an account?</p>
                <div
                  onClick={() => {
                    navigate("/login");
                    alertify.success("send login request");
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
