import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Professional from '../pages/Professional';
import Schedule from '../pages/Schedule';
import Session from '../pages/Session';

const PatientRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="*" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Professional />} />
      <Route path="/agendamentos" element={<Schedule />} />
      <Route path="/sessoes" element={<Session />} />
    </Routes>
  </Layout>
);

export default PatientRoutes;
