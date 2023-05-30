import React from "react";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  var id = localStorage.getItem("LoggedIn");
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        id && localStorage.hasOwnProperty("LoggedIn") ? (
          <Component {...props} />
        ) : (
          navigate ("/login")
        )
      }
    />
  );
};

export default PrivateRoute;