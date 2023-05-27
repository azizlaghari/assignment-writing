import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  var id = localStorage.getItem("LoggedIn");

  return (
    <Route
      {...rest}
      render={(props) =>
        id && localStorage.hasOwnProperty("LoggedIn") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;