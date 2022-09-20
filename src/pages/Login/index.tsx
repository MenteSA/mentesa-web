import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormLayout from "../../components/FormLayout";
import { useAuth } from "../../context/auth.context";
import { useUser } from "../../context/user.context";
import {
  IAuthResponseDto,
  ILoginPropsDto,
} from "../../services/Auth/dtos/auth.dto";
import { fetchUserLogin } from "../../services/Auth/service";
import { Input, HelperContainer, CreateAccountContainer } from "./style";
import { Container, Modal } from "react-bootstrap";
import ProfessionalCreate from "../Professional/Create";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [rememberEmail, setRememberEmail] = useState(false);
  const { isAuthenticated, verifyAuthentication } = useAuth();
  const { setAuthenticatedUser, saveEmail, getEmail } = useUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useLayoutEffect(() => {
    const email = getEmail();
    if (email) {
      setValue("email", email);
      setRememberEmail(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    if (data.password.length < 8) {
      setError("password", { message: "Minímo 8 caracteres" });

      toast.error("Por favor, verifique as senhas. ");
      return;
    }

    if (data.email.length < 5) {
      setError("email", { message: "Campo obrigatório." });

      toast.error("Por favor, verifique o e-mail. ");
      return;
    }

    if (data.password !== "" && data.email !== "") {
      if (rememberEmail) {
        saveEmail(data.email);
      }

      mutate(data);
    }
  });

  const { mutate } = useMutation(
    (user: ILoginPropsDto) => fetchUserLogin(user),
    {
      onSuccess: (data: IAuthResponseDto) => {
        const { login } = data;
        if (login === undefined) {
          toast.error(`Ops, ${data.message}`);
        } else {
          toast.success("Usuário registrado com sucesso", {
            hideProgressBar: false,
          });
          setAuthenticatedUser(login);
          verifyAuthentication();
          if (isAuthenticated) {
            navigate("/");
          }
        }
      },
      onError: (data) => {
        toast.error(`Ops, algo aconteceu ${data}`);
      },
    }
  );

  return (
    <Container>
      <FormLayout
        handleSubmit={onSubmit}
        title="Mente Sã"
        subtitle="Bem vindo ao sistema"
        information="Por favor entre com sua conta"
        buttonDescription="Login"
        returnForm={false}
      >
        <Input {...register("email")} type="email" placeholder="E-mail" />
        {errors.email && <p>{errors.email.message}</p>}
        <Input {...register("password")} type="password" placeholder="Senha" />
        {errors.password && <p>{errors.password.message}</p>}
        <HelperContainer>
          <label>
            <input
              checked={rememberEmail}
              type="checkbox"
              onChange={(e) => setRememberEmail(e.target.checked)}
            />
            Lembrar Usuário
          </label>
          <a>Esqueci minha senha?</a>
        </HelperContainer>
        <CreateAccountContainer>
          <label onClick={handleShow}>Criar Conta</label>
        </CreateAccountContainer>
      </FormLayout>

      <Modal show={show} animation={false}>
        <Modal.Body>
          <ProfessionalCreate />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;
