import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faEdit,
  faTrashCan,
  faBackward,
  faMagnifyingGlassArrowRight,
  faForward,
} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table, Row, Col, Form } from 'react-bootstrap';
import ResourceCreate from './Create/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { useResourceList } from '../../services/Resource/hooks';
import { IResourceBodyDto } from '../../services/Patient/dtos/Resource.dto';
import { fetchDeleteResource } from '../../services/Resource/service';

const Resources: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteShow, setDeleteShow] = useState({ show: false, id: 0 });
  const handleDeleteClose = () => setDeleteShow({ show: false, id: 0 });
  const handleDeleteConfirm = () => { mutate(deleteShow.id), setDeleteShow({ show: false, id: 0 });}
  const queryClient = useQueryClient();
  
  const deleteResource = (resourceId) => setDeleteShow({show: true, id: resourceId });

  const { data, isSuccess } = useResourceList();

  const { mutate } = useMutation( 
        (resourceId) => {
               return fetchDeleteResource(resourceId);
            }, {
            onSuccess: (res) => {
                toast.success('Recurso excluído com sucesso!');
                queryClient.invalidateQueries(['resourceList']);
            },
            onError: (msg: any) => {
                toast.error(`Ocorreu um erro: ${msg.response.data.message}`);
            }
        }
    );
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="table-wrapper">
            <Table className="table-title">
              <Row>
                <Col sm={12}>
                  <h4 style={{ color: '#666666', fontSize: 32 }}>Recursos</h4>
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
                    <span style={{ marginLeft: 6 }}>Novo Recurso</span>
                  </Button>
                </Col>
              </Row>
            </Table>

            <div style={{ float: 'right', marginBottom: 6 }}>
              <Button variant="outline-primary" style={{ marginRight: 12 }}>
                <FontAwesomeIcon icon={faBackward} />
                <span style={{ marginLeft: 6 }}>Anterior</span>
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon
                  icon={faForward}
                  style={{ float: 'right', marginTop: 3 }}
                />
                <span style={{ marginRight: 6 }}>Seguinte</span>
              </Button>
            </div>

            <Table className="table table-striped table-hover">
              <thead style={{ background: '#6813D5' }}>
                <tr>
                  <th style={{ color: '#fff' }}>Abordagem</th>
                  <th style={{ color: '#fff' }}>Ferramenta utilizada</th>
                  <th style={{ color: '#fff' }}>Ações</th>
                </tr>
              </thead>
              <tbody>{ isSuccess && data.data.resource.map((item, index) => ( 
                    <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                        <Button 
                            style={{marginLeft: 12, backgroundColor: '#6813D5' }}
                        >
                            <FontAwesomeIcon 
                                icon={ faEdit } 
                            />
                        </Button>
                        <Button onClick={() => {deleteResource(item.id)}}  
                            variant="danger"
                            style={{marginLeft: 12}}
                        >
                            <FontAwesomeIcon 
                                icon={ faTrashCan } 
                            />
                        </Button>
                    </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>

            <ResourceCreate close={handleClose} isOpen={show} />
            <Modal show={deleteShow.show} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirma a exclusão do recurso?</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleDeleteClose}>
                    Cancelar 
                  </Button>
                  <Button variant="danger" onClick={handleDeleteConfirm}>
                    Excluir
                  </Button>
                </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
