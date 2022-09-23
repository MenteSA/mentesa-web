import { Form } from "react-bootstrap";

const SessionCreate: React.FC = () => {
  return (
    <Form className="mt-2">
      <Form.Group className="mb-3" controlId="ControlInputName">
        <Form.Select>
          <option>Pacientes</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInputDate">
        <Form.Control type="date" placeholder="Data do agendamento" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInputEmail">
        <Form.Control type="text" placeholder="Tema Abordado" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInputDuration">
        <Form.Control type="time" placeholder="Duração" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInputTypeSession">
        <Form.Select>
          <option>Tipo da sessão</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default SessionCreate;
