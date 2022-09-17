import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayoutPatient from "../../../components/FormLayout/patient";
import { HelperContainer, Input } from "./style";

const PatientCreate: React.FC = () => {
  const [nome, setNome] = useState("");
  const [dateNasc, setDateNasc] = useState("");
  const [cpf, setCPF] = useState("");
  const [genero, setGenero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nome !== "" &&
      dateNasc !== "" &&
      cpf !== "" &&
      genero !== "" &&
      endereco !== "" &&     
      email !== "" &&
      telefone !== ""

    ) {
      navigate("/patients");
    }
  };

  return (
    <FormLayoutPatient
      handleSubmit={handleSubmit}
      title="Mente Sã"
      subtitle="Cadastro de paciente"
      information=""
    >
      <Input
        type="text"
        placeholder="Nome"
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <Input
        type="date"
        placeholder="dateNasc"
        onChange={(e) => {
          setDateNasc(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="CPF"
        onChange={(e) => {
          setCPF(e.target.value);
        }}
      />
     <Input
        type="genero"
        placeholder="Genero"
        onChange={(e) => {
          setGenero(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="endereco"
        onChange={(e) => {
          setEndereco(e.target.value);
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
        type="phone"
        placeholder="Telefone"
        onChange={(e) => {
          setTelefone(e.target.value);
        }}
      />
    </FormLayoutPatient>
  );
};

export default PatientCreate;
