import {
  Container,
  Form,
  Input,
  Title,
  HelperContainer,
  CreateAccountContainer,
  SubmitContainer,
} from "./style";

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Mente Sã</Title>
        <h3>Bem vindo ao sistema</h3>
        <p>Por favor entre com sua conta</p>
        <Input type="email" placeholder="E-mail"></Input>
        <Input type="password" placeholder="Senha"></Input>
        <HelperContainer>
          <input type="checkbox"></input>
          <span>Lembrar Usuário</span>
          <a>Esqueci minha senha?</a>
        </HelperContainer>
        <CreateAccountContainer>
          <a>Criar Conta</a>
        </CreateAccountContainer>
        <SubmitContainer>
          <input type="submit" value="Login"></input>
        </SubmitContainer>
      </Form>
    </Container>
  );
};

export default Login;
