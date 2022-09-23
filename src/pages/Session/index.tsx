import { useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faEdit,
  faTrashCan,
  faBackward,
  faMagnifyingGlassArrowRight,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Table, Row, Col, Form } from "react-bootstrap";
import SessionCreate from "./create/index";
import { useSessionList } from "../../services/Session/hooks";
import { ISessionDto } from "../../services/Session/dtos/Session.dto";

const Session: React.FC = () => {
  const [show, setShow] = useState(false);
  const [sessionList, setSessionList] = useState<ISessionDto[]>([]);

  const { data } = useSessionList();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useLayoutEffect(() => {
    data?.data.session!.map((session: ISessionDto) => {
      console.log(session);
    });
  }, []);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="table-wrapper">
            <Table className="table-title">
              <Row>
                <Col sm={12}>
                  <h4 style={{ color: "#666666", fontSize: 32 }}>
                    Minhas sessões
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
                      display: "block",
                      margin: "auto",
                      marginRight: 3,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px 32px",
                      gap: "16px",
                      width: 200,
                      height: 43,
                      background: "#6813D5",
                      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span style={{ marginLeft: 6 }}>Nova Sessão</span>
                  </Button>
                </Col>
              </Row>
            </Table>

            <div style={{ float: "right", marginBottom: 6 }}>
              <Button variant="outline-primary" style={{ marginRight: 12 }}>
                <FontAwesomeIcon icon={faBackward} />
                <span style={{ marginLeft: 6 }}>Anterior</span>
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon
                  icon={faForward}
                  style={{ float: "right", marginTop: 3 }}
                />
                <span style={{ marginRight: 6 }}>Seguinte</span>
              </Button>
            </div>

            <Table className="table table-striped table-hover">
              <thead style={{ background: "#6813D5" }}>
                <tr>
                  <th style={{ color: "#fff" }}>Paciente</th>
                  <th style={{ color: "#fff" }}>Agendamento</th>
                  <th style={{ color: "#fff" }}>Tema Abordado</th>
                  <th style={{ color: "#fff" }}>Duração</th>
                  <th style={{ color: "#fff" }}>Tipo de sessão</th>
                  <th style={{ color: "#fff" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <Button
                      onClick={handleShow}
                      style={{ marginLeft: 12, backgroundColor: "#6813D5" }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="danger" style={{ marginLeft: 12 }}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Modal show={show}>
              <Modal.Header>
                <Modal.Title>Cadastrar Sessão</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SessionCreate />
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

export default Session;
