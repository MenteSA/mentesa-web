import { ReactNode } from "react";
import { Container, Form, Title, SubmitContainer } from "./style";

interface IProps {
  title: string;
  subtitle: string;
  information: string;
  buttonDescription: string;
  returnForm: boolean;
  children: ReactNode;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
}
const FormLayout: React.FC<IProps> = ({
  title,
  subtitle,
  information,
  buttonDescription,
  returnForm,
  children,
  handleSubmit,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {returnForm && <a href="/">Voltar</a>}
        <Title>{title}</Title>
        <h3>{subtitle}</h3>
        <p>{information}</p>
        {children}
        <SubmitContainer>
          <input type="submit" value={buttonDescription} />
        </SubmitContainer>
      </Form>
    </Container>
  );
};

export default FormLayout;
