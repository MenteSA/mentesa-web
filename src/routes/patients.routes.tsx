import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Schedulling from "../pages/Schedulling";
import Session from "../pages/Session";

const PatientRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard/" element={<Dashboard />} />
      <Route path="/schedulling/:type" element={<Schedulling />} />
      <Route path="/sessions/:type" element={<Session />} />
    </Routes>
  </Layout>
);

export default PatientRoutes;
