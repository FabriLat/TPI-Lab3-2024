// ModifyMovieModal.js
import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ModifyMovieModal = ({ show, onHide, modifyMovieHandler, movie }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [runTime, setRunTime] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setImage(movie.image);
      setRating(movie.rating.toString());
      setRunTime(movie.runTime.toString());
      setDescription(movie.description);
    }
  }, [movie]);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeImageHandler = (event) => {
    setImage(event.target.value);
  };

  const changeRunTimeHandler = (event) => {
    setRunTime(event.target.value);
  };

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const changeRatingHandler = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    const updatedMovie = {
      id: movie.id,
      title: title,
      image: image,
      rating: parseFloat(rating),
      runTime: parseInt(runTime, 10),
      description: description
    };

    modifyMovieHandler(updatedMovie);
    onHide();
    setTimeout(() => {
      alert("Se actualizó la pelicula exitosamente!!");
    }, 200);
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>
            Modificar Película
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
              <Form.Label style={{ color: "black" }}>
                URL de la Imagen
              </Form.Label>
              <Form.Control
                type="text"
                onChange={changeImageHandler}
                value={image}
                style={{ color: "black" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>
                Duración (minutos)
              </Form.Label>
              <Form.Control
                type="number"
                onChange={changeRunTimeHandler}
                value={runTime}
                style={{ color: "black" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Descripción</Form.Label>
              <Form.Control
                type="text"
                onChange={changeDescriptionHandler}
                value={description}
                style={{ color: "black" }}
              />
            </Form.Group>
          </Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Rating</Form.Label>
            <Form.Control
              type="number"
              step="0.1"
              min="0"
              max="5"
              onChange={changeRatingHandler}
              value={rating}
              style={{ color: "black" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModifyMovieModal.propTypes = {
  show: PropTypes.bool,
};

export default ModifyMovieModal;
