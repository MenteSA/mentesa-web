import { Container } from "react-bootstrap";
import { useUser } from "../../context/user.context";

const Schedulling: React.FC = () => {
  const { professional } = useUser();

  return <Container>`agendamento {professional}`</Container>;
};
export default Schedulling;
