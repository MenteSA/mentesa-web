import react, { useState } from "react";
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import FormLayoutPatient from "../../../components/FormLayout/patient";
import { Input } from "./style";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchPatientCreate } from '../../../services/Patient/service';
import { toast } from "react-toastify";
import { PatientProfileDto } from '../../services/Patient/dtos/Patient.dto';

type CloseModal = () => void;
type updateList = (patient: PatientProfileDto) => void;

interface IModalProps {
    close: CloseModal;
    isOpen: boolean;
}
const selectStyle = { 
    marginTop: "10px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid",
    padding: "10px",
}

const PatientCreate: React.FC<IModalProps> = ({close, isOpen }: IModalProps) => {

  const [nome, setNome] = useState("");
  const [dateNasc, setDateNasc] = useState("");
  const [cpf, setCPF] = useState("");
  const [genero, setGenero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation( 
        () => {
            const [day, month, year] = dateNasc.split('/');
            const birthDate = new Date(+year, +month-1, +day);
            return fetchPatientCreate({
                name: nome,
                cpf: cpf,
                birthDate: birthDate,
                email: email,
                cellphone: telefone,
                gender: genero,
                active: true,
            })
            }, {
            onSuccess: (res) => {
                toast.success('Paciente cadastrado com sucesso!');
                queryClient.invalidateQueries(['patientList']);
                close();
            },
            onError: (msg: any) => {
                toast.error(`Ocorreu um erro: ${msg.response.data.message}`);
            }
        }
    );
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
        mutate();
    } else {
        toast.error('Todos os campos devem ser preenchidos');
    }

  };

  return (
  <Modal show={isOpen} onHide={close}>
    <Modal.Header closeButton> 
        <Modal.Title>Novo recurso</Modal.Title>
    </Modal.Header> 
    <Modal.Body>
        <FormLayoutPatient 
          handleSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Data de nascimento dd/mm/aaaa"
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
         <select style={selectStyle}
            onChange={(e) => {
              setGenero(e.target.value);
            }}>
                <option value="">Selecione</option>
                <option value="FEMININE">Feminino</option>
                <option value="MASCULINE">Masculino</option>
                <option value="OTHERS">Outros</option>
          </select>
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
     </Modal.Body>
      <Modal.Footer>
            <Button variant="danger" onClick={close}>Cancelar</Button>
            <Button onClick={handleSubmit}>Salvar</Button>
      </Modal.Footer>    
    </Modal>
  );
};

export default PatientCreate;
