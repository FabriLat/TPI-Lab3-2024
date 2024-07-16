import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const AddMovieModal = ({ show, onHide }) => {
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
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>
          Agregar nueva película
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Título</Form.Label>
            <Form.Control
              type="text"
              onChange={changeTitleHandler}
              value={title}
              style={{ color: "black" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Imagen</Form.Label>
            <Form.Control
              type="text"
              rows={3}
              onChange={changeImageHandler}
              value={image}
              style={{ color: "black" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Funciones</Form.Label>
            <Form.Control
              type="text"
              rows={3}
              onChange={changeShowsHandler}
              value={shows}
              style={{ color: "black" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success">Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddMovieModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default AddMovieModal;
