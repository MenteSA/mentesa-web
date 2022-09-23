import { Form } from 'react-bootstrap';

const ResourceCreate: React.FC = () => {
  return (
    <Form className="mt-2">
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Abordagem" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Ferramenta utilizada"
          autoFocus
        />
      </Form.Group>
    </Form>
  );
};

export default ResourceCreate;
