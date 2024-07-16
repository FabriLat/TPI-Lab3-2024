import { Card, Container, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import { useContext } from "react";
import { UserContext } from "../services/authentication/user.context";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";
import ModalToBuy from "./modalToBuy/ModalToBuy";
import {  useNavigate } from "react-router-dom";

const MoviesDashboard = ({ movies, onSelectMovie }) => {
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false);
  const { user } = useContext(UserContext);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);




  const getMovieHandle = (movie) => {
    onSelectMovie(movie)
    navigate(`/movie/${movie.id}`)
  };

  return (
    <>
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-wrap">
          <h1 className="align-items-center text-center m-4">Cartelera</h1>
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
                      <Button variant="success" onClick={() => getMovieHandle(movie)}>
                        Comprar entrada
                      </Button>
                      <ModalToBuy
                        show={modalShow}
                        handleClose={handleModalClose}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </>
  );
};

export default MoviesDashboard;

MoviesDashboard.propTypes = {
  initialMovies: PropTypes.array,
};
