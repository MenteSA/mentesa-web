import DashboardCard from "../DashboardCard";
import { Container } from "./style";

const DashboardPatientContent: React.FC = () => {
  return (
    <Container>
      <DashboardCard description="Sessões agendadas (dia)" value="20" />
      <DashboardCard description="Sessões agendadas (mês)" value="25" />
      <DashboardCard description="Sessões canceladas (mês)" value="2" />
      <DashboardCard description="Total de sessões" value="200" />
      <DashboardCard description="Total de sessões (individuais)" value="20" />
      <DashboardCard description="Total de sessões (duplas)" value="10" />
      <DashboardCard description="Total de sessões (grupo)" value="10" />
    </Container>
  );
};

export default DashboardPatientContent;
