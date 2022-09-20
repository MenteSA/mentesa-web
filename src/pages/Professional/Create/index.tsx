import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormLayout from "../../../components/FormLayout";
import {
  IUserRegisterDto,
  IUserRegisterResponseDto,
} from "../../../services/User/dtos/user.dto";
import { fetchRegisterUser } from "../../../services/User/service";
import { HelperContainer, Input } from "./style";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const ProfessionalCreate: React.FC = () => {
  const [termsAccept, setTermsAccept] = useState(false);

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

    if (data.password !== data.passwordConfirmation) {
      setError("password", { message: "Senhas não estão iguais" });
      setError("passwordConfirmation", { message: "Senhas não estão iguais" });

      toast.error("Por favor, verifique as senhas. ");
      return;
    }

    if (data.name.length < 5) {
      setError("name", { message: "Campo obrigatório." });

      toast.error("Por favor, verifique o nome. ");
      return;
    }

    if (data.email.length < 5) {
      setError("email", { message: "Campo obrigatório." });

      toast.error("Por favor, verifique o e-mail. ");
      return;
    }

    if (!termsAccept) {
      toast.error("Necessário aceitar os termos de uso. ");
      return;
    }

    if (data.password === data.passwordConfirmation && termsAccept) {
      mutate(data);
    }
  });

  const navigate = useNavigate();

  const { mutate } = useMutation(
    (user: IUserRegisterDto) => fetchRegisterUser(user),
    {
      onSuccess: (data: IUserRegisterResponseDto) => {
        if (data.data.user === undefined) {
          toast.error(`Ops, ${data.message}`);
        } else {
          toast.success("Usuário registrado com sucesso", {
            hideProgressBar: false,
          });
          navigate("/");
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
      subtitle="Cadastro do profissional"
      information="Crie sua conta e comece a desfrutar do nosso sistema."
      buttonDescription="Registrar"
      returnForm={true}
    >
      <Input {...register("name")} type="text" placeholder="Nome" />
      {errors.name && <p>{errors.name.message}</p>}
      <Input {...register("email")} type="email" placeholder="E-mail" />
      {errors.email && <p>{errors.email.message}</p>}
      <Input {...register("password")} type="password" placeholder="Senha" />
      {errors.password && <p>{errors.password.message}</p>}
      <Input
        {...register("passwordConfirmation")}
        type="password"
        placeholder="Confirme sua senha"
      />
      {errors.passwordConfirmation && (
        <p>{errors.passwordConfirmation.message}</p>
      )}
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
