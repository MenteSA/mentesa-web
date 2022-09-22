import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { useUser } from '../context/user.context';
import { queryClient } from '../services/queryClient';
import AuthRoutes from './auth.routes';
import PatientRoutes from './patients.routes';
import ProfessionalRoutes from './professional.routes';

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { isAdmin } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isAuthenticated ? (
          isAdmin ? (
            <ProfessionalRoutes />
          ) : (
            <PatientRoutes />
          )
        ) : (
          <AuthRoutes />
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Routes;
