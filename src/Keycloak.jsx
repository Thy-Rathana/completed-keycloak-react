import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://10.2.2.141:8020",
  realm: "react-auth",
  clientId: "react-auth",
});

export default keycloak;

// import React, { createContext, useState, useEffect } from "react";

// // KEYCLOACK
// import Keycloak from "keycloak-js";

// const KeycloackContext = createContext();

// const KeycloackContextProvider = (props) => {
//   const [keycloackValue, setKeycloackValue] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);

//   const setKeycloack = () => {
//     const keycloak = new Keycloak({
//       url: "http://10.2.2.141:8020",
//       realm: "react-auth",
//       clientId: "react-auth",
//     });

//     keycloak
//       .init({
//         onLoad: "login-required",
//         // checkLoginIframe: false,
//       })
//       .then((authenticated) => {
//         setKeycloackValue(keycloak);
//         setAuthenticated(authenticated);
//       });
//   };

//   const logout = () => {
//     setKeycloackValue(null);
//     setAuthenticated(false);
//     keycloackValue.logout();
//   };

//   useEffect(() => {
//     // setKeycloack();
//   }, []);

//   return (
//     <KeycloackContext.Provider
//       value={{
//         keycloackValue,
//         authenticated,
//         logout,
//       }}
//     >
//       {props["children"]}
//     </KeycloackContext.Provider>
//   );
// };

// export { KeycloackContextProvider, KeycloackContext };
