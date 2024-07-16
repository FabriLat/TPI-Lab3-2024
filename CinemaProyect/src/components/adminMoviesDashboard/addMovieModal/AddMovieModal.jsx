import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddMovieModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [shows, setShows] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeImageHandler = (event) => {
    setImage(event.target.value);
  };

  const changeShowsHandler = (event) => {
    setShows(event.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                onChange={changeTitleHandler}
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                onChange={changeImageHandler}
                value={image}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Funciones</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                onChange={changeShowsHandler}
                value={shows}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Cancelar</Button>
          <Button variant="success">Agregar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddMovieModal;
