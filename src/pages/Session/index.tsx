import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faEdit, faTrashCan, faEyeLowVision, faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Table, Row, Col, Form  } from 'react-bootstrap';
import SessionCreate from "./create/index";



const Session: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                Novo Paciente
                                </Button> 
                            </Col>
                        </Row>
                    </Table>

                    <Table  className='table table-striped table-hover'>
                    <thead style={{background: '#6813D5'}}>
                        <tr>
                        <th style={{color: '#fff'}}>Paciente</th>
                        <th style={{color: '#fff'}}>Agendamento</th>
                        <th style={{color: '#fff'}}>Tema Abordado</th>
                        <th style={{color: '#fff'}}>Duração</th>
                        <th style={{color: '#fff'}}>Tipo de sessão</th>
                        <th style={{color: '#fff'}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td>
                            <a 
                                href='' 
                                data-toggle='modal'
                            >
                                <FontAwesomeIcon 
                                    style={{color: '#00A3FF'}}
                                    icon={ faEyeLowVision } 
                                    data-toggle='tooltip' 
                                    title='View'
                                />
                            </a>
                            <a 
                                href='' 
                                data-toggle='modal'
                            >
                                <FontAwesomeIcon 
                                    style={{marginLeft: 12, color: '#6813D5'}}
                                    icon={ faEdit } 
                                    data-toggle='tooltip' 
                                    title='Edit'
                                />
                            </a>
                            <a 
                                href='' 
                                data-toggle='modal'
                            >
                                <FontAwesomeIcon 
                                    style={{marginLeft: 12, color: '#F44336'}}
                                    icon={ faTrashCan } 
                                    data-toggle='tooltip' 
                                    title='Delete'
                                />
                            </a>
                        </td>
                        </tr>
                        
                    </tbody>
                    </Table >          
                            
                    <Modal show={show}>
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