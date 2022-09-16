import { useUser } from "../../context/user.context";
import { Container } from "./style";

const Session: React.FC = () => {
  const { professional } = useUser();
  return <Container>`sessão {professional}`</Container>;
};

export default Session;
