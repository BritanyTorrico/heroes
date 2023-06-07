import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/login/LoginPage";
import { DashRouter } from "./DashRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  return (
    <>
      <Routes>
      <Route
          path="/login"
          element={
            <PublicRoute>
            <LoginPage />
            </PublicRoute>
          }
        />
        
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
