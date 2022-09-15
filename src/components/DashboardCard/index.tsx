import { Card } from "./style";

interface IProps {
  description: string;
  value: string;
}
const DashboardCard: React.FC<IProps> = ({ description, value }) => {
  return (
    <Card>
      <h3>{description}</h3>
      <h1>{value}</h1>
    </Card>
  );
};

export default DashboardCard;
