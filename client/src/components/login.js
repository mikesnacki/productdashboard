import React from "react";
import { useAuth0 } from "../utilhooks/useAuth";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  console.log(user)
  return (
    <div>
        <div className="login-page">
      {!isAuthenticated && (
        <button 
            className="button-clear login-button"
            onClick={() => loginWithRedirect({})}>
        Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
    </div>
  );
};

export default Login;