import DashboardCard from "../../DashboardCard";
import { Container, Row } from 'react-bootstrap';

const DashboardPatientContent: React.FC = () => {
  return (
    <Container>
       <Container>
      <Row>
        <DashboardCard description="Sessões agendadas (dia)" value="20" />
        <DashboardCard description="Sessões agendadas (mês)" value="25" />
      </Row>
      
      <Row>
        <DashboardCard description="Sessões canceladas (mês)" value="2" />
        <DashboardCard description="Total de pacientes cadastrados" value="200" />
      </Row>
      
      <Row>
      <DashboardCard description="Total de sessões (individuais)" value="20" />
      <DashboardCard description="Total de sessões (duplas)" value="10" />
      </Row>
      
      <Row>
      <DashboardCard description="Total de sessões (grupo)" value="10" />
      </Row>
    </Container>
    </Container>
  );
};

export default DashboardPatientContent;
