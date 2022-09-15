import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Schedulling: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  return <Container>`agendamento {type}`</Container>;
};
export default Schedulling;
