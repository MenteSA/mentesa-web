import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashboardCard from "../../components/DashboardCard";
import { useUser } from "../../context/user.context";
import { IDashboardDto } from "../../services/Dashboard/dtos/dashborad.dto";
import { useDashboardInfo } from "../../services/Dashboard/hook";

const Dashboard: React.FC = () => {
  const [dashboardInfo, setDashboardInfo] = useState<IDashboardDto>({
    schedulePerDay: 0,
    schedulePerMonth: 0,
    scheduleCanceledPerMonth: 0,
    totalPatientsNumber: 0,
    totalIndividualSchedule: 0,
    totalCoupleSchedule: 0,
    totalGroupSchedule: 0,
  } as IDashboardDto);
  const { isAdmin } = useUser();
  const { data, isSuccess } = useDashboardInfo();

  useEffect(() => {
    if (data && isSuccess) {
      setDashboardInfo(data.data.dashboard!);
    }
  }, [data, isSuccess]);

  return (
    <Container>
      <Row>
        <DashboardCard
          description="Sessões agendadas (dia)"
          value={dashboardInfo.schedulePerDay.toString()}
        />
        <DashboardCard
          description="Sessões agendadas (mês)"
          value={dashboardInfo.schedulePerMonth.toString()}
        />
      </Row>

      <Row>
        <DashboardCard
          description="Sessões canceladas (mês)"
          value={dashboardInfo.scheduleCanceledPerMonth.toString()}
        />
        {isAdmin && (
          <DashboardCard
            description="Total de pacientes cadastrados"
            value={dashboardInfo.totalPatientsNumber.toString()}
          />
        )}
      </Row>

      <Row>
        <DashboardCard
          description="Total de sessões (individuais)"
          value={dashboardInfo.totalIndividualSchedule.toString()}
        />
        <DashboardCard
          description="Total de sessões (duplas)"
          value={dashboardInfo.totalCoupleSchedule.toString()}
        />
      </Row>

      <Row>
        <DashboardCard
          description="Total de sessões (grupo)"
          value={dashboardInfo.totalGroupSchedule.toString()}
        />
      </Row>
    </Container>
  );
};

export default Dashboard;
