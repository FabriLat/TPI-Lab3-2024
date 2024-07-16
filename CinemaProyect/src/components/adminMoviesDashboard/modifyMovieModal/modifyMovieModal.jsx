// ModifyMovieModal.js
import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ModifyMovieModal = ({ show, onHide, modifyMovieHandler, movie }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [shows, setShows] = useState("");
  const [rating, setRating] = useState("");
  const [runTime, setRunTime] = useState("");

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setImage(movie.image);
      setShows(movie.shows);
      setRating(movie.rating.toString());
      setRunTime(movie.runTime.toString());
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

  const changeShowsHandler = (event) => {
    setShows(event.target.value);
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
      shows: shows,
    };

    modifyMovieHandler(updatedMovie);
    onHide();
    setTimeout(() => {
      alert("Se actualizó la pelicula exitosamente!!");
    }, 200);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>Modificar Película</Modal.Title>
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
            <Form.Label style={{ color: "black" }}>URL de la Imagen</Form.Label>
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
            <Form.Label style={{ color: "black" }}>Horarios</Form.Label>
            <Form.Control
              type="text"
              onChange={changeShowsHandler}
              value={shows}
              style={{ color: "black" }}
            />
          </Form.Group>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModifyMovieModal.propTypes = {
  show: PropTypes.bool.is,
};

export default ModifyMovieModal;
