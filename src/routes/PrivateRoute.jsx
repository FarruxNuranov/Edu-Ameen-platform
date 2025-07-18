import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = useSelector((state) => state.auth.finalToken) || localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
