import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Resource from '../pages/Resource';
import Session from '../pages/Session';
import Patients from '../pages/Patient';
import Professional from '../pages/Professional';
import Schedule from '../pages/Schedule';

const ProfessionalRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="*" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Professional />} />
      <Route path="/pacientes" element={<Patients />} />
      <Route path="/agendamentos" element={<Schedule />} />
      <Route path="/sessoes" element={<Session />} />
      <Route path="/recursos" element={<Resource />} />
    </Routes>
  </Layout>
);

export default ProfessionalRoutes;
