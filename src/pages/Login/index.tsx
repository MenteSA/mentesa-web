import { useState } from "react";
import FormLayout from "../../components/FormLayout";
import { Input, HelperContainer, CreateAccountContainer } from "./style";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email !== "" && password !== "") {
      console.log("logar");
    }
  };

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      title="Mente Sã"
      subtitle="Bem vindo ao sistema"
      information="Por favor entre com sua conta"
    >
      <Input
        type="email"
        placeholder="E-mail"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <HelperContainer>
        <label>
          <input type="checkbox" />
          Lembrar Usuário
        </label>
        <a>Esqueci minha senha?</a>
      </HelperContainer>
      <CreateAccountContainer>
        <a href="/createProfessionalAccount">Criar Conta</a>
      </CreateAccountContainer>
    </FormLayout>
  );
};

export default Login;
