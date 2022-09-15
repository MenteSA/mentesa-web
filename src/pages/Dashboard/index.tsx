import DashboardPatientContent from "../../components/DashboardPatientContent";
import DashboardProfessionalContent from "../../components/DashboardProfessionalContent";
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
