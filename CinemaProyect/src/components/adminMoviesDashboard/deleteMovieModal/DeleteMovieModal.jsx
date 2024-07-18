// DeleteMovieModal.js
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteMovieModal = ({ show, onHide, deleteMovieHandler, movie }) => {
 
  const handleDelete = () => {
    if (movie && movie.id) {
      deleteMovieHandler(movie.id);
      onHide();
      setTimeout(() => {
        alert("Se eliminó la película exitosamente!!");
      }, 200);
    }
  };
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>Eliminar Película</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movie ? (
          <p style={{ color: "black" }}>
            ¿Estás seguro que querés eliminar la película{" "}
            <strong>{movie.title}</strong>?
          </p>
        ) : (
          <p>Seleccioná una película para eliminar.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete} disabled={!movie}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteMovieModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  deleteMovieHandler: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default DeleteMovieModal;
