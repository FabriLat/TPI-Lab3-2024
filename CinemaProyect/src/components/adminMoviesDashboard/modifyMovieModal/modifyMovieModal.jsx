import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ModifyMovieModal = ({ show, onHide, movie }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [shows, setShows] = useState("");

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setImage(movie.image);
      setShows(movie.runTime);
    }
  }, [movie]);

  const changeTitleHandler = (event) => setTitle(event.target.value);
  const changeImageHandler = (event) => setImage(event.target.value);
  const changeShowsHandler = (event) => setShows(event.target.value);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>Modificar película</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movie ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label    style={{ color: "black" }}>Título</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={changeTitleHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label    style={{ color: "black" }}>Imagen</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                onChange={changeImageHandler}
                value={image}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label    style={{ color: "black" }}>Funciones</Form.Label>
              <Form.Control
                onChange={changeShowsHandler}
                type="text"
                rows={3}
                value={shows}
              />
            </Form.Group>
          </Form>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success">Modificar</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModifyMovieModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default ModifyMovieModal;
``
