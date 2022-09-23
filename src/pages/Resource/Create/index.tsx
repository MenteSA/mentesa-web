import react, { useState } from "react";
import { Form, Modal, Button } from 'react-bootstrap';
import { useQueryClient } from '@tanstack/react-query'
import { toast } from "react-toastify";
import { useMutation } from '@tanstack/react-query';
import { fetchAddResource } from '../../../services/Resource/service';

type CloseModal = () => void;

interface IModalProps {
    close: CloseModal;
    isOpen: boolean;
}

const ResourceCreate: React.FC<IModalProps> = ({close, isOpen }: IModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const queryClient = useQueryClient();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      title !== "" &&
      category !== "" 
    ) {
        mutate();
    } else {
        toast.error('Todos os campos devem ser preenchidos');
    }
  };

  const { mutate } = useMutation( 
        () => {
            return fetchAddResource({
                title,
                category,
            })
            }, {
            onSuccess: (res) => {
                toast.success('Recurso cadastrado com sucesso!');
                queryClient.invalidateQueries(['resourceList']);
                close();
            },
            onError: (msg: any) => {
                toast.error(`Ocorreu um erro: ${msg.response.data.message}`);
            }
        }
    );

  return (<Modal show={isOpen} onHide={close}>
    <Modal.Header closeButton> 
      <Modal.Title>Novo recurso</Modal.Title>
    </Modal.Header> 
    <Modal.Body>
        <Form className="mt-2">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Abordagem" autoFocus 
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ferramenta utilizada"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
    </Modal.Body>
      <Modal.Footer>
            <Button variant="danger" onClick={close}>Cancelar</Button>
            <Button onClick={handleSubmit}>Salvar</Button>
      </Modal.Footer>    
    </Modal>

  );
};

export default ResourceCreate;
