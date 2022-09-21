import react, { useEffect, useState } from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useMutation } from '@tanstack/react-query';
import { useFetchProfessionalProfile } from '../../services/Professional/hooks';
import { ProfessionalProfileDto } from '../../services/Professional/dtos/Professional';


const Professional: React.FC = () => {
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
                <Form.Control type="text" value={ profile.name } onChange={ e => setProfile({ ...profile, name: e.target.value }) } />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CRP</Form.Label>
                <Form.Control type="text" value={ profile.crp } onChange={ e => setProfile({ ...profile, name: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Abordagem</Form.Label>
                <Form.Control type="text" value={ profile.approach } onChange={ e => setProfile({ ...profile, name: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" value={ profile.email } onChange={ e => setProfile({ ...profile, name: e.target.value }) }/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" value={ profile.cellphone } onChange={ e => setProfile({ ...profile, name: e.target.value }) }/>
              </Form.Group>
              <Button variant="outline-success" type="submit">
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
