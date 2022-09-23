import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faEdit, faTrashCan, faMagnifyingGlassArrowRight, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Table, Row, Col, Form  } from 'react-bootstrap';
import PatientCreate from "./create/index";
import PatientUpdate from "./update/index";
import { toast } from "react-toastify";
import { useFetchPatientList, fetchPatientList } from '../../services/Patient/hooks';
import { PatientProfileDto } from '../../services/Patient/dtos/Patient.dto';
import { fetchPatientDelete } from '../../services/Patient/service';

const gender = {
    'FEMININE': 'Feminino',
    'MASCULINE': 'Masculino',
    'OTHERS': 'Outros',
}

const Patients: React.FC = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [deleteShow, setDeleteShow] = useState({ show: false, id: 0 });
    const handleDeleteClose = () => setDeleteShow({ show: false, id: 0 });
    const handleDeleteConfirm = () => { mutate(deleteShow.id), setDeleteShow({ show: false, id: 0 });}
    const [updateShow, setUpdateShow] = useState({ show: false, id: 0 });
    const handleUpdateClose = () => setUpdateShow({ show: false, id: 0 });
    const handleUpdateConfirm = () => { mutate(updateShow.id), setUpdateShow({ show: false, id: 0 });}
    const queryClient = useQueryClient();
    

    const deletePatient = (patientId) => setDeleteShow({show: true, id: patientId });
    const updatePatient = (patientId) => setUpdateShow({show: true, id: patientId });

    const { data, isSuccess } = useFetchPatientList();
    const { mutate } = useMutation( 
        (patientId) => {
               return fetchPatientDelete(patientId);
            }, {
            onSuccess: (res) => {
                toast.success('Paciente excluído com sucesso!');
                queryClient.invalidateQueries(['patientList']);
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
                        <Table className='table-title'>
                            <Row>
                                <Col sm={12}>
                                <h4 style={{color:'#666666', fontSize: 32}}>Meus Pacientes</h4>
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
                                        <FontAwesomeIcon icon={faMagnifyingGlassArrowRight}/>
                                    </Button>
                                </Form>
                                </Col>       
                                <Col sm={6} my={2}>
                                    <Button 
                                        className='btn btn-success float-right' 
                                        onClick={handleShow}
                                        style={{
                                            display: 'block',
                                            margin: 'auto',
                                            marginRight: 3,
                                            flexDirection: 'row',
                                            justifyContent:'center',
                                            alignItems: 'center',
                                            padding: '12px 32px',
                                            gap: '16px',
                                            width: 200,
                                            height: 43,
                                            background: '#6813D5',
                                            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '5px'                                    
                                        }}
                                        >
                                        <FontAwesomeIcon icon={faPlusSquare} />
                                        <span style={{marginLeft: 6}}>Novo Paciente</span>
                                    </Button> 
                                </Col>
                            </Row>
                        </Table>
                        <div style={{float: "right", marginBottom: 6}} >
                            <Button variant="outline-primary" style={{marginRight: 12}}>
                                <FontAwesomeIcon 
                                    icon={ faBackward } 
                                /> 
                                <span style={{marginLeft: 6}}>Anterior</span>
                            </Button>
                            <Button variant="outline-secondary">     
                                <FontAwesomeIcon 
                                    icon={ faForward } 
                                    style={{float: "right", marginTop: 3}}
                                />                           
                                <span style={{marginRight: 6}}>Seguinte</span>
                            </Button>
                        </div>

                        <Table  className='table table-striped table-hover'>                            
                        <thead style={{background: '#6813D5'}}>
                            <tr>
                            <th style={{color: '#fff'}}>Nome</th>
                            <th style={{color: '#fff'}}>E-mail</th>
                            <th style={{color: '#fff'}}>Gênero</th>
                            <th style={{color: '#fff'}}>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="listTableBody">
                            { isSuccess && data.data.map((item, index) => ( 
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{gender[item.gender]}</td>
                                <td>
                                    <Button 
                                        onClick={() => { updatePatient(item.id) }}
                                        style={{marginLeft: 12, backgroundColor: '#6813D5' }}
                                    >
                                        <FontAwesomeIcon 
                                            icon={ faEdit } 
                                        />
                                    </Button>
                                    <Button onClick={() => {deletePatient(item.id)}}  
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
                        </Table >          
                        <PatientCreate close={handleClose} isOpen={show} />

                        <PatientUpdate close={handleUpdateClose} isOpen={updateShow.show} patientId={updateShow.id}/>

                        <Modal show={deleteShow.show} onHide={handleDeleteClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Confirmação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Confirma a exclusão do paciente?</Modal.Body>
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

export default Patients;
