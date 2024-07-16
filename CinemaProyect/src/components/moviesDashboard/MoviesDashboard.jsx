import { Card, Container, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import { useContext } from "react";
import { UserContext } from "../services/authentication/user.context";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";
import ModalToBuy from "./modalToBuy/ModalToBuy";

const MoviesDashboard = ({ movies }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

<<<<<<< Updated upstream
const MoviesDashboard = ({ movies }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && user.type === "client" ? (
      <ClientNavBar />
    ) : user && user.type === "admin" ? (
      <AdminNavBar />
    ) : (
      <NavBar />
    )}
=======
  return (
    <>
      <NavBar />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                      <Button variant="success">Comprar entrada</Button>
=======
                      <Button variant="success" onClick={handleModalShow}>
                        Comprar entrada
                      </Button>
                      <ModalToBuy
                        show={modalShow}
                        handleClose={handleModalClose}
                      />
>>>>>>> Stashed changes
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
