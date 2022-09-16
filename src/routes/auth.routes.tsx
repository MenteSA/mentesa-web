import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ProfessionalCreate from "../pages/Professional/Create";

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/createProfessionalAccount" element={<ProfessionalCreate />} />
  </Routes>
);

export default AuthRoutes;
