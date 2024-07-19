import { Container, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";
import { UserContext } from "../../services/authentication/user.context";
import Footer from "../footer/Footer";

const MovieDetails = ({ movies }) => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const { title, image, rating, runTime, description } =
    location.state && location.state.movie ? location.state.movie : {};

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const { user } = useContext(UserContext);
  const selectedMovie = title;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
      <Container
        fluid
        style={{
          maxWidth: "80%",
          margin: "auto",
          marginTop: "20px",
          flex: "1",
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="text-center mb-3">
            <h1 className="mt-3">{title}</h1>
            <img
              src={image}
              style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
              alt={title}
            />
          </Col>
          <Col md={8} className="mt-5">
            <p style={{ fontSize: "20px", textAlign: "justify" }}>
              {description}
            </p>
            <Row >
              <Col>
                <h3>Rating: {rating} / 5</h3>
                <h3>Duración: {runTime} mins</h3>
              </Col>
              <Col className="d-flex align-items-end">
                <Button
                  variant="success"
                  onClick={handleModalShow}
                  className="ms-auto mt-3"
                >
                  Comprar entrada
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <ModalToBuy
        selectedMovie={selectedMovie}
        movies={movies}
        movieTitle={title}
        show={modalShow}
        handleClose={handleModalClose}
      />
      <Footer />
    </div>
  );
};

export default MovieDetails;
