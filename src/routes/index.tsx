import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.routes";
import PatientRoutes from "./patients.routes";
import ProfessionalRoutes from "./professional.routes";

const Routes: React.FC = () => {
  const logged = true;
  const professional = true;
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
