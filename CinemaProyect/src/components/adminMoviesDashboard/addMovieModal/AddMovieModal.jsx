import { Modal, Form, Button, FormGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const AddMovieModal = ({ show, onHide, addMovieHandler, nextId }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [runTime, setRunTime] = useState("");
  const [description, setDescription] = useState("");
  const [shows, setShows] = useState([]);
  const [showDetails, setShowDetails] = useState({ time: "" });

  const changeTitleHandler = (event) => setTitle(event.target.value);
  const changeImageHandler = (event) => setImage(event.target.value);
  const changeRunTimeHandler = (event) => setRunTime(event.target.value);
  const changeDescriptionHandler = (event) => setDescription(event.target.value);
  const changeRatingHandler = (event) => setRating(event.target.value);

  const handleShowDetailChange = (event) => {
    setShowDetails({ ...showDetails, [event.target.name]: event.target.value });
  };

  const addShow = () => {
    if (!showDetails.time) return; 

    const newShow = {
      showId: shows.length + 1,
      movie: title,
      time: showDetails.time,
    };
    setShows([...shows, newShow]);
    setShowDetails({ time: "" }); 
  };

  const handleSubmit = () => {
    const newMovie = {
      id: nextId,
      title,
      image,
      rating: parseFloat(rating),
      runTime: parseInt(runTime, 10),
      shows,
      description,
    };

    addMovieHandler(newMovie);
    setTitle("");
    setImage("");
    setRunTime("");
    setRating("");
    setShows([]);
    setDescription("");
    onHide();
    setTimeout(() => {
      alert("Se registró la película exitosamente!!");
    }, 200);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>Agregar nueva película</Modal.Title>
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
            <Form.Label style={{ color: "black" }}>Duración</Form.Label>
            <Form.Control
              type="text"
              onChange={changeRunTimeHandler}
              value={runTime}
              style={{ color: "black" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Imagen</Form.Label>
            <Form.Control
              type="text"
              onChange={changeImageHandler}
              value={image}
              style={{ color: "black" }}
            />
          </Form.Group>
          <FormGroup className="mb-3">
            <Form.Label style={{ color: "black" }}>Descripción</Form.Label>
            <Form.Control
              type="text"
              onChange={changeDescriptionHandler}
              value={description}
              style={{ color: "black" }}
            />
          </FormGroup>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Rating</Form.Label>
            <Form.Control
              type="number"
              onChange={changeRatingHandler}
              value={rating}
              style={{ color: "black" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Funciones</Form.Label>
            <Form.Control
              type="time"
              name="time"
              onChange={handleShowDetailChange}
              value={showDetails.time}
              style={{ color: "black" }}
            />
            <Button onClick={addShow} variant="primary" className="mt-2">
              Agregar Función
            </Button>
            <ul style={{color: "black"}} className="mt-2">
              {shows.map((show) => (
                <li key={show.showId}>{`ID: ${show.showId}, Hora: ${show.time}`}</li>
              ))}
            </ul>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="success">
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddMovieModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  addMovieHandler: PropTypes.func.isRequired,
  nextId: PropTypes.number.isRequired,
};

export default AddMovieModal;
