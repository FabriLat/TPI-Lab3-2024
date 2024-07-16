import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

const DeleteMovieModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>¿Desea eliminar la película?</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Cancelar</Button>
          <Button variant="danger">Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteMovieModal;
