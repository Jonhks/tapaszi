import React from "react";
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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

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
                    name="email"
                    placeholder="E-mail"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon color="white" />
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
                    className={classes.containerBtnLogin}
                  >
                    <Button
                      variant="contained"
                      onClick={() => alertify.success("send login request")}
                    >
                      Login
                    </Button>
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
