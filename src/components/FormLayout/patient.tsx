import { ReactNode } from "react";
import { Container, Form, Title } from "./style";

interface IProps {
  title: string;
  subtitle: string;
  information: string;
  children: ReactNode;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
}
const FormLayoutPatient: React.FC<IProps> = ({
  title,
  subtitle,
  information,
  children,
  handleSubmit,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <h3>{subtitle}</h3>
        <p>{information}</p>
        {children}
      </Form>
    </Container>
  );
};

export default FormLayoutPatient;