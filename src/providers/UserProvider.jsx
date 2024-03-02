import React, { useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getSignUp = () => {
    // const url = `${process.env.REACT_APP_BASE_DOMAIN}/participants/register?api-key=${process.env.REACT_APP_APIKEY}`;

    const postUser = {
      name: "GUSTAVO",
      surname: "CALDERÓN",
      email: "gcalderon.7@gmail.com",
      username: "gcalderon",
      password: "pass1234",
      stateId: 1,
    };

    //   axios
    //     .post(url, postUser, {
    //       // headers: {
    //       //   Accept: "application/json, text/plain, */*",
    //       //   "Content-Type": "application/json",
    //       // },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    const url =
      "http://b.ercom.microbit.com:8080/com.tapaszi.ws/rest/participants/register?api-key=TESTAPIKEY";

    axios
      .post(url, postUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // --header 'Accept: application/json' \
  // --header 'Content-Type: application/json' \
  // --data-raw '{
  //     "name": "Gustavo",
  //     "surname": "Calderón",
  //     "email": "gcalderon.7@gmail.com",
  //     "username": "gcalderon",
  //     "password": "pass1234",
  //     "stateId": 1
  // }'

  // console.log(user);

  getSignUp();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
