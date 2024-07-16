import { useState } from "react";
import { Card, Container, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import ModifyMovieModal from "./modifyMovieModal/modifyMovieModal";
import DeleteMovieModal from "./deleteMovieModal/DeleteMovieModal";
import AddMovieModal from "./addMovieModal/AddMovieModal"; // Importa tu componente de agregar película

const AdminMoviesDashboard = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // Estado para manejar la visibilidad del modal de agregar

  const handleOpenModifyModal = (movie) => {
    setSelectedMovie(movie);
    setShowModifyModal(true);
  };

  const handleCloseModifyModal = () => {
    setSelectedMovie(null);
    setShowModifyModal(false);
  };

  const handleOpenDeleteModal = (movie) => {
    setSelectedMovie(movie);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedMovie(null);
    setShowDeleteModal(false);
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <>
      <AdminNavBar />
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-wrap">
          <h1 className="align-items-center text-center m-4">Cartelera</h1>
          <Button
            variant="success"
            className="mb-4"
            onClick={handleOpenAddModal}
          >
            Agregar Nueva Película
          </Button>
          {movies.length > 0
            ? movies.map((movie) => (
                <Col
                  key={movie.id}
                  s={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4"
                >
                  <Card key={movie.id}>
                    <Card.Img
                      style={{ height: "350px", objectFit: "cover" }}
                      variant="top"
                      src={movie.image}
                    />
                    <Card.Body style={{ backgroundColor: "black" }}>
                      <Card.Title
                        style={{ color: "white", backgroundColor: "black" }}
                      >
                        {movie.title}
                      </Card.Title>
                      <Card.Text
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Duración: {movie.runTime} min
                      </Card.Text>
                      <Card.Text
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Rating: {movie.rating} / 5
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="m-1"
                        onClick={() => handleOpenModifyModal(movie)}
                      >
                        Modificar
                      </Button>
                      <Button
                        variant="danger"
                        className="m-1"
                        onClick={() => handleOpenDeleteModal(movie)}
                      >
                        Eliminar
                      </Button>
                      <Button variant="success" className="m-1">
                        Comprar entrada
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>

      <ModifyMovieModal
        show={showModifyModal}
        onHide={handleCloseModifyModal}
        movie={selectedMovie}
      />
      <DeleteMovieModal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        movie={selectedMovie}
      />
      <AddMovieModal show={showAddModal} onHide={handleCloseAddModal} />
    </>
  );
};

AdminMoviesDashboard.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default AdminMoviesDashboard;
