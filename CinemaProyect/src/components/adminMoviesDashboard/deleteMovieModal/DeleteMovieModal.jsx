import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteMovieModal = ({ show, onHide, movie }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>Eliminar película</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "black" }}>
        {movie ? (
          <p>¿Estás seguro de que deseas eliminar {movie.title}?</p>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success">Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteMovieModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default DeleteMovieModal;
