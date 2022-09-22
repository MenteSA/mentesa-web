import react, { useEffect, useState } from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useMutation } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { useFetchProfessionalProfile } from '../../services/Professional/hooks';
import { fetchProfessionalProfileUpdate } from '../../services/Professional/service';
import { ProfessionalProfileDto } from '../../services/Professional/dtos/Professional';
import { useUser } from "../../context/user.context";

const Professional: React.FC = () => {
    const { isAdmin, authenticatedUser } = useUser();
    const [ profile, setProfile ] = useState<ProfessionalProfileDto>({})
    const { data } = useFetchProfessionalProfile();
    useEffect( () => {
        if (data) {
            setProfile({
                name: data.data.professional.name,
                crp: data.data.professional.crp,
                approach: data.data.professional.approach,
                email: data.data.professional.email,
                cellphone: data.data.professional.cellphone,
            });
        } 
    },[data]);

    const { mutate } = useMutation( 
        () => fetchProfessionalProfileUpdate(authenticatedUser.id, {
                name: profile.name,
                crp: profile.crp,
                approach: profile.approach,
                email: profile.email,
                cellphone: profile.cellphone,
            }), {
            onSuccess: (res) => {
                toast.success('Perfil atualizado com sucesso!');
            },
            onError: (msg: any) => {
                toast.error(`Ocorreu um erro: ${msg}`);
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
                <Form.Label>CRP</Form.Label>
                <Form.Control type="text" value={ profile.crp || ""} onChange={ e => setProfile({ ...profile, crp: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Abordagem</Form.Label>
                <Form.Control type="text" value={ profile.approach || ""} onChange={ e => setProfile({ ...profile, approach: e.target.value }) }/>
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

export default Professional;
