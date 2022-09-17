import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormLayout from "../../../components/FormLayout";
import { IUserRegisterDto } from "../../../services/User/dtos/user.dto";
import { fetchRegisterUser } from "../../../services/User/service";
import { HelperContainer, Input } from "./style";
import { toast } from "react-toastify";

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "Nome é obrigatório",
          },
          email: {
            type: "required",
            message: "aa",
          },
          password: {
            types: {
              minLength: "8",
              maxLength: "10",
            },
            type: "required,minLength",
            message: "Campo obrigatório",
          },
          passwordConfirmation: {
            type: "required",
            message: "Confirmação de senha é obrigatório",
          },
        }
      : {},
  };
};

type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const ProfessionalCreate: React.FC = () => {
  const [userRegister, setUserRegister] = useState<IUserRegisterDto>(
    {} as IUserRegisterDto
  );
  const [termsAccept, setTermsAccept] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (data.password !== data.passwordConfirmation) {
      toast.error("Por favor, verifique as senhas. ");
      return;
    }

    if (data.password === data.passwordConfirmation && termsAccept) {
      mutate(data);
      //setUserRegister(data);
      console.log(userRegister);
    }
  });

  useEffect(() => {}, [userRegister]);

  const navigate = useNavigate();

  const { mutate } = useMutation(
    (user: IUserRegisterDto) =>
      fetchRegisterUser(user.name, user.email, user.password),
    {
      onSuccess: () => {
        console.log("a");
        toast.success("Usuário registrado com sucesso", {
          hideProgressBar: false,
        });
        navigate("/");
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
      {errors.name && <p>{errors.name.message}</p>}
      <Input {...register("name")} type="text" placeholder="Nome" />
      {errors.email && <p>{errors.email.message}</p>}
      <Input {...register("email")} type="email" placeholder="E-mail" />
      {errors.password && <p>{errors.password.message}</p>}
      <Input {...register("password")} type="password" placeholder="Senha" />
      {errors.passwordConfirmation && (
        <p>{errors.passwordConfirmation.message}</p>
      )}
      <Input
        {...register("passwordConfirmation")}
        type="password"
        placeholder="Confirme sua senha"
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
