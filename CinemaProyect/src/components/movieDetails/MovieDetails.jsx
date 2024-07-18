import { Container, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";
import { UserContext } from "../../services/authentication/user.context";

const MovieDetails = ({movies}) => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const { title, image, rating, runTime, description } =
  location.state && location.state.movie ? location.state.movie : {};


  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const { user } = useContext(UserContext);

  const selectedMovie = title;

  return (
    <>
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
      <Container fluid style={{ maxWidth: "80%", marginTop: "20px" }}>
        <Row>
          <Col md={4} className="text-center mb-3">
            <img
              src={image}
              style={{ maxWidth: "100%", height: "auto" }}
              alt={title}
            />
            <h1 className="mt-3">{title}</h1>
            <p>Rating: {rating} / 5</p>
            <p>Duración: {runTime} mins</p>
          </Col>
          <Col md={8} className="mt-5"> {/* Añadido un margen top adicional */}
            <p
              style={{
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {description}
            </p>
            <Button
              variant="success"
              onClick={handleModalShow}
              className="float-end mt-3"
            >
              Comprar entrada
            </Button>
          </Col>
        </Row>
      </Container>

      <ModalToBuy selectedMovie={selectedMovie} movies={movies} show={modalShow} handleClose={handleModalClose} />
    </>
  );
};

export default MovieDetails;
