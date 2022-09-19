import { Button, Table, Row, Col, Form  } from 'react-bootstrap';

const Professional: React.FC = () => {

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <Row className='mt-4'>
            <Col sm={12}>
            <h4 style={{color:'#666666', fontSize: 32}}>Meus Dados</h4>
            </Col>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CRP</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Abordagem</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" />
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
