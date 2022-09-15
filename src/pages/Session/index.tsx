import { useParams } from "react-router-dom";
import { Container } from "./style";

const Session: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  return <Container>`sessão {type}`</Container>;
};

export default Session;
