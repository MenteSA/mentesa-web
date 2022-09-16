import DashboardPatientContent from "../../components/Patients/DashboardContent";
import DashboardProfessionalContent from "../../components/Professional/DashboardContent";
import { useUser } from "../../context/user.context";
import { Container } from "./style";

const Dashboard: React.FC = () => {
  const { professional } = useUser();

  return (
    <Container>
      {professional ? (
        <DashboardProfessionalContent />
      ) : (
        <DashboardPatientContent />
      )}
    </Container>
  );
};

export default Dashboard;
