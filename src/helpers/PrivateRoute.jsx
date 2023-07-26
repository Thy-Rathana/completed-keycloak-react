import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  const login = (
    <div className="flex justify-center">
      <div className="flex items-center">
        <p> Need to login first</p>
        <button
          className="bg-gray-500 px-3 py-1 rounded-lg text-white m-4"
          onClick={() => keycloak.login()}
        >
          Login
        </button>
      </div>
    </div>
  );

  return isLoggedIn ? children : login;
};

export default PrivateRoute;
