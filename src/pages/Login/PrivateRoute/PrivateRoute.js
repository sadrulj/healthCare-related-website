import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
