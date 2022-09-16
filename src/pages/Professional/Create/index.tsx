import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "../../../components/FormLayout";
import { useAuth } from "../../../context/auth.context";
import { useUser } from "../../../context/user.context";
import { HelperContainer, Input } from "./style";

const ProfessionalCreate: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [termsAccept, setTermsAccept] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { setUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      passwordConfirmation !== "" &&
      password === passwordConfirmation &&
      termsAccept
    ) {
      console.log("cadastrar");
      navigate("/");
      setUser(name, true);
      signIn();
    }
  };

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      title="Mente Sã"
      subtitle="Cadastro do profissional"
      information="Crie sua conta e comece a desfrutar do nosso sistema."
    >
      <Input
        type="text"
        placeholder="Nome"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
      <Input
        type="password"
        placeholder="Confirme sua senha"
        onChange={(e) => {
          setPasswordConfirmation(e.target.value);
        }}
      />
      <HelperContainer>
        <label>
          <input
            type="checkbox"
            checked={termsAccept}
            onChange={(e) => {
              setTermsAccept(e.target.checked);
            }}
          />
          Aceito os termos e politicas de privacidade
        </label>
      </HelperContainer>
    </FormLayout>
  );
};

export default ProfessionalCreate;
