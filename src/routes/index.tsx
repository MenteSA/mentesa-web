import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useUser } from "../context/user.context";
import AuthRoutes from "./auth.routes";
import PatientRoutes from "./patients.routes";
import ProfessionalRoutes from "./professional.routes";

const Routes: React.FC = () => {
  const { logged } = useAuth();
  const { professional } = useUser();

  return (
    <BrowserRouter>
      {logged && professional ? (
        <ProfessionalRoutes />
      ) : logged && !professional ? (
        <PatientRoutes />
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
};

export default Routes;
