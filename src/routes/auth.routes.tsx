import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ProfessionalCreate from '../pages/Professional/Create';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<ProfessionalCreate />} />
  </Routes>
);

export default AuthRoutes;
