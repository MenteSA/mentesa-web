import { useState } from "react";
import FormLayout from "../../components/FormLayout";
import { useAuth } from "../../context/auth.context";
import { useUser } from "../../context/user.context";
import { Input, HelperContainer, CreateAccountContainer } from "./style";
import { Container, Row, Modal  } from 'react-bootstrap';
import ProfessionalCreate from "../Professional/Create";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { signIn } = useAuth();
  const { setUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "admin@admin" && password === "123") {
      console.log("logar");
      signIn();
      setUser("Dr. Chico", true);
    } else if (email === "pac@pac" && password === "123") {
      console.log("logar");
      signIn();
      setUser("Chico", false);
    } else if (email !== "" && password !== "") {
      console.log("logar");
      signIn();
      setUser("Dr. Chico", true);
    }
  };

  return (
    <Container>
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
            <label onClick={handleShow}>Criar Conta</label>
          </CreateAccountContainer>
        </FormLayout>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>            
              <ProfessionalCreate />
          </Modal.Body>
        </Modal>
    </Container>
         

   
  );
};

export default Login;
