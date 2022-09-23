import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchPatientList as useFetchPatients } from '../../../services/Patient/hooks';

interface IScheduleProps {
  id?: number;
}

interface InputValues {}

const ScheduleCreate: React.FC<IScheduleProps> = ({ id }) => {
  const [limitPatient, setLimitPatient] = useState<number>(1);

  const { data: patients } = useFetchPatients();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<InputValues>();

  const handleScheduleType = ({ target }: any) => {
    if (target.value === 'INDIVIDUAL') {
      setLimitPatient(1);
    } else if (target.value === 'COUPLE') {
      setLimitPatient(2);
    } else {
      setLimitPatient(999);
    }
  };

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
          <Form.Select disabled={id !== null || id !== undefined}>
            <option value={'PENDING'}>Pendente</option>
            <option value={'CANCELED'}>Cancelado</option>
            <option value={'REALIZED'}>Realizado</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="ControlInputName" className="col col-sm-6">
          <Form.Label>Local</Form.Label>
          <Form.Select>
            <option value={'ONLINE'}>Online</option>
            <option value={'PRESENTIAL'}>Presencial</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="ControlInputType" className="col col-sm-6">
          <Form.Label>Tipo</Form.Label>
          <Form.Select onChange={handleScheduleType}>
            <option value={'INDIVIDUAL'}>Individual</option>
            <option value={'COUPLE'}>Casal</option>
            <option value={'IN_GROUP'}>Em Grupo</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="ControlInputPatient" className="col col-sm-12">
          <Form.Label>Pacientes</Form.Label>
          <Multiselect
            displayValue="name"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={patients?.data.map(({ id, name }) => {
              return { id, name };
            })}
            showCheckbox
            selectionLimit={limitPatient}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default ScheduleCreate;
