import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faEdit,
  faTrashCan,
  faMagnifyingGlassArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table, Row, Col, Form } from 'react-bootstrap';
import { useScheduleList } from '../../services/Schedulling/hooks';
import ScheduleCreate from './create/index';
import { IScheduleDto } from '../../services/Schedulling/dtos/auth.dto';

const Schedule: React.FC = () => {
  const [show, setShow] = useState(false);

  const [schedules, setSchedules] = useState<IScheduleDto[]>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data } = useScheduleList();

  useEffect(() => {
    if (Array.isArray(data)) {
      setSchedules(data);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="table-wrapper">
            <Table className="table-title">
              <Row>
                <Col sm={12}>
                  <h4 style={{ color: '#666666', fontSize: 32 }}>
                    Meus Agendamentos
                  </h4>
                </Col>
                <Col sm={6}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Pesquisar"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
                    </Button>
                  </Form>
                </Col>
                <Col sm={6} my={2}>
                  <Button
                    className="btn btn-success float-right"
                    onClick={handleShow}
                    style={{
                      display: 'block',
                      margin: 'auto',
                      marginRight: 3,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '12px 32px',
                      gap: '16px',
                      width: 200,
                      height: 43,
                      background: '#6813D5',
                      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
                      borderRadius: '5px',
                    }}
                  >
                    <FontAwesomeIcon icon={faPlusSquare} />
                    Novo
                  </Button>
                </Col>
              </Row>
            </Table>

            <Table className="table table-striped table-hover">
              <thead style={{ background: '#6813D5' }}>
                <tr>
                  <th style={{ color: '#fff' }}>Data</th>
                  <th style={{ color: '#fff' }}>Status</th>
                  <th style={{ color: '#fff' }}>Local</th>
                  <th style={{ color: '#fff' }}>Tipo</th>
                  <th style={{ color: '#fff' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {schedules?.map((row, index) => {
                  <tr key={index}>
                    <td>
                      <strong>{row.sessionDate}</strong>
                    </td>
                    <td>
                      <strong>{row.status}</strong>
                    </td>
                    <td>
                      <strong>{row.scheduleType}</strong>
                    </td>
                    <td>
                      <strong>{row.type}</strong>
                    </td>
                    <td>
                      <Button
                        onClick={handleShow}
                        style={{ marginLeft: 12, backgroundColor: '#6813D5' }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button variant="danger" style={{ marginLeft: 12 }}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </td>
                  </tr>;
                })}
              </tbody>
            </Table>

            <Modal show={show}>
              <Modal.Header>
                <Modal.Title>Cadastrar Sessão</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ScheduleCreate />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
