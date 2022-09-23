import react, { useEffect, useState } from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useMutation } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { useFetchPatientProfile } from '../../services/Patient/hooks';
import { fetchPatientProfileUpdate } from '../../services/Patient/service';
import { PatientProfileDto } from '../../services/Patient/dtos/Patient';
import { useUser } from "../../context/user.context";
import formatDate from '../../utils/formatDate';

const PatientProfile: React.FC = () => {
    const { isAdmin, authenticatedUser } = useUser();
    const [ profile, setProfile ] = useState<PatientProfileDto>({})
    const { data } = useFetchPatientProfile();
    useEffect( () => {
        if (data) {
            const birthDate = data.data.patient.birthDate.replace(/T.*/,'').split('-').reverse().join('/');
            setProfile({
                name: data.data.patient.name,
                cpf: data.data.patient.cpf,
                gender: data.data.patient.gender,
                email: data.data.patient.email,
                cellphone: data.data.patient.cellphone,
                birthDate: birthDate,
            });
        } 
    },[data]);

    const { mutate } = useMutation( 
        () => {
            const [day, month, year] = profile.birthDate.split('/');
            const birthDate = new Date(+year, +month-1, +day);
            return fetchPatientProfileUpdate({
                name: profile.name,
                cpf: profile.cpf,
                birthDate: birthDate,
                email: profile.email,
                cellphone: profile.cellphone,
                gender: profile.gender
            })
            }, {
            onSuccess: (res) => {
                toast.success('Perfil atualizado com sucesso!');
            },
            onError: (msg: any) => {
                toast.error(`Ocorreu um erro: ${msg.response.data.message}`);
            }
        }
    );

    const handleSubmit = () => {
        if (Object.values(profile).every(value => value !== "")) {
            mutate();
        } else {
            toast.error("Todos os campos devem ser preenchidos. ");
        }
    };

  return ( 
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <Row className="mt-4">
            <Col sm={12}>
              <h4 style={{ color: "#666666", fontSize: 32 }}>Meus Dados</h4>
            </Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" value={ profile.name || "" } onChange={ e => setProfile({ ...profile, name: e.target.value }) } />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" value={ profile.cpf || ""} onChange={ e => setProfile({ ...profile, cpf: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="text" value={ profile.birthDate || ""} onChange={ e => setProfile({ ...profile, birthDate: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gênero</Form.Label>
                <Form.Select value={ profile.gender || ""} onChange={ e => setProfile({ ...profile, gender: e.target.value }) }>
                    <option value="FEMININE">Feminino</option>
                    <option value="MASCULINE">Masculino</option>
                    <option value="OTHERS">Outros</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" value={ profile.email || ""} onChange={ e => setProfile({ ...profile, email: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" value={ profile.cellphone || ""} onChange={ e => setProfile({ ...profile, cellphone: e.target.value }) }/>
              </Form.Group>
              <Button variant="outline-success" onClick={handleSubmit}>
                Salvar
              </Button>
            </Form>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
