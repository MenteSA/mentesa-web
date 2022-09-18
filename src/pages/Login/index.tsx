import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
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

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [rememberPassword, setRememberPassword] = useState(false);
  const { isAuthenticated } = useAuth();
  const { setAuthenticatedUser, saveEmail, getEmail } = useUser();

  const {
    register,
    handleSubmit,
    setError,
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
          if (isAuthenticated()) {
            setAuthenticatedUser(login);
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
