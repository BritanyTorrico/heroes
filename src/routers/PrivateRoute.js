import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.logged) {
    return children;
  } else {
    return <Navigate replace to="/login" />;
  }
};
