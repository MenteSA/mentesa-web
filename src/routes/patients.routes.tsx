

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
