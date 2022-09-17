import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useUser } from "../context/user.context";
import { queryClient } from "../services/queryClient";
import AuthRoutes from "./auth.routes";
import PatientRoutes from "./patients.routes";
import ProfessionalRoutes from "./professional.routes";

const Routes: React.FC = () => {
  const { logged } = useAuth();
  const { professional } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {logged && professional ? (
          <ProfessionalRoutes />
        ) : logged && !professional ? (
          <PatientRoutes />
        ) : (
          <AuthRoutes />
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Routes;
