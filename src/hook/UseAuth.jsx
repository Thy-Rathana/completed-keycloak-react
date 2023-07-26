import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const UseAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const isRun = useRef(false);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   setIsLogin(true);
    // }

    if (isRun.current) {
      return;
    }

    isRun.current = true;

    const client = new Keycloak({
      url: "http://10.2.2.141:8020",
      realm: "react-auth",
      clientId: "react-auth",
      // url: process.env.KEYCLOAK_URL,
      // realm: process.env.KEYCLOAK_REALM,
      // clientId: process.env.KEYCLOAK_CLIENT,
    });
    console.log(client);
    client.init({ onLoad: "login-required" }).then((auth) => setIsLogin(true));
    console.log(client);
  }, []);

  return isLogin;
};

export default UseAuth;
