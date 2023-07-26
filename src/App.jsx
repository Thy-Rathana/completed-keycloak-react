import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";
import keycloak from "./Keycloak";
import Home from "./pages/Homepage";
import PostPage from "./pages/PostsPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/secured",
//     element: <SecuredPage />,
//   },
// ]);

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
              exact
              path="/posts"
              element={
                <PrivateRoute>
                  <PostPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
