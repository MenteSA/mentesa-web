import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Multiselect from "multiselect-react-dropdown";

const ScheduleCreate: React.FC = () => {
  return (
    <Form className="container mt-3 mb-3">
      <Row className="mb-3">
        <Form.Group controlId="ControlInputDate" className="col col-sm-6">
          <Form.Label>Data do agendamento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Data do agendamento"
            autoFocus
          />
        </Form.Group>
        <Form.Group controlId="ControlInputName" className="col col-sm-6">
          <Form.Label>Status</Form.Label>
          <Form.Select>
            <option>Pendente</option>
            <option>Cancelado</option>
            <option>Confirmado</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="ControlInputName" className="col col-sm-6">
          <Form.Label>Local</Form.Label>
          <Form.Select>
            <option>Online</option>
            <option>Presencial</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="ControlInputType" className="col col-sm-6">
          <Form.Label>Tipo</Form.Label>
          <Form.Select>
            <option value="1">Individual</option>
            <option value="2">Casal</option>
            <option value="3">Em Grupo</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="ControlInputPatient" className="col col-sm-12">
          <Form.Label>Pacientes</Form.Label>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={[
              {
                cat: "Group 1",
                key: "Option 1",
              },
              {
                cat: "Group 1",
                key: "Option 2",
              },
              {
                cat: "Group 1",
                key: "Option 3",
              },
              {
                cat: "Group 2",
                key: "Option 4",
              },
              {
                cat: "Group 2",
                key: "Option 5",
              },
              {
                cat: "Group 2",
                key: "Option 6",
              },
              {
                cat: "Group 2",
                key: "Option 7",
              },
            ]}
            showCheckbox
            selectionLimit={1}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default ScheduleCreate;
