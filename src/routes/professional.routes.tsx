import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Resource from "../pages/Resources";
import Schedulling from "../pages/Schedulling";
import Session from "../pages/Session";
import Patients from "../pages/Patient";
import Professional from "../pages/Professional";

const ProfessionalRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my-profile" element={<Professional />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/schedulling" element={<Schedulling />} />
      <Route path="/sessions" element={<Session />} />
      <Route path="/resources" element={<Resource />} />
    </Routes>
  </Layout>
);

export default ProfessionalRoutes;
