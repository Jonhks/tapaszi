import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import * as alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children, isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const getSignUp = (user) => {
    // const urlRegister = `${process.env.REACT_APP_BASE_DOMAIN}/participants/register?api-key=${process.env.REACT_APP_APIKEY}`;
    const urlRegister =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/participants/register?api-key=TESTAPIKEY";
    console.log(user);
    const postUser = {
      name: user?.name?.toUpperCase(),
      surname: user?.surname?.toUpperCase(),
      email: user?.email,
      username: user?.username,
      password: user?.password,
      stateId: user?.stateId,
    };

    axios
      .post(urlRegister, JSON.stringify(postUser), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.success === true) {
          setIsAuthenticated(true);
        } else if (
          response?.data?.success === false &&
          response?.data?.error?.description ===
            "The participant is already registered!"
        ) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLogin = (user) => {
    const urlLogin =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/participants/login?api-key=TESTAPIKEY";
    const postUserLogin = {
      user: user?.user,
      password: user?.password,
    };
    axios
      .post(urlLogin, JSON.stringify(postUserLogin), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.success === true) {
          alertify.success("User successfully logged in");

          setIsAuthenticated(true);
        } else if (
          response?.data?.success === false &&
          response?.data?.error?.description === "Credentials are not valid!"
        ) {
          alertify.error("Credentials are not valid!");

          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStates = () => {
    // const urlStates = `${process.env.REACT_APP_BASE_DOMAIN}/states?api-key=${process.env.REACT_APP_APIKEY}`;
    const urlStates =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/states?api-key=TESTAPIKEY";
    axios
      .get(urlStates, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setStates(response?.data?.data?.states);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <UserContext.Provider
      value={{
        getLogin,
        getSignUp,
        states,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
