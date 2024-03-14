import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import * as alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children, isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userTapaszi")) !== null) {
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.parse(localStorage.getItem("userTapaszi"))]);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(
        () => {
          navigate("/home");
        },
        JSON.parse(localStorage.getItem("userTapaszi")) !== null ? 500 : 1500
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const getSignUp = (user) => {
    // const urlRegister = `${process.env.REACT_APP_BASE_DOMAIN}/participants/register?api-key=${process.env.REACT_APP_APIKEY}`;
    const urlRegister =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/participants/register?api-key=TESTAPIKEY";
    const postUser = {
      name: user?.name?.toUpperCase(),
      surname: user?.surname?.toUpperCase(),
      email: user?.email.toLowerCase(),
      username: user?.username,
      password: user?.password,
      stateId: user?.stateId,
      code: user?.code,
    };

    axios
      .post(urlRegister, JSON.stringify(postUser), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (response?.data?.success === true) {
          getLogin({
            user: user?.email,
            password: user?.password,
          });
        } else if (
          response?.data?.success === false &&
          response?.data?.error?.description ===
            "The participant is already registered!"
        ) {
          alertify.error("The participant is already registered!");
          setTimeout(() => navigate("/login"), 1000);
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
          localStorage.setItem(
            "userTapaszi",
            JSON.stringify(response?.data?.data)
          );
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
  const postForgot = (user) => {
    const urlForgot =
      "https://ercom-b.dev:8443/com.tapaszi.ws/rest/participants/forgot?api-key=TESTAPIKEY";
    const postUserLogin = {
      user: user?.user,
    };
    axios
      .post(urlForgot, JSON.stringify(postUserLogin), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.success === true) {
          alertify.success("your new password has been sent");
          setTimeout(() => navigate("/login"), 1800);
        } else if (response?.data?.success === false) {
          console.log(response);
          alertify.error(
            "an error has occurred, try again or contact support "
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStates = () => {
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
        postForgot,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
